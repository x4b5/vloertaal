"""Generate Dutch speech with Piper (free, open-source, runs offline in CI).

audition: every Dutch Piper voice (and a few speakers of multi-speaker voices)
          says one test sentence -> docs/stemproef/piper/*.mp3 + index.md
all:      the chosen voices (scripts/voices/chosen.json) say every clip in
          public/audio/clips.json -> public/audio/<key>/<id>.mp3 + voices.json
"""
import argparse
import json
import subprocess
import sys
import urllib.request
import wave
from pathlib import Path

from piper import PiperVoice, SynthesisConfig
from piper.download_voices import download_voice

VOICES_JSON = "https://huggingface.co/rhasspy/piper-voices/resolve/main/voices.json?download=true"
SAMPLE = "Goedemorgen! Draag altijd je helm. Wil je koffie of thee?"
MODELS = Path("piper-models")
MAX_SPEAKERS = 8  # audition only the first speakers of big multi-speaker voices


def dutch_voices() -> dict:
    with urllib.request.urlopen(VOICES_JSON) as r:
        voices = json.load(r)
    return {k: v for k, v in voices.items() if v["language"]["family"] == "nl"}


def load(name: str) -> PiperVoice:
    MODELS.mkdir(exist_ok=True)
    model = MODELS / f"{name}.onnx"
    if not model.exists():
        download_voice(name, MODELS)
    return PiperVoice.load(model)


def to_mp3(voice: PiperVoice, text: str, out: Path, speaker: int | None, length: float | None = None) -> None:
    out.parent.mkdir(parents=True, exist_ok=True)
    wav = out.with_suffix(".wav")
    with wave.open(str(wav), "wb") as w:
        voice.synthesize_wav(text, w, syn_config=SynthesisConfig(speaker_id=speaker, length_scale=length))
    subprocess.run(
        ["ffmpeg", "-loglevel", "error", "-y", "-i", str(wav), "-ac", "1", "-b:a", "48k", str(out)],
        check=True,
    )
    wav.unlink()


def audition(out_dir: Path, models: list[str] | None = None, max_speakers: int = MAX_SPEAKERS) -> None:
    rows = []
    for name, info in sorted(dutch_voices().items()):
        if models and name not in models:
            continue
        voice = load(name)
        speakers = list(info.get("speaker_id_map", {}).items())[:max_speakers] or [(None, None)]
        for label, sid in speakers:
            key = name if sid is None else f"{name}-s{sid}"
            to_mp3(voice, SAMPLE, out_dir / f"{key}.mp3", sid)
            rows.append(f"| `{key}.mp3` | {info['language']['code']} | {info['quality']} | {label or ''} |")
            print("made", key, flush=True)
    (out_dir / "index.md").write_text(
        "# Piper-stemproef\n\nZin: *" + SAMPLE + "*\n\n| Bestand | Taal | Kwaliteit | Spreker |\n|---|---|---|---|\n"
        + "\n".join(rows) + "\n\nLicenties: zie de MODEL_CARD per stem op huggingface.co/rhasspy/piper-voices.\n"
    )


def generate_all(out_dir: Path) -> None:
    chosen = json.loads(Path("scripts/voices/chosen.json").read_text())
    clips = json.loads(Path("public/audio/clips.json").read_text())
    for v in chosen:
        voice = load(v["model"])
        for clip in clips:
            to_mp3(voice, clip["text"], out_dir / v["key"] / f"{clip['id']}.mp3", v.get("speaker"), v.get("lengthScale"))
        print(f"{v['key']}: {len(clips)} clips", flush=True)
    index = {
        "voices": [{"key": v["key"], "label": v["label"], "gender": v.get("gender")} for v in chosen],
        "clips": {c["text"]: c["id"] for c in clips},
    }
    (out_dir / "voices.json").write_text(json.dumps(index, ensure_ascii=False))


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("mode", choices=["audition", "all"])
    ap.add_argument("--out", required=True)
    ap.add_argument("--models", nargs="*", help="audition only these voices")
    ap.add_argument("--max-speakers", type=int, default=MAX_SPEAKERS)
    a = ap.parse_args()
    if a.mode == "audition":
        audition(Path(a.out), a.models, a.max_speakers)
    else:
        generate_all(Path(a.out))
    sys.exit(0)

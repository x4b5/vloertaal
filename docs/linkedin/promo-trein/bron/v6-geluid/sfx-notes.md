# Vloertaal promo: sound-effects layer

Music: `promo4/aud54.wav`, left as it is. The SFX sit under it, with no voices. All files are 48 kHz stereo and exactly 54.000 s long (2,592,000 samples).

## Outputs

| File | What | Measured |
|---|---|---|
| `sfx54.wav` | SFX only, at the level used in the mix (no loudness normalisation) | -27.8 LUFS, sample peak -9.0 dBFS |
| `mix54.wav` | Music (with small ducks) plus SFX, then two-pass ffmpeg loudnorm (linear mode, -0.11 dB) | -13.9 LUFS integrated, true peak -1.4 dBTP |
| `mix54.m4a` | AAC 192 kb/s of mix54.wav. **It replaces the video's audio.** | -13.9 LUFS, true peak -1.3 dBTP |
| `sfx-envelope.png` | 100 ms RMS and peak envelopes: music vs SFX, with cue markers | |

The music fade-out from 53.4 s is kept, because SFX stop at 48.6 s. To rebuild: `./build.sh` (runs `mix.py`, both loudnorm passes, the AAC encode and the checks). Raw generations are in `raw/` (mp3) and `wav/` (48 kHz wav).

## How levels were set

- **Ambiences (amb)**: the RMS of the processed clip is set to *target* dB below the music's RMS over the same span. Measured result (median of 100 ms windows): polder 19.5, train interior 20.8, café 20.5, high wind 18.7, canteen 20.3 dB under the music.
- **One-shots (peak)**: the clip's peak is set to *target* dB below the music's sample peak within ±1 s. Measured: about 6 to 10 dB below the music peaks. The whooshes and distant sounds sit lower.
- **Music ducks**: -3 dB for about 0.4 s, with 60 ms ramps, at 14.25 s (Goed zo), 19.42 s (streak) and 43.52 s (ping), plus -2 dB at 18.35 s (second Goed zo).
- **EQ**: 2nd-order Butterworth high-pass and low-pass filters per cue, listed below. Loops use 0.5 s equal-power crossfades.

## Cue list

| Start (s) | End (s) | Effect | File (raw/) | Mode | Target vs music | Applied gain | EQ / pan |
|---|---|---|---|---|---|---|---|
| 0.00 | 6.60 | polder wind + birds | polder_L.mp3 | amb | -21 dB | +19.9 dB | HP 80 Hz |
| 3.13 | 7.61 | train pass-by | train_pass_L.mp3 | peak | -8 dB | -11.4 dB | HP 35 Hz |
| 5.00 | 16.80 | train interior | train_int_L.mp3 | amb | -22 dB | -12.1 dB | HP 40 Hz, LP 6000 Hz |
| 14.04 | 14.24 | phone tap (Amina) | tap.mp3 | peak | -11 dB | +7.2 dB | HP 150 Hz |
| 14.28 | 15.28 | "Goed zo" chime | ping_a.mp3 | peak | -9 dB | -7.1 dB | HP 200 Hz |
| 16.52 | 17.72 | screen swipe | swipe.mp3 | peak | -9 dB | -9.8 dB | HP 150 Hz |
| 16.55 | 28.00 | cafe terrace | cafe_L.mp3 | amb | -21 dB | -10.5 dB | HP 100 Hz |
| 17.80 | 18.00 | phone tap (Jada) | tap.mp3 | peak | -11 dB | +6.8 dB | HP 150 Hz |
| 18.38 | 19.38 | "Goed zo" chime (cafe, softer) | ping_a.mp3 | peak | -11 dB | -10.3 dB | HP 200 Hz |
| 19.45 | 20.85 | streak sparkle | sparkle_a.mp3 | peak | -9 dB | -0.5 dB | HP 500 Hz |
| 22.00 | 23.00 | bicycle bell | bell.mp3 | peak | -13 dB | -7.2 dB | HP 300 Hz, LP 7000 Hz, pan 0.35 |
| 26.60 | 29.60 | rising whoosh | rise_L.mp3 | peak | -9 dB | -11.7 dB | HP 60 Hz |
| 27.70 | 33.60 | high-altitude wind | highwind_L.mp3 | amb | -20 dB | +20.5 dB | HP 50 Hz |
| 33.20 | 35.50 | truck reversing beeper (distant) | beeper_L.mp3 | peak | -17 dB | -16.8 dB | HP 400 Hz, LP 2500 Hz, pan -0.4 |
| 35.00 | 38.80 | warehouse hall air/hum | hall_L.mp3 | amb | -20 dB | +6.7 dB | HP 40 Hz |
| 35.80 | 38.45 | forklift electric whine | forklift_L.mp3 | peak | -14 dB | -15.6 dB | HP 120 Hz, LP 7000 Hz, pan 0.3 |
| 37.40 | 38.40 | glass wall shimmer | glass.mp3 | peak | -11 dB | -1.2 dB | HP 1000 Hz |
| 38.30 | 45.80 | canteen murmur | canteen_L.mp3 | amb | -22 dB | -8.0 dB | HP 120 Hz |
| 43.20 | 43.40 | trackpad click | trackpad.mp3 | peak | -11 dB | -5.1 dB | HP 200 Hz |
| 43.55 | 44.95 | notification ping | chime_b.mp3 | peak | -9 dB | -8.7 dB | HP 200 Hz |
| 45.55 | 46.55 | title stamp thud | stamp_a.mp3 | peak | -8 dB | -0.8 dB | HP 40 Hz, LP 3000 Hz |
| 46.30 | 46.55 | tick 1 (Gratis) | tick.mp3 | peak | -11 dB | -7.2 dB | HP 300 Hz |
| 46.80 | 47.04 | tick 2 (Geen account) | tick.mp3 | peak | -11 dB | -7.7 dB | HP 300 Hz |
| 47.30 | 47.52 | tick 3 (Geen reclame) | tick.mp3 | peak | -11 dB | -7.0 dB | HP 300 Hz |
| 47.44 | 48.64 | light whoosh (wave / url sign) | wave.mp3 | peak | -13 dB | -16.0 dB | HP 150 Hz |

## Source prompts (ElevenLabs `eleven_text_to_sound_v2`, flow "Vloertaal promo SFX", id GwhO17LcBA4sWMKvAQZQ)

| File | Prompt | Duration setting |
|---|---|---|
| polder_L.mp3 | Soft gentle wind over open green meadows, a few distant birds chirping, calm peaceful countryside ambience, no traffic | 8 s |
| train_pass_L.mp3 | Modern passenger train rushing past the camera at speed in open countryside, whoosh and rail rumble pass-by with doppler, approaching and receding, about 4 seconds | 4.5 s |
| train_int_L.mp3 | Inside a modern passenger train carriage, soft low rumble and steady rhythmic rail clacks, calm interior ambience, no voices, no announcements | 11 s, loop |
| tap.mp3 | Single soft finger tap on a smartphone glass touchscreen, close-up, subtle, dry | auto (1 s), only the first of its 3 taps used |
| ping_a.mp3 | Pleasant soft notification ping, message sent, modern friendly app sound, single bright tone with short tail | auto (1 s), variant A of 2. It plays two ascending notes (G/B then D), so it is used for Goed zo |
| swipe.mp3 | Soft quick swipe whoosh, smooth airy UI screen transition, short | auto (2 s) |
| cafe_L.mp3 | Outdoor cafe terrace ambience in a small town square, cups and saucers clinking, spoons on porcelain, distant indistinct murmur of guests, daytime, relaxed | 12 s, loop |
| sparkle_a.mp3 | Small celebratory sparkle pop, achievement badge appearing in a mobile app, bright twinkly shimmer, short and light reward sound | auto (2 s), variant A of 2 |
| bell.mp3 | Classic Dutch bicycle bell ringing twice, ring ring, slightly distant on a street, outdoors | auto (1 s) |
| rise_L.mp3 | Rising airy whoosh, camera flying upward into the open sky, smooth swelling wind rush, about 3 seconds | 3 s |
| highwind_L.mp3 | High altitude wind, steady soft airy wind high above a town, very distant faint town ambience far below | 7 s, loop |
| beeper_L.mp3 | Distant truck reversing beeper, beep beep beep, outdoors at an industrial business park, a few beeps | 3 s |
| hall_L.mp3 | Large warehouse hall room tone, roomy reverberant air, low ventilation hum, distant faint echoes of work, calm | 6 s, loop |
| forklift_L.mp3 | Electric forklift driving past inside a warehouse, electric motor whine rising and falling, soft tyre roll, no beeping | 3.5 s |
| glass.mp3 | Subtle glassy shimmer swish, passing through a glass wall, soft crystalline sparkle transition, short | auto (1 s) |
| canteen_L.mp3 | Company canteen ambience, soft indistinct murmur of people at lunch, occasional cutlery and plate clinks, calm indoor room | 9 s, loop |
| trackpad.mp3 | Single laptop trackpad click, close-up, crisp and quiet | auto (2 s), one click cut out (1.25-1.45 s) |
| chime_b.mp3 | Short friendly app success chime, two ascending notes, soft warm marimba and bell tone, clean modern UI sound, gentle, not cheesy | auto (2 s), variant B of 2 (F-major bell chord), used as the notification ping |
| stamp_a.mp3 | Soft stamp thud, logo title landing on screen, deep gentle impact with short tail, clean, not aggressive | auto (1 s), variant A of 2 |
| tick.mp3 | Single small soft UI tick sound, checkmark appearing, short clean click pop | auto (2 s), first 0.25 s used, pitched up 0/+6/+12 % for ticks 1-3 |
| wave.mp3 | Light short soft whoosh, hand waving through the air, gentle air swish | auto (2 s) |

These generations were made but not used: `train_pass_a/b`, `polder`, `train_int`, `cafe`, `rise`, `highwind`, `beeper`, `forklift` (the short auto-length first takes, about 0.5 to 2 s, that were replaced by the longer runs), `chime_a`, `ping_b`, `sparkle_b` and `stamp_b`.

## Credits

- Generations: 36 in total. That is 26 auto-length takes at 16.665 credits each (433.3), plus 10 longer re-runs with a set duration (223.3).
- **Billed per the run results: about 657 credits.** The `estimate_only` calls quoted more: 55 credits per auto take and 737 for the 10 re-runs, which would make about 2,167 if the estimates were the real charge. Either figure is well under the 6,000 budget. The two estimate calls cost nothing.

## Timing changes vs the brief (taken from the current video frames)

- End card: in `vloertaal-promo-4x5.mp4` the three check badges appear at **46.3, 46.8 and 47.3 s**, not at 47.5, 48.3 and 49.1 s. The VLOERTAAL title wipes in from 45.5 to 46.4 s. The worker starts waving at about 46.4 s and keeps waving to the end. The vloertaal.nl sign lands at about 47.8 s. The cues follow the video: stamp at 45.55 s, ticks at 46.30, 46.80 and 47.30 s, and the light whoosh peaks at about 47.75 s with the sign (not at 50 s, where nothing new happens).
- Swipe peak at about 16.7 s, the moment the page changes in the frames. Glass-wall shimmer at 37.4 s, because the camera passes the glass at 37.2 to 37.8 s. Train pass-by peaks at about 3.85 s, when the train is closest to the camera.
- Added a softer repeat of the Goed zo chime at 18.38 s, because Jada's screen also shows "Świetnie! Goed zo!" at about 18.4 s. To remove it, delete that line in `mix.py` and run `./build.sh`.
- To move a cue, edit `t=` in `mix.py`, or pass a JSON file of `{"cue name": start_s}` to `./build.sh`.

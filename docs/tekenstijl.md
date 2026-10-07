# Tekenstijl: word pictures

Every word gets an original flat-vector picture that looks as if it came out of the same box as the cast (Bram, Amina, Henk, Jada; `src/components/Characters.tsx`). Build pictures from the blocks in `src/pictures/kit.tsx` wherever possible. Check them on the review page `/?shot=pictures` (dev server), in light and dark mode.

## Canvas

- `viewBox="0 0 120 120"`, square. A picture is a function returning a `<g>…</g>`. `WordPicture` adds the `<svg>` and `aria-hidden`.
- **Safe area: x 10–110, y 10–110.** Keep everything that matters inside it. Only a sleeve or a body cut off at the bottom may run to the edge.
- **Ground line at y ≈ 104–106.** Things standing on the floor get `<Ground />` (black, opacity .14) under them, drawn first.
- One subject, large: it fills about 70–85 % of the safe area. Centre it optically and leave about 8 units of air around it.
- Pictures sit on a **white card (light mode) or a dark-grey card (dark mode)**. They must read on both. Never let a white shape carry the silhouette alone. Give white objects (paper, a mug, a bubble) a grey shade side or depth edge (`#dfe6ec`), or use a light tint (`#e3f5ff`).

## Must read at 48 px and at 160 px

- Think chunky: no detail lines thinner than 1.2 units, no parts smaller than about 4 units, and at most about 12 shapes that carry meaning.
- Check the 48 px version on the review page. If you can't tell what it is, remove detail, make the subject bigger, or make the contrast stronger.

## Palette (from the cast; tokens in `PAL` and `SKIN`)

| Role | Base | Shade | Light / highlight |
|---|---|---|---|
| Hard-hat yellow | `#ffc800` | `#e5a400` | `#ffd94d` / `#fff3b0` |
| Hi-vis orange | `#ff7a00` | `#d96500` | `#ff9600` |
| Work-shirt blue | `#1a86d8` | `#126bb0` | `#5fb8f5` |
| Sky blue (UI) | `#1cb0f6` | `#1899d6` | `#8fdcff` |
| Navy (Henk) | `#244a7d` | `#1a3860` | – |
| Fleece green | `#3fa34d` | `#2f7d3a` | `#c6f06b` |
| Leaf / OK green | `#7ac70c` / `#58cc02` | `#58a700` / `#46a302` | – |
| Headscarf purple | `#8e44c9` | `#6f2fa6` | `#b07ae6` |
| Alarm red | `#ff4b4b` | `#ea2b2b` | `#ffb3b3` |
| Terracotta | `#e0703f` | `#c0552a` | `#ef8a57` |
| Cardboard / wood | `#e0a86b` | `#c98a4b`, `#a86d3a` | `#f0c48a` |
| Paper / metal | `#f4f7f9`, `#cfd8de` | `#dfe6ec`, `#8a96a0` | `#fff` |
| Dark metal / plastic | `#3c4a56` | `#26313a` | – |
| Coffee / hair brown | `#6b3f22` | – | – |
| Ink (eyes, clock hands) | `#2f2a28` | – | – |

Skin `[base, shade]`: Bram `#f7c49b/#e2a376`, Amina `#b97a52/#9c6141`, Henk `#f0b791/#d9946c`, Jada `#8d5536/#6e3f25`. Vary the skin tones across pictures. Don't add new hues. If you need another tone, mix a lighter or darker step of a palette colour.

## Outlines: none

- **No outlines.** Shapes are flat fills that touch or overlap. Separate them with a value step (light against dark), not a line.
- Thin strokes are only for **inner detail lines** (finger gaps, knuckles, seams, text lines on paper). Draw them in the shape's own shade colour, 1.2–2 units wide, with `strokeLinecap="round"`.
- Bold strokes (3–9 units, round caps) are allowed for **things that are lines**: arrows, motion lines, clock hands, window frames, a tick or a cross.

## Shading and highlight recipe

Light comes from the **top left**.

1. **Base**: the silhouette in its base colour.
2. **Shade**: a darker tone on the **right side** (and the underside), as one soft-edged shape. Either draw a darker shape (the hard hat's right third, the side of a box), or wrap the silhouette in `<Shade color={shade} opacity={…} at={[cx, cy, rx, ry]}>`, which lays an ellipse over the right side, clipped to the shape. This is what the cast's faces do. One shade step per object, no gradients.
3. **Highlight**: one short curved stroke on the **top left**, following the form, with `<Shine d="…" />` (white, or `#fff3b0` on yellow, opacity about .5–.7, 3–5 wide, round caps). Use at most one or two per picture.
4. **Depth edge** for flat items such as badges, bubbles and paper: the same shape again in the shade colour, 3–4 units lower, behind it.
5. **Ground shadow** for objects standing on something: `<Ground />`.

## People, hands and faces

- People are **the cast**: `<Bust who="bram|amina|henk|jada" expr=… />` gives their real heads (from `CastHead`) on simple shoulders. Don't draw new faces. Pick the person who fits (Henk = supervisor/boss, Amina = greenhouse, Jada = order picking, Bram = warehouse/building).
- Hands come from `<Hand pose="open|point|thumb|fist|hold" />`, with an optional sleeve in a cast colour. A hand is the main way to show a gesture.
- Feelings come from the cast expressions (`neutral`, `thinking`, `pleased`, `disappointed`, `joy`), with `squint` for laughing. Don't use emoji-style yellow smiley heads.

## Actions and abstract words

- **Actions (verbs)**: show the result or the movement of **one object**, plus a cue for the motion. Use `<Arrow>`/`<CurveArrow>` for direction (to lift: a box with an up arrow; to push: a hand behind a cart with an arrow), and `<Motion>` lines for shaking, ringing or waving. Use a **hand** for things done with the hands (to give, to hold, to point).
- **Directions** (left, right, up, straight on): a big sky-blue arrow, maybe over a simple floor or shelf. The arrow is the subject.
- **Yes / no / correct / forbidden**: `<Tick>` and `<Cross>` badges, or a red cross badge over a small object.
- **Talk, ask, understand**: speech `<Bubble>` with `<Dots>` (talking), `<QuestionMark>` (question, don't understand) or a small object inside (what is talked about), next to a `<Bust>`.
- **Time words**: `<Clock hour minute />` for times of day, `<Calendar mark>` for days, a sun or moon for morning, evening and night.
- **Small scenes**: at most **two** subjects (for example a person and an object, or two people). Put the subject in the middle and anything extra small and to the side. Don't draw a background, room or horizon. A floor line or ground shadow is enough.
- Emphasis and joy: `<Sparkle>` (yellow, or white on a coloured banner) and `<ExclaimMark>` for warnings.

## No text in pictures

- **No letters or numbers.** Show meaning with shapes. Paper, labels and signs get grey lines (`#9aa5ab`), not words. A clock shows time with its hands, without numbers.
- `?` and `!` are allowed as shapes (`QuestionMark`, `ExclaimMark`). They are drawn, not typed. Never use `<text>`.
- Only if a word cannot be shown without it (for example a sign), use at most one short **Dutch** word, drawn in the app's font weight. Avoid it if you can.

## Do / don't

- Do reuse kit blocks and `PAL` tokens. Keep the light from the top left. Keep shapes rounded (corner radius ≥ 2). Keep pictures still (no CSS animation).
- Don't copy emoji designs or other icon sets. Don't use gradients, filters, drop shadows, outlines, photos, `<text>`, `<image>` or external files.

## Template

```tsx
import type { JSX } from 'react';
import { Box, Arrow, Ground, PAL } from './kit';

export default {
  // "tillen": to lift — a box going up
  'w.tillen': () => (
    <g>
      <Ground cy={104} rx={30} />
      <Box x={30} y={52} w={48} h={40} depth={14} />
      <Arrow from={[96, 92]} to={[96, 26]} color={PAL.sky} />
    </g>
  ),
} as Record<string, () => JSX.Element>;
```

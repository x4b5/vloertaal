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
- **Numbers are the one exception** (4 November 2026): a number word ("dertien", "zevenenveertig", l.counting) cannot be shown without its digits, so it is a yellow label with the digits drawn as strokes (`src/pictures/group35.tsx`, like the 🔢 tiles of `e.cijfers`). All number labels look the same apart from the digits, so a picture choice (13 or 30?) is decided by the number alone. Never put digits in any other picture.

## Do / don't

- Do reuse kit blocks and `PAL` tokens. Keep the light from the top left. Keep shapes rounded (corner radius ≥ 2). Keep pictures still, with one exception: a moving picture on the word's intro card, only where the meaning is a movement (see "Beweging" below).
- Don't copy emoji designs or other icon sets. Don't use gradients, filters, drop shadows, outlines, photos, `<text>`, `<image>` or external files.

## Beweging: a moving picture on the intro card (trial, 5 November 2026)

Pictures stand still. The one exception (the owner's "yes" to a trial, 5 November 2026):
**movement only where the meaning is a movement.** "glad" is the foot that slides away, "tillen" is
going up from the knees, "te laat" is the hand running past the start time. A still picture shows
only the end of that; a short movement shows the meaning itself. Where the meaning is not a movement
(a thing, a right, a feeling), a movement only distracts from the word and its sound.

The limits:

- **Only on the intro card**, where the word is first taught. In a picture choice, a match, the
  path, the pocket cards and the lists the same picture stands still (styles.css: only a rule under
  `.intro-card` animates).
- **Short and once**: 0.4–2 s per movement, it plays once and starts just after the word's sound (0.4 s). A tap on
  the card's speaker says the word again and plays the movement again: no extra button (max. 3).
  No loop, at most two plays in a row, no step shorter than 0.4 s, no flashing (WCAG 2.3.1).
- **It ends on a meaningful still picture**, and that still picture is the picture everywhere
  else. Draw the end; the movement only says where a part comes from.
- **One action, at most two subjects** (two people walking out together count as one action).
- **CSS only**: a part is wrapped in `<Move kind=… />` (`src/pictures/kit.tsx`), a `<g class="mv-…">`
  animated by `@keyframes` in styles.css with only a `from` frame. No SVG `<animate>` (SMIL), no
  `requestAnimationFrame`. So with the phone's "less motion" and with "Rustig scherm" (both:
  `animation: none !important`) nothing moves and the still picture is all there is.
- The kinds: `from` / `slow` / `fast` (slide in from `dx`, `dy`: 1.2 s, 2 s, 0.5 s), `drop` (a
  slide speeding up, 0.7 s: with `tip` it makes one fall, see "vallen"), `then` (the slide of `from`,
  but after it: a second step, see "voordoen"), `steps` (a slide in three stops of 0.6 s: counting,
  see "tellen"), `turn` and `tip` (turn `turn` degrees back into place around the point `at`, in
  picture units: 1.4 s, or 0.7 s speeding up as a fall), `grow` (from its left edge, 1.6 s), `sag`
  (sinks onto its bottom edge from `grow` times its height, 2 s: see "lek"), `show` (fades in at the
  end: a tick, a mark). A joint chain nests: ankle → knee → hip → shoulder (see "tillen"). A pose
  that is bent in the still picture bends from straight with `Bend` (group24, see "bukken"); a
  part that goes round another (two shift cards swapping) turns around the middle and back around
  its own centre (`Arc`, group36, see "ruilen").
- At most two steps one after the other (`from`, then `then` or `show`): the whole picture is still
  within 3 s.
- An abstract word whose still picture says too little gets `picture: 'motion'`: the picture is on
  its intro card only, never in a picture choice or a match (like `'hook'`).

The trial words (tests/motionPictures.test.ts): glad, tillen (redrawn: the safe way, knees bent and
the box close to the body, no longer above the head), ontruimen (`'motion'`), inchecken and
uitchecken (one slide: to the reader, away from it), bijna (`'motion'`, next to the full bar of
afmaken), langzaam and snel (one slide: 2 s for the snail, 0.5 s for the shoe; each keeps its own
still picture so the two stay apart in a picture choice) and te laat (the hands run on from 8:00,
Bram comes in, as on "op tijd"). Measure whether pairs are mixed up less often, and ask learners who
read little whether the movement helps or distracts, before more words move.

The second round (the owner's "go on", 5 November 2026; the same limits):

| Group | Word | What moves |
|---|---|---|
| Body | vallen | Bram drops in from above and tips over backwards (`drop` + `tip`); "gevallen" stays still |
| Body | bukken | redrawn the safe way (knees bent, back straight, no longer bent over at the waist): Amina goes down from standing to a squat at the low plant |
| A to B | inklokken / uitklokken | the card goes to the time clock, then the badge's arrow goes in at the door (or out of it) |
| A to B | inloggen | the door swings open and the arrow goes in |
| A to B | uitloggen (`'motion'`) | the same laptop: the account (avatar) and a red arrow come out of the door |
| A to B | ruilen (`'motion'`) | Bram's and Jada's shift cards (sun, moon) change places, one over the top, one underneath |
| A to B | versturen (`'motion'`) | the envelope leaves the laptop's screen to the top right |
| A to B | doorgeven (`'motion'`) | a note goes from Jada's hand to Henk's |
| A to B | sorteren | the red tomato goes left, the green one right, from Jada's hands |
| A to B | ophalen | Jada walks in from the left to the child at the daycare and takes its hand |
| A becomes B | uitzetten | the finger comes to the button, then the lit screen goes dark (one fade) |
| A becomes B | automatisch (`'motion'`) | a sliding door opens with nobody near it |
| A becomes B | verbeteren (`'motion'`) | the pen comes to the wrong row; the cross becomes a tick |
| A becomes B | lek | the tyre sinks onto its flat bottom, the rim with it; then the hiss lines |
| A becomes B | mengen | the two bottles tip over the bucket, then the streams and the cross (no cloud: it would look like "de damp" of the same lesson) |
| Time, order | eerst / daarna (`'motion'`) | a list of two jobs: the hand comes to the top one and it gets its tick / the hand goes on down to the bottom one and it gets its tick |
| Time, order | voordoen (`'motion'`) | Henk puts a box on his stack, then Jada does the same (`then`) |
| Time, order | verlengen (`'motion'`) | the contract's bar on a row of weeks grows past its old end (dashed) |
| Time, order | tellen (`'motion'`) | a finger taps three boxes one by one (`steps`) |
| Time, order | herhalen | the loop in Bram's speech bubble goes round once more |

Left out: "beginnen" (a start button on a machine, not the scene of "uitzetten"; a machine
starting would say more than "to start" your shift). In every `'motion'` word the still picture
would say too little or look like another word of its lesson, so it never stands in a picture
choice; the people in those pictures are cast heads, not busts, so the word's voice stays the
same (`pictureCast`).

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

## Geheugenplaatjes: wanneer helpt een tekening bij een moeilijk woord?

A picture can do one of two jobs (the owner's question, 2 November 2026):

1. **Explain**: the picture alone says which word it is (de helm, op slot). It may be used anywhere,
   including "Which picture is it?" and the match cards, so it must not look like another word of the lesson.
2. **Help to remember**: the help-language gloss says what the word means; the picture is a hook to
   hang the word on (de huur, de borg, bruto). `Word.picture: 'hook'`. It is shown on the word's
   intro card only, never in a picture choice, a match, the path or a lesson icon
   (`src/lib/wordPicture.ts`: `hasPicture` for job 1, `introPicture` for both).

Four steps from concrete to abstract:

| Step | Kind of word | Example | Picture |
|---|---|---|---|
| 1 | a thing | de helm, de stekker | yes, job 1 |
| 2 | something you can see happen | op slot, kapot, tillen | yes, job 1 |
| 3 | abstract, with one fixed, familiar scene | de huur, de borg, de boete, het verlof, bruto/netto | yes, job 2 (`'hook'`) |
| 4 | purely abstract or ambiguous | het recht, eerlijk, misschien, de cao | no (`picture: false`): the example sentence and the sound do more |

A memory picture must pass three questions:

1. **One scene.** Readable at a glance: no strip of steps, no symbol you must learn first (§, ⚖️, a mayor's chain).
2. **From the learner's own working life.** Would an order picker or a cleaner recognise it?
3. **Not misleading.** Could someone take a wrong meaning from it? ("het recht" as a judge's gavel suggests a court case: no.)
   Check a Belgian twin too: `be.w.wachtdag` ("het gewaarborgd loon") keeps no picture, because the
   struck-out coin of "de wachtdag" would say the opposite.

Simple test with two or three learners or coaches:
- the right word is picked from the lesson's words with the picture alone → job 1;
- only with the gloss does the picture make sense → job 2;
- even with the gloss it is odd or misleading → no picture.

The first eleven memory pictures (`src/pictures/group34.tsx`): de huur, de borg, de boete, het verlof,
de wachtdag, bruto, netto, de feestdag, de allergie, de belasting, de zorgverzekering.

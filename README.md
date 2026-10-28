# Two years

A small anniversary website. No account, no database, no API. She opens a link, and the story is the website.

## Run it

```bash
pnpm install
pnpm dev
```

Vite prints a local address and a network address. The network one opens on her phone if you're on the same Wi-Fi.

## Make it yours

Edit **`src/content/story.ts`** before you send the link. That file is the whole gift: the letter, the timeline, the quiz answers, the treasure-hunt lines, the jar, the wrapped stats, and the final surprise.

A few things that matter:

- **`togetherSince`** is the day you two started. The wrapped counter uses it.
- **Quiz `answer`** is the index of the right choice, starting at 0. The sample answers are not your real story. Change them, or the quiz will "correct" a memory that isn't yours.
- **`later.unlockOn`** keeps the fifth-anniversary letter sealed until that date.

### Photos, song, video

Drop files in `public/`, then point at them from `story.ts`.

| What | Where to put the file | What to set |
| --- | --- | --- |
| A memory | `public/photos/met.jpg` | `photo: "/photos/met.jpg"` on that memory |
| The puzzle | `public/photos/us.jpg` | `puzzle.image: "/photos/us.jpg"` |
| The ending photo | `public/photos/us.jpg` | `finale.photo` |
| Your song | `public/audio/oursong.mp3` | `song: "/audio/oursong.mp3"` |
| A video message | `public/video/message.mp4` | `finale.lastThing.kind: "video"` and `video: "/video/message.mp4"` |
| A playlist | a Spotify or YouTube link | `finale.lastThing.kind: "playlist"` and `href` |
| A QR code for a real gift | `public/photos/qr.png` | `finale.lastThing.image` |

Empty photo paths fall back to a small drawing, so the site still looks finished while you gather pictures.

## What she can do

1. Open a sealed envelope.
2. Walk a timeline of polaroids.
3. Play a quiz. Wrong answers wobble and offer a hint.
4. Solve a 3×3 photo puzzle.
5. Follow clues through a little room. The last heart opens a secret page.
6. Flip love notes. One of them can hold a short video.
7. Unlock the last page: a letter, then "One last thing…".

The ending stays sealed until she has opened four memories, finished the quiz, solved the puzzle, found every heart, and flipped four notes. Progress is remembered in her browser.

Also tucked on the map:

- a Wrapped-style recap
- a jar of notes
- a tiny heart-catching game
- a letter that stays closed until your fifth anniversary

## Send it

```bash
pnpm build
```

`dist/` is a static site. You can drop it on Netlify, Vercel, or any host that serves files. Play through it once on your phone before you share the link. "Read it again from the start" on the map clears the saved progress.

/**
 * PERSONALIZE THIS FILE before you send her the link.
 * Everything she reads lives here. You do not need to touch the React code.
 *
 * Photos: drop files in `public/photos/`, then set a path like "/photos/us.jpg".
 * Song: drop an mp3 at `public/audio/oursong.mp3` and set `song` below.
 * Video: drop an mp4 in `public/video/` and point `finale.lastThing.video` at it.
 *
 * Quiz answers are samples. Change them to things only the two of you know,
 * or the game will "correct" a memory that isn't yours.
 * `answer` is the index of the right option, starting at 0.
 */

export type DoodleName =
  | "spark"
  | "mug"
  | "ticket"
  | "camera"
  | "cake"
  | "window"
  | "waves"
  | "moon"
  | "plant"
  | "book"
  | "key"
  | "heart";

export type QuizOption = {
  text: string;
  /** Optional photo for picture questions. Example: "/photos/trip.jpg" */
  photo?: string;
  doodle?: DoodleName;
};

export const story = {
  /** The day the two of you started. Used for the "days together" count. */
  togetherSince: "2024-10-26",

  /** Leave "" for no music. Example: "/audio/oursong.mp3" */
  song: "",

  /**
   * The door into the site. No account and no database.
   * `answers` are the phrases that let her in. Capital letters do not matter.
   * "booty hole", "booty-hole", and "bootyhole" all count.
   *
   * Pictures live in public/photos/. In this file the path starts with /photos/
   * (the word "public" is not part of the path).
   * Main photo: public/photos/login.jpeg
   * Background photos: public/photos/background_1.png, background_2.png, background_3.png
   */
  gate: {
    kicker: "Before you come in",
    prompt: "complete this phrase.",
    phrase: "together forever together, locked in tight like a ...",
    placeholder: "Type it here",
    button: "Come in",
    photo: "/photos/login.jpeg",
    photoAlt: "Us",
    answers: ["booty hole", "booty-hole", "bootyhole"],
    backgrounds: [
      { photo: "/photos/background_1.png", doodle: "spark" as DoodleName },
      { photo: "/photos/background_2.png", doodle: "moon" as DoodleName },
      { photo: "/photos/background_3.png", doodle: "camera" as DoodleName },
    ],
  },

  /**
   * The agreement page. Each string in `paragraphs` is its own paragraph.
   * Replace them with your own text.
   */
  agreement: {
    title: "the forever and ever agreement",
    paragraphs: [
      "Write your agreement here.",
    ],
    question: "Do you accept these terms?",
    accept: "Accept",
    decline: "Decline",
    confirm: "Confirm",
    declined: "What The Fuck !!!",
    declinePhotos: {
      left: "/photos/angry_1.png",
      right: "/photos/angry_2.png",
    },
    choose: "Pick accept or decline, then confirm.",
  },

  invitation: {
    kicker: "For your eyes",
    message:
      "Hey, my love. Can you believe it’s been two years? I made something for you. Ready to take a little trip down memory lane?",
    letter: "Come with me.",
    start: "Start our story",
    openLabel: "Open the envelope",
  },

  map: {
    kicker: "Our little trip",
    title: "I saved a few chapters for you.",
    intro:
      "Wander in whatever order you like. The last page stays sealed until you’ve peeked into the rest of us.",
    extrasTitle: "If you feel like wandering",
    finaleTitle: "The final surprise",
    finaleLocked: "A few pages are still folded shut.",
    finaleOpen: "It’s ready when you are.",
    replay: "Read it again from the start",
  },

  /**
   * Each memory is a polaroid on /story. Clicking it opens a notebook page.
   * `entry` is that page: every string is one paragraph.
   * `photo` is the picture on the clickable polaroid. Leave "" for an empty frame.
   * `photos` are the four frames beside the notebook. Leave "" until you add a file.
   */
  memories: [
    {
      id: "met",
      date: "The day we met",
      title: "Hello, you",
      caption: "The beginning, before we knew it was the beginning.",
      note: "This was the day I realized that spending time with you was becoming my favorite thing.",
      entry: ["Write this page here."],
      photo: "/photos/Second_day_we_met_1.jpg",
      photos: [
        "/photos/Second_day_we_met_1.jpg",
        "/photos/Second_day_we_met_2.jpg",
        "/photos/Second_day_we_met_3.jpg",
        "/photos/Second_day_we_met_4.jpg",
      ],
      alt: "The day we met",
      doodle: "spark" as DoodleName,
    },
    {
      id: "first-date",
      date: "Our first date",
      title: "We stayed too long",
      caption: "The plan was simple. We ignored it, in the best way.",
      note: "I remember not wanting the night to figure out how to end.",
      entry: ["Write this page here."],
      photo: "",
      photos: ["", "", "", ""],
      alt: "Our first date",
      doodle: "mug" as DoodleName,
    },
    {
      id: "trip",
      date: "Our first trip",
      title: "Somewhere that wasn’t home",
      caption: "A bag, a ticket, and the feeling that we were already a team.",
      note: "I liked who we were when the day had no schedule.",
      entry: ["Write this page here."],
      photo: "",
      photos: ["", "", "", ""],
      alt: "Our first trip",
      doodle: "ticket" as DoodleName,
    },
    {
      id: "laugh",
      date: "A ridiculous day",
      title: "The picture that still gets me",
      caption: "Proof that we are not as composed as we pretend.",
      note: "I hope we never get too cool to laugh like that.",
      entry: ["Write this page here."],
      photo: "",
      photos: ["", "", "", ""],
      alt: "A day we couldn't stop laughing",
      doodle: "camera" as DoodleName,
    },
    {
      id: "celebration",
      date: "A celebration",
      title: "We dressed up for us",
      caption: "Cake, or something that stood in for cake.",
      note: "I like marking time with you. It makes the ordinary days feel chosen.",
      entry: ["Write this page here."],
      photo: "",
      photos: ["", "", "", ""],
      alt: "A celebration",
      doodle: "cake" as DoodleName,
    },
    {
      id: "ordinary",
      date: "An ordinary Tuesday",
      title: "Nothing happened, and it was perfect",
      caption: "The kind of day I would not trade for a louder one.",
      note: "If the rest of our life has more evenings like this one, I am already lucky.",
      entry: ["Write this page here."],
      photo: "",
      photos: ["", "", "", ""],
      alt: "An ordinary day together",
      doodle: "window" as DoodleName,
    },
  ],

  quiz: {
    kicker: "Chapter 3",
    title: "How well do you know us?",
    intro: "No grades. Wrong answers get a hint and a smile, not a red X.",
    correct: "That’s us.",
    doneTitle: "Look at your little collection.",
    doneNote: "You can play again whenever you want. The stickers stay.",
    again: "Ask me again",
    questions: [
      {
        id: "first-date",
        question: "Where did we go on one of our first dates?",
        options: [
          { text: "The little place we still talk about" },
          { text: "A long walk with no real plan" },
          { text: "Somewhere with too many fries" },
          { text: "A movie we both forgot to watch" },
        ] as QuizOption[],
        answer: 0,
        hint: "Think of the night we kept finding one more reason not to go home.",
        sticker: "First date",
      },
      {
        id: "food",
        question: "What food could I happily eat with you forever?",
        options: [
          { text: "Anything we can share from the middle" },
          { text: "Breakfast, even at night" },
          { text: "The spicy thing I always underestimate" },
          { text: "Dessert first, obviously" },
        ] as QuizOption[],
        answer: 0,
        hint: "It is less about the dish and more about stealing bites from your side.",
        sticker: "Our table",
      },
      {
        id: "phrase",
        question: "What is one phrase we keep repeating?",
        options: [
          { text: "The one that makes us look at each other in public" },
          { text: "Five more minutes" },
          { text: "Did you lock the door?" },
          { text: "This is the last episode" },
        ] as QuizOption[],
        answer: 0,
        hint: "If a stranger heard it, they would be confused, and we would be gone.",
        sticker: "Inside joke",
      },
      {
        id: "trip-photo",
        question: "Which of these pictures was taken on our first trip together?",
        options: [
          { text: "The bright one", doodle: "waves" },
          { text: "The blurry one", doodle: "moon" },
          { text: "The one where we look cold", doodle: "ticket" },
        ] as QuizOption[],
        answer: 0,
        hint: "You were squinting, and you looked so happy about it.",
        sticker: "The trip",
      },
      {
        id: "song",
        question: "What do we do when a song we love comes on?",
        options: [
          { text: "Turn it up, even if the neighbors can tell" },
          { text: "Pretend we are not going to sing" },
          { text: "Start a very serious dance" },
          { text: "Miss the beginning and replay it" },
        ] as QuizOption[],
        answer: 0,
        hint: "There is usually a volume button involved, and very little shame.",
        sticker: "Our song",
      },
      {
        id: "home",
        question: "Where do I look for you first when I walk into a room?",
        options: [
          { text: "Wherever the laughing is" },
          { text: "The kitchen" },
          { text: "The sunniest corner" },
          { text: "Right beside me, already" },
        ] as QuizOption[],
        answer: 3,
        hint: "You are usually closer than my first guess.",
        sticker: "Found you",
      },
    ],
  },

  puzzle: {
    kicker: "Chapter 4",
    title: "Put us back together",
    intro: "Tap a piece, then tap its place. Dragging works too.",
    peek: "Peek for a second",
    /** Leave "" to use the drawn picture. Or set "/photos/us.jpg". */
    image: "",
    alt: "The two of us",
    message:
      "No matter how many pieces life throws at us, I’m glad I get to put mine together with you.",
    again: "Scatter us again",
  },

  hunt: {
    kicker: "Chapter 5",
    title: "A tiny treasure hunt",
    intro: "Follow the clue. The room is full of us, but only one heart is ready.",
    later: "Not that one yet.",
    again: "You already found this. I still mean it.",
    done: "You found every little heart.",
    secretCta: "Come see what I hid",
    items: [
      {
        id: "frame",
        clue: "Find the place where we took that picture that still makes me laugh.",
        reveal:
          "I have tried to explain this photo to other people. It never works. That’s how I know it’s ours.",
      },
      {
        id: "mug",
        clue: "Look for the thing that was always in my hands on slow mornings with you.",
        reveal: "Same mug, same chair, better company. I would repeat that morning on purpose.",
      },
      {
        id: "plant",
        clue: "We said we’d keep something alive, even on the busy weeks.",
        reveal: "We are surprisingly good at this. The plant agrees, most days.",
      },
      {
        id: "book",
        clue: "Our most repeated phrase is hiding in something you can open.",
        reveal: "If we ever forget the words, they live in the margin of this one.",
      },
      {
        id: "camera",
        clue: "Proof we actually left the house.",
        reveal: "Half the pictures are of you looking away. Those are my favorites.",
      },
      {
        id: "key",
        clue: "The last heart opens a page with your name folded inside it.",
        reveal: "You found the key. I was hoping you would be this nosy.",
      },
    ],
  },

  secret: {
    kicker: "You found it",
    title: "A page I didn’t put on the map.",
    paragraphs: [
      "You weren’t supposed to get here by rushing. You got here by paying attention, which is my favorite thing about you.",
      "So here is a small truth with nowhere else to go: the ordinary version of our life is the one I keep choosing. Not the highlight reel. The Tuesday.",
      "Thank you for looking closely.",
    ],
  },

  loveNotes: {
    kicker: "Chapter 6",
    title: "Things I love about you",
    intro: "Tap a card. Some of them are just sentences. That’s on purpose.",
    notes: [
      {
        id: "laugh",
        label: "Your laugh",
        message:
          "It rearranges the room. If I could keep one sound from these two years, I would be very unoriginal and pick this.",
      },
      {
        id: "support",
        label: "How you stand next to me",
        message:
          "You don’t make a speech about it. You just stay, and somehow the hard thing gets smaller.",
      },
      {
        id: "unnoticed",
        label: "Something you don’t notice",
        message:
          "The way you check that I’m included. The second cup. The glance across a loud room. I notice.",
      },
      {
        id: "understood",
        label: "When I felt understood",
        message:
          "There was a day I didn’t have the right words, and you didn’t rush me toward any. I have felt at home ever since.",
      },
      {
        id: "memory",
        label: "A favorite memory",
        message:
          "You, halfway through a story, forgetting the point because something outside the window was funnier. I hope I never stop collecting those.",
        photo: "",
        alt: "A favorite memory",
        doodle: "camera" as DoodleName,
      },
      {
        id: "hands",
        label: "Your hands",
        message: "I like the way they find mine without either of us making it a moment.",
      },
      {
        id: "brave",
        label: "Your particular kind of brave",
        message:
          "Not the loud kind. The kind that tries again, tells the truth, and lets people in.",
      },
      {
        id: "future",
        label: "The future tense",
        message:
          "I love that when you say “we,” it sounds like a place, not a guess.",
      },
      {
        id: "clip",
        label: "A moving picture",
        message:
          "If I could hand you a few seconds of how it feels to be loved by you, I would. Until then, this sentence is doing its best.",
        /** Set to "/video/clip.mp4" when you have a short clip. */
        video: "",
      },
    ],
  },

  finale: {
    kicker: "Chapter 7",
    title: "The last page",
    waitingTitle: "Not yet, love.",
    waiting:
      "The ending is ready on my side. It just wants the rest of the story opened first.",
    photo: "",
    alt: "Us",
    doodle: "heart" as DoodleName,
    letter: [
      "My love,",
      "Two years ago I didn’t know that ordinary days could feel like this. You changed the shape of my life in the quiet ways: the way a room is better when you are in it, the way I look for you in a good moment before I notice I’m doing it.",
      "Thank you for the laughs, the patience, the detours, and the soft in-between hours. I love the person you are when nobody is performing, and I love the life we keep choosing on purpose.",
      "I don’t need the next year to be louder than this one. I just want it to be ours.",
    ],
    signature: "Yours.",
    closing: "Two years down. I still choose you.",
    oneLastThing: "One last thing…",
    lastThing: {
      /**
       * "date" shows a plan you wrote.
       * "note" shows another letter.
       * "playlist" opens a link.
       * "video" plays `video` (put the file in public/video).
       */
      kind: "date" as "date" | "note" | "playlist" | "video",
      title: "Saturday. Don’t make other plans.",
      detail:
        "I’ll pick you up at 6. Wear the jacket I love on you, and maybe don’t ask where we’re going. I already asked the night to be good to us.",
      href: "",
      linkLabel: "Open what I saved for you",
      video: "",
      /** Optional QR or photo of a gift. Example: "/photos/qr.png" */
      image: "",
    },
  },

  wrapped: {
    kicker: "Unofficial",
    slides: [
      {
        kind: "intro" as const,
        title: "Two years, wrapped",
        subtitle: "A deeply unserious recap of a very serious favorite person.",
      },
      {
        kind: "days" as const,
        label: "days of choosing each other",
        note: "Give or take a leap year and one very long phone call.",
      },
      {
        kind: "stat" as const,
        value: "6",
        label: "little trips",
        note: "Some were far. One was just the long way home.",
      },
      {
        kind: "text" as const,
        kicker: "Favorite shared activity",
        value: "Staying out too late",
        note: "The plan is always one hour. We are famous for losing track of it.",
      },
      {
        kind: "text" as const,
        kicker: "Most-used inside joke",
        value: "You know the one",
        note: "If it still makes us look at each other in public, it counts.",
      },
      {
        kind: "stat" as const,
        value: "400",
        label: "photos, probably",
        note: "Most of them are of you, taken when you were looking at something else.",
      },
      {
        kind: "award" as const,
        value: "Most likely to steal the blankets",
        note: "The award is affectionate. The evidence is overwhelming. I would like a corner back.",
      },
    ],
  },

  jar: {
    kicker: "A full jar",
    title: "Notes I folded for later",
    intro: "Tap the jar. It will hand you one.",
    empty: "That’s the jar. I’ll fold more if you give me another year.",
    again: "It’s full again.",
    tuck: "Tuck it back",
    notes: [
      { id: "n1", text: "I like the way your face changes when you recognize me in a crowd." },
      { id: "n2", text: "You make ordinary food taste like we planned something." },
      { id: "n3", text: "Promise: I will keep choosing the long way home if you’re on it." },
      { id: "n4", text: "Remember the time we got lost and pretended it was the plan? I think about that more than the destination." },
      { id: "n5", text: "You are my favorite notification." },
      { id: "n6", text: "A reason, filed under obvious: your mind. It is a good place to be invited." },
      { id: "n7", text: "Future plan: one window, two cups, no hurry." },
      { id: "n8", text: "You are funny in the specific way that ruins me in quiet rooms." },
      { id: "n9", text: "Thank you for being gentle with the parts of me that are still learning." },
      { id: "n10", text: "If we are keeping score, you are winning, and I am not even mad." },
      { id: "n11", text: "I love you on the days that would not make a story." },
      { id: "n12", text: "Another promise: I will tell you this out loud, not only in a jar." },
    ],
  },

  game: {
    kicker: "A very small game",
    title: "Catch the good parts",
    intro: "Catch the hearts. Step around the Monday alarms. Ten hearts and I owe you a secret.",
    prizeTitle: "You caught them.",
    prize:
      "Secret, as promised: I am still a little stunned that I get to love you, and I don’t want that part to wear off.",
    again: "Play again",
    alarms: "The alarms got loud. Once more, from the top.",
    left: "Move left",
    right: "Move right",
    heartsToWin: 10,
  },

  later: {
    /** She can open this on or after this date. Write the letter now. */
    unlockOn: "2029-10-26",
    kicker: "Not for today",
    title: "Open when we’re celebrating our fifth anniversary.",
    sealed:
      "I wrote this one early. It stays closed until the date on the seal, even if you poke it.",
    letter: [
      "Hi, from two years in.",
      "If you are reading this, we made it to five, and I hope the life around this letter looks a little like the one I was guessing at: a home that feels like both of us, a trip we still talk about, and the same joke wearing a new coat.",
      "I hope I have kept my promise to say the soft things out loud. I hope we still take the long way. I hope you feel chosen, not out of habit, but the way I mean it today.",
      "If the in-between years were messy, I hope we were messy on the same team.",
      "I loved you then. I am betting, happily, that I love you here too.",
    ],
    signature: "From the version of me who already knew.",
  },
};

export type Story = typeof story;

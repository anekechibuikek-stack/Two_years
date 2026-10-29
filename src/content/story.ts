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

  /** Leave "" for no music file. Example: "/audio/oursong.mp3" */
  song: "",

  /** Spotify's own player. The file stays on Spotify. */
  spotify: "https://open.spotify.com/embed/album/7rItmPh0tZpMKcFXBScaU8",

  trips: {
    title: "Every Trip, A Little More of Us 🌍❤️",
    entry: [
      "Our trips together have taught me a few things, my love. First, I've realised that I get so much more out of life when I'm experiencing it with you. In just two years, we've been to Italy, Turkey, Poland, Seychelles, Nigeria, and Lanzarote, and somehow, I've learned more about myself than I ever expected.",
      "I've learned what it means to love someone so deeply that their feelings matter just as much as your own. And yes, sometimes that means putting their happiness before yours. It might sound crazy or even unfair, but when I think about all the times you've done the same for me, I realise that's what makes our love so special. It's the willingness to show up for each other, to make sacrifices, and to remember that we're a team. I think that's what selflessness in love really means. ❤️",
      "Italy taught me that absolutely anything can become an adventure as long as you're there. 😂 Remember that ridiculously long walk through the cliffs of Cinque Terre that lasted almost three hours? We weren't even dressed for hiking! We were dressed to film TikToks! 😭 We were hot, sweaty, tired, and probably questioning every decision that had led us there. And the funniest part? I don't even like hiking! But somehow, it became one of my favourite memories because I was doing it with you. You taught me that the activity doesn't matter nearly as much as the person you're sharing it with.",
      "Then came Turkey, where you took me on an all-inclusive holiday and introduced me to a whole new level of relaxation. 😂 I discovered that I could actually switch off, look forward to something without worrying about everything else, and that, apparently, I quite enjoy alcohol too. But more importantly, I learned to appreciate those moments when we can simply exist together, enjoy ourselves, and let the world wait a little.",
      "And then there was Seychelles. ❤️ That trip taught me something much deeper. It reminded me that our love is real, not just when everything is going well, but when life gets difficult, too. Even during the rough periods, when money is tight and we can't afford to do all the things we'd love to do, you're still there. Still cheering me on. Still believing in me. Still believing in us. And I cannot begin to explain how much that means to me. To have someone who doesn't just want to enjoy the beautiful parts of life with me, but is also willing to stand beside me while we work towards better days? That's something I will never take for granted.",
      "We've been on so many other trips, and I know there are countless more waiting for us. Every place we visit leaves me with a new memory, a new lesson, or another reason to be grateful that you're the person beside me.",
      "And if there's one thing all these adventures have taught me, it's that I don't need every trip to be perfect, every hotel to be luxurious, or every day to go according to plan. I just need you there with me.",
      "Because no matter where we go, what we spend, or what life throws our way, I keep coming home with the same realisation: I somehow found the most amazing partner on the planet, and I get to keep exploring this beautiful, unpredictable world with her. 🌍❤️",
    ],
  },

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
   * The agreement page. `intro` is the opening. Each article is a heading and one paragraph.
   */
  agreement: {
    title: "the forever and ever agreement",
    intro: [
      "This Love Contract is entered into between my one and only love (hereinafter referred to as The Girlfriend) and the lucky man who gets to love her (hereinafter referred to as Me).",
      "By signing this agreement, The Girlfriend lovingly agrees to the following terms and conditions:",
    ],
    articles: [
      {
        title: "Article I: In Thick and Thin",
        body: "You agree to stand by me through life's beautiful days and its difficult ones. When things are easy, we will celebrate together. When things get hard, we will hold each other's hands and face them together. We are a team, always.",
      },
      {
        title: "Article II: In Sickness and in Health",
        body: "You agree to love me when I'm strong and when I'm not feeling my best. When I'm sick, you may be required to provide cuddles, kisses, comfort, and unlimited sympathy for my suffering, even if it's just a tiny cold. 😂",
      },
      {
        title: "Article III: In Laughter and in Tears",
        body: "You agree to laugh with me, cry with me, listen to me, and remind me that I'm not alone. My happiness will matter to you, just as your happiness will always matter to me. Neither of us has to pretend to be okay when we're not.",
      },
      {
        title: "Article IV: Through Every Season of Life",
        body: "You agree to keep choosing us as we grow, change, dream, and discover new things about each other. We will never be the same people we are today, but my hope is that we will keep falling in love with every new version of each other.",
      },
      {
        title: "Article V: Communication, Forgiveness, and Understanding",
        body: "You agree to talk to me when something hurts, to let me know when you need me, and to work through disagreements with kindness. We may not always agree, but we will always try to understand each other rather than win against each other.",
      },
      {
        title: "Article VI: The Little Things",
        body: "You agree to never underestimate the power of a hug, a random kiss, a thoughtful message, holding hands, silly jokes, spontaneous dates, and all the little things that make our love feel like home.",
      },
      {
        title: "Article VII: A Lifetime Supply of Love",
        body: "You agree to accept my affection, tolerate my occasional nonsense, entertain my terrible jokes, and understand that I will probably still flirt with you even when we're old and grey. Especially then, actually.",
      },
      {
        title: "The Most Important Clause",
        body: "You are not required to be perfect. You are not required to have all the answers. You are only asked to love honestly, to grow with me, and to remember that you never have to face life alone while we have each other.\n\nBecause if I could choose all over again, in every lifetime, in every possible world, I would still look for you. And if I found you, I would choose you again.",
      },
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
      entry: [
        "Our first meeting was supposed to be our last. Little did I know that one meeting would turn into a two-year journey (so far) with the person I now call my life partner. ❤️",
        "I've made a lot of mistakes in my life, and there are plenty of things I wish I could go back and do differently. But if I were given the chance to turn back time and rewrite my story, choosing you is the one thing I would never change. Not a single moment, not a single second.",
        "Because somehow, among all the things life could have given me, it gave me you. And if there's one thing I'm certain of, it's that no matter how many times I get to start over, I would always want our story to find its way back to us. ❤️",
      ],
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
      date: "14 days at your grandmas",
      title: "14 days at your grandmas",
      caption: "The plan was simple. We ignored it, in the best way.",
      note: "I remember not wanting the night to figure out how to end.",
      entry: [
        "Do you remember those 14 days at your grandma’s? Of course you do. ❤️ Looking back now, it feels like a little sneak peek into our future, a glimpse of how we would live, love, and function as a team. And somehow, when those days ended, it felt like we simply carried on from where we left off.",
        "It’s one of those memories I find myself returning to, whether we’re on the bus, out for a run, or even in the middle of an argument. It brings me comfort every single time. It reminds me of us, of how naturally we fit into each other’s lives, and of how happy I am that I get to do life with you.",
        "Those 14 days will always be my comfort memory, a little piece of our story I can revisit whenever I need to feel close to you. And the sweetest part? I get to carry that memory with me forever. ❤️",
      ],
      photo: "/photos/14_1.jpeg",
      photos: [
        "/photos/14_1.jpeg",
        "/photos/14_2.jpeg",
        "/photos/14_3.jpeg",
        "/photos/14_4.jpeg",
      ],
      alt: "14 days at your grandmas",
      doodle: "mug" as DoodleName,
    },
    {
      id: "trip",
      date: "Our First Christmas Together 🎄❤️",
      title: "Our First Christmas Together 🎄❤️",
      caption: "A bag, a ticket, and the feeling that we were already a team.",
      note: "I liked who we were when the day had no schedule.",
      entry: [
        "I remember how paranoid I was about spending Christmas with your parents. 😂 I was genuinely nervous! And then came the legendary race to catch the train to Ústí. OMG, the adrenaline! I honestly still can't believe I made it. Little did I know that running for trains would become a recurring theme in our relationship. Maybe that's where it all started. 😭❤️",
        "And then there was our time at the Christmas market in Brno, where you introduced me to svařák and welcomed me into one of your favourite traditions. It was such a sweet feeling, being invited into your world and getting to experience these little things through you.",
        "But one moment I still remember clearly is seeing that guy from the factory spot you and feeling so proud. My immediate thought was, \"Yeah, that's mine!\" 😂❤️ Because honestly, what else was I supposed to think? A 10/10 hot island princess, and somehow, she's my girl.",
        "Looking back, our first Christmas was more than just a holiday. It was another little step into your world, another memory that became ours, and another reminder of how lucky I am to be the person standing beside you. And if every Christmas from now on gets to be with you, then I've already got my favourite tradition. ❤️🎄",
      ],
      photo: "/photos/x_1.jpeg",
      photos: [
        "/photos/x_1.jpeg",
        "/photos/x_2.jpeg",
        "/photos/x3.jpeg",
        "/photos/x_4.jpeg",
      ],
      alt: "Our First Christmas Together",
      doodle: "ticket" as DoodleName,
    },
    {
      id: "laugh",
      date: "Our Ridiculous Prague Adventure 😂❤️",
      title: "Our Ridiculous Prague Adventure 😂❤️",
      caption: "Proof that we are not as composed as we pretend.",
      note: "I hope we never get too cool to laugh like that.",
      entry: [
        "Do you remember our ridiculous trip to Prague and that weird Airbnb with the homeless guys? First of all, WTF was that? 😭😂 I swear, this is one of those stories we'll be telling for years to come. Sometimes I genuinely wonder what happened to that guy. I guess we'll never know.",
        "But that trip also introduced us to that song — you know the one that goes, “And I wonder if you know how it really feels to be left outside alone when it's cold out here.” I still don't even know the name, but whenever I hear it, I feel a little closer to you. It's funny how a song can become attached to a moment in time, and suddenly, every time you hear it, you're right back there again.",
        "Back then, we didn't even have an apartment together. We were still figuring things out, building our relationship one memory at a time. And yet, even when you were supposed to have some time in Prague away from me, you convinced me that we should spend that time together. ❤️",
        "I don't think you realise how much that meant to me. Knowing that, out of everything you could be doing, what you really wanted was to spend time with me is such an incredible feeling. It showed me something about the kind of girlfriend you were and the kind of partner you would become.",
        "And honestly, I'm so lucky. Lucky that you want me around, lucky that you choose my company, and lucky that even our most ridiculous adventures become memories I wouldn't trade for anything.",
        "Even a questionable Airbnb, some mysterious homeless guys, and a song whose name we still don't know. 😂❤️",
      ],
      photo: "/photos/praha_1.jpeg",
      photos: [
        "/photos/praha_1.jpeg",
        "/photos/praha_2.jpeg",
        "/photos/praha_3.jpeg",
        "/photos/praha_4.jpeg",
      ],
      alt: "Our Ridiculous Prague Adventure",
      doodle: "camera" as DoodleName,
    },
    {
      id: "celebration",
      date: "The Beginning of Our Home 🏡❤️",
      title: "The Beginning of Our Home 🏡❤️",
      caption: "Cake, or something that stood in for cake.",
      note: "I like marking time with you. It makes the ordinary days feel chosen.",
      entry: [
        "Honestly, I'm still surprised by how quickly we decided to move in together and how little I fought the idea. It hit me like a school bus on a highway. 😂 But looking back, maybe my heart had already made the decision before my brain could catch up.",
        "After spending Christmas and New Year's together, watching you leave was one of the most painful feelings I'd experienced. Suddenly, living in Brno felt empty and pointless. It was like I'd reached the end of a chapter in my life, and for the first time, I didn't feel the need to hold on to it. I was ready to let it go.",
        "And the funny thing is, it wasn't even that scary. Deep down, I knew I was heading somewhere better. Somewhere I could truly call home. Somewhere I wouldn't have to count the days until I saw you again because I'd get to wake up next to you, share the ordinary moments with you, and build a life with you.",
        "People say home is where your heart is. Others say home is where you feel loved. And honestly, I think both are true, because you have my heart, and I have never felt more loved than when I'm beside you.",
        "So maybe home was never really a place for me. Maybe it was always going to be a person.",
        "And for me, that person is you. Wherever life takes us, whatever changes around us, as long as I get to come home to you, I'll know I'm exactly where I'm supposed to be. ❤️",
      ],
      photo: "/photos/Apartment_1.jpeg",
      photos: [
        "/photos/Apartment_1.jpeg",
        "/photos/Apartment_2.jpeg",
        "/photos/Apartment_3.jpeg",
        "/photos/Apartment_4.jpeg",
      ],
      alt: "The Beginning of Our Home",
      doodle: "cake" as DoodleName,
    },
    {
      id: "ordinary",
      date: "Our Second Christmas 🎄❤️",
      title: "Our Second Christmas 🎄❤️",
      caption: "The kind of day I would not trade for a louder one.",
      note: "If the rest of our life has more evenings like this one, I am already lucky.",
      entry: [
        "These pictures remind me of our second Christmas together, especially that Christmas photoshoot. 😂❤️ I remember us arguing, and looking back, I realise there are things I want to do better going forward. I want to keep learning how to understand you, see things from your perspective, and love you in ways that make you feel safe, understood, and appreciated. I'm not perfect, but I promise to keep trying, because you deserve that effort from me.",
        "No matter what happens, my love, I'm here for you. Through thick and thin, through the beautiful moments and the difficult ones, I want us to keep learning, growing, and choosing each other.",
        "And the funniest thing is that even though we were both so upset during that photoshoot, look at us! We still look perfect together. 😂❤️ At least from where I'm standing, I genuinely cannot imagine another human being who fits me the way you do.",
        "You're one in a trillion, my love. Actually, scratch that. There aren't even a trillion people on this planet yet, and at the rate we're going, humanity might go extinct before we get there. 😭😂 So you're not one in a trillion. You're one in an eternity, and I'm just the lucky bastard who somehow found you.",
        "And if I had to live this life all over again, I'd still want to be that lucky bastard. Every single time. ❤️",
      ],
      photo: "/photos/x2_1.jpeg",
      photos: [
        "/photos/x2_1.jpeg",
        "/photos/x2_2.jpeg",
        "/photos/x2_3.jpeg",
        "/photos/x2_4.jpeg",
      ],
      alt: "Our Second Christmas",
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
        id: "first-trip",
        question: "Where was our first trip outside the Czech Republic?",
        options: [
          { text: "Turkey" },
          { text: "Cinque Terre" },
          { text: "Seychelles" },
          { text: "Lanzarote" },
        ] as QuizOption[],
        answer: 1,
        hint: "The one with the long cliff walk, in clothes meant for TikToks.",
        sticker: "Cinque Terre",
      },
      {
        id: "food",
        question: "What is our go-to comfort food?",
        options: [
          { text: "Sushi from around the corner" },
          { text: "Pizza and a movie night" },
          { text: "Indian from Taj Mahal" },
          { text: "Burgers after a long day" },
        ] as QuizOption[],
        answer: 2,
        hint: "The place with the curry that always fixes everything.",
        sticker: "Taj Mahal",
      },
      {
        id: "phrase",
        question: "Complete this phrase: we suppose to love one another like .........",
        options: [
          { text: "Bonnie and Clyde" },
          { text: "Romeo" },
          { text: "Forever" },
          { text: "Crazy" },
        ] as QuizOption[],
        answer: 1,
        hint: "Not Juliet. Just him.",
        sticker: "Romeo",
      },
      {
        id: "trip-photo",
        question: "Which of these pictures was taken on our first trip together?",
        options: [
          { text: "", photo: "/photos/trips/first_trip_1.jpeg" },
          { text: "", photo: "/photos/trips/first_trip_2.jpeg" },
          { text: "", photo: "/photos/trips/first_trip_3.jpeg" },
        ] as QuizOption[],
        answer: 0,
        hint: "The one that started it all.",
        sticker: "The trip",
      },
      {
        id: "pet-name",
        question: "What is the first pet name I called you?",
        options: [
          { text: "Babe" },
          { text: "Honey" },
          { text: "Sugar" },
          { text: "Love" },
        ] as QuizOption[],
        answer: 2,
        hint: "Sweet, simple, and it stuck.",
        sticker: "Sugar",
      },
      {
        id: "home",
        question: "What is the most recent pet name?",
        options: [
          { text: "My baby" },
          { text: "My love" },
          { text: "My snoog" },
          { text: "My heart" },
        ] as QuizOption[],
        answer: 2,
        hint: "It is silly, and it is ours.",
        sticker: "My snoog",
      },
    ],
  },

  puzzle: {
    kicker: "Chapter 4",
    title: "Put us back together",
    intro: "Tap a piece, then tap its place. Dragging works too.",
    peek: "Peek for a second",
    /** Leave "" to use the drawn picture. Or set "/photos/us.jpg". */
    image: "/photos/trips/WhatsApp%20Image%202026-10-28%20at%2021.54.42%20%2813%29.jpeg",
    alt: "The two of us",
    message:
      "No matter how many pieces life throws at us, I’m glad I get to put mine together with you.",
    again: "Scatter us again",
    /** Shown in the popup after she solves the puzzle. Replace this with your message. */
    note: {
      title: "Piece by Piece, Always Us 🧩❤️",
      paragraphs: [
        "The same way you carefully put this puzzle together, I promise to do my best to put us back together whenever life gets messy. Whenever we argue, whenever we misunderstand each other, whenever we disagree or struggle to see things from the other's perspective, I will never stop trying to find our way back to each other.",
        "Because I know that loving you doesn't mean we'll always get everything right. Sometimes, pieces will feel out of place, and sometimes, we might struggle to understand how they fit. But I promise not to give up on the picture we're building together.",
        "I'll listen when I need to understand, apologise when I'm wrong, and learn when I fall short. I'll reach for your hand even when things feel difficult, because I'd rather work through the hard moments with you than imagine a life without you.",
        "And just like this puzzle, I will keep showing up, piece by piece, until we can look at what we've built together and see us again — whole, beautiful, and still choosing each other.",
        "Because no matter how many times life scatters our pieces, my love, I will always want to put them back together with you. ❤️",
      ],
      close: "Close",
    },
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
          "The way you check that im included when there is a family gathering. You make sure that i am not left out",
      },
      {
        id: "understood",
        label: "When you are not here",
        message:
          "when you are not around it feels like my life hits the pause button, everytime you have not spent the night at home i dont even sleep on our bed",
      },
      {
        id: "memory",
        label: "A favorite memory",
        message:
          "the morning at your grandma flat when you told me you loved me too",
        photo: "",
        alt: "A favorite memory",
        doodle: "camera" as DoodleName,
      },
      {
        id: "hands",
        label: "Your hands",
        message: "they are so tiny and warm and they fit perfectly in mine",
      },
      {
        id: "brave",
        label: "Your particular kind of brave",
        message:
          "the fact that you still stay with me especially in the czech republic with all the social media hate you are still proud to be with me",
      },
      {
        id: "future",
        label: "Your personality",
        message:
          "you have a very strong and kind personality but around me you turn into the sweetest mushiest baby and i love to see both in action",
      },
      {
        id: "clip",
        label: "Where I would like to be",
        message:
          "I see us getting married having kids together, and growing old together",
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
    photo: "/photos/thelastpage.jpeg",
    alt: "Us",
    doodle: "heart" as DoodleName,
    letter: [
      "My love,",
      "Two years ago I didn’t know that ordinary days could feel like this. You changed the shape of my life in the quiet ways: the way a room is better when you are in it, the way I look for you in a good moment before I notice I’m doing it.",
      "Thank you for the laughs, the patience, the detours, and the soft in-between hours. I love the person you are, and I love the life we keep choosing on purpose.",
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

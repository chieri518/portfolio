import babyChieri from "../assets/story/baby_chieri.jpg";
import letterPhoto from "../assets/story/letter.jpeg";
import dancePhoto from "../assets/story/dance.jpg";
import withGrandpa from "../assets/story/with_grandpa.jpg";
import withWanwan from "../assets/story/with_wanwan.JPG";
import malaysia1 from "../assets/story/malaysia1.JPG";
import malaysia2 from "../assets/story/malaysia2.JPG";
import malaysia3 from "../assets/story/malaysia3.JPG";
import canada1 from "../assets/story/canada1.JPG";
import canada2 from "../assets/story/canada2.jpeg";
import canada3 from "../assets/story/canada3.jpg";
import menlo1 from "../assets/story/menlo1.jpg";
import menlo3 from "../assets/story/menlo3.jpg";
import england1 from "../assets/story/england1.jpg";
import england2 from "../assets/story/england2.JPG";
import group1 from "../assets/story/chetz-group.jpg";
import ikkadanran_workshop_1 from "../assets/story/chetz-workshop.jpg";

export const storyIntro = {
  eyebrow: "A little about me",
  title: "My Story",
  lede: "Here's the long-form version, with the people, places, and small moments that made me who I am today.",
};

export const storyChapters = [
  {
    id: "tokyo",
    chapter: "Chapter 1",
    age: "Tokyo · the very beginning",
    title: "Beginning of the story",
    paragraphs: [
      "I was born in Tokyo — a calm, easygoing baby who, by every account, somehow always knew exactly when to be quiet.",
      "My name, Chieri, sounded like “cherry” to everyone who heard it, and the association never let go. All these years later it's still the first thing people connect me with — so much so that it eventually became my whole personal brand. 🍒",
    ],
    photos: [
      {
        src: babyChieri,
        caption: "Baby me!",
      },
    ],
  },
  {
    id: "nara",
    chapter: "Chapter 2",
    age: "Nara · age 3 onwards",
    title: "Growing up in the countryside",
    paragraphs: [
      "When I was three, my mom and I moved to Nara to live with my grandpa — out in the deep countryside, tucked among the mountains, where every neighbor knew your name.",
      "My mom worked from early morning until late at night, so a lot of my childhood was spent figuring things out on my own. I think that's exactly where my independent streak was born. One afternoon, with my mom out, I had to order delivery pizza by myself. She'd left a note with everything I was supposed to say on the phone — but I never found it, so I just worked it out as I went. When the pizza actually showed up at the door, my mom couldn't believe what I'd pulled off. I was so proud.",
      "Once, when I was seven, I took the train to Osaka by myself to meet family. It didn't feel like a big deal at the time — it was just what needed to happen, so I did it.",
      "I was the outgoing one — usually the center of attention and always up for making a new friend. I loved to dance, and from age four I was in hip-hop classes, which I kept up until I was ten. When I wasn't dancing, I was outside biking around the countryside with my friends until the sun went down.",
      "When I was five, my mom came home carrying a big cardboard box full of little holes. I leaned in to peek, a tiny nose popped out — and I was so startled I burst into tears. That was Wanwan, my chihuahua (named after the sound dogs make in Japanese). I was terrified of him for all of about a week before he became my very best friend. And through all of it there was my grandpa: retired, gentle, my quiet companion on the long afternoons when it was just the two of us at home.",
    ],
    photos: [
      {
        src: letterPhoto,
        caption: "“Cheer up with your work, always” — my letter to Mom, age 4.",
        feature: true,
      },
      {
        src: dancePhoto,
        caption: "Hip-hop dance days (started at four).",
      },
      {
        src: withGrandpa,
        caption: "Home in Nara, with Grandpa.",
      },
      {
        src: withWanwan,
        caption: "Wanwan, my chihuahua and best friend.",
      },
    ],
  },
  {
    id: "tokyo-england",
    chapter: "Chapter 3",
    age: "Tokyo & England · grades 3-5",
    title: "The hardest years",
    paragraphs: [
      "When I was eight, my mom and I moved back to Tokyo — this time to the center of the city. After the mountains and quiet of Nara, everything was tall, fast, and crowded. I transferred schools in the third grade, and that's where things got hard.",
      "I was bullied — badly enough that, for a while, I stopped going to school at all. The adults who were meant to help didn't really know how, and finding a way forward became its own uphill battle. For a time I went to a small government-run school for kids who, like me, just needed somewhere safer to be.",
      "It was the loneliest stretch of my life — the outgoing, center-of-attention kid suddenly on the outside of everything.",
      "The first way out came from leaving. At ten, I flew to a summer school in England entirely on my own — without speaking a word of English. The first days were isolating, and there was some hazing, but by the second week I had friends. And when I spotted another Japanese girl sitting on the outside of everything, exactly where I'd been, I pulled her in. We became a little group. Somewhere in that, it finally clicked: the bullying back home had never really been about me. It wasn't mine to carry — and I could be the person who ends someone else's loneliness instead.",
    ],
    photos: [
      {
        src: england1,
        caption: "Summer school in England, age 10.",
      },
      {
        src: england2,
        caption: "Making friends, a world away from home.",
      },
    ],
  },
  {
    id: "malaysia",
    chapter: "Chapter 4",
    age: "Malaysia · grades 5-9",
    title: "Finding my footing",
    paragraphs: [
      "Then came Malaysia, just outside Kuala Lumpur — where, from the fifth grade on, I lived in a house with a guardian and a handful of other students. I was the youngest of all of them. Something about the warmth there let me be fully myself again — back to normal. On my very first day, language barrier and all, I walked straight up to a student sitting alone and said hi. We became close. That was the whole secret: reach out, and the rest follows.",
      "I arrived knowing zero English — not a single word. So I threw myself at it, sometimes studying until 2 a.m., and within a few years I'd gone from understanding nothing to testing ahead and skipping a grade outright. Learning the language opened the entire world to me; I still wonder, if I hadn't, how would I ever have met the people who became my best friends?",
    ],
    photos: [
      {
        src: malaysia1,
        caption: "Experiencing new cultures.",
      },
      {
        src: malaysia2,
        caption: "New friends, new world.",
      },
      {
        src: malaysia3,
        caption: "With classmates.",
      },
    ],
  },
  {
    id: "canada",
    chapter: "Chapter 5",
    age: "Canada · Cape Breton Island · grades 10–11",
    title: "An ocean away",
    paragraphs: [
      "For tenth to eleventh grade I moved yet again — this time to Cape Breton Island, a small, windswept place off the coast of Nova Scotia, about as far from a Tokyo high-rise as you can get. Another homestay family, another brand-new world, and the challenge of the demanding IB program.",
      "By now, though, I'd learned the thing that made all the moving survivable: I could land just about anywhere and find my people. A tiny island in the Atlantic was no exception.",
      "The IB program itself was the hardest I have ever studied — before or since. I poured everything into it. I never got to finish: COVID cut the school year short and sent everyone home. But the discipline I built grinding through those courses is something I've carried with me ever since.",
    ],
    photos: [
      {
        src: canada1,
        caption: "About as far from a Tokyo high-rise as you can get.",
      },
      {
        src: canada3,
        caption: "The IB years on Cape Breton Island.",
      },
      {
        src: canada2,
        caption: "Island life on the Atlantic.",
      },
    ],
  },
  {
    id: "covid",
    chapter: "Chapter 6",
    age: "COVID · Tokyo · founding chetz",
    title: "When the world locked down",
    paragraphs: [
      "Then the world locked down. Stuck at home in Japan during COVID, I did the thing that, by then, was simply who I am: I built a place for people to belong. I founded a nonprofit that connected students across the globe for language exchange and a wider view of the world — the same hand-reaching-out from England and Malaysia, just at a much bigger scale.",
      "A team of around twenty volunteers helped run it, and it's still going strong five years later, even after I stepped away. Some of the students we reached went on to study abroad themselves, and I began giving talks and seminars about studying abroad and building communities.",
    ],
    photos: [
      {
        src: group1,
        caption: "chetz — the community that's still going.",
        wide: true,
      },
      {
        src: ikkadanran_workshop_1,
        caption: "One of our chetz workshops.",
        wide: true,
      },
    ],
    links: [{ label: "Explore chetz", to: "/chetz" }],
  },
  {
    id: "silicon-valley",
    chapter: "Chapter 7",
    age: "Silicon Valley · now",
    title: "Building something of my own",
    paragraphs: [
      "That same thread carried me here, to Silicon Valley. I studied entrepreneurship at Menlo College — networking, volunteering at startup events, and building things — and since graduating I've been putting all of it to work, building a career in the place I'd only ever read about. The lonely kid in Tokyo would never have believed it, but reaching out turned out to be the thing I do best.",
    ],
    photos: [
      {
        src: menlo1,
        caption: "Building things at Menlo, in Silicon Valley.",
      },
      {
        src: menlo3,
        caption: "Out in the startup community.",
      },
    ],
    links: [
      { label: "See my experience", to: "/experience" },
      { label: "Explore my projects", to: "/projects" },
    ],
  },
];

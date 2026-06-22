// Journal posts. Order matters — it's the list order.

export type BlogPost = {
  slug: string;
  cat: string;
  date: string;
  title: string;
  excerpt: string;
  listImg: string;
  coverImg: string;
  coverRatio: string;
  midImg: string;
  midRatio: string;
  lead: string;
  body1: string;
  quote: string;
  body2: string;
};

const img = (name: string) => `/images/${name}`;

export const blog: BlogPost[] = [
  {
    slug: "bl1",
    cat: "Real Weddings",
    date: "December 2025",
    title: "Vishnu & Shilpa: A Palakkad Celebration in Full Bloom",
    excerpt:
      "Temple bells, jasmine garlands and a courtyard full of family. A traditional Kerala wedding photographed exactly as it unfolded.",
    listImg: img("vishnu-shilpa-4.jpeg"),
    coverImg: img("vishnu-shilpa-1.webp"),
    coverRatio: "1080/1350",
    midImg: img("vishnu-shilpa-7.jpeg"),
    midRatio: "1080/1440",
    lead: "There is a particular stillness to a Kerala morning before a wedding begins — the scent of jasmine, the hush before the melam, the family moving softly through the courtyard. Vishnu and Shilpa's day began exactly there.",
    body1:
      "The ceremony unfolded without hurry. Elders blessed the couple, the nadaswaram rose and fell, and somewhere a grandmother wiped away a quiet tear. I spent most of it a few steps back, simply watching for the moments that mattered — the ones no one thinks to pose for.",
    quote:
      "We forgot the camera was even there. And then we saw the photos, and cried all over again.",
    body2:
      "By the time the sadya was served and the last guests lingered over payasam, the light had gone soft and golden. These are the frames we live for — unguarded, warm, and entirely theirs.",
  },
  {
    slug: "bl2",
    cat: "Tips",
    date: "November 2025",
    title: "What to Wear for Your Pre-Wedding Shoot",
    excerpt:
      "A few gentle thoughts on colour, fabric and comfort — so you look like yourselves, only a little more cinematic.",
    listImg: img("yadu-aswathy-2.webp"),
    coverImg: img("yadu-aswathy-1.webp"),
    coverRatio: "1080/1350",
    midImg: img("yadu-aswathy-4.webp"),
    midRatio: "1080/1350",
    lead: "The question I hear most often is also the simplest to answer: wear what makes you feel like the best version of yourselves. A pre-wedding shoot is not a fashion shoot — it is a portrait of the two of you, together.",
    body1:
      "Lean towards soft, earthy tones — ivories, ochres, deep greens and muted reds photograph beautifully against Kerala's landscapes. Avoid loud logos and harsh neons; they pull the eye away from your faces. Flowing fabrics catch the breeze and the light, and movement always makes for the most romantic frames.",
    quote:
      "When you are comfortable, it shows — and comfort is the most photogenic thing in the world.",
    body2:
      "Bring one considered change of outfit, keep accessories gentle, and trust us with the rest. We will find the light, the location and the quiet moments. You just have to be together.",
  },
  {
    slug: "bl3",
    cat: "Notes",
    date: "October 2025",
    title: "Golden Hour in Kerala: Why Timing Is Everything",
    excerpt:
      "The difference between a lovely photograph and an unforgettable one is often just twenty minutes of light. Here is how we plan for it.",
    listImg: img("mahesh-athira-2.jpeg"),
    coverImg: img("mahesh-athira-1.jpeg"),
    coverRatio: "1080/1440",
    midImg: img("mahesh-athira-4.jpeg"),
    midRatio: "1080/1440",
    lead: "There is an hour, just after sunrise and again before sunset, when the light in Kerala turns to honey. Skin glows, shadows soften, and even the most ordinary backdrop becomes cinematic. We plan entire shoots around it.",
    body1:
      "Harsh midday sun is the enemy of romance — it flattens faces and squints eyes. So we wake early, or we wait for the day to cool. Twenty minutes of the right light will always outshine two hours of the wrong kind.",
    quote:
      "The difference between a lovely photograph and an unforgettable one is often just the time of day.",
    body2:
      "If you are planning your timeline, talk to us before you lock the muhurtham and the portraits. A little foresight gives us that golden window — and gives you photographs that feel lit from within.",
  },
  {
    slug: "bl4",
    cat: "Real Weddings",
    date: "September 2025",
    title: "Anakha & Siddharth: A Fort Kochi Love Story in Black",
    excerpt:
      "Ochre walls, painted murals and two people in elegant black. A city wedding shoot through the old streets of Kochi.",
    listImg: img("anakha-siddharth-1.webp"),
    coverImg: img("anakha-siddharth-2.webp"),
    coverRatio: "1080/1440",
    midImg: img("anakha-siddharth-3.webp"),
    midRatio: "1080/1440",
    lead: "Fort Kochi at golden hour is a photographer's dream — peeling ochre walls, painted murals, fishing nets against the sky. Anakha and Siddharth moved through the old city in elegant black, and it felt like the streets had been waiting for them.",
    body1:
      "We wandered without a shot list. A quiet doorway here, a burst of colour there, a glance exchanged while a cycle rattled past. The city did half the work; the two of them did the rest.",
    quote:
      "Every street, every wall became part of our story. They saw the city the way we felt it.",
    body2:
      "As the light dropped over the harbour, we found our last frame against a painted wall, the couple framed in shadow and gold. A wedding shoot that felt less like a session and more like an evening walk through a city in love.",
  },
];

export const getPost = (slug: string) => blog.find((b) => b.slug === slug);

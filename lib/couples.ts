// Portfolio couples. Order matters — it's the grid order.
// Detail hero = photos[0]; detail grid = photos[1..]. gridCover may differ from photos[0].

export type Couple = {
  slug: string;
  couple: string;
  place: string; // grid label
  detailPlace: string; // detail page label (includes year)
  kicker: string;
  intro: string;
  quote: string;
  gridCover: string;
  gridRatio: string;
  heroRatio: string;
  pairRatio: string;
  photos: string[];
};

const img = (name: string) => `/images/${name}`;

export const couples: Couple[] = [
  {
    slug: "vishnu",
    couple: "Vishnu & Shilpa",
    place: "Palakkad, Kerala",
    detailPlace: "Palakkad, Kerala · 2025",
    kicker: "a celebration",
    intro:
      "Backwaters at first light, jasmine in her hair, and the sea breaking behind them. Vishnu and Shilpa's Palakkad celebration was pure, unhurried joy.",
    quote:
      "We forgot the camera was even there. And then we saw the photos, and cried all over again.",
    gridCover: img("vishnu-shilpa-4.jpeg"),
    gridRatio: "1080/1437",
    heroRatio: "1080/1350",
    pairRatio: "1080/1437",
    photos: [
      "vishnu-shilpa-1.webp",
      "vishnu-shilpa-4.jpeg",
      "vishnu-shilpa-3.jpeg",
      "vishnu-shilpa-2.webp",
      "vishnu-shilpa-5.jpeg",
      "vishnu-shilpa-6.jpeg",
      "vishnu-shilpa-7.jpeg",
      "vishnu-shilpa-8.jpeg",
      "vishnu-shilpa-9.jpeg",
      "vishnu-shilpa-10.jpeg",
      "vishnu-shilpa-11.jpeg",
      "vishnu-shilpa-12.webp",
      "vishnu-shilpa-13.webp",
    ].map(img),
  },
  {
    slug: "mahesh",
    couple: "Mahesh & Athira",
    place: "Trivandrum, Kerala",
    detailPlace: "Trivandrum, Kerala · 2025",
    kicker: "a love story",
    intro:
      "Golden light spilling through the hills above Trivandrum, and two people who never quite stopped laughing. An afternoon that felt like a held breath.",
    quote:
      "It felt less like a shoot and more like a walk with an old friend. The photos still make us grin.",
    gridCover: img("mahesh-athira-1.jpeg"),
    gridRatio: "1080/1440",
    heroRatio: "1080/1440",
    pairRatio: "1080/1440",
    photos: [
      "mahesh-athira-1.jpeg",
      "mahesh-athira-2.jpeg",
      "mahesh-athira-3.jpeg",
      "mahesh-athira-4.jpeg",
      "mahesh-athira-5.jpeg",
      "mahesh-athira-6.jpeg",
    ].map(img),
  },
  {
    slug: "rohin",
    couple: "Rohin & Jana",
    place: "Bangalore",
    detailPlace: "Bangalore · 2026",
    kicker: "a grand affair",
    intro:
      "Palace columns, a sweep of crimson, and a couple made for the frame. Rohin and Jana turned Bangalore into pure cinema.",
    quote:
      "They told us to simply feel grand — and somehow we did. Every photo looks like a film still.",
    gridCover: img("rohin-jana-1.jpeg"),
    gridRatio: "1080/1440",
    heroRatio: "1080/1440",
    pairRatio: "1080/1440",
    photos: [
      "rohin-jana-1.jpeg",
      "rohin-jana-2.jpeg",
      "rohin-jana-3.jpeg",
      "rohin-jana-4.jpeg",
      "rohin-jana-5.jpeg",
      "rohin-jana-6.jpeg",
    ].map(img),
  },
  {
    slug: "yadu",
    couple: "Yadu & Aswathy",
    place: "Trivandrum, Kerala",
    detailPlace: "Trivandrum, Kerala · 2025",
    kicker: "a quiet bloom",
    intro:
      "Ivy-green walls, lotus ponds, and a love that needed no prompting. Yadu and Aswathy moved through Trivandrum like the morning belonged to them.",
    quote:
      "Every frame feels like a moment we actually lived. That is the magic — nothing felt staged.",
    gridCover: img("yadu-aswathy-1.webp"),
    gridRatio: "1080/1350",
    heroRatio: "1080/1350",
    pairRatio: "1080/1350",
    photos: [
      "yadu-aswathy-1.webp",
      "yadu-aswathy-2.webp",
      "yadu-aswathy-3.webp",
      "yadu-aswathy-4.webp",
      "yadu-aswathy-5.webp",
      "yadu-aswathy-6.webp",
    ].map(img),
  },
  {
    slug: "arjun",
    couple: "Arjun & Aparnna",
    place: "Trivandrum, Kerala",
    detailPlace: "Trivandrum, Kerala · 2023",
    kicker: "gold & grace",
    intro:
      "Kanjivaram silk, temple gold, and the warm hush of a traditional Kerala wedding. Arjun and Aparnna wore their heritage like a second skin.",
    quote:
      "They captured the rituals, the laughter with the cooks, every tiny detail of our day. Heirloom photographs, truly.",
    gridCover: img("arjun-aparnna-4.jpeg"),
    gridRatio: "1080/1350",
    heroRatio: "1080/1350",
    pairRatio: "1080/1350",
    photos: [
      "arjun-aparnna-1.jpeg",
      "arjun-aparnna-2.jpeg",
      "arjun-aparnna-3.jpeg",
      "arjun-aparnna-4.jpeg",
      "arjun-aparnna-5.jpeg",
      "arjun-aparnna-6.jpeg",
    ].map(img),
  },
  {
    slug: "anakha",
    couple: "Anakha & Siddharth",
    place: "Ernakulam, Kerala",
    detailPlace: "Ernakulam, Kerala · 2025",
    kicker: "a city in black",
    intro:
      "Fort Kochi at golden hour — peeling ochre walls, painted birds in flight, and a couple in elegant black moving through the old city like it was built for them.",
    quote:
      "Every street, every wall became part of our story. They saw the city the way we felt it.",
    gridCover: img("anakha-siddharth-1.webp"),
    gridRatio: "1080/1440",
    heroRatio: "1080/1440",
    pairRatio: "1080/1440",
    photos: [
      "anakha-siddharth-1.webp",
      "anakha-siddharth-2.webp",
      "anakha-siddharth-3.webp",
      "anakha-siddharth-4.webp",
      "anakha-siddharth-5.webp",
    ].map(img),
  },
  {
    slug: "soorya",
    couple: "Soorya & Nithun",
    place: "Trivandrum, Kerala",
    detailPlace: "Trivandrum, Kerala · 2025",
    kicker: "sacred vows",
    intro:
      "Lotus garlands, temple gold, and a forehead kiss before the deities. Soorya and Nithun's muhurtham was tender, sacred, and overflowing with tradition.",
    quote:
      "They held the holiest moments of our wedding so gently. We will treasure these forever.",
    gridCover: img("soorya-nithun-2.jpeg"),
    gridRatio: "1080/1344",
    heroRatio: "1080/1344",
    pairRatio: "1080/1344",
    photos: ["soorya-nithun-1.jpeg", "soorya-nithun-2.jpeg"].map(img),
  },
  {
    slug: "dhanesh",
    couple: "Dhanesh & Steffy",
    place: "Kottayam, Kerala",
    detailPlace: "Kottayam, Kerala · 2022",
    kicker: "in white",
    intro:
      "Soft window light, a lace veil, and a bouquet held close. Dhanesh and Steffy's Kottayam wedding was timeless monochrome — quiet, classic, and full of grace.",
    quote:
      "The black-and-white frames feel like they belong in a film. Pure elegance, exactly as we hoped.",
    gridCover: img("dhanesh-steffy-2.jpeg"),
    gridRatio: "1080/1344",
    heroRatio: "1080/1344",
    pairRatio: "1080/1344",
    photos: [
      "dhanesh-steffy-1.jpeg",
      "dhanesh-steffy-2.jpeg",
      "dhanesh-steffy-3.jpeg",
    ].map(img),
  },
];

export const getCouple = (slug: string) =>
  couples.find((c) => c.slug === slug);

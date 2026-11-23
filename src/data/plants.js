/**
 * Plant catalogue for Paradise Nursery.
 * Three categories, six unique plants each (18 total).
 */

const img = (name) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(
    name
  )}&size=200&background=e8f5e9&color=1b5e20&bold=true`;

export const plantCategories = [
  {
    name: "Air Purifying Plants",
    description:
      "These plants filter common indoor pollutants and are very forgiving for new plant owners.",
    plants: [
      { id: "ap-1", name: "Snake Plant", price: 18.0, image: img("Snake Plant") },
      { id: "ap-2", name: "Peace Lily", price: 22.5, image: img("Peace Lily") },
      { id: "ap-3", name: "Spider Plant", price: 15.0, image: img("Spider Plant") },
      { id: "ap-4", name: "Boston Fern", price: 19.5, image: img("Boston Fern") },
      { id: "ap-5", name: "Rubber Plant", price: 26.0, image: img("Rubber Plant") },
      { id: "ap-6", name: "Aloe Vera", price: 14.0, image: img("Aloe Vera") },
    ],
  },
  {
    name: "Low Light Plants",
    description:
      "Perfect for north facing rooms and offices that never quite get enough daylight.",
    plants: [
      { id: "ll-1", name: "ZZ Plant", price: 24.0, image: img("ZZ Plant") },
      { id: "ll-2", name: "Pothos", price: 12.5, image: img("Pothos") },
      { id: "ll-3", name: "Philodendron", price: 17.0, image: img("Philodendron") },
      { id: "ll-4", name: "Cast Iron Plant", price: 29.0, image: img("Cast Iron Plant") },
      { id: "ll-5", name: "Dracaena", price: 21.0, image: img("Dracaena") },
      { id: "ll-6", name: "Chinese Evergreen", price: 23.5, image: img("Chinese Evergreen") },
    ],
  },
  {
    name: "Flowering Plants",
    description:
      "Bring colour into the house with these reliable bloomers for bright spots.",
    plants: [
      { id: "fl-1", name: "Orchid", price: 32.0, image: img("Orchid") },
      { id: "fl-2", name: "Anthurium", price: 27.5, image: img("Anthurium") },
      { id: "fl-3", name: "Bromeliad", price: 25.0, image: img("Bromeliad") },
      { id: "fl-4", name: "Kalanchoe", price: 16.0, image: img("Kalanchoe") },
      { id: "fl-5", name: "African Violet", price: 13.5, image: img("African Violet") },
      { id: "fl-6", name: "Begonia", price: 18.5, image: img("Begonia") },
    ],
  },
];

export const allPlants = plantCategories.flatMap((category) => category.plants);

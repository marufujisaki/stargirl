export interface Item {
  title: string;
  price: number;
  image: string;
  sizes: string[];
}

export const products: Item[] = [
  {
    title: "Elle bikini",
    price: 12,
    image: "1.png",
    sizes: ["XS", "S", "M"],
  },
  {
    title: "Alex bikini",
    price: 12,
    image: "2.png",
    sizes: ["L"],
  },
  {
    title: "Crochet top",
    price: 14,
    image: "4.png",
    sizes: ["XS", "S"],
  },
  {
    title: "Bodycon dress",
    price: 12,
    image: "5.png",
    sizes: ["M"],
  },
  {
    title: "Blair swimsuit",
    price: 22,
    image: "3.png",
    sizes: ["L"],
  },
  {
    title: "Red jacket",
    price: 35,
    image: "6.png",
    sizes: ["S", "M"],
  },
  {
    title: "Blue jacket",
    price: 45,
    image: "7.png",
    sizes: ["S", "M"],
  },
  {
    title: "White jacket",
    price: 35,
    image: "8.png",
    sizes: ["S", "M", "L"],
  },
  {
    title: "Black mini skirt",
    price: 20,
    image: "10.png",
    sizes: ["XS", "S", "M"],
  },
  {
    title: "Hot baby tee",
    price: 12,
    image: "9.png",
    sizes: ["S", "M", "L"],
  },
  {
    title: "Fire jeans",
    price: 25,
    image: "PENDIENTE.png",
    sizes: ["XS", "S", "M", "L"],
  },
  {
    title: "Shoulders top",
    price: 25,
    image: "11.png",
    sizes: ["S", "M"],
  },
];

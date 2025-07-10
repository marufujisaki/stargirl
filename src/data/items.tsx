export interface Item {
  title: string;
  price: number;
  image: string;
  sizes: string[];
}

export const products: Item[] = [
  {
    title: "Sun Bikini",
    price: 10,
    image: "https://i.ibb.co/WWqmXSZr/IMG-1253.jpg",
    sizes: ["S", "M"],
  },
  {
    title: "Moon Bikini",
    price: 10,
    image: "https://i.ibb.co/b5wgLj6Q/IMG-1236.jpg",
    sizes: ["S", "M"],
  },
  {
    title: "Boho skirt",
    price: 15,
    image: "https://i.ibb.co/VkyGBwR/IMG-1241.jpg",
    sizes: ["S", "M"],
  },
  {
    title: "Hot baby tee",
    price: 5,
    image: "https://i.ibb.co/xjtg92s/hottop.png",
    sizes: ["S", "M", "L"],
  },
  {
    title: "Black mini skirt",
    price: 10,
    image: "https://i.ibb.co/MyzYRWg/blackskirt.png",
    sizes: ["XS", "S"],
  },
  {
    title: "Fire jeans",
    price: 15,
    image: "https://i.ibb.co/mrWmyx1H/IMG-1277.jpg",
    sizes: ["S", "M"],
  },
  {
    title: "Red jacket",
    price: 20,
    image: "https://i.ibb.co/0GSDzT9/redjacket.png",
    sizes: ["S", "M"],
  },
  {
    title: "Off Shoulders top",
    price: 12,
    image: "https://i.ibb.co/1GrHKtQx/IMG-1165.jpg",
    sizes: ["S", "M"],
  },
  {
    title: "Bodycon dress",
    price: 8,
    image: "https://i.ibb.co/TkQ0cbs/stargirl5.png",
    sizes: ["M"],
  },
  {
    title: "Blue jacket",
    price: 30,
    image: "https://i.ibb.co/V30vt9M/bluejacket.png",
    sizes: ["M"],
  },
];

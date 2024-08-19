export interface Item {
  title: string;
  price: number;
  image: string;
  sizes: string[];
}

export const products: Item[] = [
  {
    title: "Hot baby tee",
    price: 10,
    image: "https://i.ibb.co/xjtg92s/hottop.png",
    sizes: ["S", "M", "L"],
  },
  {
    title: "Black mini skirt",
    price: 16,
    image: "https://i.ibb.co/MyzYRWg/blackskirt.png",
    sizes: ["XS", "S", "M"],
  },
  {
    title: "Fire jeans",
    price: 22,
    image: "https://i.ibb.co/JQdj1Ls/firejeans.png",
    sizes: ["S", "M", "L"],
  },
  {
    title: "Red jacket",
    price: 29,
    image: "https://i.ibb.co/0GSDzT9/redjacket.png",
    sizes: ["M", "L"],
  },
  {
    title: "Off Shoulders top",
    price: 22,
    image: "https://i.ibb.co/k8HwvLZ/11.png",
    sizes: ["S", "M"],
  },
  {
    title: "Blair swimsuit",
    price: 20,
    image: "https://i.ibb.co/WfRnyq9/stargirl3.png",
    sizes: ["L"],
  },
  {
    title: "Crochet top",
    price: 10,
    image: "https://i.ibb.co/0c5H2VC/stargirl4.png",
    sizes: ["XS", "S"],
  },
  {
    title: "Bodycon dress",
    price: 8,
    image: "https://i.ibb.co/TkQ0cbs/stargirl5.png",
    sizes: ["M"],
  },
  {
    title: "Blue jacket",
    price: 38,
    image: "https://i.ibb.co/V30vt9M/bluejacket.png",
    sizes: ["M"],
  },
  {
    title: "White jacket",
    price: 28,
    image: "https://i.ibb.co/hBxw3ZR/stargirl8.png",
    sizes: ["L"],
  },
  {
    title: "Elle bikini",
    price: 8,
    image: "https://i.ibb.co/ZTXNQDz/stargirl1.png",
    sizes: ["S"],
  },
];

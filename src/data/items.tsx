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
    image: "https://i.ibb.co/ZTXNQDz/stargirl1.png",
    sizes: ["XS", "S", "M"],
  },
  {
    title: "Alex bikini",
    price: 12,
    image: "https://i.ibb.co/2d0PV5M/stargirl2.png",
    sizes: ["L"],
  },
  {
    title: "Crochet top",
    price: 14,
    image: "https://i.ibb.co/0c5H2VC/stargirl4.png",
    sizes: ["XS", "S"],
  },
  {
    title: "Bodycon dress",
    price: 12,
    image: "https://i.ibb.co/TkQ0cbs/stargirl5.png",
    sizes: ["M"],
  },
  {
    title: "Blair swimsuit",
    price: 22,
    image: "https://i.ibb.co/WfRnyq9/stargirl3.png",
    sizes: ["L"],
  },
  {
    title: "Red jacket",
    price: 35,
    image: "https://i.ibb.co/M1dnMrF/stargirl6.png",
    sizes: ["M", "L"],
  },
  {
    title: "Blue jacket",
    price: 45,
    image: "https://i.ibb.co/rFL6FZk/stargirl7.png",
    sizes: ["S", "M"],
  },
  {
    title: "White jacket",
    price: 35,
    image: "https://i.ibb.co/hBxw3ZR/stargirl8.png",
    sizes: ["S", "M", "L"],
  },
  {
    title: "Black mini skirt",
    price: 20,
    image: "https://i.ibb.co/mbvCnQx/stargirl10.png",
    sizes: ["XS", "S", "M"],
  },
  {
    title: "Hot baby tee",
    price: 12,
    image: "https://i.ibb.co/k5dRn3Q/stargirl9.png",
    sizes: ["S", "M", "L"],
  },
  {
    title: "Fire jeans",
    price: 25,
    image: "https://i.ibb.co/SNBSzGB/12.png",
    sizes: ["XS", "S", "M", "L"],
  },
  {
    title: "Shoulders top",
    price: 25,
    image: "https://i.ibb.co/k8HwvLZ/11.png",
    sizes: ["S", "M"],
  },
];

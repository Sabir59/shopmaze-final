import { images } from "@/constants/images";
import { v4 as uuidv4 } from "uuid";

export const categoryCards = [
  {
    id: uuidv4(),
    name: "phones",
    href: "/phones",
    image: { ...images.categoryCardsPhone },
  },
  {
    id: uuidv4(),
    name: "laptops",
    href: "/laptops",
    image: { ...images.categoryCardsLaptop },
  },
  {
    id: uuidv4(),
    name: "smart watches",
    href: "/smartwatches",
    image: { ...images.categoryCardsSmartWatch },
  },
  {
    id: uuidv4(),
    name: "cameras",
    href: "/cameras",
    image: { ...images.categoryCardsCamera },
  },
  {
    id: uuidv4(),
    name: "headphones",
    href: "/headphones",
    image: { ...images.categoryCardsHeadphone },
  },
  {
    id: uuidv4(),
    name: "Gaming",
    href: "/Gaming",
    image: { ...images.categoryCardsGaming },
  },
];

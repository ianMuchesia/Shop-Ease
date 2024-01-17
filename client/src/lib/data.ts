import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

export const topHeaderLinks = [
  {
    id: 1,
    link: "https://twitter.com/",
    icon: FaTwitter,
  },
  {
    id: 2,
    link: "https://facebook.com/",
    icon: FaFacebook,
  },
  {
    id: 3,
    link: "https://linkedin.com/",
    icon: FaLinkedin,
  },
  {
    id: 4,
    link: "https://instagram.com/",
    icon: FaInstagram,
  },
];

export const menuAccordions = [
  {
    id: 1,
    title: "Men's",
    content: ["Shirt", "Short & Jeans", "Safety Shoes", "Wallet"],
  },
  {
    id: 2,
    title: "Women's",
    content: ["Dress & Frock", "Earrings", "Necklace", "Makeup Kit"],
  },
  {
    id: 3,
    title: "Jewellery",
    content: ["Earrings", "Necklace", "Couple Rings", "Bracelet"],
  },
  {
    id: 4,
    title: "Perfumes",
    content: [
      "Clothes Perfume",
      "Deodorant",
      "Flower Fragrance",
      "Air Freshener",
    ],
  },
];

export const categoryAccordion = [
  // {
  //     id:1,
  //     title:"Clothes",
  //     image:"dress.svg",
  //     content:[
  //         "Shirt",
  //         "Short & Jeans",
  //         "Jacket",
  //         "Dress & Frock"
  //     ]
  // },
  {
    id: 2,
    title: "Shoes",
    image: "shoes.svg",
    content: ["sports", "Formal", "Casual", "safety shoes"],
  },
  {
    id: 3,
    title: "Jewellery",
    image: "jewelry.svg",
    content: ["Earings", "Couple Rings", "Necklace"],
  },
  // {
  //     id:4,
  //     title:"Perfume",
  //     image:"perfume.svg",
  //     content:[
  //         "Clothes Perfume",
  //         "Deodorant",
  //         "Jacket",
  //         "Dress & Frock",
  //     ]

  // },
  {
    id: 5,
    title: "Cosmetics",
    image: "cosmetics.svg",
    content: ["Shampoo", "Sunscreen", "Body Wash", "Makeup Kit"],
  },
  {
    id: 6,
    title: "Glasses",
    image: "glasses.svg",
    content: ["Sunglasses", "Lenses"],
  },
  {
    id: 7,
    title: "Bags",
    image: "bag.svg",
    content: ["Shopping Bag", "Gym Backpack", "Purse", "Wallet"],
  },
];

export const sidebarCategories = [
  {
    name: "Men's",
    endpoint: "products/?gender=M",
    actionType: "category/fetchMenProducts",
  },
  {
    name: "Women's",
    endpoint: "products/?gender=F",
    actionType: "category/fetchWomenProducts",
  },
  {
    name: "Jewellery",
    endpoint: "categories/c3887f51-a89a-4b6a-b640-dae475cff91d/products",
    actionType: "category/fetchJewelleryProducts",
  },
  {
    name: "Shoes",
    endpoint: "categories/0b7a4306-2d6c-4382-8f96-243812e9ed1f/products",
    actionType: "category/fetchShoesProducts",
  },
  {
    name: "Bags",
    endpoint: "categories/408e46b6-670a-43b6-bd05-0cef63df85c3/products",
    actionType: "category/fetchBagsProducts",
  },
  {
    name: "Glasses",
    endpoint: "categories/86fd3c91-f415-4afe-8ca6-707d02b2a532/products",
    actionType: "category/fetchGlassesProducts",
  },
  {
    name: "Watches",
    endpoint: "categories/6869a2da-964e-4247-b3c4-b92c5fd9b51d/products",
    actionType: "category/fetchWatchesProducts",
  },
  {
    name: "Cosmetics",
    endpoint: "categories/daaa1b3e-e179-4964-9e02-18a76b035aad/products",
    actionType: "category/fetchCosmeticsProducts",
  },
  {
    name: "Perfumes",
    endpoint: "categories/0e9029a1-eb69-4202-a146-c585f6cabd3a/products",
    actionType: "category/fetchPerfumesProducts",
  },
  {
    name: "Electronics",
    endpoint: "categories/d0219464-42cd-4ea9-a55b-b73ca834ad80/products",
    actionType: "category/fetchElectronicsProducts",
  },
  {
    name: "Shirts",
    endpoint: "categories/c9aa1a40-a190-4be4-9676-e765ce0e77f9/products",
    actionType: "category/fetchShirtsProducts",
  },
  {
    name: "Trousers",
    endpoint: "categories/81955611-a917-41a4-896e-21e7a128387d/products",
    actionType: "category/fetchTrousersProducts",
  },
  {
    name: "Skirts",
    endpoint: "categories/43721d37-525a-4fa1-91cd-41e025126430/products",
    actionType: "category/fetchSkirtsProducts",
  },
  {
    name: "Shorts",
    endpoint: "categories/a8533b7e-2ef6-4305-9101-ffdef8c35da5/products",
    actionType: "category/fetchShortsProducts",
  },
  {
    name: "Jackets",
    endpoint: "categories/ebf38767-f028-447a-8f6f-908ea2e271cf/products",
    actionType: "category/fetchJacketsProducts",
  }
];



export const desktopCategories = [

  {
    id:1,
    name:"Women's",
    image:"dress.svg"
  },
  {
    id:2,
    name:"Jackets",
    image:"coat.svg"
  },
  {
    id:3,
    name:"Glasses",
    image:"glasses.svg"
  },
  {
    id:4,
    name:"Shorts",
    image:"shorts.svg"
  },
  {
    id:5,
    name:"Shirts",
    image:"tee.svg"
  },
  {
    id:6,
    name:"Watches",
    image:"watch.svg"
  },
 

]
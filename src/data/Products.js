import productImage from "../assets/product.jpeg";

const products = [
  {
    image: productImage,
    productId: "hazelnut",
    title: "Hazelnut",
    description: `This anime store specializes in anime apparel around big names such as: DBZ, Bleach, Naruto, and My Hero Academia! You’re bound to find anime clothes to sport on the streets and blogs on where to buy your favorite and new manga, anime, and latest figurines.`,
    price: 10,
  },
  {
    image: productImage,
    productId: "dark-roast",
    title: "Dark roast",
    description: `If you’re looking for an anime merch store or manga shop that sells anime streetwear that has a decent quality then this anime shop is the one for you. `,
    price: 12,
  },
  {
    image: productImage,
    productId: "house-blend",
    title: "House blend",
    description: `If you came here for another review, then you’ve definitely come to the right anime review blog, my friend. Since you’re here, it’s clear you’re either a huge fan of anime or just starting out and you need an anime shop or a manga shop to buy all the anime merch. `,
    price: 14,
  },
  {
    image: productImage,
    productId: "light-roast",
    title: "Light roast",
    description: `If we didn’t know any better we’d say you’re ready to confess to the world your weebie and nerdy nature! Don’t worry we’ve got you covered when it comes to finding anime merchandise stores we’re listing the top 21 anime stores just for you!`,
    price: 13,
  },
  {
    image: productImage,
    productId: "medium-roast",
    title: "Medium roast",
    description: `Clinical research indicates that moderate coffee consumption is benign or mildly beneficial as a stimulant in healthy adults, with continuing research on whether long-term consumption reduces the risk of some diseases, although some of the long-term studies are of questionable credibility.`,
    price: 11,
  },
];

export function getProducts() {
  return products;
}

// dark-roast
export function getProduct(productId) {
  return products[
    products.findIndex(
      product =>  product.productId === productId
    )
  ];
}
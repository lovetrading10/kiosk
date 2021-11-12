// food schema

const Main = [
  {
    name: "Burger",
    type: "Main",
    price: 5.99,
    options: [
      { name: "Ketchup", price: "0.99", count: 0 },
      { name: "Mayo", price: "0.99", count: 0 },
    ],
    image:
      "https://www.thespruceeats.com/thmb/LDrkRByRnQInfZF25HyLYSJ0Iyg=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/garlic-burger-patties-333503-hero-01-e4df660ff27b4e5194fdff6d703a4f83.jpg",
    count: 1,
  },
  {
    name: "Sandwich",
    type: "Main",
    price: 5.99,
    options: [
      { name: "Mayo", price: "0.99", count: 0 },
      { name: "Lettuce", price: "0.99", count: 0 },
    ],
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190322-ham-sandwich-horizontal-1553721016.png",
    count: 0,
  },
  {
    name: "Linguini Pasta",
    type: "Main",
    price: 10.99,
    options: [{ name: "Truffle", price: "2.99", count: 0 }],
    image:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/8/4/1/IG0511_linguine-with-shrimp-scampi_s4x3.jpg.rend.hgtvcom.826.620.suffix/1384540894943.jpeg",
    count: 0,
  },

  {
    name: "Squid Ink Pasta",
    type: "Main",
    price: 15.99,
    options: [],
    image:
      "https://i0.wp.com/dashofsavory.com/wp-content/uploads/2017/12/IMG_41621.jpg?fit=1970%2C1315&ssl=1",
    count: 0,
  },
];

const Drink = [
  {
    name: "Coke",
    type: "Drinks",
    price: 2.99,
    options: [],
    image: null,
    count: 0,
  },
];

const Foodmaster = [].concat(Main, Drink);

export { Foodmaster };

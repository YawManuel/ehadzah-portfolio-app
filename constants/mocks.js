const categories = [
  {
    id: "plants",
    name: "Self",
    tags: ["gallery"],
    count: 231,
    image: require("../assets/icons/plants.png")
  },
  {
    id: "seeds",
    name: "Family",
    tags: ["gallery"],
    count: 16,
    image: require("../assets/icons/seeds.png")
  },
  {
    id: "flowers",
    name: "Friends",
    tags: ["gallery"],
    count: 68,
    image: require("../assets/icons/flowers.png")
  },
  {
    id: "sprayers",
    name: "Nature",
    tags: ["gallery"],
    count: 17,
    image: require("../assets/icons/sprayers.png")
  },
  {
    id: "pots",
    name: "The Skies",
    tags: ["gallery"],
    count: 47,
    image: require("../assets/icons/pots.png")
  },
  {
    id: "fertilizers",
    name: "Sci-fi",
    tags: ["gallery"],
    count: 47,
    image: require("../assets/icons/fertilizers.png")
  },
  {
    id: "fertilizers",
    name: "Machines",
    tags: ["gallery"],
    count: 47,
    image: require("../assets/icons/fertilizers.png")
  },
  {
    id: "fertilizers",
    name: "Technologies",
    tags: ["gallery"],
    count: 47,
    image: require("../assets/icons/fertilizers.png")
  }
];

const products = [
  {
    id: 1,
    name: "16 Best Plants That Thrive In Your Bedroom",
    description:
      "Bedrooms deserve to be decorated with lush greenery just like every other room in the house – but it can be tricky to find a plant that thrives here. Low light, high humidity and warm temperatures mean only certain houseplants will flourish.",
    tags: ["Interior", "27 m²", "Ideas"],
    images: [
      require("../assets/images/plants_1.png"),
      require("../assets/images/plants_2.png"),
      require("../assets/images/plants_3.png"),
      // showing only 3 images, show +6 for the rest
      require("../assets/images/plants_1.png"),
      require("../assets/images/plants_2.png"),
      require("../assets/images/plants_3.png"),
      require("../assets/images/plants_1.png"),
      require("../assets/images/plants_2.png"),
      require("../assets/images/plants_3.png")
    ]
  }
];

const explore = [
  // images
  require("../assets/images/explore_1.png"),
  require("../assets/images/explore_2.png"),
  require("../assets/images/explore_3.png"),
  require("../assets/images/explore_4.png"),
  require("../assets/images/explore_5.png"),
  require("../assets/images/explore_6.png")
];

const profile = {
  username: "ehadzah",
  location: "Ghana",
  email: "ehadzah@gmail.com",
  avatar: require("../assets/images/avatar.png"),
  budget: 10000,
  monthly_cap: 5000,
  notifications: true,
  newsletter: false
};

export { categories, explore, products, profile };

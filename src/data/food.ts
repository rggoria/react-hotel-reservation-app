import type { Food } from "../types/food";

export const foodItems: Food[] = [
  // Breakfast
  {
    id: 1,
    name: "Classic Filipino Breakfast",
    description:
      "A satisfying Filipino breakfast featuring garlic rice, fried egg, and your choice of traditional breakfast meat.",
    image:
      "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=900&q=85",
    imageAlt: "Freshly prepared breakfast with eggs and pancakes",
    price: 350,
    category: "Breakfast",
    featured: true,
    available: true,
  },
  {
    id: 2,
    name: "Pancake Stack",
    description:
      "Fluffy golden pancakes served with butter, maple syrup, and fresh seasonal fruits.",
    image:
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=900&q=85",
    imageAlt: "Stack of fluffy pancakes with syrup",
    price: 250,
    category: "Breakfast",
    featured: true,
    available: true,
  },
  {
    id: 3,
    name: "Continental Breakfast",
    description:
      "A light morning selection of toasted bread, eggs, fresh fruits, and coffee.",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=900&q=85",
    imageAlt: "Breakfast spread with bread and fresh food",
    price: 290,
    category: "Breakfast",
    featured: true,
    available: true,
  },
  {
    id: 4,
    name: "Breakfast Omelette",
    description:
      "A fluffy three-egg omelette filled with cheese, vegetables, and savory seasonings.",
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=900&q=85",
    imageAlt: "Freshly prepared omelette breakfast",
    price: 220,
    category: "Breakfast",
    featured: false,
    available: true,
  },

  // Lunch
  {
    id: 5,
    name: "Grilled Salmon",
    description:
      "Perfectly grilled salmon served with fresh vegetables and delicate lemon butter sauce.",
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=900&q=85",
    imageAlt: "Grilled salmon with vegetables",
    price: 580,
    category: "Lunch",
    featured: true,
    available: true,
  },
  {
    id: 6,
    name: "Chicken Adobo",
    description:
      "A Filipino favorite featuring tender chicken simmered in soy sauce, vinegar, garlic, and spices.",
    image:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=900&q=85",
    imageAlt: "Traditional chicken dish served with rice",
    price: 290,
    category: "Lunch",
    featured: true,
    available: true,
  },
  {
    id: 7,
    name: "Chicken Teriyaki",
    description:
      "Tender grilled chicken glazed with sweet Japanese teriyaki sauce and served with steamed rice.",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=900&q=85",
    imageAlt: "Chicken teriyaki lunch plate",
    price: 340,
    category: "Lunch",
    featured: true,
    available: true,
  },
  {
    id: 8,
    name: "Beef Rice Bowl",
    description:
      "Thinly sliced beef served over warm steamed rice with savory sauce and fresh vegetables.",
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=900&q=85",
    imageAlt: "Beef rice bowl with vegetables",
    price: 320,
    category: "Lunch",
    featured: false,
    available: true,
  },

  // Dinner
  {
    id: 9,
    name: "Creamy Carbonara",
    description:
      "Classic creamy pasta with parmesan cheese, crispy bacon, and a rich savory sauce.",
    image:
      "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=900&q=85",
    imageAlt: "Creamy carbonara pasta",
    price: 320,
    category: "Dinner",
    featured: true,
    available: true,
  },
  {
    id: 10,
    name: "Premium Beef Steak",
    description:
      "A tender steak prepared with herbs and served with roasted vegetables and signature sauce.",
    image:
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=900&q=85",
    imageAlt: "Grilled premium beef steak",
    price: 650,
    category: "Dinner",
    featured: true,
    available: true,
  },
  {
    id: 11,
    name: "Grilled Seafood Platter",
    description:
      "A delicious selection of grilled seafood served with fresh lemon and house-made dipping sauce.",
    image:
      "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=900&q=85",
    imageAlt: "Grilled seafood platter",
    price: 720,
    category: "Dinner",
    featured: true,
    available: true,
  },
  {
    id: 12,
    name: "Roasted Chicken",
    description:
      "Juicy roasted chicken seasoned with aromatic herbs and served with classic sides.",
    image:
      "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=900&q=85",
    imageAlt: "Roasted chicken dinner",
    price: 450,
    category: "Dinner",
    featured: false,
    available: true,
  },

  // Supper
  {
    id: 13,
    name: "Club Sandwich",
    description:
      "A satisfying triple-layer sandwich filled with chicken, lettuce, tomatoes, and cheese.",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/f_auto%2Cq_auto%2Cfl_lossy/ocfgq7tqwcpqocyex2wq",
    imageAlt: "Fresh club sandwich",
    price: 240,
    category: "Supper",
    featured: true,
    available: true,
  },
  {
    id: 14,
    name: "Classic Cheeseburger",
    description:
      "A juicy beef patty topped with melted cheese, fresh lettuce, and house burger sauce.",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&q=85",
    imageAlt: "Classic cheeseburger",
    price: 280,
    category: "Supper",
    featured: true,
    available: true,
  },
  {
    id: 15,
    name: "Chicken Quesadilla",
    description:
      "Grilled tortilla filled with seasoned chicken, melted cheese, and flavorful vegetables.",
    image:
      "https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=900&q=85",
    imageAlt: "Chicken quesadilla slices",
    price: 260,
    category: "Supper",
    featured: true,
    available: true,
  },
  {
    id: 16,
    name: "Loaded French Fries",
    description:
      "Crispy golden fries topped with melted cheese and savory house seasoning.",
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=900&q=85",
    imageAlt: "Golden crispy French fries",
    price: 180,
    category: "Supper",
    featured: false,
    available: true,
  },

  // Special
  {
    id: 17,
    name: "Chef's Signature Seafood",
    description:
      "A chef-inspired seafood creation prepared with fresh ingredients and a special house sauce.",
    image:
      "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=900&q=85",
    imageAlt: "Chef's signature seafood dish",
    price: 850,
    category: "Special",
    featured: true,
    available: true,
  },
  {
    id: 18,
    name: "Premium Wagyu Steak",
    description:
      "An indulgent steak experience featuring beautifully prepared beef and carefully selected sides.",
    image:
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=900&q=85",
    imageAlt: "Premium steak served on a plate",
    price: 1200,
    category: "Special",
    featured: true,
    available: true,
  },
  {
    id: 19,
    name: "Seafood Paella",
    description:
      "Spanish-inspired rice cooked with seafood, aromatic spices, and fresh herbs.",
    image:
      "https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=900&q=85",
    imageAlt: "Seafood paella with fresh ingredients",
    price: 780,
    category: "Special",
    featured: true,
    available: true,
  },
  {
    id: 20,
    name: "Chef's Pasta Special",
    description:
      "A carefully prepared pasta creation featuring rich sauce and seasonal ingredients.",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=900&q=85",
    imageAlt: "Chef's special pasta dish",
    price: 480,
    category: "Special",
    featured: false,
    available: true,
  },

  // Desserts
  {
    id: 21,
    name: "Chocolate Lava Cake",
    description:
      "A rich chocolate dessert with a warm molten center, served for a delightful finish.",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=900&q=85",
    imageAlt: "Chocolate lava cake",
    price: 220,
    category: "Desserts",
    featured: true,
    available: true,
  },
  {
    id: 22,
    name: "Classic Cheesecake",
    description:
      "A smooth and creamy cheesecake with a buttery biscuit base and sweet topping.",
    image:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=900&q=85",
    imageAlt: "Slice of creamy cheesecake",
    price: 200,
    category: "Desserts",
    featured: true,
    available: true,
  },
  {
    id: 23,
    name: "Halo-Halo",
    description:
      "A colorful Filipino dessert combining crushed ice, sweetened fruits, beans, and milk.",
    image:
      "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=900&q=85",
    imageAlt: "Sweet dessert served in a bowl",
    price: 180,
    category: "Desserts",
    featured: true,
    available: true,
  },
  {
    id: 24,
    name: "Fresh Fruit Parfait",
    description:
      "Layers of fresh seasonal fruits, creamy yogurt, and crunchy granola.",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=900&q=85",
    imageAlt: "Fresh fruit and yogurt parfait",
    price: 190,
    category: "Desserts",
    featured: false,
    available: true,
  },

  // Beverages
  {
    id: 25,
    name: "Fresh Fruit Smoothie",
    description:
      "A refreshing blend of fresh seasonal fruits, perfect for any time of the day.",
    image:
      "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=900&q=85",
    imageAlt: "Fresh fruit smoothie",
    price: 160,
    category: "Beverages",
    featured: true,
    available: true,
  },
  {
    id: 26,
    name: "Iced Coffee",
    description:
      "Freshly brewed coffee served over ice for a smooth and refreshing drink.",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=900&q=85",
    imageAlt: "Iced coffee in a glass",
    price: 140,
    category: "Beverages",
    featured: true,
    available: true,
  },
  {
    id: 27,
    name: "Fresh Lemonade",
    description:
      "A refreshing blend of freshly squeezed lemons, chilled water, and just the right sweetness.",
    image:
      "https://snapcalorie-webflow-website.s3.us-east-2.amazonaws.com/media/food_pics_v2/medium/dennys_lemonade.jpg",
    imageAlt: "Fresh lemonade served with ice",
    price: 120,
    category: "Beverages",
    featured: true,
    available: true,
  },
  {
    id: 28,
    name: "Iced Chocolate",
    description: "A rich and creamy chocolate drink served chilled over ice.",
    image:
      "https://a.mktgcdn.com/p/XGMebZDGG7EGvx0FfNqtjdb7bSHl_ItdTBu4057ksrM/600x400.jpg",
    imageAlt: "Chilled chocolate drink",
    price: 150,
    category: "Beverages",
    featured: false,
    available: true,
  },
];

interface MenuItem {
  id: string;
  name: string;
  type: string;
  image: string;
  description: string;
  rating: number;  // Added rating
  price: number;   // Added price
}

export const menuItems: MenuItem[] = [
  { id: "1", name: "Jollof Rice", type: "Main", image: "/foods/maindishes/jollof.jpg", description: "Spiced tomato-based rice dish, popular across West Africa.", rating: 4.5, price: 12.99 },
  { id: "2", name: "Fried Rice", type: "Main", image: "/foods/maindishes/friedrice.jpg", description: "Savory stir-fried rice with mixed vegetables.", rating: 4.2, price: 10.99 },

  
  { id: "3", name: "Egusi Soup", type: "Main", image: "/foods/maindishes/egusi.jpeg", description: "Thick soup made from ground melon seeds and leafy greens.", rating: 4.7, price: 15.99 },
  { id: "4", name: "Ogbono Soup", type: "Main", image: "/foods/maindishes/ogbono.jpg", description: "Draw soup made from wild mango seeds.", rating: 4.3, price: 14.99 },
  { id: "5", name: "Okra Soup", type: "Main", image: "/foods/maindishes/okro.jpg", description: "Slimy, nutrient-rich soup made with okra.", rating: 4.4, price: 13.99 },
  { id: "6", name: "Afang Soup", type: "Main", image: "/foods/maindishes/afang.jpeg", description: "Leafy soup with waterleaf and Afang leaves, native to Southern Nigeria.", rating: 4.6, price: 16.99 },
  { id: "7", name: "Banga Soup", type: "Main", image: "/foods/maindishes/banga.jpg", description: "Palm nut-based soup rich in native spices.", rating: 4.5, price: 17.99 },
  { id: "8", name: "Efo Riro", type: "Main", image: "/foods/maindishes/efo.jpeg", description: "Yoruba-style spinach stew with assorted meats and peppers.", rating: 4.8, price: 14.49 },
  { id: "9", name: "Oha Soup", type: "Main", image: "/foods/maindishes/oha.jpg", description: "Traditional Eastern Nigerian soup made with Oha leaves.", rating: 4.3, price: 15.49 },
  { id: "10", name: "Edikang Ikong", type: "Main", image: "/foods/maindishes/edikang.jpeg", description: "Rich vegetable soup made with Ugwu and waterleaf.", rating: 4.6, price: 16.49 },

  // Proteins & Sides
  { id: "11", name: "Suya", type: "Protein", image: "/foods/proteins/suya.jpeg", description: "Spicy grilled meat skewers with suya spice.", rating: 4.9, price: 8.99 },
  { id: "12", name: "Asun", type: "Protein", image: "/foods/proteins/asun.jpg", description: "Spicy grilled goat meat.", rating: 4.7, price: 10.49 },
  { id: "13", name: "Pepper Soup", type: "Protein", image: "/foods/proteins/peppersoup.jpeg", description: "Spicy broth made with fish, chicken, or goat.", rating: 4.5, price: 9.99 },
  { id: "14", name: "Grilled Chicken", type: "Protein", image: "/foods/proteins/chicken.jpeg", description: "Tender, marinated and grilled chicken.", rating: 4.4, price: 11.49 },
  { id: "15", name: "Nkwobi", type: "Protein", image: "/foods/proteins/nkwobi.jpeg", description: "Spicy cow foot delicacy.", rating: 4.2, price: 7.99 },
  { id: "16", name: "Isi Ewu", type: "Protein", image: "/foods/proteins/isiewu.jpeg", description: "Spicy Igbo dish made from goat head.", rating: 4.3, price: 8.49 },
  { id: "17", name: "Moi Moi", type: "Side", image: "/foods/proteins/moimoi.jpg", description: "Steamed bean pudding with optional fillings.", rating: 4.6, price: 4.99 },
  { id: "18", name: "Ewa Agoyin", type: "Side", image: "/foods/proteins/ewa.jpeg", description: "Mashed beans served with spicy pepper sauce.", rating: 4.4, price: 5.49 },

  // Carbs & Swallows
  { id: "19", name: "Pounded Yam", type: "Swallow", image: "/foods/swallow/pounded yam.jpeg", description: "Smooth, stretchy yam dough, perfect with soup.", rating: 4.8, price: 6.99 },
  { id: "20", name: "Fufu (Cassava)", type: "Swallow", image: "/foods/swallow/fufu.jpeg", description: "Fermented cassava swallow with a tangy taste.", rating: 4.5, price: 5.99 },
  { id: "21", name: "Amala", type: "Swallow", image: "/foods/swallow/amala.jpeg", description: "Yam flour swallow with dark color and soft texture.", rating: 4.7, price: 7.49 },
  { id: "22", name: "Eba (Garri)", type: "Swallow", image: "/foods/swallow/eba.jpeg", description: "Cassava flakes turned into a smooth dough.", rating: 4.3, price: 6.49 },
  { id: "23", name: "Semovita", type: "Swallow", image: "/foods/swallow/semo.jpeg", description: "Smooth, wheat-based swallow alternative.", rating: 4.6, price: 6.79 },

  // Breakfasts & Snacks
  { id: "24", name: "Akara", type: "Snack", image: "/foods/snacks/akara.jpeg", description: "Deep-fried bean cakes, crispy on the outside.", rating: 4.5, price: 2.99 },
  { id: "25", name: "Puff-Puff", type: "Snack", image: "/foods/snacks/puff puff.jpeg", description: "Soft, fried dough balls — sweet and fluffy.", rating: 4.6, price: 3.49 },
  { id: "28", name: "Bread and Akara", type: "Breakfast", image: "/foods/snacks/akara.jpeg", description: "Classic combo of akara inside soft bread.", rating: 4.8, price: 5.49 },
 
  { id: "31", name: "Meat Pie", type: "Snack", image: "/foods/snacks/meat pie.jpeg", description: "Pastry filled with spiced meat and veggies.", rating: 4.6, price: 4.49 },
  { id: "32", name: "Scotch Egg", type: "Snack", image: "/foods/snacks/scotch egg.jpeg", description: "Boiled egg wrapped in sausage and fried.", rating: 4.4, price: 5.99 },

  // Drinks & Add-ons
  { id: "33", name: "Zobo", type: "Drink", image: "/foods/drinks/zobo.jpeg", description: "Chilled hibiscus drink with spices.", rating: 4.7, price: 2.99 },
  { id: "34", name: "Chapman", type: "Drink", image: "/foods/drinks/chapman.jpeg", description: "Classic Nigerian cocktail with bitters and soda.", rating: 4.6, price: 3.99 },
 
  { id: "36", name: "Kunu", type: "Drink", image: "/foods/drinks/kunu.jpeg", description: "Grain-based fermented drink, served cold.", rating: 4.2, price: 2.49 },
  { id: "37", name: "Tiger Nut Milk", type: "Drink", image: "/foods/drinks/tiger nut.jpeg", description: "Sweet, creamy drink made from tiger nuts.", rating: 4.7, price: 3.49 },
];

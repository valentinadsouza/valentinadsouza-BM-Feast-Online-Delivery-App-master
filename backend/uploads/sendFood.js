// import foodModel from "../models/foodModel.js"; 
// import { connectDB } from "../config/db.js";     

// // Connect to MongoDB
// await connectDB(); // Make sure this is called before any DB operations

// const foods = [
//   { _id: "1", name: "Greek salad", image: "food_1.jpg", price: 12, description: "Food provides essential nutrients for overall health and well-being", category: "Salad" },
//   { _id: "2", name: "Veg salad", image: "food_2.jpg", price: 18, description: "Food provides essential nutrients for overall health and well-being", category: "Salad" },
//   { _id: "3", name: "Clover Salad", image: "food_3.jpg", price: 16, description: "Food provides essential nutrients for overall health and well-being", category: "Salad" },
//   { _id: "4", name: "Chicken Salad", image: "food_4.jpg", price: 24, description: "Food provides essential nutrients for overall health and well-being", category: "Salad" },
//   { _id: "5", name: "Lasagna Rolls", image: "food_5.jpg", price: 14, description: "Food provides essential nutrients for overall health and well-being", category: "Rolls" },
//   { _id: "6", name: "Peri Peri Rolls", image: "food_6.jpg", price: 12, description: "Food provides essential nutrients for overall health and well-being", category: "Rolls" },
//   { _id: "7", name: "Chicken Rolls", image: "food_7.jpg", price: 20, description: "Food provides essential nutrients for overall health and well-being", category: "Rolls" },
//   { _id: "8", name: "Veg Rolls", image: "food_8.jpg", price: 15, description: "Food provides essential nutrients for overall health and well-being", category: "Rolls" },
//   { _id: "9", name: "Ripple Ice Cream", image: "food_9.jpg", price: 14, description: "Food provides essential nutrients for overall health and well-being", category: "Deserts" },
//   { _id: "10", name: "Fruit Ice Cream", image: "food_10.jpg", price: 22, description: "Food provides essential nutrients for overall health and well-being", category: "Deserts" },
//   { _id: "11", name: "Jar Ice Cream", image: "food_11.jpg", price: 10, description: "Food provides essential nutrients for overall health and well-being", category: "Deserts" },
//   { _id: "12", name: "Vanilla Ice Cream", image: "food_12.jpg", price: 12, description: "Food provides essential nutrients for overall health and well-being", category: "Deserts" },
//   { _id: "13", name: "Chicken Sandwich", image: "food_13.jpg", price: 12, description: "Food provides essential nutrients for overall health and well-being", category: "Sandwich" },
//   { _id: "14", name: "Vegan Sandwich", image: "food_14.jpg", price: 18, description: "Food provides essential nutrients for overall health and well-being", category: "Sandwich" },
//   { _id: "15", name: "Grilled Sandwich", image: "food_15.jpg", price: 16, description: "Food provides essential nutrients for overall health and well-being", category: "Sandwich" },
//   { _id: "16", name: "Bread Sandwich", image: "food_16.jpg", price: 24, description: "Food provides essential nutrients for overall health and well-being", category: "Sandwich" },
//   { _id: "17", name: "Cup Cake", image: "food_17.jpg", price: 14, description: "Food provides essential nutrients for overall health and well-being", category: "Cake" },
//   { _id: "18", name: "Vegan Cake", image: "food_18.jpg", price: 12, description: "Food provides essential nutrients for overall health and well-being", category: "Cake" },
//   { _id: "19", name: "Butterscotch Cake", image: "food_19.jpg", price: 20, description: "Food provides essential nutrients for overall health and well-being", category: "Cake" },
//   { _id: "20", name: "Sliced Cake", image: "food_20.jpg", price: 15, description: "Food provides essential nutrients for overall health and well-being", category: "Cake" },
//   { _id: "21", name: "Garlic Mushroom", image: "food_21.jpg", price: 14, description: "Food provides essential nutrients for overall health and well-being", category: "Pure Veg" },
//   { _id: "22", name: "Fried Cauliflower", image: "food_22.jpg", price: 22, description: "Food provides essential nutrients for overall health and well-being", category: "Pure Veg" },
//   { _id: "23", name: "Mix Veg Pulao", image: "food_23.jpg", price: 10, description: "Food provides essential nutrients for overall health and well-being", category: "Pure Veg" },
//   { _id: "24", name: "Rice Zucchini", image: "food_24.jpg", price: 12, description: "Food provides essential nutrients for overall health and well-being", category: "Pure Veg" },
//   { _id: "25", name: "Cheese Pasta", image: "food_25.jpg", price: 12, description: "Food provides essential nutrients for overall health and well-being", category: "Pasta" },
//   { _id: "26", name: "Tomato Pasta", image: "food_26.jpg", price: 18, description: "Food provides essential nutrients for overall health and well-being", category: "Pasta" },
//   { _id: "27", name: "Creamy Pasta", image: "food_27.jpg", price: 16, description: "Food provides essential nutrients for overall health and well-being", category: "Pasta" },
//   { _id: "28", name: "Chicken Pasta", image: "food_28.jpg", price: 24, description: "Food provides essential nutrients for overall health and well-being", category: "Pasta" },
//   { _id: "29", name: "Buttter Noodles", image: "food_29.jpg", price: 14, description: "Food provides essential nutrients for overall health and well-being", category: "Noodles" },
//   { _id: "30", name: "Veg Noodles", image: "food_30.jpg", price: 12, description: "Food provides essential nutrients for overall health and well-being", category: "Noodles" },
//   { _id: "31", name: "Somen Noodles", image: "food_31.jpg", price: 20, description: "Food provides essential nutrients for overall health and well-being", category: "Noodles" },
//   { _id: "32", name: "Cooked Noodles", image: "food_32.jpg", price: 15, description: "Food provides essential nutrients for overall health and well-being", category: "Noodles" }
// ];

// // Insert all at once
// await foodModel.insertMany(foods);
// console.log("All food items inserted successfully!");

import foodModule from "../models/foodmodel.js";
import fs from "fs";

// add food item
const addFood = async (req, res) => {
  let image_filename = req.file ? req.file.filename : null;

  const food = new foodModule({
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
    price: req.body.price,
    image: image_filename
  });

  try {
    await food.save();
    res.json({ success: true, message: "Food Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// all food list
const listfood = async (req, res) => {
  try {
    const foods = await foodModule.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error fetching food list" });
  }
};

// remove food item
const removefood = async (req, res) => {
  try {
    const { id } = req.body;

    const food = await foodModule.findById(id);

    if (!food) {
      return res.json({ success: false, message: "Food not found" });
    }

    // remove image safely
    if (food.image) {
      const imagePath = `uploads/${food.image}`;
      fs.unlink(imagePath, (err) => {
        if (err) {
          console.log("Image delete error:", err.message);
        } else {
          console.log("Image deleted:", imagePath);
        }
      });
    }

    await foodModule.findByIdAndDelete(id);

    res.json({ success: true, message: "Food Removed" });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error removing food" });
  }
};

export { addFood, listfood, removefood };

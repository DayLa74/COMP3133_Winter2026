const express = require("express");
const Restaurant = require("../models/Restaurant");

const router = express.Router();


// 1️⃣ Get ALL restaurants
// http://localhost:3000/restaurants
router.get("/", async (req, res) => {
try {
    const sortOrder = req.query.sortBy === "DESC" ? -1 : 1;

    const restaurants = await Restaurant.find({},{
        _id: 1,
        cuisine: 1,
        name: 1,
        city: "$address.city",
        restaurant_id: 1,
    }
    ).sort({ restaurant_id: sortOrder });

    res.json(restaurants);
} catch (err) {
    res.status(500).json({ error: err.message });
}
});


// 2️⃣ Get restaurants by cuisine
// http://localhost:3000/restaurants/cuisine/Japanese
router.get("/cuisine/:cuisine", async (req, res) => {
  try {
    const restaurants = await Restaurant.find({
      cuisine: req.params.cuisine,
    });

    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// 3️⃣ Delicatessen cuisine NOT in Brooklyn
// http://localhost:3000/restaurants/Delicatessen
router.get("/Delicatessen", async (req, res) => {
  try {
    const restaurants = await Restaurant.find(
      {
        cuisine: "Delicatessen",
        "address.city": { $ne: "Brooklyn" },
      },
      {
        _id: 0,
        cuisine: 1,
        name: 1,
        "address.city": 1,
      }
    ).sort({ name: 1 });

    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

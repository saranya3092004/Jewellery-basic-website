const Cart = require("../models/cartModels");

exports.getCart = async (req, res) => {
  try {
    const userId = req.headers["user-id"];
    const cart = await Cart.findOne({ userId });

    if (cart) {
      res.status(200).json(cart.items);
    } else {
      res.status(404).json({ message: "Cart not found" });
    }
  } catch (error) {
    console.error("Error fetching cart:", error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.saveCart = async (req, res) => {
  try {
    const userId = req.headers["user-id"];
    const { items } = req.body;

    let cart = await Cart.findOne({ userId });

    if (cart) {
      cart.items = items;
    } else {
      cart = new Cart({ userId, items });
    }

    await cart.save();
    res.status(200).json(cart.items);
  } catch (error) {
    console.error("Error saving cart:", error);
    res.status(500).json({ message: "Server error" });
  }
};

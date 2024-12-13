// const express = require('express');
// const router = express.Router();
// const multer = require('multer');
// const Category = require('../models/Category');
// const SliderImage = require('../models/SliderModel');
// const Product = require('../models/Product');

// // Set up multer for file storage
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/'); // Specify the upload directory
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + '-' + file.originalname); // Append timestamp to filename
//   },
// });

// const upload = multer({ storage });

// // Routes for Categories
// router.get('/categories', async (req, res) => {
//   const categories = await Category.find();
//   res.json(categories);
// });

// router.post('/categories', upload.single('image'), async (req, res) => {
//   try {
//     const { name } = req.body;
//     const imagePath = req.file ? req.file.path : ''; // Get the path to the uploaded image

//     const newCategory = new Category({
//       name,
//       image: imagePath,
//     });

//     await newCategory.save();
//     res.json(newCategory);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to create category' });
//   }
// });

// // Routes for Slider Images
// router.get('/slider', async (req, res) => {
//   const sliderImages = await SliderImage.find();
//   res.json(sliderImages);
// });

// router.post('/slider', upload.single('image'), async (req, res) => {
//   try {
//     const imagePath = req.file ? req.file.path : ''; // Get the path to the uploaded image

//     const newSliderImage = new SliderImage({
//       url: imagePath,
//     });

//     await newSliderImage.save();
//     res.json(newSliderImage);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to upload slider image' });
//   }
// });

// // Routes for Latest Products
// router.get('/latest-products', async (req, res) => {
//   const products = await Product.find();
//   res.json(products);
// });

// router.post('/latest-products', upload.single('image'), async (req, res) => {
//   try {
//     const { name } = req.body;
//     const imagePath = req.file ? req.file.path : ''; // Get the path to the uploaded image

//     const newProduct = new Product({
//       name,
//       image: imagePath,
//     });

//     await newProduct.save();
//     res.json(newProduct);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to add product' });
//   }
// });

// module.exports = router;

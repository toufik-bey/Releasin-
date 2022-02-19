const Product = require('../Models/Product'); 
const express = require('express'); 
const router = express.Router();

// create the product 
router.post('/', async(req,res)=>{
  try {
      const product = new Product({
          name:req.body.name, 
          type:req.body.prodcutType  // prodcutype ndjibo mel front
          
      }); 

      await product.save(); 
  } catch (error) {
      // i will catch the error 
  }
})
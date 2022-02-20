const Product = require('../Models/Product'); 
const express = require('express'); 
const router = express.Router();
const ProdcutType = require('../Models/ProductType'); 

// create the product 
router.post('/', async(req,res)=>{
  try {

          const productType = await ProdcutType.findById(req.body.prodcutType); 

          if(!prodcutType){
            return res.status(404).json({msg:'prodcutType not found'})
          }

          const product = new Product({
          name:req.body.name, 
          type:req.body.prodcutType  
          
      }); 

      await product.save(); 
  } catch (error) {
    console.error(error.message); 
  }
});
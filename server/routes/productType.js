const express = require('express'); 
const router = express.Router(); 
const ProductType = require('../Models/ProductType'); 


// add the product type 
router.post('/', async(req,res)=>{
   try {
       
    const productType = new ProductType({
        name:req.body.name,
        Attributes:req.body.Attributes
    });

    await productType.save(); 

   } catch (error) {
       console.error(error.message)
   }
}); 

// update the productype
router.put('/:id',async(req,res)=>{
  try {
    const productype = await ProductType.findById(req.prams.id); 

    if(!productype){
        res.status(404)
    }
    productype = {
        name:req.body.name,
        Attributes:req.body.Attributes
    }

    await productype.save(); 
  } catch (error) {
      console.error(error.message); 
  }
})

// delete the productType

router.delete('/:id', async(req,res)=>{
    try {
        const productType = await ProductType.findById(req.prams.id); 

        if(!productType){
            res.status(404)
        }

        await productType.remove(); 
        res.send("productype removed")
    } catch (error) {
        console.error(error.message)
    }
})

module.exports = router;
const express = require('express'); 
const router = express.Router(); 
const AttributeValue = require('../Models/AttributeValue'); 
const ProductType = require('../Models/ProductType')





// Add an Attribute vallue 

router.post('/', async(req,res)=>{
    try {
         
        switch (req.body.Attributes.type) {
            case Boolean:
                let attributesValue = new AttributeValue({
                    name:req.body.name,
                    Boolean:req.body.Attributes.value
                })
                break;
            case String:
                  attributesValue = new AttributeValue({
                    name:req.body.name,
                    Text:req.body.Attributes.value
                })
                break; 
            case Date:
                    attributesValue = new AttributeValue({
                    name:req.body.name,
                    Date:req.body.Attributes.value
                }); 
                break; 
            
        }; 

         }
    catch (error) {
        console.error(error.message)
    }
})


module.exports = router;
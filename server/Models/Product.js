const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 


const ProductSchema = new mongoose.Schema(
    {
        name: {type: String}, 

        // create_AT:{
        //     type:Date, 
        //     default:Date.now()
        // },

        type:{
            type: Schema.Types.ObjectId,
            ref:'productType'
        },

        AssignedAttributes:[
            {
                AttributeValue:{
                    type:Schema.Types.ObjectId,
                    ref:'attributeValue'
                }
            },  
        ]
           
    }
);

module.exports=  Product= mongoose.model('Product', ProductSchema); 
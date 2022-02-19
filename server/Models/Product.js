const mongoose = require('mongoose'); 


const ProductSchema = new mongoose.Schema(
    {
        name: {type: String}, 

        create_AT:{
            type:Date, 
            default:Date.now
        },

        type:{
            type: Schema.Types.ObjectId,
            ref:'productType'
        }
           
    }
);

module.exports=  Product= mongoose.model('Product', ProductSchema); 
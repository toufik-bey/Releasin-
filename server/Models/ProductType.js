const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const ProductTypeSchema = new mongoose.Schema(
    {
        name: {type: String}, 

        // create_AT:{
        //     default:Date.now()
        // },

        Attributes:[
            {
            Attributename:{type:String},
            value:{
                type: Schema.Types.ObjectId,
                ref:'attributeValue'
            }
        }
        ]
        
       
    }
);

module.exports= ProductType = mongoose.model('ProductType', ProductTypeSchema); 
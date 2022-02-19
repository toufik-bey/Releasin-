const mongoose = require('mongoose'); 


const ProductTypeSchema = new mongoose.Schema(
    {
        name: {type: String}, 

        create_AT:{
            default:Date.now
        },

        Attributes:[
            {
            Attributename:{type:string},
            AttributeType:{
                type: Schema.Types.ObjectId,
                ref:'attributeType'
            }
        }
        ]
        
       
    }
);

module.exports= ProductType = mongoose.model('ProductType', ProductTypeSchema); 
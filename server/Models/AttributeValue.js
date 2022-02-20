const mongoose = require('mongoose'); 


const AttributeValueSchema = new mongoose.Schema(
    {
        Name:{type:String},
        Boolean:{type:Boolean},
        text:{type:String},
        Date:{type:Date}
           
    }
);

module.exports=  AttributeValue = mongoose.model('attributeValue', AttributeValueSchema); 
const mongoose = require('mongoose'); 


const AttributeValueSchema = new mongoose.Schema(
    {
        Boolean:{type:Boolean},
        text:{type:String},
        Date:{type:Date}
           
    }
);

module.exports=  AttributeValue = mongoose.model('attributeValue', AttributeTypeSchema); 
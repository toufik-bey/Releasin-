const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const AttributeValueSchema = new mongoose.Schema(
    {
        Name:{type:String},
        Boolean:{type:Boolean},
        Text:{type:String},
        Date:{type:Date}
           
    }
);

module.exports=  AttributeValue = mongoose.model('attributeValue', AttributeValueSchema); 
const mongoose = require('mongoose'); 


const AttributeTypeSchema = new mongoose.Schema(
    {
        Boolean:{type:Boolean},
        text:{type:String},
        Date:{type:Date}
           
    }
);

module.exports=  AttributeType = mongoose.model('attributeType', AttributeTypeSchema); 
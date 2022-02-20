const connectDB = require('./config/Database'); 
const express = require('express');
const app = express(); 



//connecting database 
connectDB(); 

//JSON stringify 
app.use(express.json({extended:false})); 

// //router
  app.use('/api/product', require('./routes/product'));
  app.use('/api/productType', require('./routes/productType'));
  app.use('/api/AttributeValue', require('./routes/AttributeValue'));


// init the server 
app.listen(8000); 
console.log('server running on port 8000');
require("dotenv").config({ path : __dirname + '/config.env'}); 
const express = require('express')
const app = express();
const cors = require('cors');


const path = require('path');
const PORT = process.env.PORT 

const user = require('./routes/userroutes');
const product = require('./routes/productrouter');
const category = require('./routes/categoriesRouter');
const subCategory = require('./routes/subCategoriesRouter');

 app.use(cors())

 
app.use('/user',user); 
app.use('/product',product); 
app.use('/category',category); 
app.use('/subCategory',subCategory); 
 

app.get('/',(req,res)=>{ 
 
    res.sendFile(path.join(__dirname,'/hello.html'));
   

})

app.listen(PORT,()=>{
    console.log("App working on Port" + PORT);
});


  
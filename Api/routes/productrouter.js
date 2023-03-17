const express = require('express')
const router = express.Router(); 
const customMiddlewares = require('../middleware/middleware') 
const productValidate = require('../middleware/productValidation') 
const { body, validationResult } = require('express-validator');

//Custom controller modules commonJs
const productController = require('../controller/productController'); 


 
//path Module
const path = require('path');
 
// // Middlewares 
// router.use(express.static(__dirname));
router.use(express.json());
// router.use(bodyParser.urlencoded({ extended: true }));


router.post('/productadd',customMiddlewares.formidableMiddleware,productValidate.product_add, async (req,res)=>{ 
      // Validation Check
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      } 
  
      //Check Product Validation
    //   const checkCategory = await subCategoryController.checkSubCategory(req.body.catName);
    //   if(checkCategory.length != 0){
    //       return res.status(400).json({ errors: "Sub Category Already Exist" });
    //   }  
   
      // Product Creation
     
      const catCreation = await productController.createProduct(req.body);
      return res.send({'result':catCreation, 'status' : 200});
})



// Api for Sub Categories Get
router.get('/productlist', async (req,res)=>{

 
    // Product List
    const prodList = await productController.listProduct();
    return res.send({'result':prodList, 'status' : 200});
     
  
})
  

module.exports = router; 
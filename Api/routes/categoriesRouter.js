const express = require('express')
const router = express.Router(); 
const customMiddlewares = require('../middleware/middleware') 
const { body, validationResult } = require('express-validator');

//Custom controller modules commonJs
const cateGoryController = require('../controller/categoryController'); 


 
//path Module
const path = require('path');

// // Middlewares 
// router.use(express.static(__dirname));
router.use(express.json());
// router.use(bodyParser.urlencoded({ extended: true }));



// Api for Categories Add
router.post('/add',customMiddlewares.formidableMiddleware,  body('catName').not().isEmpty(), body('collectionLink').not().isEmpty(), async (req,res)=>{

    // Validation Check
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } 

    //Check Category Validation
    const checkCategory = await cateGoryController.checkCategory(req.body.catName);
    if(checkCategory.length != 0){
        return res.status(400).json({ errors: "Category Already Exist" });
    }  
 
    // Category Creation
    const catCreation = await cateGoryController.createCategory(req.body);
    return res.send({'result':catCreation, 'status' : 200});
     
  
})
  



// Api for Categories Add
router.get('/categoryList', async (req,res)=>{

 
    // Category Creation
    const catList = await cateGoryController.listCategory(req.body);
    return res.send({'result':catList, 'status' : 200});
     
  
})
  


module.exports = router;
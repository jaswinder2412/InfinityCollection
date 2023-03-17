const DB = require('../model/Db');
const fs = require('fs'); 
var logger = require('logger').createLogger('development.log');

class productController{

    constructor(){
        this.db = DB; 
    }


    async createProduct(args){ 

        try{
            let productName = args.productName;   
            let productPhoto = args.productPhoto;   
            let productGallery = args.productGallery;   
            let prductDescription = args.prductDescription;   
            let discountedPrice = args.discountedPrice;   
            let price = args.price;   
            let limitedEdition = args.limitedEdition;   
            let trendings = args.trendings;   
            let subCatId = args.subCatId;   
            let catId = args.catId;    
            let sqlQuery = 'INSERT INTO `prducts`(`productName`, `productPhoto`, `productGallery`, `prductDescription`, `discountedPrice`, `price`, `limitedEdition`, `trendings`, `subCatId`, `catId`) VALUES (?,?,?,?,?,?,?,?,?,?)';
           let productStatus = await this.db.mainQuery(sqlQuery,[productName,productPhoto,productGallery,prductDescription,discountedPrice,price,limitedEdition,trendings,subCatId,catId]);
       
         return productStatus;
              
        }
        catch(error){
            console.log(error);
            logger.info('Error', error);
        } 

    }

    
    // async checkSubCategory(arg){ 

    //     try{ 
    //         let sCatName = arg; 
    //         let sqlQuery = 'SELECT * from `subcategories` WHERE sCatName=?';
    //        return await this.db.mainQuery(sqlQuery,[sCatName]);

    //     }
    //     catch(error){
    //         console.log(error);
    //         logger.info('Error', error);
    //     } 

    // }

    async listProduct(){ 

        try{ 
            let sqlQuery = 'SELECT * from `prducts` ';
           return await this.db.mainQuery(sqlQuery,[]);

        }
        catch(error){
            console.log(error);
            logger.info('Error', error);
        } 

    }



}

module.exports = new productController(); 
const DB = require('../model/Db');
const fs = require('fs'); 
var logger = require('logger').createLogger('development.log');

class subCategoryController{

    constructor(){
        this.db = DB; 
    }


    async createSubCategory(args){ 

        try{
            let sCatName = args.sCatName;
            let catId = args.catId;  
            let sqlQuery = 'INSERT INTO `subcategories`( `sCatName`, `catId`) VALUES (?,?)';
           let categoryStatus = await this.db.mainQuery(sqlQuery,[sCatName,catId]);
       
         return categoryStatus;
              
        }
        catch(error){
            console.log(error);
            logger.info('Error', error);
        } 

    }

    
    async checkSubCategory(arg){ 

        try{ 
            let sCatName = arg; 
            let sqlQuery = 'SELECT * from `subcategories` WHERE sCatName=?';
           return await this.db.mainQuery(sqlQuery,[sCatName]);

        }
        catch(error){
            console.log(error);
            logger.info('Error', error);
        } 

    }

    async listSubCategory(){ 

        try{ 
            let sqlQuery = 'SELECT * from `subcategories` ';
           return await this.db.mainQuery(sqlQuery,[]);

        }
        catch(error){
            console.log(error);
            logger.info('Error', error);
        } 

    }



}

module.exports = new subCategoryController(); 
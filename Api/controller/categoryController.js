const DB = require('../model/Db');
const fs = require('fs'); 
var logger = require('logger').createLogger('development.log');

class categoryController{

    constructor(){
        this.db = DB; 
    }


    async createCategory(args){ 

        try{
            let catName = args.catName;
            let catPhoto = args.catPhoto; 
            let collectionLink = args.collectionLink; 
            let sqlQuery = 'INSERT INTO `categories`( `catName`, `catPhoto`, `collectionLink`) VALUES (?,?,?)';
           let categoryStatus = await this.db.mainQuery(sqlQuery,[catName,catPhoto, collectionLink]);
       
         return categoryStatus;
              
        }
        catch(error){
            console.log(error);
            logger.info('Error', error);
        } 

    }

    
    async checkCategory(arg){ 

        try{ 
            let catName = arg; 
            let sqlQuery = 'SELECT * from `categories` WHERE catName=?';
           return await this.db.mainQuery(sqlQuery,[catName]);

        }
        catch(error){
            console.log(error);
            logger.info('Error', error);
        } 

    }

    async listCategory(){ 

        try{ 
            let sqlQuery = 'SELECT * from `categories` ';
           return await this.db.mainQuery(sqlQuery,[]);

        }
        catch(error){
            console.log(error);
            logger.info('Error', error);
        } 

    }



}

module.exports = new categoryController(); 
const DB = require('../model/Db');
const fs = require('fs');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
var logger = require('logger').createLogger('development.log');

class userController{

    constructor(){
        this.db = DB;
        this.sign = "InfinityCollect";
    }


    async createUser(args){ 

        try{
            let fname = args.fname;
            let lname = args.lname;
            let phone = args.phone;
            let email = args.email;
            let password = await bcrypt.hash(args.password, 10);
            let sqlQuery = 'INSERT INTO `user`( `fName`, `lName`, `phone`, `email`, `password`) VALUES (?,?,?,?,?)';
           let user = await this.db.mainQuery(sqlQuery,[fname,lname,phone,email,password]);
           const createdUser = {...user}
            // Token Genrations
           const token = jwt.sign(
            { user_id: createdUser.insertId, email: args.email },
            this.sign,
            {
              expiresIn: "8h",
            }
          );
          // again save
          createdUser.token = token;
         return createdUser;
              
        }
        catch(error){
            console.log(error);
            logger.info('Error', error);
        } 

    }

    async checkUser(arg){ 

        try{ 
            let email = arg; 
            let sqlQuery = 'SELECT * from `user` WHERE email=?';
           return await this.db.mainQuery(sqlQuery,[email]);

        }
        catch(error){
            console.log(error);
            logger.info('Error', error);
        } 

    }

 

    async comparePass(userpass,dbpass){ 

        try{ 
           
           const compare =  await bcrypt.compare(userpass, dbpass);
           return compare;
        }
        catch(error){
            console.log(error);
            logger.info('Error', error);

        }

    }



}

module.exports = new userController();
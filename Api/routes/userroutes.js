const express = require('express')
const router = express.Router();
const session = require('express-session');
const bodyParser = require('body-parser')
const { body, validationResult } = require('express-validator');
const userMiddleware = require('../middleware/userValidation')
const jwt = require("jsonwebtoken");

//Custom modules commonJs
const UserMethods = require('../controller/userController');
const meetuser = require('../controller/meetuser');

//path Module
const path = require('path');

// Middlewares
router.use(session({secret: 'ssshhhhh',saveUninitialized: true,resave: true}));
router.use(express.static(__dirname));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));


// Global Session
var sess;
var sign = "InfinityCollect";

// Api for User Registration
router.post('/registeruser',userMiddleware.user_register,
 async (req,res)=>{ 
    // Validation Check
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //Check User Validation
    const checkUser = await UserMethods.checkUser(req.body.email);
    if(checkUser.length != 0){
        return res.status(400).json({ errors: "User Already Exist" });
    }

    // User Creation
    const userCreation = await UserMethods.createUser(req.body);
    return res.send({'result':userCreation, 'status' : 200});
     
  
})
 

router.post('/login',(req,res)=>{   
     
    (async () => { 
        const result = await UserMethods.checkUser(req.body.email);
        if(result.length > 0){
            const comparecheck = await UserMethods.comparePass(req.body.password,result[0].password);
           if(comparecheck){
            sess = req.session;
           sess.email = req.body.email;
            console.log(sess);
           
                // Token Genrations
           const token = jwt.sign(
            { user_id: result[0].id, email: result[0].email },
            sign,
            {
              expiresIn: "8h",
            }
          );
          let userDetails = {...result[0]};
          userDetails.token = token;
          delete userDetails.password;
          delete userDetails.id;

          //Response
          res.send({'userdetails' : userDetails, 'status' : 200});

           }else {
            res.send({'status' : 403, 'Error' : 'password do not match'} ); 
           }
        } else {
            res.send({'status' : 403, 'Error' : 'User not exist'} );
        }
        console.log(result.length);
        
        res.end();
    })() 
})

router.get('/checksession',(req,res)=>{   
      
       if (typeof sess !== 'undefined' ) {
           if(typeof sess.email !== 'undefined'){

            (async () => {
                const result = await meetuser.login(req.body); 
               res.send(
                   {
                       'statsuCode' : 200,
                        'sessionuser' : sess.email,
                         'userdetails' :  result
                        }
                        );
               res.end();
           
    })()
}else {
    res.send({'statusCode' : 201, 'status':'Somethingwent wrong'});
    res.end();
}
    }else {
        res.send({'statusCode' : 201, 'status':'Please login first'});
        res.end();
    }
    
  
})


module.exports = router;
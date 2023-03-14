const { check, body , query ,oneOf, validationResult } = require('express-validator');



exports.user_register =  [
    body('fname') 
        .isAlphanumeric().withMessage('firstName should be alpanumeric')
        .isLength({min: 1 , max: 50}).withMessage('firstName should not be empty, should be more than one and less than 50 character')
        .trim(),
    function(req,res,next) { 
        var errorValidation = validationResult(req); 
        if ( errorValidation.errors.length !=0 ) { 
            return res.status(500).json({
                title: 'an error occured',
                error: errorValidation
            });
        }
        next()
    },
    body('lname') 
        .isAlphanumeric().withMessage('lastName should be alpanumeric')
        .isLength({min: 1 , max: 50}).withMessage('lastName should not be empty, should be more than one and less than 50 character')
        .trim(),
    function(req,res,next) {

        var errorValidation = validationResult(req); 
         if ( errorValidation.errors.length !=0 ) {
            return res.status(500).json({
                title: 'an error occured',
                error: errorValidation
            });
        }
        next()
    },
     body('email') 
        .isEmail().withMessage('Enter Valid Email')
        .isLength({min: 1 , max: 50}).withMessage('email should not be empty, should be more than one and less than 50 character')
        .trim(),
    function(req,res,next) {

        var errorValidation = validationResult(req);
         if ( errorValidation.errors.length !=0 ) {
            return res.status(500).json({
                title: 'an error occured',
                error: errorValidation
            });
        }
        next()
    },
       
     body('password')  
        .isLength({min: 5 , max: 50}).withMessage('password should not be empty, should be more than five and less than 50 character')
        .trim(),
    function(req,res,next) {

        var errorValidation = validationResult(req);
         if ( errorValidation.errors.length !=0 ) {
            return res.status(500).json({
                title: 'an error occured',
                error: errorValidation
            });
        }
        next() 
    },
        body('phone')  
        .isInt().withMessage('Phone should not be empty, should be 10 numbers')
        .trim(),
    function(req,res,next) {

        var errorValidation = validationResult(req);
         if ( errorValidation.errors.length !=0 ) {
            return res.status(500).json({
                title: 'an error occured',
                error: errorValidation
            });
        }
        next()
    }
          
];
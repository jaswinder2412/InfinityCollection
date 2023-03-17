const { check, body , query ,oneOf, validationResult } = require('express-validator');



exports.product_add =  [
    body('productName')  
        .isLength({min: 1 , max: 50}).withMessage('productName should not be empty, should be more than one and less than 50 character')
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
    body('prductDescription')  
        .isLength({min: 1}).withMessage('prductDescription should not be empty, should be more than one and less than 50 character')
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
     body('discountedPrice')  
        .isLength({min: 1  }).withMessage('discountedPrice should not be empty, should be more than one and less than 50 character')
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
       
     body('price')  
        .isLength({min: 1  }).withMessage('price should not be empty, should be more than one and less than 50 character')
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
        body('limitedEdition')  
        .isInt().withMessage('limitedEdition should not be empty, should be 10 numbers')
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
     body('trendings')  
        .isInt().withMessage('trendings should not be empty, should be 10 numbers')
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
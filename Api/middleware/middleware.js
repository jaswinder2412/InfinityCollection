const formidable = require('formidable');
const fs = require('fs');
const path = require('path')

exports.formidableMiddleware = (req, res, next) => {
    const form = formidable({ multiples: true });
    form.parse(req, (err, body, files) => {
        if (err) {
            next(err);
            return;
        }
       
        req.body = body;
        req.files = files;
  
        var  obj = {}
        Object.entries(req.files).forEach(([key, value]) => {  
            var oldPath = value._writeStream.path;
            var ext = path.extname(value.originalFilename)
            var newPath = path.join(__dirname, '../Uploads/'+key) + '/' + value.newFilename + ext
            var rawData = fs.readFileSync(oldPath)
            var patsh = key;
            obj[patsh] = newPath;
            var dir = path.join(__dirname, '../Uploads/'+key);
            // Create Directory If not Exist
            if (!fs.existsSync(dir)){
                fs.mkdirSync(dir, { recursive: true });
            }
            // Write Image
            fs.writeFile(newPath, rawData, function (err) {
                if (err) console.log(err) 
                
                console.log("Successfully uploaded",patsh )
            })
        });  
        req.body =  {...req.body, ...obj};
  
         next();
    });
}

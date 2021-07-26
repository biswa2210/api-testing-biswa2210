const express=require('express');
var admin = require("firebase-admin");
const UUID = require('uuid-v4');
const multer=require('multer');
const app = express();
require('dotenv/config');
const data=require('./data.json');
var serviceAccount = require("./serviceAccount/daily-deals-images-bucket-firebase-adminsdk-1rlpi-de37131eb0.json");
const FILE_TYPE_MAP = {
    'image/png': 'png',
    'image/jpeg': 'jpeg',
    'image/jpg': 'jpg',
};

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const isValid = FILE_TYPE_MAP[file.mimetype];
        let uploadError = new Error('invalid image type');

        if (isValid) {
            uploadError = null;
        }
        cb(uploadError, 'public/uploads');
    },
    filename: function (req, file, cb) {
        const fileName = file.originalname.split(' ').join('-');
        const extension = FILE_TYPE_MAP[file.mimetype];
        cb(null, `${fileName}-${Date.now()}.${extension}`);
    },
});

const uploadOptions = multer({ storage: storage });
//--------------FIREBASE CONNECTION INITIALIZED--------------//
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "daily-deals-images-bucket.appspot.com"
});
//-----------------------------------------------------------//
//MIDDLEWARES--------------------->

//-------------------------------->
let port=process.env.PORT || 5000;
var bucket = admin.storage().bucket();
var pok='';
function setUrl(str){
    pok=str;
}
async function uploadFile(filepath,filename) {
    let uuid = UUID();
  const metadata = {
    metadata: {
      // This line is very important. It's to create a download token.
      firebaseStorageDownloadTokens: uuid
    },
  };
  await bucket.upload(filepath, {
    // Support for HTTP requests made with `Accept-Encoding: gzip`
    gzip: true,
    metadata: metadata,
  }).then((data)=>{
   setUrl("https://firebasestorage.googleapis.com/v0/b/" + bucket.name + "/o/" +filename+ "?alt=media&token=" + uuid);
  })

}



//------------------------------------------------------------------------------------------------>
var pokitem='';
var listurls=[];
function setUrll(str){
    pokitem=str;
    listurls.push(pokitem);
}
async function uploadFiles(filepaths,filenames) {
    let uuid = UUID();
  const metadata = {
    metadata: {
      // This line is very important. It's to create a download token.
      firebaseStorageDownloadTokens: uuid
    },
  };
  for(let i = 0; i < filepaths.length; i++){
    await bucket.upload(filepaths[i], {
        // Support for HTTP requests made with `Accept-Encoding: gzip`
        gzip: true,
        metadata: metadata,
      });
    setUrll("https://firebasestorage.googleapis.com/v0/b/" + bucket.name + "/o/" +filenames[i]+ "?alt=media&token=" + uuid);
  }
}





app.post('/uploads',uploadOptions.array('images',10) ,async (req,res)=>{
        const files = req.files;
        const imagePaths = [];
        const images = [];
        if (files) {
            files.map((file) => {
                imagePaths.push(`public/uploads/${file.filename}`)
                images.push(`${file.filename}`)
            })
        }
    console.log(imagePaths);
    console.log(images);
     uploadFiles(imagePaths,images).then(data=>{
        console.log(listurls);
     })
     
     res.send({status:"Images uploaded in firebase"});
   

})

//---------------------------------------------------------------------------------------------------------------->



app.post('/upload',uploadOptions.single('image') ,async (req,res)=>{
    try{
        const fileName = req.file.filename;
        uploadFile(`public/uploads/${fileName}`,`${fileName}`).then(downloadUrl=>{
            console.log(pok);
            res.send({status:"Image uploaded in firebase",url: pok})
        }).catch(console.error);
        
    }catch(err){
        console.log(err);
    }

})
app.get('/developers',(req,res)=>{
    res.send(data)
})


app.listen(port,()=>{
    console.log("The Testing App is listening on the port of : "+port);
})

import multer from "multer";
import path from "path";

let limits ={
    fileSize:1024 * 1024 * 2,
    //the maximum file size in bytes
    //1 kilobytes equal to 1024 bytes
};

let storage = multer.diskStorage({
    destination:(req,file,cb) => {
        let staticFolder ="./public";
        cb(null,staticFolder);
        // ./ means root folder.
        //you must make public folder manually or it will throw error like no such file or directory
        //destination give the folder location where file is placed
    },
    filename:(req, file, cb) =>{
        //any file has key and value
        //key is called filename, value is called original name

        let fileName = Date.now() +"-"+ file.originalname;
        cb(null,fileName);
    },
});

let fileFilter = (req,file,cb) => {
    let validExtensions = [
        ".jpg",".JPG",".jpeg",".JPEG", ".png",".PNG",".doc",".svg",".pdf",".mp4",
    ];
    let originalName =file.originalname;
let originalExtension = path.extname(originalName);

//path module is inbuilt module(package) of node js

let isValidExtension = validExtensions.includes(originalExtension);

if(isValidExtension) {
    cb(null,true);
    //true means pass such type of file
    //null represents errro since there is no error thus error is null

}else{
    cb(new Error("File is not supported"), false);
    //false means don't pass such type of file
}
};

const upload = multer({
    storage:storage,

    //We define the location in server where file is store and control the fileNama.

    fileFilter:fileFilter,

    //filter the file according to the extensions

    limits:limits,
    //filter file limit according to limit
})

export default upload
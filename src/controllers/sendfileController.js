export const handleSingleFileController = async(req,res,next) =>{
    try {
        
let link = `http://localost:3000/${req.file.originalname}`;
res.json({
    success:true,
    message:"file uploaded successfully",
    result:link
})

    } catch (error) {
res.json({
    success:false,
message:error.message
});
        
    }
};

export const handleMultipleFileController = async(req,res,next)=>{
    try {
       let link = req.files.map((value,index) => {
        return `http://localhost:3000/${value.filename}`;
       }) ;
       res.json({
        success:true,
        message:"multiple files are uploaded",
        result:link,
       })
    } catch (error) {
       res.json({
        success:false,
        message:error.message
       }) 
    }
};
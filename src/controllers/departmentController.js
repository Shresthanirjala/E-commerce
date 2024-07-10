import { Department } from "../Schema/model.js";

export const createDepartmentController = async(req,res,next) => {
    try {
        let data = await Department.create(req.body)
        res.status(200).json({
            sucess:true,
            message:"department created sucessfully",
            result:data,
        });
        
    } catch (error) {
        res.status(500).json({
            sucess:"false",
            message:error.message

        });
    };
};

export const readDepartmentController = async (req,res,next) => {
    try {
        let data = await Department.find(req.body)
        res.json({
            sucess:true,
            message:"department read sucessfully",
            result:data,
        })
    } catch (error) {
        res.json({
        sucess:false,
        message:error.message,

        })
    }
}
export const readSpecificDepartmentController = async (req,res,next) => {
    try {
        let data = await Department.findById(req.params.id)
        res.json({
            sucess:true,
            message:"departmentspecific read  sucessfully",
            result:data

        })
    } catch (error) {
        res.json({
            sucess:true,
            message:error.message,

        });

    };
};

export const updateDepartmentController = async (req,res,next)=>{
    try {
        let data = await Department.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.json({
            sucess:true,
            message:"department updates sucessffylly",
            result:data
        });
    } catch (error) {
        res.json({
            sucess:false,
            message:error.message,
        });
    };
};

export const deleteDepartmentController = async (req,res,next) => {
    try {
        let data = await Department.findByIdAndDelete(req.params.id)
        res.json({
            sucess:true,
            message:"Department deleted sucessfully",
            result:data
        })
    } catch ({error}) {
        res.json({
            success:true,
            message:error.message
        });
    };
};
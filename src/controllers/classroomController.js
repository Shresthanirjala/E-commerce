import { Classroom} from "../Schema/model.js";

export const createClassroomController = async (req, res, next) => {
    try {
      const createClassroom = await Classroom.create(req.body);
      res.status(200).json({
        success: true,
        message: "classroom created successfully",
        result: createClassroom,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };

  export const readClassroomController = async (req,res,next) =>{
    try {
        const CreateClassroom = await Classroom.find({})
        res.json({
            sucess:true,
            mesage:"classroom read sucessfully",
            result: CreateClassroom,
        });
    } catch (error) {
        res.json({
            sucess:false,
            message:error.message,
        });
        
    }
  }
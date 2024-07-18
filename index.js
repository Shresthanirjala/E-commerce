// make express application
import express, { Router, json } from "express";
import firstRouter from "./src/routes/firstRouter.js";
import connectMongoDb from "./src/connectDB/mongo.js";
import userRouter from "./src/routes/userRouter.js";
import productRouter from "./src/routes/productRouter.js";
import teacherRouter from "./src/routes/teacherRouter.js";
import studentRouter from "./src/routes/studentRouter.js";
import doctorRouter from "./src/routes/doctor.Router.js";
import traineeRouter from "./src/routes/traineeRouter.js";
import bookRouter from "./src/routes/bookRouter.js";
import employeeRouter from "./src/routes/employeeRouter.js";
import departmentRouter from "./src/routes/departmentRouter.js";
import collegeRouter from "./src/routes/collegeRouter.js";
import classroomRouter from "./src/routes/classroomRouter.js";
import reviewRouter from "./src/routes/reviewRouter.js";
import webuserRouter from "./src/routes/webuserRouter.js";
import fileRouter from "./src/routes/sendFileRouter.js";

const app = express();
app.use(express.static("./public"));
const port = 3000;

connectMongoDb();

app.use(json());

// let firstRouter =Router
// //API=> defining task for each request
// firstRouter
// myApp
// .post("/", (req,res,next) => {
// res.json("First gate")
// })
//  .get((req,res,next)=>{
// res.join("First gate");
// })
// .patch((req,res,next)=>{
//     res.json("first patch");
// })
// .delete((req,res,next)=>{
//     res.json("first date");
// });

app.use("/user", userRouter);
app.listen(port, () => {
  console.log(`port is listening at ${port}`);
});

app.use("/product", productRouter);
app.use("/teacher", teacherRouter);
app.use("/student", studentRouter);
app.use("/doctor", doctorRouter);
app.use("/trainee", traineeRouter);
app.use("/book", bookRouter);
app.use("/employee", employeeRouter);
app.use("/department", departmentRouter);
app.use("/college",collegeRouter);
app.use("/classroom",classroomRouter);
app.use("/review",reviewRouter);
app.use("/webuser",webuserRouter)
app.use("/files",fileRouter);

//flow

//schema
//model
//controller
//routes
//index

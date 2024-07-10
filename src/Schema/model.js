import { model } from "mongoose";
import userSchema from "./userSchema.js";
import teacherSchema from "./teacherSchema.js";
import traineeSchema from "./traineeSchema.js";
import bookSchema from "./bookSchema.js";
import studentSchema from "./studentSchema.js";
import doctorSchema from "./doctorSchema.js";
import employeeSchema from "./employeeSchema.js";
import departmentSchema from "./departmentSchema.js";
import collegeschema from "./collegeSchema.js";
import classroomschema from "./classroomSchema.js";
import reviewSchema from "./reviewSchema.js";
import webuserSchema from "./webuserSchema.js";
//variable name must be same as model name
//model name first letter always be capita;
//modle name must be singular


export const User = model("User", userSchema);
export const Teacher = model("Teacher", teacherSchema);

export const Trainee = model("Trainee", traineeSchema);
export const Book = model("Book", bookSchema);
export const Student = model("Student", studentSchema);
export const Doctor = model("Doctor", doctorSchema);
export const Employee = model("Employee", employeeSchema);
export const Department = model("Department", departmentSchema);
export const College = model("College",collegeschema);
export const Classroom = model("Classroom",classroomschema);
export const Review = model("Review",reviewSchema);
export const Webuser = model("Webuser",webuserSchema);
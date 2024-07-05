import { model } from "mongoose";
import userSchema from "./userSchema.js";
import teacherSchema from "./teacherSchema.js";
import traineeSchema from "./traineeSchema.js";
import bookSchema from "./bookSchema.js";
import studentSchema from "./studentSchema.js";
import doctorSchema from "./doctorSchema.js";
import employeeSchema from "./employeeSchema.js";

export const User = model("User", userSchema);
export const Teacher = model("Teacher", teacherSchema);

export const Trainee = model("Trainee", traineeSchema);
export const Book = model("Book", bookSchema);
export const Student = model("Student", studentSchema);
export const Doctor = model("Doctor", doctorSchema);
export const Employee = model("Employee", employeeSchema);

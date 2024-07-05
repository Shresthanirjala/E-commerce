import mongoose from "mongoose"

// let dbPort = 'mongodb://localhost:27017/n9'

const connectMongoDb = () =>{
    mongoose.connect("mongodb://localhost:27017/n9");
    console.log("Connected to MongoDB Database");
}

export default connectMongoDb
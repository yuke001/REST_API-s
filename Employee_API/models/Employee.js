import mongoose from "mongoose";

let EmpSchema = new mongoose.Schema(
    {
        EmpName:{
            type:String
        },
        EmpPhone:{
            type:Number
        },
        EmpPlace:{
            type:String
        },
        EmpActive:{
            type:Boolean,
            default:false
        }

    },
    {
        timestamps:true
    }
)

let Employee = mongoose.model("Employee",EmpSchema)

export default Employee ;
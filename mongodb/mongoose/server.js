import mongoose, { Schema } from "mongoose"

async function dbconnect() {

  await mongoose.connect("mongodb://localhost:27017/college")

  const schema = mongoose.Schema({
    name:String,
    email:String,
    age:Number,
  })

  const studentmodel= mongoose.model("modelofstudent", schema,"student")
  const studentdata= await studentmodel.find()
  console.log(studentdata)
}

dbconnect()







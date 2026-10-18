import express from "express"
import{MongoClient} from"mongodb"

const dbname='college'
const url="mongodb://localhost:27017"

const client= new MongoClient(url)



const app=express()
app.set("view engine","ejs")
app.get("/",async(req,resp)=>{

   await client.connect()
  const db=client.db(dbname)
  const collection=db.collection('student')
  const studentdata=await collection.find().toArray()
   console.log(studentdata)

  resp.render("index",{studentdata})

})

app.listen(5000)
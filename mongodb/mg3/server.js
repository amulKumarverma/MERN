import express from "express"
import{MongoClient} from"mongodb"

const dbname='college'
const url="mongodb://localhost:27017"

const client= new MongoClient(url)



const app=express()

app.set("view engine","ejs")

client.connect().then((connection)=>{
 const db= connection.db(dbname)

  app.get("/api",async(req,resp)=>{
  const collection=db.collection('student')
  const studentdata=await collection.find().toArray()
  resp.send(studentdata)
  })


  app.get("/ui",async(req,resp)=>{
  const collection=db.collection('student')
  const studentdata=await collection.find().toArray()
resp.render("index",{studentdata})
  })

})



app.listen(5000)
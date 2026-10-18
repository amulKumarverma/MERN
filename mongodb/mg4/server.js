import express from "express"
import{MongoClient} from"mongodb"

const dbname='college'
const url="mongodb://localhost:27017"

const client= new MongoClient(url)



const app=express()

app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))

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


     app.get("/",async(req,resp)=>{
    resp.render("add")

   })


app.post("/add-student", async (req, resp) => {
        console.log(req.body)

        const collection = db.collection('student')

        const insertdata = await collection.insertOne(req.body)

        resp.redirect("/ui")

        
    })
})



app.listen(5000)



  //  const insertdata = await collection.insertOne({
  //           name: req.body.name,
  //           age: Number(req.body.age),
  //           email: req.body.email
  //       })
import express from "express"
import{MongoClient, ObjectId} from"mongodb"

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

app.delete("/delete/:id",async(req,resp)=>{
  console.log(req.params.id)
  const collection=db.collection('student')
const studentdata=await collection.deleteOne({_id: new ObjectId(req.params.id)})

if(studentdata){
  resp.send(
    {
      message:"student data deleted",
      success:true
    }
  )
}
else{
    resp.send(
    {
      message:"student data not deleted,try again!",
      success:false
    }
  )
}


})

app.get("/ui/delete/:id",async(req,resp)=>{
  console.log(req.params.id)
  const collection=db.collection('student')
const studentdata=await collection.deleteOne({_id: new ObjectId(req.params.id)})


resp.redirect("/ui")
// if(studentdata){
//   resp.send(
//     {
//       message:"student data deleted",
//       success:true
//     }
//   )
// }
// else{
//     resp.send(
//     {
//       message:"student data not deleted,try again!",
//       success:false
//     }
//   )
// }


})




// Open update page
app.get("/update/:id", async (req, resp) => {
    const collection = db.collection("student");

    const studentdata = await collection.findOne({
        _id: new ObjectId(req.params.id)
    });

    if (!studentdata) {
        return resp.status(404).send("Student not found");
    }

    resp.render("update", { studentdata });
});

// Save updated student data
app.post("/ui/update/:id", async (req, resp) => {
    const collection = db.collection("student");

    await collection.updateOne(
        { _id: new ObjectId(req.params.id) },
        {
            $set: {
                name: req.body.name,
                age: Number(req.body.age),
                email: req.body.email
            }
        }
    );

    resp.redirect("/ui");
});

})



app.listen(5000)



  //  const insertdata = await collection.insertOne({
  //           name: req.body.name,
  //           age: Number(req.body.age),
  //           email: req.body.email
  //       })
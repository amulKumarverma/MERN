import "dotenv/config";
import {MongoClient} from "mongodb"

const url = process.env.MONGODB_URI;
const database="sce"
const collection="student"
const client= new MongoClient(url)


client.connect().then(()=>{

  console.log("connected")
})


 async function dbconnect(){
  const db=client.db(database)
  const collectdata=db.collection(collection)
  const data= await collectdata.find().toArray()

  console.log(data)

}





dbconnect()




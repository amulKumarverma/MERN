import express from "express"
import{MongoClient} from"mongodb"

const dbname='college'
const url="mongodb://localhost:27017"

const client= new MongoClient(url)

async function dbconnection(paras) {
  await client.connect()
  const db=client.db(dbname)
  const collection=db.collection('student')
  const result=await collection.find().toArray()
  console.log(result)
}

dbconnection()

const app=express()

app.listen(5000)
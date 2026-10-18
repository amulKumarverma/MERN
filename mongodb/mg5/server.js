
import express from "express"
import { MongoClient } from "mongodb"

const dbname = "college"
const url = "mongodb://localhost:27017"

const client = new MongoClient(url)
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

client.connect().then((connection) => {

    const db = connection.db(dbname)
    const collection = db.collection("student")

    // POST REST API
    app.post("/", async (req, resp) => {

        console.log(req.body)

        const insertdata = await collection.insertOne(req.body)

        resp.send({
            message: "Student data saved successfully",
            result: insertdata
        })

    })

})

app.listen(5000, () => {
    console.log("Server running at http://localhost:5000")
})

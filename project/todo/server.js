
import express from "express"
import { MongoClient, ObjectId } from "mongodb"

const app = express();

// Database name
const dbname = "todo"

// Collection name
const collectiontask = "task"

// MongoDB connection URL
const url = "mongodb://localhost:27017"

// Create MongoDB client
const client = new MongoClient(url)

// Function to connect to MongoDB and return the database
const connection = async () => {
    const connect = await client.connect()
    return await connect.db(dbname)
}

// Set EJS as the view engine
app.set('view engine', 'ejs')

// Serve static files such as CSS from the public folder
app.use(express.static('public'))

// Read form data submitted using POST requests
app.use(express.urlencoded({ extended: true }))

// Open the Add Task page
app.get("/", (req, resp) => {
    resp.render('add')
})

// Add a new task to MongoDB
app.post("/", async (req, resp) => {
    const db = await connection()
    const collection = db.collection(collectiontask)

    // Insert the submitted form data into the collection
    const data = await collection.insertOne(req.body)

    // Display submitted data in the terminal
    console.log(req.body)

    // Redirect to the task list after adding the task
    resp.redirect('/list')
})

// Display all tasks stored in MongoDB
app.get('/list', async (req, res) => {
    const db = await connection()
    const collection = db.collection(collectiontask)

    // Fetch all tasks and convert the cursor into an array
    const tasks = await collection.find({}).toArray()

    // Send the tasks to the list.ejs page
    res.render('list', { tasks });
})

// Delete a task using its MongoDB ObjectId
app.post("/delete/:id", async (req, resp) => {
    const db = await connection()
    const collection = db.collection(collectiontask)

    // Find and delete the task matching the provided ID
    const data = await collection.deleteOne({
        _id: new ObjectId(req.params.id)
    })

    // Redirect to the task list after deletion
    resp.redirect('/list')
})

// Open the Update Task page for a specific task
app.get('/update/:id', async (req, res) => {
    const db = await connection()
    const collection = db.collection(collectiontask)

    // Find the task using its MongoDB ObjectId
    const task = await collection.findOne({
        _id: new ObjectId(req.params.id)
    })

    // Send the selected task to update.ejs
    res.render('update', { task });
})

// Update an existing task in MongoDB
app.post('/update/:id', async (req, res) => {
    const db = await connection()
    const collection = db.collection(collectiontask)

    // Find the task by ID and update its fields with form data
    await collection.updateOne(
        { _id: new ObjectId(req.params.id) },
        { $set: req.body }
    )

    // Redirect to the task list after updating
    res.redirect('/list')
})







app.post("/delete-selected", async (req, res) => {
    const db = await connection()
    const collection = db.collection(collectiontask)

    // Get the selected task IDs
    let ids = req.body.ids || []

    // Convert a single selected ID into an array
    if (!Array.isArray(ids)) {
        ids = [ids]
    }

    // Stop if no tasks were selected
    if (ids.length === 0) {
        return res.redirect('/list')
    }

    // Keep only valid MongoDB ObjectIds
    const validIds = ids.filter(id => ObjectId.isValid(id))

    // Delete all selected tasks
    if (validIds.length > 0) {
        await collection.deleteMany({
            _id: { $in: validIds.map(id => new ObjectId(id)) }
        })
    }

    // Return to the task list
    res.redirect('/list')
})



// Redirect POST requests to /list back to the task list
app.post('/list', (req, res) => {
    res.redirect('/list')
})

// Start the Express server on port 3000
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
})






// import express from "express"
// import {MongoClient, ObjectId} from "mongodb"
// const app = express();

// const dbname= "todo"
// const collectiontask="task"
// const url="mongodb://localhost:27017"
// const client= new MongoClient(url)


// const connection =async ()=>{
//   const connect = await client.connect()
//   return await connect.db(dbname)
// }


// app.set('view engine','ejs')
// app.use(express.static('public'))
// app.use(express.urlencoded({ extended: true }))

// app.get("/",(req,resp)=>{
 

//   resp.render('add')
// })

// app.post("/",async (req,resp)=>{
//    const db= await connection()
//    const collection = db.collection(collectiontask)
//    const data= await collection.insertOne(req.body)
//    console.log(req.body)

//    resp.redirect('/list')
// })


// app.get('/list', async (req, res) => {
//     const db = await connection()
//     const collection = db.collection(collectiontask)

//     const tasks = await collection.find({}).toArray()

//     res.render('list', { tasks });
// });



// app.post("/delete/:id",async (req,resp)=>{
//    const db= await connection()
//    const collection = db.collection(collectiontask)
//    const data= collection.deleteOne({_id: new ObjectId(req.params.id)})
  

//   resp.redirect('/list')
// })


// app.get('/update/:id',async(req, res) => {
//      const db = await connection()
//     const collection = db.collection(collectiontask)
//  const task = await collection.findOne({ _id: new ObjectId(req.params.id)})
//     res.render('update',{task});
// });




// app.post('/update/:id', async (req, res) => {
//     const db = await connection()
//     const collection = db.collection(collectiontask)

//     await collection.updateOne(
//         { _id: new ObjectId(req.params.id) },
//         { $set: req.body }
//     )

//     res.redirect('/list')
// })
// app.post('/list', (req, res) => {


//    res.redirect('/list')
// });

// app.listen(3000, () => {
//     console.log('Server running at http://localhost:3000');
// });


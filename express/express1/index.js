const express= require("express")

const app= express()

app.get("",(req,res)=>{
res.send("<h1>this is express.js</h1>")

})

app.get("/about",(req,res)=>{
res.send("<h1>this is about page</h1>")

})

app.get("/contact",(req,res)=>{
res.send("<h1>this is contact page</h1>")

})

app.listen(3000)
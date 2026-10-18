import express from "express";
import path from "path"


const app=express();

const absolutepath404=path.resolve("../pagenotfound")
const stylepagee=path.resolve("../stylepage")
const absolutepath=path.resolve('.')

app.use(express.static(stylepagee))
app.use(express.static(absolutepath))


app.get("/",(req,resp)=>{

 resp.send(stylepagee)
  resp.sendFile(absolutepath +"/index.html")

})

app.get("/about",(req,resp)=>{
 
  resp.sendFile(absolutepath +"/about.html")

})


app.get("/contact",(req,resp)=>{
 
  resp.sendFile(absolutepath +"/contact.html")

})

app.get("/services",(req,resp)=>{
 
  resp.sendFile(absolutepath +"/service.html")

})

app.use((req,resp)=>{

  resp.status(404).sendFile(path.join(absolutepath404 + "/404.html"));

})



app.listen(4000)



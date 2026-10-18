const server= require('http');
server.createServer(
  (req,res)=>{
  res.write("hello") 
  res.end("amul")
}

).listen(3000);
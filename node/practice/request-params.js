const http=require('http')    
http.createServer((req,resp)=>{

  console.log(req.url)
  if(req.url=="/"){
    resp.write("Home Page")
  }
  else if(req.url=="/login"){
      resp.write("login Page")
  }
  else{
      resp.write("Other Page")
  }
  resp.end()
}).listen(7000)

// const arg=process.argv
// const port=arg[2]

// const http= require('http')
// const fs= require('fs')

// http.createServer((req,resp)=>{

//   fs.readFile('html/web.html','utf8',(err,data)=>{
//     if(err){
//       resp.writeHead(500, { "Content-Type": "text/plain" });
//       resp.write("internal server error")

//       resp.end()
//       return
//     }

//     resp.writeHead(200,{"Content-Type":"text/html"})
//     resp.write(data)
//     resp.end()
//   })

// }).listen(port)


const arg = process.argv;
const port = arg[2];

const http = require("http");
const fa = require("fs");

http.createServer((req, resp) => {

  fa.readFile('../send-html/web.html', 'utf8', (err, data) => {

    if (err) {
      resp.writeHead(500, { "Content-Type": "text/plain" });
      resp.write("Internal Server Error");
      resp.end();
      return;
    }

    resp.writeHead(200, { "Content-Type": "text/html" });
    resp.write(data);
    resp.end();

  });

}).listen(port);
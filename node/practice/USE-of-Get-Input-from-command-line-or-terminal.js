const args=process.argv
let port=args[2]
const http= require('http')

http.createServer((req,resp)=>{
  resp.write("hello , this is the use of command line input/terminal")
  resp.end()
}).listen(port)



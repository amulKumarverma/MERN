const http = require("http")
const fs = require("fs")

http.createServer((req, res) => {

const headerdata= fs.readFileSync("../simplewebsite/header.html", "utf-8")


let rout="/index"
if(req.url!="/"){
  rout=req.url
}


  if (req.url != "/style.css") {
    fs.readFile("../simplewebsite/"+rout+".html", "utf-8", (err, data) => {

      if (err) {
        res.writeHead(500, { "content-type": "text/plain" })
        res.write("internal server html error")
        return false
      }
      res.write(headerdata +""+data)

      res.end()

    })
  }
  else if(req.url == "/style.css"){

        fs.readFile("../simplewebsite/style.css", "utf-8", (err,data)=> {

      if (err) {
        res.writeHead(500, { "content-type": "text/plian" })
        res.write("internal server css error")
        return false
      }

       res.writeHead(200, { "content-type": "text/css" })
      res.write(data)

      res.end()

    })
  }


















}).listen(3000)
let age=19

const server= require('http')

const liveserver= server.createServer((req,resp)=>{
  resp.setHeader("Content-Type","text/html")
  resp.write(`
    <html>
    <head>
    <title>server</title>
    </head>
    <body>
    <h1>hello this is amul.</h1>
    <p>`+age+`</p>
    <p>`+new Date()+`</p>
    
    </body>
    </html>
    
    `)
  resp.end()
  process.end()
})

liveserver.listen(4800)
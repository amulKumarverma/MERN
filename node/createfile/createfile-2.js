const http = require("http");
const fs = require("fs");

const querystring = require("querystring");

http.createServer((requ, resp) => {

    fs.readFile("../send-html/form.html", "utf-8", (err, data) => {

        resp.writeHead(200, {
            "Content-Type": "text/html"
        });

        if (err) {
            resp.end("Internal server error");
        }

        else if (requ.url == "/") {
            resp.write(data);
            resp.end();
        }

        else if (requ.url == "/submit") {

            let databody = [];

            requ.on("data", (chunks) => {
                databody.push(chunks);
            });

            requ.on("end", () => {

                let rawdata = Buffer.concat(databody);

                let finaldata = querystring.parse(
                    rawdata.toString());

                    let datastore="my name is :-  " + finaldata.name  + "and email id is:- "+ finaldata.email

                    fs.writeFile(`../createfile/${finaldata.name}.txt`,
    datastore,"utf-8",(err)=>{
      if(err){
        resp.end("internal error occur")
        return false;
      }
      else{
console.log("file created");
      }
    })

                console.log(finaldata);
                

                resp.end("Data submitted");
            });
        }

    });

}).listen(3000);
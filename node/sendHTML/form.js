const http = require("http");
const fs = require("fs");

http.createServer((requ, resp) => {

    fs.readFile('../send-html/form.html', 'utf-8', (err, data) => {

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
            resp.end("Data submitted");
        }

    });

}).listen(3000);
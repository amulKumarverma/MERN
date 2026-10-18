const http = require("http");

http.createServer((requ, resp) => {

  resp.writeHead(200, {
    "Content-Type": "text/html"
  });

  if (requ.url == "/") {

    resp.write(`
      <form action="/submit" method="POST">

        <input type="text" name="name" placeholder="Enter name">

        <input type="email" name="email" placeholder="Enter email">

        <button type="submit">Submit</button>

      </form>
    `);

  } 
  else if (requ.url == "/submit") {

    resp.write("Form submitted");

  }

  resp.end();

}).listen(5500, () => {
  console.log("Server running on port 5500");
});
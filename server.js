var server = http.createServer(function (req, res) {
  if (req.url == "/") {
    fs.readFile("index.html", function (error, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  }
});
server.listen(3000);
console.log("Surver run Successful");

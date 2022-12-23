const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to homepage");
  } else if (req.url === "/about") {
    res.end("Welcome to about page");
  } else {
    res.end(`
  <h1>Oops!</h1>
  <p>Can't find that page</p>
  <a href='/'>Go back to homepage</a>`);
  }
});
server.listen(5000);

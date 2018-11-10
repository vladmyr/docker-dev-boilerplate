const http = require("http");

const PORT = process.env.PORT || 8080;
const app = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write(`Hello world`);
  response.end();
});

app.listen(PORT);
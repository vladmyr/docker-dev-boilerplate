const http = require("http");
const fs = require("fs");

const PORT = process.env.PORT || 8080;
const FILEPATH = "./tmp/log.txt";

let index = 0;

const app = http.createServer((request, response) => {
  index++;

  const str = `Hello world ${index} times`;

  // test two way fs synching
  fs.writeFileSync(FILEPATH, str);

  response.writeHead(200, { "Content-Type": "text/html" });
  response.write(str);
  response.end();
});

app.listen(PORT);

console.log(`Server is running at port ${PORT}`);
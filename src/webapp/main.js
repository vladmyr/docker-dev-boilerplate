const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 8080;
const FILEPATH = "./tmp/log.txt";

let index = 0;

const app = http.createServer((request, response) => {
  index++;

  const str = `Hello world ${index} times`;

  // test two way fs synching
  if (!fs.existsSync(path.dirname(FILEPATH))) {
    fs.mkdirSync(path.dirname(FILEPATH));
  }
  fs.writeFileSync(FILEPATH, str);

  response.writeHead(200, { "Content-Type": "text/html" });
  response.write(str);
  response.end();

  return;
});

app.listen(PORT);

console.log(`Server is running at port ${PORT}`);
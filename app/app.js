const http = require('http');

const server = http.createServer((req, res) => {
  res.end("DevSecOps Pipeline Running on EKS 🚀");
});

server.listen(3000);

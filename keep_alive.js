const http = require('http');

http.createServer((req, res) => {
  res.write("Bot encendido");
  res.end();
}).listen(8080);

console.log("Servidor keep_alive corriendo en el puerto 8080");

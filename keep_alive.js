const http = require('http');

http.createServer((req, res) => {
  res.write("Bot encendido");
  res.end();
}).listen(process.env.PORT || 8080); // <-- ESTE ES EL CAMBIO REAL

console.log(`Servidor keep_alive corriendo en el puerto ${process.env.PORT || 8080}`);

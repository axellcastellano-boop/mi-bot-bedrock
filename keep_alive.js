const http = require('http');

http.createServer(function (req, res) {
  res.write("¡El bot de Migajaland sigue vivo!");
  res.end();
}).listen(process.env.PORT || 8080); // <-- ESTO ES LO CRUCIAL

console.log(`Servidor keep_alive corriendo en el puerto ${process.env.PORT || 8080}`);

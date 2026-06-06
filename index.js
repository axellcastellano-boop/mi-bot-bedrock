const { createClient } = require('bedrock-protocol');
require('./keep_alive.js');

const client = createClient({
  host: 'miga-land.datho.st',
  port: 17645,
  username: 'CagyTooth6282',
  offline: false
});

client.on('packet', (packet) => {
  console.log('Recibiendo paquete:', packet);
});

client.on('spawn', () => {
  console.log('Bot conectado al servidor correctamente');
});

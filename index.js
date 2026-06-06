const { createClient } = require('bedrock-protocol');
require('./keep_alive.js');

// Configuramos el cliente con parámetros para mayor estabilidad
const client = createClient({
  host: 'miga-land.datho.st',
  port: 17645,
  username: 'CapitanYami86',
  offline: false,
  profilesFolder: './profiles',
  skipPing: true // Esto ayuda a evitar que el bot se cuelgue al intentar hacer el ping inicial
});

client.on('connect', () => {
  console.log('¡Conectado al servidor!');
});

// Capturamos el error pero evitamos que el bot se cierre por completo inmediatamente
client.on('error', (err) => {
  console.error('Error de conexión, intentando mantener vivo el proceso:', err);
});

client.on('clientLog', (log) => {
  console.log(log);
});

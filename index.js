const { createClient } = require('bedrock-protocol');
require('./keep_alive.js'); // Mantiene el bot activo

const client = createClient({
  host: 'miga-land.datho.st',
  port: 17645,
  username: 'MigajaBot', // Puedes cambiar el nombre si quieres
  offline: false, // Usamos Microsoft Auth
  profilesFolder: './profiles' // Para guardar la sesión
});

client.on('connect', () => {
  console.log('¡Conectado al servidor!');
});

client.on('error', (err) => {
  console.log('Error:', err);
});

client.on('clientLog', (log) => {
  console.log(log);
});

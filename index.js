const { createClient } = require('bedrock-protocol');
require('./keep_alive.js'); // Mantiene el bot activo

const client = createClient({
  host: 'miga-land.datho.st',
  port: 17645,
  // Cambiado para eliminar espacios y evitar errores de validación
  username: 'CapitanYami86', 
  offline: false, // Usamos Microsoft Auth
  // Mantenemos la carpeta, pero asegúrate de que Railway tenga permiso de escritura
  profilesFolder: './profiles' 
});

client.on('connect', () => {
  console.log('¡Conectado al servidor!');
});

client.on('error', (err) => {
  console.error('Error detectado:', err);
});

client.on('clientLog', (log) => {
  console.log(log);
});
// Arreglos aplicados para limpieza de sesión y nombre de usuario sin espacios

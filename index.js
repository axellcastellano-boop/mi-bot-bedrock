const { createClient } = require('bedrock-protocol');
require('./keep_alive.js');

console.log("Iniciando el bot AFK para Migajaland...");

// Configuramos el cliente con parámetros para mayor estabilidad y parches de versión
const client = createClient({
  host: 'miga-land.datho.st',
  port: 17645,
  username: 'CapitanYami86',
  offline: false,
  profilesFolder: './profiles',
  skipPing: true,             // Evita que el bot se cuelgue al intentar hacer el ping inicial
  raknetBackend: 'js',        // PARCHE RAILWAY: Evita errores de compilación nativa C++ usando JS puro
  version: '1.26.20',         // FORZADO: Usa esta versión para enviar el ID de protocolo 975 (compatible con la 1.26.23)
  skipValidation: true        // IGNORAR ERRORES: Se salta la verificación estricta de paquetes del servidor
});

client.on('connect', () => {
  console.log('¡Conectado al servidor! Autenticando e intercambiando paquetes...');
});

// Evento para confirmar cuando el bot ya está físicamente parado en el mapa
client.on('join', () => {
  console.log('¡Éxito total! El bot ha entrado por completo al mundo de Migajaland.');
});

// Capturamos el error pero evitamos que el bot se cierre por completo inmediatamente
client.on('error', (err) => {
  console.error('Error de conexión, intentando mantener vivo el proceso:', err.message || err);
});

client.on('clientLog', (log) => {
  console.log(log);
});

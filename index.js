const http = require('http');
const { createClient } = require('bedrock-protocol');

// Forzar al servidor a responder exactamente en el puerto 8080 que Railway audita por defecto
const serverPort = 8080;
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Bot AFK en ejecucion de fondo\n');
}).listen(serverPort, '0.0.0.0', () => {
  console.log(`[Railway] Servidor de salud respondiendo correctamente en el puerto: ${serverPort}`);
});

console.log("Iniciando el bot AFK para Migajaland...");

// 2. Configuración del cliente de Bedrock
const client = createClient({
  host: 'miga-land.datho.st',
  port: 17645,
  username: 'CapitanYami86',
  offline: false,
  profilesFolder: './profiles',
  skipPing: true,             // Evita que el bot se cuelgue al intentar hacer el ping inicial
  version: '1.26.20',         // FORZADO: Envía el protocolo 975 compatible con tu server 1.26.23
  skipValidation: true        // IGNORAR ERRORES: Se salta la verificación estricta de paquetes
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

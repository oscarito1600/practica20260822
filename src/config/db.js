const dns = require('dns');
// Solución para evitar errores de conexión DNS (querySrv ECONNREFUSED) con Atlas
dns.setDefaultResultOrder('ipv4first');
dns.setServers(['8.8.8.8', '1.1.1.1']);

const mongoose = require('mongoose');

const conectarDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Capa de Datos: Conexión exitosa a MongoDB');
  } catch (error) {
    console.error('Error crítico de conexión a la DB:', error.message);
    process.exit(1);
  }
};

module.exports = conectarDB;
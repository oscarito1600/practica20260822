const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const estudianteRoutes = require('./routes/estudiante.routes');
const cursoRoutes = require('./routes/curso.routes');
const usuarioRoutes = require('./routes/usuario.routes');

const app = express();

// 1. Configuración de CORS
const corsOptions = {
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true, // Permite el envío de cookies/encabezados de autenticación
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'x-use-cookie']
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// 2. Ruta raíz de bienvenida/prueba
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'API corriendo correctamente en Render'
  });
});

// 3. Registro de Rutas
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/estudiantes', estudianteRoutes);
app.use('/api/cursos', cursoRoutes);

module.exports = app;
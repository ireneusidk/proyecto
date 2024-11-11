const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// const hechizosRoutes = require('./routes/hechizoRoutes');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const session = require('express-session');
require('dotenv').config(); 
const app = express();

// Middleware
app.use(cors({ origin: '*' })); // Permite solicitudes desde diferentes orígenes
app.use(express.json()); 

//Configuración de la sesión
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true, 
  cookie: { secure: false }
}));

// Rutas
// app.use('/api/hechizos', hechizosRoutes);
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

// Conexión a la base de datos
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const router = express.Router();

//registro
router.post('/register', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({ username: req.body.username, password: hashedPassword });
    await user.save();
    res.status(201).send('Usuario registrado');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//login
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (user && await user.comparePassword(req.body.password)) {
      req.session.user = user;
      res.status(200).send('Sesión iniciada');
    } else {
      res.status(401).send('Credenciales incorrectas');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});
// Logout
router.post('/logout', (req, res) => {
    req.session.destroy();
    res.status(200).send('Sesión cerrada');
  });
// ruta x
// router.get('/protected', (req, res) => {
//   if (req.session.user) {
//     res.send('Contenido protegido');
//   } else {
//     res.status(401).send('No autorizado');
//   }
// });

module.exports = router;
const express = require('express');
const Post = require('../models/Post');
const router = express.Router();

// Crear publicación
router.post('/', async (req, res) => {
  try {
    const post = new Post({ author: req.session.user.username, content: req.body.content });
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Obtener todas las publicaciones
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Eliminar publicación
router.delete('/:id', async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(200).send('Publicación eliminada');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
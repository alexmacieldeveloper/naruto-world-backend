import express from 'express';
import { Character } from '../models/Character';

const router = express.Router();

// GET /characters – listar todos
router.get('/', async (req, res) => {
  try {
    const characters = await Character.find();
    res.json(characters);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar personagens' });
  }
});

// POST /characters
router.post('/', async (req, res) => {
  try {
    const character = new Character(req.body);
    const saved = await character.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: 'Erro ao criar personagem' });
  }
});

export default router;

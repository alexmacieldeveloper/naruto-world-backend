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

export default router;

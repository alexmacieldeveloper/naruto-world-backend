import express, { Request, Response } from 'express';
import { Character } from '../models/Character';

const router = express.Router();

// GET /characters – listar todos
router.get('/', async (req: Request, res: Response) => {
  try {
    const characters = await Character.find();
    res.json(characters);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar personagens' });
  }
});

// POST /characters
router.post('/', async (req: Request, res: Response) => {
  try {
    const character = new Character(req.body);
    const saved = await character.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: 'Erro ao criar personagem' });
  }
});

// GET /characters/:id – buscar personagem por ID
router.get('/:id', async (req: Request<{ id: string }>, res: Response) => {
  try {
    const character = await Character.findById(req.params.id);

    if (!character) {
      return res.status(404).json({ message: 'Personagem não encontrado' });
    }

    res.json(character);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar personagem por ID' });
  }
});

export default router;

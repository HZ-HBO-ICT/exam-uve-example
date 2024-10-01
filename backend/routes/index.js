import express from 'express';
import { getAllPets, updatePet, getPet } from '../controllers/petsController.js';
import { checkName } from '../middleware/exampleMiddleware.js';
const router = express.Router();

// routes
router.get('/', (req, res, next) => {
  res.json('hi');
});
router.get('/pets', checkName, getAllPets);
router.get('/pets/:id', checkName, getPet);

export default router;

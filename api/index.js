import express from 'express';
import flashcards from '../src/itemType_flashcards';

const router = express.Router();

router.get('/fc', (req, res) => {
  res.send({ flashcards: flashcards });
});

export default router;

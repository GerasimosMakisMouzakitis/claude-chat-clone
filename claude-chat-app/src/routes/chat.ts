import { Router, Request, Response } from 'express';
import { sendMessage } from '../services/anthropic';

const router = Router();

router.post('/', async (req: Request, res: Response) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const response = await sendMessage(message);
    res.json({ response });
  } catch (error: any) {
    console.error('Chat error:', error);
    res.status(500).json({ error: error.message || 'Failed to get response' });
  }
});

export default router;
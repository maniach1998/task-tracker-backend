import { Router, type Request, type Response } from 'express';

import { getAllTasks } from '../data/tasks';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  const tasks = await getAllTasks();

  res.json({ success: true, tasks });
});

router.post('/', async (req: Request, res: Response) => {
  res.json({ success: true, message: 'Task created' });
});

router.put('/:id', async (req: Request, res: Response) => {
  console.log(req.params.id);
  res.json({ success: true, message: 'Task updated' });
});

router.delete('/:id', async (req: Request, res: Response) => {
  console.log(req.params.id);
  res.json({ success: true, message: 'Task deleted' });
});

export default router;

import { Router, type Request, type Response } from 'express';

import { createTask, deleteTask, editTask, getAllTasks } from '../data/tasks';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  const tasks = await getAllTasks();

  res.json({ success: true, tasks });
});

router.post('/', async (req: Request, res: Response) => {
  const { title, color } = req.body;

  try {
    const task = await createTask(title, color);

    res.json({ success: true, message: 'Task created', task });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
});

router.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, color, completed } = req.body;

  try {
    console.log('edit task', id, title, color, completed);
    const task = await editTask(id, title, color, completed);

    res.json({ success: true, message: 'Task updated', task });
  } catch (error: any) {
    console.log('error:', error);
    res.status(404).json({ success: false, message: error.message });
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    await deleteTask(req.params.id);

    res.json({ success: true, message: 'Task deleted' });
  } catch (error: any) {
    res.status(404).json({ success: false, message: error.message });
  }
});

export default router;

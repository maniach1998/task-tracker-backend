import type { Express, Request, Response } from 'express';

import taskRoutes from './tasks';

export default function (app: Express) {
  app.use('/tasks', taskRoutes);

  app.use('*', async (req: Request, res: Response) => {
    res.status(404).json({ success: false, message: 'Not found' });
  });
}

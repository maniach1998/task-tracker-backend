import express, {
  type NextFunction,
  type Express,
  type Request,
  type Response,
} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import configureRoutes from './routes';

dotenv.config({ path: '../.env' });

const app: Express = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// logging middleware
app.use('*', (req: Request, res: Response, next: NextFunction) => {
  console.log(
    `[server]: ${req.method} ${req.originalUrl} (${new Date().toISOString()})`
  );
  next();
});

// setup routes
configureRoutes(app);

app.listen(port, () => {
  console.log(`[server]: Server is running on port http://localhost:${port}`);
});

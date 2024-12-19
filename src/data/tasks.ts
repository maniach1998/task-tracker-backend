import { PrismaClient } from '@prisma/client';
import { createTaskSchema } from '../schema';

const prisma = new PrismaClient();

export const getAllTasks = async () => {
  const tasks = await prisma.task.findMany({ orderBy: { createdAt: 'desc' } });

  return tasks;
};

export const createTask = async (title: string, color: string) => {
  const parsedData = createTaskSchema.parse({ title, color });

  const task = await prisma.task.create({
    data: {
      title: parsedData.title,
      color: parsedData.color,
    },
  });

  return task;
};

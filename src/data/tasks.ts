import { PrismaClient } from '@prisma/client';
import { createTaskSchema, editTaskSchema, taskIdSchema } from '../schema';

const prisma = new PrismaClient();

export const getAllTasks = async () => {
  const tasks = await prisma.task.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return tasks;
};

export const createTask = async (title: string, color: string) => {
  const parsedData = createTaskSchema.parse({ title, color });

  const task = await prisma.task.create({
    data: {
      title: parsedData.title,
      color: parsedData.color.split('#')[1],
    },
  });

  return task;
};

export const editTask = async (
  id: string,
  title: string,
  color: string,
  completed: boolean
) => {
  const parsedId = taskIdSchema.parse({ id });
  const parsedData = editTaskSchema.parse({ title, color, completed });

  console.log('id:', parsedId);
  console.log('data:', parsedData);

  const task = await prisma.task.update({
    where: { id: parsedId.id },
    data: {
      title: parsedData.title,
      color: parsedData.color.split('#')[1],
      completed: parsedData.completed,
    },
  });

  if (!task) {
    throw new Error('Task not found');
  }

  return task;
};

export const deleteTask = async (id: string) => {
  const parsedId = taskIdSchema.parse({ id });

  await prisma.task.delete({ where: { id: parsedId.id } });
};

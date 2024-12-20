import { z } from 'zod';

export const createTaskSchema = z.object({
  title: z
    .string()
    .transform((title) => title.trim())
    .refine((title) => title.length > 3, {
      message: 'Title should be at least 3 characters long',
    }),
  color: z
    .string()
    .transform((color) => color.trim())
    .refine((color) => /^#[a-fA-F0-9]{6}$/.test(color), {
      message: 'Color should be a valid hex color code',
    }),
});

export const editTaskSchema = z.object({
  title: createTaskSchema.shape.title,
  color: createTaskSchema.shape.color,
  completed: z.boolean(),
});

export const taskIdSchema = z.object({
  id: z
    .string()
    .transform((id) => id.trim())
    .refine((id) => id.length > 0, {
      message: 'Task ID is required',
    }),
});

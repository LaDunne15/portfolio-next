import { z } from 'zod';

export const sendMailSchema = z.object({
  name: z.string().min(1, 'Required'),
  email: z.string().min(1, 'Required'),
  message: z.string().min(1, 'Required'),
});

export type SendMail = z.infer<typeof sendMailSchema>;

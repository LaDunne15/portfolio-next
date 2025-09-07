import { z } from 'zod';

export const sendMailSchema = (t?: (key: string) => string) =>
  z.object({
    name: z.string().min(1, t?.('Required') ?? 'Required'),
    email: z.email(t?.('Invalid email') ?? 'Invalid email').min(1, t?.('Required') ?? 'Required'),
    message: z.string().min(1, t?.('Required') ?? 'Required'),
  });

export type SendMail = z.infer<ReturnType<typeof sendMailSchema>>;

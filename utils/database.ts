import { createClient } from '@supabase/supabase-js';
import { z } from 'zod';

// const envSchema = z.object({
//   NEXT_PUBLIC_SUPABASE_URL: z.string().min(1),
//   NEXT_PUBLIC_SUPABASE_KEY: z.string().min(1),
// });
// const Env = envSchema.parse(process.env);

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_KEY!
);

export default supabase;

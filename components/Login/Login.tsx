'use client';
import styles from './login.module.scss';
import Input from '@/components/Input/Input';
import ButtonSubmitForm from '@/components/ButtonSubmitForm/ButtonSubmitForm';
import { z } from 'zod';
import supabase from '@/utils/database';

const inputSchema = z.string().email();

const Login = () => {
  const submitForm = (e: any) => {
    e.preventDefault();
    const validation = inputSchema.safeParse(e.target.email.value);
    validation.success && loginToSupabase(validation.data);
  };

  const loginToSupabase = async (email: string) => {
    let { data, error } = await supabase.auth.signInWithOtp({
      email: email,
    });
  };

  return (
    <form onSubmit={submitForm} className={styles['form']}>
      <Input type='email' placeholder='Your email' id='email' />
      <ButtonSubmitForm />
      <span className={styles['text-info']}>You will receive a magic link</span>
    </form>
  );
};

export default Login;

'use client';
import styles from './login.module.scss';
import Input from '@/components/Input/Input';
import ButtonSubmitForm from '@/components/ButtonSubmitForm/ButtonSubmitForm';
import { z } from 'zod';

const inputSchema = z.string().email();

const Login = () => {
  const submitForm = (e: any) => {
    e.preventDefault();
    const validation = inputSchema.safeParse(e.target.email.value);
    validation.success && console.log(validation.data);
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

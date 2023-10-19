'use client';
import Input from '@/components/Input/Input';
import styles from './page.module.scss';
import ButtonSubmitForm from '@/components/ButtonSubmitForm/ButtonSubmitForm';

export default function Home() {
  const submitForm = (e: any) => {
    e.preventDefault();
    console.log(e.target.email.value);
  };
  return (
    <main className={styles['container']}>
      <h1>Welcome to Grid color</h1>

      <form onSubmit={submitForm} className={styles['form']}>
        <Input type='email' placeholder='Your email' id='email' />
        <ButtonSubmitForm />
        <span className={styles['text-info']}>
          You will receive a magic link
        </span>
      </form>
    </main>
  );
}

'use client';
import Input from '@/components/Input/Input';
import styles from './page.module.scss';

export default function Home() {
  const oui = (e: any) => {
    e.preventDefault();
    console.log(e.target.email.value);
  };
  return (
    <main className={styles['container']}>
      <h1>Welcome to Grid color</h1>

      <form onSubmit={oui}>
        <Input type='email' placeholder='Your email' id='email' />
        <button type='submit'>go</button>
      </form>
    </main>
  );
}

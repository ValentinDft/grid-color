import Login from '@/components/Login/Login';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles['container']}>
      <h1>Welcome to Grid color</h1>

      <Login />
    </main>
  );
}

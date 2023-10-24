'use client';
import supabase from '@/utils/database';
import { useRouter } from 'next/navigation';

const Logout = () => {
  const { push } = useRouter();

  const logoutSupabase = async () => {
    await supabase.auth.signOut().then(() => {
      push('/');
    });
  };

  return <button onClick={logoutSupabase}>Logout</button>;
};

export default Logout;

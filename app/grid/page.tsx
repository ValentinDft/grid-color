'use client';
import { useUserStore } from '@/utils/store';

const Grid = () => {
  const { email } = useUserStore();
  console.log(email);

  return (
    <div>
      <h1>Je suis la page grid</h1>
    </div>
  );
};

export default Grid;

'use client';

import { useUserStore } from '@/utils/store';

const HeaderGrid = () => {
  const { email } = useUserStore();
  return (
    <div>
      <h3>You are connect as {email}</h3>
    </div>
  );
};

export default HeaderGrid;

'use client';

import { useGridStore } from '@/utils/store';
import { useEffect } from 'react';

const Waiting = () => {
  const { waiting, setWaiting } = useGridStore();

  useEffect(() => {
    waiting &&
      setTimeout(() => {
        setWaiting(false);
      }, 3000);
  }, [waiting, setWaiting]);

  return (
    <div>
      {waiting ? (
        <span>Please wait 3 seconds</span>
      ) : (
        <span>Please select square</span>
      )}
    </div>
  );
};

export default Waiting;

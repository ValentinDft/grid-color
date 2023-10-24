'use client';
import { useState } from 'react';
import styles from './grid-color.module.scss';
import { useGridStore } from '@/utils/store';

const GridColor = () => {
  const { selectedColor } = useGridStore();
  const [color, setColor] = useState<string>('white');
  const changeColor = (color: string) => {
    setColor(color);
  };
  return (
    <div className={styles['grid-container']}>
      <div className={styles['grid-collumn']}>
        <div
          style={{ width: 20, height: 20, background: 'red' }}
          className={styles['square']}
        ></div>
        <div
          style={{ width: 20, height: 20, background: 'orange' }}
          className={styles['square']}
        ></div>
        <div
          style={{ width: 20, height: 20, background: color }}
          className={styles['square']}
          onClick={() => changeColor(selectedColor!)}
        ></div>
        <div
          style={{ width: 20, height: 20, background: 'yellow' }}
          className={styles['square']}
        ></div>
        <div
          style={{ width: 20, height: 20, background: 'brown' }}
          className={styles['square']}
        ></div>
        <div
          style={{ width: 20, height: 20, background: 'black' }}
          className={styles['square']}
        ></div>
      </div>
    </div>
  );
};

export default GridColor;

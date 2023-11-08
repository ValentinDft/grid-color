'use client';
import { useGridStore, useUserStore } from '@/utils/store';
import styles from './header-grid.module.scss';

export type colorType = 'orange' | 'black' | 'white' | 'red' | 'blue' | 'green';

const HeaderGrid = () => {
  const { email } = useUserStore();
  const { setColor, selectedColor } = useGridStore();
  const dataColor: Array<colorType> = [
    'orange',
    'black',
    'white',
    'red',
    'blue',
    'green',
  ];

  return (
    <div className={styles['header-container']}>
      <h3>Welcome</h3>

      <p>Choose your color !</p>
      <div className={styles['list-color']}>
        {dataColor.map((color: colorType) => (
          <div
            key={color}
            style={{
              background: color,
            }}
            className={
              selectedColor === color
                ? styles['bullet-color-active']
                : styles['bullet-color']
            }
            onClick={() => setColor(color)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeaderGrid;

'use client';
import { useState } from 'react';
import styles from './grid-color.module.scss';
import { useGridStore } from '@/utils/store';
import { colorType } from './HeaderGrid/HeaderGrid';

type squareType = {
  color: colorType;
  id: number;
};

const GridColor = () => {
  const { selectedColor } = useGridStore();
  const [squareColor, setSquareColor] = useState<colorType>();
  const [id, setId] = useState<number>();

  const changeColor = (color: colorType, id: number) => {
    setSquareColor(color);
    setId(id);
  };

  const dataSquareColor: Array<squareType> = [
    { color: 'red', id: 1 },
    { color: 'orange', id: 2 },
    { color: 'blue', id: 3 },
    { color: 'green', id: 4 },
    { color: 'black', id: 5 },
    { color: 'white', id: 6 },
  ];
  return (
    <div className={styles['grid-container']}>
      <div className={styles['grid-collumn']}>
        {dataSquareColor.map((square: squareType) => {
          if (squareColor && id === square.id) {
            return (
              <div
                key={square.id}
                style={{
                  width: 20,
                  height: 20,
                  background: squareColor,
                }}
                className={styles['square']}
                onClick={() => changeColor(selectedColor, square.id)}
              ></div>
            );
          } else {
            return (
              <div
                key={square.id}
                style={{
                  width: 20,
                  height: 20,
                  background: square.color,
                }}
                className={styles['square']}
                onClick={() => changeColor(selectedColor, square.id)}
              ></div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default GridColor;

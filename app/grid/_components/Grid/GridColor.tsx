'use client';
import { useEffect, useState } from 'react';
import styles from './grid-color.module.scss';
import { useGridStore } from '@/utils/store';
import { colorType } from './HeaderGrid/HeaderGrid';
import { checkGrid, setSomeData, updateGrid } from '@/utils/getGrid';
import supabase from '@/utils/database';

type squareType = {
  color: colorType;
  id: number;
};

const GridColor = () => {
  const { selectedColor, setWaiting, waiting } = useGridStore();
  const [dataSquareColor, setDataSquareColor] = useState<squareType[]>([]);

  const changeColor = (color: colorType, id: number) => {
    !waiting && updateGrid(id, color);
    setWaiting(true);
  };

  supabase
    .channel('grid-update-channel')
    .on(
      'postgres_changes',
      { event: 'UPDATE', schema: 'public', table: 'grid' },
      (payload) => {
        setDataSquareColor(
          dataSquareColor.map((item) => {
            if (item.id === payload.new.id_grid) {
              return {
                ...item,
                color: payload.new.color,
              };
            }
            return item;
          })
        );
      }
    )
    .subscribe();

  useEffect(() => {
    checkGrid().then((res) => {
      res?.map((square) => {
        setDataSquareColor((prev) => [
          ...prev,
          { color: square.color, id: square.id_grid },
        ]);
      });
    });
  }, []);

  return (
    <div className={styles['grid-container']}>
      <div className={styles['grid-collumn']}>
        {dataSquareColor.map((square: squareType) => {
          return (
            <div
              key={square.id}
              style={{
                width: 20,
                height: 20,
                background: square.color,
                cursor: waiting ? 'not-allowed' : 'pointer',
              }}
              className={styles['square']}
              onClick={() => changeColor(selectedColor, square.id)}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default GridColor;

import { colorType } from '@/app/grid/_components/Grid/HeaderGrid/HeaderGrid';
import { create } from 'zustand';

type userStoreType = {
  email: string | null;
  id: string | null;
  setUser: (email: string, id: string) => void;
};

export const useUserStore = create<userStoreType>((set) => ({
  email: null,
  id: null,
  setUser: (email, id) => {
    set({ email, id });
  },
}));

type gridStoreType = {
  selectedColor: colorType;
  waiting: boolean;
  setColor: (color: colorType) => void;
  setWaiting: (value: boolean) => void;
};

export const useGridStore = create<gridStoreType>((set) => ({
  selectedColor: 'orange',
  waiting: false,
  setColor: (color) => {
    set({ selectedColor: color });
  },
  setWaiting(value) {
    set({ waiting: value });
  },
}));

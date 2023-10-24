import { colorType } from '@/components/Grid/HeaderGrid/HeaderGrid';
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
  setColor: (color: colorType) => void;
};

export const useGridStore = create<gridStoreType>((set) => ({
  selectedColor: 'orange',
  setColor: (color) => {
    set({ selectedColor: color });
  },
}));

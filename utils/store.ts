import { create } from 'zustand';

type userStoreType = {
  email: string;
  id: string;
  setUser: (email: string, id: string) => void;
};

export const useUserStore = create<userStoreType>((set) => ({
  email: '',
  id: '',
  setUser: (email, id) => {
    set({ email, id });
  },
}));

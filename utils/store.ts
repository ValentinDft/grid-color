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

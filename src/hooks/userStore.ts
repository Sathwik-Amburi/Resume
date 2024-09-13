// userStore.ts
import create from 'zustand';

interface User {
  id: string;
  name: string;
  age: number;
  avatar: string;
}

interface UserState {
  user: User | null;
  setUser: (user: User) => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));

import { create } from "zustand";

const useSystemStore = create((set) => ({
  // 导航栏选中
  activeKey: "home",
  user: {},
  token: window.localStorage.getItem('qdazi_token') ?? '',
  setToken: (token) => {
    window.localStorage.setItem('qdazi_token', token)
    set({ token })
  },
  setUser: (user) => set({ user }),
  removeToken: () => {
    window.localStorage.removeItem('qdazi_token')
    set({ token: '' });
  },
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),

}));

export { useSystemStore };

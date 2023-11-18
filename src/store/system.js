import { create } from 'zustand'


const useSystemStore = create((set) => ({
    // 导航栏选中
    activeKey: 'home',
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));


export {
    useSystemStore
}



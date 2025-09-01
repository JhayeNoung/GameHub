import { create } from 'zustand'

type State = {
    counter: number
    max: number
}

type Actions = {
    increment: () => void
    reset: () => void
    maxout: () => void
}

const useCounterStore = create<State & Actions>((set) => ({
    counter: 0,
    max: 5,
    increment: () => set((state) => ({ counter: state.counter + 1 })),
    reset: () => set(() => ({ counter: 0 })),
    maxout: () => set(() => ({ max: 100 })),
}))

export default useCounterStore;
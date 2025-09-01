import { create } from 'zustand'

type State = {
    user: string
}

type Actions = {
    login: () => void,
    logout: () => void
}

const useAuthStore = create<State & Actions>((set) => ({
    user: '',
    login: () => set({ user: 'james@gmail.com' }),
    logout: () => set({ user: '' })
}))

export default useAuthStore;
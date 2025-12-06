import cookiesStorage from 'utils/cookie-storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface IAuthStore {
  access_token: string | null
  signIn: (access: string) => void
  hydrated: boolean
  signOut: () => void
}
const isBrowser = typeof window !== 'undefined'
export const useAuth = create(
  persist<IAuthStore>(
    (set) => ({
      access_token: null,
      hydrated: false,
      signIn: (access) => set({ access_token: access }),
      signOut: () => set({ access_token: null }),
    }),
    {
      name: 'auth',
      storage: isBrowser ? createJSONStorage(() => cookiesStorage) : undefined,
      onRehydrateStorage: () => (state) => {
        useAuth.setState({ hydrated: true })
      },
    },
  ),
)

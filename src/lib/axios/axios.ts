import axios from 'axios'
import { ApiUrl } from '@/constant'
import { useAuth } from '@/context/use-auth'

export const Api = axios.create({
  baseURL: ApiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
})

Api.interceptors.request.use((config) => {
  const token = useAuth.getState().access_token

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

Api.interceptors.response.use(
  (response) => response,
  (error) => {
    const { access_token, hydrated, signOut } = useAuth.getState()

    // hanya logout jika token sudah ter-load
    if (hydrated && error.response?.status === 401 && access_token) {
      signOut()
    }
    return Promise.reject(error)
  },
)

import type { TAuthSchema } from '@/lib/validations/auth.schema'
import { api } from '@/lib/api'

export const authService = {
  register: async (data: TAuthSchema) => {
    const response = await api.post('/sign_up', data)
    return response.data
  },
  login: async (data: TAuthSchema) => {
    const response = await api.post('/sign_in', data)
    return response.data
  },
}

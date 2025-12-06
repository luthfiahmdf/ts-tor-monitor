import { useMutation } from '@tanstack/react-query'

import { authService } from 'services/auth.services'
import type { TAuthSchema } from '@/lib/validations/auth.schema'

export const useRegister = () => {
  return useMutation({
    mutationKey: ['register'],
    mutationFn: async (payload: TAuthSchema) => authService.register(payload),
  })
}
export const useLogin = () => {
  return useMutation({
    mutationKey: ['login'],
    mutationFn: async (payload: TAuthSchema) => {
      const res = await authService.login(payload)
      return res.data
    },
  })
}

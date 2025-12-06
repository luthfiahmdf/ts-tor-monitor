// src/lib/auth.ts
import { redirect } from '@tanstack/react-router'
import Cookies from 'js-cookie'

export function requireAuth() {
  const token = Cookies.get('access_token')
  if (!token) {
    throw redirect({ to: '/login' })
  }
  return token
}

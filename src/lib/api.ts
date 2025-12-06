// src/lib/api.ts
import axios from 'axios'
import Cookies from 'js-cookie'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true, // penting kalau API pakai cookie
})

// Interceptor request: attach auth cookie token
api.interceptors.request.use((config) => {
  const token = Cookies.get('access_token') // ambil token dari cookie
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

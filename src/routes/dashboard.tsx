import { createFileRoute } from '@tanstack/react-router'
import { requireAuth } from '@/lib/auth'

export const Route = createFileRoute('/dashboard')({
  component: RouteComponent,
  loader: () => {
    const token = requireAuth()
    console.log(token)
    return { token }
  },
})

function RouteComponent() {
  return <div>Hello "/dashboard"!</div>
}

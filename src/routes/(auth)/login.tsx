import { Link, createFileRoute, useRouter } from '@tanstack/react-router'
import Cookies from 'js-cookie'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useLogin } from 'hooks/hooks'
import type { TAuthSchema } from '@/lib/validations/auth.schema'
import { authSchema } from '@/lib/validations/auth.schema'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { Form } from '@/components/ui/form'
import { AuthForm } from '@/components/ui/shared/auth-form'
import { AuthHeader } from '@/components/ui/shared/auth-header'

export const Route = createFileRoute('/(auth)/login')({ component: LoginPage })

function LoginPage() {
  const signInUserForm = useForm<TAuthSchema>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })
  const router = useRouter()
  const { mutateAsync } = useLogin()

  const handleSubmit = async (values: TAuthSchema) => {
    try {
      console.log('Submitting login form with values:', values)
      const response = await mutateAsync(values)
      const token = response.access_token
      console.log('Received token:', token)
      Cookies.set('access_token', token, { expires: 1 })
    } catch (err) {
      throw new Error('Terjadi kesalahan saat login. Silakan coba lagi.')
    } finally {
      router.navigate({ to: '/dashboard' })
    }
  }

  return (
    <>
      <AuthHeader />
      <main className="flex min-h-screen gap-3 flex-col items-center justify-center bg-background ">
        <Card className="bg-[#FFFAF0] max-w-screen ">
          <CardHeader>
            <CardTitle>
              <h1 className="text-2xl font-normal ">Masuk</h1>{' '}
              <p className="text-sm text-muted-foreground font-medium">
                Masukkan kredensial Anda
              </p>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...signInUserForm}>
              <AuthForm onSubmit={handleSubmit} />
            </Form>
          </CardContent>
          <CardFooter className="flex flex-col gap-2">
            <Button
              type="submit"
              form="authform"
              className="w-full"
              disabled={signInUserForm.formState.isSubmitting}
            >
              {signInUserForm.formState.isSubmitting
                ? 'Logging in...'
                : 'Login'}
            </Button>

            <div className="text-center mt-6">
              <p>
                Belum punya akun?{' '}
                <Link
                  to="/register"
                  className="text-[#118AB2] font-bold hover:underline"
                >
                  Daftar sekarang
                </Link>
              </p>
            </div>
          </CardFooter>
        </Card>
      </main>
    </>
  )
}

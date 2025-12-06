import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { Eye, EyeOff } from 'lucide-react'
import { Button } from '../button'
import type { TAuthSchema } from '@/lib/validations/auth.schema'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

interface AuthFormProps {
  onSubmit: (data: TAuthSchema) => void
  isLoading?: boolean
}

export const AuthForm = ({ onSubmit, isLoading }: AuthFormProps) => {
  const [showPassword, setShowPassword] = useState(false)

  const form = useFormContext<TAuthSchema>()
  return (
    <>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 w-full "
        id="authform"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Username</FormLabel>
              <FormControl>
                <Input
                  placeholder="Masukkan username Anda"
                  disabled={isLoading}
                  className={`w-full p-3 border-4 border-black focus:outline-none focus:ring-2 focus:ring-[#118AB2] h-fit  ${
                    form.formState.errors.email ? 'border-red-500' : ''
                  }`}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Password */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Masukkan password Anda"
                    disabled={isLoading}
                    className={`w-full p-3 border-4 border-black focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 h-fit  ${
                      form.formState.errors.password ? 'border-red-500' : ''
                    }`}
                    {...field}
                  />
                  <Button
                    type="button"
                    size="icon"
                    variant="noShadow"
                    className="absolute right-2 top-2/4 -translate-y-1/2 bg-background"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={isLoading}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* <Button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 border-4 text-black border-black font-bold text-lg h-16 rounded-none disabled:opacity-70 disabled:cursor-not-allowed bg-background"
        >
          {type === "register" ? "Daftar" : "Masuk"}
        </Button>

        <div className="text-center mt-6">
          <p>
            Belum punya akun?{" "}
            <Link
              href="/register"
              className="text-[#118AB2] font-bold hover:underline"
            >
              Daftar sekarang
            </Link>
          </p>
        </div> */}
      </form>
    </>
  )
}

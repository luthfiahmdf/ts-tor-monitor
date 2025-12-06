import { Link } from '@tanstack/react-router'
import type { ReactElement } from 'react'

export const Navbar = (): ReactElement => {
  return (
    <header className="border-b-4 border-black bg-background p-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-black">
            Tactical Opname Restock Monitor
          </h1>
        </div>

        <div className="hidden md:flex gap-4">
          <Link
            to="/login"
            className="px-4 py-2 font-bold border-2 border-black hover:bg-black hover:text-white transition-colors"
          >
            Masuk
          </Link>
        </div>
      </div>
    </header>
  )
}

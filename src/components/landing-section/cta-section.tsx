'use client'
import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { SlideUpVariant, SpringPopVariant } from 'utils/animate'
import { Button } from '../ui/button'
import type { ReactElement } from 'react'
// Import Reusable Variants

export const CtaSection = (): ReactElement => {
  const {
    initial: slideUpInitial,
    animate: slideUpAnimate,
    transition: slideUpBaseTransition,
  } = SlideUpVariant

  const {
    initial: springPopInitial,
    animate: springPopAnimate,
    transition: springPopBaseTransition,
  } = SpringPopVariant

  return (
    <section className="py-16 md:py-24 bg-background border-b-4 border-black">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={slideUpInitial}
          whileInView={slideUpAnimate}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ ...slideUpBaseTransition, delay: 0.1 }}
          className="text-4xl md:text-5xl font-black mb-6"
        >
          Siap Memiliki Data Akurat & Stok Optimal?
        </motion.h2>

        <motion.p
          initial={slideUpInitial}
          whileInView={slideUpAnimate}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ ...slideUpBaseTransition, delay: 0.3 }}
          className="text-xl mb-8 max-w-2xl mx-auto"
        >
          Tingkatkan akurasi opname dan dapatkan rekomendasi restock cerdas.
          Daftar dan kendalikan inventaris Anda.
        </motion.p>

        <motion.div
          initial={springPopInitial}
          whileInView={springPopAnimate}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ ...springPopBaseTransition, delay: 0.5 }}
        >
          <Button variant="default" size="lg">
            <Link to="/login">Mulai Optimasi Inventaris!</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

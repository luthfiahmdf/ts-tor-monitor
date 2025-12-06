import { ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from '@tanstack/react-router'
import { SlideUpVariant, SpringPopVariant } from 'utils/animate'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import type { ReactElement } from 'react'

export const HeroSection = (): ReactElement => {
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
    <section className="py-16 md:py-24 bg-[#FFFAF0]">
      <div className="gap-12">
        <div className="flex flex-col items-center justify-center space-y-6">
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Badge variant="default" className="w-fit h-8">
              TOR Monitor
            </Badge>
          </motion.div>

          <div className="flex flex-col items-center justify-center text-center">
            <motion.h1
              initial={slideUpInitial}
              animate={slideUpAnimate}
              transition={{ ...slideUpBaseTransition, delay: 0.5 }}
              className="text-5xl md:text-6xl font-black leading-tight"
            >
              Tactical Opname
            </motion.h1>
            <motion.h1
              initial={slideUpInitial}
              animate={slideUpAnimate}
              transition={{ ...slideUpBaseTransition, delay: 0.7 }}
              className="bg-background text-main-foreground px-2 text-5xl md-text-6xl font-black leading-tight"
            >
              Restock Monitor
            </motion.h1>{' '}
          </div>

          <motion.div
            initial={slideUpInitial}
            animate={slideUpAnimate}
            transition={{ ...slideUpBaseTransition, delay: 1.0 }}
            className=""
          >
            <h2 className="text-2xl md:text-2xl font-medium text-center max-w-3xl">
              Sistem cerdas memberi tahu Apa, Berapa, Kapan harus membeli,
              mengeliminasi stock-out dan overstock.
            </h2>
          </motion.div>

          <motion.div
            initial={springPopInitial}
            animate={springPopAnimate}
            transition={{ ...springPopBaseTransition, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Button variant="default" size={'lg'}>
              <Link to="/register">Mulai Bertanya</Link>
            </Button>
            <Button variant="default" size={'lg'}>
              <a
                href="/#how-it-works"
                className="flex flex-row justify-center items-center gap-2"
              >
                Pelajari Lebih Lanjut <ChevronRight className="h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

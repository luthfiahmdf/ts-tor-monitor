import { motion } from 'framer-motion'
import { SlideUpVariant } from 'utils/animate'
import { Card } from '../ui/card'

import { STEPS } from './store'
import type { ReactElement } from 'react'
// Asumsi struktur data STEPS:

export const HowItWorksSection = (): ReactElement => {
  const {
    initial: slideUpInitial,
    animate: slideUpAnimate,
    transition: slideUpBaseTransition,
  } = SlideUpVariant

  return (
    <section
      id="how-it-works"
      className="py-16 md:py-24 bg-[#FFFAF0] border-y-4 border-black"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={slideUpInitial}
            whileInView={slideUpAnimate}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ...slideUpBaseTransition, delay: 0.1 }}
            className="inline-block bg-background text-black px-4 py-2 font-bold border-2 border-black rotate-1 mb-4"
          >
            Langkah Mudah
          </motion.div>

          <motion.h2
            initial={slideUpInitial}
            whileInView={slideUpAnimate}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ...slideUpBaseTransition, delay: 0.3 }}
            className="text-4xl md:text-5xl font-black"
          >
            Bagaimana Cara Kerjanya?
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 relative">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.0, delay: 0.8 }}
            className="hidden md:block absolute top-1/2 left-1/3 right-1/3 h-4 bg-black -z-10 transform -translate-y-1/2 origin-left"
          ></motion.div>

          {STEPS.map((step, index) => (
            <motion.div
              key={step.id}
              initial={slideUpInitial}
              whileInView={slideUpAnimate}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                ...slideUpBaseTransition,
                delay: 0.5 + index * 0.2,
              }}
            >
              <Card className="bg-white p-8 border-4 border-black text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 12,
                    delay: 0.7 + index * 0.2,
                  }}
                  className="bg-background w-16 h-16 flex items-center justify-center text-3xl font-black border-4 border-black rounded-full mx-auto mb-6"
                >
                  {step.id}
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-lg">{step.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

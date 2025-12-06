import { motion } from 'framer-motion'
import { SlideUpVariant } from 'utils/animate'
import { Card } from '../ui/card'

import { FEATURE } from './store'
import type { ReactElement } from 'react'

export const FeatureSection = (): ReactElement => {
  const {
    initial: slideUpInitial,
    animate: slideUpAnimate,
    transition: slideUpBaseTransition,
  } = SlideUpVariant

  return (
    <section
      id="features"
      className="bg-background border-black py-16 md:py-24 px-4 md:px-24 border-t-4"
    >
      <div className="text-center mx-auto px-4 mb-16">
        <motion.div
          initial={slideUpInitial}
          whileInView={slideUpAnimate}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ ...slideUpBaseTransition, delay: 0.1 }}
          className="inline-block bg-white px-4 py-2 font-bold border-2 border-black -rotate-1 mb-4"
        >
          Fitur Unggulan
        </motion.div>

        <motion.h2
          initial={slideUpInitial}
          whileInView={slideUpAnimate}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ ...slideUpBaseTransition, delay: 0.3 }}
          className="text-4xl md:text-5xl font-black"
        >
          Kenapa Pilih TOR Monitor?
        </motion.h2>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {FEATURE.map((item, index) => (
          <motion.div
            key={index}
            initial={slideUpInitial}
            whileInView={slideUpAnimate}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ ...slideUpBaseTransition, delay: 0.5 + index * 0.15 }}
          >
            <Card className="bg-white p-8 border-4 border-black transform transition-transform shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  type: 'spring',
                  stiffness: 200,
                  damping: 12,
                  delay: 0.7 + index * 0.15,
                }}
                className="bg-white inline-block p-3 border-4 border-black mb-4 h-fit w-fit"
              >
                {item.icon}
              </motion.div>

              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-lg">{item.desc} </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

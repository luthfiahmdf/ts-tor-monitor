export const itemSlideUpTransition = {
  duration: 0.6,
  ease: [0.6, -0.05, 0.01, 0.99] as const,
}

export const ctaSpringTransition = {
  type: 'spring' as const,
  stiffness: 100,
  damping: 10,
}

export const SlideUpVariant = {
  initial: { y: 30, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: itemSlideUpTransition,
}

export const SpringPopVariant = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: ctaSpringTransition,
}

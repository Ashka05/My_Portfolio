import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ChickLoader from './ChickLoader'

const STAGES = [
  { progress: 15, label: 'Waking up…' },
  { progress: 35, label: 'Fluffing feathers…' },
  { progress: 58, label: 'Almost ready…' },
  { progress: 80, label: 'One last hop…' },
  { progress: 100, label: 'Here we go!' },
]

export default function LoaderScreen({ onComplete }) {
  const [stageIndex, setStageIndex] = useState(0)

  useEffect(() => {
    if (stageIndex >= STAGES.length - 1) {
      // stay at 100% briefly then call onComplete
      const t = setTimeout(onComplete, 700)
      return () => clearTimeout(t)
    }
    const t = setTimeout(
      () => setStageIndex(i => i + 1),
      stageIndex === 0 ? 400 : 550
    )
    return () => clearTimeout(t)
  }, [stageIndex, onComplete])

  const { progress, label } = STAGES[stageIndex]

  return (
    <motion.div
      key="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--bg-base)',
        zIndex: 9999,
        gap: 24,
      }}
    >
      {/* Site name / tagline */}
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: 'clamp(1.6rem, 4vw, 2.6rem)',
          color: 'var(--text-primary)',
          marginBottom: 8,
        }}
      >
        Portfolio
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.25 }}
      >
        <ChickLoader progress={progress} label={label} width={300} />
      </motion.div>
    </motion.div>
  )
}

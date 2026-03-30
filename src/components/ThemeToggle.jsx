import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <motion.button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.93 }}
      style={{
        position: 'relative',
        width: 52,
        height: 28,
        borderRadius: 14,
        border: '1.5px solid var(--border-strong)',
        background: isDark ? 'var(--accent-soft)' : 'var(--accent-soft)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        padding: '0 3px',
        overflow: 'hidden',
        flexShrink: 0,
      }}
    >
      {/* track fill */}
      <motion.div
        animate={{ scaleX: isDark ? 1 : 0 }}
        initial={false}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'var(--accent)',
          opacity: 0.18,
          transformOrigin: 'left',
          borderRadius: 14,
        }}
      />

      {/* thumb */}
      <motion.div
        animate={{ x: isDark ? 24 : 0 }}
        initial={false}
        transition={{ type: 'spring', stiffness: 400, damping: 28 }}
        style={{
          width: 22,
          height: 22,
          borderRadius: '50%',
          background: 'var(--accent)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
          flexShrink: 0,
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.span
              key="moon"
              initial={{ rotate: -30, opacity: 0, scale: 0.6 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 30, opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.2 }}
              style={{ fontSize: 12, lineHeight: 1 }}
            >
              🌙
            </motion.span>
          ) : (
            <motion.span
              key="sun"
              initial={{ rotate: 30, opacity: 0, scale: 0.6 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: -30, opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.2 }}
              style={{ fontSize: 12, lineHeight: 1 }}
            >
              ☀️
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.button>
  )
}

import { motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 clamp(1.5rem, 5vw, 3.5rem)',
        height: 64,
        background: 'var(--bg-glass)',
        backdropFilter: 'blur(20px) saturate(1.5)',
        WebkitBackdropFilter: 'blur(20px) saturate(1.5)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      {/* Logo */}
      <a
        href="#"
        style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: '1.25rem',
          color: 'var(--accent)',
          textDecoration: 'none',
          letterSpacing: '-0.01em',
        }}
      >
        ✦ Portfolio
      </a>

      {/* Links */}
      <ul
        style={{
          display: 'flex',
          gap: 'clamp(1rem, 3vw, 2.2rem)',
          listStyle: 'none',
          alignItems: 'center',
        }}
      >
        {NAV_LINKS.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.9rem',
                fontWeight: 400,
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                letterSpacing: '0.02em',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.target.style.color = 'var(--accent)')}
              onMouseLeave={e => (e.target.style.color = 'var(--text-secondary)')}
            >
              {label}
            </a>
          </li>
        ))}
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </motion.nav>
  )
}

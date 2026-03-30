import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'

/* ─── Chick SVG ─────────────────────────────────────────────────────────── */
function ChickSVG({ color = 'var(--loader-chick)' }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* body */}
      <ellipse cx="16" cy="20" rx="9" ry="8" fill={color} />
      {/* head */}
      <circle cx="16" cy="11" r="6.5" fill={color} />
      {/* wing left */}
      <ellipse
        cx="9"
        cy="20"
        rx="3.5"
        ry="2.2"
        fill={color}
        style={{ filter: 'brightness(0.85)' }}
        transform="rotate(-20 9 20)"
      />
      {/* wing right */}
      <ellipse
        cx="23"
        cy="20"
        rx="3.5"
        ry="2.2"
        fill={color}
        style={{ filter: 'brightness(0.85)' }}
        transform="rotate(20 23 20)"
      />
      {/* beak */}
      <polygon points="16,13 13.5,15.5 18.5,15.5" fill="#f5a623" />
      {/* left eye */}
      <circle cx="13.2" cy="9.5" r="1.8" fill="#1a1025" />
      <circle cx="13.7" cy="9.1" r="0.6" fill="white" />
      {/* right eye */}
      <circle cx="18.8" cy="9.5" r="1.8" fill="#1a1025" />
      <circle cx="19.3" cy="9.1" r="0.6" fill="white" />
      {/* feet */}
      <line x1="13" y1="27" x2="11" y2="30" stroke="#f5a623" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="13" y1="27" x2="13" y2="30" stroke="#f5a623" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="13" y1="27" x2="15" y2="30" stroke="#f5a623" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="19" y1="27" x2="17" y2="30" stroke="#f5a623" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="19" y1="27" x2="19" y2="30" stroke="#f5a623" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="19" y1="27" x2="21" y2="30" stroke="#f5a623" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

/* ─── Main loader ───────────────────────────────────────────────────────── */
export default function ChickLoader({
  progress = 0,       // 0–100
  label = 'Loading…',
  width = 320,
}) {
  const progressMV = useMotionValue(0)
  const barWidth = useTransform(progressMV, [0, 100], ['0%', '100%'])

  // chick x: sits right at the leading edge of the fill bar
  // bar inner = width - 32 (side padding) — chick is 32px wide, centred on edge
  const chickX = useTransform(
    progressMV,
    [0, 100],
    [-(32 / 2), width - 32 - 32 / 2]   // clamped to bar width minus chick width
  )

  // hop — bounce vertically, frequency scales with progress speed
  const chickY = useMotionValue(0)
  const hopRef = useRef(null)

  useEffect(() => {
    const controls = animate(progressMV, progress, {
      duration: 0.6,
      ease: 'easeOut',
    })
    return controls.stop
  }, [progress, progressMV])

  // independent hop loop
  useEffect(() => {
    let cancelled = false
    function hop() {
      if (cancelled) return
      animate(chickY, -10, {
        duration: 0.18,
        ease: 'easeOut',
        onComplete: () => {
          animate(chickY, 0, {
            duration: 0.22,
            ease: 'easeIn',
            onComplete: () => {
              hopRef.current = setTimeout(hop, 320)
            },
          })
        },
      })
    }
    hop()
    return () => {
      cancelled = true
      clearTimeout(hopRef.current)
    }
  }, [chickY])

  return (
    <div
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 12,
        userSelect: 'none',
      }}
    >
      {/* track + chick container */}
      <div
        style={{
          position: 'relative',
          width,
          height: 48,
          display: 'flex',
          alignItems: 'flex-end',
        }}
      >
        {/* chick */}
        <motion.div
          style={{
            position: 'absolute',
            bottom: 8,
            left: 0,
            x: chickX,
            y: chickY,
            zIndex: 2,
          }}
        >
          <ChickSVG />
        </motion.div>

        {/* bar track */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: 8,
            borderRadius: 4,
            background: 'var(--loader-track)',
            overflow: 'hidden',
          }}
        >
          {/* fill */}
          <motion.div
            style={{
              height: '100%',
              width: barWidth,
              background: 'var(--loader-bar)',
              borderRadius: 4,
              transformOrigin: 'left',
            }}
          />
        </div>
      </div>

      {/* label */}
      <span
        style={{
          fontSize: 13,
          fontFamily: "'DM Sans', sans-serif",
          color: 'var(--text-muted)',
          letterSpacing: '0.03em',
        }}
      >
        {progress < 100 ? label : 'Done!'}
      </span>
    </div>
  )
}

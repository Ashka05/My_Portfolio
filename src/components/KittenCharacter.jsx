import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useFish } from '../context/FishContext'

const tailCSS = `
@keyframes tailWag     { 0%,100%{transform:rotate(-18deg)} 50%{transform:rotate(18deg)} }
@keyframes tailWagFast { 0%,100%{transform:rotate(-28deg)} 50%{transform:rotate(28deg)} }
`

/* ── SVG Kitten ── */
function KittenSVG({ ex = 0, ey = 0, fast = false, size = 100 }) {
  return (
    <>
      <style>{tailCSS}</style>
      <svg width={size} height={size} viewBox="0 0 120 120" fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow:'visible', display:'block',
          filter:'drop-shadow(0 6px 14px rgba(0,0,0,0.40))' }}>

        {/* TAIL */}
        <g style={{
          transformOrigin:'60px 94px',
          animation: fast ? 'tailWagFast 0.38s ease-in-out infinite'
                          : 'tailWag 0.85s ease-in-out infinite',
        }}>
          <path d="M60 94 Q89 98 95 81 Q101 65 87 59"
            stroke="#C0392B" strokeWidth="7" strokeLinecap="round" fill="none"/>
          <path d="M60 94 Q89 98 95 81 Q101 65 87 59"
            stroke="#F4852A" strokeWidth="4" strokeLinecap="round" fill="none" opacity=".55"/>
          <circle cx="87" cy="59" r="5.5" fill="#F4852A"/>
          <circle cx="87" cy="59" r="3"   fill="#F9C09A"/>
        </g>

        {/* BODY */}
        <ellipse cx="60" cy="82" rx="28" ry="26" fill="#F4852A"/>
        <path d="M40 72 Q60 67 80 72" stroke="#C0392B" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity=".65"/>
        <path d="M37 80 Q60 75 83 80" stroke="#C0392B" strokeWidth="2"   strokeLinecap="round" fill="none" opacity=".5"/>
        <path d="M39 88 Q60 83 81 88" stroke="#C0392B" strokeWidth="2"   strokeLinecap="round" fill="none" opacity=".5"/>
        <ellipse cx="60" cy="86" rx="14" ry="12" fill="#F9C09A" opacity=".65"/>

        {/* PAWS */}
        <ellipse cx="43" cy="108" rx="11" ry="6" fill="#F4852A"/>
        <ellipse cx="77" cy="108" rx="11" ry="6" fill="#F4852A"/>

        {/* HEAD */}
        <circle cx="60" cy="52" r="28" fill="#F4852A"/>
        <path d="M46 32 Q52 26 58 30" stroke="#C0392B" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity=".8"/>
        <path d="M62 30 Q68 26 74 32" stroke="#C0392B" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity=".8"/>
        <path d="M55 28 Q60 22 65 28" stroke="#C0392B" strokeWidth="2"   strokeLinecap="round" fill="none" opacity=".6"/>

        {/* EARS */}
        <polygon points="38,38 27,15 50,28" fill="#F4852A"/>
        <polygon points="38,38 31,19 48,30" fill="#F9AFA0" opacity=".85"/>
        <polygon points="82,38 93,15 70,28" fill="#F4852A"/>
        <polygon points="82,38 89,19 72,30" fill="#F9AFA0" opacity=".85"/>

        {/* EYES */}
        <ellipse cx="47" cy="52" rx="9"  ry="9.5" fill="white"/>
        <ellipse cx="73" cy="52" rx="9"  ry="9.5" fill="white"/>
        <circle  cx={47+ex} cy={52+ey} r="5.5" fill="#1a0a00"/>
        <circle  cx={73+ex} cy={52+ey} r="5.5" fill="#1a0a00"/>
        <circle  cx={49+ex} cy={50+ey} r="1.8" fill="white"/>
        <circle  cx={75+ex} cy={50+ey} r="1.8" fill="white"/>
        <ellipse cx="47" cy="52" rx="9"  ry="9.5" stroke="#C0392B" strokeWidth="1.2" fill="none"/>
        <ellipse cx="73" cy="52" rx="9"  ry="9.5" stroke="#C0392B" strokeWidth="1.2" fill="none"/>

        {/* NOSE + MOUTH */}
        <polygon points="60,60 57,63 63,63" fill="#F9AFA0"/>
        <path d="M57 63 Q54 67 51 65" stroke="#C0392B" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        <path d="M63 63 Q66 67 69 65" stroke="#C0392B" strokeWidth="1.5" strokeLinecap="round" fill="none"/>

        {/* WHISKERS */}
        <line x1="30" y1="60" x2="52" y2="62" stroke="#F9C09A" strokeWidth="1.2" strokeLinecap="round" opacity=".9"/>
        <line x1="28" y1="65" x2="51" y2="64" stroke="#F9C09A" strokeWidth="1.2" strokeLinecap="round" opacity=".9"/>
        <line x1="90" y1="60" x2="68" y2="62" stroke="#F9C09A" strokeWidth="1.2" strokeLinecap="round" opacity=".9"/>
        <line x1="92" y1="65" x2="69" y2="64" stroke="#F9C09A" strokeWidth="1.2" strokeLinecap="round" opacity=".9"/>

        {/* BLUSH */}
        <ellipse cx="38" cy="62" rx="7" ry="4" fill="#F9AFA0" opacity=".45"/>
        <ellipse cx="82" cy="62" rx="7" ry="4" fill="#F9AFA0" opacity=".45"/>
      </svg>
    </>
  )
}

/* ── Revealed kitten — spring pounces inside frame ── */
export function RevealedKitten({ onDismiss }) {
  return (
    <motion.div
      initial={{ scale:0, y:40, rotate:-10 }}
      animate={{ scale:1, y:0,  rotate:0  }}
      exit={{    scale:0, y:20, opacity:0  }}
      transition={{ type:'spring', stiffness:300, damping:16 }}
      onClick={onDismiss}
      style={{
        position:'absolute', inset:0,
        display:'flex', flexDirection:'column',
        alignItems:'center', justifyContent:'center',
        background:'var(--bg-glass)',
        backdropFilter:'blur(8px)', WebkitBackdropFilter:'blur(8px)',
        borderRadius:16, zIndex:10, cursor:'pointer', gap:6,
      }}
    >
      <KittenSVG fast={true} size={86}/>
      <motion.span
        initial={{ opacity:0, y:5 }} animate={{ opacity:1, y:0 }}
        transition={{ delay:0.45 }}
        style={{ fontSize:'0.68rem', fontFamily:"'DM Sans',sans-serif",
          color:'var(--accent)', letterSpacing:'0.06em' }}
      >
        tap to dismiss
      </motion.span>
    </motion.div>
  )
}

/* ── Peeking kitten — head peeks above the active frame's top edge ── */
function PeekingKitten({ frameRefs, activeFrameId, containerRef, fishMode }) {
  const [style, setStyle]     = useState(null)
  const [eye,   setEye]       = useState({ x:0, y:0 })

  /* recompute position using getBoundingClientRect relative to container */
  useEffect(() => {
    const frameEl     = frameRefs?.get?.(activeFrameId)?.current
    const containerEl = containerRef?.current
    if (!frameEl || !containerEl) return

    const calc = () => {
      const fRect = frameEl.getBoundingClientRect()
      const cRect = containerEl.getBoundingClientRect()
      const size  = Math.max(72, fRect.width * 0.72)

      /* centre of frame, relative to container */
      const left = fRect.left - cRect.left + fRect.width / 2
      /* frame top relative to container — offset upward by ~55% of cat size
         so head sits just above the frame top edge */
      const top  = fRect.top  - cRect.top  - size * 0.52

      setStyle({ left, top, size })
    }

    calc()
    const ro = new ResizeObserver(calc)
    ro.observe(frameEl)
    ro.observe(containerEl)
    window.addEventListener('scroll', calc, { passive:true })
    window.addEventListener('resize', calc)
    return () => {
      ro.disconnect()
      window.removeEventListener('scroll', calc)
      window.removeEventListener('resize', calc)
    }
  }, [activeFrameId, frameRefs, containerRef])

  /* eye tracking in fish mode */
  useEffect(() => {
    if (!fishMode) { setEye({ x:0, y:0 }); return }
    const frameEl = frameRefs?.get?.(activeFrameId)?.current
    if (!frameEl) return
    const r  = frameEl.getBoundingClientRect()
    const cx = r.left + r.width  / 2
    const cy = r.top  - r.height * 0.25
    const onMove = (e) => {
      const dx = e.clientX - cx, dy = e.clientY - cy
      const d  = Math.hypot(dx, dy) || 1
      const sc = Math.min(d, 160) / 160
      setEye({ x: Math.round(dx/d*sc*4), y: Math.round(dy/d*sc*3) })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [fishMode, activeFrameId, frameRefs])

  if (!style) return null

  /* clip bottom half so only head+ears show above the frame top */
  const clipBottom = Math.round(style.size * 0.42)

  return (
    <motion.div
      key={activeFrameId}
      initial={{ y: style.size * 0.55, opacity:0 }}
      animate={{ y:[0,-8,0], opacity:1 }}
      exit={{    y: style.size * 0.55, opacity:0 }}
      transition={{
        opacity:{ duration:0.3 },
        y:{ duration:2.3, repeat:Infinity, ease:'easeInOut', delay:0.15 },
      }}
      style={{
        position:'absolute',
        left: style.left,
        top:  style.top,
        transform:'translateX(-50%)',
        zIndex:20,
        pointerEvents:'none',
        clipPath:`inset(0 0 ${clipBottom}px 0)`,
      }}
    >
      <KittenSVG ex={eye.x} ey={eye.y} fast={false} size={style.size}/>
    </motion.div>
  )
}

/* ── Controller — auto-switches frames every 4–7s ── */
export default function KittenController({ frameIds=[], frameRefs, containerRef }) {
  const { fishMode }  = useFish()
  const [activeId, setActiveId] = useState(frameIds[0] || null)
  const timerRef = useRef(null)

  const pickNext = useCallback((cur) => {
    const others = frameIds.filter(id => id !== cur)
    return others.length ? others[Math.floor(Math.random() * others.length)] : cur
  }, [frameIds])

  useEffect(() => {
    if (!frameIds.length) return
    const schedule = () => {
      timerRef.current = setTimeout(() => {
        setActiveId(id => pickNext(id))
        schedule()
      }, 4000 + Math.random() * 3000)
    }
    schedule()
    return () => clearTimeout(timerRef.current)
  }, [frameIds, pickNext])

  if (!activeId) return null

  return (
    <AnimatePresence mode="wait">
      <PeekingKitten
        key={activeId}
        frameRefs={frameRefs}
        activeFrameId={activeId}
        containerRef={containerRef}
        fishMode={fishMode}
      />
    </AnimatePresence>
  )
}

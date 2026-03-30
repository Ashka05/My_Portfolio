import { useRef } from 'react'
import { motion } from 'framer-motion'

export default function WindowFrame({ id, title, subtitle, icon, onClick, frameRef: externalRef, customContent }) {
  const internalRef = useRef(null)
  const ref = externalRef || internalRef

  return (
    <motion.div
      ref={ref}
      onClick={onClick}
      whileHover={{ scale:1.03, y:-3 }}
      whileTap={{ scale:0.96 }}
      transition={{ type:'spring', stiffness:340, damping:24 }}
      style={{
        position:'relative',
        aspectRatio:'1 / 1',
        borderRadius:18,
        border:'2px solid var(--frame-border)',
        background:'var(--frame-inner)',
        backdropFilter:'blur(10px)',
        WebkitBackdropFilter:'blur(10px)',
        cursor:'pointer',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        gap:10,
        overflow:'hidden',
        boxShadow:`inset 0 0 0 1px var(--border), 5px 5px 0px var(--card-platform), 0 4px 20px rgba(0,0,0,0.10)`,
      }}
    >
      {/* corner accents */}
      {[['top','left'],['top','right'],['bottom','left'],['bottom','right']].map(([v,h]) => (
        <div key={`${v}-${h}`} style={{
          position:'absolute', [v]:8, [h]:8,
          width:13, height:13,
          borderTop: v==='top' ? '2px solid var(--accent-dim)' : 'none',
          borderBottom: v==='bottom' ? '2px solid var(--accent-dim)' : 'none',
          borderLeft: h==='left' ? '2px solid var(--accent-dim)' : 'none',
          borderRight: h==='right' ? '2px solid var(--accent-dim)' : 'none',
          opacity:0.55,
        }}/>
      ))}

      {/* content */}
      {customContent ? customContent : (
        <>
          {icon && <span style={{ fontSize:'clamp(1.8rem,4vw,2.4rem)' }}>{icon}</span>}
          {title && (
            <span style={{ fontFamily:"'DM Sans',sans-serif",
              fontSize:'clamp(0.82rem,1.5vw,0.95rem)', fontWeight:500,
              color:'var(--text-primary)', textAlign:'center', padding:'0 10px' }}>
              {title}
            </span>
          )}
          {subtitle && (
            <span style={{ fontFamily:"'DM Sans',sans-serif",
              fontSize:'0.74rem', color:'var(--text-muted)',
              textAlign:'center', padding:'0 10px' }}>
              {subtitle}
            </span>
          )}
        </>
      )}
    </motion.div>
  )
}

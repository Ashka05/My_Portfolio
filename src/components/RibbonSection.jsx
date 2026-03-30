import { useRef } from 'react'
import { motion } from 'framer-motion'
import WindowFrame from './WindowFrame'

export default function RibbonSection({ title, frames, id }) {
  const r0 = useRef(null), r1 = useRef(null), r2 = useRef(null)
  const refs = [r0, r1, r2]

  return (
    <motion.section
      id={id}
      initial={{ opacity:0, y:32 }}
      whileInView={{ opacity:1, y:0 }}
      viewport={{ once:true, margin:'-60px' }}
      transition={{ duration:0.6, ease:[0.22,1,0.36,1] }}
      className="card-3d-ribbon"
      style={{ borderRadius:28, padding:'clamp(1.6rem,3.5vw,2.4rem)', position:'relative' }}
    >
      <div style={{ display:'flex', alignItems:'baseline', gap:12,
        marginBottom:'clamp(1.2rem,2.5vw,1.8rem)' }}>
        <h2 style={{ fontFamily:"'DM Serif Display',serif",
          fontSize:'clamp(1.25rem,2.8vw,1.75rem)',
          color:'var(--text-primary)', lineHeight:1 }}>
          {title}
        </h2>
        <div style={{ flex:1, height:1, background:'var(--border)' }}/>
      </div>

      <div style={{
        display:'grid',
        gridTemplateColumns:'repeat(3,1fr)',
        gap:'clamp(0.9rem,2vw,1.5rem)',
      }}>
        {frames.map((frame, i) => (
          <WindowFrame
            key={frame.id}
            id={frame.id}
            title={frame.title}
            subtitle={frame.subtitle}
            icon={frame.icon}
            onClick={frame.onClick}
            frameRef={refs[i]}
            customContent={frame.customContent}
          />
        ))}
      </div>
    </motion.section>
  )
}

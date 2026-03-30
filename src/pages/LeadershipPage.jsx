import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { achievements } from '../data/profile'

function BackIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6"/>
    </svg>
  )
}

function PhotoSlot({ src, label }) {
  if (src) {
    return (
      <img src={src} alt={label} style={{
        width:'100%', aspectRatio:'4/3', objectFit:'cover',
        borderRadius:14, display:'block',
      }}/>
    )
  }
  return (
    <div style={{
      width:'100%', aspectRatio:'4/3', borderRadius:14,
      background:'var(--accent-soft)',
      border:'2px dashed var(--border-strong)',
      display:'flex', flexDirection:'column',
      alignItems:'center', justifyContent:'center', gap:8,
      color:'var(--text-muted)',
      fontFamily:"'DM Sans',sans-serif", fontSize:'0.78rem',
    }}>
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="3"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <polyline points="21 15 16 10 5 21"/>
      </svg>
      {label}
    </div>
  )
}

export default function LeadershipPage() {
  const navigate = useNavigate()
  const roles = achievements.leadership

  return (
    <motion.div
      initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}
      exit={{ opacity:0, y:-20 }}
      transition={{ duration:0.45, ease:[0.22,1,0.36,1] }}
      style={{
        minHeight:'100vh', background:'var(--bg-base)',
        padding:'clamp(5rem,10vw,7rem) clamp(1.2rem,5vw,3rem) clamp(2rem,4vw,3rem)',
        position:'relative', zIndex:1,
      }}
    >
      <div style={{ maxWidth:900, margin:'0 auto' }}>
        <motion.button onClick={() => navigate('/')} whileHover={{ x:-3 }}
          style={{ display:'flex', alignItems:'center', gap:6,
            background:'none', border:'none', cursor:'pointer',
            color:'var(--accent)', fontFamily:"'DM Sans',sans-serif",
            fontSize:'0.88rem', marginBottom:'2.5rem', padding:0 }}>
          <BackIcon/> Back to portfolio
        </motion.button>

        <h1 style={{ fontFamily:"'DM Serif Display',serif",
          fontSize:'clamp(2rem,5vw,3rem)', color:'var(--text-primary)',
          marginBottom:'0.4rem' }}>Leadership</h1>
        <p style={{ fontFamily:"'DM Sans',sans-serif",
          color:'var(--text-muted)', fontSize:'0.9rem', marginBottom:'3.5rem' }}>
          Roles I've held and communities I've shaped
        </p>

        <div style={{ display:'flex', flexDirection:'column', gap:'2.5rem' }}>
          {roles.map((role, i) => (
            <motion.div key={role.id}
              initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }}
              transition={{ delay:i*0.15, duration:0.5 }}
              className="card-3d"
              style={{ borderRadius:24, padding:'clamp(1.6rem,4vw,2.4rem)' }}
            >
              {/* header */}
              <div style={{ marginBottom:'1.6rem' }}>
                <span style={{ fontSize:'0.72rem', letterSpacing:'0.1em',
                  color:'var(--accent)', fontFamily:"'DM Sans',sans-serif",
                  textTransform:'uppercase', fontWeight:500 }}>{role.period}</span>
                <h2 style={{ fontFamily:"'DM Serif Display',serif",
                  fontSize:'clamp(1.3rem,2.8vw,1.7rem)',
                  color:'var(--text-primary)', marginTop:4, lineHeight:1.2 }}>
                  {role.role}
                </h2>
                <p style={{ fontFamily:"'DM Sans',sans-serif",
                  fontSize:'0.9rem', color:'var(--accent)', marginTop:4 }}>
                  {role.org}
                </p>
              </div>

              {/* layout: photo left, content right */}
              <div style={{
                display:'grid',
                gridTemplateColumns: role.images?.[0] || role.images?.length ? '1fr 1.6fr' : '1fr',
                gap:'clamp(1.2rem,3vw,2rem)',
                alignItems:'start',
              }}>
                {/* photo — only renders if images array has items */}
                {role.images?.length > 0 && (
                  <div>
                    <PhotoSlot
                      src={role.images[0]}
                      label="Add your GDG photo here — see guide below"
                    />
                  </div>
                )}

                {/* highlights + reflection */}
                <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
                  <div style={{ width:36, height:2,
                    background:'var(--accent)', borderRadius:2 }}/>

                  <ul style={{ listStyle:'none', display:'flex',
                    flexDirection:'column', gap:10 }}>
                    {role.highlights.map((h, j) => (
                      <li key={j} style={{ display:'flex', gap:10,
                        alignItems:'flex-start',
                        fontFamily:"'DM Sans',sans-serif",
                        fontSize:'0.9rem', color:'var(--text-secondary)',
                        lineHeight:1.55 }}>
                        <span style={{ color:'var(--accent)', marginTop:2,
                          flexShrink:0 }}>✦</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  {role.reflection && (
                    <blockquote style={{
                      fontFamily:"'DM Serif Display',serif",
                      fontSize:'clamp(0.9rem,1.6vw,1.05rem)',
                      color:'var(--text-primary)',
                      lineHeight:1.7,
                      borderLeft:'3px solid var(--accent)',
                      paddingLeft:16,
                      margin:0,
                      fontStyle:'italic',
                    }}>
                      "{role.reflection}"
                    </blockquote>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

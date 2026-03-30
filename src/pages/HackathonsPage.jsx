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
function DownloadIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  )
}

function PhotoSlot({ src, label }) {
  if (src) {
    return (
      <img src={src} alt={label} style={{
        width:'100%', height:'100%', objectFit:'cover',
        borderRadius:12, display:'block',
      }}/>
    )
  }
  return (
    <div style={{
      width:'100%', height:'100%', borderRadius:12,
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

/* Full card — photo collage + idea + experience + tags */
function FullCard({ h }) {
  return (
    <>
      <div style={{
        display:'grid', gridTemplateColumns:'1fr 1fr',
        gridTemplateRows:'200px 160px',
        gap:10, marginBottom:'1.6rem',
      }}>
        <div style={{ gridColumn:'1', gridRow:'1/3' }}>
          <PhotoSlot src={h.images?.[0]} label="Main photo"/>
        </div>
        <div style={{ gridColumn:'2', gridRow:'1' }}>
          <PhotoSlot src={h.images?.[1]} label="Team photo"/>
        </div>
        <div style={{ gridColumn:'2', gridRow:'2',
          display:'grid', gridTemplateColumns:'1fr 1fr', gap:10 }}>
          <PhotoSlot src={h.images?.[2]} label="Presentation"/>
          <PhotoSlot src={h.images?.[3]} label="Demo"/>
        </div>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr',
        gap:'1.4rem', marginBottom: h.tags ? '1.4rem' : 0 }}>
        {h.idea && (
          <div>
            <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:'0.7rem',
              color:'var(--text-muted)', letterSpacing:'0.1em',
              textTransform:'uppercase', marginBottom:6 }}>The Idea</p>
            <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:'0.9rem',
              color:'var(--text-secondary)', lineHeight:1.65 }}>{h.idea}</p>
          </div>
        )}
        {h.experience && (
          <div>
            <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:'0.7rem',
              color:'var(--text-muted)', letterSpacing:'0.1em',
              textTransform:'uppercase', marginBottom:6 }}>The Experience</p>
            <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:'0.9rem',
              color:'var(--text-secondary)', lineHeight:1.65 }}>{h.experience}</p>
          </div>
        )}
      </div>

      {h.tags && (
        <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
          {h.tags.map(t => (
            <span key={t} style={{ fontSize:'0.72rem', padding:'3px 10px',
              borderRadius:20, background:'var(--accent-soft)',
              color:'var(--accent)', border:'1px solid var(--border)',
              fontFamily:"'DM Sans',sans-serif" }}>{t}</span>
          ))}
        </div>
      )}
    </>
  )
}

/* Minimal card — just a quote + cert download, no photos */
function MinimalCard({ h }) {
  return (
    <div style={{ display:'flex', gap:'2rem',
      alignItems:'flex-start', flexWrap:'wrap' }}>
      <p style={{ flex:1, fontFamily:"'DM Sans',sans-serif",
        fontSize:'0.95rem', color:'var(--text-secondary)',
        lineHeight:1.75, fontStyle:'italic',
        borderLeft:'3px solid var(--accent)',
        paddingLeft:16, margin:0 }}>
        "{h.experience}"
      </p>
      {h.certUrl && (
        <motion.a
          href={h.certUrl} download target="_blank" rel="noopener noreferrer"
          whileHover={{ scale:1.04 }} whileTap={{ scale:0.97 }}
          style={{ display:'flex', alignItems:'center', gap:6,
            padding:'9px 16px', borderRadius:12,
            background:'var(--accent-soft)',
            border:'1px solid var(--border-strong)',
            color:'var(--accent)', textDecoration:'none',
            fontFamily:"'DM Sans',sans-serif",
            fontSize:'0.8rem', fontWeight:500, flexShrink:0 }}>
          <DownloadIcon/> Certificate
        </motion.a>
      )}
    </div>
  )
}

export default function HackathonsPage() {
  const navigate = useNavigate()
  const hackathons = achievements.hackathons

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
      <div style={{ maxWidth:960, margin:'0 auto' }}>
        <motion.button onClick={() => navigate('/')} whileHover={{ x:-3 }}
          style={{ display:'flex', alignItems:'center', gap:6,
            background:'none', border:'none', cursor:'pointer',
            color:'var(--accent)', fontFamily:"'DM Sans',sans-serif",
            fontSize:'0.88rem', marginBottom:'2.5rem', padding:0 }}>
          <BackIcon/> Back to portfolio
        </motion.button>

        <h1 style={{ fontFamily:"'DM Serif Display',serif",
          fontSize:'clamp(2rem,5vw,3rem)', color:'var(--text-primary)',
          marginBottom:'0.4rem' }}>Hackathons</h1>
        <p style={{ fontFamily:"'DM Sans',sans-serif",
          color:'var(--text-muted)', fontSize:'0.9rem', marginBottom:'3.5rem' }}>
          Building under pressure, learning at warp speed
        </p>

        <div style={{ display:'flex', flexDirection:'column', gap:'2.5rem' }}>
          {hackathons.map((h, i) => {
            const isMinimal = !h.images

            return (
              <motion.div key={h.id}
                initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }}
                transition={{ delay:i*0.15, duration:0.5 }}
                className="card-3d"
                style={{ borderRadius:24,
                  padding:'clamp(1.6rem,4vw,2.4rem)' }}
              >
                {/* header */}
                <div style={{ display:'flex', justifyContent:'space-between',
                  alignItems:'flex-start', flexWrap:'wrap', gap:12,
                  marginBottom:'1.4rem' }}>
                  <div>
                    <h2 style={{ fontFamily:"'DM Serif Display',serif",
                      fontSize:'clamp(1.3rem,3vw,1.7rem)',
                      color:'var(--text-primary)', marginBottom:8 }}>
                      {h.name}
                    </h2>
                    <div style={{ display:'flex', gap:8, flexWrap:'wrap',
                      alignItems:'center' }}>
                      <span style={{ fontSize:'0.75rem', padding:'3px 12px',
                        borderRadius:20, background:'rgba(255,180,0,0.12)',
                        color:'#c99a00', fontFamily:"'DM Sans',sans-serif",
                        fontWeight:500 }}>🏆 {h.prize}</span>
                      <span style={{ fontSize:'0.75rem', padding:'3px 12px',
                        borderRadius:20, background:'var(--accent-soft)',
                        color:'var(--accent)',
                        fontFamily:"'DM Sans',sans-serif" }}>
                        {h.org} · {h.date}
                      </span>
                    </div>
                  </div>
                </div>

                {/* body — full or minimal depending on data */}
                {isMinimal
                  ? <MinimalCard h={h}/>
                  : <FullCard h={h}/>
                }
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}

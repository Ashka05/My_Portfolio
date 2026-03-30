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

const RESULT_STYLE = {
  'Volunteer Member': { bg: 'rgba(64,138,113,0.12)', color: 'var(--accent)' },
  'Member':           { bg: 'rgba(64,138,113,0.12)', color: 'var(--accent)' },
  '1st Position':     { bg: 'rgba(255,180,0,0.12)',  color: '#c99a00'       },
  '2nd Position':     { bg: 'rgba(155,114,239,0.12)', color: '#9b72ef'      },
}

export default function VolunteerPage() {
  const navigate = useNavigate()
  const items = achievements.volunteer

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
      <div style={{ maxWidth:780, margin:'0 auto' }}>
        <motion.button onClick={() => navigate('/')} whileHover={{ x:-3 }}
          style={{ display:'flex', alignItems:'center', gap:6,
            background:'none', border:'none', cursor:'pointer',
            color:'var(--accent)', fontFamily:"'DM Sans',sans-serif",
            fontSize:'0.88rem', marginBottom:'2.5rem', padding:0 }}>
          <BackIcon/> Back to portfolio
        </motion.button>

        <h1 style={{ fontFamily:"'DM Serif Display',serif",
          fontSize:'clamp(2rem,5vw,3rem)', color:'var(--text-primary)',
          marginBottom:'0.4rem' }}>Volunteer & Achievements</h1>
        <p style={{ fontFamily:"'DM Sans',sans-serif",
          color:'var(--text-muted)', fontSize:'0.9rem', marginBottom:'3rem' }}>
          Communities I've contributed to and competitions I've won
        </p>

        <div style={{ position:'relative' }}>
          <div style={{ position:'absolute', left:80, top:0, bottom:0,
            width:2, background:'var(--border)' }}/>

          {items.map((item, i) => {
            const rs = RESULT_STYLE[item.result] ||
              { bg:'rgba(64,138,113,0.12)', color:'var(--accent)' }
            return (
              <motion.div key={item.id}
                initial={{ opacity:0, x:-20 }} animate={{ opacity:1, x:0 }}
                transition={{ delay:i*0.08, duration:0.4 }}
                style={{ display:'flex', gap:'2rem',
                  marginBottom:'2rem', position:'relative' }}>

                {/* year/period */}
                <div style={{ width:72, flexShrink:0,
                  textAlign:'right', paddingTop:16 }}>
                  <span style={{ fontFamily:"'DM Sans',sans-serif",
                    fontSize:'0.68rem', color:'var(--text-muted)',
                    lineHeight:1.4, display:'block' }}>
                    {item.year}
                  </span>
                </div>

                {/* dot */}
                <div style={{ position:'absolute', left:74, top:20,
                  width:14, height:14, borderRadius:'50%',
                  background:'var(--accent)',
                  border:'3px solid var(--bg-base)', zIndex:1 }}/>

                {/* card */}
                <div className="card-3d" style={{ flex:1, borderRadius:16,
                  marginLeft:'1rem',
                  padding:'clamp(1rem,2.5vw,1.4rem)' }}>

                  <div style={{ display:'flex', justifyContent:'space-between',
                    alignItems:'flex-start', flexWrap:'wrap', gap:10,
                    marginBottom: item.description ? 10 : 0 }}>
                    <div>
                      <h3 style={{ fontFamily:"'DM Serif Display',serif",
                        fontSize:'1.05rem', color:'var(--text-primary)',
                        marginBottom:6 }}>{item.event}</h3>
                      <span style={{ fontSize:'0.72rem', padding:'2px 10px',
                        borderRadius:20, background:rs.bg, color:rs.color,
                        fontFamily:"'DM Sans',sans-serif", fontWeight:500 }}>
                        {item.result}
                      </span>
                    </div>
                    {item.certUrl && (
                      <motion.a href={item.certUrl} target="_blank"
                        rel="noopener noreferrer" download
                        whileHover={{ scale:1.04 }}
                        style={{ display:'flex', alignItems:'center', gap:5,
                          padding:'6px 12px', borderRadius:10,
                          background:'var(--accent-soft)',
                          border:'1px solid var(--border-strong)',
                          color:'var(--accent)', textDecoration:'none',
                          fontFamily:"'DM Sans',sans-serif",
                          fontSize:'0.76rem', fontWeight:500 }}>
                        <DownloadIcon/> Certificate
                      </motion.a>
                    )}
                  </div>

                  {item.description && (
                    <p style={{ fontFamily:"'DM Sans',sans-serif",
                      fontSize:'0.86rem', color:'var(--text-secondary)',
                      lineHeight:1.65, marginBottom:10,
                      marginTop:8 }}>
                      {item.description}
                    </p>
                  )}

                  <div style={{ display:'flex', flexWrap:'wrap', gap:6, marginTop:8 }}>
                    {item.skills.map(s => (
                      <span key={s} style={{ fontSize:'0.7rem', padding:'2px 9px',
                        borderRadius:20, background:'var(--accent-soft)',
                        color:'var(--accent)', border:'1px solid var(--border)',
                        fontFamily:"'DM Sans',sans-serif" }}>{s}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}

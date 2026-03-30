import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { projects } from '../data/profile'

function BackIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6"/>
    </svg>
  )
}
function ExternalIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  )
}

const STATUS = {
  ongoing:   { bg:'rgba(255,180,0,0.12)', color:'#c99a00', label:'Ongoing' },
  completed: { bg:'rgba(64,138,113,0.15)', color:'var(--accent)', label:'Completed' },
}

export default function ProjectsPage() {
  const navigate = useNavigate()

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
      <div style={{ maxWidth:820, margin:'0 auto' }}>
        <motion.button onClick={() => navigate('/')} whileHover={{ x:-3 }}
          style={{ display:'flex', alignItems:'center', gap:6,
            background:'none', border:'none', cursor:'pointer',
            color:'var(--accent)', fontFamily:"'DM Sans',sans-serif",
            fontSize:'0.88rem', marginBottom:'2.5rem', padding:0 }}>
          <BackIcon/> Back to portfolio
        </motion.button>

        <h1 style={{ fontFamily:"'DM Serif Display',serif",
          fontSize:'clamp(2rem,5vw,3rem)', color:'var(--text-primary)',
          marginBottom:'0.4rem' }}>All Projects</h1>
        <p style={{ fontFamily:"'DM Sans',sans-serif",
          color:'var(--text-muted)', fontSize:'0.9rem', marginBottom:'3rem' }}>
          A full timeline of everything I've built
        </p>

        <div style={{ position:'relative' }}>
          <div style={{ position:'absolute', left:80, top:0, bottom:0,
            width:2, background:'var(--border)' }}/>

          {projects.map((proj, i) => {
            const s = STATUS[proj.status] || STATUS.completed
            return (
              <motion.div key={proj.id}
                initial={{ opacity:0, x:-20 }} animate={{ opacity:1, x:0 }}
                transition={{ delay:i*0.1, duration:0.45 }}
                style={{ display:'flex', gap:'2rem',
                  marginBottom:'2.4rem', position:'relative' }}>

                <div style={{ width:72, flexShrink:0, textAlign:'right', paddingTop:18 }}>
                  <span style={{ fontFamily:"'DM Sans',sans-serif",
                    fontSize:'0.68rem', color:'var(--text-muted)',
                    lineHeight:1.4, display:'block' }}>{proj.period}</span>
                </div>

                <div style={{ position:'absolute', left:74, top:22,
                  width:14, height:14, borderRadius:'50%',
                  background:'var(--accent)', border:'3px solid var(--bg-base)', zIndex:1 }}/>

                <div className="card-3d" style={{ flex:1, borderRadius:18,
                  padding:'clamp(1.2rem,3vw,1.8rem)', marginLeft:'1rem' }}>

                  <div style={{ display:'flex', alignItems:'center',
                    gap:10, marginBottom:6, flexWrap:'wrap' }}>
                    <h3 style={{ fontFamily:"'DM Serif Display',serif",
                      fontSize:'1.2rem', color:'var(--text-primary)' }}>{proj.title}</h3>
                    <span style={{ fontSize:'0.68rem', padding:'2px 9px',
                      borderRadius:20, background:s.bg, color:s.color,
                      fontFamily:"'DM Sans',sans-serif", fontWeight:500 }}>{s.label}</span>
                  </div>

                  <p style={{ fontFamily:"'DM Sans',sans-serif",
                    fontSize:'0.82rem', color:'var(--accent)', marginBottom:10 }}>
                    {proj.subtitle}
                  </p>

                  <p style={{ fontFamily:"'DM Sans',sans-serif",
                    fontSize:'0.9rem', color:'var(--text-secondary)',
                    lineHeight:1.65, marginBottom:14 }}>{proj.description}</p>

                  <div style={{ display:'flex', flexWrap:'wrap', gap:6, marginBottom:14 }}>
                    {proj.tags.map(t => (
                      <span key={t} style={{ fontSize:'0.72rem', padding:'3px 10px',
                        borderRadius:20, background:'var(--accent-soft)',
                        color:'var(--accent)', border:'1px solid var(--border)',
                        fontFamily:"'DM Sans',sans-serif" }}>{t}</span>
                    ))}
                  </div>

                  <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
                    {proj.deployedUrl && (
                      <a href={proj.deployedUrl} target="_blank" rel="noopener noreferrer"
                        style={{ display:'flex', alignItems:'center', gap:5,
                          padding:'6px 14px', borderRadius:10,
                          background:'var(--accent)', color:'var(--text-on-accent)',
                          textDecoration:'none', fontFamily:"'DM Sans',sans-serif",
                          fontSize:'0.78rem', fontWeight:500 }}>
                        <ExternalIcon/> Live demo
                      </a>
                    )}
                    <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer"
                      style={{ display:'flex', alignItems:'center', gap:5,
                        padding:'6px 14px', borderRadius:10,
                        background:'var(--accent-soft)', color:'var(--accent)',
                        border:'1px solid var(--border-strong)',
                        textDecoration:'none', fontFamily:"'DM Sans',sans-serif",
                        fontSize:'0.78rem', fontWeight:500 }}>
                      GitHub repo
                    </a>
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

import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { internships } from '../data/profile'

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
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  )
}

export default function InternshipsPage() {
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
      <div style={{ maxWidth:900, margin:'0 auto' }}>

        {/* back */}
        <motion.button onClick={() => navigate('/')} whileHover={{ x:-3 }}
          style={{ display:'flex', alignItems:'center', gap:6,
            background:'none', border:'none', cursor:'pointer',
            color:'var(--accent)', fontFamily:"'DM Sans',sans-serif",
            fontSize:'0.88rem', marginBottom:'2.5rem', padding:0 }}>
          <BackIcon/> Back to portfolio
        </motion.button>

        {/* header */}
        <h1 style={{ fontFamily:"'DM Serif Display',serif",
          fontSize:'clamp(2rem,5vw,3rem)', color:'var(--text-primary)',
          marginBottom:'0.4rem' }}>
          Internships & Simulations
        </h1>
        <p style={{ fontFamily:"'DM Sans',sans-serif",
          color:'var(--text-muted)', fontSize:'0.9rem', marginBottom:'0.6rem' }}>
          8 industry job simulations completed via Forage — click any card to download the certificate
        </p>

        {/* Forage badge */}
        <div style={{ display:'inline-flex', alignItems:'center', gap:8,
          padding:'5px 14px', borderRadius:20,
          background:'var(--accent-soft)', border:'1px solid var(--border)',
          marginBottom:'3rem' }}>
          <span style={{ fontSize:'0.75rem', fontFamily:"'DM Sans',sans-serif",
            color:'var(--accent)', fontWeight:500 }}>
            ✓ All completed on Forage · Sep – Dec 2025
          </span>
        </div>

        {/* grid of 8 certificates */}
        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat(auto-fill, minmax(380px, 1fr))',
          gap:'clamp(1rem,2vw,1.4rem)',
        }}>
          {internships.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity:0, y:20 }}
              animate={{ opacity:1, y:0 }}
              transition={{ delay:i*0.07, duration:0.4 }}
              className="card-3d"
              style={{ borderRadius:18, padding:'clamp(1.2rem,2.5vw,1.6rem)' }}
            >
              {/* top row: logo emoji + org name + download */}
              <div style={{ display:'flex', justifyContent:'space-between',
                alignItems:'flex-start', marginBottom:12 }}>
                <div style={{ display:'flex', alignItems:'center', gap:10 }}>
                  <span style={{ fontSize:28, lineHeight:1 }}>{item.orgLogo}</span>
                  <div>
                    <p style={{ fontFamily:"'DM Sans',sans-serif",
                      fontSize:'0.72rem', color:'var(--text-muted)',
                      letterSpacing:'0.05em', marginBottom:2 }}>
                      {item.period}
                    </p>
                    <p style={{ fontFamily:"'DM Sans',sans-serif",
                      fontSize:'0.88rem', fontWeight:500,
                      color:'var(--accent)' }}>{item.org}</p>
                  </div>
                </div>

                {/* download button */}
                <motion.a
                  href={item.certUrl}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale:1.05 }}
                  whileTap={{ scale:0.96 }}
                  style={{
                    display:'flex', alignItems:'center', gap:5,
                    padding:'7px 13px', borderRadius:10,
                    background:'var(--accent-soft)',
                    border:'1px solid var(--border-strong)',
                    color:'var(--accent)', textDecoration:'none',
                    fontFamily:"'DM Sans',sans-serif",
                    fontSize:'0.75rem', fontWeight:500, flexShrink:0,
                    cursor:'pointer',
                  }}
                >
                  <DownloadIcon/> Certificate
                </motion.a>
              </div>

              {/* role title */}
              <h3 style={{ fontFamily:"'DM Serif Display',serif",
                fontSize:'clamp(0.95rem,1.8vw,1.1rem)',
                color:'var(--text-primary)', lineHeight:1.35,
                marginBottom:12 }}>{item.role}</h3>

              {/* skill tags */}
              <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
                {item.skills.map(s => (
                  <span key={s} style={{
                    fontSize:'0.68rem', padding:'2px 9px', borderRadius:20,
                    background:'var(--accent-soft)', color:'var(--accent)',
                    border:'1px solid var(--border)',
                    fontFamily:"'DM Sans',sans-serif",
                  }}>{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* coming soon */}
        <motion.div
          initial={{ opacity:0 }} animate={{ opacity:1 }}
          transition={{ delay:0.7 }}
          style={{ marginTop:'clamp(1.5rem,3vw,2rem)',
            padding:'1rem 1.4rem', borderRadius:14,
            border:'1.5px dashed var(--border)',
            color:'var(--text-muted)', fontFamily:"'DM Sans',sans-serif",
            fontSize:'0.84rem', fontStyle:'italic', textAlign:'center' }}>
          More industry experience on the way ✦
        </motion.div>

      </div>
    </motion.div>
  )
}

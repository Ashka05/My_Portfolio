import { motion } from 'framer-motion'
import { profile } from '../data/profile'

function Tag({ label }) {
  return (
    <span style={{
      display:'inline-block', padding:'3px 11px', borderRadius:20,
      fontSize:'0.75rem', fontWeight:400,
      fontFamily:"'DM Sans',sans-serif", letterSpacing:'0.03em',
      background:'var(--accent-soft)', color:'var(--accent)',
      border:'1px solid var(--border)', whiteSpace:'nowrap',
    }}>{label}</span>
  )
}

function LinkRow({ icon, display, url }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer"
      style={{ display:'flex', alignItems:'center', gap:8,
        color:'var(--accent)', textDecoration:'none',
        fontSize:'0.85rem', fontFamily:"'DM Sans',sans-serif",
        transition:'opacity 0.2s' }}
      onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
      onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
      <span style={{ fontSize:15 }}>{icon}</span>
      <span>{display}</span>
    </a>
  )
}

export default function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity:0, y:28 }} animate={{ opacity:1, y:0 }}
      transition={{ duration:0.6, ease:[0.22,1,0.36,1] }}
      className="card-3d"
      style={{ borderRadius:28,
        padding:'clamp(1.8rem,4vw,2.8rem)',
        display:'flex', gap:'clamp(1.5rem,4vw,2.8rem)',
        alignItems:'flex-start', flexWrap:'wrap' }}
    >
      {/* avatar */}
      <div style={{ flexShrink:0, display:'flex', flexDirection:'column',
        alignItems:'center', gap:8 }}>
        <div style={{
          width:'clamp(90px,14vw,130px)',
          height:'clamp(90px,14vw,130px)',
          borderRadius:'50%',
          border:'3px solid var(--accent-dim)',
          overflow:'hidden',
          position:'relative',
          background:'var(--accent-soft)',
        }}>
          <img
            src="/Pictures/profile.jpeg"
            alt={profile.name}
            style={{
              width:'100%',
              height:'100%',
              objectFit:'cover',
              objectPosition:'center top',
              display:'block',
            }}
          />
        </div>
        <div style={{ textAlign:'center',
          fontSize:'0.72rem', fontFamily:"'DM Sans',sans-serif",
          color:'var(--text-muted)', letterSpacing:'0.04em' }}>
          CGPA {profile.cgpa}
        </div>
      </div>

      {/* info */}
      <div style={{ flex:1, minWidth:220, display:'flex',
        flexDirection:'column', gap:14 }}>
        <div>
          <h1 style={{ fontFamily:"'DM Serif Display',serif",
            fontSize:'clamp(1.8rem,4vw,2.6rem)',
            color:'var(--text-primary)', lineHeight:1.1, marginBottom:4 }}>
            {profile.name}
          </h1>
          <p style={{ fontFamily:"'DM Sans',sans-serif",
            fontSize:'0.88rem', color:'var(--accent)',
            letterSpacing:'0.06em', fontWeight:300 }}>
            {profile.tagline}
          </p>
        </div>

        <div>
          <p style={{ fontFamily:"'DM Sans',sans-serif",
            fontSize:'0.92rem', color:'var(--text-secondary)', lineHeight:1.5 }}>
            {profile.degree}
          </p>
          <p style={{ fontFamily:"'DM Sans',sans-serif",
            fontSize:'0.8rem', color:'var(--text-muted)', marginTop:2 }}>
            {profile.university}
          </p>
        </div>

        <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
          <LinkRow icon="💼" display={profile.linkedin.display} url={profile.linkedin.url}/>
          <LinkRow icon="🐙" display={profile.github.display}   url={profile.github.url}/>
          <LinkRow icon="⚡" display={profile.leetcode.display} url={profile.leetcode.url}/>
          <LinkRow icon="✉️" display={profile.email}            url={`mailto:${profile.email}`}/>
        </div>

        <div style={{ display:'flex', flexWrap:'wrap', gap:6, paddingTop:4 }}>
          {profile.skills.map(s => <Tag key={s} label={s}/>)}
        </div>
      </div>
    </motion.div>
  )
}

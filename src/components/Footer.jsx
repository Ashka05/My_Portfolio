import { motion } from 'framer-motion'
import { profile } from '../data/profile'

export default function Footer() {
  return (
    <motion.footer
      id="contact"
      initial={{ opacity:0, y:20 }}
      whileInView={{ opacity:1, y:0 }}
      viewport={{ once:true }}
      transition={{ duration:0.5 }}
      className="card-3d"
      style={{ borderRadius:24, padding:'clamp(1.8rem,4vw,2.8rem)' }}
    >
      <div style={{ display:'flex', justifyContent:'space-between',
        alignItems:'flex-start', flexWrap:'wrap', gap:16 }}>

        {/* contact info */}
        <div style={{ display:'flex', flexDirection:'column', gap:7 }}>
          <h2 style={{ fontFamily:"'DM Serif Display',serif",
            fontSize:'clamp(1.2rem,2.5vw,1.6rem)',
            color:'var(--text-primary)', marginBottom:4 }}>
            Get in touch
          </h2>
          {[
            { icon:'✉️', text:profile.email,              href:`mailto:${profile.email}` },
            { icon:'📞', text:profile.phone,              href:`tel:${profile.phone}` },
            { icon:'💼', text:profile.linkedin.display,   href:profile.linkedin.url },
            { icon:'🐙', text:profile.github.display,     href:profile.github.url },
          ].map(({ icon, text, href }) => (
            <a key={text} href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              style={{ display:'flex', alignItems:'center', gap:8,
                color:'var(--text-secondary)', textDecoration:'none',
                fontFamily:"'DM Sans',sans-serif", fontSize:'0.88rem',
                transition:'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
              <span style={{ fontSize:14 }}>{icon}</span>
              {text}
            </a>
          ))}
        </div>
      </div>

      {/* bottom bar */}
      <div style={{ paddingTop:16, marginTop:16,
        borderTop:'1px solid var(--border)',
        display:'flex', justifyContent:'space-between',
        alignItems:'center', flexWrap:'wrap', gap:8 }}>
        <span style={{ fontFamily:"'DM Sans',sans-serif",
          fontSize:'0.75rem', color:'var(--text-muted)' }}>
          © 2025 Ashka · Built with React + Vite
        </span>
        <span style={{ fontFamily:"'DM Serif Display',serif",
          fontSize:'0.8rem', color:'var(--accent-dim)', fontStyle:'italic' }}>
          made with curiosity ✦
        </span>
      </div>
    </motion.footer>
  )
}

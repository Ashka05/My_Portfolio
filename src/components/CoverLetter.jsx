import { motion } from 'framer-motion'

function PaperclipIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
      stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66L9.41 17.41a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
    </svg>
  )
}

function BulletItem({ children }) {
  return (
    <li style={{
      display: 'flex', gap: 10, alignItems: 'flex-start',
      fontFamily: "'DM Sans', sans-serif",
      fontSize: 'clamp(0.85rem, 1.4vw, 0.95rem)',
      color: 'var(--text-secondary)', lineHeight: 1.7,
    }}>
      <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 2 }}>✦</span>
      <span>{children}</span>
    </li>
  )
}

function SectionLabel({ children }) {
  return (
    <p style={{
      fontFamily: "'DM Sans', sans-serif",
      fontSize: '0.72rem', letterSpacing: '0.1em',
      color: 'var(--accent)', textTransform: 'uppercase',
      fontWeight: 500, marginBottom: 8, marginTop: 20,
    }}>
      {children}
    </p>
  )
}

export default function CoverLetter() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className="card-3d"
      style={{ borderRadius: 24, padding: 'clamp(1.6rem, 4vw, 2.6rem)', position: 'relative' }}
    >
      {/* paperclip label */}
      <div style={{
        position: 'absolute',
        top: 'clamp(1rem, 2.5vw, 1.4rem)',
        left: 'clamp(1rem, 2.5vw, 1.4rem)',
        display: 'flex', alignItems: 'center', gap: 7,
      }}>
        <PaperclipIcon />
        <span style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem',
          letterSpacing: '0.1em', color: 'var(--text-muted)',
          textTransform: 'uppercase',
        }}>Cover Letter</span>
      </div>

      {/* body */}
      <div style={{ marginTop: 'clamp(2.4rem, 4vw, 3rem)' }}>

        {/* opening hook */}
        <p style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: 'clamp(1.1rem, 2.2vw, 1.35rem)',
          color: 'var(--text-primary)', lineHeight: 1.5,
          marginBottom: '1rem',
        }}>
          I don't just want to build models — I want to build systems that understand the world in real-time. 🚀
        </p>

        {/* intro */}
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 'clamp(0.85rem, 1.4vw, 0.95rem)',
          color: 'var(--text-secondary)', lineHeight: 1.75,
          marginBottom: '0.5rem',
        }}>
          I'm a Computer Science student at Shaheed Rajguru College, University of Delhi (CGPA 8.12), and I've spent my academic career obsessing over the intersection of AI and human experience. My goal is to transition from a student of code to a Data Scientist who transforms raw, streaming signals into actionable insights.
        </p>

        {/* what i'm building */}
        <SectionLabel>What I'm Building</SectionLabel>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 'clamp(0.85rem, 1.4vw, 0.95rem)',
          color: 'var(--text-secondary)', lineHeight: 1.75,
        }}>
          My flagship project, <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>MoodBite</strong>, is an emotion-aware voice system. By integrating Google Gemini APIs and NLP transformers, I've moved beyond standard food-ordering apps to create a system that detects user sentiment in real-time — and I'm currently exploring streaming data architectures to achieve sub-second model responsiveness. Because in the real world, data doesn't wait.
        </p>

        {/* beyond the classroom */}
        <SectionLabel>Beyond the Classroom</SectionLabel>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <BulletItem>
            <span><strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Leadership at GDG —</strong> As Technical Lead at GDG SRCASW, I've mentored 100+ students in Google Cloud and GenAI, helping our chapter achieve Tier-1 status. Being a great Data Scientist means being a great communicator.</span>
          </BulletItem>
          <BulletItem>
            <span><strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Production-Ready ML —</strong> My Customer Retention Intelligence System involved building end-to-end pipelines for churn prediction and CLV forecasting using LightGBM and clustering.</span>
          </BulletItem>
          <BulletItem>
            <span><strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Industry Simulation —</strong> Through Forage, I've tackled high-stakes problems in data anonymisation, forensic technology, and ML-driven data aggregation — a taste of the rigour required for industry-level data science.</span>
          </BulletItem>
        </ul>

        {/* technical deep dives */}
        <SectionLabel>Current Technical Deep-Dives</SectionLabel>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <BulletItem>
            <span><strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Streaming & Big Data —</strong> Mastering live data flows with Apache Spark and exploring event-driven architectures.</span>
          </BulletItem>
          <BulletItem>
            <span><strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>High-Performance Libraries —</strong> Moving beyond the basics with Polars for lightning-fast data manipulation and LightGBM for scalable gradient boosting.</span>
          </BulletItem>
          <BulletItem>
            <span><strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>MLOps Foundations —</strong> Learning to take models out of Jupyter Notebooks and into reproducible, Dockerised environments.</span>
          </BulletItem>
        </ul>

        {/* closing */}
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 'clamp(0.85rem, 1.4vw, 0.95rem)',
          color: 'var(--text-secondary)', lineHeight: 1.75,
          marginTop: 20,
        }}>
          I'm a national-level poem writer and state-level debater — which means I bring both creative storytelling and logical precision to every dataset I touch.
        </p>

        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 'clamp(0.85rem, 1.4vw, 0.95rem)',
          color: 'var(--accent)', lineHeight: 1.75,
          fontStyle: 'italic', marginTop: 12,
        }}>
          I'm actively seeking Data Science internships where I can apply my Python, C++, and analytical toolkit to solve complex, real-world challenges. If you're building something that moves fast and uses data to change lives — let's talk. 📈✨
        </p>

        {/* signature */}
        <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid var(--border)' }}>
          <p style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: '1.15rem', color: 'var(--text-primary)',
          }}>Ashka</p>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: 3,
          }}>
            Ashka4542@gmail.com · +91 93117 58350
          </p>
        </div>
      </div>
    </motion.div>
  )
}

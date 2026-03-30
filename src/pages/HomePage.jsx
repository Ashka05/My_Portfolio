import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import ProfileCard from '../components/ProfileCard'
import CoverLetter from '../components/CoverLetter'
import RibbonSection from '../components/RibbonSection'
import Footer from '../components/Footer'
import { LeetCodeLogo, GitHubLogo, InternshipStamp } from '../components/FrameIcons'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const itemVariants = {
  hidden:  { opacity:0, y:28 },
  visible: { opacity:1, y:0, transition:{ duration:0.55, ease:[0.22,1,0.36,1] } },
}

function FrameContent({ children, label, sub }) {
  return (
    <div style={{ display:'flex', flexDirection:'column',
      alignItems:'center', gap:10, padding:'0 8px' }}>
      {children}
      <span style={{ fontFamily:"'DM Sans',sans-serif",
        fontSize:'clamp(0.82rem,1.5vw,0.96rem)',
        fontWeight:500, color:'var(--text-primary)', textAlign:'center' }}>
        {label}
      </span>
      {sub && <span style={{ fontFamily:"'DM Sans',sans-serif",
        fontSize:'0.72rem', color:'var(--text-muted)', textAlign:'center' }}>
        {sub}
      </span>}
    </div>
  )
}

export default function HomePage() {
  const navigate  = useNavigate()
  const { theme } = useTheme()
  const iconColor = theme === 'dark' ? '#B0E4CC' : '#6c3dd4'

  const scoreboardFrames = [
    {
      id: 'leetcode',
      customContent: (
        <FrameContent label="LeetCode" sub="Ashka05">
          <LeetCodeLogo size={42}/>
        </FrameContent>
      ),
      onClick: () => window.open('https://leetcode.com/u/Ashka05/', '_blank'),
    },
    {
      id: 'github',
      customContent: (
        <FrameContent label="GitHub" sub="Ashka05">
          <GitHubLogo size={42} color={iconColor}/>
        </FrameContent>
      ),
      onClick: () => window.open('https://github.com/Ashka05', '_blank'),
    },
    {
      id: 'internships',
      customContent: (
        <FrameContent label="Internships" sub="8 Simulations">
          <InternshipStamp size={48}/>
        </FrameContent>
      ),
      onClick: () => navigate('/internships'),
    },
  ]

  const projectFrames = [
    {
      id: 'moodbite',
      icon: '🎙️', title: 'MoodBite', subtitle: 'AI · Voice · NLP',
      onClick: () => window.open('https://github.com/Ashka05/Moodbite', '_blank'),
    },
    {
      id: 'railoptima',
      icon: '🚂', title: 'RailOptima', subtitle: 'AI Railways Dashboard',
      onClick: () => window.open('https://sihh.netlify.app/', '_blank'),
    },
    {
      id: 'more-projects',
      icon: '→', title: 'More Projects', subtitle: 'All 4 projects',
      onClick: () => navigate('/projects'),
    },
  ]

  const achievementFrames = [
    {
      id: 'hackathons',
      icon: '🏆', title: 'Hackathons', subtitle: 'Rising Stars · Top 5',
      onClick: () => navigate('/hackathons'),
    },
    {
      id: 'leadership',
      icon: '🌟', title: 'Leadership', subtitle: 'GDG Tech Lead',
      onClick: () => navigate('/leadership'),
    },
    {
      id: 'volunteer',
      icon: '✍️', title: 'Volunteer', subtitle: 'Societies & Competitions',
      onClick: () => navigate('/volunteer'),
    },
  ]

  return (
    <motion.main
      variants={containerVariants} initial="hidden" animate="visible"
      style={{ position:'relative', zIndex:1, maxWidth:1080, margin:'0 auto',
        padding:'clamp(5.5rem,10vw,7rem) clamp(1.2rem,5vw,3rem) clamp(2rem,4vw,3rem)',
        display:'flex', flexDirection:'column',
        gap:'clamp(1.8rem,3.5vw,2.6rem)' }}
    >
      <motion.div variants={itemVariants}><ProfileCard/></motion.div>
      <motion.div variants={itemVariants}><CoverLetter/></motion.div>
      <motion.div variants={itemVariants}>
        <RibbonSection id="scoreboard" title="Scoreboard" frames={scoreboardFrames}/>
      </motion.div>
      <motion.div variants={itemVariants}>
        <RibbonSection id="projects" title="Projects" frames={projectFrames}/>
      </motion.div>
      <motion.div variants={itemVariants}>
        <RibbonSection id="achievements" title="Achievements" frames={achievementFrames}/>
      </motion.div>
      <motion.div variants={itemVariants}><Footer/></motion.div>
    </motion.main>
  )
}

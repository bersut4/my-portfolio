import Box from '@mui/material/Box'
import OceanBackground from '../components/OceanBackground'
import HeroSection from '../sections/HeroSection'
import AboutSection from '../sections/AboutSection'
import SkillTreeSection from '../sections/SkillTreeSection'
import ProjectsSection from '../sections/ProjectsSection'
import ContactSection from '../sections/ContactSection'

const HomePage = () => (
  <>
    <OceanBackground />
    <Box sx={{ position: 'relative', zIndex: 1 }}>
      <HeroSection />
      <AboutSection />
      <SkillTreeSection />
      <ProjectsSection />
      <ContactSection />
    </Box>
  </>
)

export default HomePage

import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import ScrollProgress from './components/shared/ScrollProgress';
import { useSiteAnimations } from './hooks/useSiteAnimations';

export default function App() {
  useSiteAnimations();

  return (
    <ThemeProvider>
      <ScrollProgress />
      <Layout>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </Layout>
    </ThemeProvider>
  );
}

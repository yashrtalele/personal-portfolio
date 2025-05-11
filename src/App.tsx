import './App.css'
import { useEffect, useState } from 'react';
import Info from './components/Info';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import CurrentProjects from './components/CurrentProjects';
import { useLenis } from 'lenis/react';
import Skills from './components/Skills';

function App() {
  const lenis = useLenis(({ scroll }) => {
  })


  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <div className="min-h-screen font-mono transition-colors duration-300 bg-white dark:bg-black text-black dark:text-white">
        <div className="max-w-5xl mx-auto px-4 py-2 sm:px-18">
          <Info />
          <hr className="border-gray-300 dark:border-gray-700" />
          <AboutMe />
          <Skills />
          <Projects />
          <CurrentProjects />
        </div>
      </div>
    </>
  )
}

export default App

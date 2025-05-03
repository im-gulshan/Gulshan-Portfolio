import './App.css';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Experience from './components/Experience';
import ScrollToTopButton from './components/ScrollToTopButton';
import Footer from './components/Footer';
import Education from './components/Education';
import { ThemeProvider } from './components/ThemeContext'; // ✅ import the provider

const TRACKING_ID = "G-W9BM9GSX4M"; // your Measurement ID

ReactGA.initialize(TRACKING_ID);

function App() {

  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);


  return (
    <ThemeProvider>
      <div>
        <Header />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <ScrollToTopButton />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

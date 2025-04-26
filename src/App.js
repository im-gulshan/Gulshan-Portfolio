// import logo from './logo.svg';
import './App.css';

import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Experience from './components/Experience';
import ScrollToTopButton from './components/ScrollToTopButton';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Experience/>
      <Projects />
      <Contact />
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default App;
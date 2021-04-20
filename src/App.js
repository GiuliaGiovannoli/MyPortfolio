import React from 'react'
import './App.css';

import NavBar from './components/NavBar'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Contact from './components/Contacts'


export default function App() {

  return (

    <div>
    <NavBar />
    <AboutMe />
    <Projects />
    <Contact />
    </div>
  );
}

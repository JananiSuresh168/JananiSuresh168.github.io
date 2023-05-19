import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [visibleSections, setVisibleSections] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const sectionElements = document.querySelectorAll('section');

      const visibleSections = Array.from(sectionElements).filter((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollPosition = window.pageYOffset + windowHeight;
        return scrollPosition > sectionTop + sectionHeight;
      });

      setVisibleSections(visibleSections);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <header>
        <h1>My Portfolio</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="about" className={visibleSections.includes(document.getElementById('about')) ? 'section visible' : 'section'}>
        <h2>About Me</h2>
        <p>Here you can write some information about yourself and your skills.</p>
      </section>

      <section id="projects" className={visibleSections.includes(document.getElementById('projects')) ? 'section visible' : 'section'}>
        <h2>Projects</h2>
        <div className={`projects-container ${visibleSections.includes(document.getElementById('projects')) ? 'visible' : ''}`}>
          <div className="project">
            <h3>Project 1</h3>
            <p>Description of project 1</p>
          </div>
          <div className="project">
            <h3>Project 2</h3>
            <p>Description of project 2</p>
          </div>
          <div className="project">
            <h3>Project 3</h3>
            <p>Description of project 3</p>
          </div>
        </div>
      </section>

      <section id="contact" className={visibleSections.includes(document.getElementById('contact')) ? 'section visible' : 'section'}>
        <h2>Contact Me</h2>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer>
        <p>&copy; 2023 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;

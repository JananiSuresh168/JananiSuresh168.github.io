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
        <nav>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
        </nav>
      </header>

      <section
  id="about"
  className={visibleSections.includes(document.getElementById('about')) ? 'section visible' : 'section'}
>
  <h2>About Me</h2>
  <div className="about-content">
    <div className="aboutmeimage">
      <img src="profile.jpeg" alt="myimage" />
    </div>
    <div className="aboutmetext">
      <p>
        Hello there. I am Jan. I am a dedicated software developer from Toronto with one year of experience.
        Skilled in multiple programming languages, I have contributed to various projects and gained a solid
        understanding of software development methodologies. I am a detail-oriented problem solver who strives for
        clean and efficient code. With a passion for continuous learning, I am eager to make a positive impact and
        contribute to the success of development teams.
      </p>
    <div className="resume-container">
      <a href="resume.pdf" download>
        Download Resume
      </a>
    </div>
    </div>
  </div>
</section>



      <section
        id="experience"
        className={visibleSections.includes(document.getElementById('experience')) ? 'section visible' : 'section'}
      >
        <h2>Experience</h2>
        <div className="flowchart-container">
          <div className="experience-item">
            <div className="experience-item-header">
              <h3>Company 1</h3>
              <p>Position 1</p>
            </div>
            <div className="experience-item-details">
              <p>Duration: Start Date - End Date</p>
            </div>
          </div>
          <div className="experience-item">
            <div className="experience-item-header">
              <h3>Company 2</h3>
              <p>Position 2</p>
            </div>
            <div className="experience-item-details">
              <p>Duration: Start Date - End Date</p>
            </div>
          </div>
        </div>
      </section>

      <section
  id="projects"
  className={visibleSections.includes(document.getElementById('projects')) ? 'section visible' : 'section'}
>
  <h2>Projects</h2>
  <div className={`projects-container ${visibleSections.includes(document.getElementById('projects')) ? 'visible' : ''}`}>
    <div className="project">
      <a href="https://github.com/priyadarshinig/SerWinComm">
        <img src="project1.png" alt="Project 1 Thumbnail" />
        <h3>Serwin Comm</h3>
      </a>
    </div>
    <div className="project">
      <a href="https://github.com/JananiSuresh168/WebSearchEngine">
        <img src="project2.png" alt="Project 2 Thumbnail" />
        <h3>Web Search Engine</h3>
      </a>
    </div>
    <div className="project">
      <a href="https://github.com/JananiSuresh168/Airbnb-New-User-Booking">
        <img src="project3.png" alt="Project 3 Thumbnail" />
        <h3>GoSQL</h3>
      </a>
    </div>
    <div className="project">
      <a href="https://github.com/JananiSuresh168/Airbnb-New-User-Booking">
        <img src="project4.png" alt="Project 4 Thumbnail" />
        <h3>AirBnB New User Booking</h3>
      </a>
    </div>
  </div>
</section>


      <section
        id="certifications"
        className={visibleSections.includes(document.getElementById('certifications')) ? 'section visible' : 'section'}
      >
        <h2>Certifications</h2>
        <div className="certificates-container">
          <a href="https://www.credly.com/badges/ff4e6309-6092-4da3-9744-6cbaba0c9824/public_url" target="_blank" rel="noopener noreferrer" className="certificate">
            <img src="certificate1.jpeg" alt="Certificate 1" />
          </a>
          <a href="https://www.linkedin.com/learning/certificates/fc0b988e511223d8d5da155fc0ccaeffbb68fb1dbc7fec5db191f5af37b0da3d" target="_blank" rel="noopener noreferrer" className="certificate">
            <img src="certificate2.jpeg" alt="Certificate 2" />
          </a>
          <a href="https://www.linkedin.com/learning/certificates/28841649c26fb7db865bffb50fd8d50d687c5a10828853fd295912ba336fd7ae" target="_blank" rel="noopener noreferrer" className="certificate">
            <img src="certificate3.jpeg" alt="Certificate 3" />
          </a>
          <a href="https://www.linkedin.com/learning/certificates/79342b5c72070951558bc48a46850dd53f84a05fcb6b002884711d65dd501ed8" target="_blank" rel="noopener noreferrer" className="certificate">
            <img src="certificate4.jpeg" alt="Certificate 4" />
          </a>
          <a href="https://www.hackerrank.com/certificates/edded88ba6f1" target="_blank" rel="noopener noreferrer" className="certificate">
            <img src="certificate5.jpeg" alt="Certificate 5" />
          </a>
          <a href="certificate6.jpg" target="_blank" rel="noopener noreferrer" className="certificate">
            <img src="certificate6.jpeg" alt="Certificate 6" />
          </a>
        </div>
      </section>
      <footer>
  
  <section id="contact">
    <h2>Contact Me</h2>
    <p>
      Feel free to reach out to me for any inquiries or opportunities. You can contact me through the following channels:
    </p>
    <ul>
      <li>Email: janani.suresh.0801@gmail.com</li>
      <li>
        <i class="fab fa-linkedin"></i>
        <a href="https://www.linkedin.com/in/jansuresh/">
          LinkedIn
        </a>
      </li>
      <li>
        <i class="fab fa-github"></i>
        <a href="https://github.com/JananiSuresh168">
          Github
        </a>
      </li>
    </ul>
  </section>
</footer>
    </div>
  );
};

export default App;
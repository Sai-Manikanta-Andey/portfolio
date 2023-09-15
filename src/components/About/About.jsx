import React from 'react'
import './About.css'
const About = () => {
  return (
    <section className="about-wrapper" id="About">
      <div className="paddings innerWidth about-container">
        {/* left side */}
        <div className=" about-image">
          <img src="./frontend.jpg" alt="frontend" width={400} />
        </div>
        {/* right side */}
        <div className="about">
          <div className="about-title">
            <h2>ABOUT</h2>
          </div>
          <div className="about-para ">
            <p className="secondaryText">
              A
              Passionate and dedicated Frontend Developer with a keen eye for
              detail and a strong foundation in web technologies like HTML, CSS,
              JavaScript and React with a deep understanding of responsive
              design and user experience. Committed to continuous learning and staying updated
              with the latest industry trends."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
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
            <h2 className="heading">ABOUT</h2>
          </div>
          <div className="about-para ">
            <p className="secondaryText">
              Experienced Frontend Developer proficient in HTML, CSS,
              JavaScript, and React, Redux Toolkit, excelling in crafting intuitive user
              interfaces. Actively broadening skill set to encompass backend
              technologies, including Node.js, Express.js, and MongoDB.
              Committed to ongoing learning and professional development for a
              well-rounded expertise in web development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
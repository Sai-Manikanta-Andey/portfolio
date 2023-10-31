import React from "react";
import "./Hero.css";


const Hero = () => {
  return (
    <section className="hero-wrapper " id="Home">
      
      <div className="profile-container innerWidth">
        <div className="paddings innerWidth profile-innerContainer ">
          {/* hero left side */}
          <div className="hero-left innerWidth">
            <div className="hero-title primaryText">
              <h1>
                Front-End Developer
              </h1>
            </div>
            <div className="hero-intro ">
              <p className="secondaryText">
                Hi, I'm Sai Manikanta Andey. A passionate react front-end
                developer.
              </p>
            </div>
            <div className="social-links">
              <a href="https://github.com/Sai-Manikanta-Andey" target="_blank">
                <img src="./github.png" alt="github" width={30} />
              </a>
              <a href="https://www.linkedin.com/in/sai-manikanta-andey/" target="_blank">
                <img src="./linkedin.png" alt="linkedin" width={30} />
              </a>
            </div>
            {/* tech stack beginning */}
            <div className=" innerWidth tech-stack">
              <div className="techstack-title ">
                <h4 className="innerWidth">
                  <span>Stack </span>
                  <span>|</span>
                </h4>
              </div>
              <div className="tech-stack-icons">
                <img src="./html-5.png" alt="html" width={30} />
                <img src="./css.png" alt="css" width={30} />
                <img src="./js.png" alt="js" width={30} />
                <img src="./react-js-icon.png" alt="react" width={30} />
                <img src="./python.png" alt="python" width={30} />
              </div>
            </div>
          </div>

          {/* hero right side */}
          <div className="hero-right innerWidth">
            <div className=" flexCenter image-container">
              <img src="./profile-pic.png" alt="profilepic" width={250} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

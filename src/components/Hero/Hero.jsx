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
              <h1>Fullstack Developer</h1>
            </div>
            <div className="hero-intro ">
              <p className="secondaryText">
                Hi, I'm Sai Manikanta Andey. A passionate fullstack developer.
              </p>
            </div>
            <div className="social-links">
              <a href="https://github.com/Sai-Manikanta-Andey" target="_blank">
                <img src="./github.svg" alt="github"  />
              </a>
              <a
                href="https://www.linkedin.com/in/sai-manikanta-andey/"
                target="_blank"
              >
                <img src="./linkedin.svg" alt="linkedin"  />
              </a>
              <a
                href="https://x.com/saiandey3?t=UCctt_4oLRBB1tvEUp4QpA&s=09"
                target="_blank"
              >
                <img src="./twitter.svg" alt="twitter"  />
              </a>
            </div>
            {/* tech stack beginning */}
            <div className="stack-container">
              <div className=" innerWidth tech-stack">
                <div className="techstack-title ">
                  <h4 className="innerWidth">
                    <span>Frontend:</span>
                  </h4>
                </div>
                <div className="tech-stack-icons">
                  <img src="./html.svg" alt="html"  />
                  <img src="./css.svg" alt="css"  />
                  <img src="./tailwind-css.svg" alt="tailwindcss"  />
                  <img src="./javascript.svg" alt="js"   />
                  <img src="./react.svg" alt="react"  />
                  <img src="./redux.svg" alt="python"  />
                </div>
              </div>
              <div className=" innerWidth tech-stack">
                <div className="techstack-title ">
                  <h4 className="innerWidth">
                    <span>Backend:</span>
                  </h4>
                </div>
                <div className="tech-stack-icons">
                  <img src="./nodejs.svg" alt="css"  />
                  <img src="./express.svg" alt="html"  />
                  <img src="./mongodb.svg" alt="tailwindcss"  />
                </div>
              </div>
              
            </div>
          </div>

          {/* hero right side */}
          <div className="hero-right innerWidth">
            <div className=" flexCenter image-container">
              <img src="./profile-pic.webp" alt="profilepic"  />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

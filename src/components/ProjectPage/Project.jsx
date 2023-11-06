import React from "react";
import "./Project.css";
import { FaGithub } from "react-icons/fa";
import {HiExternalLink} from "react-icons/hi"

const Project = () => {
  const projectData = [
    {
      id: 1,
      title: "Real-Estate Website ",
      image: "./realestate.png",

      projectDescription:
        "A simple responsive website developed using react js and css. An online platform where users can see different properties to buy and rent.  ",
      stack: [
        { id: 1, tech: "React" },
        { id: 2, tech: "CSS" },
      ],
      liveUrl: "https://realestateweb1.netlify.app",
      githubUrl:
        "https://github.com/Sai-Manikanta-Andey/RealEstateWebsite-using-react",
    },
    {
      id: 4,
      title: "Ecommerce Website ",
      image: "./Fakestore.png",

      projectDescription:
        "A Ecommerce website having a simple UI where users can find various products, and add to cart.It has shimmer UI for better user experience.  ",
      stack: [
        { id: 1, tech: "React" },
        { id: 2, tech: "CSS" },
      ],
      liveUrl: "https://fakestoretest.vercel.app/",
      githubUrl: "https://github.com/Sai-Manikanta-Andey/EcommerceFakeApi",
    },
    {
      id: 2,
      title: "Nike Store",
      image: "./nike1.png",
      projectDescription:
        "A simple Ecommerce store of Nike. A platform where users can buy exclusive nike special edition only sneakers.",
      stack: [
        { id: 1, tech: "JavaScript" },
        { id: 2, tech: "CSS" },
      ],
      liveUrl: "https://nikeee-sai.netlify.app/",
      githubUrl:
        "https://github.com/Sai-Manikanta-Andey/EcommerceWebsite_NikeSpecialSeason",
    },
    {
      id: 3,
      title: "Dice Game",
      image: "./dicegame.png",
      projectDescription:
        "A fun game where you can guess a number and roll the dice, on guessing correctly you'll get points and if you guess wrong , points will be deducted.",
      stack: [
        { id: 1, tech: "React" },
        { id: 2, tech: "CSS" },
      ],
      liveUrl: "https://tranquil-kitten-bca2cd.netlify.app/",
      githubUrl: "https://github.com/Sai-Manikanta-Andey/ReactDiceGameP3",
    },
  ];
  return (
    <section className="project-wrapper" id="Projects">
      <div className="paddings innerWidth project-container">
        <h2 className="Heading">PROJECTS</h2>
        {projectData.map((eachObj) => {
          return (
            <div className="innerContainer" key={eachObj.id}>
              <div className="project-image alignCenter">
                <img src={eachObj.image} alt={eachObj.title} width={350} />
              </div>
              <div className="project-details ">
                <div className="project-title">
                  <h4> {eachObj.title} </h4>
                </div>
                <div className="project-description secondaryText">
                  <p> {eachObj.projectDescription} </p>
                </div>
                <div className="stack ">
                  {eachObj.stack.map((eachItem) => {
                    return <div key={eachItem.id}>{eachItem.tech}</div>;
                  })}
                </div>
                <div className="innerWidth project-buttons">
                  <div className="githubButton">
                    <button>
                      {" "}
                      <a href={eachObj.githubUrl} target="_blank">
                        <div className="buttons-inside">
                          Github
                          <FaGithub />
                        </div>
                      </a>
                    </button>
                  </div>
                  <div className="liveButton">
                    <button>
                      {" "}
                      <a href={eachObj.liveUrl} target="_blank">
                        <div className="buttons-inside">
                          Preview
                          <HiExternalLink />
                        </div>
                      </a>{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Project;

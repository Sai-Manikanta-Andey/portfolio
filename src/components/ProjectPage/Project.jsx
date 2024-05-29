import React from "react";
import "./Project.css";
import { FaGithub } from "react-icons/fa";
import {HiExternalLink} from "react-icons/hi"
import { projectData } from "../../constants/ProjectData";

const Project = () => {
  
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
                <div className=" project-buttons">
                  <div className="githubButton">
                    <button >
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

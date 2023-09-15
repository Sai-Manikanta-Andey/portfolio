import React from "react";
import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
    const [OpenMenu,SetOpenMenu]=useState(false)
    const getStyle = (OpenMenu)=>{
        if(document.documentElement.clientWidth <768){
            return {right: !OpenMenu && -200  }
        }
    }
  return (
    <section className="h-wrapper">
      <header className="h-container innerWidth">
        <nav className="nav ">
          <div className="nav-logo">
            <h3 >Smk.dev</h3>
          </div>
          <OutsideClickHandler onOutsideClick={()=>SetOpenMenu(false)} >
            <ul className="nav-items " style={getStyle(OpenMenu)}>
              <li>
                <a href="#Home">Home</a>
              </li>
              <li>
                <a href="#About">About</a>
              </li>
              <li>
                <a href="#Projects">Projects</a>
              </li>
              <li>
                <a href="#Contact">Contact</a>
              </li>
            </ul>
            <div className="menu-icon">
              <GiHamburgerMenu onClick={() => SetOpenMenu((prev) => !prev)} />
            </div>
          </OutsideClickHandler>
        </nav>
      </header>
    </section>
  );
};

export default Header;

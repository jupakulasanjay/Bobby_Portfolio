import { useRef } from "react";
import { CgCPlusPlus, CgCode } from "react-icons/cg";
import {
  DiCode,
  DiPython,
  DiJava,
  DiJavascript1,
  DiReact,
  DiGit,
} from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { TiBrush } from "react-icons/ti";

const Skillset = () => {
  const skillRef = useRef(null);

  return (
    <div
      ref={skillRef}
      className="d-flex flex-column align-items-center mb-2 parent-container"
    >
      <div className="ms-3 mb-2 section-label">Skillset</div>

      <div className="d-flex flex-row">
        <div className="d-flex responsive-icon-container">
          <div className="skills-icon">
            <CgCPlusPlus />
            <span className="icon-text">{"C++"}</span>
          </div>
          <div className="skills-icon">
            <CgCode />
            <span className="icon-text">{"C"}</span>
          </div>
        </div>

        <div className="d-flex responsive-icon-container">
          <div className="skills-icon">
            <DiJava />
            <span className="icon-text">{"Java"}</span>
          </div>
          <div className="skills-icon">
            <DiJavascript1 />
            <span className="icon-text">{"JavaScript"}</span>
          </div>
        </div>

        <div className="d-flex responsive-icon-container">
          <div className="skills-icon">
            <DiPython />
            <span className="icon-text">{"Python"}</span>
          </div>
        </div>
      </div>

      <div className="d-flex flex-row">
        <div className="d-flex responsive-icon-container">
          <div className="skills-icon">
            <DiReact />
            <span className="icon-text">{"React.Js"}</span>
          </div>
          <div className="skills-icon">
            <SiMysql />
            <span className="icon-text">{"SQL"}</span>
          </div>
        </div>

        <div className="d-flex responsive-icon-container">
          <div className="skills-icon">
            <DiCode />
            <span className="icon-text">{"DSA"}</span>
          </div>
          <div className="skills-icon">
            <TiBrush />
            <span className="icon-text">{"Designing"}</span>
          </div>
        </div>

        <div className="d-flex responsive-icon-container">
          <div className="skills-icon">
            <DiGit />
            <span className="icon-text">{"Git"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skillset;

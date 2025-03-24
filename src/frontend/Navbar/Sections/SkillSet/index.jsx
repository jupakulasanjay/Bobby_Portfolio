import { useRef } from "react";
import { DiGit } from "react-icons/di";
import { FaAws, FaDocker, FaJenkins } from "react-icons/fa";
import {
  SiGooglecloud,
  SiTerraform,
  SiKubernetes,
  SiAnsible,
  SiCisco,
  SiRedhat,
} from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc"; // ✅ Using VscAzureDevops
import { MdNetworkCheck } from "react-icons/md";

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
            <MdNetworkCheck />
            <span className="icon-text">Networking</span>
          </div>
          <div className="skills-icon">
            <SiRedhat />
            <span className="icon-text">Redhat Linux</span>
          </div>
        </div>

        <div className="d-flex responsive-icon-container">
          <div className="skills-icon">
            <FaAws />
            <span className="icon-text">AWS Cloud</span>
          </div>
          <div className="skills-icon">
            <VscAzureDevops />
            <span className="icon-text">Azure Cloud</span>
          </div>
        </div>

        <div className="d-flex responsive-icon-container">
          <div className="skills-icon">
            <SiGooglecloud />
            <span className="icon-text">Google Cloud</span>
          </div>
          <div className="skills-icon">
            <SiCisco />
            <span className="icon-text">CCNA</span>
          </div>
        </div>
      </div>

      <div className="d-flex flex-row">
        <div className="d-flex responsive-icon-container">
          <div className="skills-icon">
            <DiGit />
            <span className="icon-text">Git</span>
          </div>
          <div className="skills-icon">
            <FaJenkins />
            <span className="icon-text">Jenkins</span>
          </div>
        </div>

        <div className="d-flex responsive-icon-container">
          <div className="skills-icon">
            <FaDocker />
            <span className="icon-text">Docker</span>
          </div>
          <div className="skills-icon">
            <SiTerraform />
            <span className="icon-text">Terraform</span>
          </div>
        </div>

        <div className="d-flex responsive-icon-container">
          <div className="skills-icon">
            <SiKubernetes />
            <span className="icon-text">Kubernetes</span>
          </div>
          <div className="skills-icon">
            <SiAnsible />
            <span className="icon-text">Ansible</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skillset;

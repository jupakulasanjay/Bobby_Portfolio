import { useRef } from "react";

const About = () => {
  const aboutRef = useRef(null);
  return (
    <div ref={aboutRef} className="d-flex flex-column align-items-center ">
      <img src="/images/aboutme1.png" alt="" className="about-me" />
      <div className="about-me-intro">
        I am a passionate Cloud & DevOps Engineer and Trainer who believes that
        building scalable infrastructure is like orchestrating a symphony—it
        requires precision, automation, and a deep understanding of every note.
        At work, I design and optimize cloud solutions, automate deployments,
        and ensure seamless operations with AWS, Kubernetes, and Terraform.
        Alongside my engineering role, I also train students, having mentored
        70+ batches, sharing my expertise in CI/CD, Infrastructure as Code, and
        cloud security—because tech mastery is meant to be passed on.
      </div>
    </div>
  );
};

export default About;

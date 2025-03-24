import { useRef } from "react";

const About = () => {
  const aboutRef = useRef(null);
  return (
    <div ref={aboutRef} className="d-flex flex-column align-items-center ">
      <img src="/images/aboutme1.png" alt="" className="about-me" />
      <div className="about-me-intro">
        I am a passionate coder who believes that writing clean code is like
        brewing a perfect cup of coffee, it takes time, care, and just the right
        amount of skill. By day, I’m a Frontend Developer, crafting seamless
        user interfaces with React and making sure things just work. By night, I
        dive into C++, JavaScript, and Python, because, you know, a real coder
        never sleeps.
      </div>
    </div>
  );
};

export default About;

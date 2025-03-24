import React, { useState, useEffect, useRef } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";
import { NAVBAR_ID } from "../constants";
import Home from "./Sections/Home";
import Experience from "./Sections/Experience";
import Resume from "./Sections/Resume";
import Contact from "./Sections/Contact";
import About from "./Sections/About";
import Skillset from "./Sections/SkillSet";

const NavBarTile = () => {
  const [expanded, setExpanded] = useState(false);
  const navbarRef = useRef(null);

  const closeNavbar = () => setExpanded(false);

  // Handle click outside of navbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        closeNavbar();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Navbar
        ref={navbarRef}
        className="navbar w-auto h-auto"
        expand="lg"
        expanded={expanded}
      >
        <Container className="me-0">
          <Navbar.Toggle
            aria-controls="navbar-nav"
            className="border-0 d-lg-none custom-toggler nav-button"
            onClick={() => setExpanded(!expanded)}
          />

          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto nav-container">
              <Nav.Item className="mx-5 my-3">
                <ScrollLink
                  to={NAVBAR_ID.HOME}
                  smooth={true}
                  duration={300}
                  className="text-white"
                  onClick={closeNavbar}
                >
                  Home
                </ScrollLink>
              </Nav.Item>

              <Nav.Item className="mx-5 my-3">
                <ScrollLink
                  to={NAVBAR_ID.ABOUT}
                  smooth={true}
                  duration={300}
                  className="text-white"
                  onClick={closeNavbar}
                >
                  About
                </ScrollLink>
              </Nav.Item>

              <Nav.Item className="mx-5 my-3">
                <ScrollLink
                  to={NAVBAR_ID.SKILLS}
                  smooth={true}
                  duration={300}
                  className="text-white"
                  onClick={closeNavbar}
                >
                  Skills
                </ScrollLink>
              </Nav.Item>

              <Nav.Item className="mx-5 my-3">
                <ScrollLink
                  to={NAVBAR_ID.EXPERIENCE}
                  smooth={true}
                  duration={300}
                  className="text-white"
                  onClick={closeNavbar}
                >
                  Experience
                </ScrollLink>
              </Nav.Item>

              <Nav.Item className="mx-5 my-3">
                <ScrollLink
                  to={NAVBAR_ID.RESUME}
                  smooth={true}
                  duration={300}
                  className="text-white"
                  onClick={closeNavbar}
                >
                  Resume
                </ScrollLink>
              </Nav.Item>

              <Nav.Item className="mx-5 my-3">
                <ScrollLink
                  to={NAVBAR_ID.CONTACT}
                  smooth={true}
                  duration={300}
                  className="text-white"
                  onClick={closeNavbar}
                >
                  Contact
                </ScrollLink>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="home-screen">
        <div id={NAVBAR_ID.HOME}>
          <Home />
        </div>
        <div id={NAVBAR_ID.ABOUT}>
          <About />
        </div>
        <div id={NAVBAR_ID.SKILLS}>
          <Skillset />
        </div>
        <div id={NAVBAR_ID.EXPERIENCE}>
          <Experience />
        </div>
        <div id={NAVBAR_ID.RESUME}>
          <Resume />
        </div>
        <div id={NAVBAR_ID.CONTACT}>
          <Contact />
        </div>
      </div>
    </>
  );
};

export default NavBarTile;

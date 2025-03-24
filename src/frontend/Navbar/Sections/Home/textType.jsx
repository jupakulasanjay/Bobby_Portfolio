import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

const StyledTypewriter = styled.div`
  font-family: 'Rammetto One', cursive;
  font-weight: 400;
  font-size: 35px;
  color: #dd88dd;

  @media (max-width: 991px) {
    font-size: 12px;
  }
`;

const Type = () => {
  return (
    <StyledTypewriter>
      <Typewriter
        options={{
          strings: ["Software Developer - FrontEnd", "Freelancer"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </StyledTypewriter>
  );
};

export default Type;

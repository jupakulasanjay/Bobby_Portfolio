import styled from "styled-components";
import Type from "./textType";

const NameGreeting = styled.div`
  font-family: "Concert One", "Latin";
  font-weight: 400;
  margin-bottom: 10px;
  font-size: 50px;

  @media (max-width: 991px) {
    margin-bottom: 0px !important;
    font-size: 16px;
  }
`;

const Home = () => {
  return (
    <div className="home-hi d-flex">
      <div>
        <img src="/images/homeImage1.png" alt="" className="home-image" />
      </div>
      <div className="d-flex flex-column justify-content-center ms-5 p-5 responsive-title">
        <NameGreeting>
          <p className="mb-0">Hi there! </p>
          <p>I'm Sanjay Jupakula</p>
        </NameGreeting>
        <Type />
      </div>
    </div>
  );
};

export default Home;

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@1,500&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Concert+One&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@400&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Amaranth:wght@400&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Rammetto+One&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Aclonica&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap');

  body {
    background-image: url('/images/background.jpg');
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat;
    background-attachment: fixed;  
    height: 100vh;
  }

  .nav-button {
    background: white;
  }

  .navbar {
    .nav-container {
      display: flex !important;
      justify-content: flex-end;
      align-items: center;
      font-size: 25px;

      @media (max-width: 991px) {
        position: absolute;  
        background: black;
        border-radius: 20px;
        box-shadow: 0px 5px 15px rgba(255, 255, 255, 0.4)        
      }
    }

    .nav-item {
      position: relative;
      font-family: 'Aclonica', sans-serif;
      @media (max-width: 991px) {
        margin: 5px !important;
        font-size: 15px;
        margin-left: 30px !important;
        margin-right: 30px !important;
      }  
    }

    .nav-item .text-white {
      text-decoration: none;
      color: white;
      position: relative;
      display: inline-block;
    }

    .nav-item .text-white::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;  
      color: #e5e5e5;
      transition: width 0.3s ease;
    }

    .nav-item .text-white:hover::after {
      width: 100%;  
    }
  }

  .section-label {
    font-size: 40px;
    font-family: fantasy;
    color: white; 

    @media (max-width: 991px) {
      font-size: 30px;
    }
  }

  .parent-container {
    margin-bottom: 120px !important;

    @media (max-width: 991px) {
      margin-top: 0px;
      margin-bottom: 65px !important;
    }
  }

  .gap-space {
    gap: 100px;
  }

  // ------- Homepage styles

  .home-image {
    width: 500px;
    height: 500px;

    @media (max-width: 991px) {
      width: 125px;
      height: 125px;
      margin-left: 0px;
    }
  }

  .home-hi {
    font-size: 50px;
    font-weight: bold;
    color: #2098ae;
    margin: 150px 0px 150px 150px;
    margin-bottom: 100px;

    @media (max-width: 991px) {
      margin: 20px;
      font-size: 15px;
      margin-top: 55px;
    }
  }

  .responsive-title {
    @media (max-width: 991px) {
      padding: 0px !important;
      margin-left: 25px !important;
    }
  }

  // ------- about styles

  .about-me {
    width: 200px;
    margin-bottom: 50px;

    @media (max-width: 991px) {
      width: 100px;
      margin-top: 50px;
      margin-bottom: 10px;
    }
  }

  .about-me-intro {
    font-size: 40px;
    color: #aab2b3;
    margin: 150px;
    margin-top: 100px;
    font-family: cursive;
    word-spacing: 15px;
    font-family: "Exo 2", sans-serif;
    font-style: italic;
    font-weight: 500;
    text-align: center;
    margin-top: 20px;
    color: #daf5f2;

    @media (max-width: 991px) {
      margin: 25px;
      font-size: 15px;
      word-spacing: 5px ;
      width: 350px;
      padding: 10px 25px;
      margin-bottom: 70px;;
    }
  }

  // -------- Skills styles

  .skills-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid;
    padding: 20px;
    font-size: 100px;
    margin: 20px;
    height: 150px;
    width: 200px;
    border-radius: 20px;
    opacity: 0.93 !important;
    color: #e5e5c5;
    justify-content: center;

    @media (max-width: 991px) {
      font-size: 30px;
      height: 50px;
      width: 70px;
      padding: 0px;
    }
  }

  .responsive-icon-container {
    @media (max-width: 991px) {
      display: flex;
      flex-direction: column;
    }
  }
  
  .icon-text {
    display: none;
    font-size: 20px;
    font-family: "Concert One", "Latin";

    @media (max-width: 991px) {
      font-size: 10px;
    }
  }

  .skills-icon:hover  {
    font-size: 80px !important;
    background-color: #b0b192;
    color: black;
    box-shadow: 0 6px 12px rgb(189 181 181 / 68%);
    transform: translateY(-5px);

    .icon-text {
      display: block;
    }
  }

  // -------- Experience styles

  .experience-box-container {
    margin-top: 75px !important;
    @media (max-width: 991px) {
      flex-direction: column;
      gap: 30px;
      margin-top: 50px !important;
    }
  }

  .experience-image {
    width: 100 !important;

    @media (max-width: 991px) {
      width: 30px !important;
    }
  }

  .experience-box {
    display: flex;
    flex-direction: column;
    border: 2px solid white;
    align-items: center;
    justify-content: flex-start;
    height: 500px;
    width: 350px;
    border-radius: 50px;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    white-space: normal;
    z-index: 888;
    box-shadow: 12px 12px 5px rgb(249 249 249 / 30%);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    position: relative;

    @media (max-width: 991px) {
      width: 250px;
      height: 350px;
      box-shadow: 6px 6px 2px rgb(249 249 249 / 30%);
    }
}

.experience-box:hover {
    transform: scale(1.1);
    z-index: 999;
    box-shadow: 0px 15px 25px rgba(255, 255, 255, 0.4);
    background-color: rgba(0, 0, 0, 0.95);
    height: auto;
    max-height: none;
    padding: 20px;
}

  .experience-heading {
    background: #62e5f5d1;
    height: 50px !important;
    padding: 15px;
    width: 100%;
    align-content: center;
    text-align: center;
    font-family: 'Fugaz One', sans-serif;

    @media (max-width: 991px) {
      padding: 10px;
      height: 30px;
      font-size: 12px;
    }
  }

  .experience-body {
    padding: 20px;
    color: #daf5f2;
    font-family: "Amaranth", sans-serif;
    letter-spacing: 1px;
    word-spacing: 5px;
    line-height: 25px;

    @media (max-width: 991px) {
      padding: 5px;
      height: auto;
      font-size: 15px;
    }
  }

  .experience-body:hover {
    height: auto;
  }

  //---------------------- Resume

  .resume-container {
    margin-top: 150px;
  }
  
  .resume-heading {
    color: white;
    font-family: fantasy;
    font-size: 50px;

    @media (max-width: 991px) {
      font-size: 25px;
    }
  }

  .resume-button {
    height: 50px;
    width: 200px;
    border-radius: 32px;
    margin-top: 20px;
    font-family: 'Fugaz One', sans-serif;
    background: transparent;
    border: 2px solid #a8f6ff;
    color: #a8f6ff;
    box-shadow: 1px 0px 15px rgba(255, 255, 255, 50.4);
  }

  //----------------------- contact

  .contact-container {
    margin-top: 100px;
    padding-bottom: 100px;

    @media (max-width: 991px) {
      flex-direction: column;
      gap: 10px !important;
    }
  }

  .contact-icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
  }

  .contact-icon-link {
    color: white;
    font-size: 30px;
    transition: transform 0.2s ease-in-out, color 0.2s ease-in-out;
    text-decoration: none;

    @media (max-width: 991px) {
      font-size: 20px;
    }
  }

  .contact-icon-link:hover {
    transform: scale(1.1);
    color: #a8f6ff
  }
`;

export default GlobalStyles;

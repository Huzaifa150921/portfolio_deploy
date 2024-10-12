import React from "react";
import Typewriter from "typewriter-effect";
import "./home.css";
import Fade from "react-reveal/Fade";

const Home = () => {
 
  return (
    <>
      <div className="container-fluid home-container" id="home">
        
        <div className="container home-content">
          <Fade right>
            <h2>Hi 👋 I'm a</h2>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "FullStack Developer!",
                    "Frontend Developer!",
                    "Backend Developer!",

                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Fade>
          <Fade bottom>
            <div className="home-buttons">
              <a
                className="btn btn-hire"
                href="https://api.whatsapp.com/send?phone=923123679363"
                rel="noreferrer"
                target="_blank"
              >
                Hire Me
              </a>
              <a className="btn btn-cv" href="https://drive.google.com/file/d/1a9-yecFwaATWLIUTiZXCgvQN22Os94xh/view?usp=drive_link"   target="_blank"
  rel="noreferrer"
>
                My Resume
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;

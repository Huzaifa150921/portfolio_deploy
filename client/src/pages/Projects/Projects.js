import React from "react";
import "./Projects.css";
import Fade from "react-reveal/Fade";
import blog_app from "../../assets/images/blog-app.png"
import iNotebook from "../../assets/images/iNotebook.png"
import netflix from "../../assets/images/netflix-clone.png"
import payroll from "../../assets/images/payroll-system.png"
import movingcar from "../../assets/images/moving-car.png"
import food from "../../assets/images/basic-landing-page-1.png"
import slider from "../../assets/images/sidebar-navigation.png" 
import reactlanding from "../../assets/images/react-landing-page.png"
import age from "../../assets/images/age-calculator.png"
import basic_calculator from "../../assets/images/basic-calculator.png"
import basic_clock from "../../assets/images/basic-clock.png"
import book from "../../assets/images/book-library.png"
import simon from "../../assets/images/simon-game.png"
import tic_tac_toe from "../../assets/images/tic-tac-toe.png"
import music from "../../assets/images/music-player.png"
import pass from "../../assets/images/password-generator.png"
import hospital from "../../assets/images/hospital-manegement-system.png"
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <Fade top>
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          PROJECTS
        </h2>
        </Fade>
        <Fade right>
        <hr />
        </Fade>
        <Fade bottom>
        <p className="pb-3 text-center ">
        A Comprehensive Display of My Development Projects, Each Exemplifying My Technical Skills and Ability to Deliver Meaningful Digital Experiences
        </p>
        </Fade>
        {/* card design */}
        <div className="row" id="ads">
          <Fade bottom>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img
                    src={blog_app}
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase text">
                      Blog Web App
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/Huzaifa150921/Blog-app.git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img
                    src={iNotebook}
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Express</span>

                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Mongodb</span>
                  <span className="card-detail-badge mt-2">Material UI</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase text">Notes Keeper</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/Huzaifa150921/iNotebook.git"  target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img
                    src={netflix}
                    alt="project3"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">HTML5</span>
                  <span className="card-detail-badge">CSS3</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase text">Netflix Clone</h5>
                  </div>
                  <a className="ad-btn" href="https://github.com/Huzaifa150921/Netflix-Clone.git" target="_blank"
                    rel="noopener noreferrer">
                    View
                  </a>
                </div>
              </div>
            </div>
          </Fade>
          <Fade left>
          <div className="col-md-4 mt-5">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img
                    src={payroll}
                    alt="project4"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Html5</span>

                  <span className="card-detail-badge">CSS3</span>
                  <span className="card-detail-badge">javaScript</span>
                  <span className="card-detail-badge">PHP</span>
                  <span className="card-detail-badge mt-2">MySQL</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase text">Payroll Management System</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/Huzaifa150921/Payroll_Manegement_System.git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>


          <div className="col-md-4 mt-5">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img
                    src={movingcar}
                    alt="project5"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Html5</span>

                  <span className="card-detail-badge">CSS3</span>
                  <span className="card-detail-badge">javaScript</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase text">Moving Car Animation</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/Huzaifa150921/Moving-Car.git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>


          <div className="col-md-4 mt-5">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img
                    src={slider}
                    alt="project6"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Html5</span>

                  <span className="card-detail-badge">CSS3</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase text">Slider Navigation</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/Huzaifa150921/Slider-Navigation.git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            </Fade>

            <Fade right>
          <div className="col-md-4 mt-5">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img
                    src={food}
                    alt="project7"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Html5</span>

                  <span className="card-detail-badge">CSS3</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase text">Food Delivery App</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/Huzaifa150921/Basic-Landing-Page-1.git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>


            <div className="col-md-4 mt-5">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img
                    src={reactlanding}
                    alt="project8"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React</span>

                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase text">Landing Page</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/Huzaifa150921/React-Landing-Page.git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>


            <div className="col-md-4 mt-5">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img
                    src={basic_calculator}
                    alt="project9"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">HTML5</span>
                  <span className="card-detail-badge">CSS3</span>
                  <span className="card-detail-badge">javaScript</span>

                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase text">Calculator App</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/Huzaifa150921/Basic-Calculator.git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>

            </Fade>
            <Fade up>
            <div className="col-md-4 mt-5">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img
                    src={music}
                    alt="project10"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React</span>

                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase text">Music Player App</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/Huzaifa150921/Music-Player-App.git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>


            <div className="col-md-4 mt-5">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img
                    src={age}
                    alt="project11"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">HTML5</span>
                  <span className="card-detail-badge">CSS3</span>
                  <span className="card-detail-badge">javaScript</span>

                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase text">Age Calculator</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/Huzaifa150921/Age-Calculator.git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>


            <div className="col-md-4 mt-5">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img
                    src={basic_clock}
                    alt="project12"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">HTML5</span>
                  <span className="card-detail-badge">CSS3</span>
                  <span className="card-detail-badge">javaScript</span>

                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase text">Analog Clock</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/Huzaifa150921/Basic-Clock.git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            </Fade>


            <Fade left>
            <div className="col-md-4 mt-5">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img
                    src={hospital}
                    alt="project13"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Java</span>
                  <span className="card-detail-badge">DSA</span>
                  <span className="card-detail-badge">OOP</span>
                  
               

                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase text">Hospital Management System</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/Huzaifa150921/Hospital-Management-System.git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>



            <div className="col-md-4 mt-5">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img
                    src={pass}
                    alt="project14"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React</span>
  

                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase text">Password Generator</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/Huzaifa150921/Password-Generator.git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>


            <div className="col-md-4 mt-5">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img
                    src={book}
                    alt="project15"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">Mongodb</span>
                  <span className="card-detail-badge mt-2">Material UI</span>
  

                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase text">Book Library</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/Huzaifa150921/Book-Library.git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            </Fade>
            
            <Fade right>
            <div className="col-md-4 mt-5">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img
                    src={simon}
                    alt="project16"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">HTML5</span>
                  <span className="card-detail-badge">CSS3</span>
                  <span className="card-detail-badge">javaScript</span>
                  
               

                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase text">Simon Game</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/Huzaifa150921/Simon-game.git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>



            <div className="col-md-4 mt-5">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img
                    src={tic_tac_toe}
                    alt="project17"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Html5</span>
                  <span className="card-detail-badge">CSS3</span>
                  <span className="card-detail-badge">javaScript</span>
  

                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase text">Tic Tac Toe</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/Huzaifa150921/Tic-Tac-Toe.git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>


           
            </Fade>


        </div>
      </div>
    </>
  );
};

export default Projects;

import React from "react";
import "./About.css";
import Fade from "react-reveal/Fade";
import profile_pic from "../../assets/images/profile_pic.jpg"
const About = () => {
  return (
    <>
      <Fade top>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1 className="cssanimation hu__hu__ sequence">About me</h1>
              <p>
             I’m Huzaifa, a Computer Science student and web developer from Gujranwala, Punjab, Pakistan. I specialize in both front-end and back-end development, creating responsive websites using HTML, Tailwind CSS, and React.js. Passionate about continuous learning and problem-solving, I enjoy tackling complex challenges, especially through competitive programming in Java and python. I'm eager to connect and collaborate with others in the tech field!
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default About;

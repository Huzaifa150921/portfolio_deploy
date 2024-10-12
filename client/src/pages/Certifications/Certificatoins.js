import React from "react";
import { PiCertificateFill } from "react-icons/pi";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Certifications.css";
import Fade from "react-reveal/Fade";

const Certifications = () => {
  return (
    <>
      <div className="education" id="certification">
        <Fade>
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase" >
            Certifications
          </h2>
          <hr />
        </Fade>
        <VerticalTimeline lineColor="#138781">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgba(50, 50, 50, 0.9)", color: "white" }} // Dark background for the element
            contentArrowStyle={{ borderRight: "7px solid rgba(50, 50, 50, 0.9)" }} // Adjust arrow color to match dark theme
            date="Apr 2024"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<PiCertificateFill style={{cursor:"pointer"}} onClick={()=>window.open("https://www.coursera.org/account/accomplishments/records/Z9XF29E4ZJ5X")} title="View Certificate"/>}
          >
            <h3 className="vertical-timeline-element-title">
            Introduction to HTML, CSS, & JavaScript</h3>
            <h4 className="vertical-timeline-element-subtitle mt-4">
              IBM
            </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgba(50, 50, 50, 0.9)", color: "white" }}
            contentArrowStyle={{ borderRight: "7px solid rgba(50, 50, 50, 0.9)" }}
            date="Apr 2024"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<PiCertificateFill style={{cursor:'pointer'}} onClick={()=>window.open("https://www.coursera.org/account/accomplishments/records/VR92HRB4YMU4")} title="View Certificate"/>}
          >
            <h3 className="vertical-timeline-element-title">
            Git for Developers Using Github</h3>
            <h4 className="vertical-timeline-element-subtitle mt-4">
Coursera Project Network
            </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgba(50, 50, 50, 0.9)", color: "white" }}
            contentArrowStyle={{ borderRight: "7px solid rgba(50, 50, 50, 0.9)" }}
            date="Aug 2024"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<PiCertificateFill style={{cursor:'pointer'}} onClick={()=>window.open("https://www.coursera.org/account/accomplishments/verify/ECAQO2LY1NHW?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course")} title='View Certificate'/>}
          >
            <h3 className="vertical-timeline-element-title">React Basics</h3>
            <h4 className="vertical-timeline-element-subtitle mt-4">
              Meta
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgba(50, 50, 50, 0.9)", color: "white" }}
            contentArrowStyle={{ borderRight: "7px solid rgba(50, 50, 50, 0.9)" }}
            date="Aug 2024"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<PiCertificateFill style={{cursor:'pointer'}} onClick={()=>window.open("https://www.coursera.org/account/accomplishments/verify/GG3CEK7R25KP")} title="View Certificate"/>}
          >
            <h3 className="vertical-timeline-element-title">Developing Back-End Apps with Node.js and Express</h3>
            <h4 className="vertical-timeline-element-subtitle mt-4">
             IBM
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Certifications;

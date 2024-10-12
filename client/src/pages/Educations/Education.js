import React from "react";
import { MdSchool } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";
import Fade from "react-reveal/Fade";

const Education = () => {
  return (
    <>
      <div className="education" id="education">
        <Fade>
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Education Details
          </h2>
          <hr />
        </Fade>
        <VerticalTimeline lineColor="#138781">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgba(50, 50, 50, 0.9)", color: "white" }} // Dark background for the element
            contentArrowStyle={{ borderRight: "7px solid rgba(50, 50, 50, 0.9)" }} // Adjust arrow color to match dark theme
            date="2017 - 2019"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">Matric</h3>
            <h4 className="vertical-timeline-element-subtitle mt-4">
              Allied School
            </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgba(50, 50, 50, 0.9)", color: "white" }}
            contentArrowStyle={{ borderRight: "7px solid rgba(50, 50, 50, 0.9)" }}
            date="2019 - 2021"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">FSC (Pre-Engineering)</h3>
            <h4 className="vertical-timeline-element-subtitle mt-4">
              Punjab Collage
            </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgba(50, 50, 50, 0.9)", color: "white" }}
            contentArrowStyle={{ borderRight: "7px solid rgba(50, 50, 50, 0.9)" }}
            date="2021 - present"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">BS (Computer Science)</h3>
            <h4 className="vertical-timeline-element-subtitle mt-4">
              GIFT University
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;

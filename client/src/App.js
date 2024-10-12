import React, { useState, useEffect } from "react";
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Educations/Education";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/Techstack/Techstack";
import WorkExp from "./pages/workExp/WorkExp";
import ScrollToTop from "react-scroll-to-top";
import MobileNav from "./components/MobileNav/MobileNav";
import BackgroundDark from "./components/UI/background/Dark";
import Certifications from "./pages/Certifications/Certificatoins";
import Zoom from "react-reveal/Zoom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cursor from './components/Cursor/Cursor';
import MainLoader from "./components/MainLoader/MainLoader";

function App() {
  const [loading, setLoading] = useState(true);

  // Simulate loading (e.g., fetch data)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after a delay
    }, 3000); // Adjust the duration as needed for testing

    return () => clearTimeout(timer); // Cleanup
  }, []);



  return (
    <>
     
      {loading ? (
        <MainLoader /> // Show the main loader while loading
      ) : (
        <div>
           <Cursor />
           <BackgroundDark />
          <ToastContainer />
          <MobileNav />
          <Layout />
          <div className="container">
            <About />
            <Education />
            <Certifications />
            <Techstack />
            <Projects />
            <Contact />
          </div>

          <div className="footer pb-3 color-change-5x">
            <Zoom bottom>
              <h4 className="footer-center">&copy; Huzaifa Ahmad All Rights Reserved</h4>
            </Zoom>
          </div>
        </div>
      )}

      <ScrollToTop
        smooth
        color="#138781"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
        className="slide-in-top"
      />
    </>
  );
}

export default App;

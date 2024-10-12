import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import "./Contact.css";
import Rotate from "react-reveal/Rotate";
import LightSpeed from "react-reveal/LightSpeed";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import Loader from "../../components/Loader/Loader"; // Import Loader

const Contact = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false); // Loading state

  // Handle submit button
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !msg) {
        toast.error("Please provide all fields");
        return; // Prevent further execution if fields are empty
      }

      setLoading(true); // Start loading

      // Simulate API call delay for testing (2 seconds)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/v1/portfolio/sendEmail`, {
        name,
        email,
        msg,
      });

      // Validation success
      if (res.data.success) {
        toast.success(res.data.message);
        setname("");
        setEmail("");
        setMsg("");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Please try again."); // Optional error handling
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <div className="contact" id="contact">
      {loading ? ( // Show Loader if loading
        <Loader />
      ) : (
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <LightSpeed>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9CMXR_Y2X7ZIlU1tF5Hy-fpRpEA0HbQg5wJShzZ4XbEo4WEyAN14xxHq8ZZMwHSNTJt8&usqp=CAU"
                      alt="contact"
                      className="image"
                    />
                  </LightSpeed>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <Rotate>
                <div className="card2 d-flex card border-0 px-4 py-5">
                  <div className="row">
                    <div className="row">
                      <h6>
                        Contact With
                        <BsLinkedin color="blue" size={30} className="ms-2" style={{ cursor: 'pointer' }} onClick={() => window.open("https://www.linkedin.com/in/huzaifakhan123", "_blank")} />
                        <BsGithub color="black" size={30} className="ms-2" style={{ cursor: 'pointer' }} onClick={() => window.open("https://github.com/Huzaifa150921", "_blank")} />
                        <BsFacebook color="blue" size={30} className="ms-2" style={{ cursor: 'pointer' }} onClick={()=>window.open("https://www.facebook.com/profile.php?id=100080510174727&mibextid=ZbWKwL")}/>
                      </h6>
                    </div>

                    <div className="row px-3 mb-4">
                      <div className="line" />
                      <small className="or text-center">OR</small>
                      <div className="line" />
                    </div>
                    <div className="row px-3">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your Name"
                        className="mb-3"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email Address"
                        className="mb-3"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <textarea
                        type="text"
                        name="msg"
                        placeholder="Write your message"
                        className="mb-3"
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <button className="button" onClick={handleSubmit}>
                        SEND MESSAGE
                      </button>
                    </div>
                  </div>
                </div>
              </Rotate>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;

import React, { useState } from "react";
import Home from "../../pages/Home/Home";
// import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import Toggler from "../toggler/Toggler";
import "./Layout.css";
import Menus from "../Menus/Menus";

const Layout = () => {
  const [toggle, setToggle] = useState(true);

  //change toggle
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="sidebar-section bg-pan-top">
        <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
          <div className="sidebar-toggle-icons">
          <Toggler onToggle={handleToggle} ischecked={toggle}/>
          </div>
          <Menus toggle={toggle} />
        </div>
        <div className="container">
          <Home />
        </div>
      </div>
    </>
  );
};

export default Layout;

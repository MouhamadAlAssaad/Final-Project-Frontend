import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import { motion } from "framer-motion";
import { SidebarData } from "./data";
import { Navigate, NavLink } from "react-router-dom";
import "./sidebar.css";
import { useLocation } from "react-router-dom";
import logo from "../images/logo.svg";

const Sidebar = ({ userData }) => {
  const [selected, setSelected] = useState();
  const [expanded, setExpanded] = useState(false);
  const [loggedOut, setLoggedOut] = useState(false);

  const location = useLocation().pathname;
  if (location === "/" || location === "/login" || location === "/home")
    return null;

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
      display: "none",
    },
  };

  const handleLogout = (e) => {
    e.preventDefault();

    setLoggedOut(true);
  };

  return (
    <>
      <div className="side-comp">
        {loggedOut && <Navigate to="/" replace={true} />}
        <div
          className="side-comp__bars"
          style={expanded ? { left: "65%" } : { left: "5%" }}
          onClick={() => setExpanded(!expanded)}
        >
          <MenuIcon />
        </div>
        <motion.div
          className="side-comp__sidebar"
          variants={sidebarVariants}
          animate={window.innerWidth <= 800 ? `${expanded}` : ""}
        >
          <div className="sidebar-logo">
            <img src={logo} width="100%" height="100%" />
          </div>
        
          <div className="side-comp__menu">
            {SidebarData.map((item, index) => {
              return (
                <NavLink
                  to={item.path}
                  className={
                    selected === index ? "menuItem active" : "menuItem"
                  }
                  key={index}
                  onClick={() => setSelected(index)}
                >
                  <item.icon />
                  <span>{item.heading}</span>
                </NavLink>
              );
            })}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Sidebar;

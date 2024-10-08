import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./SideMenu.module.scss";
import Button from "react-bootstrap/Button";

const onResumeClick = () => {
  window.open("/certificates/CV_Alishov.pdf", "_blank", "noopener,noreferrer");
};

const RightNav = ({ menuOpen }) => {
  return (
    <ul className={menuOpen ? classes.sideMenu_open : classes.burger_sideMenu}>
      <li>
        <li>
          {" "}
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/skills">Skills</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/certificates">Certificates</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li classes={classes.resume_button}>
          <NavLink>
            <Button variant="light" onClick={onResumeClick}>
              Resume
            </Button>
          </NavLink>
        </li>
      </li>
    </ul>
  );
};

export default RightNav;

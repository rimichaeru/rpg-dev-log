import React from "react";
import styles from "./Nav.module.scss";
import { BsCircleFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className={styles.container}>
      <h2>RNG RPG v0.5.5</h2>
      <div className={styles.links}>
        <NavLink
          to="/devlog"
          activeClassName={styles.active}
          className={styles.navLink}
        >
          DEV LOG
        </NavLink>
        <BsCircleFill className="red" size={14} />
        <NavLink
          to="/vision"
          activeClassName={styles.active}
          className={styles.navLink}
        >
          VISION
        </NavLink>
        <BsCircleFill className="red" size={14} />
        <NavLink
          to="/team"
          activeClassName={styles.active}
          className={styles.navLink}
        >
          TEAM
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;

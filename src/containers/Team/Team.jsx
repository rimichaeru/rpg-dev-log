import React from "react";
import styles from "./Team.module.scss";
import me from "../../assets/me.jpg";
import { FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

const Team = () => {
  return (
    <div className={styles.container}>
      <h1>The Team</h1>
      <div className={styles.info}>
        <div className={styles.head}>
          <h4>Lee-Michael</h4>
          <img src={me} alt="Lee-Michael D'Souza" />
        </div>

        <p><span className="redDark">Full-Stack Dev, Trader, Manager</span></p>
        <p><span className="redDark">Sci-Fi Author: Stories From Princess Star</span></p>
        <p>Creator and currently the sole developer of the RNG RPG including the graphical assets as well as soundtrack.</p>

        <div className={styles.icons}>
          <CgWebsite onClick={() => window.open("https://www.linkedin.com/in/lee-michael-d-souza-81a8321a4/", "_blank")} size={40} />
          <FaLinkedin onClick={() => window.open("https://rimichaeru.github.io/portfolio-website/", "_blank")} size={40} />
          <FaTwitterSquare onClick={() => window.open("https://twitter.com/rimaikeru", "_blank")} size={40} />
        </div>

      </div>

    </div>
  );
};

export default Team;

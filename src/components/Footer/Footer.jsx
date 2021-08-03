import React from "react";
import styles from "./Footer.module.scss";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>Made in React</p>

      <div
        className={styles.centre}
        onClick={() => window.open("https://twitter.com/rimaikeru", "_blank")}
      >
        <FaTwitterSquare size={32} className={styles.icon} />
        <p>Continue the Journey</p>
      </div>

      <p>
        <a href="https://twitter.com/rimaikeru" target="_blank">
          @rimaikeru
        </a>
        &nbsp; // Lee-Michael D'Souza
      </p>
    </div>
  );
};

export default Footer;

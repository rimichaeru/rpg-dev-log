import React from "react";
import styles from "./DevLog.module.scss";
import Post from "../../components/Post";

const DevLog = () => {
  return (
    <div className={styles.container}>
      <div className={styles.feed}>
        <Post />
        <Post />
      </div>

    </div>
  );
};

export default DevLog;

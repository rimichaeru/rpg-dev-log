import React from "react";
import styles from "./Post.module.scss";

const Post = () => {
  return (
    <div className={styles.container}>
      <img src="" alt="" />
      <div className={styles.info}>
        <h4>Heading</h4>
        <h5><i>Date</i></h5>
        <p>Description</p>
      </div>
    </div>
  );
};

export default Post;

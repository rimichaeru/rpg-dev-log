import React from "react";
import styles from "./Post.module.scss";

const Post = (props) => {

  const descList = props.post.description.split("//");
  const postNum = props.post.image.split("-")[0];

  return (
    <div className={styles.container}>
      <img src={process.env.PUBLIC_URL + "/post-images/" + props.post.image} alt={props.post.heading} />
      <div className={styles.info}>
        <h4>{props.post.heading}</h4>
        <h5><i>{props.post.date}</i></h5>

        {descList.map((descPart) => {
          return <p>{descPart}</p>
        })}

      </div>
      <h6>{postNum}</h6>
    </div>
  );
};

export default Post;

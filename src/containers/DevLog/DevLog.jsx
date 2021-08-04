import React, { useEffect, useState } from "react";
import styles from "./DevLog.module.scss";
import Post from "../../components/Post";
import posts from "../../assets/posts.json";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

const orderedPosts = posts.reverse(); // keeps outside of state

const DevLog = () => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 200) {
        setShowArrow(false);
      } else {
        setShowArrow(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className={styles.container}>
      <div className={styles.feed}>
        {orderedPosts.map((post) => {
          return <Post post={post} />;
        })}
      </div>

      <div onClick={() => window.scrollTo(0, 0)}>
        <FaRegArrowAltCircleUp
          className={showArrow ? styles.arrow : styles.arrowHidden}
        />
      </div>
    </div>
  );
};

export default DevLog;

import React from "react";
import PropTypes from "prop-types";
import styles from "./Welcome.module.css";
import { useState, useEffect } from "react";

const Welcome = () => {
  const [welcome, setwelcome] = useState("");

  useEffect(() => {
    const welcomeinit = "WELCOME";
    var count = 1;
    console.log("success!");
    initWelcome(welcomeinit, count);
  }, []);
  let initWelcome = (welcomeinit, count) => {
    if (count > welcomeinit.length) {
      count = 1;
      setwelcome(welcomeinit.slice(0, count));
    } else {
      setwelcome(welcomeinit.slice(0, count));
      count++;
      console.log(welcome);
    }
    setTimeout(() => {
      initWelcome(welcomeinit, count);
    }, 500);
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.featuredtext}>{welcome}</h1>
    </div>
  );
};

Welcome.propTypes = {};

Welcome.defaultProps = {};

export default Welcome;

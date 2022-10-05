import React from "react";

import styles from "../styles/Global";
import assets from "../assets";

const Download = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.blackText}`}>
            Download The Source Code
          </h1>
          <p className={`${styles.pText} ${styles.blackText}`}>
            Get the full source code on Github.
          </p>
        </div>
        <button
          className={`${styles.btnPrimary}`}
          onClick={() => {
            window.open("https://github.com/YZvirblis/z-market", "_blank");
          }}
        >
          <div className={`${styles.flexCenter}`}></div>
          Source Code
        </button>
        <img
          src={assets.scene}
          alt="download_png"
          className={`${styles.fullImg}`}
        />
      </div>
    </div>
  );
};

export default Download;

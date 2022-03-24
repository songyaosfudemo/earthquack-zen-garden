import React from "react";
import styles from "./header.module.css";

const Header = ({ logoImage, title, firstName }) => {
  return (
    <div className={styles.header}>
      <a href="/">
        <img src={logoImage} className={styles.logo} alt="realtor logo" />
      </a>
      <div className={styles.title}>{title}</div>
      <a href="/profile">
        Welcome {firstName}
      </a>
    </div>
  );
};

export default Header;

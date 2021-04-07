import React from "react";
import styles from '../styles/Home.module.css'
const Footer = () => {
  return(
      <div className={styles.footer}>
        <a
          href="https://michaeldipaolo.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by michaeldipaolo{' '}
          {/* <img src="/unison_logo_full.svg" className={styles.logo} /> */}
        </a>
      </div>
  );
};

export default Footer;

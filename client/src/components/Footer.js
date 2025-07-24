import React from "react";
import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/consts.js";

const Footer = () => {
  return (
    <div className={styles.mainContainer}>
      <hr />
      <div className={styles.data}>
        <div className={styles.logoItems}>
          <NavLink to={SHOP_ROUTE} className={styles.logo}>
            FASCO
          </NavLink>
          <div className={styles.items}>
            <NavLink className={styles.itemLink}>Support Center</NavLink>
            <NavLink className={styles.itemLink}>Invoicing</NavLink>
            <NavLink className={styles.itemLink}>Contract</NavLink>
            <NavLink className={styles.itemLink}>Careers</NavLink>
            <NavLink className={styles.itemLink}>Blog</NavLink>
            <NavLink className={styles.itemLink}>FAQ,s</NavLink>
          </div>
        </div>
        <span>Copyright © 2022 Xpro . All Rights Reseved.</span>
      </div>
    </div>
  );
};

export default Footer;

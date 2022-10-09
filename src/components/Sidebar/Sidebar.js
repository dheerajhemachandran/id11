import React from "react";
import styles from "./Sidebar.module.css";
import logo from "../../Assets/logo.png";
import arrow from "../../Assets/arrow.png";
import profile from "../../Assets/profile.png";
import pencil from "../../Assets/pencil.png";
import livedeal from "../../Assets/livedeal.png";
import save from "../../Assets/save.png";
import investment from "../../Assets/investment.png";
import tools from "../../Assets/tools.png";
import plus from "../../Assets/plus.png";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logocont}>
        <img src={logo} className={styles.logo} alt="" />
        <img src={arrow} alt="" />
        <img src={arrow} alt="" />
        <img src={arrow} alt="" />
        <img src={arrow} alt="" />
      </div>

      <div className={styles.profilecont}>
        <img src={profile} className={styles.profileimg} alt="" />
        <div className="d-flex flex-column align-content-center">
          <div className={styles.name}>Chandan Singh</div>
          <div className="d-flex flex-row gap-0">
            <div className={styles.subname}>Investor</div>
            <img
              src={pencil}
              className="ms-2"
              height="20px"
              width="20px"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className={styles.menu}>MENU</div>
      <div className={styles.menu1}>
        <div className="d-flex align-items-center gap-2">
          <img src={livedeal} alt="" />
          <div className={styles.active}>Live Deal</div>
        </div>
        <div className="d-flex align-items-center gap-2">
          <img src={investment} alt="" />
          My Investment
        </div>
        <div className="d-flex align-items-center gap-2">
          <img src={save} alt="" />
          Saved Deals
        </div>
      </div>

      <hr />

      <div className={styles.menu2}>
        <div className="d-flex align-items-center gap-2">
          <img src={tools} alt="" />
          <div className={styles.active}>Tools</div>
          <img src={plus} className="ms-auto me-0" alt="" />
        </div>
        <div className="d-flex align-items-center gap-2">
          <img src={investment} alt="" />
          My Investment
        </div>
        <div className="d-flex align-items-center gap-2">
          <img src={save} alt="" />
          Saved Deals
        </div>
      </div>

      <hr />

      <div className={styles.menu2}>
        <div className="d-flex align-items-center gap-2">
          <img src={livedeal} alt="" />
          <div className={styles.active}>Live Deal</div>
        </div>
        <div className="d-flex align-items-center gap-2">
          <img src={investment} alt="" />
          My Investment
        </div>
        <div className="d-flex align-items-center gap-2">
          <img src={save} alt="" />
          Saved Deals
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

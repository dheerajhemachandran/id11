import {React,useState} from "react";
import styles from "./Header.module.css";
import bell from "../../Assets/bell.png";
import mail from "../../Assets/mail.png";
import search from "../../Assets/search.png"
import dropdown from "../../Assets/dropdown.png"
import Portal from "../Portal/Portal";
import Table from "../Table/Table";
import left from '../../Assets/left.png'
import right from '../../Assets/right.png'

const Header = () => {
  const [home, sethome] = useState(false)
  const [portal, setportal] = useState(false)
  return (
    <>
      <div className={styles.header}>
        <button className={styles.button} onClick={()=>setportal(!portal)} >Raise Capital</button>
        <img src={bell} className={styles.bell} alt="" />
        <img src={mail} alt="" />
      </div>

      <div className={styles.heading}>My Investments</div>

      <div className={styles.subheading}>
        {home?
        <>venture buddy offers a variety of investment <br /> opportunities.</>:
        `My Investments > Portal`}
      </div>
          {portal?<Portal/>:
<>
      <div className={styles.searchcont}>
        <div className="d-flex align-items-center">
          <img src={search} className={styles.search} alt="" />
          <input type="text" placeholder="Search for invested startups"/>
        </div>
        <div className="d-flex align-items-center">
          <div>sort:</div>
          <button onClick={()=>sethome(!home)}><div>Investment</div><img src={dropdown} alt="" /></button>
        </div>
          
      </div>
      <Table/>
      <div className='footer'>
        <img src={left} alt="" />
        <div className=" fw-bold">1/1</div>
        <img src={right} alt="" />
    </div>
      </>
      }
    </>
  );
};

export default Header;

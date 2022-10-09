import React from 'react'
import styles from '../Update.module.css'

const Updata = ({dp,date,year,opened,title,para,name,designation}) => {
  return (
    <div className='d-flex flex-column '>
        <div className='d-flex flex-row'>
            <div className={styles.date}>
                <b>{date}</b> <br />  <span>{year}</span>
            </div>
            <div className={styles.data}>
                {opened?
                <div className={styles.title}>Opened for Funding</div> :<>
            <div className={styles.title}>{title}</div>
            <div className={styles.para}>{para}</div>
            <div className='d-flex flex-row align-items-content'>
                <img src={dp} alt="" />
                <div className='mx-2'>{name}</div>
                <button className={styles.custbtn}>{designation}</button>
            </div>
            </>}
            </div>

        </div>
      
    </div>
  )
}

export default Updata

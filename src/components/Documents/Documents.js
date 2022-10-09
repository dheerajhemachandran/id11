import React from 'react'
import document from '../../Assets/document.png'
import styles from './Document.module.css'
const Documents = () => {
  return (
    <div className='mt-5 ms-5 ps-2 d-flex flex-column'>
      <div className="d-flex flex-row align-items-center mb-3">
        <img src={document} alt="" />
        <div className={styles.document}>Portal Form C.pdf</div>
      </div>
      <div className="d-flex flex-row align-items-center mb-3">
        <img src={document} alt="" />
        <div className={styles.document}>KYC Verification.pdf</div>
      </div>
      <div className="d-flex flex-row align-items-center mb-3">
        <img src={document} alt="" />
        <div className={styles.document}>Investment Amount Invoice.pdf</div>
      </div>
      <div className="d-flex flex-row align-items-center mb-3">
        <img src={document} alt="" />
        <div className={styles.document}>Share Certificate.pdf</div>
      </div>
      <div className="d-flex flex-row align-items-center mb-3">
        <img src={document} alt="" />
        <div className={styles.document}>Policy Documents by VentureBuddy.pdf</div>
      </div>
      
    </div>
  )
}

export default Documents

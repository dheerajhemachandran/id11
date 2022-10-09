import React from 'react'
import styles from './Portal.module.css'
import portal from '../../Assets/portal.png'
import info from '../../Assets/info.png'
import Menu from '../Menu/Menu'

const Portal = () => {
  return (
    <>
    <div className={styles.display}>
        <div className='d-flex flex-column'>
            <div className="d-flex flex-row align-items-center">
                <img src={portal} alt="" />
                <div className={styles.portal}>
                    Portal
                </div>
            </div>
            <div className={styles.sub}>
            Enabling P2P, decentralized, censorship-resistant <br /> 
            apps as layers on Bitcoin.
            </div>

            <div className='mb-0 mt-auto'><button>FINTECH</button><button>CRYPTO</button><button>BLOCKCHAIN</button></div>
        </div>

        <div className={styles.measure}>
            <div className="d-flex flex-row align-items-center">
                <div className={styles.value}>₹685,978</div>
                <div className={styles.commited}>Commited</div>
                <img src={info} alt="" />
            </div>
            <div className='progress my-3' style={{width:"313px",height:"17px",backgroundColor:"#D9D9D9"}}>
                <div className="progress" style={{width:"218px",height:"17px",backgroundColor:"#4DBC5C"}}>
                    <div className="progress" style={{width:"151px",height:"17px",backgroundColor:"#3E4C9C"}}>
                    </div>
                </div>

            </div>
            <div className='d-flex justify-content-between'>
                <div className={styles.percent}>255% <span>RAISED</span></div>
                <div className={styles.percent}>144 <span>INVESTORS</span></div>

            </div>
            <div className='mb-0 mt-auto me-3 d-flex justify-content-between align-items-center'>
                <div className={styles.investment}>My Investment:</div>
                <div className={styles.values}>₹10,000</div>
            </div>
        </div>

    </div>
    <Menu/>
    
    </>
  )
}

export default Portal

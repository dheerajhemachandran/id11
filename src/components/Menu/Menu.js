import React from 'react'
import { useState } from 'react'
import Documents from '../Documents/Documents'
import Queries from '../Queries/Queries'
import Update from '../Updates/Update'
import styles from './Menu.module.css'

const Menu = () => {
    const [active, setactive] = useState(0)
  return (
    <>
    <div className={styles.menus}>
        <button onClick={()=>setactive(1)}>Updates</button>
        <button onClick={()=>setactive(2)}>My Documents</button>
        <button onClick={()=>setactive(3)}>Queries</button>
    </div>

    {active===1?
    <div className='mt-4'><Update/></div>:
    active===2?
    <Documents/>:
    active===3?
    <Queries/>:
    <></>
    }
    </>
    
   
  )
}

export default Menu

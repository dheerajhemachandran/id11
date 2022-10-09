import React from 'react'
import Row from './Row/Row'
import styles from './Table.module.css'
import ubereats from '../../Assets/ubereats.png'
import polygon from '../../Assets/polygon.png'
import cred from '../../Assets/cred.png'

const Table = () => {
  return (
    <table>
  <tr className='d-flex flex-row'>
    <th>Startup</th>
    <th>Category</th>
    <th>Date</th>
    <th>Raised (₹)</th>
    <th>Status</th>
    <th>INVESTED (₹)</th>
  </tr>
  <Row profile={ubereats} statusbar={styles.bar} startup="Uber Eats" category="Fintech, Health" date="13/10/2022" raised="12,00,000" invested="34,000" status="550% Raised" />
    <hr />
    <Row profile={polygon} statusbar={styles.bar} startup="Polygon" category="Blockchain, web2" date="13/10/2022" raised="12,00,000" invested="14,000" status="550% Raised" />
    <hr />
    <Row profile={cred} statusbar={styles.bar} startup="CRED" category="Fintech" date="13/10/2022" raised="12,00,000" invested="4,000" status="550% Raised" />
    
</table>
  )
}

export default Table

import React from 'react'

const Row = ({profile,startup,category,date,raised,invested,status,statusbar}) => {
  return (
    <tr className='d-flex flex-row'>
    <td className='d-flex flex-row align-items-center'>
        <img src={profile} alt="" />
        <div className='ms-2 align-items-center'><b>{startup}</b></div>
    </td>
    <td className='d-flex flex-row align-items-center'>{category}</td>
    <td className='d-flex flex-row align-items-center'>{date}</td>
    <td className='d-flex flex-row align-items-center'>{raised}</td>
    <td className='d-flex flex-column align-self-center justify-content-start'>
      <div className={statusbar}></div><div>{status}</div></td>
    <td className='d-flex flex-row align-items-center'><span>{invested}</span></td>
  </tr>
  )
}

export default Row

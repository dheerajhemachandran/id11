import React from 'react'
import dp from '../../Assets/dp.png'
import Updata from './Updata/Updata'

const Update = () => {
  return (
    <div className='ps-4 ms-4'>
    <Updata dp={dp} date="Aug 12" year="2022" opened={false} title="New IT returns Filing" 
    para="Realm Metaverse Real Estate Investors,Happy New Year to all.Last week we filed a new offering circular with the SEC that you can see here.We are working on calculating our December 31, 2021 net." 
    name="Andrew Huberman"
    designation="Team Member" />
    <Updata dp={dp} date="May 21" year="2022" opened={false} title="New IT returns Filing" 
    para="Realm Metaverse Real Estate Investors,Happy New Year to all.Last week we filed a new offering circular with the SEC that you can see here.We are working on calculating our December 31, 2021 net." 
    name="Andrew Huberman"
    designation="Team Member" />
    <Updata date="Jan 22" year="2022" opened={true}/>
    </div>
  )
}

export default Update

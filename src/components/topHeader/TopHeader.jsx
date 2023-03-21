import React from 'react'

// Fa Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; 

import './TopHeader.scss'

const TopHeader = () => {
  return (
    <>
    <div className='topheader'>
        <div className='advertise'>
          <p>Add Here your Advertise</p>
        </div>
        <div className='account'>
          <span>  
                 <FontAwesomeIcon icon={faUser} className="text-dark" /> My Account
           </span>
        </div>
    </div>
    </>
  )
} 


export default TopHeader;
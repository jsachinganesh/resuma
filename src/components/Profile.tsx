import Image from 'next/image'
import React from 'react'
import Box from './Box'

type Props = {}

function Profile({}: Props) {
  return (
    <Box classes="d-flex flex-column gap-2">
        <div className=''>
         <img className='img-fluid' src="images/bg.png" alt="sachinganesh" />
         
        </div>
       
        <div className='d-flex gap-1 '>
          <h1 className="h5">Sachin Ganesh </h1><span><small>(Web developer)</small></span>
          
        </div>
        <div className='d-flex gap-1'>
          <button className='btn btnBadge'>Download Resume &#10507;</button>
          <button className='btn btnBadge d-block d-lg-none'>Work</button>
        </div>
    </Box>
  )
}

export default Profile
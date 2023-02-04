import React from 'react'
import Box from './Box'

type Props = {}

function Infomation({}: Props) {
  return (
    <Box>
        <h1 className="h5">Information</h1>
        <div className='d-flex flex-column gap-2'>
          <div className="w-100 d-flex justify-content-between">
            <div>
              Location
            </div>
            <div>Hyderabad</div>
          </div>
          <div className="w-100 d-flex justify-content-between">
            <div>
            Experience
            </div>
            <div><strong>1.4 Year as Web developer</strong></div>
          </div>
          <div className="w-100 d-flex justify-content-between">
            <div>
            Education
            </div>
            <div>BBA</div>
          </div>

          <hr className='pb-0 mb-0' />

          <div className='text-center'><strong className="text-success">Open to remote too</strong></div>
         
        </div>
    </Box>
  )
}

export default Infomation
import React from 'react'
import Box from './Box'

type Props = {}

function AboutMe({}: Props) {
  return (
    <Box classes='d-flex flex-column gap-2'>
      <h1 className="h5">About me</h1>
      <div>I am <strong>confident</strong> in my skill set. As a self-taught programmer and finance degree holder, possess a strong motivation to continually learn and improve as a programmer. <strong>I ❤️ what I do.</strong> </div>
      <div> Email: <span  className='text-success'>jsachinganesh@gmail.com</span></div>
    </Box>
  )
}

export default AboutMe
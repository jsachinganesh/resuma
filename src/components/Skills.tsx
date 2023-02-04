import React from 'react'
import Box from './Box'

type Props = {}

function Skills({ }: Props) {
    return (
        <Box>
            <h1 className="h5">Skills</h1>
            <div className='d-flex gap-3 flex-wrap'>
                <div className='badge  sgfont-1  btnBadge p-2'>Javascript</div>
                <div className='badge  sgfont-1  btnBadge p-2'>Typescript</div>
                <div className='badge sgfont-1 btnBadge p-2'>React</div>
                <div className='badge  sgfont-1  btnBadge p-2'>Redux</div>
                <div className='badge  sgfont-1  btnBadge p-2'>Bootstrap</div>
                <div className='badge  sgfont-1  btnBadge p-2'>Materail UI</div>
                <div className='badge  sgfont-1  btnBadge p-2'>Node JS</div>
                <div className='badge  sgfont-1  btnBadge p-2'>Express</div>
                <div className='badge  sgfont-1  btnBadge p-2'>Sass</div>
                <div className='badge  sgfont-1  btnBadge p-2'>MongoDB & Mongoose</div>
                <div className='badge  sgfont-1  btnBadge p-2'>Docker</div>
                <div className='badge  sgfont-1  btnBadge p-2'>Aws</div>
                <div className='badge  sgfont-1  btnBadge p-2'>React Native</div>
                <div className='badge  sgfont-1  btnBadge p-2'>HTML/CSS</div>
            </div>
        </Box>
    )
}

export default Skills
import React from 'react'
import styles from '@/styles/Box.module.scss'

type Props = {
    children:React.ReactNode,
    classes?:string
}

function Box({children,classes}: Props) {
  return (
    <div>
        <div className={`${styles.box} ${classes}`}>{children}</div>
        
    </div>
  )
}

export default Box
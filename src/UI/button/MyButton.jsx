import React from 'react'
import classes from '../button/MyButton.module.css'

export default function yButton({children, ...props}) {
  return (
    <button {...props} className={classes.myBtn}>
        {children}
    </button>
  )
}

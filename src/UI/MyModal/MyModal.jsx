import React from 'react'
import cl from './MyModal.module.css'

export default function MyModal({children, visible, setVisible}) {

  const rootClasses = [cl.myModal]
  if (visible) {
    rootClasses.push(cl.active)
  }

  return (
    <div className={[cl.myModal, cl.active].join(' ')}>
      <div className={cl.myModalContent}>
          {children}
      </div>
    </div>
  )
}

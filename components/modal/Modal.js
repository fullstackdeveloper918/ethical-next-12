import React from 'react'
import Style from "./Modal.module.css"

const Modal = () => {
  return (
    <div className={Style.overlay}> 
     <div className={Style.modal_content}>
     <span class={Style.close}>&times;</span>
        Modal 

     </div>
    </div>
  )
}

export default Modal

import React, { useState } from 'react'
import Style from "./Modal.module.css"

const Modal = () => {
    const [isOpenModal, setIsOpenModal] = useState(false)
  return (
            <>
            {isOpenModal &&

                <div className={Style.overlay}> 
            <div className={Style.modal_content}>
            <span className={Style.close} onClick={() => setIsOpenModal(false)}>&times;</span>
            Modal
            </div>
            </div>
            }
            </>
    
    
  )
}    

export default Modal

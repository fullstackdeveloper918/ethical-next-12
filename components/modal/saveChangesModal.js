import React, { useState } from 'react'
import Style from './Modal.module.css'
import { useRouter } from 'next/router'

const SaveChangesModal = ({
  isSaveChangesModalOpen,
  setIsSaveChangesModalOpen,
}) => {
  const router = useRouter()
  return (
    <>
      <div className={Style.overlay}>
        <div className={Style.modal_content}>
          <span
            className={Style.close}
            onClick={() => setIsSaveChangesModalOpen(false)}
          >
            &times;
          </span>
          <h2>
            Are you sure you want to leave this page? All your progress on this
            page will be lost
          </h2>
          <div className={Style.label_field}>
            <div>
              <button
                type="button"
                className={Style.Popup_btnone}
                onClick={() => {
                  setIsSaveChangesModalOpen(false)
                }}
              >
                stay on this page
              </button>
            </div>
            <div>
              <button
                type="button"
                className={Style.Popup_btntwo}
                onClick={() => {
                  // setIsSaveChangesModalOpen(false)
                  router.push('/login')
                }}
              >
                Yes I want to leave
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SaveChangesModal

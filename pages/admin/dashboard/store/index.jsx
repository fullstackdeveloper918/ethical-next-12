import React, { useState } from 'react'
import Styles from './store.module.css'
import SideBar from '../../../../components/admin/SideBar/SideBar'
import Navbar from '../../../../components/admin/Navbar/Navbar'
import images from '../../../../constants/images'
import { GoPlus } from 'react-icons/go'
import Image from 'next/image'

const Store = () => {
  const [selectedFile, setSelectedFile] = useState('')

  const handleFileChange = (event) => {
    // Access the selected file from event.target.files
    const file = event.target.files[0]
    setSelectedFile(file)
  }

  return (
    <>
      <section className={Styles.Store_section}>
        <div className={Styles.Store_section_container}>
          <div className={Styles.Store_content}>
            <div className={Styles.Store_left_content}>
              <SideBar data={images.ethical_swag} />
            </div>
            <div className={Styles.Store_right_content}>
              <Navbar data="Store Detail" thumbnail={images.User_icon} />
              {/* Middle Content */}
              <div className={Styles.middle_section}>
                <div className={Styles.middle_section_container}>
                  <div className={Styles.text_content}>
                    <p>Add your store name</p>
                    <input type="text" placeholder="Enter store name here" />
                  </div>
                  <div className={Styles.middle_content}>
                    <p>Upload store logo here</p>
                    <div className={Styles.file_Container}>
                      <div className={Styles.add_icon}>
                        <label htmlFor="file">
                          <input
                            type="file"
                            id="file"
                            onChange={handleFileChange}
                          />
                          <div className={Styles.add_buton}>
                            <Image
                              src={images.Plus_Icon}
                              width={60}
                              height={60}
                            />
                            {selectedFile && (
                              <>
                                <Image
                                  src={selectedFile}
                                  width={100}
                                  height={100}
                                />
                              </>
                            )}
                          </div>
                        </label>
                      </div>
                      {selectedFile && (
                        <div className={Styles.selectedFile}>
                          <p>{selectedFile.name}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Store

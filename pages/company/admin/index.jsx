import React, { useState } from 'react'
import Styles from './admin.module.css'
import { GoPlus } from 'react-icons/go'
import Image from 'next/image'
import SideBar from '../../../components/admin/SideBar/SideBar'
import Navbar from '../../../components/admin/Navbar/Navbar'
import images from '../../../constants/images'

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
              <SideBar data={images.Louis_Lara} imageData="image" />
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
                          </div>
                          {selectedFile && (
                            <>
                              <div className={Styles.preview_image}>
                                <Image
                                  src={URL.createObjectURL(selectedFile)}
                                  layout="fill"
                                  alt="selected_image"
                                />
                              </div>
                            </>
                          )}
                        </label>
                      </div>
                      {selectedFile && (
                        <div className={Styles.selectedFile}>
                          <p>{selectedFile.name}</p>
                        </div>
                      )}
                    </div>
                    <div className={Styles.desc_container}>
                      <p>
                        Let’s get started. Which of these best describes you?
                      </p>
                      <div className={Styles.desc}>
                        <span>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident.
                        </span>
                      </div>
                    </div>
                    <div className={Styles.bottom_buttons}>
                      <button>Next</button>
                      <button>Cancel</button>
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

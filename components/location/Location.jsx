import React from 'react'
import  Styles  from './Location.module.css'

const Location = () => {
  return <>
    <div className={Styles.container_overlay}>
        <div className={Styles.popup}>
        
          <h2 className={Styles.heading}>Welcome to Intuit</h2>
          
          <p>To check our product designed specifically for your country.please visit the Canada Site</p>
          <div className={Styles.flex_row}>
            <button className={`${Styles.link_btn} ${Styles.us_btn}`}>Visit the US site</button>
            <button className={`${Styles.link_btn} ${Styles.canada_btn}`} >Go to CA site</button>
          </div>
          </div>
          </div>
  </>
}

export default Location

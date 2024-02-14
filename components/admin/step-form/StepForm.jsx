import React from 'react'
import Styles from './StepForm.module.css'

const StepForm = () => {
  return (
    <div>
      <div className={Styles.step_wrapper}>
        <div className={Styles.hr_line}></div>
        <div className={Styles.step_counts}>
          <div className={Styles.steps_number}>
            <span>
              <div className={Styles.inner_circle}></div>
            </span>
            <div>
              <h6> Submitted Request </h6>
              <p>Dec 2, 2023</p>
            </div>
          </div>
          <div className={Styles.steps_number}>
            <span>
              <div className={Styles.inner_circle}></div>
            </span>
            <div>
              <h6> Overview </h6>
              {/* <p>Dec 2, 2023</p> */}
            </div>
          </div>
          <div className={Styles.steps_number}>
            <span>
              <div className={Styles.inner_circle}></div>
            </span>
            <div>
              <h6> Approval </h6>
              {/* <p>Dec 2, 2023</p> */}
            </div>
          </div>
          <div className={Styles.steps_number}>
            <span>
              <div className={Styles.inner_circle}></div>
            </span>
            <div>
              <h6> Payment </h6>
              {/* <p>Dec 2, 2023</p> */}
            </div>
          </div>
          <div className={Styles.steps_number}>
            <span>
              <div className={Styles.inner_circle}></div>
            </span>
            <div>
              <h6> Shipping Status </h6>
              {/* <p>Dec 2, 2023</p> */}
            </div>
          </div>
          <div className={Styles.steps_number}>
            <span>
              <div className={Styles.inner_circle}></div>
            </span>
            <div>
              <h6> Delivered </h6>
              {/* <p>Dec 2, 2023</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepForm

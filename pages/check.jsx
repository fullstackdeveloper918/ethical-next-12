import React from 'react'
import Certified from '../components/certified-swag-section/certified'
import { useSelector } from 'react-redux'

const check = () => {
  const country = useSelector((state) => state.country)
  console.log(country, 'countrycountrycountrycountry')
  return (
    <div>
      <Certified />
    </div>
  )
}

export default check

import React from 'react'
import images from '../../constants/images'
import Image from 'next/image'

const EthicalLogo = () => {
  return (
    <>
      <Image
        src={images.ethical_swag}
        width={220}
        height={50}
        alt="search"
        onClick={() => router.push('/')}
        style={{ cursor: 'pointer' }}
      />
    </>
  )
}

export default EthicalLogo

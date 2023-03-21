import React from 'react'

//Bootstrap Component
import Button from 'react-bootstrap/Button';


// Scss
import './Banner.scss'

 const Banner = () => {
  return (
    <div className='bannerBackground'>
        <h1 className='text-light'>INFINITY COLLECTION <br /> CUSTOM CLOTHING ON DEMAND </h1>
        <p className='text-light'>Professionally assembled & shipped to your door.</p>
        <Button variant="primary" size="lg">Shop Collection</Button>
    </div>
  )
}


export default Banner; 
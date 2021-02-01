import React from 'react';
import Baby from '../media/baby_feet.jpg'

const HomePage =  () => {
  return (
    <div className="home">
      <h1> Baby Phan-Wheeler </h1>
      <span> Arriving Soon! </span>
      <br/>
      <br/>
      <img src={Baby} className='babypic' alt="baby"/>
    </div>
  )
}

export default HomePage

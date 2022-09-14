import React, { useState } from 'react'
import './Carousel.css';
import CarouselData from '../Helpers/CarouselData';
// import {Images} from '../Images/CarouselData'

function Carousel() {

  const [currImg, setCurrImg] = useState(0);

  return (
    <div className='body'>
      <div className='carousel-inner'>
        {/* <img src = {Images[ currImg ].img} /> */}
<CarouselData />
    </div>
      <h1></h1>
    </div>
  )
}

export default Carousel

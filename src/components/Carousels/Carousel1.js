import React from 'react'
import { Carousel } from 'bootstrap'

const Carousel1 = () => {
  return (
    <Carousel fade>
     <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.foodbusinessafrica.com/wp-content/uploads/2021/03/Oil-Seeds-1_1600x900.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://thumbs.dreamstime.com/b/laboratory-glassware-colorfu-chemicals-chemistry-l-laboratory-glassware-colorful-chemicals-reagents-chemistry-135607116.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://upload.wikimedia.org/wikipedia/commons/6/65/Hawassa_Industrial_Park.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  )
}

export default Carousel1
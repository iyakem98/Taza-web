import React from 'react'
import './HomeScreen.css'
import { Card, Button, Carousel, Image } from 'react-bootstrap'
import {BsFillArrowDownCircleFill} from 'react-icons/bs'
import {AiOutlineDown} from 'react-icons/ai'

const HomeScreen = () => {
  return (
    <div className='homescreen'>
        <div className='hometop'>
            <div className='coloroverlay'/>
            <h5 className='text-info'>
              WELCOME TO TAZA!
            </h5>
            <h1 className='text-info hsh1'>
                This is where quality meets efficiency!
            </h1>

            <div className='floating-icon'>
                <a href='#About'>
                    <AiOutlineDown color='#3498db' size={60} className='mouse'/>
                </a>
            </div>
        </div>

        <div className='homebott'>
           <div className='homechem'>
             <Image className='homechemim' src = "https://static.wixstatic.com/media/e8ebab_c8260cdf33ce403da93de2eb6a7a30ff~mv2.jpeg/v1/fill/w_3024,h_778,al_b,q_90,usm_0.66_1.00_0.01,enc_auto/e8ebab_c8260cdf33ce403da93de2eb6a7a30ff~mv2.jpeg"/>
             <Card className='bg-info homechemcard'>
               <Card.Body className='text-white'>
                 <Card.Title as='h2'>
                 Manufacturing & Importing Chemicals
                 </Card.Title>
                 <Card.Text as='p'>
                 "It should be everyones dream to keep the Earth Clean and Green."
                 </Card.Text>

               </Card.Body>
             </Card>
           </div>

           <Button className='homechembutt bg-primary'>
                Explore chemicals and detergents
           </Button>

           <div className='homeoil'>
              <Card className='bg-info homeoilcard'>
                 <Card.Title className='text-white' as='h2'>
                 Collecting & Exporting Oil Seeds
                 </Card.Title>
             </Card>
             <Image className='homeoilim' src = "https://static.wixstatic.com/media/e8ebab_062dbf486a7043a886d8e93f74629bc0~mv2.jpg/v1/fill/w_1140,h_293,al_c,q_80,enc_auto/e8ebab_062dbf486a7043a886d8e93f74629bc0~mv2.jpg"/>
           </div>

           <Button className='homechembutt bg-primary'>
                Explore Oil Seeds
           </Button>

        </div>

       {/* <div className='homebottom'>
            <h1 className='text-primary hsh1bott'>
                What we do
            </h1>
           <div className='hb1'>

           </div>

           <div className='hb2'>
               <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100 ci"
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
      className="d-block w-100 ci"
      src="https://upload.wikimedia.org/wikipedia/commons/6/65/Hawassa_Industrial_Park.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 ci"
      src="https://www.foodbusinessafrica.com/wp-content/uploads/2021/03/Oil-Seeds-1_1600x900.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
           </div>
 
        
        </div>  */}
       
       
    </div>
  )
}

export default HomeScreen
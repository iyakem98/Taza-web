import React from 'react'
import { Carousel, Form, Button, Row, Col } from 'react-bootstrap'
import './AboutScreen.css'
import FormContainer from '../components/FormContainer/FormContainer'
import Brands from '../components/Brands/Brands'
import Faq from '../components/FAQ/Faq'
import PersCard from '../components/Personnel/PersCard'

const AboutScreen = () => {
  return (
    <div className='abb'>
      
     
  <div className='carou'>

      <h1 className='text-white'>Who we are</h1> 
     {/* <div className='buttcont'>
        <Row>
          <Col>
          <Button className='abbut'> Our story </Button>
          <Button className='abbut'> FAQ </Button>
          </Col>
          <Col>
          <Button className='abbut'> Brands </Button>
          <Button className='abbut'> Work with us! </Button>
          </Col>
        </Row>
        
  </div>  */}
       
        <div className='coloroverlayab'>
        <Carousel fade>
    <Carousel.Item>
      <img
        className="d-block w-100 carim"
        src="https://www.foodbusinessafrica.com/wp-content/uploads/2021/03/Oil-Seeds-1_1600x900.jpg"
        alt="First slide"
      >
      </img>
      <Carousel.Caption>
      </Carousel.Caption>
      <Carousel.Caption className='carcap'>
        <h4>Oil Seeds</h4>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 carim"
        src="https://upload.wikimedia.org/wikipedia/commons/6/65/Hawassa_Industrial_Park.jpg"
        alt="Second slide"
      />

      <Carousel.Caption>
        <h4>Jerrycans</h4>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 carim"
        src="https://www.foodbusinessafrica.com/wp-content/uploads/2021/03/Oil-Seeds-1_1600x900.jpg"
        alt="Third slide"
      />

      <Carousel.Caption>
        <h4>PET Preforms</h4>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
        </div>
        </div>
      

     
      {/* 
        <div className='abus'>
        <h1 className='text-light'> WHO WE ARE </h1>
        </div>
      */}


    
      <div className='absec'>
        <div className='abstory'>
           <h2 className='abtitle1 text-primary'>The Full Story</h2>

          <p className='text-primary'>
          Since its establishment in 2005, Taza plc has become a renowned manufacturer of detergents and importer of industrial chemicals. Over the last 15 years, we have perfected our technology to the international standard of manufacturing with world-class quality. Additionally, we have successfully set up projects for the production of plastic containers used for packaging of these detergents’ other chemicals.
          </p>

          <p className='text-primary'>
          The company always strives to place itself better. For this regard, in 2010 E.C, a new plant was commissioned in Dukem, Oromia region for the manufacturing of packaging materials.  The company's main objective is to supply quality products at optimum price. Conveniently located only 14 kilometers away from Bole International airport, clients find it easy to visit our  headquarters from around the globe.
          </p>

          <p className='text-primary'>
          At our facility, we hire numerous skilled workers and engineers who use the latest up-to-date machinery to manufacture liquid detergents and plastic containers. This has resulted in great feedback and high customer satisfaction. We are a quality conscious company and are licensed from Ethiopian Conformity Assessment Enterprise (ECAE) and The Ethiopian Food and Drug Administration (EFDA).
          </p>
    </div> 
       
      </div>

      <div className='abpers'>
        <h2 className='text-primary'>
          Personnel
        </h2>
        <PersCard/>
      </div>

     

      <div className='abfaq'>
        <Faq/>
      </div>

      <div className='abbrand'>
        <Brands/>
      </div>

      <div className='abthird'>
        <h2 className='text-white'>Let's work together!</h2>
        <p className='text-white'>Get in touch so we can start working together.</p>

        <div className='aboutform'>
          <FormContainer>
            <Form.Group className='abfrgr' controlId='lastname'>
              <Form.Label className='text-white'> 
                  First Name
              </Form.Label>
              <Form.Control
                  type='firstName'
                  placeholder='Enter your first name'
              >
              </Form.Control>
              </Form.Group>

              <Form.Group className='abfrgr' controlId='lastname'>
              <Form.Label className='text-white'> 
                  Last Name
              </Form.Label>
              <Form.Control
                  type='lastName'
                  placeholder='Enter your last name'
              >
              </Form.Control>
              </Form.Group>

              <Form.Group className='abfrgr' controlId='email'>
              <Form.Label className='text-white'> 
                  Email*
              </Form.Label>
              <Form.Control
                  type='firstName'
                  placeholder='Enter your email'
              >
              </Form.Control>
              </Form.Group>

              <Form.Group className='abfrgr' controlId='Message'>
              <Form.Label className='text-white'> 
                  Message
              </Form.Label>
              <Form.Control as="textarea" rows={5}
                  type='message'
                  placeholder='Enter your message here!'
              >
              </Form.Control>
              </Form.Group>
              <Button className='bg-primary ab3butt'>
                            Submit
              </Button>
          </FormContainer>
        </div>
      </div>

    </div>
  )
}

export default AboutScreen
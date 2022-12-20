import React from 'react'
import {Card, Image, Row, Col } from 'react-bootstrap'
import './Brands.css'

const Brands = () => {
  return (
    <div className='brander'>
        <h1 className='text-primary'> Our Brands </h1>
        <Row xs={1} md={3} className="g-0 rr">
          <Col className="g-0 cll">
            <Image className='brandim' src='https://static.wixstatic.com/media/e8ebab_6f124888d3074ba58d100d837e71b37f~mv2.png/v1/fill/w_190,h_194,al_c,lg_1,q_85,enc_auto/Taza%20logo.png'/>
            <Image className='brandim' src='https://static.wixstatic.com/media/e8ebab_897d2e7990e445cea83e260ff939edb6~mv2.png/v1/fill/w_353,h_171,al_c,lg_1,q_85,enc_auto/Screen%20Shot%202021-12-02%20at%209_42_01%20AM.png'/>
          </Col>
          <Col className="g-0 cll">
            <Image className='brandim' src='https://static.wixstatic.com/media/e8ebab_9c35063a9c7c4dc2b90811d16a777a10~mv2.jpg/v1/fill/w_314,h_180,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Taza%20new%20logo_edited.jpg'/>
            <Image className='brandim' src='https://static.wixstatic.com/media/e8ebab_d8896c96bf074e38b002737879f5eae9~mv2.jpg/v1/fill/w_372,h_332,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Screen%20Shot%202021-12-02%20at%2012_24_edited.jpg'/>
          </Col>
          <Col className="g-0 cll">
            <Image className='brandim' src='https://static.wixstatic.com/media/e8ebab_3f11bc90f236490b90ec5dacb4d4db98~mv2.png/v1/fill/w_376,h_154,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screen%20Shot%202021-11-25%20at%204_07_31%20PM.png'/>
            <Image className='brandim' src='https://static.wixstatic.com/media/e8ebab_d53b188766154d898649826f3e74f305~mv2.jpeg/v1/fill/w_302,h_302,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Taza%20new%20logo.jpeg'/>
          </Col>

        </Row>
    
      
        
    </div>
  )
}

export default Brands
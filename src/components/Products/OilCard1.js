import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './OilCard1.css'

const OilCard1 = ({oil1}) => {
  return (
    <>
     <Card className="bg-dark text-white oil1card">
         <Card.Header as = 'h3'>
             {oil1.title}
         </Card.Header>
        <Card.Img className='oil1im' src={oil1.image} alt="Card image" />
        <Card.ImgOverlay className='imov'>
            <Card.Text variant="bottom" className='text-white oil1tx'>
                {oil1.description}
            </Card.Text>
        </Card.ImgOverlay>
    </Card>
    </>
  )
}

export default OilCard1
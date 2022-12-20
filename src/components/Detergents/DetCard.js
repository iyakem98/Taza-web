import React from 'react'
import {Card, Button} from 'react-bootstrap'
import './DetCard.css'

const DetCard = ({dt}) => {
  return (
    <>
    <Card className='my-3 rounded detcard prod1card'>
        <Card.Img variant="top" src={dt.image} />
        <Card.Body>
            <Card.Title className='text-primary'>{dt.title}</Card.Title>
            <Card.Text className='prod1txt text-dark'>
                {dt.description}
            </Card.Text>
        </Card.Body>
    </Card>
    </>
  )
}

export default DetCard
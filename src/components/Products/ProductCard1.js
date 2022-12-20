import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './ProductCard1.css'

const ProductCard1 = ({product1}) => {
  return (
    <>
    <Card className='my-3 p-2 rounded prod1card'>
        <Card.Img variant="top" src={product1.image} />
        <Card.Body>
            <Card.Title className='text-primary'>{product1.title}</Card.Title>
            <Card.Text className='prod1txt text-dark'>
                {product1.description}
            </Card.Text>
            <Button className='bg-info btpr1' variant="primary">Explore</Button>
        </Card.Body>
    </Card>
    </>
  )
}

export default ProductCard1
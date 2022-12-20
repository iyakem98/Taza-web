import React from 'react'
import {Row, Col} from 'react-bootstrap'
import { Products1 } from '../../data/Feed1'
import ProductCard1 from './ProductCard1'

const ProductList1 = () => {
  return (
    <>
    <Row>
        {Products1.map(product1 => (
            <Col sm = {12} md = {6} lg = {4} xl = {4}>
                <ProductCard1 product1 = {product1} />
            </Col>
        ))}
    </Row>


  
    </>
  )
}

export default ProductList1
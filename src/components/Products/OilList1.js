import React from 'react'
import { Oils1 } from '../../data/Feed2'
import {Row, Col} from 'react-bootstrap'
import OilCard1 from './OilCard1'


const OilList1 = () => {
  return (
    <>
        <Row>
            {Oils1.map(oil1 => (
                <Col sm = {12} md = {6} lg = {4} xl = {4}>
                    <OilCard1 oil1 = {oil1} />
                </Col>
            ))}
        </Row>
    </>
  )
}

export default OilList1
import React from 'react'
import DetCard from './DetCard'
import { Deter1 } from '../../data/Feed3'
import {Row, Col} from 'react-bootstrap'
 
const DetList = () => {
  return (
    <>
    <Row>
        {Deter1.map(dt => (
            <Col sm = {12} md = {6} lg = {4} xl = {4}>
                <DetCard dt = {dt} />
            </Col>
        ))}
    </Row>
</>
  )
}

export default DetList
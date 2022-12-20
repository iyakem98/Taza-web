import React from 'react'
import './DetergentScreen.css'
import DetList from '../components/Detergents/DetList'

const DetergentScreen = () => {
  return (
    <div className='deterscreeen'>
        <div className='deterhead'>
            <h1 className='text-white'>Detergents</h1>
        </div>

        <div className='deterbott'>
            <DetList/>
        </div>
    </div>
  )
}

export default DetergentScreen
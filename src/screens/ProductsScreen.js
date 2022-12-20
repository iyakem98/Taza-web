import React, { useRef } from 'react'
import './ProductsScreen.css'
import ProductList1 from '../components/Products/ProductList1'
import { Card, Button, Image } from 'react-bootstrap'
import OilList1 from '../components/Products/OilList1'
import ProductForm from '../components/Products/ProductForm'
import { useState } from 'react'
import { BsTruck} from "react-icons/bs";
import {GiFactory} from 'react-icons/gi';
import {FaFlask} from 'react-icons/fa'
const ProductsScreen = () => {

  
  const jerry = useRef(null);
  const oily = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: 'smooth'
    });
  };

  return (
    <div className='ProductsScreen'>
        <div className='productsHeader'>
            <div className='productsOverlay'>
                 <h1 className='productsheadh1'>Products and Services</h1>
                 <div className='productsChoice'>
                    <Button onClick={() => scrollToSection(jerry)} className='prodheadbutt'>Chemicals, Jerrycans, Raw Materials</Button>
                    <Button onClick={() => scrollToSection(oily)} className='prodheadbutt'>Oil Seeds</Button>
                 </div>
            </div>
      </div>

      <div ref={jerry} className='jerry'>
          <h2 className='text-primary h2prod'>Chemicals, Jerrycans, Raw Materials</h2>
          <div className='cardnim'>
          <Card className='bg-info carpr1' body as='h4'>We specialize in manufacturing different types of detergents and cleaning chemicals. In addition, 
                we have scaled our business by manufacturing plastic containers and PET Preforms.</Card>
          <Image className='impro1' src='https://foreignpolicy.com/wp-content/uploads/2021/10/ethiopia-hawassa-women-garment-industry.jpg?w=1500'/>

          </div>
          
      </div>

      <div className='jerrydesc'>
        <ProductList1/>
      </div>

      <div className='jerrylast'>
          <h2>
             WE OFFER
          </h2>
          <div className='jerrylastCard'>
              <Card className='carr'>
              <GiFactory  color='white' size={40} className = 'bspro'/>
              <Card.Title as='h4' className='text-white' >Manufactured products</Card.Title>
              <Card.Body>
                  <Card.Text as='p' className='prcardp text-white'>
                  Chemicals and detergents, Jerrycans, Plastic containers, PET Preforms
                  </Card.Text>
              </Card.Body>
              </Card>

              <Card className='carr'>
              <BsTruck  color='white' size={40} className = 'bspro'/>
              <Card.Title as='h4' className='text-white'>Manufacturing services</Card.Title>
              <Card.Body>
                  <Card.Text as='p' className='prcardp text-white'>
                  We manufacture customized Jerrycans, Plastic containers, and PET Preforms 
                  according to our clients preference. We may require a mold or a raw material purchase
                  depending on the request.
                  </Card.Text>
              </Card.Body>
             </Card>

             <Card className='carr'>
             <FaFlask color = 'white' size = {40} className = 'bspro'/>
             <Card.Title as='h4' className='text-white'>Imported raw materials</Card.Title>
             <Card.Body>
                  <Card.Text as='p' className='prcardp text-white'>
                  We import and sell multiple chemicals and raw materials. SLES, Labsa 96%, HDPE, Glycerin, 
                  Ethyl Alcohol 96%, Caster oil, etc...
                  </Card.Text>
              </Card.Body>

                
            </Card>

          </div>
      </div>

      <div ref={oily} className='forOil'>
          <h2 className='text-primary'> Oil and Seeds</h2>
          <div className='oilFirst'>
          <Card className='bg-info carprOil'>
              <Card.Text as = 'h5'>
                 We specialize in manufacturing different types of detergents and cleaning chemicals. In addition, 
                we have scaled our business by manufacturing plastic containers and PET Preforms.</Card.Text> </Card>
          <Image className='imOil1' src='https://foreignpolicy.com/wp-content/uploads/2021/10/ethiopia-hawassa-women-garment-industry.jpg?w=1500'/>
          </div>
         <div className='oilLs'>
            <OilList1/>
         </div>

      </div>

      <div className='priceq'>
        <ProductForm/>
      </div>
       
    </div>
  )
}

export default ProductsScreen
import React from 'react'
import Layout from '../Main5/Layout'
import { FaSquareFull } from 'react-icons/fa'
import { product } from './card'

function Main5() {
  return (
    <div>
       <div className='sm:flex-col' style={{width:"100%",height:"100vh", display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div className='sm:flex-col lg:flex-row' style={{width:"90%",height:"80vh",display:"flex",justifyContent:"center",gap:"2rem"}}>
          <div>
            <div style={{display:"flex",alignItems:"center",gap:"2rem"}}>
                  <div>
                      <FaSquareFull style={{color:"#0000ff",fontSize:"10px"}} />
                  </div>
                  <div>
                      <p style={{fontWeight:"bold"}}>PRODUCTS</p>
                  </div>
              </div>
              <p className='mt-5' style={{fontSize:"3rem",fontWeight:"bolder"}}>Our HR Tool</p>
              <p className='mt-5'>Our job grading and evaluation tool, combined with the compensation management tool, is a highly effective SaaS-based solution. It greatly assists HR consultants and managers in carrying out their roles with efficiency and precision.</p>
            </div>

            <div className='sm:flex-col md:flex-col lg:flex-row' style={{display:"flex",justifyContent:"center",gap:"2rem"}}>
              {
                product.map((items,key)=>{
                  return(
                    <Layout key={key} data={items}/>  
                  )
                })
              }
            </div>
            
        </div>
    </div>
    </div>
  )
}

export default Main5
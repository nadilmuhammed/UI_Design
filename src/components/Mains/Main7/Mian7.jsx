import React from 'react'
import { FaSquareFull } from 'react-icons/fa'
import Layout from '../Main7/Layout'

function Mian7() {
  return (
    <>
        <div style={{width:"100%",height:"100vh",background:"#172554", display:"flex",justifyContent:"center", alignItems:"center"}}>
            <div style={{width:"90%",height:"80%"}}>
                <div style={{display:"flex",gap:"2rem",alignItems:"center"}}>
                    <div>
                        <FaSquareFull style={{color:"#0000ff",fontSize:"5px"}} />
                    </div>
                    <div>
                        <p style={{fontWeight:"bold",color:"white",fontSize:"15px"}}>OUR TESTIMONIALS</p>
                    </div>
                </div>
                <p style={{color:"white",fontSize:"2.2rem",marginTop:"1rem"}}>What Customers Say About Us</p>


                <div style={{width:"100%",height:"80vh",padding:"1rem"}}>
                    <Layout/>
                </div>
            </div>
        </div>

    </>
  )
}

export default Mian7
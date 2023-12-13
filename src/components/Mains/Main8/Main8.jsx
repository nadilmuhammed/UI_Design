import React from 'react'
import { FaSquareFull } from 'react-icons/fa'

 
function Main8() {
  return (
    <>

        <div className='hidden  md:flex mt-0' style={{width:"100%",height:"100vh",justifyContent:"center",alignItems:"center"}}>
            <div style={{width:"80%",height:"50vh", padding:"2rem",background:"transparent"}}>
                <div style={{display:"flex",alignItems:"center",gap:"2rem",justifyContent:"center"}}>
                    <div>
                        <FaSquareFull style={{color:"#0000ff",fontSize:"5px"}} />
                    </div>
                    <div>
                        <p style={{fontWeight:"bold"}}>BRANDS WE WORK WITH</p>
                    </div>
                    <div>
                        <FaSquareFull style={{color:"#0000ff",fontSize:"5px"}} />
                    </div>
                </div>
                    <p style={{fontSize:"3rem",textAlign:"center"}}>Trusted by Thousands of Businesses</p>
                   
                   <div style={{display:"flex",flexDirection:"column",alignItems:"center",width:"80%",height:"50vh"}}>
                    <div className='md:w-20 lg:w-50 flex gap-4'>
                        <img src="https://www.ombrulla.com/_astro/dahua.d9dec1a0_1788pM.webp" alt="" />
                        <img src="https://www.ombrulla.com/_astro/unv.85d8fa6f_1oWCsP.webp" alt="" />
                        <img src="https://www.ombrulla.com/_astro/unv.85d8fa6f_1oWCsP.webp" alt="" />
                    </div>
                    <div className=' md:w-20 lg:w-50 flex gap-4'>
                        <img src="https://www.ombrulla.com/_astro/amazon.8aa611f6_Zkubpr.webp" alt="" />
                        <img src="https://www.ombrulla.com/_astro/hikvision.2a55c6c2_Z1UqjJV.webp" alt="" />
                        <img src="https://www.ombrulla.com/_astro/hikvision.2a55c6c2_Z1UqjJV.webp" alt="" />
                    </div>
                   </div>

                   

            </div>
            
        </div>
    </>
  )
}

export default Main8
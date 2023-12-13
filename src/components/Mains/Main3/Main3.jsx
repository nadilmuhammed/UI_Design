import React from 'react'
import { TbPlayerPlayFilled } from 'react-icons/tb'

function Main3() {
  return (
  <>
  <div style={{width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",background:"#1d4ed8"}}>
    <div className='sm:flex-col md:flex-col lg:flex-row' style={{width:"80%",height:"80vh",background:"#1d4ed8",display:"flex",alignItems:"center",gap:"10rem"}}>
      <div style={{color:"white"}}>
        <p>PETRAN<br/><span>PErformance - TRacking - ANalytics</span></p>
        <p></p>

        <div>
          <p>AI & IoT Enabled<br/>Asset Performance Management</p>
          <p>Petran offers an Asset Performance Management (APM) system that harnesses the power of artificial intelligence and the Internet of Things (IoT) to empower data-driven decision-making and enable proactive maintenance strategies.</p>
          <div className='btns'>
              
              <button id='main1btn'>Schedule call</button>
              <button id='main1btn2'><TbPlayerPlayFilled style={{color:"black"}} /></button>
              <a href="">Watch a video</a>
          </div>
        </div>

      </div>
      <div>
        <img style={{width:"60%"}} src="https://www.ombrulla.com/_astro/asset-performance-management-software.82e2a11d_29kMe4.webp" alt="" />
      </div>
    </div>
  </div>
  </>
  )
}

export default Main3
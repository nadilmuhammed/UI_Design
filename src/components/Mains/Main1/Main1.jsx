import React from 'react'
import "./main1.css"
import { TbPlayerPlayFilled } from "react-icons/tb"
import { Link } from 'react-router-dom'

function Main1() {
  return (
    <div className='main1 lg:flex-row md:flex-col sm:flex-col'>
        <div style={{marginTop:"1.5rem"}}>
            <h1 className='mainh1'>Manual<br/>Inspection is<br/><span style={{color:"#1e81b0",fontWeight:"lighter"}}>Slow and error-<br/>Prone</span> </h1>
            <p className='mainp'>AI-driven computer vision transforms manufacturing quality inspection, boosting precision and cost-efficiency while upholding product excellence.</p>
            <div className='btns'>
              
                <button id='main1btn'>Schedule call</button>
                <button id='main1btn2'><TbPlayerPlayFilled style={{fontSize:"1.5rem", color:"black"}} /></button>
                <a href="">Watch a video</a>
            </div>
        </div>
        <div>
            <img className='image sm:mt-10 md:mt-10' src="https://www.ombrulla.com/_astro/ai-visual-inspection_banner_1.f3232628_ZyIKMH.webp" alt="" />
        </div>
    </div>
  )
}

export default Main1

import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa"
import { Link } from 'react-router-dom'
import "./footer.css"

function Footer() {
  return (
    <div>
        <footer className='footer' style={{display:"flex",justifyContent:"space-around",color:"rgb(120, 152, 167)", background:"#04102a",padding:"2rem"}}>
            <div className='f1' style={{width:"20%",marginTop:"3rem"}}>
                <h1 style={{color:"white",fontSize:"30px"}}>About us</h1>
                    <p style={{marginTop:"1rem"}}>Ombrulla is an AI-driven company specializing in extracting insights from diverse data sources, including photos, videos, and data lakes. Our tailored solutions help businesses make data-driven decisions and improve their bottom line through automation and AI-powered analysis.</p>
                <div style={{display:"flex",justifyContent:"space-around",fontSize:"1.3rem",marginTop:"2rem",color:"white" }}>
                    <a href=''><FaFacebook /></a>
                    <a href=""><FaInstagram /></a>
                    <a href=""><FaTwitter /></a>
                    <a href=""><FaLinkedinIn /></a>
                    <a href=""><FaYoutube /></a>
                </div>
            </div>
            <div style={{marginTop:"3rem"}}>
                <h1 style={{color:"white",fontSize:"30px"}}>Our Services</h1>
                <div style={{marginTop:"1rem",display:"flex",flexDirection:"column",gap:"1.5rem"}}>
                    <a href='' >AI Infrastructure Inspection</a>
                    <a href=''>AI Visual Inspection</a>
                    <a href=''>AI Data Analytics</a>
                    <a href=''>AI People Tracking</a>
                </div>
            </div>
            <div style={{marginTop:"3rem"}}>
                <h1 style={{color:"white",fontSize:"30px"}}>Our Solutions</h1>
                <div style={{marginTop:"1rem",display:"flex",flexDirection:"column",gap:"1.5rem"}}>
                    <a href=''>Asset Performance Management</a>
                    <a href=''>Job Grading & Evaluation</a>
                    <a href=''>Compensation Management</a>
                </div>
            </div>
            <div style={{marginTop:"3rem"}}>
                <h1 style={{color:"white",fontSize:"30px"}}>Reach Us</h1>
                <div style={{display:"flex",flexDirection:"column",gap:"2rem",marginTop:"1rem"}}>
                    <div>
                        <p>United Kingdom, 53 Denton close</p>
                        <p>Redhill, Surrey, RH1 5LB</p>
                        <p>+44 787 999 3892</p>
                    </div>
                    <div>
                        <p>Germany, Schützenstraße 51A</p>
                        <p>Lübeck, 23558</p>
                        <p>+49 179 512 5812</p>
                    </div>
                    <div>
                        <p>India, No. 154/20, Royal Space</p>
                        <p>Third Floor TI, HSR Layout,</p>
                        <p>Bangalore, Karnataka</p>
                        <p>560102</p>
                        <p>+91 85900 56435</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer
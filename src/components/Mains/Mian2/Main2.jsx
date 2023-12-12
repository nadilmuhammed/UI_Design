import React from 'react'
import { FaSquareFull } from 'react-icons/fa'
import { TbPlayerPlayFilled } from 'react-icons/tb'

function Main2() {
  return (
    <>
        <div style={{width:"100%",height:"100vh", display:"flex",justifyContent:"center",alignItems:'center'}}>
            <div style={{width:"80%",height:"80vh", backgroundColor:"rgb(207 215 230)",borderRadius:"2rem",padding:"6rem"}}>
                <div style={{marginLeft:"10rem"}}>
                    <div style={{display:"flex",alignItems:"center",gap:"2rem"}}>
                        <div>
                            <FaSquareFull style={{color:"#0000ff",fontSize:"10px"}} />
                        </div>
                        <div>
                            <p style={{fontWeight:"bold"}}>The Best AI Service Provider</p>
                        </div>
                    </div>
                    <p style={{fontWeight:"bolder",fontSize:"2.8rem"}}><span>Crafting Tomorrow's World</span><br/>With <span style={{color:"#004eff"}}>AI Excellence   </span></p>
                    <p style={{width:"80%"}}>The majority of customers lack data-driven insights and automation. Using AI, Ombrulla assist clients in extracting data from diverse sources such as photos, videos, and data lakes, which can assist businesses in making data-driven insights and improving their bottom line.</p>
                    <div style={{display:"flex",alignItems:"center",gap:"2rem",marginTop:"2rem"}}>
                        <div>
                            <button id='main1btn2'><TbPlayerPlayFilled style={{fontSize:"1.5rem", color:"black"}} /></button>
                        </div>
                        <div>
                            <p>Watch Coorporate video</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Main2
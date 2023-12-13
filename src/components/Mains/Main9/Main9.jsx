import React from 'react'
import { FaSquareFull } from 'react-icons/fa'
import Content from './Content'
import { contentData } from './review'

function Main9() {
  return (
    <>
        <div style={{display:"flex",textAlign:"center",justifyContent:"center",gap:"2rem"}}>
            <div>
                <FaSquareFull className='w-2' style={{color:"#0000ff"}} />
            </div>
            <div>
                <p className='text-sm' style={{fontWeight:"bold"}}>BLOG UPDATES</p>
            </div>
            <div>
                <FaSquareFull className='w-2' style={{color:"#0000ff"}} />
            </div>
        </div>
        <div>
            <p className='text-5xl justify-center text-center mt-5 '>To Read</p>
        </div>

        <div style={{width:"100%",height:"100vh", display:"flex",justifyContent:"center",alignItems:"center"}}>
            <div style={{width:"90%",height:"80vh",display:"flex",justifyContent:"center",alignItems:"center",gap:"2rem"}}>
                {
                    contentData.map((items,key)=>{
                        return(
                            <Content key={key} data={items} />
                        )
                    })
                }
            </div>

        </div>
    </>
  )
}

export default Main9
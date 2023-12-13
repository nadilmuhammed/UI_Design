// import React from 'react'
// import { FaLongArrowAltRight, FaSquareFull } from 'react-icons/fa'
// import "./main4.css"

// function Layout({data}) {


//     const { p1,p2,li1span1,li1span2,li2span1,li2span2,li3span1,li3span2,li4span1,li4span2,image } = data;

//   return (
//     <>

// <div style={{width:"100%",height:"100vh" ,display:"flex",justifyContent:"center",marginTop:"3rem"}}>
//             <div style={{width:"90%",height:"100vh",display:"flex",justifyContent:"center",gap:"4rem"}}>
//                 <div>
//                     <div style={{display:"flex",alignItems:"center",gap:"2rem"}}>
//                         <div>
//                             <FaSquareFull style={{color:"#0000ff",fontSize:"10px"}} />
//                         </div>
//                         <div>
//                             <p style={{fontWeight:"bold"}}>{p1}</p>
//                         </div>
//                     </div>
//                     <p style={{fontSize:"3rem",fontWeight:"bolder",width:"80%"}}>{p2}</p>
//                     <ul style={{listStyleType:"disc",display:"flex",justifyContent:"center",flexDirection:"column",gap:"1rem",marginTop:"1rem"}}>
//                         <li><span id='s1'>{li1span1}</span><span>{li1span2}</span></li>
//                         <li><span id='s1'>{li2span1}</span><span>{li2span2}</span></li>
//                         <li><span id='s1'>{li3span1}</span><span>{li3span2}</span></li>
//                         <li><span id='s1'>{li4span1}</span><span>{li4span2}</span></li>
//                     </ul>
//                     <div style={{display:"flex",alignItems:"center",gap:"2rem",marginTop:"2rem"}}>
//                         <div>
//                             <button id='main4btn'>Schedule call</button>
//                         </div>
//                         <div>
//                             <a href=''>Read More<FaLongArrowAltRight /></a>
//                         </div>
//                     </div>
//                 </div>
//                 <div>
//                     <img className='' style={{width:"100%",height:"70vh",borderRadius:"10px"}} src={image} alt="Ombrulla" />
//                 </div>
//             </div>
//         </div>


//     </>
//   )
// }

// export default Layout

import React from 'react';
import { FaLongArrowAltRight, FaSquareFull } from 'react-icons/fa';
import './main4.css';

function Layout({ data }) {
  const { p1, p2, li1span1, li1span2, li2span1, li2span2, li3span1, li3span2, li4span1, li4span2, image } = data;

  return (
    <>
      <div className="w-full min-h-screen flex justify-center mt-16" style={{width:"100%",height:"100vh" ,display:"flex",justifyContent:"center"    }}>
        <div style={{width:"90%",height:"100vh",display:"flex",justifyContent:"center",gap:"4rem"}}>
          
          <div>
          <div className="flex items-center gap-2">
            <div>
              <FaSquareFull className="text-blue-500 text-sm" />
            </div>
            <div>
              <p className="font-bold">{p1}</p>
            </div>
          </div>
            <p className="text-3xl font-bold w-80 m">{p2}</p>
            <ul className="list-disc flex justify-center flex-col gap-1 mt-4">
              <li>
                <span id="s1">{li1span1}</span>
                <span>{li1span2}</span>
              </li>
              <li>
                <span id="s1">{li2span1}</span>
                <span>{li2span2}</span>
              </li>
              <li>
                <span id="s1">{li3span1}</span>
                <span>{li3span2}</span>
              </li>
              <li>
                <span id="s1">{li4span1}</span>
                <span>{li4span2}</span>
              </li>
            </ul>
            <div className="flex items-center gap-2 mt-4">
              <div>
                <button id="main4btn" className="bg-blue-500 text-white py-2 px-4 rounded">
                  Schedule call
                </button>
              </div>
              <div>
                <a href="" className="text-blue-500">
                  Read More<FaLongArrowAltRight />
                </a>
              </div>
            </div>
          </div>
          <div className="hidden lg:block lg:w-full">
            <img src={image} alt="Ombrulla" className="w-full h-70vh rounded-10" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;

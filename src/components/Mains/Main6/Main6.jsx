// import React from 'react'

// function Main6() {
//   return (
//     <div>

//     </div>
//   )
// }

// export default Main6
import { Carousel, IconButton } from "@material-tailwind/react";
import { FaSquareFull } from "react-icons/fa";
 
export default function CarouselCustomArrows() {
  return (
    <div style={{width:"100%",height:"60vh",marginBottom:"8rem"}}>
        <div style={{display:"flex",alignItems:"center",gap:"2rem",justifyContent:"center"}}>
            <div>
                <FaSquareFull style={{color:"#0000ff",fontSize:"5px"}} />
            </div>
            <div>
                <p style={{fontWeight:"bold"}}>OUR COSTOMERS</p>
            </div>
            <div>
                <FaSquareFull style={{color:"#0000ff",fontSize:"5px"}} />
            </div>
        </div>
        <p style={{textAlign:"center",fontSize:"3rem",fontFamily:"monospace"}}>They Trust Us </p>
    <Carousel
      className="rounded-xl"
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="blue-gray"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="blue-gray"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
    >
        <div style={{display:"flex",justifyContent:"center",gap:"5rem"}}>
      <img
        src="https://www.ombrulla.com/damac.webp"
        alt="image 1"
        className="h-full w-full object-cover"
        style={{width:"20%"}}
      />
      <img
        src="https://www.ombrulla.com/planet-fitness.webp"
        alt="image 2"
        className="h-full w-full object-cover"
        style={{width:"20%"}}
      />
      <img
        src="https://www.ombrulla.com/planet-fitness.webp"
        alt="image 3"
        className="h-full w-full object-cover"
        style={{width:"20%"}}
      />
        </div>
        <div style={{display:"flex",justifyContent:"center",gap:"5rem"}}>
            <img
            src="	https://www.ombrulla.com/planet-fitness.webp"
            alt="image 3"
            className="h-full w-full object-cover"
            style={{width:"20%"}}
        />
        <img
        src="	https://www.ombrulla.com/planet-fitness.webp"
        alt="image 3"
        className="h-full w-full object-cover"
        style={{width:"20%"}}
      />
      <img
        src="	https://www.ombrulla.com/planet-fitness.webp"
        alt="image 3"
        className="h-full w-full object-cover"
        style={{width:"20%"}}
      />
        </div>
    </Carousel>
    </div>
    
  );
}
import React from "react";

function Content({data}) {


    const { image,p1,p2,p3 } =data

  return (
    <div>
      <div>
        <img style={{ width: "90%", borderRadius: "1rem" }} src={image} alt=""/>
        <p className="text-lg mt-4">{p1}</p>
        <p className="text-gray-600 mt-4">{p2}</p>
      </div>
      <div className=" mt-4">
          <img style={{width:"10%",borderRadius:"4rem"}} src="https://www.ombrulla.com/_astro/zara-elizabeth.f546c493_wXvHD.webp" alt="" />
            <p>Zara Elizabeth</p>
            <p>{p3}</p>
        
      </div>
    </div>
  );
}

export default Content;

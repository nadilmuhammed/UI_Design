import React from 'react'
import Layout from './Layout'
import { productDetails } from './data';


function Main4() {
  return (
    <>
    {
        productDetails.map((items,key)=>{
            console.log(items,"items");
            return(
                <Layout key={key} data={items}/>
            )
        })
    }

    </>
  )
}

export default Main4
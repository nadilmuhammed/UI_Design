import React from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Main1 from "./components/Mains/Main1/Main1"
import Main2 from "./components/Mains/Mian2/Main2"

function App() {

  return (
    <>
     {/* <BrowserRouter>
     <Routes>
      <Route path="/" element={<Navbar/>}/>
      <Route element={<Main1/>}/>
     </Routes>
     </BrowserRouter> */}
     <Navbar/>
     <Main1/>
     <Main2/>
     <Footer/>
    </>
  )
}

export default App

import React from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Main1 from "./components/Mains/Main1/Main1"
import Main2 from "./components/Mains/Main2/Main2"
import Main3 from "./components/Mains/Main3/Main3"
import Main4 from "./components/Mains/Main4/Main4"
import Main5 from "./components/Mains/Main5/Main5"
import Main6 from "./components/Mains/Main6/Main6.jsx"
import Mian7 from "./components/Mains/Main7/Mian7.jsx"
import Main8 from "./components/Mains/Main8/Main8.jsx"
import Main9 from "./components/Mains/Main9/Main9.jsx"

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
     <Main4/>
     <Main3/>
     <Main5/>
     <Main6/>
     <Mian7/>
     <Main8/>
     <Main9/>
     <Footer/>
    </>
  )
}

export default App

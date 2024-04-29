import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Inicio } from "./components/inicio"
import Navbar from "./components/navbar"


function App() {

  return (
  
    <div className="app">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="" element/>
          <Route path="" element/>
        </Routes>
      </BrowserRouter>
    </div>
  

  )
}

export default App

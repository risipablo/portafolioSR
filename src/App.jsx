import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Inicio } from "./components/inicio"
import Navbar from "./components/navbar"
import { Experencia } from "./components/experencia"


function App() {

  return (
  
    <div className="app">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/experencia" elemet={<Experencia/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  

  )
}

export default App

import {  Route,  Routes,  } from "react-router-dom"
import { Inicio } from "./components/inicio"
import Navbar from "./components/navbar"
import { Experencia } from "./components/experencia"
import {Footer} from "./components/footer"
import Info from "./components/info"



function App() {


  return (
  
    <div className="app">
    
      <Navbar/>
      <Routes>
          <Route index  element={<Inicio/>}/>
          <Route path="/info" element={<Info/>}/>
          <Route path="/experencia" element={<Experencia/>}/>
        </Routes>
        <Footer/>
      
    </div>
  

  )
}

export default App

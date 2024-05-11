import {  Route,  Routes,  } from "react-router-dom"
import { Inicio } from "./components/inicio"
import Navbar from "./components/navbar"
import { Experencia } from "./components/experencia"
import {Footer} from "./components/footer"
import Info from "./components/info"
import Loader from "./components/loader"
import { useEffect, useState } from "react"


function App() {
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false),2000)
    return () => setTimeout(timer)
  },[])

  return (
    <div className="app">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar setLoading={setLoading} />
          <Routes>
            <Route index element={<Inicio />} />
            <Route path="/info" element={<Info />} />
            <Route path="/experencia" element={<Experencia />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App

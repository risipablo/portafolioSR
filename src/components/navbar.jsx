
import { useState } from "react";
import "../estilos/navbar.css"
import { NavLink } from "react-router-dom";
import logo from "../imagenes/logo.png"


function Navbar({setLoading}){

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toogleMenu = () =>{
        setIsMenuOpen(!isMenuOpen);
    }    

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    const handleNavigation = () => {
        setLoading(true);
        setTimeout(() => {
        setLoading(false); 
        }, 2000);
    };

    return(
        <nav>
            <div className="navbar">
                <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
                    <NavLink to="/"  onClick={closeMenu}>  <li className="active"  > <a > Inicio </a>  </li> </NavLink>
                    <NavLink to="/info" onClick={closeMenu}>  <li className="active">  Sobre mi </li>  </NavLink>
                    {/* <NavLink to="/experencia" onClick={closeMenu}>  <li className="active" > <a href="#experiencia"> Experiencia </a>  </li> </NavLink> */}
                    <li className="active" onClick={closeMenu}>  <a href="#contacto"> Contacto </a>   </li> 
                </ul>
                
                <div onClick={toogleMenu} className={`menu-icon ${isMenuOpen ? 'open' : ''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className='logo'> 
                <NavLink to="/" onClick={handleNavigation}><img src={logo} alt="" /></NavLink>
                </div>

                
            </div>
        </nav>
    )
}

export default Navbar;
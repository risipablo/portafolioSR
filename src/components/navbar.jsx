
import { useState } from "react";
import "../estilos/navbar.css"
import { NavLink } from "react-router-dom";

function Navbar(){

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toogleMenu = () =>{
        setIsMenuOpen(!isMenuOpen);
    }    

    const closeMenu = () => {
        setIsMenuOpen(false)
    }


    return(
        <nav>
            <div className="navbar">
                <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
                    <NavLink to="/info">  <li className="active" onClick={closeMenu}> <a> Sobre mi</a> </li>  </NavLink>
                    <NavLink to="/experencia">  <li className="active"  onClick={closeMenu}> <a href="#experiencia"> Experiencia </a>  </li> </NavLink>
                    <li className="active"  onClick={closeMenu}> <a href="#articulo"> Articulos </a>  </li> 
                    <li className="active" onClick={closeMenu}>  <a href="#contacto"> Contacto </a>   </li> 
                </ul>
                
                <div onClick={toogleMenu} className={`menu-icon ${isMenuOpen ? 'open' : ''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className='logo'> 
                <NavLink to="/">logo</NavLink>
                </div>

                
            </div>
        </nav>
    )
}

export default Navbar;
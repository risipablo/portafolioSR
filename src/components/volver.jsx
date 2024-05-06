import { useState } from 'react';


function Volver() {
  const [showButton, setShowButton] = useState(false);

  // Función para manejar el evento de desplazamiento
  const handleScroll = () => {
    if (window.pageYOffset > 300) { // Cambia 300 a la posición que desees
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  // Función para llevar al usuario al principio de la página
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Esto hace que el desplazamiento sea suave
    });
  };

  // Agregar el listener para el evento de scroll
  window.addEventListener('scroll', handleScroll);

  return (
    <div className="App">
      {/* El botón solo se muestra cuando showButton es true */}
      {showButton && (
        <button className="scroll-to-top-btn" onClick={scrollToTop}>
          Subir
        </button>
      )}
      {/* Aquí va el resto del contenido de tu aplicación */}
    </div>
  );
}

export default Volver;

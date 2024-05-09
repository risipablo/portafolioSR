
import imagen1 from "../imagenes/Foto.png"
import { Box, Button,Text,Flex,Link } from "@chakra-ui/react";
import "../estilos/inicio.css"
import { NavLink } from "react-router-dom"
import { Sliders } from "./slider";
import Formulario from "./formulario";
import { ArticuloInformativo } from "./articulos";
import { motion } from "framer-motion";
import Volver from "./volver";
import imagen from "../imagenes/logo.png"


export const Inicio = () => {

    return(
        
        <section className="container">
            <div className="container-foto">
                
                    <motion.img src={imagen1} 
                    alt="psico" 
                    />
                    

                <div className="titulos">
                    <motion.h1 
                        >
                        Sabrina Ramos
                    </motion.h1>
                    <motion.h2 
                        animate={{ y:-8}}
                        initial={{ y:-100}}> Lincencia en Psicologia</motion.h2>
                </div>
            </div>
            <Box className="info-section" textAlign="justify" maxW="800px" mx="auto" p="2rem" position="relative" overflow="hidden">
                <Box className="overlay"></Box>
                <Text fontSize={["lg", "lg", "xl"]} mb="4rem" letterSpacing="2px">
                    <p >
                    Me dedico a la psicólogia clínica y terapia familiar con 15 años de experiencia. Mi enfoque terapéutico se basa en técnicas humanistas, 
                    cognitivo-conductuales y sistémicas. Especializado en manejo del estrés, ansiedad, depresión, conflictos de pareja, crianza de hijos, duelo y trauma, ofrezco un espacio de apoyo y confianza para explorar pensamientos y emociones.
                    </p>
                </Text>
                <Flex justify="center" zIndex="1">
                    <NavLink to="/info">
                    <Button className="ver-mas"  borderRadius="9" 
                    width="200px"
                    background="#157a81" 
                    color="#ffff"
                    letterSpacing={1.2}
                    fontSize="1rem"
                    _hover={{ background: "#ffffff", color: "#000000" }}>
                        Ver Más
                        </Button>
                    </NavLink>
                </Flex>
            </Box>

            <section className="slider" id="experiencia">
                <h2> Mi experiencía</h2>
                
                <Sliders/>
                <Flex justify="center"  mt="2rem" >
                    <NavLink to="/experencia">
                    <Button className="ver-mas" borderRadius="9"
                    width="200px" 
                    letterSpacing={1}
                    p={6}
                    background="#157a81" 
                    _hover={0}
                    color="#ffff"
                    >Ver experiencia</Button>
                    </NavLink>
                </Flex>
            </section>

            <section className="icon-container">
                <i className="fa-solid fa-phone"></i>
                <p> Sesiones virtuales</p>
                <i className="fa-solid fa-people-arrows"></i>
                <p> Sesiones presenciales</p>
            </section>

            <Box className="info-consulta" textAlign="center" maxW="800px" mx="auto" p="2rem" position="relative" overflow="hidden">
                <Box className="overlay"></Box>
                <Text style={{ position: "relative", }}>
                    <h3>Todos merecemos ser escuchados</h3>
                    <Button className="ver-mas" borderRadius="9"
                    width="200px" 
                    letterSpacing={1.5}
                    p={6}
                    background="#157a81" 
                    _hover={{opacity:0.9}}
                    color="#ffff">
                    <Link href="#" fontSize="1rem" fontFamily="Montserrat">
                        Consultar
                    </Link>
                    </Button>
                </Text>
            </Box>


            <section className="tip" >
            
                <ArticuloInformativo/>
            </section> 

            <section className="impor">
                <img src={imagen} alt="logo"  />
            </section>

            <section className="formulario" id="contacto">
                <h2> Contacto </h2>
                <h4 className="titulo-formulario"
            style={{
                fontSize: "clamp(1rem, 5vw, 1.2rem)", 
                maxWidth: "90%", 
                margin: "2rem auto" 
            }}
            >
            Deja tus consultas, serán respondidas brevemente
            </h4>
                <Formulario/>
            </section>

            <Volver/>
        </section>
        
    )
}
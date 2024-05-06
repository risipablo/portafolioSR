
import imagen1 from "../imagenes/Foto.png"
import { Box, Button,Text,Flex } from "@chakra-ui/react";
import "../estilos/inicio.css"
import { NavLink } from "react-router-dom"
import { Sliders } from "./slider";
import Formulario from "./formulario";
import { ArticuloInformativo } from "./articulos";
import { Footer } from "./footer";
import { motion } from "framer-motion";
import Volver from "./volver";




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
                <Text fontSize={["md", "lg", "xl"]} mb="4rem" >
                    <p>
                    Soy [Nombre del Psicólogo], un psicólogo clínico y terapeuta familiar con [X] años de experiencia. Mi enfoque terapéutico se basa en técnicas humanistas, 
                    cognitivo-conductuales y sistémicas. Especializado en manejo del estrés, ansiedad, depresión, conflictos de pareja, crianza de hijos, duelo y trauma, ofrezco un espacio de apoyo y confianza para explorar pensamientos y emociones.
                    </p>
                </Text>
                <Flex justify="center" zIndex="1">
                    <NavLink to="">
                    <Button className="ver-mas"  borderRadius="9" width="200px">Ver Más</Button>
                    </NavLink>
                </Flex>
            </Box>

            <section className="slider" id="experiencia">
                <h2> Mi experiencía</h2>
                
                <Sliders/>
                <Flex justify="center"  mt="2rem" >
                    <NavLink to="">
                    <Button className="ver-mas" borderRadius="9" width="200px" 
                    background="#0d5b60" 
                    _hover={0}
                    color="#ffff">Ver experiencia</Button>
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
                <Text >
                        <h3> Todos merecemos ser escuchados</h3>
                </Text>
                <Flex justify="center" zIndex="1">
                </Flex>
            </Box>

            <section className="tip" id="articulo">
                <h2> Articulos </h2>
                <ArticuloInformativo/>
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

            <section className="footer">
                <Footer/>
            </section>

            <Volver/>
        </section>
        
    )
}
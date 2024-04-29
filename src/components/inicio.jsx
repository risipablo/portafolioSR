
import imagen1 from "../imagenes/psicologa.jpg"
import { Box, Button,Text,Flex } from "@chakra-ui/react";
import "../estilos/inicio.css"
import { NavLink } from "react-router-dom"
import { Sliders } from "./slider";
import Formulario from "./formulario";
import { ArticuloInformativo } from "./articulos";
import { Footer } from "./footer";



export const Inicio = () => {

    return(
        
        <section className="container">
            <div className="container-foto">
                <img src={imagen1} alt="" />
                
                <div className="titulos">
                    <h1>Sabrina Ramos</h1>
                    <h2> Lincencia en Psicologia</h2>
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
                    <Button className="ver-mas" borderRadius="full" width="200px">Ver Más</Button>
                    </NavLink>
                </Flex>
            </Box>

            <section className="slider" id="experiencia">
                <h2> Mi experiencía</h2>
                <Sliders/>
                <Flex justify="center"  mt="2rem" >
                    <NavLink to="">
                    <Button className="ver-mas" borderRadius="full" width="200px">Ver experiencia</Button>
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
                <Text fontSize={["md", "lg", "xl"]} mb="4rem" >
                    <h3>
                        No dudes en preguntar <br/>
                        Todos merecemos ser escuchados
                    </h3>
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
                <Formulario/>
            </section>

            <footer className="footer">
                <Footer/>
            </footer>

        </section>
        
    )
}
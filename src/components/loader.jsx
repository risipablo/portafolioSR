    import { motion, } from "framer-motion";
    import { Flex } from "@chakra-ui/react";
    import image1 from "../imagenes/icon1.png"; // Utiliza import sin llaves
    import fondo from "../imagenes/granulado2.jpg"

    const Loader = () => {
    return (
        <Flex
        justify="center"
        align="center"
        position="fixed"
        top="0"
        left="0"
        width="100%"
        height="100%"
        background="#F8ECE9 "
        bgImage={fondo}
        zIndex="9999"
        >
            
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
        >
        <motion.img
        src={image1}
        alt="spinner"
        style={{ width: "120px", height: "120px" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        </motion.div>
        </Flex>
    );
    };

    export default Loader;

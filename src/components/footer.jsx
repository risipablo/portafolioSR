    import { Flex, Box } from "@chakra-ui/react";

    export const Footer = () => {
    return (
        <Flex
        align="center"
        justify="center"
        p={4}
        width="100%"
        mt="auto"
        borderTop="1px solid white" // Agrega un borde superior blanco
        >
        <Box
            as="a"
            href="https://www.instagram.com/tucuenta"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            mr={12}
            mt={8}
            fontSize="2.2rem" // Aumenta el tamaño de los íconos
            color="white" // Cambia el color de los íconos a blanco
        >
            <i className="fa-brands fa-whatsapp"></i>
        </Box>
        <Box
            as="a"
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            mr={12}
            mt={8}
            fontSize="2.2rem"
             // Aumenta el tamaño de los íconos
            color="white" // Cambia el color de los íconos a blanco
        >
            <i className="fa-brands fa-instagram"></i>
        </Box>
        <Box
            as="a"
            href="mailto:tucorreo@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Correo electrónico"
            mr={2}
            mt={8}
            fontSize="2.2rem" // Aumenta el tamaño de los íconos
            color="white" // Cambia el color de los íconos a blanco
        >
            <i className="fa-brands fa-linkedin"></i>
        </Box>
        </Flex>
    );
    };

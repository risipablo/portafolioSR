    import { Flex, Box } from "@chakra-ui/react";

    export const Footer = () => {
    return (
        <section className="footer">
        <Flex
        justify="flex-start"
        width="100%"
        p={4}
        >
        <Box
            as="a"
            href="https://www.instagram.com/tucuenta"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            mr={12}
            mt={8}
            fontSize="2.2rem"
            color="#e2e2e6"
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
            color="#e2e2e6"
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
            fontSize="2.2rem"
            color="#e2e2e6"
        >
            <i className="fa-brands fa-linkedin"></i>
        </Box>
        </Flex>
        </section>

    );
    };

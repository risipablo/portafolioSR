    import { Flex, Box } from "@chakra-ui/react";

    export const Footer = () => {
    return (
        <section className="footer">
        <Flex justify="flex-start" width="100%" p={4}>
            <Box
            as="a"
            href="https://wa.me//299465-4519"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            mr={12}
            mt={8}
            fontSize="2.2rem"
            color="#e2e2e6"
            _hover={{ color: "#25D366", transition: "color 0.3s ease" }}
            >
            <i className="fa-brands fa-whatsapp"></i>
            </Box>
            <Box
            as="a"
            href="https://www.instagram.com/psicologiaintegral.cipolletti/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            mr={12}
            mt={8}
            fontSize="2.2rem"
            color="#e2e2e6"
            _hover={{ color: "#FF6F61", transition: "color 0.3s ease" }}
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
            _hover={{ color: "#022233", transition: "color 0.3s ease" }}
            >
            <i className="fa-brands fa-linkedin"></i>
            </Box>
        </Flex>
        </section>
    );
    };

import image1 from "../imagenes/image1.jpg"; 
import { Container, Box, Heading, Text, Button, VStack, SimpleGrid } from "@chakra-ui/react";

export const ArticuloInformativo = () => {
    return (
        <Container py="2">
            <SimpleGrid
                templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
                gap={6}
                mx={{ base: 2, md: 4 }}
            >
                {[  
                    { title: "Biodecodificación", description: "¿Qué es? ¿Para qué sirve? ¿Cuáles son sus beneficios?" },
                    { title: "Flores de Bach", description: "¿Cómo funciona? ¿Cómo tomarlo?" },
                    { title: "Signo y la Mente", description: "¿Cómo influye nuestro signo en nosotros?" },
                ].map((item) => (
                    <Box
                        key={item.title}
                        bgImage={image1}
                        bgSize="cover"
                        overflow="hidden"
                        color="white"
                        letterSpacing={1}
                        bgPosition="center center"
                        borderRadius="lg"
                        width={{ base: "100%"}}
                        p="3rem 1rem"
                        textAlign="center"
                        _hover={{ transform: "scale(1.04)", transition: "transform 0.3s ease" }}
                    >
                        <VStack spacing="6" align="center" h="100%" justifyContent="center" letterSpacing="2px">
                            <Heading as="h1" fontSize="1.8rem" fontWeight="600" mb="8">
                                {item.title}
                            </Heading>
                            <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="normal" mb="4">
                                {item.description}
                            </Text>
                            <Button
                                background="#157a81"
                                color="#ffff"
                                w="50%"
                                alignSelf="center"
                                letterSpacing={1.2}
                                fontSize="1.1rem"
                                _hover={{ background: "#ffffff", color: "#000000" }}
                            >
                                ver más
                            </Button>
                        </VStack>
                    </Box>
                ))}
            </SimpleGrid>
        </Container>
    );
};

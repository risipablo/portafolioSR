import { Box, Text, Button, VStack, Container } from "@chakra-ui/react";
import image1 from "../imagenes/image1.jpg";

export const ArticuloInformativo = () => {
return (
    <Container maxW="xl" py="2">
    <VStack spacing="6" align="stretch">
    <Box
        bgImage={image1}
        bgSize="cover"
        bgPosition="center"
        borderRadius="lg"
        overflow="hidden"
        color="white"
        textAlign="center"
        w="100%"
        h="300px"
        _hover={{ transform: "scale(1.04)" ,transition: "transform 0.3s ease"}} // Efecto hover en la imagen
        >
        <VStack spacing="6" align="center" h="100%" justifyContent="center">
            <Text fontSize="3xl" fontWeight="semibold" mb="4"> {/* Espacio entre textos */}
            Biodecodificación
            </Text>
            <Text fontSize="lg" fontWeight="normal" mb="4"> {/* Espacio entre textos */}
            ¿Qué es? ¿Para qué sirve? ¿Cuáles son sus beneficios?
            </Text>
            <Button
            colorScheme="blue"
            variant="outline"
            color="white"
            bg="red.500"
            _hover={{ bg: "red.600" }}
            _active={{ bg: "red.700" }}
            >
            Leer Más
            </Button>
        </VStack>
        </Box>
        <Box
        bgImage={image1}
        bgSize="cover"
        bgPosition="center"
        borderRadius="lg"
        overflow="hidden"
        color="white"
        textAlign="center"
        w="100%"
        h="300px"
        _hover={{ transform: "scale(1.04)" ,transition: "transform 0.3s ease"}}
        >
        <VStack spacing="6" align="center" h="100%" justifyContent="center">
            <Text fontSize="3xl" fontWeight="semibold"  mb="4">
            Flores de Bach
            </Text>
            <Text fontSize="lg" fontWeight="normal"  mb="4">
            ¿Cómo funciona? ¿Cómo tomarlo?
            </Text>
            <Button
            colorScheme="blue"
            variant="outline"
            color="white"
            bg="red.500"
            _hover={{ bg: "red.600" }}
            _active={{ bg: "red.700" }}
            >
            Leer Más
            </Button>
        </VStack>
        </Box>
        <Box
        bgImage={image1}
        bgSize="cover"
        bgPosition="center"
        borderRadius="lg"
        overflow="hidden"
        color="white"
        textAlign="center"
        w="100%"
        h="300px"
        _hover={{ transform: "scale(1.04)" ,transition: "transform 0.3s ease"}}
        >
        <VStack spacing="6" align="center" h="100%" justifyContent="center">
            <Text fontSize="3xl" fontWeight="semibold"  mb="4">
            Signo y la Mente
            </Text>
            <Text fontSize="lg" fontWeight="normal"  mb="4">
            ¿Cómo influye nuestro signo en nosotros?
            </Text>
            <Button
            colorScheme="blue"
            variant="outline"
            color="white"
            bg="red.500"
            _hover={{ bg: "red.600" }}
            _active={{ bg: "red.700" }}
            >
            Leer Más
            </Button>
        </VStack>
        </Box>
    </VStack>
    </Container>
);
};

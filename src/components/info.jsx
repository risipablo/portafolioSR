import { Text, Box } from "@chakra-ui/react";


const Info = () => {
    return (
        <Box className="info" fontFamily="poppins" p="1.2rem">
            <Text as="h2"  mb="2rem">¿Quién soy?</Text>
            <Text color="black" fontSize="1.2rem" fontWeight="500" letterSpacing="2px" m="2rem auto">
                Hola de nuevo, soy Sabrina Ramos, psicóloga graduada de la Universidad Nacional del Comahue. Desde hace varios años vengo transitando esta hermosa práctica, me he formado y dedicado al abordaje clínico basado en la medicina integrativa.
            </Text>

            <Text as="h4" fontSize="1.3rem" fontWeight="bold" m="2rem 0">Especialidades</Text>
            <Box as="ul" style={{ paddingLeft: "1.5rem", marginBottom: "1rem" , }}>
                <Box as="li" mb="1rem"  fontWeight="500"><Text color="black" fontSize="1.2rem" letterSpacing="0.05em">Psicología Clínica Integral (Adolescentes y Adultos)</Text></Box>
                <Box as="li" mb="1rem"  fontWeight="500"><Text color="black" fontSize="1.2rem" letterSpacing="0.05em">Técnicas basadas en Bioneuroemoción</Text></Box>
                <Box as="li" mb="1rem"  fontWeight="500"><Text color="black" fontSize="1.2rem" letterSpacing="0.05em">Programación Neurolingüística</Text></Box>
                <Box as="li" mb="1rem"  fontWeight="500"><Text color="black" fontSize="1.2rem" letterSpacing="0.05em">Técnicas de cambio de creencias</Text></Box>
                <Box as="li" mb="1rem"  fontWeight="500"><Text color="black" fontSize="1.2rem" letterSpacing="0.05em">Terapia Transgeneracional</Text></Box>
                <Box as="li" mb="1rem"  fontWeight="500"><Text color="black" fontSize="1.2rem" letterSpacing="0.05em">Terapia Floral</Text></Box>
                <Box as="li" mb="1rem"  fontWeight="500"><Text color="black" fontSize="1.2rem" letterSpacing="0.05em">Neurorehabilitación</Text></Box>
            </Box>
        </Box>
    )
}

export default Info;
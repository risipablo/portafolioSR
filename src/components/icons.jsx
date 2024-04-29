
import { Box, Image, VStack,Text} from "@chakra-ui/react";
import icon1 from "../imagenes/icon1.png";
import icon2 from "../imagenes/icon2.png";
import icon3 from "../imagenes/icon3.png";

export function Icons() {
    const icons = [
        { icon: icon1, text: "Pensar" },
        { icon: icon2, text: "Expresar" },
        { icon: icon3, text: "Dialogar" },
    ];

    return (
        <Box className="iconos" p={4} maxW="800px" mx="auto">
        <VStack spacing={8} align="center">
            {icons.map((item, index) => (
            <Box key={index} textAlign="justify">
                <Image src={item.icon} alt={item.text} boxSize="5em" />
                <Text fontSize="1.2rem" mt="1rem" className="texto-icon">{item.text}</Text>
            </Box>
            ))}
        </VStack>
        </Box>
    );
}

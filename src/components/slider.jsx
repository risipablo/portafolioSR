import { useState } from 'react';
import { Slider, Image, Box, IconButton, Flex,Text } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import image1 from "../imagenes/image1.jpg";
import image2 from "../imagenes/image2.jpg";
import image3 from "../imagenes/image3.jpg";

export const Sliders = () => {
    const imagenes = [
        { src: image1, text: "Sesiones en consultorios" },
        { src: image2, text: "Atencion de discapacidades" },
        { src: image3, text: "Coordinadora de areas" },
    ];

    const [imagenActual, setImagenActual] = useState(0);

    const handleChange = (value) => {
        setImagenActual(value);
    };

    const handleNext = () => {
        setImagenActual((imagenActual + 1) % imagenes.length);
    };

    const handlePrev = () => {
        const newIndex = imagenActual === 0 ? imagenes.length - 1 : imagenActual - 1;
        setImagenActual(newIndex);
    };

    return (
        <Box maxW='sm' mx='auto' position="relative">
            <Slider
                aria-label='Slider de imágenes'
                value={imagenActual}
                min={0}
                max={imagenes.length - 1}
                step={1}
                onChange={handleChange}
                thumbSize={6}
            >
                {imagenes.map((imagen, index) => (
                    <Box key={index}>
                        <Image
                            src={imagen.src}
                            fit='cover'
                            layout='fill'
                            style={{
                                display: index === imagenActual ? 'block' : 'none',
                                transition: 'opacity 3s ease-in-out'
                            }}
                        />
                        <Text fontSize="1.2rem" mt="1rem" className="texto-icon" color="#131212"
                        style={{
                            display: index === imagenActual ? 'block' : 'none',
                            transition: 'opacity 3s ease-in-out'
                        }}>
                            {imagen.text}
                        </Text>
                    </Box>
                ))}
            </Slider>
            <Flex justify="space-between" position="absolute" left={0} right={0} top="50%" transform="translateY(-50%)">
                <IconButton
                    aria-label="Previous Image"
                    icon={<ChevronLeftIcon w={8} h={8} />}
                    onClick={handlePrev}
                    size="xl"
                    isRound
                    ml={2}
                    position="absolute"
                    left={0}
                    top="50%"
                    transform="translateY(-50%)"
                />
                <IconButton
                    aria-label="Next Image"
                    icon={<ChevronRightIcon w={8} h={8} />}
                    onClick={handleNext}

                    size="xl"
                    isRound
                    mr={2}
                    position="absolute"
                    right={0}
                    top="50%"
                    transform="translateY(-50%)"
                />
            </Flex>
        </Box>
    );
};

    import { useState } from "react";
    import {
    FormControl,
    Input,
    Button,
    Select,
    VStack,
    Container,
    Grid,
    } from "@chakra-ui/react";

    const Formulario = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [tipoConsulta, setTipoConsulta] = useState("");
    const [mensaje, setMensaje] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Formulario enviado");
    };

    return (
        <Container maxW="xl">
        <Grid
            templateColumns={{ base: "1fr" }}
            gap={4}
            alignItems="center"
        >

            <form onSubmit={handleSubmit} >
            <VStack spacing={6} align="stretch">
                <FormControl>
                <Input
                    p={8}
                    type="text"
                    placeholder="Nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    color="black"
                    backgroundColor="white"
                    borderColor="#242323"
                    borderWidth="1px"
                />
                </FormControl>
                <FormControl>
                <Input
                    p={8}
                    type="text"
                    placeholder="Apellido"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                    color="black"
                    backgroundColor="white"
                    borderColor="#242323"
                    borderWidth="1px"
                />
                </FormControl>
                <FormControl>
                <Input
                    p={8}
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    color="black"
                    backgroundColor="white"
                    borderColor="#242323"
                    borderWidth="1px"
                />
                </FormControl>
                <FormControl>
                <Select
                    placeholder="Motivo"
                    value={tipoConsulta}
                    onChange={(e) => setTipoConsulta(e.target.value)}
                    color="black"
                    backgroundColor="white"
                    borderColor="#242323"
                    borderWidth="1px"
                >
                    <option value="consulta">Consulta</option>
                    <option value="reservar turno">Reservar Turno</option>
                </Select>
                </FormControl>
                <FormControl>
                <Input
                    p={12}
                    type="text"
                    placeholder="Mensaje"
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    color="black"
                    backgroundColor="white"
                    borderColor="#242323"
                    borderWidth="1px"
                />
                </FormControl>
                <Button
                colorScheme="blue"
                type="submit"
                fontSize="1.2rem"
                width="200px"
                margin="1rem auto"
                >
                Enviar
                </Button>
            </VStack>
            </form>
        </Grid>
        </Container>
    );
    };

    export default Formulario;


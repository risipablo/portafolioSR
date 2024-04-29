    import { useState } from "react";
    import {
    FormControl,
    Input,
    Textarea,
    Button,
    Select,
    VStack,
    Container,
    } from "@chakra-ui/react";

    const Formulario = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [tipoConsulta, setTipoConsulta] = useState("");
    const [mensaje, setMensaje] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log("Formulario enviado");
    };

    return (
    <Container maxW="xl">
        <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
            <FormControl>
            <Input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                variant="filled"
                color="black"
                _focus={{ bg: "white", color: "black" }}
            />
            </FormControl>
            <FormControl>
            <Input
                type="text"
                placeholder="Apellido"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
                variant="filled"
                color="black"
                _focus={{ bg: "white", color: "black" }}
            />
            </FormControl>
            <FormControl>
            <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="filled"
                color="black"
                _focus={{ bg: "white", color: "black" }}
            />
            </FormControl>
            <FormControl>
            <Select
                placeholder="Motivo"
                value={tipoConsulta}
                onChange={(e) => setTipoConsulta(e.target.value)}
                variant="filled"
                color="black"
                _focus={{ bg: "white", color: "black" }}
            >
                <option value="consulta">Consulta</option>
                <option value="reservar turno">Reservar Turno</option>
            </Select>
            </FormControl>
            <FormControl>
            <Textarea
                placeholder="Mensaje"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                variant="filled"
                color="black"
                _focus={{ bg: "white", color: "black" }}
            />
            </FormControl>
            <Button colorScheme="blue" type="submit"  fontSize="1.2rem" mt="1rem">
            Enviar
            </Button>
        </VStack>
        </form>
    </Container>
    );
    };

    export default Formulario;

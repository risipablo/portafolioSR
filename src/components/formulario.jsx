import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Input, Button, FormControl, Select, Container, Grid,VStack
} from '@chakra-ui/react';

export const Formulario = () => {
    const form = useRef();
    const [isFormValid, setIsValid] = useState(false);
    const [isEmailSent, setIsEmailSent] = useState(false);
    const [tipoConsulta, setTipoConsulta] = useState('consulta');

    const notifySuccess = () => toast.success("¡Su consulta ha sido enviada!");
    const notifyError = () => toast.error("Por favor complete todos los campos del formulario.");

    const sendEmail = (e) => {
        e.preventDefault();

        if (isFormValid && !isEmailSent) {
            emailjs
                .sendForm('service_jsbhj2c', 'template_ncnlt7f', form.current, {
                    publicKey: '3Aon3ElzUvco9EjAq',
                })
                .then(
                    () => {
                        console.log("Correo enviado");
                        form.current.reset();
                        notifySuccess();
                        setIsEmailSent(true);
                    },
                    (error) => {
                        console.log('Error en el envío', error.text);
                    },
                );
        } else {
            notifyError();
        }
    };

    const handleInput = () => {
        const inputs = form.current.querySelectorAll("input, textarea");
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
            }
        });
        setIsValid(isValid);
    };

    return (
        
        <Container  maxW="xl">
        <ToastContainer
                    position="top-center"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                    toastStyle={{
                        fontSize: "1.2rem", // Ajusta el tamaño de fuente aquí
                    }}
                />
            <Grid
            templateColumns={{ base: "1fr" }}
            gap={4}
            alignItems="center"
            >
            
            <form ref={form} onSubmit={sendEmail}>
            <VStack spacing={6} align="stretch">

                <Input 
                p={6}
                color="black"
                backgroundColor="white"
                borderColor="#242323"
                borderWidth="1px"
                type="text" placeholder="Ingrese su nombre" name="user_name" onChange={handleInput} />
                <Input 
                p={6}
                color="black"
                backgroundColor="white"
                borderColor="#242323"
                borderWidth="1px"
                type="text" placeholder="Ingrese su apellido" name="user_lastname" onChange={handleInput} />
                <Input 
                p={6}
                color="black"
                backgroundColor="white"
                borderColor="#242323"
                borderWidth="1px"
                type="email" placeholder="Ingrese su correo electrónico" name="user_email" onChange={handleInput} />
                <FormControl>
                    <Select
                        name="user_question"
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
                color="black"
                backgroundColor="white"
                borderColor="#242323"
                borderWidth="1px"
                type="text" placeholder="Mensaje" name="message" onChange={handleInput} />
                
                </FormControl>
                <Button 
                colorScheme="blue"
                type="submit"
                fontSize="1.2rem"
                width="200px"
                margin="1rem auto"
                disabled={!isFormValid || isEmailSent} >Enviar</Button>

                </VStack>
            </form>
            </Grid>
        </Container>
    );
}

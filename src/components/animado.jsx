import { motion } from "framer-motion";
import imagen1 from "../imagenes/logo.png"
import { useState } from "react";

const LogoAnimado = ({ imagen }) => {
  const [isHovered, setIsHovered] = useState(false)

return (
    <motion.section
    className="impor"
    >
    <motion.img
        src={imagen1}
        alt="logo"
        animate={{
        rotate: isHovered ? 360 : 0,
        transition: { duration: 1 }
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onTapStart={() => setIsHovered(true)}
        onTap={() => setIsHovered(false)}
    />
    </motion.section>
);
};

export default LogoAnimado;

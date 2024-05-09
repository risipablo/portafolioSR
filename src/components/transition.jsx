
    import { motion } from 'framer-motion';

    const pageTransition = {
    in: {
        opacity: 1,
        x: 0
    },
    out: {
        opacity: 0,
        x: "-100%"
    }
    };

    const TransitionPage = ({ children }) => {
    return (
        <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransition}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: '#f0f0f0',
            overflow: 'hidden'
        }}
        >
        <div style={{ padding: '20px' }}>{children}</div>
        </motion.div>
    );
    };

    export default TransitionPage;

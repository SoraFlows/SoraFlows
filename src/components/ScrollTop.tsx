'use client';
import { motion, useScroll } from 'framer-motion';

function ScrollTop() {
    const { scrollYProgress } = useScroll();

    return (
        <>
            <motion.div style={{ scaleX: scrollYProgress }} className={'fixed top-0 left-0 right-0 h-[10px] bg-red-500 z-40'}/>
        </>
    );
}

export default ScrollTop;

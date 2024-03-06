'use client'
import {motion, useScroll} from 'framer-motion'

function ScrollTop() {
    const {scrollYProgress} = useScroll()

    return (
        <>
            <motion.div
                style={{scaleX: scrollYProgress}}
                className={
                    'fixed left-0 right-0 top-0 z-40 h-[10px] bg-red-500'
                }
            />
        </>
    )
}

export default ScrollTop

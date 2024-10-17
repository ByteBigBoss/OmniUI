"use client"
import React from 'react'

import { motion } from "framer-motion";

interface transitionProps {
    ease: "anticipate" | "backIn" | "backInOut" | "backOut" | "circIn" | "circInOut" | "circOut" | "easeIn" | "easeInOut" | "easeOut" | "linear";
    repeat: number;
    duration: number;
    delay?: number;
}

interface animateProps {
    start: number;
    middle: number
    end: number;
}

interface BouncingProps {
    children: React.ReactNode;
    animate: animateProps;
    transition: transitionProps;
}

const Bouncing = ({ children, animate, transition }: BouncingProps) => {

    return (
        <motion.div
            animate={{ y: [animate.start, animate.middle, animate.end] }}
            transition={{ ease: transition.ease, repeat: transition.repeat, duration: transition.duration, delay: transition.delay }}
        >
            {children}
        </motion.div>
    );
}

export default Bouncing

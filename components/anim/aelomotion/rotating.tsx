"use client"
import React from 'react';

import { motion } from "framer-motion";

interface transitionProps {
    repeat: number;
    duration: number;
    delay?:number;
}

interface RotateProps {
    children: React.ReactNode;
    rotate: number[];
    transition: transitionProps;
}

const Rotating = ({ children, rotate, transition }: RotateProps) => {

    return (
        <motion.div
            animate={{ rotate: rotate }}
            transition={{ duration: transition.duration, repeat: transition.repeat, delay: transition.delay }}
        >
            {children}
        </motion.div>
    );
};

export default Rotating;

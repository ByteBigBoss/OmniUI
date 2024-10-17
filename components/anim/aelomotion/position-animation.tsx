"use client"
import React, { useEffect } from 'react';

import { motion, useAnimation } from "framer-motion";

interface PositionProps {
    children: React.ReactNode;
    initial: ControlProps;
    animate: ControlProps;

}

interface ControlProps {
    opacity: number;
    y: number;
}

const PositionAnimation = ({ children, animate, initial }: PositionProps) => {

    const controls = useAnimation();

    useEffect(() => {
        controls.start({ opacity: animate.opacity, y: animate.y });
    });

    return (
        <motion.div animate={controls} initial={{ opacity: initial.opacity, y: initial.y }}>
            {children}
        </motion.div>
    );
}

export default PositionAnimation;

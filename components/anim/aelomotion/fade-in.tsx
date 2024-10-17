"use client"
import React from 'react';

import { motion } from "framer-motion";

const FadeIn = ({ children, animate, initial, className, transition }: FadeInProps) => {

    return (
        <motion.div
            initial={initial}
            animate={animate}
            transition={transition}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default FadeIn;

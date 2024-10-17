"use client"
import React from 'react';

import { motion } from "framer-motion";

interface OptimizedProps {
    children: React.ReactNode;
    className?: string;
}
const OptimizedComponent = ({ children, className }: OptimizedProps) => {

    return (
        <motion.div style={{ willChange: "transform" }} className={className}>
            {children}
        </motion.div>
    )
}

export default OptimizedComponent

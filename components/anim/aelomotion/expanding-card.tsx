"use client"
import React, { useState } from 'react';

import { motion } from "framer-motion";

interface CardProps {
    children: React.ReactNode;
    Head: React.ReactNode;
    className?: string;
    beforeTrigger: React.ReactNode;
    afterTrigger: React.ReactNode;
}

const ExpandingCard = ({ children, className, Head, beforeTrigger, afterTrigger }: CardProps) => {

    const [isExpanded, setIsExpanded] = useState(false);


    return (
        <motion.div layout onClick={() => setIsExpanded(!isExpanded)} className={className}>
            <motion.div layout>{Head}</motion.div>
            {isExpanded && <motion.div layout>
                {children}
            </motion.div>}
            <motion.div layout>
                {isExpanded ? afterTrigger : beforeTrigger}
            </motion.div>
        </motion.div>
    );
}

export default ExpandingCard;
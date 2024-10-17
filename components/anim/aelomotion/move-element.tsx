"use client"
import React from 'react'

import { motion } from "framer-motion";


const MoveElement = ({ children, animate, initial, transition, className }: MoveElementProps) => {

    return (
        <motion.div
            initial={initial}
            animate={animate}
            transition={transition}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export default MoveElement


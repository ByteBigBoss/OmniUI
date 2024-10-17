"use client"
import { AnimatePresence, motion } from "framer-motion";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface ModalProps {
    children: React.ReactNode;
    initial: number;
    animate: number;
    exit: number;
    isVisible: boolean;
}

const Modal = ({ children, animate, exit, initial }: ModalProps) => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen((prev) => !prev);
    }

    return (
        <AnimatePresence >
            {open && (
                <motion.div
                    initial={{ opacity: initial }}
                    animate={{ opacity: animate }}
                    exit={{ opacity: exit }}
                >
                    {children}
                </motion.div>
            )}
            <Button onClick={handleOpen} className='absolute bottom-[40px] hover:text-white dark:hover:text-black text-black bg-white drop-shadow-md'>{open ? "Close" : "Open"}</Button>
        </AnimatePresence>
    );
}

export default Modal;
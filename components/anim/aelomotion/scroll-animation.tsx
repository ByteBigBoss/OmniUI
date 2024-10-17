"use client";
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface ScrollProp {
    children: React.ReactNode;
    initial: ControlProps;
    animate: ControlProps;
    threshold?: number;
    className?:string;
}

const ScrollAnimation = ({ children, animate, initial, threshold = 0.5,className }: ScrollProp) => {

    const controls = useAnimation();
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    controls.start({ 
                        opacity: animate.opacity?animate.opacity:undefined,
                        y: animate.y?animate.y:undefined, 
                        x: animate.x?animate.x: undefined,
                        color: animate.color?animate.color:undefined, 
                        width: animate.width?animate.width:undefined, 
                        height: animate.height?animate.height:undefined, 
                        background:animate.background?animate.background:undefined
                    });
                }
            },
            { threshold }
        );

        const currentRef = ref.current; // Store ref.current in a variable

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef); // Use the variable in cleanup
            }
        };
    }, [controls, animate, threshold]);

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial={{ 
                opacity: initial?.opacity, 
                y: initial?.y, 
                x: initial?.x,
                color: initial?.color, 
                background: initial?.background, 
                width: initial?.width, 
                height: initial?.height
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default ScrollAnimation;

"use client";
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';


const TwoWayScrollAnimation = ({ children, animate, initial, reverse, threshold = 0.5, className }: ScrollProps) => {
    const controls = useAnimation();
    const ref = useRef<HTMLDivElement>(null);
    const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
    const [lastScrollTop, setLastScrollTop] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
                setScrollDirection('down');
            } else {
                setScrollDirection('up');
            }
            setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    if (scrollDirection === 'down') {
                        controls.start({ 
                            opacity: animate.opacity?animate.opacity:undefined,
                            y: animate.y?animate.y:undefined, 
                            x: animate.x?animate.x: undefined,
                            color: animate.color?animate.color:undefined, 
                            width: animate.width?animate.width:undefined, 
                            height: animate.height?animate.height:undefined, 
                            background:animate.background?animate.background:undefined
                        });
                    } else {
                        controls.start({ 
                            opacity: reverse.opacity?reverse.opacity:undefined, 
                            y: reverse.y?reverse.y:undefined,
                            x: reverse.x?reverse.x: undefined,
                            color: reverse.color?reverse.color:undefined, 
                            width: reverse.width?reverse.width:undefined, 
                            height: reverse.height?reverse.height:undefined, 
                            background:reverse.background?reverse.background:undefined 
                        });
                    }
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
    }, [controls, animate, reverse, threshold, scrollDirection]);

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

export default TwoWayScrollAnimation;

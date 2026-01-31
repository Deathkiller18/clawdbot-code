'use client';
import { motion } from 'framer-motion';

interface RevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    className?: string;
    delay?: number;
    overflow?: "hidden" | "visible";
}

export default function Reveal({ children, width = "fit-content", className = "", delay = 0, overflow = "hidden" }: RevealProps) {
    return (
        <div style={{ position: "relative", width, overflow }} className={className}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 30, filter: 'blur(8px)' }, // Reduced y, reduced blur
                    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }} // Removed negative margin to trigger sooner
                transition={{ duration: 0.6, delay, ease: "easeOut" }} // Slightly faster
                style={{ height: "100%" }} // Ensure motion div takes full height of parent
            >
                {children}
            </motion.div>
        </div>
    );
}

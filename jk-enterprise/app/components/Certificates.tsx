'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Certificates.module.css';
import Reveal from './Reveal';

// Placeholder data - replace with actual certificate images
const certificates = [
    { id: 1, title: 'ISO 9001:2015', image: '/cert1-placeholder.jpg' },
    { id: 2, title: 'Safety Compliance', image: '/cert2-placeholder.jpg' },
    { id: 3, title: 'Excellence Award', image: '/cert3-placeholder.jpg' },
    { id: 4, title: 'Green Business', image: '/cert4-placeholder.jpg' },
    { id: 5, title: 'Labor Law Certified', image: '/cert5-placeholder.jpg' }
];

export default function Certificates() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % certificates.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
    };

    const getPosition = (index: number) => {
        // Calculate abstract distance in a circular buffer
        const total = certificates.length;
        // Normalize index relative to active (0 being center)
        let diff = (index - activeIndex + total) % total;

        // We want short paths, e.g. if we have 5 items: 0 is center, 1 is right, 4 is left (diff>total/2)
        if (diff > total / 2) diff -= total;

        if (diff === 0) return 'center';
        if (diff === 1) return 'right';
        if (diff === -1) return 'left';
        if (diff === 2) return 'far-right';
        if (diff === -2) return 'far-left';
        return 'hidden';
    };

    const variants = {
        center: { x: "-50%", y: "-50%", scale: 1, zIndex: 5, opacity: 1, filter: "blur(0px)" }, // Center absolute
        left: { x: "-130%", y: "-50%", scale: 0.8, zIndex: 3, opacity: 0.7, filter: "blur(2px)" },
        right: { x: "30%", y: "-50%", scale: 0.8, zIndex: 3, opacity: 0.7, filter: "blur(2px)" },
        "far-left": { x: "-180%", y: "-50%", scale: 0.6, zIndex: 1, opacity: 0, filter: "blur(5px)" },
        "far-right": { x: "80%", y: "-50%", scale: 0.6, zIndex: 1, opacity: 0, filter: "blur(5px)" },
        hidden: { x: "0%", y: "-50%", scale: 0.5, zIndex: 0, opacity: 0 },
    };

    return (
        <section className={`section ${styles.bg}`}>
            <div className="container">
                <div className={styles.header}>
                    <Reveal width="100%">
                        <h2 className={styles.heading}>Our <span className="text-gradient">Certifications</span></h2>
                    </Reveal>
                    <Reveal delay={0.1} width="100%">
                        <p className={styles.subheading}>Recognized for our compliance and quality standards.</p>
                    </Reveal>
                </div>

                <div className={styles.galleryContainer}>
                    {certificates.map((cert, index) => {
                        const position = getPosition(index);
                        return (
                            <motion.div
                                key={cert.id}
                                initial={false}
                                animate={position}
                                variants={variants}
                                transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 20 }}
                                className={styles.certFrame}
                                onClick={() => {
                                    if (position === 'left') handlePrev();
                                    if (position === 'right') handleNext();
                                }}
                            >
                                <div className={styles.certContent}>
                                    {/* Using a colored placeholder div instead of img for now since we don't have real files */}
                                    <div
                                        className={styles.certImage}
                                        style={{
                                            background: `hsl(${index * 60}, 70%, 90%)`,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#334155',
                                            fontWeight: 'bold',
                                            fontSize: '1.2rem'
                                        }}
                                    >
                                        {cert.title}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                <div className={styles.controls}>
                    <button className={styles.navBtn} onClick={handlePrev} aria-label="Previous">
                        <ChevronLeft size={24} />
                    </button>
                    <button className={styles.navBtn} onClick={handleNext} aria-label="Next">
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
}

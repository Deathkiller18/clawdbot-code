'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin } from 'lucide-react';
import styles from './Reach.module.css';
import Reveal from './Reveal';

// Adjusted positions for the SVG map
// Top/Left percentages based on the svg viewBox "0 0 600 500"
const cityData = [
    { name: "Gandhinagar", top: "28%", left: "67%" },
    { name: "Ahmedabad", top: "38%", left: "62%" },
    { name: "Vadodara", top: "50%", left: "73%" },
    { name: "Surat", top: "72%", left: "73%" },
    { name: "Bhavnagar", top: "65%", left: "56%" },
    { name: "Rajkot", top: "50%", left: "42%" },
    { name: "Jamnagar", top: "52%", left: "32%" }
];

export default function Reach() {
    const [activeCity, setActiveCity] = useState<string | null>(null);

    return (
        <section className="section container" id="reach">
            <div className={styles.wrapper}>
                <div className={styles.textContent}>
                    <Reveal>
                        <span className={styles.label}>Our Network</span>
                        <h2 className={styles.heading}>Reach All Over <span className="text-gradient">Gujarat</span></h2>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <p className={styles.description}>
                            We have an extensive network across the state. Hover over a location to see it on the map.
                        </p>
                    </Reveal>

                    <Reveal delay={0.2} width="100%">
                        <div className={styles.cityList}>
                            {cityData.map((city, i) => (
                                <span
                                    key={i}
                                    className={`${styles.cityTag} ${activeCity === city.name ? styles.activeTag : ''}`}
                                    onMouseEnter={() => setActiveCity(city.name)}
                                    onMouseLeave={() => setActiveCity(null)}
                                >
                                    <MapPin size={14} className={styles.pin} /> {city.name}
                                </span>
                            ))}
                            <span className={styles.moreTag}>+ Many more</span>
                        </div>
                    </Reveal>
                </div>

                <Reveal delay={0.3} width="100%" className={styles.mapContainer}>
                    <div className={styles.mapVisual}>
                        {/* User Provided Map Image */}
                        <img
                            src="/blank-map-state-gujarat-india-high-quality-municipalities-transparent-background-your-web-site-design-logo-app-ui-276563911.jpg"
                            alt="Gujarat Map"
                            className={styles.mapImage}
                        />

                        {cityData.map((city, index) => (
                            <div
                                key={index}
                                className={`${styles.dot} ${activeCity === city.name ? styles.activeDot : ''}`}
                                style={{ top: city.top, left: city.left }}
                            >
                                <AnimatePresence>
                                    {activeCity === city.name && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10, scale: 0.8 }}
                                            animate={{ opacity: 1, y: -25, scale: 1 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className={styles.tooltip}
                                        >
                                            {city.name}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

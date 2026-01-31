'use client';
import { Users, Briefcase, Award } from 'lucide-react';
import styles from './Experts.module.css';
import Reveal from './Reveal';

export default function Experts() {
    return (
        <section className={`section container`} id="about">
            <div className={styles.grid}>
                <div className={styles.content}>
                    <Reveal>
                        <span className={styles.label}>Who We Are</span>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className={styles.title}>Experts in Finding <span className="text-gradient">Right Manpower</span></h2>
                        <p className={styles.description}>
                            J K Enterprise is a premier manpower solution provider dedicated to bridging the gap between talent and opportunity.
                            We specialize in identifying the perfect fit for your organizational needs, ensuring efficiency, reliability, and growth.
                        </p>
                    </Reveal>

                    <Reveal delay={0.3} width="100%">
                        <div className={styles.stats}>
                            <div className={styles.statItem}>
                                <Users className={styles.icon} size={32} />
                                <span className={styles.statValue}>500+</span>
                                <span className={styles.statLabel}>Placements</span>
                            </div>
                            <div className={styles.statItem}>
                                <Briefcase className={styles.icon} size={32} />
                                <span className={styles.statValue}>50+</span>
                                <span className={styles.statLabel}>Clients</span>
                            </div>
                            <div className={styles.statItem}>
                                <Award className={styles.icon} size={32} />
                                <span className={styles.statValue}>10+</span>
                                <span className={styles.statLabel}>Years Exp.</span>
                            </div>
                        </div>
                    </Reveal>
                </div>

                <Reveal delay={0.2} width="100%">
                    <div className={styles.imageContainer}>
                        {/* Placeholder for an image - using a colored block for now or a generic placeholder URL */}
                        <div className={styles.placeholderImg}>
                            <span>Image from PDF Profile</span>
                        </div>
                        {/* Decorative blob behind image */}
                        <div className={styles.blob}></div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

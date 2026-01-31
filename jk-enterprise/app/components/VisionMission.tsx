'use client';
import { Target, Rocket, CheckCircle2 } from 'lucide-react';
import styles from './VisionMission.module.css';
import Reveal from './Reveal';

export default function VisionMission() {
    return (
        <section className={styles.section}>
            <div className={`container ${styles.container}`}>
                <div className={styles.header}>
                    <Reveal>
                        <span className={styles.label}>Future & Philosophy</span>
                        <h2 className={styles.heading}>Our Blueprint for <span className="text-gradient">Success</span></h2>
                    </Reveal>
                </div>

                <div className={styles.grid}>
                    {/* Vision Card */}
                    <Reveal width="100%" className="h-full">
                        <div className={`${styles.card} ${styles.visionCard}`}>
                            <div className={styles.iconWrapper}>
                                <Target size={32} />
                            </div>
                            <h3 className={styles.cardTitle}>Our Vision</h3>
                            <p className={styles.visionText}>
                                "To become a trusted and leading service partner delivering excellence, professionalism, and long-term value."
                            </p>
                        </div>
                    </Reveal>

                    {/* Mission Card */}
                    <Reveal width="100%" delay={0.2} className="h-full">
                        <div className={`${styles.card} ${styles.missionCard}`}>
                            <div className={styles.iconWrapper}>
                                <Rocket size={32} />
                            </div>
                            <h3 className={styles.cardTitle}>Our Mission</h3>
                            <ul className={styles.missionList}>
                                <li className={styles.missionItem}>
                                    <CheckCircle2 size={20} className={styles.checkIcon} />
                                    <span>To deliver reliable manpower and facility services.</span>
                                </li>
                                <li className={styles.missionItem}>
                                    <CheckCircle2 size={20} className={styles.checkIcon} />
                                    <span>To maintain quality, safety and compliance at all levels.</span>
                                </li>
                                <li className={styles.missionItem}>
                                    <CheckCircle2 size={20} className={styles.checkIcon} />
                                    <span>To build long-term relationships with transparency and commitment.</span>
                                </li>
                                <li className={styles.missionItem}>
                                    <CheckCircle2 size={20} className={styles.checkIcon} />
                                    <span>To provide trained, efficient, and dedicated workforce.</span>
                                </li>
                            </ul>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

'use client';
import { Heart, Star, Shield, Users } from 'lucide-react';
import styles from './CoreValues.module.css';
import Reveal from './Reveal';

const values = [
    { icon: <Heart size={32} />, title: "Integrity", desc: "We uphold the highest standards of honesty and strong moral principles." },
    { icon: <Star size={32} />, title: "Excellence", desc: "We are committed to delivering outstanding quality and results." },
    { icon: <Shield size={32} />, title: "Reliability", desc: "You can count on us to meet your staffing needs consistently." },
    { icon: <Users size={32} />, title: "Partnership", desc: "We believe in building long-term, mutually beneficial relationships." }
];

export default function CoreValues() {
    return (
        <section className="section container" id="core-values">
            <div className={styles.wrapper}>
                <div className={styles.intro}>
                    <Reveal>
                        <span className={styles.label}>Our Ethos</span>
                        <h2 className={styles.heading}>Our Core <span className="text-gradient">Values</span></h2>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <p className={styles.subheading}>The principles that guide our every action and decision.</p>
                    </Reveal>
                </div>

                <div className={styles.grid}>
                    {values.map((val, i) => (
                        <Reveal key={i} delay={i * 0.1} width="100%" className={styles.cardWrapper}>
                            <div className={styles.card}>
                                <div className={styles.iconBox}>{val.icon}</div>
                                <h3 className={styles.valueTitle}>{val.title}</h3>
                                <p className={styles.valueDesc}>{val.desc}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

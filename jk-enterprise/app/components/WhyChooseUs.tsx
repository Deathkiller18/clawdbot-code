'use client';
import { CheckCircle2 } from 'lucide-react';
import styles from './WhyChooseUs.module.css';
import Reveal from './Reveal';

const reasons = [
    "Proven track record of success with over 500+ placements.",
    "Dedicated support team available 24/7.",
    "Strict compliance with labor laws and regulations.",
    "Customized solutions tailored to your industry.",
    "Transparent and ethical business practices.",
    "Rapid turnaround time for urgent requirements."
];

export default function WhyChooseUs() {
    return (
        <section className={`section ${styles.bg}`} id="why-us">
            <div className="container">
                <div className={styles.header}>
                    <Reveal width="100%">
                        <h2 className={styles.heading}>Why Choose <span className="text-gradient">Us?</span></h2>
                    </Reveal>
                    <Reveal width="100%" delay={0.1}>
                        <p className={styles.subheading}>We deliver value beyond just manpower.</p>
                    </Reveal>
                </div>

                <div className={styles.grid}>
                    {reasons.map((reason, index) => (
                        <Reveal key={index} delay={index * 0.1} width="100%" className={styles.itemWrapper}>
                            <div className={styles.item}>
                                <CheckCircle2 className={styles.icon} size={24} />
                                <p className={styles.text}>{reason}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

'use client';
import { ClipboardList, Search, UserCheck, ShieldCheck } from 'lucide-react';
import styles from './HowWeWork.module.css';
import Reveal from './Reveal';

const steps = [
    {
        icon: <ClipboardList size={32} />,
        title: "Requirement Analysis",
        description: "We begin by understanding your specific workforce needs, culture, and project goals in detail."
    },
    {
        icon: <Search size={32} />,
        title: "Sourcing & Screening",
        description: "Our team rigorously sources and filters candidates to find the best match for the required skills."
    },
    {
        icon: <UserCheck size={32} />,
        title: "Deployment",
        description: "Selected candidates are onboarded and deployed smoothly to your location with necessary documentation."
    },
    {
        icon: <ShieldCheck size={32} />,
        title: "Support & Compliance",
        description: "We provide ongoing support and handle all statutory compliance to ensure hassle-free operations."
    }
];

export default function HowWeWork() {
    return (
        <section className={`section ${styles.bg}`} id="how-we-work">
            <div className="container">
                <div className={styles.header}>
                    <Reveal width="100%">
                        <span className={styles.label}>Our Process</span>
                        <h2 className={styles.heading}>How We <span className="text-gradient">Work</span></h2>
                    </Reveal>
                    <Reveal width="100%" delay={0.1}>
                        <p className={styles.subheading}>A streamlined approach to delivering excellence.</p>
                    </Reveal>
                </div>

                <div className={styles.grid}>
                    {steps.map((step, index) => (
                        <Reveal key={index} delay={index * 0.1} width="100%" className="h-full" overflow="visible">
                            <div className={styles.stepCard}>
                                <div className={styles.stepNumber}>0{index + 1}</div>
                                <div className={styles.iconWrapper}>
                                    {step.icon}
                                </div>
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                <p className={styles.stepDesc}>{step.description}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

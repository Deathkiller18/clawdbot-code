'use client';
import { UserCheck, ShieldCheck, Briefcase, TrendingUp } from 'lucide-react';
import styles from './Services.module.css';
import Reveal from './Reveal';

const services = [
    {
        icon: <UserCheck size={40} />,
        title: 'Manpower Solutions',
        description: 'Finding the right talent for your specific industry requirements skilled, semi-skilled, and unskilled labor.'
    },
    {
        icon: <Briefcase size={40} />,
        title: 'Staff Management',
        description: 'Comprehensive staff management support including payroll, compliance, and HR administration.'
    },
    {
        icon: <ShieldCheck size={40} />,
        title: 'Service Provider',
        description: 'Reliable corporate services tailored to enhance your operational efficiency.'
    },
    {
        icon: <TrendingUp size={40} />,
        title: 'Growth Consulting',
        description: 'Strategic advice to maximize productivity and streamline your workforce.'
    }
];

export default function Services() {
    return (
        <section className={`section ${styles.bg}`} id="services">
            <div className="container">
                <div className={styles.header}>
                    <Reveal width="100%">
                        <h2 className={styles.heading}>Our <span className="text-gradient">Services</span></h2>
                    </Reveal>
                    <Reveal width="100%" delay={0.1}>
                        <p className={styles.subheading}>Comprehensive workforce solutions designed for your success.</p>
                    </Reveal>
                </div>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <Reveal key={index} delay={index * 0.1} width="100%" className={styles.cardWrapper}>
                            <div className={styles.card}>
                                <div className={styles.iconWrapper}>
                                    {service.icon}
                                </div>
                                <h3 className={styles.cardTitle}>{service.title}</h3>
                                <p className={styles.cardDesc}>{service.description}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

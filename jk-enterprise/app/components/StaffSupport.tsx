'use client';
import styles from './StaffSupport.module.css';
import Reveal from './Reveal';

export default function StaffSupport() {
    return (
        <section className="section container" id="staff-support">
            <div className={styles.wrapper}>
                <div className={styles.imageCol}>
                    <Reveal>
                        <div className={styles.imagePlaceholder}>
                            <span>Support Team Image</span>
                        </div>
                    </Reveal>
                </div>

                <div className={styles.contentCol}>
                    <Reveal delay={0.2}>
                        <span className={styles.label}>Comprehensive Support</span>
                        <h2 className={styles.heading}>Staff Management <span className="text-gradient">Support</span></h2>
                    </Reveal>

                    <Reveal delay={0.3}>
                        <p className={styles.text}>
                            We don't just provide manpower; we manage it. Our dedicated support staff ensures that your workforce remains motivated, compliant, and productive.
                        </p>
                    </Reveal>

                    <Reveal delay={0.4} width="100%">
                        <ul className={styles.list}>
                            <li>On-site supervision and coordination</li>
                            <li>Payroll and statutory compliance management</li>
                            <li>Grievance handling and resolution</li>
                            <li>Training and skill development programs</li>
                        </ul>
                        <button className={styles.btn}>Learn More</button>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

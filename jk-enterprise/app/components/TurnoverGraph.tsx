'use client';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import styles from './TurnoverGraph.module.css';

const data = [
    { year: '2020', turnover: 20 },
    { year: '2021', turnover: 35 },
    { year: '2022', turnover: 50 },
    { year: '2023', turnover: 80 },
    { year: '2024', turnover: 120 },
];

export default function TurnoverGraph() {
    return (
        <section className={`section ${styles.bg}`} id="turnover">
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.heading}>Consistent <span className="text-gradient">Growth</span></h2>
                    <p className={styles.subheading}>Our yearly turnover reflects our commitment and client trust.</p>
                </div>

                <div className={styles.chartContainer}>
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorTurnover" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="year" stroke="#94a3b8" />
                            <YAxis stroke="#94a3b8" />
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.3} />
                            <Tooltip
                                contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px', color: '#fff' }}
                            />
                            <Area type="monotone" dataKey="turnover" stroke="#f59e0b" fillOpacity={1} fill="url(#colorTurnover)" strokeWidth={3} />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </section>
    );
}

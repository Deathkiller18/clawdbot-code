'use client';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, LabelList } from 'recharts';
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
                    <p className={styles.subheading}>Year-on-year financial performance reflecting our market strength.</p>
                </div>

                <div className={styles.chartContainer}>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorBar" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#ff9f43" stopOpacity={1} />
                                    <stop offset="100%" stopColor="#ff6b6b" stopOpacity={1} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                            <XAxis
                                dataKey="year"
                                stroke="#64748b"
                                tick={{ fill: '#64748b', fontSize: 14, fontWeight: 500 }}
                                tickLine={false}
                                axisLine={false}
                                dy={10}
                            />
                            <YAxis
                                stroke="#64748b"
                                tick={{ fill: '#64748b', fontSize: 13 }}
                                tickLine={false}
                                axisLine={false}
                                domain={[0, 140]}
                            />
                            <Tooltip
                                cursor={{ fill: 'rgba(0,0,0,0.02)' }}
                                contentStyle={{
                                    backgroundColor: '#fff',
                                    border: 'none',
                                    borderRadius: '8px',
                                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                                    padding: '12px'
                                }}
                                formatter={(value) => [`₹ ${value} Cr`, 'Turnover']}
                            />
                            <Bar
                                dataKey="turnover"
                                fill="url(#colorBar)"
                                radius={[8, 8, 0, 0]}
                                barSize={60}
                                animationDuration={1500}
                            >
                                <LabelList dataKey="turnover" position="top" fill="#64748b" fontSize={14} fontWeight={600} formatter={(val) => `${val} Cr`} />
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </section>
    );
}

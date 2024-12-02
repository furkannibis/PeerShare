"use client";
import dynamic from 'next/dynamic';
import 'chart.js/auto';

function getFirstAndLastFiveMinutes(): string[] {
    const now = new Date();
    const labels: string[] = [];

    for (let i = -5; i < 5; i++) { 
        const time = new Date(now.getTime() + i * 60000);
        labels.push(time.toTimeString().slice(0, 5)); 
    }

    return labels; 
}

const Line = dynamic(() => import('react-chartjs-2').then((mod) => mod.Line), {
    ssr: false,
});
const data = {
    labels: getFirstAndLastFiveMinutes(),
    datasets: [
        {
            label: 'Number of currently connected users',
            data: [1, 0, 1, 1, 1, 2, 1, 3, 4, 1],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
        },
    ],
};
export const LineChart = () => {
    return (
        <Line data={data} />
    );
};
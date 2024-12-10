"use client";
import dynamic from 'next/dynamic';
import 'chart.js/auto';

const Line = dynamic(() => import('react-chartjs-2').then((mod) => mod.Line), {
    ssr: false,
});

interface LineChartProps {
    title: string;
    conn_inf: { [date: string]: number };
}

export const LineChart = ({ title, conn_inf }: LineChartProps) => {
    // Verileri ve etiketleri oluşturma
    const labels = Object.keys(conn_inf);
    const dataValues = Object.values(conn_inf);

    // Chart.js verisi
    const chartData = {
        labels,
        datasets: [
            {
                label: title,
                data: dataValues,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
            },
        ],
    };

    return (
        <div>
            <Line data={chartData} />
        </div>
    );
};

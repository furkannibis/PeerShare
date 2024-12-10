"use client";
import dynamic from "next/dynamic";
import "chart.js/auto";

const Bar = dynamic(() => import("react-chartjs-2").then((mod) => mod.Bar), {
    ssr: false,
});

interface BarChartProps {
    title: string;
    conn_inf: { [date: string]: number };
}

export const BarChart = ({ title, conn_inf }: BarChartProps) => {
    const labels = Object.keys(conn_inf);
    const dataValues = Object.values(conn_inf);
    const barColors = [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(153, 102, 255, 0.5)",
        "rgba(255, 159, 64, 0.5)",
    ];

    const data = {
        labels,
        datasets: [
            {
                title: title,
                label: title,
                data: dataValues,
                backgroundColor: barColors.slice(0, dataValues.length),
                borderColor: barColors.slice(0, dataValues.length).map((color) =>
                    color.replace("0.5", "1")
                ),
                borderWidth: 1,
            },
        ],
    };

    return <Bar data={data} />;
};

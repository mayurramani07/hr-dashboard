'use client';

import React from 'react';
import {
  Bar,
  Line,
} from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import {
  mockEmployeeData,
  mockBookmarkTrend,
  getDepartmentAverageRatings,
} from '@/lib/analyticsData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

export default function ChartSection() {
  const avgData = getDepartmentAverageRatings(mockEmployeeData);

  const barData = {
    labels: avgData.map(d => d.department),
    datasets: [
      {
        label: 'Avg Rating',
        data: avgData.map(d => d.avgRating),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  };

  const lineData = {
    labels: mockBookmarkTrend.map(t => t.date),
    datasets: [
      {
        label: 'Bookmarks',
        data: mockBookmarkTrend.map(t => t.count),
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.2,
      },
    ],
  };

  return (
    <div className="grid md:grid-cols-2 gap-6 p-4">
      <div className="bg-white shadow-md rounded-xl p-6 dark:bg-gray-900">
        <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
          Avg Ratings by Department
        </h2>
        <Bar data={barData} />
      </div>

      <div className="bg-white shadow-md rounded-xl p-6 dark:bg-gray-900">
        <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
          Bookmark Trends
        </h2>
        <Line data={lineData} />
      </div>
    </div>
  );
}

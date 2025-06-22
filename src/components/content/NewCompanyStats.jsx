"use client";
import React, { useState, useEffect } from "react";

// Hook untuk animasi progress
const useProgress = (targetValue, duration = 2000) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progressPercent = Math.min(elapsed / duration, 1);

      const currentProgress = progressPercent * targetValue;
      setProgress(currentProgress);

      if (progressPercent < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [targetValue, duration]);

  return progress;
};

// Komponen Circular Progress
const CircularProgress = ({
  percentage,
  size = 120,
  strokeWidth = 8,
  primaryColor = "#4ade80",
  secondaryColor = "#e5e7eb",
  patternColor = "#374151",
}) => {
  const animatedProgress = useProgress(percentage, 2000);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset =
    circumference - (animatedProgress / 100) * circumference;

  return (
    <div className="relative inline-block">
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Pattern untuk bagian yang belum terisi */}
        <defs>
          <pattern
            id="diagonalHatch"
            patternUnits="userSpaceOnUse"
            width="4"
            height="4"
          >
            <path
              d="M 0,4 L 4,0 M -1,1 L 1,-1 M 3,5 L 5,3"
              stroke={patternColor}
              strokeWidth="1"
              opacity="0.3"
            />
          </pattern>
        </defs>

        {/* Background circle dengan pattern */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="url(#diagonalHatch)"
          strokeWidth={strokeWidth}
        />

        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={primaryColor}
          strokeWidth={strokeWidth}
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{
            transition: "stroke-dashoffset 0.1s ease-in-out",
          }}
        />
      </svg>
    </div>
  );
};

// Komponen Stats Item
const StatsItem = ({
  percentage,
  label,
  category,
  size = 120,
  primaryColor = "#4ade80",
}) => {
  const animatedPercentage = useProgress(percentage, 2000);

  return (
    <div className="flex flex-col items-center text-center space-y-4">
      {/* Percentage dan Progress Circle */}
      <div className="relative">
        <CircularProgress
          percentage={percentage}
          size={size}
          primaryColor={primaryColor}
        />
        {/* Percentage text di tengah */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-gray-900">
            {Math.round(animatedPercentage)}%
          </span>
        </div>
      </div>

      {/* Label */}
      <div className="space-y-1">
        <p className="text-sm font-medium text-gray-900">{category}</p>
        <p className="text-sm text-gray-500">{label}</p>
      </div>
    </div>
  );
};

// Main Stats Component
export default function CircularStats() {
  const statsData = [
    {
      percentage: 75,
      category: "Direct",
      label: "Customer",
      color: "#4ade80",
    },
    {
      percentage: 60,
      category: "Social Media",
      label: "Engagement",
      color: "#3b82f6",
    },
    {
      percentage: 85,
      category: "Email",
      label: "Marketing",
      color: "#8b5cf6",
    },
    {
      percentage: 90,
      category: "Organic",
      label: "Search",
      color: "#10b981",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Store Performance
        </h2>
        <p className="text-gray-600">Key metrics and statistics overview</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {statsData.map((stat, index) => (
          <StatsItem
            key={index}
            percentage={stat.percentage}
            category={stat.category}
            label={stat.label}
            primaryColor={stat.color}
            size={120}
          />
        ))}
      </div>

      {/* Summary Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Total Reach
          </h3>
          <p className="text-3xl font-bold text-blue-600">2600</p>
          <p className="text-sm text-gray-500 mt-1">+12% from last month</p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Repeat Order
          </h3>
          <p className="text-3xl font-bold text-green-600">40%</p>
          <p className="text-sm text-gray-500 mt-1">+2.75% from last month</p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Customer Satisfaction
          </h3>
          <p className="text-3xl font-bold text-purple-600">4.8/5</p>
          <p className="text-sm text-gray-500 mt-1">Based on 110 reviews</p>
        </div>
      </div>
    </div>
  );
}

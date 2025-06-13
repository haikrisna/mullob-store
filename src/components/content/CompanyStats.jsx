"use client";
import React, { useState, useEffect } from "react";

// Hook untuk animasi counter
const useCounter = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (start === end) return;

    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / (end - start)));

    const timer = setInterval(() => {
      setCount((prevCount) => {
        if (
          (increment > 0 && prevCount >= end) ||
          (increment < 0 && prevCount <= end)
        ) {
          clearInterval(timer);
          return end;
        }
        return prevCount + increment;
      });
    }, stepTime);

    return () => clearInterval(timer);
  }, [end, start, duration]);

  return count;
};

// Hook untuk animasi decimal counter
const useDecimalCounter = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (start === end) return;

    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const currentCount = start + (end - start) * progress;
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, start, duration]);

  return count;
};

// Komponen Arrow Icon
const TrendingUpIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
    <polyline points="17 6 23 6 23 12"></polyline>
  </svg>
);

const TrendingDownIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline>
    <polyline points="17 18 23 18 23 12"></polyline>
  </svg>
);

const StatCard = ({
  title,
  value,
  previousValue,
  suffix = "",
  isDecimal = false,
  decimalPlaces = 2,
}) => {
  const numericValue = parseFloat(value.toString().replace(/[,%]/g, ""));
  const numericPreviousValue = parseFloat(
    previousValue.toString().replace(/[,%]/g, "")
  );

  const animatedValue = isDecimal
    ? useDecimalCounter(numericValue, 2000, 0)
    : useCounter(numericValue, 2000, 0);

  const changePercent =
    ((numericValue - numericPreviousValue) / numericPreviousValue) * 100;
  const isPositive = changePercent > 0;
  const isNegative = changePercent < 0;

  const formatValue = (val) => {
    if (isDecimal) {
      return val.toFixed(decimalPlaces);
    }
    return Math.floor(val).toLocaleString();
  };

  const formatPreviousValue = (val) => {
    if (isDecimal) {
      return val.toFixed(decimalPlaces);
    }
    return val.toLocaleString();
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "24px",
        minHeight: "120px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Title */}
      <h3
        style={{
          fontSize: "14px",
          fontWeight: "500",
          color: "#6b7280",
          margin: "0 0 16px 0",
          letterSpacing: "0.025em",
        }}
      >
        {title}
      </h3>

      {/* Main Value */}
      <div>
        <div
          style={{
            fontSize: "32px",
            fontWeight: "700",
            color: "#4f46e5",
            margin: "0 0 8px 0",
            lineHeight: "1",
          }}
        >
          {formatValue(animatedValue)}
          {suffix}
        </div>

        {/* Previous value and change indicator */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "13px",
          }}
        >
          <span style={{ color: "#9ca3af" }}>
            from {formatPreviousValue(numericPreviousValue)}
            {suffix}
          </span>

          {/* Change percentage with icon */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              padding: "2px 8px",
              borderRadius: "4px",
              fontSize: "12px",
              fontWeight: "500",
              backgroundColor: isPositive
                ? "#dcfce7"
                : isNegative
                ? "#fef2f2"
                : "#f9fafb",
              color: isPositive
                ? "#16a34a"
                : isNegative
                ? "#dc2626"
                : "#6b7280",
            }}
          >
            {isPositive && <TrendingUpIcon />}
            {isNegative && <TrendingDownIcon />}
            {isPositive && "+"}
            {Math.abs(changePercent).toFixed(2)}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default function CompanyStats() {
  const statsData = [
    {
      title: "Total Subscribers",
      value: "71",
      previousValue: "30",
    },
    {
      title: "Avg. Open Rate",
      value: "58.16",
      previousValue: "56.14",
      suffix: "%",
      isDecimal: true,
    },
    {
      title: "Avg. Click Rate",
      value: "24.57",
      previousValue: "28.62",
      suffix: "%",
      isDecimal: true,
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "24px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "0",
          border: "1px solid #e5e7eb",
        }}
      >
        {statsData.map((stat, index) => (
          <div
            key={index}
            style={{
              borderRight:
                index < statsData.length - 1 ? "1px solid #e5e7eb" : "none",
            }}
          >
            <StatCard
              title={stat.title}
              value={stat.value}
              previousValue={stat.previousValue}
              suffix={stat.suffix}
              isDecimal={stat.isDecimal}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";
import React, { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Delay setting mounted to avoid hydration mismatch
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate, isMounted]);

  if (!isMounted) {
    return null; // Prevent hydration mismatch
  }

  const timeUnits = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <div className="flex justify-center gap-3 md:gap-6 mb-6 md:mb-8">
      {timeUnits.map((unit, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg md:rounded-xl px-3 py-2 md:px-6 md:py-4 min-w-[60px] md:min-w-[100px]">
            <span className="text-2xl md:text-5xl font-bold text-white tabular-nums">
              {String(unit.value).padStart(2, "0")}
            </span>
          </div>
          <span className="text-xs md:text-sm text-white/80 mt-2 uppercase tracking-wider font-medium">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;

import React, { useState, useEffect, useRef } from "react";
import { BsStopwatch } from "react-icons/bs";

const INITIAL_TIME = 15 * 60;

const Navbar = ({ category }) => {
  const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [timeLeft > 0]);

  const formatTime = (seconds) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${h}H : ${m}M : ${s}S`;
  };

  const isWarning = timeLeft <= 5 * 60;

  const timerClass = isWarning ? "text-red-600 animate-pulse" : "";

  return (
    <>
      <div className="flex justify-between items-center p-4 border-b">
        <h1 className="text-2xl font-semibold">{category}</h1>
        <div className="hidden md:flex items-center">
          <BsStopwatch className="text-xl mr-2" />
          <h1 className={`text-xl font-mono ${timerClass}`}>
            {formatTime(timeLeft)}
          </h1>
        </div>
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg cursor-pointer">
          Submit
        </button>
      </div>
      <div className="flex md:hidden justify-center mt-4 mb-2 items-center">
        <BsStopwatch className="text-xl mr-2" />
        <h1 className={`text-xl font-mono ${timerClass}`}>
          {formatTime(timeLeft)}
        </h1>
      </div>
    </>
  );
};

export default Navbar;

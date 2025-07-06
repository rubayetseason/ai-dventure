"use client";

import { useEffect, useState } from "react";

const messages = [
  "Analyzing destinations...",
  "Compiling travel data...",
  "Extracting key highlights...",
  "Generating itinerary ideas...",
  "Finalizing suggestions...",
];

const AiLoader = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  // Rotate text every 2 seconds
  useEffect(() => {
    const messageInterval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 2 * 1000);

    return () => clearInterval(messageInterval);
  }, []);

  // Hide the loader after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 12 * 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="text-white font-raleway bg-black flex justify-center items-center fixed top-0 left-0 w-dvw h-dvh">
      <div className="flex justify-center items-center gap-11">
        <div className="spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <h1
          key={index}
          className="text-3xl flex items-center gap-2 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-200 to-gray-500 animate-fade-in-out"
        >
          {messages[index]}
        </h1>
      </div>
    </div>
  );
};

export default AiLoader;

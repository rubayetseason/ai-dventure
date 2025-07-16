"use client";
import { useEffect, useState } from "react";

const Loader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5 * 1000); // 5 seconds

    return () => clearTimeout(timer); // cleanup
  }, []);

  if (!visible) return null;

  return (
    <div className="bg-black flex justify-center items-center fixed top-0 left-0 w-dvw h-dvh z-50">
      <div className="loading scale-110">
        <svg height="48px" width="64px">
          <polyline
            id="back"
            points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
          ></polyline>
          <polyline
            id="front"
            points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
          ></polyline>
        </svg>
      </div>
    </div>
  );
};

export default Loader;

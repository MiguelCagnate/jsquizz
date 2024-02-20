import React, { useState, useEffect } from "react";

const DigitalWatch: React.FC = () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const barcelonaTime = new Date().toLocaleString("en-US", {
        timeZone: "Europe/Madrid",
      });
      setTime(new Date(barcelonaTime));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (time: Date): string => {
    return time.toLocaleTimeString([], { hour12: false });
  };

  return (
    <div
      style={{
        fontSize: "36px",
        padding: "20px",
        width: "550px",
        textAlign: "center",
        fontFamily: "Roboto",
        letterSpacing: "10px",
      }}
    >
      <div>{formatTime(time)}</div>
    </div>
  );
};

export default DigitalWatch;

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
        fontSize: "13px",
        padding: "5px",
        width: "350px",
        textAlign: "center",
        fontFamily: "Roboto",
        letterSpacing: "7px",
      }}
    >
      <div>{formatTime(time)}</div>
    </div>
  );
};

export default DigitalWatch;

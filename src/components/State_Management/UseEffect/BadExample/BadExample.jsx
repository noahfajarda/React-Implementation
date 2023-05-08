import React, { useState, useEffect } from "react";

export default function BadExample() {
  const [time, setTime] = useState(0);

  // useEffect with dependency being the variable already being manipulated
  useEffect(() => {
    const interval = setInterval(() => {
      // function runs every 1 second
      setTime((t) => {
        return t + 1;
      });
    }, 1000);

    // return a cleanup function
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div>BadExample</div>
      <div>Time: {time}</div>
    </div>
  );
}

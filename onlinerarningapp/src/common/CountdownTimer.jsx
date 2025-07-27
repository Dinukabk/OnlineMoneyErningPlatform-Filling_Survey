import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ initialSeconds, onComplete }) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    if (seconds === 0) {
      onComplete?.();
      return;
    }

    const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
    return () => clearTimeout(timer);
  }, [seconds]);

  return <span>{seconds}s</span>;
};

export default CountdownTimer;

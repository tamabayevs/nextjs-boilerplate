import { useEffect, useState } from 'react';

export const Timer = () => {
  const [seconds, setSeconds] = useState(45);

  useEffect(() => {
    if (seconds <= 0) return;
    
    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  return (
    <div className="rounded-lg bg-white/10 p-3 text-center">
      Таймер на {seconds} секунд отчитывается
    </div>
  );
}; 
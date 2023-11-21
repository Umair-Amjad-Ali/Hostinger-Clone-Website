import { useState, useEffect } from "react";

const LiveClock = () => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const deadline = new Date("2024-1-15").getTime(); // Replace '2023-11-10' with your desired deadline date
      const timeLeft = deadline - now;
      setTimeRemaining({
        days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((timeLeft % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="flex gap-3 mt-5">
        <div className=" h-16 w-16  flex justify-center items-center rounded-md border-solid border-2 border-blue-950 text-2xl font-medium">
          {timeRemaining.days}
        </div>
        <p className="flex justify-center items-center text-lg">:</p>
        <div className="h-16 w-16  flex justify-center items-center rounded-md border-solid border-2 border-blue-950 text-2xl font-medium">
          {timeRemaining.hours}
        </div>
        <p className="flex justify-center items-center text-lg">:</p>
        <div className=" h-16 w-16  flex justify-center items-center rounded-md border-solid border-2 border-blue-950 text-2xl font-medium">
          {timeRemaining.minutes}
        </div>
        <p className="flex justify-center items-center text-lg">:</p>
        <div className=" h-16 w-16  flex justify-center items-center rounded-md border-solid border-2 border-blue-950 text-2xl font-medium">
          {timeRemaining.seconds}
        </div>
      </div>
    </div>
  );
};

export default LiveClock;

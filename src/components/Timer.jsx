import { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";
import Controls from "./Controls";

export default function Timer({ workTime, breakTime }) {
  const [time, setTime] = useState(workTime);
  const [isRunning, setIsRunning] = useState(false);
  const [isWorkSession, setIsWorkSession] = useState(true);

  useEffect(() => {
    let timer;
    if (isRunning && time > 0) {
      timer = setInterval(() => setTime((prev) => prev - 1), 1000);
    } else if (time === 0) {
      setIsWorkSession(!isWorkSession);
      setTime(isWorkSession ? breakTime : workTime);
      new Audio("/notification.mp3").play();
    }
    return () => clearInterval(timer);
  }, [isRunning, time, isWorkSession, workTime, breakTime]);

  // Tambahkan fungsi reset
  const resetTimer = () => {
    setIsRunning(false);
    setIsWorkSession(true);
    setTime(workTime);
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl">{isWorkSession ? "Work" : "Break"} Time</h2>
      <h1 className="text-5xl font-bold my-4">{Math.floor(time / 60)}:{String(time % 60).padStart(2, "0")}</h1>
      <ProgressBar progress={((isWorkSession ? workTime : breakTime) - time) / (isWorkSession ? workTime : breakTime) * 100} />
      <Controls isRunning={isRunning} setIsRunning={setIsRunning} resetTimer={resetTimer} />
    </div>
  );
}

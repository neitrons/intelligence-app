import { useEffect, useState } from "react";

type UseCountDownProps = {
  secondsAmount: number;
};

export function useCountDown({ secondsAmount }: UseCountDownProps) {
  const [seconds, setSeconds] = useState(secondsAmount);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let countdownInterval: NodeJS.Timeout;

    if (running) {
      countdownInterval = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 0) {
            clearInterval(countdownInterval);
            setRunning(false);
          }
          return prevSeconds > 0 ? prevSeconds - 1 : 0;
        });
      }, 1000);

      return () => clearInterval(countdownInterval);
    }
  }, [running]);

  function startTimer() {
    setRunning(true);
  }

  function stopTimer() {
    setRunning(false);
  }

  function continueTimer() {
    setRunning(true);
  }

  function stopReset() {
    setSeconds(secondsAmount);
    setRunning(false);
  }

  return { seconds, running, startTimer, stopTimer, stopReset, continueTimer };
}

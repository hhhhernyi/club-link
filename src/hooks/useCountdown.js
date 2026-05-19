import { useState, useEffect, useRef } from 'react';

/**
 * Counts down from `seconds` to 0.
 * Calls onComplete when it hits 0.
 * Returns { timeLeft, isRunning, reset, start, stop }
 */
export function useCountdown(seconds, onComplete) {
  const [timeLeft, setTimeLeft] = useState(seconds);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  const stop = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const start = () => {
    setIsRunning(true);
  };

  const reset = (newSeconds = seconds) => {
    stop();
    setTimeLeft(newSeconds);
  };

  useEffect(() => {
    if (!isRunning) return;
    intervalRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          setIsRunning(false);
          onCompleteRef.current?.();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  return { timeLeft, isRunning, start, stop, reset };
}

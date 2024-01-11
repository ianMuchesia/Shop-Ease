import React, { useState, useEffect, memo, useRef } from 'react';

const CountDownBox = () => {
  const targetDate = new Date('February 28, 2024 23:59:59').getTime();
  const countdownRef = useRef<HTMLDivElement | null>(null);
  const [isInViewport, setIsInViewport] = useState(false);

  const calculateTimeRemaining = () => {
    const now = new Date().getTime();
    const timeDifference = targetDate - now;

    if (timeDifference > 0) {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    } else {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
      clearInterval(intervalId.current!);
    }
  };

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const intervalId = useRef<NodeJS.Timeout | null>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries && entries[0]) {
//           setIsInViewport(entries[0].isIntersecting);
//         }
//       },
//       { threshold: 0.5 } // Adjust the threshold as needed
//     );

//     if (countdownRef.current) {
//       observer.observe(countdownRef.current);
//     }

//     return () => {
//       if (countdownRef.current) {
//         observer.unobserve(countdownRef.current);
//       }

//       if (intervalId.current) {
//         clearInterval(intervalId.current);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     if (isInViewport) {
//       calculateTimeRemaining();

//       intervalId.current = setInterval(() => {
//         calculateTimeRemaining();
//       }, 1000);
//     } else {
//       // Stop the countdown when the component is out of viewport
//       clearInterval(intervalId.current!);
//     }
//   }, [isInViewport]);

//   console.log('rendering countdown box')

  return (
    <div className="countdown" ref={countdownRef}>
      <div className="countdown-content">
        <p className="display-number">{days}</p>
        <p className="display-text">Days</p>
      </div>

      <div className="countdown-content">
        <p className="display-number">{hours}</p>
        <p className="display-text">Hours</p>
      </div>

      <div className="countdown-content">
        <p className="display-number">{minutes}</p>
        <p className="display-text">Min</p>
      </div>

      <div className="countdown-content">
        <p className="display-number">{seconds}</p>
        <p className="display-text">Sec</p>
      </div>
    </div>
  );
};

export default memo(CountDownBox);

import { useState } from "react";

export const useCountDown = (deadline: string) => {
  const countDownDate = new Date(deadline).getTime();
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  // Update the count down every 1 second
  const countDown = setInterval(function () {
    // Get today's date and time
    const now = new Date().getTime();
    // Find the distance between now and the count down date
    const distance = countDownDate - now;
    // Time calculations for days, hours, minutes and seconds
    setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    setSeconds(Math.floor((distance % (1000 * 60)) / 1000));

    if (distance < 0) {
      clearInterval(countDown);
    }
  }, 1000);
  return { days, hours, minutes, seconds };
};

export const useGetTimePassed = (createdAt: string) => {
  const countUpDate = new Date(createdAt).getTime();
  // console.log(countUpDate);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  // Update the count every 1 second
  const countUp = setInterval(function () {
    // Get today's date and time
    const now = new Date().getTime();
    // Find the distance between when it was created and now i.e current time passed
    const timePassed = now - countUpDate;
    // Time calculations for days, hours, minutes and seconds
    setDays(Math.floor(timePassed / (1000 * 60 * 60 * 24)));
    setHours(
      Math.floor((timePassed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    setMinutes(Math.floor((timePassed % (1000 * 60 * 60)) / (1000 * 60)));

    if (timePassed > 14869) {
      clearInterval(countUp);
      console.log("time up");
    }
  }, 1000);
  return { days, hours, minutes };
};

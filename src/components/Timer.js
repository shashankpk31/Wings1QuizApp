import React, { useState, useEffect } from "react";

// Define the Timer component
function Timer({time}) {
    // Initialize the time left state
    const [timeLeft, setTimeLeft] = useState(time); // 60 seconds

    // Set up an effect to update the timer
    useEffect(() => {
        // Define the function to update the time left
        function updateTimer() {
            // Decrement the time left by one
            setTimeLeft((prevTimeLeft) => {
                return prevTimeLeft !== 0 ? prevTimeLeft - 1 : 0;
            });
        }

        // Set up an interval to call the update timer function every second
        const interval = setInterval(updateTimer, 1000);

        // Clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, []);

    // Display the time left in minutes and seconds
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return (
        <div className="timer">
            {(minutes === 0 && seconds === 0) ?
                <>Time Ends</> : <>Time left: {minutes}:{seconds}</>}
        </div>
    );
}

export default Timer;
import React from 'react';
import { useCountdown } from './useCountdown';
import './App.css';

const ExpiredNotice = () => {
    return (
        <div>
            <span>Expired!!! your time is done!</span>
        </div>
    );
};

const ShowCounter = ({ hours, minutes, seconds }) => {
    return (
            <div className='output'>
            <p>{hours} : {minutes} : {seconds}</p>
            </div>
    );
};

const CountdownTimer = ({ targetDate }) => {
    const [hours, minutes, seconds] = useCountdown(targetDate);

    if (hours + minutes + seconds <= 0) {
        return <ExpiredNotice />;
    } else {
        return (
            <ShowCounter
                hours={hours}
                minutes={minutes}
                seconds={seconds}
            />
        );
    }
};

export default CountdownTimer;

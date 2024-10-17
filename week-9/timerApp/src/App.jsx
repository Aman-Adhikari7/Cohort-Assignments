import React, { useState, useEffect } from 'react';
import './App.css';

function TimerApp() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [editValue, setEditValue] = useState('');
  const [isTimeSet, setIsTimeSet] = useState(false);
  const [totalTime, setTotalTime] = useState(0);

  useEffect(() => {
    let interval = null;
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsRunning(false);
    }

    return () => clearInterval(interval);
  }, [isRunning, time]);

  const handleTimeInputChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,5}$/.test(value)) {
      setEditValue(value);
    }
  };

  const confirmAndStart = () => {
    const totalMinutes = parseInt(editValue, 10);
    if (!isNaN(totalMinutes) && totalMinutes > 0) {
      const seconds = totalMinutes * 60;
      setTime(seconds);
      setTotalTime(seconds);
      setIsTimeSet(true);
      setIsRunning(true);
    }
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
    setIsTimeSet(false);
    setEditValue('');
  };

  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const progress = totalTime > 0 ? (time / totalTime) * circumference : 0;
  const dashOffset = progress - circumference;

  const handleEditTime = (type) => {
    if (!isTimeSet) return;
    let newTime = time;

    switch (type) {
      case 'hours':
        newTime += 3600;
        break;
      case 'minutes':
        newTime += 60;
        break;
      case 'seconds':
        newTime += 1;
        break;
      default:
        break;
    }

    setTime(newTime);
    setTotalTime(newTime);
  };

  return (
    <div className="timer-app">
      <div className="timer-container">
        {isTimeSet ? (
          <div className="svg-timer">
            <svg className="progress-ring" width="200" height="200">
              <circle
                className="progress-ring__circle"
                stroke="blue"
                strokeWidth="10"
                fill="transparent"
                r={radius}
                cx="100"
                cy="100"
                style={{
                  strokeDasharray: circumference,
                  strokeDashoffset: dashOffset,
                  transform: 'rotate(0deg)',
                  transformOrigin: '50% 50%',
                }}
              />
            </svg>
            <div className="time-display" onClick={() => handleEditTime('minutes')}>
              {formatTime(time)}
            </div>
          </div>
        ) : (
          <div className="time-input-container">
            <input
              type="text"
              placeholder="Enter time (minutes)"
              value={editValue}
              onChange={handleTimeInputChange}
              className="time-input"
            />
            <button onClick={confirmAndStart} className="start-button">Start</button>
          </div>
        )}
      </div>

      {isTimeSet && (
        <div className="controls">
          <button onClick={() => setIsRunning(!isRunning)} className="pause-button">
            {isRunning ? 'Pause' : 'Resume'}
          </button>
          <button onClick={resetTimer} className="reset-button">Reset</button>
        </div>
      )}
    </div>
  );
}

export default TimerApp;








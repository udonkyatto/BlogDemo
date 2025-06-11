import React from 'react';
import "./TimeLine.css";

export const TimeLine = ({ date, setCategory }) => {
  const yearMonth = date.slice(0, 7); // "2024-06"
  
  const handleClick = () => {
    // 设置分类为当前年月（如 "2024-06"）
    setCategory(yearMonth);
  };

  return (
    <div className='time-container'>
      <a onClick={handleClick}>{yearMonth}</a>
    </div>
  );
};
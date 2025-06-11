import React from 'react';
import "./TimeLine.css";

export const TimeLine = ({ dates, selectedDate, onSelectDate }) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();

  // 1. 筛选当前月份的日期
  const currentMonthDates = dates.filter(date => {
    const d = new Date(date);
    return d.getFullYear() === currentYear && d.getMonth() === currentMonth;
  });

  // 2. 初始化计数数组（索引 0~currentDay-1，对应 1~currentDay 号）
  const contributionsByDay = Array(currentDay).fill(0);

  // 3. 统计每天的事件数
  currentMonthDates.forEach(date => {
    const day = new Date(date).getDate();
    if (day <= currentDay) {
      contributionsByDay[day - 1]++; // day=1 → index=0, day=11 → index=10
    }
  });

  // 4. 根据事件数量返回颜色等级
  const getColorIntensity = (count) => {
    if (count === 0) return 'level-0';
    if (count < 2) return 'level-1';
    if (count < 3) return 'level-2';
    if (count < 5) return 'level-3';
    return 'level-4';
  };

  // 5. 计算本月第一天是星期几
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  // 6. 生成日期字符串（YYYY-MM-DD）
  const formatDate = (day) => {
    return `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  };

  return (
    <div className='github-calendar'>
      <div className='day-labels'>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className='day-label'>{day}</div>
        ))}
      </div>
      <div className='calendar-grid'>
        {/* 填充空白格子 */}
        {Array(firstDayOfMonth).fill(0).map((_, i) => (
          <div key={`empty-${i}`} className='calendar-cell empty'></div>
        ))}

        {/* 渲染到当前日期的格子 */}
        {contributionsByDay.map((count, dayIndex) => {
          const day = dayIndex + 1; // dayIndex=0 → 1号, dayIndex=10 → 11号
          const dateStr = formatDate(day);
          const isSelected = selectedDate === dateStr;
          
          return (
            <div
              key={`day-${day}`}
              className={`calendar-cell ${getColorIntensity(count)} ${isSelected ? 'selected' : ''}`}
              onClick={() => onSelectDate(isSelected ? null : dateStr)}
              title={`${count} events on ${dateStr}`}
            >
              <div className='day-number'>{day}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
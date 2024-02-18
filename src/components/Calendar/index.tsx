import React, { useState, useImperativeHandle } from "react";
// import "./index.css";

const monthNames = [
  "一月",
  "二月",
  "三月",
  "四月",
  "五月",
  "六月",
  "七月",
  "八月",
  "九月",
  "十月",
  "十一月",
  "十二月",
];

interface CalendarProps {
  value?: Date;
  onChange?: (date: Date) => void;
}

interface CalendarRef {
  getDate: () => Date;
  setDate: (date: Date) => void;
}

function InternalCalendar(props: any, ref: any) {
  const { value = new Date(), onChange } = props;
  const [date, setDate] = useState(value);

  // 月份
  const handlePrevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  };

  // 日期部分
  const daysOfMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const renderDays = () => {
    const days = [];

    const daysCount = daysOfMonth(date.getFullYear(), date.getMonth());
    const firstDay = firstDayOfMonth(date.getFullYear(), date.getMonth());

    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div
          key={`empty-${i}`}
          className="basis-1/7 text-center leading-7"
        ></div>
      );
    }

    for (let i = 1; i <= daysCount; i++) {
      const clickHandler = onChange?.bind(
        null,
        new Date(date.getFullYear(), date.getMonth(), i)
      );

      // 传入的初始日期加hover效果
      if (i === date.getDate()) {
        days.push(
          <div
            key={i}
            onClick={clickHandler}
            className="basis-1/7 text-center leading-7 bg-gray-300 cursor-pointer"
          >
            {i}
          </div>
        );
      } else {
        days.push(
          <div
            key={i}
            onClick={clickHandler}
            className="basis-1/7 text-center leading-7 hover:bg-gray-300 cursor-pointer"
          >
            {i}
          </div>
        );
      }
    }

    return days;
  };

  useImperativeHandle(ref, () => {
    return {
      getDate() {
        return date;
      },
      setDate(date: Date) {
        setDate(date);
      },
    };
  });
  return (
    <div className="border border-gray-300 p-2 w-80 h-64">
      <div className="flex justify-between items-center h-10">
        <button onClick={handlePrevMonth}>&lt;</button>
        <div>
          {date.getFullYear()} 年 {monthNames[date.getMonth()]}
        </div>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>

      <div className="flex flex-wrap">
        <div className="basis-1/7  text-center leading-7 hover:bg-gray-300 cursor-pointer">
          日
        </div>
        <div className="basis-1/7 text-center leading-7 hover:bg-gray-300 cursor-pointer">
          一
        </div>
        <div className="basis-1/7 text-center leading-7 hover:bg-gray-300 cursor-pointer">
          二
        </div>
        <div className="basis-1/7 text-center leading-7 hover:bg-gray-300 cursor-pointer">
          三
        </div>
        <div className="basis-1/7 text-center leading-7 hover:bg-gray-300 cursor-pointer">
          四
        </div>
        <div className="basis-1/7 text-center leading-7 hover:bg-gray-300 cursor-pointer">
          五
        </div>
        <div className="basis-1/7 text-center leading-7 hover:bg-gray-300 cursor-pointer">
          六
        </div>
        {renderDays()}
      </div>
    </div>
  );
}

export default React.forwardRef(InternalCalendar);

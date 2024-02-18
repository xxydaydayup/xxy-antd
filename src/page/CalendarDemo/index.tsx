import React, { useRef, useEffect } from "react";

import Calendar from "../../components/Calendar";

interface CalendarRef {
  getDate: () => Date;
  setDate: (date: Date) => void;
}

function App() {
  const calendarRef = useRef<CalendarRef>(null);

  // 验证封装的Calendar组件暴露的方法getDate、setDate是否能使用
  useEffect(() => {
    // console.log(calendarRef.current?.getDate().toLocaleDateString());

    setTimeout(() => {
      calendarRef.current?.setDate(new Date(2024, 3, 4));
    }, 3000);
  }, []);
  return (
    <>
      <Calendar
        value={new Date("2023-8-2")}
        onChange={(date: Date) => {
          alert(date.toLocaleDateString());
        }}
      />
      {/* ref用来调用 Calendar组件暴露的api方法 */}
      <Calendar
        ref={calendarRef}
        value={new Date("2024-9-6")}
        onChange={(date: Date) => {
          alert(date.toLocaleDateString());
          calendarRef.current?.setDate(date);
        }}
      />
    </>
  );
}

export default App;

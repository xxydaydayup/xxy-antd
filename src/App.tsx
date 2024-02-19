import React, { useRef, useEffect } from "react";

import "./App.css";

import CalendarPage from "./page/CalendarDemo";
// 优化antd表单置灰时文字颜色太浅
import FormDisable from "./page/FormDisable";

import TestDemo from "./page/TestDemo";
import BetterCalendar from "./page/BetterCalendar";

function App() {
  return (
    <>
      <div style={{ border: "1px solid red", width: 500 }}>
        <CalendarPage />
      </div>

      {/* <div style={{ border: "1px solid red", width: 500 }}>
        <FormDisable></FormDisable>
      </div> */}
      <div style={{ border: "1px solid red", width: 700 }}>
        {/* <TestDemo /> */}
        <BetterCalendar />
      </div>
    </>
  );
}

export default App;

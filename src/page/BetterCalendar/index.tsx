import React from "react";
import dayjs from "dayjs";
import BetterCalendar from "../../components/BetterCalendar";

function index() {
  return (
    <div>
      <BetterCalendar value={dayjs("2024-2-19")} />
    </div>
  );
}

export default index;

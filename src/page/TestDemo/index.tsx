import React from "react";
const dayjs = require("dayjs");

function index() {
  console.log(dayjs("2023-11-1").daysInMonth());

  console.log(dayjs("2023-11-1").startOf("month").format("YYYY-MM-DD"));

  console.log(dayjs("2023-11-1").endOf("month").format("YYYY-MM-DD"));

  return <div>index</div>;
}

export default index;

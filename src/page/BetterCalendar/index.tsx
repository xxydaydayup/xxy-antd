import React from "react";
import dayjs from "dayjs";
import BetterCalendar from "../../components/BetterCalendar";

function index() {
  return (
    <div>
      <BetterCalendar
        value={dayjs("2024-2-20")}
        className={"aaa"}
        // style={{ background: "yellow" }}
        // dateInnerContent={(value) => {
        //   console.log(value);

        //   return (
        //     <div>
        //       <p style={{ background: "yellowgreen", height: "30px" }}>
        //         {value.format("YYYY/MM/DD")}
        //       </p>
        //     </div>
        //   );
        // }}
        locale="en-US"
      />
    </div>
  );
}

export default index;

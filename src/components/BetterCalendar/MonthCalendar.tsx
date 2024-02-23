import { useContext } from "react";
import { Dayjs } from "dayjs";
import { CalendarProps } from "./index";
// import CalendarLocale from "./locale/zh-CN";
import CalendarLocale from "./locale/en-US";
import cs from "classnames";
import LocaleContext from "./LocaleContext";
import allLocales from "./locale";

interface MonthCalendarProps extends CalendarProps {
  curMonth: Dayjs;
  selectHandler?: (date: Dayjs) => void;
}

function getAllDays(date: Dayjs) {
  const daysInMonth = date.daysInMonth();
  const startDate = date.startOf("month");
  const day = startDate.day(); // 周日为0  周一为1  周六为6

  const daysInfo: Array<{ date: Dayjs; currentMonth: boolean }> = new Array(
    6 * 7
  );

  //  填充上月的天数
  for (let i = 0; i < day; i++) {
    daysInfo[i] = {
      date: startDate.subtract(day - i, "day"),
      currentMonth: false,
    };
  }

  //  填充剩余的天数
  for (let i = day; i < daysInfo.length; i++) {
    const calcDate = startDate.add(i - day, "day");
    daysInfo[i] = {
      date: calcDate,
      currentMonth: calcDate.month() === date.month(),
    };
  }

  return daysInfo;
  //   debugger;
}

function MonthCalendar(props: MonthCalendarProps) {
  const localeContext = useContext(LocaleContext);

  const { dateRender, dateInnerContent, value, selectHandler, curMonth } =
    props;
  const weekList = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const CalendarLocale = allLocales[localeContext.locale];

  function renderDays(days: Array<{ date: Dayjs; currentMonth: boolean }>) {
    const rows = [];
    for (let i = 0; i < 6; i++) {
      const row = [];
      for (let j = 0; j < 7; j++) {
        const item = days[i * 7 + j];
        row[j] = (
          <div
            className={
              "calendar-month-body-cell " +
              (item.currentMonth ? "calendar-month-body-cell-current" : "")
            }
            onClick={() => selectHandler?.(item.date)}
          >
            {dateRender ? (
              dateRender(item.date)
            ) : (
              <div className="calendar-month-body-cell-date">
                <div
                  className={cs(
                    "calendar-month-body-cell-date-value",
                    value.format("YYYY-MM-DD") ===
                      item.date.format("YYYY-MM-DD")
                      ? "calendar-month-body-cell-date-selected"
                      : ""
                  )}
                >
                  {item.date.date()}
                </div>
                <div className="calendar-month-body-cell-date-content">
                  {dateInnerContent?.(item.date)}
                </div>
              </div>
            )}
          </div>
        );
      }
      rows.push(row);
    }
    return rows.map((row) => (
      <div className="calendar-month-body-row">{row}</div>
    ));
  }

  const allDays = getAllDays(curMonth);
  return (
    <div className="calendar-month">
      <div className="calendar-month-week-list">
        {weekList.map((week) => (
          <div className="calendar-month-week-list-item" key={week}>
            {CalendarLocale.week[week]}
          </div>
        ))}
      </div>
      <div className="calendar-month-body">{renderDays(allDays)}</div>
    </div>
  );
}

export default MonthCalendar;

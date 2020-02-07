import React from "react";
import { Typography } from "@material-ui/core";
import dayjs from "dayjs";

import {
  isSameMonth,
  isFirstDay,
  isSameDay,
  getMonth
} from "../../services/calendar";
import * as styles from "./style.css";

//この書き方で引数にprops.childrenが代入される
const CalendarElement = ({ day, month }) => {
  const today = dayjs();

  //今月以外をグレーダウン
  const currentMonth = getMonth(month);
  const isCurrentMonth = isSameMonth(day, currentMonth);
  const textColor = isCurrentMonth ? "textPrimary" : "textSecondary";

  //月の最初だけ月情報をつける
  const format = isFirstDay(day) ? "M / D" : "D";

  //今日かどうかの判別
  const isToday = isSameDay(day, today);

  return (
    <div className={styles.element}>
      <Typography
        className={styles.date}
        color={textColor}
        align="center"
        variant="caption"
        component="div"
      >
        <span className={isToday ? styles.today : ""}>
          {day.format(format)}
        </span>
      </Typography>
    </div>
  );
};

export default CalendarElement;

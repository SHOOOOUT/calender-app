import React from "react";
import { Typography } from "@material-ui/core";

import * as styles from "./style.css";

//この書き方で引数にprops.childrenが代入される
const CalendarElement = ({ day }) => {
  const isFirstDay = day.date() === 1;
  const format = isFirstDay ? "M/D" : "D";

  return (
    <div className={styles.element}>
      <Typography
        className={styles.date}
        align="center"
        variant="caption"
        component="div"
      >
        {day.format(format)}
      </Typography>
    </div>
  );
};

export default CalendarElement;

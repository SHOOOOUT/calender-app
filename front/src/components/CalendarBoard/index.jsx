import React from "react";
import { GridList } from "@material-ui/core";

import CalendarElement from "../CalendarElement/index";
import { createCalendar } from "../../services/calendar";
import * as styles from "./style.css";

const calendar = createCalendar();

const CalendarBoard = () => {
  console.log(calendar);
  return (
    <div>
      <GridList className={styles.grid} cols={7} spacing={0} cellHeight="auto">
        {calendar.map(c => (
          <li key={c.toISOString()}>
            <CalendarElement>{c.format("DD")}</CalendarElement>
          </li>
        ))}
      </GridList>
    </div>
  );
};

export default CalendarBoard;

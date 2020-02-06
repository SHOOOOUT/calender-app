import React from "react";

import * as styles from "./style.css";

//この書き方で引数にprops.childrenが代入される
const CalendarElement = ({ children }) => {
  return (
    <div className={styles.element}>
      <div className={styles.date}>{children}</div>
    </div>
  );
};

export default CalendarElement;

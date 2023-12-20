import React, { useState } from "react";

import Calendar from "react-calendar";
import { S } from "./CalendarWrap";
import "./Calendar.css";

const CalendarWrap = () => {
  const [date, setDate] = useState();

  const dateFormat = (userDate: Date) => {
    const year = userDate.getFullYear();
    const month = String(userDate.getMonth() + 1).padStart(2, "0");
    const date = String(userDate.getDate()).padStart(2, "0");

    return `${year}${month}${date}`;
  };

  const handleUserDate = (date: Date) => {
    const formattedDate = dateFormat(date);

    console.log("formatted: ", formattedDate);
  };

  return (
    <S.CalendarWrap>
      <S.Title> Calendar ? </S.Title>
      <Calendar
        locale="en"
        calendarType="hebrew"
        onClickDay={(value) => {
          handleUserDate(value);

          console.log(value);
        }}
        value={date}
      />
    </S.CalendarWrap>
  );
};

export default CalendarWrap;

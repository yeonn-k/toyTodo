import React, { useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

import Calendar from "react-calendar";
import { S } from "./CalendarWrap";
import "./Calendar.css";

interface TodoProps {
  searchDate: string;
  setSearchDate: (value: string) => void;
}

const CalendarWrap = ({ searchDate, setSearchDate }: TodoProps) => {
  const location = useLocation();

  const [date, setDate] = useState();
  const [formattedDate, setFormattedDate] = useState("");
  const [todoOfDate, setTodoOfDate] = useState<
    Array<{
      id: number;
      taskName: string;
      state: boolean;
      date: string;
      backlog: string;
    }>
  >([]);
  const [searchParams, setSearchParams] = useSearchParams([]);

  const dateFormat = (userDate: Date) => {
    const year = userDate.getFullYear();
    const month = String(userDate.getMonth() + 1).padStart(2, "0");
    const date = String(userDate.getDate()).padStart(2, "0");

    return `${year}${month}${date}`;
  };

  const handleUserDate = (date: Date) => {
    const formattedDate = dateFormat(date);
    searchParams.set("date", formattedDate);
    setSearchParams(searchParams);
    setSearchDate(formattedDate);
  };

  const getTodosByDate = async () => {
    //   try{
    //     await fetch("/todos")
    //   .then((response) => response.json())
    //   .then((result) => setTodoOfDate(result));
    // for (let i = 0; i < todoOfDate.length; i++) {
    //   if (todoOfDate && Object.values(todoOfDate[i]).includes(formattedDate)) {
    //     setTodos(todoOfDate);
    //   }
    // }}
  };

  return (
    <S.CalendarWrap>
      <S.Title> Calendar ? </S.Title>
      <Calendar
        locale="en"
        calendarType="hebrew"
        onClickDay={(value) => {
          handleUserDate(value);
        }}
        value={date}
      />
    </S.CalendarWrap>
  );
};

export default CalendarWrap;

import React from "react";

import { S } from "./ATodo";

interface TodoBoxProps {
  id: number;
  taskName: string;
  state: boolean;
  date: string;
  backlog: string;
}

const ATodo = ({ todo }: TodoBoxProps) => {
  const { id, taskName, state, date, backlog } = todo;

  return (
    <S.ATodo>
      <S.CheckBox type="checkbox" />
      {taskName}
    </S.ATodo>
  );
};

export default ATodo;

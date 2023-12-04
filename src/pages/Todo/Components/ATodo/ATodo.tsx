import React, { useState } from "react";

import { S } from "./ATodo";

interface TodoBoxProps {
  todo: {
    id: number;
    taskName: string;
    state: boolean;
    date: string;
    backlog: string;
  };
  setTodo: (value: object) => void;
}

const ATodo = ({ todo, setTodo }: TodoBoxProps) => {
  const { id, taskName, state, date, backlog } = todo;

  console.log(todo);

  const [checked, setChecked] = useState(false);

  const isChecked = () => {
    setChecked((prev) => !prev);
    changeState();
  };

  const changeState = () => {
    todo.state = !todo.state;
  };

  const putState = async ({ todo }: TodoBoxProps) => {
    try {
      await fetch("/todos", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ todo: todo }),
      });

      const response = await fetch("/todos");
      const result = await response.json();
    } catch (error) {
      console.error("error during put state❌:", error);
    } finally {
    }
  };

  return (
    <S.ATodo style={{ textDecoration: checked ? "line-through" : "none" }}>
      <S.CheckBox type="checkbox" checked={checked} onChange={isChecked} />
      {taskName}
    </S.ATodo>
  );
};

export default ATodo;

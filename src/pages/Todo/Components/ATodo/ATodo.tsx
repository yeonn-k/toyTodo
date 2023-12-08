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
  setTodo: (value: {}) => void;
  setTodos: (value: []) => void;
}

const ATodo = ({ todo, setTodo, setTodos }: TodoBoxProps) => {
  const { id, taskName, state, date, backlog } = todo;

  const [checked, setChecked] = useState(false);

  const [putTodos, setPutTodos] = useState<{
    id: number;
    taskName: string;
    state: boolean;
    date: string;
    backlog: string;
  }>();

  const putState = async () => {
    try {
      await fetch("/todos", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ todo: changedTodo }),
      });
    } catch (error) {
      console.error("error during put state❌:", error);
    } finally {
    }
  };
  const isChecked = () => {
    setChecked((prev) => !prev);
    changeState();
  };

  const changeState = () => {
    todo.state = !todo.state;

    putState();
  };

  const changedTodo = {
    id: id,
    taskName: taskName,
    state: checked,
    date: date,
    backlog: backlog,
  };

  return (
    <S.ATodo style={{ textDecoration: checked ? "line-through" : "none" }}>
      <S.CheckBox type="checkbox" checked={checked} onChange={isChecked} />
      {taskName}
    </S.ATodo>
  );
};

export default ATodo;

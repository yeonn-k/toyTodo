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

  const [checked, setChecked] = useState(true);
  const [editing, setEditing] = useState(false);
  const [editName, setEditName] = useState<string>(taskName);

  const [putTodos, setPutTodos] = useState<{
    id: number;
    taskName: string;
    state: boolean;
    date: string;
    backlog: string;
  }>();

  const isEditing = () => {
    if (checked) {
      setEditing((prev) => !prev);
    } else return;
  };

  const isChanged = (editName: string) => {
    return editName !== undefined
      ? setEditName(editName)
      : setEditName(taskName);
  };

  const stateChangedTodo = {
    id: id,
    taskName: taskName,
    state: checked,
    date: date,
    backlog: backlog,
  };

  const nameChangedTodo = {
    id: id,
    taskName: editName,
    state: state,
    date: date,
    backlog: backlog,
  };

  const putState = async () => {
    try {
      await fetch("/todos", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ todo: stateChangedTodo }),
      });

      const response = await fetch("/todos");
      const result = await response.json();

      setTodos(result);
    } catch (error) {
      console.error("error during put state❌:", error);
    }
  };

  const putName = async () => {
    try {
      await fetch("/todos", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ todo: nameChangedTodo }),
      });

      const response = await fetch("/todos");
      const result = await response.json();

      setTodos(result);
    } catch (error) {
      console.error("error during put name❌:", error);
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

  const deleteTodo = async () => {
    try {
      await fetch(`/todos/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ id: todo.id }),
      });

      const response = await fetch("/todos");
      const result = await response.json();

      setTodos(result);
    } catch (error) {
      console.error("error during delete state❌:", error);
    }
  };

  const clickCheckBtn = () => {
    isEditing();
    putName();
  };

  return (
    <S.ATodo style={{ textDecoration: checked ? "none" : "line-through" }}>
      <S.Name>
        <S.CheckBox type="checkbox" checked={!checked} onChange={isChecked} />
        {editing ? (
          <S.EditTaskName
            type="text"
            name="todo"
            placeholder="edit your task name ❣️"
            value={editName}
            onChange={({ target: { value } }) => {
              isChanged(value);
            }}
          />
        ) : (
          <span>{taskName}</span>
        )}
      </S.Name>

      <S.Icon>
        {editing ? (
          <S.Check onClick={clickCheckBtn} />
        ) : (
          <S.Edit onClick={isEditing} />
        )}

        <S.Delete onClick={deleteTodo} />
      </S.Icon>
    </S.ATodo>
  );
};

export default ATodo;

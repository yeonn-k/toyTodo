import React, { useEffect, useState } from "react";

import ATodo from "../ATodo/ATodo.tsx";
import { S } from "./TodoBox";

const TodoBox = () => {
  const [taskName, setTaskName] = useState("");

  const [todo, setTodo] = useState<{
    id: number;
    taskName: string;
    state: boolean;
    date: string;
    backlog: string;
  }>();

  const [todos, setTodos] = useState<
    Array<{
      id: number;
      taskName: string;
      state: boolean;
      date: string;
      backlog: string;
    }>
  >([]);

  const [loading, setLoading] = useState<boolean>(false);

  let ref = 3;

  let dateForm = "";

  const createDate = () => {
    const today = new Date();

    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();

    const makeMonthForm = (month: number) => {
      if (month < 10) {
        return "0" + month;
      }
      return month;
    };
    const makeDateForm = (date: number) => {
      if (date < 10) {
        return "0" + date;
      }
    };

    dateForm = `${year}${makeMonthForm(month)}${makeDateForm(date)}`;
  };

  createDate();

  const createTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    ref++;

    const newTodo = {
      id: ref,
      taskName: taskName,
      state: false,
      date: dateForm,
      backlog: "",
    };

    setTodo(newTodo);

    postTodo(newTodo);
  };

  useEffect(() => {
    fetch("/todos")
      .then((response) => response.json())
      .then((result) => {
        setTodos(result);
        setLoading(false);
      });
  }, []);

  const postTodo = async (newTodo: {
    id: number;
    taskName: string;
    state: boolean;
    date: string;
    backlog: string;
  }) => {
    setLoading(true);

    try {
      await fetch("/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ todo: newTodo }),
      });

      const response = await fetch("/todos");
      const result = await response.json();

      setTodos(result);
      setTodo({
        id: ref,
        taskName: "",
        state: false,
        date: "",
        backlog: "",
      });
      setTaskName("");
    } catch (error) {
      console.error("error during post new todo❌:", error);
    } finally {
      setLoading(false);
    }
  };

  const numOfTodos = todos.length;

  if (!todos) return null;

  return (
    <S.TodoBox>
      <S.UpperBox>
        <S.NumOfTask>
          Number of Tasks <S.Num>{numOfTodos}</S.Num>
        </S.NumOfTask>
        <S.MemoBox>
          {/* <S.MemoTitle>Memo for Today? </S.MemoTitle> */}
        </S.MemoBox>
      </S.UpperBox>
      <S.Line />
      <S.Tasks>
        {todos.map((todo) => {
          return <ATodo key={todo.id} todo={todo} setTodo={setTodo} />;
        })}
      </S.Tasks>

      <S.Form onSubmit={createTodo}>
        <S.TaskInput
          type="text"
          name="todo"
          placeholder="new task! ✨"
          disabled={loading}
          value={taskName}
          onChange={({ target: { value } }) => {
            setTaskName(value);
          }}
        />

        <S.Test disabled={!taskName}>add</S.Test>
      </S.Form>
    </S.TodoBox>
  );
};

export default TodoBox;

import React, { useEffect, useState } from "react";

import ATodo from "../ATodo/ATodo.tsx";
import { S } from "./TodoBox";

const TodoBox = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    fetch("/todos")
      .then((response) => response.json())
      .then((result) => {
        setTodos(result);
        setLoading(false);
      });
  }, []);

  const postTodos = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    fetch("/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ todo }),
    }).then(() => {
      fetch("/todos")
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          setTodo("");
          setTodos(result);
          setLoading(false);
        });
    });
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
          return <ATodo key={todo} todo={todo} />;
        })}
      </S.Tasks>

      <S.Form onSubmit={postTodos}>
        <S.TaskInput
          type="text"
          name="todo"
          placeholder="new task! ✨"
          disabled={loading}
          value={todo}
          onChange={({ target: { value } }) => setTodo(value)}
        />

        <S.Test disabled={!todo}>add</S.Test>
      </S.Form>
    </S.TodoBox>
  );
};

export default TodoBox;

import React, { useEffect, useState, useRef } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

import ATodo from "../ATodo/ATodo.tsx";
import { S } from "./TodoBox";

interface TodoProps {
  searchDate: string;
  setSearchDate: (value: string) => void;
}

const TodoBox = ({ searchDate, setSearchDate }: TodoProps) => {
  const ref = useRef<number>(2);

  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams([]);

  const [taskName, setTaskName] = useState("");
  const [count, setCount] = useState(0);

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

  const [specificTodos, setSpecificTodos] = useState<
    Array<{
      id: number;
      taskName: string;
      state: boolean;
      date: string;
      backlog: string;
    }>
  >([]);

  const [loading, setLoading] = useState<boolean>(false);

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

    ref.current += 1;

    const newTodo = {
      id: ref.current,
      taskName: taskName,
      state: false,
      date: dateForm,
      backlog: "",
    };

    setTodo(newTodo);

    postTodo(newTodo);
  };

  const getTodos = () => {
    fetch("/todos")
      .then((response) => response.json())
      .then((result) => {
        setTodos(result);
        setLoading(false);
      });
  };

  const showAllTodos = () => {
    setSearchDate("");
    setSearchParams("");

    getTodos();
  };

  useEffect(() => {
    getTodos();
  }, []);

  // const getTodosOfDate = async () => {
  //   try {
  //     await fetch(`/todos?date=${searchDate}`);

  //     const response = await fetch("/todos");
  //     const result = await response.json();

  //     setTodos(result);
  //   } catch (error) {
  //     console.error("error during get specific todo❌ ", error);
  //   }
  // };

  const getTodosOfDate = async () => {
    try {
      await fetch(`/todos/${searchDate}`);

      const response = await fetch(`/todos/${searchDate}`);
      const result = await response.json();

      setSpecificTodos(result);
    } catch (error) {
      console.error("error during get specific todo❌ ", error);
    }
  };

  useEffect(() => {
    getTodosOfDate();
  }, [searchDate]);

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
        id: ref.current,
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

  let numOfTodos = todos.filter((el) => el.state === false).length;

  // useEffect(() => {
  //   for (let i = 0; i < todos.length; i++) {
  //     if ((todos[i].state = false)) {
  //       setCount(count + 1);
  //     }
  //     if ((todos[i].state = true)) {
  //       setCount(count - 1);
  //     }
  //   }
  // }, [todos]);

  if (!todos) return null;

  return (
    <S.TodoBox>
      <S.UpperBox>
        <S.NumOfTask>
          Number of Tasks <S.Num>{numOfTodos}</S.Num>
        </S.NumOfTask>
        <S.ShowAll onClick={showAllTodos}>Show All Tasks</S.ShowAll>

        <S.MemoBox>
          {/* <S.MemoTitle>Memo for Today? </S.MemoTitle> */}
        </S.MemoBox>
      </S.UpperBox>
      <S.Line />
      <S.Tasks>
        {searchDate
          ? specificTodos.map((todo) => {
              return (
                <ATodo
                  key={todo.id}
                  todo={todo}
                  setTodo={setTodo}
                  setTodos={setTodos}
                />
              );
            })
          : todos.map((todo) => {
              return (
                <ATodo
                  key={todo.id}
                  todo={todo}
                  setTodo={setTodo}
                  setTodos={setTodos}
                />
              );
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

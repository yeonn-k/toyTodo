import { http, HttpResponse } from "msw";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

// const todos = ["wake up 🛏️", "do tasks 🖍️", "have meals 🥯"];
let todos = [
  {
    id: 0,
    taskName: "wake up 🛏️",
    state: false,
    date: "20231201",
    backlog: "",
  },
  {
    id: 1,
    taskName: "do tasks 🖍️",
    state: false,
    date: "20231201",
    backlog: "",
  },
  {
    id: 2,
    taskName: "have meals 🥯",
    state: false,
    date: "20231201",
    backlog: "",
  },
  {
    id: 3,
    taskName: `hello! I'm task of december 23❄️`,
    state: false,
    date: "20231223",
    backlog: "",
  },
];

let specificDateTodos: Array<{
  id: number;
  taskName: string;
  state: boolean;
  date: string;
  backlog: string;
}> = [];

interface PostTodo {
  id: number;
  taskName: string;
  state: boolean;
  date: string;
  backlog: string;
}

export const handlers = [
  http.get("/todos", () => {
    const responseBody = JSON.stringify(todos);

    return new HttpResponse(responseBody, { status: 200 });
  }),

  http.get("/todos/:searchDate", async ({ params }) => {
    const { searchDate } = params;

    console.log(searchDate);

    if (todos && searchDate) {
      specificDateTodos = todos.filter((todo) => todo.date === searchDate);
    }

    console.log("handlers: ", specificDateTodos);

    // 새로고침 후 검색 시 렌더링 제대로 되나, todos 자체를 날려 버리므로, 다른 날짜 데이터 재검색 불가

    return new HttpResponse(JSON.stringify(specificDateTodos), { status: 200 });
  }),

  http.post("/todos", async ({ request }) => {
    const requestContents = await request.json();

    const todo = requestContents?.todo;

    if (todo) {
      todos.push(todo);
    } else {
      console.error("Todo is undefined or null.");
    }

    return new HttpResponse(todo, { status: 201 });
  }),

  http.put("/todos", async ({ request }) => {
    const requestContents = await request.json();

    const todo = requestContents?.todo;

    const compareTodoIndex = todos.findIndex((el) => el.id === todo.id);

    if (compareTodoIndex !== -1) {
      todos[compareTodoIndex] = todo;
    }

    return new HttpResponse(todo, { status: 201 });
  }),

  http.delete("/todos/:id", async ({ params }) => {
    const { id } = params;

    const afterDelete = todos.filter((el) => el.id !== parseInt(id));

    todos = afterDelete;

    return new HttpResponse(id, { status: 201 });
  }),
];

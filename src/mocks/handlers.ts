import { http, HttpResponse } from "msw";

// const todos = ["wake up 🛏️", "do tasks 🖍️", "have meals 🥯"];
const todos = [
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
];

interface PostTodo {
  todo: {
    id: number;
    taskName: string;
    state: boolean;
    date: string;
    backlog: string;
  };
}

export const handlers = [
  http.get("/todos", () => {
    const responseBody = JSON.stringify(todos);

    return new HttpResponse(responseBody, { status: 200 });
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
    console.log(todo);

    const compareTodoIndex = todos.findIndex((el) => el.id === todo.id);

    if (compareTodoIndex !== -1) {
      todos[compareTodoIndex] = todo;
    }

    return new HttpResponse(todo, { status: 201 });
  }),

  http.delete("/todos/:id", ({ request }) => {
    const { id } = request.id;

    console.log(id);

    const afterDelete = todos.filter((el) => el.id !== todos.id);
    console.log(afterDelete);

    console.log('Deleting user with ID "%s"', id);

    return new HttpResponse(afterDelete, { status: 204 });
  }),
];

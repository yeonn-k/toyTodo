import { http, HttpResponse } from "msw";

const todos = ["wake up 🛏️", "do tasks 🖍️", "have meals 🥯"];

interface PostTodo {
  todo: string;
}

export const handlers = [
  http.get("/todos", () => {
    const responseBody = JSON.stringify(todos);

    return new HttpResponse(responseBody, { status: 200 });
  }),

  http.post<PostTodo>("/todos", async ({ request }) => {
    const requestContents = await request.json();
    const newTodo = requestContents.todo;
    console.log(newTodo);

    todos.push(newTodo);
  }),
];

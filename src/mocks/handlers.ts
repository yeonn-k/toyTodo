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

  http.post<PostTodo>("/todos", async ({ request }) => {
    console.log(request);
    const requestContents = await request.json();

    console.log(requestContents);
    const todo = requestContents?.todo;
    console.log(todo);

    if (todo) {
      console.log("postMSW: ", todo);
      todos.push(todo);
    } else {
      console.error("Todo is undefined or null.");
    }
  }),
];

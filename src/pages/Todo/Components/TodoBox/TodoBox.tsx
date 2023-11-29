import React from "react";

import ATodo from "../ATodo/ATodo.tsx";

import { S } from "./TodoBox";

const TodoBox = () => {
  return (
    <S.TodoBox>
      <S.UpperBox>
        <S.NumOfTask>Number of Tasks</S.NumOfTask>
        <S.MemoBox>엄마생신 ! 🍰</S.MemoBox>
      </S.UpperBox>
      <S.Tasks></S.Tasks>

      <form>
        <S.TaskInput type="text" name="todo" placeholder="new task! ✨" />

        <S.Test disabled>test button</S.Test>
      </form>
    </S.TodoBox>
  );
};

export default TodoBox;

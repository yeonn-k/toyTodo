import React from "react";

import { S } from "./ATodo";

interface TodoBoxProps {
  key: string;
  todo: string;
}
const ATodo = ({ todo }: TodoBoxProps) => {
  return (
    <S.ATodo>
      <S.CheckBox type="checkbox" />
      {todo}
    </S.ATodo>
  );
};

export default ATodo;

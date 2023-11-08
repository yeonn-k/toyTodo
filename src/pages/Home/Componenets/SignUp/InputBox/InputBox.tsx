import React from "react";

import { S } from "./InputBox";

interface signUpProps {
  title: string;
  placeholder: string;
}
const InputBox = ({ title, placeholder }: signUpProps) => {
  return (
    <S.InputBox>
      <S.Title>{title}</S.Title>
      <S.Input placeholder={placeholder}></S.Input>
    </S.InputBox>
  );
};

export default InputBox;

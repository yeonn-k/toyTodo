import React, { useEffect } from "react";

import { S } from "./InputBox";

interface signUpProps {
  key: number;
  title: string;
  placeholder: string;
  type: string;
  inputValue: { [key: string]: string };
  setInputValue: (value: { [key: string]: string }) => void;
  errorMessage: { [key: string]: string };
}

const InputBox = ({
  key,
  title,
  placeholder,
  type,
  inputValue,
  setInputValue,
  errorMessage,
}: signUpProps) => {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name: string = e.target.name;
    const value: string = e.target.value;
    setInputValue({ ...inputValue, [name]: value });
  };

  console.log(errorMessage[type]);

  return (
    <S.InputBox>
      <S.Title>{title}</S.Title>
      <S.Input
        name={title}
        placeholder={placeholder}
        type={type}
        onChange={handleInput}
      ></S.Input>
      <S.Warning>{errorMessage[type]}</S.Warning>
    </S.InputBox>
  );
};

export default InputBox;

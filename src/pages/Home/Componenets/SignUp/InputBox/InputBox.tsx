import React, { useEffect } from "react";

import { S } from "./InputBox";

interface signUpProps {
  title: string;
  placeholder: string;
  inputValue: { [key: string]: string };
  setInputValue: (value: { [key: string]: string }) => void;
}

const InputBox = ({
  title,
  placeholder,
  inputValue,
  setInputValue,
}: signUpProps) => {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name: string = e.target.name;
    const value: string = e.target.value;
    setInputValue({ ...inputValue, [name]: value });
  };

  return (
    <S.InputBox>
      <S.Title>{title}</S.Title>
      <S.Input
        name={title}
        placeholder={placeholder}
        onChange={handleInput}
      ></S.Input>
      <S.Warning></S.Warning>
    </S.InputBox>
  );
};

export default InputBox;

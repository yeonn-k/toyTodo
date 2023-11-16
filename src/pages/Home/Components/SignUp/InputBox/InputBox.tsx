import React, { useEffect, useState } from "react";

import { S } from "./InputBox";

interface signUpProps {
  id: number;
  title: string;
  placeholder: string;
  type: string;
  inputValue: { [key: string]: string };
  setInputValue: (value: { [key: string]: string }) => void;
  errorCheck: boolean;
  setErrorCheck: (value: boolean) => void;
}

const InputBox = ({
  id,
  title,
  placeholder,
  type,
  inputValue,
  setInputValue,
  errorCheck,
  setErrorCheck,
}: signUpProps) => {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name: string = e.target.name;
    const value: string = e.target.value;
    setInputValue({ ...inputValue, [name]: value });

    checkForm();
  };

  const [errorMessage, setErrorMessage] = useState<{
    email: string;
    password: string;
    nickname: string;
    [key: string]: string;
  }>({ email: " ", password: " ", nickname: " " });

  const checkForm = () => {
    if (!inputValue.email || !inputValue.email.includes("@")) {
      setErrorMessage((prev) => ({
        ...prev,
        email: "이메일 양식을 지켜주세요(@를 포함해주세요)",
      }));
      setErrorCheck(false);
    } else if (inputValue && inputValue.email.includes("@")) {
      setErrorMessage((prev) => ({ ...prev, email: "" }));
    }

    if (!inputValue.password || inputValue.password.length < 8) {
      setErrorMessage((prev) => ({
        ...prev,
        password: "비밀번호를 8자 이상으로 작성해주세요",
      }));
      setErrorCheck(false);
    } else if (inputValue && inputValue.password.length > 7) {
      setErrorMessage((prev) => ({ ...prev, password: "" }));
    }

    if (!inputValue.nickname || inputValue.nickname.length < 1) {
      setErrorMessage((prev) => ({
        ...prev,
        nickname: "닉네임을 입력해주세요",
      }));
      setErrorCheck(false);
    } else if (inputValue.nickname) {
      setErrorMessage((prev) => ({ ...prev, nickname: "" }));
    }
    if (Object.values(errorMessage).every((value) => value === "")) {
      setErrorCheck(true);
    }
  };

  return (
    <S.InputBox>
      <S.Title>{title}</S.Title>
      <S.Input
        name={title}
        placeholder={placeholder}
        type={type}
        onChange={handleInput}
        onBlur={checkForm}
      ></S.Input>
      <S.Warning>{errorMessage[title]}</S.Warning>
    </S.InputBox>
  );
};

export default InputBox;

import React, { useEffect, useState } from "react";

import Check from "../Check/Check.tsx";

import CatchPhrase from "../CatchPhrase/CatchPhrase.tsx";
import InputBox from "./InputBox/InputBox.tsx";
import { S } from "./SignUp";

interface homeProps {
  setSignIn: (value: boolean) => void;
}

// const [emailErr, setEmailErr] = useState<string>("");
//   const [passwordErr, setPasswordErr] = useState<string>("");

//   // 이메일 포멧
//   const emailRegEx =
//     /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;

//   // 최소 8 자, 최소 하나의 문자, 하나의 숫자 및 하나의 특수 문자 :
//   const passwordRegex =
//     /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/;

//   const validateEmail = () => {
//     if (!emailRegEx.test(inputValue.email)) {
//       setEmailErr("이메일 양식을 지켜주세요(@를 포함해주세요)");
//     } else {
//       setEmailErr("");
//     }
//   };

//   const validatePass = () => {
//     if (!passwordRegex.test(inputValue.password)) {
//       setPasswordErr("8자 이상으로 숫자, 문자, 특수문자를 사용해 주세요");
//     } else {
//       setPasswordErr("");
//     }
//   };

//   const errorMessage = [emailErr, passwordErr];

//   console.log(emailErr, passwordErr);

const SignUp = ({ setSignIn }: homeProps) => {
  const [signUpDatas, setSignUpDatas] = useState<
    {
      id: number;
      title: string;
      placeholder: string;
      type: string;
    }[]
  >([]);

  useEffect(() => {
    fetch("/assets/SignUp.json")
      .then((response) => response.json())
      .then((result) => setSignUpDatas(result));
  }, []);

  const [inputValue, setInputValue] = useState<{
    [key: string]: string;
  }>({});

  console.log("SignUp: ", inputValue);

  const checkBtn = !(
    inputValue.email ||
    inputValue.password ||
    inputValue.nickname
  );

  const createUser = () => {
    fetch("https://fakestoreapi.com/users", {
      method: "POST",
      body: JSON.stringify({
        email: inputValue.email,
        password: inputValue.password,
        nickname: inputValue.nickname,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("🌼 fetch is done!", result),
          setConfirmModal((prev: boolean) => !prev);
      });
  };

  const [confirmModal, setConfirmModal] = useState<boolean>(false);

  const errorMessage = {
    email: "",
    password: "",
  };

  const checkForm = () => {
    console.log("❓is button alive?");

    if (!inputValue.email || !inputValue.email.includes("@")) {
      errorMessage.email = "이메일 양식을 지켜주세요(@를 포함해주세요)";
      console.log(errorMessage);
    }
    if (!inputValue.password || inputValue.password.length < 9) {
      errorMessage.password = "비밀번호는 8 글자 이상으로 작성해주세요";
      console.log(errorMessage);
    } else {
      createUser();
    }
  };

  return (
    <>
      {confirmModal ? (
        <Check
          setConfirmModal={setConfirmModal}
          setSignIn={setSignIn}
          inputValue={inputValue}
        />
      ) : (
        ""
      )}
      <S.SignUp>
        <CatchPhrase />
        <S.ContainInput>
          {signUpDatas.map((signUpData) => (
            <InputBox
              key={signUpData.id}
              title={signUpData.title}
              placeholder={signUpData.placeholder}
              type={signUpData.type}
              inputValue={inputValue}
              setInputValue={setInputValue}
              errorMessage={errorMessage}
            />
          ))}
        </S.ContainInput>
        <S.ConfirmBtn onClick={checkForm} disabled={checkBtn}>
          Sign Up !
        </S.ConfirmBtn>
      </S.SignUp>
    </>
  );
};

export default SignUp;

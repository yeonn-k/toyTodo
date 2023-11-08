import React, { useEffect, useState } from "react";

import Check from "../Check/Check.tsx";

import CatchPhrase from "../CatchPhrase/CatchPhrase.tsx";
import InputBox from "./InputBox/InputBox.tsx";
import { S } from "./SignUp";
import { create } from "domain";

interface homeProps {
  setSignIn: (value: boolean) => void;
}

const SignUp = ({ setSignIn }: homeProps) => {
  const [signUpDatas, setSignUpDatas] = useState<
    {
      id: number;
      title: string;
      placeholder: string;
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
    console.log("❓is button alive?");

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

  //   const checkForm = () => {
  //     if (!inputValue.email.includes("@")) {
  //       return "이메일 양식을 지켜주세요(@를 포함해주세요)";
  //     }
  //     if (inputValue.password.length < 9) {
  //       return "비밀번호는 8 글자 이상으로 작성해주세요";
  //     }
  //     if (inputValue.nickname.length < 1) {
  //       return "닉네임을 작성해주세요";
  //     } else {
  //       createUser();
  //     }
  //   };

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
              // key={signUpData.id}
              title={signUpData.title}
              placeholder={signUpData.placeholder}
              inputValue={inputValue}
              setInputValue={setInputValue}
            />
          ))}
        </S.ContainInput>
        <S.ConfirmBtn onClick={createUser} disabled={checkBtn}>
          Sign Up !
        </S.ConfirmBtn>
      </S.SignUp>
    </>
  );
};

export default SignUp;

import React, { useEffect, useState } from "react";

import CatchPhrase from "../CatchPhrase/CatchPhrase.tsx";
import { S } from "./SignIn";
import { useNavigate } from "react-router-dom";

interface homeProps {
  setSignIn: (value: boolean) => void;
}

const SignIn = ({ setSignIn }: homeProps) => {
  const navigate = useNavigate();

  const changeToSignUp = () => {
    setSignIn(false);
  };

  const [isUser, setIsUser] = useState<{
    id: number;
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    token: string;
  }>();

  const signIn = async () => {
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "kminchelle",
          password: "0lelplR",
        }),
      });
      if (!response.ok) {
        console.log("failed sign in!🥲");
      }

      const result = await response.json();
      setIsUser(result);
    } catch (error) {
      console.log("during sign in💀: ", error);
    }
  };

  const goToTodo = () => {
    navigate("/todo");
    window.location.reload();
  };

  useEffect(() => {
    if (isUser && isUser.token) {
      goToTodo();
    }
  }, [isUser]);

  return (
    <S.SignIn>
      <CatchPhrase />
      <S.BtnBox>
        <S.SignBtn onClick={signIn}>sign in</S.SignBtn>
        <S.SignBtn onClick={changeToSignUp}>sign up</S.SignBtn>
      </S.BtnBox>

      <S.CheckUser>비밀번호를 잊어버리셨나요?</S.CheckUser>
    </S.SignIn>
  );
};

export default SignIn;

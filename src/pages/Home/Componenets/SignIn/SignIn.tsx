import React from "react";

import CatchPhrase from "../CatchPhrase/CatchPhrase.tsx";
import { S } from "./SignIn";

interface homeProps {
  setSignIn: (value: boolean) => void;
}

const SignIn = ({ setSignIn }: homeProps) => {
  const changeToSignUp = () => {
    setSignIn(false);
  };

  return (
    <S.SignIn>
      <CatchPhrase />
      <S.BtnBox>
        <S.SignBtn>sign in</S.SignBtn>
        <S.SignBtn onClick={changeToSignUp}>sign up</S.SignBtn>
      </S.BtnBox>

      <S.CheckUser>비밀번호를 잊어버리셨나요?</S.CheckUser>
    </S.SignIn>
  );
};

export default SignIn;

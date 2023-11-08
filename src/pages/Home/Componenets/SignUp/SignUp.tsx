import React, { useEffect, useState } from "react";

import CatchPhrase from "../CatchPhrase/CatchPhrase.tsx";
import InputBox from "./InputBox/InputBox.tsx";
import { S } from "./SignUp";
import { sign } from "crypto";

const SignUp = () => {
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

  return (
    <S.SignUp>
      <CatchPhrase />
      <S.ContainInput>
        {signUpDatas.map((signUpData) => (
          <InputBox
            key={signUpData.id}
            title={signUpData.title}
            placeholder={signUpData.placeholder}
          />
        ))}
      </S.ContainInput>
      <S.ConfirmBtn>Sign Up !</S.ConfirmBtn>
    </S.SignUp>
  );
};

export default SignUp;

import React from "react";

import SignIn from "./Componenets/SignIn/SignIn.tsx";
import SignUp from "./Componenets/SignUp/SignUp.tsx";
import Check from "./Componenets/Check/Check.tsx";

import { S } from "./Home";

const Home = () => {
  const signUp = () => {};
  return (
    <S.Home>
      <S.BgImg>
        {/* <Check /> */}
        <S.LogoBox>
          <S.CenterBox>
            <S.Logo>Todo</S.Logo>
            <S.MainCatchPhrase>check your day !</S.MainCatchPhrase>
          </S.CenterBox>
        </S.LogoBox>
        <S.RightBox>
          <SignIn />
        </S.RightBox>
      </S.BgImg>
    </S.Home>
  );
};

export default Home;

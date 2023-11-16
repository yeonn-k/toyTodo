import React, { useState } from "react";

import SignIn from "./Components/SignIn/SignIn.tsx";
import SignUp from "./Components/SignUp/SignUp.tsx";

import { S } from "./Home";

const Home = () => {
  const [signIn, setSignIn] = useState(true);

  return (
    <S.Home>
      <S.BgImg>
        <S.LogoBox>
          <S.CenterBox>
            <S.Logo>Todo</S.Logo>
            <S.MainCatchPhrase>check your day !</S.MainCatchPhrase>
          </S.CenterBox>
        </S.LogoBox>
        <S.RightBox>
          {signIn ? (
            <SignIn setSignIn={setSignIn} />
          ) : (
            <SignUp setSignIn={setSignIn} />
          )}
        </S.RightBox>
      </S.BgImg>
    </S.Home>
  );
};

export default Home;

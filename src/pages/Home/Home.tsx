import React from "react";

import { S } from "./Home";

const Home = () => {
  return (
    <S.Home>
      <S.BgImg>
        <S.Logo></S.Logo>
        <S.RightBox>
          <S.UpperCatchPhrase></S.UpperCatchPhrase>
          <S.LowerCatchPhrase></S.LowerCatchPhrase>
          <S.SignInBtn></S.SignInBtn>
          <S.SignUpBtn></S.SignUpBtn>
        </S.RightBox>
      </S.BgImg>
    </S.Home>
  );
};

export default Home;

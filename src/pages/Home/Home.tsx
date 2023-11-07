import React from "react";

import { S } from "./Home";

const Home = () => {
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
          <div>
            <S.CatchPhraseBox>
              <S.UpperCatchPhrase>Dare to Dream</S.UpperCatchPhrase>
              <S.LowerCatchPhrase>Dare to Do</S.LowerCatchPhrase>
            </S.CatchPhraseBox>
            <S.BtnBox>
              <S.SignBtn>sign in</S.SignBtn>
              <S.SignBtn>sign up</S.SignBtn>
            </S.BtnBox>
          </div>
          <S.CheckUser>비밀번호를 잊어버리셨나요?</S.CheckUser>
        </S.RightBox>
      </S.BgImg>
    </S.Home>
  );
};

export default Home;

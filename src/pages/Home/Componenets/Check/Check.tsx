import React from "react";

import { S } from "./Check";

const Check = () => {
  return (
    <S.Check>
      <S.CheckBox>
        <S.CloseBtn />
        <S.Line />
        <S.ConfirmPhrase>회원가입이 완료되었습니다</S.ConfirmPhrase>
        <S.ConfirmBtn>확인</S.ConfirmBtn>
      </S.CheckBox>
    </S.Check>
  );
};

export default Check;

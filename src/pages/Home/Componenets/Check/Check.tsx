import React from "react";

import { S } from "./Check";

interface signUpProps {
  setConfirmModal: (value: boolean) => void;
  setSignIn: (value: boolean) => void;
  inputValue: { [key: string]: string };
}
const Check = ({ setConfirmModal, setSignIn, inputValue }: signUpProps) => {
  const closeModal = () => {
    setConfirmModal(false);
    setSignIn(true);
  };

  return (
    <S.Check>
      <S.CheckBox>
        <S.CloseBtn onClick={closeModal} />
        <S.Line />
        <S.ConfirmPhrase>회원가입이 완료되었습니다</S.ConfirmPhrase>
        <S.ConfirmBtn onClick={closeModal}>확인</S.ConfirmBtn>
      </S.CheckBox>
    </S.Check>
  );
};

export default Check;

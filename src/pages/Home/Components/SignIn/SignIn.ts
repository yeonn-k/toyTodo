import styled from "styled-components";

export const S = {
  SignIn: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    flex-wrap: wrap;
  `,
  BtnBox: styled.div`
    margin-bottom: 176px;
  `,
  SignBtn: styled.button`
    display: block;
    width: 460px;
    height: 76px;
    margin-bottom: 18px;

    border-radius: 5px;
    border: 3px solid #fff;

    font-family: ${(props) => props.theme.titleFont};
    text-align: center;
    line-height: 20px;
    color: #fff;
    font-size: 22px;
    outline: none;
    transition: 0.4s;

    &:hover {
      border: none;
      background-color: rgba(256, 256, 256, 0.7);
      color: ${(props) => props.theme.blueViolet};
    }
  `,
  CheckUser: styled.div`
    color: #fff;

    &:hover {
      cursor: pointer;
    }
  `,
};

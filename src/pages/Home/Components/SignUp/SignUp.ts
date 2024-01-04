import styled from "styled-components";

export const S = {
  SignUp: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    flex-wrap: wrap;
    width: 100%;
  `,
  ContainInput: styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    width: 440px;
  `,
  ConfirmBtn: styled.button`
    display: block;
    width: 440px;
    height: 52px;
    margin-top: 18px;
    margin-bottom: 30px;

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
};

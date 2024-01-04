import styled from "styled-components";

export const S = {
  CatchPhrase: styled.div`
    margin-top: 80px;
    margin-bottom: 120px;
  `,
  UpperCatchPhrase: styled.div`
    flex-shrink: 0;

    width: 100%;
    color: #fff;
    font-family: ${(props) => props.theme.titleFont};
    text-align: center;
    font-size: 22px;
    margin-bottom: 14px;
  `,
  LowerCatchPhrase: styled.div`
    flex-shrink: 0;

    width: 100%;
    color: #fff;
    font-family: ${(props) => props.theme.titleFont};
    text-align: center;
    font-size: 22px;
  `,
};

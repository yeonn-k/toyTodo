import styled from "styled-components";

export const S = {
  InputBox: styled.div`
    width: 100%;
    margin-bottom: 20px;
  `,
  Title: styled.div`
    margin-bottom: 8px;

    color: #fff;
    font-size: 18px;
    font-weight: 600;
  `,
  Input: styled.input`
    width: 100%;
    height: 42px;

    padding: 8px;
    border-radius: 5px;
    border: none;

    &::placeholder {
      color: ${(props) => props.theme.lightGreyGrey};
    }
    &:focus {
      outline: none;
    }
  `,
};

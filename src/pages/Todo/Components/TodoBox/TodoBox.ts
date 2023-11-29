import styled from "styled-components";

export const S = {
  TodoBox: styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    width: 100%;
    height: 100%;
  `,
  UpperBox: styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    width: 100%;
    height: 130px;
    padding: 38px;

    border: solid 1px aliceblue;
  `,
  NumOfTask: styled.span`
    font-family: ${(props) => props.theme.titleFont};
    font-size: 26px;
    line-height: 26px;
    color: #fff;
  `,
  MemoBox: styled.div`
    width: 100%;
    margin-top: 8px;
    text-align: center;
    font-size: 20px;
    font-weight: 200;
    color: #fff;
  `,
  MemoTitle: styled.span`
    font-family: ${(props) => props.theme.titleFont};
    font-weight: 100;
  `,
  Tasks: styled.ul`
    width: 100%;

    color: #fff;
    font-size: 22px;
  `,
  TaskInput: styled.input``,
  Test: styled.button`
    color: #fff;
    width: 100px;
    height: 100px;
    background-color: blue;
  `,
};

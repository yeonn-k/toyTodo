import styled from "styled-components";

export const S = {
  TodoBox: styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-content: flex-start;

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
    margin-top: 24px;
  `,
  NumOfTask: styled.span`
    display: flex;
    font-family: ${(props) => props.theme.titleFont};
    font-size: 26px;
    line-height: 26px;
    color: #fff;
  `,
  Num: styled.span`
    margin-left: 14px;
    font-size: 40px;
    color: ${(props) => props.theme.blueViolet};
  `,

  ShowAll: styled.div`
    width: 100%;
    font-size: 20px;
    font-family: ${(props) => props.theme.titleFont};
    text-align: center;
    color: #fff;
    margin-bottom: 14px;
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
  Line: styled.div`
    width: 90%;
    height: 1px;
    background-color: #fff;
  `,
  Tasks: styled.ul`
    width: 100%;
    height: 68%;
    overflow: scroll;
    padding: 50px;
    padding-top: 30px;

    color: #fff;
    font-size: 22px;
  `,
  Todo: styled.div`
    width: 100%;
    margin-bottom: 10px;
  `,
  Form: styled.form`
    position: absolute;
    bottom: 40px;
    display: flex;
    justify-content: center;
    width: 100%;
  `,
  TaskInput: styled.input`
    width: 70%;
    margin-right: 14px;
    padding: 10px;

    border-radius: 5px;
    border: none;

    font-size: 16px;
  `,
  Test: styled.button`
    display: block;
    width: 156px;
    height: 52px;

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

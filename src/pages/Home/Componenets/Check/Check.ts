import styled from "styled-components";

export const S = {
  Check: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background-color: rgba(0, 0, 0, 0.6);
  `,
  CheckBox: styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    width: 560px;
    height: 340px;

    background-color: rgba(256, 256, 256, 0.8);
    border-radius: 50px;
  `,
  CloseBtn: styled.div`
    position: absolute;
    top: 30px;
    right: 30px;

    width: 20px;
    height: 20px;
    background: url(/images/icon/close.png) no-repeat;
    background-size: cover;
  `,
  Line: styled.div`
    margin-top: 76px;
    width: 90%;
    height: 2px;

    background-color: ${(props) => props.theme.deepGrey};
  `,
  ConfirmPhrase: styled.div`
    width: 100%;
    margin-top: 40px;
    margin-bottom: 26px;
    text-align: center;
  `,
  ConfirmBtn: styled.button`
    width: 100px;
    height: 40px;
    border-radius: 8px;
    background-color: ${(props) => props.theme.blueViolet};
    opacity: 0.7;
    color: #fff;
  `,
};

import styled from "styled-components";

export const S = {
  ATodo: styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 10px;
  `,
  Name: styled.div``,
  Icon: styled.div`
    display: flex;
  `,
  CheckBox: styled.input`
    width: 14px;
    height: 14px;
    margin-right: 8px;
    accent-color: ${(props) => props.theme.blueViolet};

    cursor: pointer;
  `,
  Edit: styled.div`
    width: 16px;
    height: 16px;
    margin-right: 10px;

    background: url("/images/icon/editWhite.png") no-repeat;
    background-size: cover;

    cursor: pointer;
  `,
  Check: styled.div`
    width: 28px;
    height: 28px;
    margin-right: 10px;

    background: url("/images/icon/checkWhite.png") no-repeat;
    background-position: 4px -5px;
    background-size: cover;

    cursor: pointer;
  `,
  Delete: styled.div`
    width: 20px;
    height: 20px;

    background: url("/images/icon/deleteWhite.png") no-repeat;
    background-size: cover;

    cursor: pointer;
  `,
};

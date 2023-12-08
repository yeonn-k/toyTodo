import styled from "styled-components";

export const S = {
  ATodo: styled.div`
    width: 100%;
    margin-bottom: 10px;
  `,
  CheckBox: styled.input`
    width: 14px;
    height: 14px;
    margin-right: 8px;
    accent-color: ${(props) => props.theme.blueViolet};

    cursor: pointer;
  `,
};

import styled from "styled-components";

export const S = {
  Home: styled.div`
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    overflow: hidden;
  `,
  BgImg: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    background: url(/images/main1.jpg) no-repeat;
    background-size: cover;
  `,
  LogoBox: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 60%;
    height: 100%;
  `,
  CenterBox: styled.div`
    width: 100%;
    height: 100px;
  `,
  Logo: styled.div`
    width: 100%;
    margin-bottom: 15px;
    font-family: ${(props) => props.theme.titleFont}
    text-align: center;
    font-size: 76px;
    color: #fff;
  `,
  MainCatchPhrase: styled.div`
    width: 100%;
    font-family: ${(props) => props.theme.titleFont};
    font-weight: 200;
    text-align: center;
    font-size: 22px;
    color: #fff;
  `,
  RightBox: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    width: 560px;
    height: 70%;
    margin-right: 30px;
    border-radius: 70px;

    background-color: ${(props) => props.theme.opacityWhite};
  `,
};

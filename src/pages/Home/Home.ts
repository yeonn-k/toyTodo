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
    font-family: Agbalumo;
    text-align: center;
    font-size: 76px;
    color: #fff;
  `,
  MainCatchPhrase: styled.div`
    width: 100%;
    font-family: Agbalumo;
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
    border-radius: 70px;

    background-color: rgba(256, 256, 256, 0.4);
  `,
  CatchPhraseBox: styled.div`
    margin-top: 80px;
    margin-bottom: 120px;
  `,
  UpperCatchPhrase: styled.div`
    flex-shrink: 0;

    width: 100%;
    color: #fff;
    font-family: Agbalumo;
    text-align: center;
    font-size: 22px;
    margin-bottom: 14px;
  `,
  LowerCatchPhrase: styled.div`
    flex-shrink: 0;

    width: 100%;
    color: #fff;
    font-family: Agbalumo;
    text-align: center;
    font-size: 22px;
  `,
  BtnBox: styled.div``,
  SignBtn: styled.button`
    display: block;
    width: 460px;
    height: 76px;
    margin-bottom: 18px;

    border-radius: 5px;
    border: 3px solid #fff;

    font-family: Agbalumo;
    text-align: center;
    line-height: 20px;
    color: #fff;
    font-size: 22px;
    outline: none;
    transition: 0.4s;

    &:hover {
      border: none;
      background-color: rgba(256, 256, 256, 0.7);
      color: #6e7aa2;
    }
  `,
  CheckUser: styled.div`
    color: #fff;

    &:hover {
      cursor: pointer;
    }
  `,
};

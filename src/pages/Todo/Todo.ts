import styled from "styled-components";

export const S = {
  Todo: styled.div`
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    overflow: hidden;
  `,
  BgImg: styled.div`
    width: 100%;
    height: 100%;

    background: url(/images/main1.jpg) no-repeat;
    background-size: cover;
  `,
  Brightness: styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  `,
  CatchPhraseBox: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    width: 100%;
    height: 100px;
    margin-top: 76px;
    margin-bottom: 84px;

    color: #fff;
    text-align: center;
    font-family: Agbalumo;
  `,
  UpperCatchPhrase: styled.div`
    width: 100%;
    margin-bottom: 16px;
    font-size: 76px;
  `,
  LowerCatchPhrase: styled.div`
    width: 100%;
    font-size: 26px;
  `,
  ExceptCatchPhrase: styled.div`
    display: flex;
    justify-content: center;

    width: 92%;
    height: 100%;
  `,
  LeftBox: styled.div`
    position: relative;

    width: 30%;
    height: 72%;
    margin-right: 60px;
  `,
  WheaterBox: styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 36%;
    border-radius: 40px;

    background-color: rgba(0, 0, 0, 0.5);
  `,
  CalanderBox: styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 58%;
    border-radius: 40px;

    background-color: rgba(0, 0, 0, 0.5);
  `,
  RightBox: styled.div`
    width: 60%;
    border-radius: 40px;
    height: 72%;

    background-color: rgba(0, 0, 0, 0.5);
  `,
  ATodo: styled.div``,
};

import styled from "styled-components";

export const S = {
  Weather: styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;

    color: #fff;
  `,
  DateBox: styled.div`
    width: 100%;
    margin-bottom: 20px;

    text-align: center;
    font-family: Agbalumo;
    font-size: 30px;
  `,
  WeatherIcon: styled.div`
    width: 100px;
    height: 100px;
  `,
  TemperatureBox: styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    width: 130px;
    margin-left: 20px;
    font-size: 20px;
  `,
  Maximum: styled.div`
    width: 100%;
    margin-top: 8px;
    margin-bottom: 8px;
  `,
  Minimum: styled.div`
    width: 100%;
  `,
};

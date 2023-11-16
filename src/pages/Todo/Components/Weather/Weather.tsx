import React from "react";

import { S } from "./Weather";

const Weather = () => {
  return (
    <S.Weather>
      <S.DateBox>Today ? </S.DateBox>
      <S.WeatherIcon />
      <S.TemperatureBox>
        Temperature
        <S.Maximum>Max: °C</S.Maximum>
        <S.Minimum>Min: °C</S.Minimum>
      </S.TemperatureBox>
    </S.Weather>
  );
};

export default Weather;

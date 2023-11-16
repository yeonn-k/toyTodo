import React, { useEffect } from "react";

import { S } from "./Weather";

const Weather = () => {
  const today = new Date();
  const year = today.getFullYear();
  const findMonth = today.getMonth();

  const month = (findMonth: number) => {
    if (findMonth < 10) {
      return "0" + (findMonth + 1);
    } else return findMonth + 1;
  };

  const date = today.getDate();

  const todayInform = `${year}${month(findMonth)}${date}`;

  useEffect(() => {
    const apiUrl =
      "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst";
    const serviceKey =
      "WVXbHaU1Swo%2BcYdMpg2hDAaLjs3Vehe3CBCsgOR63iQf%2FWqVv%2BeuKKq%2Bs8uOhS4%2B1bwL4VwhxS1%2F0WUOgmklag%3D%3D";
    const numOfRows = 1;
    const pageNo = 1;
    const dataType = "json";
    const baseDate = todayInform;
    const baseTime = 1100;
    const region = [
      { name: "서울", nx: 60, ny: 127 },
      { name: "인천", nx: 55, ny: 124 },
      { name: "경기도", nx: 60, ny: 121 },
      { name: "강원도", nx: 92, ny: 131 },
      { name: "충청북도", nx: 69, ny: 106 },
      { name: "충청남도", nx: 68, ny: 100 },
      { name: "전라북도", nx: 63, ny: 89 },
      { name: "전라남도", nx: 50, ny: 67 },
      { name: "경상북도", nx: 91, ny: 106 },
      { name: "경상남도", nx: 90, ny: 77 },
      { name: "제주도", nx: 52, ny: 38 },
    ];
    const nx = 37;
    const ny = 126;
    fetch(
      `${apiUrl}?serviceKey=${serviceKey}&numOfRows=${numOfRows}&pageNo=${pageNo}&dataType=${dataType}&base_date=${baseDate}&base_time=${baseTime}&nx=${nx}&ny=${ny}`
    )
      .then((response) => response.json())
      .then((result) => console.log(result));
  });

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

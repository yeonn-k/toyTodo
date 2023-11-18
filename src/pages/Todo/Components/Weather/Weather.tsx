import React, { useEffect } from "react";

import { S } from "./Weather";

const Weather = () => {
  const today = new Date();
  const year = today.getFullYear();
  const date = today.getDate();

  const currentMonth = today.getMonth();

  const month = (currentMonth: number) => {
    if (currentMonth < 10) {
      return "0" + (currentMonth + 1);
    } else return currentMonth + 1;
  };

  const currentHour = today.getHours();
  const currentMin = today.getMinutes();
  const makeMin = (currentMin: number) => {
    if (currentMin < 10) {
      return "0" + `${currentMin}`;
    } else {
      return currentMin;
    }
  };
  let currentTime = `${currentHour}${makeMin(currentMin)}`;

  let getBaseTime: string = "";
  console.log("currentTime: ", currentTime);

  const timeInform = (currentTime: string) => {
    const timeArr = [
      "0200",
      "0500",
      "0800",
      "1100",
      "1400",
      "1700",
      "2000",
      "2300",
    ];

    const time = parseInt(currentTime);

    for (let i: number = 0; i < timeArr.length; i++) {
      const startTime = i * 300 + 210;
      const endTime = startTime + 300;

      if (startTime <= time && time < endTime) {
        getBaseTime = timeArr[i];
        break;
      }
      getBaseTime = timeArr[7];
    }
    return getBaseTime;
  };

  const checkDate = () => {
    if (getBaseTime === "2300") {
      return date - 1;
    } else return date;
  };

  const todayInform = `${year}${month(currentMonth)}${checkDate()}`;

  const numOfRows = 1;
  const pageNo = 1;
  const dataType = "json";
  const baseDate = todayInform;
  const baseTime = timeInform(currentTime);

  const nx = 37;
  const ny = 126;

  console.log("baseTime: ", baseTime);

  // const region = [
  //   { name: "서울", nx: 60, ny: 127 },
  //   { name: "인천", nx: 55, ny: 124 },
  //   { name: "경기도", nx: 60, ny: 121 },
  //   { name: "강원도", nx: 92, ny: 131 },
  //   { name: "충청북도", nx: 69, ny: 106 },
  //   { name: "충청남도", nx: 68, ny: 100 },
  //   { name: "전라북도", nx: 63, ny: 89 },
  //   { name: "전라남도", nx: 50, ny: 67 },
  //   { name: "경상북도", nx: 91, ny: 106 },
  //   { name: "경상남도", nx: 90, ny: 77 },
  //   { name: "제주도", nx: 52, ny: 38 },
  // ];

  const xhr = new XMLHttpRequest();

  const apiUrl =
    "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst";
  const serviceKey =
    "WVXbHaU1Swo%2BcYdMpg2hDAaLjs3Vehe3CBCsgOR63iQf%2FWqVv%2BeuKKq%2Bs8uOhS4%2B1bwL4VwhxS1%2F0WUOgmklag%3D%3D";

  let queryParams =
    "?" + encodeURIComponent("serviceKey") + "=" + `${serviceKey}`;
  queryParams +=
    "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent(`${pageNo}`);
  queryParams +=
    "&" +
    encodeURIComponent("numOfRows") +
    "=" +
    encodeURIComponent(`${numOfRows}`);
  queryParams +=
    "&" +
    encodeURIComponent("dataType") +
    "=" +
    encodeURIComponent(`${dataType}`);
  queryParams +=
    "&" +
    encodeURIComponent("base_date") +
    "=" +
    encodeURIComponent(`${baseDate}`);
  queryParams +=
    "&" +
    encodeURIComponent("base_time") +
    "=" +
    encodeURIComponent(`${baseTime}`);
  queryParams +=
    "&" + encodeURIComponent("nx") + "=" + encodeURIComponent(`${nx}`);
  queryParams +=
    "&" + encodeURIComponent("ny") + "=" + encodeURIComponent(`${ny}`);

  xhr.open("GET", apiUrl + queryParams);
  xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
      console.log(
        "Status: " +
          this.status +
          "nHeaders:" +
          JSON.stringify(this.getAllResponseHeaders()) +
          "nBody: " +
          this.responseText
      );
    }
  };

  xhr.send("");

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

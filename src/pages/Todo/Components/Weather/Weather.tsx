import React, { useEffect, useState } from "react";

import { S } from "./Weather";

const Weather = () => {
  const [weather, setWeather] = useState<[{ [key: string]: string }]>();

  const [sky, setSky] = useState<string>(); // 하늘상태
  const [pty, setPty] = useState<string>(); // 강수형태
  const [pop, setPop] = useState<string>(); // 강수확률
  const [tmp, setTmp] = useState<string>(); // 1시간 기온
  const [icon, setIcon] = useState<string>(); // weather icon

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

  const numOfRows = 14;
  const pageNo = 1;
  const dataType = "json";
  const baseDate = todayInform;
  const baseTime = timeInform(currentTime);

  const nx = 37;
  const ny = 126;

  console.log(checkDate());
  console.log(baseDate);
  console.log(baseTime);

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

  const apiUrl =
    "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst";
  const serviceKey =
    "WVXbHaU1Swo%2BcYdMpg2hDAaLjs3Vehe3CBCsgOR63iQf%2FWqVv%2BeuKKq%2Bs8uOhS4%2B1bwL4VwhxS1%2F0WUOgmklag%3D%3D";

  useEffect(() => {
    fetch(
      `${apiUrl}?serviceKey=${serviceKey}&pageNo=${pageNo}&numOfRows=${numOfRows}&dataType=${dataType}&base_date=${baseDate}&base_time=${baseTime}&nx=${nx}&ny=${ny}`
    )
      .then((response) => response.json())
      .then((result) => setWeather(result.response.body.items.item));
  }, []);

  console.log(weather);

  const weatherCategory = (weather: [{ [key: string]: string }]) => {
    if (weather) {
      for (let i = 0; i < weather.length; i++) {
        // 하늘상태 (맑음(1), 구름많음(3), 흐림(4))
        if (weather && Object.values(weather[i]).includes("SKY")) {
          setSky(weather[i]["fcstValue"]);
        }
        // 강수형태 (없음(0), 비(1), 비/눈(2), 눈(3), 소나기(4))
        if (weather && Object.values(weather[i]).includes("PTY")) {
          setPty(weather[i]["fcstValue"]);
        }
        // 강수확률 %
        if (weather && Object.values(weather[i]).includes("POP")) {
          setPop(weather[i]["fcstValue"]);
        }
        // 1시간 기온
        if (weather && Object.values(weather[i]).includes("TMP")) {
          setTmp(weather[i]["fcstValue"]);
        }
      }
    }
  };

  const weatherIcon = (sky: string, pty: string) => {
    if (pty === "0") {
      if (sky === "1") {
        // 맑음
        setIcon("/images/icon/weather/clear.svg");
      }
      if (sky === "3") {
        // 구름많음
        setIcon("images/icon/weather/cloudy.svg");
      }
      if (sky === "4") {
        // 흐림
        setIcon("images/icon/weather/partly-cloudy.svg");
      }
    }
    if (pty === "1") {
      // 비
      setIcon("images/icon/weather/night-rain.svg");
    }
    if (pty === "2") {
      // 비/눈
      setIcon("images/icon/weather/flurries.svg");
    }
    if (pty === "3") {
      // 눈
      setIcon("images/icon/weather/change-snow.svg");
    }
    if (pty === "4") {
      // 소나기
      setIcon("images/icon/weather/chage-rain.svg");
    }
  };

  useEffect(() => {
    weatherCategory(weather);
  }, [weather]);
  useEffect(() => {
    weatherIcon(sky, pty);
  }, [weatherCategory]);

  console.log("sky: ", sky);
  console.log("pop: ", pop);
  console.log("pty: ", pty);
  console.log("tmp: ", tmp);
  console.log("icon:", icon);

  if (!icon) return null;
  return (
    <S.Weather>
      <S.DateBox>Today ? </S.DateBox>
      <S.WeatherIcon icon={icon} />
      <S.TemperatureBox>
        <S.Maximum>Temp. {tmp}°C</S.Maximum>
        <S.Minimum>rain {pop}%</S.Minimum>
      </S.TemperatureBox>
    </S.Weather>
  );
};

export default Weather;

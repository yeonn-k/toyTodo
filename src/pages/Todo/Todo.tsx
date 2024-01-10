import React, { useState } from "react";

import Weather from "./Components/Weather/Weather.tsx";
import TodoBox from "./Components/TodoBox/TodoBox.tsx";
import CalendarWrap from "./Components/CalendarWrap/CalendarWrap.tsx";

import { S } from "./Todo";

const Todo = () => {
  const [searchDate, setSearchDate] = useState<string>("");

  return (
    <S.Todo>
      <S.BgImg>
        <S.Brightness>
          <S.CatchPhraseBox>
            <S.UpperCatchPhrase>Todo</S.UpperCatchPhrase>
            <S.LowerCatchPhrase>Dare to dream, Dare to do</S.LowerCatchPhrase>
          </S.CatchPhraseBox>
          <S.ExceptCatchPhrase>
            <S.LeftBox>
              <S.WeatherBox>
                <Weather />
              </S.WeatherBox>
              <S.CalendarBox>
                <CalendarWrap
                  searchDate={searchDate}
                  setSearchDate={setSearchDate}
                />
              </S.CalendarBox>
            </S.LeftBox>
            <S.RightBox>
              <TodoBox searchDate={searchDate} setSearchDate={setSearchDate} />
            </S.RightBox>
          </S.ExceptCatchPhrase>
        </S.Brightness>
      </S.BgImg>
    </S.Todo>
  );
};

export default Todo;

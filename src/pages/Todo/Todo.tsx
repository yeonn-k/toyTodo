import React from "react";

import Weather from "./Components/Weather/Weather.tsx";
import Calander from "./Components/Calendar/Calendar.tsx";
import ATodo from "./Components/ATodo/ATodo.tsx";

import { S } from "./Todo";

const Todo = () => {
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
              <S.WheaterBox>
                <Weather />
              </S.WheaterBox>
              <S.CalendarBox>
                <Calander />
              </S.CalendarBox>
            </S.LeftBox>
            <S.RightBox>
              <S.ATodo></S.ATodo>
            </S.RightBox>
          </S.ExceptCatchPhrase>
        </S.Brightness>
      </S.BgImg>
    </S.Todo>
  );
};

export default Todo;

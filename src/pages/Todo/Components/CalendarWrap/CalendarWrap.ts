import styled from "styled-components";

export const S = {
  CalendarWrap: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    .react-calendar {
      width: 90%;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;

      color: #fff;

      font-family: "Pretendard";
    }

    .react-calendar__navigation {
      margin-bottom: 16px;
    }

    .react-calendar__navigation__label__labelText {
      font-size: 20px;
      font-family: ${(props) => props.theme.titleFont};
      color: #fff;
    }

    .react-calendar__navigation__arrow {
      color: #fff;
      font-size: 20px;
    }

    .react-calendar__month-view__weekdays__weekday {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 14%;
      height: 36px;
      margin-bottom: 12px;
    }

    abbr[title] {
      text-decoration: none;
      font-family: "Pretendard";
      font-size: 17px;
      font-weight: 600;
    }

    abbr {
      color: #fff;
      font-size: 16px;
    }

    .react-calendar__tile {
      width: 14%;
      height: 32px;
      color: #fff;
    }

    .react-calendar__tile--active:enabled:hover,
    .react-calendar__tile--active:enabled:focus {
      background-color: ${(props) => props.theme.blueViolet};
      border-radius: 10px;

      abbr {
        color: #fff;
      }
    }
  `,
  Title: styled.div`
    width: 100%;
    font-size: 30px;
    font-family: ${(props) => props.theme.titleFont};
    text-align: center;
    color: #fff;
    margin-bottom: 32px;

    text-decoration: underline;
    text-underline-offset: 10px;
  `,

  ShowAll: styled.div`
    width: 100%;
    font-size: 20px;
    font-family: ${(props) => props.theme.titleFont};
    text-align: center;
    color: #fff;
    margin-bottom: 14px;
  `,
};

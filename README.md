# Project Todo

## 🧚‍♂️ 개발 기간 및 인원

- 개발 기간 : 2023/11/05 ~ 2024/01/07
- 개발 인원 : 프론트엔드 1명(김지연)

## 🪴 서비스 소개
- 서비스명 : Todo
  - 사용자가 등록한 Todo list를 오늘 날씨와 함께, 날짜별로 분류하여 노출함으로써 사용자가 하루의 게획을 보다 편하게 짤 수 있도록 돕습니다.

## ✨ 구현 기능
### 1. sign up / sign in page
  - 버튼에 마우스 호버시 애니메이션 이펙트 기능
  - input value 유효성 검사 기능

### 2. main page
#### 1) weather
  - 기상청 Open Api 활용(https://www.data.go.kr/index.do)
  - 오늘 날짜의 시간대 별로 해당하는 날씨 정보 제공 기능 (날씨아이콘, 기온, 강수확률)

#### 2) calendar
  - 달력 라이브러리 활용(https://projects.wojtekmaj.pl/react-calendar/)
  - 달력 라이브러리 커스텀
  - 해당 날짜 선택 시 날짜 데이터 출력

#### 3) Todo box
  - 'Show all Tasks' 를 사용하여 전체 Todo 확인 기능
  - 좌측 하단 calendar box에서 날짜 선택을 하여 해당 날짜의 Todo 만을 확인 기능
  - Todo 등록, 수정, 삭제 기능
  - 현재 남은 Todo의 개수 출력 기능

#### 📍 MSW 활용
  - MSW를 활용하여 백엔드 없이 실제 통신이 되는 것 처럼 구현
#### 📍 Sign In / Sign Up
  - DummyJSON( https://dummyjson.com/ )


## 📚 기술 스택
|TypeScript|React|Styled-Components|MSW
|:---:|:---:|:---:|:---:|
| <img src="https://techstack-generator.vercel.app/ts-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/react-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://www.styled-components.com/atom.png" width="65" height="65" /> | <img src="https://logowik.com/content/uploads/images/msw-mock-service-worker8666.logowik.com.webp" /> </div> |

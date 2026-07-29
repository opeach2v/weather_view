# Weather View 🌤️

Open-Meteo API를 활용하여 지역별 현재 날씨와 일별 예보 정보를 제공하는 **Web 기반 날씨 조회 서비스**입니다.

사용자는 여러 지역의 날씨 정보를 카드 형태로 확인할 수 있으며, 카드를 선택하면 해당 지역의 상세 예보 정보를 확인할 수 있습니다.

---

# 1. 플랫폼 및 실행 방법

## 플랫폼

- Web Application
- Responsive Web 지원 (Mobile / Tablet / Desktop)

## 개발 환경

### Frontend

- Next.js
- TypeScript
- Tailwind CSS

### Library

- TanStack Table
- React Icons

### State Management

- Context API

### API

- Open-Meteo API
    - 현재 날씨 및 일별 예보 데이터 조회

## 실행 방법

### Repository Clone

```bash
git clone https://github.com/opeach2v/weather_view.git
```

### 패키지 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

### Production Build

```bash
npm run build
npm start
```

---

## 2. UI 설계

구현 전 Figma를 활용하여 전체적인 화면 구성과 컴포넌트 배치를 설계했습니다.

<img width="1091" height="699" alt="스크린샷 2026-07-29 032221" src="https://github.com/user-attachments/assets/015ad498-e548-4f65-89cc-6d391ba492fd" />

### 실제 페이지

<img width="952" height="525" alt="image" src="https://github.com/user-attachments/assets/c1dc6aa1-6bcb-480d-83f9-f89d5789099a" />

---

## 3. 프로젝트 구조 및 설계 의도

Next.js App Router 구조를 기반으로 역할에 따라 컴포넌트, 상태 관리, 데이터 관련 로직을 분리했습니다.
또, Server Component에서는 API 데이터 요청을 담당하고, Client Component에서는 사용자 인터랙션(모달, 테마, 언어 변경)을 담당하도록 했습니다.

### 폴더 구조

```
app
├── components
│   ├── weatherCard.tsx
│   ├── weatherHeader.tsx
│   ├── dailyWeatherModal.tsx
│   ├── dailyTable.tsx
│   ├── sideBar.tsx
│   └── toggle.tsx
│
├── context
│   └── languageContext.tsx
│
├── lib
│   ├── city.ts
│   ├── weather.ts
│   ├── weather_code.ts
│   └── messages
│       ├── en.ts
│       ├── ko.ts
│       └── index.ts
│
├── page.tsx
└── layout.tsx
```

### 컴포넌트(Components)

- components
    - UI 단위의 컴포넌트를 관리
- WeatherCard
    - 지역별 현재 날씨 정보를 카드 형태로 표시
    - 사용자가 선택한 지역의 상세 예보 모달 호출

- DailyWeatherModal
    - 선택한 지역의 일별 날씨 데이터를 표시
    - 모달 형태로 상세 정보 제공

- DailyTable
    - TanStack Table을 활용해 날짜별 예보 데이터를 테이블 형태로 표시

- WeatherHeader
    - 현재 기준 시간 표시
    - 사이드바 및 메뉴 버튼 관리

### Context Layer

전역 상태가 필요한 기능을 관리합니다.

- languageContext.tsx
    - 현재 선택된 언어 상태 관리
    - 언어 변경 함수 제공
    - Context API 기반 전역 상태 공유

### Data Layer

애플리케이션에서 사용하는 API, 상수, 정적 데이터를 관리합니다.

- weather.ts
    - Open-Meteo API 요청 로직 관리

- city.ts
    - 조회 대상 도시 정보 관리

- weather_code.ts
    - 날씨 코드와 표시 문구 매핑

- messages
    - 다국어 지원을 위한 번역 데이터 관리

---

## 4. 추가 구현 기능

### 다크 모드

사용자가 토글을 통해 라이트/다크 테마를 변경할 수 있도록 구현했습니다.

- 구현 내용:
    - Tailwind CSS dark variant 활용
    - 카드 및 모달 스타일 대응
    - 테이블 스타일 대응

### 다국어 지원

한국어와 영어 전환 기능을 추가했습니다.

- 지원 언어:
    - 한국어
    - 영어 (English)
- 관리 데이터:
    - 도시명
    - 날씨 상태
    - 버튼 텍스트
    - 안내 문구
- 구현 방식:

```
LanguageContext
        ↓
messages[language]
        ↓
화면 텍스트 변경
```

---

## 5. 배포

Vercel을 사용하여 배포했습니다.

- 배포 과정:

```
GitHub Repository
        ↓
Vercel 연결
        ↓
Next.js Build
        ↓
Production Deploy
```

### Vercel 배포 링크

> https://weather-view-siyn.vercel.app/

---

## 6. ChatGPT 활용

구현 과정에서 이해가 부족했던 기능이나 프로젝트 구조에 대한 고민이 있을 때 ChatGPT를 참고했습니다.

- 사용해 본 기능 중 동작 방식이 헷갈리는 부분의 개념 확인
- TypeScript 타입을 별도 파일로 분리하여 관리하는 구조에 대한 의견 참고
- 컴포넌트 분리 및 상태 관리 방식에 대한 방향성 확인

참고한 내용을 그대로 적용하기보다 프로젝트 구조에 맞게 수정하여 적용했습니다.

- 기능에 대한 동작 재확인

<img width="500" alt="image" src="https://github.com/user-attachments/assets/870cecd7-84be-405e-96e7-d6e9cc7b4ac6" />
<br>

- type 파일 분리 고민

<img width="500" alt="image" src="https://github.com/user-attachments/assets/add108fd-e630-4f64-b9b1-18b7b60e2d7c" />
<br>

- 폰트 위치 고민

<img width="500" alt="image" src="https://github.com/user-attachments/assets/d3abc19f-548d-4aa7-aa41-45c8aaee620d" />
<img width="500" alt="image" src="https://github.com/user-attachments/assets/fffd5fa2-b5c3-42ba-86fa-df6f9d1c39af" />

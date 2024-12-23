<a href="https://rolling-three.vercel.app/" target="_blank">
<img width="100%" alt="배너" src="https://github.com/user-attachments/assets/54167b02-19e1-4db7-b2e7-3bcad59dbeae" />
</a>

<br/>
<br/>

# 0. Getting Started (시작하기)

```bash
$ npm start
```

[서비스 링크](https://rolling-three.vercel.app/)

<br/>
<br/>

# 1. Project Overview (프로젝트 개요)

- 프로젝트 이름: 롤링
- 프로젝트 설명: 전통적인 롤링페이퍼 문화를 웹으로 구현한 커뮤니티형 플랫폼

<br/>
<br/>

# 2. Team Members (팀원 및 팀 소개)

|                                                              윤혜림                                                               |                                                              박인건                                                               |                                                              박상석                                                               |                                                               정혜연                                                               |                                                              강동우                                                               |
| :-------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://github.com/user-attachments/assets/1dbe35e8-cc98-41cc-9896-6b57cfbf19c3" alt="윤혜림" width="150" height="150"> | <img src="https://github.com/user-attachments/assets/e68b854a-9da0-43db-9761-afbadcde4fe1" alt="박인건" width="150" height="150"> | <img src="https://github.com/user-attachments/assets/25801447-963d-4fde-bf70-955170ddcb01" alt="박상석" width="150" height="150"> | <img src="https://github.com/user-attachments/assets/13bb6a45-b16e-471d-aaf1-9d7cad1b721a" alt="정혜연"  width="150" height="150"> | <img src="https://github.com/user-attachments/assets/9658debc-4235-46b2-b26a-354facac2556" alt="강동우" width="150" height="150"> |
|                                                               팀장                                                                |                                                               팀원                                                                |                                                               팀원                                                                |                                                                팀원                                                                |                                                               팀원                                                                |
|                                                [GitHub](https://github.com/y5037)                                                 |                                              [GitHub](https://github.com/parkingun)                                               |                                                 [GitHub](https://github.com/pss7)                                                 |                                               [GitHub](https://github.com/yeon0036)                                                |                                              [GitHub](https://github.com/ghkjiop92)                                               |

<br/>
<br/>

# 3. Key Features (주요 기능)

- **롤링 페이퍼**:

  - 나만의 롤링 페이퍼를 만들고, 누군가 나에게 남기는 메세지를 받을 수 있어요.

- **메세지 보내기**:

  - 내가 원하는 사람에게 메세지를 보내기가 가능합니다.

- **인기 롤링 페이퍼**:
  - 상대방에 대한 내 기분을 이모지로 표현 할 수 있어요.

<br/>
<br/>

# 4. Technology Stack (기술 스택)

## 4.1 Language

|            |                                                                                                                          |
| ---------- | ------------------------------------------------------------------------------------------------------------------------ |
| HTML5      | <img src="https://github.com/user-attachments/assets/2e122e74-a28b-4ce7-aff6-382959216d31" alt="HTML5" width="100">      |
| CSS3       | <img src="https://github.com/user-attachments/assets/c531b03d-55a3-40bf-9195-9ff8c4688f13" alt="CSS3" width="100">       |
| Javascript | <img src="https://github.com/user-attachments/assets/4a7d7074-8c71-48b4-8652-7431477669d1" alt="Javascript" width="100"> |

<br/>

## 4.2 Frontend

|                  |                                                                                                                                |        |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------ |
| React            | <img src="https://github.com/user-attachments/assets/e3b49dbb-981b-4804-acf9-012c854a2fd2" alt="React" width="100">            | 18.3.1 |
| StyledComponents | <img src="https://github.com/user-attachments/assets/c9b26078-5d79-40cc-b120-69d9b3882786" alt="StyledComponents" width="100"> | 6.1.12 |

<br/>

## 4.3 Backend

|      |                                                                                                                    |     |
| ---- | ------------------------------------------------------------------------------------------------------------------ | --- |
| Vite | <img src="https://github.com/user-attachments/assets/9ea3071d-6998-486d-bf27-0903e9a106a3" alt="Vite" width="100"> |

<br/>

## 4.4 Cooperation

|            |                                                                                                                          |
| ---------- | ------------------------------------------------------------------------------------------------------------------------ |
| Git        | <img src="https://github.com/user-attachments/assets/483abc38-ed4d-487c-b43a-3963b33430e6" alt="git" width="100">        |
| Git Kraken | <img src="https://github.com/user-attachments/assets/32c615cb-7bc0-45cd-91ea-0d1450bfc8a9" alt="git kraken" width="100"> |
| Notion     | <img src="https://github.com/user-attachments/assets/34141eb9-deca-416a-a83f-ff9543cc2f9a" alt="Notion" width="100">     |

<br/>

# 6. Project Structure (프로젝트 구조)

```plaintext
project/
├── public/
│   ├── index.html           # HTML 템플릿 파일
│   └── favicon.ico          # 아이콘 파일
├── src/
│   ├── assets/              # 이미지, 폰트 등 정적 파일
│   ├── components/          # 재사용 가능한 UI 컴포넌트
│   ├── constant/            # 공통적으로 사용하는 상수 모음
│   ├── hooks/               # 커스텀 훅 모음
│   ├── pages/               # 각 페이지별 컴포넌트
│   ├── services/            # API
│   ├── styles/              # Global Reset Styled
│   ├── utils/               # 페이지네이션, 유효성 검사 등
│   ├── App.js               # 메인 애플리케이션 컴포넌트
│   ├── index.js             # 엔트리 포인트 파일
│   package-lock.json        # 정확한 종속성 버전이 기록된 파일로, 일관된 빌드를 보장
│   package.json             # 프로젝트 종속성 및 스크립트 정의
├── .gitignore               # Git 무시 파일 목록
└── README.md                # 프로젝트 개요 및 사용법
```

<br/>
<br/>

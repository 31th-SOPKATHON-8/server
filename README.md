# 🛠 개발 환경

![img](https://img.shields.io/badge/typescript-4.6.3-blue)
![img](https://img.shields.io/badge/ts--node-10.9.1-green)
![img](https://img.shields.io/badge/prisma-4.6.1-yellowgreen)
![img](https://img.shields.io/badge/Express-v4.18.2-green)

# ✉️ 프로젝트 폴더 구조

```
.
├── tsconfig.json
├── nodemone.json
├── package.json
└── src
    ├── constants
    ├── controller
    ├── interfaces
    ├── routes
    ├── service
    └──  index.ts
```

# ⚙️ Dependencies

```json
{
  "name": "seminar4",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "dev": "nodemon",
    "build": "tsc && node dist"
  },
  "devDependencies": {
    "@types/express": "^4.17.14",
    "@types/node": "^18.11.9",
    "nodemon": "^2.0.20"
  },
  "dependencies": {
    "@prisma/client": "^4.6.1",
    "express": "^4.18.2",
    "prisma": "^4.6.1"
  }
}

```

# 📧API 명세서

[API 명세서 링크](https://www.notion.so/Server-52f68030f9fd46d4992c9825e7944b62)

# 📋 Model Diagram

![image](https://user-images.githubusercontent.com/80771842/202855702-d49be22c-4962-4c64-b821-8dc40f850d97.png)

# ✉️ Commit Messge Rules

**서버** 들의 **Git Commit Message Rules**

- 반영사항을 바로 확인할 수 있도록 작은 기능 하나라도 구현되면 커밋을 권장합니다.
- 기능 구현이 완벽하지 않을 땐, 각자 브랜치에 커밋을 해주세요.

### 📌 Commit Convention

**[태그] 제목의 형태**

| 태그 이름 |                       설명                        |
| :-------: | :-----------------------------------------------: |
|   FEAT    |             새로운 기능을 추가할 경우             |
|    FIX    |                 버그를 고친 경우                  |
|   CHORE   |                    짜잘한 수정                    |
|   DOCS    |                     문서 수정                     |
|   INIT    |                     초기 설정                     |
|   TEST    |      테스트 코드, 리펙토링 테스트 코드 추가       |
|  RENAME   | 파일 혹은 폴더명을 수정하거나 옮기는 작업인 경우  |
|   STYLE   | 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우 |
| REFACTOR  |                   코드 리팩토링                   |

### **커밋 타입**

- `[태그] 설명` 형식으로 커밋 메시지를 작성합니다.
- 태그는 영어를 쓰고 대문자로 작성합니다.

예시 >

```
  [FEAT] 검색 api 추가
```

## **💻 Github mangement**

**유진승빈의** WorkFlow : **Gitflow Workflow**

- Develop, Feature, Hotfix 브랜치

- 개발(develop): 기능들의 통합 브랜치

- 기능 단위 개발(feature): 기능 단위 브랜치

- 버그 수정 및 갑작스런 수정(hotfix): 수정 사항 발생 시 브랜치

- 개발 브랜치 아래 기능별 브랜치를 만들어 작성합니다.

## ✍🏻 Code Convention

[에어비앤비 코드 컨벤션](https://github.com/airbnb/javascript)

## 📍 Gitflow 규칙

- Develop에 직접적인 commit, push는 금지합니다.
- 커밋 메세지는 다른 사람들이 봐도 이해할 수 있게 써주세요.
- 작업 이전에 issue 작성 후 pullrequest 와 issue를 연동해 주세요.
- 풀리퀘스트를 통해 코드 리뷰를 전원이 코드리뷰를 진행합니다.
- 기능 개발 시 개발 브랜치에서 feat/기능 으로 브랜치를 파서 관리합니다.
- feat은 자세한 기능 한 가지를 담당하며, 기능 개발이 완료되면 각자의 브랜치로 Pull Request를 보냅니다.
- 각자가 기간 동안 맡은 역할을 전부 수행하면, 각자 브랜치에서 develop브랜치로 Pull Request를 보냅니다.  
  **develop 브랜치로의 Pull Request는 상대방의 코드리뷰 후에 merge할 수 있습니다.**

## ❗️ branch naming convention

- develop
- feature/issue_number or Short Description
- release/version_number
- hotfix/issue_number or Short Description

## 📋 Code Review Convention

- P1: 꼭 반영해주세요 (Request changes)
- P2: 적극적으로 고려해주세요 (Request changes)
- P3: 웬만하면 반영해 주세요 (Comment)
- P4: 반영해도 좋고 넘어가도 좋습니다 (Approve)
- P5: 그냥 사소한 의견입니다 (Approve)

### 🙋🏻‍♀️ 담당

<details>
<summary>DB 설계</summary>
<div markdown="1">  
 
| 기능명 | 담당자 | 완료 여부 |
| :-----: | :---: | :---: |
| USER | 승빈 |  ✅   |
| POST | 유진 |  ✅   |
| Brand | 승빈 |  ✅   |
| Comment | 유진 |  ✅  |
| Mark | 승빈 |  ✅  |
| Category | 유진 |  ✅  |
</div>
</details>

<details>
<summary>api 구현</summary>
<div markdown="1">

|               기능명               | Method | 담당자 | 완료 여부 |
| :--------------------------------: | :----: | :----: | :-------: |
| 간편 대화주제 카테고리 리스트 조회 |  GET   | `예시` |    ✅     |

</div>
</details>

# Developers


|최승빈|한유진|
| :---------------------------------: | :----------------------------------: |

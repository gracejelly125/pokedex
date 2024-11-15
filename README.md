# 포켓몬 도감 만들기
----
## 프로젝트의 목표
- React의 상태 관리와 이벤트 핸들링을 활용하여, 포켓몬 정보를 다루는 애플리케이션을 완성한다.
- React-router-dom 을 이용해 SPA 를 구현한다.
- React에서 props drilling과 Context API를 적용하여 데이터 흐름을 이해할 수 있다.
----
## 기능
### 1. **Git 브랜치 전략 사용하기**
- 상태 관리 방식을 단계별로 나눠 구현하는 Git 브랜치 전략을 사용한다.
- props-drilling, context, redux toolit 각 브랜치를 만들어 각각의 전역 상태 관리의 구현한다.
- Redux Toolkit을 사용하여 상태 관리를 리팩터링하여 더욱 체계적인 중앙 상태 관리를 경험해본다.
 
### 2. **페이지 라우팅 구현하기**
- react-router-dom을 이용해 여러 페이지 간 이동을 설정한다.
- useNavigate 혹은 Link 컴포넌트를 사용하여 페이지 간 이동을 구현한다.

### 3. **도감 페이지 구성하기**
- Dashboard, PokemonList, PokemonCard 세 개의 주요 컴포넌트로 페이지를 구성한다.
- Dashboard: dex 페이지 상단에 사용자가 추가한 6장의 포켓몬 카드를 보여준다.
- PokemonList: MOCK_DATA의 포켓몬 정보를 불러와 전체 포켓몬 카드를 보여준다.
  추가 버튼을 눌러 대시보드에 카드를 추가할 수 있고, 카드를 클릭시 detail 페이지로 이동한다.
- PokemonCard: dex 페이지에서 클릭된 카드의 상세정보를 보여준다.
  뒤로가기 버튼을 눌러 dex 페이지로 이동할 수 있다.
  추가 혹은 삭제 버튼을 눌러 대시보드에 반영할 수 있다. 

### 4. **디테일 페이지**
- 포켓몬 ID를 path params로 받아와, 이를 통해 MOCK_DATA에서 해당 포켓몬의 상세 정보를 검색하여 표시한다.
- 디테일 페이지에서 포켓몬을 대시보드에 추가할 수 있는 '추가' 버튼을 구현하여 페이지 전환 간 상태를 유지할 수 있도록 한다.

### 5. **알림 기능 구현**
- 포켓몬 선택 시 중복 또는 최대 선택 수를 초과할 경우 사용자에게 알림을 제공한다.
- alert 메시지를 toast UI 요소로 대체한다.

### 6. **스타일링**
- styled-components를 사용하여 페이지의 전반적인 스타일을 설정하고, 카드와 대시보드의 시각적 일관성을 제공한다.

### 7. **리스트 페이지의 데이터를 유지시키기**
- 디테일 페이지에 다녀온 뒤에도 리스트 페이지에서 이전에 선택된 포켓몬 상태가 유지되도록 구현한다.

----
## 사용한 툴
- React
- vite
----
## 결과물
- vercel 배포 링크 : https://pokedex-pink-nine.vercel.app/
![과제](https://velog.velcdn.com/images/gracejelly125/post/3f84e4f8-386e-422f-9e93-6405b206c367/image.JPG)

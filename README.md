# 원티드 프리온보딩 코스

## 👩‍💻 프로젝트 실행방법

- ① 레포지토리를 클론한다.
- ② custom-component 폴더 경로에서 패키지 모듈을 설치한다. (npm install)
- ③ react 프로젝트 환경을 실행한다. (npm start)

## ✍️ Components

### 1️⃣ Toggle

- 구현한 방법

  useState에 boolean으로 true/false를 주어 토글을 클릭 했을 시 변환되게 했습니다.

  클릭 했을 시 배경색과 글자가 변경되고 토글 안에 있는 원은 애니메이션을 주어 이동하는 것처럼 보이게 했습니다.

- Error Handling

  useState로 boolearn 값을 줘서 색깔 변경과 글자는 변경하였지만, 토글 안에 있는 원을 어떤 식으로 애니메이션을 줘야 할지 고민했습니다.

  useState 값을 활용해 Circle(원)자체에 css처리를 해주려고 시도를 해보았지만 잘 되지 않았습니다.

  그래서 구글링과 여러 시도 끝에 클래스 네임을 주어 클릭 했을 시 className에 active(네임명)를 추가하여 애니메이션 효과를 주며 원을 이동시킬 수 있었습니다.

  styled-components를 사용하기에 className 대신 props로 대체하였다.

- 동작

  <img width="50%" src="https://user-images.githubusercontent.com/56882147/154031089-4a8c203a-7930-405b-9ce8-c9d8b2c85870.gif"/>

### 2️⃣ Modal

- 구현한 방법

  토글과 마찬가지로 useState에 true/false 값을 주었습니다.

  true 일때만 나타나는 태그를 만들어 모달창으로 활용하였습니다.

  상위 태그는 position:reletive를 주고 하위 태그(모달창)은 positive:absolute를 주어 위치를 잡아주고

  배경에는 backgroundColor의 속성 중 rgba를 활용해 배경만 약간 어둡게 해주었습니다.

- Error Handling

  배경만 흐리게 해주고 싶었는데 모달창도 함께 어두워져서 rbga를 활용해 배경만 어둡게 해주었습니다.

- 동작

  <img width="50%" src="https://user-images.githubusercontent.com/56882147/154031999-befa18c8-60d6-473c-8a82-081f0fdea753.gif"/>

### 3️⃣ Tab

- 구현한 방법

  사용할 tab배열의 index를 활용하여 index와 일치할 경우 className에 isActive(네임명)를 추가하여

  tabNum으로 이름 지은 useState에 해당 index값을 주었습니다.

  그래서 그 배열의 index와 일치하는 요소를 나타나게 해주었습니다.

  그다음 tab내부에 사용 할 3개의 컴포넌트를 만들었습니다.

  (Tab1, Tab2, Tab3)

  그다음 해당 컴포넌트와 배열의 index를 맞추기 위해 Obj를 활용하여 0번째 index이면

  obj의 key와 일치하는 value(components)가 나오도록 해주었습니다.
  ex)
  obj = {
  0: <Tab1/>,
  1: <Tab2/>,
  2: <Tab3/>
  }

- Error Handling

  tab부분을 배열 index를 활용해 췹게 구현하였지만, 내부 컴포넌트를 어떤게 index와 일치시켜야 할지 고민하였습니다.

  기능을 먼저 구현하기 위해 코드를 작성하고 나니 하드코딩으로 작성 된 느낌이였습니다.

  현재로는 3개의 tab이라 가능하지만 많은 tab이라면 이 코드는 사용할 수 없겠다는 생각들어 검색을 통해

  obj를 활용 한다는 단서를 얻었고, 그것을 활용하여 index와 obj를 연결 시켜 주는데 성공하였습니다.

- 동작

  <img width="50%" src="https://user-images.githubusercontent.com/56882147/154032155-2ddd4a5b-6204-479f-833a-abb23cebb77e.gif"/>

### 4️⃣ Tag

- 구현한 방법

  먼저 hash를 전체를 저장 할 array state와 hash array에 넣을 item state를 만들었습니다.

  input Box 안에 해쉬 배열을 map으로 보여주게 하고 input에서 원하는 값을 입력한 후

  item state에 저장하고 엔터(onKeyPress)를 누르면 hash state에 추가되도록 구현하였습니다.

- Error Handling

  태그는 처음 구현해보아서 어떻게 구현 하는지 잘 몰라서 구글링과 벨로퍼트님의 velog 글쓰기에 태그 구현을 확인해보았습니다.

  어떤 식으로 만드는지 이해하고 나니 to-do list 만드는 방법과 비슷해서 쉽게 구현할 수 있었습니다.

- 동작

  <img width="50%" src="https://user-images.githubusercontent.com/56882147/154032166-0eb9726b-3b9e-4ac6-ab4c-f0dea2d4f031.gif"/>

### 5️⃣ AutoComplete

- 구현한 방법

  input에 사용할 search state와 일치하는 입력된 값이 있는지 여부를 판단하기 위해 resfound state를 만들고,

  suggest 배열 state를 만들어 dropdown에 보여줄 자동완성된 목록 리스트를 담을 state를 만들었습니다.

  input에 입력 값이 더미 데이터에 포함 하고 있는지 여부를 판단하기 위해 hndleChange 함수를 만들어

  suggestion 이라는 빈 배열에 filter와 include를 활용해 데이터 유무를 찾고 데이터 있다면 suggestion 배열에 담은 후 suggest에 담아주었습니다.

  getSuggestions 함수를 만들어 일치하는 데이터가 없으면 Search Content Not Found 안내문이 뜨고

  일치하는 데이터가 있다면 dropdown에 보여줄 데이터를 map 메소드로 return 합니다.

- Error Handling

  전체적인 작동 원리가 잘 이해되지 않아 구글링을 통해서 이해하고 코드를 작성하였습니다.

- 동작

  <img width="50%" src="https://user-images.githubusercontent.com/56882147/154032176-56bacc42-7981-4f34-934a-38c350050d1b.gif"/>

### 6️⃣ ClickToEdit

- 구현한 방법

  input 박스 onChange로 user(obj) state에 name,age를 변경하였습니다.

  그리고 div태그를 하단에 만들어 user를 출력하게 해주면 변경된 name,age가 나타납니다.

  하지만, 여기선 클릭 시 변경을 해주어야 하기 때문에 direct로 변경을 하면 안되고

  input박스에 있는 onBlur event를 활용해 focus가 빠져 나갔을 때 user state가 변경되는 함수를 사용하였습니다.

- Error Handling

  input-box onchange로 이름과 나이를 쉽게 변경은 하였지만 클릭 하였을 시 변경하는 부분에서 헤맸습니다.

  그래서 검색을 해보니 onBur event를 사용하면 쉽게 해결할 수 있다는 방법을 찾아 적용하였습니다.

  onFocus => 포커스 올 경우 발생 이벤트

  onBlur => 포커스가 빠져 나왔을 때 발생 이벤트

- 동작

  <img width="50%" src="https://user-images.githubusercontent.com/56882147/154032198-fd07d123-8780-40dd-9cd0-ab44adede347.gif"/>

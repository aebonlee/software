import{j as e,L as s}from"./index-wULQ110e.js";import{S as d}from"./SEOHead-DWw5Al7H.js";function i(){return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"UML 다이어그램",description:"UML(Unified Modeling Language) 다이어그램의 종류와 작성법을 학습합니다."}),e.jsx("section",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsx("h1",{children:"UML 다이어그램"}),e.jsx("p",{children:"소프트웨어 모델링의 표준 언어 UML을 배워봅시다"})]})}),e.jsx("section",{className:"section lesson-content",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-body",children:[e.jsx("h2",{children:"UML이란?"}),e.jsxs("p",{children:[e.jsx("strong",{children:"UML(Unified Modeling Language)"}),"은 소프트웨어 시스템을 시각적으로 모델링하기 위한 표준 언어입니다. OMG(Object Management Group)에서 관리합니다."]}),e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:"UML 다이어그램 분류"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"구조 다이어그램"}),": 클래스, 객체, 컴포넌트, 패키지, 배치"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"행위 다이어그램"}),": 유스케이스, 시퀀스, 활동, 상태"]})]})]}),e.jsx("h2",{children:"클래스 다이어그램"}),e.jsx("p",{children:"시스템의 정적 구조를 표현하는 가장 중요한 UML 다이어그램입니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"클래스 다이어그램 표기법"}),e.jsx("pre",{children:e.jsx("code",{children:`┌──────────────────────┐
│     <<interface>>    │
│    Comparable<T>     │
├──────────────────────┤
│                      │
├──────────────────────┤
│ + compareTo(T): int  │
└──────────────────────┘

┌──────────────────────┐
│       Student        │  ← 클래스명
├──────────────────────┤
│ - id: int            │  ← 속성 (- private)
│ - name: String       │
│ # gpa: double        │  ← (# protected)
├──────────────────────┤
│ + getName(): String  │  ← 메서드 (+ public)
│ + setGpa(d): void    │
└──────────────────────┘`})})]}),e.jsx("h3",{children:"클래스 간 관계"}),e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"관계"}),e.jsx("th",{children:"표기"}),e.jsx("th",{children:"설명"}),e.jsx("th",{children:"예시"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"연관"})}),e.jsx("td",{children:"실선 화살표"}),e.jsx("td",{children:"두 클래스 간의 관계"}),e.jsx("td",{children:"Student → Course"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"의존"})}),e.jsx("td",{children:"점선 화살표"}),e.jsx("td",{children:"일시적 사용 관계"}),e.jsxs("td",{children:["Order --",">"," Payment"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"일반화"})}),e.jsx("td",{children:"빈 삼각형 화살표"}),e.jsx("td",{children:"상속 관계"}),e.jsx("td",{children:"Dog ◁─ Animal"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"실체화"})}),e.jsx("td",{children:"점선 빈 삼각형"}),e.jsx("td",{children:"인터페이스 구현"}),e.jsx("td",{children:"ArrayList ◁-- List"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"집합"})}),e.jsx("td",{children:"빈 다이아몬드"}),e.jsx("td",{children:"전체-부분 (약한)"}),e.jsx("td",{children:"Team ◇─ Player"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"합성"})}),e.jsx("td",{children:"채운 다이아몬드"}),e.jsx("td",{children:"전체-부분 (강한)"}),e.jsx("td",{children:"House ◆─ Room"})]})]})]})}),e.jsx("h2",{children:"시퀀스 다이어그램"}),e.jsx("p",{children:"객체 간의 메시지 교환 순서를 시간 흐름에 따라 표현합니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"시퀀스 다이어그램 예시: 로그인"}),e.jsx("pre",{children:e.jsx("code",{children:`User        LoginController    AuthService     Database
 │              │                  │               │
 │──login()────>│                  │               │
 │              │──authenticate()─>│               │
 │              │                  │──findUser()──>│
 │              │                  │<──user data───│
 │              │                  │──verify pw──> │
 │              │<──auth result────│               │
 │<──response───│                  │               │`})})]}),e.jsx("h2",{children:"유스케이스 다이어그램"}),e.jsx("p",{children:"시스템의 기능과 사용자(액터)의 관계를 표현합니다."}),e.jsx("h2",{children:"활동 다이어그램"}),e.jsx("p",{children:"업무 흐름이나 알고리즘의 제어 흐름을 표현합니다. 조건 분기, 병렬 처리를 시각화할 수 있습니다."}),e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:"연습: UML 다이어그램 작성"}),e.jsx("p",{children:'"온라인 쇼핑몰"의 UML 다이어그램을 작성해보세요.'}),e.jsxs("ul",{children:[e.jsx("li",{children:"클래스 다이어그램: User, Product, Order, Cart 클래스와 관계"}),e.jsx("li",{children:"시퀀스 다이어그램: 상품 주문 과정"}),e.jsx("li",{children:"실습 페이지에서 UML 분석기를 활용해보세요"})]})]}),e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:"핵심 요약"}),e.jsxs("ul",{children:[e.jsx("li",{children:"UML은 소프트웨어 모델링의 표준 시각 언어"}),e.jsx("li",{children:"클래스 다이어그램은 정적 구조, 시퀀스 다이어그램은 동적 상호작용 표현"}),e.jsx("li",{children:"6가지 관계(연관, 의존, 일반화, 실체화, 집합, 합성) 구분이 중요"})]})]}),e.jsxs("div",{className:"lesson-nav",children:[e.jsx(s,{to:"/intro/requirements",className:"lesson-nav-btn prev",children:"← 이전: 요구분석 기법"}),e.jsx(s,{to:"/principles/solid",className:"lesson-nav-btn next",children:"다음: SOLID 원칙 →"})]})]})})})]})}export{i as default};

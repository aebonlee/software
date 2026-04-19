import{j as e,L as s}from"./index-9mBY1adw.js";import{S as r}from"./SEOHead-g3QCo49U.js";function i(){return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"행위 패턴",description:"Observer, Strategy, Command, State, Template Method 등 행위 디자인 패턴을 학습합니다."}),e.jsx("section",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsx("h1",{children:"행위 패턴 (Behavioral Patterns)"}),e.jsx("p",{children:"객체 간 상호작용과 책임 분배를 다루는 11가지 디자인 패턴"})]})}),e.jsx("section",{className:"section lesson-content",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-body",children:[e.jsx("h2",{children:"행위 패턴이란?"}),e.jsx("p",{children:"행위 패턴은 객체 간의 상호작용과 책임 분배 방식을 다룹니다. 알고리즘과 객체 간의 책임을 적절히 분산시킵니다."}),e.jsx("h2",{children:"1. Observer 패턴"}),e.jsx("p",{children:"객체 상태가 변경되면 의존하는 모든 객체에 자동으로 알림을 보냅니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"Observer 예시: 주가 알림"}),e.jsx("pre",{children:e.jsx("code",{children:`interface StockObserver {
    void update(String symbol, double price);
}

interface StockSubject {
    void register(StockObserver o);
    void remove(StockObserver o);
    void notifyAll();
}

class StockMarket implements StockSubject {
    private List<StockObserver> observers = new ArrayList<>();
    private Map<String, Double> prices = new HashMap<>();

    public void register(StockObserver o) { observers.add(o); }
    public void remove(StockObserver o) { observers.remove(o); }
    public void notifyAll() {
        for (StockObserver o : observers) {
            prices.forEach((sym, price) -> o.update(sym, price));
        }
    }

    public void setPrice(String symbol, double price) {
        prices.put(symbol, price);
        notifyAll();
    }
}`})})]}),e.jsx("h2",{children:"2. Strategy 패턴"}),e.jsx("p",{children:"알고리즘을 캡슐화하고 실행 시점에 교체할 수 있게 합니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"Strategy 예시: 정렬"}),e.jsx("pre",{children:e.jsx("code",{children:`interface SortStrategy {
    void sort(int[] data);
}

class BubbleSort implements SortStrategy {
    public void sort(int[] data) { /* 버블 정렬 */ }
}

class QuickSort implements SortStrategy {
    public void sort(int[] data) { /* 퀵 정렬 */ }
}

class Sorter {
    private SortStrategy strategy;
    void setStrategy(SortStrategy s) { this.strategy = s; }
    void sort(int[] data) { strategy.sort(data); }
}`})})]}),e.jsx("h2",{children:"3. Command 패턴"}),e.jsx("p",{children:"요청을 객체로 캡슐화하여 매개변수화, 큐잉, 로깅, 실행취소를 지원합니다."}),e.jsx("h2",{children:"4. State 패턴"}),e.jsx("p",{children:"객체의 내부 상태에 따라 행동을 변경합니다. 상태를 객체로 표현합니다."}),e.jsx("h2",{children:"5. Template Method 패턴"}),e.jsx("p",{children:"알고리즘의 골격을 정의하고 일부 단계의 구현을 서브클래스에 위임합니다."}),e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"패턴"}),e.jsx("th",{children:"핵심 목적"}),e.jsx("th",{children:"사용 사례"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Observer"})}),e.jsx("td",{children:"상태 변화 통지"}),e.jsx("td",{children:"이벤트 시스템, MVC"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Strategy"})}),e.jsx("td",{children:"알고리즘 교체"}),e.jsx("td",{children:"정렬, 결제, 인증"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Command"})}),e.jsx("td",{children:"요청 객체화"}),e.jsx("td",{children:"Undo/Redo, 매크로"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"State"})}),e.jsx("td",{children:"상태별 행동 변경"}),e.jsx("td",{children:"자판기, 주문 상태"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Template Method"})}),e.jsx("td",{children:"알고리즘 골격 정의"}),e.jsx("td",{children:"프레임워크 확장"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Iterator"})}),e.jsx("td",{children:"순차 접근"}),e.jsx("td",{children:"컬렉션 순회"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Mediator"})}),e.jsx("td",{children:"중재자 통신"}),e.jsx("td",{children:"채팅방, UI 이벤트"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Memento"})}),e.jsx("td",{children:"상태 저장/복원"}),e.jsx("td",{children:"에디터 Undo"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Chain of Resp."})}),e.jsx("td",{children:"요청 체인 처리"}),e.jsx("td",{children:"미들웨어, 로깅"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Visitor"})}),e.jsx("td",{children:"새 연산 추가"}),e.jsx("td",{children:"컴파일러 AST"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Interpreter"})}),e.jsx("td",{children:"문법 해석"}),e.jsx("td",{children:"SQL 파서, 정규식"})]})]})]})}),e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:"연습: 행위 패턴 적용"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Observer 패턴으로 뉴스레터 구독 시스템을 구현해보세요"}),e.jsx("li",{children:"Strategy 패턴으로 결제 시스템(카드/계좌이체/포인트)을 구현해보세요"}),e.jsx("li",{children:"State 패턴으로 자판기 상태(대기/선택/결제/배출)를 구현해보세요"})]})]}),e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:"핵심 요약"}),e.jsxs("ul",{children:[e.jsx("li",{children:"행위 패턴은 객체 간 책임 분배와 상호작용을 다룸"}),e.jsx("li",{children:"Observer, Strategy, Command가 가장 빈번하게 사용"}),e.jsx("li",{children:"조건문 대신 패턴을 사용하면 확장성이 크게 향상"})]})]}),e.jsxs("div",{className:"lesson-nav",children:[e.jsx(s,{to:"/patterns/structural",className:"lesson-nav-btn prev",children:"← 이전: 구조 패턴"}),e.jsx(s,{to:"/practice/oop",className:"lesson-nav-btn next",children:"다음: OOP 구현 →"})]})]})})})]})}export{i as default};

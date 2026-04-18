import{j as e,L as s}from"./index-Ce_n12ty.js";import{S as r}from"./SEOHead-BsG18cmB.js";function d(){return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"구조 패턴",description:"Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy 등 구조 디자인 패턴을 학습합니다."}),e.jsx("section",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsx("h1",{children:"구조 패턴 (Structural Patterns)"}),e.jsx("p",{children:"클래스와 객체를 더 큰 구조로 합성하는 7가지 디자인 패턴"})]})}),e.jsx("section",{className:"section lesson-content",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-body",children:[e.jsx("h2",{children:"구조 패턴이란?"}),e.jsx("p",{children:"구조 패턴은 클래스나 객체를 조합하여 더 큰 구조를 만드는 방법을 다룹니다."}),e.jsx("h2",{children:"1. Adapter 패턴"}),e.jsx("p",{children:"호환되지 않는 인터페이스를 변환하여 함께 동작할 수 있게 합니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"Adapter 예시"}),e.jsx("pre",{children:e.jsx("code",{children:`// 기존 시스템의 인터페이스
interface MediaPlayer {
    void play(String filename);
}

// 외부 라이브러리 (호환 불가)
class AdvancedPlayer {
    void playMp4(String file) { /* MP4 재생 */ }
}

// 어댑터
class MediaAdapter implements MediaPlayer {
    private AdvancedPlayer player = new AdvancedPlayer();

    public void play(String filename) {
        player.playMp4(filename);
    }
}`})})]}),e.jsx("h2",{children:"2. Decorator 패턴"}),e.jsx("p",{children:"객체에 동적으로 새로운 기능을 추가합니다. 상속 없이 기능을 확장할 수 있습니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"Decorator 예시: 커피 주문"}),e.jsx("pre",{children:e.jsx("code",{children:`interface Coffee {
    double cost();
    String description();
}

class BasicCoffee implements Coffee {
    public double cost() { return 3000; }
    public String description() { return "아메리카노"; }
}

class MilkDecorator implements Coffee {
    private Coffee coffee;
    MilkDecorator(Coffee c) { this.coffee = c; }
    public double cost() { return coffee.cost() + 500; }
    public String description() { return coffee.description() + " + 우유"; }
}

// 사용: new MilkDecorator(new BasicCoffee())
// 결과: "아메리카노 + 우유", 3500원`})})]}),e.jsx("h2",{children:"3. Facade 패턴"}),e.jsx("p",{children:"복잡한 서브시스템에 대한 단순한 인터페이스를 제공합니다."}),e.jsx("h2",{children:"4. Composite 패턴"}),e.jsx("p",{children:"객체들을 트리 구조로 구성하여 개별 객체와 복합 객체를 동일하게 다룹니다."}),e.jsx("h2",{children:"5. Proxy 패턴"}),e.jsx("p",{children:"다른 객체에 대한 대리자를 제공하여 접근을 제어합니다."}),e.jsx("h2",{children:"6. Bridge 패턴"}),e.jsx("p",{children:"추상화와 구현을 분리하여 독립적으로 변형할 수 있게 합니다."}),e.jsx("h2",{children:"7. Flyweight 패턴"}),e.jsx("p",{children:"공유를 통해 많은 수의 세밀한 객체들을 효율적으로 지원합니다."}),e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"패턴"}),e.jsx("th",{children:"핵심 목적"}),e.jsx("th",{children:"사용 사례"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Adapter"})}),e.jsx("td",{children:"인터페이스 변환"}),e.jsx("td",{children:"레거시 시스템 통합"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Decorator"})}),e.jsx("td",{children:"동적 기능 추가"}),e.jsx("td",{children:"입출력 스트림, 미들웨어"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Facade"})}),e.jsx("td",{children:"단순한 인터페이스 제공"}),e.jsx("td",{children:"복잡한 API 래핑"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Composite"})}),e.jsx("td",{children:"트리 구조 처리"}),e.jsx("td",{children:"파일 시스템, UI 컴포넌트"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Proxy"})}),e.jsx("td",{children:"접근 제어"}),e.jsx("td",{children:"캐싱, 보안, 로깅"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Bridge"})}),e.jsx("td",{children:"추상화-구현 분리"}),e.jsx("td",{children:"플랫폼 독립적 코드"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Flyweight"})}),e.jsx("td",{children:"메모리 절약"}),e.jsx("td",{children:"텍스트 에디터 문자 객체"})]})]})]})}),e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:"연습: 구조 패턴 적용"}),e.jsxs("ul",{children:[e.jsx("li",{children:"파일 시스템(파일/폴더)에 Composite 패턴을 적용해보세요"}),e.jsx("li",{children:"커피 주문에 시럽, 휘핑크림 Decorator를 추가해보세요"})]})]}),e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:"핵심 요약"}),e.jsxs("ul",{children:[e.jsx("li",{children:"구조 패턴은 객체 합성을 통해 새로운 기능을 구현"}),e.jsx("li",{children:"Adapter, Decorator, Facade가 가장 많이 사용됨"}),e.jsx("li",{children:"상속보다 합성을 선호하는 설계 원칙과 밀접"})]})]}),e.jsxs("div",{className:"lesson-nav",children:[e.jsx(s,{to:"/patterns/creational",className:"lesson-nav-btn prev",children:"← 이전: 생성 패턴"}),e.jsx(s,{to:"/patterns/behavioral",className:"lesson-nav-btn next",children:"다음: 행위 패턴 →"})]})]})})})]})}export{d as default};

import{j as e,L as s}from"./index-DjimwG07.js";import{S as i}from"./SEOHead-sBQqcXRi.js";function n(){return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"SOLID 원칙",description:"객체지향 설계의 5대 원칙 SOLID를 학습합니다."}),e.jsx("section",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsx("h1",{children:"SOLID 원칙"}),e.jsx("p",{children:"유지보수 가능한 객체지향 설계를 위한 5가지 핵심 원칙"})]})}),e.jsx("section",{className:"section lesson-content",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-body",children:[e.jsx("h2",{children:"SOLID란?"}),e.jsxs("p",{children:[e.jsx("strong",{children:"SOLID"}),"는 Robert C. Martin이 정리한 객체지향 설계의 5대 원칙입니다. 이 원칙을 따르면 유연하고 유지보수하기 좋은 소프트웨어를 만들 수 있습니다."]}),e.jsx("h2",{children:"S - 단일 책임 원칙 (SRP)"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Single Responsibility Principle"}),": 클래스는 하나의 책임만 가져야 합니다."]}),e.jsxs("div",{className:"comparison-grid",children:[e.jsxs("div",{className:"comparison-card bad",children:[e.jsx("h4",{children:"SRP 위반"}),e.jsx("pre",{style:{fontSize:"0.8rem"},children:e.jsx("code",{children:`class Employee {
  calculatePay() { ... }
  saveToDatabase() { ... }
  generateReport() { ... }
}`})})]}),e.jsxs("div",{className:"comparison-card good",children:[e.jsx("h4",{children:"SRP 준수"}),e.jsx("pre",{style:{fontSize:"0.8rem"},children:e.jsx("code",{children:`class Employee { ... }
class PayCalculator { calculatePay() }
class EmployeeRepository { save() }
class ReportGenerator { generate() }`})})]})]}),e.jsx("h2",{children:"O - 개방-폐쇄 원칙 (OCP)"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Open/Closed Principle"}),": 확장에는 열려 있고, 수정에는 닫혀 있어야 합니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"OCP 적용 예시"}),e.jsx("pre",{children:e.jsx("code",{children:`// 추상화를 통해 확장 가능한 구조
public interface Shape {
    double area();
}

public class Circle implements Shape {
    private double radius;
    public double area() { return Math.PI * radius * radius; }
}

public class Rectangle implements Shape {
    private double width, height;
    public double area() { return width * height; }
}

// 새로운 도형 추가 시 기존 코드 수정 불필요
public class Triangle implements Shape {
    private double base, height;
    public double area() { return 0.5 * base * height; }
}`})})]}),e.jsx("h2",{children:"L - 리스코프 치환 원칙 (LSP)"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Liskov Substitution Principle"}),": 하위 타입은 상위 타입을 대체할 수 있어야 합니다."]}),e.jsx("h2",{children:"I - 인터페이스 분리 원칙 (ISP)"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Interface Segregation Principle"}),": 클라이언트는 사용하지 않는 메서드에 의존하지 않아야 합니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"ISP 적용 예시"}),e.jsx("pre",{children:e.jsx("code",{children:`// 나쁜 예: 거대 인터페이스
interface Worker {
    void work();
    void eat();
    void sleep();
}

// 좋은 예: 분리된 인터페이스
interface Workable { void work(); }
interface Eatable  { void eat(); }
interface Sleepable { void sleep(); }

class Robot implements Workable {
    public void work() { /* 작업 수행 */ }
}`})})]}),e.jsx("h2",{children:"D - 의존성 역전 원칙 (DIP)"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Dependency Inversion Principle"}),": 고수준 모듈이 저수준 모듈에 의존하지 않고, 둘 다 추상화에 의존해야 합니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"DIP 적용 예시"}),e.jsx("pre",{children:e.jsx("code",{children:`// 추상화에 의존
interface MessageSender {
    void send(String message);
}

class EmailSender implements MessageSender {
    public void send(String msg) { /* 이메일 발송 */ }
}

class NotificationService {
    private MessageSender sender; // 추상화에 의존
    NotificationService(MessageSender sender) {
        this.sender = sender;
    }
    void notify(String msg) { sender.send(msg); }
}`})})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:"연습: SOLID 원칙 적용"}),e.jsx("p",{children:"아래 코드에서 SOLID 원칙 위반 사항을 찾고 리팩토링해보세요."}),e.jsxs("ul",{children:[e.jsx("li",{children:"하나의 클래스가 여러 책임을 가진 부분 (SRP 위반)"}),e.jsx("li",{children:"구체 클래스에 직접 의존하는 부분 (DIP 위반)"})]})]}),e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:"핵심 요약"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"SRP"}),": 하나의 클래스, 하나의 책임"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"OCP"}),": 확장에 열리고 수정에 닫힘"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"LSP"}),": 하위 타입이 상위 타입 대체 가능"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"ISP"}),": 인터페이스를 작게 분리"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"DIP"}),": 추상화에 의존"]})]})]}),e.jsxs("div",{className:"lesson-nav",children:[e.jsx(s,{to:"/intro/uml",className:"lesson-nav-btn prev",children:"← 이전: UML 다이어그램"}),e.jsx(s,{to:"/principles/pattern-overview",className:"lesson-nav-btn next",children:"다음: 디자인 패턴 개요 →"})]})]})})})]})}export{n as default};

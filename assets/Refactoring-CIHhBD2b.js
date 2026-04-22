import{j as e,L as s}from"./index-BCZct2W-.js";import{S as l}from"./SEOHead-BIDcqaVp.js";function i(){return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"리팩토링",description:"코드 품질을 개선하는 리팩토링 기법과 코드 스멜을 학습합니다."}),e.jsx("section",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsx("h1",{children:"리팩토링"}),e.jsx("p",{children:"외부 동작을 변경하지 않으면서 코드 내부 구조를 개선하는 기법"})]})}),e.jsx("section",{className:"section lesson-content",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-body",children:[e.jsx("h2",{children:"리팩토링이란?"}),e.jsxs("p",{children:[e.jsx("strong",{children:"리팩토링(Refactoring)"}),"은 소프트웨어의 외부 동작을 변경하지 않으면서 내부 구조를 개선하는 과정입니다. Martin Fowler가 체계화했습니다."]}),e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:"리팩토링의 목적"}),e.jsxs("ul",{children:[e.jsx("li",{children:"코드 가독성 향상"}),e.jsx("li",{children:"중복 코드 제거"}),e.jsx("li",{children:"유지보수성 개선"}),e.jsx("li",{children:"버그 발견 용이"})]})]}),e.jsx("h2",{children:"코드 스멜 (Code Smell)"}),e.jsx("p",{children:"리팩토링이 필요하다는 신호입니다."}),e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"코드 스멜"}),e.jsx("th",{children:"설명"}),e.jsx("th",{children:"리팩토링 기법"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"긴 메서드"})}),e.jsx("td",{children:"메서드가 너무 김"}),e.jsx("td",{children:"Extract Method"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"거대한 클래스"})}),e.jsx("td",{children:"클래스 책임 과다"}),e.jsx("td",{children:"Extract Class"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"중복 코드"})}),e.jsx("td",{children:"같은 코드 반복"}),e.jsx("td",{children:"Extract Method / Pull Up"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"긴 매개변수"})}),e.jsx("td",{children:"파라미터 수 과다"}),e.jsx("td",{children:"Introduce Parameter Object"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Switch 문"})}),e.jsx("td",{children:"분기가 많은 switch"}),e.jsx("td",{children:"Replace with Polymorphism"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"주석 남발"})}),e.jsx("td",{children:"코드 대신 주석"}),e.jsx("td",{children:"Rename / Extract Method"})]})]})]})}),e.jsx("h2",{children:"주요 리팩토링 기법"}),e.jsx("h3",{children:"1. Extract Method"}),e.jsxs("div",{className:"comparison-grid",children:[e.jsxs("div",{className:"comparison-card bad",children:[e.jsx("h4",{children:"Before"}),e.jsx("pre",{style:{fontSize:"0.8rem"},children:e.jsx("code",{children:`void printOrder(Order o) {
  System.out.println("=== 주문서 ===");
  System.out.println("고객: " + o.name);
  System.out.println("주소: " + o.addr);
  double total = 0;
  for (Item i : o.items)
    total += i.price * i.qty;
  if (total > 50000)
    total *= 0.9;
  System.out.println("합계: " + total);
}`})})]}),e.jsxs("div",{className:"comparison-card good",children:[e.jsx("h4",{children:"After"}),e.jsx("pre",{style:{fontSize:"0.8rem"},children:e.jsx("code",{children:`void printOrder(Order o) {
  printHeader(o);
  double total = calculateTotal(o);
  printTotal(total);
}

double calculateTotal(Order o) {
  double total = o.items.stream()
    .mapToDouble(i -> i.price * i.qty)
    .sum();
  return applyDiscount(total);
}`})})]})]}),e.jsx("h3",{children:"2. Replace Conditional with Polymorphism"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"조건문을 다형성으로 대체"}),e.jsx("pre",{children:e.jsx("code",{children:`// Before: switch 문
double calculatePay(Employee e) {
    switch (e.type) {
        case FULL_TIME: return e.salary;
        case PART_TIME: return e.hours * e.rate;
        case CONTRACT:  return e.projectFee;
    }
}

// After: 다형성 활용
abstract class Employee {
    abstract double calculatePay();
}

class FullTime extends Employee {
    double calculatePay() { return salary; }
}

class PartTime extends Employee {
    double calculatePay() { return hours * rate; }
}`})})]}),e.jsx("h2",{children:"리팩토링 원칙"}),e.jsxs("div",{className:"prompt-example",children:[e.jsx("div",{className:"prompt-example-header",children:"안전한 리팩토링을 위한 규칙"}),e.jsxs("div",{className:"prompt-example-body",children:[e.jsx("div",{className:"prompt-label",children:"1. 테스트 먼저"}),e.jsx("div",{className:"prompt-text",children:"리팩토링 전에 반드시 테스트 코드를 확보합니다."}),e.jsx("div",{className:"prompt-label",children:"2. 작은 단계로"}),e.jsx("div",{className:"prompt-text",children:"한 번에 하나의 리팩토링만 수행합니다."}),e.jsx("div",{className:"prompt-label",children:"3. 자주 커밋"}),e.jsx("div",{className:"prompt-text",children:"각 리팩토링 단계마다 커밋하여 되돌릴 수 있게 합니다."}),e.jsx("div",{className:"prompt-label",children:"4. 동작 보존"}),e.jsx("div",{className:"prompt-text",children:"외부 동작이 변경되지 않음을 테스트로 확인합니다."})]})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:"연습: 리팩토링 실습"}),e.jsxs("ul",{children:[e.jsx("li",{children:"긴 메서드에서 의미 있는 단위를 추출(Extract Method)"}),e.jsx("li",{children:"switch/if-else를 다형성으로 대체"}),e.jsx("li",{children:"중복 코드를 상위 클래스로 추출(Pull Up Method)"})]})]}),e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:"핵심 요약"}),e.jsxs("ul",{children:[e.jsx("li",{children:"리팩토링은 외부 동작 보존 + 내부 구조 개선"}),e.jsx("li",{children:"코드 스멜을 인식하고 적절한 기법을 적용"}),e.jsx("li",{children:"테스트가 리팩토링의 안전망 역할"})]})]}),e.jsxs("div",{className:"lesson-nav",children:[e.jsx(s,{to:"/practice/tdd",className:"lesson-nav-btn prev",children:"← 이전: TDD 기초"}),e.jsx(s,{to:"/playground",className:"lesson-nav-btn next",children:"다음: 실습 →"})]})]})})})]})}export{i as default};

import{j as e,L as s}from"./index-CGZMswEN.js";import{S as l}from"./SEOHead-TQns748E.js";function i(){return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"TDD 기초",description:"테스트 주도 개발(TDD)의 원리와 Red-Green-Refactor 사이클을 학습합니다."}),e.jsx("section",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsx("h1",{children:"TDD 기초"}),e.jsx("p",{children:"테스트가 개발을 이끄는 테스트 주도 개발 방법론"})]})}),e.jsx("section",{className:"section lesson-content",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-body",children:[e.jsx("h2",{children:"TDD란?"}),e.jsxs("p",{children:[e.jsx("strong",{children:"TDD(Test-Driven Development)"}),"는 테스트를 먼저 작성하고, 그 테스트를 통과하는 코드를 구현하는 개발 방법론입니다. Kent Beck이 제안했습니다."]}),e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:"TDD 사이클: Red → Green → Refactor"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{style:{color:"#ef4444"},children:"Red"}),": 실패하는 테스트를 먼저 작성"]}),e.jsxs("li",{children:[e.jsx("strong",{style:{color:"#22c55e"},children:"Green"}),": 테스트를 통과하는 최소한의 코드 작성"]}),e.jsxs("li",{children:[e.jsx("strong",{style:{color:"#3b82f6"},children:"Refactor"}),": 중복 제거, 코드 개선 (테스트는 계속 통과)"]})]})]}),e.jsx("h2",{children:"TDD 실습: 계산기"}),e.jsx("h3",{children:"Step 1: Red - 실패하는 테스트 작성"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"CalculatorTest.java"}),e.jsx("pre",{children:e.jsx("code",{children:`import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class CalculatorTest {
    @Test
    void add_두_양수_더하기() {
        Calculator calc = new Calculator();
        assertEquals(5, calc.add(2, 3));
    }

    @Test
    void add_음수_포함_더하기() {
        Calculator calc = new Calculator();
        assertEquals(-1, calc.add(2, -3));
    }
}`})})]}),e.jsx("h3",{children:"Step 2: Green - 최소한의 구현"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"Calculator.java"}),e.jsx("pre",{children:e.jsx("code",{children:`public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }
}`})})]}),e.jsx("h3",{children:"Step 3: Refactor - 코드 개선"}),e.jsx("p",{children:"현재는 간단하지만, 기능이 추가될수록 리팩토링의 중요성이 커집니다."}),e.jsx("h2",{children:"테스트 작성 원칙"}),e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"원칙"}),e.jsx("th",{children:"설명"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"FIRST"})}),e.jsx("td",{children:"Fast, Independent, Repeatable, Self-validating, Timely"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"AAA 패턴"})}),e.jsx("td",{children:"Arrange(준비) → Act(실행) → Assert(검증)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"한 테스트 한 검증"})}),e.jsx("td",{children:"하나의 테스트는 하나의 동작만 검증"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"경계값 테스트"})}),e.jsx("td",{children:"경계값, 예외 상황을 반드시 테스트"})]})]})]})}),e.jsx("h2",{children:"JUnit 5 주요 어노테이션"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"JUnit 5 어노테이션"}),e.jsx("pre",{children:e.jsx("code",{children:`@Test           // 테스트 메서드 지정
@BeforeEach     // 각 테스트 전 실행
@AfterEach      // 각 테스트 후 실행
@BeforeAll      // 모든 테스트 전 1회 실행
@DisplayName    // 테스트 이름 지정
@Disabled       // 테스트 비활성화
@ParameterizedTest  // 매개변수화된 테스트

// 주요 검증 메서드
assertEquals(expected, actual)
assertTrue(condition)
assertThrows(Exception.class, () -> { ... })
assertNotNull(object)`})})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:"연습: TDD로 구현하기"}),e.jsx("p",{children:"StringCalculator를 TDD로 구현해보세요."}),e.jsxs("ul",{children:[e.jsx("li",{children:"빈 문자열 입력 시 0 반환"}),e.jsx("li",{children:"숫자 하나 입력 시 해당 숫자 반환"}),e.jsx("li",{children:"쉼표로 구분된 두 숫자의 합 반환"}),e.jsx("li",{children:"음수 입력 시 예외 발생"})]})]}),e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:"핵심 요약"}),e.jsxs("ul",{children:[e.jsx("li",{children:"TDD는 Red → Green → Refactor 사이클을 반복"}),e.jsx("li",{children:"테스트를 먼저 작성하면 설계가 자연스럽게 개선됨"}),e.jsx("li",{children:"FIRST 원칙과 AAA 패턴을 따라 효과적인 테스트 작성"})]})]}),e.jsxs("div",{className:"lesson-nav",children:[e.jsx(s,{to:"/practice/oop",className:"lesson-nav-btn prev",children:"← 이전: OOP 구현"}),e.jsx(s,{to:"/practice/refactoring",className:"lesson-nav-btn next",children:"다음: 리팩토링 →"})]})]})})})]})}export{i as default};

import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'

export default function Tdd() {
  return (
    <>
      <SEOHead title="TDD 기초" description="테스트 주도 개발(TDD)의 원리와 Red-Green-Refactor 사이클을 학습합니다." />
      <section className="page-header"><div className="container"><h1>TDD 기초</h1><p>테스트가 개발을 이끄는 테스트 주도 개발 방법론</p></div></section>

      <section className="section lesson-content"><div className="container"><div className="lesson-body">
        <h2>TDD란?</h2>
        <p><strong>TDD(Test-Driven Development)</strong>는 테스트를 먼저 작성하고, 그 테스트를 통과하는 코드를 구현하는 개발 방법론입니다. Kent Beck이 제안했습니다.</p>

        <div className="callout-box">
          <h3>TDD 사이클: Red → Green → Refactor</h3>
          <ul>
            <li><strong style={{color:'#ef4444'}}>Red</strong>: 실패하는 테스트를 먼저 작성</li>
            <li><strong style={{color:'#22c55e'}}>Green</strong>: 테스트를 통과하는 최소한의 코드 작성</li>
            <li><strong style={{color:'#3b82f6'}}>Refactor</strong>: 중복 제거, 코드 개선 (테스트는 계속 통과)</li>
          </ul>
        </div>

        <h2>TDD 실습: 계산기</h2>

        <h3>Step 1: Red - 실패하는 테스트 작성</h3>
        <div className="code-block">
          <div className="code-header">CalculatorTest.java</div>
          <pre><code>{`import org.junit.jupiter.api.Test;
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
}`}</code></pre>
        </div>

        <h3>Step 2: Green - 최소한의 구현</h3>
        <div className="code-block">
          <div className="code-header">Calculator.java</div>
          <pre><code>{`public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }
}`}</code></pre>
        </div>

        <h3>Step 3: Refactor - 코드 개선</h3>
        <p>현재는 간단하지만, 기능이 추가될수록 리팩토링의 중요성이 커집니다.</p>

        <h2>테스트 작성 원칙</h2>
        <div style={{overflowX:'auto'}}>
          <table className="lesson-table">
            <thead><tr><th>원칙</th><th>설명</th></tr></thead>
            <tbody>
              <tr><td><strong>FIRST</strong></td><td>Fast, Independent, Repeatable, Self-validating, Timely</td></tr>
              <tr><td><strong>AAA 패턴</strong></td><td>Arrange(준비) → Act(실행) → Assert(검증)</td></tr>
              <tr><td><strong>한 테스트 한 검증</strong></td><td>하나의 테스트는 하나의 동작만 검증</td></tr>
              <tr><td><strong>경계값 테스트</strong></td><td>경계값, 예외 상황을 반드시 테스트</td></tr>
            </tbody>
          </table>
        </div>

        <h2>JUnit 5 주요 어노테이션</h2>
        <div className="code-block">
          <div className="code-header">JUnit 5 어노테이션</div>
          <pre><code>{`@Test           // 테스트 메서드 지정
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
assertNotNull(object)`}</code></pre>
        </div>

        <div className="exercise-box">
          <h3>연습: TDD로 구현하기</h3>
          <p>StringCalculator를 TDD로 구현해보세요.</p>
          <ul>
            <li>빈 문자열 입력 시 0 반환</li>
            <li>숫자 하나 입력 시 해당 숫자 반환</li>
            <li>쉼표로 구분된 두 숫자의 합 반환</li>
            <li>음수 입력 시 예외 발생</li>
          </ul>
        </div>

        <div className="callout-box">
          <h3>핵심 요약</h3>
          <ul>
            <li>TDD는 Red → Green → Refactor 사이클을 반복</li>
            <li>테스트를 먼저 작성하면 설계가 자연스럽게 개선됨</li>
            <li>FIRST 원칙과 AAA 패턴을 따라 효과적인 테스트 작성</li>
          </ul>
        </div>

        <div className="lesson-nav"><Link to="/practice/oop" className="lesson-nav-btn prev">&larr; 이전: OOP 구현</Link><Link to="/practice/refactoring" className="lesson-nav-btn next">다음: 리팩토링 &rarr;</Link></div>
      </div></div></section>
    </>
  )
}

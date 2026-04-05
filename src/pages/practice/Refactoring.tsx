import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'

export default function Refactoring() {
  return (
    <>
      <SEOHead title="리팩토링" description="코드 품질을 개선하는 리팩토링 기법과 코드 스멜을 학습합니다." />
      <section className="page-header"><div className="container"><h1>리팩토링</h1><p>외부 동작을 변경하지 않으면서 코드 내부 구조를 개선하는 기법</p></div></section>

      <section className="section lesson-content"><div className="container"><div className="lesson-body">
        <h2>리팩토링이란?</h2>
        <p><strong>리팩토링(Refactoring)</strong>은 소프트웨어의 외부 동작을 변경하지 않으면서 내부 구조를 개선하는 과정입니다. Martin Fowler가 체계화했습니다.</p>

        <div className="callout-box">
          <h3>리팩토링의 목적</h3>
          <ul>
            <li>코드 가독성 향상</li>
            <li>중복 코드 제거</li>
            <li>유지보수성 개선</li>
            <li>버그 발견 용이</li>
          </ul>
        </div>

        <h2>코드 스멜 (Code Smell)</h2>
        <p>리팩토링이 필요하다는 신호입니다.</p>
        <div style={{overflowX:'auto'}}>
          <table className="lesson-table">
            <thead><tr><th>코드 스멜</th><th>설명</th><th>리팩토링 기법</th></tr></thead>
            <tbody>
              <tr><td><strong>긴 메서드</strong></td><td>메서드가 너무 김</td><td>Extract Method</td></tr>
              <tr><td><strong>거대한 클래스</strong></td><td>클래스 책임 과다</td><td>Extract Class</td></tr>
              <tr><td><strong>중복 코드</strong></td><td>같은 코드 반복</td><td>Extract Method / Pull Up</td></tr>
              <tr><td><strong>긴 매개변수</strong></td><td>파라미터 수 과다</td><td>Introduce Parameter Object</td></tr>
              <tr><td><strong>Switch 문</strong></td><td>분기가 많은 switch</td><td>Replace with Polymorphism</td></tr>
              <tr><td><strong>주석 남발</strong></td><td>코드 대신 주석</td><td>Rename / Extract Method</td></tr>
            </tbody>
          </table>
        </div>

        <h2>주요 리팩토링 기법</h2>

        <h3>1. Extract Method</h3>
        <div className="comparison-grid">
          <div className="comparison-card bad">
            <h4>Before</h4>
            <pre style={{fontSize:'0.8rem'}}><code>{`void printOrder(Order o) {
  System.out.println("=== 주문서 ===");
  System.out.println("고객: " + o.name);
  System.out.println("주소: " + o.addr);
  double total = 0;
  for (Item i : o.items)
    total += i.price * i.qty;
  if (total > 50000)
    total *= 0.9;
  System.out.println("합계: " + total);
}`}</code></pre>
          </div>
          <div className="comparison-card good">
            <h4>After</h4>
            <pre style={{fontSize:'0.8rem'}}><code>{`void printOrder(Order o) {
  printHeader(o);
  double total = calculateTotal(o);
  printTotal(total);
}

double calculateTotal(Order o) {
  double total = o.items.stream()
    .mapToDouble(i -> i.price * i.qty)
    .sum();
  return applyDiscount(total);
}`}</code></pre>
          </div>
        </div>

        <h3>2. Replace Conditional with Polymorphism</h3>
        <div className="code-block">
          <div className="code-header">조건문을 다형성으로 대체</div>
          <pre><code>{`// Before: switch 문
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
}`}</code></pre>
        </div>

        <h2>리팩토링 원칙</h2>
        <div className="prompt-example">
          <div className="prompt-example-header">안전한 리팩토링을 위한 규칙</div>
          <div className="prompt-example-body">
            <div className="prompt-label">1. 테스트 먼저</div>
            <div className="prompt-text">리팩토링 전에 반드시 테스트 코드를 확보합니다.</div>
            <div className="prompt-label">2. 작은 단계로</div>
            <div className="prompt-text">한 번에 하나의 리팩토링만 수행합니다.</div>
            <div className="prompt-label">3. 자주 커밋</div>
            <div className="prompt-text">각 리팩토링 단계마다 커밋하여 되돌릴 수 있게 합니다.</div>
            <div className="prompt-label">4. 동작 보존</div>
            <div className="prompt-text">외부 동작이 변경되지 않음을 테스트로 확인합니다.</div>
          </div>
        </div>

        <div className="exercise-box">
          <h3>연습: 리팩토링 실습</h3>
          <ul>
            <li>긴 메서드에서 의미 있는 단위를 추출(Extract Method)</li>
            <li>switch/if-else를 다형성으로 대체</li>
            <li>중복 코드를 상위 클래스로 추출(Pull Up Method)</li>
          </ul>
        </div>

        <div className="callout-box">
          <h3>핵심 요약</h3>
          <ul>
            <li>리팩토링은 외부 동작 보존 + 내부 구조 개선</li>
            <li>코드 스멜을 인식하고 적절한 기법을 적용</li>
            <li>테스트가 리팩토링의 안전망 역할</li>
          </ul>
        </div>

        <div className="lesson-nav"><Link to="/practice/tdd" className="lesson-nav-btn prev">&larr; 이전: TDD 기초</Link><Link to="/playground" className="lesson-nav-btn next">다음: 실습 &rarr;</Link></div>
      </div></div></section>
    </>
  )
}

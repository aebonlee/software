import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'

export default function Behavioral() {
  return (
    <>
      <SEOHead title="행위 패턴" description="Observer, Strategy, Command, State, Template Method 등 행위 디자인 패턴을 학습합니다." />
      <section className="page-header"><div className="container"><h1>행위 패턴 (Behavioral Patterns)</h1><p>객체 간 상호작용과 책임 분배를 다루는 11가지 디자인 패턴</p></div></section>

      <section className="section lesson-content"><div className="container"><div className="lesson-body">
        <h2>행위 패턴이란?</h2>
        <p>행위 패턴은 객체 간의 상호작용과 책임 분배 방식을 다룹니다. 알고리즘과 객체 간의 책임을 적절히 분산시킵니다.</p>

        <h2>1. Observer 패턴</h2>
        <p>객체 상태가 변경되면 의존하는 모든 객체에 자동으로 알림을 보냅니다.</p>
        <div className="code-block">
          <div className="code-header">Observer 예시: 주가 알림</div>
          <pre><code>{`interface StockObserver {
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
}`}</code></pre>
        </div>

        <h2>2. Strategy 패턴</h2>
        <p>알고리즘을 캡슐화하고 실행 시점에 교체할 수 있게 합니다.</p>
        <div className="code-block">
          <div className="code-header">Strategy 예시: 정렬</div>
          <pre><code>{`interface SortStrategy {
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
}`}</code></pre>
        </div>

        <h2>3. Command 패턴</h2>
        <p>요청을 객체로 캡슐화하여 매개변수화, 큐잉, 로깅, 실행취소를 지원합니다.</p>

        <h2>4. State 패턴</h2>
        <p>객체의 내부 상태에 따라 행동을 변경합니다. 상태를 객체로 표현합니다.</p>

        <h2>5. Template Method 패턴</h2>
        <p>알고리즘의 골격을 정의하고 일부 단계의 구현을 서브클래스에 위임합니다.</p>

        <div style={{overflowX:'auto'}}>
          <table className="lesson-table">
            <thead><tr><th>패턴</th><th>핵심 목적</th><th>사용 사례</th></tr></thead>
            <tbody>
              <tr><td><strong>Observer</strong></td><td>상태 변화 통지</td><td>이벤트 시스템, MVC</td></tr>
              <tr><td><strong>Strategy</strong></td><td>알고리즘 교체</td><td>정렬, 결제, 인증</td></tr>
              <tr><td><strong>Command</strong></td><td>요청 객체화</td><td>Undo/Redo, 매크로</td></tr>
              <tr><td><strong>State</strong></td><td>상태별 행동 변경</td><td>자판기, 주문 상태</td></tr>
              <tr><td><strong>Template Method</strong></td><td>알고리즘 골격 정의</td><td>프레임워크 확장</td></tr>
              <tr><td><strong>Iterator</strong></td><td>순차 접근</td><td>컬렉션 순회</td></tr>
              <tr><td><strong>Mediator</strong></td><td>중재자 통신</td><td>채팅방, UI 이벤트</td></tr>
              <tr><td><strong>Memento</strong></td><td>상태 저장/복원</td><td>에디터 Undo</td></tr>
              <tr><td><strong>Chain of Resp.</strong></td><td>요청 체인 처리</td><td>미들웨어, 로깅</td></tr>
              <tr><td><strong>Visitor</strong></td><td>새 연산 추가</td><td>컴파일러 AST</td></tr>
              <tr><td><strong>Interpreter</strong></td><td>문법 해석</td><td>SQL 파서, 정규식</td></tr>
            </tbody>
          </table>
        </div>

        <div className="exercise-box">
          <h3>연습: 행위 패턴 적용</h3>
          <ul>
            <li>Observer 패턴으로 뉴스레터 구독 시스템을 구현해보세요</li>
            <li>Strategy 패턴으로 결제 시스템(카드/계좌이체/포인트)을 구현해보세요</li>
            <li>State 패턴으로 자판기 상태(대기/선택/결제/배출)를 구현해보세요</li>
          </ul>
        </div>

        <div className="callout-box">
          <h3>핵심 요약</h3>
          <ul>
            <li>행위 패턴은 객체 간 책임 분배와 상호작용을 다룸</li>
            <li>Observer, Strategy, Command가 가장 빈번하게 사용</li>
            <li>조건문 대신 패턴을 사용하면 확장성이 크게 향상</li>
          </ul>
        </div>

        <div className="lesson-nav"><Link to="/patterns/structural" className="lesson-nav-btn prev">&larr; 이전: 구조 패턴</Link><Link to="/practice/oop" className="lesson-nav-btn next">다음: OOP 구현 &rarr;</Link></div>
      </div></div></section>
    </>
  )
}

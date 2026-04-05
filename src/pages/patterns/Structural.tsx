import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'

export default function Structural() {
  return (
    <>
      <SEOHead title="구조 패턴" description="Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy 등 구조 디자인 패턴을 학습합니다." />
      <section className="page-header"><div className="container"><h1>구조 패턴 (Structural Patterns)</h1><p>클래스와 객체를 더 큰 구조로 합성하는 7가지 디자인 패턴</p></div></section>

      <section className="section lesson-content"><div className="container"><div className="lesson-body">
        <h2>구조 패턴이란?</h2>
        <p>구조 패턴은 클래스나 객체를 조합하여 더 큰 구조를 만드는 방법을 다룹니다.</p>

        <h2>1. Adapter 패턴</h2>
        <p>호환되지 않는 인터페이스를 변환하여 함께 동작할 수 있게 합니다.</p>
        <div className="code-block">
          <div className="code-header">Adapter 예시</div>
          <pre><code>{`// 기존 시스템의 인터페이스
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
}`}</code></pre>
        </div>

        <h2>2. Decorator 패턴</h2>
        <p>객체에 동적으로 새로운 기능을 추가합니다. 상속 없이 기능을 확장할 수 있습니다.</p>
        <div className="code-block">
          <div className="code-header">Decorator 예시: 커피 주문</div>
          <pre><code>{`interface Coffee {
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
// 결과: "아메리카노 + 우유", 3500원`}</code></pre>
        </div>

        <h2>3. Facade 패턴</h2>
        <p>복잡한 서브시스템에 대한 단순한 인터페이스를 제공합니다.</p>

        <h2>4. Composite 패턴</h2>
        <p>객체들을 트리 구조로 구성하여 개별 객체와 복합 객체를 동일하게 다룹니다.</p>

        <h2>5. Proxy 패턴</h2>
        <p>다른 객체에 대한 대리자를 제공하여 접근을 제어합니다.</p>

        <h2>6. Bridge 패턴</h2>
        <p>추상화와 구현을 분리하여 독립적으로 변형할 수 있게 합니다.</p>

        <h2>7. Flyweight 패턴</h2>
        <p>공유를 통해 많은 수의 세밀한 객체들을 효율적으로 지원합니다.</p>

        <div style={{overflowX:'auto'}}>
          <table className="lesson-table">
            <thead><tr><th>패턴</th><th>핵심 목적</th><th>사용 사례</th></tr></thead>
            <tbody>
              <tr><td><strong>Adapter</strong></td><td>인터페이스 변환</td><td>레거시 시스템 통합</td></tr>
              <tr><td><strong>Decorator</strong></td><td>동적 기능 추가</td><td>입출력 스트림, 미들웨어</td></tr>
              <tr><td><strong>Facade</strong></td><td>단순한 인터페이스 제공</td><td>복잡한 API 래핑</td></tr>
              <tr><td><strong>Composite</strong></td><td>트리 구조 처리</td><td>파일 시스템, UI 컴포넌트</td></tr>
              <tr><td><strong>Proxy</strong></td><td>접근 제어</td><td>캐싱, 보안, 로깅</td></tr>
              <tr><td><strong>Bridge</strong></td><td>추상화-구현 분리</td><td>플랫폼 독립적 코드</td></tr>
              <tr><td><strong>Flyweight</strong></td><td>메모리 절약</td><td>텍스트 에디터 문자 객체</td></tr>
            </tbody>
          </table>
        </div>

        <div className="exercise-box">
          <h3>연습: 구조 패턴 적용</h3>
          <ul>
            <li>파일 시스템(파일/폴더)에 Composite 패턴을 적용해보세요</li>
            <li>커피 주문에 시럽, 휘핑크림 Decorator를 추가해보세요</li>
          </ul>
        </div>

        <div className="callout-box">
          <h3>핵심 요약</h3>
          <ul>
            <li>구조 패턴은 객체 합성을 통해 새로운 기능을 구현</li>
            <li>Adapter, Decorator, Facade가 가장 많이 사용됨</li>
            <li>상속보다 합성을 선호하는 설계 원칙과 밀접</li>
          </ul>
        </div>

        <div className="lesson-nav"><Link to="/patterns/creational" className="lesson-nav-btn prev">&larr; 이전: 생성 패턴</Link><Link to="/patterns/behavioral" className="lesson-nav-btn next">다음: 행위 패턴 &rarr;</Link></div>
      </div></div></section>
    </>
  )
}

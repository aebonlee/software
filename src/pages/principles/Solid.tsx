import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'

export default function Solid() {
  return (
    <>
      <SEOHead title="SOLID 원칙" description="객체지향 설계의 5대 원칙 SOLID를 학습합니다." />
      <section className="page-header"><div className="container"><h1>SOLID 원칙</h1><p>유지보수 가능한 객체지향 설계를 위한 5가지 핵심 원칙</p></div></section>

      <section className="section lesson-content"><div className="container"><div className="lesson-body">
        <h2>SOLID란?</h2>
        <p><strong>SOLID</strong>는 Robert C. Martin이 정리한 객체지향 설계의 5대 원칙입니다. 이 원칙을 따르면 유연하고 유지보수하기 좋은 소프트웨어를 만들 수 있습니다.</p>

        <h2>S - 단일 책임 원칙 (SRP)</h2>
        <p><strong>Single Responsibility Principle</strong>: 클래스는 하나의 책임만 가져야 합니다.</p>
        <div className="comparison-grid">
          <div className="comparison-card bad">
            <h4>SRP 위반</h4>
            <pre style={{fontSize:'0.8rem'}}><code>{`class Employee {
  calculatePay() { ... }
  saveToDatabase() { ... }
  generateReport() { ... }
}`}</code></pre>
          </div>
          <div className="comparison-card good">
            <h4>SRP 준수</h4>
            <pre style={{fontSize:'0.8rem'}}><code>{`class Employee { ... }
class PayCalculator { calculatePay() }
class EmployeeRepository { save() }
class ReportGenerator { generate() }`}</code></pre>
          </div>
        </div>

        <h2>O - 개방-폐쇄 원칙 (OCP)</h2>
        <p><strong>Open/Closed Principle</strong>: 확장에는 열려 있고, 수정에는 닫혀 있어야 합니다.</p>
        <div className="code-block">
          <div className="code-header">OCP 적용 예시</div>
          <pre><code>{`// 추상화를 통해 확장 가능한 구조
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
}`}</code></pre>
        </div>

        <h2>L - 리스코프 치환 원칙 (LSP)</h2>
        <p><strong>Liskov Substitution Principle</strong>: 하위 타입은 상위 타입을 대체할 수 있어야 합니다.</p>

        <h2>I - 인터페이스 분리 원칙 (ISP)</h2>
        <p><strong>Interface Segregation Principle</strong>: 클라이언트는 사용하지 않는 메서드에 의존하지 않아야 합니다.</p>
        <div className="code-block">
          <div className="code-header">ISP 적용 예시</div>
          <pre><code>{`// 나쁜 예: 거대 인터페이스
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
}`}</code></pre>
        </div>

        <h2>D - 의존성 역전 원칙 (DIP)</h2>
        <p><strong>Dependency Inversion Principle</strong>: 고수준 모듈이 저수준 모듈에 의존하지 않고, 둘 다 추상화에 의존해야 합니다.</p>
        <div className="code-block">
          <div className="code-header">DIP 적용 예시</div>
          <pre><code>{`// 추상화에 의존
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
}`}</code></pre>
        </div>

        <div className="exercise-box">
          <h3>연습: SOLID 원칙 적용</h3>
          <p>아래 코드에서 SOLID 원칙 위반 사항을 찾고 리팩토링해보세요.</p>
          <ul>
            <li>하나의 클래스가 여러 책임을 가진 부분 (SRP 위반)</li>
            <li>구체 클래스에 직접 의존하는 부분 (DIP 위반)</li>
          </ul>
        </div>

        <div className="callout-box">
          <h3>핵심 요약</h3>
          <ul>
            <li><strong>SRP</strong>: 하나의 클래스, 하나의 책임</li>
            <li><strong>OCP</strong>: 확장에 열리고 수정에 닫힘</li>
            <li><strong>LSP</strong>: 하위 타입이 상위 타입 대체 가능</li>
            <li><strong>ISP</strong>: 인터페이스를 작게 분리</li>
            <li><strong>DIP</strong>: 추상화에 의존</li>
          </ul>
        </div>

        <div className="lesson-nav"><Link to="/intro/uml" className="lesson-nav-btn prev">&larr; 이전: UML 다이어그램</Link><Link to="/principles/pattern-overview" className="lesson-nav-btn next">다음: 디자인 패턴 개요 &rarr;</Link></div>
      </div></div></section>
    </>
  )
}

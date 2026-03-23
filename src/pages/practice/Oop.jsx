import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'

export default function Oop() {
  return (
    <>
      <SEOHead title="OOP 구현" description="객체지향 프로그래밍(OOP)의 4대 특성과 구현 방법을 학습합니다." />
      <section className="page-header"><div className="container"><h1>OOP 구현</h1><p>객체지향 프로그래밍의 4대 특성을 코드로 구현해봅시다</p></div></section>

      <section className="section lesson-content"><div className="container"><div className="lesson-body">
        <h2>OOP 4대 특성</h2>
        <div className="callout-box">
          <h3>핵심 개념</h3>
          <ul>
            <li><strong>캡슐화 (Encapsulation)</strong>: 데이터와 메서드를 묶고 접근을 제어</li>
            <li><strong>상속 (Inheritance)</strong>: 기존 클래스를 확장하여 재사용</li>
            <li><strong>다형성 (Polymorphism)</strong>: 같은 인터페이스로 다른 동작 수행</li>
            <li><strong>추상화 (Abstraction)</strong>: 복잡한 구현을 숨기고 핵심만 노출</li>
          </ul>
        </div>

        <h2>캡슐화</h2>
        <div className="code-block">
          <div className="code-header">캡슐화 예시</div>
          <pre><code>{`public class BankAccount {
    private double balance;  // private으로 보호

    public BankAccount(double initial) {
        if (initial < 0) throw new IllegalArgumentException("초기 잔액은 0 이상");
        this.balance = initial;
    }

    public void deposit(double amount) {
        if (amount <= 0) throw new IllegalArgumentException("양수만 입금 가능");
        balance += amount;
    }

    public void withdraw(double amount) {
        if (amount > balance) throw new IllegalStateException("잔액 부족");
        balance -= amount;
    }

    public double getBalance() { return balance; }
}`}</code></pre>
        </div>

        <h2>상속과 다형성</h2>
        <div className="code-block">
          <div className="code-header">상속/다형성 예시</div>
          <pre><code>{`abstract class Shape {
    abstract double area();
    abstract double perimeter();

    void printInfo() {
        System.out.printf("면적: %.2f, 둘레: %.2f%n", area(), perimeter());
    }
}

class Circle extends Shape {
    private double radius;
    Circle(double r) { this.radius = r; }

    @Override
    double area() { return Math.PI * radius * radius; }
    @Override
    double perimeter() { return 2 * Math.PI * radius; }
}

class Rectangle extends Shape {
    private double w, h;
    Rectangle(double w, double h) { this.w = w; this.h = h; }

    @Override
    double area() { return w * h; }
    @Override
    double perimeter() { return 2 * (w + h); }
}

// 다형성 활용
Shape[] shapes = { new Circle(5), new Rectangle(3, 4) };
for (Shape s : shapes) s.printInfo();`}</code></pre>
        </div>

        <h2>인터페이스를 활용한 추상화</h2>
        <div className="code-block">
          <div className="code-header">인터페이스 활용</div>
          <pre><code>{`interface Payable {
    double calculatePay();
}

interface Taxable {
    double calculateTax();
}

class FullTimeEmployee implements Payable, Taxable {
    private double salary;

    public double calculatePay() { return salary; }
    public double calculateTax() { return salary * 0.1; }
}

class Freelancer implements Payable {
    private double hourlyRate;
    private int hours;

    public double calculatePay() { return hourlyRate * hours; }
}`}</code></pre>
        </div>

        <div className="exercise-box">
          <h3>연습: OOP 구현</h3>
          <ul>
            <li>동물원 시스템: Animal 추상 클래스, Dog/Cat/Bird 구현</li>
            <li>각 동물의 speak(), move() 메서드를 오버라이드</li>
            <li>다형성을 활용하여 모든 동물을 순회하며 동작 출력</li>
          </ul>
        </div>

        <div className="callout-box">
          <h3>핵심 요약</h3>
          <ul>
            <li>캡슐화로 데이터를 보호하고 무결성을 유지</li>
            <li>상속으로 코드를 재사용하고 계층 구조를 표현</li>
            <li>다형성으로 유연하고 확장 가능한 코드 작성</li>
            <li>추상화로 복잡성을 감추고 핵심 기능에 집중</li>
          </ul>
        </div>

        <div className="lesson-nav"><Link to="/patterns/behavioral" className="lesson-nav-btn prev">&larr; 이전: 행위 패턴</Link><Link to="/practice/tdd" className="lesson-nav-btn next">다음: TDD 기초 &rarr;</Link></div>
      </div></div></section>
    </>
  )
}

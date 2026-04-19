import{j as e,L as l}from"./index-9mBY1adw.js";import{S as a}from"./SEOHead-g3QCo49U.js";function r(){return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"OOP 구현",description:"객체지향 프로그래밍(OOP)의 4대 특성과 구현 방법을 학습합니다."}),e.jsx("section",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsx("h1",{children:"OOP 구현"}),e.jsx("p",{children:"객체지향 프로그래밍의 4대 특성을 코드로 구현해봅시다"})]})}),e.jsx("section",{className:"section lesson-content",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-body",children:[e.jsx("h2",{children:"OOP 4대 특성"}),e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:"핵심 개념"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"캡슐화 (Encapsulation)"}),": 데이터와 메서드를 묶고 접근을 제어"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"상속 (Inheritance)"}),": 기존 클래스를 확장하여 재사용"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"다형성 (Polymorphism)"}),": 같은 인터페이스로 다른 동작 수행"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"추상화 (Abstraction)"}),": 복잡한 구현을 숨기고 핵심만 노출"]})]})]}),e.jsx("h2",{children:"캡슐화"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"캡슐화 예시"}),e.jsx("pre",{children:e.jsx("code",{children:`public class BankAccount {
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
}`})})]}),e.jsx("h2",{children:"상속과 다형성"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"상속/다형성 예시"}),e.jsx("pre",{children:e.jsx("code",{children:`abstract class Shape {
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
for (Shape s : shapes) s.printInfo();`})})]}),e.jsx("h2",{children:"인터페이스를 활용한 추상화"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"인터페이스 활용"}),e.jsx("pre",{children:e.jsx("code",{children:`interface Payable {
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
}`})})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:"연습: OOP 구현"}),e.jsxs("ul",{children:[e.jsx("li",{children:"동물원 시스템: Animal 추상 클래스, Dog/Cat/Bird 구현"}),e.jsx("li",{children:"각 동물의 speak(), move() 메서드를 오버라이드"}),e.jsx("li",{children:"다형성을 활용하여 모든 동물을 순회하며 동작 출력"})]})]}),e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:"핵심 요약"}),e.jsxs("ul",{children:[e.jsx("li",{children:"캡슐화로 데이터를 보호하고 무결성을 유지"}),e.jsx("li",{children:"상속으로 코드를 재사용하고 계층 구조를 표현"}),e.jsx("li",{children:"다형성으로 유연하고 확장 가능한 코드 작성"}),e.jsx("li",{children:"추상화로 복잡성을 감추고 핵심 기능에 집중"})]})]}),e.jsxs("div",{className:"lesson-nav",children:[e.jsx(l,{to:"/patterns/behavioral",className:"lesson-nav-btn prev",children:"← 이전: 행위 패턴"}),e.jsx(l,{to:"/practice/tdd",className:"lesson-nav-btn next",children:"다음: TDD 기초 →"})]})]})})})]})}export{r as default};

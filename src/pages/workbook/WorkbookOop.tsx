import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'

export default function WorkbookOop() {
  return (
    <>
      <SEOHead title="워크북: OOP 구현" description="OOP 4대 특성을 실습으로 익히는 워크북" />
      <section className="page-header"><div className="container"><h1>워크북: OOP 구현</h1></div></section>
      <section className="section lesson-content"><div className="container">
        <div className="callout-box"><h3>실습 목표</h3><ul><li>캡슐화로 데이터를 보호한다</li><li>상속과 다형성을 활용하여 확장 가능한 코드를 작성한다</li><li>인터페이스를 활용한 추상화를 적용한다</li></ul></div>
        <div className="exercise-box"><h3>실습 1: 캡슐화</h3><p>BankAccount 클래스를 구현하세요. balance는 private이며 deposit(), withdraw() 메서드로만 변경 가능합니다. 음수 금액과 잔액 초과 출금은 예외를 발생시킵니다.</p><textarea className="exercise-textarea" rows="8" placeholder="public class BankAccount {\n    private double balance;\n    // ..." /></div>
        <div className="exercise-box"><h3>실습 2: 상속과 다형성</h3><p>동물원 시스템을 구현하세요. Animal 추상 클래스를 만들고 Dog, Cat, Bird가 상속합니다. 각각 speak()과 move() 메서드를 오버라이드합니다.</p><textarea className="exercise-textarea" rows="8" placeholder="abstract class Animal {\n    abstract String speak();\n    abstract String move();\n}" /></div>
        <div className="exercise-box"><h3>실습 3: 인터페이스 활용</h3><p>Flyable, Swimmable 인터페이스를 만들고 Duck(둘 다 구현), Penguin(Swimmable만 구현)을 작성하세요.</p><textarea className="exercise-textarea" rows="6" placeholder="interface Flyable { void fly(); }\ninterface Swimmable { void swim(); }" /></div>
        <div className="lesson-nav"><Link to="/workbook/behavioral" className="lesson-nav-btn prev">&larr; 이전: 행위 패턴</Link><Link to="/workbook/tdd" className="lesson-nav-btn next">다음: TDD 기초 &rarr;</Link></div>
      </div></section>
    </>
  )
}

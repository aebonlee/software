import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'

export default function WorkbookTdd() {
  return (
    <>
      <SEOHead title="워크북: TDD 기초" description="TDD Red-Green-Refactor를 실습으로 익히는 워크북" />
      <section className="page-header"><div className="container"><h1>워크북: TDD 기초</h1></div></section>
      <section className="section lesson-content"><div className="container">
        <div className="callout-box"><h3>실습 목표</h3><ul><li>Red→Green→Refactor 사이클을 체험한다</li><li>JUnit 5 테스트 코드를 작성한다</li><li>AAA 패턴을 적용한다</li></ul></div>
        <div className="exercise-box"><h3>실습 1: StringCalculator TDD</h3><p>StringCalculator를 TDD로 구현하세요. 각 단계마다 테스트를 먼저 작성합니다.</p><ol><li>빈 문자열 → 0 반환</li><li>"1" → 1 반환</li><li>"1,2" → 3 반환</li><li>"1,2,3" → 6 반환</li><li>음수 입력 → 예외 발생</li></ol><textarea className="exercise-textarea" rows="10" placeholder={'// Step 1: Red - 실패하는 테스트\n@Test\nvoid 빈_문자열은_0을_반환() {\n    assertEquals(0, calc.add(""));\n}\n\n// Step 2: Green - 최소 구현\n// Step 3: Refactor'} /></div>
        <div className="exercise-box"><h3>실습 2: AAA 패턴</h3><p>BankAccount의 withdraw 테스트를 AAA 패턴으로 작성하세요.</p><textarea className="exercise-textarea" rows="8" placeholder="@Test\nvoid 잔액_초과_출금은_예외() {\n    // Arrange\n    // Act & Assert\n}" /></div>
        <div className="lesson-nav"><Link to="/workbook/oop" className="lesson-nav-btn prev">&larr; 이전: OOP 구현</Link><Link to="/workbook/refactoring" className="lesson-nav-btn next">다음: 리팩토링 &rarr;</Link></div>
      </div></section>
    </>
  )
}

import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'

export default function LectureTdd() {
  return (
    <>
      <SEOHead title="강의안: TDD 기초" description="테스트 주도 개발(TDD)의 Red-Green-Refactor 사이클을 강의합니다." />
      <section className="page-header"><div className="container"><h1>강의안: TDD 기초</h1><p>테스트가 개발을 이끄는 테스트 주도 개발 방법론</p></div></section>
      <section className="section lesson-content"><div className="container"><div className="lesson-body">
        <div className="callout-box"><h3>학습 목표</h3><ul><li>TDD의 Red→Green→Refactor 사이클을 이해한다</li><li>JUnit 5로 테스트 코드를 작성한다</li><li>FIRST 원칙과 AAA 패턴을 적용한다</li></ul></div>
        <h2>TDD 사이클</h2>
        <p><strong>Red</strong>: 실패하는 테스트 작성 → <strong>Green</strong>: 최소한의 코드로 통과 → <strong>Refactor</strong>: 코드 개선.</p>
        <h2>JUnit 5 주요 어노테이션</h2>
        <p>@Test, @BeforeEach, @AfterEach, @DisplayName, @ParameterizedTest 등.</p>
        <div className="callout-box"><h3>강의 요약</h3><ul><li>TDD = Red → Green → Refactor 반복</li><li>테스트 먼저 작성하면 설계가 자연스럽게 개선</li><li>FIRST 원칙: Fast, Independent, Repeatable, Self-validating, Timely</li></ul></div>
        <div className="exercise-box"><h3>복습 문제</h3><ul><li><strong>Q1.</strong> TDD의 3단계를 설명하세요.</li><li><strong>Q2.</strong> AAA 패턴(Arrange-Act-Assert)을 코드로 보여주세요.</li></ul></div>
        <div className="lesson-nav"><Link to="/lectures/oop" className="lesson-nav-btn prev">&larr; 이전: OOP 구현</Link><Link to="/lectures/refactoring" className="lesson-nav-btn next">다음: 리팩토링 &rarr;</Link></div>
      </div></div></section>
    </>
  )
}

import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'

export default function LectureRefactoring() {
  return (
    <>
      <SEOHead title="강의안: 리팩토링" description="코드 스멜과 주요 리팩토링 기법을 강의합니다." />
      <section className="page-header"><div className="container"><h1>강의안: 리팩토링</h1><p>외부 동작을 변경하지 않으면서 코드 내부 구조를 개선하는 기법</p></div></section>
      <section className="section lesson-content"><div className="container"><div className="lesson-body">
        <div className="callout-box"><h3>학습 목표</h3><ul><li>리팩토링의 정의와 목적을 이해한다</li><li>주요 코드 스멜을 식별한다</li><li>Extract Method, Replace Conditional with Polymorphism 등 기법을 적용한다</li></ul></div>
        <h2>코드 스멜과 리팩토링 기법</h2>
        <p>긴 메서드 → Extract Method, 거대한 클래스 → Extract Class, Switch문 → Polymorphism 대체, 중복 코드 → Pull Up Method.</p>
        <h2>안전한 리팩토링 원칙</h2>
        <p>테스트 먼저 확보, 작은 단계로, 자주 커밋, 동작 보존.</p>
        <div className="callout-box"><h3>강의 요약</h3><ul><li>리팩토링 = 외부 동작 보존 + 내부 구조 개선</li><li>코드 스멜을 인식하고 적절한 기법 적용</li><li>테스트가 리팩토링의 안전망</li></ul></div>
        <div className="exercise-box"><h3>복습 문제</h3><ul><li><strong>Q1.</strong> 코드 스멜 3가지와 대응 리팩토링 기법을 설명하세요.</li><li><strong>Q2.</strong> "리팩토링 전 테스트 확보"가 중요한 이유는?</li></ul></div>
        <div className="lesson-nav"><Link to="/lectures/tdd" className="lesson-nav-btn prev">&larr; 이전: TDD 기초</Link><Link to="/lectures" className="lesson-nav-btn next">강의안 목록 &rarr;</Link></div>
      </div></div></section>
    </>
  )
}

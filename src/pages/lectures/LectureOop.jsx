import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'

export default function LectureOop() {
  return (
    <>
      <SEOHead title="강의안: OOP 구현" description="캡슐화, 상속, 다형성, 추상화 등 OOP 4대 특성을 강의합니다." />
      <section className="page-header"><div className="container"><h1>강의안: OOP 구현</h1><p>객체지향 프로그래밍의 4대 특성을 코드로 이해합니다</p></div></section>
      <section className="section lesson-content"><div className="container"><div className="lesson-body">
        <div className="callout-box"><h3>학습 목표</h3><ul><li>OOP 4대 특성(캡슐화, 상속, 다형성, 추상화)을 정의한다</li><li>각 특성을 Java 코드로 구현한다</li><li>인터페이스와 추상 클래스의 차이를 이해한다</li></ul></div>
        <h2>OOP 4대 특성</h2>
        <p><strong>캡슐화</strong>: private으로 데이터 보호. <strong>상속</strong>: extends로 코드 재사용. <strong>다형성</strong>: @Override로 동적 바인딩. <strong>추상화</strong>: abstract/interface로 핵심만 노출.</p>
        <div className="callout-box"><h3>강의 요약</h3><ul><li>캡슐화로 데이터 무결성 보장</li><li>상속과 다형성으로 유연한 코드 작성</li><li>추상화로 복잡성 감소</li></ul></div>
        <div className="exercise-box"><h3>복습 문제</h3><ul><li><strong>Q1.</strong> 캡슐화가 필요한 이유를 예시와 함께 설명하세요.</li><li><strong>Q2.</strong> abstract class와 interface의 차이는?</li></ul></div>
        <div className="lesson-nav"><Link to="/lectures/behavioral" className="lesson-nav-btn prev">&larr; 이전: 행위 패턴</Link><Link to="/lectures/tdd" className="lesson-nav-btn next">다음: TDD 기초 &rarr;</Link></div>
      </div></div></section>
    </>
  )
}

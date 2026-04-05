import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'

export default function LectureUml() {
  return (
    <>
      <SEOHead title="강의안: UML 다이어그램" description="클래스, 시퀀스, 유스케이스 등 주요 UML 다이어그램 작성법을 강의합니다." />
      <section className="page-header"><div className="container"><h1>강의안: UML 다이어그램</h1><p>소프트웨어 모델링의 표준 언어 UML을 마스터합니다</p></div></section>
      <section className="section lesson-content"><div className="container"><div className="lesson-body">
        <div className="callout-box"><h3>학습 목표</h3><ul><li>UML의 구조/행위 다이어그램을 분류한다</li><li>클래스 다이어그램의 6가지 관계를 구분한다</li><li>시퀀스 다이어그램으로 동적 상호작용을 표현한다</li></ul></div>
        <h2>클래스 다이어그램</h2>
        <p>클래스명, 속성(-, #, +), 메서드로 구성됩니다. 연관, 의존, 일반화, 실체화, 집합, 합성 6가지 관계가 있습니다.</p>
        <h2>시퀀스 다이어그램</h2>
        <p>객체 간의 메시지 교환 순서를 시간 흐름에 따라 표현합니다.</p>
        <h2>유스케이스 다이어그램</h2>
        <p>시스템의 기능과 액터의 관계를 시각적으로 표현합니다.</p>
        <div className="callout-box"><h3>강의 요약</h3><ul><li>UML = 소프트웨어 모델링의 표준 시각 언어</li><li>클래스 다이어그램(정적), 시퀀스 다이어그램(동적)이 핵심</li><li>6가지 관계(연관, 의존, 일반화, 실체화, 집합, 합성) 구분 필수</li></ul></div>
        <div className="exercise-box"><h3>복습 문제</h3><ul><li><strong>Q1.</strong> 집합(Aggregation)과 합성(Composition)의 차이를 예시로 설명하세요.</li><li><strong>Q2.</strong> 온라인 쇼핑몰의 클래스 다이어그램을 작성하세요.</li></ul></div>
        <div className="lesson-nav"><Link to="/lectures/requirements" className="lesson-nav-btn prev">&larr; 이전: 요구분석 기법</Link><Link to="/lectures/solid" className="lesson-nav-btn next">다음: SOLID 원칙 &rarr;</Link></div>
      </div></div></section>
    </>
  )
}

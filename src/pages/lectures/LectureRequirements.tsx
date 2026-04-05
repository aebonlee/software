import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'

export default function LectureRequirements() {
  return (
    <>
      <SEOHead title="강의안: 요구분석 기법" description="요구사항 수집, 유스케이스, 사용자 스토리 작성법을 강의합니다." />
      <section className="page-header"><div className="container"><h1>강의안: 요구분석 기법</h1><p>소프트웨어 요구사항을 체계적으로 수집하고 명세하는 방법</p></div></section>
      <section className="section lesson-content"><div className="container"><div className="lesson-body">
        <div className="callout-box"><h3>학습 목표</h3><ul><li>기능적/비기능적 요구사항을 구분한다</li><li>유스케이스와 사용자 스토리를 작성한다</li><li>SRS 문서의 구조를 이해한다</li></ul></div>
        <h2>요구사항 분류</h2>
        <p><strong>기능적 요구사항</strong>은 시스템이 수행해야 할 기능이고, <strong>비기능적 요구사항</strong>은 성능, 보안, 사용성 등 품질 속성입니다.</p>
        <h2>유스케이스 작성법</h2>
        <p>유스케이스는 액터, 사전조건, 기본흐름, 대안흐름, 사후조건으로 구성됩니다.</p>
        <h2>사용자 스토리</h2>
        <p>"[역할]로서, [기능]을 원한다. 왜냐하면 [이유] 때문이다." 형식으로 작성합니다.</p>
        <div className="callout-box"><h3>강의 요약</h3><ul><li>요구사항은 기능적/비기능적으로 분류</li><li>유스케이스와 사용자 스토리로 구조화</li><li>SRS 문서로 공식 명세화</li></ul></div>
        <div className="exercise-box"><h3>복습 문제</h3><ul><li><strong>Q1.</strong> 기능적 요구사항과 비기능적 요구사항의 차이를 예시와 함께 설명하세요.</li><li><strong>Q2.</strong> "도서관 대출 시스템"의 유스케이스를 작성하세요.</li></ul></div>
        <div className="lesson-nav"><Link to="/lectures/sdlc" className="lesson-nav-btn prev">&larr; 이전: SDLC 개요</Link><Link to="/lectures/uml" className="lesson-nav-btn next">다음: UML 다이어그램 &rarr;</Link></div>
      </div></div></section>
    </>
  )
}

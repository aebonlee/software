import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'

export default function WorkbookRequirements() {
  return (
    <>
      <SEOHead title="워크북: 요구분석 기법" description="요구사항 분석을 실습으로 익히는 워크북" />
      <section className="page-header"><div className="container"><h1>워크북: 요구분석 기법</h1></div></section>
      <section className="section lesson-content"><div className="container">
        <div className="callout-box"><h3>실습 목표</h3><ul><li>기능적/비기능적 요구사항을 구분한다</li><li>유스케이스를 작성한다</li></ul></div>
        <div className="exercise-box"><h3>빈칸 채우기</h3><ol><li>기능적 요구사항은 시스템이 ______해야 할 ______이다.</li><li>비기능적 요구사항은 ______, ______, 사용성 등의 ______이다.</li><li>사용자 스토리 형식: [______]로서, [______]을 원한다. 왜냐하면 [______].</li></ol></div>
        <div className="exercise-box"><h3>실습: 유스케이스 작성</h3><p>"학교 도서관 관리 시스템"의 "도서 대출" 유스케이스를 작성하세요.</p><textarea className="exercise-textarea" rows={10} placeholder="유스케이스명:\n액터:\n사전 조건:\n기본 흐름:\n  1.\n  2.\n대안 흐름:\n사후 조건:" /></div>
        <div className="exercise-box"><h3>실습: 사용자 스토리 작성</h3><p>온라인 쇼핑몰의 사용자 스토리를 3개 작성하세요.</p><textarea className="exercise-textarea" rows={5} placeholder="1. [고객]으로서, ..." /></div>
        <div className="exercise-box"><h3>자가 점검</h3><ul><li>유스케이스의 구성 요소를 나열할 수 있는가?</li><li>기능적/비기능적 요구사항을 구분할 수 있는가?</li></ul></div>
        <div className="lesson-nav"><Link to="/workbook/sdlc" className="lesson-nav-btn prev">&larr; 이전: SDLC 개요</Link><Link to="/workbook/uml" className="lesson-nav-btn next">다음: UML 다이어그램 &rarr;</Link></div>
      </div></section>
    </>
  )
}

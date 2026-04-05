import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'

export default function WorkbookPatternOverview() {
  return (
    <>
      <SEOHead title="워크북: 디자인 패턴 개요" description="디자인 패턴 분류와 선택을 실습으로 익히는 워크북" />
      <section className="page-header"><div className="container"><h1>워크북: 디자인 패턴 개요</h1></div></section>
      <section className="section lesson-content"><div className="container">
        <div className="callout-box"><h3>실습 목표</h3><ul><li>GoF 23가지 패턴을 분류할 수 있다</li><li>상황에 맞는 패턴을 선택할 수 있다</li></ul></div>
        <div className="exercise-box"><h3>빈칸 채우기</h3><ol><li>디자인 패턴은 ______, ______, ______ 3가지로 분류된다.</li><li>생성 패턴은 ______개, 구조 패턴은 ______개, 행위 패턴은 ______개이다.</li></ol></div>
        <div className="exercise-box"><h3>실습: 패턴 매칭</h3><p>다음 요구사항에 적합한 디자인 패턴을 선택하고 이유를 적으세요.</p><ol><li>데이터베이스 연결 객체를 하나만 사용 → ______</li><li>알림을 이메일/SMS/푸시로 교체 가능 → ______</li><li>주가 변동 시 여러 투자자에게 알림 → ______</li><li>복잡한 HTTP Request 객체를 단계별 생성 → ______</li><li>기존 코드 수정 없이 로깅 기능 추가 → ______</li></ol><textarea className="exercise-textarea" rows={6} placeholder="각 번호의 패턴 이름과 선택 이유를 적으세요..." /></div>
        <div className="lesson-nav"><Link to="/workbook/solid" className="lesson-nav-btn prev">&larr; 이전: SOLID 원칙</Link><Link to="/workbook/creational" className="lesson-nav-btn next">다음: 생성 패턴 &rarr;</Link></div>
      </div></section>
    </>
  )
}

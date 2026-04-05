import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'

export default function WorkbookSolid() {
  return (
    <>
      <SEOHead title="워크북: SOLID 원칙" description="SOLID 원칙을 실습으로 익히는 워크북" />
      <section className="page-header"><div className="container"><h1>워크북: SOLID 원칙</h1></div></section>
      <section className="section lesson-content"><div className="container">
        <div className="callout-box"><h3>실습 목표</h3><ul><li>SOLID 5가지 원칙을 각각 설명할 수 있다</li><li>위반 사례를 식별하고 리팩토링할 수 있다</li></ul></div>
        <div className="exercise-box"><h3>빈칸 채우기</h3><ol><li>SRP: 클래스는 ______만 가져야 한다.</li><li>OCP: 확장에는 ______이고 수정에는 ______이어야 한다.</li><li>DIP: 고수준 모듈이 ______에 의존해야 한다.</li></ol></div>
        <div className="exercise-box"><h3>실습: SRP 위반 식별 및 리팩토링</h3><p>아래 코드에서 SRP 위반을 찾고 분리해보세요.</p><pre style={{background:'var(--bg-tertiary)',padding:'1rem',borderRadius:'8px',fontSize:'0.85rem'}}><code>{`class OrderService {
    void createOrder() { /* 주문 생성 */ }
    void sendEmail() { /* 이메일 발송 */ }
    void generatePDF() { /* PDF 생성 */ }
    void saveToDB() { /* DB 저장 */ }
}`}</code></pre><textarea className="exercise-textarea" rows="8" placeholder="리팩토링한 코드를 작성하세요..." /></div>
        <div className="exercise-box"><h3>실습: OCP 적용</h3><p>결제 시스템(카드, 계좌이체, 포인트)을 OCP를 적용하여 설계하세요.</p><textarea className="exercise-textarea" rows="8" placeholder="인터페이스와 구현 클래스를 작성하세요..." /></div>
        <div className="lesson-nav"><Link to="/workbook/uml" className="lesson-nav-btn prev">&larr; 이전: UML 다이어그램</Link><Link to="/workbook/pattern-overview" className="lesson-nav-btn next">다음: 디자인 패턴 개요 &rarr;</Link></div>
      </div></section>
    </>
  )
}

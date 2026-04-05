import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'

export default function LectureSolid() {
  return (
    <>
      <SEOHead title="강의안: SOLID 원칙" description="객체지향 설계의 5대 원칙 SOLID를 강의합니다." />
      <section className="page-header"><div className="container"><h1>강의안: SOLID 원칙</h1><p>유지보수 가능한 객체지향 설계를 위한 5가지 핵심 원칙</p></div></section>
      <section className="section lesson-content"><div className="container"><div className="lesson-body">
        <div className="callout-box"><h3>학습 목표</h3><ul><li>SOLID 5가지 원칙을 각각 정의하고 설명한다</li><li>각 원칙의 위반 사례와 적용 사례를 코드로 비교한다</li><li>실제 프로젝트에서 SOLID 원칙을 적용하는 방법을 이해한다</li></ul></div>
        <h2>SOLID 원칙 요약</h2>
        <div style={{overflowX:'auto'}}><table className="lesson-table"><thead><tr><th>원칙</th><th>정의</th><th>핵심</th></tr></thead><tbody>
          <tr><td><strong>SRP</strong></td><td>단일 책임</td><td>하나의 클래스, 하나의 변경 이유</td></tr>
          <tr><td><strong>OCP</strong></td><td>개방-폐쇄</td><td>확장에 열리고 수정에 닫힘</td></tr>
          <tr><td><strong>LSP</strong></td><td>리스코프 치환</td><td>하위 타입은 상위 타입 대체 가능</td></tr>
          <tr><td><strong>ISP</strong></td><td>인터페이스 분리</td><td>작고 구체적인 인터페이스</td></tr>
          <tr><td><strong>DIP</strong></td><td>의존성 역전</td><td>추상화에 의존</td></tr>
        </tbody></table></div>
        <div className="callout-box"><h3>강의 요약</h3><ul><li>SOLID는 유연하고 유지보수 가능한 설계를 위한 가이드</li><li>각 원칙은 독립적이지만 서로 보완적으로 작용</li><li>OCP와 DIP는 디자인 패턴의 이론적 기반</li></ul></div>
        <div className="exercise-box"><h3>복습 문제</h3><ul><li><strong>Q1.</strong> SRP 위반 사례를 코드로 보이고 리팩토링하세요.</li><li><strong>Q2.</strong> OCP를 적용하여 결제 시스템을 설계하세요.</li><li><strong>Q3.</strong> DIP가 필요한 이유를 구체적으로 설명하세요.</li></ul></div>
        <div className="lesson-nav"><Link to="/lectures/uml" className="lesson-nav-btn prev">&larr; 이전: UML 다이어그램</Link><Link to="/lectures/pattern-overview" className="lesson-nav-btn next">다음: 디자인 패턴 개요 &rarr;</Link></div>
      </div></div></section>
    </>
  )
}

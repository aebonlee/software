import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'

export default function WorkbookUml() {
  return (
    <>
      <SEOHead title="워크북: UML 다이어그램" description="UML 다이어그램 작성을 실습으로 익히는 워크북" />
      <section className="page-header"><div className="container"><h1>워크북: UML 다이어그램</h1></div></section>
      <section className="section lesson-content"><div className="container">
        <div className="callout-box"><h3>실습 목표</h3><ul><li>클래스 다이어그램을 작성할 수 있다</li><li>6가지 관계를 구분하여 표현할 수 있다</li></ul></div>
        <div className="exercise-box"><h3>빈칸 채우기</h3><ol><li>UML의 구조 다이어그램에는 ______, 객체, 컴포넌트 다이어그램이 있다.</li><li>강한 전체-부분 관계를 나타내는 것은 ______이다.</li><li>인터페이스 구현 관계를 ______라고 한다.</li></ol></div>
        <div className="exercise-box"><h3>실습: 클래스 다이어그램 작성</h3><p>"온라인 쇼핑몰"의 클래스 다이어그램을 작성하세요. 다음 클래스를 포함해야 합니다.</p><ul><li>User, Product, Order, OrderItem, Cart</li><li>각 클래스의 속성(3개 이상)과 메서드(2개 이상)</li><li>클래스 간 관계(연관, 합성 등)를 표시</li></ul><textarea className="exercise-textarea" rows="10" placeholder="[Class] User\n- id: int\n- name: String\n+ login(): boolean\n..." /></div>
        <div className="exercise-box"><h3>실습: 실습 페이지 활용</h3><p>위에서 작성한 클래스 다이어그램을 <Link to="/playground">실습 페이지</Link>의 UML 분석기에 입력하여 분석 결과를 확인하세요.</p></div>
        <div className="lesson-nav"><Link to="/workbook/requirements" className="lesson-nav-btn prev">&larr; 이전: 요구분석 기법</Link><Link to="/workbook/solid" className="lesson-nav-btn next">다음: SOLID 원칙 &rarr;</Link></div>
      </div></section>
    </>
  )
}

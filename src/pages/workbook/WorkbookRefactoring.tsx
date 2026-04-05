import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'

export default function WorkbookRefactoring() {
  return (
    <>
      <SEOHead title="워크북: 리팩토링" description="코드 스멜 식별과 리팩토링 기법을 실습으로 익히는 워크북" />
      <section className="page-header"><div className="container"><h1>워크북: 리팩토링</h1></div></section>
      <section className="section lesson-content"><div className="container">
        <div className="callout-box"><h3>실습 목표</h3><ul><li>코드 스멜을 식별한다</li><li>Extract Method, Replace Conditional with Polymorphism을 적용한다</li></ul></div>
        <div className="exercise-box"><h3>실습 1: Extract Method</h3><p>아래 코드에서 의미 있는 단위를 추출하세요.</p><pre style={{background:'var(--bg-tertiary)',padding:'1rem',borderRadius:'8px',fontSize:'0.85rem'}}><code>{`void processOrder(Order order) {
    // 가격 계산
    double total = 0;
    for (Item item : order.items) {
        total += item.price * item.qty;
        if (item.qty > 10) total -= item.price * item.qty * 0.1;
    }
    // 배송비 계산
    double shipping = total > 50000 ? 0 : 3000;
    // 출력
    System.out.println("합계: " + total);
    System.out.println("배송비: " + shipping);
    System.out.println("총액: " + (total + shipping));
}`}</code></pre><textarea className="exercise-textarea" rows="10" placeholder="리팩토링한 코드를 작성하세요...\nvoid processOrder(Order order) {\n    double total = calculateTotal(order);\n    ..." /></div>
        <div className="exercise-box"><h3>실습 2: 조건문을 다형성으로 대체</h3><p>아래 switch문을 다형성으로 리팩토링하세요.</p><pre style={{background:'var(--bg-tertiary)',padding:'1rem',borderRadius:'8px',fontSize:'0.85rem'}}><code>{`double getDiscount(String memberType) {
    switch (memberType) {
        case "GOLD": return 0.2;
        case "SILVER": return 0.1;
        case "BRONZE": return 0.05;
        default: return 0;
    }
}`}</code></pre><textarea className="exercise-textarea" rows="8" placeholder="interface Member { double getDiscount(); }\n// GoldMember, SilverMember, ..." /></div>
        <div className="exercise-box"><h3>자가 점검</h3><ul><li>코드 스멜 3가지를 나열할 수 있는가?</li><li>Extract Method 리팩토링을 수행할 수 있는가?</li><li>조건문을 다형성으로 대체할 수 있는가?</li></ul></div>
        <div className="lesson-nav"><Link to="/workbook/tdd" className="lesson-nav-btn prev">&larr; 이전: TDD 기초</Link><Link to="/workbook" className="lesson-nav-btn next">워크북 목록 &rarr;</Link></div>
      </div></section>
    </>
  )
}

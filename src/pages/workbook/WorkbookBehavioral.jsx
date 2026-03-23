import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'

export default function WorkbookBehavioral() {
  return (
    <>
      <SEOHead title="워크북: 행위 패턴" description="Observer, Strategy, State 패턴을 실습으로 익히는 워크북" />
      <section className="page-header"><div className="container"><h1>워크북: 행위 패턴</h1></div></section>
      <section className="section lesson-content"><div className="container">
        <div className="callout-box"><h3>실습 목표</h3><ul><li>Observer로 이벤트 알림 시스템을 구현한다</li><li>Strategy로 교체 가능한 알고리즘을 구현한다</li><li>State로 상태 기반 행동을 구현한다</li></ul></div>
        <div className="exercise-box"><h3>실습 1: Observer 구현</h3><p>뉴스레터 시스템을 Observer 패턴으로 구현하세요. 구독자(Observer)는 새 기사가 등록되면 알림을 받습니다.</p><textarea className="exercise-textarea" rows="8" placeholder="interface Subscriber { void notify(String article); }\n// Newsletter, EmailSubscriber ..." /></div>
        <div className="exercise-box"><h3>실습 2: Strategy 구현</h3><p>결제 시스템을 Strategy 패턴으로 구현하세요. 카드결제, 계좌이체, 포인트결제를 교체할 수 있어야 합니다.</p><textarea className="exercise-textarea" rows="8" placeholder="interface PaymentStrategy { void pay(int amount); }\n// CardPayment, BankTransfer ..." /></div>
        <div className="exercise-box"><h3>실습 3: State 구현</h3><p>자판기를 State 패턴으로 구현하세요. 상태: 대기→동전투입→음료선택→음료배출</p><textarea className="exercise-textarea" rows="8" placeholder="interface VendingState { void insertCoin(); void select(); void dispense(); }" /></div>
        <div className="lesson-nav"><Link to="/workbook/structural" className="lesson-nav-btn prev">&larr; 이전: 구조 패턴</Link><Link to="/workbook/oop" className="lesson-nav-btn next">다음: OOP 구현 &rarr;</Link></div>
      </div></section>
    </>
  )
}

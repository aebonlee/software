import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'

export default function LectureBehavioral() {
  return (
    <>
      <SEOHead title="강의안: 행위 패턴" description="Observer, Strategy, Command 등 행위 패턴을 강의합니다." />
      <section className="page-header"><div className="container"><h1>강의안: 행위 패턴</h1><p>객체 간 상호작용과 책임 분배를 다루는 11가지 디자인 패턴</p></div></section>
      <section className="section lesson-content"><div className="container"><div className="lesson-body">
        <div className="callout-box"><h3>학습 목표</h3><ul><li>주요 행위 패턴(Observer, Strategy, Command, State, Template Method)을 이해한다</li><li>Observer와 Strategy 패턴을 코드로 구현한다</li><li>조건문을 패턴으로 대체하는 방법을 익힌다</li></ul></div>
        <h2>핵심 행위 패턴</h2>
        <p><strong>Observer</strong>: 상태 변화 자동 통지. <strong>Strategy</strong>: 알고리즘 교체. <strong>Command</strong>: 요청 객체화. <strong>State</strong>: 상태별 행동. <strong>Template Method</strong>: 알고리즘 골격.</p>
        <div className="callout-box"><h3>강의 요약</h3><ul><li>행위 패턴은 객체 간 책임 분배와 상호작용을 다룸</li><li>Observer, Strategy, Command가 실무에서 가장 빈번</li><li>조건문 대신 패턴 사용 시 확장성 향상</li></ul></div>
        <div className="exercise-box"><h3>복습 문제</h3><ul><li><strong>Q1.</strong> Observer 패턴의 구조(Subject, Observer)를 설명하세요.</li><li><strong>Q2.</strong> Strategy vs State 패턴의 차이는?</li></ul></div>
        <div className="lesson-nav"><Link to="/lectures/structural" className="lesson-nav-btn prev">&larr; 이전: 구조 패턴</Link><Link to="/lectures/oop" className="lesson-nav-btn next">다음: OOP 구현 &rarr;</Link></div>
      </div></div></section>
    </>
  )
}

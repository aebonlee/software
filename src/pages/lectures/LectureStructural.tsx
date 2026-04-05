import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'

export default function LectureStructural() {
  return (
    <>
      <SEOHead title="강의안: 구조 패턴" description="Adapter, Decorator, Facade 등 구조 패턴을 강의합니다." />
      <section className="page-header"><div className="container"><h1>강의안: 구조 패턴</h1><p>클래스와 객체를 더 큰 구조로 합성하는 7가지 디자인 패턴</p></div></section>
      <section className="section lesson-content"><div className="container"><div className="lesson-body">
        <div className="callout-box"><h3>학습 목표</h3><ul><li>7가지 구조 패턴의 목적과 구조를 이해한다</li><li>Adapter, Decorator, Facade를 코드로 구현한다</li><li>상속 vs 합성의 차이를 이해한다</li></ul></div>
        <h2>구조 패턴 요약</h2>
        <p>Adapter(인터페이스 변환), Decorator(동적 기능 추가), Facade(단순화), Composite(트리 구조), Proxy(대리), Bridge(추상화-구현 분리), Flyweight(공유).</p>
        <div className="callout-box"><h3>강의 요약</h3><ul><li>구조 패턴은 객체 합성으로 새로운 기능 구현</li><li>Adapter, Decorator, Facade가 가장 실용적</li><li>"상속보다 합성을 선호하라" 원칙과 밀접</li></ul></div>
        <div className="exercise-box"><h3>복습 문제</h3><ul><li><strong>Q1.</strong> Adapter와 Facade의 차이를 설명하세요.</li><li><strong>Q2.</strong> Decorator 패턴으로 입출력 스트림을 설명하세요.</li></ul></div>
        <div className="lesson-nav"><Link to="/lectures/creational" className="lesson-nav-btn prev">&larr; 이전: 생성 패턴</Link><Link to="/lectures/behavioral" className="lesson-nav-btn next">다음: 행위 패턴 &rarr;</Link></div>
      </div></div></section>
    </>
  )
}

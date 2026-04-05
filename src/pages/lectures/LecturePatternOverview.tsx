import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'

export default function LecturePatternOverview() {
  return (
    <>
      <SEOHead title="강의안: 디자인 패턴 개요" description="GoF 23가지 디자인 패턴의 분류와 선택 가이드를 강의합니다." />
      <section className="page-header"><div className="container"><h1>강의안: 디자인 패턴 개요</h1><p>반복되는 설계 문제에 대한 검증된 해결책을 소개합니다</p></div></section>
      <section className="section lesson-content"><div className="container"><div className="lesson-body">
        <div className="callout-box"><h3>학습 목표</h3><ul><li>디자인 패턴의 정의와 필요성을 이해한다</li><li>GoF 23가지 패턴을 생성/구조/행위로 분류한다</li><li>상황에 맞는 패턴을 선택하는 기준을 익힌다</li></ul></div>
        <h2>디자인 패턴 3가지 분류</h2>
        <p><strong>생성 패턴(5개)</strong>: Singleton, Factory Method, Abstract Factory, Builder, Prototype</p>
        <p><strong>구조 패턴(7개)</strong>: Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy</p>
        <p><strong>행위 패턴(11개)</strong>: Observer, Strategy, Command, State, Template Method, Iterator, Mediator, Memento, Chain of Responsibility, Visitor, Interpreter</p>
        <div className="callout-box"><h3>강의 요약</h3><ul><li>디자인 패턴 = 검증된 설계 문제 해결책</li><li>생성(5) + 구조(7) + 행위(11) = GoF 23가지</li><li>문제 유형에 맞는 패턴 선택이 핵심</li></ul></div>
        <div className="exercise-box"><h3>복습 문제</h3><ul><li><strong>Q1.</strong> 생성/구조/행위 패턴의 차이를 설명하세요.</li><li><strong>Q2.</strong> "DB 커넥션 풀"에 적합한 패턴은?</li><li><strong>Q3.</strong> "결제 방식 교체"에 적합한 패턴은?</li></ul></div>
        <div className="lesson-nav"><Link to="/lectures/solid" className="lesson-nav-btn prev">&larr; 이전: SOLID 원칙</Link><Link to="/lectures/creational" className="lesson-nav-btn next">다음: 생성 패턴 &rarr;</Link></div>
      </div></div></section>
    </>
  )
}

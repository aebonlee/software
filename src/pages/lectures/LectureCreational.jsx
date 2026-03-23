import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'

export default function LectureCreational() {
  return (
    <>
      <SEOHead title="강의안: 생성 패턴" description="Singleton, Factory Method, Builder 등 생성 패턴을 강의합니다." />
      <section className="page-header"><div className="container"><h1>강의안: 생성 패턴</h1><p>객체 생성 메커니즘을 다루는 5가지 디자인 패턴</p></div></section>
      <section className="section lesson-content"><div className="container"><div className="lesson-body">
        <div className="callout-box"><h3>학습 목표</h3><ul><li>5가지 생성 패턴의 목적과 구조를 이해한다</li><li>Singleton의 Thread-safe 구현법을 작성한다</li><li>Factory Method와 Builder 패턴을 코드로 구현한다</li></ul></div>
        <h2>생성 패턴 요약</h2>
        <div style={{overflowX:'auto'}}><table className="lesson-table"><thead><tr><th>패턴</th><th>목적</th><th>핵심 구조</th></tr></thead><tbody>
          <tr><td><strong>Singleton</strong></td><td>유일한 인스턴스</td><td>private 생성자, static getInstance()</td></tr>
          <tr><td><strong>Factory Method</strong></td><td>생성을 서브클래스에 위임</td><td>Creator → ConcreteCreator</td></tr>
          <tr><td><strong>Abstract Factory</strong></td><td>관련 객체 군 생성</td><td>AbstractFactory → ConcreteFactory</td></tr>
          <tr><td><strong>Builder</strong></td><td>단계별 복잡한 객체 생성</td><td>Builder 체이닝</td></tr>
          <tr><td><strong>Prototype</strong></td><td>기존 객체 복제</td><td>clone() 메서드</td></tr>
        </tbody></table></div>
        <div className="callout-box"><h3>강의 요약</h3><ul><li>생성 패턴은 객체 생성 과정을 추상화</li><li>Singleton, Factory Method, Builder가 실무에서 가장 빈번</li></ul></div>
        <div className="exercise-box"><h3>복습 문제</h3><ul><li><strong>Q1.</strong> Singleton 패턴의 Thread-safe 구현을 작성하세요.</li><li><strong>Q2.</strong> Factory Method와 Abstract Factory의 차이는?</li></ul></div>
        <div className="lesson-nav"><Link to="/lectures/pattern-overview" className="lesson-nav-btn prev">&larr; 이전: 디자인 패턴 개요</Link><Link to="/lectures/structural" className="lesson-nav-btn next">다음: 구조 패턴 &rarr;</Link></div>
      </div></div></section>
    </>
  )
}

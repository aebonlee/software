import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'

export default function PatternOverview() {
  return (
    <>
      <SEOHead title="디자인 패턴 개요" description="GoF 23가지 디자인 패턴의 분류와 개요를 학습합니다." />
      <section className="page-header"><div className="container"><h1>디자인 패턴 개요</h1><p>반복되는 설계 문제에 대한 검증된 해결책을 알아봅시다</p></div></section>

      <section className="section lesson-content"><div className="container"><div className="lesson-body">
        <h2>디자인 패턴이란?</h2>
        <p><strong>디자인 패턴(Design Pattern)</strong>은 소프트웨어 설계에서 반복적으로 발생하는 문제에 대한 일반적인 해결책입니다. GoF(Gang of Four)가 정리한 23가지 패턴이 가장 유명합니다.</p>

        <div className="callout-box">
          <h3>디자인 패턴 3가지 분류</h3>
          <ul>
            <li><strong>생성 패턴 (Creational)</strong>: 객체 생성 메커니즘 (5개)</li>
            <li><strong>구조 패턴 (Structural)</strong>: 객체 합성과 구조 (7개)</li>
            <li><strong>행위 패턴 (Behavioral)</strong>: 객체 간 상호작용과 책임 분배 (11개)</li>
          </ul>
        </div>

        <h2>GoF 23가지 패턴 목록</h2>
        <div style={{overflowX:'auto'}}>
          <table className="lesson-table">
            <thead><tr><th>분류</th><th>패턴명</th><th>핵심 목적</th></tr></thead>
            <tbody>
              <tr><td rowSpan={5}><strong>생성</strong></td><td>Singleton</td><td>인스턴스를 하나만 생성</td></tr>
              <tr><td>Factory Method</td><td>객체 생성을 서브클래스에 위임</td></tr>
              <tr><td>Abstract Factory</td><td>관련 객체 군을 생성</td></tr>
              <tr><td>Builder</td><td>복잡한 객체를 단계적으로 생성</td></tr>
              <tr><td>Prototype</td><td>기존 객체를 복제하여 생성</td></tr>
              <tr><td rowSpan={7}><strong>구조</strong></td><td>Adapter</td><td>호환되지 않는 인터페이스 변환</td></tr>
              <tr><td>Bridge</td><td>추상화와 구현을 분리</td></tr>
              <tr><td>Composite</td><td>트리 구조의 객체 합성</td></tr>
              <tr><td>Decorator</td><td>동적으로 기능 추가</td></tr>
              <tr><td>Facade</td><td>복잡한 시스템에 단순한 인터페이스</td></tr>
              <tr><td>Flyweight</td><td>공유를 통한 메모리 절약</td></tr>
              <tr><td>Proxy</td><td>대리 객체로 접근 제어</td></tr>
              <tr><td rowSpan={11}><strong>행위</strong></td><td>Observer</td><td>상태 변화 시 자동 통지</td></tr>
              <tr><td>Strategy</td><td>알고리즘을 캡슐화하여 교체</td></tr>
              <tr><td>Command</td><td>요청을 객체로 캡슐화</td></tr>
              <tr><td>State</td><td>상태에 따라 행동 변경</td></tr>
              <tr><td>Template Method</td><td>알고리즘 골격 정의, 세부 구현 위임</td></tr>
              <tr><td>Iterator</td><td>컬렉션 순회 방법 제공</td></tr>
              <tr><td>Mediator</td><td>객체 간 통신을 중재</td></tr>
              <tr><td>Memento</td><td>객체 상태 저장 및 복원</td></tr>
              <tr><td>Chain of Responsibility</td><td>요청 처리자를 체인으로 연결</td></tr>
              <tr><td>Visitor</td><td>구조 변경 없이 새로운 연산 추가</td></tr>
              <tr><td>Interpreter</td><td>문법 규칙을 클래스로 표현</td></tr>
            </tbody>
          </table>
        </div>

        <h2>패턴 선택 가이드</h2>
        <div className="prompt-example">
          <div className="prompt-example-header">어떤 패턴을 사용할까?</div>
          <div className="prompt-example-body">
            <div className="prompt-label">인스턴스가 하나만 필요하다면?</div>
            <div className="prompt-text">→ Singleton</div>
            <div className="prompt-label">객체 생성 로직을 분리하고 싶다면?</div>
            <div className="prompt-text">→ Factory Method / Abstract Factory</div>
            <div className="prompt-label">알고리즘을 교체 가능하게 만들고 싶다면?</div>
            <div className="prompt-text">→ Strategy</div>
            <div className="prompt-label">상태 변화를 여러 객체에 알리고 싶다면?</div>
            <div className="prompt-text">→ Observer</div>
            <div className="prompt-label">기존 코드를 수정하지 않고 기능을 추가하고 싶다면?</div>
            <div className="prompt-text">→ Decorator</div>
          </div>
        </div>

        <div className="exercise-box">
          <h3>연습: 패턴 매칭</h3>
          <p>다음 요구사항에 적합한 디자인 패턴을 선택해보세요.</p>
          <ul>
            <li>데이터베이스 연결 풀에서 연결 객체를 하나만 사용해야 한다</li>
            <li>결제 방식(카드/계좌이체/페이)을 쉽게 교체할 수 있어야 한다</li>
            <li>주가 변동 시 여러 투자자에게 알림을 보내야 한다</li>
          </ul>
        </div>

        <div className="callout-box">
          <h3>핵심 요약</h3>
          <ul>
            <li>디자인 패턴은 검증된 설계 문제 해결책</li>
            <li>생성(5), 구조(7), 행위(11) 총 23가지 GoF 패턴</li>
            <li>문제 유형에 맞는 패턴을 선택하는 것이 핵심</li>
          </ul>
        </div>

        <div className="lesson-nav"><Link to="/principles/solid" className="lesson-nav-btn prev">&larr; 이전: SOLID 원칙</Link><Link to="/patterns/creational" className="lesson-nav-btn next">다음: 생성 패턴 &rarr;</Link></div>
      </div></div></section>
    </>
  )
}

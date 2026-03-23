import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'

export default function Uml() {
  return (
    <>
      <SEOHead title="UML 다이어그램" description="UML(Unified Modeling Language) 다이어그램의 종류와 작성법을 학습합니다." />
      <section className="page-header"><div className="container"><h1>UML 다이어그램</h1><p>소프트웨어 모델링의 표준 언어 UML을 배워봅시다</p></div></section>

      <section className="section lesson-content"><div className="container"><div className="lesson-body">
        <h2>UML이란?</h2>
        <p><strong>UML(Unified Modeling Language)</strong>은 소프트웨어 시스템을 시각적으로 모델링하기 위한 표준 언어입니다. OMG(Object Management Group)에서 관리합니다.</p>

        <div className="callout-box">
          <h3>UML 다이어그램 분류</h3>
          <ul>
            <li><strong>구조 다이어그램</strong>: 클래스, 객체, 컴포넌트, 패키지, 배치</li>
            <li><strong>행위 다이어그램</strong>: 유스케이스, 시퀀스, 활동, 상태</li>
          </ul>
        </div>

        <h2>클래스 다이어그램</h2>
        <p>시스템의 정적 구조를 표현하는 가장 중요한 UML 다이어그램입니다.</p>

        <div className="code-block">
          <div className="code-header">클래스 다이어그램 표기법</div>
          <pre><code>{`┌──────────────────────┐
│     <<interface>>    │
│    Comparable<T>     │
├──────────────────────┤
│                      │
├──────────────────────┤
│ + compareTo(T): int  │
└──────────────────────┘

┌──────────────────────┐
│       Student        │  ← 클래스명
├──────────────────────┤
│ - id: int            │  ← 속성 (- private)
│ - name: String       │
│ # gpa: double        │  ← (# protected)
├──────────────────────┤
│ + getName(): String  │  ← 메서드 (+ public)
│ + setGpa(d): void    │
└──────────────────────┘`}</code></pre>
        </div>

        <h3>클래스 간 관계</h3>
        <div style={{overflowX:'auto'}}>
          <table className="lesson-table">
            <thead><tr><th>관계</th><th>표기</th><th>설명</th><th>예시</th></tr></thead>
            <tbody>
              <tr><td><strong>연관</strong></td><td>실선 화살표</td><td>두 클래스 간의 관계</td><td>Student → Course</td></tr>
              <tr><td><strong>의존</strong></td><td>점선 화살표</td><td>일시적 사용 관계</td><td>Order --{'>'} Payment</td></tr>
              <tr><td><strong>일반화</strong></td><td>빈 삼각형 화살표</td><td>상속 관계</td><td>Dog ◁─ Animal</td></tr>
              <tr><td><strong>실체화</strong></td><td>점선 빈 삼각형</td><td>인터페이스 구현</td><td>ArrayList ◁-- List</td></tr>
              <tr><td><strong>집합</strong></td><td>빈 다이아몬드</td><td>전체-부분 (약한)</td><td>Team ◇─ Player</td></tr>
              <tr><td><strong>합성</strong></td><td>채운 다이아몬드</td><td>전체-부분 (강한)</td><td>House ◆─ Room</td></tr>
            </tbody>
          </table>
        </div>

        <h2>시퀀스 다이어그램</h2>
        <p>객체 간의 메시지 교환 순서를 시간 흐름에 따라 표현합니다.</p>

        <div className="code-block">
          <div className="code-header">시퀀스 다이어그램 예시: 로그인</div>
          <pre><code>{`User        LoginController    AuthService     Database
 │              │                  │               │
 │──login()────>│                  │               │
 │              │──authenticate()─>│               │
 │              │                  │──findUser()──>│
 │              │                  │<──user data───│
 │              │                  │──verify pw──> │
 │              │<──auth result────│               │
 │<──response───│                  │               │`}</code></pre>
        </div>

        <h2>유스케이스 다이어그램</h2>
        <p>시스템의 기능과 사용자(액터)의 관계를 표현합니다.</p>

        <h2>활동 다이어그램</h2>
        <p>업무 흐름이나 알고리즘의 제어 흐름을 표현합니다. 조건 분기, 병렬 처리를 시각화할 수 있습니다.</p>

        <div className="exercise-box">
          <h3>연습: UML 다이어그램 작성</h3>
          <p>"온라인 쇼핑몰"의 UML 다이어그램을 작성해보세요.</p>
          <ul>
            <li>클래스 다이어그램: User, Product, Order, Cart 클래스와 관계</li>
            <li>시퀀스 다이어그램: 상품 주문 과정</li>
            <li>실습 페이지에서 UML 분석기를 활용해보세요</li>
          </ul>
        </div>

        <div className="callout-box">
          <h3>핵심 요약</h3>
          <ul>
            <li>UML은 소프트웨어 모델링의 표준 시각 언어</li>
            <li>클래스 다이어그램은 정적 구조, 시퀀스 다이어그램은 동적 상호작용 표현</li>
            <li>6가지 관계(연관, 의존, 일반화, 실체화, 집합, 합성) 구분이 중요</li>
          </ul>
        </div>

        <div className="lesson-nav"><Link to="/intro/requirements" className="lesson-nav-btn prev">&larr; 이전: 요구분석 기법</Link><Link to="/principles/solid" className="lesson-nav-btn next">다음: SOLID 원칙 &rarr;</Link></div>
      </div></div></section>
    </>
  )
}

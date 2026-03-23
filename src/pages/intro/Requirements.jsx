import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'

export default function Requirements() {
  return (
    <>
      <SEOHead title="요구분석 기법" description="소프트웨어 요구사항 분석 기법과 명세 작성법을 학습합니다." />
      <section className="page-header"><div className="container"><h1>요구분석 기법</h1><p>소프트웨어 요구사항을 체계적으로 수집하고 분석하는 방법을 배웁니다</p></div></section>

      <section className="section lesson-content"><div className="container"><div className="lesson-body">
        <h2>요구사항 분석이란?</h2>
        <p><strong>요구사항 분석(Requirements Analysis)</strong>은 소프트웨어가 해결해야 할 문제와 제공해야 할 기능을 파악하고 문서화하는 과정입니다.</p>

        <div className="callout-box">
          <h3>요구사항의 분류</h3>
          <ul>
            <li><strong>기능적 요구사항</strong>: 시스템이 수행해야 하는 기능 (예: 로그인, 결제)</li>
            <li><strong>비기능적 요구사항</strong>: 품질 속성 (성능, 보안, 확장성, 사용성)</li>
          </ul>
        </div>

        <h2>요구사항 수집 기법</h2>
        <div style={{overflowX:'auto'}}>
          <table className="lesson-table">
            <thead><tr><th>기법</th><th>설명</th><th>적합한 상황</th></tr></thead>
            <tbody>
              <tr><td><strong>인터뷰</strong></td><td>이해관계자와 직접 대화</td><td>핵심 요구사항 파악</td></tr>
              <tr><td><strong>설문조사</strong></td><td>다수의 사용자 의견 수집</td><td>사용자 선호도 조사</td></tr>
              <tr><td><strong>관찰</strong></td><td>현재 업무 프로세스 관찰</td><td>암묵적 요구사항 발견</td></tr>
              <tr><td><strong>프로토타이핑</strong></td><td>시제품으로 요구사항 확인</td><td>요구사항이 불명확할 때</td></tr>
              <tr><td><strong>브레인스토밍</strong></td><td>자유로운 아이디어 도출</td><td>창의적 기능 발굴</td></tr>
            </tbody>
          </table>
        </div>

        <h2>유스케이스 (Use Case)</h2>
        <p>유스케이스는 시스템과 사용자(액터) 간의 상호작용을 기술합니다.</p>

        <div className="code-block">
          <div className="code-header">유스케이스 예시: 온라인 주문</div>
          <pre><code>{`유스케이스: 상품 주문
액터: 고객
사전 조건: 고객이 로그인한 상태
기본 흐름:
  1. 고객이 상품을 장바구니에 담는다
  2. 고객이 "주문하기"를 클릭한다
  3. 시스템이 배송지 정보를 표시한다
  4. 고객이 결제 수단을 선택한다
  5. 시스템이 결제를 처리한다
  6. 시스템이 주문 확인 메시지를 표시한다
대안 흐름:
  5a. 결제 실패 시 오류 메시지를 표시한다
사후 조건: 주문이 생성되고 재고가 차감된다`}</code></pre>
        </div>

        <h2>사용자 스토리 (User Story)</h2>
        <p>애자일 방법론에서 사용하는 요구사항 표현 방식입니다.</p>

        <div className="prompt-example">
          <div className="prompt-example-header">사용자 스토리 형식</div>
          <div className="prompt-example-body">
            <div className="prompt-label">형식</div>
            <div className="prompt-text">[역할]로서, [기능]을 원한다. 왜냐하면 [이유] 때문이다.</div>
            <div className="prompt-label">예시</div>
            <div className="prompt-text">고객으로서, 주문 내역을 조회하고 싶다. 왜냐하면 배송 상태를 확인하기 위해서이다.</div>
          </div>
        </div>

        <h2>요구사항 명세서 (SRS)</h2>
        <p><strong>SRS(Software Requirements Specification)</strong>는 수집된 요구사항을 체계적으로 정리한 공식 문서입니다.</p>
        <ul>
          <li><strong>IEEE 830</strong> 표준에 따른 SRS 구조</li>
          <li>기능 요구사항과 비기능 요구사항을 구분하여 기술</li>
          <li>모호하지 않고 검증 가능한 형태로 작성</li>
        </ul>

        <div className="exercise-box">
          <h3>연습: 요구사항 작성</h3>
          <p>"학교 도서관 관리 시스템"의 요구사항을 작성해보세요.</p>
          <ul>
            <li>기능적 요구사항 5개 (도서 검색, 대출, 반납 등)</li>
            <li>비기능적 요구사항 3개 (성능, 보안 등)</li>
            <li>유스케이스 1개를 기본 흐름과 대안 흐름으로 작성</li>
          </ul>
        </div>

        <div className="callout-box">
          <h3>핵심 요약</h3>
          <ul>
            <li>요구사항은 기능적/비기능적으로 분류</li>
            <li>다양한 수집 기법을 상황에 맞게 활용</li>
            <li>유스케이스와 사용자 스토리로 요구사항을 구조화</li>
          </ul>
        </div>

        <div className="lesson-nav"><Link to="/intro/sdlc" className="lesson-nav-btn prev">&larr; 이전: SDLC 개요</Link><Link to="/intro/uml" className="lesson-nav-btn next">다음: UML 다이어그램 &rarr;</Link></div>
      </div></div></section>
    </>
  )
}

import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'

export default function Sdlc() {
  return (
    <>
      <SEOHead title="SDLC 개요" description="소프트웨어 개발 생명주기(SDLC)의 개념과 주요 모델을 학습합니다." />
      <section className="page-header"><div className="container"><h1>SDLC 개요</h1><p>소프트웨어 개발 생명주기의 각 단계를 이해합니다</p></div></section>

      <section className="section lesson-content"><div className="container"><div className="lesson-body">
        <h2>소프트웨어 개발 생명주기(SDLC)란?</h2>
        <p><strong>SDLC(Software Development Life Cycle)</strong>는 소프트웨어를 계획, 설계, 개발, 테스트, 배포, 유지보수하는 전체 과정을 체계적으로 정리한 프레임워크입니다.</p>
        <p>효율적인 소프트웨어 개발을 위해 각 단계의 목표와 산출물을 명확히 정의합니다.</p>

        <div className="callout-box">
          <h3>SDLC 핵심 단계</h3>
          <ul>
            <li><strong>1. 요구사항 분석</strong>: 고객의 요구를 수집하고 명세화</li>
            <li><strong>2. 시스템 설계</strong>: 아키텍처 및 상세 설계 수행</li>
            <li><strong>3. 구현(코딩)</strong>: 설계를 바탕으로 코드 작성</li>
            <li><strong>4. 테스트</strong>: 단위/통합/시스템/인수 테스트</li>
            <li><strong>5. 배포</strong>: 운영 환경에 시스템 설치</li>
            <li><strong>6. 유지보수</strong>: 오류 수정 및 기능 개선</li>
          </ul>
        </div>

        <h2>주요 SDLC 모델</h2>

        <h3>1. 폭포수 모델 (Waterfall)</h3>
        <p>각 단계를 순차적으로 진행하는 전통적 모델입니다. 요구사항이 명확하고 변경이 적은 프로젝트에 적합합니다.</p>

        <div className="code-block">
          <div className="code-header">폭포수 모델 흐름</div>
          <pre><code>{`요구분석 → 설계 → 구현 → 테스트 → 배포 → 유지보수
    ↓         ↓       ↓        ↓        ↓
  명세서     설계서   소스코드  테스트결과  운영시스템`}</code></pre>
        </div>

        <h3>2. 애자일 모델 (Agile)</h3>
        <p>짧은 반복(Sprint) 주기로 개발과 피드백을 반복합니다. 변경에 유연하게 대응할 수 있어 현재 가장 널리 사용됩니다.</p>

        <h3>3. V-모델</h3>
        <p>폭포수 모델의 확장으로, 각 개발 단계에 대응하는 테스트 단계를 정의합니다.</p>
        <div style={{overflowX:'auto'}}>
          <table className="lesson-table">
            <thead><tr><th>개발 단계</th><th>대응 테스트</th><th>설명</th></tr></thead>
            <tbody>
              <tr><td>요구분석</td><td>인수 테스트</td><td>고객 요구사항 충족 확인</td></tr>
              <tr><td>시스템 설계</td><td>시스템 테스트</td><td>전체 시스템 동작 검증</td></tr>
              <tr><td>상세 설계</td><td>통합 테스트</td><td>모듈 간 인터페이스 검증</td></tr>
              <tr><td>구현</td><td>단위 테스트</td><td>개별 모듈 기능 검증</td></tr>
            </tbody>
          </table>
        </div>

        <h3>4. 나선형 모델 (Spiral)</h3>
        <p>위험 분석을 핵심에 두고, 계획→위험분석→개발→평가를 반복합니다. 대규모 프로젝트에 적합합니다.</p>

        <h3>5. 프로토타입 모델</h3>
        <p>시제품을 먼저 만들어 고객의 피드백을 받고 요구사항을 구체화합니다.</p>

        <h2>SDLC 모델 비교</h2>
        <div style={{overflowX:'auto'}}>
          <table className="lesson-table">
            <thead><tr><th>모델</th><th>장점</th><th>단점</th><th>적합한 프로젝트</th></tr></thead>
            <tbody>
              <tr><td><strong>폭포수</strong></td><td>명확한 단계, 관리 용이</td><td>변경 대응 어려움</td><td>요구사항 확정 프로젝트</td></tr>
              <tr><td><strong>애자일</strong></td><td>유연한 변경, 빠른 피드백</td><td>문서 부족 가능</td><td>웹/모바일 서비스</td></tr>
              <tr><td><strong>V-모델</strong></td><td>테스트 체계적</td><td>반복 어려움</td><td>안전 중요 시스템</td></tr>
              <tr><td><strong>나선형</strong></td><td>위험 관리 우수</td><td>복잡, 비용 높음</td><td>대규모 시스템</td></tr>
            </tbody>
          </table>
        </div>

        <div className="exercise-box">
          <h3>연습: SDLC 모델 선택</h3>
          <p>다음 프로젝트에 적합한 SDLC 모델을 선택하고 이유를 설명해보세요.</p>
          <ul>
            <li>병원 의료 정보 시스템 (요구사항 명확, 안전 중요)</li>
            <li>스타트업 모바일 앱 (요구사항 변경 잦음)</li>
            <li>국방 무기 체계 (위험 분석 필수, 대규모)</li>
          </ul>
        </div>

        <div className="callout-box">
          <h3>핵심 요약</h3>
          <ul>
            <li>SDLC는 소프트웨어 개발의 전체 과정을 체계화한 프레임워크</li>
            <li>프로젝트 특성에 맞는 SDLC 모델을 선택하는 것이 중요</li>
            <li>현대 개발에서는 애자일 방법론이 가장 널리 사용됨</li>
          </ul>
        </div>

        <div className="lesson-nav"><Link to="/" className="lesson-nav-btn prev">&larr; 홈으로</Link><Link to="/intro/requirements" className="lesson-nav-btn next">다음: 요구분석 기법 &rarr;</Link></div>
      </div></div></section>
    </>
  )
}

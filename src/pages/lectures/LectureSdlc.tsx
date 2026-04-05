import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'

export default function LectureSdlc() {
  return (
    <>
      <SEOHead title="강의안: SDLC 개요" description="소프트웨어 개발 생명주기(SDLC)의 개념, 단계, 주요 모델을 강의합니다." />
      <section className="page-header"><div className="container"><h1>강의안: SDLC 개요</h1><p>소프트웨어 개발 생명주기의 각 단계와 주요 모델을 학습합니다</p></div></section>
      <section className="section lesson-content"><div className="container"><div className="lesson-body">
        <div className="callout-box"><h3>학습 목표</h3><ul><li>SDLC의 정의와 필요성을 이해한다</li><li>SDLC의 6단계(요구분석→설계→구현→테스트→배포→유지보수)를 설명할 수 있다</li><li>폭포수, 애자일, V-모델, 나선형 등 주요 모델의 특징과 차이점을 비교한다</li></ul></div>
        <h2>핵심 개념: SDLC란?</h2>
        <p><strong>SDLC(Software Development Life Cycle)</strong>는 소프트웨어를 계획부터 폐기까지 체계적으로 관리하는 프레임워크입니다. 각 단계의 산출물과 활동을 명확히 정의합니다.</p>
        <h2>강의 내용: SDLC 6단계</h2>
        <div style={{overflowX:'auto'}}><table className="lesson-table"><thead><tr><th>단계</th><th>활동</th><th>산출물</th></tr></thead><tbody>
          <tr><td><strong>1. 요구분석</strong></td><td>고객 요구 수집, 분석</td><td>요구사항 명세서(SRS)</td></tr>
          <tr><td><strong>2. 설계</strong></td><td>아키텍처/상세 설계</td><td>설계 문서, UML</td></tr>
          <tr><td><strong>3. 구현</strong></td><td>코딩, 단위 테스트</td><td>소스 코드</td></tr>
          <tr><td><strong>4. 테스트</strong></td><td>통합/시스템/인수 테스트</td><td>테스트 결과 보고서</td></tr>
          <tr><td><strong>5. 배포</strong></td><td>운영 환경 설치</td><td>운영 시스템</td></tr>
          <tr><td><strong>6. 유지보수</strong></td><td>오류 수정, 기능 개선</td><td>변경 요청서</td></tr>
        </tbody></table></div>
        <h2>주요 SDLC 모델 비교</h2>
        <div style={{overflowX:'auto'}}><table className="lesson-table"><thead><tr><th>모델</th><th>특징</th><th>장점</th><th>단점</th></tr></thead><tbody>
          <tr><td><strong>폭포수</strong></td><td>순차적 진행</td><td>관리 용이, 문서 체계적</td><td>변경 대응 어려움</td></tr>
          <tr><td><strong>애자일</strong></td><td>반복적 개발(Sprint)</td><td>유연한 변경, 빠른 피드백</td><td>문서 부족 가능</td></tr>
          <tr><td><strong>V-모델</strong></td><td>개발-테스트 대응</td><td>테스트 체계적</td><td>반복 어려움</td></tr>
          <tr><td><strong>나선형</strong></td><td>위험 분석 중심 반복</td><td>위험 관리 우수</td><td>복잡, 고비용</td></tr>
        </tbody></table></div>
        <div className="callout-box"><h3>강의 요약</h3><ul><li>SDLC는 소프트웨어 개발의 전 과정을 체계화한 프레임워크</li><li>6단계: 요구분석→설계→구현→테스트→배포→유지보수</li><li>프로젝트 특성에 맞는 모델 선택이 중요</li></ul></div>
        <div className="exercise-box"><h3>복습 문제</h3><ul><li><strong>Q1.</strong> SDLC의 6단계와 각 단계의 주요 산출물을 설명하세요.</li><li><strong>Q2.</strong> 웹 서비스 스타트업에 적합한 SDLC 모델은 무엇이며, 그 이유는?</li><li><strong>Q3.</strong> V-모델에서 "요구분석"에 대응하는 테스트는 무엇인가요?</li></ul></div>
        <div className="lesson-nav"><Link to="/lectures" className="lesson-nav-btn prev">&larr; 강의안 목록</Link><Link to="/lectures/requirements" className="lesson-nav-btn next">다음: 요구분석 기법 &rarr;</Link></div>
      </div></div></section>
    </>
  )
}

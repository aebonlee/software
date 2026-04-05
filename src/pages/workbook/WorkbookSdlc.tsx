import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'

export default function WorkbookSdlc() {
  return (
    <>
      <SEOHead title="워크북: SDLC 개요" description="SDLC 개념을 실습으로 익히는 워크북" />
      <section className="page-header"><div className="container"><h1>워크북: SDLC 개요</h1></div></section>
      <section className="section lesson-content"><div className="container">
        <div className="callout-box"><h3>실습 목표</h3><ul><li>SDLC의 6단계를 설명할 수 있다</li><li>프로젝트에 적합한 SDLC 모델을 선택할 수 있다</li></ul></div>
        <div className="exercise-box"><h3>빈칸 채우기</h3><ol><li>SDLC의 6단계: 요구분석 → ______ → 구현 → ______ → 배포 → ______</li><li>애자일 모델의 핵심 특징은 ______이다.</li><li>V-모델에서 "요구분석"에 대응하는 테스트는 ______이다.</li></ol></div>
        <div className="exercise-box"><h3>실습: SDLC 모델 선택</h3><p>다음 프로젝트에 적합한 SDLC 모델을 선택하고 이유를 적어보세요.</p><ul><li>병원 EMR 시스템 (요구사항 명확, 안전 중요)</li><li>소셜 미디어 스타트업 (빠른 출시, 피드백 반영)</li><li>국방 시스템 (위험 분석 필수, 대규모)</li></ul><textarea className="exercise-textarea" rows={6} placeholder="여기에 답변을 작성하세요..." /></div>
        <div className="exercise-box"><h3>자가 점검</h3><ul><li>SDLC의 각 단계와 산출물을 나열할 수 있는가?</li><li>폭포수, 애자일, V-모델의 장단점을 비교할 수 있는가?</li></ul></div>
        <div className="lesson-nav"><Link to="/workbook" className="lesson-nav-btn prev">&larr; 워크북 목록</Link><Link to="/workbook/requirements" className="lesson-nav-btn next">다음: 요구분석 기법 &rarr;</Link></div>
      </div></section>
    </>
  )
}

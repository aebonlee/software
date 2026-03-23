import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'

export default function WorkbookCreational() {
  return (
    <>
      <SEOHead title="워크북: 생성 패턴" description="Singleton, Factory, Builder 패턴을 실습으로 익히는 워크북" />
      <section className="page-header"><div className="container"><h1>워크북: 생성 패턴</h1></div></section>
      <section className="section lesson-content"><div className="container">
        <div className="callout-box"><h3>실습 목표</h3><ul><li>Singleton을 Thread-safe하게 구현한다</li><li>Factory Method로 객체 생성을 분리한다</li><li>Builder로 복잡한 객체를 단계별 생성한다</li></ul></div>
        <div className="exercise-box"><h3>실습 1: Singleton 구현</h3><p>Thread-safe한 Logger 클래스를 Singleton으로 구현하세요.</p><textarea className="exercise-textarea" rows="8" placeholder="public class Logger {\n    // Double-checked locking\n}" /></div>
        <div className="exercise-box"><h3>실습 2: Factory Method 구현</h3><p>문서 생성기 Factory를 구현하세요. PDF, Word, HTML 문서를 생성합니다.</p><textarea className="exercise-textarea" rows="8" placeholder="interface Document { void create(); }\n// ..." /></div>
        <div className="exercise-box"><h3>실습 3: Builder 구현</h3><p>Pizza 객체를 Builder 패턴으로 생성하세요. (도우, 소스, 토핑 선택)</p><textarea className="exercise-textarea" rows="8" placeholder={'Pizza pizza = new Pizza.Builder()\n    .dough("thin")\n    .sauce("tomato")\n    .build();'} /></div>
        <div className="lesson-nav"><Link to="/workbook/pattern-overview" className="lesson-nav-btn prev">&larr; 이전: 디자인 패턴 개요</Link><Link to="/workbook/structural" className="lesson-nav-btn next">다음: 구조 패턴 &rarr;</Link></div>
      </div></section>
    </>
  )
}

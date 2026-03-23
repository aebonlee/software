import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'

export default function WorkbookStructural() {
  return (
    <>
      <SEOHead title="워크북: 구조 패턴" description="Adapter, Decorator, Facade 패턴을 실습으로 익히는 워크북" />
      <section className="page-header"><div className="container"><h1>워크북: 구조 패턴</h1></div></section>
      <section className="section lesson-content"><div className="container">
        <div className="callout-box"><h3>실습 목표</h3><ul><li>Adapter로 호환되지 않는 인터페이스를 변환한다</li><li>Decorator로 동적으로 기능을 추가한다</li><li>Composite로 트리 구조를 구현한다</li></ul></div>
        <div className="exercise-box"><h3>실습 1: Adapter 구현</h3><p>레거시 PrinterV1(printText 메서드)을 새 Printer 인터페이스(print 메서드)에 맞게 어댑터를 구현하세요.</p><textarea className="exercise-textarea" rows="8" placeholder="interface Printer { void print(String msg); }\n// PrinterAdapter ..." /></div>
        <div className="exercise-box"><h3>실습 2: Decorator 구현</h3><p>커피 주문 시스템에 우유(+500원), 시럽(+300원), 휘핑크림(+700원) Decorator를 추가하세요.</p><textarea className="exercise-textarea" rows="8" placeholder="interface Coffee { double cost(); String desc(); }\n// MilkDecorator, SyrupDecorator ..." /></div>
        <div className="exercise-box"><h3>실습 3: Composite 구현</h3><p>파일 시스템(File, Folder)을 Composite 패턴으로 구현하세요. Folder는 File과 Folder를 포함할 수 있습니다.</p><textarea className="exercise-textarea" rows="8" placeholder="interface FileSystem { void display(int indent); }" /></div>
        <div className="lesson-nav"><Link to="/workbook/creational" className="lesson-nav-btn prev">&larr; 이전: 생성 패턴</Link><Link to="/workbook/behavioral" className="lesson-nav-btn next">다음: 행위 패턴 &rarr;</Link></div>
      </div></section>
    </>
  )
}

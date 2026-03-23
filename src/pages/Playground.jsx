import { useState, useCallback } from 'react'
import SEOHead from '../components/SEOHead'

const templates = [
  { name: '클래스 다이어그램', content: '// === 클래스 다이어그램: 온라인 쇼핑몰 ===\n\n[Class] User\n- id: int\n- name: String\n+ login(): boolean\n\n[Class] Order\n- orderId: int\n+ calculateTotal(): double\n\n[Class] Product\n- productId: int\n- price: double\n\nUser "1" --> "*" Order : places\nOrder "1" *-- "1..*" OrderItem : contains' },
  { name: 'Singleton 패턴', content: 'public class DatabaseConnection {\n    private static volatile DatabaseConnection instance;\n    private boolean connected;\n\n    private DatabaseConnection() {\n        this.connected = false;\n    }\n\n    public static DatabaseConnection getInstance() {\n        if (instance == null) {\n            synchronized (DatabaseConnection.class) {\n                if (instance == null) {\n                    instance = new DatabaseConnection();\n                }\n            }\n        }\n        return instance;\n    }\n}' },
  { name: 'Observer 패턴', content: 'public interface StockObserver {\n    void update(String symbol, double price);\n}\n\npublic interface StockSubject {\n    void registerObserver(StockObserver observer);\n    void removeObserver(StockObserver observer);\n    void notifyObservers();\n}\n\npublic class StockMarket implements StockSubject {\n    private List<StockObserver> observers = new ArrayList<>();\n    private double price;\n\n    @Override\n    public void registerObserver(StockObserver o) { observers.add(o); }\n\n    @Override\n    public void removeObserver(StockObserver o) { observers.remove(o); }\n\n    @Override\n    public void notifyObservers() {\n        for (StockObserver o : observers) o.update("STOCK", price);\n    }\n}' },
  { name: 'Factory 패턴', content: 'public interface Notification {\n    void send(String recipient, String message);\n}\n\npublic class EmailNotification implements Notification {\n    @Override\n    public void send(String r, String m) { System.out.println("[EMAIL]"); }\n}\n\npublic abstract class NotificationFactory {\n    public abstract Notification createNotification();\n}\n\npublic class EmailNotificationFactory extends NotificationFactory {\n    @Override\n    public Notification createNotification() { return new EmailNotification(); }\n}' }
]

function analyzeDesign(text) {
  if (!text.trim()) return { score: 0, maxScore: 100, categories: [], summary: '분석할 내용을 입력하세요.' }
  const result = { score: 0, maxScore: 100, categories: [], summary: '' }
  let totalScore = 0

  const uml = { name: 'UML 요소', score: 0, max: 25, items: [] }
  const classM = text.match(/\[?class\]?\s+\w+|public\s+class\s+\w+|abstract\s+class\s+\w+/gi)
  if (classM) { const c = new Set(classM.map(m => m.replace(/.*\s/, ''))).size; uml.items.push({ label: '클래스', value: `${c}개`, good: c >= 2 }); uml.score += Math.min(c * 3, 10) } else uml.items.push({ label: '클래스', value: '없음', good: false })
  const intM = text.match(/public\s+interface\s+\w+/gi)
  if (intM) { uml.items.push({ label: '인터페이스', value: `${intM.length}개`, good: true }); uml.score += Math.min(intM.length * 3, 8) } else uml.items.push({ label: '인터페이스', value: '없음', good: false })
  const rels = [/-->/g, /extends/gi, /implements/gi].reduce((n, p) => n + (text.match(p)?.length || 0), 0)
  uml.items.push({ label: '관계', value: rels > 0 ? `${rels}개` : '없음', good: rels > 0 }); uml.score += Math.min(rels * 2, 7)
  uml.score = Math.min(uml.score, uml.max); result.categories.push(uml); totalScore += uml.score

  const pat = { name: '디자인 패턴', score: 0, max: 25, items: [] }
  const pats = [['Singleton', /singleton|getinstance|private static.*instance/i], ['Factory', /factory|createnotification|abstract.*create/i], ['Observer', /observer|subject|registerobserver|notifyobservers/i], ['Strategy', /strategy|setstrategy/i], ['Decorator', /decorator|wrappee/i]]
  const found = pats.filter(([, r]) => r.test(text)).map(([n]) => n)
  pat.items.push({ label: '감지된 패턴', value: found.length ? found.join(', ') : '없음', good: found.length > 0 }); pat.score = Math.min(found.length * 8, 25)
  result.categories.push(pat); totalScore += pat.score

  const solid = { name: 'SOLID 원칙', score: 0, max: 25, items: [] }
  if (intM || /abstract/i.test(text)) { solid.items.push({ label: 'OCP', value: '추상화 구조', good: true }); solid.score += 8 } else solid.items.push({ label: 'OCP', value: '미확인', good: false })
  if (/extends|implements/i.test(text)) { solid.items.push({ label: 'LSP', value: '상속 구조', good: true }); solid.score += 8 } else solid.items.push({ label: 'LSP', value: '미확인', good: false })
  if (intM && intM.length >= 2) { solid.items.push({ label: 'ISP', value: '인터페이스 분리', good: true }); solid.score += 9 } else solid.items.push({ label: 'ISP', value: '미확인', good: false })
  solid.score = Math.min(solid.score, solid.max); result.categories.push(solid); totalScore += solid.score

  const oop = { name: 'OOP & 코드 품질', score: 0, max: 25, items: [] }
  const priv = text.match(/private\s+\w+/g)?.length || 0
  oop.items.push({ label: '캡슐화', value: priv > 0 ? `private ${priv}개` : '미확인', good: priv > 0 }); oop.score += priv > 0 ? 8 : 0
  const over = text.match(/@Override/g)?.length || 0
  oop.items.push({ label: '다형성', value: over > 0 ? `@Override ${over}개` : '미확인', good: over > 0 }); oop.score += over > 0 ? 8 : 0
  const comments = text.match(/\/\/.+/g)?.length || 0
  oop.items.push({ label: '주석', value: comments > 0 ? `${comments}개` : '없음', good: comments >= 3 }); oop.score += Math.min(comments * 3, 9)
  oop.score = Math.min(oop.score, oop.max); result.categories.push(oop); totalScore += oop.score

  result.score = totalScore
  const pct = (totalScore / 100) * 100
  result.summary = pct >= 70 ? '우수한 설계입니다! OOP 원칙과 디자인 패턴이 잘 적용되어 있습니다.' : pct >= 40 ? '양호한 설계입니다. 패턴 활용을 강화해보세요.' : '기초적 설계입니다. UML과 디자인 패턴을 더 활용해보세요.'
  return result
}

export default function Playground() {
  const [input, setInput] = useState('')
  const [analysis, setAnalysis] = useState(null)
  const [activeTemplate, setActiveTemplate] = useState(null)
  const handleAnalyze = useCallback(() => setAnalysis(analyzeDesign(input)), [input])

  return (
    <div className="playground-page">
      <SEOHead title="실습 - UML & 패턴 분석기" description="UML 다이어그램과 디자인 패턴 코드를 분석합니다." />
      <div className="container">
        <div className="pg-header"><h1 className="pg-title">UML & 패턴 분석기</h1><p className="pg-desc">클래스 다이어그램, 디자인 패턴 코드를 입력하면 설계 품질을 평가합니다.</p></div>
        <div className="pg-templates"><span className="pg-templates-label">템플릿:</span><div className="pg-templates-list">{templates.map((t, i) => (<button key={i} className={`pg-template-btn${activeTemplate === i ? ' active' : ''}`} onClick={() => { setInput(t.content); setActiveTemplate(i); setAnalysis(null) }}>{t.name}</button>))}</div></div>
        <div className="pg-workspace">
          <div className="pg-input-section">
            <div className="pg-section-header"><h3>설계 입력</h3><span className="pg-char-count">{input.length}자</span></div>
            <textarea className="pg-textarea" value={input} onChange={e => { setInput(e.target.value); setAnalysis(null); setActiveTemplate(null) }} placeholder={'UML 다이어그램 또는 디자인 패턴 코드를 입력하세요.'} rows={20} />
            <button className="pg-analyze-btn" onClick={handleAnalyze} disabled={!input.trim()}>설계 분석하기</button>
          </div>
          <div className="pg-result-section">
            <div className="pg-section-header"><h3>분석 결과</h3></div>
            {!analysis ? (<div className="pg-empty"><p>왼쪽에 설계 내용을 입력하고 "설계 분석하기"를 클릭하세요.</p></div>) : (
              <div className="pg-analysis">
                <div className="pg-total-score"><div className="pg-total-score-circle" data-level={analysis.score >= 70 ? 'good' : analysis.score >= 40 ? 'warn' : 'bad'}><span className="pg-total-score-value">{analysis.score}</span><span className="pg-total-score-unit">점</span></div></div>
                <p className="pg-summary">{analysis.summary}</p>
                {analysis.categories.map((cat, ci) => (
                  <div key={ci} className="pg-category">
                    <div className="pg-category-header"><span className="pg-category-name">{cat.name}</span><span className="pg-category-score">{cat.score}/{cat.max}</span></div>
                    <div className="pg-score-bar"><div className="pg-score-bar-fill" style={{ width: `${(cat.score / cat.max) * 100}%`, backgroundColor: cat.score / cat.max >= 0.7 ? '#22c55e' : cat.score / cat.max >= 0.4 ? '#eab308' : '#ef4444' }} /></div>
                    <ul className="pg-category-items">{cat.items.map((item, ii) => (<li key={ii} className={`pg-item ${item.good ? 'good' : 'warn'}`}><span className="pg-item-icon">{item.good ? '\u2713' : '\u2717'}</span><span className="pg-item-label">{item.label}</span><span className="pg-item-value">{item.value}</span></li>))}</ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

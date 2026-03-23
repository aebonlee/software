import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'

const curriculum = [
  { step: 'STEP 01', icon: 'fa-solid fa-diagram-project', title: 'SDLC 개요', desc: '소프트웨어 개발 생명주기(SDLC)의 개념과 다양한 모델을 이해합니다.', path: '/intro/sdlc', topics: 'Waterfall · Agile · Spiral' },
  { step: 'STEP 02', icon: 'fa-solid fa-clipboard-check', title: '요구분석 기법', desc: '요구사항 수집, 분석, 명세화 방법론을 학습합니다.', path: '/intro/requirements', topics: '기능 · 비기능 · SRS' },
  { step: 'STEP 03', icon: 'fa-solid fa-sitemap', title: 'UML 다이어그램', desc: '클래스, 시퀀스, 유스케이스 등 UML 다이어그램을 학습합니다.', path: '/intro/uml', topics: 'Class · Sequence · UseCase' },
  { step: 'STEP 04', icon: 'fa-solid fa-scale-balanced', title: 'SOLID 원칙', desc: '객체지향 설계의 5대 원칙인 SOLID를 심층 학습합니다.', path: '/principles/solid', topics: 'SRP · OCP · LSP · ISP · DIP' },
  { step: 'STEP 05', icon: 'fa-solid fa-puzzle-piece', title: '디자인 패턴 개요', desc: 'GoF 디자인 패턴의 분류와 핵심 개념을 이해합니다.', path: '/principles/pattern-overview', topics: 'GoF · 생성 · 구조 · 행위' },
  { step: 'STEP 06', icon: 'fa-solid fa-cubes', title: '생성 패턴', desc: 'Singleton, Factory, Builder 등 객체 생성 패턴을 학습합니다.', path: '/patterns/creational', topics: 'Singleton · Factory · Builder' },
  { step: 'STEP 07', icon: 'fa-solid fa-layer-group', title: '구조 패턴', desc: 'Adapter, Decorator, Proxy 등 구조 패턴을 학습합니다.', path: '/patterns/structural', topics: 'Adapter · Decorator · Proxy' },
  { step: 'STEP 08', icon: 'fa-solid fa-arrows-turn-to-dots', title: '행위 패턴', desc: 'Observer, Strategy, Command 등 행위 패턴을 학습합니다.', path: '/patterns/behavioral', topics: 'Observer · Strategy · Command' },
  { step: 'STEP 09', icon: 'fa-solid fa-object-group', title: 'OOP 구현', desc: '캡슐화, 상속, 다형성, 추상화를 코드로 구현합니다.', path: '/practice/oop', topics: '캡슐화 · 상속 · 다형성' },
  { step: 'STEP 10', icon: 'fa-solid fa-vial', title: 'TDD 기초', desc: 'Test-Driven Development의 Red-Green-Refactor 사이클을 학습합니다.', path: '/practice/tdd', topics: 'Red · Green · Refactor' },
  { step: 'STEP 11', icon: 'fa-solid fa-wand-magic-sparkles', title: '리팩토링', desc: '코드 스멜을 식별하고 리팩토링 기법을 적용합니다.', path: '/practice/refactoring', topics: 'Code Smell · Extract · Move' },
]

const features = [
  { icon: 'fa-solid fa-code', title: '코드 중심 학습', desc: '매 챕터마다 실제 Java/Python 코드로 설계 패턴을 구현하고 비교합니다.' },
  { icon: 'fa-solid fa-diagram-project', title: 'UML 다이어그램 실습', desc: '클래스 다이어그램, 시퀀스 다이어그램을 직접 작성하며 설계 역량을 키웁니다.' },
  { icon: 'fa-solid fa-clipboard-list', title: 'SOLID 원칙 체크리스트', desc: '실무 코드에서 SOLID 원칙 위반을 식별하고 개선하는 방법을 훈련합니다.' }
]

const targets = [
  { icon: 'fa-solid fa-laptop-code', title: 'SW 개발자', desc: '설계 원칙을 코드에 적용하고 싶은 개발자' },
  { icon: 'fa-solid fa-graduation-cap', title: 'CS 전공자', desc: '소프트웨어공학 과목을 체계적으로 학습하고 싶은 학생' },
  { icon: 'fa-solid fa-user-tie', title: 'SW 아키텍트 지망생', desc: '설계 패턴과 아키텍처를 심층 학습하고 싶은 분' }
]

export default function Home() {
  return (
    <>
      <SEOHead />
      <section className="hero">
        <div className="hero-bg-effect">
          <div className="particles">
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i} className="particle" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, width: `${3 + Math.random() * 5}px`, height: `${3 + Math.random() * 5}px`, '--duration': `${15 + Math.random() * 15}s`, animationDelay: `${Math.random() * 10}s` }} />
            ))}
          </div>
        </div>
        <div className="container hero-content">
          <div className="hero-badge">Software Design &amp; Implementation</div>
          <h1 className="hero-title"><span className="hero-highlight">소프트웨어 설계</span>의 원칙부터<br /><span className="hero-highlight">구현</span>까지 체계적으로</h1>
          <p className="hero-desc">SDLC, UML, SOLID, 디자인 패턴, OOP, TDD까지<br />실무 중심의 소프트웨어 설계 역량을 키웁니다.</p>
          <div className="hero-actions">
            <Link to="/intro/sdlc" className="hero-btn primary">학습 시작하기</Link>
            <Link to="/lectures" className="hero-btn secondary">강의안 보기</Link>
          </div>
          <div className="hero-stats">
            <div className="hero-stat"><div className="hero-stat-num">11</div><div className="hero-stat-label">학습 단계</div></div>
            <div className="hero-stat"><div className="hero-stat-num">23+</div><div className="hero-stat-label">디자인 패턴</div></div>
            <div className="hero-stat"><div className="hero-stat-num">5</div><div className="hero-stat-label">SOLID 원칙</div></div>
          </div>
        </div>
      </section>
      <section className="section curriculum" id="curriculum">
        <div className="container">
          <div className="section-header"><h2 className="section-title">커리큘럼</h2><p className="section-desc">SDLC부터 TDD까지, 11단계로 구성된 체계적인 학습 과정</p></div>
          <div className="curriculum-grid">
            {curriculum.map((item, i) => (
              <Link to={item.path} key={i} className="curriculum-card">
                <div className="curriculum-step">{item.step}</div>
                <div className="curriculum-icon"><i className={item.icon} /></div>
                <h3 className="curriculum-title">{item.title}</h3>
                <p className="curriculum-desc">{item.desc}</p>
                <div className="curriculum-topics">{item.topics}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section features">
        <div className="container">
          <div className="section-header"><h2 className="section-title">학습 특징</h2><p className="section-desc">실무에서 바로 적용 가능한 설계 역량을 키웁니다</p></div>
          <div className="features-grid">
            {features.map((f, i) => (<div key={i} className="feature-card"><div className="feature-icon"><i className={f.icon} /></div><h3 className="feature-title">{f.title}</h3><p className="feature-desc">{f.desc}</p></div>))}
          </div>
        </div>
      </section>
      <section className="section targets">
        <div className="container">
          <div className="section-header"><h2 className="section-title">이런 분께 추천합니다</h2></div>
          <div className="targets-grid">
            {targets.map((t, i) => (<div key={i} className="target-card"><div className="target-icon"><i className={t.icon} /></div><h3 className="target-title">{t.title}</h3><p className="target-desc">{t.desc}</p></div>))}
          </div>
        </div>
      </section>
      <section className="section cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">지금 바로 학습을 시작하세요</h2>
            <p className="cta-desc">SDLC의 기초부터 디자인 패턴, TDD까지 체계적으로 학습합니다.</p>
            <Link to="/intro/sdlc" className="cta-btn">STEP 01 시작하기</Link>
          </div>
        </div>
      </section>
    </>
  )
}

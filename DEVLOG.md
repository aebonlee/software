# SW Design - 개발일지

## 프로젝트 개요
- **프로젝트명**: SW Design (소프트웨어 설계 & 구현)
- **URL**: https://software.dreamitbiz.com
- **기술 스택**: React 19 + Vite 7 + Supabase + React Router 7
- **인증**: Google OAuth, Kakao OAuth, Email/Password (Supabase Auth PKCE)
- **배포**: GitHub Pages (gh-pages)

## 커리큘럼 (11단계)
1. SDLC 개요
2. 요구분석 기법
3. UML 다이어그램
4. SOLID 원칙
5. 디자인 패턴 개요
6. 생성 패턴 (Singleton, Factory Method, Builder, Abstract Factory, Prototype)
7. 구조 패턴 (Adapter, Decorator, Facade, Composite, Proxy, Bridge, Flyweight)
8. 행위 패턴 (Observer, Strategy, Command, State, Template Method 등)
9. OOP 구현 (캡슐화, 상속, 다형성, 추상화)
10. TDD 기초 (Red-Green-Refactor, JUnit 5)
11. 리팩토링 (코드 스멜, Extract Method, Replace Conditional)

## 2026-03-23: 초기 구축

### 프로젝트 초기화
- Vite + React 프로젝트 생성
- Supabase 클라이언트 설정 (PKCE flow)
- Google/Kakao OAuth 설정
- CSS 테마 시스템 (5색 테마 + 다크모드, glassmorphism)
- SPA 라우팅 (404.html 복사로 GitHub Pages SPA 지원)

### 핵심 구성 요소 생성
- **config**: supabase.js, site.js (메뉴, 브랜드, 테마 색상)
- **contexts**: ThemeContext (5색 테마 + 다크모드), AuthContext (Google/Kakao/Email)
- **components**: Navbar, Footer, PublicLayout, SEOHead, ProtectedRoute
- **hooks**: useCodeCopy (코드 블록 복사 기능)
- **services**: communityService, lectureService, workbookService (Supabase CRUD)
- **styles**: 11개 CSS 파일 (base, navbar, hero, footer, animations, site, auth, community, lectures, dark-mode, responsive)

### 페이지 생성 (총 50개)
**메인 페이지 (6개)**
- Home (히어로, 커리큘럼 그리드, 특징, CTA)
- Login (Google/Kakao/Email 로그인)
- Register (회원가입)
- Profile (프로필 정보)
- NotFound (404)
- Playground (UML & 패턴 분석기)

**학습 콘텐츠 (11개)**
- intro: Sdlc, Requirements, Uml
- principles: Solid, PatternOverview
- patterns: Creational, Structural, Behavioral
- practice: Oop, Tdd, Refactoring

**강의안 (14개)**
- LecturesHome, LectureWrite, LectureDetail
- LectureSdlc ~ LectureRefactoring (11개 주차별)

**워크북 (14개)**
- WorkbookHome, WorkbookWrite, WorkbookDetail
- WorkbookSdlc ~ WorkbookRefactoring (11개 주차별)

**커뮤니티 (3개)**
- CommunityList, CommunityWrite, CommunityView

**유틸리티 (2개)**
- References (참고문서 링크)
- Favorites (즐겨찾기)

### 기술적 특징
- Lazy loading: 모든 페이지 컴포넌트를 React.lazy()로 동적 로딩
- OG Meta Tags: SEOHead 컴포넌트로 페이지별 OG 태그 자동 생성
- OG Image: sharp 패키지로 1200x630px OG 이미지 생성
- DB 테이블: sd_posts, sd_comments, sd_lectures, sd_workbooks (sd_ prefix)
- RPC: sd_increment_lecture_views, sd_increment_workbook_views

### 빌드 결과
- 빌드 시간: ~3초
- 총 모듈: 145개
- 메인 번들: ~448KB (gzip: ~132KB)
- CSS: ~57KB (gzip: ~10KB)

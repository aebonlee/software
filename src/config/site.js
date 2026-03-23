const site = {
  name: 'SW Design',
  nameKo: '소프트웨어 설계 & 구현',
  description: '소프트웨어 설계 원칙부터 UML, 디자인 패턴, OOP, TDD까지 체계적으로 학습합니다.',
  url: 'https://software.dreamitbiz.com',
  brand: {
    parts: [
      { text: 'SW', className: 'brand-ai' },
      { text: ' Design', className: 'brand-prompt' }
    ]
  },
  themeColor: '#0046C8',
  colorThemes: [
    { name: 'blue', color: '#0046C8', label: 'Blue' },
    { name: 'purple', color: '#7C3AED', label: 'Purple' },
    { name: 'green', color: '#059669', label: 'Green' },
    { name: 'rose', color: '#E11D48', label: 'Rose' },
    { name: 'orange', color: '#EA580C', label: 'Orange' }
  ],
  menuItems: [
    {
      label: 'SW개론',
      path: '/intro/sdlc',
      children: [
        { label: 'SDLC 개요', path: '/intro/sdlc' },
        { label: '요구분석 기법', path: '/intro/requirements' },
        { label: 'UML 다이어그램', path: '/intro/uml' }
      ]
    },
    {
      label: '설계 원칙',
      path: '/principles/solid',
      children: [
        { label: 'SOLID 원칙', path: '/principles/solid' },
        { label: '디자인 패턴 개요', path: '/principles/pattern-overview' }
      ]
    },
    {
      label: '디자인 패턴',
      path: '/patterns/creational',
      children: [
        { label: '생성 패턴', path: '/patterns/creational' },
        { label: '구조 패턴', path: '/patterns/structural' },
        { label: '행위 패턴', path: '/patterns/behavioral' }
      ]
    },
    {
      label: 'OOP & TDD',
      path: '/practice/oop',
      children: [
        { label: 'OOP 구현', path: '/practice/oop' },
        { label: 'TDD 기초', path: '/practice/tdd' },
        { label: '리팩토링', path: '/practice/refactoring' }
      ]
    },
    { label: '실습', path: '/playground' },
    {
      label: '강의안',
      path: '/lectures',
      children: [
        { label: '강의안 목록', path: '/lectures' },
        { label: '강의안 등록', path: '/lectures/write' }
      ]
    },
    {
      label: '실습워크북',
      path: '/workbook',
      children: [
        { label: '워크북 목록', path: '/workbook' },
        { label: '워크북 등록', path: '/workbook/write' }
      ]
    },
    { label: '참고문서', path: '/references' },
    { label: '즐겨찾기', path: '/favorites' },
    {
      label: '커뮤니티',
      path: '/community',
      children: [
        { label: '게시판', path: '/community' },
        { label: '글쓰기', path: '/community/write' }
      ]
    }
  ],
  footerLinks: [
    { label: 'SDLC 개요', path: '/intro/sdlc' },
    { label: '요구분석', path: '/intro/requirements' },
    { label: 'UML', path: '/intro/uml' },
    { label: 'SOLID 원칙', path: '/principles/solid' },
    { label: '생성 패턴', path: '/patterns/creational' },
    { label: 'OOP 구현', path: '/practice/oop' },
    { label: 'TDD 기초', path: '/practice/tdd' },
    { label: '리팩토링', path: '/practice/refactoring' }
  ],
  familySites: [
    { name: 'DreamIT Biz (본사이트)', url: 'https://www.dreamitbiz.com' },
    { name: 'AI Prompt 프롬프트 엔지니어링', url: 'https://ai-prompt.dreamitbiz.com' },
    { name: 'AI Data 데이터 분석', url: 'https://ai-data.dreamitbiz.com' },
    { name: 'DB Study 데이터베이스', url: 'https://db-study.dreamitbiz.com' },
    { name: 'KoreaTech 한국기술교육', url: 'https://koreatech.dreamitbiz.com' }
  ]
}

export default site

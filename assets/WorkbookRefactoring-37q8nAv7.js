import{j as e,L as r}from"./index-Bkh7mmB8.js";import{S as s}from"./SEOHead-C3bBADFE.js";function l(){return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"워크북: 리팩토링",description:"코드 스멜 식별과 리팩토링 기법을 실습으로 익히는 워크북"}),e.jsx("section",{className:"page-header",children:e.jsx("div",{className:"container",children:e.jsx("h1",{children:"워크북: 리팩토링"})})}),e.jsx("section",{className:"section lesson-content",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:"실습 목표"}),e.jsxs("ul",{children:[e.jsx("li",{children:"코드 스멜을 식별한다"}),e.jsx("li",{children:"Extract Method, Replace Conditional with Polymorphism을 적용한다"})]})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:"실습 1: Extract Method"}),e.jsx("p",{children:"아래 코드에서 의미 있는 단위를 추출하세요."}),e.jsx("pre",{style:{background:"var(--bg-tertiary)",padding:"1rem",borderRadius:"8px",fontSize:"0.85rem"},children:e.jsx("code",{children:`void processOrder(Order order) {
    // 가격 계산
    double total = 0;
    for (Item item : order.items) {
        total += item.price * item.qty;
        if (item.qty > 10) total -= item.price * item.qty * 0.1;
    }
    // 배송비 계산
    double shipping = total > 50000 ? 0 : 3000;
    // 출력
    System.out.println("합계: " + total);
    System.out.println("배송비: " + shipping);
    System.out.println("총액: " + (total + shipping));
}`})}),e.jsx("textarea",{className:"exercise-textarea",rows:"10",placeholder:"리팩토링한 코드를 작성하세요...\\nvoid processOrder(Order order) {\\n    double total = calculateTotal(order);\\n    ..."})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:"실습 2: 조건문을 다형성으로 대체"}),e.jsx("p",{children:"아래 switch문을 다형성으로 리팩토링하세요."}),e.jsx("pre",{style:{background:"var(--bg-tertiary)",padding:"1rem",borderRadius:"8px",fontSize:"0.85rem"},children:e.jsx("code",{children:`double getDiscount(String memberType) {
    switch (memberType) {
        case "GOLD": return 0.2;
        case "SILVER": return 0.1;
        case "BRONZE": return 0.05;
        default: return 0;
    }
}`})}),e.jsx("textarea",{className:"exercise-textarea",rows:"8",placeholder:"interface Member { double getDiscount(); }\\n// GoldMember, SilverMember, ..."})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:"자가 점검"}),e.jsxs("ul",{children:[e.jsx("li",{children:"코드 스멜 3가지를 나열할 수 있는가?"}),e.jsx("li",{children:"Extract Method 리팩토링을 수행할 수 있는가?"}),e.jsx("li",{children:"조건문을 다형성으로 대체할 수 있는가?"})]})]}),e.jsxs("div",{className:"lesson-nav",children:[e.jsx(r,{to:"/workbook/tdd",className:"lesson-nav-btn prev",children:"← 이전: TDD 기초"}),e.jsx(r,{to:"/workbook",className:"lesson-nav-btn next",children:"워크북 목록 →"})]})]})})]})}export{l as default};

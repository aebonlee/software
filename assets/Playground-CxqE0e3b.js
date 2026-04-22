import{r as b,j as e}from"./index-BCZct2W-.js";import{S as j}from"./SEOHead-BIDcqaVp.js";const f=[{name:"클래스 다이어그램",content:`// === 클래스 다이어그램: 온라인 쇼핑몰 ===

[Class] User
- id: int
- name: String
+ login(): boolean

[Class] Order
- orderId: int
+ calculateTotal(): double

[Class] Product
- productId: int
- price: double

User "1" --> "*" Order : places
Order "1" *-- "1..*" OrderItem : contains`},{name:"Singleton 패턴",content:`public class DatabaseConnection {
    private static volatile DatabaseConnection instance;
    private boolean connected;

    private DatabaseConnection() {
        this.connected = false;
    }

    public static DatabaseConnection getInstance() {
        if (instance == null) {
            synchronized (DatabaseConnection.class) {
                if (instance == null) {
                    instance = new DatabaseConnection();
                }
            }
        }
        return instance;
    }
}`},{name:"Observer 패턴",content:`public interface StockObserver {
    void update(String symbol, double price);
}

public interface StockSubject {
    void registerObserver(StockObserver observer);
    void removeObserver(StockObserver observer);
    void notifyObservers();
}

public class StockMarket implements StockSubject {
    private List<StockObserver> observers = new ArrayList<>();
    private double price;

    @Override
    public void registerObserver(StockObserver o) { observers.add(o); }

    @Override
    public void removeObserver(StockObserver o) { observers.remove(o); }

    @Override
    public void notifyObservers() {
        for (StockObserver o : observers) o.update("STOCK", price);
    }
}`},{name:"Factory 패턴",content:`public interface Notification {
    void send(String recipient, String message);
}

public class EmailNotification implements Notification {
    @Override
    public void send(String r, String m) { System.out.println("[EMAIL]"); }
}

public abstract class NotificationFactory {
    public abstract Notification createNotification();
}

public class EmailNotificationFactory extends NotificationFactory {
    @Override
    public Notification createNotification() { return new EmailNotification(); }
}`}];function S(n){if(!n.trim())return{score:0,maxScore:100,categories:[],summary:"분석할 내용을 입력하세요."};const c={score:0,maxScore:100,categories:[],summary:""};let r=0;const a={name:"UML 요소",score:0,max:25,items:[]},u=n.match(/\[?class\]?\s+\w+|public\s+class\s+\w+|abstract\s+class\s+\w+/gi);if(u){const m=new Set(u.map(x=>x.replace(/.*\s/,""))).size;a.items.push({label:"클래스",value:`${m}개`,good:m>=2}),a.score+=Math.min(m*3,10)}else a.items.push({label:"클래스",value:"없음",good:!1});const o=n.match(/public\s+interface\s+\w+/gi);o?(a.items.push({label:"인터페이스",value:`${o.length}개`,good:!0}),a.score+=Math.min(o.length*3,8)):a.items.push({label:"인터페이스",value:"없음",good:!1});const p=[/-->/g,/extends/gi,/implements/gi].reduce((m,x)=>m+(n.match(x)?.length||0),0);a.items.push({label:"관계",value:p>0?`${p}개`:"없음",good:p>0}),a.score+=Math.min(p*2,7),a.score=Math.min(a.score,a.max),c.categories.push(a),r+=a.score;const s={name:"디자인 패턴",score:0,max:25,items:[]},l=[["Singleton",/singleton|getinstance|private static.*instance/i],["Factory",/factory|createnotification|abstract.*create/i],["Observer",/observer|subject|registerobserver|notifyobservers/i],["Strategy",/strategy|setstrategy/i],["Decorator",/decorator|wrappee/i]].filter(([,m])=>m.test(n)).map(([m])=>m);s.items.push({label:"감지된 패턴",value:l.length?l.join(", "):"없음",good:l.length>0}),s.score=Math.min(l.length*8,25),c.categories.push(s),r+=s.score;const t={name:"SOLID 원칙",score:0,max:25,items:[]};o||/abstract/i.test(n)?(t.items.push({label:"OCP",value:"추상화 구조",good:!0}),t.score+=8):t.items.push({label:"OCP",value:"미확인",good:!1}),/extends|implements/i.test(n)?(t.items.push({label:"LSP",value:"상속 구조",good:!0}),t.score+=8):t.items.push({label:"LSP",value:"미확인",good:!1}),o&&o.length>=2?(t.items.push({label:"ISP",value:"인터페이스 분리",good:!0}),t.score+=9):t.items.push({label:"ISP",value:"미확인",good:!1}),t.score=Math.min(t.score,t.max),c.categories.push(t),r+=t.score;const i={name:"OOP & 코드 품질",score:0,max:25,items:[]},g=n.match(/private\s+\w+/g)?.length||0;i.items.push({label:"캡슐화",value:g>0?`private ${g}개`:"미확인",good:g>0}),i.score+=g>0?8:0;const v=n.match(/@Override/g)?.length||0;i.items.push({label:"다형성",value:v>0?`@Override ${v}개`:"미확인",good:v>0}),i.score+=v>0?8:0;const h=n.match(/\/\/.+/g)?.length||0;i.items.push({label:"주석",value:h>0?`${h}개`:"없음",good:h>=3}),i.score+=Math.min(h*3,9),i.score=Math.min(i.score,i.max),c.categories.push(i),r+=i.score,c.score=r;const N=r/100*100;return c.summary=N>=70?"우수한 설계입니다! OOP 원칙과 디자인 패턴이 잘 적용되어 있습니다.":N>=40?"양호한 설계입니다. 패턴 활용을 강화해보세요.":"기초적 설계입니다. UML과 디자인 패턴을 더 활용해보세요.",c}function M(){const[n,c]=b.useState(""),[r,a]=b.useState(null),[u,o]=b.useState(null),p=b.useCallback(()=>a(S(n)),[n]);return e.jsxs("div",{className:"playground-page",children:[e.jsx(j,{title:"실습 - UML & 패턴 분석기",description:"UML 다이어그램과 디자인 패턴 코드를 분석합니다."}),e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"pg-header",children:[e.jsx("h1",{className:"pg-title",children:"UML & 패턴 분석기"}),e.jsx("p",{className:"pg-desc",children:"클래스 다이어그램, 디자인 패턴 코드를 입력하면 설계 품질을 평가합니다."})]}),e.jsxs("div",{className:"pg-templates",children:[e.jsx("span",{className:"pg-templates-label",children:"템플릿:"}),e.jsx("div",{className:"pg-templates-list",children:f.map((s,d)=>e.jsx("button",{className:`pg-template-btn${u===d?" active":""}`,onClick:()=>{c(s.content),o(d),a(null)},children:s.name},d))})]}),e.jsxs("div",{className:"pg-workspace",children:[e.jsxs("div",{className:"pg-input-section",children:[e.jsxs("div",{className:"pg-section-header",children:[e.jsx("h3",{children:"설계 입력"}),e.jsxs("span",{className:"pg-char-count",children:[n.length,"자"]})]}),e.jsx("textarea",{className:"pg-textarea",value:n,onChange:s=>{c(s.target.value),a(null),o(null)},placeholder:"UML 다이어그램 또는 디자인 패턴 코드를 입력하세요.",rows:20}),e.jsx("button",{className:"pg-analyze-btn",onClick:p,disabled:!n.trim(),children:"설계 분석하기"})]}),e.jsxs("div",{className:"pg-result-section",children:[e.jsx("div",{className:"pg-section-header",children:e.jsx("h3",{children:"분석 결과"})}),r?e.jsxs("div",{className:"pg-analysis",children:[e.jsx("div",{className:"pg-total-score",children:e.jsxs("div",{className:"pg-total-score-circle","data-level":r.score>=70?"good":r.score>=40?"warn":"bad",children:[e.jsx("span",{className:"pg-total-score-value",children:r.score}),e.jsx("span",{className:"pg-total-score-unit",children:"점"})]})}),e.jsx("p",{className:"pg-summary",children:r.summary}),r.categories.map((s,d)=>e.jsxs("div",{className:"pg-category",children:[e.jsxs("div",{className:"pg-category-header",children:[e.jsx("span",{className:"pg-category-name",children:s.name}),e.jsxs("span",{className:"pg-category-score",children:[s.score,"/",s.max]})]}),e.jsx("div",{className:"pg-score-bar",children:e.jsx("div",{className:"pg-score-bar-fill",style:{width:`${s.score/s.max*100}%`,backgroundColor:s.score/s.max>=.7?"#22c55e":s.score/s.max>=.4?"#eab308":"#ef4444"}})}),e.jsx("ul",{className:"pg-category-items",children:s.items.map((l,t)=>e.jsxs("li",{className:`pg-item ${l.good?"good":"warn"}`,children:[e.jsx("span",{className:"pg-item-icon",children:l.good?"✓":"✗"}),e.jsx("span",{className:"pg-item-label",children:l.label}),e.jsx("span",{className:"pg-item-value",children:l.value})]},t))})]},d))]}):e.jsx("div",{className:"pg-empty",children:e.jsx("p",{children:'왼쪽에 설계 내용을 입력하고 "설계 분석하기"를 클릭하세요.'})})]})]})]})]})}export{M as default};

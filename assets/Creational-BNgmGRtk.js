import{j as i,L as e}from"./index-Bkh7mmB8.js";import{S as s}from"./SEOHead-C3bBADFE.js";function c(){return i.jsxs(i.Fragment,{children:[i.jsx(s,{title:"생성 패턴",description:"Singleton, Factory Method, Abstract Factory, Builder, Prototype 등 생성 디자인 패턴을 학습합니다."}),i.jsx("section",{className:"page-header",children:i.jsxs("div",{className:"container",children:[i.jsx("h1",{children:"생성 패턴 (Creational Patterns)"}),i.jsx("p",{children:"객체 생성 메커니즘을 다루는 5가지 디자인 패턴"})]})}),i.jsx("section",{className:"section lesson-content",children:i.jsx("div",{className:"container",children:i.jsxs("div",{className:"lesson-body",children:[i.jsx("h2",{children:"생성 패턴이란?"}),i.jsx("p",{children:"생성 패턴은 객체의 생성 과정을 추상화하여 시스템이 어떤 구체적인 클래스의 인스턴스를 사용하는지에 독립적이도록 합니다."}),i.jsx("h2",{children:"1. Singleton 패턴"}),i.jsx("p",{children:"인스턴스가 오직 하나만 생성되도록 보장하고, 전역 접근점을 제공합니다."}),i.jsxs("div",{className:"code-block",children:[i.jsx("div",{className:"code-header",children:"Singleton - Thread-safe (Double-checked Locking)"}),i.jsx("pre",{children:i.jsx("code",{children:`public class DatabaseConnection {
    private static volatile DatabaseConnection instance;

    private DatabaseConnection() { }

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
}`})})]}),i.jsx("h2",{children:"2. Factory Method 패턴"}),i.jsx("p",{children:"객체 생성을 서브클래스에 위임하여, 생성할 객체의 타입을 결정하게 합니다."}),i.jsxs("div",{className:"code-block",children:[i.jsx("div",{className:"code-header",children:"Factory Method 예시"}),i.jsx("pre",{children:i.jsx("code",{children:`public interface Notification {
    void send(String message);
}

public class EmailNotification implements Notification {
    public void send(String msg) {
        System.out.println("[Email] " + msg);
    }
}

public class SmsNotification implements Notification {
    public void send(String msg) {
        System.out.println("[SMS] " + msg);
    }
}

public abstract class NotificationFactory {
    public abstract Notification createNotification();

    public void notify(String msg) {
        Notification n = createNotification();
        n.send(msg);
    }
}`})})]}),i.jsx("h2",{children:"3. Abstract Factory 패턴"}),i.jsx("p",{children:"관련 있는 객체들의 군(family)을 생성하기 위한 인터페이스를 제공합니다."}),i.jsx("h2",{children:"4. Builder 패턴"}),i.jsx("p",{children:"복잡한 객체를 단계별로 생성할 수 있게 합니다."}),i.jsxs("div",{className:"code-block",children:[i.jsx("div",{className:"code-header",children:"Builder 예시"}),i.jsx("pre",{children:i.jsx("code",{children:`public class Pizza {
    private String dough, sauce;
    private List<String> toppings;

    private Pizza(Builder builder) {
        this.dough = builder.dough;
        this.sauce = builder.sauce;
        this.toppings = builder.toppings;
    }

    public static class Builder {
        private String dough, sauce;
        private List<String> toppings = new ArrayList<>();

        public Builder dough(String d) { dough = d; return this; }
        public Builder sauce(String s) { sauce = s; return this; }
        public Builder topping(String t) { toppings.add(t); return this; }
        public Pizza build() { return new Pizza(this); }
    }
}
// 사용: new Pizza.Builder().dough("thin").sauce("tomato").topping("cheese").build();`})})]}),i.jsx("h2",{children:"5. Prototype 패턴"}),i.jsx("p",{children:"기존 객체를 복제(clone)하여 새 객체를 생성합니다. 생성 비용이 클 때 유용합니다."}),i.jsxs("div",{className:"exercise-box",children:[i.jsx("h3",{children:"연습: 생성 패턴 적용"}),i.jsxs("ul",{children:[i.jsx("li",{children:"로깅 시스템에 Singleton 패턴을 적용해보세요"}),i.jsx("li",{children:"문서 생성기에 Factory Method를 적용해보세요 (PDF, Word, HTML)"}),i.jsx("li",{children:"Builder 패턴으로 HTTP Request 객체를 만들어보세요"})]})]}),i.jsxs("div",{className:"callout-box",children:[i.jsx("h3",{children:"핵심 요약"}),i.jsxs("ul",{children:[i.jsxs("li",{children:[i.jsx("strong",{children:"Singleton"}),": 유일한 인스턴스 보장"]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Factory Method"}),": 생성을 서브클래스에 위임"]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Abstract Factory"}),": 관련 객체 군 생성"]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Builder"}),": 복잡한 객체를 단계별 생성"]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Prototype"}),": 기존 객체 복제"]})]})]}),i.jsxs("div",{className:"lesson-nav",children:[i.jsx(e,{to:"/principles/pattern-overview",className:"lesson-nav-btn prev",children:"← 이전: 디자인 패턴 개요"}),i.jsx(e,{to:"/patterns/structural",className:"lesson-nav-btn next",children:"다음: 구조 패턴 →"})]})]})})})]})}export{c as default};

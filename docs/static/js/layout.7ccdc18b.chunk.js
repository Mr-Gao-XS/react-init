(this["webpackJsonpreact-backstage"]=this["webpackJsonpreact-backstage"]||[]).push([[3],{225:function(e,l,n){"use strict";n.r(l);var a=n(0),t=n.n(a);l.default=Object(a.memo)((function(e){return t.a.createElement("div",null,"About")}))},226:function(e,l,n){"use strict";n.r(l);var a=n(0),t=n.n(a);l.default=Object(a.memo)((function(e){return t.a.createElement("div",null,"Table")}))},230:function(e,l,n){"use strict";n.r(l);var a=n(26),t=(n(299),n(300)),r=n.n(t),c=n(0),i=n.n(c),u=n(479),m=n(40),E=n(262),o=Object(m.createModel)((function(){var e=Object(c.useState)(!1),l=Object(a.a)(e,2),n=l[0],t=l[1];return{loading:n,setLoading:t,loadingChange:function(e){t(e),e&&setTimeout((function(){t(!1)}),2e3)}}})),p=n(68),d=n(69);function f(){var e=Object(p.a)(["\n  padding: 20px;\n  border-radius: 4px;\n  background: #fff;\n  &:not(:last-child) {\n    margin-bottom: 24px;\n  }\n  &.mt {\n    button {\n      &:not(:first-child) {\n        margin-top: 24px;\n        margin-left: 0;\n      }\n    }\n  }\n  button {\n    &:not(:first-child) {\n      margin-left: 24px;\n    }\n  }\n"]);return f=function(){return e},e}function s(){var e=Object(p.a)(["\n  flex: 1;\n  &:last-child {\n    margin-left: 24px;\n  }\n"]);return s=function(){return e},e}function b(){var e=Object(p.a)(["\n  display: flex;\n  margin-top: 24px;\n"]);return b=function(){return e},e}function g(){var e=Object(p.a)([""]);return g=function(){return e},e}var F=d.b.section(g()),h=d.b.div(b()),x=d.b.div(s()),y=d.b.div(f()),v=[o];l.default=Object(c.memo)(Object(m.withModel)(v,(function(e){var l=Object(a.a)(e,1)[0];return{loading:l.loading,setLoading:l.setLoading,loadingChange:l.loadingChange}}))((function(e){var l=e.loading,n=e.loadingChange;return i.a.createElement(F,null,i.a.createElement(E.b,{title:"Button \u6309\u94ae"},i.a.createElement("p",null,"\u6309\u94ae\u7528\u4e8e\u5f00\u59cb\u4e00\u4e2a\u5373\u65f6\u64cd\u4f5c\u3002")),i.a.createElement(h,null,i.a.createElement(x,null,i.a.createElement(y,null,i.a.createElement(r.a,null,"Default"),i.a.createElement(r.a,{type:"primary"},"Primary"),i.a.createElement(r.a,{danger:!0,type:"primary"},"Danger"),i.a.createElement(r.a,{type:"dashed"},"Dashed"),i.a.createElement(r.a,{type:"text"},"text"),i.a.createElement(r.a,{type:"link"},"Link")),i.a.createElement(y,null,i.a.createElement(r.a,{loading:!0},"Loading"),i.a.createElement(r.a,{type:"primary",loading:l,onClick:function(){n(!0)}},"click me"),i.a.createElement(r.a,{type:"primary",loading:l,icon:i.a.createElement(u.a,null),onClick:function(){n(!0)}},"click me"),i.a.createElement(r.a,{type:"primary",loading:l,icon:i.a.createElement(u.a,null),onClick:function(){n(!0)}})),i.a.createElement(y,null,i.a.createElement(r.a,{shape:"round"},"Round"),i.a.createElement(r.a,{shape:"round",size:"small",icon:i.a.createElement(u.a,null)}),i.a.createElement(r.a,{shape:"round",icon:i.a.createElement(u.a,null)}),i.a.createElement(r.a,{shape:"round",size:"large",icon:i.a.createElement(u.a,null)}))),i.a.createElement(x,null,i.a.createElement(y,null,i.a.createElement(r.a,{shape:"circle",type:"primary",icon:i.a.createElement(u.a,null)}),i.a.createElement(r.a,{shape:"circle",type:"primary"},"A"),i.a.createElement(r.a,{type:"primary",icon:i.a.createElement(u.a,null)},"Search"),i.a.createElement(r.a,{shape:"circle",icon:i.a.createElement(u.a,null)}),i.a.createElement(r.a,{icon:i.a.createElement(u.a,null)},"Search")),i.a.createElement(y,{className:"mt"},i.a.createElement(r.a,{block:!0},"default"),i.a.createElement(r.a,{block:!0,type:"primary"},"primary"),i.a.createElement(r.a,{block:!0,danger:!0,type:"primary"},"Danger"),i.a.createElement(r.a,{block:!0,type:"link"},"Link")))))})))},231:function(e,l,n){"use strict";n.r(l);var a=n(0),t=n.n(a),r=n(480),c=n(481),i=n(482),u=n(483),m=n(477),E=n(478),o=n(484),p=n(485),d=n(486),f=n(487),s=n(488),b=n(489),g=n(490),F=n(491),h=n(492),x=n(493),y=n(494),v=n(495),C=n(496),k=n(497),j=n(498),O=n(499),S=n(500),w=n(501),D=n(502),L=n(503),q=n(504),z=n(505),P=n(506),B=n(507),M=n(508),R=n(509),U=n(510),A=n(511),I=n(512),J=n(513),N=n(514),T=n(515),H=n(516),Q=n(517),W=n(262),G=n(68),K=n(69);function V(){var e=Object(G.a)(["\n  margin-top: 24px;\n  padding: 24px;\n  background: #fff;\n  border-radius: 4px;\n  h2 {\n    font-size: 16px;\n  }\n  ul {\n    font-size: 0;\n    li {\n      display: inline-block;\n      vertical-align: top;\n      padding: 10px 0 0;\n      width: 16.6%;\n      height: 100px;\n      text-align: center;\n      font-size: 14px;\n      box-sizing: border-box;\n      border-radius: 4px;\n      &:hover {\n        color: #fff;\n        background: #1890ff;\n        .anticon {\n          transform: scale(1.2);\n        }\n      }\n      .anticon {\n        margin: 12px 0 8px;\n        font-size: 32px;\n        transition: transform 0.3s ease-in-out;\n      }\n    }\n  }\n"]);return V=function(){return e},e}function X(){var e=Object(G.a)([""]);return X=function(){return e},e}var Y=K.b.section(X()),Z=K.b.div(V());l.default=Object(a.memo)((function(e){return t.a.createElement(Y,null,t.a.createElement(W.b,{title:"Icon \u56fe\u6807"},t.a.createElement("p",null,"\u8bed\u4e49\u5316\u7684\u77e2\u91cf\u56fe\u5f62\u3002")),t.a.createElement(Z,null,t.a.createElement("h2",null,"\u65b9\u5411\u6027\u56fe\u6807"),t.a.createElement("ul",null,t.a.createElement("li",null,t.a.createElement(r.a,null),t.a.createElement("p",null,"StepBackwardFilled")),t.a.createElement("li",null,t.a.createElement(c.a,null),t.a.createElement("p",null,"StepForwardFilled")),t.a.createElement("li",null,t.a.createElement(i.a,null),t.a.createElement("p",null,"FastBackwardFilled")),t.a.createElement("li",null,t.a.createElement(u.a,null),t.a.createElement("p",null,"FastForwardFilled")),t.a.createElement("li",null,t.a.createElement(m.a,null),t.a.createElement("p",null,"CaretUpFilled")),t.a.createElement("li",null,t.a.createElement(E.a,null),t.a.createElement("p",null,"CaretDownFilled")),t.a.createElement("li",null,t.a.createElement(o.a,null),t.a.createElement("p",null,"CaretLeftFilled")),t.a.createElement("li",null,t.a.createElement(p.a,null),t.a.createElement("p",null,"CaretRightFilled")),t.a.createElement("li",null,t.a.createElement(d.a,null),t.a.createElement("p",null,"UpCircleFilled")),t.a.createElement("li",null,t.a.createElement(f.a,null),t.a.createElement("p",null,"DownCircleFilled")),t.a.createElement("li",null,t.a.createElement(s.a,null),t.a.createElement("p",null,"LeftCircleFilled")),t.a.createElement("li",null,t.a.createElement(b.a,null),t.a.createElement("p",null,"RightCircleFilled")),t.a.createElement("li",null,t.a.createElement(g.a,null),t.a.createElement("p",null,"ForwardFilled")),t.a.createElement("li",null,t.a.createElement(F.a,null),t.a.createElement("p",null,"BackwardFilled")),t.a.createElement("li",null,t.a.createElement(h.a,null),t.a.createElement("p",null,"PlayCircleFilled")),t.a.createElement("li",null,t.a.createElement(x.a,null),t.a.createElement("p",null,"UpSquareFilled")),t.a.createElement("li",null,t.a.createElement(y.a,null),t.a.createElement("p",null,"DownSquareFilled")),t.a.createElement("li",null,t.a.createElement(v.a,null),t.a.createElement("p",null,"LeftSquareFilled")),t.a.createElement("li",null,t.a.createElement(C.a,null),t.a.createElement("p",null,"RightSquareFilled")))),t.a.createElement(Z,null,t.a.createElement("h2",null,"\u5efa\u8bae\u6027\u56fe\u6807"),t.a.createElement("ul",null,t.a.createElement("li",null,t.a.createElement(k.a,null),t.a.createElement("p",null,"QuestionCircleFilled")),t.a.createElement("li",null,t.a.createElement(j.a,null),t.a.createElement("p",null,"PlusCircleFilled")),t.a.createElement("li",null,t.a.createElement(O.a,null),t.a.createElement("p",null,"PauseCircleFilled")),t.a.createElement("li",null,t.a.createElement(S.a,null),t.a.createElement("p",null,"MinusCircleFilled")),t.a.createElement("li",null,t.a.createElement(w.a,null),t.a.createElement("p",null,"PlusSquareFilled")),t.a.createElement("li",null,t.a.createElement(D.a,null),t.a.createElement("p",null,"MinusSquareFilled")),t.a.createElement("li",null,t.a.createElement(L.a,null),t.a.createElement("p",null,"InfoCircleFilled")),t.a.createElement("li",null,t.a.createElement(q.a,null),t.a.createElement("p",null,"ExclamationCircleFilled")),t.a.createElement("li",null,t.a.createElement(z.a,null),t.a.createElement("p",null,"CloseCircleFilled")),t.a.createElement("li",null,t.a.createElement(P.a,null),t.a.createElement("p",null,"CloseSquareFilled")),t.a.createElement("li",null,t.a.createElement(B.a,null),t.a.createElement("p",null,"CheckCircleFilled")),t.a.createElement("li",null,t.a.createElement(M.a,null),t.a.createElement("p",null,"CheckSquareFilled")),t.a.createElement("li",null,t.a.createElement(R.a,null),t.a.createElement("p",null,"ClockCircleFilled")),t.a.createElement("li",null,t.a.createElement(U.a,null),t.a.createElement("p",null,"WarningFilled")),t.a.createElement("li",null,t.a.createElement(A.a,null),t.a.createElement("p",null,"StopFilled")))),t.a.createElement(Z,null,t.a.createElement("h2",null,"\u7f16\u8f91\u7c7b\u56fe\u6807"),t.a.createElement("ul",null,t.a.createElement("li",null,t.a.createElement(I.a,null),t.a.createElement("p",null,"EditFilled")),t.a.createElement("li",null,t.a.createElement(J.a,null),t.a.createElement("p",null,"CopyFilled")),t.a.createElement("li",null,t.a.createElement(N.a,null),t.a.createElement("p",null,"DeleteFilled")),t.a.createElement("li",null,t.a.createElement(T.a,null),t.a.createElement("p",null,"SnippetsFilled")),t.a.createElement("li",null,t.a.createElement(H.a,null),t.a.createElement("p",null,"DiffFilled")),t.a.createElement("li",null,t.a.createElement(Q.a,null),t.a.createElement("p",null,"HighlightFilled")))))}))},262:function(e,l,n){"use strict";n.d(l,"a",(function(){return r})),n.d(l,"b",(function(){return m}));var a=n(0),t=n.n(a),r=Object(a.memo)((function(e){var l=e.type,n=e.style;return t.a.createElement("i",{className:"bacctage-icon-"+l,style:n})})),c=n(68);function i(){var e=Object(c.a)(["\n  padding: 20px 20px 30px;\n  background: #fff;\n  border-radius: 4px;\n  h1 {\n    position: relative;\n    padding-bottom: 20px;\n    margin-bottom: 20px;\n    font-size: 20px;\n    &::after {\n      content: '';\n      position: absolute;\n      left: 0;\n      bottom: 0;\n      width: 100%;\n      height: 1px;\n      background: #efefef;\n    }\n  }\n"]);return i=function(){return e},e}var u=n(69).b.div(i()),m=function(e){var l=e.title,n=void 0===l?"\u5982\u4f55\u4f7f\u7528":l,a=e.children;return t.a.createElement(u,null,t.a.createElement("h1",null,n),a)}}}]);
//# sourceMappingURL=layout.7ccdc18b.chunk.js.map
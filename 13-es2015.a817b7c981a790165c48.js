(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{Z6Zr:function(n,t,a){"use strict";a.r(t),a.d(t,"ClassBasedDemoModule",function(){return f});var e=a("ofXK"),r=a("fXoL"),s=a("D3dD"),i=a("suL1");let o=(()=>{class n{constructor(){this.animationType=null}selectKeyframeAnimation(){this.animationType="KEYFRAME"}selectTransformAnimation(){this.animationType="TRANSFORM"}resetAnimation(){this.animationType=null}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=r.Fb({type:n,selectors:[["app-class-based-demo"]],decls:5,vars:6,consts:[["text","transform",3,"click"],["text","keyframes",3,"click"],[1,"card",3,"animationend","transitionend"]],template:function(n,t){1&n&&(r.Rb(0,"div"),r.Rb(1,"app-button-basic",0),r.Zb("click",function(){return t.selectTransformAnimation()}),r.Qb(),r.Rb(2,"app-button-basic",1),r.Zb("click",function(){return t.selectKeyframeAnimation()}),r.Qb(),r.Qb(),r.Rb(3,"div",2),r.Zb("animationend",function(){return t.resetAnimation()})("transitionend",function(){return t.resetAnimation()}),r.Mb(4,"app-card-demo-sample"),r.Qb()),2&n&&(r.Bb(3),r.Db("card-reset",!t.animationType)("card-keyframe","KEYFRAME"===t.animationType)("card-transform","TRANSFORM"===t.animationType))},directives:[s.a,i.a],styles:[".card[_ngcontent-%COMP%]{transition:all .5s}.card.card-reset[_ngcontent-%COMP%]{transform:scale(1)}.card.card-transform[_ngcontent-%COMP%]{transform:scale(.8)}.card.card-keyframe[_ngcontent-%COMP%]{-webkit-animation:pulse 1s;animation:pulse 1s}@-webkit-keyframes pulse{0%{transform:scale(1)}50%{transform:scale(.8)}to{transform:scale(1)}}@keyframes pulse{0%{transform:scale(1)}50%{transform:scale(.8)}to{transform:scale(1)}}"]}),n})();var c=a("ZM5P"),m=a("YUcS"),l=a("cfjQ");let f=(()=>{class n{}return n.entry=o,n.\u0275mod=r.Jb({type:n}),n.\u0275inj=r.Ib({factory:function(t){return new(t||n)},imports:[[e.b,m.a,c.a,l.a]]}),n})()}}]);
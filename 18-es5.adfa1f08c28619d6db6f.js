!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var c=t[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"9FlO":function(n,c,i){"use strict";i.r(c),i.d(c,"ReuseDemoModule",function(){return y});var a=i("ofXK"),o=i("R0Ic"),r=Object(o.p)("fade",[Object(o.o)(":enter",[Object(o.n)({opacity:0}),Object(o.e)("500ms",Object(o.n)({opacity:1}))]),Object(o.o)(":leave",[Object(o.e)("500ms",Object(o.n)({opacity:0}))])]),u=Object(o.g)([Object(o.n)({transform:"translate({{x}}px, {{y}}px)"}),Object(o.e)("{{duration}}s",Object(o.n)({transform:"translate(0,0)"}))]),b=i("fXoL"),s=i("D3dD"),d=i("suL1");function l(e,t){1&e&&b.Nb(0)}function f(e,t){if(1&e){var n=b.Sb();b.Rb(0,"div"),b.Zb("@fade.done",function(){return b.kc(n),b.bc().animationDone()}),b.qc(1,l,1,0,"ng-container",5),b.Qb()}if(2&e){b.bc();var c=b.jc(8);b.gc("@fade",void 0),b.Bb(1),b.gc("ngTemplateOutlet",c)}}function p(e,t){1&e&&b.Nb(0)}function h(e,t){if(1&e){var n=b.Sb();b.Rb(0,"div"),b.Zb("@slide.done",function(){return b.kc(n),b.bc().animationDone()}),b.qc(1,p,1,0,"ng-container",5),b.Qb()}if(2&e){b.bc();var c=b.jc(8);b.gc("@slide",void 0),b.Bb(1),b.gc("ngTemplateOutlet",c)}}function m(e,t){1&e&&(b.Rb(0,"div",6),b.Mb(1,"app-card-demo-sample"),b.Qb())}var v,g,O=((v=function(){function n(){e(this,n),this.reuseMethodSelected="TRIGGER",this.reuseMethodQueued=this.reuseMethodSelected}var c,i,a;return c=n,(i=[{key:"selectReuseMethod",value:function(e){this.reuseMethodSelected=null,this.reuseMethodQueued=e}},{key:"animationDone",value:function(){this.reuseMethodSelected=this.reuseMethodQueued}}])&&t(c.prototype,i),a&&t(c,a),n}()).\u0275fac=function(e){return new(e||v)},v.\u0275cmp=b.Fb({type:v,selectors:[["app-reuse-demo"]],decls:9,vars:3,consts:[["text","trigger",3,"click"],["text","animation reference data",3,"click"],[3,"ngSwitch"],[4,"ngSwitchCase"],["card",""],[4,"ngTemplateOutlet"],[1,"card"]],template:function(e,t){1&e&&(b.Rb(0,"div"),b.Rb(1,"div"),b.Rb(2,"app-button-basic",0),b.Zb("click",function(){return t.selectReuseMethod("TRIGGER")}),b.Qb(),b.Rb(3,"app-button-basic",1),b.Zb("click",function(){return t.selectReuseMethod("ANIMATION_REFERENCE_DATA")}),b.Qb(),b.Qb(),b.Pb(4,2),b.qc(5,f,2,2,"div",3),b.qc(6,h,2,2,"div",3),b.Ob(),b.Qb(),b.qc(7,m,2,0,"ng-template",null,4,b.rc)),2&e&&(b.Bb(4),b.gc("ngSwitch",t.reuseMethodSelected),b.Bb(1),b.gc("ngSwitchCase","TRIGGER"),b.Bb(1),b.gc("ngSwitchCase","ANIMATION_REFERENCE_DATA"))},directives:[s.a,a.m,a.n,a.p,d.a],styles:[""],data:{animation:[r,Object(o.p)("slide",[Object(o.o)(":enter",Object(o.q)(u,{params:{x:0,y:50,duration:.3}}))])]}}),v),R=i("ZM5P"),j=i("YUcS"),w=i("cfjQ"),y=((g=function t(){e(this,t)}).entry=O,g.\u0275mod=b.Jb({type:g}),g.\u0275inj=b.Ib({factory:function(e){return new(e||g)},imports:[[a.b,j.a,R.a,w.a]]}),g)}}])}();
function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{KSP2:function(e,n,t){"use strict";t.r(n),t.d(n,"StateChangeDemoModule",(function(){return f}));var a,c,i=t("ofXK"),r=t("R0Ic"),s=t("fXoL"),o=t("D3dD"),b=t("suL1"),l=((a=function(){function e(){_classCallCheck(this,e),this.isEnabled=!0}return _createClass(e,[{key:"toggleIsEnabled",value:function(){this.isEnabled=!this.isEnabled}}]),e}()).\u0275fac=function(e){return new(e||a)},a.\u0275cmp=s.Gb({type:a,selectors:[["app-state-change-demo"]],decls:4,vars:3,consts:[[3,"text","click"],[1,"card"],[3,"hoverEnabled"]],template:function(e,n){1&e&&(s.Sb(0,"div"),s.Sb(1,"app-button-basic",0),s.ac("click",(function(){return n.toggleIsEnabled()})),s.Rb(),s.Sb(2,"div",1),s.Nb(3,"app-card-demo-sample",2),s.Rb(),s.Rb()),2&e&&(s.Bb(1),s.hc("text",n.isEnabled?"disable":"enable"),s.Bb(1),s.hc("@enabledStateChange",n.isEnabled?"enabled":"disabled"),s.Bb(1),s.hc("hoverEnabled",n.isEnabled))},directives:[o.a,b.a],styles:["app-card[_ngcontent-%COMP%]{margin:2px}app-card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]{cursor:pointer}"],data:{animation:[Object(r.o)("enabledStateChange",[Object(r.l)("default",Object(r.m)({opacity:1})),Object(r.l)("disabled",Object(r.m)({opacity:.5})),Object(r.n)("* => *",[Object(r.e)("200ms cubic-bezier(0.175, 0.885, 0.32, 1.275)",Object(r.m)({transform:"scale(1.01)"})),Object(r.e)("200ms cubic-bezier(0.175, 0.885, 0.32, 1.275)",Object(r.m)({transform:"scale(1)"})),Object(r.e)("300ms")])])]}}),a),d=t("ZM5P"),u=t("YUcS"),p=t("cfjQ"),f=((c=function e(){_classCallCheck(this,e)}).entry=l,c.\u0275mod=s.Kb({type:c}),c.\u0275inj=s.Jb({factory:function(e){return new(e||c)},imports:[[i.b,u.a,d.a,p.a]]}),c)}}]);
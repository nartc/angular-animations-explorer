function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{KSP2:function(e,n,t){"use strict";t.r(n),t.d(n,"StateChangeDemoModule",(function(){return m}));var a,c,i=t("ofXK"),r=t("R0Ic"),s=[Object(r.o)("enabledStateChange",[Object(r.l)("default",Object(r.m)({opacity:1})),Object(r.l)("disabled",Object(r.m)({opacity:.5})),Object(r.n)("* => *",[Object(r.e)("200ms cubic-bezier(0.175, 0.885, 0.32, 1.275)",Object(r.m)({transform:"scale(1.01)"})),Object(r.e)("200ms cubic-bezier(0.175, 0.885, 0.32, 1.275)",Object(r.m)({transform:"scale(1)"})),Object(r.e)("300ms")])])],o=t("fXoL"),b=t("D3dD"),l=t("suL1"),d=((a=function(){function e(){_classCallCheck(this,e),this.isEnabled=!0}return _createClass(e,[{key:"toggleIsEnabled",value:function(){this.isEnabled=!this.isEnabled}}]),e}()).\u0275fac=function(e){return new(e||a)},a.\u0275cmp=o.Gb({type:a,selectors:[["app-state-change-demo"]],decls:4,vars:3,consts:[[3,"text","click"],[1,"card"],[3,"hoverEnabled"]],template:function(e,n){1&e&&(o.Sb(0,"div"),o.Sb(1,"app-button-basic",0),o.ac("click",(function(){return n.toggleIsEnabled()})),o.Rb(),o.Sb(2,"div",1),o.Nb(3,"app-card-demo-sample",2),o.Rb(),o.Rb()),2&e&&(o.Bb(1),o.hc("text",n.isEnabled?"disable":"enable"),o.Bb(1),o.hc("@enabledStateChange",n.isEnabled?"enabled":"disabled"),o.Bb(1),o.hc("hoverEnabled",n.isEnabled))},directives:[b.a,l.a],styles:["app-card[_ngcontent-%COMP%]{margin:2px}app-card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]{cursor:pointer}"],data:{animation:[s]}}),a),u=t("ZM5P"),p=t("YUcS"),f=t("cfjQ"),m=((c=function e(){_classCallCheck(this,e)}).entry=d,c.\u0275mod=o.Kb({type:c}),c.\u0275inj=o.Jb({factory:function(e){return new(e||c)},imports:[[i.b,p.a,u.a,f.a]]}),c)}}]);
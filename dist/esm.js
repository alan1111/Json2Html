import t,{useState as e,useEffect as r,forwardRef as n,useImperativeHandle as o}from"react";import i from"react-form-validates";function a(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function u(t,e){return t(e={exports:{}},e.exports),e.exports}var c=u(function(t){function e(){return t.exports=e=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r,n=arguments[e];for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},t.exports.__esModule=!0,t.exports.default=t.exports,e.apply(this,arguments)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports}),l=a(c),s=u(function(t){t.exports=function(t){if(Array.isArray(t))return t},t.exports.__esModule=!0,t.exports.default=t.exports}),f=(a(s),u(function(t){t.exports=function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,u=[],c=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}},t.exports.__esModule=!0,t.exports.default=t.exports})),p=(a(f),u(function(t){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n},t.exports.__esModule=!0,t.exports.default=t.exports})),h=(a(p),u(function(t){t.exports=function(t,e){var r;if(t)return"string"==typeof t?p(t,e):"Map"===(r="Object"===(r=Object.prototype.toString.call(t).slice(8,-1))&&t.constructor?t.constructor.name:r)||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(t,e):void 0},t.exports.__esModule=!0,t.exports.default=t.exports})),v=(a(h),u(function(t){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports})),d=(a(v),a(u(function(t){t.exports=function(t,e){return s(t)||f(t,e)||h(t,e)||v()},t.exports.__esModule=!0,t.exports.default=t.exports}))),y=a(u(function(t){function c(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}t.exports=function(u){return function(){var t=this,a=arguments;return new Promise(function(e,r){var n=u.apply(t,a);function o(t){c(n,e,r,o,i,"next",t)}function i(t){c(n,e,r,o,i,"throw",t)}o(void 0)})}},t.exports.__esModule=!0,t.exports.default=t.exports})),m=u(function(e){function r(t){return e.exports=r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e.exports.__esModule=!0,e.exports.default=e.exports,r(t)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports}),g=(a(m),u(function(t){var n=m.default;t.exports=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0===r)return("string"===e?String:Number)(t);r=r.call(t,e||"default");if("object"!==n(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")},t.exports.__esModule=!0,t.exports.default=t.exports})),x=(a(g),u(function(t){var e=m.default;t.exports=function(t){t=g(t,"string");return"symbol"===e(t)?t:String(t)},t.exports.__esModule=!0,t.exports.default=t.exports})),b=(a(x),a(u(function(t){t.exports=function(t,e,r){return(e=x(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t},t.exports.__esModule=!0,t.exports.default=t.exports}))),w=u(function(E){var _=m.default;function t(){E.exports=function(){return a},E.exports.__esModule=!0,E.exports.default=E.exports;var a={},t=Object.prototype,c=t.hasOwnProperty,l=Object.defineProperty||function(t,e,r){t[e]=r.value},e="function"==typeof Symbol?Symbol:{},n=e.iterator||"@@iterator",r=e.asyncIterator||"@@asyncIterator",o=e.toStringTag||"@@toStringTag";function i(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{i({},"")}catch(t){i=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o,i,a,u,e=e&&e.prototype instanceof p?e:p,e=Object.create(e.prototype),n=new w(n||[]);return l(e,"_invoke",{value:(o=t,i=r,a=n,u="suspendedStart",function(t,e){if("executing"===u)throw new Error("Generator is already running");if("completed"===u){if("throw"===t)throw e;return j()}for(a.method=t,a.arg=e;;){var r=a.delegate;if(r){r=function t(e,r){var n=r.method,o=e.iterator[n];if(void 0===o)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=void 0,t(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;n=s(o,e.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,f;o=n.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,f):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,f)}(r,a);if(r){if(r===f)continue;return r}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===u)throw u="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);u="executing";r=s(o,i,a);if("normal"===r.type){if(u=a.done?"completed":"suspendedYield",r.arg===f)continue;return{value:r.arg,done:a.done}}"throw"===r.type&&(u="completed",a.method="throw",a.arg=r.arg)}})}),e}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}a.wrap=u;var f={};function p(){}function h(){}function d(){}var e={},y=(i(e,n,function(){return this}),Object.getPrototypeOf),y=y&&y(y(O([]))),v=(y&&y!==t&&c.call(y,n)&&(e=y),d.prototype=p.prototype=Object.create(e));function m(t){["next","throw","return"].forEach(function(e){i(t,e,function(t){return this._invoke(e,t)})})}function g(a,u){var e;l(this,"_invoke",{value:function(r,n){function t(){return new u(function(t,e){!function e(t,r,n,o){var i,t=s(a[t],a,r);if("throw"!==t.type)return(r=(i=t.arg).value)&&"object"==_(r)&&c.call(r,"__await")?u.resolve(r.__await).then(function(t){e("next",t,n,o)},function(t){e("throw",t,n,o)}):u.resolve(r).then(function(t){i.value=t,n(i)},function(t){return e("throw",t,n,o)});o(t.arg)}(r,n,t,e)})}return e=e?e.then(t,t):t()}})}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function b(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function w(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function O(e){if(e){var r,t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length))return r=-1,(t=function t(){for(;++r<e.length;)if(c.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t}).next=t}return{next:j}}function j(){return{value:void 0,done:!0}}return l(v,"constructor",{value:h.prototype=d,configurable:!0}),l(d,"constructor",{value:h,configurable:!0}),h.displayName=i(d,o,"GeneratorFunction"),a.isGeneratorFunction=function(t){t="function"==typeof t&&t.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},a.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,i(t,o,"GeneratorFunction")),t.prototype=Object.create(v),t},a.awrap=function(t){return{__await:t}},m(g.prototype),i(g.prototype,r,function(){return this}),a.AsyncIterator=g,a.async=function(t,e,r,n,o){void 0===o&&(o=Promise);var i=new g(u(t,e,r,n),o);return a.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},m(v),i(v,o,"Generator"),i(v,n,function(){return this}),i(v,"toString",function(){return"[object Generator]"}),a.keys=function(t){var e,r=Object(t),n=[];for(e in r)n.push(e);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},a.values=O,w.prototype={constructor:w,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(b),!t)for(var e in this)"t"===e.charAt(0)&&c.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function t(t,e){return i.type="throw",i.arg=r,n.next=t,e&&(n.method="next",n.arg=void 0),!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var a=c.call(o,"catchLoc"),u=c.call(o,"finallyLoc");if(a&&u){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;0<=r;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&c.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}var i=(o=o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc?null:o)?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),b(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r,n,o=this.tryEntries[e];if(o.tryLoc===t)return"throw"===(r=o.completion).type&&(n=r.arg,b(o)),n}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},a}E.exports=t,E.exports.__esModule=!0,E.exports.default=E.exports}),O=(a(w),w()),j=O;try{regeneratorRuntime=O}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=O:Function("r","regeneratorRuntime = r")(O)}function _(e,t){var r,n=Object.keys(e);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(e),t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)),n}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach(function(t){b(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var L=null,S=null,P=function(t){L=E(E({},L),t)},k=function(t){S=E(E({},S),t)},M=function(){var r=y(j.mark(function t(e,r){var n,o;return j.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:if(Array.isArray(e))return t.abrupt("return",e.forEach(function(t){return M(t,r)}));t.next=4;break;case 4:if(n=e.type,o=e.data,L[n])return t.next=8,L[n](o,r);t.next=12;break;case 8:null!=(o=t.sent)&&o.type&&L[o.type]&&M(o,r),t.next=13;break;case 12:console.error("不存在当前action：",n);case 13:case"end":return t.stop()}},t)}));return function(t,e){return r.apply(this,arguments)}}(),A=function(t){return null==t?void 0:t.replace(t[0],t[0].toUpperCase()).replace(/(-.)/g,function(t){return t[1].toUpperCase()})};function F(n){var o,i=n.jsonObj,a=n.globalData,n=e(null),n=d(n,2),u=n[0],c=n[1],n=e(""),n=d(n,2),s=n[0],f=n[1],n=(r(function(){f(Math.random())},[]),i||{}),p=n.widget,h=n.action,y=n.jProps,v=n.jChildren,m=n.linkage,g=n.needFormItem,x=n.dataBind,w=n.rules,n=n.validateTrigger,O=a||{},j=O.form,O=O.FormItem,_=j?j.getFieldsValue():{},L=(null==a?void 0:a.events)||{};return r(function(){var t=(u||{}).defaultValue;t&&j&&j.setFieldsValue(b({},x,t))},[x,JSON.stringify(u)]),r(function(){h&&c(function(t){return E(E({},t),{},{onClick:function(){return M(h,a)}})})},[h,a]),r(function(){var r;g&&0<Object.keys(L).length&&(r={},Object.keys(L).forEach(function(e){r[e]=function(t){return L[e](x,t)}}),c(function(t){return E(E({},t),r)}))},[L,g,x]),r(function(){var e;m?(e=new Function("$globalState",m)(_),c(e?function(t){return E(E(E({},t),y),e)}:null)):c(function(t){return E(E({},t),y)})},[JSON.stringify(_),m,y]),i&&u?Array.isArray(i)?i.map(function(e,r){e={jsonObj:e,globalData:a};return t.createElement(F,l({key:"".concat(s,"-").concat(r)},e))}):(i=A(p),(i=S[i])?(o={jsonObj:v,globalData:a},g&&j&&O?(w=j.getFieldProps(x,{rules:w,validateTrigger:n||""}),t.createElement(O,{key:s},t.createElement("div",w,t.createElement(i,u,v&&t.createElement(F,o))))):t.createElement(i,u,v&&t.createElement(F,o))):(console.error("不存在当前组件：",p),null)):null}var N=/^r\((\d+)\)$/,T=/r\((\d+)\)/g,I=function(e){var t=e.match(T);return t&&t.forEach(function(t){e=e.replace(t,"".concat(t.match(N)[1]*Math.min(640,Math.max(document.documentElement.clientWidth,320))/750,"px"))}),e},D=function(t){var e;return t&&(function e(t){var r,n=t.jChildren,t=t.jProps,o=(t||{}).style;o&&Object.keys(o).forEach(function(t){o[t]=I(o[t])}),null!=t&&t.label&&(r=t.label,t.label=I(r)),Array.isArray(n)&&n.forEach(function(t){e(t)})}(e=JSON.parse(JSON.stringify(t))),e)},G=i.create,C=i.Item;function J(e,r){var n=e.renderJson,i=e.events,a=e.form;return o(r,function(){return{form:a}}),n?(e={jsonObj:D(n),globalData:{form:a,FormItem:C,events:i}},t.createElement(F,e)):null}var R=G()(n(J));export{R as FormPage,F as Json2Html,M as handleAction,P as registerAction,k as registerComponent};

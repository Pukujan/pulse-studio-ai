(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var Zh={exports:{}},Ra={},ed={exports:{}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wm;function Bw(){if(Wm)return ke;Wm=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),A=Symbol.iterator;function S(b){return b===null||typeof b!="object"?null:(b=A&&b[A]||b["@@iterator"],typeof b=="function"?b:null)}var F={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,H={};function $(b,j,Z){this.props=b,this.context=j,this.refs=H,this.updater=Z||F}$.prototype.isReactComponent={},$.prototype.setState=function(b,j){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,j,"setState")},$.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function se(){}se.prototype=$.prototype;function ue(b,j,Z){this.props=b,this.context=j,this.refs=H,this.updater=Z||F}var fe=ue.prototype=new se;fe.constructor=ue,q(fe,$.prototype),fe.isPureReactComponent=!0;var ve=Array.isArray,xe=Object.prototype.hasOwnProperty,me={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function C(b,j,Z){var ne,Ee={},Se=null,Ne=null;if(j!=null)for(ne in j.ref!==void 0&&(Ne=j.ref),j.key!==void 0&&(Se=""+j.key),j)xe.call(j,ne)&&!N.hasOwnProperty(ne)&&(Ee[ne]=j[ne]);var Fe=arguments.length-2;if(Fe===1)Ee.children=Z;else if(1<Fe){for(var Ge=Array(Fe),Bt=0;Bt<Fe;Bt++)Ge[Bt]=arguments[Bt+2];Ee.children=Ge}if(b&&b.defaultProps)for(ne in Fe=b.defaultProps,Fe)Ee[ne]===void 0&&(Ee[ne]=Fe[ne]);return{$$typeof:r,type:b,key:Se,ref:Ne,props:Ee,_owner:me.current}}function R(b,j){return{$$typeof:r,type:b.type,key:j,ref:b.ref,props:b.props,_owner:b._owner}}function O(b){return typeof b=="object"&&b!==null&&b.$$typeof===r}function k(b){var j={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(Z){return j[Z]})}var V=/\/+/g;function I(b,j){return typeof b=="object"&&b!==null&&b.key!=null?k(""+b.key):j.toString(36)}function _e(b,j,Z,ne,Ee){var Se=typeof b;(Se==="undefined"||Se==="boolean")&&(b=null);var Ne=!1;if(b===null)Ne=!0;else switch(Se){case"string":case"number":Ne=!0;break;case"object":switch(b.$$typeof){case r:case e:Ne=!0}}if(Ne)return Ne=b,Ee=Ee(Ne),b=ne===""?"."+I(Ne,0):ne,ve(Ee)?(Z="",b!=null&&(Z=b.replace(V,"$&/")+"/"),_e(Ee,j,Z,"",function(Bt){return Bt})):Ee!=null&&(O(Ee)&&(Ee=R(Ee,Z+(!Ee.key||Ne&&Ne.key===Ee.key?"":(""+Ee.key).replace(V,"$&/")+"/")+b)),j.push(Ee)),1;if(Ne=0,ne=ne===""?".":ne+":",ve(b))for(var Fe=0;Fe<b.length;Fe++){Se=b[Fe];var Ge=ne+I(Se,Fe);Ne+=_e(Se,j,Z,Ge,Ee)}else if(Ge=S(b),typeof Ge=="function")for(b=Ge.call(b),Fe=0;!(Se=b.next()).done;)Se=Se.value,Ge=ne+I(Se,Fe++),Ne+=_e(Se,j,Z,Ge,Ee);else if(Se==="object")throw j=String(b),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.");return Ne}function Me(b,j,Z){if(b==null)return b;var ne=[],Ee=0;return _e(b,ne,"","",function(Se){return j.call(Z,Se,Ee++)}),ne}function ze(b){if(b._status===-1){var j=b._result;j=j(),j.then(function(Z){(b._status===0||b._status===-1)&&(b._status=1,b._result=Z)},function(Z){(b._status===0||b._status===-1)&&(b._status=2,b._result=Z)}),b._status===-1&&(b._status=0,b._result=j)}if(b._status===1)return b._result.default;throw b._result}var je={current:null},ee={transition:null},X={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:ee,ReactCurrentOwner:me};function K(){throw Error("act(...) is not supported in production builds of React.")}return ke.Children={map:Me,forEach:function(b,j,Z){Me(b,function(){j.apply(this,arguments)},Z)},count:function(b){var j=0;return Me(b,function(){j++}),j},toArray:function(b){return Me(b,function(j){return j})||[]},only:function(b){if(!O(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},ke.Component=$,ke.Fragment=t,ke.Profiler=o,ke.PureComponent=ue,ke.StrictMode=i,ke.Suspense=g,ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X,ke.act=K,ke.cloneElement=function(b,j,Z){if(b==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+b+".");var ne=q({},b.props),Ee=b.key,Se=b.ref,Ne=b._owner;if(j!=null){if(j.ref!==void 0&&(Se=j.ref,Ne=me.current),j.key!==void 0&&(Ee=""+j.key),b.type&&b.type.defaultProps)var Fe=b.type.defaultProps;for(Ge in j)xe.call(j,Ge)&&!N.hasOwnProperty(Ge)&&(ne[Ge]=j[Ge]===void 0&&Fe!==void 0?Fe[Ge]:j[Ge])}var Ge=arguments.length-2;if(Ge===1)ne.children=Z;else if(1<Ge){Fe=Array(Ge);for(var Bt=0;Bt<Ge;Bt++)Fe[Bt]=arguments[Bt+2];ne.children=Fe}return{$$typeof:r,type:b.type,key:Ee,ref:Se,props:ne,_owner:Ne}},ke.createContext=function(b){return b={$$typeof:h,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},b.Provider={$$typeof:l,_context:b},b.Consumer=b},ke.createElement=C,ke.createFactory=function(b){var j=C.bind(null,b);return j.type=b,j},ke.createRef=function(){return{current:null}},ke.forwardRef=function(b){return{$$typeof:f,render:b}},ke.isValidElement=O,ke.lazy=function(b){return{$$typeof:E,_payload:{_status:-1,_result:b},_init:ze}},ke.memo=function(b,j){return{$$typeof:_,type:b,compare:j===void 0?null:j}},ke.startTransition=function(b){var j=ee.transition;ee.transition={};try{b()}finally{ee.transition=j}},ke.unstable_act=K,ke.useCallback=function(b,j){return je.current.useCallback(b,j)},ke.useContext=function(b){return je.current.useContext(b)},ke.useDebugValue=function(){},ke.useDeferredValue=function(b){return je.current.useDeferredValue(b)},ke.useEffect=function(b,j){return je.current.useEffect(b,j)},ke.useId=function(){return je.current.useId()},ke.useImperativeHandle=function(b,j,Z){return je.current.useImperativeHandle(b,j,Z)},ke.useInsertionEffect=function(b,j){return je.current.useInsertionEffect(b,j)},ke.useLayoutEffect=function(b,j){return je.current.useLayoutEffect(b,j)},ke.useMemo=function(b,j){return je.current.useMemo(b,j)},ke.useReducer=function(b,j,Z){return je.current.useReducer(b,j,Z)},ke.useRef=function(b){return je.current.useRef(b)},ke.useState=function(b){return je.current.useState(b)},ke.useSyncExternalStore=function(b,j,Z){return je.current.useSyncExternalStore(b,j,Z)},ke.useTransition=function(){return je.current.useTransition()},ke.version="18.3.1",ke}var Km;function Hd(){return Km||(Km=1,ed.exports=Bw()),ed.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qm;function $w(){if(Qm)return Ra;Qm=1;var r=Hd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(f,g,_){var E,A={},S=null,F=null;_!==void 0&&(S=""+_),g.key!==void 0&&(S=""+g.key),g.ref!==void 0&&(F=g.ref);for(E in g)i.call(g,E)&&!l.hasOwnProperty(E)&&(A[E]=g[E]);if(f&&f.defaultProps)for(E in g=f.defaultProps,g)A[E]===void 0&&(A[E]=g[E]);return{$$typeof:e,type:f,key:S,ref:F,props:A,_owner:o.current}}return Ra.Fragment=t,Ra.jsx=h,Ra.jsxs=h,Ra}var Ym;function qw(){return Ym||(Ym=1,Zh.exports=$w()),Zh.exports}var w=qw(),xu={},td={exports:{}},Yt={},nd={exports:{}},rd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xm;function Hw(){return Xm||(Xm=1,(function(r){function e(ee,X){var K=ee.length;ee.push(X);e:for(;0<K;){var b=K-1>>>1,j=ee[b];if(0<o(j,X))ee[b]=X,ee[K]=j,K=b;else break e}}function t(ee){return ee.length===0?null:ee[0]}function i(ee){if(ee.length===0)return null;var X=ee[0],K=ee.pop();if(K!==X){ee[0]=K;e:for(var b=0,j=ee.length,Z=j>>>1;b<Z;){var ne=2*(b+1)-1,Ee=ee[ne],Se=ne+1,Ne=ee[Se];if(0>o(Ee,K))Se<j&&0>o(Ne,Ee)?(ee[b]=Ne,ee[Se]=K,b=Se):(ee[b]=Ee,ee[ne]=K,b=ne);else if(Se<j&&0>o(Ne,K))ee[b]=Ne,ee[Se]=K,b=Se;else break e}}return X}function o(ee,X){var K=ee.sortIndex-X.sortIndex;return K!==0?K:ee.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var h=Date,f=h.now();r.unstable_now=function(){return h.now()-f}}var g=[],_=[],E=1,A=null,S=3,F=!1,q=!1,H=!1,$=typeof setTimeout=="function"?setTimeout:null,se=typeof clearTimeout=="function"?clearTimeout:null,ue=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function fe(ee){for(var X=t(_);X!==null;){if(X.callback===null)i(_);else if(X.startTime<=ee)i(_),X.sortIndex=X.expirationTime,e(g,X);else break;X=t(_)}}function ve(ee){if(H=!1,fe(ee),!q)if(t(g)!==null)q=!0,ze(xe);else{var X=t(_);X!==null&&je(ve,X.startTime-ee)}}function xe(ee,X){q=!1,H&&(H=!1,se(C),C=-1),F=!0;var K=S;try{for(fe(X),A=t(g);A!==null&&(!(A.expirationTime>X)||ee&&!k());){var b=A.callback;if(typeof b=="function"){A.callback=null,S=A.priorityLevel;var j=b(A.expirationTime<=X);X=r.unstable_now(),typeof j=="function"?A.callback=j:A===t(g)&&i(g),fe(X)}else i(g);A=t(g)}if(A!==null)var Z=!0;else{var ne=t(_);ne!==null&&je(ve,ne.startTime-X),Z=!1}return Z}finally{A=null,S=K,F=!1}}var me=!1,N=null,C=-1,R=5,O=-1;function k(){return!(r.unstable_now()-O<R)}function V(){if(N!==null){var ee=r.unstable_now();O=ee;var X=!0;try{X=N(!0,ee)}finally{X?I():(me=!1,N=null)}}else me=!1}var I;if(typeof ue=="function")I=function(){ue(V)};else if(typeof MessageChannel<"u"){var _e=new MessageChannel,Me=_e.port2;_e.port1.onmessage=V,I=function(){Me.postMessage(null)}}else I=function(){$(V,0)};function ze(ee){N=ee,me||(me=!0,I())}function je(ee,X){C=$(function(){ee(r.unstable_now())},X)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(ee){ee.callback=null},r.unstable_continueExecution=function(){q||F||(q=!0,ze(xe))},r.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<ee?Math.floor(1e3/ee):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_getFirstCallbackNode=function(){return t(g)},r.unstable_next=function(ee){switch(S){case 1:case 2:case 3:var X=3;break;default:X=S}var K=S;S=X;try{return ee()}finally{S=K}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(ee,X){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var K=S;S=ee;try{return X()}finally{S=K}},r.unstable_scheduleCallback=function(ee,X,K){var b=r.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?b+K:b):K=b,ee){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=K+j,ee={id:E++,callback:X,priorityLevel:ee,startTime:K,expirationTime:j,sortIndex:-1},K>b?(ee.sortIndex=K,e(_,ee),t(g)===null&&ee===t(_)&&(H?(se(C),C=-1):H=!0,je(ve,K-b))):(ee.sortIndex=j,e(g,ee),q||F||(q=!0,ze(xe))),ee},r.unstable_shouldYield=k,r.unstable_wrapCallback=function(ee){var X=S;return function(){var K=S;S=X;try{return ee.apply(this,arguments)}finally{S=K}}}})(rd)),rd}var Jm;function Gw(){return Jm||(Jm=1,nd.exports=Hw()),nd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zm;function Ww(){if(Zm)return Yt;Zm=1;var r=Hd(),e=Gw();function t(n){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(n,s){h(n,s),h(n+"Capture",s)}function h(n,s){for(o[n]=s,n=0;n<s.length;n++)i.add(s[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},A={};function S(n){return g.call(A,n)?!0:g.call(E,n)?!1:_.test(n)?A[n]=!0:(E[n]=!0,!1)}function F(n,s,a,c){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function q(n,s,a,c){if(s===null||typeof s>"u"||F(n,s,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function H(n,s,a,c,d,p,v){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=s,this.sanitizeURL=p,this.removeEmptyString=v}var $={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){$[n]=new H(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var s=n[0];$[s]=new H(s,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){$[n]=new H(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){$[n]=new H(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){$[n]=new H(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){$[n]=new H(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){$[n]=new H(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){$[n]=new H(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){$[n]=new H(n,5,!1,n.toLowerCase(),null,!1,!1)});var se=/[\-:]([a-z])/g;function ue(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var s=n.replace(se,ue);$[s]=new H(s,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var s=n.replace(se,ue);$[s]=new H(s,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var s=n.replace(se,ue);$[s]=new H(s,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){$[n]=new H(n,1,!1,n.toLowerCase(),null,!1,!1)}),$.xlinkHref=new H("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){$[n]=new H(n,1,!1,n.toLowerCase(),null,!0,!0)});function fe(n,s,a,c){var d=$.hasOwnProperty(s)?$[s]:null;(d!==null?d.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(q(s,a,d,c)&&(a=null),c||d===null?S(s)&&(a===null?n.removeAttribute(s):n.setAttribute(s,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(s=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(s):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,s,a):n.setAttribute(s,a))))}var ve=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xe=Symbol.for("react.element"),me=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),O=Symbol.for("react.provider"),k=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),_e=Symbol.for("react.suspense_list"),Me=Symbol.for("react.memo"),ze=Symbol.for("react.lazy"),je=Symbol.for("react.offscreen"),ee=Symbol.iterator;function X(n){return n===null||typeof n!="object"?null:(n=ee&&n[ee]||n["@@iterator"],typeof n=="function"?n:null)}var K=Object.assign,b;function j(n){if(b===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);b=s&&s[1]||""}return`
`+b+n}var Z=!1;function ne(n,s){if(!n||Z)return"";Z=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(z){var c=z}Reflect.construct(n,[],s)}else{try{s.call()}catch(z){c=z}n.call(s.prototype)}else{try{throw Error()}catch(z){c=z}n()}}catch(z){if(z&&c&&typeof z.stack=="string"){for(var d=z.stack.split(`
`),p=c.stack.split(`
`),v=d.length-1,x=p.length-1;1<=v&&0<=x&&d[v]!==p[x];)x--;for(;1<=v&&0<=x;v--,x--)if(d[v]!==p[x]){if(v!==1||x!==1)do if(v--,x--,0>x||d[v]!==p[x]){var P=`
`+d[v].replace(" at new "," at ");return n.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",n.displayName)),P}while(1<=v&&0<=x);break}}}finally{Z=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?j(n):""}function Ee(n){switch(n.tag){case 5:return j(n.type);case 16:return j("Lazy");case 13:return j("Suspense");case 19:return j("SuspenseList");case 0:case 2:case 15:return n=ne(n.type,!1),n;case 11:return n=ne(n.type.render,!1),n;case 1:return n=ne(n.type,!0),n;default:return""}}function Se(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case me:return"Portal";case R:return"Profiler";case C:return"StrictMode";case I:return"Suspense";case _e:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case k:return(n.displayName||"Context")+".Consumer";case O:return(n._context.displayName||"Context")+".Provider";case V:var s=n.render;return n=n.displayName,n||(n=s.displayName||s.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Me:return s=n.displayName||null,s!==null?s:Se(n.type)||"Memo";case ze:s=n._payload,n=n._init;try{return Se(n(s))}catch{}}return null}function Ne(n){var s=n.type;switch(n.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=s.render,n=n.displayName||n.name||"",s.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Se(s);case 8:return s===C?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Fe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ge(n){var s=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Bt(n){var s=Ge(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,s),c=""+n[s];if(!n.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(n,s,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,p.call(this,v)}}),Object.defineProperty(n,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[s]}}}}function yi(n){n._valueTracker||(n._valueTracker=Bt(n))}function Oo(n){if(!n)return!1;var s=n._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return n&&(c=Ge(n)?n.checked?"true":"false":n.value),n=c,n!==a?(s.setValue(n),!0):!1}function Dr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function _i(n,s){var a=s.checked;return K({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function cl(n,s){var a=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;a=Fe(s.value!=null?s.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function vi(n,s){s=s.checked,s!=null&&fe(n,"checked",s,!1)}function Ns(n,s){vi(n,s);var a=Fe(s.value),c=s.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}s.hasOwnProperty("value")?ht(n,s.type,a):s.hasOwnProperty("defaultValue")&&ht(n,s.type,Fe(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(n.defaultChecked=!!s.defaultChecked)}function Vo(n,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+n._wrapperState.initialValue,a||s===n.value||(n.value=s),n.defaultValue=s}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ht(n,s,a){(s!=="number"||Dr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var at=Array.isArray;function wn(n,s,a,c){if(n=n.options,s){s={};for(var d=0;d<a.length;d++)s["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=s.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Fe(a),s=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}s!==null||n[d].disabled||(s=n[d])}s!==null&&(s.selected=!0)}}function Mo(n,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return K({},s,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Lo(n,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(at(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}n._wrapperState={initialValue:Fe(a)}}function hl(n,s){var a=Fe(s.value),c=Fe(s.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),s.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Or(n){var s=n.textContent;s===n._wrapperState.initialValue&&s!==""&&s!==null&&(n.value=s)}function jo(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wi(n,s){return n==null||n==="http://www.w3.org/1999/xhtml"?jo(s):n==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Vr,dl=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(s,a,c,d)})}:n})(function(n,s){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=s;else{for(Vr=Vr||document.createElement("div"),Vr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Vr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;s.firstChild;)n.appendChild(s.firstChild)}});function bs(n,s){if(s){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=s;return}}n.textContent=s}var Mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fl=["Webkit","ms","Moz","O"];Object.keys(Mr).forEach(function(n){fl.forEach(function(s){s=s+n.charAt(0).toUpperCase()+n.substring(1),Mr[s]=Mr[n]})});function Lr(n,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Mr.hasOwnProperty(n)&&Mr[n]?(""+s).trim():s+"px"}function Ei(n,s){n=n.style;for(var a in s)if(s.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Lr(a,s[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Fo=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function En(n,s){if(s){if(Fo[n]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Ti(n,s){if(n.indexOf("-")===-1)return typeof s.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jr=null;function Ii(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ar=null,lr=null,it=null;function Uo(n){if(n=fa(n)){if(typeof ar!="function")throw Error(t(280));var s=n.stateNode;s&&(s=Ul(s),ar(n.stateNode,n.type,s))}}function Fr(n){lr?it?it.push(n):it=[n]:lr=n}function Ur(){if(lr){var n=lr,s=it;if(it=lr=null,Uo(n),s)for(n=0;n<s.length;n++)Uo(s[n])}}function pl(n,s){return n(s)}function ml(){}var On=!1;function gl(n,s,a){if(On)return n(s,a);On=!0;try{return pl(n,s,a)}finally{On=!1,(lr!==null||it!==null)&&(ml(),Ur())}}function Ds(n,s){var a=n.stateNode;if(a===null)return null;var c=Ul(a);if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var zr=!1;if(f)try{var Br={};Object.defineProperty(Br,"passive",{get:function(){zr=!0}}),window.addEventListener("test",Br,Br),window.removeEventListener("test",Br,Br)}catch{zr=!1}function yl(n,s,a,c,d,p,v,x,P){var z=Array.prototype.slice.call(arguments,3);try{s.apply(a,z)}catch(Y){this.onError(Y)}}var ur=!1,Vn=null,Si=!1,ln=null,_l={onError:function(n){ur=!0,Vn=n}};function vl(n,s,a,c,d,p,v,x,P){ur=!1,Vn=null,yl.apply(_l,arguments)}function zo(n,s,a,c,d,p,v,x,P){if(vl.apply(this,arguments),ur){if(ur){var z=Vn;ur=!1,Vn=null}else throw Error(t(198));Si||(Si=!0,ln=z)}}function Tn(n){var s=n,a=n;if(n.alternate)for(;s.return;)s=s.return;else{n=s;do s=n,(s.flags&4098)!==0&&(a=s.return),n=s.return;while(n)}return s.tag===3?a:null}function Bo(n){if(n.tag===13){var s=n.memoizedState;if(s===null&&(n=n.alternate,n!==null&&(s=n.memoizedState)),s!==null)return s.dehydrated}return null}function wl(n){if(Tn(n)!==n)throw Error(t(188))}function El(n){var s=n.alternate;if(!s){if(s=Tn(n),s===null)throw Error(t(188));return s!==n?null:n}for(var a=n,c=s;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return wl(d),n;if(p===c)return wl(d),s;p=p.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=p;else{for(var v=!1,x=d.child;x;){if(x===a){v=!0,a=d,c=p;break}if(x===c){v=!0,c=d,a=p;break}x=x.sibling}if(!v){for(x=p.child;x;){if(x===a){v=!0,a=p,c=d;break}if(x===c){v=!0,c=p,a=d;break}x=x.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:s}function Tl(n){return n=El(n),n!==null?Os(n):null}function Os(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var s=Os(n);if(s!==null)return s;n=n.sibling}return null}var $o=e.unstable_scheduleCallback,xi=e.unstable_cancelCallback,Vs=e.unstable_shouldYield,cr=e.unstable_requestPaint,Ye=e.unstable_now,kc=e.unstable_getCurrentPriorityLevel,Ci=e.unstable_ImmediatePriority,qo=e.unstable_UserBlockingPriority,Ms=e.unstable_NormalPriority,Ho=e.unstable_LowPriority,Ai=e.unstable_IdlePriority,Ls=null,Jt=null;function Il(n){if(Jt&&typeof Jt.onCommitFiberRoot=="function")try{Jt.onCommitFiberRoot(Ls,n,void 0,(n.current.flags&128)===128)}catch{}}var Zt=Math.clz32?Math.clz32:js,Mn=Math.log,un=Math.LN2;function js(n){return n>>>=0,n===0?32:31-(Mn(n)/un|0)|0}var Ln=64,$r=4194304;function $e(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function hr(n,s){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,p=n.pingedLanes,v=a&268435455;if(v!==0){var x=v&~d;x!==0?c=$e(x):(p&=v,p!==0&&(c=$e(p)))}else v=a&~d,v!==0?c=$e(v):p!==0&&(c=$e(p));if(c===0)return 0;if(s!==0&&s!==c&&(s&d)===0&&(d=c&-c,p=s&-s,d>=p||d===16&&(p&4194240)!==0))return s;if((c&4)!==0&&(c|=a&16),s=n.entangledLanes,s!==0)for(n=n.entanglements,s&=c;0<s;)a=31-Zt(s),d=1<<a,c|=n[a],s&=~d;return c}function Fs(n,s){switch(n){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Us(n,s){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var v=31-Zt(p),x=1<<v,P=d[v];P===-1?((x&a)===0||(x&c)!==0)&&(d[v]=Fs(x,s)):P<=s&&(n.expiredLanes|=x),p&=~x}}function Go(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Wo(){var n=Ln;return Ln<<=1,(Ln&4194240)===0&&(Ln=64),n}function Ko(n){for(var s=[],a=0;31>a;a++)s.push(n);return s}function zs(n,s,a){n.pendingLanes|=s,s!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,s=31-Zt(s),n[s]=a}function Nc(n,s){var a=n.pendingLanes&~s;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=s,n.mutableReadLanes&=s,n.entangledLanes&=s,s=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Zt(a),p=1<<d;s[d]=0,c[d]=-1,n[d]=-1,a&=~p}}function Qo(n,s){var a=n.entangledLanes|=s;for(n=n.entanglements;a;){var c=31-Zt(a),d=1<<c;d&s|n[c]&s&&(n[c]|=s),a&=~d}}var Ve=0;function jn(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Yo,Ri,Xo,Jo,Zo,Fn=!1,Pi=[],Un=null,zn=null,xt=null,Bs=new Map,dr=new Map,en=[],Sl="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qr(n,s){switch(n){case"focusin":case"focusout":Un=null;break;case"dragenter":case"dragleave":zn=null;break;case"mouseover":case"mouseout":xt=null;break;case"pointerover":case"pointerout":Bs.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":dr.delete(s.pointerId)}}function In(n,s,a,c,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},s!==null&&(s=fa(s),s!==null&&Ri(s)),n):(n.eventSystemFlags|=c,s=n.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),n)}function xl(n,s,a,c,d){switch(s){case"focusin":return Un=In(Un,n,s,a,c,d),!0;case"dragenter":return zn=In(zn,n,s,a,c,d),!0;case"mouseover":return xt=In(xt,n,s,a,c,d),!0;case"pointerover":var p=d.pointerId;return Bs.set(p,In(Bs.get(p)||null,n,s,a,c,d)),!0;case"gotpointercapture":return p=d.pointerId,dr.set(p,In(dr.get(p)||null,n,s,a,c,d)),!0}return!1}function ki(n){var s=Gs(n.target);if(s!==null){var a=Tn(s);if(a!==null){if(s=a.tag,s===13){if(s=Bo(a),s!==null){n.blockedOn=s,Zo(n.priority,function(){Xo(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function We(n){if(n.blockedOn!==null)return!1;for(var s=n.targetContainers;0<s.length;){var a=Ni(n.domEventName,n.eventSystemFlags,s[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);jr=c,a.target.dispatchEvent(c),jr=null}else return s=fa(a),s!==null&&Ri(s),n.blockedOn=a,!1;s.shift()}return!0}function Cl(n,s,a){We(n)&&a.delete(s)}function bc(){Fn=!1,Un!==null&&We(Un)&&(Un=null),zn!==null&&We(zn)&&(zn=null),xt!==null&&We(xt)&&(xt=null),Bs.forEach(Cl),dr.forEach(Cl)}function Hr(n,s){n.blockedOn===s&&(n.blockedOn=null,Fn||(Fn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,bc)))}function Gr(n){function s(d){return Hr(d,n)}if(0<Pi.length){Hr(Pi[0],n);for(var a=1;a<Pi.length;a++){var c=Pi[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Un!==null&&Hr(Un,n),zn!==null&&Hr(zn,n),xt!==null&&Hr(xt,n),Bs.forEach(s),dr.forEach(s),a=0;a<en.length;a++)c=en[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<en.length&&(a=en[0],a.blockedOn===null);)ki(a),a.blockedOn===null&&en.shift()}var fr=ve.ReactCurrentBatchConfig,pr=!0;function Bn(n,s,a,c){var d=Ve,p=fr.transition;fr.transition=null;try{Ve=1,ea(n,s,a,c)}finally{Ve=d,fr.transition=p}}function Al(n,s,a,c){var d=Ve,p=fr.transition;fr.transition=null;try{Ve=4,ea(n,s,a,c)}finally{Ve=d,fr.transition=p}}function ea(n,s,a,c){if(pr){var d=Ni(n,s,a,c);if(d===null)$c(n,s,c,$n,a),qr(n,c);else if(xl(d,n,s,a,c))c.stopPropagation();else if(qr(n,c),s&4&&-1<Sl.indexOf(n)){for(;d!==null;){var p=fa(d);if(p!==null&&Yo(p),p=Ni(n,s,a,c),p===null&&$c(n,s,c,$n,a),p===d)break;d=p}d!==null&&c.stopPropagation()}else $c(n,s,c,null,a)}}var $n=null;function Ni(n,s,a,c){if($n=null,n=Ii(c),n=Gs(n),n!==null)if(s=Tn(n),s===null)n=null;else if(a=s.tag,a===13){if(n=Bo(s),n!==null)return n;n=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;n=null}else s!==n&&(n=null);return $n=n,null}function bi(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(kc()){case Ci:return 1;case qo:return 4;case Ms:case Ho:return 16;case Ai:return 536870912;default:return 16}default:return 16}}var tn=null,Di=null,mr=null;function Rl(){if(mr)return mr;var n,s=Di,a=s.length,c,d="value"in tn?tn.value:tn.textContent,p=d.length;for(n=0;n<a&&s[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&s[a-c]===d[p-c];c++);return mr=d.slice(n,1<c?1-c:void 0)}function $s(n){var s=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&s===13&&(n=13)):n=s,n===10&&(n=13),32<=n||n===13?n:0}function qn(){return!0}function ta(){return!1}function bt(n){function s(a,c,d,p,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=v,this.currentTarget=null;for(var x in n)n.hasOwnProperty(x)&&(a=n[x],this[x]=a?a(p):p[x]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?qn:ta,this.isPropagationStopped=ta,this}return K(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=qn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=qn)},persist:function(){},isPersistent:qn}),s}var Hn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qs=bt(Hn),Wr=K({},Hn,{view:0,detail:0}),Oi=bt(Wr),Vi,Mi,nn,Hs=K({},Wr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ae,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==nn&&(nn&&n.type==="mousemove"?(Vi=n.screenX-nn.screenX,Mi=n.screenY-nn.screenY):Mi=Vi=0,nn=n),Vi)},movementY:function(n){return"movementY"in n?n.movementY:Mi}}),na=bt(Hs),Pl=K({},Hs,{dataTransfer:0}),kl=bt(Pl),Li=K({},Wr,{relatedTarget:0}),Ct=bt(Li),Nl=K({},Hn,{animationName:0,elapsedTime:0,pseudoElement:0}),bl=bt(Nl),Kr=K({},Hn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),u=bt(Kr),m=K({},Hn,{data:0}),y=bt(m),T={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},L={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},B={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function re(n){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(n):(n=B[n])?!!s[n]:!1}function Ae(){return re}var lt=K({},Wr,{key:function(n){if(n.key){var s=T[n.key]||n.key;if(s!=="Unidentified")return s}return n.type==="keypress"?(n=$s(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?L[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ae,charCode:function(n){return n.type==="keypress"?$s(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?$s(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),He=bt(lt),dt=K({},Hs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rn=bt(dt),gr=K({},Wr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ae}),Gn=bt(gr),Wn=K({},Hn,{propertyName:0,elapsedTime:0,pseudoElement:0}),ji=bt(Wn),ra=K({},Hs,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),M0=bt(ra),L0=[9,13,27,32],Dc=f&&"CompositionEvent"in window,sa=null;f&&"documentMode"in document&&(sa=document.documentMode);var j0=f&&"TextEvent"in window&&!sa,Ff=f&&(!Dc||sa&&8<sa&&11>=sa),Uf=" ",zf=!1;function Bf(n,s){switch(n){case"keyup":return L0.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $f(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Fi=!1;function F0(n,s){switch(n){case"compositionend":return $f(s);case"keypress":return s.which!==32?null:(zf=!0,Uf);case"textInput":return n=s.data,n===Uf&&zf?null:n;default:return null}}function U0(n,s){if(Fi)return n==="compositionend"||!Dc&&Bf(n,s)?(n=Rl(),mr=Di=tn=null,Fi=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Ff&&s.locale!=="ko"?null:s.data;default:return null}}var z0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qf(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s==="input"?!!z0[n.type]:s==="textarea"}function Hf(n,s,a,c){Fr(c),s=Ll(s,"onChange"),0<s.length&&(a=new qs("onChange","change",null,a,c),n.push({event:a,listeners:s}))}var ia=null,oa=null;function B0(n){up(n,0)}function Dl(n){var s=qi(n);if(Oo(s))return n}function $0(n,s){if(n==="change")return s}var Gf=!1;if(f){var Oc;if(f){var Vc="oninput"in document;if(!Vc){var Wf=document.createElement("div");Wf.setAttribute("oninput","return;"),Vc=typeof Wf.oninput=="function"}Oc=Vc}else Oc=!1;Gf=Oc&&(!document.documentMode||9<document.documentMode)}function Kf(){ia&&(ia.detachEvent("onpropertychange",Qf),oa=ia=null)}function Qf(n){if(n.propertyName==="value"&&Dl(oa)){var s=[];Hf(s,oa,n,Ii(n)),gl(B0,s)}}function q0(n,s,a){n==="focusin"?(Kf(),ia=s,oa=a,ia.attachEvent("onpropertychange",Qf)):n==="focusout"&&Kf()}function H0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Dl(oa)}function G0(n,s){if(n==="click")return Dl(s)}function W0(n,s){if(n==="input"||n==="change")return Dl(s)}function K0(n,s){return n===s&&(n!==0||1/n===1/s)||n!==n&&s!==s}var Sn=typeof Object.is=="function"?Object.is:K0;function aa(n,s){if(Sn(n,s))return!0;if(typeof n!="object"||n===null||typeof s!="object"||s===null)return!1;var a=Object.keys(n),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(s,d)||!Sn(n[d],s[d]))return!1}return!0}function Yf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Xf(n,s){var a=Yf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=s&&c>=s)return{node:a,offset:s-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Yf(a)}}function Jf(n,s){return n&&s?n===s?!0:n&&n.nodeType===3?!1:s&&s.nodeType===3?Jf(n,s.parentNode):"contains"in n?n.contains(s):n.compareDocumentPosition?!!(n.compareDocumentPosition(s)&16):!1:!1}function Zf(){for(var n=window,s=Dr();s instanceof n.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)n=s.contentWindow;else break;s=Dr(n.document)}return s}function Mc(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s&&(s==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||s==="textarea"||n.contentEditable==="true")}function Q0(n){var s=Zf(),a=n.focusedElem,c=n.selectionRange;if(s!==a&&a&&a.ownerDocument&&Jf(a.ownerDocument.documentElement,a)){if(c!==null&&Mc(a)){if(s=c.start,n=c.end,n===void 0&&(n=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(n,a.value.length);else if(n=(s=a.ownerDocument||document)&&s.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!n.extend&&p>c&&(d=c,c=p,p=d),d=Xf(a,p);var v=Xf(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(s=s.createRange(),s.setStart(d.node,d.offset),n.removeAllRanges(),p>c?(n.addRange(s),n.extend(v.node,v.offset)):(s.setEnd(v.node,v.offset),n.addRange(s)))}}for(s=[],n=a;n=n.parentNode;)n.nodeType===1&&s.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)n=s[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Y0=f&&"documentMode"in document&&11>=document.documentMode,Ui=null,Lc=null,la=null,jc=!1;function ep(n,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;jc||Ui==null||Ui!==Dr(c)||(c=Ui,"selectionStart"in c&&Mc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),la&&aa(la,c)||(la=c,c=Ll(Lc,"onSelect"),0<c.length&&(s=new qs("onSelect","select",null,s,a),n.push({event:s,listeners:c}),s.target=Ui)))}function Ol(n,s){var a={};return a[n.toLowerCase()]=s.toLowerCase(),a["Webkit"+n]="webkit"+s,a["Moz"+n]="moz"+s,a}var zi={animationend:Ol("Animation","AnimationEnd"),animationiteration:Ol("Animation","AnimationIteration"),animationstart:Ol("Animation","AnimationStart"),transitionend:Ol("Transition","TransitionEnd")},Fc={},tp={};f&&(tp=document.createElement("div").style,"AnimationEvent"in window||(delete zi.animationend.animation,delete zi.animationiteration.animation,delete zi.animationstart.animation),"TransitionEvent"in window||delete zi.transitionend.transition);function Vl(n){if(Fc[n])return Fc[n];if(!zi[n])return n;var s=zi[n],a;for(a in s)if(s.hasOwnProperty(a)&&a in tp)return Fc[n]=s[a];return n}var np=Vl("animationend"),rp=Vl("animationiteration"),sp=Vl("animationstart"),ip=Vl("transitionend"),op=new Map,ap="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qr(n,s){op.set(n,s),l(s,[n])}for(var Uc=0;Uc<ap.length;Uc++){var zc=ap[Uc],X0=zc.toLowerCase(),J0=zc[0].toUpperCase()+zc.slice(1);Qr(X0,"on"+J0)}Qr(np,"onAnimationEnd"),Qr(rp,"onAnimationIteration"),Qr(sp,"onAnimationStart"),Qr("dblclick","onDoubleClick"),Qr("focusin","onFocus"),Qr("focusout","onBlur"),Qr(ip,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ua="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Z0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ua));function lp(n,s,a){var c=n.type||"unknown-event";n.currentTarget=a,zo(c,s,void 0,n),n.currentTarget=null}function up(n,s){s=(s&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var p=void 0;if(s)for(var v=c.length-1;0<=v;v--){var x=c[v],P=x.instance,z=x.currentTarget;if(x=x.listener,P!==p&&d.isPropagationStopped())break e;lp(d,x,z),p=P}else for(v=0;v<c.length;v++){if(x=c[v],P=x.instance,z=x.currentTarget,x=x.listener,P!==p&&d.isPropagationStopped())break e;lp(d,x,z),p=P}}}if(Si)throw n=ln,Si=!1,ln=null,n}function Xe(n,s){var a=s[Qc];a===void 0&&(a=s[Qc]=new Set);var c=n+"__bubble";a.has(c)||(cp(s,n,2,!1),a.add(c))}function Bc(n,s,a){var c=0;s&&(c|=4),cp(a,n,c,s)}var Ml="_reactListening"+Math.random().toString(36).slice(2);function ca(n){if(!n[Ml]){n[Ml]=!0,i.forEach(function(a){a!=="selectionchange"&&(Z0.has(a)||Bc(a,!1,n),Bc(a,!0,n))});var s=n.nodeType===9?n:n.ownerDocument;s===null||s[Ml]||(s[Ml]=!0,Bc("selectionchange",!1,s))}}function cp(n,s,a,c){switch(bi(s)){case 1:var d=Bn;break;case 4:d=Al;break;default:d=ea}a=d.bind(null,s,a,n),d=void 0,!zr||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(s,a,{capture:!0,passive:d}):n.addEventListener(s,a,!0):d!==void 0?n.addEventListener(s,a,{passive:d}):n.addEventListener(s,a,!1)}function $c(n,s,a,c,d){var p=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var x=c.stateNode.containerInfo;if(x===d||x.nodeType===8&&x.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var P=v.tag;if((P===3||P===4)&&(P=v.stateNode.containerInfo,P===d||P.nodeType===8&&P.parentNode===d))return;v=v.return}for(;x!==null;){if(v=Gs(x),v===null)return;if(P=v.tag,P===5||P===6){c=p=v;continue e}x=x.parentNode}}c=c.return}gl(function(){var z=p,Y=Ii(a),J=[];e:{var Q=op.get(n);if(Q!==void 0){var ie=qs,ce=n;switch(n){case"keypress":if($s(a)===0)break e;case"keydown":case"keyup":ie=He;break;case"focusin":ce="focus",ie=Ct;break;case"focusout":ce="blur",ie=Ct;break;case"beforeblur":case"afterblur":ie=Ct;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ie=na;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ie=kl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ie=Gn;break;case np:case rp:case sp:ie=bl;break;case ip:ie=ji;break;case"scroll":ie=Oi;break;case"wheel":ie=M0;break;case"copy":case"cut":case"paste":ie=u;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ie=rn}var he=(s&4)!==0,ut=!he&&n==="scroll",M=he?Q!==null?Q+"Capture":null:Q;he=[];for(var D=z,U;D!==null;){U=D;var te=U.stateNode;if(U.tag===5&&te!==null&&(U=te,M!==null&&(te=Ds(D,M),te!=null&&he.push(ha(D,te,U)))),ut)break;D=D.return}0<he.length&&(Q=new ie(Q,ce,null,a,Y),J.push({event:Q,listeners:he}))}}if((s&7)===0){e:{if(Q=n==="mouseover"||n==="pointerover",ie=n==="mouseout"||n==="pointerout",Q&&a!==jr&&(ce=a.relatedTarget||a.fromElement)&&(Gs(ce)||ce[yr]))break e;if((ie||Q)&&(Q=Y.window===Y?Y:(Q=Y.ownerDocument)?Q.defaultView||Q.parentWindow:window,ie?(ce=a.relatedTarget||a.toElement,ie=z,ce=ce?Gs(ce):null,ce!==null&&(ut=Tn(ce),ce!==ut||ce.tag!==5&&ce.tag!==6)&&(ce=null)):(ie=null,ce=z),ie!==ce)){if(he=na,te="onMouseLeave",M="onMouseEnter",D="mouse",(n==="pointerout"||n==="pointerover")&&(he=rn,te="onPointerLeave",M="onPointerEnter",D="pointer"),ut=ie==null?Q:qi(ie),U=ce==null?Q:qi(ce),Q=new he(te,D+"leave",ie,a,Y),Q.target=ut,Q.relatedTarget=U,te=null,Gs(Y)===z&&(he=new he(M,D+"enter",ce,a,Y),he.target=U,he.relatedTarget=ut,te=he),ut=te,ie&&ce)t:{for(he=ie,M=ce,D=0,U=he;U;U=Bi(U))D++;for(U=0,te=M;te;te=Bi(te))U++;for(;0<D-U;)he=Bi(he),D--;for(;0<U-D;)M=Bi(M),U--;for(;D--;){if(he===M||M!==null&&he===M.alternate)break t;he=Bi(he),M=Bi(M)}he=null}else he=null;ie!==null&&hp(J,Q,ie,he,!1),ce!==null&&ut!==null&&hp(J,ut,ce,he,!0)}}e:{if(Q=z?qi(z):window,ie=Q.nodeName&&Q.nodeName.toLowerCase(),ie==="select"||ie==="input"&&Q.type==="file")var de=$0;else if(qf(Q))if(Gf)de=W0;else{de=H0;var ge=q0}else(ie=Q.nodeName)&&ie.toLowerCase()==="input"&&(Q.type==="checkbox"||Q.type==="radio")&&(de=G0);if(de&&(de=de(n,z))){Hf(J,de,a,Y);break e}ge&&ge(n,Q,z),n==="focusout"&&(ge=Q._wrapperState)&&ge.controlled&&Q.type==="number"&&ht(Q,"number",Q.value)}switch(ge=z?qi(z):window,n){case"focusin":(qf(ge)||ge.contentEditable==="true")&&(Ui=ge,Lc=z,la=null);break;case"focusout":la=Lc=Ui=null;break;case"mousedown":jc=!0;break;case"contextmenu":case"mouseup":case"dragend":jc=!1,ep(J,a,Y);break;case"selectionchange":if(Y0)break;case"keydown":case"keyup":ep(J,a,Y)}var ye;if(Dc)e:{switch(n){case"compositionstart":var Te="onCompositionStart";break e;case"compositionend":Te="onCompositionEnd";break e;case"compositionupdate":Te="onCompositionUpdate";break e}Te=void 0}else Fi?Bf(n,a)&&(Te="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Te="onCompositionStart");Te&&(Ff&&a.locale!=="ko"&&(Fi||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&Fi&&(ye=Rl()):(tn=Y,Di="value"in tn?tn.value:tn.textContent,Fi=!0)),ge=Ll(z,Te),0<ge.length&&(Te=new y(Te,n,null,a,Y),J.push({event:Te,listeners:ge}),ye?Te.data=ye:(ye=$f(a),ye!==null&&(Te.data=ye)))),(ye=j0?F0(n,a):U0(n,a))&&(z=Ll(z,"onBeforeInput"),0<z.length&&(Y=new y("onBeforeInput","beforeinput",null,a,Y),J.push({event:Y,listeners:z}),Y.data=ye))}up(J,s)})}function ha(n,s,a){return{instance:n,listener:s,currentTarget:a}}function Ll(n,s){for(var a=s+"Capture",c=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=Ds(n,a),p!=null&&c.unshift(ha(n,p,d)),p=Ds(n,s),p!=null&&c.push(ha(n,p,d))),n=n.return}return c}function Bi(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function hp(n,s,a,c,d){for(var p=s._reactName,v=[];a!==null&&a!==c;){var x=a,P=x.alternate,z=x.stateNode;if(P!==null&&P===c)break;x.tag===5&&z!==null&&(x=z,d?(P=Ds(a,p),P!=null&&v.unshift(ha(a,P,x))):d||(P=Ds(a,p),P!=null&&v.push(ha(a,P,x)))),a=a.return}v.length!==0&&n.push({event:s,listeners:v})}var ew=/\r\n?/g,tw=/\u0000|\uFFFD/g;function dp(n){return(typeof n=="string"?n:""+n).replace(ew,`
`).replace(tw,"")}function jl(n,s,a){if(s=dp(s),dp(n)!==s&&a)throw Error(t(425))}function Fl(){}var qc=null,Hc=null;function Gc(n,s){return n==="textarea"||n==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Wc=typeof setTimeout=="function"?setTimeout:void 0,nw=typeof clearTimeout=="function"?clearTimeout:void 0,fp=typeof Promise=="function"?Promise:void 0,rw=typeof queueMicrotask=="function"?queueMicrotask:typeof fp<"u"?function(n){return fp.resolve(null).then(n).catch(sw)}:Wc;function sw(n){setTimeout(function(){throw n})}function Kc(n,s){var a=s,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Gr(s);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Gr(s)}function Yr(n){for(;n!=null;n=n.nextSibling){var s=n.nodeType;if(s===1||s===3)break;if(s===8){if(s=n.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return n}function pp(n){n=n.previousSibling;for(var s=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return n;s--}else a==="/$"&&s++}n=n.previousSibling}return null}var $i=Math.random().toString(36).slice(2),Kn="__reactFiber$"+$i,da="__reactProps$"+$i,yr="__reactContainer$"+$i,Qc="__reactEvents$"+$i,iw="__reactListeners$"+$i,ow="__reactHandles$"+$i;function Gs(n){var s=n[Kn];if(s)return s;for(var a=n.parentNode;a;){if(s=a[yr]||a[Kn]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(n=pp(n);n!==null;){if(a=n[Kn])return a;n=pp(n)}return s}n=a,a=n.parentNode}return null}function fa(n){return n=n[Kn]||n[yr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function qi(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ul(n){return n[da]||null}var Yc=[],Hi=-1;function Xr(n){return{current:n}}function Je(n){0>Hi||(n.current=Yc[Hi],Yc[Hi]=null,Hi--)}function Ke(n,s){Hi++,Yc[Hi]=n.current,n.current=s}var Jr={},Dt=Xr(Jr),Ht=Xr(!1),Ws=Jr;function Gi(n,s){var a=n.type.contextTypes;if(!a)return Jr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=s[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=s,n.__reactInternalMemoizedMaskedChildContext=d),d}function Gt(n){return n=n.childContextTypes,n!=null}function zl(){Je(Ht),Je(Dt)}function mp(n,s,a){if(Dt.current!==Jr)throw Error(t(168));Ke(Dt,s),Ke(Ht,a)}function gp(n,s,a){var c=n.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in s))throw Error(t(108,Ne(n)||"Unknown",d));return K({},a,c)}function Bl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Jr,Ws=Dt.current,Ke(Dt,n),Ke(Ht,Ht.current),!0}function yp(n,s,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=gp(n,s,Ws),c.__reactInternalMemoizedMergedChildContext=n,Je(Ht),Je(Dt),Ke(Dt,n)):Je(Ht),Ke(Ht,a)}var _r=null,$l=!1,Xc=!1;function _p(n){_r===null?_r=[n]:_r.push(n)}function aw(n){$l=!0,_p(n)}function Zr(){if(!Xc&&_r!==null){Xc=!0;var n=0,s=Ve;try{var a=_r;for(Ve=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}_r=null,$l=!1}catch(d){throw _r!==null&&(_r=_r.slice(n+1)),$o(Ci,Zr),d}finally{Ve=s,Xc=!1}}return null}var Wi=[],Ki=0,ql=null,Hl=0,cn=[],hn=0,Ks=null,vr=1,wr="";function Qs(n,s){Wi[Ki++]=Hl,Wi[Ki++]=ql,ql=n,Hl=s}function vp(n,s,a){cn[hn++]=vr,cn[hn++]=wr,cn[hn++]=Ks,Ks=n;var c=vr;n=wr;var d=32-Zt(c)-1;c&=~(1<<d),a+=1;var p=32-Zt(s)+d;if(30<p){var v=d-d%5;p=(c&(1<<v)-1).toString(32),c>>=v,d-=v,vr=1<<32-Zt(s)+d|a<<d|c,wr=p+n}else vr=1<<p|a<<d|c,wr=n}function Jc(n){n.return!==null&&(Qs(n,1),vp(n,1,0))}function Zc(n){for(;n===ql;)ql=Wi[--Ki],Wi[Ki]=null,Hl=Wi[--Ki],Wi[Ki]=null;for(;n===Ks;)Ks=cn[--hn],cn[hn]=null,wr=cn[--hn],cn[hn]=null,vr=cn[--hn],cn[hn]=null}var sn=null,on=null,et=!1,xn=null;function wp(n,s){var a=mn(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=n,s=n.deletions,s===null?(n.deletions=[a],n.flags|=16):s.push(a)}function Ep(n,s){switch(n.tag){case 5:var a=n.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(n.stateNode=s,sn=n,on=Yr(s.firstChild),!0):!1;case 6:return s=n.pendingProps===""||s.nodeType!==3?null:s,s!==null?(n.stateNode=s,sn=n,on=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=Ks!==null?{id:vr,overflow:wr}:null,n.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=mn(18,null,null,0),a.stateNode=s,a.return=n,n.child=a,sn=n,on=null,!0):!1;default:return!1}}function eh(n){return(n.mode&1)!==0&&(n.flags&128)===0}function th(n){if(et){var s=on;if(s){var a=s;if(!Ep(n,s)){if(eh(n))throw Error(t(418));s=Yr(a.nextSibling);var c=sn;s&&Ep(n,s)?wp(c,a):(n.flags=n.flags&-4097|2,et=!1,sn=n)}}else{if(eh(n))throw Error(t(418));n.flags=n.flags&-4097|2,et=!1,sn=n}}}function Tp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;sn=n}function Gl(n){if(n!==sn)return!1;if(!et)return Tp(n),et=!0,!1;var s;if((s=n.tag!==3)&&!(s=n.tag!==5)&&(s=n.type,s=s!=="head"&&s!=="body"&&!Gc(n.type,n.memoizedProps)),s&&(s=on)){if(eh(n))throw Ip(),Error(t(418));for(;s;)wp(n,s),s=Yr(s.nextSibling)}if(Tp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,s=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(s===0){on=Yr(n.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}n=n.nextSibling}on=null}}else on=sn?Yr(n.stateNode.nextSibling):null;return!0}function Ip(){for(var n=on;n;)n=Yr(n.nextSibling)}function Qi(){on=sn=null,et=!1}function nh(n){xn===null?xn=[n]:xn.push(n)}var lw=ve.ReactCurrentBatchConfig;function pa(n,s,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,p=""+n;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===p?s.ref:(s=function(v){var x=d.refs;v===null?delete x[p]:x[p]=v},s._stringRef=p,s)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Wl(n,s){throw n=Object.prototype.toString.call(s),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":n))}function Sp(n){var s=n._init;return s(n._payload)}function xp(n){function s(M,D){if(n){var U=M.deletions;U===null?(M.deletions=[D],M.flags|=16):U.push(D)}}function a(M,D){if(!n)return null;for(;D!==null;)s(M,D),D=D.sibling;return null}function c(M,D){for(M=new Map;D!==null;)D.key!==null?M.set(D.key,D):M.set(D.index,D),D=D.sibling;return M}function d(M,D){return M=as(M,D),M.index=0,M.sibling=null,M}function p(M,D,U){return M.index=U,n?(U=M.alternate,U!==null?(U=U.index,U<D?(M.flags|=2,D):U):(M.flags|=2,D)):(M.flags|=1048576,D)}function v(M){return n&&M.alternate===null&&(M.flags|=2),M}function x(M,D,U,te){return D===null||D.tag!==6?(D=Wh(U,M.mode,te),D.return=M,D):(D=d(D,U),D.return=M,D)}function P(M,D,U,te){var de=U.type;return de===N?Y(M,D,U.props.children,te,U.key):D!==null&&(D.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===ze&&Sp(de)===D.type)?(te=d(D,U.props),te.ref=pa(M,D,U),te.return=M,te):(te=yu(U.type,U.key,U.props,null,M.mode,te),te.ref=pa(M,D,U),te.return=M,te)}function z(M,D,U,te){return D===null||D.tag!==4||D.stateNode.containerInfo!==U.containerInfo||D.stateNode.implementation!==U.implementation?(D=Kh(U,M.mode,te),D.return=M,D):(D=d(D,U.children||[]),D.return=M,D)}function Y(M,D,U,te,de){return D===null||D.tag!==7?(D=ri(U,M.mode,te,de),D.return=M,D):(D=d(D,U),D.return=M,D)}function J(M,D,U){if(typeof D=="string"&&D!==""||typeof D=="number")return D=Wh(""+D,M.mode,U),D.return=M,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case xe:return U=yu(D.type,D.key,D.props,null,M.mode,U),U.ref=pa(M,null,D),U.return=M,U;case me:return D=Kh(D,M.mode,U),D.return=M,D;case ze:var te=D._init;return J(M,te(D._payload),U)}if(at(D)||X(D))return D=ri(D,M.mode,U,null),D.return=M,D;Wl(M,D)}return null}function Q(M,D,U,te){var de=D!==null?D.key:null;if(typeof U=="string"&&U!==""||typeof U=="number")return de!==null?null:x(M,D,""+U,te);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case xe:return U.key===de?P(M,D,U,te):null;case me:return U.key===de?z(M,D,U,te):null;case ze:return de=U._init,Q(M,D,de(U._payload),te)}if(at(U)||X(U))return de!==null?null:Y(M,D,U,te,null);Wl(M,U)}return null}function ie(M,D,U,te,de){if(typeof te=="string"&&te!==""||typeof te=="number")return M=M.get(U)||null,x(D,M,""+te,de);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case xe:return M=M.get(te.key===null?U:te.key)||null,P(D,M,te,de);case me:return M=M.get(te.key===null?U:te.key)||null,z(D,M,te,de);case ze:var ge=te._init;return ie(M,D,U,ge(te._payload),de)}if(at(te)||X(te))return M=M.get(U)||null,Y(D,M,te,de,null);Wl(D,te)}return null}function ce(M,D,U,te){for(var de=null,ge=null,ye=D,Te=D=0,Tt=null;ye!==null&&Te<U.length;Te++){ye.index>Te?(Tt=ye,ye=null):Tt=ye.sibling;var Be=Q(M,ye,U[Te],te);if(Be===null){ye===null&&(ye=Tt);break}n&&ye&&Be.alternate===null&&s(M,ye),D=p(Be,D,Te),ge===null?de=Be:ge.sibling=Be,ge=Be,ye=Tt}if(Te===U.length)return a(M,ye),et&&Qs(M,Te),de;if(ye===null){for(;Te<U.length;Te++)ye=J(M,U[Te],te),ye!==null&&(D=p(ye,D,Te),ge===null?de=ye:ge.sibling=ye,ge=ye);return et&&Qs(M,Te),de}for(ye=c(M,ye);Te<U.length;Te++)Tt=ie(ye,M,Te,U[Te],te),Tt!==null&&(n&&Tt.alternate!==null&&ye.delete(Tt.key===null?Te:Tt.key),D=p(Tt,D,Te),ge===null?de=Tt:ge.sibling=Tt,ge=Tt);return n&&ye.forEach(function(ls){return s(M,ls)}),et&&Qs(M,Te),de}function he(M,D,U,te){var de=X(U);if(typeof de!="function")throw Error(t(150));if(U=de.call(U),U==null)throw Error(t(151));for(var ge=de=null,ye=D,Te=D=0,Tt=null,Be=U.next();ye!==null&&!Be.done;Te++,Be=U.next()){ye.index>Te?(Tt=ye,ye=null):Tt=ye.sibling;var ls=Q(M,ye,Be.value,te);if(ls===null){ye===null&&(ye=Tt);break}n&&ye&&ls.alternate===null&&s(M,ye),D=p(ls,D,Te),ge===null?de=ls:ge.sibling=ls,ge=ls,ye=Tt}if(Be.done)return a(M,ye),et&&Qs(M,Te),de;if(ye===null){for(;!Be.done;Te++,Be=U.next())Be=J(M,Be.value,te),Be!==null&&(D=p(Be,D,Te),ge===null?de=Be:ge.sibling=Be,ge=Be);return et&&Qs(M,Te),de}for(ye=c(M,ye);!Be.done;Te++,Be=U.next())Be=ie(ye,M,Te,Be.value,te),Be!==null&&(n&&Be.alternate!==null&&ye.delete(Be.key===null?Te:Be.key),D=p(Be,D,Te),ge===null?de=Be:ge.sibling=Be,ge=Be);return n&&ye.forEach(function(zw){return s(M,zw)}),et&&Qs(M,Te),de}function ut(M,D,U,te){if(typeof U=="object"&&U!==null&&U.type===N&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case xe:e:{for(var de=U.key,ge=D;ge!==null;){if(ge.key===de){if(de=U.type,de===N){if(ge.tag===7){a(M,ge.sibling),D=d(ge,U.props.children),D.return=M,M=D;break e}}else if(ge.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===ze&&Sp(de)===ge.type){a(M,ge.sibling),D=d(ge,U.props),D.ref=pa(M,ge,U),D.return=M,M=D;break e}a(M,ge);break}else s(M,ge);ge=ge.sibling}U.type===N?(D=ri(U.props.children,M.mode,te,U.key),D.return=M,M=D):(te=yu(U.type,U.key,U.props,null,M.mode,te),te.ref=pa(M,D,U),te.return=M,M=te)}return v(M);case me:e:{for(ge=U.key;D!==null;){if(D.key===ge)if(D.tag===4&&D.stateNode.containerInfo===U.containerInfo&&D.stateNode.implementation===U.implementation){a(M,D.sibling),D=d(D,U.children||[]),D.return=M,M=D;break e}else{a(M,D);break}else s(M,D);D=D.sibling}D=Kh(U,M.mode,te),D.return=M,M=D}return v(M);case ze:return ge=U._init,ut(M,D,ge(U._payload),te)}if(at(U))return ce(M,D,U,te);if(X(U))return he(M,D,U,te);Wl(M,U)}return typeof U=="string"&&U!==""||typeof U=="number"?(U=""+U,D!==null&&D.tag===6?(a(M,D.sibling),D=d(D,U),D.return=M,M=D):(a(M,D),D=Wh(U,M.mode,te),D.return=M,M=D),v(M)):a(M,D)}return ut}var Yi=xp(!0),Cp=xp(!1),Kl=Xr(null),Ql=null,Xi=null,rh=null;function sh(){rh=Xi=Ql=null}function ih(n){var s=Kl.current;Je(Kl),n._currentValue=s}function oh(n,s,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&s)!==s?(n.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),n===a)break;n=n.return}}function Ji(n,s){Ql=n,rh=Xi=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&s)!==0&&(Wt=!0),n.firstContext=null)}function dn(n){var s=n._currentValue;if(rh!==n)if(n={context:n,memoizedValue:s,next:null},Xi===null){if(Ql===null)throw Error(t(308));Xi=n,Ql.dependencies={lanes:0,firstContext:n}}else Xi=Xi.next=n;return s}var Ys=null;function ah(n){Ys===null?Ys=[n]:Ys.push(n)}function Ap(n,s,a,c){var d=s.interleaved;return d===null?(a.next=a,ah(s)):(a.next=d.next,d.next=a),s.interleaved=a,Er(n,c)}function Er(n,s){n.lanes|=s;var a=n.alternate;for(a!==null&&(a.lanes|=s),a=n,n=n.return;n!==null;)n.childLanes|=s,a=n.alternate,a!==null&&(a.childLanes|=s),a=n,n=n.return;return a.tag===3?a.stateNode:null}var es=!1;function lh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rp(n,s){n=n.updateQueue,s.updateQueue===n&&(s.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Tr(n,s){return{eventTime:n,lane:s,tag:0,payload:null,callback:null,next:null}}function ts(n,s,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Ue&2)!==0){var d=c.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s,Er(n,a)}return d=c.interleaved,d===null?(s.next=s,ah(c)):(s.next=d.next,d.next=s),c.interleaved=s,Er(n,a)}function Yl(n,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var c=s.lanes;c&=n.pendingLanes,a|=c,s.lanes=a,Qo(n,a)}}function Pp(n,s){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=v:p=p.next=v,a=a.next}while(a!==null);p===null?d=p=s:p=p.next=s}else d=p=s;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=s:n.next=s,a.lastBaseUpdate=s}function Xl(n,s,a,c){var d=n.updateQueue;es=!1;var p=d.firstBaseUpdate,v=d.lastBaseUpdate,x=d.shared.pending;if(x!==null){d.shared.pending=null;var P=x,z=P.next;P.next=null,v===null?p=z:v.next=z,v=P;var Y=n.alternate;Y!==null&&(Y=Y.updateQueue,x=Y.lastBaseUpdate,x!==v&&(x===null?Y.firstBaseUpdate=z:x.next=z,Y.lastBaseUpdate=P))}if(p!==null){var J=d.baseState;v=0,Y=z=P=null,x=p;do{var Q=x.lane,ie=x.eventTime;if((c&Q)===Q){Y!==null&&(Y=Y.next={eventTime:ie,lane:0,tag:x.tag,payload:x.payload,callback:x.callback,next:null});e:{var ce=n,he=x;switch(Q=s,ie=a,he.tag){case 1:if(ce=he.payload,typeof ce=="function"){J=ce.call(ie,J,Q);break e}J=ce;break e;case 3:ce.flags=ce.flags&-65537|128;case 0:if(ce=he.payload,Q=typeof ce=="function"?ce.call(ie,J,Q):ce,Q==null)break e;J=K({},J,Q);break e;case 2:es=!0}}x.callback!==null&&x.lane!==0&&(n.flags|=64,Q=d.effects,Q===null?d.effects=[x]:Q.push(x))}else ie={eventTime:ie,lane:Q,tag:x.tag,payload:x.payload,callback:x.callback,next:null},Y===null?(z=Y=ie,P=J):Y=Y.next=ie,v|=Q;if(x=x.next,x===null){if(x=d.shared.pending,x===null)break;Q=x,x=Q.next,Q.next=null,d.lastBaseUpdate=Q,d.shared.pending=null}}while(!0);if(Y===null&&(P=J),d.baseState=P,d.firstBaseUpdate=z,d.lastBaseUpdate=Y,s=d.shared.interleaved,s!==null){d=s;do v|=d.lane,d=d.next;while(d!==s)}else p===null&&(d.shared.lanes=0);Zs|=v,n.lanes=v,n.memoizedState=J}}function kp(n,s,a){if(n=s.effects,s.effects=null,n!==null)for(s=0;s<n.length;s++){var c=n[s],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ma={},Qn=Xr(ma),ga=Xr(ma),ya=Xr(ma);function Xs(n){if(n===ma)throw Error(t(174));return n}function uh(n,s){switch(Ke(ya,s),Ke(ga,n),Ke(Qn,ma),n=s.nodeType,n){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:wi(null,"");break;default:n=n===8?s.parentNode:s,s=n.namespaceURI||null,n=n.tagName,s=wi(s,n)}Je(Qn),Ke(Qn,s)}function Zi(){Je(Qn),Je(ga),Je(ya)}function Np(n){Xs(ya.current);var s=Xs(Qn.current),a=wi(s,n.type);s!==a&&(Ke(ga,n),Ke(Qn,a))}function ch(n){ga.current===n&&(Je(Qn),Je(ga))}var tt=Xr(0);function Jl(n){for(var s=n;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var hh=[];function dh(){for(var n=0;n<hh.length;n++)hh[n]._workInProgressVersionPrimary=null;hh.length=0}var Zl=ve.ReactCurrentDispatcher,fh=ve.ReactCurrentBatchConfig,Js=0,nt=null,yt=null,wt=null,eu=!1,_a=!1,va=0,uw=0;function Ot(){throw Error(t(321))}function ph(n,s){if(s===null)return!1;for(var a=0;a<s.length&&a<n.length;a++)if(!Sn(n[a],s[a]))return!1;return!0}function mh(n,s,a,c,d,p){if(Js=p,nt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Zl.current=n===null||n.memoizedState===null?fw:pw,n=a(c,d),_a){p=0;do{if(_a=!1,va=0,25<=p)throw Error(t(301));p+=1,wt=yt=null,s.updateQueue=null,Zl.current=mw,n=a(c,d)}while(_a)}if(Zl.current=ru,s=yt!==null&&yt.next!==null,Js=0,wt=yt=nt=null,eu=!1,s)throw Error(t(300));return n}function gh(){var n=va!==0;return va=0,n}function Yn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wt===null?nt.memoizedState=wt=n:wt=wt.next=n,wt}function fn(){if(yt===null){var n=nt.alternate;n=n!==null?n.memoizedState:null}else n=yt.next;var s=wt===null?nt.memoizedState:wt.next;if(s!==null)wt=s,yt=n;else{if(n===null)throw Error(t(310));yt=n,n={memoizedState:yt.memoizedState,baseState:yt.baseState,baseQueue:yt.baseQueue,queue:yt.queue,next:null},wt===null?nt.memoizedState=wt=n:wt=wt.next=n}return wt}function wa(n,s){return typeof s=="function"?s(n):s}function yh(n){var s=fn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=yt,d=c.baseQueue,p=a.pending;if(p!==null){if(d!==null){var v=d.next;d.next=p.next,p.next=v}c.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,c=c.baseState;var x=v=null,P=null,z=p;do{var Y=z.lane;if((Js&Y)===Y)P!==null&&(P=P.next={lane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),c=z.hasEagerState?z.eagerState:n(c,z.action);else{var J={lane:Y,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null};P===null?(x=P=J,v=c):P=P.next=J,nt.lanes|=Y,Zs|=Y}z=z.next}while(z!==null&&z!==p);P===null?v=c:P.next=x,Sn(c,s.memoizedState)||(Wt=!0),s.memoizedState=c,s.baseState=v,s.baseQueue=P,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do p=d.lane,nt.lanes|=p,Zs|=p,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function _h(n){var s=fn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,p=s.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do p=n(p,v.action),v=v.next;while(v!==d);Sn(p,s.memoizedState)||(Wt=!0),s.memoizedState=p,s.baseQueue===null&&(s.baseState=p),a.lastRenderedState=p}return[p,c]}function bp(){}function Dp(n,s){var a=nt,c=fn(),d=s(),p=!Sn(c.memoizedState,d);if(p&&(c.memoizedState=d,Wt=!0),c=c.queue,vh(Mp.bind(null,a,c,n),[n]),c.getSnapshot!==s||p||wt!==null&&wt.memoizedState.tag&1){if(a.flags|=2048,Ea(9,Vp.bind(null,a,c,d,s),void 0,null),Et===null)throw Error(t(349));(Js&30)!==0||Op(a,s,d)}return d}function Op(n,s,a){n.flags|=16384,n={getSnapshot:s,value:a},s=nt.updateQueue,s===null?(s={lastEffect:null,stores:null},nt.updateQueue=s,s.stores=[n]):(a=s.stores,a===null?s.stores=[n]:a.push(n))}function Vp(n,s,a,c){s.value=a,s.getSnapshot=c,Lp(s)&&jp(n)}function Mp(n,s,a){return a(function(){Lp(s)&&jp(n)})}function Lp(n){var s=n.getSnapshot;n=n.value;try{var a=s();return!Sn(n,a)}catch{return!0}}function jp(n){var s=Er(n,1);s!==null&&Pn(s,n,1,-1)}function Fp(n){var s=Yn();return typeof n=="function"&&(n=n()),s.memoizedState=s.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:n},s.queue=n,n=n.dispatch=dw.bind(null,nt,n),[s.memoizedState,n]}function Ea(n,s,a,c){return n={tag:n,create:s,destroy:a,deps:c,next:null},s=nt.updateQueue,s===null?(s={lastEffect:null,stores:null},nt.updateQueue=s,s.lastEffect=n.next=n):(a=s.lastEffect,a===null?s.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,s.lastEffect=n)),n}function Up(){return fn().memoizedState}function tu(n,s,a,c){var d=Yn();nt.flags|=n,d.memoizedState=Ea(1|s,a,void 0,c===void 0?null:c)}function nu(n,s,a,c){var d=fn();c=c===void 0?null:c;var p=void 0;if(yt!==null){var v=yt.memoizedState;if(p=v.destroy,c!==null&&ph(c,v.deps)){d.memoizedState=Ea(s,a,p,c);return}}nt.flags|=n,d.memoizedState=Ea(1|s,a,p,c)}function zp(n,s){return tu(8390656,8,n,s)}function vh(n,s){return nu(2048,8,n,s)}function Bp(n,s){return nu(4,2,n,s)}function $p(n,s){return nu(4,4,n,s)}function qp(n,s){if(typeof s=="function")return n=n(),s(n),function(){s(null)};if(s!=null)return n=n(),s.current=n,function(){s.current=null}}function Hp(n,s,a){return a=a!=null?a.concat([n]):null,nu(4,4,qp.bind(null,s,n),a)}function wh(){}function Gp(n,s){var a=fn();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&ph(s,c[1])?c[0]:(a.memoizedState=[n,s],n)}function Wp(n,s){var a=fn();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&ph(s,c[1])?c[0]:(n=n(),a.memoizedState=[n,s],n)}function Kp(n,s,a){return(Js&21)===0?(n.baseState&&(n.baseState=!1,Wt=!0),n.memoizedState=a):(Sn(a,s)||(a=Wo(),nt.lanes|=a,Zs|=a,n.baseState=!0),s)}function cw(n,s){var a=Ve;Ve=a!==0&&4>a?a:4,n(!0);var c=fh.transition;fh.transition={};try{n(!1),s()}finally{Ve=a,fh.transition=c}}function Qp(){return fn().memoizedState}function hw(n,s,a){var c=is(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Yp(n))Xp(s,a);else if(a=Ap(n,s,a,c),a!==null){var d=qt();Pn(a,n,c,d),Jp(a,s,c)}}function dw(n,s,a){var c=is(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Yp(n))Xp(s,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=s.lastRenderedReducer,p!==null))try{var v=s.lastRenderedState,x=p(v,a);if(d.hasEagerState=!0,d.eagerState=x,Sn(x,v)){var P=s.interleaved;P===null?(d.next=d,ah(s)):(d.next=P.next,P.next=d),s.interleaved=d;return}}catch{}finally{}a=Ap(n,s,d,c),a!==null&&(d=qt(),Pn(a,n,c,d),Jp(a,s,c))}}function Yp(n){var s=n.alternate;return n===nt||s!==null&&s===nt}function Xp(n,s){_a=eu=!0;var a=n.pending;a===null?s.next=s:(s.next=a.next,a.next=s),n.pending=s}function Jp(n,s,a){if((a&4194240)!==0){var c=s.lanes;c&=n.pendingLanes,a|=c,s.lanes=a,Qo(n,a)}}var ru={readContext:dn,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},fw={readContext:dn,useCallback:function(n,s){return Yn().memoizedState=[n,s===void 0?null:s],n},useContext:dn,useEffect:zp,useImperativeHandle:function(n,s,a){return a=a!=null?a.concat([n]):null,tu(4194308,4,qp.bind(null,s,n),a)},useLayoutEffect:function(n,s){return tu(4194308,4,n,s)},useInsertionEffect:function(n,s){return tu(4,2,n,s)},useMemo:function(n,s){var a=Yn();return s=s===void 0?null:s,n=n(),a.memoizedState=[n,s],n},useReducer:function(n,s,a){var c=Yn();return s=a!==void 0?a(s):s,c.memoizedState=c.baseState=s,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:s},c.queue=n,n=n.dispatch=hw.bind(null,nt,n),[c.memoizedState,n]},useRef:function(n){var s=Yn();return n={current:n},s.memoizedState=n},useState:Fp,useDebugValue:wh,useDeferredValue:function(n){return Yn().memoizedState=n},useTransition:function(){var n=Fp(!1),s=n[0];return n=cw.bind(null,n[1]),Yn().memoizedState=n,[s,n]},useMutableSource:function(){},useSyncExternalStore:function(n,s,a){var c=nt,d=Yn();if(et){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),Et===null)throw Error(t(349));(Js&30)!==0||Op(c,s,a)}d.memoizedState=a;var p={value:a,getSnapshot:s};return d.queue=p,zp(Mp.bind(null,c,p,n),[n]),c.flags|=2048,Ea(9,Vp.bind(null,c,p,a,s),void 0,null),a},useId:function(){var n=Yn(),s=Et.identifierPrefix;if(et){var a=wr,c=vr;a=(c&~(1<<32-Zt(c)-1)).toString(32)+a,s=":"+s+"R"+a,a=va++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=uw++,s=":"+s+"r"+a.toString(32)+":";return n.memoizedState=s},unstable_isNewReconciler:!1},pw={readContext:dn,useCallback:Gp,useContext:dn,useEffect:vh,useImperativeHandle:Hp,useInsertionEffect:Bp,useLayoutEffect:$p,useMemo:Wp,useReducer:yh,useRef:Up,useState:function(){return yh(wa)},useDebugValue:wh,useDeferredValue:function(n){var s=fn();return Kp(s,yt.memoizedState,n)},useTransition:function(){var n=yh(wa)[0],s=fn().memoizedState;return[n,s]},useMutableSource:bp,useSyncExternalStore:Dp,useId:Qp,unstable_isNewReconciler:!1},mw={readContext:dn,useCallback:Gp,useContext:dn,useEffect:vh,useImperativeHandle:Hp,useInsertionEffect:Bp,useLayoutEffect:$p,useMemo:Wp,useReducer:_h,useRef:Up,useState:function(){return _h(wa)},useDebugValue:wh,useDeferredValue:function(n){var s=fn();return yt===null?s.memoizedState=n:Kp(s,yt.memoizedState,n)},useTransition:function(){var n=_h(wa)[0],s=fn().memoizedState;return[n,s]},useMutableSource:bp,useSyncExternalStore:Dp,useId:Qp,unstable_isNewReconciler:!1};function Cn(n,s){if(n&&n.defaultProps){s=K({},s),n=n.defaultProps;for(var a in n)s[a]===void 0&&(s[a]=n[a]);return s}return s}function Eh(n,s,a,c){s=n.memoizedState,a=a(c,s),a=a==null?s:K({},s,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var su={isMounted:function(n){return(n=n._reactInternals)?Tn(n)===n:!1},enqueueSetState:function(n,s,a){n=n._reactInternals;var c=qt(),d=is(n),p=Tr(c,d);p.payload=s,a!=null&&(p.callback=a),s=ts(n,p,d),s!==null&&(Pn(s,n,d,c),Yl(s,n,d))},enqueueReplaceState:function(n,s,a){n=n._reactInternals;var c=qt(),d=is(n),p=Tr(c,d);p.tag=1,p.payload=s,a!=null&&(p.callback=a),s=ts(n,p,d),s!==null&&(Pn(s,n,d,c),Yl(s,n,d))},enqueueForceUpdate:function(n,s){n=n._reactInternals;var a=qt(),c=is(n),d=Tr(a,c);d.tag=2,s!=null&&(d.callback=s),s=ts(n,d,c),s!==null&&(Pn(s,n,c,a),Yl(s,n,c))}};function Zp(n,s,a,c,d,p,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,v):s.prototype&&s.prototype.isPureReactComponent?!aa(a,c)||!aa(d,p):!0}function em(n,s,a){var c=!1,d=Jr,p=s.contextType;return typeof p=="object"&&p!==null?p=dn(p):(d=Gt(s)?Ws:Dt.current,c=s.contextTypes,p=(c=c!=null)?Gi(n,d):Jr),s=new s(a,p),n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=su,n.stateNode=s,s._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),s}function tm(n,s,a,c){n=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==n&&su.enqueueReplaceState(s,s.state,null)}function Th(n,s,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},lh(n);var p=s.contextType;typeof p=="object"&&p!==null?d.context=dn(p):(p=Gt(s)?Ws:Dt.current,d.context=Gi(n,p)),d.state=n.memoizedState,p=s.getDerivedStateFromProps,typeof p=="function"&&(Eh(n,s,p,a),d.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(s=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),s!==d.state&&su.enqueueReplaceState(d,d.state,null),Xl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function eo(n,s){try{var a="",c=s;do a+=Ee(c),c=c.return;while(c);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:s,stack:d,digest:null}}function Ih(n,s,a){return{value:n,source:null,stack:a??null,digest:s??null}}function Sh(n,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var gw=typeof WeakMap=="function"?WeakMap:Map;function nm(n,s,a){a=Tr(-1,a),a.tag=3,a.payload={element:null};var c=s.value;return a.callback=function(){hu||(hu=!0,Fh=c),Sh(n,s)},a}function rm(n,s,a){a=Tr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=s.value;a.payload=function(){return c(d)},a.callback=function(){Sh(n,s)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){Sh(n,s),typeof c!="function"&&(rs===null?rs=new Set([this]):rs.add(this));var v=s.stack;this.componentDidCatch(s.value,{componentStack:v!==null?v:""})}),a}function sm(n,s,a){var c=n.pingCache;if(c===null){c=n.pingCache=new gw;var d=new Set;c.set(s,d)}else d=c.get(s),d===void 0&&(d=new Set,c.set(s,d));d.has(a)||(d.add(a),n=kw.bind(null,n,s,a),s.then(n,n))}function im(n){do{var s;if((s=n.tag===13)&&(s=n.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return n;n=n.return}while(n!==null);return null}function om(n,s,a,c,d){return(n.mode&1)===0?(n===s?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Tr(-1,1),s.tag=2,ts(a,s,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var yw=ve.ReactCurrentOwner,Wt=!1;function $t(n,s,a,c){s.child=n===null?Cp(s,null,a,c):Yi(s,n.child,a,c)}function am(n,s,a,c,d){a=a.render;var p=s.ref;return Ji(s,d),c=mh(n,s,a,c,p,d),a=gh(),n!==null&&!Wt?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~d,Ir(n,s,d)):(et&&a&&Jc(s),s.flags|=1,$t(n,s,c,d),s.child)}function lm(n,s,a,c,d){if(n===null){var p=a.type;return typeof p=="function"&&!Gh(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=p,um(n,s,p,c,d)):(n=yu(a.type,null,c,s,s.mode,d),n.ref=s.ref,n.return=s,s.child=n)}if(p=n.child,(n.lanes&d)===0){var v=p.memoizedProps;if(a=a.compare,a=a!==null?a:aa,a(v,c)&&n.ref===s.ref)return Ir(n,s,d)}return s.flags|=1,n=as(p,c),n.ref=s.ref,n.return=s,s.child=n}function um(n,s,a,c,d){if(n!==null){var p=n.memoizedProps;if(aa(p,c)&&n.ref===s.ref)if(Wt=!1,s.pendingProps=c=p,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Wt=!0);else return s.lanes=n.lanes,Ir(n,s,d)}return xh(n,s,a,c,d)}function cm(n,s,a){var c=s.pendingProps,d=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ke(no,an),an|=a;else{if((a&1073741824)===0)return n=p!==null?p.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:n,cachePool:null,transitions:null},s.updateQueue=null,Ke(no,an),an|=n,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,Ke(no,an),an|=c}else p!==null?(c=p.baseLanes|a,s.memoizedState=null):c=a,Ke(no,an),an|=c;return $t(n,s,d,a),s.child}function hm(n,s){var a=s.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function xh(n,s,a,c,d){var p=Gt(a)?Ws:Dt.current;return p=Gi(s,p),Ji(s,d),a=mh(n,s,a,c,p,d),c=gh(),n!==null&&!Wt?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~d,Ir(n,s,d)):(et&&c&&Jc(s),s.flags|=1,$t(n,s,a,d),s.child)}function dm(n,s,a,c,d){if(Gt(a)){var p=!0;Bl(s)}else p=!1;if(Ji(s,d),s.stateNode===null)ou(n,s),em(s,a,c),Th(s,a,c,d),c=!0;else if(n===null){var v=s.stateNode,x=s.memoizedProps;v.props=x;var P=v.context,z=a.contextType;typeof z=="object"&&z!==null?z=dn(z):(z=Gt(a)?Ws:Dt.current,z=Gi(s,z));var Y=a.getDerivedStateFromProps,J=typeof Y=="function"||typeof v.getSnapshotBeforeUpdate=="function";J||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(x!==c||P!==z)&&tm(s,v,c,z),es=!1;var Q=s.memoizedState;v.state=Q,Xl(s,c,v,d),P=s.memoizedState,x!==c||Q!==P||Ht.current||es?(typeof Y=="function"&&(Eh(s,a,Y,c),P=s.memoizedState),(x=es||Zp(s,a,x,c,Q,P,z))?(J||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(s.flags|=4194308)):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=P),v.props=c,v.state=P,v.context=z,c=x):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{v=s.stateNode,Rp(n,s),x=s.memoizedProps,z=s.type===s.elementType?x:Cn(s.type,x),v.props=z,J=s.pendingProps,Q=v.context,P=a.contextType,typeof P=="object"&&P!==null?P=dn(P):(P=Gt(a)?Ws:Dt.current,P=Gi(s,P));var ie=a.getDerivedStateFromProps;(Y=typeof ie=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(x!==J||Q!==P)&&tm(s,v,c,P),es=!1,Q=s.memoizedState,v.state=Q,Xl(s,c,v,d);var ce=s.memoizedState;x!==J||Q!==ce||Ht.current||es?(typeof ie=="function"&&(Eh(s,a,ie,c),ce=s.memoizedState),(z=es||Zp(s,a,z,c,Q,ce,P)||!1)?(Y||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,ce,P),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,ce,P)),typeof v.componentDidUpdate=="function"&&(s.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof v.componentDidUpdate!="function"||x===n.memoizedProps&&Q===n.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||x===n.memoizedProps&&Q===n.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=ce),v.props=c,v.state=ce,v.context=P,c=z):(typeof v.componentDidUpdate!="function"||x===n.memoizedProps&&Q===n.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||x===n.memoizedProps&&Q===n.memoizedState||(s.flags|=1024),c=!1)}return Ch(n,s,a,c,p,d)}function Ch(n,s,a,c,d,p){hm(n,s);var v=(s.flags&128)!==0;if(!c&&!v)return d&&yp(s,a,!1),Ir(n,s,p);c=s.stateNode,yw.current=s;var x=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,n!==null&&v?(s.child=Yi(s,n.child,null,p),s.child=Yi(s,null,x,p)):$t(n,s,x,p),s.memoizedState=c.state,d&&yp(s,a,!0),s.child}function fm(n){var s=n.stateNode;s.pendingContext?mp(n,s.pendingContext,s.pendingContext!==s.context):s.context&&mp(n,s.context,!1),uh(n,s.containerInfo)}function pm(n,s,a,c,d){return Qi(),nh(d),s.flags|=256,$t(n,s,a,c),s.child}var Ah={dehydrated:null,treeContext:null,retryLane:0};function Rh(n){return{baseLanes:n,cachePool:null,transitions:null}}function mm(n,s,a){var c=s.pendingProps,d=tt.current,p=!1,v=(s.flags&128)!==0,x;if((x=v)||(x=n!==null&&n.memoizedState===null?!1:(d&2)!==0),x?(p=!0,s.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Ke(tt,d&1),n===null)return th(s),n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((s.mode&1)===0?s.lanes=1:n.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(v=c.children,n=c.fallback,p?(c=s.mode,p=s.child,v={mode:"hidden",children:v},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=v):p=_u(v,c,0,null),n=ri(n,c,a,null),p.return=s,n.return=s,p.sibling=n,s.child=p,s.child.memoizedState=Rh(a),s.memoizedState=Ah,n):Ph(s,v));if(d=n.memoizedState,d!==null&&(x=d.dehydrated,x!==null))return _w(n,s,v,c,x,d,a);if(p){p=c.fallback,v=s.mode,d=n.child,x=d.sibling;var P={mode:"hidden",children:c.children};return(v&1)===0&&s.child!==d?(c=s.child,c.childLanes=0,c.pendingProps=P,s.deletions=null):(c=as(d,P),c.subtreeFlags=d.subtreeFlags&14680064),x!==null?p=as(x,p):(p=ri(p,v,a,null),p.flags|=2),p.return=s,c.return=s,c.sibling=p,s.child=c,c=p,p=s.child,v=n.child.memoizedState,v=v===null?Rh(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},p.memoizedState=v,p.childLanes=n.childLanes&~a,s.memoizedState=Ah,c}return p=n.child,n=p.sibling,c=as(p,{mode:"visible",children:c.children}),(s.mode&1)===0&&(c.lanes=a),c.return=s,c.sibling=null,n!==null&&(a=s.deletions,a===null?(s.deletions=[n],s.flags|=16):a.push(n)),s.child=c,s.memoizedState=null,c}function Ph(n,s){return s=_u({mode:"visible",children:s},n.mode,0,null),s.return=n,n.child=s}function iu(n,s,a,c){return c!==null&&nh(c),Yi(s,n.child,null,a),n=Ph(s,s.pendingProps.children),n.flags|=2,s.memoizedState=null,n}function _w(n,s,a,c,d,p,v){if(a)return s.flags&256?(s.flags&=-257,c=Ih(Error(t(422))),iu(n,s,v,c)):s.memoizedState!==null?(s.child=n.child,s.flags|=128,null):(p=c.fallback,d=s.mode,c=_u({mode:"visible",children:c.children},d,0,null),p=ri(p,d,v,null),p.flags|=2,c.return=s,p.return=s,c.sibling=p,s.child=c,(s.mode&1)!==0&&Yi(s,n.child,null,v),s.child.memoizedState=Rh(v),s.memoizedState=Ah,p);if((s.mode&1)===0)return iu(n,s,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var x=c.dgst;return c=x,p=Error(t(419)),c=Ih(p,c,void 0),iu(n,s,v,c)}if(x=(v&n.childLanes)!==0,Wt||x){if(c=Et,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,Er(n,d),Pn(c,n,d,-1))}return Hh(),c=Ih(Error(t(421))),iu(n,s,v,c)}return d.data==="$?"?(s.flags|=128,s.child=n.child,s=Nw.bind(null,n),d._reactRetry=s,null):(n=p.treeContext,on=Yr(d.nextSibling),sn=s,et=!0,xn=null,n!==null&&(cn[hn++]=vr,cn[hn++]=wr,cn[hn++]=Ks,vr=n.id,wr=n.overflow,Ks=s),s=Ph(s,c.children),s.flags|=4096,s)}function gm(n,s,a){n.lanes|=s;var c=n.alternate;c!==null&&(c.lanes|=s),oh(n.return,s,a)}function kh(n,s,a,c,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(p.isBackwards=s,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=d)}function ym(n,s,a){var c=s.pendingProps,d=c.revealOrder,p=c.tail;if($t(n,s,c.children,a),c=tt.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=s.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&gm(n,a,s);else if(n.tag===19)gm(n,a,s);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===s)break e;for(;n.sibling===null;){if(n.return===null||n.return===s)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Ke(tt,c),(s.mode&1)===0)s.memoizedState=null;else switch(d){case"forwards":for(a=s.child,d=null;a!==null;)n=a.alternate,n!==null&&Jl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=s.child,s.child=null):(d=a.sibling,a.sibling=null),kh(s,!1,d,a,p);break;case"backwards":for(a=null,d=s.child,s.child=null;d!==null;){if(n=d.alternate,n!==null&&Jl(n)===null){s.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}kh(s,!0,a,null,p);break;case"together":kh(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function ou(n,s){(s.mode&1)===0&&n!==null&&(n.alternate=null,s.alternate=null,s.flags|=2)}function Ir(n,s,a){if(n!==null&&(s.dependencies=n.dependencies),Zs|=s.lanes,(a&s.childLanes)===0)return null;if(n!==null&&s.child!==n.child)throw Error(t(153));if(s.child!==null){for(n=s.child,a=as(n,n.pendingProps),s.child=a,a.return=s;n.sibling!==null;)n=n.sibling,a=a.sibling=as(n,n.pendingProps),a.return=s;a.sibling=null}return s.child}function vw(n,s,a){switch(s.tag){case 3:fm(s),Qi();break;case 5:Np(s);break;case 1:Gt(s.type)&&Bl(s);break;case 4:uh(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,d=s.memoizedProps.value;Ke(Kl,c._currentValue),c._currentValue=d;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(Ke(tt,tt.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?mm(n,s,a):(Ke(tt,tt.current&1),n=Ir(n,s,a),n!==null?n.sibling:null);Ke(tt,tt.current&1);break;case 19:if(c=(a&s.childLanes)!==0,(n.flags&128)!==0){if(c)return ym(n,s,a);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ke(tt,tt.current),c)break;return null;case 22:case 23:return s.lanes=0,cm(n,s,a)}return Ir(n,s,a)}var _m,Nh,vm,wm;_m=function(n,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Nh=function(){},vm=function(n,s,a,c){var d=n.memoizedProps;if(d!==c){n=s.stateNode,Xs(Qn.current);var p=null;switch(a){case"input":d=_i(n,d),c=_i(n,c),p=[];break;case"select":d=K({},d,{value:void 0}),c=K({},c,{value:void 0}),p=[];break;case"textarea":d=Mo(n,d),c=Mo(n,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Fl)}En(a,c);var v;a=null;for(z in d)if(!c.hasOwnProperty(z)&&d.hasOwnProperty(z)&&d[z]!=null)if(z==="style"){var x=d[z];for(v in x)x.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else z!=="dangerouslySetInnerHTML"&&z!=="children"&&z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&z!=="autoFocus"&&(o.hasOwnProperty(z)?p||(p=[]):(p=p||[]).push(z,null));for(z in c){var P=c[z];if(x=d?.[z],c.hasOwnProperty(z)&&P!==x&&(P!=null||x!=null))if(z==="style")if(x){for(v in x)!x.hasOwnProperty(v)||P&&P.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in P)P.hasOwnProperty(v)&&x[v]!==P[v]&&(a||(a={}),a[v]=P[v])}else a||(p||(p=[]),p.push(z,a)),a=P;else z==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,x=x?x.__html:void 0,P!=null&&x!==P&&(p=p||[]).push(z,P)):z==="children"?typeof P!="string"&&typeof P!="number"||(p=p||[]).push(z,""+P):z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&(o.hasOwnProperty(z)?(P!=null&&z==="onScroll"&&Xe("scroll",n),p||x===P||(p=[])):(p=p||[]).push(z,P))}a&&(p=p||[]).push("style",a);var z=p;(s.updateQueue=z)&&(s.flags|=4)}},wm=function(n,s,a,c){a!==c&&(s.flags|=4)};function Ta(n,s){if(!et)switch(n.tailMode){case"hidden":s=n.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Vt(n){var s=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(s)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,s}function ww(n,s,a){var c=s.pendingProps;switch(Zc(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(s),null;case 1:return Gt(s.type)&&zl(),Vt(s),null;case 3:return c=s.stateNode,Zi(),Je(Ht),Je(Dt),dh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Gl(s)?s.flags|=4:n===null||n.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,xn!==null&&(Bh(xn),xn=null))),Nh(n,s),Vt(s),null;case 5:ch(s);var d=Xs(ya.current);if(a=s.type,n!==null&&s.stateNode!=null)vm(n,s,a,c,d),n.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(t(166));return Vt(s),null}if(n=Xs(Qn.current),Gl(s)){c=s.stateNode,a=s.type;var p=s.memoizedProps;switch(c[Kn]=s,c[da]=p,n=(s.mode&1)!==0,a){case"dialog":Xe("cancel",c),Xe("close",c);break;case"iframe":case"object":case"embed":Xe("load",c);break;case"video":case"audio":for(d=0;d<ua.length;d++)Xe(ua[d],c);break;case"source":Xe("error",c);break;case"img":case"image":case"link":Xe("error",c),Xe("load",c);break;case"details":Xe("toggle",c);break;case"input":cl(c,p),Xe("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},Xe("invalid",c);break;case"textarea":Lo(c,p),Xe("invalid",c)}En(a,p),d=null;for(var v in p)if(p.hasOwnProperty(v)){var x=p[v];v==="children"?typeof x=="string"?c.textContent!==x&&(p.suppressHydrationWarning!==!0&&jl(c.textContent,x,n),d=["children",x]):typeof x=="number"&&c.textContent!==""+x&&(p.suppressHydrationWarning!==!0&&jl(c.textContent,x,n),d=["children",""+x]):o.hasOwnProperty(v)&&x!=null&&v==="onScroll"&&Xe("scroll",c)}switch(a){case"input":yi(c),Vo(c,p,!0);break;case"textarea":yi(c),Or(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=Fl)}c=d,s.updateQueue=c,c!==null&&(s.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=jo(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[Kn]=s,n[da]=c,_m(n,s,!1,!1),s.stateNode=n;e:{switch(v=Ti(a,c),a){case"dialog":Xe("cancel",n),Xe("close",n),d=c;break;case"iframe":case"object":case"embed":Xe("load",n),d=c;break;case"video":case"audio":for(d=0;d<ua.length;d++)Xe(ua[d],n);d=c;break;case"source":Xe("error",n),d=c;break;case"img":case"image":case"link":Xe("error",n),Xe("load",n),d=c;break;case"details":Xe("toggle",n),d=c;break;case"input":cl(n,c),d=_i(n,c),Xe("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=K({},c,{value:void 0}),Xe("invalid",n);break;case"textarea":Lo(n,c),d=Mo(n,c),Xe("invalid",n);break;default:d=c}En(a,d),x=d;for(p in x)if(x.hasOwnProperty(p)){var P=x[p];p==="style"?Ei(n,P):p==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&dl(n,P)):p==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&bs(n,P):typeof P=="number"&&bs(n,""+P):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?P!=null&&p==="onScroll"&&Xe("scroll",n):P!=null&&fe(n,p,P,v))}switch(a){case"input":yi(n),Vo(n,c,!1);break;case"textarea":yi(n),Or(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Fe(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?wn(n,!!c.multiple,p,!1):c.defaultValue!=null&&wn(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Fl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Vt(s),null;case 6:if(n&&s.stateNode!=null)wm(n,s,n.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(t(166));if(a=Xs(ya.current),Xs(Qn.current),Gl(s)){if(c=s.stateNode,a=s.memoizedProps,c[Kn]=s,(p=c.nodeValue!==a)&&(n=sn,n!==null))switch(n.tag){case 3:jl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&jl(c.nodeValue,a,(n.mode&1)!==0)}p&&(s.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Kn]=s,s.stateNode=c}return Vt(s),null;case 13:if(Je(tt),c=s.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(et&&on!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Ip(),Qi(),s.flags|=98560,p=!1;else if(p=Gl(s),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=s.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[Kn]=s}else Qi(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Vt(s),p=!1}else xn!==null&&(Bh(xn),xn=null),p=!0;if(!p)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(s.child.flags|=8192,(s.mode&1)!==0&&(n===null||(tt.current&1)!==0?_t===0&&(_t=3):Hh())),s.updateQueue!==null&&(s.flags|=4),Vt(s),null);case 4:return Zi(),Nh(n,s),n===null&&ca(s.stateNode.containerInfo),Vt(s),null;case 10:return ih(s.type._context),Vt(s),null;case 17:return Gt(s.type)&&zl(),Vt(s),null;case 19:if(Je(tt),p=s.memoizedState,p===null)return Vt(s),null;if(c=(s.flags&128)!==0,v=p.rendering,v===null)if(c)Ta(p,!1);else{if(_t!==0||n!==null&&(n.flags&128)!==0)for(n=s.child;n!==null;){if(v=Jl(n),v!==null){for(s.flags|=128,Ta(p,!1),c=v.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=a,a=s.child;a!==null;)p=a,n=c,p.flags&=14680066,v=p.alternate,v===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=v.childLanes,p.lanes=v.lanes,p.child=v.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=v.memoizedProps,p.memoizedState=v.memoizedState,p.updateQueue=v.updateQueue,p.type=v.type,n=v.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Ke(tt,tt.current&1|2),s.child}n=n.sibling}p.tail!==null&&Ye()>ro&&(s.flags|=128,c=!0,Ta(p,!1),s.lanes=4194304)}else{if(!c)if(n=Jl(v),n!==null){if(s.flags|=128,c=!0,a=n.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),Ta(p,!0),p.tail===null&&p.tailMode==="hidden"&&!v.alternate&&!et)return Vt(s),null}else 2*Ye()-p.renderingStartTime>ro&&a!==1073741824&&(s.flags|=128,c=!0,Ta(p,!1),s.lanes=4194304);p.isBackwards?(v.sibling=s.child,s.child=v):(a=p.last,a!==null?a.sibling=v:s.child=v,p.last=v)}return p.tail!==null?(s=p.tail,p.rendering=s,p.tail=s.sibling,p.renderingStartTime=Ye(),s.sibling=null,a=tt.current,Ke(tt,c?a&1|2:a&1),s):(Vt(s),null);case 22:case 23:return qh(),c=s.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(s.flags|=8192),c&&(s.mode&1)!==0?(an&1073741824)!==0&&(Vt(s),s.subtreeFlags&6&&(s.flags|=8192)):Vt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function Ew(n,s){switch(Zc(s),s.tag){case 1:return Gt(s.type)&&zl(),n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 3:return Zi(),Je(Ht),Je(Dt),dh(),n=s.flags,(n&65536)!==0&&(n&128)===0?(s.flags=n&-65537|128,s):null;case 5:return ch(s),null;case 13:if(Je(tt),n=s.memoizedState,n!==null&&n.dehydrated!==null){if(s.alternate===null)throw Error(t(340));Qi()}return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 19:return Je(tt),null;case 4:return Zi(),null;case 10:return ih(s.type._context),null;case 22:case 23:return qh(),null;case 24:return null;default:return null}}var au=!1,Mt=!1,Tw=typeof WeakSet=="function"?WeakSet:Set,le=null;function to(n,s){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){ot(n,s,c)}else a.current=null}function bh(n,s,a){try{a()}catch(c){ot(n,s,c)}}var Em=!1;function Iw(n,s){if(qc=pr,n=Zf(),Mc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var v=0,x=-1,P=-1,z=0,Y=0,J=n,Q=null;t:for(;;){for(var ie;J!==a||d!==0&&J.nodeType!==3||(x=v+d),J!==p||c!==0&&J.nodeType!==3||(P=v+c),J.nodeType===3&&(v+=J.nodeValue.length),(ie=J.firstChild)!==null;)Q=J,J=ie;for(;;){if(J===n)break t;if(Q===a&&++z===d&&(x=v),Q===p&&++Y===c&&(P=v),(ie=J.nextSibling)!==null)break;J=Q,Q=J.parentNode}J=ie}a=x===-1||P===-1?null:{start:x,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Hc={focusedElem:n,selectionRange:a},pr=!1,le=s;le!==null;)if(s=le,n=s.child,(s.subtreeFlags&1028)!==0&&n!==null)n.return=s,le=n;else for(;le!==null;){s=le;try{var ce=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(ce!==null){var he=ce.memoizedProps,ut=ce.memoizedState,M=s.stateNode,D=M.getSnapshotBeforeUpdate(s.elementType===s.type?he:Cn(s.type,he),ut);M.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var U=s.stateNode.containerInfo;U.nodeType===1?U.textContent="":U.nodeType===9&&U.documentElement&&U.removeChild(U.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(te){ot(s,s.return,te)}if(n=s.sibling,n!==null){n.return=s.return,le=n;break}le=s.return}return ce=Em,Em=!1,ce}function Ia(n,s,a){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&bh(s,a,p)}d=d.next}while(d!==c)}}function lu(n,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==s)}}function Dh(n){var s=n.ref;if(s!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof s=="function"?s(n):s.current=n}}function Tm(n){var s=n.alternate;s!==null&&(n.alternate=null,Tm(s)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(s=n.stateNode,s!==null&&(delete s[Kn],delete s[da],delete s[Qc],delete s[iw],delete s[ow])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Im(n){return n.tag===5||n.tag===3||n.tag===4}function Sm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Im(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Oh(n,s,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(n,s):a.insertBefore(n,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(n,a)):(s=a,s.appendChild(n)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=Fl));else if(c!==4&&(n=n.child,n!==null))for(Oh(n,s,a),n=n.sibling;n!==null;)Oh(n,s,a),n=n.sibling}function Vh(n,s,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,s?a.insertBefore(n,s):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Vh(n,s,a),n=n.sibling;n!==null;)Vh(n,s,a),n=n.sibling}var At=null,An=!1;function ns(n,s,a){for(a=a.child;a!==null;)xm(n,s,a),a=a.sibling}function xm(n,s,a){if(Jt&&typeof Jt.onCommitFiberUnmount=="function")try{Jt.onCommitFiberUnmount(Ls,a)}catch{}switch(a.tag){case 5:Mt||to(a,s);case 6:var c=At,d=An;At=null,ns(n,s,a),At=c,An=d,At!==null&&(An?(n=At,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):At.removeChild(a.stateNode));break;case 18:At!==null&&(An?(n=At,a=a.stateNode,n.nodeType===8?Kc(n.parentNode,a):n.nodeType===1&&Kc(n,a),Gr(n)):Kc(At,a.stateNode));break;case 4:c=At,d=An,At=a.stateNode.containerInfo,An=!0,ns(n,s,a),At=c,An=d;break;case 0:case 11:case 14:case 15:if(!Mt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,v=p.destroy;p=p.tag,v!==void 0&&((p&2)!==0||(p&4)!==0)&&bh(a,s,v),d=d.next}while(d!==c)}ns(n,s,a);break;case 1:if(!Mt&&(to(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(x){ot(a,s,x)}ns(n,s,a);break;case 21:ns(n,s,a);break;case 22:a.mode&1?(Mt=(c=Mt)||a.memoizedState!==null,ns(n,s,a),Mt=c):ns(n,s,a);break;default:ns(n,s,a)}}function Cm(n){var s=n.updateQueue;if(s!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Tw),s.forEach(function(c){var d=bw.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Rn(n,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var p=n,v=s,x=v;e:for(;x!==null;){switch(x.tag){case 5:At=x.stateNode,An=!1;break e;case 3:At=x.stateNode.containerInfo,An=!0;break e;case 4:At=x.stateNode.containerInfo,An=!0;break e}x=x.return}if(At===null)throw Error(t(160));xm(p,v,d),At=null,An=!1;var P=d.alternate;P!==null&&(P.return=null),d.return=null}catch(z){ot(d,s,z)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Am(s,n),s=s.sibling}function Am(n,s){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Rn(s,n),Xn(n),c&4){try{Ia(3,n,n.return),lu(3,n)}catch(he){ot(n,n.return,he)}try{Ia(5,n,n.return)}catch(he){ot(n,n.return,he)}}break;case 1:Rn(s,n),Xn(n),c&512&&a!==null&&to(a,a.return);break;case 5:if(Rn(s,n),Xn(n),c&512&&a!==null&&to(a,a.return),n.flags&32){var d=n.stateNode;try{bs(d,"")}catch(he){ot(n,n.return,he)}}if(c&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,v=a!==null?a.memoizedProps:p,x=n.type,P=n.updateQueue;if(n.updateQueue=null,P!==null)try{x==="input"&&p.type==="radio"&&p.name!=null&&vi(d,p),Ti(x,v);var z=Ti(x,p);for(v=0;v<P.length;v+=2){var Y=P[v],J=P[v+1];Y==="style"?Ei(d,J):Y==="dangerouslySetInnerHTML"?dl(d,J):Y==="children"?bs(d,J):fe(d,Y,J,z)}switch(x){case"input":Ns(d,p);break;case"textarea":hl(d,p);break;case"select":var Q=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var ie=p.value;ie!=null?wn(d,!!p.multiple,ie,!1):Q!==!!p.multiple&&(p.defaultValue!=null?wn(d,!!p.multiple,p.defaultValue,!0):wn(d,!!p.multiple,p.multiple?[]:"",!1))}d[da]=p}catch(he){ot(n,n.return,he)}}break;case 6:if(Rn(s,n),Xn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(he){ot(n,n.return,he)}}break;case 3:if(Rn(s,n),Xn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Gr(s.containerInfo)}catch(he){ot(n,n.return,he)}break;case 4:Rn(s,n),Xn(n);break;case 13:Rn(s,n),Xn(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(jh=Ye())),c&4&&Cm(n);break;case 22:if(Y=a!==null&&a.memoizedState!==null,n.mode&1?(Mt=(z=Mt)||Y,Rn(s,n),Mt=z):Rn(s,n),Xn(n),c&8192){if(z=n.memoizedState!==null,(n.stateNode.isHidden=z)&&!Y&&(n.mode&1)!==0)for(le=n,Y=n.child;Y!==null;){for(J=le=Y;le!==null;){switch(Q=le,ie=Q.child,Q.tag){case 0:case 11:case 14:case 15:Ia(4,Q,Q.return);break;case 1:to(Q,Q.return);var ce=Q.stateNode;if(typeof ce.componentWillUnmount=="function"){c=Q,a=Q.return;try{s=c,ce.props=s.memoizedProps,ce.state=s.memoizedState,ce.componentWillUnmount()}catch(he){ot(c,a,he)}}break;case 5:to(Q,Q.return);break;case 22:if(Q.memoizedState!==null){km(J);continue}}ie!==null?(ie.return=Q,le=ie):km(J)}Y=Y.sibling}e:for(Y=null,J=n;;){if(J.tag===5){if(Y===null){Y=J;try{d=J.stateNode,z?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(x=J.stateNode,P=J.memoizedProps.style,v=P!=null&&P.hasOwnProperty("display")?P.display:null,x.style.display=Lr("display",v))}catch(he){ot(n,n.return,he)}}}else if(J.tag===6){if(Y===null)try{J.stateNode.nodeValue=z?"":J.memoizedProps}catch(he){ot(n,n.return,he)}}else if((J.tag!==22&&J.tag!==23||J.memoizedState===null||J===n)&&J.child!==null){J.child.return=J,J=J.child;continue}if(J===n)break e;for(;J.sibling===null;){if(J.return===null||J.return===n)break e;Y===J&&(Y=null),J=J.return}Y===J&&(Y=null),J.sibling.return=J.return,J=J.sibling}}break;case 19:Rn(s,n),Xn(n),c&4&&Cm(n);break;case 21:break;default:Rn(s,n),Xn(n)}}function Xn(n){var s=n.flags;if(s&2){try{e:{for(var a=n.return;a!==null;){if(Im(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(bs(d,""),c.flags&=-33);var p=Sm(n);Vh(n,p,d);break;case 3:case 4:var v=c.stateNode.containerInfo,x=Sm(n);Oh(n,x,v);break;default:throw Error(t(161))}}catch(P){ot(n,n.return,P)}n.flags&=-3}s&4096&&(n.flags&=-4097)}function Sw(n,s,a){le=n,Rm(n)}function Rm(n,s,a){for(var c=(n.mode&1)!==0;le!==null;){var d=le,p=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||au;if(!v){var x=d.alternate,P=x!==null&&x.memoizedState!==null||Mt;x=au;var z=Mt;if(au=v,(Mt=P)&&!z)for(le=d;le!==null;)v=le,P=v.child,v.tag===22&&v.memoizedState!==null?Nm(d):P!==null?(P.return=v,le=P):Nm(d);for(;p!==null;)le=p,Rm(p),p=p.sibling;le=d,au=x,Mt=z}Pm(n)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,le=p):Pm(n)}}function Pm(n){for(;le!==null;){var s=le;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Mt||lu(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!Mt)if(a===null)c.componentDidMount();else{var d=s.elementType===s.type?a.memoizedProps:Cn(s.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=s.updateQueue;p!==null&&kp(s,p,c);break;case 3:var v=s.updateQueue;if(v!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}kp(s,v,a)}break;case 5:var x=s.stateNode;if(a===null&&s.flags&4){a=x;var P=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var z=s.alternate;if(z!==null){var Y=z.memoizedState;if(Y!==null){var J=Y.dehydrated;J!==null&&Gr(J)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Mt||s.flags&512&&Dh(s)}catch(Q){ot(s,s.return,Q)}}if(s===n){le=null;break}if(a=s.sibling,a!==null){a.return=s.return,le=a;break}le=s.return}}function km(n){for(;le!==null;){var s=le;if(s===n){le=null;break}var a=s.sibling;if(a!==null){a.return=s.return,le=a;break}le=s.return}}function Nm(n){for(;le!==null;){var s=le;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{lu(4,s)}catch(P){ot(s,a,P)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var d=s.return;try{c.componentDidMount()}catch(P){ot(s,d,P)}}var p=s.return;try{Dh(s)}catch(P){ot(s,p,P)}break;case 5:var v=s.return;try{Dh(s)}catch(P){ot(s,v,P)}}}catch(P){ot(s,s.return,P)}if(s===n){le=null;break}var x=s.sibling;if(x!==null){x.return=s.return,le=x;break}le=s.return}}var xw=Math.ceil,uu=ve.ReactCurrentDispatcher,Mh=ve.ReactCurrentOwner,pn=ve.ReactCurrentBatchConfig,Ue=0,Et=null,ft=null,Rt=0,an=0,no=Xr(0),_t=0,Sa=null,Zs=0,cu=0,Lh=0,xa=null,Kt=null,jh=0,ro=1/0,Sr=null,hu=!1,Fh=null,rs=null,du=!1,ss=null,fu=0,Ca=0,Uh=null,pu=-1,mu=0;function qt(){return(Ue&6)!==0?Ye():pu!==-1?pu:pu=Ye()}function is(n){return(n.mode&1)===0?1:(Ue&2)!==0&&Rt!==0?Rt&-Rt:lw.transition!==null?(mu===0&&(mu=Wo()),mu):(n=Ve,n!==0||(n=window.event,n=n===void 0?16:bi(n.type)),n)}function Pn(n,s,a,c){if(50<Ca)throw Ca=0,Uh=null,Error(t(185));zs(n,a,c),((Ue&2)===0||n!==Et)&&(n===Et&&((Ue&2)===0&&(cu|=a),_t===4&&os(n,Rt)),Qt(n,c),a===1&&Ue===0&&(s.mode&1)===0&&(ro=Ye()+500,$l&&Zr()))}function Qt(n,s){var a=n.callbackNode;Us(n,s);var c=hr(n,n===Et?Rt:0);if(c===0)a!==null&&xi(a),n.callbackNode=null,n.callbackPriority=0;else if(s=c&-c,n.callbackPriority!==s){if(a!=null&&xi(a),s===1)n.tag===0?aw(Dm.bind(null,n)):_p(Dm.bind(null,n)),rw(function(){(Ue&6)===0&&Zr()}),a=null;else{switch(jn(c)){case 1:a=Ci;break;case 4:a=qo;break;case 16:a=Ms;break;case 536870912:a=Ai;break;default:a=Ms}a=zm(a,bm.bind(null,n))}n.callbackPriority=s,n.callbackNode=a}}function bm(n,s){if(pu=-1,mu=0,(Ue&6)!==0)throw Error(t(327));var a=n.callbackNode;if(so()&&n.callbackNode!==a)return null;var c=hr(n,n===Et?Rt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||s)s=gu(n,c);else{s=c;var d=Ue;Ue|=2;var p=Vm();(Et!==n||Rt!==s)&&(Sr=null,ro=Ye()+500,ti(n,s));do try{Rw();break}catch(x){Om(n,x)}while(!0);sh(),uu.current=p,Ue=d,ft!==null?s=0:(Et=null,Rt=0,s=_t)}if(s!==0){if(s===2&&(d=Go(n),d!==0&&(c=d,s=zh(n,d))),s===1)throw a=Sa,ti(n,0),os(n,c),Qt(n,Ye()),a;if(s===6)os(n,c);else{if(d=n.current.alternate,(c&30)===0&&!Cw(d)&&(s=gu(n,c),s===2&&(p=Go(n),p!==0&&(c=p,s=zh(n,p))),s===1))throw a=Sa,ti(n,0),os(n,c),Qt(n,Ye()),a;switch(n.finishedWork=d,n.finishedLanes=c,s){case 0:case 1:throw Error(t(345));case 2:ni(n,Kt,Sr);break;case 3:if(os(n,c),(c&130023424)===c&&(s=jh+500-Ye(),10<s)){if(hr(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){qt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Wc(ni.bind(null,n,Kt,Sr),s);break}ni(n,Kt,Sr);break;case 4:if(os(n,c),(c&4194240)===c)break;for(s=n.eventTimes,d=-1;0<c;){var v=31-Zt(c);p=1<<v,v=s[v],v>d&&(d=v),c&=~p}if(c=d,c=Ye()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*xw(c/1960))-c,10<c){n.timeoutHandle=Wc(ni.bind(null,n,Kt,Sr),c);break}ni(n,Kt,Sr);break;case 5:ni(n,Kt,Sr);break;default:throw Error(t(329))}}}return Qt(n,Ye()),n.callbackNode===a?bm.bind(null,n):null}function zh(n,s){var a=xa;return n.current.memoizedState.isDehydrated&&(ti(n,s).flags|=256),n=gu(n,s),n!==2&&(s=Kt,Kt=a,s!==null&&Bh(s)),n}function Bh(n){Kt===null?Kt=n:Kt.push.apply(Kt,n)}function Cw(n){for(var s=n;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],p=d.getSnapshot;d=d.value;try{if(!Sn(p(),d))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function os(n,s){for(s&=~Lh,s&=~cu,n.suspendedLanes|=s,n.pingedLanes&=~s,n=n.expirationTimes;0<s;){var a=31-Zt(s),c=1<<a;n[a]=-1,s&=~c}}function Dm(n){if((Ue&6)!==0)throw Error(t(327));so();var s=hr(n,0);if((s&1)===0)return Qt(n,Ye()),null;var a=gu(n,s);if(n.tag!==0&&a===2){var c=Go(n);c!==0&&(s=c,a=zh(n,c))}if(a===1)throw a=Sa,ti(n,0),os(n,s),Qt(n,Ye()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=s,ni(n,Kt,Sr),Qt(n,Ye()),null}function $h(n,s){var a=Ue;Ue|=1;try{return n(s)}finally{Ue=a,Ue===0&&(ro=Ye()+500,$l&&Zr())}}function ei(n){ss!==null&&ss.tag===0&&(Ue&6)===0&&so();var s=Ue;Ue|=1;var a=pn.transition,c=Ve;try{if(pn.transition=null,Ve=1,n)return n()}finally{Ve=c,pn.transition=a,Ue=s,(Ue&6)===0&&Zr()}}function qh(){an=no.current,Je(no)}function ti(n,s){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,nw(a)),ft!==null)for(a=ft.return;a!==null;){var c=a;switch(Zc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&zl();break;case 3:Zi(),Je(Ht),Je(Dt),dh();break;case 5:ch(c);break;case 4:Zi();break;case 13:Je(tt);break;case 19:Je(tt);break;case 10:ih(c.type._context);break;case 22:case 23:qh()}a=a.return}if(Et=n,ft=n=as(n.current,null),Rt=an=s,_t=0,Sa=null,Lh=cu=Zs=0,Kt=xa=null,Ys!==null){for(s=0;s<Ys.length;s++)if(a=Ys[s],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,p=a.pending;if(p!==null){var v=p.next;p.next=d,c.next=v}a.pending=c}Ys=null}return n}function Om(n,s){do{var a=ft;try{if(sh(),Zl.current=ru,eu){for(var c=nt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}eu=!1}if(Js=0,wt=yt=nt=null,_a=!1,va=0,Mh.current=null,a===null||a.return===null){_t=1,Sa=s,ft=null;break}e:{var p=n,v=a.return,x=a,P=s;if(s=Rt,x.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var z=P,Y=x,J=Y.tag;if((Y.mode&1)===0&&(J===0||J===11||J===15)){var Q=Y.alternate;Q?(Y.updateQueue=Q.updateQueue,Y.memoizedState=Q.memoizedState,Y.lanes=Q.lanes):(Y.updateQueue=null,Y.memoizedState=null)}var ie=im(v);if(ie!==null){ie.flags&=-257,om(ie,v,x,p,s),ie.mode&1&&sm(p,z,s),s=ie,P=z;var ce=s.updateQueue;if(ce===null){var he=new Set;he.add(P),s.updateQueue=he}else ce.add(P);break e}else{if((s&1)===0){sm(p,z,s),Hh();break e}P=Error(t(426))}}else if(et&&x.mode&1){var ut=im(v);if(ut!==null){(ut.flags&65536)===0&&(ut.flags|=256),om(ut,v,x,p,s),nh(eo(P,x));break e}}p=P=eo(P,x),_t!==4&&(_t=2),xa===null?xa=[p]:xa.push(p),p=v;do{switch(p.tag){case 3:p.flags|=65536,s&=-s,p.lanes|=s;var M=nm(p,P,s);Pp(p,M);break e;case 1:x=P;var D=p.type,U=p.stateNode;if((p.flags&128)===0&&(typeof D.getDerivedStateFromError=="function"||U!==null&&typeof U.componentDidCatch=="function"&&(rs===null||!rs.has(U)))){p.flags|=65536,s&=-s,p.lanes|=s;var te=rm(p,x,s);Pp(p,te);break e}}p=p.return}while(p!==null)}Lm(a)}catch(de){s=de,ft===a&&a!==null&&(ft=a=a.return);continue}break}while(!0)}function Vm(){var n=uu.current;return uu.current=ru,n===null?ru:n}function Hh(){(_t===0||_t===3||_t===2)&&(_t=4),Et===null||(Zs&268435455)===0&&(cu&268435455)===0||os(Et,Rt)}function gu(n,s){var a=Ue;Ue|=2;var c=Vm();(Et!==n||Rt!==s)&&(Sr=null,ti(n,s));do try{Aw();break}catch(d){Om(n,d)}while(!0);if(sh(),Ue=a,uu.current=c,ft!==null)throw Error(t(261));return Et=null,Rt=0,_t}function Aw(){for(;ft!==null;)Mm(ft)}function Rw(){for(;ft!==null&&!Vs();)Mm(ft)}function Mm(n){var s=Um(n.alternate,n,an);n.memoizedProps=n.pendingProps,s===null?Lm(n):ft=s,Mh.current=null}function Lm(n){var s=n;do{var a=s.alternate;if(n=s.return,(s.flags&32768)===0){if(a=ww(a,s,an),a!==null){ft=a;return}}else{if(a=Ew(a,s),a!==null){a.flags&=32767,ft=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{_t=6,ft=null;return}}if(s=s.sibling,s!==null){ft=s;return}ft=s=n}while(s!==null);_t===0&&(_t=5)}function ni(n,s,a){var c=Ve,d=pn.transition;try{pn.transition=null,Ve=1,Pw(n,s,a,c)}finally{pn.transition=d,Ve=c}return null}function Pw(n,s,a,c){do so();while(ss!==null);if((Ue&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if(Nc(n,p),n===Et&&(ft=Et=null,Rt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||du||(du=!0,zm(Ms,function(){return so(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=pn.transition,pn.transition=null;var v=Ve;Ve=1;var x=Ue;Ue|=4,Mh.current=null,Iw(n,a),Am(a,n),Q0(Hc),pr=!!qc,Hc=qc=null,n.current=a,Sw(a),cr(),Ue=x,Ve=v,pn.transition=p}else n.current=a;if(du&&(du=!1,ss=n,fu=d),p=n.pendingLanes,p===0&&(rs=null),Il(a.stateNode),Qt(n,Ye()),s!==null)for(c=n.onRecoverableError,a=0;a<s.length;a++)d=s[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(hu)throw hu=!1,n=Fh,Fh=null,n;return(fu&1)!==0&&n.tag!==0&&so(),p=n.pendingLanes,(p&1)!==0?n===Uh?Ca++:(Ca=0,Uh=n):Ca=0,Zr(),null}function so(){if(ss!==null){var n=jn(fu),s=pn.transition,a=Ve;try{if(pn.transition=null,Ve=16>n?16:n,ss===null)var c=!1;else{if(n=ss,ss=null,fu=0,(Ue&6)!==0)throw Error(t(331));var d=Ue;for(Ue|=4,le=n.current;le!==null;){var p=le,v=p.child;if((le.flags&16)!==0){var x=p.deletions;if(x!==null){for(var P=0;P<x.length;P++){var z=x[P];for(le=z;le!==null;){var Y=le;switch(Y.tag){case 0:case 11:case 15:Ia(8,Y,p)}var J=Y.child;if(J!==null)J.return=Y,le=J;else for(;le!==null;){Y=le;var Q=Y.sibling,ie=Y.return;if(Tm(Y),Y===z){le=null;break}if(Q!==null){Q.return=ie,le=Q;break}le=ie}}}var ce=p.alternate;if(ce!==null){var he=ce.child;if(he!==null){ce.child=null;do{var ut=he.sibling;he.sibling=null,he=ut}while(he!==null)}}le=p}}if((p.subtreeFlags&2064)!==0&&v!==null)v.return=p,le=v;else e:for(;le!==null;){if(p=le,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Ia(9,p,p.return)}var M=p.sibling;if(M!==null){M.return=p.return,le=M;break e}le=p.return}}var D=n.current;for(le=D;le!==null;){v=le;var U=v.child;if((v.subtreeFlags&2064)!==0&&U!==null)U.return=v,le=U;else e:for(v=D;le!==null;){if(x=le,(x.flags&2048)!==0)try{switch(x.tag){case 0:case 11:case 15:lu(9,x)}}catch(de){ot(x,x.return,de)}if(x===v){le=null;break e}var te=x.sibling;if(te!==null){te.return=x.return,le=te;break e}le=x.return}}if(Ue=d,Zr(),Jt&&typeof Jt.onPostCommitFiberRoot=="function")try{Jt.onPostCommitFiberRoot(Ls,n)}catch{}c=!0}return c}finally{Ve=a,pn.transition=s}}return!1}function jm(n,s,a){s=eo(a,s),s=nm(n,s,1),n=ts(n,s,1),s=qt(),n!==null&&(zs(n,1,s),Qt(n,s))}function ot(n,s,a){if(n.tag===3)jm(n,n,a);else for(;s!==null;){if(s.tag===3){jm(s,n,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(rs===null||!rs.has(c))){n=eo(a,n),n=rm(s,n,1),s=ts(s,n,1),n=qt(),s!==null&&(zs(s,1,n),Qt(s,n));break}}s=s.return}}function kw(n,s,a){var c=n.pingCache;c!==null&&c.delete(s),s=qt(),n.pingedLanes|=n.suspendedLanes&a,Et===n&&(Rt&a)===a&&(_t===4||_t===3&&(Rt&130023424)===Rt&&500>Ye()-jh?ti(n,0):Lh|=a),Qt(n,s)}function Fm(n,s){s===0&&((n.mode&1)===0?s=1:(s=$r,$r<<=1,($r&130023424)===0&&($r=4194304)));var a=qt();n=Er(n,s),n!==null&&(zs(n,s,a),Qt(n,a))}function Nw(n){var s=n.memoizedState,a=0;s!==null&&(a=s.retryLane),Fm(n,a)}function bw(n,s){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(s),Fm(n,a)}var Um;Um=function(n,s,a){if(n!==null)if(n.memoizedProps!==s.pendingProps||Ht.current)Wt=!0;else{if((n.lanes&a)===0&&(s.flags&128)===0)return Wt=!1,vw(n,s,a);Wt=(n.flags&131072)!==0}else Wt=!1,et&&(s.flags&1048576)!==0&&vp(s,Hl,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;ou(n,s),n=s.pendingProps;var d=Gi(s,Dt.current);Ji(s,a),d=mh(null,s,c,n,d,a);var p=gh();return s.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Gt(c)?(p=!0,Bl(s)):p=!1,s.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,lh(s),d.updater=su,s.stateNode=d,d._reactInternals=s,Th(s,c,n,a),s=Ch(null,s,c,!0,p,a)):(s.tag=0,et&&p&&Jc(s),$t(null,s,d,a),s=s.child),s;case 16:c=s.elementType;e:{switch(ou(n,s),n=s.pendingProps,d=c._init,c=d(c._payload),s.type=c,d=s.tag=Ow(c),n=Cn(c,n),d){case 0:s=xh(null,s,c,n,a);break e;case 1:s=dm(null,s,c,n,a);break e;case 11:s=am(null,s,c,n,a);break e;case 14:s=lm(null,s,c,Cn(c.type,n),a);break e}throw Error(t(306,c,""))}return s;case 0:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Cn(c,d),xh(n,s,c,d,a);case 1:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Cn(c,d),dm(n,s,c,d,a);case 3:e:{if(fm(s),n===null)throw Error(t(387));c=s.pendingProps,p=s.memoizedState,d=p.element,Rp(n,s),Xl(s,c,null,a);var v=s.memoizedState;if(c=v.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},s.updateQueue.baseState=p,s.memoizedState=p,s.flags&256){d=eo(Error(t(423)),s),s=pm(n,s,c,a,d);break e}else if(c!==d){d=eo(Error(t(424)),s),s=pm(n,s,c,a,d);break e}else for(on=Yr(s.stateNode.containerInfo.firstChild),sn=s,et=!0,xn=null,a=Cp(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Qi(),c===d){s=Ir(n,s,a);break e}$t(n,s,c,a)}s=s.child}return s;case 5:return Np(s),n===null&&th(s),c=s.type,d=s.pendingProps,p=n!==null?n.memoizedProps:null,v=d.children,Gc(c,d)?v=null:p!==null&&Gc(c,p)&&(s.flags|=32),hm(n,s),$t(n,s,v,a),s.child;case 6:return n===null&&th(s),null;case 13:return mm(n,s,a);case 4:return uh(s,s.stateNode.containerInfo),c=s.pendingProps,n===null?s.child=Yi(s,null,c,a):$t(n,s,c,a),s.child;case 11:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Cn(c,d),am(n,s,c,d,a);case 7:return $t(n,s,s.pendingProps,a),s.child;case 8:return $t(n,s,s.pendingProps.children,a),s.child;case 12:return $t(n,s,s.pendingProps.children,a),s.child;case 10:e:{if(c=s.type._context,d=s.pendingProps,p=s.memoizedProps,v=d.value,Ke(Kl,c._currentValue),c._currentValue=v,p!==null)if(Sn(p.value,v)){if(p.children===d.children&&!Ht.current){s=Ir(n,s,a);break e}}else for(p=s.child,p!==null&&(p.return=s);p!==null;){var x=p.dependencies;if(x!==null){v=p.child;for(var P=x.firstContext;P!==null;){if(P.context===c){if(p.tag===1){P=Tr(-1,a&-a),P.tag=2;var z=p.updateQueue;if(z!==null){z=z.shared;var Y=z.pending;Y===null?P.next=P:(P.next=Y.next,Y.next=P),z.pending=P}}p.lanes|=a,P=p.alternate,P!==null&&(P.lanes|=a),oh(p.return,a,s),x.lanes|=a;break}P=P.next}}else if(p.tag===10)v=p.type===s.type?null:p.child;else if(p.tag===18){if(v=p.return,v===null)throw Error(t(341));v.lanes|=a,x=v.alternate,x!==null&&(x.lanes|=a),oh(v,a,s),v=p.sibling}else v=p.child;if(v!==null)v.return=p;else for(v=p;v!==null;){if(v===s){v=null;break}if(p=v.sibling,p!==null){p.return=v.return,v=p;break}v=v.return}p=v}$t(n,s,d.children,a),s=s.child}return s;case 9:return d=s.type,c=s.pendingProps.children,Ji(s,a),d=dn(d),c=c(d),s.flags|=1,$t(n,s,c,a),s.child;case 14:return c=s.type,d=Cn(c,s.pendingProps),d=Cn(c.type,d),lm(n,s,c,d,a);case 15:return um(n,s,s.type,s.pendingProps,a);case 17:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Cn(c,d),ou(n,s),s.tag=1,Gt(c)?(n=!0,Bl(s)):n=!1,Ji(s,a),em(s,c,d),Th(s,c,d,a),Ch(null,s,c,!0,n,a);case 19:return ym(n,s,a);case 22:return cm(n,s,a)}throw Error(t(156,s.tag))};function zm(n,s){return $o(n,s)}function Dw(n,s,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mn(n,s,a,c){return new Dw(n,s,a,c)}function Gh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ow(n){if(typeof n=="function")return Gh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===V)return 11;if(n===Me)return 14}return 2}function as(n,s){var a=n.alternate;return a===null?(a=mn(n.tag,s,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=s,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,s=n.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function yu(n,s,a,c,d,p){var v=2;if(c=n,typeof n=="function")Gh(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case N:return ri(a.children,d,p,s);case C:v=8,d|=8;break;case R:return n=mn(12,a,s,d|2),n.elementType=R,n.lanes=p,n;case I:return n=mn(13,a,s,d),n.elementType=I,n.lanes=p,n;case _e:return n=mn(19,a,s,d),n.elementType=_e,n.lanes=p,n;case je:return _u(a,d,p,s);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case O:v=10;break e;case k:v=9;break e;case V:v=11;break e;case Me:v=14;break e;case ze:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return s=mn(v,a,s,d),s.elementType=n,s.type=c,s.lanes=p,s}function ri(n,s,a,c){return n=mn(7,n,c,s),n.lanes=a,n}function _u(n,s,a,c){return n=mn(22,n,c,s),n.elementType=je,n.lanes=a,n.stateNode={isHidden:!1},n}function Wh(n,s,a){return n=mn(6,n,null,s),n.lanes=a,n}function Kh(n,s,a){return s=mn(4,n.children!==null?n.children:[],n.key,s),s.lanes=a,s.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},s}function Vw(n,s,a,c,d){this.tag=s,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ko(0),this.expirationTimes=Ko(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ko(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Qh(n,s,a,c,d,p,v,x,P){return n=new Vw(n,s,a,x,P),s===1?(s=1,p===!0&&(s|=8)):s=0,p=mn(3,null,null,s),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},lh(p),n}function Mw(n,s,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:me,key:c==null?null:""+c,children:n,containerInfo:s,implementation:a}}function Bm(n){if(!n)return Jr;n=n._reactInternals;e:{if(Tn(n)!==n||n.tag!==1)throw Error(t(170));var s=n;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Gt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Gt(a))return gp(n,a,s)}return s}function $m(n,s,a,c,d,p,v,x,P){return n=Qh(a,c,!0,n,d,p,v,x,P),n.context=Bm(null),a=n.current,c=qt(),d=is(a),p=Tr(c,d),p.callback=s??null,ts(a,p,d),n.current.lanes=d,zs(n,d,c),Qt(n,c),n}function vu(n,s,a,c){var d=s.current,p=qt(),v=is(d);return a=Bm(a),s.context===null?s.context=a:s.pendingContext=a,s=Tr(p,v),s.payload={element:n},c=c===void 0?null:c,c!==null&&(s.callback=c),n=ts(d,s,v),n!==null&&(Pn(n,d,v,p),Yl(n,d,v)),v}function wu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function qm(n,s){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<s?a:s}}function Yh(n,s){qm(n,s),(n=n.alternate)&&qm(n,s)}function Lw(){return null}var Hm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Xh(n){this._internalRoot=n}Eu.prototype.render=Xh.prototype.render=function(n){var s=this._internalRoot;if(s===null)throw Error(t(409));vu(n,s,null,null)},Eu.prototype.unmount=Xh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var s=n.containerInfo;ei(function(){vu(null,n,null,null)}),s[yr]=null}};function Eu(n){this._internalRoot=n}Eu.prototype.unstable_scheduleHydration=function(n){if(n){var s=Jo();n={blockedOn:null,target:n,priority:s};for(var a=0;a<en.length&&s!==0&&s<en[a].priority;a++);en.splice(a,0,n),a===0&&ki(n)}};function Jh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Tu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Gm(){}function jw(n,s,a,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var z=wu(v);p.call(z)}}var v=$m(s,c,n,0,null,!1,!1,"",Gm);return n._reactRootContainer=v,n[yr]=v.current,ca(n.nodeType===8?n.parentNode:n),ei(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var x=c;c=function(){var z=wu(P);x.call(z)}}var P=Qh(n,0,!1,null,null,!1,!1,"",Gm);return n._reactRootContainer=P,n[yr]=P.current,ca(n.nodeType===8?n.parentNode:n),ei(function(){vu(s,P,a,c)}),P}function Iu(n,s,a,c,d){var p=a._reactRootContainer;if(p){var v=p;if(typeof d=="function"){var x=d;d=function(){var P=wu(v);x.call(P)}}vu(s,v,n,d)}else v=jw(a,s,n,d,c);return wu(v)}Yo=function(n){switch(n.tag){case 3:var s=n.stateNode;if(s.current.memoizedState.isDehydrated){var a=$e(s.pendingLanes);a!==0&&(Qo(s,a|1),Qt(s,Ye()),(Ue&6)===0&&(ro=Ye()+500,Zr()))}break;case 13:ei(function(){var c=Er(n,1);if(c!==null){var d=qt();Pn(c,n,1,d)}}),Yh(n,1)}},Ri=function(n){if(n.tag===13){var s=Er(n,134217728);if(s!==null){var a=qt();Pn(s,n,134217728,a)}Yh(n,134217728)}},Xo=function(n){if(n.tag===13){var s=is(n),a=Er(n,s);if(a!==null){var c=qt();Pn(a,n,s,c)}Yh(n,s)}},Jo=function(){return Ve},Zo=function(n,s){var a=Ve;try{return Ve=n,s()}finally{Ve=a}},ar=function(n,s,a){switch(s){case"input":if(Ns(n,a),s=a.name,a.type==="radio"&&s!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==n&&c.form===n.form){var d=Ul(c);if(!d)throw Error(t(90));Oo(c),Ns(c,d)}}}break;case"textarea":hl(n,a);break;case"select":s=a.value,s!=null&&wn(n,!!a.multiple,s,!1)}},pl=$h,ml=ei;var Fw={usingClientEntryPoint:!1,Events:[fa,qi,Ul,Fr,Ur,$h]},Aa={findFiberByHostInstance:Gs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Uw={bundleType:Aa.bundleType,version:Aa.version,rendererPackageName:Aa.rendererPackageName,rendererConfig:Aa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ve.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Tl(n),n===null?null:n.stateNode},findFiberByHostInstance:Aa.findFiberByHostInstance||Lw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Su=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Su.isDisabled&&Su.supportsFiber)try{Ls=Su.inject(Uw),Jt=Su}catch{}}return Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fw,Yt.createPortal=function(n,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jh(s))throw Error(t(200));return Mw(n,s,null,a)},Yt.createRoot=function(n,s){if(!Jh(n))throw Error(t(299));var a=!1,c="",d=Hm;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(d=s.onRecoverableError)),s=Qh(n,1,!1,null,null,a,!1,c,d),n[yr]=s.current,ca(n.nodeType===8?n.parentNode:n),new Xh(s)},Yt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var s=n._reactInternals;if(s===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Tl(s),n=n===null?null:n.stateNode,n},Yt.flushSync=function(n){return ei(n)},Yt.hydrate=function(n,s,a){if(!Tu(s))throw Error(t(200));return Iu(null,n,s,!0,a)},Yt.hydrateRoot=function(n,s,a){if(!Jh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,p="",v=Hm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),s=$m(s,null,n,1,a??null,d,!1,p,v),n[yr]=s.current,ca(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,d]:s.mutableSourceEagerHydrationData.push(a,d);return new Eu(s)},Yt.render=function(n,s,a){if(!Tu(s))throw Error(t(200));return Iu(null,n,s,!1,a)},Yt.unmountComponentAtNode=function(n){if(!Tu(n))throw Error(t(40));return n._reactRootContainer?(ei(function(){Iu(null,null,n,!1,function(){n._reactRootContainer=null,n[yr]=null})}),!0):!1},Yt.unstable_batchedUpdates=$h,Yt.unstable_renderSubtreeIntoContainer=function(n,s,a,c){if(!Tu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Iu(n,s,a,!1,c)},Yt.version="18.3.1-next-f1338f8080-20240426",Yt}var eg;function Kw(){if(eg)return td.exports;eg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),td.exports=Ww(),td.exports}var tg;function Qw(){if(tg)return xu;tg=1;var r=Kw();return xu.createRoot=r.createRoot,xu.hydrateRoot=r.hydrateRoot,xu}var Yw=Qw(),Pe=Hd();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xw=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Jw=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,i)=>i?i.toUpperCase():t.toLowerCase()),ng=r=>{const e=Jw(r);return e.charAt(0).toUpperCase()+e.slice(1)},i_=(...r)=>r.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Zw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eE=Pe.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:o="",children:l,iconNode:h,...f},g)=>Pe.createElement("svg",{ref:g,...Zw,width:e,height:e,stroke:r,strokeWidth:i?Number(t)*24/Number(e):t,className:i_("lucide",o),...f},[...h.map(([_,E])=>Pe.createElement(_,E)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const st=(r,e)=>{const t=Pe.forwardRef(({className:i,...o},l)=>Pe.createElement(eE,{ref:l,iconNode:e,className:i_(`lucide-${Xw(ng(r))}`,`lucide-${r}`,i),...o}));return t.displayName=ng(r),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tE=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],nE=st("arrow-left",tE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rE=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],sE=st("arrow-right",rE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iE=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]],oE=st("bookmark",iE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aE=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],lE=st("check",aE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uE=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],rg=st("chevron-left",uE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cE=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],hE=st("download",cE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dE=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],sg=st("ellipsis",dE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fE=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]],pE=st("facebook",fE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mE=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]],ig=st("heart",mE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gE=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],og=st("instagram",gE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yE=[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1",key:"f1a2em"}],["rect",{width:"9",height:"7",x:"3",y:"14",rx:"1",key:"jqznyg"}],["rect",{width:"5",height:"7",x:"16",y:"14",rx:"1",key:"q5h2i8"}]],ag=st("layout-template",yE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _E=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],vE=st("loader-circle",_E);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wE=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]],Du=st("message-circle",wE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EE=[["polyline",{points:"4 14 10 14 10 20",key:"11kfnr"}],["polyline",{points:"20 10 14 10 14 4",key:"rlmsce"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3",key:"o5lafz"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]],TE=st("minimize-2",EE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IE=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],SE=st("plus",IE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xE=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],CE=st("refresh-cw",xE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AE=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],o_=st("send",AE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RE=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],lg=st("share-2",RE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PE=[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]],ug=st("shuffle",PE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kE=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],ii=st("sparkles",kE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NE=[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",key:"emmmcr"}]],bE=st("thumbs-up",NE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DE=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],OE=st("upload",DE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VE=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ME=st("x",VE),LE=()=>{};var cg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_=function(r){const e=[];let t=0;for(let i=0;i<r.length;i++){let o=r.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<r.length&&(r.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},jE=function(r){const e=[];let t=0,i=0;for(;t<r.length;){const o=r[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=r[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=r[t++],h=r[t++],f=r[t++],g=((o&7)<<18|(l&63)<<12|(h&63)<<6|f&63)-65536;e[i++]=String.fromCharCode(55296+(g>>10)),e[i++]=String.fromCharCode(56320+(g&1023))}else{const l=r[t++],h=r[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},l_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<r.length;o+=3){const l=r[o],h=o+1<r.length,f=h?r[o+1]:0,g=o+2<r.length,_=g?r[o+2]:0,E=l>>2,A=(l&3)<<4|f>>4;let S=(f&15)<<2|_>>6,F=_&63;g||(F=64,h||(S=64)),i.push(t[E],t[A],t[S],t[F])}return i.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(a_(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):jE(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<r.length;){const l=t[r.charAt(o++)],f=o<r.length?t[r.charAt(o)]:0;++o;const _=o<r.length?t[r.charAt(o)]:64;++o;const A=o<r.length?t[r.charAt(o)]:64;if(++o,l==null||f==null||_==null||A==null)throw new FE;const S=l<<2|f>>4;if(i.push(S),_!==64){const F=f<<4&240|_>>2;if(i.push(F),A!==64){const q=_<<6&192|A;i.push(q)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class FE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const UE=function(r){const e=a_(r);return l_.encodeByteArray(e,!0)},Gu=function(r){return UE(r).replace(/\./g,"")},u_=function(r){try{return l_.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BE=()=>zE().__FIREBASE_DEFAULTS__,$E=()=>{if(typeof process>"u"||typeof cg>"u")return;const r=cg.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},qE=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&u_(r[1]);return e&&JSON.parse(e)},hc=()=>{try{return LE()||BE()||$E()||qE()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},c_=r=>hc()?.emulatorHosts?.[r],HE=r=>{const e=c_(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},h_=()=>hc()?.config,d_=r=>hc()?.[`_${r}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function f_(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WE(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=r.iat||0,l=r.sub||r.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...r};return[Gu(JSON.stringify(t)),Gu(JSON.stringify(h)),""].join(".")}const ba={};function KE(){const r={prod:[],emulator:[]};for(const e of Object.keys(ba))ba[e]?r.emulator.push(e):r.prod.push(e);return r}function QE(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let hg=!1;function p_(r,e){if(typeof window>"u"||typeof document>"u"||!Co(window.location.host)||ba[r]===e||ba[r]||hg)return;ba[r]=e;function t(S){return`__firebase__banner__${S}`}const i="__firebase__banner",l=KE().prod.length>0;function h(){const S=document.getElementById(i);S&&S.remove()}function f(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function g(S,F){S.setAttribute("width","24"),S.setAttribute("id",F),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function _(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{hg=!0,h()},S}function E(S,F){S.setAttribute("id",F),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function A(){const S=QE(i),F=t("text"),q=document.getElementById(F)||document.createElement("span"),H=t("learnmore"),$=document.getElementById(H)||document.createElement("a"),se=t("preprendIcon"),ue=document.getElementById(se)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const fe=S.element;f(fe),E($,H);const ve=_();g(ue,se),fe.append(ue,q,$,ve),document.body.appendChild(fe)}l?(q.innerText="Preview backend disconnected.",ue.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ue.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,q.innerText="Preview backend running in this workspace."),q.setAttribute("id",F)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",A):A()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function YE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(zt())}function XE(){const r=hc()?.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function JE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ZE(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function eT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function tT(){const r=zt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function nT(){return!XE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function rT(){try{return typeof indexedDB=="object"}catch{return!1}}function sT(){return new Promise((r,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{e(o.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT="FirebaseError";class br extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=iT,Object.setPrototypeOf(this,br.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ja.prototype.create)}}class Ja{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?oT(l,i):"Error",f=`${this.serviceName}: ${h} (${o}).`;return new br(o,f,i)}}function oT(r,e){return r.replace(aT,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const aT=/\{\$([^}]+)}/g;function lT(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function ai(r,e){if(r===e)return!0;const t=Object.keys(r),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=r[o],h=e[o];if(dg(l)&&dg(h)){if(!ai(l,h))return!1}else if(l!==h)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function dg(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(r){const e=[];for(const[t,i]of Object.entries(r))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function uT(r,e){const t=new cT(r,e);return t.subscribe.bind(t)}class cT{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");hT(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=sd),o.error===void 0&&(o.error=sd),o.complete===void 0&&(o.complete=sd);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hT(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function sd(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(r){return r&&r._delegate?r._delegate:r}class li{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new GE;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),i=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(pT(e))try{this.getOrInitializeService({instanceIdentifier:si})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=si){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=si){return this.instances.has(e)}getOptions(e=si){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,h]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);i===f&&h.resolve(o)}return o}onInit(e,t){const i=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(i)??new Set;o.add(e),this.onInitCallbacks.set(i,o);const l=this.instances.get(i);return l&&e(l,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:fT(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=si){return this.component?this.component.multipleInstances?e:si:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fT(r){return r===si?void 0:r}function pT(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new dT(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var be;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(be||(be={}));const gT={debug:be.DEBUG,verbose:be.VERBOSE,info:be.INFO,warn:be.WARN,error:be.ERROR,silent:be.SILENT},yT=be.INFO,_T={[be.DEBUG]:"log",[be.VERBOSE]:"log",[be.INFO]:"info",[be.WARN]:"warn",[be.ERROR]:"error"},vT=(r,e,...t)=>{if(e<r.logLevel)return;const i=new Date().toISOString(),o=_T[e];if(o)console[o](`[${i}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gd{constructor(e){this.name=e,this._logLevel=yT,this._logHandler=vT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,be.DEBUG,...e),this._logHandler(this,be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,be.VERBOSE,...e),this._logHandler(this,be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,be.INFO,...e),this._logHandler(this,be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,be.WARN,...e),this._logHandler(this,be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,be.ERROR,...e),this._logHandler(this,be.ERROR,...e)}}const wT=(r,e)=>e.some(t=>r instanceof t);let fg,pg;function ET(){return fg||(fg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function TT(){return pg||(pg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const m_=new WeakMap,wd=new WeakMap,g_=new WeakMap,id=new WeakMap,Wd=new WeakMap;function IT(r){const e=new Promise((t,i)=>{const o=()=>{r.removeEventListener("success",l),r.removeEventListener("error",h)},l=()=>{t(gs(r.result)),o()},h=()=>{i(r.error),o()};r.addEventListener("success",l),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&m_.set(t,r)}).catch(()=>{}),Wd.set(e,r),e}function ST(r){if(wd.has(r))return;const e=new Promise((t,i)=>{const o=()=>{r.removeEventListener("complete",l),r.removeEventListener("error",h),r.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{i(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",l),r.addEventListener("error",h),r.addEventListener("abort",h)});wd.set(r,e)}let Ed={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return wd.get(r);if(e==="objectStoreNames")return r.objectStoreNames||g_.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return gs(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function xT(r){Ed=r(Ed)}function CT(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=r.call(od(this),e,...t);return g_.set(i,e.sort?e.sort():[e]),gs(i)}:TT().includes(r)?function(...e){return r.apply(od(this),e),gs(m_.get(this))}:function(...e){return gs(r.apply(od(this),e))}}function AT(r){return typeof r=="function"?CT(r):(r instanceof IDBTransaction&&ST(r),wT(r,ET())?new Proxy(r,Ed):r)}function gs(r){if(r instanceof IDBRequest)return IT(r);if(id.has(r))return id.get(r);const e=AT(r);return e!==r&&(id.set(r,e),Wd.set(e,r)),e}const od=r=>Wd.get(r);function RT(r,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const h=indexedDB.open(r,e),f=gs(h);return i&&h.addEventListener("upgradeneeded",g=>{i(gs(h.result),g.oldVersion,g.newVersion,gs(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),f.then(g=>{l&&g.addEventListener("close",()=>l()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),f}const PT=["get","getKey","getAll","getAllKeys","count"],kT=["put","add","delete","clear"],ad=new Map;function mg(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(ad.get(e))return ad.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=kT.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||PT.includes(t)))return;const l=async function(h,...f){const g=this.transaction(h,o?"readwrite":"readonly");let _=g.store;return i&&(_=_.index(f.shift())),(await Promise.all([_[t](...f),o&&g.done]))[0]};return ad.set(e,l),l}xT(r=>({...r,get:(e,t,i)=>mg(e,t)||r.get(e,t,i),has:(e,t)=>!!mg(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(bT(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function bT(r){return r.getComponent()?.type==="VERSION"}const Td="@firebase/app",gg="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar=new Gd("@firebase/app"),DT="@firebase/app-compat",OT="@firebase/analytics-compat",VT="@firebase/analytics",MT="@firebase/app-check-compat",LT="@firebase/app-check",jT="@firebase/auth",FT="@firebase/auth-compat",UT="@firebase/database",zT="@firebase/data-connect",BT="@firebase/database-compat",$T="@firebase/functions",qT="@firebase/functions-compat",HT="@firebase/installations",GT="@firebase/installations-compat",WT="@firebase/messaging",KT="@firebase/messaging-compat",QT="@firebase/performance",YT="@firebase/performance-compat",XT="@firebase/remote-config",JT="@firebase/remote-config-compat",ZT="@firebase/storage",eI="@firebase/storage-compat",tI="@firebase/firestore",nI="@firebase/ai",rI="@firebase/firestore-compat",sI="firebase",iI="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id="[DEFAULT]",oI={[Td]:"fire-core",[DT]:"fire-core-compat",[VT]:"fire-analytics",[OT]:"fire-analytics-compat",[LT]:"fire-app-check",[MT]:"fire-app-check-compat",[jT]:"fire-auth",[FT]:"fire-auth-compat",[UT]:"fire-rtdb",[zT]:"fire-data-connect",[BT]:"fire-rtdb-compat",[$T]:"fire-fn",[qT]:"fire-fn-compat",[HT]:"fire-iid",[GT]:"fire-iid-compat",[WT]:"fire-fcm",[KT]:"fire-fcm-compat",[QT]:"fire-perf",[YT]:"fire-perf-compat",[XT]:"fire-rc",[JT]:"fire-rc-compat",[ZT]:"fire-gcs",[eI]:"fire-gcs-compat",[tI]:"fire-fst",[rI]:"fire-fst-compat",[nI]:"fire-vertex","fire-js":"fire-js",[sI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa=new Map,aI=new Map,Sd=new Map;function yg(r,e){try{r.container.addComponent(e)}catch(t){Ar.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function vo(r){const e=r.name;if(Sd.has(e))return Ar.debug(`There were multiple attempts to register component ${e}.`),!1;Sd.set(e,r);for(const t of Fa.values())yg(t,r);for(const t of aI.values())yg(t,r);return!0}function Kd(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function kn(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ys=new Ja("app","Firebase",lI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new li("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ys.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ao=iI;function y_(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const i={name:Id,automaticDataCollectionEnabled:!0,...e},o=i.name;if(typeof o!="string"||!o)throw ys.create("bad-app-name",{appName:String(o)});if(t||(t=h_()),!t)throw ys.create("no-options");const l=Fa.get(o);if(l){if(ai(t,l.options)&&ai(i,l.config))return l;throw ys.create("duplicate-app",{appName:o})}const h=new mT(o);for(const g of Sd.values())h.addComponent(g);const f=new uI(t,i,h);return Fa.set(o,f),f}function Qd(r=Id){const e=Fa.get(r);if(!e&&r===Id&&h_())return y_();if(!e)throw ys.create("no-app",{appName:r});return e}function cI(){return Array.from(Fa.values())}function _s(r,e,t){let i=oI[r]??r;t&&(i+=`-${t}`);const o=i.match(/\s|\//),l=e.match(/\s|\//);if(o||l){const h=[`Unable to register library "${i}" with version "${e}":`];o&&h.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&l&&h.push("and"),l&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ar.warn(h.join(" "));return}vo(new li(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hI="firebase-heartbeat-database",dI=1,Ua="firebase-heartbeat-store";let ld=null;function __(){return ld||(ld=RT(hI,dI,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Ua)}catch(t){console.warn(t)}}}}).catch(r=>{throw ys.create("idb-open",{originalErrorMessage:r.message})})),ld}async function fI(r){try{const t=(await __()).transaction(Ua),i=await t.objectStore(Ua).get(v_(r));return await t.done,i}catch(e){if(e instanceof br)Ar.warn(e.message);else{const t=ys.create("idb-get",{originalErrorMessage:e?.message});Ar.warn(t.message)}}}async function _g(r,e){try{const i=(await __()).transaction(Ua,"readwrite");await i.objectStore(Ua).put(e,v_(r)),await i.done}catch(t){if(t instanceof br)Ar.warn(t.message);else{const i=ys.create("idb-set",{originalErrorMessage:t?.message});Ar.warn(i.message)}}}function v_(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pI=1024,mI=30;class gI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new _I(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=vg();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats.length>mI){const o=vI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Ar.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=vg(),{heartbeatsToSend:t,unsentEntries:i}=yI(this._heartbeatsCache.heartbeats),o=Gu(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Ar.warn(e),""}}}function vg(){return new Date().toISOString().substring(0,10)}function yI(r,e=pI){const t=[];let i=r.slice();for(const o of r){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),wg(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),wg(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class _I{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rT()?sT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await fI(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return _g(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return _g(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function wg(r){return Gu(JSON.stringify({version:2,heartbeats:r})).length}function vI(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let i=1;i<r.length;i++)r[i].date<t&&(t=r[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wI(r){vo(new li("platform-logger",e=>new NT(e),"PRIVATE")),vo(new li("heartbeat",e=>new gI(e),"PRIVATE")),_s(Td,gg,r),_s(Td,gg,"esm2020"),_s("fire-js","")}wI("");var Eg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vs,w_;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,C){function R(){}R.prototype=C.prototype,N.F=C.prototype,N.prototype=new R,N.prototype.constructor=N,N.D=function(O,k,V){for(var I=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)I[_e-2]=arguments[_e];return C.prototype[k].apply(O,I)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(i,t),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(N,C,R){R||(R=0);const O=Array(16);if(typeof C=="string")for(var k=0;k<16;++k)O[k]=C.charCodeAt(R++)|C.charCodeAt(R++)<<8|C.charCodeAt(R++)<<16|C.charCodeAt(R++)<<24;else for(k=0;k<16;++k)O[k]=C[R++]|C[R++]<<8|C[R++]<<16|C[R++]<<24;C=N.g[0],R=N.g[1],k=N.g[2];let V=N.g[3],I;I=C+(V^R&(k^V))+O[0]+3614090360&4294967295,C=R+(I<<7&4294967295|I>>>25),I=V+(k^C&(R^k))+O[1]+3905402710&4294967295,V=C+(I<<12&4294967295|I>>>20),I=k+(R^V&(C^R))+O[2]+606105819&4294967295,k=V+(I<<17&4294967295|I>>>15),I=R+(C^k&(V^C))+O[3]+3250441966&4294967295,R=k+(I<<22&4294967295|I>>>10),I=C+(V^R&(k^V))+O[4]+4118548399&4294967295,C=R+(I<<7&4294967295|I>>>25),I=V+(k^C&(R^k))+O[5]+1200080426&4294967295,V=C+(I<<12&4294967295|I>>>20),I=k+(R^V&(C^R))+O[6]+2821735955&4294967295,k=V+(I<<17&4294967295|I>>>15),I=R+(C^k&(V^C))+O[7]+4249261313&4294967295,R=k+(I<<22&4294967295|I>>>10),I=C+(V^R&(k^V))+O[8]+1770035416&4294967295,C=R+(I<<7&4294967295|I>>>25),I=V+(k^C&(R^k))+O[9]+2336552879&4294967295,V=C+(I<<12&4294967295|I>>>20),I=k+(R^V&(C^R))+O[10]+4294925233&4294967295,k=V+(I<<17&4294967295|I>>>15),I=R+(C^k&(V^C))+O[11]+2304563134&4294967295,R=k+(I<<22&4294967295|I>>>10),I=C+(V^R&(k^V))+O[12]+1804603682&4294967295,C=R+(I<<7&4294967295|I>>>25),I=V+(k^C&(R^k))+O[13]+4254626195&4294967295,V=C+(I<<12&4294967295|I>>>20),I=k+(R^V&(C^R))+O[14]+2792965006&4294967295,k=V+(I<<17&4294967295|I>>>15),I=R+(C^k&(V^C))+O[15]+1236535329&4294967295,R=k+(I<<22&4294967295|I>>>10),I=C+(k^V&(R^k))+O[1]+4129170786&4294967295,C=R+(I<<5&4294967295|I>>>27),I=V+(R^k&(C^R))+O[6]+3225465664&4294967295,V=C+(I<<9&4294967295|I>>>23),I=k+(C^R&(V^C))+O[11]+643717713&4294967295,k=V+(I<<14&4294967295|I>>>18),I=R+(V^C&(k^V))+O[0]+3921069994&4294967295,R=k+(I<<20&4294967295|I>>>12),I=C+(k^V&(R^k))+O[5]+3593408605&4294967295,C=R+(I<<5&4294967295|I>>>27),I=V+(R^k&(C^R))+O[10]+38016083&4294967295,V=C+(I<<9&4294967295|I>>>23),I=k+(C^R&(V^C))+O[15]+3634488961&4294967295,k=V+(I<<14&4294967295|I>>>18),I=R+(V^C&(k^V))+O[4]+3889429448&4294967295,R=k+(I<<20&4294967295|I>>>12),I=C+(k^V&(R^k))+O[9]+568446438&4294967295,C=R+(I<<5&4294967295|I>>>27),I=V+(R^k&(C^R))+O[14]+3275163606&4294967295,V=C+(I<<9&4294967295|I>>>23),I=k+(C^R&(V^C))+O[3]+4107603335&4294967295,k=V+(I<<14&4294967295|I>>>18),I=R+(V^C&(k^V))+O[8]+1163531501&4294967295,R=k+(I<<20&4294967295|I>>>12),I=C+(k^V&(R^k))+O[13]+2850285829&4294967295,C=R+(I<<5&4294967295|I>>>27),I=V+(R^k&(C^R))+O[2]+4243563512&4294967295,V=C+(I<<9&4294967295|I>>>23),I=k+(C^R&(V^C))+O[7]+1735328473&4294967295,k=V+(I<<14&4294967295|I>>>18),I=R+(V^C&(k^V))+O[12]+2368359562&4294967295,R=k+(I<<20&4294967295|I>>>12),I=C+(R^k^V)+O[5]+4294588738&4294967295,C=R+(I<<4&4294967295|I>>>28),I=V+(C^R^k)+O[8]+2272392833&4294967295,V=C+(I<<11&4294967295|I>>>21),I=k+(V^C^R)+O[11]+1839030562&4294967295,k=V+(I<<16&4294967295|I>>>16),I=R+(k^V^C)+O[14]+4259657740&4294967295,R=k+(I<<23&4294967295|I>>>9),I=C+(R^k^V)+O[1]+2763975236&4294967295,C=R+(I<<4&4294967295|I>>>28),I=V+(C^R^k)+O[4]+1272893353&4294967295,V=C+(I<<11&4294967295|I>>>21),I=k+(V^C^R)+O[7]+4139469664&4294967295,k=V+(I<<16&4294967295|I>>>16),I=R+(k^V^C)+O[10]+3200236656&4294967295,R=k+(I<<23&4294967295|I>>>9),I=C+(R^k^V)+O[13]+681279174&4294967295,C=R+(I<<4&4294967295|I>>>28),I=V+(C^R^k)+O[0]+3936430074&4294967295,V=C+(I<<11&4294967295|I>>>21),I=k+(V^C^R)+O[3]+3572445317&4294967295,k=V+(I<<16&4294967295|I>>>16),I=R+(k^V^C)+O[6]+76029189&4294967295,R=k+(I<<23&4294967295|I>>>9),I=C+(R^k^V)+O[9]+3654602809&4294967295,C=R+(I<<4&4294967295|I>>>28),I=V+(C^R^k)+O[12]+3873151461&4294967295,V=C+(I<<11&4294967295|I>>>21),I=k+(V^C^R)+O[15]+530742520&4294967295,k=V+(I<<16&4294967295|I>>>16),I=R+(k^V^C)+O[2]+3299628645&4294967295,R=k+(I<<23&4294967295|I>>>9),I=C+(k^(R|~V))+O[0]+4096336452&4294967295,C=R+(I<<6&4294967295|I>>>26),I=V+(R^(C|~k))+O[7]+1126891415&4294967295,V=C+(I<<10&4294967295|I>>>22),I=k+(C^(V|~R))+O[14]+2878612391&4294967295,k=V+(I<<15&4294967295|I>>>17),I=R+(V^(k|~C))+O[5]+4237533241&4294967295,R=k+(I<<21&4294967295|I>>>11),I=C+(k^(R|~V))+O[12]+1700485571&4294967295,C=R+(I<<6&4294967295|I>>>26),I=V+(R^(C|~k))+O[3]+2399980690&4294967295,V=C+(I<<10&4294967295|I>>>22),I=k+(C^(V|~R))+O[10]+4293915773&4294967295,k=V+(I<<15&4294967295|I>>>17),I=R+(V^(k|~C))+O[1]+2240044497&4294967295,R=k+(I<<21&4294967295|I>>>11),I=C+(k^(R|~V))+O[8]+1873313359&4294967295,C=R+(I<<6&4294967295|I>>>26),I=V+(R^(C|~k))+O[15]+4264355552&4294967295,V=C+(I<<10&4294967295|I>>>22),I=k+(C^(V|~R))+O[6]+2734768916&4294967295,k=V+(I<<15&4294967295|I>>>17),I=R+(V^(k|~C))+O[13]+1309151649&4294967295,R=k+(I<<21&4294967295|I>>>11),I=C+(k^(R|~V))+O[4]+4149444226&4294967295,C=R+(I<<6&4294967295|I>>>26),I=V+(R^(C|~k))+O[11]+3174756917&4294967295,V=C+(I<<10&4294967295|I>>>22),I=k+(C^(V|~R))+O[2]+718787259&4294967295,k=V+(I<<15&4294967295|I>>>17),I=R+(V^(k|~C))+O[9]+3951481745&4294967295,N.g[0]=N.g[0]+C&4294967295,N.g[1]=N.g[1]+(k+(I<<21&4294967295|I>>>11))&4294967295,N.g[2]=N.g[2]+k&4294967295,N.g[3]=N.g[3]+V&4294967295}i.prototype.v=function(N,C){C===void 0&&(C=N.length);const R=C-this.blockSize,O=this.C;let k=this.h,V=0;for(;V<C;){if(k==0)for(;V<=R;)o(this,N,V),V+=this.blockSize;if(typeof N=="string"){for(;V<C;)if(O[k++]=N.charCodeAt(V++),k==this.blockSize){o(this,O),k=0;break}}else for(;V<C;)if(O[k++]=N[V++],k==this.blockSize){o(this,O),k=0;break}}this.h=k,this.o+=C},i.prototype.A=function(){var N=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);N[0]=128;for(var C=1;C<N.length-8;++C)N[C]=0;C=this.o*8;for(var R=N.length-8;R<N.length;++R)N[R]=C&255,C/=256;for(this.v(N),N=Array(16),C=0,R=0;R<4;++R)for(let O=0;O<32;O+=8)N[C++]=this.g[R]>>>O&255;return N};function l(N,C){var R=f;return Object.prototype.hasOwnProperty.call(R,N)?R[N]:R[N]=C(N)}function h(N,C){this.h=C;const R=[];let O=!0;for(let k=N.length-1;k>=0;k--){const V=N[k]|0;O&&V==C||(R[k]=V,O=!1)}this.g=R}var f={};function g(N){return-128<=N&&N<128?l(N,function(C){return new h([C|0],C<0?-1:0)}):new h([N|0],N<0?-1:0)}function _(N){if(isNaN(N)||!isFinite(N))return A;if(N<0)return $(_(-N));const C=[];let R=1;for(let O=0;N>=R;O++)C[O]=N/R|0,R*=4294967296;return new h(C,0)}function E(N,C){if(N.length==0)throw Error("number format error: empty string");if(C=C||10,C<2||36<C)throw Error("radix out of range: "+C);if(N.charAt(0)=="-")return $(E(N.substring(1),C));if(N.indexOf("-")>=0)throw Error('number format error: interior "-" character');const R=_(Math.pow(C,8));let O=A;for(let V=0;V<N.length;V+=8){var k=Math.min(8,N.length-V);const I=parseInt(N.substring(V,V+k),C);k<8?(k=_(Math.pow(C,k)),O=O.j(k).add(_(I))):(O=O.j(R),O=O.add(_(I)))}return O}var A=g(0),S=g(1),F=g(16777216);r=h.prototype,r.m=function(){if(H(this))return-$(this).m();let N=0,C=1;for(let R=0;R<this.g.length;R++){const O=this.i(R);N+=(O>=0?O:4294967296+O)*C,C*=4294967296}return N},r.toString=function(N){if(N=N||10,N<2||36<N)throw Error("radix out of range: "+N);if(q(this))return"0";if(H(this))return"-"+$(this).toString(N);const C=_(Math.pow(N,6));var R=this;let O="";for(;;){const k=ve(R,C).g;R=se(R,k.j(C));let V=((R.g.length>0?R.g[0]:R.h)>>>0).toString(N);if(R=k,q(R))return V+O;for(;V.length<6;)V="0"+V;O=V+O}},r.i=function(N){return N<0?0:N<this.g.length?this.g[N]:this.h};function q(N){if(N.h!=0)return!1;for(let C=0;C<N.g.length;C++)if(N.g[C]!=0)return!1;return!0}function H(N){return N.h==-1}r.l=function(N){return N=se(this,N),H(N)?-1:q(N)?0:1};function $(N){const C=N.g.length,R=[];for(let O=0;O<C;O++)R[O]=~N.g[O];return new h(R,~N.h).add(S)}r.abs=function(){return H(this)?$(this):this},r.add=function(N){const C=Math.max(this.g.length,N.g.length),R=[];let O=0;for(let k=0;k<=C;k++){let V=O+(this.i(k)&65535)+(N.i(k)&65535),I=(V>>>16)+(this.i(k)>>>16)+(N.i(k)>>>16);O=I>>>16,V&=65535,I&=65535,R[k]=I<<16|V}return new h(R,R[R.length-1]&-2147483648?-1:0)};function se(N,C){return N.add($(C))}r.j=function(N){if(q(this)||q(N))return A;if(H(this))return H(N)?$(this).j($(N)):$($(this).j(N));if(H(N))return $(this.j($(N)));if(this.l(F)<0&&N.l(F)<0)return _(this.m()*N.m());const C=this.g.length+N.g.length,R=[];for(var O=0;O<2*C;O++)R[O]=0;for(O=0;O<this.g.length;O++)for(let k=0;k<N.g.length;k++){const V=this.i(O)>>>16,I=this.i(O)&65535,_e=N.i(k)>>>16,Me=N.i(k)&65535;R[2*O+2*k]+=I*Me,ue(R,2*O+2*k),R[2*O+2*k+1]+=V*Me,ue(R,2*O+2*k+1),R[2*O+2*k+1]+=I*_e,ue(R,2*O+2*k+1),R[2*O+2*k+2]+=V*_e,ue(R,2*O+2*k+2)}for(N=0;N<C;N++)R[N]=R[2*N+1]<<16|R[2*N];for(N=C;N<2*C;N++)R[N]=0;return new h(R,0)};function ue(N,C){for(;(N[C]&65535)!=N[C];)N[C+1]+=N[C]>>>16,N[C]&=65535,C++}function fe(N,C){this.g=N,this.h=C}function ve(N,C){if(q(C))throw Error("division by zero");if(q(N))return new fe(A,A);if(H(N))return C=ve($(N),C),new fe($(C.g),$(C.h));if(H(C))return C=ve(N,$(C)),new fe($(C.g),C.h);if(N.g.length>30){if(H(N)||H(C))throw Error("slowDivide_ only works with positive integers.");for(var R=S,O=C;O.l(N)<=0;)R=xe(R),O=xe(O);var k=me(R,1),V=me(O,1);for(O=me(O,2),R=me(R,2);!q(O);){var I=V.add(O);I.l(N)<=0&&(k=k.add(R),V=I),O=me(O,1),R=me(R,1)}return C=se(N,k.j(C)),new fe(k,C)}for(k=A;N.l(C)>=0;){for(R=Math.max(1,Math.floor(N.m()/C.m())),O=Math.ceil(Math.log(R)/Math.LN2),O=O<=48?1:Math.pow(2,O-48),V=_(R),I=V.j(C);H(I)||I.l(N)>0;)R-=O,V=_(R),I=V.j(C);q(V)&&(V=S),k=k.add(V),N=se(N,I)}return new fe(k,N)}r.B=function(N){return ve(this,N).h},r.and=function(N){const C=Math.max(this.g.length,N.g.length),R=[];for(let O=0;O<C;O++)R[O]=this.i(O)&N.i(O);return new h(R,this.h&N.h)},r.or=function(N){const C=Math.max(this.g.length,N.g.length),R=[];for(let O=0;O<C;O++)R[O]=this.i(O)|N.i(O);return new h(R,this.h|N.h)},r.xor=function(N){const C=Math.max(this.g.length,N.g.length),R=[];for(let O=0;O<C;O++)R[O]=this.i(O)^N.i(O);return new h(R,this.h^N.h)};function xe(N){const C=N.g.length+1,R=[];for(let O=0;O<C;O++)R[O]=N.i(O)<<1|N.i(O-1)>>>31;return new h(R,N.h)}function me(N,C){const R=C>>5;C%=32;const O=N.g.length-R,k=[];for(let V=0;V<O;V++)k[V]=C>0?N.i(V+R)>>>C|N.i(V+R+1)<<32-C:N.i(V+R);return new h(k,N.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,w_=i,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.B,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=E,vs=h}).apply(typeof Eg<"u"?Eg:typeof self<"u"?self:typeof window<"u"?window:{});var Cu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var E_,Pa,T_,Ou,xd,I_,S_,x_;(function(){var r,e=Object.defineProperty;function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Cu=="object"&&Cu];for(var m=0;m<u.length;++m){var y=u[m];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var i=t(this);function o(u,m){if(m)e:{var y=i;u=u.split(".");for(var T=0;T<u.length-1;T++){var L=u[T];if(!(L in y))break e;y=y[L]}u=u[u.length-1],T=y[u],m=m(T),m!=T&&m!=null&&e(y,u,{configurable:!0,writable:!0,value:m})}}o("Symbol.dispose",function(u){return u||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(u){return u||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(u){return u||function(m){var y=[],T;for(T in m)Object.prototype.hasOwnProperty.call(m,T)&&y.push([T,m[T]]);return y}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},h=this||self;function f(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function g(u,m,y){return u.call.apply(u.bind,arguments)}function _(u,m,y){return _=g,_.apply(null,arguments)}function E(u,m){var y=Array.prototype.slice.call(arguments,1);return function(){var T=y.slice();return T.push.apply(T,arguments),u.apply(this,T)}}function A(u,m){function y(){}y.prototype=m.prototype,u.Z=m.prototype,u.prototype=new y,u.prototype.constructor=u,u.Ob=function(T,L,B){for(var re=Array(arguments.length-2),Ae=2;Ae<arguments.length;Ae++)re[Ae-2]=arguments[Ae];return m.prototype[L].apply(T,re)}}var S=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?u=>u&&AsyncContext.Snapshot.wrap(u):u=>u;function F(u){const m=u.length;if(m>0){const y=Array(m);for(let T=0;T<m;T++)y[T]=u[T];return y}return[]}function q(u,m){for(let T=1;T<arguments.length;T++){const L=arguments[T];var y=typeof L;if(y=y!="object"?y:L?Array.isArray(L)?"array":y:"null",y=="array"||y=="object"&&typeof L.length=="number"){y=u.length||0;const B=L.length||0;u.length=y+B;for(let re=0;re<B;re++)u[y+re]=L[re]}else u.push(L)}}class H{constructor(m,y){this.i=m,this.j=y,this.h=0,this.g=null}get(){let m;return this.h>0?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function $(u){h.setTimeout(()=>{throw u},0)}function se(){var u=N;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class ue{constructor(){this.h=this.g=null}add(m,y){const T=fe.get();T.set(m,y),this.h?this.h.next=T:this.g=T,this.h=T}}var fe=new H(()=>new ve,u=>u.reset());class ve{constructor(){this.next=this.g=this.h=null}set(m,y){this.h=m,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let xe,me=!1,N=new ue,C=()=>{const u=Promise.resolve(void 0);xe=()=>{u.then(R)}};function R(){for(var u;u=se();){try{u.h.call(u.g)}catch(y){$(y)}var m=fe;m.j(u),m.h<100&&(m.h++,u.next=m.g,m.g=u)}me=!1}function O(){this.u=this.u,this.C=this.C}O.prototype.u=!1,O.prototype.dispose=function(){this.u||(this.u=!0,this.N())},O.prototype[Symbol.dispose]=function(){this.dispose()},O.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function k(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}k.prototype.h=function(){this.defaultPrevented=!0};var V=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const y=()=>{};h.addEventListener("test",y,m),h.removeEventListener("test",y,m)}catch{}return u})();function I(u){return/^[\s\xa0]*$/.test(u)}function _e(u,m){k.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u&&this.init(u,m)}A(_e,k),_e.prototype.init=function(u,m){const y=this.type=u.type,T=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget,m||(y=="mouseover"?m=u.fromElement:y=="mouseout"&&(m=u.toElement)),this.relatedTarget=m,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=u.pointerType,this.state=u.state,this.i=u,u.defaultPrevented&&_e.Z.h.call(this)},_e.prototype.h=function(){_e.Z.h.call(this);const u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Me="closure_listenable_"+(Math.random()*1e6|0),ze=0;function je(u,m,y,T,L){this.listener=u,this.proxy=null,this.src=m,this.type=y,this.capture=!!T,this.ha=L,this.key=++ze,this.da=this.fa=!1}function ee(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function X(u,m,y){for(const T in u)m.call(y,u[T],T,u)}function K(u,m){for(const y in u)m.call(void 0,u[y],y,u)}function b(u){const m={};for(const y in u)m[y]=u[y];return m}const j="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Z(u,m){let y,T;for(let L=1;L<arguments.length;L++){T=arguments[L];for(y in T)u[y]=T[y];for(let B=0;B<j.length;B++)y=j[B],Object.prototype.hasOwnProperty.call(T,y)&&(u[y]=T[y])}}function ne(u){this.src=u,this.g={},this.h=0}ne.prototype.add=function(u,m,y,T,L){const B=u.toString();u=this.g[B],u||(u=this.g[B]=[],this.h++);const re=Se(u,m,T,L);return re>-1?(m=u[re],y||(m.fa=!1)):(m=new je(m,this.src,B,!!T,L),m.fa=y,u.push(m)),m};function Ee(u,m){const y=m.type;if(y in u.g){var T=u.g[y],L=Array.prototype.indexOf.call(T,m,void 0),B;(B=L>=0)&&Array.prototype.splice.call(T,L,1),B&&(ee(m),u.g[y].length==0&&(delete u.g[y],u.h--))}}function Se(u,m,y,T){for(let L=0;L<u.length;++L){const B=u[L];if(!B.da&&B.listener==m&&B.capture==!!y&&B.ha==T)return L}return-1}var Ne="closure_lm_"+(Math.random()*1e6|0),Fe={};function Ge(u,m,y,T,L){if(Array.isArray(m)){for(let B=0;B<m.length;B++)Ge(u,m[B],y,T,L);return null}return y=Vo(y),u&&u[Me]?u.J(m,y,f(T)?!!T.capture:!1,L):Bt(u,m,y,!1,T,L)}function Bt(u,m,y,T,L,B){if(!m)throw Error("Invalid event type");const re=f(L)?!!L.capture:!!L;let Ae=vi(u);if(Ae||(u[Ne]=Ae=new ne(u)),y=Ae.add(m,y,T,re,B),y.proxy)return y;if(T=yi(),y.proxy=T,T.src=u,T.listener=y,u.addEventListener)V||(L=re),L===void 0&&(L=!1),u.addEventListener(m.toString(),T,L);else if(u.attachEvent)u.attachEvent(_i(m.toString()),T);else if(u.addListener&&u.removeListener)u.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return y}function yi(){function u(y){return m.call(u.src,u.listener,y)}const m=cl;return u}function Oo(u,m,y,T,L){if(Array.isArray(m))for(var B=0;B<m.length;B++)Oo(u,m[B],y,T,L);else T=f(T)?!!T.capture:!!T,y=Vo(y),u&&u[Me]?(u=u.i,B=String(m).toString(),B in u.g&&(m=u.g[B],y=Se(m,y,T,L),y>-1&&(ee(m[y]),Array.prototype.splice.call(m,y,1),m.length==0&&(delete u.g[B],u.h--)))):u&&(u=vi(u))&&(m=u.g[m.toString()],u=-1,m&&(u=Se(m,y,T,L)),(y=u>-1?m[u]:null)&&Dr(y))}function Dr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[Me])Ee(m.i,u);else{var y=u.type,T=u.proxy;m.removeEventListener?m.removeEventListener(y,T,u.capture):m.detachEvent?m.detachEvent(_i(y),T):m.addListener&&m.removeListener&&m.removeListener(T),(y=vi(m))?(Ee(y,u),y.h==0&&(y.src=null,m[Ne]=null)):ee(u)}}}function _i(u){return u in Fe?Fe[u]:Fe[u]="on"+u}function cl(u,m){if(u.da)u=!0;else{m=new _e(m,this);const y=u.listener,T=u.ha||u.src;u.fa&&Dr(u),u=y.call(T,m)}return u}function vi(u){return u=u[Ne],u instanceof ne?u:null}var Ns="__closure_events_fn_"+(Math.random()*1e9>>>0);function Vo(u){return typeof u=="function"?u:(u[Ns]||(u[Ns]=function(m){return u.handleEvent(m)}),u[Ns])}function ht(){O.call(this),this.i=new ne(this),this.M=this,this.G=null}A(ht,O),ht.prototype[Me]=!0,ht.prototype.removeEventListener=function(u,m,y,T){Oo(this,u,m,y,T)};function at(u,m){var y,T=u.G;if(T)for(y=[];T;T=T.G)y.push(T);if(u=u.M,T=m.type||m,typeof m=="string")m=new k(m,u);else if(m instanceof k)m.target=m.target||u;else{var L=m;m=new k(T,u),Z(m,L)}L=!0;let B,re;if(y)for(re=y.length-1;re>=0;re--)B=m.g=y[re],L=wn(B,T,!0,m)&&L;if(B=m.g=u,L=wn(B,T,!0,m)&&L,L=wn(B,T,!1,m)&&L,y)for(re=0;re<y.length;re++)B=m.g=y[re],L=wn(B,T,!1,m)&&L}ht.prototype.N=function(){if(ht.Z.N.call(this),this.i){var u=this.i;for(const m in u.g){const y=u.g[m];for(let T=0;T<y.length;T++)ee(y[T]);delete u.g[m],u.h--}}this.G=null},ht.prototype.J=function(u,m,y,T){return this.i.add(String(u),m,!1,y,T)},ht.prototype.K=function(u,m,y,T){return this.i.add(String(u),m,!0,y,T)};function wn(u,m,y,T){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();let L=!0;for(let B=0;B<m.length;++B){const re=m[B];if(re&&!re.da&&re.capture==y){const Ae=re.listener,lt=re.ha||re.src;re.fa&&Ee(u.i,re),L=Ae.call(lt,T)!==!1&&L}}return L&&!T.defaultPrevented}function Mo(u,m){if(typeof u!="function")if(u&&typeof u.handleEvent=="function")u=_(u.handleEvent,u);else throw Error("Invalid listener argument");return Number(m)>2147483647?-1:h.setTimeout(u,m||0)}function Lo(u){u.g=Mo(()=>{u.g=null,u.i&&(u.i=!1,Lo(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class hl extends O{constructor(m,y){super(),this.m=m,this.l=y,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Lo(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Or(u){O.call(this),this.h=u,this.g={}}A(Or,O);var jo=[];function wi(u){X(u.g,function(m,y){this.g.hasOwnProperty(y)&&Dr(m)},u),u.g={}}Or.prototype.N=function(){Or.Z.N.call(this),wi(this)},Or.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Vr=h.JSON.stringify,dl=h.JSON.parse,bs=class{stringify(u){return h.JSON.stringify(u,void 0)}parse(u){return h.JSON.parse(u,void 0)}};function Mr(){}function fl(){}var Lr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ei(){k.call(this,"d")}A(Ei,k);function Fo(){k.call(this,"c")}A(Fo,k);var En={},Ti=null;function jr(){return Ti=Ti||new ht}En.Ia="serverreachability";function Ii(u){k.call(this,En.Ia,u)}A(Ii,k);function ar(u){const m=jr();at(m,new Ii(m))}En.STAT_EVENT="statevent";function lr(u,m){k.call(this,En.STAT_EVENT,u),this.stat=m}A(lr,k);function it(u){const m=jr();at(m,new lr(m,u))}En.Ja="timingevent";function Uo(u,m){k.call(this,En.Ja,u),this.size=m}A(Uo,k);function Fr(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){u()},m)}function Ur(){this.g=!0}Ur.prototype.ua=function(){this.g=!1};function pl(u,m,y,T,L,B){u.info(function(){if(u.g)if(B){var re="",Ae=B.split("&");for(let He=0;He<Ae.length;He++){var lt=Ae[He].split("=");if(lt.length>1){const dt=lt[0];lt=lt[1];const rn=dt.split("_");re=rn.length>=2&&rn[1]=="type"?re+(dt+"="+lt+"&"):re+(dt+"=redacted&")}}}else re=null;else re=B;return"XMLHTTP REQ ("+T+") [attempt "+L+"]: "+m+`
`+y+`
`+re})}function ml(u,m,y,T,L,B,re){u.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+L+"]: "+m+`
`+y+`
`+B+" "+re})}function On(u,m,y,T){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+Ds(u,y)+(T?" "+T:"")})}function gl(u,m){u.info(function(){return"TIMEOUT: "+m})}Ur.prototype.info=function(){};function Ds(u,m){if(!u.g)return m;if(!m)return null;try{const B=JSON.parse(m);if(B){for(u=0;u<B.length;u++)if(Array.isArray(B[u])){var y=B[u];if(!(y.length<2)){var T=y[1];if(Array.isArray(T)&&!(T.length<1)){var L=T[0];if(L!="noop"&&L!="stop"&&L!="close")for(let re=1;re<T.length;re++)T[re]=""}}}}return Vr(B)}catch{return m}}var zr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Br={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},yl;function ur(){}A(ur,Mr),ur.prototype.g=function(){return new XMLHttpRequest},yl=new ur;function Vn(u){return encodeURIComponent(String(u))}function Si(u){var m=1;u=u.split(":");const y=[];for(;m>0&&u.length;)y.push(u.shift()),m--;return u.length&&y.push(u.join(":")),y}function ln(u,m,y,T){this.j=u,this.i=m,this.l=y,this.S=T||1,this.V=new Or(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new _l}function _l(){this.i=null,this.g="",this.h=!1}var vl={},zo={};function Tn(u,m,y){u.M=1,u.A=hr(un(m)),u.u=y,u.R=!0,Bo(u,null)}function Bo(u,m){u.F=Date.now(),Os(u),u.B=un(u.A);var y=u.B,T=u.S;Array.isArray(T)||(T=[String(T)]),Jo(y.i,"t",T),u.C=0,y=u.j.L,u.h=new _l,u.g=Pl(u.j,y?m:null,!u.u),u.P>0&&(u.O=new hl(_(u.Y,u,u.g),u.P)),m=u.V,y=u.g,T=u.ba;var L="readystatechange";Array.isArray(L)||(L&&(jo[0]=L.toString()),L=jo);for(let B=0;B<L.length;B++){const re=Ge(y,L[B],T||m.handleEvent,!1,m.h||m);if(!re)break;m.g[re.key]=re}m=u.J?b(u.J):{},u.u?(u.v||(u.v="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.B,u.v,u.u,m)):(u.v="GET",u.g.ea(u.B,u.v,null,m)),ar(),pl(u.i,u.v,u.B,u.l,u.S,u.u)}ln.prototype.ba=function(u){u=u.target;const m=this.O;m&&Bn(u)==3?m.j():this.Y(u)},ln.prototype.Y=function(u){try{if(u==this.g)e:{const Ae=Bn(this.g),lt=this.g.ya(),He=this.g.ca();if(!(Ae<3)&&(Ae!=3||this.g&&(this.h.h||this.g.la()||Al(this.g)))){this.K||Ae!=4||lt==7||(lt==8||He<=0?ar(3):ar(2)),xi(this);var m=this.g.ca();this.X=m;var y=wl(this);if(this.o=m==200,ml(this.i,this.v,this.B,this.l,this.S,Ae,m),this.o){if(this.U&&!this.L){t:{if(this.g){var T,L=this.g;if((T=L.g?L.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(T)){var B=T;break t}}B=null}if(u=B)On(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ye(this,u);else{this.o=!1,this.m=3,it(12),cr(this),Vs(this);break e}}if(this.R){u=!0;let dt;for(;!this.K&&this.C<y.length;)if(dt=Tl(this,y),dt==zo){Ae==4&&(this.m=4,it(14),u=!1),On(this.i,this.l,null,"[Incomplete Response]");break}else if(dt==vl){this.m=4,it(15),On(this.i,this.l,y,"[Invalid Chunk]"),u=!1;break}else On(this.i,this.l,dt,null),Ye(this,dt);if(El(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ae!=4||y.length!=0||this.h.h||(this.m=1,it(16),u=!1),this.o=this.o&&u,!u)On(this.i,this.l,y,"[Invalid Chunked Response]"),cr(this),Vs(this);else if(y.length>0&&!this.W){this.W=!0;var re=this.j;re.g==this&&re.aa&&!re.P&&(re.j.info("Great, no buffering proxy detected. Bytes received: "+y.length),qs(re),re.P=!0,it(11))}}else On(this.i,this.l,y,null),Ye(this,y);Ae==4&&cr(this),this.o&&!this.K&&(Ae==4?Vi(this.j,this):(this.o=!1,Os(this)))}else ea(this.g),m==400&&y.indexOf("Unknown SID")>0?(this.m=3,it(12)):(this.m=0,it(13)),cr(this),Vs(this)}}}catch{}finally{}};function wl(u){if(!El(u))return u.g.la();const m=Al(u.g);if(m==="")return"";let y="";const T=m.length,L=Bn(u.g)==4;if(!u.h.i){if(typeof TextDecoder>"u")return cr(u),Vs(u),"";u.h.i=new h.TextDecoder}for(let B=0;B<T;B++)u.h.h=!0,y+=u.h.i.decode(m[B],{stream:!(L&&B==T-1)});return m.length=0,u.h.g+=y,u.C=0,u.h.g}function El(u){return u.g?u.v=="GET"&&u.M!=2&&u.j.Aa:!1}function Tl(u,m){var y=u.C,T=m.indexOf(`
`,y);return T==-1?zo:(y=Number(m.substring(y,T)),isNaN(y)?vl:(T+=1,T+y>m.length?zo:(m=m.slice(T,T+y),u.C=T+y,m)))}ln.prototype.cancel=function(){this.K=!0,cr(this)};function Os(u){u.T=Date.now()+u.H,$o(u,u.H)}function $o(u,m){if(u.D!=null)throw Error("WatchDog timer not null");u.D=Fr(_(u.aa,u),m)}function xi(u){u.D&&(h.clearTimeout(u.D),u.D=null)}ln.prototype.aa=function(){this.D=null;const u=Date.now();u-this.T>=0?(gl(this.i,this.B),this.M!=2&&(ar(),it(17)),cr(this),this.m=2,Vs(this)):$o(this,this.T-u)};function Vs(u){u.j.I==0||u.K||Vi(u.j,u)}function cr(u){xi(u);var m=u.O;m&&typeof m.dispose=="function"&&m.dispose(),u.O=null,wi(u.V),u.g&&(m=u.g,u.g=null,m.abort(),m.dispose())}function Ye(u,m){try{var y=u.j;if(y.I!=0&&(y.g==u||Ho(y.h,u))){if(!u.L&&Ho(y.h,u)&&y.I==3){try{var T=y.Ba.g.parse(m)}catch{T=null}if(Array.isArray(T)&&T.length==3){var L=T;if(L[0]==0){e:if(!y.v){if(y.g)if(y.g.F+3e3<u.F)Oi(y),tn(y);else break e;Hn(y),it(18)}}else y.xa=L[1],0<y.xa-y.K&&L[2]<37500&&y.F&&y.A==0&&!y.C&&(y.C=Fr(_(y.Va,y),6e3));Ms(y.h)<=1&&y.ta&&(y.ta=void 0)}else nn(y,11)}else if((u.L||y.g==u)&&Oi(y),!I(m))for(L=y.Ba.g.parse(m),m=0;m<L.length;m++){let He=L[m];const dt=He[0];if(!(dt<=y.K))if(y.K=dt,He=He[1],y.I==2)if(He[0]=="c"){y.M=He[1],y.ba=He[2];const rn=He[3];rn!=null&&(y.ka=rn,y.j.info("VER="+y.ka));const gr=He[4];gr!=null&&(y.za=gr,y.j.info("SVER="+y.za));const Gn=He[5];Gn!=null&&typeof Gn=="number"&&Gn>0&&(T=1.5*Gn,y.O=T,y.j.info("backChannelRequestTimeoutMs_="+T)),T=y;const Wn=u.g;if(Wn){const ji=Wn.g?Wn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ji){var B=T.h;B.g||ji.indexOf("spdy")==-1&&ji.indexOf("quic")==-1&&ji.indexOf("h2")==-1||(B.j=B.l,B.g=new Set,B.h&&(Ai(B,B.h),B.h=null))}if(T.G){const ra=Wn.g?Wn.g.getResponseHeader("X-HTTP-Session-Id"):null;ra&&(T.wa=ra,$e(T.J,T.G,ra))}}y.I=3,y.l&&y.l.ra(),y.aa&&(y.T=Date.now()-u.F,y.j.info("Handshake RTT: "+y.T+"ms")),T=y;var re=u;if(T.na=na(T,T.L?T.ba:null,T.W),re.L){Ls(T.h,re);var Ae=re,lt=T.O;lt&&(Ae.H=lt),Ae.D&&(xi(Ae),Os(Ae)),T.g=re}else bt(T);y.i.length>0&&mr(y)}else He[0]!="stop"&&He[0]!="close"||nn(y,7);else y.I==3&&(He[0]=="stop"||He[0]=="close"?He[0]=="stop"?nn(y,7):bi(y):He[0]!="noop"&&y.l&&y.l.qa(He),y.A=0)}}ar(4)}catch{}}var kc=class{constructor(u,m){this.g=u,this.map=m}};function Ci(u){this.l=u||10,h.PerformanceNavigationTiming?(u=h.performance.getEntriesByType("navigation"),u=u.length>0&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function qo(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Ms(u){return u.h?1:u.g?u.g.size:0}function Ho(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function Ai(u,m){u.g?u.g.add(m):u.h=m}function Ls(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}Ci.prototype.cancel=function(){if(this.i=Jt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Jt(u){if(u.h!=null)return u.i.concat(u.h.G);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const y of u.g.values())m=m.concat(y.G);return m}return F(u.i)}var Il=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Zt(u,m){if(u){u=u.split("&");for(let y=0;y<u.length;y++){const T=u[y].indexOf("=");let L,B=null;T>=0?(L=u[y].substring(0,T),B=u[y].substring(T+1)):L=u[y],m(L,B?decodeURIComponent(B.replace(/\+/g," ")):"")}}}function Mn(u){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let m;u instanceof Mn?(this.l=u.l,js(this,u.j),this.o=u.o,this.g=u.g,Ln(this,u.u),this.h=u.h,$r(this,Zo(u.i)),this.m=u.m):u&&(m=String(u).match(Il))?(this.l=!1,js(this,m[1]||"",!0),this.o=Fs(m[2]||""),this.g=Fs(m[3]||"",!0),Ln(this,m[4]),this.h=Fs(m[5]||"",!0),$r(this,m[6]||"",!0),this.m=Fs(m[7]||"")):(this.l=!1,this.i=new Ve(null,this.l))}Mn.prototype.toString=function(){const u=[];var m=this.j;m&&u.push(Us(m,Wo,!0),":");var y=this.g;return(y||m=="file")&&(u.push("//"),(m=this.o)&&u.push(Us(m,Wo,!0),"@"),u.push(Vn(y).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.u,y!=null&&u.push(":",String(y))),(y=this.h)&&(this.g&&y.charAt(0)!="/"&&u.push("/"),u.push(Us(y,y.charAt(0)=="/"?zs:Ko,!0))),(y=this.i.toString())&&u.push("?",y),(y=this.m)&&u.push("#",Us(y,Qo)),u.join("")},Mn.prototype.resolve=function(u){const m=un(this);let y=!!u.j;y?js(m,u.j):y=!!u.o,y?m.o=u.o:y=!!u.g,y?m.g=u.g:y=u.u!=null;var T=u.h;if(y)Ln(m,u.u);else if(y=!!u.h){if(T.charAt(0)!="/")if(this.g&&!this.h)T="/"+T;else{var L=m.h.lastIndexOf("/");L!=-1&&(T=m.h.slice(0,L+1)+T)}if(L=T,L==".."||L==".")T="";else if(L.indexOf("./")!=-1||L.indexOf("/.")!=-1){T=L.lastIndexOf("/",0)==0,L=L.split("/");const B=[];for(let re=0;re<L.length;){const Ae=L[re++];Ae=="."?T&&re==L.length&&B.push(""):Ae==".."?((B.length>1||B.length==1&&B[0]!="")&&B.pop(),T&&re==L.length&&B.push("")):(B.push(Ae),T=!0)}T=B.join("/")}else T=L}return y?m.h=T:y=u.i.toString()!=="",y?$r(m,Zo(u.i)):y=!!u.m,y&&(m.m=u.m),m};function un(u){return new Mn(u)}function js(u,m,y){u.j=y?Fs(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function Ln(u,m){if(m){if(m=Number(m),isNaN(m)||m<0)throw Error("Bad port number "+m);u.u=m}else u.u=null}function $r(u,m,y){m instanceof Ve?(u.i=m,Pi(u.i,u.l)):(y||(m=Us(m,Nc)),u.i=new Ve(m,u.l))}function $e(u,m,y){u.i.set(m,y)}function hr(u){return $e(u,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),u}function Fs(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Us(u,m,y){return typeof u=="string"?(u=encodeURI(u).replace(m,Go),y&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Go(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Wo=/[#\/\?@]/g,Ko=/[#\?:]/g,zs=/[#\?]/g,Nc=/[#\?@]/g,Qo=/#/g;function Ve(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function jn(u){u.g||(u.g=new Map,u.h=0,u.i&&Zt(u.i,function(m,y){u.add(decodeURIComponent(m.replace(/\+/g," ")),y)}))}r=Ve.prototype,r.add=function(u,m){jn(this),this.i=null,u=Fn(this,u);let y=this.g.get(u);return y||this.g.set(u,y=[]),y.push(m),this.h+=1,this};function Yo(u,m){jn(u),m=Fn(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function Ri(u,m){return jn(u),m=Fn(u,m),u.g.has(m)}r.forEach=function(u,m){jn(this),this.g.forEach(function(y,T){y.forEach(function(L){u.call(m,L,T,this)},this)},this)};function Xo(u,m){jn(u);let y=[];if(typeof m=="string")Ri(u,m)&&(y=y.concat(u.g.get(Fn(u,m))));else for(u=Array.from(u.g.values()),m=0;m<u.length;m++)y=y.concat(u[m]);return y}r.set=function(u,m){return jn(this),this.i=null,u=Fn(this,u),Ri(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},r.get=function(u,m){return u?(u=Xo(this,u),u.length>0?String(u[0]):m):m};function Jo(u,m,y){Yo(u,m),y.length>0&&(u.i=null,u.g.set(Fn(u,m),F(y)),u.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(let T=0;T<m.length;T++){var y=m[T];const L=Vn(y);y=Xo(this,y);for(let B=0;B<y.length;B++){let re=L;y[B]!==""&&(re+="="+Vn(y[B])),u.push(re)}}return this.i=u.join("&")};function Zo(u){const m=new Ve;return m.i=u.i,u.g&&(m.g=new Map(u.g),m.h=u.h),m}function Fn(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function Pi(u,m){m&&!u.j&&(jn(u),u.i=null,u.g.forEach(function(y,T){const L=T.toLowerCase();T!=L&&(Yo(this,T),Jo(this,L,y))},u)),u.j=m}function Un(u,m){const y=new Ur;if(h.Image){const T=new Image;T.onload=E(xt,y,"TestLoadImage: loaded",!0,m,T),T.onerror=E(xt,y,"TestLoadImage: error",!1,m,T),T.onabort=E(xt,y,"TestLoadImage: abort",!1,m,T),T.ontimeout=E(xt,y,"TestLoadImage: timeout",!1,m,T),h.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=u}else m(!1)}function zn(u,m){const y=new Ur,T=new AbortController,L=setTimeout(()=>{T.abort(),xt(y,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:T.signal}).then(B=>{clearTimeout(L),B.ok?xt(y,"TestPingServer: ok",!0,m):xt(y,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(L),xt(y,"TestPingServer: error",!1,m)})}function xt(u,m,y,T,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),T(y)}catch{}}function Bs(){this.g=new bs}function dr(u){this.i=u.Sb||null,this.h=u.ab||!1}A(dr,Mr),dr.prototype.g=function(){return new en(this.i,this.h)};function en(u,m){ht.call(this),this.H=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}A(en,ht),r=en.prototype,r.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=u,this.D=m,this.readyState=1,In(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const m={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};u&&(m.body=u),(this.H||h).fetch(new Request(this.D,m)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,qr(this)),this.readyState=0},r.Pa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,In(this)),this.g&&(this.readyState=3,In(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Sl(this)}else u.text().then(this.Oa.bind(this),this.ga.bind(this))};function Sl(u){u.j.read().then(u.Ma.bind(u)).catch(u.ga.bind(u))}r.Ma=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.B.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?qr(this):In(this),this.readyState==3&&Sl(this)}},r.Oa=function(u){this.g&&(this.response=this.responseText=u,qr(this))},r.Na=function(u){this.g&&(this.response=u,qr(this))},r.ga=function(){this.g&&qr(this)};function qr(u){u.readyState=4,u.l=null,u.j=null,u.B=null,In(u)}r.setRequestHeader=function(u,m){this.A.append(u,m)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var y=m.next();!y.done;)y=y.value,u.push(y[0]+": "+y[1]),y=m.next();return u.join(`\r
`)};function In(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(en.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function xl(u){let m="";return X(u,function(y,T){m+=T,m+=":",m+=y,m+=`\r
`}),m}function ki(u,m,y){e:{for(T in y){var T=!1;break e}T=!0}T||(y=xl(y),typeof u=="string"?y!=null&&Vn(y):$e(u,m,y))}function We(u){ht.call(this),this.headers=new Map,this.L=u||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}A(We,ht);var Cl=/^https?$/i,bc=["POST","PUT"];r=We.prototype,r.Fa=function(u){this.H=u},r.ea=function(u,m,y,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():yl.g(),this.g.onreadystatechange=S(_(this.Ca,this));try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(B){Hr(this,B);return}if(u=y||"",y=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var L in T)y.set(L,T[L]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const B of T.keys())y.set(B,T.get(B));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(y.keys()).find(B=>B.toLowerCase()=="content-type"),L=h.FormData&&u instanceof h.FormData,!(Array.prototype.indexOf.call(bc,m,void 0)>=0)||T||L||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[B,re]of y)this.g.setRequestHeader(B,re);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(u),this.v=!1}catch(B){Hr(this,B)}};function Hr(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.o=5,Gr(u),pr(u)}function Gr(u){u.A||(u.A=!0,at(u,"complete"),at(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=u||7,at(this,"complete"),at(this,"abort"),pr(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),pr(this,!0)),We.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?fr(this):this.Xa())},r.Xa=function(){fr(this)};function fr(u){if(u.h&&typeof l<"u"){if(u.v&&Bn(u)==4)setTimeout(u.Ca.bind(u),0);else if(at(u,"readystatechange"),Bn(u)==4){u.h=!1;try{const B=u.ca();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var y;if(!(y=m)){var T;if(T=B===0){let re=String(u.D).match(Il)[1]||null;!re&&h.self&&h.self.location&&(re=h.self.location.protocol.slice(0,-1)),T=!Cl.test(re?re.toLowerCase():"")}y=T}if(y)at(u,"complete"),at(u,"success");else{u.o=6;try{var L=Bn(u)>2?u.g.statusText:""}catch{L=""}u.l=L+" ["+u.ca()+"]",Gr(u)}}finally{pr(u)}}}}function pr(u,m){if(u.g){u.m&&(clearTimeout(u.m),u.m=null);const y=u.g;u.g=null,m||at(u,"ready");try{y.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function Bn(u){return u.g?u.g.readyState:0}r.ca=function(){try{return Bn(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),dl(m)}};function Al(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.F){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function ea(u){const m={};u=(u.g&&Bn(u)>=2&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<u.length;T++){if(I(u[T]))continue;var y=Si(u[T]);const L=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const B=m[L]||[];m[L]=B,B.push(y)}K(m,function(T){return T.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function $n(u,m,y){return y&&y.internalChannelParams&&y.internalChannelParams[u]||m}function Ni(u){this.za=0,this.i=[],this.j=new Ur,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=$n("failFast",!1,u),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=$n("baseRetryDelayMs",5e3,u),this.Za=$n("retryDelaySeedMs",1e4,u),this.Ta=$n("forwardChannelMaxRetries",2,u),this.va=$n("forwardChannelRequestTimeoutMs",2e4,u),this.ma=u&&u.xmlHttpFactory||void 0,this.Ua=u&&u.Rb||void 0,this.Aa=u&&u.useFetchStreams||!1,this.O=void 0,this.L=u&&u.supportsCrossDomainXhr||!1,this.M="",this.h=new Ci(u&&u.concurrentRequestLimit),this.Ba=new Bs,this.S=u&&u.fastHandshake||!1,this.R=u&&u.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=u&&u.Pb||!1,u&&u.ua&&this.j.ua(),u&&u.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&u&&u.detectBufferingProxy||!1,this.ia=void 0,u&&u.longPollingTimeout&&u.longPollingTimeout>0&&(this.ia=u.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=Ni.prototype,r.ka=8,r.I=1,r.connect=function(u,m,y,T){it(0),this.W=u,this.H=m||{},y&&T!==void 0&&(this.H.OSID=y,this.H.OAID=T),this.F=this.X,this.J=na(this,null,this.W),mr(this)};function bi(u){if(Di(u),u.I==3){var m=u.V++,y=un(u.J);if($e(y,"SID",u.M),$e(y,"RID",m),$e(y,"TYPE","terminate"),qn(u,y),m=new ln(u,u.j,m),m.M=2,m.A=hr(un(y)),y=!1,h.navigator&&h.navigator.sendBeacon)try{y=h.navigator.sendBeacon(m.A.toString(),"")}catch{}!y&&h.Image&&(new Image().src=m.A,y=!0),y||(m.g=Pl(m.j,null),m.g.ea(m.A)),m.F=Date.now(),Os(m)}Hs(u)}function tn(u){u.g&&(qs(u),u.g.cancel(),u.g=null)}function Di(u){tn(u),u.v&&(h.clearTimeout(u.v),u.v=null),Oi(u),u.h.cancel(),u.m&&(typeof u.m=="number"&&h.clearTimeout(u.m),u.m=null)}function mr(u){if(!qo(u.h)&&!u.m){u.m=!0;var m=u.Ea;xe||C(),me||(xe(),me=!0),N.add(m,u),u.D=0}}function Rl(u,m){return Ms(u.h)>=u.h.j-(u.m?1:0)?!1:u.m?(u.i=m.G.concat(u.i),!0):u.I==1||u.I==2||u.D>=(u.Sa?0:u.Ta)?!1:(u.m=Fr(_(u.Ea,u,m),Mi(u,u.D)),u.D++,!0)}r.Ea=function(u){if(this.m)if(this.m=null,this.I==1){if(!u){this.V=Math.floor(Math.random()*1e5),u=this.V++;const L=new ln(this,this.j,u);let B=this.o;if(this.U&&(B?(B=b(B),Z(B,this.U)):B=this.U),this.u!==null||this.R||(L.J=B,B=null),this.S)e:{for(var m=0,y=0;y<this.i.length;y++){t:{var T=this.i[y];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(m+=T,m>4096){m=y;break e}if(m===4096||y===this.i.length-1){m=y+1;break e}}m=1e3}else m=1e3;m=ta(this,L,m),y=un(this.J),$e(y,"RID",u),$e(y,"CVER",22),this.G&&$e(y,"X-HTTP-Session-Id",this.G),qn(this,y),B&&(this.R?m="headers="+Vn(xl(B))+"&"+m:this.u&&ki(y,this.u,B)),Ai(this.h,L),this.Ra&&$e(y,"TYPE","init"),this.S?($e(y,"$req",m),$e(y,"SID","null"),L.U=!0,Tn(L,y,null)):Tn(L,y,m),this.I=2}}else this.I==3&&(u?$s(this,u):this.i.length==0||qo(this.h)||$s(this))};function $s(u,m){var y;m?y=m.l:y=u.V++;const T=un(u.J);$e(T,"SID",u.M),$e(T,"RID",y),$e(T,"AID",u.K),qn(u,T),u.u&&u.o&&ki(T,u.u,u.o),y=new ln(u,u.j,y,u.D+1),u.u===null&&(y.J=u.o),m&&(u.i=m.G.concat(u.i)),m=ta(u,y,1e3),y.H=Math.round(u.va*.5)+Math.round(u.va*.5*Math.random()),Ai(u.h,y),Tn(y,T,m)}function qn(u,m){u.H&&X(u.H,function(y,T){$e(m,T,y)}),u.l&&X({},function(y,T){$e(m,T,y)})}function ta(u,m,y){y=Math.min(u.i.length,y);const T=u.l?_(u.l.Ka,u.l,u):null;e:{var L=u.i;let Ae=-1;for(;;){const lt=["count="+y];Ae==-1?y>0?(Ae=L[0].g,lt.push("ofs="+Ae)):Ae=0:lt.push("ofs="+Ae);let He=!0;for(let dt=0;dt<y;dt++){var B=L[dt].g;const rn=L[dt].map;if(B-=Ae,B<0)Ae=Math.max(0,L[dt].g-100),He=!1;else try{B="req"+B+"_"||"";try{var re=rn instanceof Map?rn:Object.entries(rn);for(const[gr,Gn]of re){let Wn=Gn;f(Gn)&&(Wn=Vr(Gn)),lt.push(B+gr+"="+encodeURIComponent(Wn))}}catch(gr){throw lt.push(B+"type="+encodeURIComponent("_badmap")),gr}}catch{T&&T(rn)}}if(He){re=lt.join("&");break e}}re=void 0}return u=u.i.splice(0,y),m.G=u,re}function bt(u){if(!u.g&&!u.v){u.Y=1;var m=u.Da;xe||C(),me||(xe(),me=!0),N.add(m,u),u.A=0}}function Hn(u){return u.g||u.v||u.A>=3?!1:(u.Y++,u.v=Fr(_(u.Da,u),Mi(u,u.A)),u.A++,!0)}r.Da=function(){if(this.v=null,Wr(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var u=4*this.T;this.j.info("BP detection timer enabled: "+u),this.B=Fr(_(this.Wa,this),u)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,it(10),tn(this),Wr(this))};function qs(u){u.B!=null&&(h.clearTimeout(u.B),u.B=null)}function Wr(u){u.g=new ln(u,u.j,"rpc",u.Y),u.u===null&&(u.g.J=u.o),u.g.P=0;var m=un(u.na);$e(m,"RID","rpc"),$e(m,"SID",u.M),$e(m,"AID",u.K),$e(m,"CI",u.F?"0":"1"),!u.F&&u.ia&&$e(m,"TO",u.ia),$e(m,"TYPE","xmlhttp"),qn(u,m),u.u&&u.o&&ki(m,u.u,u.o),u.O&&(u.g.H=u.O);var y=u.g;u=u.ba,y.M=1,y.A=hr(un(m)),y.u=null,y.R=!0,Bo(y,u)}r.Va=function(){this.C!=null&&(this.C=null,tn(this),Hn(this),it(19))};function Oi(u){u.C!=null&&(h.clearTimeout(u.C),u.C=null)}function Vi(u,m){var y=null;if(u.g==m){Oi(u),qs(u),u.g=null;var T=2}else if(Ho(u.h,m))y=m.G,Ls(u.h,m),T=1;else return;if(u.I!=0){if(m.o)if(T==1){y=m.u?m.u.length:0,m=Date.now()-m.F;var L=u.D;T=jr(),at(T,new Uo(T,y)),mr(u)}else bt(u);else if(L=m.m,L==3||L==0&&m.X>0||!(T==1&&Rl(u,m)||T==2&&Hn(u)))switch(y&&y.length>0&&(m=u.h,m.i=m.i.concat(y)),L){case 1:nn(u,5);break;case 4:nn(u,10);break;case 3:nn(u,6);break;default:nn(u,2)}}}function Mi(u,m){let y=u.Qa+Math.floor(Math.random()*u.Za);return u.isActive()||(y*=2),y*m}function nn(u,m){if(u.j.info("Error code "+m),m==2){var y=_(u.bb,u),T=u.Ua;const L=!T;T=new Mn(T||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||js(T,"https"),hr(T),L?Un(T.toString(),y):zn(T.toString(),y)}else it(2);u.I=0,u.l&&u.l.pa(m),Hs(u),Di(u)}r.bb=function(u){u?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function Hs(u){if(u.I=0,u.ja=[],u.l){const m=Jt(u.h);(m.length!=0||u.i.length!=0)&&(q(u.ja,m),q(u.ja,u.i),u.h.i.length=0,F(u.i),u.i.length=0),u.l.oa()}}function na(u,m,y){var T=y instanceof Mn?un(y):new Mn(y);if(T.g!="")m&&(T.g=m+"."+T.g),Ln(T,T.u);else{var L=h.location;T=L.protocol,m=m?m+"."+L.hostname:L.hostname,L=+L.port;const B=new Mn(null);T&&js(B,T),m&&(B.g=m),L&&Ln(B,L),y&&(B.h=y),T=B}return y=u.G,m=u.wa,y&&m&&$e(T,y,m),$e(T,"VER",u.ka),qn(u,T),T}function Pl(u,m,y){if(m&&!u.L)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Aa&&!u.ma?new We(new dr({ab:y})):new We(u.ma),m.Fa(u.L),m}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function kl(){}r=kl.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function Li(){}Li.prototype.g=function(u,m){return new Ct(u,m)};function Ct(u,m){ht.call(this),this.g=new Ni(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.sa&&(u?u["X-WebChannel-Client-Profile"]=m.sa:u={"X-WebChannel-Client-Profile":m.sa}),this.g.U=u,(u=m&&m.Qb)&&!I(u)&&(this.g.u=u),this.A=m&&m.supportsCrossDomainXhr||!1,this.v=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!I(m)&&(this.g.G=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new Kr(this)}A(Ct,ht),Ct.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ct.prototype.close=function(){bi(this.g)},Ct.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var y={};y.__data__=u,u=y}else this.v&&(y={},y.__data__=Vr(u),u=y);m.i.push(new kc(m.Ya++,u)),m.I==3&&mr(m)},Ct.prototype.N=function(){this.g.l=null,delete this.j,bi(this.g),delete this.g,Ct.Z.N.call(this)};function Nl(u){Ei.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const y in m){u=y;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}A(Nl,Ei);function bl(){Fo.call(this),this.status=1}A(bl,Fo);function Kr(u){this.g=u}A(Kr,kl),Kr.prototype.ra=function(){at(this.g,"a")},Kr.prototype.qa=function(u){at(this.g,new Nl(u))},Kr.prototype.pa=function(u){at(this.g,new bl)},Kr.prototype.oa=function(){at(this.g,"b")},Li.prototype.createWebChannel=Li.prototype.g,Ct.prototype.send=Ct.prototype.o,Ct.prototype.open=Ct.prototype.m,Ct.prototype.close=Ct.prototype.close,x_=function(){return new Li},S_=function(){return jr()},I_=En,xd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},zr.NO_ERROR=0,zr.TIMEOUT=8,zr.HTTP_ERROR=6,Ou=zr,Br.COMPLETE="complete",T_=Br,fl.EventType=Lr,Lr.OPEN="a",Lr.CLOSE="b",Lr.ERROR="c",Lr.MESSAGE="d",ht.prototype.listen=ht.prototype.J,Pa=fl,We.prototype.listenOnce=We.prototype.K,We.prototype.getLastError=We.prototype.Ha,We.prototype.getLastErrorCode=We.prototype.ya,We.prototype.getStatus=We.prototype.ca,We.prototype.getResponseJson=We.prototype.La,We.prototype.getResponseText=We.prototype.la,We.prototype.send=We.prototype.ea,We.prototype.setWithCredentials=We.prototype.Fa,E_=We}).apply(typeof Cu<"u"?Cu:typeof self<"u"?self:typeof window<"u"?window:{});const Tg="@firebase/firestore",Ig="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}jt.UNAUTHENTICATED=new jt(null),jt.GOOGLE_CREDENTIALS=new jt("google-credentials-uid"),jt.FIRST_PARTY=new jt("first-party-uid"),jt.MOCK_USER=new jt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ro="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui=new Gd("@firebase/firestore");function ao(){return ui.logLevel}function oe(r,...e){if(ui.logLevel<=be.DEBUG){const t=e.map(Yd);ui.debug(`Firestore (${Ro}): ${r}`,...t)}}function Rr(r,...e){if(ui.logLevel<=be.ERROR){const t=e.map(Yd);ui.error(`Firestore (${Ro}): ${r}`,...t)}}function wo(r,...e){if(ui.logLevel<=be.WARN){const t=e.map(Yd);ui.warn(`Firestore (${Ro}): ${r}`,...t)}}function Yd(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(r,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,C_(r,i,t)}function C_(r,e,t){let i=`FIRESTORE (${Ro}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw Rr(i),new Error(i)}function qe(r,e,t,i){let o="Unexpected state";typeof t=="string"?o=t:i=t,r||C_(e,o,i)}function Re(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ae extends br{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class EI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(jt.UNAUTHENTICATED)))}shutdown(){}}class TI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class II{constructor(e){this.t=e,this.currentUser=jt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){qe(this.o===void 0,42304);let i=this.i;const o=g=>this.i!==i?(i=this.i,t(g)):Promise.resolve();let l=new ws;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new ws,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=l;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},f=g=>{oe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>f(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?f(g):(oe("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new ws)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(oe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(qe(typeof i.accessToken=="string",31837,{l:i}),new A_(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return qe(e===null||typeof e=="string",2055,{h:e}),new jt(e)}}class SI{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=jt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class xI{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new SI(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(jt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Sg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class CI{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,kn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){qe(this.o===void 0,3512);const i=l=>{l.error!=null&&oe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.m;return this.m=l.token,oe("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>i(l)))};const o=l=>{oe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):oe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Sg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(qe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Sg(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AI(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<r;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const o=AI(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%62))}return i}}function De(r,e){return r<e?-1:r>e?1:0}function Cd(r,e){const t=Math.min(r.length,e.length);for(let i=0;i<t;i++){const o=r.charAt(i),l=e.charAt(i);if(o!==l)return ud(o)===ud(l)?De(o,l):ud(o)?1:-1}return De(r.length,e.length)}const RI=55296,PI=57343;function ud(r){const e=r.charCodeAt(0);return e>=RI&&e<=PI}function Eo(r,e,t){return r.length===e.length&&r.every(((i,o)=>t(i,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg="__name__";class Jn{constructor(e,t,i){t===void 0?t=0:t>e.length&&we(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&we(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return Jn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Jn?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=Jn.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return De(e.length,t.length)}static compareSegments(e,t){const i=Jn.isNumericId(e),o=Jn.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?Jn.extractNumericId(e).compare(Jn.extractNumericId(t)):Cd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return vs.fromString(e.substring(4,e.length-2))}}class Qe extends Jn{construct(e,t,i){return new Qe(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new ae(G.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((o=>o.length>0)))}return new Qe(t)}static emptyPath(){return new Qe([])}}const kI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class kt extends Jn{construct(e,t,i){return new kt(e,t,i)}static isValidIdentifier(e){return kI.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),kt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===xg}static keyField(){return new kt([xg])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new ae(G.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let h=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new ae(G.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ae(G.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=g,o+=2}else f==="`"?(h=!h,o++):f!=="."||h?(i+=f,o++):(l(),o++)}if(l(),h)throw new ae(G.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new kt(t)}static emptyPath(){return new kt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.path=e}static fromPath(e){return new pe(Qe.fromString(e))}static fromName(e){return new pe(Qe.fromString(e).popFirst(5))}static empty(){return new pe(Qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Qe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new pe(new Qe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R_(r,e,t){if(!t)throw new ae(G.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function NI(r,e,t,i){if(e===!0&&i===!0)throw new ae(G.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Cg(r){if(!pe.isDocumentKey(r))throw new ae(G.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Ag(r){if(pe.isDocumentKey(r))throw new ae(G.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function P_(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function dc(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":we(12329,{type:typeof r})}function za(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new ae(G.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=dc(r);throw new ae(G.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(r,e){const t={typeString:r};return e&&(t.value=e),t}function el(r,e){if(!P_(r))throw new ae(G.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const o=e[i].typeString,l="value"in e[i]?{value:e[i].value}:void 0;if(!(i in r)){t=`JSON missing required field: '${i}'`;break}const h=r[i];if(o&&typeof h!==o){t=`JSON field '${i}' must be a ${o}.`;break}if(l!==void 0&&h!==l.value){t=`Expected '${i}' field to equal '${l.value}'`;break}}if(t)throw new ae(G.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg=-62135596800,Pg=1e6;class Ze{static now(){return Ze.fromMillis(Date.now())}static fromDate(e){return Ze.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*Pg);return new Ze(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ae(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ae(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Rg)throw new ae(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ae(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Pg}_compareTo(e){return this.seconds===e.seconds?De(this.nanoseconds,e.nanoseconds):De(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ze._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(el(e,Ze._jsonSchema))return new Ze(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Rg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ze._jsonSchemaVersion="firestore/timestamp/1.0",Ze._jsonSchema={type:gt("string",Ze._jsonSchemaVersion),seconds:gt("number"),nanoseconds:gt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{static fromTimestamp(e){return new Ce(e)}static min(){return new Ce(new Ze(0,0))}static max(){return new Ce(new Ze(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba=-1;function bI(r,e){const t=r.toTimestamp().seconds,i=r.toTimestamp().nanoseconds+1,o=Ce.fromTimestamp(i===1e9?new Ze(t+1,0):new Ze(t,i));return new Ss(o,pe.empty(),e)}function DI(r){return new Ss(r.readTime,r.key,Ba)}class Ss{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Ss(Ce.min(),pe.empty(),Ba)}static max(){return new Ss(Ce.max(),pe.empty(),Ba)}}function OI(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=pe.comparator(r.documentKey,e.documentKey),t!==0?t:De(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class MI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Po(r){if(r.code!==G.FAILED_PRECONDITION||r.message!==VI)throw r;oe("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&we(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new W(((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof W?t:W.resolve(t)}catch(t){return W.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):W.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):W.reject(t)}static resolve(e){return new W(((t,i)=>{t(e)}))}static reject(e){return new W(((t,i)=>{i(e)}))}static waitFor(e){return new W(((t,i)=>{let o=0,l=0,h=!1;e.forEach((f=>{++o,f.next((()=>{++l,h&&l===o&&t()}),(g=>i(g)))})),h=!0,l===o&&t()}))}static or(e){let t=W.resolve(!1);for(const i of e)t=t.next((o=>o?W.resolve(o):i()));return t}static forEach(e,t){const i=[];return e.forEach(((o,l)=>{i.push(t.call(this,o,l))})),this.waitFor(i)}static mapArray(e,t){return new W(((i,o)=>{const l=e.length,h=new Array(l);let f=0;for(let g=0;g<l;g++){const _=g;t(e[_]).next((E=>{h[_]=E,++f,f===l&&i(h)}),(E=>o(E)))}}))}static doWhile(e,t){return new W(((i,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):i()};l()}))}}function LI(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ko(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ae(i),this.ue=i=>t.writeSequenceNumber(i))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}fc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd=-1;function pc(r){return r==null}function Wu(r){return r===0&&1/r==-1/0}function jI(r){return typeof r=="number"&&Number.isInteger(r)&&!Wu(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_="";function FI(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=kg(e)),e=UI(r.get(t),e);return kg(e)}function UI(r,e){let t=e;const i=r.length;for(let o=0;o<i;o++){const l=r.charAt(o);switch(l){case"\0":t+="";break;case k_:t+="";break;default:t+=l}}return t}function kg(r){return r+k_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ng(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function fi(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function N_(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,t){this.comparator=e,this.root=t||Pt.EMPTY}insert(e,t){return new rt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Pt.BLACK,null,null))}remove(e){return new rt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Au(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Au(this.root,e,this.comparator,!1)}getReverseIterator(){return new Au(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Au(this.root,e,this.comparator,!0)}}class Au{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Pt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??Pt.RED,this.left=o??Pt.EMPTY,this.right=l??Pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new Pt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Pt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw we(43730,{key:this.key,value:this.value});if(this.right.isRed())throw we(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw we(27949);return e+(this.isRed()?0:1)}}Pt.EMPTY=null,Pt.RED=!0,Pt.BLACK=!1;Pt.EMPTY=new class{constructor(){this.size=0}get key(){throw we(57766)}get value(){throw we(16141)}get color(){throw we(16727)}get left(){throw we(29726)}get right(){throw we(36894)}copy(e,t,i,o,l){return this}insert(e,t,i){return new Pt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.comparator=e,this.data=new rt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new bg(this.data.getIterator())}getIteratorFrom(e){return new bg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof vt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new vt(this.comparator);return t.data=e,t}}class bg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this.fields=e,e.sort(kt.comparator)}static empty(){return new Nn([])}unionWith(e){let t=new vt(kt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new Nn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Eo(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new b_("Invalid base64 string: "+l):l}})(e);return new Nt(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l})(e);return new Nt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return De(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Nt.EMPTY_BYTE_STRING=new Nt("");const zI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xs(r){if(qe(!!r,39018),typeof r=="string"){let e=0;const t=zI.exec(r);if(qe(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(r);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:ct(r.seconds),nanos:ct(r.nanos)}}function ct(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Cs(r){return typeof r=="string"?Nt.fromBase64String(r):Nt.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_="server_timestamp",O_="__type__",V_="__previous_value__",M_="__local_write_time__";function Zd(r){return(r?.mapValue?.fields||{})[O_]?.stringValue===D_}function mc(r){const e=r.mapValue.fields[V_];return Zd(e)?mc(e):e}function $a(r){const e=xs(r.mapValue.fields[M_].timestampValue);return new Ze(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e,t,i,o,l,h,f,g,_,E){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=f,this.longPollingOptions=g,this.useFetchStreams=_,this.isUsingEmulator=E}}const Ku="(default)";class qa{constructor(e,t){this.projectId=e,this.database=t||Ku}static empty(){return new qa("","")}get isDefaultDatabase(){return this.database===Ku}isEqual(e){return e instanceof qa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L_="__type__",$I="__max__",Ru={mapValue:{}},j_="__vector__",Qu="value";function As(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Zd(r)?4:HI(r)?9007199254740991:qI(r)?10:11:we(28295,{value:r})}function or(r,e){if(r===e)return!0;const t=As(r);if(t!==As(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return $a(r).isEqual($a(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=xs(o.timestampValue),f=xs(l.timestampValue);return h.seconds===f.seconds&&h.nanos===f.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(o,l){return Cs(o.bytesValue).isEqual(Cs(l.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(o,l){return ct(o.geoPointValue.latitude)===ct(l.geoPointValue.latitude)&&ct(o.geoPointValue.longitude)===ct(l.geoPointValue.longitude)})(r,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return ct(o.integerValue)===ct(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=ct(o.doubleValue),f=ct(l.doubleValue);return h===f?Wu(h)===Wu(f):isNaN(h)&&isNaN(f)}return!1})(r,e);case 9:return Eo(r.arrayValue.values||[],e.arrayValue.values||[],or);case 10:case 11:return(function(o,l){const h=o.mapValue.fields||{},f=l.mapValue.fields||{};if(Ng(h)!==Ng(f))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(f[g]===void 0||!or(h[g],f[g])))return!1;return!0})(r,e);default:return we(52216,{left:r})}}function Ha(r,e){return(r.values||[]).find((t=>or(t,e)))!==void 0}function To(r,e){if(r===e)return 0;const t=As(r),i=As(e);if(t!==i)return De(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return De(r.booleanValue,e.booleanValue);case 2:return(function(l,h){const f=ct(l.integerValue||l.doubleValue),g=ct(h.integerValue||h.doubleValue);return f<g?-1:f>g?1:f===g?0:isNaN(f)?isNaN(g)?0:-1:1})(r,e);case 3:return Dg(r.timestampValue,e.timestampValue);case 4:return Dg($a(r),$a(e));case 5:return Cd(r.stringValue,e.stringValue);case 6:return(function(l,h){const f=Cs(l),g=Cs(h);return f.compareTo(g)})(r.bytesValue,e.bytesValue);case 7:return(function(l,h){const f=l.split("/"),g=h.split("/");for(let _=0;_<f.length&&_<g.length;_++){const E=De(f[_],g[_]);if(E!==0)return E}return De(f.length,g.length)})(r.referenceValue,e.referenceValue);case 8:return(function(l,h){const f=De(ct(l.latitude),ct(h.latitude));return f!==0?f:De(ct(l.longitude),ct(h.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return Og(r.arrayValue,e.arrayValue);case 10:return(function(l,h){const f=l.fields||{},g=h.fields||{},_=f[Qu]?.arrayValue,E=g[Qu]?.arrayValue,A=De(_?.values?.length||0,E?.values?.length||0);return A!==0?A:Og(_,E)})(r.mapValue,e.mapValue);case 11:return(function(l,h){if(l===Ru.mapValue&&h===Ru.mapValue)return 0;if(l===Ru.mapValue)return 1;if(h===Ru.mapValue)return-1;const f=l.fields||{},g=Object.keys(f),_=h.fields||{},E=Object.keys(_);g.sort(),E.sort();for(let A=0;A<g.length&&A<E.length;++A){const S=Cd(g[A],E[A]);if(S!==0)return S;const F=To(f[g[A]],_[E[A]]);if(F!==0)return F}return De(g.length,E.length)})(r.mapValue,e.mapValue);default:throw we(23264,{he:t})}}function Dg(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return De(r,e);const t=xs(r),i=xs(e),o=De(t.seconds,i.seconds);return o!==0?o:De(t.nanos,i.nanos)}function Og(r,e){const t=r.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=To(t[o],i[o]);if(l)return l}return De(t.length,i.length)}function Io(r){return Ad(r)}function Ad(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const i=xs(t);return`time(${i.seconds},${i.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return Cs(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return pe.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=Ad(l);return i+"]"})(r.arrayValue):"mapValue"in r?(function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of i)l?l=!1:o+=",",o+=`${h}:${Ad(t.fields[h])}`;return o+"}"})(r.mapValue):we(61005,{value:r})}function Vu(r){switch(As(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=mc(r);return e?16+Vu(e):16;case 5:return 2*r.stringValue.length;case 6:return Cs(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((o,l)=>o+Vu(l)),0)})(r.arrayValue);case 10:case 11:return(function(i){let o=0;return fi(i.fields,((l,h)=>{o+=l.length+Vu(h)})),o})(r.mapValue);default:throw we(13486,{value:r})}}function Vg(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Rd(r){return!!r&&"integerValue"in r}function ef(r){return!!r&&"arrayValue"in r}function Mg(r){return!!r&&"nullValue"in r}function Lg(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Mu(r){return!!r&&"mapValue"in r}function qI(r){return(r?.mapValue?.fields||{})[L_]?.stringValue===j_}function Da(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return fi(r.mapValue.fields,((t,i)=>e.mapValue.fields[t]=Da(i))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Da(r.arrayValue.values[t]);return e}return{...r}}function HI(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===$I}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.value=e}static empty(){return new yn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!Mu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Da(t)}setAll(e){let t=kt.emptyPath(),i={},o=[];e.forEach(((h,f)=>{if(!t.isImmediateParentOf(f)){const g=this.getFieldsMap(t);this.applyChanges(g,i,o),i={},o=[],t=f.popLast()}h?i[f.lastSegment()]=Da(h):o.push(f.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());Mu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return or(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];Mu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){fi(t,((o,l)=>e[o]=l));for(const o of i)delete e[o]}clone(){return new yn(Da(this.value))}}function F_(r){const e=[];return fi(r.fields,((t,i)=>{const o=new kt([t]);if(Mu(i)){const l=F_(i.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)})),new Nn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e,t,i,o,l,h,f){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=h,this.documentState=f}static newInvalidDocument(e){return new Ft(e,0,Ce.min(),Ce.min(),Ce.min(),yn.empty(),0)}static newFoundDocument(e,t,i,o){return new Ft(e,1,t,Ce.min(),i,o,0)}static newNoDocument(e,t){return new Ft(e,2,t,Ce.min(),Ce.min(),yn.empty(),0)}static newUnknownDocument(e,t){return new Ft(e,3,t,Ce.min(),Ce.min(),yn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=yn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=yn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ft&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ft(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e,t){this.position=e,this.inclusive=t}}function jg(r,e,t){let i=0;for(let o=0;o<r.position.length;o++){const l=e[o],h=r.position[o];if(l.field.isKeyField()?i=pe.comparator(pe.fromName(h.referenceValue),t.key):i=To(h,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function Fg(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!or(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e,t="asc"){this.field=e,this.dir=t}}function GI(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{}class mt extends U_{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new KI(e,t,i):t==="array-contains"?new XI(e,i):t==="in"?new JI(e,i):t==="not-in"?new ZI(e,i):t==="array-contains-any"?new e1(e,i):new mt(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new QI(e,i):new YI(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(To(t,this.value)):t!==null&&As(this.value)===As(t)&&this.matchesComparison(To(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return we(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Dn extends U_{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Dn(e,t)}matches(e){return z_(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function z_(r){return r.op==="and"}function B_(r){return WI(r)&&z_(r)}function WI(r){for(const e of r.filters)if(e instanceof Dn)return!1;return!0}function Pd(r){if(r instanceof mt)return r.field.canonicalString()+r.op.toString()+Io(r.value);if(B_(r))return r.filters.map((e=>Pd(e))).join(",");{const e=r.filters.map((t=>Pd(t))).join(",");return`${r.op}(${e})`}}function $_(r,e){return r instanceof mt?(function(i,o){return o instanceof mt&&i.op===o.op&&i.field.isEqual(o.field)&&or(i.value,o.value)})(r,e):r instanceof Dn?(function(i,o){return o instanceof Dn&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce(((l,h,f)=>l&&$_(h,o.filters[f])),!0):!1})(r,e):void we(19439)}function q_(r){return r instanceof mt?(function(t){return`${t.field.canonicalString()} ${t.op} ${Io(t.value)}`})(r):r instanceof Dn?(function(t){return t.op.toString()+" {"+t.getFilters().map(q_).join(" ,")+"}"})(r):"Filter"}class KI extends mt{constructor(e,t,i){super(e,t,i),this.key=pe.fromName(i.referenceValue)}matches(e){const t=pe.comparator(e.key,this.key);return this.matchesComparison(t)}}class QI extends mt{constructor(e,t){super(e,"in",t),this.keys=H_("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class YI extends mt{constructor(e,t){super(e,"not-in",t),this.keys=H_("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function H_(r,e){return(e.arrayValue?.values||[]).map((t=>pe.fromName(t.referenceValue)))}class XI extends mt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ef(t)&&Ha(t.arrayValue,this.value)}}class JI extends mt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ha(this.value.arrayValue,t)}}class ZI extends mt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ha(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ha(this.value.arrayValue,t)}}class e1 extends mt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ef(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>Ha(this.value.arrayValue,i)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1{constructor(e,t=null,i=[],o=[],l=null,h=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=h,this.endAt=f,this.Te=null}}function Ug(r,e=null,t=[],i=[],o=null,l=null,h=null){return new t1(r,e,t,i,o,l,h)}function tf(r){const e=Re(r);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>Pd(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(l){return l.field.canonicalString()+l.dir})(i))).join(","),pc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>Io(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>Io(i))).join(",")),e.Te=t}return e.Te}function nf(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!GI(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!$_(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Fg(r.startAt,e.startAt)&&Fg(r.endAt,e.endAt)}function kd(r){return pe.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,t=null,i=[],o=[],l=null,h="F",f=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=h,this.startAt=f,this.endAt=g,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function n1(r,e,t,i,o,l,h,f){return new tl(r,e,t,i,o,l,h,f)}function G_(r){return new tl(r)}function zg(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function W_(r){return r.collectionGroup!==null}function Oa(r){const e=Re(r);if(e.Ie===null){e.Ie=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ie.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let f=new vt(kt.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((_=>{_.isInequality()&&(f=f.add(_.field))}))})),f})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ie.push(new Xu(l,i))})),t.has(kt.keyField().canonicalString())||e.Ie.push(new Xu(kt.keyField(),i))}return e.Ie}function Zn(r){const e=Re(r);return e.Ee||(e.Ee=r1(e,Oa(r))),e.Ee}function r1(r,e){if(r.limitType==="F")return Ug(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new Xu(o.field,l)}));const t=r.endAt?new Yu(r.endAt.position,r.endAt.inclusive):null,i=r.startAt?new Yu(r.startAt.position,r.startAt.inclusive):null;return Ug(r.path,r.collectionGroup,e,r.filters,r.limit,t,i)}}function Nd(r,e){const t=r.filters.concat([e]);return new tl(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function bd(r,e,t){return new tl(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function gc(r,e){return nf(Zn(r),Zn(e))&&r.limitType===e.limitType}function K_(r){return`${tf(Zn(r))}|lt:${r.limitType}`}function lo(r){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((o=>q_(o))).join(", ")}]`),pc(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((o=>Io(o))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((o=>Io(o))).join(",")),`Target(${i})`})(Zn(r))}; limitType=${r.limitType})`}function yc(r,e){return e.isFoundDocument()&&(function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):pe.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)})(r,e)&&(function(i,o){for(const l of Oa(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(r,e)&&(function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0})(r,e)&&(function(i,o){return!(i.startAt&&!(function(h,f,g){const _=jg(h,f,g);return h.inclusive?_<=0:_<0})(i.startAt,Oa(i),o)||i.endAt&&!(function(h,f,g){const _=jg(h,f,g);return h.inclusive?_>=0:_>0})(i.endAt,Oa(i),o))})(r,e)}function s1(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Q_(r){return(e,t)=>{let i=!1;for(const o of Oa(r)){const l=i1(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function i1(r,e,t){const i=r.field.isKeyField()?pe.comparator(e.key,t.key):(function(l,h,f){const g=h.data.field(l),_=f.data.field(l);return g!==null&&_!==null?To(g,_):we(42886)})(r.field,e,t);switch(r.dir){case"asc":return i;case"desc":return-1*i;default:return we(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){fi(this.inner,((t,i)=>{for(const[o,l]of i)e(o,l)}))}isEmpty(){return N_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o1=new rt(pe.comparator);function Pr(){return o1}const Y_=new rt(pe.comparator);function ka(...r){let e=Y_;for(const t of r)e=e.insert(t.key,t);return e}function X_(r){let e=Y_;return r.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function oi(){return Va()}function J_(){return Va()}function Va(){return new pi((r=>r.toString()),((r,e)=>r.isEqual(e)))}const a1=new rt(pe.comparator),l1=new vt(pe.comparator);function Oe(...r){let e=l1;for(const t of r)e=e.add(t);return e}const u1=new vt(De);function c1(){return u1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rf(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Wu(e)?"-0":e}}function Z_(r){return{integerValue:""+r}}function h1(r,e){return jI(e)?Z_(e):rf(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(){this._=void 0}}function d1(r,e,t){return r instanceof Ga?(function(o,l){const h={fields:{[O_]:{stringValue:D_},[M_]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&Zd(l)&&(l=mc(l)),l&&(h.fields[V_]=l),{mapValue:h}})(t,e):r instanceof Wa?tv(r,e):r instanceof Ka?nv(r,e):(function(o,l){const h=ev(o,l),f=Bg(h)+Bg(o.Ae);return Rd(h)&&Rd(o.Ae)?Z_(f):rf(o.serializer,f)})(r,e)}function f1(r,e,t){return r instanceof Wa?tv(r,e):r instanceof Ka?nv(r,e):t}function ev(r,e){return r instanceof Ju?(function(i){return Rd(i)||(function(l){return!!l&&"doubleValue"in l})(i)})(e)?e:{integerValue:0}:null}class Ga extends _c{}class Wa extends _c{constructor(e){super(),this.elements=e}}function tv(r,e){const t=rv(e);for(const i of r.elements)t.some((o=>or(o,i)))||t.push(i);return{arrayValue:{values:t}}}class Ka extends _c{constructor(e){super(),this.elements=e}}function nv(r,e){let t=rv(e);for(const i of r.elements)t=t.filter((o=>!or(o,i)));return{arrayValue:{values:t}}}class Ju extends _c{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Bg(r){return ct(r.integerValue||r.doubleValue)}function rv(r){return ef(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(e,t){this.field=e,this.transform=t}}function m1(r,e){return r.field.isEqual(e.field)&&(function(i,o){return i instanceof Wa&&o instanceof Wa||i instanceof Ka&&o instanceof Ka?Eo(i.elements,o.elements,or):i instanceof Ju&&o instanceof Ju?or(i.Ae,o.Ae):i instanceof Ga&&o instanceof Ga})(r.transform,e.transform)}class g1{constructor(e,t){this.version=e,this.transformResults=t}}class er{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new er}static exists(e){return new er(void 0,e)}static updateTime(e){return new er(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Lu(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class vc{}function sv(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new sf(r.key,er.none()):new nl(r.key,r.data,er.none());{const t=r.data,i=yn.empty();let o=new vt(kt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?i.delete(l):i.set(l,h),o=o.add(l)}return new mi(r.key,i,new Nn(o.toArray()),er.none())}}function y1(r,e,t){r instanceof nl?(function(o,l,h){const f=o.value.clone(),g=qg(o.fieldTransforms,l,h.transformResults);f.setAll(g),l.convertToFoundDocument(h.version,f).setHasCommittedMutations()})(r,e,t):r instanceof mi?(function(o,l,h){if(!Lu(o.precondition,l))return void l.convertToUnknownDocument(h.version);const f=qg(o.fieldTransforms,l,h.transformResults),g=l.data;g.setAll(iv(o)),g.setAll(f),l.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(r,e,t):(function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function Ma(r,e,t,i){return r instanceof nl?(function(l,h,f,g){if(!Lu(l.precondition,h))return f;const _=l.value.clone(),E=Hg(l.fieldTransforms,g,h);return _.setAll(E),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null})(r,e,t,i):r instanceof mi?(function(l,h,f,g){if(!Lu(l.precondition,h))return f;const _=Hg(l.fieldTransforms,g,h),E=h.data;return E.setAll(iv(l)),E.setAll(_),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((A=>A.field)))})(r,e,t,i):(function(l,h,f){return Lu(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):f})(r,e,t)}function _1(r,e){let t=null;for(const i of r.fieldTransforms){const o=e.data.field(i.field),l=ev(i.transform,o||null);l!=null&&(t===null&&(t=yn.empty()),t.set(i.field,l))}return t||null}function $g(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&Eo(i,o,((l,h)=>m1(l,h)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class nl extends vc{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class mi extends vc{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function iv(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=r.data.field(t);e.set(t,i)}})),e}function qg(r,e,t){const i=new Map;qe(r.length===t.length,32656,{Re:t.length,Ve:r.length});for(let o=0;o<t.length;o++){const l=r[o],h=l.transform,f=e.data.field(l.field);i.set(l.field,f1(h,f,t[o]))}return i}function Hg(r,e,t){const i=new Map;for(const o of r){const l=o.transform,h=t.data.field(o.field);i.set(o.field,d1(l,h,e))}return i}class sf extends vc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class v1 extends vc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&y1(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Ma(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Ma(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=J_();return this.mutations.forEach((o=>{const l=e.get(o.key),h=l.overlayedDocument;let f=this.applyToLocalView(h,l.mutatedFields);f=t.has(o.key)?null:f;const g=sv(h,f);g!==null&&i.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(Ce.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Oe())}isEqual(e){return this.batchId===e.batchId&&Eo(this.mutations,e.mutations,((t,i)=>$g(t,i)))&&Eo(this.baseMutations,e.baseMutations,((t,i)=>$g(t,i)))}}class of{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){qe(e.mutations.length===i.length,58842,{me:e.mutations.length,fe:i.length});let o=(function(){return a1})();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,i[h].version);return new of(e,t,i,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pt,Le;function I1(r){switch(r){case G.OK:return we(64938);case G.CANCELLED:case G.UNKNOWN:case G.DEADLINE_EXCEEDED:case G.RESOURCE_EXHAUSTED:case G.INTERNAL:case G.UNAVAILABLE:case G.UNAUTHENTICATED:return!1;case G.INVALID_ARGUMENT:case G.NOT_FOUND:case G.ALREADY_EXISTS:case G.PERMISSION_DENIED:case G.FAILED_PRECONDITION:case G.ABORTED:case G.OUT_OF_RANGE:case G.UNIMPLEMENTED:case G.DATA_LOSS:return!0;default:return we(15467,{code:r})}}function ov(r){if(r===void 0)return Rr("GRPC error has no .code"),G.UNKNOWN;switch(r){case pt.OK:return G.OK;case pt.CANCELLED:return G.CANCELLED;case pt.UNKNOWN:return G.UNKNOWN;case pt.DEADLINE_EXCEEDED:return G.DEADLINE_EXCEEDED;case pt.RESOURCE_EXHAUSTED:return G.RESOURCE_EXHAUSTED;case pt.INTERNAL:return G.INTERNAL;case pt.UNAVAILABLE:return G.UNAVAILABLE;case pt.UNAUTHENTICATED:return G.UNAUTHENTICATED;case pt.INVALID_ARGUMENT:return G.INVALID_ARGUMENT;case pt.NOT_FOUND:return G.NOT_FOUND;case pt.ALREADY_EXISTS:return G.ALREADY_EXISTS;case pt.PERMISSION_DENIED:return G.PERMISSION_DENIED;case pt.FAILED_PRECONDITION:return G.FAILED_PRECONDITION;case pt.ABORTED:return G.ABORTED;case pt.OUT_OF_RANGE:return G.OUT_OF_RANGE;case pt.UNIMPLEMENTED:return G.UNIMPLEMENTED;case pt.DATA_LOSS:return G.DATA_LOSS;default:return we(39323,{code:r})}}(Le=pt||(pt={}))[Le.OK=0]="OK",Le[Le.CANCELLED=1]="CANCELLED",Le[Le.UNKNOWN=2]="UNKNOWN",Le[Le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Le[Le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Le[Le.NOT_FOUND=5]="NOT_FOUND",Le[Le.ALREADY_EXISTS=6]="ALREADY_EXISTS",Le[Le.PERMISSION_DENIED=7]="PERMISSION_DENIED",Le[Le.UNAUTHENTICATED=16]="UNAUTHENTICATED",Le[Le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Le[Le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Le[Le.ABORTED=10]="ABORTED",Le[Le.OUT_OF_RANGE=11]="OUT_OF_RANGE",Le[Le.UNIMPLEMENTED=12]="UNIMPLEMENTED",Le[Le.INTERNAL=13]="INTERNAL",Le[Le.UNAVAILABLE=14]="UNAVAILABLE",Le[Le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S1(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x1=new vs([4294967295,4294967295],0);function Gg(r){const e=S1().encode(r),t=new w_;return t.update(e),new Uint8Array(t.digest())}function Wg(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new vs([t,i],0),new vs([o,l],0)]}class af{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Na(`Invalid padding: ${t}`);if(i<0)throw new Na(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Na(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Na(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=vs.fromNumber(this.ge)}ye(e,t,i){let o=e.add(t.multiply(vs.fromNumber(i)));return o.compare(x1)===1&&(o=new vs([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Gg(e),[i,o]=Wg(t);for(let l=0;l<this.hashCount;l++){const h=this.ye(i,o,l);if(!this.we(h))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new af(l,o,t);return i.forEach((f=>h.insert(f))),h}insert(e){if(this.ge===0)return;const t=Gg(e),[i,o]=Wg(t);for(let l=0;l<this.hashCount;l++){const h=this.ye(i,o,l);this.Se(h)}}Se(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Na extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,rl.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new wc(Ce.min(),o,new rt(De),Pr(),Oe())}}class rl{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new rl(i,t,Oe(),Oe(),Oe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e,t,i,o){this.be=e,this.removedTargetIds=t,this.key=i,this.De=o}}class av{constructor(e,t){this.targetId=e,this.Ce=t}}class lv{constructor(e,t,i=Nt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class Kg{constructor(){this.ve=0,this.Fe=Qg(),this.Me=Nt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Oe(),t=Oe(),i=Oe();return this.Fe.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:we(38017,{changeType:l})}})),new rl(this.Me,this.xe,e,t,i)}qe(){this.Oe=!1,this.Fe=Qg()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,qe(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class C1{constructor(e){this.Ge=e,this.ze=new Map,this.je=Pr(),this.Je=Pu(),this.He=Pu(),this.Ye=new rt(De)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const i=this.nt(t);switch(e.state){case 0:this.rt(t)&&i.Le(e.resumeToken);break;case 1:i.Ke(),i.Ne||i.qe(),i.Le(e.resumeToken);break;case 2:i.Ke(),i.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(i.We(),i.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),i.Le(e.resumeToken));break;default:we(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((i,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,i=e.Ce.count,o=this.ot(t);if(o){const l=o.target;if(kd(l))if(i===0){const h=new pe(l.path);this.et(t,h,Ft.newNoDocument(h,Ce.min()))}else qe(i===1,20013,{expectedCount:i});else{const h=this._t(t);if(h!==i){const f=this.ut(e),g=f?this.ct(f,e,h):1;if(g!==0){this.it(t);const _=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,_)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let h,f;try{h=Cs(i).toUint8Array()}catch(g){if(g instanceof b_)return wo("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{f=new af(h,o,l)}catch(g){return wo(g instanceof Na?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return f.ge===0?null:f}ct(e,t,i){return t.Ce.count===i-this.Pt(e,t.targetId)?0:2}Pt(e,t){const i=this.Ge.getRemoteKeysForTarget(t);let o=0;return i.forEach((l=>{const h=this.Ge.ht(),f=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.et(t,l,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((l,h)=>{const f=this.ot(h);if(f){if(l.current&&kd(f.target)){const g=new pe(f.target.path);this.It(g).has(h)||this.Et(h,g)||this.et(h,g,Ft.newNoDocument(g,e))}l.Be&&(t.set(h,l.ke()),l.qe())}}));let i=Oe();this.He.forEach(((l,h)=>{let f=!0;h.forEachWhile((g=>{const _=this.ot(g);return!_||_.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(i=i.add(l))})),this.je.forEach(((l,h)=>h.setReadTime(e)));const o=new wc(e,t,this.Ye,this.je,i);return this.je=Pr(),this.Je=Pu(),this.He=Pu(),this.Ye=new rt(De),o}Xe(e,t){if(!this.rt(e))return;const i=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,i),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,i){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.Qe(t,1):o.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),i&&(this.je=this.je.insert(t,i))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Kg,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new vt(De),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new vt(De),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||oe("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Kg),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Pu(){return new rt(pe.comparator)}function Qg(){return new rt(pe.comparator)}const A1={asc:"ASCENDING",desc:"DESCENDING"},R1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},P1={and:"AND",or:"OR"};class k1{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Dd(r,e){return r.useProto3Json||pc(e)?e:{value:e}}function Zu(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function uv(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function N1(r,e){return Zu(r,e.toTimestamp())}function tr(r){return qe(!!r,49232),Ce.fromTimestamp((function(t){const i=xs(t);return new Ze(i.seconds,i.nanos)})(r))}function lf(r,e){return Od(r,e).canonicalString()}function Od(r,e){const t=(function(o){return new Qe(["projects",o.projectId,"databases",o.database])})(r).child("documents");return e===void 0?t:t.child(e)}function cv(r){const e=Qe.fromString(r);return qe(mv(e),10190,{key:e.toString()}),e}function Vd(r,e){return lf(r.databaseId,e.path)}function cd(r,e){const t=cv(e);if(t.get(1)!==r.databaseId.projectId)throw new ae(G.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new ae(G.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new pe(dv(t))}function hv(r,e){return lf(r.databaseId,e)}function b1(r){const e=cv(r);return e.length===4?Qe.emptyPath():dv(e)}function Md(r){return new Qe(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function dv(r){return qe(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Yg(r,e,t){return{name:Vd(r,e),fields:t.value.mapValue.fields}}function D1(r,e){let t;if("targetChange"in e){e.targetChange;const i=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:we(39313,{state:_})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(_,E){return _.useProto3Json?(qe(E===void 0||typeof E=="string",58123),Nt.fromBase64String(E||"")):(qe(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),Nt.fromUint8Array(E||new Uint8Array))})(r,e.targetChange.resumeToken),h=e.targetChange.cause,f=h&&(function(_){const E=_.code===void 0?G.UNKNOWN:ov(_.code);return new ae(E,_.message||"")})(h);t=new lv(i,o,l,f||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=cd(r,i.document.name),l=tr(i.document.updateTime),h=i.document.createTime?tr(i.document.createTime):Ce.min(),f=new yn({mapValue:{fields:i.document.fields}}),g=Ft.newFoundDocument(o,l,h,f),_=i.targetIds||[],E=i.removedTargetIds||[];t=new ju(_,E,g.key,g)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=cd(r,i.document),l=i.readTime?tr(i.readTime):Ce.min(),h=Ft.newNoDocument(o,l),f=i.removedTargetIds||[];t=new ju([],f,h.key,h)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=cd(r,i.document),l=i.removedTargetIds||[];t=new ju([],l,o,null)}else{if(!("filter"in e))return we(11601,{Rt:e});{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,h=new T1(o,l),f=i.targetId;t=new av(f,h)}}return t}function O1(r,e){let t;if(e instanceof nl)t={update:Yg(r,e.key,e.value)};else if(e instanceof sf)t={delete:Vd(r,e.key)};else if(e instanceof mi)t={update:Yg(r,e.key,e.data),updateMask:$1(e.fieldMask)};else{if(!(e instanceof v1))return we(16599,{Vt:e.type});t={verify:Vd(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((i=>(function(l,h){const f=h.transform;if(f instanceof Ga)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof Wa)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof Ka)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof Ju)return{fieldPath:h.field.canonicalString(),increment:f.Ae};throw we(20930,{transform:h.transform})})(0,i)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:N1(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:we(27497)})(r,e.precondition)),t}function V1(r,e){return r&&r.length>0?(qe(e!==void 0,14353),r.map((t=>(function(o,l){let h=o.updateTime?tr(o.updateTime):tr(l);return h.isEqual(Ce.min())&&(h=tr(l)),new g1(h,o.transformResults||[])})(t,e)))):[]}function M1(r,e){return{documents:[hv(r,e.path)]}}function L1(r,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=hv(r,o);const l=(function(_){if(_.length!==0)return pv(Dn.create(_,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const h=(function(_){if(_.length!==0)return _.map((E=>(function(S){return{field:uo(S.field),direction:U1(S.dir)}})(E)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const f=Dd(r,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{ft:t,parent:o}}function j1(r){let e=b1(r.parent);const t=r.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){qe(i===1,65062);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let l=[];t.where&&(l=(function(A){const S=fv(A);return S instanceof Dn&&B_(S)?S.getFilters():[S]})(t.where));let h=[];t.orderBy&&(h=(function(A){return A.map((S=>(function(q){return new Xu(co(q.field),(function($){switch($){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(q.direction))})(S)))})(t.orderBy));let f=null;t.limit&&(f=(function(A){let S;return S=typeof A=="object"?A.value:A,pc(S)?null:S})(t.limit));let g=null;t.startAt&&(g=(function(A){const S=!!A.before,F=A.values||[];return new Yu(F,S)})(t.startAt));let _=null;return t.endAt&&(_=(function(A){const S=!A.before,F=A.values||[];return new Yu(F,S)})(t.endAt)),n1(e,o,h,l,f,"F",g,_)}function F1(r,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return we(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function fv(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=co(t.unaryFilter.field);return mt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=co(t.unaryFilter.field);return mt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=co(t.unaryFilter.field);return mt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=co(t.unaryFilter.field);return mt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return we(61313);default:return we(60726)}})(r):r.fieldFilter!==void 0?(function(t){return mt.create(co(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return we(58110);default:return we(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return Dn.create(t.compositeFilter.filters.map((i=>fv(i))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return we(1026)}})(t.compositeFilter.op))})(r):we(30097,{filter:r})}function U1(r){return A1[r]}function z1(r){return R1[r]}function B1(r){return P1[r]}function uo(r){return{fieldPath:r.canonicalString()}}function co(r){return kt.fromServerFormat(r.fieldPath)}function pv(r){return r instanceof mt?(function(t){if(t.op==="=="){if(Lg(t.value))return{unaryFilter:{field:uo(t.field),op:"IS_NAN"}};if(Mg(t.value))return{unaryFilter:{field:uo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Lg(t.value))return{unaryFilter:{field:uo(t.field),op:"IS_NOT_NAN"}};if(Mg(t.value))return{unaryFilter:{field:uo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:uo(t.field),op:z1(t.op),value:t.value}}})(r):r instanceof Dn?(function(t){const i=t.getFilters().map((o=>pv(o)));return i.length===1?i[0]:{compositeFilter:{op:B1(t.op),filters:i}}})(r):we(54877,{filter:r})}function $1(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function mv(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,t,i,o,l=Ce.min(),h=Ce.min(),f=Nt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=f,this.expectedCount=g}withSequenceNumber(e){return new ms(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ms(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ms(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ms(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1{constructor(e){this.yt=e}}function H1(r){const e=j1({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?bd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G1{constructor(){this.Cn=new W1}addToCollectionParentIndex(e,t){return this.Cn.add(t),W.resolve()}getCollectionParents(e,t){return W.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return W.resolve()}deleteFieldIndex(e,t){return W.resolve()}deleteAllFieldIndexes(e){return W.resolve()}createTargetIndexes(e,t){return W.resolve()}getDocumentsMatchingTarget(e,t){return W.resolve(null)}getIndexType(e,t){return W.resolve(0)}getFieldIndexes(e,t){return W.resolve([])}getNextCollectionGroupToUpdate(e){return W.resolve(null)}getMinOffset(e,t){return W.resolve(Ss.min())}getMinOffsetFromCollectionGroup(e,t){return W.resolve(Ss.min())}updateCollectionGroup(e,t,i){return W.resolve()}updateIndexEntries(e,t){return W.resolve()}}class W1{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new vt(Qe.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new vt(Qe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},gv=41943040;class Xt{static withCacheSize(e){return new Xt(e,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xt.DEFAULT_COLLECTION_PERCENTILE=10,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Xt.DEFAULT=new Xt(gv,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Xt.DISABLED=new Xt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new So(0)}static cr(){return new So(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg="LruGarbageCollector",K1=1048576;function Zg([r,e],[t,i]){const o=De(r,t);return o===0?De(e,i):o}class Q1{constructor(e){this.Ir=e,this.buffer=new vt(Zg),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();Zg(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Y1{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){oe(Jg,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ko(t)?oe(Jg,"Ignoring IndexedDB error during garbage collection: ",t):await Po(t)}await this.Vr(3e5)}))}}class X1{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return W.resolve(fc.ce);const i=new Q1(t);return this.mr.forEachTarget(e,(o=>i.Ar(o.sequenceNumber))).next((()=>this.mr.pr(e,(o=>i.Ar(o))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.mr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(oe("LruGarbageCollector","Garbage collection skipped; disabled"),W.resolve(Xg)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(oe("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Xg):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let i,o,l,h,f,g,_;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((A=>(A>this.params.maximumSequenceNumbersToCollect?(oe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),o=this.params.maximumSequenceNumbersToCollect):o=A,h=Date.now(),this.nthSequenceNumber(e,o)))).next((A=>(i=A,f=Date.now(),this.removeTargets(e,i,t)))).next((A=>(l=A,g=Date.now(),this.removeOrphanedDocuments(e,i)))).next((A=>(_=Date.now(),ao()<=be.DEBUG&&oe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(f-h)+`ms
	Removed ${l} targets in `+(g-f)+`ms
	Removed ${A} documents in `+(_-g)+`ms
Total Duration: ${_-E}ms`),W.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:A}))))}}function J1(r,e){return new X1(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z1{constructor(){this.changes=new pi((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ft.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?W.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(i=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(i!==null&&Ma(i.mutation,o,Nn.empty(),Ze.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,Oe()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=Oe()){const o=oi();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,i).next((l=>{let h=ka();return l.forEach(((f,g)=>{h=h.insert(f,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const i=oi();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,Oe())))}populateOverlays(e,t,i){const o=[];return i.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((h,f)=>{t.set(h,f)}))}))}computeViews(e,t,i,o){let l=Pr();const h=Va(),f=(function(){return Va()})();return t.forEach(((g,_)=>{const E=i.get(_.key);o.has(_.key)&&(E===void 0||E.mutation instanceof mi)?l=l.insert(_.key,_):E!==void 0?(h.set(_.key,E.mutation.getFieldMask()),Ma(E.mutation,_,E.mutation.getFieldMask(),Ze.now())):h.set(_.key,Nn.empty())})),this.recalculateAndSaveOverlays(e,l).next((g=>(g.forEach(((_,E)=>h.set(_,E))),t.forEach(((_,E)=>f.set(_,new eS(E,h.get(_)??null)))),f)))}recalculateAndSaveOverlays(e,t){const i=Va();let o=new rt(((h,f)=>h-f)),l=Oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const f of h)f.keys().forEach((g=>{const _=t.get(g);if(_===null)return;let E=i.get(g)||Nn.empty();E=f.applyToLocalView(_,E),i.set(g,E);const A=(o.get(f.batchId)||Oe()).add(g);o=o.insert(f.batchId,A)}))})).next((()=>{const h=[],f=o.getReverseIterator();for(;f.hasNext();){const g=f.getNext(),_=g.key,E=g.value,A=J_();E.forEach((S=>{if(!l.has(S)){const F=sv(t.get(S),i.get(S));F!==null&&A.set(S,F),l=l.add(S)}})),h.push(this.documentOverlayCache.saveOverlays(e,_,A))}return W.waitFor(h)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,o){return(function(h){return pe.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):W_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next((l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):W.resolve(oi());let f=Ba,g=l;return h.next((_=>W.forEach(_,((E,A)=>(f<A.largestBatchId&&(f=A.largestBatchId),l.get(E)?W.resolve():this.remoteDocumentCache.getEntry(e,E).next((S=>{g=g.insert(E,S)}))))).next((()=>this.populateOverlays(e,_,l))).next((()=>this.computeViews(e,g,_,Oe()))).next((E=>({batchId:f,changes:X_(E)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new pe(t)).next((i=>{let o=ka();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let h=ka();return this.indexManager.getCollectionParents(e,l).next((f=>W.forEach(f,(g=>{const _=(function(A,S){return new tl(S,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)})(t,g.child(l));return this.getDocumentsMatchingCollectionQuery(e,_,i,o).next((E=>{E.forEach(((A,S)=>{h=h.insert(A,S)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o)))).next((h=>{l.forEach(((g,_)=>{const E=_.getKey();h.get(E)===null&&(h=h.insert(E,Ft.newInvalidDocument(E)))}));let f=ka();return h.forEach(((g,_)=>{const E=l.get(g);E!==void 0&&Ma(E.mutation,_,Nn.empty(),Ze.now()),yc(t,_)&&(f=f.insert(g,_))})),f}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return W.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:tr(o.createTime)}})(t)),W.resolve()}getNamedQuery(e,t){return W.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(o){return{name:o.name,query:H1(o.bundledQuery),readTime:tr(o.readTime)}})(t)),W.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(){this.overlays=new rt(pe.comparator),this.qr=new Map}getOverlay(e,t){return W.resolve(this.overlays.get(t))}getOverlays(e,t){const i=oi();return W.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&i.set(o,l)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((o,l)=>{this.St(e,t,l)})),W.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.qr.get(i);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.qr.delete(i)),W.resolve()}getOverlaysForCollection(e,t,i){const o=oi(),l=t.length+1,h=new pe(t.child("")),f=this.overlays.getIteratorFrom(h);for(;f.hasNext();){const g=f.getNext().value,_=g.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===l&&g.largestBatchId>i&&o.set(g.getKey(),g)}return W.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new rt(((_,E)=>_-E));const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>i){let E=l.get(_.largestBatchId);E===null&&(E=oi(),l=l.insert(_.largestBatchId,E)),E.set(_.getKey(),_)}}const f=oi(),g=l.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((_,E)=>f.set(_,E))),!(f.size()>=o)););return W.resolve(f)}St(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const h=this.qr.get(o.largestBatchId).delete(i.key);this.qr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(i.key,new E1(t,i));let l=this.qr.get(t);l===void 0&&(l=Oe(),this.qr.set(t,l)),this.qr.set(t,l.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(){this.sessionToken=Nt.EMPTY_BYTE_STRING}getSessionToken(e){return W.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,W.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(){this.Qr=new vt(It.$r),this.Ur=new vt(It.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const i=new It(e,t);this.Qr=this.Qr.add(i),this.Ur=this.Ur.add(i)}Wr(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Gr(new It(e,t))}zr(e,t){e.forEach((i=>this.removeReference(i,t)))}jr(e){const t=new pe(new Qe([])),i=new It(t,e),o=new It(t,e+1),l=[];return this.Ur.forEachInRange([i,o],(h=>{this.Gr(h),l.push(h.key)})),l}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new pe(new Qe([])),i=new It(t,e),o=new It(t,e+1);let l=Oe();return this.Ur.forEachInRange([i,o],(h=>{l=l.add(h.key)})),l}containsKey(e){const t=new It(e,0),i=this.Qr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class It{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return pe.comparator(e.key,t.key)||De(e.Yr,t.Yr)}static Kr(e,t){return De(e.Yr,t.Yr)||pe.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new vt(It.$r)}checkEmpty(e){return W.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new w1(l,t,i,o);this.mutationQueue.push(h);for(const f of o)this.Zr=this.Zr.add(new It(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return W.resolve(h)}lookupMutationBatch(e,t){return W.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.ei(i),l=o<0?0:o;return W.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return W.resolve(this.mutationQueue.length===0?Jd:this.tr-1)}getAllMutationBatches(e){return W.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new It(t,0),o=new It(t,Number.POSITIVE_INFINITY),l=[];return this.Zr.forEachInRange([i,o],(h=>{const f=this.Xr(h.Yr);l.push(f)})),W.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new vt(De);return t.forEach((o=>{const l=new It(o,0),h=new It(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([l,h],(f=>{i=i.add(f.Yr)}))})),W.resolve(this.ti(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;pe.isDocumentKey(l)||(l=l.child(""));const h=new It(new pe(l),0);let f=new vt(De);return this.Zr.forEachWhile((g=>{const _=g.key.path;return!!i.isPrefixOf(_)&&(_.length===o&&(f=f.add(g.Yr)),!0)}),h),W.resolve(this.ti(f))}ti(e){const t=[];return e.forEach((i=>{const o=this.Xr(i);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){qe(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Zr;return W.forEach(t.mutations,(o=>{const l=new It(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Zr=i}))}ir(e){}containsKey(e,t){const i=new It(t,0),o=this.Zr.firstAfterOrEqual(i);return W.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,W.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(e){this.ri=e,this.docs=(function(){return new rt(pe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,h=this.ri(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return W.resolve(i?i.document.mutableCopy():Ft.newInvalidDocument(t))}getEntries(e,t){let i=Pr();return t.forEach((o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():Ft.newInvalidDocument(o))})),W.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=Pr();const h=t.path,f=new pe(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(f);for(;g.hasNext();){const{key:_,value:{document:E}}=g.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||OI(DI(E),i)<=0||(o.has(E.key)||yc(t,E))&&(l=l.insert(E.key,E.mutableCopy()))}return W.resolve(l)}getAllFromCollectionGroup(e,t,i,o){we(9500)}ii(e,t){return W.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new aS(this)}getSize(e){return W.resolve(this.size)}}class aS extends Z1{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((i,o)=>{o.isValidDocument()?t.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(i)})),W.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(e){this.persistence=e,this.si=new pi((t=>tf(t)),nf),this.lastRemoteSnapshotVersion=Ce.min(),this.highestTargetId=0,this.oi=0,this._i=new uf,this.targetCount=0,this.ai=So.ur()}forEachTarget(e,t){return this.si.forEach(((i,o)=>t(o))),W.resolve()}getLastRemoteSnapshotVersion(e){return W.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return W.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),W.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.oi&&(this.oi=t),W.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new So(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,W.resolve()}updateTargetData(e,t){return this.Pr(t),W.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,W.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.si.forEach(((h,f)=>{f.sequenceNumber<=t&&i.get(f.targetId)===null&&(this.si.delete(h),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)})),W.waitFor(l).next((()=>o))}getTargetCount(e){return W.resolve(this.targetCount)}getTargetData(e,t){const i=this.si.get(t)||null;return W.resolve(i)}addMatchingKeys(e,t,i){return this._i.Wr(t,i),W.resolve()}removeMatchingKeys(e,t,i){this._i.zr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((h=>{l.push(o.markPotentiallyOrphaned(e,h))})),W.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),W.resolve()}getMatchingKeysForTargetId(e,t){const i=this._i.Hr(t);return W.resolve(i)}containsKey(e,t){return W.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(e,t){this.ui={},this.overlays={},this.ci=new fc(0),this.li=!1,this.li=!0,this.hi=new sS,this.referenceDelegate=e(this),this.Pi=new lS(this),this.indexManager=new G1,this.remoteDocumentCache=(function(o){return new oS(o)})((i=>this.referenceDelegate.Ti(i))),this.serializer=new q1(t),this.Ii=new nS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new rS,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.ui[e.toKey()];return i||(i=new iS(t,this.referenceDelegate),this.ui[e.toKey()]=i),i}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,i){oe("MemoryPersistence","Starting transaction:",e);const o=new uS(this.ci.next());return this.referenceDelegate.Ei(),i(o).next((l=>this.referenceDelegate.di(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ai(e,t){return W.or(Object.values(this.ui).map((i=>()=>i.containsKey(e,t))))}}class uS extends MI{constructor(e){super(),this.currentSequenceNumber=e}}class cf{constructor(e){this.persistence=e,this.Ri=new uf,this.Vi=null}static mi(e){return new cf(e)}get fi(){if(this.Vi)return this.Vi;throw we(60996)}addReference(e,t,i){return this.Ri.addReference(i,t),this.fi.delete(i.toString()),W.resolve()}removeReference(e,t,i){return this.Ri.removeReference(i,t),this.fi.add(i.toString()),W.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),W.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((o=>this.fi.add(o.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.fi.add(l.toString())))})).next((()=>i.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.fi,(i=>{const o=pe.fromPath(i);return this.gi(e,o).next((l=>{l||t.removeEntry(o,Ce.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((i=>{i?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return W.or([()=>W.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class ec{constructor(e,t){this.persistence=e,this.pi=new pi((i=>FI(i.path)),((i,o)=>i.isEqual(o))),this.garbageCollector=J1(this,t)}static mi(e,t){return new ec(e,t)}Ei(){}di(e){return W.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((o=>i+o))))}wr(e){let t=0;return this.pr(e,(i=>{t++})).next((()=>t))}pr(e,t){return W.forEach(this.pi,((i,o)=>this.br(e,i,o).next((l=>l?W.resolve():t(o)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ii(e,(h=>this.br(e,h,t).next((f=>{f||(i++,l.removeEntry(h,Ce.min()))})))).next((()=>l.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),W.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.pi.set(i,e.currentSequenceNumber),W.resolve()}removeReference(e,t,i){return this.pi.set(i,e.currentSequenceNumber),W.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),W.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Vu(e.data.value)),t}br(e,t,i){return W.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.pi.get(t);return W.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Es=i,this.ds=o}static As(e,t){let i=Oe(),o=Oe();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new hf(e,t.fromCache,i,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return nT()?8:LI(zt())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.ys(e,t).next((h=>{l.result=h})).next((()=>{if(!l.result)return this.ws(e,t,o,i).next((h=>{l.result=h}))})).next((()=>{if(l.result)return;const h=new cS;return this.Ss(e,t,h).next((f=>{if(l.result=f,this.Vs)return this.bs(e,t,h,f.size)}))})).next((()=>l.result))}bs(e,t,i,o){return i.documentReadCount<this.fs?(ao()<=be.DEBUG&&oe("QueryEngine","SDK will not create cache indexes for query:",lo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),W.resolve()):(ao()<=be.DEBUG&&oe("QueryEngine","Query:",lo(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.gs*o?(ao()<=be.DEBUG&&oe("QueryEngine","The SDK decides to create cache indexes for query:",lo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Zn(t))):W.resolve())}ys(e,t){if(zg(t))return W.resolve(null);let i=Zn(t);return this.indexManager.getIndexType(e,i).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=bd(t,null,"F"),i=Zn(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((l=>{const h=Oe(...l);return this.ps.getDocuments(e,h).next((f=>this.indexManager.getMinOffset(e,i).next((g=>{const _=this.Ds(t,f);return this.Cs(t,_,h,g.readTime)?this.ys(e,bd(t,null,"F")):this.vs(e,_,t,g)}))))})))))}ws(e,t,i,o){return zg(t)||o.isEqual(Ce.min())?W.resolve(null):this.ps.getDocuments(e,i).next((l=>{const h=this.Ds(t,l);return this.Cs(t,h,i,o)?W.resolve(null):(ao()<=be.DEBUG&&oe("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),lo(t)),this.vs(e,h,t,bI(o,Ba)).next((f=>f)))}))}Ds(e,t){let i=new vt(Q_(e));return t.forEach(((o,l)=>{yc(e,l)&&(i=i.add(l))})),i}Cs(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}Ss(e,t,i){return ao()<=be.DEBUG&&oe("QueryEngine","Using full collection scan to execute query:",lo(t)),this.ps.getDocumentsMatchingQuery(e,t,Ss.min(),i)}vs(e,t,i,o){return this.ps.getDocumentsMatchingQuery(e,i,o).next((l=>(t.forEach((h=>{l=l.insert(h.key,h)})),l)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const df="LocalStore",dS=3e8;class fS{constructor(e,t,i,o){this.persistence=e,this.Fs=t,this.serializer=o,this.Ms=new rt(De),this.xs=new pi((l=>tf(l)),nf),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(i)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new tS(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function pS(r,e,t,i){return new fS(r,e,t,i)}async function _v(r,e){const t=Re(r);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next((l=>(o=l,t.Bs(e),t.mutationQueue.getAllMutationBatches(i)))).next((l=>{const h=[],f=[];let g=Oe();for(const _ of o){h.push(_.batchId);for(const E of _.mutations)g=g.add(E.key)}for(const _ of l){f.push(_.batchId);for(const E of _.mutations)g=g.add(E.key)}return t.localDocuments.getDocuments(i,g).next((_=>({Ls:_,removedBatchIds:h,addedBatchIds:f})))}))}))}function mS(r,e){const t=Re(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const o=e.batch.keys(),l=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(f,g,_,E){const A=_.batch,S=A.keys();let F=W.resolve();return S.forEach((q=>{F=F.next((()=>E.getEntry(g,q))).next((H=>{const $=_.docVersions.get(q);qe($!==null,48541),H.version.compareTo($)<0&&(A.applyToRemoteDocument(H,_),H.isValidDocument()&&(H.setReadTime(_.commitVersion),E.addEntry(H)))}))})),F.next((()=>f.mutationQueue.removeMutationBatch(g,A)))})(t,i,e,l).next((()=>l.apply(i))).next((()=>t.mutationQueue.performConsistencyCheck(i))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(f){let g=Oe();for(let _=0;_<f.mutationResults.length;++_)f.mutationResults[_].transformResults.length>0&&(g=g.add(f.batch.mutations[_].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(i,o)))}))}function vv(r){const e=Re(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function gS(r,e){const t=Re(r),i=e.snapshotVersion;let o=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const h=t.Ns.newChangeBuffer({trackRemovals:!0});o=t.Ms;const f=[];e.targetChanges.forEach(((E,A)=>{const S=o.get(A);if(!S)return;f.push(t.Pi.removeMatchingKeys(l,E.removedDocuments,A).next((()=>t.Pi.addMatchingKeys(l,E.addedDocuments,A))));let F=S.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(A)!==null?F=F.withResumeToken(Nt.EMPTY_BYTE_STRING,Ce.min()).withLastLimboFreeSnapshotVersion(Ce.min()):E.resumeToken.approximateByteSize()>0&&(F=F.withResumeToken(E.resumeToken,i)),o=o.insert(A,F),(function(H,$,se){return H.resumeToken.approximateByteSize()===0||$.snapshotVersion.toMicroseconds()-H.snapshotVersion.toMicroseconds()>=dS?!0:se.addedDocuments.size+se.modifiedDocuments.size+se.removedDocuments.size>0})(S,F,E)&&f.push(t.Pi.updateTargetData(l,F))}));let g=Pr(),_=Oe();if(e.documentUpdates.forEach((E=>{e.resolvedLimboDocuments.has(E)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,E))})),f.push(yS(l,h,e.documentUpdates).next((E=>{g=E.ks,_=E.qs}))),!i.isEqual(Ce.min())){const E=t.Pi.getLastRemoteSnapshotVersion(l).next((A=>t.Pi.setTargetsMetadata(l,l.currentSequenceNumber,i)));f.push(E)}return W.waitFor(f).next((()=>h.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,g,_))).next((()=>g))})).then((l=>(t.Ms=o,l)))}function yS(r,e,t){let i=Oe(),o=Oe();return t.forEach((l=>i=i.add(l))),e.getEntries(r,i).next((l=>{let h=Pr();return t.forEach(((f,g)=>{const _=l.get(f);g.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(f)),g.isNoDocument()&&g.version.isEqual(Ce.min())?(e.removeEntry(f,g.readTime),h=h.insert(f,g)):!_.isValidDocument()||g.version.compareTo(_.version)>0||g.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(g),h=h.insert(f,g)):oe(df,"Ignoring outdated watch update for ",f,". Current version:",_.version," Watch version:",g.version)})),{ks:h,qs:o}}))}function _S(r,e){const t=Re(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(i=>(e===void 0&&(e=Jd),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e))))}function vS(r,e){const t=Re(r);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let o;return t.Pi.getTargetData(i,e).next((l=>l?(o=l,W.resolve(o)):t.Pi.allocateTargetId(i).next((h=>(o=new ms(e,h,"TargetPurposeListen",i.currentSequenceNumber),t.Pi.addTargetData(i,o).next((()=>o)))))))})).then((i=>{const o=t.Ms.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(i.targetId,i),t.xs.set(e,i.targetId)),i}))}async function Ld(r,e,t){const i=Re(r),o=i.Ms.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,(h=>i.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!ko(h))throw h;oe(df,`Failed to update sequence numbers for target ${e}: ${h}`)}i.Ms=i.Ms.remove(e),i.xs.delete(o.target)}function ey(r,e,t){const i=Re(r);let o=Ce.min(),l=Oe();return i.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,_,E){const A=Re(g),S=A.xs.get(E);return S!==void 0?W.resolve(A.Ms.get(S)):A.Pi.getTargetData(_,E)})(i,h,Zn(e)).next((f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,i.Pi.getMatchingKeysForTargetId(h,f.targetId).next((g=>{l=g}))})).next((()=>i.Fs.getDocumentsMatchingQuery(h,e,t?o:Ce.min(),t?l:Oe()))).next((f=>(wS(i,s1(e),f),{documents:f,Qs:l})))))}function wS(r,e,t){let i=r.Os.get(e)||Ce.min();t.forEach(((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)})),r.Os.set(e,i)}class ty{constructor(){this.activeTargetIds=c1()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ES{constructor(){this.Mo=new ty,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,i){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new ty,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ny="ConnectivityMonitor";class ry{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){oe(ny,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){oe(ny,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ku=null;function jd(){return ku===null?ku=(function(){return 268435456+Math.round(2147483648*Math.random())})():ku++,"0x"+ku.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd="RestConnection",IS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class SS{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${i}/databases/${o}`,this.Wo=this.databaseId.database===Ku?`project_id=${i}`:`project_id=${i}&database_id=${o}`}Go(e,t,i,o,l){const h=jd(),f=this.zo(e,t.toUriEncodedString());oe(hd,`Sending RPC '${e}' ${h}:`,f,i);const g={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(g,o,l);const{host:_}=new URL(f),E=Co(_);return this.Jo(e,f,g,i,E).then((A=>(oe(hd,`Received RPC '${e}' ${h}: `,A),A)),(A=>{throw wo(hd,`RPC '${e}' ${h} failed with error: `,A,"url: ",f,"request:",i),A}))}Ho(e,t,i,o,l,h){return this.Go(e,t,i,o,l)}jo(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ro})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),i&&i.headers.forEach(((o,l)=>e[l]=o))}zo(e,t){const i=IS[e];return`${this.Uo}/v1/${t}:${i}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt="WebChannelConnection";class CS extends SS{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,i,o,l){const h=jd();return new Promise(((f,g)=>{const _=new E_;_.setWithCredentials(!0),_.listenOnce(T_.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case Ou.NO_ERROR:const A=_.getResponseJson();oe(Lt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(A)),f(A);break;case Ou.TIMEOUT:oe(Lt,`RPC '${e}' ${h} timed out`),g(new ae(G.DEADLINE_EXCEEDED,"Request time out"));break;case Ou.HTTP_ERROR:const S=_.getStatus();if(oe(Lt,`RPC '${e}' ${h} failed with status:`,S,"response text:",_.getResponseText()),S>0){let F=_.getResponseJson();Array.isArray(F)&&(F=F[0]);const q=F?.error;if(q&&q.status&&q.message){const H=(function(se){const ue=se.toLowerCase().replace(/_/g,"-");return Object.values(G).indexOf(ue)>=0?ue:G.UNKNOWN})(q.status);g(new ae(H,q.message))}else g(new ae(G.UNKNOWN,"Server responded with status "+_.getStatus()))}else g(new ae(G.UNAVAILABLE,"Connection failed."));break;default:we(9055,{l_:e,streamId:h,h_:_.getLastErrorCode(),P_:_.getLastError()})}}finally{oe(Lt,`RPC '${e}' ${h} completed.`)}}));const E=JSON.stringify(o);oe(Lt,`RPC '${e}' ${h} sending request:`,o),_.send(t,"POST",E,i,15)}))}T_(e,t,i){const o=jd(),l=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=x_(),f=S_(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(g.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(g.useFetchStreams=!0),this.jo(g.initMessageHeaders,t,i),g.encodeInitMessageHeaders=!0;const E=l.join("");oe(Lt,`Creating RPC '${e}' stream ${o}: ${E}`,g);const A=h.createWebChannel(E,g);this.I_(A);let S=!1,F=!1;const q=new xS({Yo:$=>{F?oe(Lt,`Not sending because RPC '${e}' stream ${o} is closed:`,$):(S||(oe(Lt,`Opening RPC '${e}' stream ${o} transport.`),A.open(),S=!0),oe(Lt,`RPC '${e}' stream ${o} sending:`,$),A.send($))},Zo:()=>A.close()}),H=($,se,ue)=>{$.listen(se,(fe=>{try{ue(fe)}catch(ve){setTimeout((()=>{throw ve}),0)}}))};return H(A,Pa.EventType.OPEN,(()=>{F||(oe(Lt,`RPC '${e}' stream ${o} transport opened.`),q.o_())})),H(A,Pa.EventType.CLOSE,(()=>{F||(F=!0,oe(Lt,`RPC '${e}' stream ${o} transport closed`),q.a_(),this.E_(A))})),H(A,Pa.EventType.ERROR,($=>{F||(F=!0,wo(Lt,`RPC '${e}' stream ${o} transport errored. Name:`,$.name,"Message:",$.message),q.a_(new ae(G.UNAVAILABLE,"The operation could not be completed")))})),H(A,Pa.EventType.MESSAGE,($=>{if(!F){const se=$.data[0];qe(!!se,16349);const ue=se,fe=ue?.error||ue[0]?.error;if(fe){oe(Lt,`RPC '${e}' stream ${o} received error:`,fe);const ve=fe.status;let xe=(function(C){const R=pt[C];if(R!==void 0)return ov(R)})(ve),me=fe.message;xe===void 0&&(xe=G.INTERNAL,me="Unknown error status: "+ve+" with message "+fe.message),F=!0,q.a_(new ae(xe,me)),A.close()}else oe(Lt,`RPC '${e}' stream ${o} received:`,se),q.u_(se)}})),H(f,I_.STAT_EVENT,($=>{$.stat===xd.PROXY?oe(Lt,`RPC '${e}' stream ${o} detected buffering proxy`):$.stat===xd.NOPROXY&&oe(Lt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{q.__()}),0),q}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function dd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ec(r){return new k1(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(e,t,i=1e3,o=1.5,l=6e4){this.Mi=e,this.timerId=t,this.d_=i,this.A_=o,this.R_=l,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),i=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-i);o>0&&oe("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy="PersistentStream";class Ev{constructor(e,t,i,o,l,h,f,g){this.Mi=e,this.S_=i,this.b_=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=f,this.listener=g,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new wv(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===G.RESOURCE_EXHAUSTED?(Rr(t.toString()),Rr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===G.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,o])=>{this.D_===t&&this.G_(i,o)}),(i=>{e((()=>{const o=new ae(G.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(o)}))}))}G_(e,t){const i=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{i((()=>this.listener.Xo()))})),this.stream.t_((()=>{i((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((o=>{i((()=>this.z_(o)))})),this.stream.onMessage((o=>{i((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return oe(sy,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(oe(sy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class AS extends Ev{constructor(e,t,i,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=D1(this.serializer,e),i=(function(l){if(!("targetChange"in l))return Ce.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?Ce.min():h.readTime?tr(h.readTime):Ce.min()})(e);return this.listener.H_(t,i)}Y_(e){const t={};t.database=Md(this.serializer),t.addTarget=(function(l,h){let f;const g=h.target;if(f=kd(g)?{documents:M1(l,g)}:{query:L1(l,g).ft},f.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){f.resumeToken=uv(l,h.resumeToken);const _=Dd(l,h.expectedCount);_!==null&&(f.expectedCount=_)}else if(h.snapshotVersion.compareTo(Ce.min())>0){f.readTime=Zu(l,h.snapshotVersion.toTimestamp());const _=Dd(l,h.expectedCount);_!==null&&(f.expectedCount=_)}return f})(this.serializer,e);const i=F1(this.serializer,e);i&&(t.labels=i),this.q_(t)}Z_(e){const t={};t.database=Md(this.serializer),t.removeTarget=e,this.q_(t)}}class RS extends Ev{constructor(e,t,i,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return qe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,qe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){qe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=V1(e.writeResults,e.commitTime),i=tr(e.commitTime);return this.listener.na(i,t)}ra(){const e={};e.database=Md(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((i=>O1(this.serializer,i)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{}class kS extends PS{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new ae(G.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,h])=>this.connection.Go(e,Od(t,i),o,l,h))).catch((l=>{throw l.name==="FirebaseError"?(l.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ae(G.UNKNOWN,l.toString())}))}Ho(e,t,i,o,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,f])=>this.connection.Ho(e,Od(t,i),o,h,f,l))).catch((h=>{throw h.name==="FirebaseError"?(h.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ae(G.UNKNOWN,h.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class NS{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Rr(t),this.aa=!1):oe("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci="RemoteStore";class bS{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=l,this.Aa.Oo((h=>{i.enqueueAndForget((async()=>{gi(this)&&(oe(ci,"Restarting streams for network reachability change."),await(async function(g){const _=Re(g);_.Ea.add(4),await sl(_),_.Ra.set("Unknown"),_.Ea.delete(4),await Tc(_)})(this))}))})),this.Ra=new NS(i,o)}}async function Tc(r){if(gi(r))for(const e of r.da)await e(!0)}async function sl(r){for(const e of r.da)await e(!1)}function Tv(r,e){const t=Re(r);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),gf(t)?mf(t):No(t).O_()&&pf(t,e))}function ff(r,e){const t=Re(r),i=No(t);t.Ia.delete(e),i.O_()&&Iv(t,e),t.Ia.size===0&&(i.O_()?i.L_():gi(t)&&t.Ra.set("Unknown"))}function pf(r,e){if(r.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ce.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}No(r).Y_(e)}function Iv(r,e){r.Va.Ue(e),No(r).Z_(e)}function mf(r){r.Va=new C1({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ia.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),No(r).start(),r.Ra.ua()}function gf(r){return gi(r)&&!No(r).x_()&&r.Ia.size>0}function gi(r){return Re(r).Ea.size===0}function Sv(r){r.Va=void 0}async function DS(r){r.Ra.set("Online")}async function OS(r){r.Ia.forEach(((e,t)=>{pf(r,e)}))}async function VS(r,e){Sv(r),gf(r)?(r.Ra.ha(e),mf(r)):r.Ra.set("Unknown")}async function MS(r,e,t){if(r.Ra.set("Online"),e instanceof lv&&e.state===2&&e.cause)try{await(async function(o,l){const h=l.cause;for(const f of l.targetIds)o.Ia.has(f)&&(await o.remoteSyncer.rejectListen(f,h),o.Ia.delete(f),o.Va.removeTarget(f))})(r,e)}catch(i){oe(ci,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await tc(r,i)}else if(e instanceof ju?r.Va.Ze(e):e instanceof av?r.Va.st(e):r.Va.tt(e),!t.isEqual(Ce.min()))try{const i=await vv(r.localStore);t.compareTo(i)>=0&&await(function(l,h){const f=l.Va.Tt(h);return f.targetChanges.forEach(((g,_)=>{if(g.resumeToken.approximateByteSize()>0){const E=l.Ia.get(_);E&&l.Ia.set(_,E.withResumeToken(g.resumeToken,h))}})),f.targetMismatches.forEach(((g,_)=>{const E=l.Ia.get(g);if(!E)return;l.Ia.set(g,E.withResumeToken(Nt.EMPTY_BYTE_STRING,E.snapshotVersion)),Iv(l,g);const A=new ms(E.target,g,_,E.sequenceNumber);pf(l,A)})),l.remoteSyncer.applyRemoteEvent(f)})(r,t)}catch(i){oe(ci,"Failed to raise snapshot:",i),await tc(r,i)}}async function tc(r,e,t){if(!ko(e))throw e;r.Ea.add(1),await sl(r),r.Ra.set("Offline"),t||(t=()=>vv(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{oe(ci,"Retrying IndexedDB access"),await t(),r.Ea.delete(1),await Tc(r)}))}function xv(r,e){return e().catch((t=>tc(r,t,e)))}async function Ic(r){const e=Re(r),t=Rs(e);let i=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Jd;for(;LS(e);)try{const o=await _S(e.localStore,i);if(o===null){e.Ta.length===0&&t.L_();break}i=o.batchId,jS(e,o)}catch(o){await tc(e,o)}Cv(e)&&Av(e)}function LS(r){return gi(r)&&r.Ta.length<10}function jS(r,e){r.Ta.push(e);const t=Rs(r);t.O_()&&t.X_&&t.ea(e.mutations)}function Cv(r){return gi(r)&&!Rs(r).x_()&&r.Ta.length>0}function Av(r){Rs(r).start()}async function FS(r){Rs(r).ra()}async function US(r){const e=Rs(r);for(const t of r.Ta)e.ea(t.mutations)}async function zS(r,e,t){const i=r.Ta.shift(),o=of.from(i,e,t);await xv(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await Ic(r)}async function BS(r,e){e&&Rs(r).X_&&await(async function(i,o){if((function(h){return I1(h)&&h!==G.ABORTED})(o.code)){const l=i.Ta.shift();Rs(i).B_(),await xv(i,(()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o))),await Ic(i)}})(r,e),Cv(r)&&Av(r)}async function iy(r,e){const t=Re(r);t.asyncQueue.verifyOperationInProgress(),oe(ci,"RemoteStore received new credentials");const i=gi(t);t.Ea.add(3),await sl(t),i&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Tc(t)}async function $S(r,e){const t=Re(r);e?(t.Ea.delete(2),await Tc(t)):e||(t.Ea.add(2),await sl(t),t.Ra.set("Unknown"))}function No(r){return r.ma||(r.ma=(function(t,i,o){const l=Re(t);return l.sa(),new AS(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Xo:DS.bind(null,r),t_:OS.bind(null,r),r_:VS.bind(null,r),H_:MS.bind(null,r)}),r.da.push((async e=>{e?(r.ma.B_(),gf(r)?mf(r):r.Ra.set("Unknown")):(await r.ma.stop(),Sv(r))}))),r.ma}function Rs(r){return r.fa||(r.fa=(function(t,i,o){const l=Re(t);return l.sa(),new RS(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:FS.bind(null,r),r_:BS.bind(null,r),ta:US.bind(null,r),na:zS.bind(null,r)}),r.da.push((async e=>{e?(r.fa.B_(),await Ic(r)):(await r.fa.stop(),r.Ta.length>0&&(oe(ci,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new ws,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const h=Date.now()+i,f=new yf(e,t,h,o,l);return f.start(i),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ae(G.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _f(r,e){if(Rr("AsyncQueue",`${e}: ${r}`),ko(r))return new ae(G.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{static emptySet(e){return new fo(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||pe.comparator(t.key,i.key):(t,i)=>pe.comparator(t.key,i.key),this.keyedMap=ka(),this.sortedSet=new rt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof fo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new fo;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(){this.ga=new rt(pe.comparator)}track(e){const t=e.doc.key,i=this.ga.get(t);i?e.type!==0&&i.type===3?this.ga=this.ga.insert(t,e):e.type===3&&i.type!==1?this.ga=this.ga.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.ga=this.ga.remove(t):e.type===1&&i.type===2?this.ga=this.ga.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):we(63341,{Rt:e,pa:i}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,i)=>{e.push(i)})),e}}class xo{constructor(e,t,i,o,l,h,f,g,_){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=f,this.excludesMetadataChanges=g,this.hasCachedResults=_}static fromInitialDocuments(e,t,i,o,l){const h=[];return t.forEach((f=>{h.push({type:0,doc:f})})),new xo(e,t,fo.emptySet(t),h,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&gc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class HS{constructor(){this.queries=ay(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,i){const o=Re(t),l=o.queries;o.queries=ay(),l.forEach(((h,f)=>{for(const g of f.Sa)g.onError(i)}))})(this,new ae(G.ABORTED,"Firestore shutting down"))}}function ay(){return new pi((r=>K_(r)),gc)}async function GS(r,e){const t=Re(r);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.ba()&&e.Da()&&(i=2):(l=new qS,i=e.Da()?0:1);try{switch(i){case 0:l.wa=await t.onListen(o,!0);break;case 1:l.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const f=_f(h,`Initialization of query '${lo(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.Sa.push(e),e.va(t.onlineState),l.wa&&e.Fa(l.wa)&&vf(t)}async function WS(r,e){const t=Re(r),i=e.query;let o=3;const l=t.queries.get(i);if(l){const h=l.Sa.indexOf(e);h>=0&&(l.Sa.splice(h,1),l.Sa.length===0?o=e.Da()?0:1:!l.ba()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function KS(r,e){const t=Re(r);let i=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const f of h.Sa)f.Fa(o)&&(i=!0);h.wa=o}}i&&vf(t)}function QS(r,e,t){const i=Re(r),o=i.queries.get(e);if(o)for(const l of o.Sa)l.onError(t);i.queries.delete(e)}function vf(r){r.Ca.forEach((e=>{e.next()}))}var Fd,ly;(ly=Fd||(Fd={})).Ma="default",ly.Cache="cache";class YS{constructor(e,t,i){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=i||{}}Fa(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new xo(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const i=t!=="Offline";return(!this.options.qa||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=xo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Fd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{constructor(e){this.key=e}}class Pv{constructor(e){this.key=e}}class XS{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Oe(),this.mutatedKeys=Oe(),this.eu=Q_(e),this.tu=new fo(this.eu)}get nu(){return this.Ya}ru(e,t){const i=t?t.iu:new oy,o=t?t.tu:this.tu;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,f=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((E,A)=>{const S=o.get(E),F=yc(this.query,A)?A:null,q=!!S&&this.mutatedKeys.has(S.key),H=!!F&&(F.hasLocalMutations||this.mutatedKeys.has(F.key)&&F.hasCommittedMutations);let $=!1;S&&F?S.data.isEqual(F.data)?q!==H&&(i.track({type:3,doc:F}),$=!0):this.su(S,F)||(i.track({type:2,doc:F}),$=!0,(g&&this.eu(F,g)>0||_&&this.eu(F,_)<0)&&(f=!0)):!S&&F?(i.track({type:0,doc:F}),$=!0):S&&!F&&(i.track({type:1,doc:S}),$=!0,(g||_)&&(f=!0)),$&&(F?(h=h.add(F),l=H?l.add(E):l.delete(E)):(h=h.delete(E),l=l.delete(E)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),l=l.delete(E.key),i.track({type:1,doc:E})}return{tu:h,iu:i,Cs:f,mutatedKeys:l}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort(((E,A)=>(function(F,q){const H=$=>{switch($){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return we(20277,{Rt:$})}};return H(F)-H(q)})(E.type,A.type)||this.eu(E.doc,A.doc))),this.ou(i),o=o??!1;const f=t&&!o?this._u():[],g=this.Xa.size===0&&this.current&&!o?1:0,_=g!==this.Za;return this.Za=g,h.length!==0||_?{snapshot:new xo(this.query,e.tu,l,h,e.mutatedKeys,g===0,_,!1,!!i&&i.resumeToken.approximateByteSize()>0),au:f}:{au:f}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new oy,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Oe(),this.tu.forEach((i=>{this.uu(i.key)&&(this.Xa=this.Xa.add(i.key))}));const t=[];return e.forEach((i=>{this.Xa.has(i)||t.push(new Pv(i))})),this.Xa.forEach((i=>{e.has(i)||t.push(new Rv(i))})),t}cu(e){this.Ya=e.Qs,this.Xa=Oe();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return xo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const wf="SyncEngine";class JS{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class ZS{constructor(e){this.key=e,this.hu=!1}}class ex{constructor(e,t,i,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new pi((f=>K_(f)),gc),this.Iu=new Map,this.Eu=new Set,this.du=new rt(pe.comparator),this.Au=new Map,this.Ru=new uf,this.Vu={},this.mu=new Map,this.fu=So.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function tx(r,e,t=!0){const i=Vv(r);let o;const l=i.Tu.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.lu()):o=await kv(i,e,t,!0),o}async function nx(r,e){const t=Vv(r);await kv(t,e,!0,!1)}async function kv(r,e,t,i){const o=await vS(r.localStore,Zn(e)),l=o.targetId,h=r.sharedClientState.addLocalQueryTarget(l,t);let f;return i&&(f=await rx(r,e,l,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&Tv(r.remoteStore,o),f}async function rx(r,e,t,i,o){r.pu=(A,S,F)=>(async function(H,$,se,ue){let fe=$.view.ru(se);fe.Cs&&(fe=await ey(H.localStore,$.query,!1).then((({documents:N})=>$.view.ru(N,fe))));const ve=ue&&ue.targetChanges.get($.targetId),xe=ue&&ue.targetMismatches.get($.targetId)!=null,me=$.view.applyChanges(fe,H.isPrimaryClient,ve,xe);return cy(H,$.targetId,me.au),me.snapshot})(r,A,S,F);const l=await ey(r.localStore,e,!0),h=new XS(e,l.Qs),f=h.ru(l.documents),g=rl.createSynthesizedTargetChangeForCurrentChange(t,i&&r.onlineState!=="Offline",o),_=h.applyChanges(f,r.isPrimaryClient,g);cy(r,t,_.au);const E=new JS(e,t,h);return r.Tu.set(e,E),r.Iu.has(t)?r.Iu.get(t).push(e):r.Iu.set(t,[e]),_.snapshot}async function sx(r,e,t){const i=Re(r),o=i.Tu.get(e),l=i.Iu.get(o.targetId);if(l.length>1)return i.Iu.set(o.targetId,l.filter((h=>!gc(h,e)))),void i.Tu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await Ld(i.localStore,o.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(o.targetId),t&&ff(i.remoteStore,o.targetId),Ud(i,o.targetId)})).catch(Po)):(Ud(i,o.targetId),await Ld(i.localStore,o.targetId,!0))}async function ix(r,e){const t=Re(r),i=t.Tu.get(e),o=t.Iu.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),ff(t.remoteStore,i.targetId))}async function ox(r,e,t){const i=fx(r);try{const o=await(function(h,f){const g=Re(h),_=Ze.now(),E=f.reduce(((F,q)=>F.add(q.key)),Oe());let A,S;return g.persistence.runTransaction("Locally write mutations","readwrite",(F=>{let q=Pr(),H=Oe();return g.Ns.getEntries(F,E).next(($=>{q=$,q.forEach(((se,ue)=>{ue.isValidDocument()||(H=H.add(se))}))})).next((()=>g.localDocuments.getOverlayedDocuments(F,q))).next(($=>{A=$;const se=[];for(const ue of f){const fe=_1(ue,A.get(ue.key).overlayedDocument);fe!=null&&se.push(new mi(ue.key,fe,F_(fe.value.mapValue),er.exists(!0)))}return g.mutationQueue.addMutationBatch(F,_,se,f)})).next(($=>{S=$;const se=$.applyToLocalDocumentSet(A,H);return g.documentOverlayCache.saveOverlays(F,$.batchId,se)}))})).then((()=>({batchId:S.batchId,changes:X_(A)})))})(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),(function(h,f,g){let _=h.Vu[h.currentUser.toKey()];_||(_=new rt(De)),_=_.insert(f,g),h.Vu[h.currentUser.toKey()]=_})(i,o.batchId,t),await il(i,o.changes),await Ic(i.remoteStore)}catch(o){const l=_f(o,"Failed to persist write");t.reject(l)}}async function Nv(r,e){const t=Re(r);try{const i=await gS(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const h=t.Au.get(l);h&&(qe(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.hu=!0:o.modifiedDocuments.size>0?qe(h.hu,14607):o.removedDocuments.size>0&&(qe(h.hu,42227),h.hu=!1))})),await il(t,i,e)}catch(i){await Po(i)}}function uy(r,e,t){const i=Re(r);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.Tu.forEach(((l,h)=>{const f=h.view.va(e);f.snapshot&&o.push(f.snapshot)})),(function(h,f){const g=Re(h);g.onlineState=f;let _=!1;g.queries.forEach(((E,A)=>{for(const S of A.Sa)S.va(f)&&(_=!0)})),_&&vf(g)})(i.eventManager,e),o.length&&i.Pu.H_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function ax(r,e,t){const i=Re(r);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Au.get(e),l=o&&o.key;if(l){let h=new rt(pe.comparator);h=h.insert(l,Ft.newNoDocument(l,Ce.min()));const f=Oe().add(l),g=new wc(Ce.min(),new Map,new rt(De),h,f);await Nv(i,g),i.du=i.du.remove(l),i.Au.delete(e),Ef(i)}else await Ld(i.localStore,e,!1).then((()=>Ud(i,e,t))).catch(Po)}async function lx(r,e){const t=Re(r),i=e.batch.batchId;try{const o=await mS(t.localStore,e);Dv(t,i,null),bv(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await il(t,o)}catch(o){await Po(o)}}async function ux(r,e,t){const i=Re(r);try{const o=await(function(h,f){const g=Re(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let E;return g.mutationQueue.lookupMutationBatch(_,f).next((A=>(qe(A!==null,37113),E=A.keys(),g.mutationQueue.removeMutationBatch(_,A)))).next((()=>g.mutationQueue.performConsistencyCheck(_))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(_,E,f))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,E))).next((()=>g.localDocuments.getDocuments(_,E)))}))})(i.localStore,e);Dv(i,e,t),bv(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await il(i,o)}catch(o){await Po(o)}}function bv(r,e){(r.mu.get(e)||[]).forEach((t=>{t.resolve()})),r.mu.delete(e)}function Dv(r,e,t){const i=Re(r);let o=i.Vu[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.Vu[i.currentUser.toKey()]=o}}function Ud(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const i of r.Iu.get(e))r.Tu.delete(i),t&&r.Pu.yu(i,t);r.Iu.delete(e),r.isPrimaryClient&&r.Ru.jr(e).forEach((i=>{r.Ru.containsKey(i)||Ov(r,i)}))}function Ov(r,e){r.Eu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(ff(r.remoteStore,t),r.du=r.du.remove(e),r.Au.delete(t),Ef(r))}function cy(r,e,t){for(const i of t)i instanceof Rv?(r.Ru.addReference(i.key,e),cx(r,i)):i instanceof Pv?(oe(wf,"Document no longer in limbo: "+i.key),r.Ru.removeReference(i.key,e),r.Ru.containsKey(i.key)||Ov(r,i.key)):we(19791,{wu:i})}function cx(r,e){const t=e.key,i=t.path.canonicalString();r.du.get(t)||r.Eu.has(i)||(oe(wf,"New document in limbo: "+t),r.Eu.add(i),Ef(r))}function Ef(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Eu.values().next().value;r.Eu.delete(e);const t=new pe(Qe.fromString(e)),i=r.fu.next();r.Au.set(i,new ZS(t)),r.du=r.du.insert(t,i),Tv(r.remoteStore,new ms(Zn(G_(t.path)),i,"TargetPurposeLimboResolution",fc.ce))}}async function il(r,e,t){const i=Re(r),o=[],l=[],h=[];i.Tu.isEmpty()||(i.Tu.forEach(((f,g)=>{h.push(i.pu(g,e,t).then((_=>{if((_||t)&&i.isPrimaryClient){const E=_?!_.fromCache:t?.targetChanges.get(g.targetId)?.current;i.sharedClientState.updateQueryState(g.targetId,E?"current":"not-current")}if(_){o.push(_);const E=hf.As(g.targetId,_);l.push(E)}})))})),await Promise.all(h),i.Pu.H_(o),await(async function(g,_){const E=Re(g);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",(A=>W.forEach(_,(S=>W.forEach(S.Es,(F=>E.persistence.referenceDelegate.addReference(A,S.targetId,F))).next((()=>W.forEach(S.ds,(F=>E.persistence.referenceDelegate.removeReference(A,S.targetId,F)))))))))}catch(A){if(!ko(A))throw A;oe(df,"Failed to update sequence numbers: "+A)}for(const A of _){const S=A.targetId;if(!A.fromCache){const F=E.Ms.get(S),q=F.snapshotVersion,H=F.withLastLimboFreeSnapshotVersion(q);E.Ms=E.Ms.insert(S,H)}}})(i.localStore,l))}async function hx(r,e){const t=Re(r);if(!t.currentUser.isEqual(e)){oe(wf,"User change. New user:",e.toKey());const i=await _v(t.localStore,e);t.currentUser=e,(function(l,h){l.mu.forEach((f=>{f.forEach((g=>{g.reject(new ae(G.CANCELLED,h))}))})),l.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await il(t,i.Ls)}}function dx(r,e){const t=Re(r),i=t.Au.get(e);if(i&&i.hu)return Oe().add(i.key);{let o=Oe();const l=t.Iu.get(e);if(!l)return o;for(const h of l){const f=t.Tu.get(h);o=o.unionWith(f.view.nu)}return o}}function Vv(r){const e=Re(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Nv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=dx.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ax.bind(null,e),e.Pu.H_=KS.bind(null,e.eventManager),e.Pu.yu=QS.bind(null,e.eventManager),e}function fx(r){const e=Re(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=lx.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ux.bind(null,e),e}class nc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ec(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return pS(this.persistence,new hS,e.initialUser,this.serializer)}Cu(e){return new yv(cf.mi,this.serializer)}Du(e){return new ES}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}nc.provider={build:()=>new nc};class px extends nc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){qe(this.persistence.referenceDelegate instanceof ec,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new Y1(i,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Xt.withCacheSize(this.cacheSizeBytes):Xt.DEFAULT;return new yv((i=>ec.mi(i,t)),this.serializer)}}class zd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>uy(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=hx.bind(null,this.syncEngine),await $S(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new HS})()}createDatastore(e){const t=Ec(e.databaseInfo.databaseId),i=(function(l){return new CS(l)})(e.databaseInfo);return(function(l,h,f,g){return new kS(l,h,f,g)})(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,o,l,h,f){return new bS(i,o,l,h,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>uy(this.syncEngine,t,0)),(function(){return ry.v()?new ry:new TS})())}createSyncEngine(e,t){return(function(o,l,h,f,g,_,E){const A=new ex(o,l,h,f,g,_);return E&&(A.gu=!0),A})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const i=Re(t);oe(ci,"RemoteStore shutting down."),i.Ea.add(5),await sl(i),i.Aa.shutdown(),i.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}zd.provider={build:()=>new zd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mx{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Rr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps="FirestoreClient";class gx{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=jt.UNAUTHENTICATED,this.clientId=Xd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,(async h=>{oe(Ps,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(i,(h=>(oe(Ps,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ws;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=_f(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function fd(r,e){r.asyncQueue.verifyOperationInProgress(),oe(Ps,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let i=t.initialUser;r.setCredentialChangeListener((async o=>{i.isEqual(o)||(await _v(e.localStore,o),i=o)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function hy(r,e){r.asyncQueue.verifyOperationInProgress();const t=await yx(r);oe(Ps,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((i=>iy(e.remoteStore,i))),r.setAppCheckTokenChangeListener(((i,o)=>iy(e.remoteStore,o))),r._onlineComponents=e}async function yx(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){oe(Ps,"Using user provided OfflineComponentProvider");try{await fd(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===G.FAILED_PRECONDITION||o.code===G.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;wo("Error using user provided cache. Falling back to memory cache: "+t),await fd(r,new nc)}}else oe(Ps,"Using default OfflineComponentProvider"),await fd(r,new px(void 0));return r._offlineComponents}async function Mv(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(oe(Ps,"Using user provided OnlineComponentProvider"),await hy(r,r._uninitializedComponentsProvider._online)):(oe(Ps,"Using default OnlineComponentProvider"),await hy(r,new zd))),r._onlineComponents}function _x(r){return Mv(r).then((e=>e.syncEngine))}async function vx(r){const e=await Mv(r),t=e.eventManager;return t.onListen=tx.bind(null,e.syncEngine),t.onUnlisten=sx.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=nx.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=ix.bind(null,e.syncEngine),t}function wx(r,e,t={}){const i=new ws;return r.asyncQueue.enqueueAndForget((async()=>(function(l,h,f,g,_){const E=new mx({next:S=>{E.Nu(),h.enqueueAndForget((()=>WS(l,A))),S.fromCache&&g.source==="server"?_.reject(new ae(G.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):_.resolve(S)},error:S=>_.reject(S)}),A=new YS(f,E,{includeMetadataChanges:!0,qa:!0});return GS(l,A)})(await vx(r),r.asyncQueue,e,t,i))),i.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lv(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv="firestore.googleapis.com",fy=!0;class py{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ae(G.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=jv,this.ssl=fy}else this.host=e.host,this.ssl=e.ssl??fy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=gv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<K1)throw new ae(G.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}NI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Lv(e.experimentalLongPollingOptions??{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ae(G.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ae(G.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ae(G.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,o){return i.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Sc{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new py({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ae(G.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ae(G.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new py(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new EI;switch(i.type){case"firstParty":return new xI(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ae(G.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=dy.get(t);i&&(oe("ComponentProvider","Removing Datastore"),dy.delete(t),i.terminate())})(this),Promise.resolve()}}function Ex(r,e,t,i={}){r=za(r,Sc);const o=Co(e),l=r._getSettings(),h={...l,emulatorOptions:r._getEmulatorOptions()},f=`${e}:${t}`;o&&(f_(`https://${f}`),p_("Firestore",!0)),l.host!==jv&&l.host!==f&&wo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g={...l,host:f,ssl:o,emulatorOptions:i};if(!ai(g,h)&&(r._setSettings(g),i.mockUserToken)){let _,E;if(typeof i.mockUserToken=="string")_=i.mockUserToken,E=jt.MOCK_USER;else{_=WE(i.mockUserToken,r._app?.options.projectId);const A=i.mockUserToken.sub||i.mockUserToken.user_id;if(!A)throw new ae(G.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new jt(A)}r._authCredentials=new TI(new A_(_,E))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new bo(this.firestore,e,this._query)}}class St{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Es(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new St(this.firestore,e,this._key)}toJSON(){return{type:St._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(el(t,St._jsonSchema))return new St(e,i||null,new pe(Qe.fromString(t.referencePath)))}}St._jsonSchemaVersion="firestore/documentReference/1.0",St._jsonSchema={type:gt("string",St._jsonSchemaVersion),referencePath:gt("string")};class Es extends bo{constructor(e,t,i){super(e,t,G_(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new St(this.firestore,null,new pe(e))}withConverter(e){return new Es(this.firestore,e,this._path)}}function my(r,e,...t){if(r=vn(r),R_("collection","path",e),r instanceof Sc){const i=Qe.fromString(e,...t);return Ag(i),new Es(r,null,i)}{if(!(r instanceof St||r instanceof Es))throw new ae(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=r._path.child(Qe.fromString(e,...t));return Ag(i),new Es(r.firestore,null,i)}}function Tx(r,e,...t){if(r=vn(r),arguments.length===1&&(e=Xd.newId()),R_("doc","path",e),r instanceof Sc){const i=Qe.fromString(e,...t);return Cg(i),new St(r,null,new pe(i))}{if(!(r instanceof St||r instanceof Es))throw new ae(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=r._path.child(Qe.fromString(e,...t));return Cg(i),new St(r.firestore,r instanceof Es?r.converter:null,new pe(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy="AsyncQueue";class yy{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new wv(this,"async_queue_retry"),this._c=()=>{const i=dd();i&&oe(gy,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const t=dd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=dd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new ws;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!ko(e))throw e;oe(gy,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((i=>{throw this.nc=i,this.rc=!1,Rr("INTERNAL UNHANDLED ERROR: ",_y(i)),i})).then((i=>(this.rc=!1,i))))));return this.ac=t,t}enqueueAfterDelay(e,t,i){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=yf.createAndSchedule(this,e,t,i,(l=>this.hc(l)));return this.tc.push(o),o}uc(){this.nc&&we(47125,{Pc:_y(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function _y(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class xc extends Sc{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new yy,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new yy(e),this._firestoreClient=void 0,await e}}}function Ix(r,e){const t=typeof r=="object"?r:Qd(),i=typeof r=="string"?r:Ku,o=Kd(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=HE("firestore");l&&Ex(o,...l)}return o}function Fv(r){if(r._terminated)throw new ae(G.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Sx(r),r._firestoreClient}function Sx(r){const e=r._freezeSettings(),t=(function(o,l,h,f){return new BI(o,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Lv(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)})(r._databaseId,r._app?.options.appId||"",r._persistenceKey,e);r._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new gx(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&(function(o){const l=o?._online.build();return{_offline:o?._offline.build(l),_online:l}})(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e){this._byteString=e}static fromBase64String(e){try{return new _n(Nt.fromBase64String(e))}catch(t){throw new ae(G.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new _n(Nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:_n._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(el(e,_n._jsonSchema))return _n.fromBase64String(e.bytes)}}_n._jsonSchemaVersion="firestore/bytes/1.0",_n._jsonSchema={type:gt("string",_n._jsonSchemaVersion),bytes:gt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ae(G.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new kt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ae(G.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ae(G.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return De(this._lat,e._lat)||De(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:nr._jsonSchemaVersion}}static fromJSON(e){if(el(e,nr._jsonSchema))return new nr(e.latitude,e.longitude)}}nr._jsonSchemaVersion="firestore/geoPoint/1.0",nr._jsonSchema={type:gt("string",nr._jsonSchemaVersion),latitude:gt("number"),longitude:gt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:rr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(el(e,rr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new rr(e.vectorValues);throw new ae(G.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}rr._jsonSchemaVersion="firestore/vectorValue/1.0",rr._jsonSchema={type:gt("string",rr._jsonSchemaVersion),vectorValues:gt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xx=/^__.*__$/;class Cx{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new mi(e,this.data,this.fieldMask,t,this.fieldTransforms):new nl(e,this.data,t,this.fieldTransforms)}}function Uv(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw we(40011,{Ac:r})}}class Sf{constructor(e,t,i,o,l,h){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.Rc(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Sf({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),i=this.Vc({path:t,fc:!1});return i.gc(e),i}yc(e){const t=this.path?.child(e),i=this.Vc({path:t,fc:!1});return i.Rc(),i}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return rc(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Uv(this.Ac)&&xx.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class Ax{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Ec(e)}Cc(e,t,i,o=!1){return new Sf({Ac:e,methodName:t,Dc:i,path:kt.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function zv(r){const e=r._freezeSettings(),t=Ec(r._databaseId);return new Ax(r._databaseId,!!e.ignoreUndefinedProperties,t)}function Rx(r,e,t,i,o,l={}){const h=r.Cc(l.merge||l.mergeFields?2:0,e,t,o);qv("Data must be an object, but it was:",h,i);const f=Bv(i,h);let g,_;if(l.merge)g=new Nn(h.fieldMask),_=h.fieldTransforms;else if(l.mergeFields){const E=[];for(const A of l.mergeFields){const S=kx(e,A,t);if(!h.contains(S))throw new ae(G.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);bx(E,S)||E.push(S)}g=new Nn(E),_=h.fieldTransforms.filter((A=>g.covers(A.field)))}else g=null,_=h.fieldTransforms;return new Cx(new yn(f),g,_)}class xf extends If{_toFieldTransform(e){return new p1(e.path,new Ga)}isEqual(e){return e instanceof xf}}function Px(r,e,t,i=!1){return Cf(t,r.Cc(i?4:3,e))}function Cf(r,e){if($v(r=vn(r)))return qv("Unsupported field value:",e,r),Bv(r,e);if(r instanceof If)return(function(i,o){if(!Uv(o.Ac))throw o.Sc(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(i,o){const l=[];let h=0;for(const f of i){let g=Cf(f,o.wc(h));g==null&&(g={nullValue:"NULL_VALUE"}),l.push(g),h++}return{arrayValue:{values:l}}})(r,e)}return(function(i,o){if((i=vn(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return h1(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=Ze.fromDate(i);return{timestampValue:Zu(o.serializer,l)}}if(i instanceof Ze){const l=new Ze(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Zu(o.serializer,l)}}if(i instanceof nr)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof _n)return{bytesValue:uv(o.serializer,i._byteString)};if(i instanceof St){const l=o.databaseId,h=i.firestore._databaseId;if(!h.isEqual(l))throw o.Sc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:lf(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof rr)return(function(h,f){return{mapValue:{fields:{[L_]:{stringValue:j_},[Qu]:{arrayValue:{values:h.toArray().map((_=>{if(typeof _!="number")throw f.Sc("VectorValues must only contain numeric values.");return rf(f.serializer,_)}))}}}}}})(i,o);throw o.Sc(`Unsupported field value: ${dc(i)}`)})(r,e)}function Bv(r,e){const t={};return N_(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):fi(r,((i,o)=>{const l=Cf(o,e.mc(i));l!=null&&(t[i]=l)})),{mapValue:{fields:t}}}function $v(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Ze||r instanceof nr||r instanceof _n||r instanceof St||r instanceof If||r instanceof rr)}function qv(r,e,t){if(!$v(t)||!P_(t)){const i=dc(t);throw i==="an object"?e.Sc(r+" a custom object"):e.Sc(r+" "+i)}}function kx(r,e,t){if((e=vn(e))instanceof Tf)return e._internalPath;if(typeof e=="string")return Hv(r,e);throw rc("Field path arguments must be of type string or ",r,!1,void 0,t)}const Nx=new RegExp("[~\\*/\\[\\]]");function Hv(r,e,t){if(e.search(Nx)>=0)throw rc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Tf(...e.split("."))._internalPath}catch{throw rc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function rc(r,e,t,i,o){const l=i&&!i.isEmpty(),h=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let g="";return(l||h)&&(g+=" (found",l&&(g+=` in field ${i}`),h&&(g+=` in document ${o}`),g+=")"),new ae(G.INVALID_ARGUMENT,f+r+g)}function bx(r,e){return r.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new St(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Dx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Wv("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Dx extends Gv{data(){return super.data()}}function Wv(r,e){return typeof e=="string"?Hv(r,e):e instanceof Tf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ox(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new ae(G.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Af{}class Vx extends Af{}function Mx(r,e,...t){let i=[];e instanceof Af&&i.push(e),i=i.concat(t),(function(l){const h=l.filter((g=>g instanceof Pf)).length,f=l.filter((g=>g instanceof Rf)).length;if(h>1||h>0&&f>0)throw new ae(G.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(i);for(const o of i)r=o._apply(r);return r}class Rf extends Vx{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new Rf(e,t,i)}_apply(e){const t=this._parse(e);return Kv(e._query,t),new bo(e.firestore,e.converter,Nd(e._query,t))}_parse(e){const t=zv(e.firestore);return(function(l,h,f,g,_,E,A){let S;if(_.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new ae(G.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){wy(A,E);const q=[];for(const H of A)q.push(vy(g,l,H));S={arrayValue:{values:q}}}else S=vy(g,l,A)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||wy(A,E),S=Px(f,h,A,E==="in"||E==="not-in");return mt.create(_,E,S)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Pf extends Af{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Pf(e,t)}_parse(e){const t=this._queryConstraints.map((i=>i._parse(e))).filter((i=>i.getFilters().length>0));return t.length===1?t[0]:Dn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,l){let h=o;const f=l.getFlattenedFilters();for(const g of f)Kv(h,g),h=Nd(h,g)})(e._query,t),new bo(e.firestore,e.converter,Nd(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function vy(r,e,t){if(typeof(t=vn(t))=="string"){if(t==="")throw new ae(G.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!W_(e)&&t.indexOf("/")!==-1)throw new ae(G.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(Qe.fromString(t));if(!pe.isDocumentKey(i))throw new ae(G.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Vg(r,new pe(i))}if(t instanceof St)return Vg(r,t._key);throw new ae(G.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${dc(t)}.`)}function wy(r,e){if(!Array.isArray(r)||r.length===0)throw new ae(G.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Kv(r,e){const t=(function(o,l){for(const h of o)for(const f of h.getFlattenedFilters())if(l.indexOf(f.op)>=0)return f.op;return null})(r.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ae(G.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ae(G.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Lx{convertValue(e,t="none"){switch(As(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ct(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Cs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw we(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return fi(e,((o,l)=>{i[o]=this.convertValue(l,t)})),i}convertVectorValue(e){const t=e.fields?.[Qu].arrayValue?.values?.map((i=>ct(i.doubleValue)));return new rr(t)}convertGeoPoint(e){return new nr(ct(e.latitude),ct(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=mc(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp($a(e));default:return null}}convertTimestamp(e){const t=xs(e);return new Ze(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Qe.fromString(e);qe(mv(i),9688,{name:e});const o=new qa(i.get(1),i.get(3)),l=new pe(i.popFirst(5));return o.isEqual(t)||Rr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jx(r,e,t){let i;return i=r?r.toFirestore(e):e,i}class Nu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class po extends Gv{constructor(e,t,i,o,l,h){super(e,t,i,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Fu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(Wv("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ae(G.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=po._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}po._jsonSchemaVersion="firestore/documentSnapshot/1.0",po._jsonSchema={type:gt("string",po._jsonSchemaVersion),bundleSource:gt("string","DocumentSnapshot"),bundleName:gt("string"),bundle:gt("string")};class Fu extends po{data(e={}){return super.data(e)}}class mo{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Nu(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new Fu(this._firestore,this._userDataWriter,i.key,i,new Nu(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ae(G.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((f=>{const g=new Fu(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Nu(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((f=>l||f.type!==3)).map((f=>{const g=new Fu(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Nu(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,E=-1;return f.type!==0&&(_=h.indexOf(f.doc.key),h=h.delete(f.doc.key)),f.type!==1&&(h=h.add(f.doc),E=h.indexOf(f.doc.key)),{type:Fx(f.type),doc:g,oldIndex:_,newIndex:E}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ae(G.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=mo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Xd.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),i.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Fx(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return we(61501,{type:r})}}mo._jsonSchemaVersion="firestore/querySnapshot/1.0",mo._jsonSchema={type:gt("string",mo._jsonSchemaVersion),bundleSource:gt("string","QuerySnapshot"),bundleName:gt("string"),bundle:gt("string")};class Ux extends Lx{constructor(e){super(),this.firestore=e}convertBytes(e){return new _n(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new St(this.firestore,null,t)}}function zx(r){r=za(r,bo);const e=za(r.firestore,xc),t=Fv(e),i=new Ux(e);return Ox(r._query),wx(t,r._query).then((o=>new mo(e,i,r,o)))}function Bx(r){return Qv(za(r.firestore,xc),[new sf(r._key,er.none())])}function $x(r,e){const t=za(r.firestore,xc),i=Tx(r),o=jx(r.converter,e);return Qv(t,[Rx(zv(r.firestore),"addDoc",i._key,o,r.converter!==null,{}).toMutation(i._key,er.exists(!1))]).then((()=>i))}function Qv(r,e){return(function(i,o){const l=new ws;return i.asyncQueue.enqueueAndForget((async()=>ox(await _x(i),o,l))),l.promise})(Fv(r),e)}function qx(){return new xf("serverTimestamp")}(function(e,t=!0){(function(o){Ro=o})(Ao),vo(new li("firestore",((i,{instanceIdentifier:o,options:l})=>{const h=i.getProvider("app").getImmediate(),f=new xc(new II(i.getProvider("auth-internal")),new CI(h,i.getProvider("app-check-internal")),(function(_,E){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new ae(G.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qa(_.options.projectId,E)})(h,o),h);return l={useFetchStreams:t,...l},f._setSettings(l),f}),"PUBLIC").setMultipleInstances(!0)),_s(Tg,Ig,e),_s(Tg,Ig,"esm2020")})();var Hx="firebase",Gx="12.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_s(Hx,Gx,"app");function Yv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Wx=Yv,Xv=new Ja("auth","Firebase",Yv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc=new Gd("@firebase/auth");function Kx(r,...e){sc.logLevel<=be.WARN&&sc.warn(`Auth (${Ao}): ${r}`,...e)}function Uu(r,...e){sc.logLevel<=be.ERROR&&sc.error(`Auth (${Ao}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(r,...e){throw kf(r,...e)}function sr(r,...e){return kf(r,...e)}function Jv(r,e,t){const i={...Wx(),[e]:t};return new Ja("auth","Firebase",i).create(e,{appName:r.name})}function Ts(r){return Jv(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function kf(r,...e){if(typeof r!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=r.name),r._errorFactory.create(t,...i)}return Xv.create(r,...e)}function Ie(r,e,...t){if(!r)throw kf(e,...t)}function xr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Uu(e),new Error(e)}function Nr(r,e){r||xr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bd(){return typeof self<"u"&&self.location?.href||""}function Qx(){return Ey()==="http:"||Ey()==="https:"}function Ey(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Qx()||ZE()||"connection"in navigator)?navigator.onLine:!0}function Xx(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e,t){this.shortDelay=e,this.longDelay=t,Nr(t>e,"Short delay should be less than long delay!"),this.isMobile=YE()||eT()}get(){return Yx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(r,e){Nr(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;xr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;xr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;xr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zx=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],eC=new ol(3e4,6e4);function Cc(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function Do(r,e,t,i,o={}){return e0(r,o,async()=>{let l={},h={};i&&(e==="GET"?h=i:l={body:JSON.stringify(i)});const f=Za({key:r.config.apiKey,...h}).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const _={method:e,headers:g,...l};return JE()||(_.referrerPolicy="no-referrer"),r.emulatorConfig&&Co(r.emulatorConfig.host)&&(_.credentials="include"),Zv.fetch()(await n0(r,r.config.apiHost,t,f),_)})}async function e0(r,e,t){r._canInitEmulator=!1;const i={...Jx,...e};try{const o=new tC(r),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw bu(r,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const f=l.ok?h.errorMessage:h.error.message,[g,_]=f.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw bu(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw bu(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw bu(r,"user-disabled",h);const E=i[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw Jv(r,E,_);kr(r,E)}}catch(o){if(o instanceof br)throw o;kr(r,"network-request-failed",{message:String(o)})}}async function t0(r,e,t,i,o={}){const l=await Do(r,e,t,i,o);return"mfaPendingCredential"in l&&kr(r,"multi-factor-auth-required",{_serverResponse:l}),l}async function n0(r,e,t,i){const o=`${e}${t}?${i}`,l=r,h=l.config.emulator?Nf(r.config,o):`${r.config.apiScheme}://${o}`;return Zx.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(h).toString():h}class tC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(sr(this.auth,"network-request-failed")),eC.get())})}}function bu(r,e,t){const i={appName:r.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=sr(r,e,i);return o.customData._tokenResponse=t,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nC(r,e){return Do(r,"POST","/v1/accounts:delete",e)}async function ic(r,e){return Do(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function La(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function rC(r,e=!1){const t=vn(r),i=await t.getIdToken(e),o=bf(i);Ie(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l?.sign_in_provider;return{claims:o,token:i,authTime:La(pd(o.auth_time)),issuedAtTime:La(pd(o.iat)),expirationTime:La(pd(o.exp)),signInProvider:h||null,signInSecondFactor:l?.sign_in_second_factor||null}}function pd(r){return Number(r)*1e3}function bf(r){const[e,t,i]=r.split(".");if(e===void 0||t===void 0||i===void 0)return Uu("JWT malformed, contained fewer than 3 sections"),null;try{const o=u_(t);return o?JSON.parse(o):(Uu("Failed to decode base64 JWT payload"),null)}catch(o){return Uu("Caught error parsing JWT payload as JSON",o?.toString()),null}}function Ty(r){const e=bf(r);return Ie(e,"internal-error"),Ie(typeof e.exp<"u","internal-error"),Ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qa(r,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof br&&sC(i)&&r.auth.currentUser===r&&await r.auth.signOut(),i}}function sC({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=La(this.lastLoginAt),this.creationTime=La(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oc(r){const e=r.auth,t=await r.getIdToken(),i=await Qa(r,ic(e,{idToken:t}));Ie(i?.users.length,e,"internal-error");const o=i.users[0];r._notifyReloadListener(o);const l=o.providerUserInfo?.length?r0(o.providerUserInfo):[],h=aC(r.providerData,l),f=r.isAnonymous,g=!(r.email&&o.passwordHash)&&!h?.length,_=f?g:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new $d(o.createdAt,o.lastLoginAt),isAnonymous:_};Object.assign(r,E)}async function oC(r){const e=vn(r);await oc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function aC(r,e){return[...r.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function r0(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lC(r,e){const t=await e0(r,{},async()=>{const i=Za({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=r.config,h=await n0(r,o,"/v1/token",`key=${l}`),f=await r._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:f,body:i};return r.emulatorConfig&&Co(r.emulatorConfig.host)&&(g.credentials="include"),Zv.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function uC(r,e){return Do(r,"POST","/v2/accounts:revokeToken",Cc(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ie(e.idToken,"internal-error"),Ie(typeof e.idToken<"u","internal-error"),Ie(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ty(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ie(e.length!==0,"internal-error");const t=Ty(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await lC(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,h=new go;return i&&(Ie(typeof i=="string","internal-error",{appName:e}),h.refreshToken=i),o&&(Ie(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(Ie(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new go,this.toJSON())}_performRefresh(){return xr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function us(r,e){Ie(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class bn{constructor({uid:e,auth:t,stsTokenManager:i,...o}){this.providerId="firebase",this.proactiveRefresh=new iC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new $d(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Qa(this,this.stsTokenManager.getToken(this.auth,e));return Ie(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return rC(this,e)}reload(){return oC(this)}_assign(e){this!==e&&(Ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new bn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){Ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await oc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(kn(this.auth.app))return Promise.reject(Ts(this.auth));const e=await this.getIdToken();return await Qa(this,nC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const i=t.displayName??void 0,o=t.email??void 0,l=t.phoneNumber??void 0,h=t.photoURL??void 0,f=t.tenantId??void 0,g=t._redirectEventId??void 0,_=t.createdAt??void 0,E=t.lastLoginAt??void 0,{uid:A,emailVerified:S,isAnonymous:F,providerData:q,stsTokenManager:H}=t;Ie(A&&H,e,"internal-error");const $=go.fromJSON(this.name,H);Ie(typeof A=="string",e,"internal-error"),us(i,e.name),us(o,e.name),Ie(typeof S=="boolean",e,"internal-error"),Ie(typeof F=="boolean",e,"internal-error"),us(l,e.name),us(h,e.name),us(f,e.name),us(g,e.name),us(_,e.name),us(E,e.name);const se=new bn({uid:A,auth:e,email:o,emailVerified:S,displayName:i,isAnonymous:F,photoURL:h,phoneNumber:l,tenantId:f,stsTokenManager:$,createdAt:_,lastLoginAt:E});return q&&Array.isArray(q)&&(se.providerData=q.map(ue=>({...ue}))),g&&(se._redirectEventId=g),se}static async _fromIdTokenResponse(e,t,i=!1){const o=new go;o.updateFromServerResponse(t);const l=new bn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await oc(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];Ie(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?r0(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!l?.length,f=new go;f.updateFromIdToken(i);const g=new bn({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new $d(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!l?.length};return Object.assign(g,_),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy=new Map;function Cr(r){Nr(r instanceof Function,"Expected a class definition");let e=Iy.get(r);return e?(Nr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Iy.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}s0.type="NONE";const Sy=s0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zu(r,e,t){return`firebase:${r}:${e}:${t}`}class yo{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=zu(this.userKey,o.apiKey,l),this.fullPersistenceKey=zu("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ic(this.auth,{idToken:e}).catch(()=>{});return t?bn._fromGetAccountInfoResponse(this.auth,t,e):null}return bn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new yo(Cr(Sy),e,i);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let l=o[0]||Cr(Sy);const h=zu(i,e.config.apiKey,e.name);let f=null;for(const _ of t)try{const E=await _._get(h);if(E){let A;if(typeof E=="string"){const S=await ic(e,{idToken:E}).catch(()=>{});if(!S)break;A=await bn._fromGetAccountInfoResponse(e,S,E)}else A=bn._fromJSON(e,E);_!==l&&(f=A),l=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!l._shouldAllowMigration||!g.length?new yo(l,e,i):(l=g[0],f&&await l._set(h,f.toJSON()),await Promise.all(t.map(async _=>{if(_!==l)try{await _._remove(h)}catch{}})),new yo(l,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xy(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(l0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(i0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(c0(e))return"Blackberry";if(h0(e))return"Webos";if(o0(e))return"Safari";if((e.includes("chrome/")||a0(e))&&!e.includes("edge/"))return"Chrome";if(u0(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=r.match(t);if(i?.length===2)return i[1]}return"Other"}function i0(r=zt()){return/firefox\//i.test(r)}function o0(r=zt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function a0(r=zt()){return/crios\//i.test(r)}function l0(r=zt()){return/iemobile/i.test(r)}function u0(r=zt()){return/android/i.test(r)}function c0(r=zt()){return/blackberry/i.test(r)}function h0(r=zt()){return/webos/i.test(r)}function Df(r=zt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function cC(r=zt()){return Df(r)&&!!window.navigator?.standalone}function hC(){return tT()&&document.documentMode===10}function d0(r=zt()){return Df(r)||u0(r)||h0(r)||c0(r)||/windows phone/i.test(r)||l0(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f0(r,e=[]){let t;switch(r){case"Browser":t=xy(zt());break;case"Worker":t=`${xy(zt())}-${r}`;break;default:t=r}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ao}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((h,f)=>{try{const g=e(l);h(g)}catch(g){f(g)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fC(r,e={}){return Do(r,"GET","/v2/passwordPolicy",Cc(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pC=6;class mC{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??pC,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cy(this),this.idTokenSubscription=new Cy(this),this.beforeStateQueue=new dC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Cr(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await yo.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ic(this,{idToken:e}),i=await bn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(kn(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(h,h))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let i=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=this.redirectUser?._redirectEventId,h=i?._redirectEventId,f=await this.tryRedirectSignIn(e);(!l||l===h)&&f?.user&&(i=f.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(l){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await oc(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Xx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(kn(this.app))return Promise.reject(Ts(this));const t=e?vn(e):null;return t&&Ie(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return kn(this.app)?Promise.reject(Ts(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return kn(this.app)?Promise.reject(Ts(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Cr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await fC(this),t=new mC(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ja("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await uC(this,i)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Cr(e)||this._popupRedirectResolver;Ie(t,this,"argument-error"),this.redirectPersistenceManager=await yo.create(this,[Cr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ie(f,this,"internal-error"),f.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,i,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=f0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){if(kn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Kx(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Ac(r){return vn(r)}class Cy{constructor(e){this.auth=e,this.observer=null,this.addObserver=uT(t=>this.observer=t)}get next(){return Ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Of={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function yC(r){Of=r}function _C(r){return Of.loadJS(r)}function vC(){return Of.gapiScript}function wC(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EC(r,e){const t=Kd(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(ai(l,e??{}))return o;kr(o,"already-initialized")}return t.initialize({options:e})}function TC(r,e){const t=e?.persistence||[],i=(Array.isArray(t)?t:[t]).map(Cr);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(i,e?.popupRedirectResolver)}function IC(r,e,t){const i=Ac(r);Ie(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=p0(e),{host:h,port:f}=SC(e),g=f===null?"":`:${f}`,_={url:`${l}//${h}${g}/`},E=Object.freeze({host:h,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){Ie(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),Ie(ai(_,i.config.emulator)&&ai(E,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=_,i.emulatorConfig=E,i.settings.appVerificationDisabledForTesting=!0,Co(h)?(f_(`${l}//${h}${g}`),p_("Auth",!0)):xC()}function p0(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function SC(r){const e=p0(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:Ay(i.substr(l.length+1))}}else{const[l,h]=i.split(":");return{host:l,port:Ay(h)}}}function Ay(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function xC(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return xr("not implemented")}_getIdTokenResponse(e){return xr("not implemented")}_linkToIdToken(e,t){return xr("not implemented")}_getReauthenticationResolver(e){return xr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _o(r,e){return t0(r,"POST","/v1/accounts:signInWithIdp",Cc(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CC="http://localhost";class hi extends m0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new hi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):kr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o,...l}=t;if(!i||!o)return null;const h=new hi(i,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return _o(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,_o(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,_o(e,t)}buildRequest(){const e={requestUri:CC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Za(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al extends g0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs extends al{constructor(){super("facebook.com")}static credential(e){return hi._fromParams({providerId:hs.PROVIDER_ID,signInMethod:hs.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hs.credentialFromTaggedObject(e)}static credentialFromError(e){return hs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hs.credential(e.oauthAccessToken)}catch{return null}}}hs.FACEBOOK_SIGN_IN_METHOD="facebook.com";hs.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds extends al{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return hi._fromParams({providerId:ds.PROVIDER_ID,signInMethod:ds.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ds.credentialFromTaggedObject(e)}static credentialFromError(e){return ds.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return ds.credential(t,i)}catch{return null}}}ds.GOOGLE_SIGN_IN_METHOD="google.com";ds.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs extends al{constructor(){super("github.com")}static credential(e){return hi._fromParams({providerId:fs.PROVIDER_ID,signInMethod:fs.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fs.credentialFromTaggedObject(e)}static credentialFromError(e){return fs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fs.credential(e.oauthAccessToken)}catch{return null}}}fs.GITHUB_SIGN_IN_METHOD="github.com";fs.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps extends al{constructor(){super("twitter.com")}static credential(e,t){return hi._fromParams({providerId:ps.PROVIDER_ID,signInMethod:ps.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ps.credentialFromTaggedObject(e)}static credentialFromError(e){return ps.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return ps.credential(t,i)}catch{return null}}}ps.TWITTER_SIGN_IN_METHOD="twitter.com";ps.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AC(r,e){return t0(r,"POST","/v1/accounts:signUp",Cc(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await bn._fromIdTokenResponse(e,i,o),h=Ry(i);return new ks({user:l,providerId:h,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=Ry(i);return new ks({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function Ry(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RC(r){if(kn(r.app))return Promise.reject(Ts(r));const e=Ac(r);if(await e._initializationPromise,e.currentUser?.isAnonymous)return new ks({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await AC(e,{returnSecureToken:!0}),i=await ks._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac extends br{constructor(e,t,i,o){super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,ac.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new ac(e,t,i,o)}}function y0(r,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?ac._fromErrorAndOperation(r,l,e,i):l})}async function PC(r,e,t=!1){const i=await Qa(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return ks._forOperation(r,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kC(r,e,t=!1){const{auth:i}=r;if(kn(i.app))return Promise.reject(Ts(i));const o="reauthenticate";try{const l=await Qa(r,y0(i,o,e,r),t);Ie(l.idToken,i,"internal-error");const h=bf(l.idToken);Ie(h,i,"internal-error");const{sub:f}=h;return Ie(r.uid===f,i,"user-mismatch"),ks._forOperation(r,o,l)}catch(l){throw l?.code==="auth/user-not-found"&&kr(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NC(r,e,t=!1){if(kn(r.app))return Promise.reject(Ts(r));const i="signIn",o=await y0(r,i,e),l=await ks._fromIdTokenResponse(r,i,o);return t||await r._updateCurrentUser(l.user),l}function bC(r,e,t,i){return vn(r).onIdTokenChanged(e,t,i)}function DC(r,e,t){return vn(r).beforeAuthStateChanged(e,t)}const lc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(lc,"1"),this.storage.removeItem(lc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OC=1e3,VC=10;class v0 extends _0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=d0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,f,g)=>{this.notifyListeners(h,g)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(i);!t&&this.localCache[i]===h||this.notifyListeners(i,h)},l=this.storage.getItem(i);hC()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,VC):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},OC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}v0.type="LOCAL";const MC=v0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0 extends _0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}w0.type="SESSION";const E0=w0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LC(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new Rc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!h?.size)return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const f=Array.from(h).map(async _=>_(t.origin,l)),g=await LC(f);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Rc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf(r="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((f,g)=>{const _=Vf("",20);o.port1.start();const E=setTimeout(()=>{g(new Error("unsupported_event"))},i);h={messageChannel:o,onMessage(A){const S=A;if(S.data.eventId===_)switch(S.data.status){case"ack":clearTimeout(E),l=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(S.data.response);break;default:clearTimeout(E),clearTimeout(l),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(){return window}function FC(r){ir().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T0(){return typeof ir().WorkerGlobalScope<"u"&&typeof ir().importScripts=="function"}async function UC(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zC(){return navigator?.serviceWorker?.controller||null}function BC(){return T0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I0="firebaseLocalStorageDb",$C=1,uc="firebaseLocalStorage",S0="fbase_key";class ll{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Pc(r,e){return r.transaction([uc],e?"readwrite":"readonly").objectStore(uc)}function qC(){const r=indexedDB.deleteDatabase(I0);return new ll(r).toPromise()}function qd(){const r=indexedDB.open(I0,$C);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const i=r.result;try{i.createObjectStore(uc,{keyPath:S0})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const i=r.result;i.objectStoreNames.contains(uc)?e(i):(i.close(),await qC(),e(await qd()))})})}async function Py(r,e,t){const i=Pc(r,!0).put({[S0]:e,value:t});return new ll(i).toPromise()}async function HC(r,e){const t=Pc(r,!1).get(e),i=await new ll(t).toPromise();return i===void 0?null:i.value}function ky(r,e){const t=Pc(r,!0).delete(e);return new ll(t).toPromise()}const GC=800,WC=3;class x0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>WC)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return T0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Rc._getInstance(BC()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await UC(),!this.activeServiceWorker)return;this.sender=new jC(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qd();return await Py(e,lc,"1"),await ky(e,lc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Py(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>HC(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ky(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Pc(o,!1).getAll();return new ll(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),GC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}x0.type="LOCAL";const KC=x0;new ol(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QC(r,e){return e?Cr(e):(Ie(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf extends m0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _o(e,this._buildIdpRequest())}_linkToIdToken(e,t){return _o(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return _o(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function YC(r){return NC(r.auth,new Mf(r),r.bypassAuthState)}function XC(r){const{auth:e,user:t}=r;return Ie(t,e,"internal-error"),kC(t,new Mf(r),r.bypassAuthState)}async function JC(r){const{auth:e,user:t}=r;return Ie(t,e,"internal-error"),PC(t,new Mf(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:h,type:f}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(g))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return YC;case"linkViaPopup":case"linkViaRedirect":return JC;case"reauthViaPopup":case"reauthViaRedirect":return XC;default:kr(this.auth,"internal-error")}}resolve(e){Nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZC=new ol(2e3,1e4);class ho extends C0{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,ho.currentPopupAction&&ho.currentPopupAction.cancel(),ho.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ie(e,this.auth,"internal-error"),e}async onExecution(){Nr(this.filter.length===1,"Popup operations only handle one event");const e=Vf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(sr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(sr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ho.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(sr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ZC.get())};e()}}ho.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eA="pendingRedirect",Bu=new Map;class tA extends C0{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Bu.get(this.auth._key());if(!e){try{const i=await nA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Bu.set(this.auth._key(),e)}return this.bypassAuthState||Bu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nA(r,e){const t=iA(e),i=sA(r);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function rA(r,e){Bu.set(r._key(),e)}function sA(r){return Cr(r._redirectPersistence)}function iA(r){return zu(eA,r.config.apiKey,r.name)}async function oA(r,e,t=!1){if(kn(r.app))return Promise.reject(Ts(r));const i=Ac(r),o=QC(i,e),h=await new tA(i,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await i._persistUserIfCurrent(h.user),await i._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA=600*1e3;class lA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!uA(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!A0(e)){const i=e.error.code?.split("auth/")[1]||"internal-error";t.onError(sr(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=aA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ny(e))}saveEventToCache(e){this.cachedEventUids.add(Ny(e)),this.lastProcessedEventTime=Date.now()}}function Ny(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function A0({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function uA(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return A0(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cA(r,e={}){return Do(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dA=/^https?/;async function fA(r){if(r.config.emulator)return;const{authorizedDomains:e}=await cA(r);for(const t of e)try{if(pA(t))return}catch{}kr(r,"unauthorized-domain")}function pA(r){const e=Bd(),{protocol:t,hostname:i}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&i===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===i}if(!dA.test(t))return!1;if(hA.test(r))return i===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mA=new ol(3e4,6e4);function by(){const r=ir().___jsl;if(r?.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function gA(r){return new Promise((e,t)=>{function i(){by(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{by(),t(sr(r,"network-request-failed"))},timeout:mA.get()})}if(ir().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(ir().gapi?.load)i();else{const o=wC("iframefcb");return ir()[o]=()=>{gapi.load?i():t(sr(r,"network-request-failed"))},_C(`${vC()}?onload=${o}`).catch(l=>t(l))}}).catch(e=>{throw $u=null,e})}let $u=null;function yA(r){return $u=$u||gA(r),$u}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _A=new ol(5e3,15e3),vA="__/auth/iframe",wA="emulator/auth/iframe",EA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},TA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function IA(r){const e=r.config;Ie(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Nf(e,wA):`https://${r.config.authDomain}/${vA}`,i={apiKey:e.apiKey,appName:r.name,v:Ao},o=TA.get(r.config.apiHost);o&&(i.eid=o);const l=r._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${Za(i).slice(1)}`}async function SA(r){const e=await yA(r),t=ir().gapi;return Ie(t,r,"internal-error"),e.open({where:document.body,url:IA(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:EA,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const h=sr(r,"network-request-failed"),f=ir().setTimeout(()=>{l(h)},_A.get());function g(){ir().clearTimeout(f),o(i)}i.ping(g).then(g,()=>{l(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},CA=500,AA=600,RA="_blank",PA="http://localhost";class Dy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function kA(r,e,t,i=CA,o=AA){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const g={...xA,width:i.toString(),height:o.toString(),top:l,left:h},_=zt().toLowerCase();t&&(f=a0(_)?RA:t),i0(_)&&(e=e||PA,g.scrollbars="yes");const E=Object.entries(g).reduce((S,[F,q])=>`${S}${F}=${q},`,"");if(cC(_)&&f!=="_self")return NA(e||"",f),new Dy(null);const A=window.open(e||"",f,E);Ie(A,r,"popup-blocked");try{A.focus()}catch{}return new Dy(A)}function NA(r,e){const t=document.createElement("a");t.href=r,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bA="__/auth/handler",DA="emulator/auth/handler",OA=encodeURIComponent("fac");async function Oy(r,e,t,i,o,l){Ie(r.config.authDomain,r,"auth-domain-config-required"),Ie(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:i,v:Ao,eventId:o};if(e instanceof g0){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",lT(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,A]of Object.entries({}))h[E]=A}if(e instanceof al){const E=e.getScopes().filter(A=>A!=="");E.length>0&&(h.scopes=E.join(","))}r.tenantId&&(h.tid=r.tenantId);const f=h;for(const E of Object.keys(f))f[E]===void 0&&delete f[E];const g=await r._getAppCheckToken(),_=g?`#${OA}=${encodeURIComponent(g)}`:"";return`${VA(r)}?${Za(f).slice(1)}${_}`}function VA({config:r}){return r.emulator?Nf(r,DA):`https://${r.authDomain}/${bA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const md="webStorageSupport";class MA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=E0,this._completeRedirectFn=oA,this._overrideRedirectResult=rA}async _openPopup(e,t,i,o){Nr(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const l=await Oy(e,t,i,Bd(),o);return kA(e,l,Vf())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await Oy(e,t,i,Bd(),o);return FC(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Nr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await SA(e),i=new lA(e);return t.register("authEvent",o=>(Ie(o?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(md,{type:md},o=>{const l=o?.[0]?.[md];l!==void 0&&t(!!l),kr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=fA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return d0()||o0()||Df()}}const LA=MA;var Vy="@firebase/auth",My="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FA(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function UA(r){vo(new li("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:f}=i.options;Ie(h&&!h.includes(":"),"invalid-api-key",{appName:i.name});const g={apiKey:h,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:f0(r)},_=new gC(i,o,l,g);return TC(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),vo(new li("auth-internal",e=>{const t=Ac(e.getProvider("auth").getImmediate());return(i=>new jA(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),_s(Vy,My,FA(r)),_s(Vy,My,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA=300,BA=d_("authIdTokenMaxAge")||zA;let Ly=null;const $A=r=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>BA)return;const o=t?.token;Ly!==o&&(Ly=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function qA(r=Qd()){const e=Kd(r,"auth");if(e.isInitialized())return e.getImmediate();const t=EC(r,{popupRedirectResolver:LA,persistence:[KC,MC,E0]}),i=d_("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const h=$A(l.toString());DC(t,h,()=>h(t.currentUser)),bC(t,f=>h(f))}}const o=c_("auth");return o&&IC(t,`http://${o}`),t}function HA(){return document.getElementsByTagName("head")?.[0]??document}yC({loadJS(r){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",r),i.onload=e,i.onerror=o=>{const l=sr("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",HA().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});UA("Browser");const R0={apiKey:"AIzaSyAqnWBBqgWHSga-1DH-ftDU0y29x3spQvQ",authDomain:"practice-projects-e1c5c.firebaseapp.com",projectId:"practice-projects-e1c5c",storageBucket:"practice-projects-e1c5c.firebasestorage.app",messagingSenderId:"215668780560",appId:"1:215668780560:web:dbd851bf9a520d66ef6495"};console.log("Firebase Config Loaded:",R0);const jy="pulse-studio-app",P0=cI().length?Qd(jy):y_(R0,jy),Fy=Ix(P0),GA=qA(P0),WA=async()=>{try{return(await RC(GA)).user}catch(r){return console.error("Anonymous sign-in failed:",r),null}};function KA({message:r}){const e=r.sender==="ai";return w.jsx("div",{className:`flex ${e?"justify-start":"justify-end"}`,children:w.jsxs("div",{className:`flex gap-3 max-w-[85%] ${e?"flex-row":"flex-row-reverse"}`,children:[e&&w.jsx("div",{className:"w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-1",children:w.jsx(ii,{className:"w-4 h-4 text-white"})}),w.jsx("div",{className:`px-4 py-3 rounded-2xl ${e?"bg-slate-800 border border-slate-700/50 text-slate-100":"bg-gradient-to-r from-blue-500 to-purple-600 text-white"}`,children:w.jsx("p",{className:"text-sm leading-relaxed",children:r.text})})]})})}function QA({onUpload:r,uploadedLogo:e}){const[t,i]=Pe.useState(!1),o=Pe.useRef(null),l=_=>{_.preventDefault(),i(!0)},h=()=>{i(!1)},f=_=>{_.preventDefault(),i(!1);const E=_.dataTransfer.files[0];E&&E.type.startsWith("image/")&&r(E)},g=_=>{const E=_.target.files?.[0];E&&r(E)};return w.jsxs("div",{children:[w.jsx("input",{ref:o,type:"file",accept:"image/png,image/jpeg,image/svg+xml",onChange:g,className:"hidden"}),w.jsx("div",{onDragOver:l,onDragLeave:h,onDrop:f,onClick:()=>o.current?.click(),className:`relative border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all ${t?"border-blue-500 bg-blue-500/10":e?"border-green-500 bg-green-500/10":"border-slate-700 bg-slate-800/50 hover:border-slate-600"}`,children:e?w.jsxs("div",{className:"flex items-center gap-3",children:[w.jsx("img",{src:e,alt:"Logo",className:"w-12 h-12 object-contain rounded-lg bg-white p-1"}),w.jsxs("div",{className:"flex-1 text-left",children:[w.jsxs("div",{className:"flex items-center gap-2",children:[w.jsx(lE,{className:"w-4 h-4 text-green-500"}),w.jsx("p",{className:"text-sm text-green-400",children:"Logo uploaded"})]}),w.jsx("p",{className:"text-xs text-slate-500 mt-1",children:"Click to change"})]})]}):w.jsxs("div",{children:[w.jsx(OE,{className:"w-8 h-8 text-slate-500 mx-auto mb-2"}),w.jsx("p",{className:"text-sm text-slate-300 mb-1",children:"Upload your logo"}),w.jsx("p",{className:"text-xs text-slate-500",children:"PNG, JPG, or SVG"})]})})]})}var Uy;(function(r){r.STRING="string",r.NUMBER="number",r.INTEGER="integer",r.BOOLEAN="boolean",r.ARRAY="array",r.OBJECT="object"})(Uy||(Uy={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zy;(function(r){r.LANGUAGE_UNSPECIFIED="language_unspecified",r.PYTHON="python"})(zy||(zy={}));var By;(function(r){r.OUTCOME_UNSPECIFIED="outcome_unspecified",r.OUTCOME_OK="outcome_ok",r.OUTCOME_FAILED="outcome_failed",r.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(By||(By={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $y=["user","model","function","system"];var qy;(function(r){r.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",r.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",r.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",r.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",r.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",r.HARM_CATEGORY_CIVIC_INTEGRITY="HARM_CATEGORY_CIVIC_INTEGRITY"})(qy||(qy={}));var Hy;(function(r){r.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",r.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",r.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",r.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",r.BLOCK_NONE="BLOCK_NONE"})(Hy||(Hy={}));var Gy;(function(r){r.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",r.NEGLIGIBLE="NEGLIGIBLE",r.LOW="LOW",r.MEDIUM="MEDIUM",r.HIGH="HIGH"})(Gy||(Gy={}));var Wy;(function(r){r.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",r.SAFETY="SAFETY",r.OTHER="OTHER"})(Wy||(Wy={}));var ja;(function(r){r.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",r.STOP="STOP",r.MAX_TOKENS="MAX_TOKENS",r.SAFETY="SAFETY",r.RECITATION="RECITATION",r.LANGUAGE="LANGUAGE",r.BLOCKLIST="BLOCKLIST",r.PROHIBITED_CONTENT="PROHIBITED_CONTENT",r.SPII="SPII",r.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",r.OTHER="OTHER"})(ja||(ja={}));var Ky;(function(r){r.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",r.RETRIEVAL_QUERY="RETRIEVAL_QUERY",r.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",r.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",r.CLASSIFICATION="CLASSIFICATION",r.CLUSTERING="CLUSTERING"})(Ky||(Ky={}));var Qy;(function(r){r.MODE_UNSPECIFIED="MODE_UNSPECIFIED",r.AUTO="AUTO",r.ANY="ANY",r.NONE="NONE"})(Qy||(Qy={}));var Yy;(function(r){r.MODE_UNSPECIFIED="MODE_UNSPECIFIED",r.MODE_DYNAMIC="MODE_DYNAMIC"})(Yy||(Yy={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class io extends Ut{constructor(e,t){super(e),this.response=t}}class k0 extends Ut{constructor(e,t,i,o){super(e),this.status=t,this.statusText=i,this.errorDetails=o}}class Is extends Ut{}class N0 extends Ut{}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YA="https://generativelanguage.googleapis.com",XA="v1beta",JA="0.24.1",ZA="genai-js";var di;(function(r){r.GENERATE_CONTENT="generateContent",r.STREAM_GENERATE_CONTENT="streamGenerateContent",r.COUNT_TOKENS="countTokens",r.EMBED_CONTENT="embedContent",r.BATCH_EMBED_CONTENTS="batchEmbedContents"})(di||(di={}));class eR{constructor(e,t,i,o,l){this.model=e,this.task=t,this.apiKey=i,this.stream=o,this.requestOptions=l}toString(){var e,t;const i=((e=this.requestOptions)===null||e===void 0?void 0:e.apiVersion)||XA;let l=`${((t=this.requestOptions)===null||t===void 0?void 0:t.baseUrl)||YA}/${i}/${this.model}:${this.task}`;return this.stream&&(l+="?alt=sse"),l}}function tR(r){const e=[];return r?.apiClient&&e.push(r.apiClient),e.push(`${ZA}/${JA}`),e.join(" ")}async function nR(r){var e;const t=new Headers;t.append("Content-Type","application/json"),t.append("x-goog-api-client",tR(r.requestOptions)),t.append("x-goog-api-key",r.apiKey);let i=(e=r.requestOptions)===null||e===void 0?void 0:e.customHeaders;if(i){if(!(i instanceof Headers))try{i=new Headers(i)}catch(o){throw new Is(`unable to convert customHeaders value ${JSON.stringify(i)} to Headers: ${o.message}`)}for(const[o,l]of i.entries()){if(o==="x-goog-api-key")throw new Is(`Cannot set reserved header name ${o}`);if(o==="x-goog-api-client")throw new Is(`Header name ${o} can only be set using the apiClient field`);t.append(o,l)}}return t}async function rR(r,e,t,i,o,l){const h=new eR(r,e,t,i,l);return{url:h.toString(),fetchOptions:Object.assign(Object.assign({},aR(l)),{method:"POST",headers:await nR(h),body:o})}}async function ul(r,e,t,i,o,l={},h=fetch){const{url:f,fetchOptions:g}=await rR(r,e,t,i,o,l);return sR(f,g,h)}async function sR(r,e,t=fetch){let i;try{i=await t(r,e)}catch(o){iR(o,r)}return i.ok||await oR(i,r),i}function iR(r,e){let t=r;throw t.name==="AbortError"?(t=new N0(`Request aborted when fetching ${e.toString()}: ${r.message}`),t.stack=r.stack):r instanceof k0||r instanceof Is||(t=new Ut(`Error fetching from ${e.toString()}: ${r.message}`),t.stack=r.stack),t}async function oR(r,e){let t="",i;try{const o=await r.json();t=o.error.message,o.error.details&&(t+=` ${JSON.stringify(o.error.details)}`,i=o.error.details)}catch{}throw new k0(`Error fetching from ${e.toString()}: [${r.status} ${r.statusText}] ${t}`,r.status,r.statusText,i)}function aR(r){const e={};if(r?.signal!==void 0||r?.timeout>=0){const t=new AbortController;r?.timeout>=0&&setTimeout(()=>t.abort(),r.timeout),r?.signal&&r.signal.addEventListener("abort",()=>{t.abort()}),e.signal=t.signal}return e}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lf(r){return r.text=()=>{if(r.candidates&&r.candidates.length>0){if(r.candidates.length>1&&console.warn(`This response had ${r.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),qu(r.candidates[0]))throw new io(`${cs(r)}`,r);return lR(r)}else if(r.promptFeedback)throw new io(`Text not available. ${cs(r)}`,r);return""},r.functionCall=()=>{if(r.candidates&&r.candidates.length>0){if(r.candidates.length>1&&console.warn(`This response had ${r.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),qu(r.candidates[0]))throw new io(`${cs(r)}`,r);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),Xy(r)[0]}else if(r.promptFeedback)throw new io(`Function call not available. ${cs(r)}`,r)},r.functionCalls=()=>{if(r.candidates&&r.candidates.length>0){if(r.candidates.length>1&&console.warn(`This response had ${r.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),qu(r.candidates[0]))throw new io(`${cs(r)}`,r);return Xy(r)}else if(r.promptFeedback)throw new io(`Function call not available. ${cs(r)}`,r)},r}function lR(r){var e,t,i,o;const l=[];if(!((t=(e=r.candidates)===null||e===void 0?void 0:e[0].content)===null||t===void 0)&&t.parts)for(const h of(o=(i=r.candidates)===null||i===void 0?void 0:i[0].content)===null||o===void 0?void 0:o.parts)h.text&&l.push(h.text),h.executableCode&&l.push("\n```"+h.executableCode.language+`
`+h.executableCode.code+"\n```\n"),h.codeExecutionResult&&l.push("\n```\n"+h.codeExecutionResult.output+"\n```\n");return l.length>0?l.join(""):""}function Xy(r){var e,t,i,o;const l=[];if(!((t=(e=r.candidates)===null||e===void 0?void 0:e[0].content)===null||t===void 0)&&t.parts)for(const h of(o=(i=r.candidates)===null||i===void 0?void 0:i[0].content)===null||o===void 0?void 0:o.parts)h.functionCall&&l.push(h.functionCall);if(l.length>0)return l}const uR=[ja.RECITATION,ja.SAFETY,ja.LANGUAGE];function qu(r){return!!r.finishReason&&uR.includes(r.finishReason)}function cs(r){var e,t,i;let o="";if((!r.candidates||r.candidates.length===0)&&r.promptFeedback)o+="Response was blocked",!((e=r.promptFeedback)===null||e===void 0)&&e.blockReason&&(o+=` due to ${r.promptFeedback.blockReason}`),!((t=r.promptFeedback)===null||t===void 0)&&t.blockReasonMessage&&(o+=`: ${r.promptFeedback.blockReasonMessage}`);else if(!((i=r.candidates)===null||i===void 0)&&i[0]){const l=r.candidates[0];qu(l)&&(o+=`Candidate was blocked due to ${l.finishReason}`,l.finishMessage&&(o+=`: ${l.finishMessage}`))}return o}function Ya(r){return this instanceof Ya?(this.v=r,this):new Ya(r)}function cR(r,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(r,e||[]),o,l=[];return o={},h("next"),h("throw"),h("return"),o[Symbol.asyncIterator]=function(){return this},o;function h(S){i[S]&&(o[S]=function(F){return new Promise(function(q,H){l.push([S,F,q,H])>1||f(S,F)})})}function f(S,F){try{g(i[S](F))}catch(q){A(l[0][3],q)}}function g(S){S.value instanceof Ya?Promise.resolve(S.value.v).then(_,E):A(l[0][2],S)}function _(S){f("next",S)}function E(S){f("throw",S)}function A(S,F){S(F),l.shift(),l.length&&f(l[0][0],l[0][1])}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jy=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function hR(r){const e=r.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),t=pR(e),[i,o]=t.tee();return{stream:fR(i),response:dR(o)}}async function dR(r){const e=[],t=r.getReader();for(;;){const{done:i,value:o}=await t.read();if(i)return Lf(mR(e));e.push(o)}}function fR(r){return cR(this,arguments,function*(){const t=r.getReader();for(;;){const{value:i,done:o}=yield Ya(t.read());if(o)break;yield yield Ya(Lf(i))}})}function pR(r){const e=r.getReader();return new ReadableStream({start(i){let o="";return l();function l(){return e.read().then(({value:h,done:f})=>{if(f){if(o.trim()){i.error(new Ut("Failed to parse stream"));return}i.close();return}o+=h;let g=o.match(Jy),_;for(;g;){try{_=JSON.parse(g[1])}catch{i.error(new Ut(`Error parsing JSON response: "${g[1]}"`));return}i.enqueue(_),o=o.substring(g[0].length),g=o.match(Jy)}return l()}).catch(h=>{let f=h;throw f.stack=h.stack,f.name==="AbortError"?f=new N0("Request aborted when reading from the stream"):f=new Ut("Error reading from the stream"),f})}}})}function mR(r){const e=r[r.length-1],t={promptFeedback:e?.promptFeedback};for(const i of r){if(i.candidates){let o=0;for(const l of i.candidates)if(t.candidates||(t.candidates=[]),t.candidates[o]||(t.candidates[o]={index:o}),t.candidates[o].citationMetadata=l.citationMetadata,t.candidates[o].groundingMetadata=l.groundingMetadata,t.candidates[o].finishReason=l.finishReason,t.candidates[o].finishMessage=l.finishMessage,t.candidates[o].safetyRatings=l.safetyRatings,l.content&&l.content.parts){t.candidates[o].content||(t.candidates[o].content={role:l.content.role||"user",parts:[]});const h={};for(const f of l.content.parts)f.text&&(h.text=f.text),f.functionCall&&(h.functionCall=f.functionCall),f.executableCode&&(h.executableCode=f.executableCode),f.codeExecutionResult&&(h.codeExecutionResult=f.codeExecutionResult),Object.keys(h).length===0&&(h.text=""),t.candidates[o].content.parts.push(h)}o++}i.usageMetadata&&(t.usageMetadata=i.usageMetadata)}return t}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b0(r,e,t,i){const o=await ul(e,di.STREAM_GENERATE_CONTENT,r,!0,JSON.stringify(t),i);return hR(o)}async function D0(r,e,t,i){const l=await(await ul(e,di.GENERATE_CONTENT,r,!1,JSON.stringify(t),i)).json();return{response:Lf(l)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O0(r){if(r!=null){if(typeof r=="string")return{role:"system",parts:[{text:r}]};if(r.text)return{role:"system",parts:[r]};if(r.parts)return r.role?r:{role:"system",parts:r.parts}}}function Xa(r){let e=[];if(typeof r=="string")e=[{text:r}];else for(const t of r)typeof t=="string"?e.push({text:t}):e.push(t);return gR(e)}function gR(r){const e={role:"user",parts:[]},t={role:"function",parts:[]};let i=!1,o=!1;for(const l of r)"functionResponse"in l?(t.parts.push(l),o=!0):(e.parts.push(l),i=!0);if(i&&o)throw new Ut("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!i&&!o)throw new Ut("No content is provided for sending chat message.");return i?e:t}function yR(r,e){var t;let i={model:e?.model,generationConfig:e?.generationConfig,safetySettings:e?.safetySettings,tools:e?.tools,toolConfig:e?.toolConfig,systemInstruction:e?.systemInstruction,cachedContent:(t=e?.cachedContent)===null||t===void 0?void 0:t.name,contents:[]};const o=r.generateContentRequest!=null;if(r.contents){if(o)throw new Is("CountTokensRequest must have one of contents or generateContentRequest, not both.");i.contents=r.contents}else if(o)i=Object.assign(Object.assign({},i),r.generateContentRequest);else{const l=Xa(r);i.contents=[l]}return{generateContentRequest:i}}function Zy(r){let e;return r.contents?e=r:e={contents:[Xa(r)]},r.systemInstruction&&(e.systemInstruction=O0(r.systemInstruction)),e}function _R(r){return typeof r=="string"||Array.isArray(r)?{content:Xa(r)}:r}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],vR={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function wR(r){let e=!1;for(const t of r){const{role:i,parts:o}=t;if(!e&&i!=="user")throw new Ut(`First content should be with role 'user', got ${i}`);if(!$y.includes(i))throw new Ut(`Each item should include role field. Got ${i} but valid roles are: ${JSON.stringify($y)}`);if(!Array.isArray(o))throw new Ut("Content should have 'parts' property with an array of Parts");if(o.length===0)throw new Ut("Each Content should have at least one part");const l={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const f of o)for(const g of e_)g in f&&(l[g]+=1);const h=vR[i];for(const f of e_)if(!h.includes(f)&&l[f]>0)throw new Ut(`Content with role '${i}' can't contain '${f}' part`);e=!0}}function t_(r){var e;if(r.candidates===void 0||r.candidates.length===0)return!1;const t=(e=r.candidates[0])===null||e===void 0?void 0:e.content;if(t===void 0||t.parts===void 0||t.parts.length===0)return!1;for(const i of t.parts)if(i===void 0||Object.keys(i).length===0||i.text!==void 0&&i.text==="")return!1;return!0}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_="SILENT_ERROR";class ER{constructor(e,t,i,o={}){this.model=t,this.params=i,this._requestOptions=o,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,i?.history&&(wR(i.history),this._history=i.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e,t={}){var i,o,l,h,f,g;await this._sendPromise;const _=Xa(e),E={safetySettings:(i=this.params)===null||i===void 0?void 0:i.safetySettings,generationConfig:(o=this.params)===null||o===void 0?void 0:o.generationConfig,tools:(l=this.params)===null||l===void 0?void 0:l.tools,toolConfig:(h=this.params)===null||h===void 0?void 0:h.toolConfig,systemInstruction:(f=this.params)===null||f===void 0?void 0:f.systemInstruction,cachedContent:(g=this.params)===null||g===void 0?void 0:g.cachedContent,contents:[...this._history,_]},A=Object.assign(Object.assign({},this._requestOptions),t);let S;return this._sendPromise=this._sendPromise.then(()=>D0(this._apiKey,this.model,E,A)).then(F=>{var q;if(t_(F.response)){this._history.push(_);const H=Object.assign({parts:[],role:"model"},(q=F.response.candidates)===null||q===void 0?void 0:q[0].content);this._history.push(H)}else{const H=cs(F.response);H&&console.warn(`sendMessage() was unsuccessful. ${H}. Inspect response object for details.`)}S=F}).catch(F=>{throw this._sendPromise=Promise.resolve(),F}),await this._sendPromise,S}async sendMessageStream(e,t={}){var i,o,l,h,f,g;await this._sendPromise;const _=Xa(e),E={safetySettings:(i=this.params)===null||i===void 0?void 0:i.safetySettings,generationConfig:(o=this.params)===null||o===void 0?void 0:o.generationConfig,tools:(l=this.params)===null||l===void 0?void 0:l.tools,toolConfig:(h=this.params)===null||h===void 0?void 0:h.toolConfig,systemInstruction:(f=this.params)===null||f===void 0?void 0:f.systemInstruction,cachedContent:(g=this.params)===null||g===void 0?void 0:g.cachedContent,contents:[...this._history,_]},A=Object.assign(Object.assign({},this._requestOptions),t),S=b0(this._apiKey,this.model,E,A);return this._sendPromise=this._sendPromise.then(()=>S).catch(F=>{throw new Error(n_)}).then(F=>F.response).then(F=>{if(t_(F)){this._history.push(_);const q=Object.assign({},F.candidates[0].content);q.role||(q.role="model"),this._history.push(q)}else{const q=cs(F);q&&console.warn(`sendMessageStream() was unsuccessful. ${q}. Inspect response object for details.`)}}).catch(F=>{F.message!==n_&&console.error(F)}),S}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TR(r,e,t,i){return(await ul(e,di.COUNT_TOKENS,r,!1,JSON.stringify(t),i)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IR(r,e,t,i){return(await ul(e,di.EMBED_CONTENT,r,!1,JSON.stringify(t),i)).json()}async function SR(r,e,t,i){const o=t.requests.map(h=>Object.assign(Object.assign({},h),{model:e}));return(await ul(e,di.BATCH_EMBED_CONTENTS,r,!1,JSON.stringify({requests:o}),i)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e,t,i={}){this.apiKey=e,this._requestOptions=i,t.model.includes("/")?this.model=t.model:this.model=`models/${t.model}`,this.generationConfig=t.generationConfig||{},this.safetySettings=t.safetySettings||[],this.tools=t.tools,this.toolConfig=t.toolConfig,this.systemInstruction=O0(t.systemInstruction),this.cachedContent=t.cachedContent}async generateContent(e,t={}){var i;const o=Zy(e),l=Object.assign(Object.assign({},this._requestOptions),t);return D0(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(i=this.cachedContent)===null||i===void 0?void 0:i.name},o),l)}async generateContentStream(e,t={}){var i;const o=Zy(e),l=Object.assign(Object.assign({},this._requestOptions),t);return b0(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(i=this.cachedContent)===null||i===void 0?void 0:i.name},o),l)}startChat(e){var t;return new ER(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(t=this.cachedContent)===null||t===void 0?void 0:t.name},e),this._requestOptions)}async countTokens(e,t={}){const i=yR(e,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),o=Object.assign(Object.assign({},this._requestOptions),t);return TR(this.apiKey,this.model,i,o)}async embedContent(e,t={}){const i=_R(e),o=Object.assign(Object.assign({},this._requestOptions),t);return IR(this.apiKey,this.model,i,o)}async batchEmbedContents(e,t={}){const i=Object.assign(Object.assign({},this._requestOptions),t);return SR(this.apiKey,this.model,e,i)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(e){this.apiKey=e}getGenerativeModel(e,t){if(!e.model)throw new Ut("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new r_(this.apiKey,e,t)}getGenerativeModelFromCachedContent(e,t,i){if(!e.name)throw new Is("Cached content must contain a `name` field.");if(!e.model)throw new Is("Cached content must contain a `model` field.");const o=["model","systemInstruction"];for(const h of o)if(t?.[h]&&e[h]&&t?.[h]!==e[h]){if(h==="model"){const f=t.model.startsWith("models/")?t.model.replace("models/",""):t.model,g=e.model.startsWith("models/")?e.model.replace("models/",""):e.model;if(f===g)continue}throw new Is(`Different value for "${h}" specified in modelParams (${t[h]}) and cachedContent (${e[h]})`)}const l=Object.assign(Object.assign({},t),{model:e.model,tools:e.tools,toolConfig:e.toolConfig,systemInstruction:e.systemInstruction,cachedContent:e});return new r_(this.apiKey,l,i)}}const CR="AIzaSyCWDN7RDhEkLoWGGKYuTiIjODUI4Jiupas",AR="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";let gd=null;const V0=async r=>{const e=await fetch("https://openrouter.ai/api/v1/chat/completions",{method:"POST",headers:{Authorization:`Bearer ${AR}`,"Content-Type":"application/json","HTTP-Referer":window.location.origin,"X-Title":"Pulse Studio"},body:JSON.stringify({model:"tngtech/deepseek-r1t2-chimera:free",messages:[{role:"user",content:r}]})});if(!e.ok)throw new Error(`OpenRouter API error: ${e.status}`);return(await e.json()).choices[0]?.message?.content||""},jf=()=>(gd||(gd=new xR(CR)),gd),yd=()=>{const r=["Nova","Apex","Pulse","Vibe","Echo","Flux","Aura","Zenith","Prime","Sage","Luna","Nexus","Orion","Atlas","Valor","Phoenix","Stellar","Quantum","Velocity","Harmony","Elevate","Inspire","Clarity","Momentum","Catalyst","Horizon","Summit","Ascend","Visionary","Ember"],e=["Labs","Studio","Co","Group","Brands","Works","Creative","Design","Media","Digital","Solutions","Agency","Collective","House","Hub","Partners","Ventures","Innovations","Tech","Systems","Industries"],t=["full","single","combo"],i=t[Math.floor(Math.random()*t.length)],o=r[Math.floor(Math.random()*r.length)];if(i==="single")return o;if(i==="full"){const l=e[Math.floor(Math.random()*e.length)];return`${o} ${l}`}else{const l=r[Math.floor(Math.random()*r.length)];return o+l}},RR=async(r,e)=>{const t=jf();if(!t)return{shouldGenerate:!1,missingInfo:["AI connection"],brandName:yd()};try{const i=t.getGenerativeModel({model:"gemini-2.5-flash"}),o=`You are Pulse AI. The user wants to refine their image search.

USER SAYS: "${r}"

PREVIOUS SEARCH QUERY: "${e.searchQuery||"none yet"}"

YOUR TASK:
Understand what the user wants to change/add, then CREATE A COMPLETELY NEW search query that:
- Captures the INTENT of their request, not just literal words
- Reimagines the scene in a fresh way while keeping their core idea
- Uses creative, varied language to get different image results
- Doesn't just append their words - TRANSFORM the whole query

EXAMPLES:
Previous: "cute cat and girl playing"
User: "i want more variations and a bubble tea if possible"
→ searchQuery: "adorable young woman enjoying bubble tea with playful kitten"
(NOT: "cute cat and girl playing bubble tea" ❌)

Previous: "modern coffee shop"
User: "add some plants"
→ searchQuery: "contemporary cafe interior with indoor greenery and botanical decor"
(NOT: "modern coffee shop plants" ❌)

Previous: "beach sunset"
User: "needs more colors"
→ searchQuery: "vibrant tropical beach at golden hour with colorful sky"
(NOT: "beach sunset colors" ❌)

RESPOND IN THIS EXACT JSON FORMAT:
{
  "yourResponse": "Your friendly, natural response to the user",
  "objects": "Key visual elements in natural language",
  "style": "Overall mood/aesthetic",
  "purpose": "Purpose if mentioned (optional)",
  "searchQuery": "COMPLETELY REIMAGINED natural search phrase",
  "ready": true if you have enough to search, false otherwise
}

BE CREATIVE. TRANSFORM, DON'T JUST APPEND.`;let l="";try{l=(await(await i.generateContent(o)).response).text().trim()}catch(f){console.warn("⚠️ Gemini failed, trying OpenRouter...",f),l=await V0(o),console.log("✅ OpenRouter fallback successful")}const h=l.match(/\{[\s\S]*\}/);if(h){const f=JSON.parse(h[0]),g=f.objects?[f.objects]:e.nouns||[],_=f.style||e.style,E=f.purpose||e.purpose;return{style:_,purpose:E,nouns:g,searchQuery:f.searchQuery||"",shouldGenerate:f.ready===!0&&g.length>0&&_,missingInfo:[],aiResponse:f.yourResponse,brandName:yd(),logoPreference:"upload"}}}catch(i){console.error("AI analysis error:",i)}return{shouldGenerate:!1,missingInfo:["information"],brandName:yd(),aiResponse:"I'm having trouble understanding. Could you describe what you'd like in your post?"}},PR=async()=>{const r=jf();if(!r)return _d();try{const l=(await(await r.getGenerativeModel({model:"gemini-2.5-flash"}).generateContent(`Generate a random social media post theme with these three elements:

1. FEEL/MOOD: Choose one word (e.g., cozy, luxury, bold, playful, minimal, elegant, modern, vibrant, warm, cool, professional, artistic)
2. TOPIC: What the post is about (e.g., new menu, flash sale, product launch, quote, announcement, special offer, event)
3. TAGLINE: A catchy 3-7 word tagline matching the feel and topic

Format your response EXACTLY like this (one per line):
FEEL: [one word]
TOPIC: [short phrase]
TAGLINE: [3-7 words]

Be creative and varied!`)).response).text(),h=l.match(/FEEL:\s*(.+)/i),f=l.match(/TOPIC:\s*(.+)/i),g=l.match(/TAGLINE:\s*(.+)/i);return h&&f&&g?{feel:h[1].trim(),topic:f[1].trim(),tagline:g[1].trim()}:_d()}catch(e){return console.error("Error generating random theme:",e),_d()}},_d=()=>{const r=["cozy","luxury","bold","playful","minimal","elegant","modern","vibrant"],e=["new menu","flash sale","product launch","daily quote","announcement","special offer","exclusive event","limited edition"],t=["Discover something amazing","Limited time only","Fresh and exciting","Experience the difference","Your moment is now","Elevate your style","Made for you","Simply extraordinary"];return{feel:r[Math.floor(Math.random()*r.length)],topic:e[Math.floor(Math.random()*e.length)],tagline:t[Math.floor(Math.random()*t.length)]}},kR=async(r,e)=>{const t=jf();if(!t)return`${r} style`;try{const i=t.getGenerativeModel({model:"gemini-2.5-flash"}),o=`Given this image search query: "${r}"

Generate a NEW search query that:
- Means the same thing but uses completely different words
- Will find similar images with different results
- Uses natural, descriptive language for image search

Previously used variations (DO NOT repeat these):
${e.map((h,f)=>`${f+1}. ${h}`).join(`
`)}

Return ONLY the new search query, nothing else.`;let l="";try{l=(await(await i.generateContent(o)).response).text().trim().replace(/["']/g,"")}catch(h){console.warn("⚠️ Gemini failed for variation, trying OpenRouter...",h),l=await V0(o),l=l.trim().replace(/["']/g,""),console.log("✅ OpenRouter fallback successful for variation")}return l}catch(i){return console.error("Error generating variation:",i),`${r} alternative`}},NR="3yXdjOJYHV2HtBAHb62aUbGtNmaf6aL644CoosPfJwxNvLFDXGetW4Gd",bR="https://api.pexels.com/v1",DR=()=>!0,OR=r=>{const e={orientation:"square"};if(!r)return e;const t=r.toLowerCase(),i={pastel:void 0,vibrant:void 0,dark:"black",bright:"yellow",warm:"orange",cool:"blue",elegant:"gray",luxury:"gold",minimal:"white",bold:"red",peaceful:"blue",energetic:"red",cozy:"brown"};for(const[o,l]of Object.entries(i))if(t.includes(o)&&l){e.color=l;break}return(t.includes("detailed")||t.includes("luxury")||t.includes("professional"))&&(e.size="large"),e},oo=async(r,e=10,t)=>{if(!DR())return console.error("❌ Pexels API key not available"),Hu(e);console.log(`🚀 Starting Pexels search for: "${r}" (requesting ${e} images)`);try{const i=new URLSearchParams({query:r,per_page:String(e),orientation:t?.orientation||"square"});t?.size&&i.append("size",t.size),t?.color&&i.append("color",t.color),console.log("🔍 Pexels search params:",Object.fromEntries(i));const o=await fetch(`${bR}/search?${i}`,{headers:{Authorization:NR}});if(!o.ok)throw new Error(`Pexels API error: ${o.status}`);const l=await o.json();if(console.log("📦 Raw Pexels API response:",l),l.photos&&Array.isArray(l.photos)){const h=l.photos.map(f=>({id:String(f.id),url:f.src.large,urls:{regular:f.src.large,small:f.src.medium,thumb:f.src.small},description:f.alt,alt_description:f.alt,user:{name:f.photographer,username:f.photographer_url}}));return console.log(`✅ Pexels returned ${h.length} images for "${r}"`),h.length>0&&console.log("📸 Sample results:",h.slice(0,3).map(f=>({id:f.id,alt:f.alt_description}))),h}return Hu(e)}catch(i){return console.error("Error searching Pexels:",i),Hu(e)}},cc=async(r,e="",t=10)=>{const i=r.toLowerCase(),o=["bubble tea","iced coffee","hot chocolate","french fries","cat","cats","dog","dogs","boba","coffee","tea","food","bubble","shoe","shoes","sneaker","flower","flowers","plant","tree","cloud","clouds","sky","sunset","beach","ocean","mountain","rainbow","balloon","cake","book","laptop","phone","car"],l=[],h=new Set;for(const S of o){const F=i.indexOf(S);if(F!==-1){const q=F+S.length;let H=!1;for(let $=F;$<q;$++)if(h.has($)){H=!0;break}if(!H){l.push(S);for(let $=F;$<q;$++)h.add($)}}}const f=i.split(/\s+/),g=l.join(" ").split(/\s+/),_=f.filter(S=>!g.includes(S)).join(" "),E=OR(_);if(console.log("🎨 AI Analysis:",{nouns:l,style:_,searchParams:E}),l.length>0){console.log("🎯 Found nouns in query:",l);try{if(l.length===1){const ue=l[0];let fe=ue;_&&(fe=`${_} ${ue}`),console.log(`🔍 Smart search query: "${fe}"`);const ve=await oo(fe,Math.min(t*3,80),E);if(console.log(`✅ Retrieved ${ve.length} images for: ${fe}`),console.log("📸 Image descriptions:",ve.map(xe=>xe.alt_description||xe.description).slice(0,5)),ve.length>=t)return ve.slice(0,t);if(_.length>0){const xe=`${_} ${ue}`;console.log(`🎨 Trying styled search: ${xe}`);const me=await oo(xe,t,E);return me.length>=t?me.slice(0,t):[...ve,...me].slice(0,t)}return ve}const S=Math.max(1,Math.ceil(t/l.length)),F=l.map(ue=>oo(ue,S));let H=(await Promise.all(F)).flat();const $=Array.from(new Map(H.map(ue=>[ue.id,ue])).values());if($.length>=t)return $.slice(0,t);const se=f.filter(ue=>!o.includes(ue)).join(" ");if(se&&$.length<t){const ue=await oo(se,t-$.length);return[...$,...ue].slice(0,t)}return $}catch(S){console.error("Error searching by nouns:",S)}}const A=e?`${r} ${e}`:r;try{const S=await oo(A,t);if(S.length<t){const F=await oo(r,t-S.length);return[...S,...F]}return S}catch(S){return console.error("Error getting concept images:",S),Hu(t)}},Hu=r=>{const e=["https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1080&q=80","https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1080&q=80","https://images.unsplash.com/photo-1557683316-973673baf926?w=1080&q=80","https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=1080&q=80","https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?w=1080&q=80","https://images.unsplash.com/photo-1579546929662-711aa81148cf?w=1080&q=80"];return e.slice(0,Math.min(r,e.length)).map((t,i)=>({id:`fallback-${i}`,url:t,urls:{regular:t,small:t,thumb:t},description:"Aesthetic background",alt_description:"Background image",user:{name:"Unsplash",username:"unsplash"}}))},vd="pulse-chat-history";function VR({onGenerate:r,onTryAgain:e,isGenerating:t,isExpanded:i,onToggleExpand:o,userInputs:l}){const[h,f]=Pe.useState([]),[g,_]=Pe.useState("welcome"),[E,A]=Pe.useState(""),[S,F]=Pe.useState({}),[q,H]=Pe.useState(null),[$,se]=Pe.useState(!1),[ue,fe]=Pe.useState(null),[ve,xe]=Pe.useState(""),[me,N]=Pe.useState(null),C=Pe.useRef(null),R=()=>{C.current?.scrollIntoView({behavior:"smooth"})};Pe.useEffect(()=>{R()},[h]),Pe.useEffect(()=>{(async()=>{try{const Z=await WA();Z&&(N(Z.uid),await O(Z.uid),console.log("✅ Using Firebase for chat history"))}catch(Z){console.warn("⚠️ Firebase unavailable, using localStorage fallback:",Z),N("local-user")}finally{localStorage.removeItem(vd),I(`Hi! I'm Pulse AI ✨

What type of post would you like to make today?`),_("mode-select")}})()},[]);const O=async j=>{try{const Z=my(Fy,"chats",j,"messages"),ne=Mx(Z),Se=(await zx(ne)).docs.map(Ne=>Bx(Ne.ref));await Promise.all(Se),console.log("🗑️ Cleared previous chat history")}catch(Z){console.warn("⚠️ Could not clear chat history (Firebase blocked):",Z)}},k=()=>{const j=["FF6B6B","4ECDC4","FFE66D","95E1D3","F38181","AA96DA","FCBAD3","74B9FF"],Z=["identicon","bottts","avataaars","shapes","pixel-art"],ne=j[Math.floor(Math.random()*j.length)],Ee=Z[Math.floor(Math.random()*Z.length)],Se=Date.now().toString();return`https://api.dicebear.com/7.x/${Ee}/svg?seed=${Se}&backgroundColor=${ne}`},V=()=>{f([]),_("welcome"),F({}),H(null),fe(null),setTimeout(()=>{I(`Hi! I'm Pulse AI ✨

What type of post would you like to make today?`),_("mode-select")},300)},I=j=>{const Z={id:Date.now().toString(),sender:"ai",text:j,timestamp:new Date};f(ne=>[...ne,Z]),Me(Z)},_e=j=>{const Z={id:Date.now().toString(),sender:"user",text:j,timestamp:new Date};f(ne=>[...ne,Z]),Me(Z)},Me=async j=>{if(me){if(me!=="local-user")try{const Z=my(Fy,"chats",me,"messages");await $x(Z,{sender:j.sender,text:j.text,timestamp:qx()}),console.log("💾 Saved to Firebase");return}catch(Z){console.warn("⚠️ Firebase save failed, falling back to localStorage:",Z)}try{const Z=localStorage.getItem(vd),ne=Z?JSON.parse(Z):[];ne.push({...j,timestamp:new Date(j.timestamp)}),localStorage.setItem(vd,JSON.stringify(ne)),console.log("💾 Saved to localStorage")}catch(Z){console.error("❌ Failed to save to localStorage:",Z)}}},ze=async()=>{if(!E.trim()||$)return;const j=E.trim();_e(j),A(""),se(!0);try{const Z={...S,feel:S.feel,topic:S.topic,tagline:S.tagline,searchQuery:S.searchQuery,nouns:S.nouns},ne=await RR(j,Z);ne.aiResponse&&I(ne.aiResponse);const Ee={feel:ne.style||S.feel,topic:ne.purpose||S.topic,tagline:ne.tagline||S.tagline,logo:S.logo,nouns:ne.nouns&&ne.nouns.length>0?ne.nouns:S.nouns,brandName:ne.brandName||S.brandName,searchQuery:ne.searchQuery};F(Ee);const Se=ne.searchQuery||"";xe(Se),ne.shouldGenerate&&Se?setTimeout(g==="complete"?async()=>{I("✨ Regenerating with your changes..."),await K(Ee,Se),se(!1)}:async()=>{I("Perfect! Generating your posts now... ✨"),_("logo"),se(!1)},800):se(!1)}catch(Z){console.error("Error:",Z),se(!1),I("I'm having trouble understanding. Could you please try rephrasing?")}},je=j=>{fe(j),j==="simple"?(I(`Great! Just tell me what you'd like. For example:

"cute girl with flowers in pastel colors"

I'll figure out the rest! ✨`),_("prompt")):(I(`Perfect! Let's go step by step.

What should be in your images? (people, objects, scenes, etc.)`),_("guided-style"))},ee=async j=>{const Z=new FileReader;Z.onloadend=async()=>{const ne=Z.result;H(ne);const Ee={...S,logo:ne};F(Ee),I("Perfect! Generating your social media post concepts now... ✨"),_("generating"),await K(Ee,ve)},Z.readAsDataURL(j)},X=async()=>{const j=k();H(j);const Z={...S,logo:j};F(Z),I("Random logo generated! Creating your posts now... ✨"),_("generating"),await K(Z,ve)},K=async(j,Z)=>{try{const ne=Z||`${j.feel||"modern"} ${j.topic||"social media"} aesthetic`;console.log("🎨 Generating concepts with query:",ne),await cc(ne,"",4),r(j),I("🎉 I've generated 4 unique concepts for you! Check them out in the gallery and click any to preview on different platforms."),_("complete")}catch(ne){console.error("Error generating concepts:",ne),I("I've created concepts for you! Check them out in the gallery."),r(j),_("complete")}},b=()=>{switch(g){case"mode-select":return"Choose Mode";case"prompt":return"Describe Your Post";case"guided-style":return"Step 1: Style";case"guided-purpose":return"Step 2: Purpose";case"guided-tagline":return"Step 3: Tagline";case"logo":return"Upload Logo";case"generating":return"Generating...";case"complete":return"Complete ✓";default:return""}};return w.jsx(w.Fragment,{children:w.jsx("div",{className:`fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 transition-all duration-300 ${i?"w-[calc(100vw-2rem)] md:w-[420px] h-[70vh] md:h-[600px]":"w-auto h-auto"}`,children:i?w.jsxs("div",{className:"h-full flex flex-col bg-slate-900 rounded-2xl shadow-2xl border border-slate-700/50 overflow-hidden",children:[w.jsxs("div",{className:"p-3 md:p-4 border-b border-slate-700/50 bg-slate-800/50",children:[w.jsxs("div",{className:"flex items-center justify-between mb-2",children:[w.jsxs("div",{className:"flex items-center gap-2 md:gap-3",children:[w.jsx("div",{className:"w-8 h-8 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center",children:w.jsx(ii,{className:"w-4 h-4 md:w-5 md:h-5 text-white"})}),w.jsxs("div",{children:[w.jsx("h1",{className:"text-white text-sm md:text-base",children:"Pulse Studio"}),w.jsx("p",{className:"text-xs text-slate-400",children:"AI Post Maker"})]})]}),w.jsx("button",{onClick:o,className:"p-2 hover:bg-slate-700 rounded-lg transition-colors",children:w.jsx(TE,{className:"w-4 h-4 md:w-5 md:h-5 text-slate-400"})})]}),g!=="welcome"&&w.jsx("div",{className:"mt-2 px-3 py-1.5 bg-slate-800/50 rounded-full inline-block",children:w.jsx("p",{className:"text-xs text-slate-300",children:b()})})]}),w.jsxs("div",{className:"flex-1 overflow-y-auto p-3 md:p-4 space-y-3 md:space-y-4",children:[h.map(j=>w.jsx(KA,{message:j},j.id)),g==="mode-select"&&!$&&w.jsxs("div",{className:"flex flex-col gap-3 mt-4",children:[w.jsxs("button",{onClick:()=>je("simple"),className:"w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl text-white font-medium transition-all hover:scale-[1.02] flex items-center justify-center gap-2",children:[w.jsx(ii,{className:"w-5 h-5"}),"Complete Prompt (Recommended)"]}),w.jsx("button",{onClick:()=>je("guided"),className:"w-full px-6 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-xl text-white font-medium transition-all hover:scale-[1.02]",children:"Step by Step Guide"})]}),w.jsx("div",{ref:C})]}),g==="logo"&&w.jsx("div",{className:"px-3 md:px-4 pb-3 md:pb-4",children:w.jsxs("div",{className:"flex flex-col gap-3",children:[w.jsxs("div",{className:"flex flex-col sm:flex-row gap-2",children:[w.jsxs("button",{onClick:X,className:"flex-1 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 rounded-xl text-white font-medium transition-all flex items-center justify-center gap-2",children:[w.jsx(ii,{className:"w-5 h-5"}),"Random Logo"]}),w.jsx("button",{onClick:()=>{_("generating"),K(S,ve)},className:"flex-1 px-4 py-3 bg-slate-700 hover:bg-slate-600 rounded-xl text-white font-medium transition-all",children:"Skip Logo"})]}),w.jsxs("div",{className:"border-t border-slate-700 pt-3",children:[w.jsx("p",{className:"text-sm text-slate-400 mb-2 text-center",children:"Or upload your own:"}),w.jsx(QA,{onUpload:ee,uploadedLogo:q})]})]})}),g==="complete"&&w.jsxs("div",{className:"p-3 md:p-4 border-t border-slate-700/50 flex items-center gap-3",children:[w.jsx("div",{className:"flex-1 text-sm text-slate-400",children:"Keep chatting to refine or adjust your post!"}),w.jsxs("div",{className:"flex gap-2",children:[w.jsxs("div",{className:"group relative",children:[w.jsx("button",{onClick:()=>{I("🔄 Generating new variations with different phrasing..."),e()},className:"p-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all shadow-lg hover:shadow-xl",children:w.jsx(CE,{className:"w-5 h-5"})}),w.jsx("div",{className:"absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-slate-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none",children:"Try Again"})]}),w.jsxs("div",{className:"group relative",children:[w.jsx("button",{onClick:V,className:"p-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all shadow-lg hover:shadow-xl",children:w.jsx(SE,{className:"w-5 h-5"})}),w.jsx("div",{className:"absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-slate-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none",children:"Create Another"})]})]})]}),g!=="logo"&&g!=="generating"&&g!=="welcome"&&g!=="mode-select"&&w.jsx("div",{className:"p-3 md:p-4 border-t border-slate-700/50",children:w.jsxs("div",{className:"flex gap-2",children:[w.jsxs("div",{className:"flex-1 relative rounded-xl overflow-hidden",children:[$&&w.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 animate-[shimmer_1.5s_ease-in-out_infinite] bg-[length:200%_100%]"}),w.jsx("input",{type:"text",value:E,onChange:j=>A(j.target.value),onKeyDown:j=>j.key==="Enter"&&ze(),placeholder:$?"AI is thinking...":g==="complete"?"Add cats, change style, adjust colors...":ue==="simple"?"Describe your complete post idea...":"Type your response...",disabled:$,className:`relative w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 ${$?"bg-transparent":"bg-slate-800"}`})]}),w.jsx("button",{onClick:ze,disabled:!E.trim()||$,className:"px-3 md:px-4 py-2 md:py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white hover:shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all",children:$?w.jsx(ii,{className:"w-4 h-4 md:w-5 md:h-5 animate-pulse"}):w.jsx(o_,{className:"w-4 h-4 md:w-5 md:h-5"})})]})})]}):w.jsxs("button",{onClick:o,className:"group relative w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-110 flex items-center justify-center",children:[w.jsx(Du,{className:"w-6 h-6 md:w-7 md:h-7 text-white"}),w.jsx("div",{className:"absolute -top-1 -right-1 w-4 h-4 md:w-5 md:h-5 bg-red-500 rounded-full flex items-center justify-center",children:w.jsx(ii,{className:"w-2 h-2 md:w-3 md:h-3 text-white"})})]})})})}function MR({concept:r,isSelected:e,onSelect:t,userLogo:i,onChangeTemplate:o}){const l=()=>{switch(r.template.logoPlacement){case"top-left":return"top-4 left-4";case"top-right":return"top-4 right-4";case"bottom-left":return"bottom-4 left-4";case"bottom-right":return"bottom-4 right-4";default:return"top-4 left-4"}},h=()=>{switch(r.template.textPlacement){case"top":return"justify-start pt-12";case"center":return"justify-center";case"bottom":return"justify-end pb-12";default:return"justify-center"}},f=()=>{switch(r.template.textAlign||"center"){case"left":return"text-left items-start";case"right":return"text-right items-end";case"center":return"text-center items-center";default:return"text-center items-center"}},g=()=>{switch(r.template.textSize||"large"){case"small":return"text-lg";case"medium":return"text-xl";case"large":return"text-2xl";default:return"text-2xl"}},_=r.template.textColor||"#ffffff",E=r.template.isItalic||!1,A=()=>{t(),o&&o(r)};return w.jsxs("div",{onClick:A,className:`group relative cursor-pointer transition-all duration-300 ${e?"scale-[1.02]":"hover:scale-[1.02]"}`,children:[w.jsxs("div",{className:`relative rounded-2xl overflow-hidden border-2 transition-all ${e?"border-blue-500 shadow-2xl shadow-blue-500/25":"border-slate-700/50 shadow-xl hover:border-slate-600"}`,children:[w.jsxs("div",{className:"relative aspect-square bg-slate-800",children:[w.jsx("img",{src:r.imageUrl,alt:r.label,className:"w-full h-full object-cover",onError:S=>{console.error("❌ Image failed to load:",r.imageUrl),S.currentTarget.src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1080&q=80"},onLoad:()=>console.log("✅ Image loaded successfully:",r.imageUrl)}),w.jsx("div",{className:"absolute inset-0",style:{backgroundColor:r.template.overlayColor,opacity:r.template.overlayOpacity}}),i&&w.jsx("div",{className:`absolute ${l()} z-10`,children:w.jsx("img",{src:i,alt:"Logo",className:"w-12 h-12 object-contain",style:{filter:"drop-shadow(0 2px 8px rgba(0,0,0,0.3))"}})}),w.jsx("div",{className:`absolute inset-0 flex flex-col ${h()} ${f()} px-8`,children:w.jsx("h3",{className:`${g()} ${E?"italic":""}`,style:{fontFamily:r.template.fontFamily,color:_,textShadow:_==="#ffffff"||_==="white"?"0 2px 12px rgba(0,0,0,0.4)":"0 2px 12px rgba(255,255,255,0.4)"},children:r.tagline})}),w.jsx("div",{className:`absolute inset-0 bg-gradient-to-t from-blue-600/30 to-purple-600/30 transition-opacity ${e?"opacity-100":"opacity-0 group-hover:opacity-100"}`,children:w.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:w.jsxs("div",{className:"px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center gap-2",children:[w.jsx(ag,{className:"w-5 h-5 text-white"}),w.jsx("span",{className:"text-white",children:"Choose Template"})]})})})]}),w.jsxs("div",{className:"p-4 bg-slate-800/80 backdrop-blur-sm border-t border-slate-700/50",children:[w.jsx("h4",{className:"text-white mb-1",children:r.label}),w.jsx("p",{className:"text-sm text-slate-400",children:r.description})]})]}),e&&w.jsx("div",{className:"absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg z-10",children:w.jsx(ag,{className:"w-4 h-4 text-white"})})]})}function LR({concepts:r,selectedConcept:e,onSelectConcept:t,isGenerating:i,userInputs:o,onRandomize:l,onChangeTemplate:h,onUpdateTagline:f}){const g=r,[_,E]=Pe.useState(o.tagline||"");Pe.useEffect(()=>{E(o.tagline||"")},[o.tagline]);const A=q=>{const H=q.target.value;E(H),f&&f(H)},S=async()=>{try{const q=await PR(),H=F(),$=_.trim()||q.tagline,se={feel:q.feel,topic:q.topic,tagline:$,logo:H},fe=(await cc(q.feel,q.topic,4)).map((ve,xe)=>{const me=[{fontFamily:"Poppins",textPlacement:"center",logoPlacement:"top-left",textSize:"large",textAlign:"center",isItalic:!1,overlayColor:"#000000",overlayOpacity:.4,textColor:"#ffffff"},{fontFamily:"Space Grotesk",textPlacement:"top",logoPlacement:"bottom-right",textSize:"large",textAlign:"left",isItalic:!1,overlayColor:"#1e293b",overlayOpacity:.5,textColor:"#ffffff"},{fontFamily:"Inter",textPlacement:"bottom",logoPlacement:"top-right",textSize:"small",textAlign:"right",isItalic:!1,overlayColor:"#ffffff",overlayOpacity:.3,textColor:"#1e293b"},{fontFamily:"Playfair Display",textPlacement:"center",logoPlacement:"bottom-left",textSize:"large",textAlign:"center",isItalic:!0,overlayColor:"#4c1d95",overlayOpacity:.35,textColor:"#ffffff"}];return{id:`${Date.now()}-${xe}`,label:`${q.feel} ${xe+1}`,description:["Classic layout","Bold emphasis","Clean & simple","Artistic flair"][xe],imageUrl:ve.url,template:me[xe%me.length],tagline:$}});l(fe,se)}catch(q){console.error("Error in randomize:",q)}},F=()=>{const q=["⚡","🚀","💎","🌟","✨","🎯","🔥","💫"],H=q[Math.floor(Math.random()*q.length)],$=document.createElement("canvas");$.width=200,$.height=200;const se=$.getContext("2d");return se&&(se.fillStyle="#"+Math.floor(Math.random()*16777215).toString(16),se.beginPath(),se.arc(100,100,90,0,2*Math.PI),se.fill(),se.font="bold 80px Arial",se.textAlign="center",se.textBaseline="middle",se.fillStyle="#ffffff",se.fillText(H,100,100)),$.toDataURL()};return i?w.jsx("div",{className:"h-full flex items-center justify-center",children:w.jsxs("div",{className:"text-center",children:[w.jsxs("div",{className:"relative mb-6",children:[w.jsx("div",{className:"w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto",children:w.jsx(vE,{className:"w-10 h-10 text-white animate-spin"})}),w.jsx("div",{className:"absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 blur-xl opacity-50 animate-pulse"})]}),w.jsx("h3",{className:"text-xl text-white mb-2",children:"Creating your concepts..."}),w.jsx("p",{className:"text-slate-400",children:"AI is working its magic ✨"})]})}):g.length===0?w.jsx("div",{className:"h-full flex items-center justify-center p-12",children:w.jsxs("div",{className:"text-center max-w-md",children:[w.jsx("div",{className:"w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center mx-auto mb-6",children:w.jsx(ii,{className:"w-10 h-10 text-blue-400"})}),w.jsx("h3",{className:"text-xl text-white mb-2",children:"Ready to create"}),w.jsx("p",{className:"text-slate-400 mb-6",children:"Chat with Pulse AI to generate your personalized social media post concepts"}),w.jsx("div",{className:"flex flex-col sm:flex-row gap-3 justify-center",children:w.jsxs("button",{onClick:S,className:"px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center justify-center gap-2",children:[w.jsx(ug,{className:"w-5 h-5"}),"Randomize"]})})]})}):w.jsx("div",{className:"h-full overflow-y-auto p-4 md:p-8",children:w.jsxs("div",{className:"max-w-6xl mx-auto",children:[w.jsxs("div",{className:"mb-6 md:mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",children:[w.jsxs("div",{children:[w.jsx("h2",{className:"text-xl md:text-2xl text-white mb-2",children:"Your AI-Generated Concepts"}),w.jsx("p",{className:"text-sm md:text-base text-slate-400",children:"Click any concept to choose a template"})]}),w.jsxs("div",{className:"flex items-center gap-3 w-full sm:w-auto",children:[w.jsx("input",{type:"text",value:_,onChange:A,placeholder:"Enter tagline...",className:"flex-1 sm:w-64 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"}),w.jsxs("button",{onClick:S,className:"px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors flex items-center gap-2 text-sm flex-shrink-0",children:[w.jsx(ug,{className:"w-4 h-4"}),w.jsx("span",{className:"hidden sm:inline",children:"Randomize"})]})]})]}),w.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6",children:g.map(q=>w.jsx(MR,{concept:q,isSelected:e?.id===q.id,onSelect:()=>t(q),userLogo:o.logo,onChangeTemplate:h},q.id))})]})})}const jR="modulepreload",FR=function(r){return"/"+r},s_={},UR=function(e,t,i){let o=Promise.resolve();if(t&&t.length>0){let h=function(_){return Promise.all(_.map(E=>Promise.resolve(E).then(A=>({status:"fulfilled",value:A}),A=>({status:"rejected",reason:A}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),g=f?.nonce||f?.getAttribute("nonce");o=h(t.map(_=>{if(_=FR(_),_ in s_)return;s_[_]=!0;const E=_.endsWith(".css"),A=E?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${_}"]${A}`))return;const S=document.createElement("link");if(S.rel=E?"stylesheet":jR,E||(S.as="script"),S.crossOrigin="",S.href=_,g&&S.setAttribute("nonce",g),document.head.appendChild(S),E)return new Promise((F,q)=>{S.addEventListener("load",F),S.addEventListener("error",()=>q(new Error(`Unable to preload CSS for ${_}`)))})}))}function l(h){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=h,window.dispatchEvent(f),!f.defaultPrevented)throw h}return o.then(h=>{for(const f of h||[])f.status==="rejected"&&l(f.reason);return e().catch(l)})};function zR({concept:r,platform:e,userLogo:t}){const i=()=>{switch(r.template.logoPlacement){case"top-left":return"top-6 left-6";case"top-right":return"top-6 right-6";case"bottom-left":return"bottom-6 left-6";case"bottom-right":return"bottom-6 right-6";case"center":return"top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2";default:return"top-6 left-6"}},o=()=>{switch(r.template.textPlacement){case"top":return"justify-start pt-24";case"center":return"justify-center";case"bottom":return"justify-end pb-24";default:return"justify-center"}},l=()=>{switch(r.template.textAlign||"center"){case"left":return"text-left items-start";case"right":return"text-right items-end";case"center":return"text-center items-center";default:return"text-center items-center"}},h=()=>{switch(r.template.textSize||"large"){case"small":return"text-xl";case"medium":return"text-2xl";case"large":return"text-3xl";default:return"text-3xl"}},f=r.template.textColor||"#ffffff",g=r.template.isItalic||!1;return e==="instagram"?w.jsx("div",{className:"max-w-sm mx-auto",children:w.jsxs("div",{className:"bg-slate-900 rounded-3xl p-3 shadow-2xl border border-slate-700",children:[w.jsxs("div",{className:"flex items-center justify-between px-4 py-2 text-xs text-white mb-2",children:[w.jsx("span",{children:"9:41"}),w.jsxs("div",{className:"flex gap-1",children:[w.jsx("div",{className:"w-4 h-2 bg-white rounded-sm"}),w.jsx("div",{className:"w-4 h-2 bg-white rounded-sm"}),w.jsx("div",{className:"w-4 h-2 bg-white/50 rounded-sm"})]})]}),w.jsxs("div",{className:"flex items-center justify-between px-4 py-3 bg-slate-900",children:[w.jsxs("div",{className:"flex items-center gap-3",children:[w.jsx("div",{className:"w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 p-0.5",children:w.jsx("div",{className:"w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden",children:t?w.jsx("img",{src:t,alt:"Profile",className:"w-full h-full object-cover"}):w.jsx("div",{className:"w-full h-full bg-slate-700"})})}),w.jsx("span",{className:"text-sm text-white",children:"your_brand"})]}),w.jsx(sg,{className:"w-5 h-5 text-white"})]}),w.jsxs("div",{className:"relative aspect-square bg-slate-800",children:[w.jsx("img",{src:r.imageUrl,alt:r.label,className:"w-full h-full object-cover"}),w.jsx("div",{className:"absolute inset-0",style:{backgroundColor:r.template.overlayColor,opacity:r.template.overlayOpacity}}),t&&w.jsx("div",{className:`absolute ${i()} z-10`,children:w.jsx("img",{src:t,alt:"Logo",className:"w-16 h-16 object-contain",style:{filter:"drop-shadow(0 2px 8px rgba(0,0,0,0.3))"}})}),w.jsx("div",{className:`absolute inset-0 flex flex-col ${o()} ${l()} px-8`,children:w.jsx("h3",{className:`${h()} ${g?"italic":""}`,style:{fontFamily:r.template.fontFamily,color:f,textShadow:f==="#ffffff"||f==="white"?"0 2px 12px rgba(0,0,0,0.5)":"0 2px 12px rgba(255,255,255,0.5)"},children:r.tagline})})]}),w.jsxs("div",{className:"px-4 py-3 bg-slate-900",children:[w.jsxs("div",{className:"flex items-center justify-between mb-3",children:[w.jsxs("div",{className:"flex items-center gap-4",children:[w.jsx(ig,{className:"w-6 h-6 text-white"}),w.jsx(Du,{className:"w-6 h-6 text-white"}),w.jsx(o_,{className:"w-6 h-6 text-white"})]}),w.jsx(oE,{className:"w-6 h-6 text-white"})]}),w.jsx("p",{className:"text-sm text-white mb-1",children:"1,234 likes"}),w.jsxs("p",{className:"text-sm text-white",children:[w.jsx("span",{className:"font-medium",children:"your_brand"})," ",w.jsx("span",{className:"text-slate-400",children:r.tagline})]})]})]})}):e==="tiktok"?w.jsx("div",{className:"max-w-sm mx-auto",children:w.jsxs("div",{className:"bg-black rounded-3xl p-3 shadow-2xl border border-slate-700",children:[w.jsxs("div",{className:"flex items-center justify-between px-4 py-2 text-xs text-white mb-2",children:[w.jsx("span",{children:"9:41"}),w.jsxs("div",{className:"flex gap-1",children:[w.jsx("div",{className:"w-4 h-2 bg-white rounded-sm"}),w.jsx("div",{className:"w-4 h-2 bg-white rounded-sm"}),w.jsx("div",{className:"w-4 h-2 bg-white/50 rounded-sm"})]})]}),w.jsxs("div",{className:"relative aspect-[9/16] bg-black rounded-2xl overflow-hidden",children:[w.jsx("img",{src:r.imageUrl,alt:r.label,className:"w-full h-full object-cover"}),w.jsx("div",{className:"absolute inset-0",style:{backgroundColor:r.template.overlayColor,opacity:r.template.overlayOpacity}}),t&&w.jsx("div",{className:`absolute ${i()} z-10`,children:w.jsx("img",{src:t,alt:"Logo",className:"w-16 h-16 object-contain",style:{filter:"drop-shadow(0 2px 8px rgba(0,0,0,0.3))"}})}),w.jsx("div",{className:`absolute inset-0 flex flex-col ${o()} items-center px-8 text-center`,children:w.jsx("h3",{className:"text-white text-3xl",style:{fontFamily:r.template.fontFamily,textShadow:"0 2px 12px rgba(0,0,0,0.5)"},children:r.tagline})}),w.jsx("div",{className:"absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent",children:w.jsxs("div",{className:"flex items-end justify-between",children:[w.jsxs("div",{className:"flex-1",children:[w.jsx("p",{className:"text-white text-sm mb-2",children:"@your_brand"}),w.jsx("p",{className:"text-white text-xs",children:r.tagline})]}),w.jsxs("div",{className:"flex flex-col gap-4 items-center",children:[w.jsx("div",{className:"w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center",children:t?w.jsx("img",{src:t,alt:"Profile",className:"w-full h-full object-cover rounded-full"}):w.jsx("div",{className:"w-full h-full bg-slate-600 rounded-full"})}),w.jsxs("div",{className:"text-center",children:[w.jsx(ig,{className:"w-7 h-7 text-white mb-1"}),w.jsx("p",{className:"text-xs text-white",children:"12.3K"})]}),w.jsxs("div",{className:"text-center",children:[w.jsx(Du,{className:"w-7 h-7 text-white mb-1"}),w.jsx("p",{className:"text-xs text-white",children:"234"})]}),w.jsxs("div",{className:"text-center",children:[w.jsx(lg,{className:"w-7 h-7 text-white mb-1"}),w.jsx("p",{className:"text-xs text-white",children:"456"})]})]})]})})]})]})}):w.jsx("div",{className:"max-w-sm mx-auto",children:w.jsxs("div",{className:"bg-slate-900 rounded-3xl p-3 shadow-2xl border border-slate-700",children:[w.jsxs("div",{className:"flex items-center justify-between px-4 py-2 text-xs text-white mb-2",children:[w.jsx("span",{children:"9:41"}),w.jsxs("div",{className:"flex gap-1",children:[w.jsx("div",{className:"w-4 h-2 bg-white rounded-sm"}),w.jsx("div",{className:"w-4 h-2 bg-white rounded-sm"}),w.jsx("div",{className:"w-4 h-2 bg-white/50 rounded-sm"})]})]}),w.jsxs("div",{className:"px-4 py-3 bg-slate-900",children:[w.jsxs("div",{className:"flex items-center justify-between mb-3",children:[w.jsxs("div",{className:"flex items-center gap-3",children:[w.jsx("div",{className:"w-10 h-10 rounded-full bg-slate-700 overflow-hidden",children:t?w.jsx("img",{src:t,alt:"Profile",className:"w-full h-full object-cover"}):w.jsx("div",{className:"w-full h-full bg-slate-600"})}),w.jsxs("div",{children:[w.jsx("p",{className:"text-sm text-white",children:"Your Brand"}),w.jsx("p",{className:"text-xs text-slate-400",children:"Just now · 🌎"})]})]}),w.jsx(sg,{className:"w-5 h-5 text-slate-400"})]}),w.jsx("p",{className:"text-sm text-white mb-3",children:r.tagline})]}),w.jsxs("div",{className:"relative aspect-square bg-slate-800",children:[w.jsx("img",{src:r.imageUrl,alt:r.label,className:"w-full h-full object-cover"}),w.jsx("div",{className:"absolute inset-0",style:{backgroundColor:r.template.overlayColor,opacity:r.template.overlayOpacity}}),t&&w.jsx("div",{className:`absolute ${i()} z-10`,children:w.jsx("img",{src:t,alt:"Logo",className:"w-16 h-16 object-contain",style:{filter:"drop-shadow(0 2px 8px rgba(0,0,0,0.3))"}})}),w.jsx("div",{className:`absolute inset-0 flex flex-col ${o()} ${l()} px-10`,children:w.jsx("h3",{className:`${h()} ${g?"italic":""}`,style:{fontFamily:r.template.fontFamily,color:f,textShadow:f==="#ffffff"||f==="white"?"0 2px 12px rgba(0,0,0,0.4)":"0 2px 12px rgba(255,255,255,0.4)"},children:r.tagline})})]}),w.jsxs("div",{className:"px-4 py-3 bg-slate-900",children:[w.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-400 mb-3 pb-3 border-b border-slate-800",children:[w.jsx("span",{children:"👍 ❤️ 1.2K"}),w.jsx("span",{children:"234 comments · 56 shares"})]}),w.jsxs("div",{className:"flex items-center justify-around",children:[w.jsxs("button",{className:"flex items-center gap-2 text-slate-400 hover:text-white transition-colors",children:[w.jsx(bE,{className:"w-5 h-5"}),w.jsx("span",{className:"text-sm",children:"Like"})]}),w.jsxs("button",{className:"flex items-center gap-2 text-slate-400 hover:text-white transition-colors",children:[w.jsx(Du,{className:"w-5 h-5"}),w.jsx("span",{className:"text-sm",children:"Comment"})]}),w.jsxs("button",{className:"flex items-center gap-2 text-slate-400 hover:text-white transition-colors",children:[w.jsx(lg,{className:"w-5 h-5"}),w.jsx("span",{className:"text-sm",children:"Share"})]})]})]})]})})}const gn=[{id:"center-classic",name:"Center Classic",textPlacement:"center",logoPlacement:"top-left",fontFamily:"Poppins",textSize:"large",textAlign:"center",isItalic:!1,overlayColor:"#000000",overlayOpacity:.5,textColor:"#ffffff"},{id:"top-bold",name:"Top Bold",textPlacement:"top",logoPlacement:"bottom-right",fontFamily:"Space Grotesk",textSize:"large",textAlign:"left",isItalic:!1,overlayColor:"#1e293b",overlayOpacity:.7,textColor:"#ffffff"},{id:"bottom-minimal",name:"Bottom Minimal",textPlacement:"bottom",logoPlacement:"top-right",fontFamily:"Inter",textSize:"small",textAlign:"right",isItalic:!1,overlayColor:"#ffffff",overlayOpacity:.6,textColor:"#1e293b"},{id:"center-artistic",name:"Center Artistic",textPlacement:"center",logoPlacement:"bottom-left",fontFamily:"Playfair Display",textSize:"large",textAlign:"center",isItalic:!0,overlayColor:"#4c1d95",overlayOpacity:.5,textColor:"#ffffff"},{id:"top-clean",name:"Top Clean",textPlacement:"top",logoPlacement:"top-right",fontFamily:"Inter",textSize:"medium",textAlign:"center",isItalic:!1,overlayColor:"#f1f5f9",overlayOpacity:.75,textColor:"#0f172a"},{id:"bottom-creative",name:"Bottom Creative",textPlacement:"bottom",logoPlacement:"bottom-right",fontFamily:"Satisfy",textSize:"medium",textAlign:"left",isItalic:!0,overlayColor:"#000000",overlayOpacity:.4,textColor:"#ffffff"},{id:"center-elegant",name:"Center Elegant",textPlacement:"center",logoPlacement:"top-right",fontFamily:"Playfair Display",textSize:"medium",textAlign:"center",isItalic:!1,overlayColor:"#f8fafc",overlayOpacity:.8,textColor:"#0f172a"},{id:"top-modern",name:"Top Modern",textPlacement:"top",logoPlacement:"bottom-left",fontFamily:"Space Grotesk",textSize:"medium",textAlign:"left",isItalic:!1,overlayColor:"#334155",overlayOpacity:.65,textColor:"#ffffff"},{id:"bottom-bold",name:"Bottom Bold",textPlacement:"bottom",logoPlacement:"top-left",fontFamily:"Poppins",textSize:"large",textAlign:"left",isItalic:!1,overlayColor:"#0f172a",overlayOpacity:.6,textColor:"#ffffff"},{id:"center-script",name:"Center Script",textPlacement:"center",logoPlacement:"bottom-right",fontFamily:"Satisfy",textSize:"large",textAlign:"center",isItalic:!0,overlayColor:"#312e81",overlayOpacity:.55,textColor:"#ffffff"},{id:"top-light",name:"Top Light",textPlacement:"top",logoPlacement:"top-left",fontFamily:"Inter",textSize:"small",textAlign:"right",isItalic:!1,overlayColor:"#e0e7ff",overlayOpacity:.7,textColor:"#1e1b4b"},{id:"bottom-elegant",name:"Bottom Elegant",textPlacement:"bottom",logoPlacement:"bottom-left",fontFamily:"Playfair Display",textSize:"medium",textAlign:"right",isItalic:!0,overlayColor:"#fef3c7",overlayOpacity:.65,textColor:"#78350f"}],BR=()=>gn.reduce((r,e)=>{const{id:t,name:i,...o}=e;return r[t]=o,r},{});function $R({concept:r,userLogo:e,onBackToGallery:t,showArrowIndicator:i,showPreviewFlash:o}){const[l,h]=Pe.useState("instagram"),[f,g]=Pe.useState(0),[_,E]=Pe.useState(null),[A,S]=Pe.useState(null),[F,q]=Pe.useState(!1),H=Pe.useRef(null),$=50;Pe.useEffect(()=>{if(r?.template){const I=gn.findIndex(_e=>_e.fontFamily===r.template.fontFamily&&_e.textPlacement===r.template.textPlacement&&_e.logoPlacement===r.template.logoPlacement&&_e.textSize===r.template.textSize);I!==-1&&I!==f&&g(I)}},[r?.template]);const se=I=>{S(null),E(I.targetTouches[0].clientX)},ue=I=>{S(I.targetTouches[0].clientX)},fe=()=>{if(!_||!A)return;const I=_-A,_e=I>$,Me=I<-$;_e&&f<gn.length-1&&g(ze=>ze+1),Me&&f>0&&g(ze=>ze-1)},ve=I=>{S(null),E(I.clientX)},xe=I=>{_!==null&&S(I.clientX)},me=()=>{if(!_||!A)return;const I=_-A,_e=I>$,Me=I<-$;_e&&f<gn.length-1&&g(ze=>ze+1),Me&&f>0&&g(ze=>ze-1),E(null),S(null)},N=()=>{f<gn.length-1&&g(I=>I+1)},C=()=>{f>0&&g(I=>I-1)},R=async()=>{if(!(!H.current||!r)){q(!0);try{const I=(await UR(async()=>{const{default:ee}=await import("./html2canvas.esm-B0tyYwQk.js");return{default:ee}},[])).default,_e=H.current.querySelector(".aspect-square.bg-slate-800");if(!_e)throw console.error("Post element not found"),new Error("Could not find the post to download");console.log("📸 Capturing post element for download...");const Me=_e.cloneNode(!0);Me.style.position="absolute",Me.style.left="-9999px",document.body.appendChild(Me);const ze=ee=>{const X=window.getComputedStyle(ee),K=X.backgroundColor,b=X.color;K&&K!=="rgba(0, 0, 0, 0)"&&(ee.style.backgroundColor=K),b&&(ee.style.color=b),Array.from(ee.children).forEach(j=>ze(j))};ze(Me);const je=await I(Me,{backgroundColor:null,scale:3,logging:!1,useCORS:!0,allowTaint:!0,imageTimeout:0});document.body.removeChild(Me),console.log("✅ Canvas generated, dimensions:",je.width,"x",je.height),je.toBlob(ee=>{if(ee){const X=URL.createObjectURL(ee),K=document.createElement("a"),b=gn[f],j=`pulse-${r.label.replace(/\s+/g,"-").toLowerCase()}-${b.fontFamily}-${Date.now()}.png`;K.href=X,K.download=j,document.body.appendChild(K),K.click(),document.body.removeChild(K),URL.revokeObjectURL(X),console.log("✅ Download complete:",j)}q(!1)},"image/png")}catch(I){console.error("❌ Download failed:",I),alert("Failed to download image. Please try again."),q(!1)}}};if(!r)return w.jsx("div",{className:"h-full flex items-center justify-center p-8",children:w.jsxs("div",{className:"text-center max-w-xs",children:[t&&w.jsxs("button",{onClick:t,className:"md:hidden mb-4 px-4 py-2 bg-slate-800 text-white rounded-lg flex items-center gap-2 mx-auto hover:bg-slate-700 transition-colors",children:[w.jsx(rg,{className:"w-4 h-4"}),"Back to Gallery"]}),w.jsx("div",{className:"w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mx-auto mb-4",children:w.jsx(og,{className:"w-8 h-8 text-slate-600"})}),w.jsx("h3",{className:"text-lg text-white mb-2",children:"No concept selected"}),w.jsx("p",{className:"text-sm text-slate-400",children:"Select a concept from the gallery to preview it on different platforms"})]})});const O=[{id:"instagram",label:"Instagram",icon:og},{id:"tiktok",label:"TikTok",icon:null},{id:"facebook",label:"Facebook",icon:pE}],k=gn[f],V={...r,template:{...r.template,...k}};return w.jsxs("div",{className:"h-full flex flex-col relative",children:[o&&w.jsx("div",{className:"absolute inset-0 bg-green-500/30 z-50 pointer-events-none transition-opacity duration-1000",style:{animation:"flashFade 1s ease-out forwards"}}),w.jsxs("div",{className:"p-4 md:p-6 border-b border-slate-700/50",children:[t&&w.jsxs("button",{onClick:t,className:"md:hidden mb-4 px-3 py-2 bg-slate-800 text-white rounded-lg flex items-center gap-2 hover:bg-slate-700 transition-colors text-sm",children:[w.jsx(rg,{className:"w-4 h-4"}),"Back to Gallery"]}),w.jsxs("div",{className:"flex items-center justify-between mb-4",children:[w.jsx("h2",{className:"text-lg text-white",children:"Platform Preview"}),w.jsx("button",{onClick:R,disabled:F,className:"px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-lg text-sm font-medium transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",children:F?w.jsxs(w.Fragment,{children:[w.jsx("div",{className:"w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"}),"Downloading..."]}):w.jsxs(w.Fragment,{children:[w.jsx(hE,{className:"w-4 h-4"}),"Download PNG"]})})]}),w.jsx("div",{className:"flex gap-2",children:O.map(I=>{const _e=I.icon;return w.jsx("button",{onClick:()=>h(I.id),className:`flex-1 px-3 md:px-4 py-2.5 rounded-lg text-xs md:text-sm transition-all ${l===I.id?"bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg":"bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-300"}`,children:w.jsxs("div",{className:"flex items-center justify-center gap-2",children:[_e&&w.jsx(_e,{className:"w-4 h-4"}),!_e&&w.jsx("span",{className:"w-4 h-4 flex items-center justify-center",children:"📱"}),w.jsx("span",{className:"hidden sm:inline",children:I.label})]})},I.id)})})]}),w.jsxs("div",{className:"flex-1 overflow-hidden p-4 md:p-6 relative",ref:H,children:[w.jsxs("div",{className:"text-center mb-4",children:[w.jsx("p",{className:"text-white text-sm",children:k.name}),w.jsxs("p",{className:"text-slate-400 text-xs",children:["Swipe to change • ",f+1," / ",gn.length]})]}),w.jsx("div",{className:"flex justify-center gap-1.5 mb-6",children:gn.map((I,_e)=>w.jsx("button",{onClick:()=>g(_e),className:`w-2 h-2 rounded-full transition-all ${_e===f?"bg-blue-500 w-6":"bg-slate-700 hover:bg-slate-600"}`},_e))}),w.jsx("div",{className:"select-none cursor-grab active:cursor-grabbing overflow-y-auto max-h-[calc(100vh-20rem)]","data-preview-content":!0,onTouchStart:se,onTouchMove:ue,onTouchEnd:fe,onMouseDown:ve,onMouseMove:xe,onMouseUp:me,onMouseLeave:()=>{E(null),S(null)},style:{touchAction:"pan-y"},children:w.jsx(zR,{concept:V,platform:l,userLogo:e})}),i&&w.jsxs(w.Fragment,{children:[w.jsx("div",{className:"hidden md:block absolute top-1/2 left-4 -translate-y-1/2 animate-pulse",children:w.jsx("button",{onClick:C,disabled:f===0,className:`bg-blue-500 text-white rounded-full p-3 shadow-lg transition-all ${f===0?"opacity-30 cursor-not-allowed":"hover:bg-blue-600 hover:scale-110"}`,children:w.jsx(nE,{className:"w-5 h-5"})})}),w.jsx("div",{className:"hidden md:block absolute top-1/2 right-4 -translate-y-1/2 animate-pulse",children:w.jsx("button",{onClick:N,disabled:f===gn.length-1,className:`bg-blue-500 text-white rounded-full p-3 shadow-lg transition-all ${f===gn.length-1?"opacity-30 cursor-not-allowed":"hover:bg-blue-600 hover:scale-110"}`,children:w.jsx(sE,{className:"w-5 h-5"})})}),w.jsxs("div",{className:"absolute top-20 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-full text-xs md:text-sm shadow-lg z-50 whitespace-nowrap",style:{animation:"tooltipFade 3s ease-out forwards"},children:[w.jsx("span",{className:"hidden md:inline",children:"← Swipe to check more templates →"}),w.jsx("span",{className:"md:hidden",children:"👆 Swipe to change template"})]})]})]})]})}function qR({concept:r,onClose:e,onSelectTemplate:t}){const i=f=>{switch(f){case"top-left":return"top-2 left-2";case"top-right":return"top-2 right-2";case"bottom-left":return"bottom-2 left-2";case"bottom-right":return"bottom-2 right-2";default:return"top-2 left-2"}},o=f=>{switch(f){case"top":return"justify-start pt-10";case"center":return"justify-center";case"bottom":return"justify-end pb-10";default:return"justify-center"}},l=f=>{switch(f){case"left":return"text-left items-start";case"right":return"text-right items-end";case"center":return"text-center items-center";default:return"text-center items-center"}},h=f=>{switch(f){case"small":return"text-[10px] md:text-xs";case"medium":return"text-xs md:text-sm";case"large":return"text-sm md:text-base";default:return"text-xs md:text-sm"}};return w.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm",onClick:e,children:w.jsxs("div",{className:"bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden",onClick:f=>f.stopPropagation(),children:[w.jsxs("div",{className:"flex items-center justify-between p-4 md:p-6 border-b border-slate-700/50",children:[w.jsxs("div",{children:[w.jsx("h2",{className:"text-lg md:text-xl text-white mb-1",children:"Choose Layout Template"}),w.jsx("p",{className:"text-sm text-slate-400",children:r.label})]}),w.jsx("button",{onClick:e,className:"p-2 hover:bg-slate-800 rounded-lg transition-colors",children:w.jsx(ME,{className:"w-5 h-5 text-slate-400"})})]}),w.jsx("div",{className:"p-4 md:p-6 overflow-y-auto max-h-[calc(90vh-180px)]",children:w.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4",children:gn.map(f=>w.jsxs("button",{onClick:()=>t(f.id),className:"group relative aspect-square rounded-lg overflow-hidden border-2 border-slate-700 hover:border-blue-500 transition-all hover:scale-105",children:[w.jsxs("div",{className:"relative w-full h-full",children:[w.jsx("img",{src:r.imageUrl,alt:f.name,className:"w-full h-full object-cover"}),w.jsx("div",{className:"absolute inset-0",style:{backgroundColor:f.overlayColor,opacity:f.overlayOpacity}}),r.logo&&w.jsx("div",{className:`absolute ${i(f.logoPlacement)} z-10`,children:w.jsx("img",{src:r.logo,alt:"Logo",className:"w-6 h-6 md:w-8 md:h-8 object-contain",style:{filter:"drop-shadow(0 2px 8px rgba(0,0,0,0.3))"}})}),w.jsx("div",{className:`absolute inset-0 flex flex-col ${o(f.textPlacement)} ${l(f.textAlign)} px-4`,children:w.jsx("p",{className:`${h(f.textSize)} ${f.isItalic?"italic":""}`,style:{fontFamily:f.fontFamily,color:f.textColor,textShadow:f.textColor==="#ffffff"?"0 2px 12px rgba(0,0,0,0.4)":"0 2px 12px rgba(255,255,255,0.4)"},children:r.tagline})}),w.jsx("div",{className:"absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/20 transition-all flex items-center justify-center",children:w.jsx("div",{className:"opacity-0 group-hover:opacity-100 transition-opacity bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full",children:w.jsx("p",{className:"text-white text-xs",children:"Select"})})})]}),w.jsx("div",{className:"absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent",children:w.jsx("p",{className:"text-white text-xs text-center",children:f.name})})]},f.id))})}),w.jsx("div",{className:"flex gap-3 p-4 md:p-6 border-t border-slate-700/50",children:w.jsx("button",{onClick:e,className:"flex-1 px-4 py-3 bg-slate-800 text-white rounded-xl hover:bg-slate-700 transition-colors",children:"Close"})})]})})}function HR(){const[r,e]=Pe.useState(null),[t,i]=Pe.useState([]),[o,l]=Pe.useState({}),[h,f]=Pe.useState(!1),[g,_]=Pe.useState(!0),[E,A]=Pe.useState(""),[S,F]=Pe.useState([]),[q,H]=Pe.useState("gallery"),[$,se]=Pe.useState([]),[ue,fe]=Pe.useState(0),[ve,xe]=Pe.useState(!1),[me,N]=Pe.useState(null),[C,R]=Pe.useState(!1),[O,k]=Pe.useState(!1),V=X=>{if(!me)return;const b=BR()[X],j={...me,template:{...me.template,...b}};i(Z=>Z.map(ne=>ne.id===j.id?j:ne)),e(j),H("preview"),xe(!1),_(!1),k(!0),setTimeout(()=>{k(!1)},1e3),R(!0),setTimeout(()=>{R(!1)},3e3)},I=X=>{l(K=>({...K,tagline:X})),i(K=>K.map(b=>({...b,tagline:X}))),r&&e(K=>K?{...K,tagline:X}:null)},_e=async(X,K=!1)=>{l(X),f(!0);try{let b=X.searchQuery;b||(X.nouns&&X.nouns.length>0?b=X.feel?`${X.feel} ${X.nouns.join(" ")}`:X.nouns.join(" "):b=`${X.feel||"minimal"} ${X.topic||"social media"}`),K||(A(b),F([b])),console.log("🎨 App.tsx generating with query:",b);const j=await cc(b,"",10);console.log("🖼️ Fetched images from Unsplash:",j),K||(se(j),fe(0));const Z=[{fontFamily:"Poppins",textPlacement:"center",logoPlacement:"top-left",textSize:"large",textAlign:"center",isItalic:!1,overlayColor:"#000000",overlayOpacity:.25,textColor:"#ffffff"},{fontFamily:"Space Grotesk",textPlacement:"top",logoPlacement:"bottom-right",textSize:"large",textAlign:"left",isItalic:!1,overlayColor:"#1e293b",overlayOpacity:.3,textColor:"#ffffff"},{fontFamily:"Inter",textPlacement:"bottom",logoPlacement:"top-right",textSize:"small",textAlign:"right",isItalic:!1,overlayColor:"#ffffff",overlayOpacity:.2,textColor:"#1e293b"},{fontFamily:"Playfair Display",textPlacement:"center",logoPlacement:"bottom-left",textSize:"large",textAlign:"center",isItalic:!0,overlayColor:"#4c1d95",overlayOpacity:.25,textColor:"#ffffff"}],Ee=j.slice(0,4).map((Se,Ne)=>({id:`${Date.now()}-${Ne}`,label:`${X.feel||"Concept"} ${Ne+1}`,description:["Classic layout","Bold emphasis","Clean & simple","Artistic flair"][Ne],imageUrl:Se.url,template:Z[Ne%Z.length],tagline:X.tagline||""}));i(Ee),e(Ee[0])}catch(b){console.error("Error generating concepts:",b),i([])}finally{f(!1)}},Me=async()=>{if(!(!E||!o)){f(!0);try{const X=ue+4;if(X<$.length){console.log("🔄 Showing next 4 results from cache (",X,"to",X+4,")");const K=$.slice(X,X+4);fe(X);const b=[{fontFamily:"Poppins",textPlacement:"center",logoPlacement:"top-left",textSize:"large",textAlign:"center",isItalic:!1,overlayColor:"#000000",overlayOpacity:.25,textColor:"#ffffff"},{fontFamily:"Space Grotesk",textPlacement:"top",logoPlacement:"bottom-right",textSize:"large",textAlign:"left",isItalic:!1,overlayColor:"#1e293b",overlayOpacity:.3,textColor:"#ffffff"},{fontFamily:"Inter",textPlacement:"bottom",logoPlacement:"top-right",textSize:"small",textAlign:"right",isItalic:!1,overlayColor:"#ffffff",overlayOpacity:.2,textColor:"#1e293b"},{fontFamily:"Playfair Display",textPlacement:"center",logoPlacement:"bottom-left",textSize:"large",textAlign:"center",isItalic:!0,overlayColor:"#4c1d95",overlayOpacity:.25,textColor:"#ffffff"}],j=K.map((Z,ne)=>({id:`${Date.now()}-${ne}`,label:`${o.feel||"Concept"} ${ne+1}`,description:["Classic layout","Bold emphasis","Clean & simple","Artistic flair"][ne],imageUrl:Z.url,template:b[ne%b.length],tagline:o.tagline||""}));i(j),e(j[0]),f(!1)}else{console.log("🔄 All results cycled, generating new variation with AI...");const K=await kR(E,S);console.log("✨ Generated variation:",K),F([...S,K]);const b={...o,searchQuery:K};await _e(b,!0)}}catch(X){console.error("Error in handleTryAgain:",X),f(!1)}}},ze=async(X,K)=>{l(K),f(!0);try{const j=(await cc(K.feel||"minimal",K.topic||"social media",4)).map((Z,ne)=>({...X[ne],id:`${Date.now()}-${ne}`,imageUrl:Z.url}));i(j),j.length>0&&e(j[0])}catch(b){console.error("Error randomizing concepts:",b)}finally{f(!1)}},je=X=>{e(X),H("preview")},ee=X=>{N(X),xe(!0)};return w.jsxs("div",{className:"h-screen flex flex-col bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950",children:[w.jsx("header",{className:"border-b border-slate-800/50 bg-slate-900/80 backdrop-blur-sm",children:w.jsx("div",{className:"px-4 md:px-6 py-4 flex items-center justify-between",children:w.jsxs("div",{className:"flex items-center gap-3",children:[w.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center",children:w.jsx("span",{className:"text-white",children:"✨"})}),w.jsx("h1",{className:"text-xl text-white",children:"Pulse Studio"})]})})}),w.jsxs("div",{className:"flex-1 flex overflow-hidden",children:[w.jsx(VR,{onGenerate:_e,onTryAgain:Me,isGenerating:h,isExpanded:g,onToggleExpand:()=>_(!g),userInputs:o}),w.jsx("div",{className:`w-full md:w-3/5 overflow-hidden ${q==="preview"?"hidden md:block":"block"}`,children:w.jsx(LR,{concepts:t,selectedConcept:r,onSelectConcept:je,isGenerating:h,userInputs:o,onRandomize:ze,onChangeTemplate:ee,onUpdateTagline:I})}),w.jsx("div",{className:`w-full md:w-2/5 border-l border-slate-700/50 bg-slate-900/50 backdrop-blur-sm ${q==="gallery"?"hidden md:block":"block"}`,children:w.jsx($R,{concept:r,userLogo:o.logo,onBackToGallery:()=>H("gallery"),showArrowIndicator:C,showPreviewFlash:O})})]}),ve&&me&&w.jsx(qR,{concept:me,onClose:()=>xe(!1),onSelectTemplate:V})]})}Yw.createRoot(document.getElementById("root")).render(w.jsx(HR,{}));

(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Yl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Sx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Mx={exports:{}},Nu={},Ex={exports:{}},qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ea=Symbol.for("react.element"),NS=Symbol.for("react.portal"),US=Symbol.for("react.fragment"),FS=Symbol.for("react.strict_mode"),OS=Symbol.for("react.profiler"),zS=Symbol.for("react.provider"),BS=Symbol.for("react.context"),VS=Symbol.for("react.forward_ref"),HS=Symbol.for("react.suspense"),GS=Symbol.for("react.memo"),WS=Symbol.for("react.lazy"),dm=Symbol.iterator;function jS(t){return t===null||typeof t!="object"?null:(t=dm&&t[dm]||t["@@iterator"],typeof t=="function"?t:null)}var wx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Tx=Object.assign,bx={};function fo(t,e,n){this.props=t,this.context=e,this.refs=bx,this.updater=n||wx}fo.prototype.isReactComponent={};fo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};fo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ax(){}Ax.prototype=fo.prototype;function Rh(t,e,n){this.props=t,this.context=e,this.refs=bx,this.updater=n||wx}var Ph=Rh.prototype=new Ax;Ph.constructor=Rh;Tx(Ph,fo.prototype);Ph.isPureReactComponent=!0;var hm=Array.isArray,Cx=Object.prototype.hasOwnProperty,Lh={current:null},Rx={key:!0,ref:!0,__self:!0,__source:!0};function Px(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Cx.call(e,i)&&!Rx.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ea,type:t,key:s,ref:o,props:r,_owner:Lh.current}}function XS(t,e){return{$$typeof:Ea,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ih(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ea}function $S(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var pm=/\/+/g;function cc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?$S(""+t.key):e.toString(36)}function Rl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ea:case NS:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+cc(o,0):i,hm(r)?(n="",t!=null&&(n=t.replace(pm,"$&/")+"/"),Rl(r,e,n,"",function(u){return u})):r!=null&&(Ih(r)&&(r=XS(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(pm,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",hm(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+cc(s,a);o+=Rl(s,e,n,l,r)}else if(l=jS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+cc(s,a++),o+=Rl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Fa(t,e,n){if(t==null)return t;var i=[],r=0;return Rl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function qS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var mn={current:null},Pl={transition:null},YS={ReactCurrentDispatcher:mn,ReactCurrentBatchConfig:Pl,ReactCurrentOwner:Lh};function Lx(){throw Error("act(...) is not supported in production builds of React.")}qe.Children={map:Fa,forEach:function(t,e,n){Fa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Fa(t,function(){e++}),e},toArray:function(t){return Fa(t,function(e){return e})||[]},only:function(t){if(!Ih(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};qe.Component=fo;qe.Fragment=US;qe.Profiler=OS;qe.PureComponent=Rh;qe.StrictMode=FS;qe.Suspense=HS;qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=YS;qe.act=Lx;qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Tx({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Lh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Cx.call(e,l)&&!Rx.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Ea,type:t.type,key:r,ref:s,props:i,_owner:o}};qe.createContext=function(t){return t={$$typeof:BS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:zS,_context:t},t.Consumer=t};qe.createElement=Px;qe.createFactory=function(t){var e=Px.bind(null,t);return e.type=t,e};qe.createRef=function(){return{current:null}};qe.forwardRef=function(t){return{$$typeof:VS,render:t}};qe.isValidElement=Ih;qe.lazy=function(t){return{$$typeof:WS,_payload:{_status:-1,_result:t},_init:qS}};qe.memo=function(t,e){return{$$typeof:GS,type:t,compare:e===void 0?null:e}};qe.startTransition=function(t){var e=Pl.transition;Pl.transition={};try{t()}finally{Pl.transition=e}};qe.unstable_act=Lx;qe.useCallback=function(t,e){return mn.current.useCallback(t,e)};qe.useContext=function(t){return mn.current.useContext(t)};qe.useDebugValue=function(){};qe.useDeferredValue=function(t){return mn.current.useDeferredValue(t)};qe.useEffect=function(t,e){return mn.current.useEffect(t,e)};qe.useId=function(){return mn.current.useId()};qe.useImperativeHandle=function(t,e,n){return mn.current.useImperativeHandle(t,e,n)};qe.useInsertionEffect=function(t,e){return mn.current.useInsertionEffect(t,e)};qe.useLayoutEffect=function(t,e){return mn.current.useLayoutEffect(t,e)};qe.useMemo=function(t,e){return mn.current.useMemo(t,e)};qe.useReducer=function(t,e,n){return mn.current.useReducer(t,e,n)};qe.useRef=function(t){return mn.current.useRef(t)};qe.useState=function(t){return mn.current.useState(t)};qe.useSyncExternalStore=function(t,e,n){return mn.current.useSyncExternalStore(t,e,n)};qe.useTransition=function(){return mn.current.useTransition()};qe.version="18.3.1";Ex.exports=qe;var ot=Ex.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var KS=ot,ZS=Symbol.for("react.element"),QS=Symbol.for("react.fragment"),JS=Object.prototype.hasOwnProperty,e1=KS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,t1={key:!0,ref:!0,__self:!0,__source:!0};function Ix(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)JS.call(e,i)&&!t1.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:ZS,type:t,key:s,ref:o,props:r,_owner:e1.current}}Nu.Fragment=QS;Nu.jsx=Ix;Nu.jsxs=Ix;Mx.exports=Nu;var N=Mx.exports,Dx={exports:{}},Fn={},kx={exports:{}},Nx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(V,Y){var C=V.length;V.push(Y);e:for(;0<C;){var re=C-1>>>1,fe=V[re];if(0<r(fe,Y))V[re]=Y,V[C]=fe,C=re;else break e}}function n(V){return V.length===0?null:V[0]}function i(V){if(V.length===0)return null;var Y=V[0],C=V.pop();if(C!==Y){V[0]=C;e:for(var re=0,fe=V.length,I=fe>>>1;re<I;){var ke=2*(re+1)-1,Pe=V[ke],Q=ke+1,he=V[Q];if(0>r(Pe,C))Q<fe&&0>r(he,Pe)?(V[re]=he,V[Q]=C,re=Q):(V[re]=Pe,V[ke]=C,re=ke);else if(Q<fe&&0>r(he,C))V[re]=he,V[Q]=C,re=Q;else break e}}return Y}function r(V,Y){var C=V.sortIndex-Y.sortIndex;return C!==0?C:V.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],f=1,c=null,d=3,h=!1,m=!1,v=!1,x=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(V){for(var Y=n(u);Y!==null;){if(Y.callback===null)i(u);else if(Y.startTime<=V)i(u),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(u)}}function w(V){if(v=!1,_(V),!m)if(n(l)!==null)m=!0,G(A);else{var Y=n(u);Y!==null&&B(w,Y.startTime-V)}}function A(V,Y){m=!1,v&&(v=!1,p(S),S=-1),h=!0;var C=d;try{for(_(Y),c=n(l);c!==null&&(!(c.expirationTime>Y)||V&&!L());){var re=c.callback;if(typeof re=="function"){c.callback=null,d=c.priorityLevel;var fe=re(c.expirationTime<=Y);Y=t.unstable_now(),typeof fe=="function"?c.callback=fe:c===n(l)&&i(l),_(Y)}else i(l);c=n(l)}if(c!==null)var I=!0;else{var ke=n(u);ke!==null&&B(w,ke.startTime-Y),I=!1}return I}finally{c=null,d=C,h=!1}}var M=!1,R=null,S=-1,P=5,T=-1;function L(){return!(t.unstable_now()-T<P)}function D(){if(R!==null){var V=t.unstable_now();T=V;var Y=!0;try{Y=R(!0,V)}finally{Y?X():(M=!1,R=null)}}else M=!1}var X;if(typeof g=="function")X=function(){g(D)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,k=Z.port2;Z.port1.onmessage=D,X=function(){k.postMessage(null)}}else X=function(){x(D,0)};function G(V){R=V,M||(M=!0,X())}function B(V,Y){S=x(function(){V(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(V){V.callback=null},t.unstable_continueExecution=function(){m||h||(m=!0,G(A))},t.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<V?Math.floor(1e3/V):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(V){switch(d){case 1:case 2:case 3:var Y=3;break;default:Y=d}var C=d;d=Y;try{return V()}finally{d=C}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(V,Y){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var C=d;d=V;try{return Y()}finally{d=C}},t.unstable_scheduleCallback=function(V,Y,C){var re=t.unstable_now();switch(typeof C=="object"&&C!==null?(C=C.delay,C=typeof C=="number"&&0<C?re+C:re):C=re,V){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=C+fe,V={id:f++,callback:Y,priorityLevel:V,startTime:C,expirationTime:fe,sortIndex:-1},C>re?(V.sortIndex=C,e(u,V),n(l)===null&&V===n(u)&&(v?(p(S),S=-1):v=!0,B(w,C-re))):(V.sortIndex=fe,e(l,V),m||h||(m=!0,G(A))),V},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(V){var Y=d;return function(){var C=d;d=Y;try{return V.apply(this,arguments)}finally{d=C}}}})(Nx);kx.exports=Nx;var n1=kx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i1=ot,Un=n1;function oe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ux=new Set,na={};function us(t,e){Js(t,e),Js(t+"Capture",e)}function Js(t,e){for(na[t]=e,t=0;t<e.length;t++)Ux.add(e[t])}var Xi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),kf=Object.prototype.hasOwnProperty,r1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mm={},gm={};function s1(t){return kf.call(gm,t)?!0:kf.call(mm,t)?!1:r1.test(t)?gm[t]=!0:(mm[t]=!0,!1)}function o1(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function a1(t,e,n,i){if(e===null||typeof e>"u"||o1(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function gn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Zt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Zt[t]=new gn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Zt[e]=new gn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Zt[t]=new gn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Zt[t]=new gn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Zt[t]=new gn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Zt[t]=new gn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Zt[t]=new gn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Zt[t]=new gn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Zt[t]=new gn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Dh=/[\-:]([a-z])/g;function kh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Dh,kh);Zt[e]=new gn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Dh,kh);Zt[e]=new gn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Dh,kh);Zt[e]=new gn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Zt[t]=new gn(t,1,!1,t.toLowerCase(),null,!1,!1)});Zt.xlinkHref=new gn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Zt[t]=new gn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Nh(t,e,n,i){var r=Zt.hasOwnProperty(e)?Zt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(a1(e,n,r,i)&&(n=null),i||r===null?s1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Qi=i1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Oa=Symbol.for("react.element"),Is=Symbol.for("react.portal"),Ds=Symbol.for("react.fragment"),Uh=Symbol.for("react.strict_mode"),Nf=Symbol.for("react.profiler"),Fx=Symbol.for("react.provider"),Ox=Symbol.for("react.context"),Fh=Symbol.for("react.forward_ref"),Uf=Symbol.for("react.suspense"),Ff=Symbol.for("react.suspense_list"),Oh=Symbol.for("react.memo"),fr=Symbol.for("react.lazy"),zx=Symbol.for("react.offscreen"),xm=Symbol.iterator;function vo(t){return t===null||typeof t!="object"?null:(t=xm&&t[xm]||t["@@iterator"],typeof t=="function"?t:null)}var bt=Object.assign,fc;function Fo(t){if(fc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);fc=e&&e[1]||""}return`
`+fc+t}var dc=!1;function hc(t,e){if(!t||dc)return"";dc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{dc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Fo(t):""}function l1(t){switch(t.tag){case 5:return Fo(t.type);case 16:return Fo("Lazy");case 13:return Fo("Suspense");case 19:return Fo("SuspenseList");case 0:case 2:case 15:return t=hc(t.type,!1),t;case 11:return t=hc(t.type.render,!1),t;case 1:return t=hc(t.type,!0),t;default:return""}}function Of(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ds:return"Fragment";case Is:return"Portal";case Nf:return"Profiler";case Uh:return"StrictMode";case Uf:return"Suspense";case Ff:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ox:return(t.displayName||"Context")+".Consumer";case Fx:return(t._context.displayName||"Context")+".Provider";case Fh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Oh:return e=t.displayName||null,e!==null?e:Of(t.type)||"Memo";case fr:e=t._payload,t=t._init;try{return Of(t(e))}catch{}}return null}function u1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Of(e);case 8:return e===Uh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Bx(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function c1(t){var e=Bx(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function za(t){t._valueTracker||(t._valueTracker=c1(t))}function Vx(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Bx(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Kl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function zf(t,e){var n=e.checked;return bt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function _m(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Hx(t,e){e=e.checked,e!=null&&Nh(t,"checked",e,!1)}function Bf(t,e){Hx(t,e);var n=Ar(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Vf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Vf(t,e.type,Ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function vm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Vf(t,e,n){(e!=="number"||Kl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Oo=Array.isArray;function Ws(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ar(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Hf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(oe(91));return bt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ym(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(oe(92));if(Oo(n)){if(1<n.length)throw Error(oe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ar(n)}}function Gx(t,e){var n=Ar(e.value),i=Ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Sm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Wx(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Wx(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ba,jx=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ba=Ba||document.createElement("div"),Ba.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ba.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ia(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Wo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},f1=["Webkit","ms","Moz","O"];Object.keys(Wo).forEach(function(t){f1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Wo[e]=Wo[t]})});function Xx(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Wo.hasOwnProperty(t)&&Wo[t]?(""+e).trim():e+"px"}function $x(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Xx(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var d1=bt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wf(t,e){if(e){if(d1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(oe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(oe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(oe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(oe(62))}}function jf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xf=null;function zh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var $f=null,js=null,Xs=null;function Mm(t){if(t=ba(t)){if(typeof $f!="function")throw Error(oe(280));var e=t.stateNode;e&&(e=Bu(e),$f(t.stateNode,t.type,e))}}function qx(t){js?Xs?Xs.push(t):Xs=[t]:js=t}function Yx(){if(js){var t=js,e=Xs;if(Xs=js=null,Mm(t),e)for(t=0;t<e.length;t++)Mm(e[t])}}function Kx(t,e){return t(e)}function Zx(){}var pc=!1;function Qx(t,e,n){if(pc)return t(e,n);pc=!0;try{return Kx(t,e,n)}finally{pc=!1,(js!==null||Xs!==null)&&(Zx(),Yx())}}function ra(t,e){var n=t.stateNode;if(n===null)return null;var i=Bu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(oe(231,e,typeof n));return n}var qf=!1;if(Xi)try{var yo={};Object.defineProperty(yo,"passive",{get:function(){qf=!0}}),window.addEventListener("test",yo,yo),window.removeEventListener("test",yo,yo)}catch{qf=!1}function h1(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var jo=!1,Zl=null,Ql=!1,Yf=null,p1={onError:function(t){jo=!0,Zl=t}};function m1(t,e,n,i,r,s,o,a,l){jo=!1,Zl=null,h1.apply(p1,arguments)}function g1(t,e,n,i,r,s,o,a,l){if(m1.apply(this,arguments),jo){if(jo){var u=Zl;jo=!1,Zl=null}else throw Error(oe(198));Ql||(Ql=!0,Yf=u)}}function cs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Jx(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Em(t){if(cs(t)!==t)throw Error(oe(188))}function x1(t){var e=t.alternate;if(!e){if(e=cs(t),e===null)throw Error(oe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Em(r),t;if(s===i)return Em(r),e;s=s.sibling}throw Error(oe(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(oe(189))}}if(n.alternate!==i)throw Error(oe(190))}if(n.tag!==3)throw Error(oe(188));return n.stateNode.current===n?t:e}function e_(t){return t=x1(t),t!==null?t_(t):null}function t_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=t_(t);if(e!==null)return e;t=t.sibling}return null}var n_=Un.unstable_scheduleCallback,wm=Un.unstable_cancelCallback,_1=Un.unstable_shouldYield,v1=Un.unstable_requestPaint,kt=Un.unstable_now,y1=Un.unstable_getCurrentPriorityLevel,Bh=Un.unstable_ImmediatePriority,i_=Un.unstable_UserBlockingPriority,Jl=Un.unstable_NormalPriority,S1=Un.unstable_LowPriority,r_=Un.unstable_IdlePriority,Uu=null,Ei=null;function M1(t){if(Ei&&typeof Ei.onCommitFiberRoot=="function")try{Ei.onCommitFiberRoot(Uu,t,void 0,(t.current.flags&128)===128)}catch{}}var ai=Math.clz32?Math.clz32:T1,E1=Math.log,w1=Math.LN2;function T1(t){return t>>>=0,t===0?32:31-(E1(t)/w1|0)|0}var Va=64,Ha=4194304;function zo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function eu(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=zo(a):(s&=o,s!==0&&(i=zo(s)))}else o=n&~r,o!==0?i=zo(o):s!==0&&(i=zo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ai(e),r=1<<n,i|=t[n],e&=~r;return i}function b1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function A1(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ai(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=b1(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Kf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function s_(){var t=Va;return Va<<=1,!(Va&4194240)&&(Va=64),t}function mc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function wa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ai(e),t[e]=n}function C1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ai(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Vh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ai(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var at=0;function o_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var a_,Hh,l_,u_,c_,Zf=!1,Ga=[],vr=null,yr=null,Sr=null,sa=new Map,oa=new Map,hr=[],R1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Tm(t,e){switch(t){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":yr=null;break;case"mouseover":case"mouseout":Sr=null;break;case"pointerover":case"pointerout":sa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":oa.delete(e.pointerId)}}function So(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ba(e),e!==null&&Hh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function P1(t,e,n,i,r){switch(e){case"focusin":return vr=So(vr,t,e,n,i,r),!0;case"dragenter":return yr=So(yr,t,e,n,i,r),!0;case"mouseover":return Sr=So(Sr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return sa.set(s,So(sa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,oa.set(s,So(oa.get(s)||null,t,e,n,i,r)),!0}return!1}function f_(t){var e=Xr(t.target);if(e!==null){var n=cs(e);if(n!==null){if(e=n.tag,e===13){if(e=Jx(n),e!==null){t.blockedOn=e,c_(t.priority,function(){l_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ll(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Qf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Xf=i,n.target.dispatchEvent(i),Xf=null}else return e=ba(n),e!==null&&Hh(e),t.blockedOn=n,!1;e.shift()}return!0}function bm(t,e,n){Ll(t)&&n.delete(e)}function L1(){Zf=!1,vr!==null&&Ll(vr)&&(vr=null),yr!==null&&Ll(yr)&&(yr=null),Sr!==null&&Ll(Sr)&&(Sr=null),sa.forEach(bm),oa.forEach(bm)}function Mo(t,e){t.blockedOn===e&&(t.blockedOn=null,Zf||(Zf=!0,Un.unstable_scheduleCallback(Un.unstable_NormalPriority,L1)))}function aa(t){function e(r){return Mo(r,t)}if(0<Ga.length){Mo(Ga[0],t);for(var n=1;n<Ga.length;n++){var i=Ga[n];i.blockedOn===t&&(i.blockedOn=null)}}for(vr!==null&&Mo(vr,t),yr!==null&&Mo(yr,t),Sr!==null&&Mo(Sr,t),sa.forEach(e),oa.forEach(e),n=0;n<hr.length;n++)i=hr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<hr.length&&(n=hr[0],n.blockedOn===null);)f_(n),n.blockedOn===null&&hr.shift()}var $s=Qi.ReactCurrentBatchConfig,tu=!0;function I1(t,e,n,i){var r=at,s=$s.transition;$s.transition=null;try{at=1,Gh(t,e,n,i)}finally{at=r,$s.transition=s}}function D1(t,e,n,i){var r=at,s=$s.transition;$s.transition=null;try{at=4,Gh(t,e,n,i)}finally{at=r,$s.transition=s}}function Gh(t,e,n,i){if(tu){var r=Qf(t,e,n,i);if(r===null)Tc(t,e,i,nu,n),Tm(t,i);else if(P1(r,t,e,n,i))i.stopPropagation();else if(Tm(t,i),e&4&&-1<R1.indexOf(t)){for(;r!==null;){var s=ba(r);if(s!==null&&a_(s),s=Qf(t,e,n,i),s===null&&Tc(t,e,i,nu,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Tc(t,e,i,null,n)}}var nu=null;function Qf(t,e,n,i){if(nu=null,t=zh(i),t=Xr(t),t!==null)if(e=cs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Jx(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return nu=t,null}function d_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(y1()){case Bh:return 1;case i_:return 4;case Jl:case S1:return 16;case r_:return 536870912;default:return 16}default:return 16}}var gr=null,Wh=null,Il=null;function h_(){if(Il)return Il;var t,e=Wh,n=e.length,i,r="value"in gr?gr.value:gr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Il=r.slice(t,1<i?1-i:void 0)}function Dl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Wa(){return!0}function Am(){return!1}function On(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Wa:Am,this.isPropagationStopped=Am,this}return bt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Wa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Wa)},persist:function(){},isPersistent:Wa}),e}var ho={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jh=On(ho),Ta=bt({},ho,{view:0,detail:0}),k1=On(Ta),gc,xc,Eo,Fu=bt({},Ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Eo&&(Eo&&t.type==="mousemove"?(gc=t.screenX-Eo.screenX,xc=t.screenY-Eo.screenY):xc=gc=0,Eo=t),gc)},movementY:function(t){return"movementY"in t?t.movementY:xc}}),Cm=On(Fu),N1=bt({},Fu,{dataTransfer:0}),U1=On(N1),F1=bt({},Ta,{relatedTarget:0}),_c=On(F1),O1=bt({},ho,{animationName:0,elapsedTime:0,pseudoElement:0}),z1=On(O1),B1=bt({},ho,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),V1=On(B1),H1=bt({},ho,{data:0}),Rm=On(H1),G1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},W1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},j1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function X1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=j1[t])?!!e[t]:!1}function Xh(){return X1}var $1=bt({},Ta,{key:function(t){if(t.key){var e=G1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Dl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?W1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xh,charCode:function(t){return t.type==="keypress"?Dl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Dl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),q1=On($1),Y1=bt({},Fu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pm=On(Y1),K1=bt({},Ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xh}),Z1=On(K1),Q1=bt({},ho,{propertyName:0,elapsedTime:0,pseudoElement:0}),J1=On(Q1),eM=bt({},Fu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),tM=On(eM),nM=[9,13,27,32],$h=Xi&&"CompositionEvent"in window,Xo=null;Xi&&"documentMode"in document&&(Xo=document.documentMode);var iM=Xi&&"TextEvent"in window&&!Xo,p_=Xi&&(!$h||Xo&&8<Xo&&11>=Xo),Lm=" ",Im=!1;function m_(t,e){switch(t){case"keyup":return nM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function g_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ks=!1;function rM(t,e){switch(t){case"compositionend":return g_(e);case"keypress":return e.which!==32?null:(Im=!0,Lm);case"textInput":return t=e.data,t===Lm&&Im?null:t;default:return null}}function sM(t,e){if(ks)return t==="compositionend"||!$h&&m_(t,e)?(t=h_(),Il=Wh=gr=null,ks=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return p_&&e.locale!=="ko"?null:e.data;default:return null}}var oM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!oM[t.type]:e==="textarea"}function x_(t,e,n,i){qx(i),e=iu(e,"onChange"),0<e.length&&(n=new jh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var $o=null,la=null;function aM(t){C_(t,0)}function Ou(t){var e=Fs(t);if(Vx(e))return t}function lM(t,e){if(t==="change")return e}var __=!1;if(Xi){var vc;if(Xi){var yc="oninput"in document;if(!yc){var km=document.createElement("div");km.setAttribute("oninput","return;"),yc=typeof km.oninput=="function"}vc=yc}else vc=!1;__=vc&&(!document.documentMode||9<document.documentMode)}function Nm(){$o&&($o.detachEvent("onpropertychange",v_),la=$o=null)}function v_(t){if(t.propertyName==="value"&&Ou(la)){var e=[];x_(e,la,t,zh(t)),Qx(aM,e)}}function uM(t,e,n){t==="focusin"?(Nm(),$o=e,la=n,$o.attachEvent("onpropertychange",v_)):t==="focusout"&&Nm()}function cM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ou(la)}function fM(t,e){if(t==="click")return Ou(e)}function dM(t,e){if(t==="input"||t==="change")return Ou(e)}function hM(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ci=typeof Object.is=="function"?Object.is:hM;function ua(t,e){if(ci(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!kf.call(e,r)||!ci(t[r],e[r]))return!1}return!0}function Um(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Fm(t,e){var n=Um(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Um(n)}}function y_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?y_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function S_(){for(var t=window,e=Kl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Kl(t.document)}return e}function qh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function pM(t){var e=S_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&y_(n.ownerDocument.documentElement,n)){if(i!==null&&qh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Fm(n,s);var o=Fm(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var mM=Xi&&"documentMode"in document&&11>=document.documentMode,Ns=null,Jf=null,qo=null,ed=!1;function Om(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ed||Ns==null||Ns!==Kl(i)||(i=Ns,"selectionStart"in i&&qh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),qo&&ua(qo,i)||(qo=i,i=iu(Jf,"onSelect"),0<i.length&&(e=new jh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ns)))}function ja(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Us={animationend:ja("Animation","AnimationEnd"),animationiteration:ja("Animation","AnimationIteration"),animationstart:ja("Animation","AnimationStart"),transitionend:ja("Transition","TransitionEnd")},Sc={},M_={};Xi&&(M_=document.createElement("div").style,"AnimationEvent"in window||(delete Us.animationend.animation,delete Us.animationiteration.animation,delete Us.animationstart.animation),"TransitionEvent"in window||delete Us.transitionend.transition);function zu(t){if(Sc[t])return Sc[t];if(!Us[t])return t;var e=Us[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in M_)return Sc[t]=e[n];return t}var E_=zu("animationend"),w_=zu("animationiteration"),T_=zu("animationstart"),b_=zu("transitionend"),A_=new Map,zm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pr(t,e){A_.set(t,e),us(e,[t])}for(var Mc=0;Mc<zm.length;Mc++){var Ec=zm[Mc],gM=Ec.toLowerCase(),xM=Ec[0].toUpperCase()+Ec.slice(1);Pr(gM,"on"+xM)}Pr(E_,"onAnimationEnd");Pr(w_,"onAnimationIteration");Pr(T_,"onAnimationStart");Pr("dblclick","onDoubleClick");Pr("focusin","onFocus");Pr("focusout","onBlur");Pr(b_,"onTransitionEnd");Js("onMouseEnter",["mouseout","mouseover"]);Js("onMouseLeave",["mouseout","mouseover"]);Js("onPointerEnter",["pointerout","pointerover"]);Js("onPointerLeave",["pointerout","pointerover"]);us("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));us("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));us("onBeforeInput",["compositionend","keypress","textInput","paste"]);us("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));us("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));us("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_M=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bo));function Bm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,g1(i,e,void 0,t),t.currentTarget=null}function C_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Bm(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Bm(r,a,u),s=l}}}if(Ql)throw t=Yf,Ql=!1,Yf=null,t}function yt(t,e){var n=e[sd];n===void 0&&(n=e[sd]=new Set);var i=t+"__bubble";n.has(i)||(R_(e,t,2,!1),n.add(i))}function wc(t,e,n){var i=0;e&&(i|=4),R_(n,t,i,e)}var Xa="_reactListening"+Math.random().toString(36).slice(2);function ca(t){if(!t[Xa]){t[Xa]=!0,Ux.forEach(function(n){n!=="selectionchange"&&(_M.has(n)||wc(n,!1,t),wc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Xa]||(e[Xa]=!0,wc("selectionchange",!1,e))}}function R_(t,e,n,i){switch(d_(e)){case 1:var r=I1;break;case 4:r=D1;break;default:r=Gh}n=r.bind(null,e,n,t),r=void 0,!qf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Tc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Xr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Qx(function(){var u=s,f=zh(n),c=[];e:{var d=A_.get(t);if(d!==void 0){var h=jh,m=t;switch(t){case"keypress":if(Dl(n)===0)break e;case"keydown":case"keyup":h=q1;break;case"focusin":m="focus",h=_c;break;case"focusout":m="blur",h=_c;break;case"beforeblur":case"afterblur":h=_c;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Cm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=U1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Z1;break;case E_:case w_:case T_:h=z1;break;case b_:h=J1;break;case"scroll":h=k1;break;case"wheel":h=tM;break;case"copy":case"cut":case"paste":h=V1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Pm}var v=(e&4)!==0,x=!v&&t==="scroll",p=v?d!==null?d+"Capture":null:d;v=[];for(var g=u,_;g!==null;){_=g;var w=_.stateNode;if(_.tag===5&&w!==null&&(_=w,p!==null&&(w=ra(g,p),w!=null&&v.push(fa(g,w,_)))),x)break;g=g.return}0<v.length&&(d=new h(d,m,null,n,f),c.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",h=t==="mouseout"||t==="pointerout",d&&n!==Xf&&(m=n.relatedTarget||n.fromElement)&&(Xr(m)||m[$i]))break e;if((h||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,h?(m=n.relatedTarget||n.toElement,h=u,m=m?Xr(m):null,m!==null&&(x=cs(m),m!==x||m.tag!==5&&m.tag!==6)&&(m=null)):(h=null,m=u),h!==m)){if(v=Cm,w="onMouseLeave",p="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(v=Pm,w="onPointerLeave",p="onPointerEnter",g="pointer"),x=h==null?d:Fs(h),_=m==null?d:Fs(m),d=new v(w,g+"leave",h,n,f),d.target=x,d.relatedTarget=_,w=null,Xr(f)===u&&(v=new v(p,g+"enter",m,n,f),v.target=_,v.relatedTarget=x,w=v),x=w,h&&m)t:{for(v=h,p=m,g=0,_=v;_;_=ms(_))g++;for(_=0,w=p;w;w=ms(w))_++;for(;0<g-_;)v=ms(v),g--;for(;0<_-g;)p=ms(p),_--;for(;g--;){if(v===p||p!==null&&v===p.alternate)break t;v=ms(v),p=ms(p)}v=null}else v=null;h!==null&&Vm(c,d,h,v,!1),m!==null&&x!==null&&Vm(c,x,m,v,!0)}}e:{if(d=u?Fs(u):window,h=d.nodeName&&d.nodeName.toLowerCase(),h==="select"||h==="input"&&d.type==="file")var A=lM;else if(Dm(d))if(__)A=dM;else{A=cM;var M=uM}else(h=d.nodeName)&&h.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(A=fM);if(A&&(A=A(t,u))){x_(c,A,n,f);break e}M&&M(t,d,u),t==="focusout"&&(M=d._wrapperState)&&M.controlled&&d.type==="number"&&Vf(d,"number",d.value)}switch(M=u?Fs(u):window,t){case"focusin":(Dm(M)||M.contentEditable==="true")&&(Ns=M,Jf=u,qo=null);break;case"focusout":qo=Jf=Ns=null;break;case"mousedown":ed=!0;break;case"contextmenu":case"mouseup":case"dragend":ed=!1,Om(c,n,f);break;case"selectionchange":if(mM)break;case"keydown":case"keyup":Om(c,n,f)}var R;if($h)e:{switch(t){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else ks?m_(t,n)&&(S="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(p_&&n.locale!=="ko"&&(ks||S!=="onCompositionStart"?S==="onCompositionEnd"&&ks&&(R=h_()):(gr=f,Wh="value"in gr?gr.value:gr.textContent,ks=!0)),M=iu(u,S),0<M.length&&(S=new Rm(S,t,null,n,f),c.push({event:S,listeners:M}),R?S.data=R:(R=g_(n),R!==null&&(S.data=R)))),(R=iM?rM(t,n):sM(t,n))&&(u=iu(u,"onBeforeInput"),0<u.length&&(f=new Rm("onBeforeInput","beforeinput",null,n,f),c.push({event:f,listeners:u}),f.data=R))}C_(c,e)})}function fa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function iu(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ra(t,n),s!=null&&i.unshift(fa(t,s,r)),s=ra(t,e),s!=null&&i.push(fa(t,s,r))),t=t.return}return i}function ms(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Vm(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=ra(n,s),l!=null&&o.unshift(fa(n,l,a))):r||(l=ra(n,s),l!=null&&o.push(fa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var vM=/\r\n?/g,yM=/\u0000|\uFFFD/g;function Hm(t){return(typeof t=="string"?t:""+t).replace(vM,`
`).replace(yM,"")}function $a(t,e,n){if(e=Hm(e),Hm(t)!==e&&n)throw Error(oe(425))}function ru(){}var td=null,nd=null;function id(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var rd=typeof setTimeout=="function"?setTimeout:void 0,SM=typeof clearTimeout=="function"?clearTimeout:void 0,Gm=typeof Promise=="function"?Promise:void 0,MM=typeof queueMicrotask=="function"?queueMicrotask:typeof Gm<"u"?function(t){return Gm.resolve(null).then(t).catch(EM)}:rd;function EM(t){setTimeout(function(){throw t})}function bc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),aa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);aa(e)}function Mr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Wm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var po=Math.random().toString(36).slice(2),yi="__reactFiber$"+po,da="__reactProps$"+po,$i="__reactContainer$"+po,sd="__reactEvents$"+po,wM="__reactListeners$"+po,TM="__reactHandles$"+po;function Xr(t){var e=t[yi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[$i]||n[yi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Wm(t);t!==null;){if(n=t[yi])return n;t=Wm(t)}return e}t=n,n=t.parentNode}return null}function ba(t){return t=t[yi]||t[$i],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Fs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(oe(33))}function Bu(t){return t[da]||null}var od=[],Os=-1;function Lr(t){return{current:t}}function St(t){0>Os||(t.current=od[Os],od[Os]=null,Os--)}function xt(t,e){Os++,od[Os]=t.current,t.current=e}var Cr={},ln=Lr(Cr),Sn=Lr(!1),es=Cr;function eo(t,e){var n=t.type.contextTypes;if(!n)return Cr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Mn(t){return t=t.childContextTypes,t!=null}function su(){St(Sn),St(ln)}function jm(t,e,n){if(ln.current!==Cr)throw Error(oe(168));xt(ln,e),xt(Sn,n)}function P_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(oe(108,u1(t)||"Unknown",r));return bt({},n,i)}function ou(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Cr,es=ln.current,xt(ln,t),xt(Sn,Sn.current),!0}function Xm(t,e,n){var i=t.stateNode;if(!i)throw Error(oe(169));n?(t=P_(t,e,es),i.__reactInternalMemoizedMergedChildContext=t,St(Sn),St(ln),xt(ln,t)):St(Sn),xt(Sn,n)}var Oi=null,Vu=!1,Ac=!1;function L_(t){Oi===null?Oi=[t]:Oi.push(t)}function bM(t){Vu=!0,L_(t)}function Ir(){if(!Ac&&Oi!==null){Ac=!0;var t=0,e=at;try{var n=Oi;for(at=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Oi=null,Vu=!1}catch(r){throw Oi!==null&&(Oi=Oi.slice(t+1)),n_(Bh,Ir),r}finally{at=e,Ac=!1}}return null}var zs=[],Bs=0,au=null,lu=0,Hn=[],Gn=0,ts=null,Bi=1,Vi="";function Br(t,e){zs[Bs++]=lu,zs[Bs++]=au,au=t,lu=e}function I_(t,e,n){Hn[Gn++]=Bi,Hn[Gn++]=Vi,Hn[Gn++]=ts,ts=t;var i=Bi;t=Vi;var r=32-ai(i)-1;i&=~(1<<r),n+=1;var s=32-ai(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Bi=1<<32-ai(e)+r|n<<r|i,Vi=s+t}else Bi=1<<s|n<<r|i,Vi=t}function Yh(t){t.return!==null&&(Br(t,1),I_(t,1,0))}function Kh(t){for(;t===au;)au=zs[--Bs],zs[Bs]=null,lu=zs[--Bs],zs[Bs]=null;for(;t===ts;)ts=Hn[--Gn],Hn[Gn]=null,Vi=Hn[--Gn],Hn[Gn]=null,Bi=Hn[--Gn],Hn[Gn]=null}var Dn=null,In=null,Et=!1,ri=null;function D_(t,e){var n=$n(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function $m(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Dn=t,In=Mr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Dn=t,In=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ts!==null?{id:Bi,overflow:Vi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=$n(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Dn=t,In=null,!0):!1;default:return!1}}function ad(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ld(t){if(Et){var e=In;if(e){var n=e;if(!$m(t,e)){if(ad(t))throw Error(oe(418));e=Mr(n.nextSibling);var i=Dn;e&&$m(t,e)?D_(i,n):(t.flags=t.flags&-4097|2,Et=!1,Dn=t)}}else{if(ad(t))throw Error(oe(418));t.flags=t.flags&-4097|2,Et=!1,Dn=t}}}function qm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Dn=t}function qa(t){if(t!==Dn)return!1;if(!Et)return qm(t),Et=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!id(t.type,t.memoizedProps)),e&&(e=In)){if(ad(t))throw k_(),Error(oe(418));for(;e;)D_(t,e),e=Mr(e.nextSibling)}if(qm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(oe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){In=Mr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}In=null}}else In=Dn?Mr(t.stateNode.nextSibling):null;return!0}function k_(){for(var t=In;t;)t=Mr(t.nextSibling)}function to(){In=Dn=null,Et=!1}function Zh(t){ri===null?ri=[t]:ri.push(t)}var AM=Qi.ReactCurrentBatchConfig;function wo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(oe(309));var i=n.stateNode}if(!i)throw Error(oe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(oe(284));if(!n._owner)throw Error(oe(290,t))}return t}function Ya(t,e){throw t=Object.prototype.toString.call(e),Error(oe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ym(t){var e=t._init;return e(t._payload)}function N_(t){function e(p,g){if(t){var _=p.deletions;_===null?(p.deletions=[g],p.flags|=16):_.push(g)}}function n(p,g){if(!t)return null;for(;g!==null;)e(p,g),g=g.sibling;return null}function i(p,g){for(p=new Map;g!==null;)g.key!==null?p.set(g.key,g):p.set(g.index,g),g=g.sibling;return p}function r(p,g){return p=br(p,g),p.index=0,p.sibling=null,p}function s(p,g,_){return p.index=_,t?(_=p.alternate,_!==null?(_=_.index,_<g?(p.flags|=2,g):_):(p.flags|=2,g)):(p.flags|=1048576,g)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,g,_,w){return g===null||g.tag!==6?(g=kc(_,p.mode,w),g.return=p,g):(g=r(g,_),g.return=p,g)}function l(p,g,_,w){var A=_.type;return A===Ds?f(p,g,_.props.children,w,_.key):g!==null&&(g.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===fr&&Ym(A)===g.type)?(w=r(g,_.props),w.ref=wo(p,g,_),w.return=p,w):(w=Bl(_.type,_.key,_.props,null,p.mode,w),w.ref=wo(p,g,_),w.return=p,w)}function u(p,g,_,w){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=Nc(_,p.mode,w),g.return=p,g):(g=r(g,_.children||[]),g.return=p,g)}function f(p,g,_,w,A){return g===null||g.tag!==7?(g=Jr(_,p.mode,w,A),g.return=p,g):(g=r(g,_),g.return=p,g)}function c(p,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return g=kc(""+g,p.mode,_),g.return=p,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Oa:return _=Bl(g.type,g.key,g.props,null,p.mode,_),_.ref=wo(p,null,g),_.return=p,_;case Is:return g=Nc(g,p.mode,_),g.return=p,g;case fr:var w=g._init;return c(p,w(g._payload),_)}if(Oo(g)||vo(g))return g=Jr(g,p.mode,_,null),g.return=p,g;Ya(p,g)}return null}function d(p,g,_,w){var A=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return A!==null?null:a(p,g,""+_,w);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Oa:return _.key===A?l(p,g,_,w):null;case Is:return _.key===A?u(p,g,_,w):null;case fr:return A=_._init,d(p,g,A(_._payload),w)}if(Oo(_)||vo(_))return A!==null?null:f(p,g,_,w,null);Ya(p,_)}return null}function h(p,g,_,w,A){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(_)||null,a(g,p,""+w,A);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Oa:return p=p.get(w.key===null?_:w.key)||null,l(g,p,w,A);case Is:return p=p.get(w.key===null?_:w.key)||null,u(g,p,w,A);case fr:var M=w._init;return h(p,g,_,M(w._payload),A)}if(Oo(w)||vo(w))return p=p.get(_)||null,f(g,p,w,A,null);Ya(g,w)}return null}function m(p,g,_,w){for(var A=null,M=null,R=g,S=g=0,P=null;R!==null&&S<_.length;S++){R.index>S?(P=R,R=null):P=R.sibling;var T=d(p,R,_[S],w);if(T===null){R===null&&(R=P);break}t&&R&&T.alternate===null&&e(p,R),g=s(T,g,S),M===null?A=T:M.sibling=T,M=T,R=P}if(S===_.length)return n(p,R),Et&&Br(p,S),A;if(R===null){for(;S<_.length;S++)R=c(p,_[S],w),R!==null&&(g=s(R,g,S),M===null?A=R:M.sibling=R,M=R);return Et&&Br(p,S),A}for(R=i(p,R);S<_.length;S++)P=h(R,p,S,_[S],w),P!==null&&(t&&P.alternate!==null&&R.delete(P.key===null?S:P.key),g=s(P,g,S),M===null?A=P:M.sibling=P,M=P);return t&&R.forEach(function(L){return e(p,L)}),Et&&Br(p,S),A}function v(p,g,_,w){var A=vo(_);if(typeof A!="function")throw Error(oe(150));if(_=A.call(_),_==null)throw Error(oe(151));for(var M=A=null,R=g,S=g=0,P=null,T=_.next();R!==null&&!T.done;S++,T=_.next()){R.index>S?(P=R,R=null):P=R.sibling;var L=d(p,R,T.value,w);if(L===null){R===null&&(R=P);break}t&&R&&L.alternate===null&&e(p,R),g=s(L,g,S),M===null?A=L:M.sibling=L,M=L,R=P}if(T.done)return n(p,R),Et&&Br(p,S),A;if(R===null){for(;!T.done;S++,T=_.next())T=c(p,T.value,w),T!==null&&(g=s(T,g,S),M===null?A=T:M.sibling=T,M=T);return Et&&Br(p,S),A}for(R=i(p,R);!T.done;S++,T=_.next())T=h(R,p,S,T.value,w),T!==null&&(t&&T.alternate!==null&&R.delete(T.key===null?S:T.key),g=s(T,g,S),M===null?A=T:M.sibling=T,M=T);return t&&R.forEach(function(D){return e(p,D)}),Et&&Br(p,S),A}function x(p,g,_,w){if(typeof _=="object"&&_!==null&&_.type===Ds&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Oa:e:{for(var A=_.key,M=g;M!==null;){if(M.key===A){if(A=_.type,A===Ds){if(M.tag===7){n(p,M.sibling),g=r(M,_.props.children),g.return=p,p=g;break e}}else if(M.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===fr&&Ym(A)===M.type){n(p,M.sibling),g=r(M,_.props),g.ref=wo(p,M,_),g.return=p,p=g;break e}n(p,M);break}else e(p,M);M=M.sibling}_.type===Ds?(g=Jr(_.props.children,p.mode,w,_.key),g.return=p,p=g):(w=Bl(_.type,_.key,_.props,null,p.mode,w),w.ref=wo(p,g,_),w.return=p,p=w)}return o(p);case Is:e:{for(M=_.key;g!==null;){if(g.key===M)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){n(p,g.sibling),g=r(g,_.children||[]),g.return=p,p=g;break e}else{n(p,g);break}else e(p,g);g=g.sibling}g=Nc(_,p.mode,w),g.return=p,p=g}return o(p);case fr:return M=_._init,x(p,g,M(_._payload),w)}if(Oo(_))return m(p,g,_,w);if(vo(_))return v(p,g,_,w);Ya(p,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,g!==null&&g.tag===6?(n(p,g.sibling),g=r(g,_),g.return=p,p=g):(n(p,g),g=kc(_,p.mode,w),g.return=p,p=g),o(p)):n(p,g)}return x}var no=N_(!0),U_=N_(!1),uu=Lr(null),cu=null,Vs=null,Qh=null;function Jh(){Qh=Vs=cu=null}function ep(t){var e=uu.current;St(uu),t._currentValue=e}function ud(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function qs(t,e){cu=t,Qh=Vs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(yn=!0),t.firstContext=null)}function Yn(t){var e=t._currentValue;if(Qh!==t)if(t={context:t,memoizedValue:e,next:null},Vs===null){if(cu===null)throw Error(oe(308));Vs=t,cu.dependencies={lanes:0,firstContext:t}}else Vs=Vs.next=t;return e}var $r=null;function tp(t){$r===null?$r=[t]:$r.push(t)}function F_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,tp(e)):(n.next=r.next,r.next=n),e.interleaved=n,qi(t,i)}function qi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var dr=!1;function np(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function O_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Gi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Er(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,et&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,qi(t,n)}return r=i.interleaved,r===null?(e.next=e,tp(i)):(e.next=r.next,r.next=e),i.interleaved=e,qi(t,n)}function kl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Vh(t,n)}}function Km(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function fu(t,e,n,i){var r=t.updateQueue;dr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(s!==null){var c=r.baseState;o=0,f=u=l=null,a=s;do{var d=a.lane,h=a.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=t,v=a;switch(d=e,h=n,v.tag){case 1:if(m=v.payload,typeof m=="function"){c=m.call(h,c,d);break e}c=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=v.payload,d=typeof m=="function"?m.call(h,c,d):m,d==null)break e;c=bt({},c,d);break e;case 2:dr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else h={eventTime:h,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=h,l=c):f=f.next=h,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(f===null&&(l=c),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);is|=o,t.lanes=o,t.memoizedState=c}}function Zm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(oe(191,r));r.call(i)}}}var Aa={},wi=Lr(Aa),ha=Lr(Aa),pa=Lr(Aa);function qr(t){if(t===Aa)throw Error(oe(174));return t}function ip(t,e){switch(xt(pa,e),xt(ha,t),xt(wi,Aa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Gf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Gf(e,t)}St(wi),xt(wi,e)}function io(){St(wi),St(ha),St(pa)}function z_(t){qr(pa.current);var e=qr(wi.current),n=Gf(e,t.type);e!==n&&(xt(ha,t),xt(wi,n))}function rp(t){ha.current===t&&(St(wi),St(ha))}var wt=Lr(0);function du(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Cc=[];function sp(){for(var t=0;t<Cc.length;t++)Cc[t]._workInProgressVersionPrimary=null;Cc.length=0}var Nl=Qi.ReactCurrentDispatcher,Rc=Qi.ReactCurrentBatchConfig,ns=0,Tt=null,Vt=null,Xt=null,hu=!1,Yo=!1,ma=0,CM=0;function en(){throw Error(oe(321))}function op(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ci(t[n],e[n]))return!1;return!0}function ap(t,e,n,i,r,s){if(ns=s,Tt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Nl.current=t===null||t.memoizedState===null?IM:DM,t=n(i,r),Yo){s=0;do{if(Yo=!1,ma=0,25<=s)throw Error(oe(301));s+=1,Xt=Vt=null,e.updateQueue=null,Nl.current=kM,t=n(i,r)}while(Yo)}if(Nl.current=pu,e=Vt!==null&&Vt.next!==null,ns=0,Xt=Vt=Tt=null,hu=!1,e)throw Error(oe(300));return t}function lp(){var t=ma!==0;return ma=0,t}function xi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xt===null?Tt.memoizedState=Xt=t:Xt=Xt.next=t,Xt}function Kn(){if(Vt===null){var t=Tt.alternate;t=t!==null?t.memoizedState:null}else t=Vt.next;var e=Xt===null?Tt.memoizedState:Xt.next;if(e!==null)Xt=e,Vt=t;else{if(t===null)throw Error(oe(310));Vt=t,t={memoizedState:Vt.memoizedState,baseState:Vt.baseState,baseQueue:Vt.baseQueue,queue:Vt.queue,next:null},Xt===null?Tt.memoizedState=Xt=t:Xt=Xt.next=t}return Xt}function ga(t,e){return typeof e=="function"?e(t):e}function Pc(t){var e=Kn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=Vt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var f=u.lane;if((ns&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var c={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=c,o=i):l=l.next=c,Tt.lanes|=f,is|=f}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,ci(i,e.memoizedState)||(yn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Tt.lanes|=s,is|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Lc(t){var e=Kn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ci(s,e.memoizedState)||(yn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function B_(){}function V_(t,e){var n=Tt,i=Kn(),r=e(),s=!ci(i.memoizedState,r);if(s&&(i.memoizedState=r,yn=!0),i=i.queue,up(W_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Xt!==null&&Xt.memoizedState.tag&1){if(n.flags|=2048,xa(9,G_.bind(null,n,i,r,e),void 0,null),$t===null)throw Error(oe(349));ns&30||H_(n,e,r)}return r}function H_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Tt.updateQueue,e===null?(e={lastEffect:null,stores:null},Tt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function G_(t,e,n,i){e.value=n,e.getSnapshot=i,j_(e)&&X_(t)}function W_(t,e,n){return n(function(){j_(e)&&X_(t)})}function j_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ci(t,n)}catch{return!0}}function X_(t){var e=qi(t,1);e!==null&&li(e,t,1,-1)}function Qm(t){var e=xi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:t},e.queue=t,t=t.dispatch=LM.bind(null,Tt,t),[e.memoizedState,t]}function xa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Tt.updateQueue,e===null?(e={lastEffect:null,stores:null},Tt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function $_(){return Kn().memoizedState}function Ul(t,e,n,i){var r=xi();Tt.flags|=t,r.memoizedState=xa(1|e,n,void 0,i===void 0?null:i)}function Hu(t,e,n,i){var r=Kn();i=i===void 0?null:i;var s=void 0;if(Vt!==null){var o=Vt.memoizedState;if(s=o.destroy,i!==null&&op(i,o.deps)){r.memoizedState=xa(e,n,s,i);return}}Tt.flags|=t,r.memoizedState=xa(1|e,n,s,i)}function Jm(t,e){return Ul(8390656,8,t,e)}function up(t,e){return Hu(2048,8,t,e)}function q_(t,e){return Hu(4,2,t,e)}function Y_(t,e){return Hu(4,4,t,e)}function K_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Z_(t,e,n){return n=n!=null?n.concat([t]):null,Hu(4,4,K_.bind(null,e,t),n)}function cp(){}function Q_(t,e){var n=Kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&op(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function J_(t,e){var n=Kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&op(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function ev(t,e,n){return ns&21?(ci(n,e)||(n=s_(),Tt.lanes|=n,is|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,yn=!0),t.memoizedState=n)}function RM(t,e){var n=at;at=n!==0&&4>n?n:4,t(!0);var i=Rc.transition;Rc.transition={};try{t(!1),e()}finally{at=n,Rc.transition=i}}function tv(){return Kn().memoizedState}function PM(t,e,n){var i=Tr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},nv(t))iv(e,n);else if(n=F_(t,e,n,i),n!==null){var r=hn();li(n,t,i,r),rv(n,e,i)}}function LM(t,e,n){var i=Tr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(nv(t))iv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ci(a,o)){var l=e.interleaved;l===null?(r.next=r,tp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=F_(t,e,r,i),n!==null&&(r=hn(),li(n,t,i,r),rv(n,e,i))}}function nv(t){var e=t.alternate;return t===Tt||e!==null&&e===Tt}function iv(t,e){Yo=hu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function rv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Vh(t,n)}}var pu={readContext:Yn,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useInsertionEffect:en,useLayoutEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useMutableSource:en,useSyncExternalStore:en,useId:en,unstable_isNewReconciler:!1},IM={readContext:Yn,useCallback:function(t,e){return xi().memoizedState=[t,e===void 0?null:e],t},useContext:Yn,useEffect:Jm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ul(4194308,4,K_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ul(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ul(4,2,t,e)},useMemo:function(t,e){var n=xi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=xi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=PM.bind(null,Tt,t),[i.memoizedState,t]},useRef:function(t){var e=xi();return t={current:t},e.memoizedState=t},useState:Qm,useDebugValue:cp,useDeferredValue:function(t){return xi().memoizedState=t},useTransition:function(){var t=Qm(!1),e=t[0];return t=RM.bind(null,t[1]),xi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Tt,r=xi();if(Et){if(n===void 0)throw Error(oe(407));n=n()}else{if(n=e(),$t===null)throw Error(oe(349));ns&30||H_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Jm(W_.bind(null,i,s,t),[t]),i.flags|=2048,xa(9,G_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=xi(),e=$t.identifierPrefix;if(Et){var n=Vi,i=Bi;n=(i&~(1<<32-ai(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ma++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=CM++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},DM={readContext:Yn,useCallback:Q_,useContext:Yn,useEffect:up,useImperativeHandle:Z_,useInsertionEffect:q_,useLayoutEffect:Y_,useMemo:J_,useReducer:Pc,useRef:$_,useState:function(){return Pc(ga)},useDebugValue:cp,useDeferredValue:function(t){var e=Kn();return ev(e,Vt.memoizedState,t)},useTransition:function(){var t=Pc(ga)[0],e=Kn().memoizedState;return[t,e]},useMutableSource:B_,useSyncExternalStore:V_,useId:tv,unstable_isNewReconciler:!1},kM={readContext:Yn,useCallback:Q_,useContext:Yn,useEffect:up,useImperativeHandle:Z_,useInsertionEffect:q_,useLayoutEffect:Y_,useMemo:J_,useReducer:Lc,useRef:$_,useState:function(){return Lc(ga)},useDebugValue:cp,useDeferredValue:function(t){var e=Kn();return Vt===null?e.memoizedState=t:ev(e,Vt.memoizedState,t)},useTransition:function(){var t=Lc(ga)[0],e=Kn().memoizedState;return[t,e]},useMutableSource:B_,useSyncExternalStore:V_,useId:tv,unstable_isNewReconciler:!1};function ni(t,e){if(t&&t.defaultProps){e=bt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function cd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:bt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Gu={isMounted:function(t){return(t=t._reactInternals)?cs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=hn(),r=Tr(t),s=Gi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Er(t,s,r),e!==null&&(li(e,t,r,i),kl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=hn(),r=Tr(t),s=Gi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Er(t,s,r),e!==null&&(li(e,t,r,i),kl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=hn(),i=Tr(t),r=Gi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Er(t,r,i),e!==null&&(li(e,t,i,n),kl(e,t,i))}};function eg(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ua(n,i)||!ua(r,s):!0}function sv(t,e,n){var i=!1,r=Cr,s=e.contextType;return typeof s=="object"&&s!==null?s=Yn(s):(r=Mn(e)?es:ln.current,i=e.contextTypes,s=(i=i!=null)?eo(t,r):Cr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Gu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function tg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Gu.enqueueReplaceState(e,e.state,null)}function fd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},np(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Yn(s):(s=Mn(e)?es:ln.current,r.context=eo(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(cd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Gu.enqueueReplaceState(r,r.state,null),fu(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ro(t,e){try{var n="",i=e;do n+=l1(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Ic(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function dd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var NM=typeof WeakMap=="function"?WeakMap:Map;function ov(t,e,n){n=Gi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){gu||(gu=!0,Md=i),dd(t,e)},n}function av(t,e,n){n=Gi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){dd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){dd(t,e),typeof i!="function"&&(wr===null?wr=new Set([this]):wr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ng(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new NM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=YM.bind(null,t,e,n),e.then(t,t))}function ig(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function rg(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Gi(-1,1),e.tag=2,Er(n,e,1))),n.lanes|=1),t)}var UM=Qi.ReactCurrentOwner,yn=!1;function fn(t,e,n,i){e.child=t===null?U_(e,null,n,i):no(e,t.child,n,i)}function sg(t,e,n,i,r){n=n.render;var s=e.ref;return qs(e,r),i=ap(t,e,n,i,s,r),n=lp(),t!==null&&!yn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Yi(t,e,r)):(Et&&n&&Yh(e),e.flags|=1,fn(t,e,i,r),e.child)}function og(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!_p(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,lv(t,e,s,i,r)):(t=Bl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ua,n(o,i)&&t.ref===e.ref)return Yi(t,e,r)}return e.flags|=1,t=br(s,i),t.ref=e.ref,t.return=e,e.child=t}function lv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ua(s,i)&&t.ref===e.ref)if(yn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(yn=!0);else return e.lanes=t.lanes,Yi(t,e,r)}return hd(t,e,n,i,r)}function uv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},xt(Gs,Ln),Ln|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,xt(Gs,Ln),Ln|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,xt(Gs,Ln),Ln|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,xt(Gs,Ln),Ln|=i;return fn(t,e,r,n),e.child}function cv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function hd(t,e,n,i,r){var s=Mn(n)?es:ln.current;return s=eo(e,s),qs(e,r),n=ap(t,e,n,i,s,r),i=lp(),t!==null&&!yn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Yi(t,e,r)):(Et&&i&&Yh(e),e.flags|=1,fn(t,e,n,r),e.child)}function ag(t,e,n,i,r){if(Mn(n)){var s=!0;ou(e)}else s=!1;if(qs(e,r),e.stateNode===null)Fl(t,e),sv(e,n,i),fd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Yn(u):(u=Mn(n)?es:ln.current,u=eo(e,u));var f=n.getDerivedStateFromProps,c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&tg(e,o,i,u),dr=!1;var d=e.memoizedState;o.state=d,fu(e,i,o,r),l=e.memoizedState,a!==i||d!==l||Sn.current||dr?(typeof f=="function"&&(cd(e,n,f,i),l=e.memoizedState),(a=dr||eg(e,n,a,i,d,l,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,O_(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:ni(e.type,a),o.props=u,c=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Yn(l):(l=Mn(n)?es:ln.current,l=eo(e,l));var h=n.getDerivedStateFromProps;(f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==c||d!==l)&&tg(e,o,i,l),dr=!1,d=e.memoizedState,o.state=d,fu(e,i,o,r);var m=e.memoizedState;a!==c||d!==m||Sn.current||dr?(typeof h=="function"&&(cd(e,n,h,i),m=e.memoizedState),(u=dr||eg(e,n,u,i,d,m,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),o.props=i,o.state=m,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return pd(t,e,n,i,s,r)}function pd(t,e,n,i,r,s){cv(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Xm(e,n,!1),Yi(t,e,s);i=e.stateNode,UM.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=no(e,t.child,null,s),e.child=no(e,null,a,s)):fn(t,e,a,s),e.memoizedState=i.state,r&&Xm(e,n,!0),e.child}function fv(t){var e=t.stateNode;e.pendingContext?jm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&jm(t,e.context,!1),ip(t,e.containerInfo)}function lg(t,e,n,i,r){return to(),Zh(r),e.flags|=256,fn(t,e,n,i),e.child}var md={dehydrated:null,treeContext:null,retryLane:0};function gd(t){return{baseLanes:t,cachePool:null,transitions:null}}function dv(t,e,n){var i=e.pendingProps,r=wt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),xt(wt,r&1),t===null)return ld(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Xu(o,i,0,null),t=Jr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=gd(n),e.memoizedState=md,t):fp(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return FM(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=br(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=br(a,s):(s=Jr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?gd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=md,i}return s=t.child,t=s.sibling,i=br(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function fp(t,e){return e=Xu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ka(t,e,n,i){return i!==null&&Zh(i),no(e,t.child,null,n),t=fp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function FM(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Ic(Error(oe(422))),Ka(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Xu({mode:"visible",children:i.children},r,0,null),s=Jr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&no(e,t.child,null,o),e.child.memoizedState=gd(o),e.memoizedState=md,s);if(!(e.mode&1))return Ka(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(oe(419)),i=Ic(s,i,void 0),Ka(t,e,o,i)}if(a=(o&t.childLanes)!==0,yn||a){if(i=$t,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,qi(t,r),li(i,t,r,-1))}return xp(),i=Ic(Error(oe(421))),Ka(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=KM.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,In=Mr(r.nextSibling),Dn=e,Et=!0,ri=null,t!==null&&(Hn[Gn++]=Bi,Hn[Gn++]=Vi,Hn[Gn++]=ts,Bi=t.id,Vi=t.overflow,ts=e),e=fp(e,i.children),e.flags|=4096,e)}function ug(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),ud(t.return,e,n)}function Dc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function hv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(fn(t,e,i.children,n),i=wt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ug(t,n,e);else if(t.tag===19)ug(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(xt(wt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&du(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Dc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&du(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Dc(e,!0,n,null,s);break;case"together":Dc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Fl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Yi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),is|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(oe(153));if(e.child!==null){for(t=e.child,n=br(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=br(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function OM(t,e,n){switch(e.tag){case 3:fv(e),to();break;case 5:z_(e);break;case 1:Mn(e.type)&&ou(e);break;case 4:ip(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;xt(uu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(xt(wt,wt.current&1),e.flags|=128,null):n&e.child.childLanes?dv(t,e,n):(xt(wt,wt.current&1),t=Yi(t,e,n),t!==null?t.sibling:null);xt(wt,wt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return hv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),xt(wt,wt.current),i)break;return null;case 22:case 23:return e.lanes=0,uv(t,e,n)}return Yi(t,e,n)}var pv,xd,mv,gv;pv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xd=function(){};mv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,qr(wi.current);var s=null;switch(n){case"input":r=zf(t,r),i=zf(t,i),s=[];break;case"select":r=bt({},r,{value:void 0}),i=bt({},i,{value:void 0}),s=[];break;case"textarea":r=Hf(t,r),i=Hf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ru)}Wf(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(na.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(na.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&yt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};gv=function(t,e,n,i){n!==i&&(e.flags|=4)};function To(t,e){if(!Et)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function tn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function zM(t,e,n){var i=e.pendingProps;switch(Kh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(e),null;case 1:return Mn(e.type)&&su(),tn(e),null;case 3:return i=e.stateNode,io(),St(Sn),St(ln),sp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(qa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ri!==null&&(Td(ri),ri=null))),xd(t,e),tn(e),null;case 5:rp(e);var r=qr(pa.current);if(n=e.type,t!==null&&e.stateNode!=null)mv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(oe(166));return tn(e),null}if(t=qr(wi.current),qa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[yi]=e,i[da]=s,t=(e.mode&1)!==0,n){case"dialog":yt("cancel",i),yt("close",i);break;case"iframe":case"object":case"embed":yt("load",i);break;case"video":case"audio":for(r=0;r<Bo.length;r++)yt(Bo[r],i);break;case"source":yt("error",i);break;case"img":case"image":case"link":yt("error",i),yt("load",i);break;case"details":yt("toggle",i);break;case"input":_m(i,s),yt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},yt("invalid",i);break;case"textarea":ym(i,s),yt("invalid",i)}Wf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&$a(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&$a(i.textContent,a,t),r=["children",""+a]):na.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&yt("scroll",i)}switch(n){case"input":za(i),vm(i,s,!0);break;case"textarea":za(i),Sm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ru)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Wx(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[yi]=e,t[da]=i,pv(t,e,!1,!1),e.stateNode=t;e:{switch(o=jf(n,i),n){case"dialog":yt("cancel",t),yt("close",t),r=i;break;case"iframe":case"object":case"embed":yt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Bo.length;r++)yt(Bo[r],t);r=i;break;case"source":yt("error",t),r=i;break;case"img":case"image":case"link":yt("error",t),yt("load",t),r=i;break;case"details":yt("toggle",t),r=i;break;case"input":_m(t,i),r=zf(t,i),yt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=bt({},i,{value:void 0}),yt("invalid",t);break;case"textarea":ym(t,i),r=Hf(t,i),yt("invalid",t);break;default:r=i}Wf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?$x(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&jx(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ia(t,l):typeof l=="number"&&ia(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(na.hasOwnProperty(s)?l!=null&&s==="onScroll"&&yt("scroll",t):l!=null&&Nh(t,s,l,o))}switch(n){case"input":za(t),vm(t,i,!1);break;case"textarea":za(t),Sm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ar(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ws(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ws(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ru)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return tn(e),null;case 6:if(t&&e.stateNode!=null)gv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(oe(166));if(n=qr(pa.current),qr(wi.current),qa(e)){if(i=e.stateNode,n=e.memoizedProps,i[yi]=e,(s=i.nodeValue!==n)&&(t=Dn,t!==null))switch(t.tag){case 3:$a(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&$a(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[yi]=e,e.stateNode=i}return tn(e),null;case 13:if(St(wt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Et&&In!==null&&e.mode&1&&!(e.flags&128))k_(),to(),e.flags|=98560,s=!1;else if(s=qa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(oe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(oe(317));s[yi]=e}else to(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;tn(e),s=!1}else ri!==null&&(Td(ri),ri=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||wt.current&1?Ht===0&&(Ht=3):xp())),e.updateQueue!==null&&(e.flags|=4),tn(e),null);case 4:return io(),xd(t,e),t===null&&ca(e.stateNode.containerInfo),tn(e),null;case 10:return ep(e.type._context),tn(e),null;case 17:return Mn(e.type)&&su(),tn(e),null;case 19:if(St(wt),s=e.memoizedState,s===null)return tn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)To(s,!1);else{if(Ht!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=du(t),o!==null){for(e.flags|=128,To(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return xt(wt,wt.current&1|2),e.child}t=t.sibling}s.tail!==null&&kt()>so&&(e.flags|=128,i=!0,To(s,!1),e.lanes=4194304)}else{if(!i)if(t=du(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),To(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Et)return tn(e),null}else 2*kt()-s.renderingStartTime>so&&n!==1073741824&&(e.flags|=128,i=!0,To(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=kt(),e.sibling=null,n=wt.current,xt(wt,i?n&1|2:n&1),e):(tn(e),null);case 22:case 23:return gp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Ln&1073741824&&(tn(e),e.subtreeFlags&6&&(e.flags|=8192)):tn(e),null;case 24:return null;case 25:return null}throw Error(oe(156,e.tag))}function BM(t,e){switch(Kh(e),e.tag){case 1:return Mn(e.type)&&su(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return io(),St(Sn),St(ln),sp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return rp(e),null;case 13:if(St(wt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(oe(340));to()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return St(wt),null;case 4:return io(),null;case 10:return ep(e.type._context),null;case 22:case 23:return gp(),null;case 24:return null;default:return null}}var Za=!1,sn=!1,VM=typeof WeakSet=="function"?WeakSet:Set,we=null;function Hs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Rt(t,e,i)}else n.current=null}function _d(t,e,n){try{n()}catch(i){Rt(t,e,i)}}var cg=!1;function HM(t,e){if(td=tu,t=S_(),qh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,f=0,c=t,d=null;t:for(;;){for(var h;c!==n||r!==0&&c.nodeType!==3||(a=o+r),c!==s||i!==0&&c.nodeType!==3||(l=o+i),c.nodeType===3&&(o+=c.nodeValue.length),(h=c.firstChild)!==null;)d=c,c=h;for(;;){if(c===t)break t;if(d===n&&++u===r&&(a=o),d===s&&++f===i&&(l=o),(h=c.nextSibling)!==null)break;c=d,d=c.parentNode}c=h}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(nd={focusedElem:t,selectionRange:n},tu=!1,we=e;we!==null;)if(e=we,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,we=t;else for(;we!==null;){e=we;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var v=m.memoizedProps,x=m.memoizedState,p=e.stateNode,g=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:ni(e.type,v),x);p.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(w){Rt(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,we=t;break}we=e.return}return m=cg,cg=!1,m}function Ko(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&_d(e,n,s)}r=r.next}while(r!==i)}}function Wu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function vd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function xv(t){var e=t.alternate;e!==null&&(t.alternate=null,xv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[yi],delete e[da],delete e[sd],delete e[wM],delete e[TM])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function _v(t){return t.tag===5||t.tag===3||t.tag===4}function fg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||_v(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function yd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ru));else if(i!==4&&(t=t.child,t!==null))for(yd(t,e,n),t=t.sibling;t!==null;)yd(t,e,n),t=t.sibling}function Sd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Sd(t,e,n),t=t.sibling;t!==null;)Sd(t,e,n),t=t.sibling}var qt=null,ii=!1;function ir(t,e,n){for(n=n.child;n!==null;)vv(t,e,n),n=n.sibling}function vv(t,e,n){if(Ei&&typeof Ei.onCommitFiberUnmount=="function")try{Ei.onCommitFiberUnmount(Uu,n)}catch{}switch(n.tag){case 5:sn||Hs(n,e);case 6:var i=qt,r=ii;qt=null,ir(t,e,n),qt=i,ii=r,qt!==null&&(ii?(t=qt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):qt.removeChild(n.stateNode));break;case 18:qt!==null&&(ii?(t=qt,n=n.stateNode,t.nodeType===8?bc(t.parentNode,n):t.nodeType===1&&bc(t,n),aa(t)):bc(qt,n.stateNode));break;case 4:i=qt,r=ii,qt=n.stateNode.containerInfo,ii=!0,ir(t,e,n),qt=i,ii=r;break;case 0:case 11:case 14:case 15:if(!sn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&_d(n,e,o),r=r.next}while(r!==i)}ir(t,e,n);break;case 1:if(!sn&&(Hs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Rt(n,e,a)}ir(t,e,n);break;case 21:ir(t,e,n);break;case 22:n.mode&1?(sn=(i=sn)||n.memoizedState!==null,ir(t,e,n),sn=i):ir(t,e,n);break;default:ir(t,e,n)}}function dg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new VM),e.forEach(function(i){var r=ZM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Qn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:qt=a.stateNode,ii=!1;break e;case 3:qt=a.stateNode.containerInfo,ii=!0;break e;case 4:qt=a.stateNode.containerInfo,ii=!0;break e}a=a.return}if(qt===null)throw Error(oe(160));vv(s,o,r),qt=null,ii=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Rt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)yv(e,t),e=e.sibling}function yv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Qn(e,t),pi(t),i&4){try{Ko(3,t,t.return),Wu(3,t)}catch(v){Rt(t,t.return,v)}try{Ko(5,t,t.return)}catch(v){Rt(t,t.return,v)}}break;case 1:Qn(e,t),pi(t),i&512&&n!==null&&Hs(n,n.return);break;case 5:if(Qn(e,t),pi(t),i&512&&n!==null&&Hs(n,n.return),t.flags&32){var r=t.stateNode;try{ia(r,"")}catch(v){Rt(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Hx(r,s),jf(a,o);var u=jf(a,s);for(o=0;o<l.length;o+=2){var f=l[o],c=l[o+1];f==="style"?$x(r,c):f==="dangerouslySetInnerHTML"?jx(r,c):f==="children"?ia(r,c):Nh(r,f,c,u)}switch(a){case"input":Bf(r,s);break;case"textarea":Gx(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var h=s.value;h!=null?Ws(r,!!s.multiple,h,!1):d!==!!s.multiple&&(s.defaultValue!=null?Ws(r,!!s.multiple,s.defaultValue,!0):Ws(r,!!s.multiple,s.multiple?[]:"",!1))}r[da]=s}catch(v){Rt(t,t.return,v)}}break;case 6:if(Qn(e,t),pi(t),i&4){if(t.stateNode===null)throw Error(oe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(v){Rt(t,t.return,v)}}break;case 3:if(Qn(e,t),pi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{aa(e.containerInfo)}catch(v){Rt(t,t.return,v)}break;case 4:Qn(e,t),pi(t);break;case 13:Qn(e,t),pi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(pp=kt())),i&4&&dg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(sn=(u=sn)||f,Qn(e,t),sn=u):Qn(e,t),pi(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(we=t,f=t.child;f!==null;){for(c=we=f;we!==null;){switch(d=we,h=d.child,d.tag){case 0:case 11:case 14:case 15:Ko(4,d,d.return);break;case 1:Hs(d,d.return);var m=d.stateNode;if(typeof m.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(v){Rt(i,n,v)}}break;case 5:Hs(d,d.return);break;case 22:if(d.memoizedState!==null){pg(c);continue}}h!==null?(h.return=d,we=h):pg(c)}f=f.sibling}e:for(f=null,c=t;;){if(c.tag===5){if(f===null){f=c;try{r=c.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=c.stateNode,l=c.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Xx("display",o))}catch(v){Rt(t,t.return,v)}}}else if(c.tag===6){if(f===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(v){Rt(t,t.return,v)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;f===c&&(f=null),c=c.return}f===c&&(f=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Qn(e,t),pi(t),i&4&&dg(t);break;case 21:break;default:Qn(e,t),pi(t)}}function pi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(_v(n)){var i=n;break e}n=n.return}throw Error(oe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ia(r,""),i.flags&=-33);var s=fg(t);Sd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=fg(t);yd(t,a,o);break;default:throw Error(oe(161))}}catch(l){Rt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function GM(t,e,n){we=t,Sv(t)}function Sv(t,e,n){for(var i=(t.mode&1)!==0;we!==null;){var r=we,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Za;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||sn;a=Za;var u=sn;if(Za=o,(sn=l)&&!u)for(we=r;we!==null;)o=we,l=o.child,o.tag===22&&o.memoizedState!==null?mg(r):l!==null?(l.return=o,we=l):mg(r);for(;s!==null;)we=s,Sv(s),s=s.sibling;we=r,Za=a,sn=u}hg(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,we=s):hg(t)}}function hg(t){for(;we!==null;){var e=we;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:sn||Wu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!sn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ni(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Zm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Zm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var c=f.dehydrated;c!==null&&aa(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}sn||e.flags&512&&vd(e)}catch(d){Rt(e,e.return,d)}}if(e===t){we=null;break}if(n=e.sibling,n!==null){n.return=e.return,we=n;break}we=e.return}}function pg(t){for(;we!==null;){var e=we;if(e===t){we=null;break}var n=e.sibling;if(n!==null){n.return=e.return,we=n;break}we=e.return}}function mg(t){for(;we!==null;){var e=we;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Wu(4,e)}catch(l){Rt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Rt(e,r,l)}}var s=e.return;try{vd(e)}catch(l){Rt(e,s,l)}break;case 5:var o=e.return;try{vd(e)}catch(l){Rt(e,o,l)}}}catch(l){Rt(e,e.return,l)}if(e===t){we=null;break}var a=e.sibling;if(a!==null){a.return=e.return,we=a;break}we=e.return}}var WM=Math.ceil,mu=Qi.ReactCurrentDispatcher,dp=Qi.ReactCurrentOwner,qn=Qi.ReactCurrentBatchConfig,et=0,$t=null,Ot=null,Kt=0,Ln=0,Gs=Lr(0),Ht=0,_a=null,is=0,ju=0,hp=0,Zo=null,vn=null,pp=0,so=1/0,Fi=null,gu=!1,Md=null,wr=null,Qa=!1,xr=null,xu=0,Qo=0,Ed=null,Ol=-1,zl=0;function hn(){return et&6?kt():Ol!==-1?Ol:Ol=kt()}function Tr(t){return t.mode&1?et&2&&Kt!==0?Kt&-Kt:AM.transition!==null?(zl===0&&(zl=s_()),zl):(t=at,t!==0||(t=window.event,t=t===void 0?16:d_(t.type)),t):1}function li(t,e,n,i){if(50<Qo)throw Qo=0,Ed=null,Error(oe(185));wa(t,n,i),(!(et&2)||t!==$t)&&(t===$t&&(!(et&2)&&(ju|=n),Ht===4&&pr(t,Kt)),En(t,i),n===1&&et===0&&!(e.mode&1)&&(so=kt()+500,Vu&&Ir()))}function En(t,e){var n=t.callbackNode;A1(t,e);var i=eu(t,t===$t?Kt:0);if(i===0)n!==null&&wm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&wm(n),e===1)t.tag===0?bM(gg.bind(null,t)):L_(gg.bind(null,t)),MM(function(){!(et&6)&&Ir()}),n=null;else{switch(o_(i)){case 1:n=Bh;break;case 4:n=i_;break;case 16:n=Jl;break;case 536870912:n=r_;break;default:n=Jl}n=Rv(n,Mv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Mv(t,e){if(Ol=-1,zl=0,et&6)throw Error(oe(327));var n=t.callbackNode;if(Ys()&&t.callbackNode!==n)return null;var i=eu(t,t===$t?Kt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=_u(t,i);else{e=i;var r=et;et|=2;var s=wv();($t!==t||Kt!==e)&&(Fi=null,so=kt()+500,Qr(t,e));do try{$M();break}catch(a){Ev(t,a)}while(!0);Jh(),mu.current=s,et=r,Ot!==null?e=0:($t=null,Kt=0,e=Ht)}if(e!==0){if(e===2&&(r=Kf(t),r!==0&&(i=r,e=wd(t,r))),e===1)throw n=_a,Qr(t,0),pr(t,i),En(t,kt()),n;if(e===6)pr(t,i);else{if(r=t.current.alternate,!(i&30)&&!jM(r)&&(e=_u(t,i),e===2&&(s=Kf(t),s!==0&&(i=s,e=wd(t,s))),e===1))throw n=_a,Qr(t,0),pr(t,i),En(t,kt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(oe(345));case 2:Vr(t,vn,Fi);break;case 3:if(pr(t,i),(i&130023424)===i&&(e=pp+500-kt(),10<e)){if(eu(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){hn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=rd(Vr.bind(null,t,vn,Fi),e);break}Vr(t,vn,Fi);break;case 4:if(pr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ai(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=kt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*WM(i/1960))-i,10<i){t.timeoutHandle=rd(Vr.bind(null,t,vn,Fi),i);break}Vr(t,vn,Fi);break;case 5:Vr(t,vn,Fi);break;default:throw Error(oe(329))}}}return En(t,kt()),t.callbackNode===n?Mv.bind(null,t):null}function wd(t,e){var n=Zo;return t.current.memoizedState.isDehydrated&&(Qr(t,e).flags|=256),t=_u(t,e),t!==2&&(e=vn,vn=n,e!==null&&Td(e)),t}function Td(t){vn===null?vn=t:vn.push.apply(vn,t)}function jM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ci(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function pr(t,e){for(e&=~hp,e&=~ju,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ai(e),i=1<<n;t[n]=-1,e&=~i}}function gg(t){if(et&6)throw Error(oe(327));Ys();var e=eu(t,0);if(!(e&1))return En(t,kt()),null;var n=_u(t,e);if(t.tag!==0&&n===2){var i=Kf(t);i!==0&&(e=i,n=wd(t,i))}if(n===1)throw n=_a,Qr(t,0),pr(t,e),En(t,kt()),n;if(n===6)throw Error(oe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Vr(t,vn,Fi),En(t,kt()),null}function mp(t,e){var n=et;et|=1;try{return t(e)}finally{et=n,et===0&&(so=kt()+500,Vu&&Ir())}}function rs(t){xr!==null&&xr.tag===0&&!(et&6)&&Ys();var e=et;et|=1;var n=qn.transition,i=at;try{if(qn.transition=null,at=1,t)return t()}finally{at=i,qn.transition=n,et=e,!(et&6)&&Ir()}}function gp(){Ln=Gs.current,St(Gs)}function Qr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,SM(n)),Ot!==null)for(n=Ot.return;n!==null;){var i=n;switch(Kh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&su();break;case 3:io(),St(Sn),St(ln),sp();break;case 5:rp(i);break;case 4:io();break;case 13:St(wt);break;case 19:St(wt);break;case 10:ep(i.type._context);break;case 22:case 23:gp()}n=n.return}if($t=t,Ot=t=br(t.current,null),Kt=Ln=e,Ht=0,_a=null,hp=ju=is=0,vn=Zo=null,$r!==null){for(e=0;e<$r.length;e++)if(n=$r[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}$r=null}return t}function Ev(t,e){do{var n=Ot;try{if(Jh(),Nl.current=pu,hu){for(var i=Tt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}hu=!1}if(ns=0,Xt=Vt=Tt=null,Yo=!1,ma=0,dp.current=null,n===null||n.return===null){Ht=1,_a=e,Ot=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Kt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,c=f.tag;if(!(f.mode&1)&&(c===0||c===11||c===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var h=ig(o);if(h!==null){h.flags&=-257,rg(h,o,a,s,e),h.mode&1&&ng(s,u,e),e=h,l=u;var m=e.updateQueue;if(m===null){var v=new Set;v.add(l),e.updateQueue=v}else m.add(l);break e}else{if(!(e&1)){ng(s,u,e),xp();break e}l=Error(oe(426))}}else if(Et&&a.mode&1){var x=ig(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),rg(x,o,a,s,e),Zh(ro(l,a));break e}}s=l=ro(l,a),Ht!==4&&(Ht=2),Zo===null?Zo=[s]:Zo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=ov(s,l,e);Km(s,p);break e;case 1:a=l;var g=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(wr===null||!wr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=av(s,a,e);Km(s,w);break e}}s=s.return}while(s!==null)}bv(n)}catch(A){e=A,Ot===n&&n!==null&&(Ot=n=n.return);continue}break}while(!0)}function wv(){var t=mu.current;return mu.current=pu,t===null?pu:t}function xp(){(Ht===0||Ht===3||Ht===2)&&(Ht=4),$t===null||!(is&268435455)&&!(ju&268435455)||pr($t,Kt)}function _u(t,e){var n=et;et|=2;var i=wv();($t!==t||Kt!==e)&&(Fi=null,Qr(t,e));do try{XM();break}catch(r){Ev(t,r)}while(!0);if(Jh(),et=n,mu.current=i,Ot!==null)throw Error(oe(261));return $t=null,Kt=0,Ht}function XM(){for(;Ot!==null;)Tv(Ot)}function $M(){for(;Ot!==null&&!_1();)Tv(Ot)}function Tv(t){var e=Cv(t.alternate,t,Ln);t.memoizedProps=t.pendingProps,e===null?bv(t):Ot=e,dp.current=null}function bv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=BM(n,e),n!==null){n.flags&=32767,Ot=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ht=6,Ot=null;return}}else if(n=zM(n,e,Ln),n!==null){Ot=n;return}if(e=e.sibling,e!==null){Ot=e;return}Ot=e=t}while(e!==null);Ht===0&&(Ht=5)}function Vr(t,e,n){var i=at,r=qn.transition;try{qn.transition=null,at=1,qM(t,e,n,i)}finally{qn.transition=r,at=i}return null}function qM(t,e,n,i){do Ys();while(xr!==null);if(et&6)throw Error(oe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(oe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(C1(t,s),t===$t&&(Ot=$t=null,Kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Qa||(Qa=!0,Rv(Jl,function(){return Ys(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=qn.transition,qn.transition=null;var o=at;at=1;var a=et;et|=4,dp.current=null,HM(t,n),yv(n,t),pM(nd),tu=!!td,nd=td=null,t.current=n,GM(n),v1(),et=a,at=o,qn.transition=s}else t.current=n;if(Qa&&(Qa=!1,xr=t,xu=r),s=t.pendingLanes,s===0&&(wr=null),M1(n.stateNode),En(t,kt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(gu)throw gu=!1,t=Md,Md=null,t;return xu&1&&t.tag!==0&&Ys(),s=t.pendingLanes,s&1?t===Ed?Qo++:(Qo=0,Ed=t):Qo=0,Ir(),null}function Ys(){if(xr!==null){var t=o_(xu),e=qn.transition,n=at;try{if(qn.transition=null,at=16>t?16:t,xr===null)var i=!1;else{if(t=xr,xr=null,xu=0,et&6)throw Error(oe(331));var r=et;for(et|=4,we=t.current;we!==null;){var s=we,o=s.child;if(we.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(we=u;we!==null;){var f=we;switch(f.tag){case 0:case 11:case 15:Ko(8,f,s)}var c=f.child;if(c!==null)c.return=f,we=c;else for(;we!==null;){f=we;var d=f.sibling,h=f.return;if(xv(f),f===u){we=null;break}if(d!==null){d.return=h,we=d;break}we=h}}}var m=s.alternate;if(m!==null){var v=m.child;if(v!==null){m.child=null;do{var x=v.sibling;v.sibling=null,v=x}while(v!==null)}}we=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,we=o;else e:for(;we!==null;){if(s=we,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ko(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,we=p;break e}we=s.return}}var g=t.current;for(we=g;we!==null;){o=we;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,we=_;else e:for(o=g;we!==null;){if(a=we,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Wu(9,a)}}catch(A){Rt(a,a.return,A)}if(a===o){we=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,we=w;break e}we=a.return}}if(et=r,Ir(),Ei&&typeof Ei.onPostCommitFiberRoot=="function")try{Ei.onPostCommitFiberRoot(Uu,t)}catch{}i=!0}return i}finally{at=n,qn.transition=e}}return!1}function xg(t,e,n){e=ro(n,e),e=ov(t,e,1),t=Er(t,e,1),e=hn(),t!==null&&(wa(t,1,e),En(t,e))}function Rt(t,e,n){if(t.tag===3)xg(t,t,n);else for(;e!==null;){if(e.tag===3){xg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(wr===null||!wr.has(i))){t=ro(n,t),t=av(e,t,1),e=Er(e,t,1),t=hn(),e!==null&&(wa(e,1,t),En(e,t));break}}e=e.return}}function YM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=hn(),t.pingedLanes|=t.suspendedLanes&n,$t===t&&(Kt&n)===n&&(Ht===4||Ht===3&&(Kt&130023424)===Kt&&500>kt()-pp?Qr(t,0):hp|=n),En(t,e)}function Av(t,e){e===0&&(t.mode&1?(e=Ha,Ha<<=1,!(Ha&130023424)&&(Ha=4194304)):e=1);var n=hn();t=qi(t,e),t!==null&&(wa(t,e,n),En(t,n))}function KM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Av(t,n)}function ZM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(oe(314))}i!==null&&i.delete(e),Av(t,n)}var Cv;Cv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Sn.current)yn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return yn=!1,OM(t,e,n);yn=!!(t.flags&131072)}else yn=!1,Et&&e.flags&1048576&&I_(e,lu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Fl(t,e),t=e.pendingProps;var r=eo(e,ln.current);qs(e,n),r=ap(null,e,i,t,r,n);var s=lp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Mn(i)?(s=!0,ou(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,np(e),r.updater=Gu,e.stateNode=r,r._reactInternals=e,fd(e,i,t,n),e=pd(null,e,i,!0,s,n)):(e.tag=0,Et&&s&&Yh(e),fn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Fl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=JM(i),t=ni(i,t),r){case 0:e=hd(null,e,i,t,n);break e;case 1:e=ag(null,e,i,t,n);break e;case 11:e=sg(null,e,i,t,n);break e;case 14:e=og(null,e,i,ni(i.type,t),n);break e}throw Error(oe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ni(i,r),hd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ni(i,r),ag(t,e,i,r,n);case 3:e:{if(fv(e),t===null)throw Error(oe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,O_(t,e),fu(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ro(Error(oe(423)),e),e=lg(t,e,i,n,r);break e}else if(i!==r){r=ro(Error(oe(424)),e),e=lg(t,e,i,n,r);break e}else for(In=Mr(e.stateNode.containerInfo.firstChild),Dn=e,Et=!0,ri=null,n=U_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(to(),i===r){e=Yi(t,e,n);break e}fn(t,e,i,n)}e=e.child}return e;case 5:return z_(e),t===null&&ld(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,id(i,r)?o=null:s!==null&&id(i,s)&&(e.flags|=32),cv(t,e),fn(t,e,o,n),e.child;case 6:return t===null&&ld(e),null;case 13:return dv(t,e,n);case 4:return ip(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=no(e,null,i,n):fn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ni(i,r),sg(t,e,i,r,n);case 7:return fn(t,e,e.pendingProps,n),e.child;case 8:return fn(t,e,e.pendingProps.children,n),e.child;case 12:return fn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,xt(uu,i._currentValue),i._currentValue=o,s!==null)if(ci(s.value,o)){if(s.children===r.children&&!Sn.current){e=Yi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Gi(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ud(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(oe(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ud(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}fn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,qs(e,n),r=Yn(r),i=i(r),e.flags|=1,fn(t,e,i,n),e.child;case 14:return i=e.type,r=ni(i,e.pendingProps),r=ni(i.type,r),og(t,e,i,r,n);case 15:return lv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ni(i,r),Fl(t,e),e.tag=1,Mn(i)?(t=!0,ou(e)):t=!1,qs(e,n),sv(e,i,r),fd(e,i,r,n),pd(null,e,i,!0,t,n);case 19:return hv(t,e,n);case 22:return uv(t,e,n)}throw Error(oe(156,e.tag))};function Rv(t,e){return n_(t,e)}function QM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(t,e,n,i){return new QM(t,e,n,i)}function _p(t){return t=t.prototype,!(!t||!t.isReactComponent)}function JM(t){if(typeof t=="function")return _p(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Fh)return 11;if(t===Oh)return 14}return 2}function br(t,e){var n=t.alternate;return n===null?(n=$n(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Bl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")_p(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ds:return Jr(n.children,r,s,e);case Uh:o=8,r|=8;break;case Nf:return t=$n(12,n,e,r|2),t.elementType=Nf,t.lanes=s,t;case Uf:return t=$n(13,n,e,r),t.elementType=Uf,t.lanes=s,t;case Ff:return t=$n(19,n,e,r),t.elementType=Ff,t.lanes=s,t;case zx:return Xu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Fx:o=10;break e;case Ox:o=9;break e;case Fh:o=11;break e;case Oh:o=14;break e;case fr:o=16,i=null;break e}throw Error(oe(130,t==null?t:typeof t,""))}return e=$n(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Jr(t,e,n,i){return t=$n(7,t,i,e),t.lanes=n,t}function Xu(t,e,n,i){return t=$n(22,t,i,e),t.elementType=zx,t.lanes=n,t.stateNode={isHidden:!1},t}function kc(t,e,n){return t=$n(6,t,null,e),t.lanes=n,t}function Nc(t,e,n){return e=$n(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function eE(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mc(0),this.expirationTimes=mc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function vp(t,e,n,i,r,s,o,a,l){return t=new eE(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=$n(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},np(s),t}function tE(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Is,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Pv(t){if(!t)return Cr;t=t._reactInternals;e:{if(cs(t)!==t||t.tag!==1)throw Error(oe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Mn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(oe(171))}if(t.tag===1){var n=t.type;if(Mn(n))return P_(t,n,e)}return e}function Lv(t,e,n,i,r,s,o,a,l){return t=vp(n,i,!0,t,r,s,o,a,l),t.context=Pv(null),n=t.current,i=hn(),r=Tr(n),s=Gi(i,r),s.callback=e??null,Er(n,s,r),t.current.lanes=r,wa(t,r,i),En(t,i),t}function $u(t,e,n,i){var r=e.current,s=hn(),o=Tr(r);return n=Pv(n),e.context===null?e.context=n:e.pendingContext=n,e=Gi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Er(r,e,o),t!==null&&(li(t,r,o,s),kl(t,r,o)),o}function vu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function _g(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function yp(t,e){_g(t,e),(t=t.alternate)&&_g(t,e)}function nE(){return null}var Iv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Sp(t){this._internalRoot=t}qu.prototype.render=Sp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(oe(409));$u(t,e,null,null)};qu.prototype.unmount=Sp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;rs(function(){$u(null,t,null,null)}),e[$i]=null}};function qu(t){this._internalRoot=t}qu.prototype.unstable_scheduleHydration=function(t){if(t){var e=u_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<hr.length&&e!==0&&e<hr[n].priority;n++);hr.splice(n,0,t),n===0&&f_(t)}};function Mp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Yu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function vg(){}function iE(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=vu(o);s.call(u)}}var o=Lv(e,i,t,0,null,!1,!1,"",vg);return t._reactRootContainer=o,t[$i]=o.current,ca(t.nodeType===8?t.parentNode:t),rs(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=vu(l);a.call(u)}}var l=vp(t,0,!1,null,null,!1,!1,"",vg);return t._reactRootContainer=l,t[$i]=l.current,ca(t.nodeType===8?t.parentNode:t),rs(function(){$u(e,l,n,i)}),l}function Ku(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=vu(o);a.call(l)}}$u(e,o,t,r)}else o=iE(n,e,t,r,i);return vu(o)}a_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=zo(e.pendingLanes);n!==0&&(Vh(e,n|1),En(e,kt()),!(et&6)&&(so=kt()+500,Ir()))}break;case 13:rs(function(){var i=qi(t,1);if(i!==null){var r=hn();li(i,t,1,r)}}),yp(t,1)}};Hh=function(t){if(t.tag===13){var e=qi(t,134217728);if(e!==null){var n=hn();li(e,t,134217728,n)}yp(t,134217728)}};l_=function(t){if(t.tag===13){var e=Tr(t),n=qi(t,e);if(n!==null){var i=hn();li(n,t,e,i)}yp(t,e)}};u_=function(){return at};c_=function(t,e){var n=at;try{return at=t,e()}finally{at=n}};$f=function(t,e,n){switch(e){case"input":if(Bf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Bu(i);if(!r)throw Error(oe(90));Vx(i),Bf(i,r)}}}break;case"textarea":Gx(t,n);break;case"select":e=n.value,e!=null&&Ws(t,!!n.multiple,e,!1)}};Kx=mp;Zx=rs;var rE={usingClientEntryPoint:!1,Events:[ba,Fs,Bu,qx,Yx,mp]},bo={findFiberByHostInstance:Xr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},sE={bundleType:bo.bundleType,version:bo.version,rendererPackageName:bo.rendererPackageName,rendererConfig:bo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=e_(t),t===null?null:t.stateNode},findFiberByHostInstance:bo.findFiberByHostInstance||nE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ja=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ja.isDisabled&&Ja.supportsFiber)try{Uu=Ja.inject(sE),Ei=Ja}catch{}}Fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rE;Fn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mp(e))throw Error(oe(200));return tE(t,e,null,n)};Fn.createRoot=function(t,e){if(!Mp(t))throw Error(oe(299));var n=!1,i="",r=Iv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=vp(t,1,!1,null,null,n,!1,i,r),t[$i]=e.current,ca(t.nodeType===8?t.parentNode:t),new Sp(e)};Fn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(oe(188)):(t=Object.keys(t).join(","),Error(oe(268,t)));return t=e_(e),t=t===null?null:t.stateNode,t};Fn.flushSync=function(t){return rs(t)};Fn.hydrate=function(t,e,n){if(!Yu(e))throw Error(oe(200));return Ku(null,t,e,!0,n)};Fn.hydrateRoot=function(t,e,n){if(!Mp(t))throw Error(oe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Iv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Lv(e,null,t,1,n??null,r,!1,s,o),t[$i]=e.current,ca(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new qu(e)};Fn.render=function(t,e,n){if(!Yu(e))throw Error(oe(200));return Ku(null,t,e,!1,n)};Fn.unmountComponentAtNode=function(t){if(!Yu(t))throw Error(oe(40));return t._reactRootContainer?(rs(function(){Ku(null,null,t,!1,function(){t._reactRootContainer=null,t[$i]=null})}),!0):!1};Fn.unstable_batchedUpdates=mp;Fn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Yu(n))throw Error(oe(200));if(t==null||t._reactInternals===void 0)throw Error(oe(38));return Ku(t,e,n,!1,i)};Fn.version="18.3.1-next-f1338f8080-20240426";function Dv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dv)}catch(t){console.error(t)}}Dv(),Dx.exports=Fn;var oE=Dx.exports,kv,yg=oE;kv=yg.createRoot,yg.hydrateRoot;/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ep="184",aE=0,Sg=1,lE=2,Vl=1,uE=2,Vo=3,Rr=0,wn=1,zi=2,Wi=0,Ks=1,Mg=2,Eg=3,wg=4,cE=5,Gr=100,fE=101,dE=102,hE=103,pE=104,mE=200,gE=201,xE=202,_E=203,bd=204,Ad=205,vE=206,yE=207,SE=208,ME=209,EE=210,wE=211,TE=212,bE=213,AE=214,Cd=0,Rd=1,Pd=2,oo=3,Ld=4,Id=5,Dd=6,kd=7,Nv=0,CE=1,RE=2,Ti=0,Uv=1,Fv=2,Ov=3,zv=4,Bv=5,Vv=6,Hv=7,Gv=300,ss=301,ao=302,Uc=303,Fc=304,Zu=306,Nd=1e3,Hi=1001,Ud=1002,Yt=1003,PE=1004,el=1005,on=1006,Oc=1007,Yr=1008,Xn=1009,Wv=1010,jv=1011,va=1012,wp=1013,Ci=1014,Si=1015,Ki=1016,Tp=1017,bp=1018,ya=1020,Xv=35902,$v=35899,qv=1021,Yv=1022,oi=1023,Zi=1026,Kr=1027,Kv=1028,Ap=1029,os=1030,Cp=1031,Rp=1033,Hl=33776,Gl=33777,Wl=33778,jl=33779,Fd=35840,Od=35841,zd=35842,Bd=35843,Vd=36196,Hd=37492,Gd=37496,Wd=37488,jd=37489,yu=37490,Xd=37491,$d=37808,qd=37809,Yd=37810,Kd=37811,Zd=37812,Qd=37813,Jd=37814,eh=37815,th=37816,nh=37817,ih=37818,rh=37819,sh=37820,oh=37821,ah=36492,lh=36494,uh=36495,ch=36283,fh=36284,Su=36285,dh=36286,LE=3200,Tg=0,IE=1,mr="",Vn="srgb",Mu="srgb-linear",Eu="linear",st="srgb",gs=7680,bg=519,DE=512,kE=513,NE=514,Pp=515,UE=516,FE=517,Lp=518,OE=519,Ag=35044,Cg="300 es",Mi=2e3,wu=2001;function zE(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Tu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function BE(){const t=Tu("canvas");return t.style.display="block",t}const Rg={};function Pg(...t){const e="THREE."+t.shift();console.log(e,...t)}function Zv(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ne(...t){t=Zv(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Je(...t){t=Zv(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function hh(...t){const e=t.join(" ");e in Rg||(Rg[e]=!0,Ne(...t))}function VE(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const HE={[Cd]:Rd,[Pd]:Dd,[Ld]:kd,[oo]:Id,[Rd]:Cd,[Dd]:Pd,[kd]:Ld,[Id]:oo};class fs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zc=Math.PI/180,ph=180/Math.PI;function Ca(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[t&255]+nn[t>>8&255]+nn[t>>16&255]+nn[t>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[n&63|128]+nn[n>>8&255]+"-"+nn[n>>16&255]+nn[n>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function Ke(t,e,n){return Math.max(e,Math.min(n,t))}function GE(t,e){return(t%e+e)%e}function Bc(t,e,n){return(1-n)*t+n*e}function Ao(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function xn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Jp=class Jp{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Jp.prototype.isVector2=!0;let nt=Jp;class mo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],f=i[r+2],c=i[r+3],d=s[o+0],h=s[o+1],m=s[o+2],v=s[o+3];if(c!==v||l!==d||u!==h||f!==m){let x=l*d+u*h+f*m+c*v;x<0&&(d=-d,h=-h,m=-m,v=-v,x=-x);let p=1-a;if(x<.9995){const g=Math.acos(x),_=Math.sin(g);p=Math.sin(p*g)/_,a=Math.sin(a*g)/_,l=l*p+d*a,u=u*p+h*a,f=f*p+m*a,c=c*p+v*a}else{l=l*p+d*a,u=u*p+h*a,f=f*p+m*a,c=c*p+v*a;const g=1/Math.sqrt(l*l+u*u+f*f+c*c);l*=g,u*=g,f*=g,c*=g}}e[n]=l,e[n+1]=u,e[n+2]=f,e[n+3]=c}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],f=i[r+3],c=s[o],d=s[o+1],h=s[o+2],m=s[o+3];return e[n]=a*m+f*c+l*h-u*d,e[n+1]=l*m+f*d+u*c-a*h,e[n+2]=u*m+f*h+a*d-l*c,e[n+3]=f*m-a*c-l*d-u*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),f=a(r/2),c=a(s/2),d=l(i/2),h=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=d*f*c+u*h*m,this._y=u*h*c-d*f*m,this._z=u*f*m+d*h*c,this._w=u*f*c-d*h*m;break;case"YXZ":this._x=d*f*c+u*h*m,this._y=u*h*c-d*f*m,this._z=u*f*m-d*h*c,this._w=u*f*c+d*h*m;break;case"ZXY":this._x=d*f*c-u*h*m,this._y=u*h*c+d*f*m,this._z=u*f*m+d*h*c,this._w=u*f*c-d*h*m;break;case"ZYX":this._x=d*f*c-u*h*m,this._y=u*h*c+d*f*m,this._z=u*f*m-d*h*c,this._w=u*f*c+d*h*m;break;case"YZX":this._x=d*f*c+u*h*m,this._y=u*h*c+d*f*m,this._z=u*f*m-d*h*c,this._w=u*f*c-d*h*m;break;case"XZY":this._x=d*f*c-u*h*m,this._y=u*h*c-d*f*m,this._z=u*f*m+d*h*c,this._w=u*f*c+d*h*m;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],f=n[6],c=n[10],d=i+a+c;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(f-l)*h,this._y=(s-u)*h,this._z=(o-r)*h}else if(i>a&&i>c){const h=2*Math.sqrt(1+i-a-c);this._w=(f-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+u)/h}else if(a>c){const h=2*Math.sqrt(1+a-i-c);this._w=(s-u)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+f)/h}else{const h=2*Math.sqrt(1+c-i-a);this._w=(o-r)/h,this._x=(s+u)/h,this._y=(l+f)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,f=n._w;return this._x=i*f+o*a+r*u-s*l,this._y=r*f+o*l+s*a-i*u,this._z=s*f+o*u+i*l-r*a,this._w=o*f-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const u=Math.acos(a),f=Math.sin(u);l=Math.sin(l*u)/f,n=Math.sin(n*u)/f,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const em=class em{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Lg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Lg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),f=2*(a*n-s*r),c=2*(s*i-o*n);return this.x=n+l*u+o*c-a*f,this.y=i+l*f+a*u-s*c,this.z=r+l*c+s*f-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Vc.copy(this).projectOnVector(e),this.sub(Vc)}reflect(e){return this.sub(Vc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};em.prototype.isVector3=!0;let H=em;const Vc=new H,Lg=new mo,tm=class tm{constructor(e,n,i,r,s,o,a,l,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],f=i[4],c=i[7],d=i[2],h=i[5],m=i[8],v=r[0],x=r[3],p=r[6],g=r[1],_=r[4],w=r[7],A=r[2],M=r[5],R=r[8];return s[0]=o*v+a*g+l*A,s[3]=o*x+a*_+l*M,s[6]=o*p+a*w+l*R,s[1]=u*v+f*g+c*A,s[4]=u*x+f*_+c*M,s[7]=u*p+f*w+c*R,s[2]=d*v+h*g+m*A,s[5]=d*x+h*_+m*M,s[8]=d*p+h*w+m*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8];return n*o*f-n*a*u-i*s*f+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],c=f*o-a*u,d=a*l-f*s,h=u*s-o*l,m=n*c+i*d+r*h;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=c*v,e[1]=(r*u-f*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(f*n-r*l)*v,e[5]=(r*s-a*n)*v,e[6]=h*v,e[7]=(i*l-u*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Hc.makeScale(e,n)),this}rotate(e){return this.premultiply(Hc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Hc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};tm.prototype.isMatrix3=!0;let Fe=tm;const Hc=new Fe,Ig=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dg=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function WE(){const t={enabled:!0,workingColorSpace:Mu,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===st&&(r.r=ji(r.r),r.g=ji(r.g),r.b=ji(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===st&&(r.r=Zs(r.r),r.g=Zs(r.g),r.b=Zs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===mr?Eu:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return hh("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return hh("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Mu]:{primaries:e,whitePoint:i,transfer:Eu,toXYZ:Ig,fromXYZ:Dg,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Vn},outputColorSpaceConfig:{drawingBufferColorSpace:Vn}},[Vn]:{primaries:e,whitePoint:i,transfer:st,toXYZ:Ig,fromXYZ:Dg,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Vn}}}),t}const Ye=WE();function ji(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Zs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let xs;class jE{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{xs===void 0&&(xs=Tu("canvas")),xs.width=e.width,xs.height=e.height;const r=xs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=xs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Tu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ji(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ji(n[i]/255)*255):n[i]=ji(n[i]);return{data:n,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let XE=0;class Ip{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:XE++}),this.uuid=Ca(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Gc(r[o].image)):s.push(Gc(r[o]))}else s=Gc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Gc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?jE.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}let $E=0;const Wc=new H;class pn extends fs{constructor(e=pn.DEFAULT_IMAGE,n=pn.DEFAULT_MAPPING,i=Hi,r=Hi,s=on,o=Yr,a=oi,l=Xn,u=pn.DEFAULT_ANISOTROPY,f=mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$E++}),this.uuid=Ca(),this.name="",this.source=new Ip(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Wc).x}get height(){return this.source.getSize(Wc).y}get depth(){return this.source.getSize(Wc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ne(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ne(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nd:e.x=e.x-Math.floor(e.x);break;case Hi:e.x=e.x<0?0:1;break;case Ud:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nd:e.y=e.y-Math.floor(e.y);break;case Hi:e.y=e.y<0?0:1;break;case Ud:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=Gv;pn.DEFAULT_ANISOTROPY=1;const nm=class nm{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],f=l[4],c=l[8],d=l[1],h=l[5],m=l[9],v=l[2],x=l[6],p=l[10];if(Math.abs(f-d)<.01&&Math.abs(c-v)<.01&&Math.abs(m-x)<.01){if(Math.abs(f+d)<.1&&Math.abs(c+v)<.1&&Math.abs(m+x)<.1&&Math.abs(u+h+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(u+1)/2,w=(h+1)/2,A=(p+1)/2,M=(f+d)/4,R=(c+v)/4,S=(m+x)/4;return _>w&&_>A?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=M/i,s=R/i):w>A?w<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),i=M/r,s=S/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=R/s,r=S/s),this.set(i,r,s,n),this}let g=Math.sqrt((x-m)*(x-m)+(c-v)*(c-v)+(d-f)*(d-f));return Math.abs(g)<.001&&(g=1),this.x=(x-m)/g,this.y=(c-v)/g,this.z=(d-f)/g,this.w=Math.acos((u+h+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this.w=Ke(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this.w=Ke(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};nm.prototype.isVector4=!0;let Nt=nm;class qE extends fs{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Nt(0,0,e,n),this.scissorTest=!1,this.viewport=new Nt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new pn(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Ip(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bi extends qE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Qv extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class YE extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ku=class ku{constructor(e,n,i,r,s,o,a,l,u,f,c,d,h,m,v,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,f,c,d,h,m,v,x)}set(e,n,i,r,s,o,a,l,u,f,c,d,h,m,v,x){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=u,p[6]=f,p[10]=c,p[14]=d,p[3]=h,p[7]=m,p[11]=v,p[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ku().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/_s.setFromMatrixColumn(e,0).length(),s=1/_s.setFromMatrixColumn(e,1).length(),o=1/_s.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(s),c=Math.sin(s);if(e.order==="XYZ"){const d=o*f,h=o*c,m=a*f,v=a*c;n[0]=l*f,n[4]=-l*c,n[8]=u,n[1]=h+m*u,n[5]=d-v*u,n[9]=-a*l,n[2]=v-d*u,n[6]=m+h*u,n[10]=o*l}else if(e.order==="YXZ"){const d=l*f,h=l*c,m=u*f,v=u*c;n[0]=d+v*a,n[4]=m*a-h,n[8]=o*u,n[1]=o*c,n[5]=o*f,n[9]=-a,n[2]=h*a-m,n[6]=v+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*f,h=l*c,m=u*f,v=u*c;n[0]=d-v*a,n[4]=-o*c,n[8]=m+h*a,n[1]=h+m*a,n[5]=o*f,n[9]=v-d*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*f,h=o*c,m=a*f,v=a*c;n[0]=l*f,n[4]=m*u-h,n[8]=d*u+v,n[1]=l*c,n[5]=v*u+d,n[9]=h*u-m,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,h=o*u,m=a*l,v=a*u;n[0]=l*f,n[4]=v-d*c,n[8]=m*c+h,n[1]=c,n[5]=o*f,n[9]=-a*f,n[2]=-u*f,n[6]=h*c+m,n[10]=d-v*c}else if(e.order==="XZY"){const d=o*l,h=o*u,m=a*l,v=a*u;n[0]=l*f,n[4]=-c,n[8]=u*f,n[1]=d*c+v,n[5]=o*f,n[9]=h*c-m,n[2]=m*c-h,n[6]=a*f,n[10]=v*c+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(KE,e,ZE)}lookAt(e,n,i){const r=this.elements;return Cn.subVectors(e,n),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),rr.crossVectors(i,Cn),rr.lengthSq()===0&&(Math.abs(i.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),rr.crossVectors(i,Cn)),rr.normalize(),tl.crossVectors(Cn,rr),r[0]=rr.x,r[4]=tl.x,r[8]=Cn.x,r[1]=rr.y,r[5]=tl.y,r[9]=Cn.y,r[2]=rr.z,r[6]=tl.z,r[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],f=i[1],c=i[5],d=i[9],h=i[13],m=i[2],v=i[6],x=i[10],p=i[14],g=i[3],_=i[7],w=i[11],A=i[15],M=r[0],R=r[4],S=r[8],P=r[12],T=r[1],L=r[5],D=r[9],X=r[13],Z=r[2],k=r[6],G=r[10],B=r[14],V=r[3],Y=r[7],C=r[11],re=r[15];return s[0]=o*M+a*T+l*Z+u*V,s[4]=o*R+a*L+l*k+u*Y,s[8]=o*S+a*D+l*G+u*C,s[12]=o*P+a*X+l*B+u*re,s[1]=f*M+c*T+d*Z+h*V,s[5]=f*R+c*L+d*k+h*Y,s[9]=f*S+c*D+d*G+h*C,s[13]=f*P+c*X+d*B+h*re,s[2]=m*M+v*T+x*Z+p*V,s[6]=m*R+v*L+x*k+p*Y,s[10]=m*S+v*D+x*G+p*C,s[14]=m*P+v*X+x*B+p*re,s[3]=g*M+_*T+w*Z+A*V,s[7]=g*R+_*L+w*k+A*Y,s[11]=g*S+_*D+w*G+A*C,s[15]=g*P+_*X+w*B+A*re,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],f=e[2],c=e[6],d=e[10],h=e[14],m=e[3],v=e[7],x=e[11],p=e[15],g=l*h-u*d,_=a*h-u*c,w=a*d-l*c,A=o*h-u*f,M=o*d-l*f,R=o*c-a*f;return n*(v*g-x*_+p*w)-i*(m*g-x*A+p*M)+r*(m*_-v*A+p*R)-s*(m*w-v*M+x*R)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],c=e[9],d=e[10],h=e[11],m=e[12],v=e[13],x=e[14],p=e[15],g=n*a-i*o,_=n*l-r*o,w=n*u-s*o,A=i*l-r*a,M=i*u-s*a,R=r*u-s*l,S=f*v-c*m,P=f*x-d*m,T=f*p-h*m,L=c*x-d*v,D=c*p-h*v,X=d*p-h*x,Z=g*X-_*D+w*L+A*T-M*P+R*S;if(Z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/Z;return e[0]=(a*X-l*D+u*L)*k,e[1]=(r*D-i*X-s*L)*k,e[2]=(v*R-x*M+p*A)*k,e[3]=(d*M-c*R-h*A)*k,e[4]=(l*T-o*X-u*P)*k,e[5]=(n*X-r*T+s*P)*k,e[6]=(x*w-m*R-p*_)*k,e[7]=(f*R-d*w+h*_)*k,e[8]=(o*D-a*T+u*S)*k,e[9]=(i*T-n*D-s*S)*k,e[10]=(m*M-v*w+p*g)*k,e[11]=(c*w-f*M-h*g)*k,e[12]=(a*P-o*L-l*S)*k,e[13]=(n*L-i*P+r*S)*k,e[14]=(v*_-m*A-x*g)*k,e[15]=(f*A-c*_+d*g)*k,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,f=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,f*a+i,f*l-r*o,0,u*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,f=o+o,c=a+a,d=s*u,h=s*f,m=s*c,v=o*f,x=o*c,p=a*c,g=l*u,_=l*f,w=l*c,A=i.x,M=i.y,R=i.z;return r[0]=(1-(v+p))*A,r[1]=(h+w)*A,r[2]=(m-_)*A,r[3]=0,r[4]=(h-w)*M,r[5]=(1-(d+p))*M,r[6]=(x+g)*M,r[7]=0,r[8]=(m+_)*R,r[9]=(x-g)*R,r[10]=(1-(d+v))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let o=_s.set(r[0],r[1],r[2]).length();const a=_s.set(r[4],r[5],r[6]).length(),l=_s.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Jn.copy(this);const u=1/o,f=1/a,c=1/l;return Jn.elements[0]*=u,Jn.elements[1]*=u,Jn.elements[2]*=u,Jn.elements[4]*=f,Jn.elements[5]*=f,Jn.elements[6]*=f,Jn.elements[8]*=c,Jn.elements[9]*=c,Jn.elements[10]*=c,n.setFromRotationMatrix(Jn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=Mi,l=!1){const u=this.elements,f=2*s/(n-e),c=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let m,v;if(l)m=s/(o-s),v=o*s/(o-s);else if(a===Mi)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===wu)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=f,u[4]=0,u[8]=d,u[12]=0,u[1]=0,u[5]=c,u[9]=h,u[13]=0,u[2]=0,u[6]=0,u[10]=m,u[14]=v,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Mi,l=!1){const u=this.elements,f=2/(n-e),c=2/(i-r),d=-(n+e)/(n-e),h=-(i+r)/(i-r);let m,v;if(l)m=1/(o-s),v=o/(o-s);else if(a===Mi)m=-2/(o-s),v=-(o+s)/(o-s);else if(a===wu)m=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=f,u[4]=0,u[8]=0,u[12]=d,u[1]=0,u[5]=c,u[9]=0,u[13]=h,u[2]=0,u[6]=0,u[10]=m,u[14]=v,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};ku.prototype.isMatrix4=!0;let zt=ku;const _s=new H,Jn=new zt,KE=new H(0,0,0),ZE=new H(1,1,1),rr=new H,tl=new H,Cn=new H,kg=new zt,Ng=new mo;class as{constructor(e=0,n=0,i=0,r=as.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],f=r[9],c=r[2],d=r[6],h=r[10];switch(n){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-c,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-c,h),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-c,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,h),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return kg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Ng.setFromEuler(this),this.setFromQuaternion(Ng,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}as.DEFAULT_ORDER="XYZ";class Jv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let QE=0;const Ug=new H,vs=new mo,Ii=new zt,nl=new H,Co=new H,JE=new H,ew=new mo,Fg=new H(1,0,0),Og=new H(0,1,0),zg=new H(0,0,1),Bg={type:"added"},tw={type:"removed"},ys={type:"childadded",child:null},jc={type:"childremoved",child:null};class Tn extends fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:QE++}),this.uuid=Ca(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tn.DEFAULT_UP.clone();const e=new H,n=new as,i=new mo,r=new H(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new zt},normalMatrix:{value:new Fe}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=Tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return vs.setFromAxisAngle(e,n),this.quaternion.multiply(vs),this}rotateOnWorldAxis(e,n){return vs.setFromAxisAngle(e,n),this.quaternion.premultiply(vs),this}rotateX(e){return this.rotateOnAxis(Fg,e)}rotateY(e){return this.rotateOnAxis(Og,e)}rotateZ(e){return this.rotateOnAxis(zg,e)}translateOnAxis(e,n){return Ug.copy(e).applyQuaternion(this.quaternion),this.position.add(Ug.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Fg,e)}translateY(e){return this.translateOnAxis(Og,e)}translateZ(e){return this.translateOnAxis(zg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?nl.copy(e):nl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(Co,nl,this.up):Ii.lookAt(nl,Co,this.up),this.quaternion.setFromRotationMatrix(Ii),r&&(Ii.extractRotation(r.matrixWorld),vs.setFromRotationMatrix(Ii),this.quaternion.premultiply(vs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bg),ys.child=e,this.dispatchEvent(ys),ys.child=null):Je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(tw),jc.child=e,this.dispatchEvent(jc),jc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bg),ys.child=e,this.dispatchEvent(ys),ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,e,JE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,ew,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const c=l[u];s(e.shapes,c)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),f=o(e.images),c=o(e.shapes),d=o(e.skeletons),h=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),c.length>0&&(i.shapes=c),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const l=[];for(const u in a){const f=a[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Tn.DEFAULT_UP=new H(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Zr extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nw={type:"move"};class Xc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const v of e.hand.values()){const x=n.getJointPose(v,i),p=this._getHandJoint(u,v);x!==null&&(p.matrix.fromArray(x.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=x.radius),p.visible=x!==null}const f=u.joints["index-finger-tip"],c=u.joints["thumb-tip"],d=f.position.distanceTo(c.position),h=.02,m=.005;u.inputState.pinching&&d>h+m?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=h-m&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(nw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Zr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const ey={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sr={h:0,s:0,l:0},il={h:0,s:0,l:0};function $c(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class rt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Ye.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ye.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Ye.workingColorSpace){if(e=GE(e,1),n=Ke(n,0,1),i=Ke(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=$c(o,s,e+1/3),this.g=$c(o,s,e),this.b=$c(o,s,e-1/3)}return Ye.colorSpaceToWorking(this,r),this}setStyle(e,n=Vn){function i(s){s!==void 0&&parseFloat(s)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ne("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Vn){const i=ey[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ji(e.r),this.g=ji(e.g),this.b=ji(e.b),this}copyLinearToSRGB(e){return this.r=Zs(e.r),this.g=Zs(e.g),this.b=Zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vn){return Ye.workingToColorSpace(rn.copy(this),e),Math.round(Ke(rn.r*255,0,255))*65536+Math.round(Ke(rn.g*255,0,255))*256+Math.round(Ke(rn.b*255,0,255))}getHexString(e=Vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ye.workingColorSpace){Ye.workingToColorSpace(rn.copy(this),n);const i=rn.r,r=rn.g,s=rn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const f=(a+o)/2;if(a===o)l=0,u=0;else{const c=o-a;switch(u=f<=.5?c/(o+a):c/(2-o-a),o){case i:l=(r-s)/c+(r<s?6:0);break;case r:l=(s-i)/c+2;break;case s:l=(i-r)/c+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,n=Ye.workingColorSpace){return Ye.workingToColorSpace(rn.copy(this),n),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=Vn){Ye.workingToColorSpace(rn.copy(this),e);const n=rn.r,i=rn.g,r=rn.b;return e!==Vn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(sr),this.setHSL(sr.h+e,sr.s+n,sr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(sr),e.getHSL(il);const i=Bc(sr.h,il.h,n),r=Bc(sr.s,il.s,n),s=Bc(sr.l,il.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new rt;rt.NAMES=ey;class iw extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new as,this.environmentIntensity=1,this.environmentRotation=new as,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const ei=new H,Di=new H,qc=new H,ki=new H,Ss=new H,Ms=new H,Vg=new H,Yc=new H,Kc=new H,Zc=new H,Qc=new Nt,Jc=new Nt,ef=new Nt;class si{constructor(e=new H,n=new H,i=new H){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ei.subVectors(e,n),r.cross(ei);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ei.subVectors(r,n),Di.subVectors(i,n),qc.subVectors(e,n);const o=ei.dot(ei),a=ei.dot(Di),l=ei.dot(qc),u=Di.dot(Di),f=Di.dot(qc),c=o*u-a*a;if(c===0)return s.set(0,0,0),null;const d=1/c,h=(u*l-a*f)*d,m=(o*f-a*l)*d;return s.set(1-h-m,m,h)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ki.x),l.addScaledVector(o,ki.y),l.addScaledVector(a,ki.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Qc.setScalar(0),Jc.setScalar(0),ef.setScalar(0),Qc.fromBufferAttribute(e,n),Jc.fromBufferAttribute(e,i),ef.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Qc,s.x),o.addScaledVector(Jc,s.y),o.addScaledVector(ef,s.z),o}static isFrontFacing(e,n,i,r){return ei.subVectors(i,n),Di.subVectors(e,n),ei.cross(Di).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),ei.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return si.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return si.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Ss.subVectors(r,i),Ms.subVectors(s,i),Yc.subVectors(e,i);const l=Ss.dot(Yc),u=Ms.dot(Yc);if(l<=0&&u<=0)return n.copy(i);Kc.subVectors(e,r);const f=Ss.dot(Kc),c=Ms.dot(Kc);if(f>=0&&c<=f)return n.copy(r);const d=l*c-f*u;if(d<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(Ss,o);Zc.subVectors(e,s);const h=Ss.dot(Zc),m=Ms.dot(Zc);if(m>=0&&h<=m)return n.copy(s);const v=h*u-l*m;if(v<=0&&u>=0&&m<=0)return a=u/(u-m),n.copy(i).addScaledVector(Ms,a);const x=f*m-h*c;if(x<=0&&c-f>=0&&h-m>=0)return Vg.subVectors(s,r),a=(c-f)/(c-f+(h-m)),n.copy(r).addScaledVector(Vg,a);const p=1/(x+v+d);return o=v*p,a=d*p,n.copy(i).addScaledVector(Ss,o).addScaledVector(Ms,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ra{constructor(e=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ti.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ti.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ti.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ti):ti.fromBufferAttribute(s,o),ti.applyMatrix4(e.matrixWorld),this.expandByPoint(ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),rl.copy(i.boundingBox)),rl.applyMatrix4(e.matrixWorld),this.union(rl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ro),sl.subVectors(this.max,Ro),Es.subVectors(e.a,Ro),ws.subVectors(e.b,Ro),Ts.subVectors(e.c,Ro),or.subVectors(ws,Es),ar.subVectors(Ts,ws),Nr.subVectors(Es,Ts);let n=[0,-or.z,or.y,0,-ar.z,ar.y,0,-Nr.z,Nr.y,or.z,0,-or.x,ar.z,0,-ar.x,Nr.z,0,-Nr.x,-or.y,or.x,0,-ar.y,ar.x,0,-Nr.y,Nr.x,0];return!tf(n,Es,ws,Ts,sl)||(n=[1,0,0,0,1,0,0,0,1],!tf(n,Es,ws,Ts,sl))?!1:(ol.crossVectors(or,ar),n=[ol.x,ol.y,ol.z],tf(n,Es,ws,Ts,sl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ni=[new H,new H,new H,new H,new H,new H,new H,new H],ti=new H,rl=new Ra,Es=new H,ws=new H,Ts=new H,or=new H,ar=new H,Nr=new H,Ro=new H,sl=new H,ol=new H,Ur=new H;function tf(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Ur.fromArray(t,s);const a=r.x*Math.abs(Ur.x)+r.y*Math.abs(Ur.y)+r.z*Math.abs(Ur.z),l=e.dot(Ur),u=n.dot(Ur),f=i.dot(Ur);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>a)return!1}return!0}const Ut=new H,al=new nt;let rw=0;class Ai extends fs{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rw++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Ag,this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)al.fromBufferAttribute(this,n),al.applyMatrix3(e),this.setXY(n,al.x,al.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyMatrix3(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyMatrix4(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyNormalMatrix(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.transformDirection(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ao(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=xn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ao(n,this.array)),n}setX(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ao(n,this.array)),n}setY(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ao(n,this.array)),n}setZ(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ao(n,this.array)),n}setW(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=xn(n,this.array),i=xn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=xn(n,this.array),i=xn(i,this.array),r=xn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=xn(n,this.array),i=xn(i,this.array),r=xn(r,this.array),s=xn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ag&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class ty extends Ai{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class ny extends Ai{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class kn extends Ai{constructor(e,n,i){super(new Float32Array(e),n,i)}}const sw=new Ra,Po=new H,nf=new H;class Qu{constructor(e=new H,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):sw.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Po.subVectors(e,this.center);const n=Po.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Po,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Po.copy(e.center).add(nf)),this.expandByPoint(Po.copy(e.center).sub(nf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let ow=0;const Bn=new zt,rf=new Tn,bs=new H,Rn=new Ra,Lo=new Ra,jt=new H;class Zn extends fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ow++}),this.uuid=Ca(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zE(e)?ny:ty)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,n,i){return Bn.makeTranslation(e,n,i),this.applyMatrix4(Bn),this}scale(e,n,i){return Bn.makeScale(e,n,i),this.applyMatrix4(Bn),this}lookAt(e){return rf.lookAt(e),rf.updateMatrix(),this.applyMatrix4(rf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new kn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ra);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Rn.setFromBufferAttribute(s),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Lo.setFromBufferAttribute(a),this.morphTargetsRelative?(jt.addVectors(Rn.min,Lo.min),Rn.expandByPoint(jt),jt.addVectors(Rn.max,Lo.max),Rn.expandByPoint(jt)):(Rn.expandByPoint(Lo.min),Rn.expandByPoint(Lo.max))}Rn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)jt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(jt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,f=a.count;u<f;u++)jt.fromBufferAttribute(a,u),l&&(bs.fromBufferAttribute(e,u),jt.add(bs)),r=Math.max(r,i.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ai(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let S=0;S<i.count;S++)a[S]=new H,l[S]=new H;const u=new H,f=new H,c=new H,d=new nt,h=new nt,m=new nt,v=new H,x=new H;function p(S,P,T){u.fromBufferAttribute(i,S),f.fromBufferAttribute(i,P),c.fromBufferAttribute(i,T),d.fromBufferAttribute(s,S),h.fromBufferAttribute(s,P),m.fromBufferAttribute(s,T),f.sub(u),c.sub(u),h.sub(d),m.sub(d);const L=1/(h.x*m.y-m.x*h.y);isFinite(L)&&(v.copy(f).multiplyScalar(m.y).addScaledVector(c,-h.y).multiplyScalar(L),x.copy(c).multiplyScalar(h.x).addScaledVector(f,-m.x).multiplyScalar(L),a[S].add(v),a[P].add(v),a[T].add(v),l[S].add(x),l[P].add(x),l[T].add(x))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let S=0,P=g.length;S<P;++S){const T=g[S],L=T.start,D=T.count;for(let X=L,Z=L+D;X<Z;X+=3)p(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const _=new H,w=new H,A=new H,M=new H;function R(S){A.fromBufferAttribute(r,S),M.copy(A);const P=a[S];_.copy(P),_.sub(A.multiplyScalar(A.dot(P))).normalize(),w.crossVectors(M,P);const L=w.dot(l[S])<0?-1:1;o.setXYZW(S,_.x,_.y,_.z,L)}for(let S=0,P=g.length;S<P;++S){const T=g[S],L=T.start,D=T.count;for(let X=L,Z=L+D;X<Z;X+=3)R(e.getX(X+0)),R(e.getX(X+1)),R(e.getX(X+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ai(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const r=new H,s=new H,o=new H,a=new H,l=new H,u=new H,f=new H,c=new H;if(e)for(let d=0,h=e.count;d<h;d+=3){const m=e.getX(d+0),v=e.getX(d+1),x=e.getX(d+2);r.fromBufferAttribute(n,m),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,x),f.subVectors(o,s),c.subVectors(r,s),f.cross(c),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,x),a.add(f),l.add(f),u.add(f),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(x,u.x,u.y,u.z)}else for(let d=0,h=n.count;d<h;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),f.subVectors(o,s),c.subVectors(r,s),f.cross(c),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)jt.fromBufferAttribute(e,n),jt.normalize(),e.setXYZ(n,jt.x,jt.y,jt.z)}toNonIndexed(){function e(a,l){const u=a.array,f=a.itemSize,c=a.normalized,d=new u.constructor(l.length*f);let h=0,m=0;for(let v=0,x=l.length;v<x;v++){a.isInterleavedBufferAttribute?h=l[v]*a.data.stride+a.offset:h=l[v]*f;for(let p=0;p<f;p++)d[m++]=u[h++]}return new Ai(d,f,c)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Zn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let f=0,c=u.length;f<c;f++){const d=u[f],h=e(d,i);l.push(h)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let c=0,d=u.length;c<d;c++){const h=u[c];f.push(h.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(n))}const s=e.morphAttributes;for(const u in s){const f=[],c=s[u];for(let d=0,h=c.length;d<h;d++)f.push(c[d].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,f=o.length;u<f;u++){const c=o[u];this.addGroup(c.start,c.count,c.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let aw=0;class Pa extends fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:aw++}),this.uuid=Ca(),this.name="",this.type="Material",this.blending=Ks,this.side=Rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bd,this.blendDst=Ad,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=oo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ne(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ne(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ks&&(i.blending=this.blending),this.side!==Rr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==bd&&(i.blendSrc=this.blendSrc),this.blendDst!==Ad&&(i.blendDst=this.blendDst),this.blendEquation!==Gr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==oo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ui=new H,sf=new H,ll=new H,lr=new H,of=new H,ul=new H,af=new H;class iy{constructor(e=new H,n=new H(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ui)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ui.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ui.copy(this.origin).addScaledVector(this.direction,n),Ui.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){sf.copy(e).add(n).multiplyScalar(.5),ll.copy(n).sub(e).normalize(),lr.copy(this.origin).sub(sf);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ll),a=lr.dot(this.direction),l=-lr.dot(ll),u=lr.lengthSq(),f=Math.abs(1-o*o);let c,d,h,m;if(f>0)if(c=o*l-a,d=o*a-l,m=s*f,c>=0)if(d>=-m)if(d<=m){const v=1/f;c*=v,d*=v,h=c*(c+o*d+2*a)+d*(o*c+d+2*l)+u}else d=s,c=Math.max(0,-(o*d+a)),h=-c*c+d*(d+2*l)+u;else d=-s,c=Math.max(0,-(o*d+a)),h=-c*c+d*(d+2*l)+u;else d<=-m?(c=Math.max(0,-(-o*s+a)),d=c>0?-s:Math.min(Math.max(-s,-l),s),h=-c*c+d*(d+2*l)+u):d<=m?(c=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+u):(c=Math.max(0,-(o*s+a)),d=c>0?s:Math.min(Math.max(-s,-l),s),h=-c*c+d*(d+2*l)+u);else d=o>0?-s:s,c=Math.max(0,-(o*d+a)),h=-c*c+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,c),r&&r.copy(sf).addScaledVector(ll,d),h}intersectSphere(e,n){Ui.subVectors(e.center,this.origin);const i=Ui.dot(this.direction),r=Ui.dot(Ui)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,f=1/this.direction.y,c=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),f>=0?(s=(e.min.y-d.y)*f,o=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,o=(e.min.y-d.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),c>=0?(a=(e.min.z-d.z)*c,l=(e.max.z-d.z)*c):(a=(e.max.z-d.z)*c,l=(e.min.z-d.z)*c),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ui)!==null}intersectTriangle(e,n,i,r,s){of.subVectors(n,e),ul.subVectors(i,e),af.crossVectors(of,ul);let o=this.direction.dot(af),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;lr.subVectors(this.origin,e);const l=a*this.direction.dot(ul.crossVectors(lr,ul));if(l<0)return null;const u=a*this.direction.dot(of.cross(lr));if(u<0||l+u>o)return null;const f=-a*lr.dot(af);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bu extends Pa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new as,this.combine=Nv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Hg=new zt,Fr=new iy,cl=new Qu,Gg=new H,fl=new H,dl=new H,hl=new H,lf=new H,pl=new H,Wg=new H,ml=new H;class fi extends Tn{constructor(e=new Zn,n=new bu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){pl.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const f=a[l],c=s[l];f!==0&&(lf.fromBufferAttribute(c,e),o?pl.addScaledVector(lf,f):pl.addScaledVector(lf.sub(n),f))}n.add(pl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),cl.copy(i.boundingSphere),cl.applyMatrix4(s),Fr.copy(e.ray).recast(e.near),!(cl.containsPoint(Fr.origin)===!1&&(Fr.intersectSphere(cl,Gg)===null||Fr.origin.distanceToSquared(Gg)>(e.far-e.near)**2))&&(Hg.copy(s).invert(),Fr.copy(e.ray).applyMatrix4(Hg),!(i.boundingBox!==null&&Fr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Fr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,c=s.attributes.normal,d=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=d.length;m<v;m++){const x=d[m],p=o[x.materialIndex],g=Math.max(x.start,h.start),_=Math.min(a.count,Math.min(x.start+x.count,h.start+h.count));for(let w=g,A=_;w<A;w+=3){const M=a.getX(w),R=a.getX(w+1),S=a.getX(w+2);r=gl(this,p,e,i,u,f,c,M,R,S),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const m=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let x=m,p=v;x<p;x+=3){const g=a.getX(x),_=a.getX(x+1),w=a.getX(x+2);r=gl(this,o,e,i,u,f,c,g,_,w),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,v=d.length;m<v;m++){const x=d[m],p=o[x.materialIndex],g=Math.max(x.start,h.start),_=Math.min(l.count,Math.min(x.start+x.count,h.start+h.count));for(let w=g,A=_;w<A;w+=3){const M=w,R=w+1,S=w+2;r=gl(this,p,e,i,u,f,c,M,R,S),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const m=Math.max(0,h.start),v=Math.min(l.count,h.start+h.count);for(let x=m,p=v;x<p;x+=3){const g=x,_=x+1,w=x+2;r=gl(this,o,e,i,u,f,c,g,_,w),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}}}function lw(t,e,n,i,r,s,o,a){let l;if(e.side===wn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Rr,a),l===null)return null;ml.copy(a),ml.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(ml);return u<n.near||u>n.far?null:{distance:u,point:ml.clone(),object:t}}function gl(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,fl),t.getVertexPosition(l,dl),t.getVertexPosition(u,hl);const f=lw(t,e,n,i,fl,dl,hl,Wg);if(f){const c=new H;si.getBarycoord(Wg,fl,dl,hl,c),r&&(f.uv=si.getInterpolatedAttribute(r,a,l,u,c,new nt)),s&&(f.uv1=si.getInterpolatedAttribute(s,a,l,u,c,new nt)),o&&(f.normal=si.getInterpolatedAttribute(o,a,l,u,c,new H),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new H,materialIndex:0};si.getNormal(fl,dl,hl,d.normal),f.face=d,f.barycoord=c}return f}class uw extends pn{constructor(e=null,n=1,i=1,r,s,o,a,l,u=Yt,f=Yt,c,d){super(null,o,a,l,u,f,r,s,c,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const uf=new H,cw=new H,fw=new Fe;class Hr{constructor(e=new H(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=uf.subVectors(i,n).cross(cw.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(uf),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||fw.getNormalMatrix(e),r=this.coplanarPoint(uf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Or=new Qu,dw=new nt(.5,.5),xl=new H;class ry{constructor(e=new Hr,n=new Hr,i=new Hr,r=new Hr,s=new Hr,o=new Hr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Mi,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],u=s[3],f=s[4],c=s[5],d=s[6],h=s[7],m=s[8],v=s[9],x=s[10],p=s[11],g=s[12],_=s[13],w=s[14],A=s[15];if(r[0].setComponents(u-o,h-f,p-m,A-g).normalize(),r[1].setComponents(u+o,h+f,p+m,A+g).normalize(),r[2].setComponents(u+a,h+c,p+v,A+_).normalize(),r[3].setComponents(u-a,h-c,p-v,A-_).normalize(),i)r[4].setComponents(l,d,x,w).normalize(),r[5].setComponents(u-l,h-d,p-x,A-w).normalize();else if(r[4].setComponents(u-l,h-d,p-x,A-w).normalize(),n===Mi)r[5].setComponents(u+l,h+d,p+x,A+w).normalize();else if(n===wu)r[5].setComponents(l,d,x,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Or)}intersectsSprite(e){Or.center.set(0,0,0);const n=dw.distanceTo(e.center);return Or.radius=.7071067811865476+n,Or.applyMatrix4(e.matrixWorld),this.intersectsSphere(Or)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(xl.x=r.normal.x>0?e.max.x:e.min.x,xl.y=r.normal.y>0?e.max.y:e.min.y,xl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(xl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class sy extends Pa{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Au=new H,Cu=new H,jg=new zt,Io=new iy,_l=new Qu,cf=new H,Xg=new H;class hw extends Tn{constructor(e=new Zn,n=new sy){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Au.fromBufferAttribute(n,r-1),Cu.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Au.distanceTo(Cu);e.setAttribute("lineDistance",new kn(i,1))}else Ne("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_l.copy(i.boundingSphere),_l.applyMatrix4(r),_l.radius+=s,e.ray.intersectsSphere(_l)===!1)return;jg.copy(r).invert(),Io.copy(e.ray).applyMatrix4(jg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,f=i.index,d=i.attributes.position;if(f!==null){const h=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let v=h,x=m-1;v<x;v+=u){const p=f.getX(v),g=f.getX(v+1),_=vl(this,e,Io,l,p,g,v);_&&n.push(_)}if(this.isLineLoop){const v=f.getX(m-1),x=f.getX(h),p=vl(this,e,Io,l,v,x,m-1);p&&n.push(p)}}else{const h=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let v=h,x=m-1;v<x;v+=u){const p=vl(this,e,Io,l,v,v+1,v);p&&n.push(p)}if(this.isLineLoop){const v=vl(this,e,Io,l,m-1,h,m-1);v&&n.push(v)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function vl(t,e,n,i,r,s,o){const a=t.geometry.attributes.position;if(Au.fromBufferAttribute(a,r),Cu.fromBufferAttribute(a,s),n.distanceSqToSegment(Au,Cu,cf,Xg)>i)return;cf.applyMatrix4(t.matrixWorld);const u=e.ray.origin.distanceTo(cf);if(!(u<e.near||u>e.far))return{distance:u,point:Xg.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}class oy extends pn{constructor(e=[],n=ss,i,r,s,o,a,l,u,f){super(e,n,i,r,s,o,a,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lo extends pn{constructor(e,n,i=Ci,r,s,o,a=Yt,l=Yt,u,f=Zi,c=1){if(f!==Zi&&f!==Kr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:c};super(d,r,s,o,a,l,f,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ip(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class pw extends lo{constructor(e,n=Ci,i=ss,r,s,o=Yt,a=Yt,l,u=Zi){const f={width:e,height:e,depth:1},c=[f,f,f,f,f,f];super(e,e,n,i,r,s,o,a,l,u),this.image=c,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ay extends pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class La extends Zn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],f=[],c=[];let d=0,h=0;m("z","y","x",-1,-1,i,n,e,o,s,0),m("z","y","x",1,-1,i,n,-e,o,s,1),m("x","z","y",1,1,e,i,n,r,o,2),m("x","z","y",1,-1,e,i,-n,r,o,3),m("x","y","z",1,-1,e,n,i,r,s,4),m("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new kn(u,3)),this.setAttribute("normal",new kn(f,3)),this.setAttribute("uv",new kn(c,2));function m(v,x,p,g,_,w,A,M,R,S,P){const T=w/R,L=A/S,D=w/2,X=A/2,Z=M/2,k=R+1,G=S+1;let B=0,V=0;const Y=new H;for(let C=0;C<G;C++){const re=C*L-X;for(let fe=0;fe<k;fe++){const I=fe*T-D;Y[v]=I*g,Y[x]=re*_,Y[p]=Z,u.push(Y.x,Y.y,Y.z),Y[v]=0,Y[x]=0,Y[p]=M>0?1:-1,f.push(Y.x,Y.y,Y.z),c.push(fe/R),c.push(1-C/S),B+=1}}for(let C=0;C<S;C++)for(let re=0;re<R;re++){const fe=d+re+k*C,I=d+re+k*(C+1),ke=d+(re+1)+k*(C+1),Pe=d+(re+1)+k*C;l.push(fe,I,Pe),l.push(I,ke,Pe),V+=6}a.addGroup(h,V,P),h+=V,d+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new La(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Dp extends Zn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),u(i),f(),this.setAttribute("position",new kn(s,3)),this.setAttribute("normal",new kn(s.slice(),3)),this.setAttribute("uv",new kn(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(g){const _=new H,w=new H,A=new H;for(let M=0;M<n.length;M+=3)h(n[M+0],_),h(n[M+1],w),h(n[M+2],A),l(_,w,A,g)}function l(g,_,w,A){const M=A+1,R=[];for(let S=0;S<=M;S++){R[S]=[];const P=g.clone().lerp(w,S/M),T=_.clone().lerp(w,S/M),L=M-S;for(let D=0;D<=L;D++)D===0&&S===M?R[S][D]=P:R[S][D]=P.clone().lerp(T,D/L)}for(let S=0;S<M;S++)for(let P=0;P<2*(M-S)-1;P++){const T=Math.floor(P/2);P%2===0?(d(R[S][T+1]),d(R[S+1][T]),d(R[S][T])):(d(R[S][T+1]),d(R[S+1][T+1]),d(R[S+1][T]))}}function u(g){const _=new H;for(let w=0;w<s.length;w+=3)_.x=s[w+0],_.y=s[w+1],_.z=s[w+2],_.normalize().multiplyScalar(g),s[w+0]=_.x,s[w+1]=_.y,s[w+2]=_.z}function f(){const g=new H;for(let _=0;_<s.length;_+=3){g.x=s[_+0],g.y=s[_+1],g.z=s[_+2];const w=x(g)/2/Math.PI+.5,A=p(g)/Math.PI+.5;o.push(w,1-A)}m(),c()}function c(){for(let g=0;g<o.length;g+=6){const _=o[g+0],w=o[g+2],A=o[g+4],M=Math.max(_,w,A),R=Math.min(_,w,A);M>.9&&R<.1&&(_<.2&&(o[g+0]+=1),w<.2&&(o[g+2]+=1),A<.2&&(o[g+4]+=1))}}function d(g){s.push(g.x,g.y,g.z)}function h(g,_){const w=g*3;_.x=e[w+0],_.y=e[w+1],_.z=e[w+2]}function m(){const g=new H,_=new H,w=new H,A=new H,M=new nt,R=new nt,S=new nt;for(let P=0,T=0;P<s.length;P+=9,T+=6){g.set(s[P+0],s[P+1],s[P+2]),_.set(s[P+3],s[P+4],s[P+5]),w.set(s[P+6],s[P+7],s[P+8]),M.set(o[T+0],o[T+1]),R.set(o[T+2],o[T+3]),S.set(o[T+4],o[T+5]),A.copy(g).add(_).add(w).divideScalar(3);const L=x(A);v(M,T+0,g,L),v(R,T+2,_,L),v(S,T+4,w,L)}}function v(g,_,w,A){A<0&&g.x===1&&(o[_]=g.x-1),w.x===0&&w.z===0&&(o[_]=A/2/Math.PI+.5)}function x(g){return Math.atan2(g.z,-g.x)}function p(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dp(e.vertices,e.indices,e.radius,e.detail)}}class Ru extends Dp{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Ru(e.radius,e.detail)}}class Ju extends Zn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,f=l+1,c=e/a,d=n/l,h=[],m=[],v=[],x=[];for(let p=0;p<f;p++){const g=p*d-o;for(let _=0;_<u;_++){const w=_*c-s;m.push(w,-g,0),v.push(0,0,1),x.push(_/a),x.push(1-p/l)}}for(let p=0;p<l;p++)for(let g=0;g<a;g++){const _=g+u*p,w=g+u*(p+1),A=g+1+u*(p+1),M=g+1+u*p;h.push(_,w,M),h.push(w,A,M)}this.setIndex(h),this.setAttribute("position",new kn(m,3)),this.setAttribute("normal",new kn(v,3)),this.setAttribute("uv",new kn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ju(e.width,e.height,e.widthSegments,e.heightSegments)}}function uo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if($g(r))r.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if($g(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function cn(t){const e={};for(let n=0;n<t.length;n++){const i=uo(t[n]);for(const r in i)e[r]=i[r]}return e}function $g(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function mw(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function ly(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const gw={clone:uo,merge:cn};var xw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_w=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends Pa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xw,this.fragmentShader=_w,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=uo(e.uniforms),this.uniformsGroups=mw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class vw extends Ri{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class yw extends Pa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=LE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Sw extends Pa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const yl=new H,Sl=new mo,mi=new H;class uy extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=Mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(yl,Sl,mi),mi.x===1&&mi.y===1&&mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yl,Sl,mi.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(yl,Sl,mi),mi.x===1&&mi.y===1&&mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yl,Sl,mi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ur=new H,qg=new nt,Yg=new nt;class Wn extends uy{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ph*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ph*2*Math.atan(Math.tan(zc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ur.x,ur.y).multiplyScalar(-e/ur.z),ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ur.x,ur.y).multiplyScalar(-e/ur.z)}getViewSize(e,n){return this.getViewBounds(e,qg,Yg),n.subVectors(Yg,qg)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(zc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class cy extends uy{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const As=-90,Cs=1;class Mw extends Tn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Wn(As,Cs,e,n);r.layers=this.layers,this.add(r);const s=new Wn(As,Cs,e,n);s.layers=this.layers,this.add(s);const o=new Wn(As,Cs,e,n);o.layers=this.layers,this.add(o);const a=new Wn(As,Cs,e,n);a.layers=this.layers,this.add(a);const l=new Wn(As,Cs,e,n);l.layers=this.layers,this.add(l);const u=new Wn(As,Cs,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===Mi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===wu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,f]=this.children,c=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(c,d,h),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Ew extends Wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const im=class im{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};im.prototype.isMatrix2=!0;let Kg=im;function Zg(t,e,n,i){const r=ww(i);switch(n){case qv:return t*e;case Kv:return t*e/r.components*r.byteLength;case Ap:return t*e/r.components*r.byteLength;case os:return t*e*2/r.components*r.byteLength;case Cp:return t*e*2/r.components*r.byteLength;case Yv:return t*e*3/r.components*r.byteLength;case oi:return t*e*4/r.components*r.byteLength;case Rp:return t*e*4/r.components*r.byteLength;case Hl:case Gl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Wl:case jl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Od:case Bd:return Math.max(t,16)*Math.max(e,8)/4;case Fd:case zd:return Math.max(t,8)*Math.max(e,8)/2;case Vd:case Hd:case Wd:case jd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Gd:case yu:case Xd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case $d:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case qd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Yd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Kd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Zd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Qd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Jd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case eh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case th:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case nh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case ih:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case rh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case sh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case oh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case ah:case lh:case uh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case ch:case fh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Su:case dh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function ww(t){switch(t){case Xn:case Wv:return{byteLength:1,components:1};case va:case jv:case Ki:return{byteLength:2,components:1};case Tp:case bp:return{byteLength:2,components:4};case Ci:case wp:case Si:return{byteLength:4,components:1};case Xv:case $v:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ep}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ep);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function fy(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Tw(t){const e=new WeakMap;function n(a,l){const u=a.array,f=a.usage,c=u.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,u,f),a.onUploadCallback();let h;if(u instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)h=t.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)h=t.SHORT;else if(u instanceof Uint32Array)h=t.UNSIGNED_INT;else if(u instanceof Int32Array)h=t.INT;else if(u instanceof Int8Array)h=t.BYTE;else if(u instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:h,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:c}}function i(a,l,u){const f=l.array,c=l.updateRanges;if(t.bindBuffer(u,a),c.length===0)t.bufferSubData(u,0,f);else{c.sort((h,m)=>h.start-m.start);let d=0;for(let h=1;h<c.length;h++){const m=c[d],v=c[h];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++d,c[d]=v)}c.length=d+1;for(let h=0,m=c.length;h<m;h++){const v=c[h];t.bufferSubData(u,v.start*f.BYTES_PER_ELEMENT,f,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}var bw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Aw=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Cw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Iw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Dw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kw=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Nw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Uw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ow=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Bw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Vw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Hw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ww=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Xw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$w=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,qw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Yw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Kw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Zw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Qw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nT="gl_FragColor = linearToOutputTexel( gl_FragColor );",iT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,sT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,oT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,aT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,uT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,pT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,_T=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,vT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ST=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,MT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ET=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,TT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,AT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,CT=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,RT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,PT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,DT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,NT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,UT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,FT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,OT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,BT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,VT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,GT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,XT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$T=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,YT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,KT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ZT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,QT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,JT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,nb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ib=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ob=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ab=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ub=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,fb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,db=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_b=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Sb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Eb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Tb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ab=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ib=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Db=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,kb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Nb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Ub=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ob=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Vb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$b=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Zb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,tA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:bw,alphahash_pars_fragment:Aw,alphamap_fragment:Cw,alphamap_pars_fragment:Rw,alphatest_fragment:Pw,alphatest_pars_fragment:Lw,aomap_fragment:Iw,aomap_pars_fragment:Dw,batching_pars_vertex:kw,batching_vertex:Nw,begin_vertex:Uw,beginnormal_vertex:Fw,bsdfs:Ow,iridescence_fragment:zw,bumpmap_pars_fragment:Bw,clipping_planes_fragment:Vw,clipping_planes_pars_fragment:Hw,clipping_planes_pars_vertex:Gw,clipping_planes_vertex:Ww,color_fragment:jw,color_pars_fragment:Xw,color_pars_vertex:$w,color_vertex:qw,common:Yw,cube_uv_reflection_fragment:Kw,defaultnormal_vertex:Zw,displacementmap_pars_vertex:Qw,displacementmap_vertex:Jw,emissivemap_fragment:eT,emissivemap_pars_fragment:tT,colorspace_fragment:nT,colorspace_pars_fragment:iT,envmap_fragment:rT,envmap_common_pars_fragment:sT,envmap_pars_fragment:oT,envmap_pars_vertex:aT,envmap_physical_pars_fragment:_T,envmap_vertex:lT,fog_vertex:uT,fog_pars_vertex:cT,fog_fragment:fT,fog_pars_fragment:dT,gradientmap_pars_fragment:hT,lightmap_pars_fragment:pT,lights_lambert_fragment:mT,lights_lambert_pars_fragment:gT,lights_pars_begin:xT,lights_toon_fragment:vT,lights_toon_pars_fragment:yT,lights_phong_fragment:ST,lights_phong_pars_fragment:MT,lights_physical_fragment:ET,lights_physical_pars_fragment:wT,lights_fragment_begin:TT,lights_fragment_maps:bT,lights_fragment_end:AT,lightprobes_pars_fragment:CT,logdepthbuf_fragment:RT,logdepthbuf_pars_fragment:PT,logdepthbuf_pars_vertex:LT,logdepthbuf_vertex:IT,map_fragment:DT,map_pars_fragment:kT,map_particle_fragment:NT,map_particle_pars_fragment:UT,metalnessmap_fragment:FT,metalnessmap_pars_fragment:OT,morphinstance_vertex:zT,morphcolor_vertex:BT,morphnormal_vertex:VT,morphtarget_pars_vertex:HT,morphtarget_vertex:GT,normal_fragment_begin:WT,normal_fragment_maps:jT,normal_pars_fragment:XT,normal_pars_vertex:$T,normal_vertex:qT,normalmap_pars_fragment:YT,clearcoat_normal_fragment_begin:KT,clearcoat_normal_fragment_maps:ZT,clearcoat_pars_fragment:QT,iridescence_pars_fragment:JT,opaque_fragment:eb,packing:tb,premultiplied_alpha_fragment:nb,project_vertex:ib,dithering_fragment:rb,dithering_pars_fragment:sb,roughnessmap_fragment:ob,roughnessmap_pars_fragment:ab,shadowmap_pars_fragment:lb,shadowmap_pars_vertex:ub,shadowmap_vertex:cb,shadowmask_pars_fragment:fb,skinbase_vertex:db,skinning_pars_vertex:hb,skinning_vertex:pb,skinnormal_vertex:mb,specularmap_fragment:gb,specularmap_pars_fragment:xb,tonemapping_fragment:_b,tonemapping_pars_fragment:vb,transmission_fragment:yb,transmission_pars_fragment:Sb,uv_pars_fragment:Mb,uv_pars_vertex:Eb,uv_vertex:wb,worldpos_vertex:Tb,background_vert:bb,background_frag:Ab,backgroundCube_vert:Cb,backgroundCube_frag:Rb,cube_vert:Pb,cube_frag:Lb,depth_vert:Ib,depth_frag:Db,distance_vert:kb,distance_frag:Nb,equirect_vert:Ub,equirect_frag:Fb,linedashed_vert:Ob,linedashed_frag:zb,meshbasic_vert:Bb,meshbasic_frag:Vb,meshlambert_vert:Hb,meshlambert_frag:Gb,meshmatcap_vert:Wb,meshmatcap_frag:jb,meshnormal_vert:Xb,meshnormal_frag:$b,meshphong_vert:qb,meshphong_frag:Yb,meshphysical_vert:Kb,meshphysical_frag:Zb,meshtoon_vert:Qb,meshtoon_frag:Jb,points_vert:eA,points_frag:tA,shadow_vert:nA,shadow_frag:iA,sprite_vert:rA,sprite_frag:sA},_e={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},vi={basic:{uniforms:cn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:cn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new rt(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:cn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:cn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:cn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new rt(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:cn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:cn([_e.points,_e.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:cn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:cn([_e.common,_e.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:cn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:cn([_e.sprite,_e.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:cn([_e.common,_e.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:cn([_e.lights,_e.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};vi.physical={uniforms:cn([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Ml={r:0,b:0,g:0},oA=new zt,dy=new Fe;dy.set(-1,0,0,0,1,0,0,0,1);function aA(t,e,n,i,r,s){const o=new rt(0);let a=r===!0?0:1,l,u,f=null,c=0,d=null;function h(g){let _=g.isScene===!0?g.background:null;if(_&&_.isTexture){const w=g.backgroundBlurriness>0;_=e.get(_,w)}return _}function m(g){let _=!1;const w=h(g);w===null?x(o,a):w&&w.isColor&&(x(w,1),_=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function v(g,_){const w=h(_);w&&(w.isCubeTexture||w.mapping===Zu)?(u===void 0&&(u=new fi(new La(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:uo(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,M,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=w,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(oA.makeRotationFromEuler(_.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(dy),u.material.toneMapped=Ye.getTransfer(w.colorSpace)!==st,(f!==w||c!==w.version||d!==t.toneMapping)&&(u.material.needsUpdate=!0,f=w,c=w.version,d=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new fi(new Ju(2,2),new Ri({name:"BackgroundMaterial",uniforms:uo(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:Rr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=Ye.getTransfer(w.colorSpace)!==st,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||c!==w.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,f=w,c=w.version,d=t.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function x(g,_){g.getRGB(Ml,ly(t)),n.buffers.color.setClear(Ml.r,Ml.g,Ml.b,_,s)}function p(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(g,_=1){o.set(g),a=_,x(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(g){a=g,x(o,a)},render:m,addToRenderList:v,dispose:p}}function lA(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(L,D,X,Z,k){let G=!1;const B=c(L,Z,X,D);s!==B&&(s=B,u(s.object)),G=h(L,Z,X,k),G&&m(L,Z,X,k),k!==null&&e.update(k,t.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,w(L,D,X,Z),k!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return t.createVertexArray()}function u(L){return t.bindVertexArray(L)}function f(L){return t.deleteVertexArray(L)}function c(L,D,X,Z){const k=Z.wireframe===!0;let G=i[D.id];G===void 0&&(G={},i[D.id]=G);const B=L.isInstancedMesh===!0?L.id:0;let V=G[B];V===void 0&&(V={},G[B]=V);let Y=V[X.id];Y===void 0&&(Y={},V[X.id]=Y);let C=Y[k];return C===void 0&&(C=d(l()),Y[k]=C),C}function d(L){const D=[],X=[],Z=[];for(let k=0;k<n;k++)D[k]=0,X[k]=0,Z[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:X,attributeDivisors:Z,object:L,attributes:{},index:null}}function h(L,D,X,Z){const k=s.attributes,G=D.attributes;let B=0;const V=X.getAttributes();for(const Y in V)if(V[Y].location>=0){const re=k[Y];let fe=G[Y];if(fe===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(fe=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(fe=L.instanceColor)),re===void 0||re.attribute!==fe||fe&&re.data!==fe.data)return!0;B++}return s.attributesNum!==B||s.index!==Z}function m(L,D,X,Z){const k={},G=D.attributes;let B=0;const V=X.getAttributes();for(const Y in V)if(V[Y].location>=0){let re=G[Y];re===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(re=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(re=L.instanceColor));const fe={};fe.attribute=re,re&&re.data&&(fe.data=re.data),k[Y]=fe,B++}s.attributes=k,s.attributesNum=B,s.index=Z}function v(){const L=s.newAttributes;for(let D=0,X=L.length;D<X;D++)L[D]=0}function x(L){p(L,0)}function p(L,D){const X=s.newAttributes,Z=s.enabledAttributes,k=s.attributeDivisors;X[L]=1,Z[L]===0&&(t.enableVertexAttribArray(L),Z[L]=1),k[L]!==D&&(t.vertexAttribDivisor(L,D),k[L]=D)}function g(){const L=s.newAttributes,D=s.enabledAttributes;for(let X=0,Z=D.length;X<Z;X++)D[X]!==L[X]&&(t.disableVertexAttribArray(X),D[X]=0)}function _(L,D,X,Z,k,G,B){B===!0?t.vertexAttribIPointer(L,D,X,k,G):t.vertexAttribPointer(L,D,X,Z,k,G)}function w(L,D,X,Z){v();const k=Z.attributes,G=X.getAttributes(),B=D.defaultAttributeValues;for(const V in G){const Y=G[V];if(Y.location>=0){let C=k[V];if(C===void 0&&(V==="instanceMatrix"&&L.instanceMatrix&&(C=L.instanceMatrix),V==="instanceColor"&&L.instanceColor&&(C=L.instanceColor)),C!==void 0){const re=C.normalized,fe=C.itemSize,I=e.get(C);if(I===void 0)continue;const ke=I.buffer,Pe=I.type,Q=I.bytesPerElement,he=Pe===t.INT||Pe===t.UNSIGNED_INT||C.gpuType===wp;if(C.isInterleavedBufferAttribute){const ae=C.data,Ce=ae.stride,De=C.offset;if(ae.isInstancedInterleavedBuffer){for(let Le=0;Le<Y.locationSize;Le++)p(Y.location+Le,ae.meshPerAttribute);L.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Le=0;Le<Y.locationSize;Le++)x(Y.location+Le);t.bindBuffer(t.ARRAY_BUFFER,ke);for(let Le=0;Le<Y.locationSize;Le++)_(Y.location+Le,fe/Y.locationSize,Pe,re,Ce*Q,(De+fe/Y.locationSize*Le)*Q,he)}else{if(C.isInstancedBufferAttribute){for(let ae=0;ae<Y.locationSize;ae++)p(Y.location+ae,C.meshPerAttribute);L.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=C.meshPerAttribute*C.count)}else for(let ae=0;ae<Y.locationSize;ae++)x(Y.location+ae);t.bindBuffer(t.ARRAY_BUFFER,ke);for(let ae=0;ae<Y.locationSize;ae++)_(Y.location+ae,fe/Y.locationSize,Pe,re,fe*Q,fe/Y.locationSize*ae*Q,he)}}else if(B!==void 0){const re=B[V];if(re!==void 0)switch(re.length){case 2:t.vertexAttrib2fv(Y.location,re);break;case 3:t.vertexAttrib3fv(Y.location,re);break;case 4:t.vertexAttrib4fv(Y.location,re);break;default:t.vertexAttrib1fv(Y.location,re)}}}}g()}function A(){P();for(const L in i){const D=i[L];for(const X in D){const Z=D[X];for(const k in Z){const G=Z[k];for(const B in G)f(G[B].object),delete G[B];delete Z[k]}}delete i[L]}}function M(L){if(i[L.id]===void 0)return;const D=i[L.id];for(const X in D){const Z=D[X];for(const k in Z){const G=Z[k];for(const B in G)f(G[B].object),delete G[B];delete Z[k]}}delete i[L.id]}function R(L){for(const D in i){const X=i[D];for(const Z in X){const k=X[Z];if(k[L.id]===void 0)continue;const G=k[L.id];for(const B in G)f(G[B].object),delete G[B];delete k[L.id]}}}function S(L){for(const D in i){const X=i[D],Z=L.isInstancedMesh===!0?L.id:0,k=X[Z];if(k!==void 0){for(const G in k){const B=k[G];for(const V in B)f(B[V].object),delete B[V];delete k[G]}delete X[Z],Object.keys(X).length===0&&delete i[D]}}}function P(){T(),o=!0,s!==r&&(s=r,u(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:T,dispose:A,releaseStatesOfGeometry:M,releaseStatesOfObject:S,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:x,disableUnusedAttributes:g}}function uA(t,e,n){let i;function r(l){i=l}function s(l,u){t.drawArrays(i,l,u),n.update(u,i,1)}function o(l,u,f){f!==0&&(t.drawArraysInstanced(i,l,u,f),n.update(u,i,f))}function a(l,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,f);let d=0;for(let h=0;h<f;h++)d+=u[h];n.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function cA(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==oi&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const S=R===Ki&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Xn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Si&&!S)}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const f=l(u);f!==u&&(Ne("WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);const c=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&d===!1&&Ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),w=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=t.getParameter(t.MAX_SAMPLES),M=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:c,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:w,maxSamples:A,samples:M}}function fA(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Hr,a=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(c,d){const h=c.length!==0||d||i!==0||r;return r=d,i=c.length,h},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(c,d){n=f(c,d,0)},this.setState=function(c,d,h){const m=c.clippingPlanes,v=c.clipIntersection,x=c.clipShadows,p=t.get(c);if(!r||m===null||m.length===0||s&&!x)s?f(null):u();else{const g=s?0:i,_=g*4;let w=p.clippingState||null;l.value=w,w=f(m,d,_,h);for(let A=0;A!==_;++A)w[A]=n[A];p.clippingState=w,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=g}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(c,d,h,m){const v=c!==null?c.length:0;let x=null;if(v!==0){if(x=l.value,m!==!0||x===null){const p=h+v*4,g=d.matrixWorldInverse;a.getNormalMatrix(g),(x===null||x.length<p)&&(x=new Float32Array(p));for(let _=0,w=h;_!==v;++_,w+=4)o.copy(c[_]).applyMatrix4(g,a),o.normal.toArray(x,w),x[w+3]=o.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,x}}const _r=4,Qg=[.125,.215,.35,.446,.526,.582],Wr=20,dA=256,Do=new cy,Jg=new rt;let ff=null,df=0,hf=0,pf=!1;const hA=new H;class e0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=hA}=s;ff=this._renderer.getRenderTarget(),df=this._renderer.getActiveCubeFace(),hf=this._renderer.getActiveMipmapLevel(),pf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=i0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=n0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ff,df,hf),this._renderer.xr.enabled=pf,e.scissorTest=!1,Rs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ss||e.mapping===ao?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ff=this._renderer.getRenderTarget(),df=this._renderer.getActiveCubeFace(),hf=this._renderer.getActiveMipmapLevel(),pf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:on,minFilter:on,generateMipmaps:!1,type:Ki,format:oi,colorSpace:Mu,depthBuffer:!1},r=t0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=t0(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=pA(s)),this._blurMaterial=gA(s,e,n),this._ggxMaterial=mA(s,e,n)}return r}_compileMaterial(e){const n=new fi(new Zn,e);this._renderer.compile(n,Do)}_sceneToCubeUV(e,n,i,r,s){const l=new Wn(90,1,n,i),u=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,h=c.toneMapping;c.getClearColor(Jg),c.toneMapping=Ti,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new fi(new La,new bu({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,x=v.material;let p=!1;const g=e.background;g?g.isColor&&(x.color.copy(g),e.background=null,p=!0):(x.color.copy(Jg),p=!0);for(let _=0;_<6;_++){const w=_%3;w===0?(l.up.set(0,u[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[_],s.y,s.z)):w===1?(l.up.set(0,0,u[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[_],s.z)):(l.up.set(0,u[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[_]));const A=this._cubeSize;Rs(r,w*A,_>2?A:0,A,A),c.setRenderTarget(r),p&&c.render(v,l),c.render(e,l)}c.toneMapping=h,c.autoClear=d,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ss||e.mapping===ao;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=i0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=n0());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Rs(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Do)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,u=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),c=Math.sqrt(u*u-f*f),d=0+u*1.25,h=c*d,{_lodMax:m}=this,v=this._sizeLods[i],x=3*v*(i>m-_r?i-m+_r:0),p=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=m-n,Rs(s,x,p,3*v,2*v),r.setRenderTarget(s),r.render(a,Do),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-i,Rs(e,x,p,3*v,2*v),r.setRenderTarget(e),r.render(a,Do)}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Je("blur direction must be either latitudinal or longitudinal!");const f=3,c=this._lodMeshes[r];c.material=u;const d=u.uniforms,h=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Wr-1),v=s/m,x=isFinite(s)?1+Math.floor(f*v):Wr;x>Wr&&Ne(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Wr}`);const p=[];let g=0;for(let R=0;R<Wr;++R){const S=R/v,P=Math.exp(-S*S/2);p.push(P),R===0?g+=P:R<x&&(g+=2*P)}for(let R=0;R<p.length;R++)p[R]=p[R]/g;d.envMap.value=e.texture,d.samples.value=x,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=m,d.mipInt.value=_-i;const w=this._sizeLods[r],A=3*w*(r>_-_r?r-_+_r:0),M=4*(this._cubeSize-w);Rs(n,A,M,3*w,2*w),l.setRenderTarget(n),l.render(c,Do)}}function pA(t){const e=[],n=[],i=[];let r=t;const s=t-_r+1+Qg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>t-_r?l=Qg[o-t+_r-1]:o===0&&(l=0),n.push(l);const u=1/(a-2),f=-u,c=1+u,d=[f,f,c,f,c,c,f,f,c,c,f,c],h=6,m=6,v=3,x=2,p=1,g=new Float32Array(v*m*h),_=new Float32Array(x*m*h),w=new Float32Array(p*m*h);for(let M=0;M<h;M++){const R=M%3*2/3-1,S=M>2?0:-1,P=[R,S,0,R+2/3,S,0,R+2/3,S+1,0,R,S,0,R+2/3,S+1,0,R,S+1,0];g.set(P,v*m*M),_.set(d,x*m*M);const T=[M,M,M,M,M,M];w.set(T,p*m*M)}const A=new Zn;A.setAttribute("position",new Ai(g,v)),A.setAttribute("uv",new Ai(_,x)),A.setAttribute("faceIndex",new Ai(w,p)),i.push(new fi(A,null)),r>_r&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function t0(t,e,n){const i=new bi(t,e,n);return i.texture.mapping=Zu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Rs(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function mA(t,e,n){return new Ri({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:dA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ec(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function gA(t,e,n){const i=new Float32Array(Wr),r=new H(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:Wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function n0(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function i0(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function ec(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class hy extends bi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new oy(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new La(5,5,5),s=new Ri({name:"CubemapFromEquirect",uniforms:uo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:wn,blending:Wi});s.uniforms.tEquirect.value=n;const o=new fi(r,s),a=n.minFilter;return n.minFilter===Yr&&(n.minFilter=on),new Mw(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function xA(t){let e=new WeakMap,n=new WeakMap,i=null;function r(d,h=!1){return d==null?null:h?o(d):s(d)}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===Uc||h===Fc)if(e.has(d)){const m=e.get(d).texture;return a(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const v=new hy(m.height);return v.fromEquirectangularTexture(t,d),e.set(d,v),d.addEventListener("dispose",u),a(v.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const h=d.mapping,m=h===Uc||h===Fc,v=h===ss||h===ao;if(m||v){let x=n.get(d);const p=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new e0(t)),x=m?i.fromEquirectangular(d,x):i.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,n.set(d,x),x.texture;if(x!==void 0)return x.texture;{const g=d.image;return m&&g&&g.height>0||v&&g&&l(g)?(i===null&&(i=new e0(t)),x=m?i.fromEquirectangular(d):i.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,n.set(d,x),d.addEventListener("dispose",f),x.texture):null}}}return d}function a(d,h){return h===Uc?d.mapping=ss:h===Fc&&(d.mapping=ao),d}function l(d){let h=0;const m=6;for(let v=0;v<m;v++)d[v]!==void 0&&h++;return h===m}function u(d){const h=d.target;h.removeEventListener("dispose",u);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function f(d){const h=d.target;h.removeEventListener("dispose",f);const m=n.get(h);m!==void 0&&(n.delete(h),m.dispose())}function c(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:c}}function _A(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&hh("WebGLRenderer: "+i+" extension not supported."),r}}}function vA(t,e,n,i){const r={},s=new WeakMap;function o(c){const d=c.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete r[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(c,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(c){const d=c.attributes;for(const h in d)e.update(d[h],t.ARRAY_BUFFER)}function u(c){const d=[],h=c.index,m=c.attributes.position;let v=0;if(m===void 0)return;if(h!==null){const g=h.array;v=h.version;for(let _=0,w=g.length;_<w;_+=3){const A=g[_+0],M=g[_+1],R=g[_+2];d.push(A,M,M,R,R,A)}}else{const g=m.array;v=m.version;for(let _=0,w=g.length/3-1;_<w;_+=3){const A=_+0,M=_+1,R=_+2;d.push(A,M,M,R,R,A)}}const x=new(m.count>=65535?ny:ty)(d,1);x.version=v;const p=s.get(c);p&&e.remove(p),s.set(c,x)}function f(c){const d=s.get(c);if(d){const h=c.index;h!==null&&d.version<h.version&&u(c)}else u(c);return s.get(c)}return{get:a,update:l,getWireframeAttribute:f}}function yA(t,e,n){let i;function r(c){i=c}let s,o;function a(c){s=c.type,o=c.bytesPerElement}function l(c,d){t.drawElements(i,d,s,c*o),n.update(d,i,1)}function u(c,d,h){h!==0&&(t.drawElementsInstanced(i,d,s,c*o,h),n.update(d,i,h))}function f(c,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,c,0,h);let v=0;for(let x=0;x<h;x++)v+=d[x];n.update(v,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function SA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:Je("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function MA(t,e,n){const i=new WeakMap,r=new Nt;function s(o,a,l){const u=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,c=f!==void 0?f.length:0;let d=i.get(a);if(d===void 0||d.count!==c){let T=function(){S.dispose(),i.delete(a),a.removeEventListener("dispose",T)};var h=T;d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let w=0;m===!0&&(w=1),v===!0&&(w=2),x===!0&&(w=3);let A=a.attributes.position.count*w,M=1;A>e.maxTextureSize&&(M=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const R=new Float32Array(A*M*4*c),S=new Qv(R,A,M,c);S.type=Si,S.needsUpdate=!0;const P=w*4;for(let L=0;L<c;L++){const D=p[L],X=g[L],Z=_[L],k=A*M*4*L;for(let G=0;G<D.count;G++){const B=G*P;m===!0&&(r.fromBufferAttribute(D,G),R[k+B+0]=r.x,R[k+B+1]=r.y,R[k+B+2]=r.z,R[k+B+3]=0),v===!0&&(r.fromBufferAttribute(X,G),R[k+B+4]=r.x,R[k+B+5]=r.y,R[k+B+6]=r.z,R[k+B+7]=0),x===!0&&(r.fromBufferAttribute(Z,G),R[k+B+8]=r.x,R[k+B+9]=r.y,R[k+B+10]=r.z,R[k+B+11]=Z.itemSize===4?r.w:1)}}d={count:c,texture:S,size:new nt(A,M)},i.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let m=0;for(let x=0;x<u.length;x++)m+=u[x];const v=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function EA(t,e,n,i,r){let s=new WeakMap;function o(u){const f=r.render.frame,c=u.geometry,d=e.get(u,c);if(s.get(d)!==f&&(e.update(d),s.set(d,f)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),s.get(u)!==f&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),s.set(u,f))),u.isSkinnedMesh){const h=u.skeleton;s.get(h)!==f&&(h.update(),s.set(h,f))}return d}function a(){s=new WeakMap}function l(u){const f=u.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:o,dispose:a}}const wA={[Uv]:"LINEAR_TONE_MAPPING",[Fv]:"REINHARD_TONE_MAPPING",[Ov]:"CINEON_TONE_MAPPING",[zv]:"ACES_FILMIC_TONE_MAPPING",[Vv]:"AGX_TONE_MAPPING",[Hv]:"NEUTRAL_TONE_MAPPING",[Bv]:"CUSTOM_TONE_MAPPING"};function TA(t,e,n,i,r){const s=new bi(e,n,{type:t,depthBuffer:i,stencilBuffer:r,depthTexture:i?new lo(e,n):void 0}),o=new bi(e,n,{type:Ki,depthBuffer:!1,stencilBuffer:!1}),a=new Zn;a.setAttribute("position",new kn([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new kn([0,2,0,0,2,0],2));const l=new vw({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new fi(a,l),f=new cy(-1,1,1,-1,0,1);let c=null,d=null,h=!1,m,v=null,x=[],p=!1;this.setSize=function(g,_){s.setSize(g,_),o.setSize(g,_);for(let w=0;w<x.length;w++){const A=x[w];A.setSize&&A.setSize(g,_)}},this.setEffects=function(g){x=g,p=x.length>0&&x[0].isRenderPass===!0;const _=s.width,w=s.height;for(let A=0;A<x.length;A++){const M=x[A];M.setSize&&M.setSize(_,w)}},this.begin=function(g,_){if(h||g.toneMapping===Ti&&x.length===0)return!1;if(v=_,_!==null){const w=_.width,A=_.height;(s.width!==w||s.height!==A)&&this.setSize(w,A)}return p===!1&&g.setRenderTarget(s),m=g.toneMapping,g.toneMapping=Ti,!0},this.hasRenderPass=function(){return p},this.end=function(g,_){g.toneMapping=m,h=!0;let w=s,A=o;for(let M=0;M<x.length;M++){const R=x[M];if(R.enabled!==!1&&(R.render(g,A,w,_),R.needsSwap!==!1)){const S=w;w=A,A=S}}if(c!==g.outputColorSpace||d!==g.toneMapping){c=g.outputColorSpace,d=g.toneMapping,l.defines={},Ye.getTransfer(c)===st&&(l.defines.SRGB_TRANSFER="");const M=wA[d];M&&(l.defines[M]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=w.texture,g.setRenderTarget(v),g.render(u,f),v=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const py=new pn,mh=new lo(1,1),my=new Qv,gy=new YE,xy=new oy,r0=[],s0=[],o0=new Float32Array(16),a0=new Float32Array(9),l0=new Float32Array(4);function go(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=r0[r];if(s===void 0&&(s=new Float32Array(r),r0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Gt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Wt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function tc(t,e){let n=s0[e];n===void 0&&(n=new Int32Array(e),s0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function bA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function AA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Gt(n,e))return;t.uniform2fv(this.addr,e),Wt(n,e)}}function CA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Gt(n,e))return;t.uniform3fv(this.addr,e),Wt(n,e)}}function RA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Gt(n,e))return;t.uniform4fv(this.addr,e),Wt(n,e)}}function PA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Gt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Wt(n,e)}else{if(Gt(n,i))return;l0.set(i),t.uniformMatrix2fv(this.addr,!1,l0),Wt(n,i)}}function LA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Gt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Wt(n,e)}else{if(Gt(n,i))return;a0.set(i),t.uniformMatrix3fv(this.addr,!1,a0),Wt(n,i)}}function IA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Gt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Wt(n,e)}else{if(Gt(n,i))return;o0.set(i),t.uniformMatrix4fv(this.addr,!1,o0),Wt(n,i)}}function DA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function kA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Gt(n,e))return;t.uniform2iv(this.addr,e),Wt(n,e)}}function NA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Gt(n,e))return;t.uniform3iv(this.addr,e),Wt(n,e)}}function UA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Gt(n,e))return;t.uniform4iv(this.addr,e),Wt(n,e)}}function FA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function OA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Gt(n,e))return;t.uniform2uiv(this.addr,e),Wt(n,e)}}function zA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Gt(n,e))return;t.uniform3uiv(this.addr,e),Wt(n,e)}}function BA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Gt(n,e))return;t.uniform4uiv(this.addr,e),Wt(n,e)}}function VA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(mh.compareFunction=n.isReversedDepthBuffer()?Lp:Pp,s=mh):s=py,n.setTexture2D(e||s,r)}function HA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||gy,r)}function GA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||xy,r)}function WA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||my,r)}function jA(t){switch(t){case 5126:return bA;case 35664:return AA;case 35665:return CA;case 35666:return RA;case 35674:return PA;case 35675:return LA;case 35676:return IA;case 5124:case 35670:return DA;case 35667:case 35671:return kA;case 35668:case 35672:return NA;case 35669:case 35673:return UA;case 5125:return FA;case 36294:return OA;case 36295:return zA;case 36296:return BA;case 35678:case 36198:case 36298:case 36306:case 35682:return VA;case 35679:case 36299:case 36307:return HA;case 35680:case 36300:case 36308:case 36293:return GA;case 36289:case 36303:case 36311:case 36292:return WA}}function XA(t,e){t.uniform1fv(this.addr,e)}function $A(t,e){const n=go(e,this.size,2);t.uniform2fv(this.addr,n)}function qA(t,e){const n=go(e,this.size,3);t.uniform3fv(this.addr,n)}function YA(t,e){const n=go(e,this.size,4);t.uniform4fv(this.addr,n)}function KA(t,e){const n=go(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function ZA(t,e){const n=go(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function QA(t,e){const n=go(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function JA(t,e){t.uniform1iv(this.addr,e)}function eC(t,e){t.uniform2iv(this.addr,e)}function tC(t,e){t.uniform3iv(this.addr,e)}function nC(t,e){t.uniform4iv(this.addr,e)}function iC(t,e){t.uniform1uiv(this.addr,e)}function rC(t,e){t.uniform2uiv(this.addr,e)}function sC(t,e){t.uniform3uiv(this.addr,e)}function oC(t,e){t.uniform4uiv(this.addr,e)}function aC(t,e,n){const i=this.cache,r=e.length,s=tc(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),Wt(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=mh:o=py;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function lC(t,e,n){const i=this.cache,r=e.length,s=tc(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),Wt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||gy,s[o])}function uC(t,e,n){const i=this.cache,r=e.length,s=tc(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),Wt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||xy,s[o])}function cC(t,e,n){const i=this.cache,r=e.length,s=tc(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),Wt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||my,s[o])}function fC(t){switch(t){case 5126:return XA;case 35664:return $A;case 35665:return qA;case 35666:return YA;case 35674:return KA;case 35675:return ZA;case 35676:return QA;case 5124:case 35670:return JA;case 35667:case 35671:return eC;case 35668:case 35672:return tC;case 35669:case 35673:return nC;case 5125:return iC;case 36294:return rC;case 36295:return sC;case 36296:return oC;case 35678:case 36198:case 36298:case 36306:case 35682:return aC;case 35679:case 36299:case 36307:return lC;case 35680:case 36300:case 36308:case 36293:return uC;case 36289:case 36303:case 36311:case 36292:return cC}}class dC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=jA(n.type)}}class hC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=fC(n.type)}}class pC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const mf=/(\w+)(\])?(\[|\.)?/g;function u0(t,e){t.seq.push(e),t.map[e.id]=e}function mC(t,e,n){const i=t.name,r=i.length;for(mf.lastIndex=0;;){const s=mf.exec(i),o=mf.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){u0(n,u===void 0?new dC(a,t,e):new hC(a,t,e));break}else{let c=n.map[a];c===void 0&&(c=new pC(a),u0(n,c)),n=c}}}class Xl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);mC(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function c0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const gC=37297;let xC=0;function _C(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const f0=new Fe;function vC(t){Ye._getMatrix(f0,Ye.workingColorSpace,t);const e=`mat3( ${f0.elements.map(n=>n.toFixed(4))} )`;switch(Ye.getTransfer(t)){case Eu:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function d0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+_C(t.getShaderSource(e),a)}else return s}function yC(t,e){const n=vC(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const SC={[Uv]:"Linear",[Fv]:"Reinhard",[Ov]:"Cineon",[zv]:"ACESFilmic",[Vv]:"AgX",[Hv]:"Neutral",[Bv]:"Custom"};function MC(t,e){const n=SC[e];return n===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const El=new H;function EC(){Ye.getLuminanceCoefficients(El);const t=El.x.toFixed(4),e=El.y.toFixed(4),n=El.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wC(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ho).join(`
`)}function TC(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function bC(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ho(t){return t!==""}function h0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function p0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const AC=/^[ \t]*#include +<([\w\d./]+)>/gm;function gh(t){return t.replace(AC,RC)}const CC=new Map;function RC(t,e){let n=Ge[e];if(n===void 0){const i=CC.get(e);if(i!==void 0)n=Ge[i],Ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return gh(n)}const PC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function m0(t){return t.replace(PC,LC)}function LC(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function g0(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const IC={[Vl]:"SHADOWMAP_TYPE_PCF",[Vo]:"SHADOWMAP_TYPE_VSM"};function DC(t){return IC[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const kC={[ss]:"ENVMAP_TYPE_CUBE",[ao]:"ENVMAP_TYPE_CUBE",[Zu]:"ENVMAP_TYPE_CUBE_UV"};function NC(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":kC[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const UC={[ao]:"ENVMAP_MODE_REFRACTION"};function FC(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":UC[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const OC={[Nv]:"ENVMAP_BLENDING_MULTIPLY",[CE]:"ENVMAP_BLENDING_MIX",[RE]:"ENVMAP_BLENDING_ADD"};function zC(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":OC[t.combine]||"ENVMAP_BLENDING_NONE"}function BC(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function VC(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=DC(n),u=NC(n),f=FC(n),c=zC(n),d=BC(n),h=wC(n),m=TC(s),v=r.createProgram();let x,p,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(Ho).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(Ho).join(`
`),p.length>0&&(p+=`
`)):(x=[g0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ho).join(`
`),p=[g0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+c:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ti?"#define TONE_MAPPING":"",n.toneMapping!==Ti?Ge.tonemapping_pars_fragment:"",n.toneMapping!==Ti?MC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,yC("linearToOutputTexel",n.outputColorSpace),EC(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ho).join(`
`)),o=gh(o),o=h0(o,n),o=p0(o,n),a=gh(a),a=h0(a,n),a=p0(a,n),o=m0(o),a=m0(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",n.glslVersion===Cg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Cg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=g+x+o,w=g+p+a,A=c0(r,r.VERTEX_SHADER,_),M=c0(r,r.FRAGMENT_SHADER,w);r.attachShader(v,A),r.attachShader(v,M),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function R(L){if(t.debug.checkShaderErrors){const D=r.getProgramInfoLog(v)||"",X=r.getShaderInfoLog(A)||"",Z=r.getShaderInfoLog(M)||"",k=D.trim(),G=X.trim(),B=Z.trim();let V=!0,Y=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(V=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,A,M);else{const C=d0(r,A,"vertex"),re=d0(r,M,"fragment");Je("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+k+`
`+C+`
`+re)}else k!==""?Ne("WebGLProgram: Program Info Log:",k):(G===""||B==="")&&(Y=!1);Y&&(L.diagnostics={runnable:V,programLog:k,vertexShader:{log:G,prefix:x},fragmentShader:{log:B,prefix:p}})}r.deleteShader(A),r.deleteShader(M),S=new Xl(r,v),P=bC(r,v)}let S;this.getUniforms=function(){return S===void 0&&R(this),S};let P;this.getAttributes=function(){return P===void 0&&R(this),P};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(v,gC)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=xC++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=M,this}let HC=0;class GC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new WC(e),n.set(e,i)),i}}class WC{constructor(e){this.id=HC++,this.code=e,this.usedTimes=0}}function jC(t){return t===os||t===yu||t===Su}function XC(t,e,n,i,r,s){const o=new Jv,a=new GC,l=new Set,u=[],f=new Map,c=i.logarithmicDepthBuffer;let d=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S){return l.add(S),S===0?"uv":`uv${S}`}function v(S,P,T,L,D,X){const Z=L.fog,k=D.geometry,G=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?L.environment:null,B=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,V=e.get(S.envMap||G,B),Y=V&&V.mapping===Zu?V.image.height:null,C=h[S.type];S.precision!==null&&(d=i.getMaxPrecision(S.precision),d!==S.precision&&Ne("WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const re=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,fe=re!==void 0?re.length:0;let I=0;k.morphAttributes.position!==void 0&&(I=1),k.morphAttributes.normal!==void 0&&(I=2),k.morphAttributes.color!==void 0&&(I=3);let ke,Pe,Q,he;if(C){const Oe=vi[C];ke=Oe.vertexShader,Pe=Oe.fragmentShader}else ke=S.vertexShader,Pe=S.fragmentShader,a.update(S),Q=a.getVertexShaderID(S),he=a.getFragmentShaderID(S);const ae=t.getRenderTarget(),Ce=t.state.buffers.depth.getReversed(),De=D.isInstancedMesh===!0,Le=D.isBatchedMesh===!0,_t=!!S.map,je=!!S.matcap,it=!!V,lt=!!S.aoMap,He=!!S.lightMap,At=!!S.bumpMap,vt=!!S.normalMap,Qt=!!S.displacementMap,O=!!S.emissiveMap,Pt=!!S.metalnessMap,Xe=!!S.roughnessMap,ut=S.anisotropy>0,xe=S.clearcoat>0,Mt=S.dispersion>0,E=S.iridescence>0,y=S.sheen>0,U=S.transmission>0,$=ut&&!!S.anisotropyMap,J=xe&&!!S.clearcoatMap,ie=xe&&!!S.clearcoatNormalMap,ue=xe&&!!S.clearcoatRoughnessMap,K=E&&!!S.iridescenceMap,ee=E&&!!S.iridescenceThicknessMap,ge=y&&!!S.sheenColorMap,me=y&&!!S.sheenRoughnessMap,ce=!!S.specularMap,se=!!S.specularColorMap,Ue=!!S.specularIntensityMap,Be=U&&!!S.transmissionMap,tt=U&&!!S.thicknessMap,F=!!S.gradientMap,de=!!S.alphaMap,te=S.alphaTest>0,Se=!!S.alphaHash,pe=!!S.extensions;let ne=Ti;S.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(ne=t.toneMapping);const be={shaderID:C,shaderType:S.type,shaderName:S.name,vertexShader:ke,fragmentShader:Pe,defines:S.defines,customVertexShaderID:Q,customFragmentShaderID:he,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Le,batchingColor:Le&&D._colorsTexture!==null,instancing:De,instancingColor:De&&D.instanceColor!==null,instancingMorph:De&&D.morphTexture!==null,outputColorSpace:ae===null?t.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Ye.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:_t,matcap:je,envMap:it,envMapMode:it&&V.mapping,envMapCubeUVHeight:Y,aoMap:lt,lightMap:He,bumpMap:At,normalMap:vt,displacementMap:Qt,emissiveMap:O,normalMapObjectSpace:vt&&S.normalMapType===IE,normalMapTangentSpace:vt&&S.normalMapType===Tg,packedNormalMap:vt&&S.normalMapType===Tg&&jC(S.normalMap.format),metalnessMap:Pt,roughnessMap:Xe,anisotropy:ut,anisotropyMap:$,clearcoat:xe,clearcoatMap:J,clearcoatNormalMap:ie,clearcoatRoughnessMap:ue,dispersion:Mt,iridescence:E,iridescenceMap:K,iridescenceThicknessMap:ee,sheen:y,sheenColorMap:ge,sheenRoughnessMap:me,specularMap:ce,specularColorMap:se,specularIntensityMap:Ue,transmission:U,transmissionMap:Be,thicknessMap:tt,gradientMap:F,opaque:S.transparent===!1&&S.blending===Ks&&S.alphaToCoverage===!1,alphaMap:de,alphaTest:te,alphaHash:Se,combine:S.combine,mapUv:_t&&m(S.map.channel),aoMapUv:lt&&m(S.aoMap.channel),lightMapUv:He&&m(S.lightMap.channel),bumpMapUv:At&&m(S.bumpMap.channel),normalMapUv:vt&&m(S.normalMap.channel),displacementMapUv:Qt&&m(S.displacementMap.channel),emissiveMapUv:O&&m(S.emissiveMap.channel),metalnessMapUv:Pt&&m(S.metalnessMap.channel),roughnessMapUv:Xe&&m(S.roughnessMap.channel),anisotropyMapUv:$&&m(S.anisotropyMap.channel),clearcoatMapUv:J&&m(S.clearcoatMap.channel),clearcoatNormalMapUv:ie&&m(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&m(S.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&m(S.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&m(S.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&m(S.sheenColorMap.channel),sheenRoughnessMapUv:me&&m(S.sheenRoughnessMap.channel),specularMapUv:ce&&m(S.specularMap.channel),specularColorMapUv:se&&m(S.specularColorMap.channel),specularIntensityMapUv:Ue&&m(S.specularIntensityMap.channel),transmissionMapUv:Be&&m(S.transmissionMap.channel),thicknessMapUv:tt&&m(S.thicknessMap.channel),alphaMapUv:de&&m(S.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(vt||ut),vertexNormals:!!k.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!k.attributes.uv&&(_t||de),fog:!!Z,useFog:S.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||k.attributes.normal===void 0&&vt===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:c,reversedDepthBuffer:Ce,skinning:D.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:I,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&T.length>0,shadowMapType:t.shadowMap.type,toneMapping:ne,decodeVideoTexture:_t&&S.map.isVideoTexture===!0&&Ye.getTransfer(S.map.colorSpace)===st,decodeVideoTextureEmissive:O&&S.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(S.emissiveMap.colorSpace)===st,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===zi,flipSided:S.side===wn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:pe&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&S.extensions.multiDraw===!0||Le)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return be.vertexUv1s=l.has(1),be.vertexUv2s=l.has(2),be.vertexUv3s=l.has(3),l.clear(),be}function x(S){const P=[];if(S.shaderID?P.push(S.shaderID):(P.push(S.customVertexShaderID),P.push(S.customFragmentShaderID)),S.defines!==void 0)for(const T in S.defines)P.push(T),P.push(S.defines[T]);return S.isRawShaderMaterial===!1&&(p(P,S),g(P,S),P.push(t.outputColorSpace)),P.push(S.customProgramCacheKey),P.join()}function p(S,P){S.push(P.precision),S.push(P.outputColorSpace),S.push(P.envMapMode),S.push(P.envMapCubeUVHeight),S.push(P.mapUv),S.push(P.alphaMapUv),S.push(P.lightMapUv),S.push(P.aoMapUv),S.push(P.bumpMapUv),S.push(P.normalMapUv),S.push(P.displacementMapUv),S.push(P.emissiveMapUv),S.push(P.metalnessMapUv),S.push(P.roughnessMapUv),S.push(P.anisotropyMapUv),S.push(P.clearcoatMapUv),S.push(P.clearcoatNormalMapUv),S.push(P.clearcoatRoughnessMapUv),S.push(P.iridescenceMapUv),S.push(P.iridescenceThicknessMapUv),S.push(P.sheenColorMapUv),S.push(P.sheenRoughnessMapUv),S.push(P.specularMapUv),S.push(P.specularColorMapUv),S.push(P.specularIntensityMapUv),S.push(P.transmissionMapUv),S.push(P.thicknessMapUv),S.push(P.combine),S.push(P.fogExp2),S.push(P.sizeAttenuation),S.push(P.morphTargetsCount),S.push(P.morphAttributeCount),S.push(P.numDirLights),S.push(P.numPointLights),S.push(P.numSpotLights),S.push(P.numSpotLightMaps),S.push(P.numHemiLights),S.push(P.numRectAreaLights),S.push(P.numDirLightShadows),S.push(P.numPointLightShadows),S.push(P.numSpotLightShadows),S.push(P.numSpotLightShadowsWithMaps),S.push(P.numLightProbes),S.push(P.shadowMapType),S.push(P.toneMapping),S.push(P.numClippingPlanes),S.push(P.numClipIntersection),S.push(P.depthPacking)}function g(S,P){o.disableAll(),P.instancing&&o.enable(0),P.instancingColor&&o.enable(1),P.instancingMorph&&o.enable(2),P.matcap&&o.enable(3),P.envMap&&o.enable(4),P.normalMapObjectSpace&&o.enable(5),P.normalMapTangentSpace&&o.enable(6),P.clearcoat&&o.enable(7),P.iridescence&&o.enable(8),P.alphaTest&&o.enable(9),P.vertexColors&&o.enable(10),P.vertexAlphas&&o.enable(11),P.vertexUv1s&&o.enable(12),P.vertexUv2s&&o.enable(13),P.vertexUv3s&&o.enable(14),P.vertexTangents&&o.enable(15),P.anisotropy&&o.enable(16),P.alphaHash&&o.enable(17),P.batching&&o.enable(18),P.dispersion&&o.enable(19),P.batchingColor&&o.enable(20),P.gradientMap&&o.enable(21),P.packedNormalMap&&o.enable(22),P.vertexNormals&&o.enable(23),S.push(o.mask),o.disableAll(),P.fog&&o.enable(0),P.useFog&&o.enable(1),P.flatShading&&o.enable(2),P.logarithmicDepthBuffer&&o.enable(3),P.reversedDepthBuffer&&o.enable(4),P.skinning&&o.enable(5),P.morphTargets&&o.enable(6),P.morphNormals&&o.enable(7),P.morphColors&&o.enable(8),P.premultipliedAlpha&&o.enable(9),P.shadowMapEnabled&&o.enable(10),P.doubleSided&&o.enable(11),P.flipSided&&o.enable(12),P.useDepthPacking&&o.enable(13),P.dithering&&o.enable(14),P.transmission&&o.enable(15),P.sheen&&o.enable(16),P.opaque&&o.enable(17),P.pointsUvs&&o.enable(18),P.decodeVideoTexture&&o.enable(19),P.decodeVideoTextureEmissive&&o.enable(20),P.alphaToCoverage&&o.enable(21),P.numLightProbeGrids>0&&o.enable(22),S.push(o.mask)}function _(S){const P=h[S.type];let T;if(P){const L=vi[P];T=gw.clone(L.uniforms)}else T=S.uniforms;return T}function w(S,P){let T=f.get(P);return T!==void 0?++T.usedTimes:(T=new VC(t,P,S,r),u.push(T),f.set(P,T)),T}function A(S){if(--S.usedTimes===0){const P=u.indexOf(S);u[P]=u[u.length-1],u.pop(),f.delete(S.cacheKey),S.destroy()}}function M(S){a.remove(S)}function R(){a.dispose()}return{getParameters:v,getProgramCacheKey:x,getUniforms:_,acquireProgram:w,releaseProgram:A,releaseShaderCache:M,programs:u,dispose:R}}function $C(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function qC(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function x0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function _0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d){let h=0;return d.isInstancedMesh&&(h+=2),d.isSkinnedMesh&&(h+=1),h}function a(d,h,m,v,x,p){let g=t[e];return g===void 0?(g={id:d.id,object:d,geometry:h,material:m,materialVariant:o(d),groupOrder:v,renderOrder:d.renderOrder,z:x,group:p},t[e]=g):(g.id=d.id,g.object=d,g.geometry=h,g.material=m,g.materialVariant=o(d),g.groupOrder=v,g.renderOrder=d.renderOrder,g.z=x,g.group=p),e++,g}function l(d,h,m,v,x,p){const g=a(d,h,m,v,x,p);m.transmission>0?i.push(g):m.transparent===!0?r.push(g):n.push(g)}function u(d,h,m,v,x,p){const g=a(d,h,m,v,x,p);m.transmission>0?i.unshift(g):m.transparent===!0?r.unshift(g):n.unshift(g)}function f(d,h){n.length>1&&n.sort(d||qC),i.length>1&&i.sort(h||x0),r.length>1&&r.sort(h||x0)}function c(){for(let d=e,h=t.length;d<h;d++){const m=t[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:u,finish:c,sort:f}}function YC(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new _0,t.set(i,[o])):r>=s.length?(o=new _0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function KC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new H,color:new rt};break;case"SpotLight":n={position:new H,direction:new H,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new rt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":n={color:new rt,position:new H,halfWidth:new H,halfHeight:new H};break}return t[e.id]=n,n}}}function ZC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let QC=0;function JC(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function eR(t){const e=new KC,n=ZC(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new H);const r=new H,s=new zt,o=new zt;function a(u){let f=0,c=0,d=0;for(let P=0;P<9;P++)i.probe[P].set(0,0,0);let h=0,m=0,v=0,x=0,p=0,g=0,_=0,w=0,A=0,M=0,R=0;u.sort(JC);for(let P=0,T=u.length;P<T;P++){const L=u[P],D=L.color,X=L.intensity,Z=L.distance;let k=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===os?k=L.shadow.map.texture:k=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)f+=D.r*X,c+=D.g*X,d+=D.b*X;else if(L.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(L.sh.coefficients[G],X);R++}else if(L.isDirectionalLight){const G=e.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const B=L.shadow,V=n.get(L);V.shadowIntensity=B.intensity,V.shadowBias=B.bias,V.shadowNormalBias=B.normalBias,V.shadowRadius=B.radius,V.shadowMapSize=B.mapSize,i.directionalShadow[h]=V,i.directionalShadowMap[h]=k,i.directionalShadowMatrix[h]=L.shadow.matrix,g++}i.directional[h]=G,h++}else if(L.isSpotLight){const G=e.get(L);G.position.setFromMatrixPosition(L.matrixWorld),G.color.copy(D).multiplyScalar(X),G.distance=Z,G.coneCos=Math.cos(L.angle),G.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),G.decay=L.decay,i.spot[v]=G;const B=L.shadow;if(L.map&&(i.spotLightMap[A]=L.map,A++,B.updateMatrices(L),L.castShadow&&M++),i.spotLightMatrix[v]=B.matrix,L.castShadow){const V=n.get(L);V.shadowIntensity=B.intensity,V.shadowBias=B.bias,V.shadowNormalBias=B.normalBias,V.shadowRadius=B.radius,V.shadowMapSize=B.mapSize,i.spotShadow[v]=V,i.spotShadowMap[v]=k,w++}v++}else if(L.isRectAreaLight){const G=e.get(L);G.color.copy(D).multiplyScalar(X),G.halfWidth.set(L.width*.5,0,0),G.halfHeight.set(0,L.height*.5,0),i.rectArea[x]=G,x++}else if(L.isPointLight){const G=e.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),G.distance=L.distance,G.decay=L.decay,L.castShadow){const B=L.shadow,V=n.get(L);V.shadowIntensity=B.intensity,V.shadowBias=B.bias,V.shadowNormalBias=B.normalBias,V.shadowRadius=B.radius,V.shadowMapSize=B.mapSize,V.shadowCameraNear=B.camera.near,V.shadowCameraFar=B.camera.far,i.pointShadow[m]=V,i.pointShadowMap[m]=k,i.pointShadowMatrix[m]=L.shadow.matrix,_++}i.point[m]=G,m++}else if(L.isHemisphereLight){const G=e.get(L);G.skyColor.copy(L.color).multiplyScalar(X),G.groundColor.copy(L.groundColor).multiplyScalar(X),i.hemi[p]=G,p++}}x>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=c,i.ambient[2]=d;const S=i.hash;(S.directionalLength!==h||S.pointLength!==m||S.spotLength!==v||S.rectAreaLength!==x||S.hemiLength!==p||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==w||S.numSpotMaps!==A||S.numLightProbes!==R)&&(i.directional.length=h,i.spot.length=v,i.rectArea.length=x,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=w+A-M,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=R,S.directionalLength=h,S.pointLength=m,S.spotLength=v,S.rectAreaLength=x,S.hemiLength=p,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=w,S.numSpotMaps=A,S.numLightProbes=R,i.version=QC++)}function l(u,f){let c=0,d=0,h=0,m=0,v=0;const x=f.matrixWorldInverse;for(let p=0,g=u.length;p<g;p++){const _=u[p];if(_.isDirectionalLight){const w=i.directional[c];w.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(x),c++}else if(_.isSpotLight){const w=i.spot[h];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(x),w.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(x),h++}else if(_.isRectAreaLight){const w=i.rectArea[m];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(x),o.identity(),s.copy(_.matrixWorld),s.premultiply(x),o.extractRotation(s),w.halfWidth.set(_.width*.5,0,0),w.halfHeight.set(0,_.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),m++}else if(_.isPointLight){const w=i.point[d];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(x),d++}else if(_.isHemisphereLight){const w=i.hemi[v];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(x),v++}}}return{setup:a,setupView:l,state:i}}function v0(t){const e=new eR(t),n=[],i=[],r=[];function s(d){c.camera=d,n.length=0,i.length=0,r.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function l(d){r.push(d)}function u(){e.setup(n)}function f(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:c,setupLights:u,setupLightsView:f,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function tR(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new v0(t),e.set(r,[a])):s>=o.length?(a=new v0(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const nR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,rR=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],sR=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],y0=new zt,ko=new H,gf=new H;function oR(t,e,n){let i=new ry;const r=new nt,s=new nt,o=new Nt,a=new yw,l=new Sw,u={},f=n.maxTextureSize,c={[Rr]:wn,[wn]:Rr,[zi]:zi},d=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:nR,fragmentShader:iR}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const m=new Zn;m.setAttribute("position",new Ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new fi(m,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vl;let p=this.type;this.render=function(M,R,S){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||M.length===0)return;this.type===uE&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Vl);const P=t.getRenderTarget(),T=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),D=t.state;D.setBlending(Wi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const X=p!==this.type;X&&R.traverse(function(Z){Z.material&&(Array.isArray(Z.material)?Z.material.forEach(k=>k.needsUpdate=!0):Z.material.needsUpdate=!0)});for(let Z=0,k=M.length;Z<k;Z++){const G=M[Z],B=G.shadow;if(B===void 0){Ne("WebGLShadowMap:",G,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const V=B.getFrameExtents();r.multiply(V),s.copy(B.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/V.x),r.x=s.x*V.x,B.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/V.y),r.y=s.y*V.y,B.mapSize.y=s.y));const Y=t.state.buffers.depth.getReversed();if(B.camera._reversedDepth=Y,B.map===null||X===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Vo){if(G.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new bi(r.x,r.y,{format:os,type:Ki,minFilter:on,magFilter:on,generateMipmaps:!1}),B.map.texture.name=G.name+".shadowMap",B.map.depthTexture=new lo(r.x,r.y,Si),B.map.depthTexture.name=G.name+".shadowMapDepth",B.map.depthTexture.format=Zi,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Yt,B.map.depthTexture.magFilter=Yt}else G.isPointLight?(B.map=new hy(r.x),B.map.depthTexture=new pw(r.x,Ci)):(B.map=new bi(r.x,r.y),B.map.depthTexture=new lo(r.x,r.y,Ci)),B.map.depthTexture.name=G.name+".shadowMap",B.map.depthTexture.format=Zi,this.type===Vl?(B.map.depthTexture.compareFunction=Y?Lp:Pp,B.map.depthTexture.minFilter=on,B.map.depthTexture.magFilter=on):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Yt,B.map.depthTexture.magFilter=Yt);B.camera.updateProjectionMatrix()}const C=B.map.isWebGLCubeRenderTarget?6:1;for(let re=0;re<C;re++){if(B.map.isWebGLCubeRenderTarget)t.setRenderTarget(B.map,re),t.clear();else{re===0&&(t.setRenderTarget(B.map),t.clear());const fe=B.getViewport(re);o.set(s.x*fe.x,s.y*fe.y,s.x*fe.z,s.y*fe.w),D.viewport(o)}if(G.isPointLight){const fe=B.camera,I=B.matrix,ke=G.distance||fe.far;ke!==fe.far&&(fe.far=ke,fe.updateProjectionMatrix()),ko.setFromMatrixPosition(G.matrixWorld),fe.position.copy(ko),gf.copy(fe.position),gf.add(rR[re]),fe.up.copy(sR[re]),fe.lookAt(gf),fe.updateMatrixWorld(),I.makeTranslation(-ko.x,-ko.y,-ko.z),y0.multiplyMatrices(fe.projectionMatrix,fe.matrixWorldInverse),B._frustum.setFromProjectionMatrix(y0,fe.coordinateSystem,fe.reversedDepth)}else B.updateMatrices(G);i=B.getFrustum(),w(R,S,B.camera,G,this.type)}B.isPointLightShadow!==!0&&this.type===Vo&&g(B,S),B.needsUpdate=!1}p=this.type,x.needsUpdate=!1,t.setRenderTarget(P,T,L)};function g(M,R){const S=e.update(v);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,h.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new bi(r.x,r.y,{format:os,type:Ki})),d.uniforms.shadow_pass.value=M.map.depthTexture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,t.setRenderTarget(M.mapPass),t.clear(),t.renderBufferDirect(R,null,S,d,v,null),h.uniforms.shadow_pass.value=M.mapPass.texture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,t.setRenderTarget(M.map),t.clear(),t.renderBufferDirect(R,null,S,h,v,null)}function _(M,R,S,P){let T=null;const L=S.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(L!==void 0)T=L;else if(T=S.isPointLight===!0?l:a,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const D=T.uuid,X=R.uuid;let Z=u[D];Z===void 0&&(Z={},u[D]=Z);let k=Z[X];k===void 0&&(k=T.clone(),Z[X]=k,R.addEventListener("dispose",A)),T=k}if(T.visible=R.visible,T.wireframe=R.wireframe,P===Vo?T.side=R.shadowSide!==null?R.shadowSide:R.side:T.side=R.shadowSide!==null?R.shadowSide:c[R.side],T.alphaMap=R.alphaMap,T.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,T.map=R.map,T.clipShadows=R.clipShadows,T.clippingPlanes=R.clippingPlanes,T.clipIntersection=R.clipIntersection,T.displacementMap=R.displacementMap,T.displacementScale=R.displacementScale,T.displacementBias=R.displacementBias,T.wireframeLinewidth=R.wireframeLinewidth,T.linewidth=R.linewidth,S.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const D=t.properties.get(T);D.light=S}return T}function w(M,R,S,P,T){if(M.visible===!1)return;if(M.layers.test(R.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&T===Vo)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,M.matrixWorld);const X=e.update(M),Z=M.material;if(Array.isArray(Z)){const k=X.groups;for(let G=0,B=k.length;G<B;G++){const V=k[G],Y=Z[V.materialIndex];if(Y&&Y.visible){const C=_(M,Y,P,T);M.onBeforeShadow(t,M,R,S,X,C,V),t.renderBufferDirect(S,null,X,C,M,V),M.onAfterShadow(t,M,R,S,X,C,V)}}}else if(Z.visible){const k=_(M,Z,P,T);M.onBeforeShadow(t,M,R,S,X,k,null),t.renderBufferDirect(S,null,X,k,M,null),M.onAfterShadow(t,M,R,S,X,k,null)}}const D=M.children;for(let X=0,Z=D.length;X<Z;X++)w(D[X],R,S,P,T)}function A(M){M.target.removeEventListener("dispose",A);for(const S in u){const P=u[S],T=M.target.uuid;T in P&&(P[T].dispose(),delete P[T])}}}function aR(t,e){function n(){let F=!1;const de=new Nt;let te=null;const Se=new Nt(0,0,0,0);return{setMask:function(pe){te!==pe&&!F&&(t.colorMask(pe,pe,pe,pe),te=pe)},setLocked:function(pe){F=pe},setClear:function(pe,ne,be,Oe,Lt){Lt===!0&&(pe*=Oe,ne*=Oe,be*=Oe),de.set(pe,ne,be,Oe),Se.equals(de)===!1&&(t.clearColor(pe,ne,be,Oe),Se.copy(de))},reset:function(){F=!1,te=null,Se.set(-1,0,0,0)}}}function i(){let F=!1,de=!1,te=null,Se=null,pe=null;return{setReversed:function(ne){if(de!==ne){const be=e.get("EXT_clip_control");ne?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),de=ne;const Oe=pe;pe=null,this.setClear(Oe)}},getReversed:function(){return de},setTest:function(ne){ne?ae(t.DEPTH_TEST):Ce(t.DEPTH_TEST)},setMask:function(ne){te!==ne&&!F&&(t.depthMask(ne),te=ne)},setFunc:function(ne){if(de&&(ne=HE[ne]),Se!==ne){switch(ne){case Cd:t.depthFunc(t.NEVER);break;case Rd:t.depthFunc(t.ALWAYS);break;case Pd:t.depthFunc(t.LESS);break;case oo:t.depthFunc(t.LEQUAL);break;case Ld:t.depthFunc(t.EQUAL);break;case Id:t.depthFunc(t.GEQUAL);break;case Dd:t.depthFunc(t.GREATER);break;case kd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Se=ne}},setLocked:function(ne){F=ne},setClear:function(ne){pe!==ne&&(pe=ne,de&&(ne=1-ne),t.clearDepth(ne))},reset:function(){F=!1,te=null,Se=null,pe=null,de=!1}}}function r(){let F=!1,de=null,te=null,Se=null,pe=null,ne=null,be=null,Oe=null,Lt=null;return{setTest:function(ct){F||(ct?ae(t.STENCIL_TEST):Ce(t.STENCIL_TEST))},setMask:function(ct){de!==ct&&!F&&(t.stencilMask(ct),de=ct)},setFunc:function(ct,Li,di){(te!==ct||Se!==Li||pe!==di)&&(t.stencilFunc(ct,Li,di),te=ct,Se=Li,pe=di)},setOp:function(ct,Li,di){(ne!==ct||be!==Li||Oe!==di)&&(t.stencilOp(ct,Li,di),ne=ct,be=Li,Oe=di)},setLocked:function(ct){F=ct},setClear:function(ct){Lt!==ct&&(t.clearStencil(ct),Lt=ct)},reset:function(){F=!1,de=null,te=null,Se=null,pe=null,ne=null,be=null,Oe=null,Lt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,u=new WeakMap;let f={},c={},d={},h=new WeakMap,m=[],v=null,x=!1,p=null,g=null,_=null,w=null,A=null,M=null,R=null,S=new rt(0,0,0),P=0,T=!1,L=null,D=null,X=null,Z=null,k=null;const G=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,V=0;const Y=t.getParameter(t.VERSION);Y.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(Y)[1]),B=V>=1):Y.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),B=V>=2);let C=null,re={};const fe=t.getParameter(t.SCISSOR_BOX),I=t.getParameter(t.VIEWPORT),ke=new Nt().fromArray(fe),Pe=new Nt().fromArray(I);function Q(F,de,te,Se){const pe=new Uint8Array(4),ne=t.createTexture();t.bindTexture(F,ne),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let be=0;be<te;be++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(de,0,t.RGBA,1,1,Se,0,t.RGBA,t.UNSIGNED_BYTE,pe):t.texImage2D(de+be,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,pe);return ne}const he={};he[t.TEXTURE_2D]=Q(t.TEXTURE_2D,t.TEXTURE_2D,1),he[t.TEXTURE_CUBE_MAP]=Q(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[t.TEXTURE_2D_ARRAY]=Q(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),he[t.TEXTURE_3D]=Q(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ae(t.DEPTH_TEST),o.setFunc(oo),At(!1),vt(Sg),ae(t.CULL_FACE),lt(Wi);function ae(F){f[F]!==!0&&(t.enable(F),f[F]=!0)}function Ce(F){f[F]!==!1&&(t.disable(F),f[F]=!1)}function De(F,de){return d[F]!==de?(t.bindFramebuffer(F,de),d[F]=de,F===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=de),F===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=de),!0):!1}function Le(F,de){let te=m,Se=!1;if(F){te=h.get(de),te===void 0&&(te=[],h.set(de,te));const pe=F.textures;if(te.length!==pe.length||te[0]!==t.COLOR_ATTACHMENT0){for(let ne=0,be=pe.length;ne<be;ne++)te[ne]=t.COLOR_ATTACHMENT0+ne;te.length=pe.length,Se=!0}}else te[0]!==t.BACK&&(te[0]=t.BACK,Se=!0);Se&&t.drawBuffers(te)}function _t(F){return v!==F?(t.useProgram(F),v=F,!0):!1}const je={[Gr]:t.FUNC_ADD,[fE]:t.FUNC_SUBTRACT,[dE]:t.FUNC_REVERSE_SUBTRACT};je[hE]=t.MIN,je[pE]=t.MAX;const it={[mE]:t.ZERO,[gE]:t.ONE,[xE]:t.SRC_COLOR,[bd]:t.SRC_ALPHA,[EE]:t.SRC_ALPHA_SATURATE,[SE]:t.DST_COLOR,[vE]:t.DST_ALPHA,[_E]:t.ONE_MINUS_SRC_COLOR,[Ad]:t.ONE_MINUS_SRC_ALPHA,[ME]:t.ONE_MINUS_DST_COLOR,[yE]:t.ONE_MINUS_DST_ALPHA,[wE]:t.CONSTANT_COLOR,[TE]:t.ONE_MINUS_CONSTANT_COLOR,[bE]:t.CONSTANT_ALPHA,[AE]:t.ONE_MINUS_CONSTANT_ALPHA};function lt(F,de,te,Se,pe,ne,be,Oe,Lt,ct){if(F===Wi){x===!0&&(Ce(t.BLEND),x=!1);return}if(x===!1&&(ae(t.BLEND),x=!0),F!==cE){if(F!==p||ct!==T){if((g!==Gr||A!==Gr)&&(t.blendEquation(t.FUNC_ADD),g=Gr,A=Gr),ct)switch(F){case Ks:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Mg:t.blendFunc(t.ONE,t.ONE);break;case Eg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case wg:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Je("WebGLState: Invalid blending: ",F);break}else switch(F){case Ks:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Mg:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Eg:Je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wg:Je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Je("WebGLState: Invalid blending: ",F);break}_=null,w=null,M=null,R=null,S.set(0,0,0),P=0,p=F,T=ct}return}pe=pe||de,ne=ne||te,be=be||Se,(de!==g||pe!==A)&&(t.blendEquationSeparate(je[de],je[pe]),g=de,A=pe),(te!==_||Se!==w||ne!==M||be!==R)&&(t.blendFuncSeparate(it[te],it[Se],it[ne],it[be]),_=te,w=Se,M=ne,R=be),(Oe.equals(S)===!1||Lt!==P)&&(t.blendColor(Oe.r,Oe.g,Oe.b,Lt),S.copy(Oe),P=Lt),p=F,T=!1}function He(F,de){F.side===zi?Ce(t.CULL_FACE):ae(t.CULL_FACE);let te=F.side===wn;de&&(te=!te),At(te),F.blending===Ks&&F.transparent===!1?lt(Wi):lt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const Se=F.stencilWrite;a.setTest(Se),Se&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),O(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ae(t.SAMPLE_ALPHA_TO_COVERAGE):Ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function At(F){L!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),L=F)}function vt(F){F!==aE?(ae(t.CULL_FACE),F!==D&&(F===Sg?t.cullFace(t.BACK):F===lE?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ce(t.CULL_FACE),D=F}function Qt(F){F!==X&&(B&&t.lineWidth(F),X=F)}function O(F,de,te){F?(ae(t.POLYGON_OFFSET_FILL),(Z!==de||k!==te)&&(Z=de,k=te,o.getReversed()&&(de=-de),t.polygonOffset(de,te))):Ce(t.POLYGON_OFFSET_FILL)}function Pt(F){F?ae(t.SCISSOR_TEST):Ce(t.SCISSOR_TEST)}function Xe(F){F===void 0&&(F=t.TEXTURE0+G-1),C!==F&&(t.activeTexture(F),C=F)}function ut(F,de,te){te===void 0&&(C===null?te=t.TEXTURE0+G-1:te=C);let Se=re[te];Se===void 0&&(Se={type:void 0,texture:void 0},re[te]=Se),(Se.type!==F||Se.texture!==de)&&(C!==te&&(t.activeTexture(te),C=te),t.bindTexture(F,de||he[F]),Se.type=F,Se.texture=de)}function xe(){const F=re[C];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Mt(){try{t.compressedTexImage2D(...arguments)}catch(F){Je("WebGLState:",F)}}function E(){try{t.compressedTexImage3D(...arguments)}catch(F){Je("WebGLState:",F)}}function y(){try{t.texSubImage2D(...arguments)}catch(F){Je("WebGLState:",F)}}function U(){try{t.texSubImage3D(...arguments)}catch(F){Je("WebGLState:",F)}}function $(){try{t.compressedTexSubImage2D(...arguments)}catch(F){Je("WebGLState:",F)}}function J(){try{t.compressedTexSubImage3D(...arguments)}catch(F){Je("WebGLState:",F)}}function ie(){try{t.texStorage2D(...arguments)}catch(F){Je("WebGLState:",F)}}function ue(){try{t.texStorage3D(...arguments)}catch(F){Je("WebGLState:",F)}}function K(){try{t.texImage2D(...arguments)}catch(F){Je("WebGLState:",F)}}function ee(){try{t.texImage3D(...arguments)}catch(F){Je("WebGLState:",F)}}function ge(F){return c[F]!==void 0?c[F]:t.getParameter(F)}function me(F,de){c[F]!==de&&(t.pixelStorei(F,de),c[F]=de)}function ce(F){ke.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),ke.copy(F))}function se(F){Pe.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),Pe.copy(F))}function Ue(F,de){let te=u.get(de);te===void 0&&(te=new WeakMap,u.set(de,te));let Se=te.get(F);Se===void 0&&(Se=t.getUniformBlockIndex(de,F.name),te.set(F,Se))}function Be(F,de){const Se=u.get(de).get(F);l.get(de)!==Se&&(t.uniformBlockBinding(de,Se,F.__bindingPointIndex),l.set(de,Se))}function tt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),f={},c={},C=null,re={},d={},h=new WeakMap,m=[],v=null,x=!1,p=null,g=null,_=null,w=null,A=null,M=null,R=null,S=new rt(0,0,0),P=0,T=!1,L=null,D=null,X=null,Z=null,k=null,ke.set(0,0,t.canvas.width,t.canvas.height),Pe.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ae,disable:Ce,bindFramebuffer:De,drawBuffers:Le,useProgram:_t,setBlending:lt,setMaterial:He,setFlipSided:At,setCullFace:vt,setLineWidth:Qt,setPolygonOffset:O,setScissorTest:Pt,activeTexture:Xe,bindTexture:ut,unbindTexture:xe,compressedTexImage2D:Mt,compressedTexImage3D:E,texImage2D:K,texImage3D:ee,pixelStorei:me,getParameter:ge,updateUBOMapping:Ue,uniformBlockBinding:Be,texStorage2D:ie,texStorage3D:ue,texSubImage2D:y,texSubImage3D:U,compressedTexSubImage2D:$,compressedTexSubImage3D:J,scissor:ce,viewport:se,reset:tt}}function lR(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new nt,f=new WeakMap,c=new Set;let d;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(E,y){return m?new OffscreenCanvas(E,y):Tu("canvas")}function x(E,y,U){let $=1;const J=Mt(E);if((J.width>U||J.height>U)&&($=U/Math.max(J.width,J.height)),$<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const ie=Math.floor($*J.width),ue=Math.floor($*J.height);d===void 0&&(d=v(ie,ue));const K=y?v(ie,ue):d;return K.width=ie,K.height=ue,K.getContext("2d").drawImage(E,0,0,ie,ue),Ne("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ie+"x"+ue+")."),K}else return"data"in E&&Ne("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),E;return E}function p(E){return E.generateMipmaps}function g(E){t.generateMipmap(E)}function _(E){return E.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?t.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function w(E,y,U,$,J,ie=!1){if(E!==null){if(t[E]!==void 0)return t[E];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ue;$&&(ue=e.get("EXT_texture_norm16"),ue||Ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=y;if(y===t.RED&&(U===t.FLOAT&&(K=t.R32F),U===t.HALF_FLOAT&&(K=t.R16F),U===t.UNSIGNED_BYTE&&(K=t.R8),U===t.UNSIGNED_SHORT&&ue&&(K=ue.R16_EXT),U===t.SHORT&&ue&&(K=ue.R16_SNORM_EXT)),y===t.RED_INTEGER&&(U===t.UNSIGNED_BYTE&&(K=t.R8UI),U===t.UNSIGNED_SHORT&&(K=t.R16UI),U===t.UNSIGNED_INT&&(K=t.R32UI),U===t.BYTE&&(K=t.R8I),U===t.SHORT&&(K=t.R16I),U===t.INT&&(K=t.R32I)),y===t.RG&&(U===t.FLOAT&&(K=t.RG32F),U===t.HALF_FLOAT&&(K=t.RG16F),U===t.UNSIGNED_BYTE&&(K=t.RG8),U===t.UNSIGNED_SHORT&&ue&&(K=ue.RG16_EXT),U===t.SHORT&&ue&&(K=ue.RG16_SNORM_EXT)),y===t.RG_INTEGER&&(U===t.UNSIGNED_BYTE&&(K=t.RG8UI),U===t.UNSIGNED_SHORT&&(K=t.RG16UI),U===t.UNSIGNED_INT&&(K=t.RG32UI),U===t.BYTE&&(K=t.RG8I),U===t.SHORT&&(K=t.RG16I),U===t.INT&&(K=t.RG32I)),y===t.RGB_INTEGER&&(U===t.UNSIGNED_BYTE&&(K=t.RGB8UI),U===t.UNSIGNED_SHORT&&(K=t.RGB16UI),U===t.UNSIGNED_INT&&(K=t.RGB32UI),U===t.BYTE&&(K=t.RGB8I),U===t.SHORT&&(K=t.RGB16I),U===t.INT&&(K=t.RGB32I)),y===t.RGBA_INTEGER&&(U===t.UNSIGNED_BYTE&&(K=t.RGBA8UI),U===t.UNSIGNED_SHORT&&(K=t.RGBA16UI),U===t.UNSIGNED_INT&&(K=t.RGBA32UI),U===t.BYTE&&(K=t.RGBA8I),U===t.SHORT&&(K=t.RGBA16I),U===t.INT&&(K=t.RGBA32I)),y===t.RGB&&(U===t.UNSIGNED_SHORT&&ue&&(K=ue.RGB16_EXT),U===t.SHORT&&ue&&(K=ue.RGB16_SNORM_EXT),U===t.UNSIGNED_INT_5_9_9_9_REV&&(K=t.RGB9_E5),U===t.UNSIGNED_INT_10F_11F_11F_REV&&(K=t.R11F_G11F_B10F)),y===t.RGBA){const ee=ie?Eu:Ye.getTransfer(J);U===t.FLOAT&&(K=t.RGBA32F),U===t.HALF_FLOAT&&(K=t.RGBA16F),U===t.UNSIGNED_BYTE&&(K=ee===st?t.SRGB8_ALPHA8:t.RGBA8),U===t.UNSIGNED_SHORT&&ue&&(K=ue.RGBA16_EXT),U===t.SHORT&&ue&&(K=ue.RGBA16_SNORM_EXT),U===t.UNSIGNED_SHORT_4_4_4_4&&(K=t.RGBA4),U===t.UNSIGNED_SHORT_5_5_5_1&&(K=t.RGB5_A1)}return(K===t.R16F||K===t.R32F||K===t.RG16F||K===t.RG32F||K===t.RGBA16F||K===t.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function A(E,y){let U;return E?y===null||y===Ci||y===ya?U=t.DEPTH24_STENCIL8:y===Si?U=t.DEPTH32F_STENCIL8:y===va&&(U=t.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ci||y===ya?U=t.DEPTH_COMPONENT24:y===Si?U=t.DEPTH_COMPONENT32F:y===va&&(U=t.DEPTH_COMPONENT16),U}function M(E,y){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==Yt&&E.minFilter!==on?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function R(E){const y=E.target;y.removeEventListener("dispose",R),P(y),y.isVideoTexture&&f.delete(y),y.isHTMLTexture&&c.delete(y)}function S(E){const y=E.target;y.removeEventListener("dispose",S),L(y)}function P(E){const y=i.get(E);if(y.__webglInit===void 0)return;const U=E.source,$=h.get(U);if($){const J=$[y.__cacheKey];J.usedTimes--,J.usedTimes===0&&T(E),Object.keys($).length===0&&h.delete(U)}i.remove(E)}function T(E){const y=i.get(E);t.deleteTexture(y.__webglTexture);const U=E.source,$=h.get(U);delete $[y.__cacheKey],o.memory.textures--}function L(E){const y=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(y.__webglFramebuffer[$]))for(let J=0;J<y.__webglFramebuffer[$].length;J++)t.deleteFramebuffer(y.__webglFramebuffer[$][J]);else t.deleteFramebuffer(y.__webglFramebuffer[$]);y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer[$])}else{if(Array.isArray(y.__webglFramebuffer))for(let $=0;$<y.__webglFramebuffer.length;$++)t.deleteFramebuffer(y.__webglFramebuffer[$]);else t.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&t.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let $=0;$<y.__webglColorRenderbuffer.length;$++)y.__webglColorRenderbuffer[$]&&t.deleteRenderbuffer(y.__webglColorRenderbuffer[$]);y.__webglDepthRenderbuffer&&t.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const U=E.textures;for(let $=0,J=U.length;$<J;$++){const ie=i.get(U[$]);ie.__webglTexture&&(t.deleteTexture(ie.__webglTexture),o.memory.textures--),i.remove(U[$])}i.remove(E)}let D=0;function X(){D=0}function Z(){return D}function k(E){D=E}function G(){const E=D;return E>=r.maxTextures&&Ne("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),D+=1,E}function B(E){const y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function V(E,y){const U=i.get(E);if(E.isVideoTexture&&ut(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&U.__version!==E.version){const $=E.image;if($===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(U,E,y);return}}else E.isExternalTexture&&(U.__webglTexture=E.sourceTexture?E.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,U.__webglTexture,t.TEXTURE0+y)}function Y(E,y){const U=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){Ce(U,E,y);return}else E.isExternalTexture&&(U.__webglTexture=E.sourceTexture?E.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,U.__webglTexture,t.TEXTURE0+y)}function C(E,y){const U=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){Ce(U,E,y);return}n.bindTexture(t.TEXTURE_3D,U.__webglTexture,t.TEXTURE0+y)}function re(E,y){const U=i.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&U.__version!==E.version){De(U,E,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,U.__webglTexture,t.TEXTURE0+y)}const fe={[Nd]:t.REPEAT,[Hi]:t.CLAMP_TO_EDGE,[Ud]:t.MIRRORED_REPEAT},I={[Yt]:t.NEAREST,[PE]:t.NEAREST_MIPMAP_NEAREST,[el]:t.NEAREST_MIPMAP_LINEAR,[on]:t.LINEAR,[Oc]:t.LINEAR_MIPMAP_NEAREST,[Yr]:t.LINEAR_MIPMAP_LINEAR},ke={[DE]:t.NEVER,[OE]:t.ALWAYS,[kE]:t.LESS,[Pp]:t.LEQUAL,[NE]:t.EQUAL,[Lp]:t.GEQUAL,[UE]:t.GREATER,[FE]:t.NOTEQUAL};function Pe(E,y){if(y.type===Si&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===on||y.magFilter===Oc||y.magFilter===el||y.magFilter===Yr||y.minFilter===on||y.minFilter===Oc||y.minFilter===el||y.minFilter===Yr)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(E,t.TEXTURE_WRAP_S,fe[y.wrapS]),t.texParameteri(E,t.TEXTURE_WRAP_T,fe[y.wrapT]),(E===t.TEXTURE_3D||E===t.TEXTURE_2D_ARRAY)&&t.texParameteri(E,t.TEXTURE_WRAP_R,fe[y.wrapR]),t.texParameteri(E,t.TEXTURE_MAG_FILTER,I[y.magFilter]),t.texParameteri(E,t.TEXTURE_MIN_FILTER,I[y.minFilter]),y.compareFunction&&(t.texParameteri(E,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(E,t.TEXTURE_COMPARE_FUNC,ke[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Yt||y.minFilter!==el&&y.minFilter!==Yr||y.type===Si&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");t.texParameterf(E,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Q(E,y){let U=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",R));const $=y.source;let J=h.get($);J===void 0&&(J={},h.set($,J));const ie=B(y);if(ie!==E.__cacheKey){J[ie]===void 0&&(J[ie]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,U=!0),J[ie].usedTimes++;const ue=J[E.__cacheKey];ue!==void 0&&(J[E.__cacheKey].usedTimes--,ue.usedTimes===0&&T(y)),E.__cacheKey=ie,E.__webglTexture=J[ie].texture}return U}function he(E,y,U){return Math.floor(Math.floor(E/U)/y)}function ae(E,y,U,$){const ie=E.updateRanges;if(ie.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,y.width,y.height,U,$,y.data);else{ie.sort((me,ce)=>me.start-ce.start);let ue=0;for(let me=1;me<ie.length;me++){const ce=ie[ue],se=ie[me],Ue=ce.start+ce.count,Be=he(se.start,y.width,4),tt=he(ce.start,y.width,4);se.start<=Ue+1&&Be===tt&&he(se.start+se.count-1,y.width,4)===Be?ce.count=Math.max(ce.count,se.start+se.count-ce.start):(++ue,ie[ue]=se)}ie.length=ue+1;const K=n.getParameter(t.UNPACK_ROW_LENGTH),ee=n.getParameter(t.UNPACK_SKIP_PIXELS),ge=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,y.width);for(let me=0,ce=ie.length;me<ce;me++){const se=ie[me],Ue=Math.floor(se.start/4),Be=Math.ceil(se.count/4),tt=Ue%y.width,F=Math.floor(Ue/y.width),de=Be,te=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,tt),n.pixelStorei(t.UNPACK_SKIP_ROWS,F),n.texSubImage2D(t.TEXTURE_2D,0,tt,F,de,te,U,$,y.data)}E.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,K),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ee),n.pixelStorei(t.UNPACK_SKIP_ROWS,ge)}}function Ce(E,y,U){let $=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&($=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&($=t.TEXTURE_3D);const J=Q(E,y),ie=y.source;n.bindTexture($,E.__webglTexture,t.TEXTURE0+U);const ue=i.get(ie);if(ie.version!==ue.__version||J===!0){if(n.activeTexture(t.TEXTURE0+U),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const te=Ye.getPrimaries(Ye.workingColorSpace),Se=y.colorSpace===mr?null:Ye.getPrimaries(y.colorSpace),pe=y.colorSpace===mr||te===Se?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe)}n.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment);let ee=x(y.image,!1,r.maxTextureSize);ee=xe(y,ee);const ge=s.convert(y.format,y.colorSpace),me=s.convert(y.type);let ce=w(y.internalFormat,ge,me,y.normalized,y.colorSpace,y.isVideoTexture);Pe($,y);let se;const Ue=y.mipmaps,Be=y.isVideoTexture!==!0,tt=ue.__version===void 0||J===!0,F=ie.dataReady,de=M(y,ee);if(y.isDepthTexture)ce=A(y.format===Kr,y.type),tt&&(Be?n.texStorage2D(t.TEXTURE_2D,1,ce,ee.width,ee.height):n.texImage2D(t.TEXTURE_2D,0,ce,ee.width,ee.height,0,ge,me,null));else if(y.isDataTexture)if(Ue.length>0){Be&&tt&&n.texStorage2D(t.TEXTURE_2D,de,ce,Ue[0].width,Ue[0].height);for(let te=0,Se=Ue.length;te<Se;te++)se=Ue[te],Be?F&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,se.width,se.height,ge,me,se.data):n.texImage2D(t.TEXTURE_2D,te,ce,se.width,se.height,0,ge,me,se.data);y.generateMipmaps=!1}else Be?(tt&&n.texStorage2D(t.TEXTURE_2D,de,ce,ee.width,ee.height),F&&ae(y,ee,ge,me)):n.texImage2D(t.TEXTURE_2D,0,ce,ee.width,ee.height,0,ge,me,ee.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Be&&tt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,ce,Ue[0].width,Ue[0].height,ee.depth);for(let te=0,Se=Ue.length;te<Se;te++)if(se=Ue[te],y.format!==oi)if(ge!==null)if(Be){if(F)if(y.layerUpdates.size>0){const pe=Zg(se.width,se.height,y.format,y.type);for(const ne of y.layerUpdates){const be=se.data.subarray(ne*pe/se.data.BYTES_PER_ELEMENT,(ne+1)*pe/se.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,ne,se.width,se.height,1,ge,be)}y.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,se.width,se.height,ee.depth,ge,se.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,te,ce,se.width,se.height,ee.depth,0,se.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?F&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,se.width,se.height,ee.depth,ge,me,se.data):n.texImage3D(t.TEXTURE_2D_ARRAY,te,ce,se.width,se.height,ee.depth,0,ge,me,se.data)}else{Be&&tt&&n.texStorage2D(t.TEXTURE_2D,de,ce,Ue[0].width,Ue[0].height);for(let te=0,Se=Ue.length;te<Se;te++)se=Ue[te],y.format!==oi?ge!==null?Be?F&&n.compressedTexSubImage2D(t.TEXTURE_2D,te,0,0,se.width,se.height,ge,se.data):n.compressedTexImage2D(t.TEXTURE_2D,te,ce,se.width,se.height,0,se.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?F&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,se.width,se.height,ge,me,se.data):n.texImage2D(t.TEXTURE_2D,te,ce,se.width,se.height,0,ge,me,se.data)}else if(y.isDataArrayTexture)if(Be){if(tt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,ce,ee.width,ee.height,ee.depth),F)if(y.layerUpdates.size>0){const te=Zg(ee.width,ee.height,y.format,y.type);for(const Se of y.layerUpdates){const pe=ee.data.subarray(Se*te/ee.data.BYTES_PER_ELEMENT,(Se+1)*te/ee.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Se,ee.width,ee.height,1,ge,me,pe)}y.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ge,me,ee.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ce,ee.width,ee.height,ee.depth,0,ge,me,ee.data);else if(y.isData3DTexture)Be?(tt&&n.texStorage3D(t.TEXTURE_3D,de,ce,ee.width,ee.height,ee.depth),F&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ge,me,ee.data)):n.texImage3D(t.TEXTURE_3D,0,ce,ee.width,ee.height,ee.depth,0,ge,me,ee.data);else if(y.isFramebufferTexture){if(tt)if(Be)n.texStorage2D(t.TEXTURE_2D,de,ce,ee.width,ee.height);else{let te=ee.width,Se=ee.height;for(let pe=0;pe<de;pe++)n.texImage2D(t.TEXTURE_2D,pe,ce,te,Se,0,ge,me,null),te>>=1,Se>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in t){const te=t.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),ee.parentNode!==te){te.appendChild(ee),c.add(y),te.onpaint=Oe=>{const Lt=Oe.changedElements;for(const ct of c)Lt.includes(ct.image)&&(ct.needsUpdate=!0)},te.requestPaint();return}const Se=0,pe=t.RGBA,ne=t.RGBA,be=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,Se,pe,ne,be,ee),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ue.length>0){if(Be&&tt){const te=Mt(Ue[0]);n.texStorage2D(t.TEXTURE_2D,de,ce,te.width,te.height)}for(let te=0,Se=Ue.length;te<Se;te++)se=Ue[te],Be?F&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,ge,me,se):n.texImage2D(t.TEXTURE_2D,te,ce,ge,me,se);y.generateMipmaps=!1}else if(Be){if(tt){const te=Mt(ee);n.texStorage2D(t.TEXTURE_2D,de,ce,te.width,te.height)}F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,me,ee)}else n.texImage2D(t.TEXTURE_2D,0,ce,ge,me,ee);p(y)&&g($),ue.__version=ie.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function De(E,y,U){if(y.image.length!==6)return;const $=Q(E,y),J=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,E.__webglTexture,t.TEXTURE0+U);const ie=i.get(J);if(J.version!==ie.__version||$===!0){n.activeTexture(t.TEXTURE0+U);const ue=Ye.getPrimaries(Ye.workingColorSpace),K=y.colorSpace===mr?null:Ye.getPrimaries(y.colorSpace),ee=y.colorSpace===mr||ue===K?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const ge=y.isCompressedTexture||y.image[0].isCompressedTexture,me=y.image[0]&&y.image[0].isDataTexture,ce=[];for(let ne=0;ne<6;ne++)!ge&&!me?ce[ne]=x(y.image[ne],!0,r.maxCubemapSize):ce[ne]=me?y.image[ne].image:y.image[ne],ce[ne]=xe(y,ce[ne]);const se=ce[0],Ue=s.convert(y.format,y.colorSpace),Be=s.convert(y.type),tt=w(y.internalFormat,Ue,Be,y.normalized,y.colorSpace),F=y.isVideoTexture!==!0,de=ie.__version===void 0||$===!0,te=J.dataReady;let Se=M(y,se);Pe(t.TEXTURE_CUBE_MAP,y);let pe;if(ge){F&&de&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Se,tt,se.width,se.height);for(let ne=0;ne<6;ne++){pe=ce[ne].mipmaps;for(let be=0;be<pe.length;be++){const Oe=pe[be];y.format!==oi?Ue!==null?F?te&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be,0,0,Oe.width,Oe.height,Ue,Oe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be,tt,Oe.width,Oe.height,0,Oe.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be,0,0,Oe.width,Oe.height,Ue,Be,Oe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be,tt,Oe.width,Oe.height,0,Ue,Be,Oe.data)}}}else{if(pe=y.mipmaps,F&&de){pe.length>0&&Se++;const ne=Mt(ce[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Se,tt,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(me){F?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ce[ne].width,ce[ne].height,Ue,Be,ce[ne].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,tt,ce[ne].width,ce[ne].height,0,Ue,Be,ce[ne].data);for(let be=0;be<pe.length;be++){const Lt=pe[be].image[ne].image;F?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be+1,0,0,Lt.width,Lt.height,Ue,Be,Lt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be+1,tt,Lt.width,Lt.height,0,Ue,Be,Lt.data)}}else{F?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ue,Be,ce[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,tt,Ue,Be,ce[ne]);for(let be=0;be<pe.length;be++){const Oe=pe[be];F?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be+1,0,0,Ue,Be,Oe.image[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be+1,tt,Ue,Be,Oe.image[ne])}}}p(y)&&g(t.TEXTURE_CUBE_MAP),ie.__version=J.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function Le(E,y,U,$,J,ie){const ue=s.convert(U.format,U.colorSpace),K=s.convert(U.type),ee=w(U.internalFormat,ue,K,U.normalized,U.colorSpace),ge=i.get(y),me=i.get(U);if(me.__renderTarget=y,!ge.__hasExternalTextures){const ce=Math.max(1,y.width>>ie),se=Math.max(1,y.height>>ie);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,ie,ee,ce,se,y.depth,0,ue,K,null):n.texImage2D(J,ie,ee,ce,se,0,ue,K,null)}n.bindFramebuffer(t.FRAMEBUFFER,E),Xe(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,$,J,me.__webglTexture,0,Pt(y)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,$,J,me.__webglTexture,ie),n.bindFramebuffer(t.FRAMEBUFFER,null)}function _t(E,y,U){if(t.bindRenderbuffer(t.RENDERBUFFER,E),y.depthBuffer){const $=y.depthTexture,J=$&&$.isDepthTexture?$.type:null,ie=A(y.stencilBuffer,J),ue=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Xe(y)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Pt(y),ie,y.width,y.height):U?t.renderbufferStorageMultisample(t.RENDERBUFFER,Pt(y),ie,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,ie,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ue,t.RENDERBUFFER,E)}else{const $=y.textures;for(let J=0;J<$.length;J++){const ie=$[J],ue=s.convert(ie.format,ie.colorSpace),K=s.convert(ie.type),ee=w(ie.internalFormat,ue,K,ie.normalized,ie.colorSpace);Xe(y)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Pt(y),ee,y.width,y.height):U?t.renderbufferStorageMultisample(t.RENDERBUFFER,Pt(y),ee,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,ee,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function je(E,y,U){const $=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=i.get(y.depthTexture);if(J.__renderTarget=y,(!J.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),$){if(J.__webglInit===void 0&&(J.__webglInit=!0,y.depthTexture.addEventListener("dispose",R)),J.__webglTexture===void 0){J.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),Pe(t.TEXTURE_CUBE_MAP,y.depthTexture);const ge=s.convert(y.depthTexture.format),me=s.convert(y.depthTexture.type);let ce;y.depthTexture.format===Zi?ce=t.DEPTH_COMPONENT24:y.depthTexture.format===Kr&&(ce=t.DEPTH24_STENCIL8);for(let se=0;se<6;se++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ce,y.width,y.height,0,ge,me,null)}}else V(y.depthTexture,0);const ie=J.__webglTexture,ue=Pt(y),K=$?t.TEXTURE_CUBE_MAP_POSITIVE_X+U:t.TEXTURE_2D,ee=y.depthTexture.format===Kr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(y.depthTexture.format===Zi)Xe(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,K,ie,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,ee,K,ie,0);else if(y.depthTexture.format===Kr)Xe(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,K,ie,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,ee,K,ie,0);else throw new Error("Unknown depthTexture format")}function it(E){const y=i.get(E),U=E.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==E.depthTexture){const $=E.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),$){const J=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,$.removeEventListener("dispose",J)};$.addEventListener("dispose",J),y.__depthDisposeCallback=J}y.__boundDepthTexture=$}if(E.depthTexture&&!y.__autoAllocateDepthBuffer)if(U)for(let $=0;$<6;$++)je(y.__webglFramebuffer[$],E,$);else{const $=E.texture.mipmaps;$&&$.length>0?je(y.__webglFramebuffer[0],E,0):je(y.__webglFramebuffer,E,0)}else if(U){y.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[$]),y.__webglDepthbuffer[$]===void 0)y.__webglDepthbuffer[$]=t.createRenderbuffer(),_t(y.__webglDepthbuffer[$],E,!1);else{const J=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=y.__webglDepthbuffer[$];t.bindRenderbuffer(t.RENDERBUFFER,ie),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,ie)}}else{const $=E.texture.mipmaps;if($&&$.length>0?n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=t.createRenderbuffer(),_t(y.__webglDepthbuffer,E,!1);else{const J=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=y.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ie),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,ie)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function lt(E,y,U){const $=i.get(E);y!==void 0&&Le($.__webglFramebuffer,E,E.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),U!==void 0&&it(E)}function He(E){const y=E.texture,U=i.get(E),$=i.get(y);E.addEventListener("dispose",S);const J=E.textures,ie=E.isWebGLCubeRenderTarget===!0,ue=J.length>1;if(ue||($.__webglTexture===void 0&&($.__webglTexture=t.createTexture()),$.__version=y.version,o.memory.textures++),ie){U.__webglFramebuffer=[];for(let K=0;K<6;K++)if(y.mipmaps&&y.mipmaps.length>0){U.__webglFramebuffer[K]=[];for(let ee=0;ee<y.mipmaps.length;ee++)U.__webglFramebuffer[K][ee]=t.createFramebuffer()}else U.__webglFramebuffer[K]=t.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){U.__webglFramebuffer=[];for(let K=0;K<y.mipmaps.length;K++)U.__webglFramebuffer[K]=t.createFramebuffer()}else U.__webglFramebuffer=t.createFramebuffer();if(ue)for(let K=0,ee=J.length;K<ee;K++){const ge=i.get(J[K]);ge.__webglTexture===void 0&&(ge.__webglTexture=t.createTexture(),o.memory.textures++)}if(E.samples>0&&Xe(E)===!1){U.__webglMultisampledFramebuffer=t.createFramebuffer(),U.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let K=0;K<J.length;K++){const ee=J[K];U.__webglColorRenderbuffer[K]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,U.__webglColorRenderbuffer[K]);const ge=s.convert(ee.format,ee.colorSpace),me=s.convert(ee.type),ce=w(ee.internalFormat,ge,me,ee.normalized,ee.colorSpace,E.isXRRenderTarget===!0),se=Pt(E);t.renderbufferStorageMultisample(t.RENDERBUFFER,se,ce,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+K,t.RENDERBUFFER,U.__webglColorRenderbuffer[K])}t.bindRenderbuffer(t.RENDERBUFFER,null),E.depthBuffer&&(U.__webglDepthRenderbuffer=t.createRenderbuffer(),_t(U.__webglDepthRenderbuffer,E,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ie){n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture),Pe(t.TEXTURE_CUBE_MAP,y);for(let K=0;K<6;K++)if(y.mipmaps&&y.mipmaps.length>0)for(let ee=0;ee<y.mipmaps.length;ee++)Le(U.__webglFramebuffer[K][ee],E,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+K,ee);else Le(U.__webglFramebuffer[K],E,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);p(y)&&g(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ue){for(let K=0,ee=J.length;K<ee;K++){const ge=J[K],me=i.get(ge);let ce=t.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ce=E.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,me.__webglTexture),Pe(ce,ge),Le(U.__webglFramebuffer,E,ge,t.COLOR_ATTACHMENT0+K,ce,0),p(ge)&&g(ce)}n.unbindTexture()}else{let K=t.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(K=E.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(K,$.__webglTexture),Pe(K,y),y.mipmaps&&y.mipmaps.length>0)for(let ee=0;ee<y.mipmaps.length;ee++)Le(U.__webglFramebuffer[ee],E,y,t.COLOR_ATTACHMENT0,K,ee);else Le(U.__webglFramebuffer,E,y,t.COLOR_ATTACHMENT0,K,0);p(y)&&g(K),n.unbindTexture()}E.depthBuffer&&it(E)}function At(E){const y=E.textures;for(let U=0,$=y.length;U<$;U++){const J=y[U];if(p(J)){const ie=_(E),ue=i.get(J).__webglTexture;n.bindTexture(ie,ue),g(ie),n.unbindTexture()}}}const vt=[],Qt=[];function O(E){if(E.samples>0){if(Xe(E)===!1){const y=E.textures,U=E.width,$=E.height;let J=t.COLOR_BUFFER_BIT;const ie=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=i.get(E),K=y.length>1;if(K)for(let ge=0;ge<y.length;ge++)n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);const ee=E.texture.mipmaps;ee&&ee.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let ge=0;ge<y.length;ge++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),K){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ue.__webglColorRenderbuffer[ge]);const me=i.get(y[ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,me,0)}t.blitFramebuffer(0,0,U,$,0,0,U,$,J,t.NEAREST),l===!0&&(vt.length=0,Qt.length=0,vt.push(t.COLOR_ATTACHMENT0+ge),E.depthBuffer&&E.resolveDepthBuffer===!1&&(vt.push(ie),Qt.push(ie),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Qt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,vt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),K)for(let ge=0;ge<y.length;ge++){n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,ue.__webglColorRenderbuffer[ge]);const me=i.get(y[ge]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,me,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const y=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[y])}}}function Pt(E){return Math.min(r.maxSamples,E.samples)}function Xe(E){const y=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ut(E){const y=o.render.frame;f.get(E)!==y&&(f.set(E,y),E.update())}function xe(E,y){const U=E.colorSpace,$=E.format,J=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||U!==Mu&&U!==mr&&(Ye.getTransfer(U)===st?($!==oi||J!==Xn)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Je("WebGLTextures: Unsupported texture color space:",U)),y}function Mt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(u.width=E.naturalWidth||E.width,u.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(u.width=E.displayWidth,u.height=E.displayHeight):(u.width=E.width,u.height=E.height),u}this.allocateTextureUnit=G,this.resetTextureUnits=X,this.getTextureUnits=Z,this.setTextureUnits=k,this.setTexture2D=V,this.setTexture2DArray=Y,this.setTexture3D=C,this.setTextureCube=re,this.rebindTextures=lt,this.setupRenderTarget=He,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=O,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=Xe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function uR(t,e){function n(i,r=mr){let s;const o=Ye.getTransfer(r);if(i===Xn)return t.UNSIGNED_BYTE;if(i===Tp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===bp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Xv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===$v)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Wv)return t.BYTE;if(i===jv)return t.SHORT;if(i===va)return t.UNSIGNED_SHORT;if(i===wp)return t.INT;if(i===Ci)return t.UNSIGNED_INT;if(i===Si)return t.FLOAT;if(i===Ki)return t.HALF_FLOAT;if(i===qv)return t.ALPHA;if(i===Yv)return t.RGB;if(i===oi)return t.RGBA;if(i===Zi)return t.DEPTH_COMPONENT;if(i===Kr)return t.DEPTH_STENCIL;if(i===Kv)return t.RED;if(i===Ap)return t.RED_INTEGER;if(i===os)return t.RG;if(i===Cp)return t.RG_INTEGER;if(i===Rp)return t.RGBA_INTEGER;if(i===Hl||i===Gl||i===Wl||i===jl)if(o===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Hl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Gl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Wl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===jl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Hl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Gl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Wl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===jl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Fd||i===Od||i===zd||i===Bd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Fd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Od)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===zd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Bd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Vd||i===Hd||i===Gd||i===Wd||i===jd||i===yu||i===Xd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Vd||i===Hd)return o===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Gd)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Wd)return s.COMPRESSED_R11_EAC;if(i===jd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===yu)return s.COMPRESSED_RG11_EAC;if(i===Xd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===$d||i===qd||i===Yd||i===Kd||i===Zd||i===Qd||i===Jd||i===eh||i===th||i===nh||i===ih||i===rh||i===sh||i===oh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===$d)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===qd)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Yd)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Kd)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Zd)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Qd)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Jd)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===eh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===th)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===nh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ih)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===rh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===sh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===oh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ah||i===lh||i===uh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ah)return o===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===lh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===uh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ch||i===fh||i===Su||i===dh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ch)return s.COMPRESSED_RED_RGTC1_EXT;if(i===fh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Su)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===dh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ya?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const cR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class dR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new ay(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ri({vertexShader:cR,fragmentShader:fR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new fi(new Ju(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hR extends fs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,f=null,c=null,d=null,h=null,m=null;const v=typeof XRWebGLBinding<"u",x=new dR,p={},g=n.getContextAttributes();let _=null,w=null;const A=[],M=[],R=new nt;let S=null;const P=new Wn;P.viewport=new Nt;const T=new Wn;T.viewport=new Nt;const L=[P,T],D=new Ew;let X=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let he=A[Q];return he===void 0&&(he=new Xc,A[Q]=he),he.getTargetRaySpace()},this.getControllerGrip=function(Q){let he=A[Q];return he===void 0&&(he=new Xc,A[Q]=he),he.getGripSpace()},this.getHand=function(Q){let he=A[Q];return he===void 0&&(he=new Xc,A[Q]=he),he.getHandSpace()};function k(Q){const he=M.indexOf(Q.inputSource);if(he===-1)return;const ae=A[he];ae!==void 0&&(ae.update(Q.inputSource,Q.frame,u||o),ae.dispatchEvent({type:Q.type,data:Q.inputSource}))}function G(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",B);for(let Q=0;Q<A.length;Q++){const he=M[Q];he!==null&&(M[Q]=null,A[Q].disconnect(he))}X=null,Z=null,x.reset();for(const Q in p)delete p[Q];e.setRenderTarget(_),h=null,d=null,c=null,r=null,w=null,Pe.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,i.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(Q){u=Q},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return c===null&&v&&(c=new XRWebGLBinding(r,n)),c},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",G),r.addEventListener("inputsourceschange",B),g.xrCompatible!==!0&&await n.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,Ce=null,De=null;g.depth&&(De=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ae=g.stencil?Kr:Zi,Ce=g.stencil?ya:Ci);const Le={colorFormat:n.RGBA8,depthFormat:De,scaleFactor:s};c=this.getBinding(),d=c.createProjectionLayer(Le),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),w=new bi(d.textureWidth,d.textureHeight,{format:oi,type:Xn,depthTexture:new lo(d.textureWidth,d.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ae={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,n,ae),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),w=new bi(h.framebufferWidth,h.framebufferHeight,{format:oi,type:Xn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Pe.setContext(r),Pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function B(Q){for(let he=0;he<Q.removed.length;he++){const ae=Q.removed[he],Ce=M.indexOf(ae);Ce>=0&&(M[Ce]=null,A[Ce].disconnect(ae))}for(let he=0;he<Q.added.length;he++){const ae=Q.added[he];let Ce=M.indexOf(ae);if(Ce===-1){for(let Le=0;Le<A.length;Le++)if(Le>=M.length){M.push(ae),Ce=Le;break}else if(M[Le]===null){M[Le]=ae,Ce=Le;break}if(Ce===-1)break}const De=A[Ce];De&&De.connect(ae)}}const V=new H,Y=new H;function C(Q,he,ae){V.setFromMatrixPosition(he.matrixWorld),Y.setFromMatrixPosition(ae.matrixWorld);const Ce=V.distanceTo(Y),De=he.projectionMatrix.elements,Le=ae.projectionMatrix.elements,_t=De[14]/(De[10]-1),je=De[14]/(De[10]+1),it=(De[9]+1)/De[5],lt=(De[9]-1)/De[5],He=(De[8]-1)/De[0],At=(Le[8]+1)/Le[0],vt=_t*He,Qt=_t*At,O=Ce/(-He+At),Pt=O*-He;if(he.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Pt),Q.translateZ(O),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),De[10]===-1)Q.projectionMatrix.copy(he.projectionMatrix),Q.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const Xe=_t+O,ut=je+O,xe=vt-Pt,Mt=Qt+(Ce-Pt),E=it*je/ut*Xe,y=lt*je/ut*Xe;Q.projectionMatrix.makePerspective(xe,Mt,E,y,Xe,ut),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function re(Q,he){he===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(he.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let he=Q.near,ae=Q.far;x.texture!==null&&(x.depthNear>0&&(he=x.depthNear),x.depthFar>0&&(ae=x.depthFar)),D.near=T.near=P.near=he,D.far=T.far=P.far=ae,(X!==D.near||Z!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),X=D.near,Z=D.far),D.layers.mask=Q.layers.mask|6,P.layers.mask=D.layers.mask&-5,T.layers.mask=D.layers.mask&-3;const Ce=Q.parent,De=D.cameras;re(D,Ce);for(let Le=0;Le<De.length;Le++)re(De[Le],Ce);De.length===2?C(D,P,T):D.projectionMatrix.copy(P.projectionMatrix),fe(Q,D,Ce)};function fe(Q,he,ae){ae===null?Q.matrix.copy(he.matrixWorld):(Q.matrix.copy(ae.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(he.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(he.projectionMatrix),Q.projectionMatrixInverse.copy(he.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=ph*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(D)},this.getCameraTexture=function(Q){return p[Q]};let I=null;function ke(Q,he){if(f=he.getViewerPose(u||o),m=he,f!==null){const ae=f.views;h!==null&&(e.setRenderTargetFramebuffer(w,h.framebuffer),e.setRenderTarget(w));let Ce=!1;ae.length!==D.cameras.length&&(D.cameras.length=0,Ce=!0);for(let je=0;je<ae.length;je++){const it=ae[je];let lt=null;if(h!==null)lt=h.getViewport(it);else{const At=c.getViewSubImage(d,it);lt=At.viewport,je===0&&(e.setRenderTargetTextures(w,At.colorTexture,At.depthStencilTexture),e.setRenderTarget(w))}let He=L[je];He===void 0&&(He=new Wn,He.layers.enable(je),He.viewport=new Nt,L[je]=He),He.matrix.fromArray(it.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(it.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(lt.x,lt.y,lt.width,lt.height),je===0&&(D.matrix.copy(He.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ce===!0&&D.cameras.push(He)}const De=r.enabledFeatures;if(De&&De.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){c=i.getBinding();const je=c.getDepthInformation(ae[0]);je&&je.isValid&&je.texture&&x.init(je,r.renderState)}if(De&&De.includes("camera-access")&&v){e.state.unbindTexture(),c=i.getBinding();for(let je=0;je<ae.length;je++){const it=ae[je].camera;if(it){let lt=p[it];lt||(lt=new ay,p[it]=lt);const He=c.getCameraImage(it);lt.sourceTexture=He}}}}for(let ae=0;ae<A.length;ae++){const Ce=M[ae],De=A[ae];Ce!==null&&De!==void 0&&De.update(Ce,he,u||o)}I&&I(Q,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),m=null}const Pe=new fy;Pe.setAnimationLoop(ke),this.setAnimationLoop=function(Q){I=Q},this.dispose=function(){}}}const pR=new zt,_y=new Fe;_y.set(-1,0,0,0,1,0,0,0,1);function mR(t,e){function n(x,p){x.matrixAutoUpdate===!0&&x.updateMatrix(),p.value.copy(x.matrix)}function i(x,p){p.color.getRGB(x.fogColor.value,ly(t)),p.isFog?(x.fogNear.value=p.near,x.fogFar.value=p.far):p.isFogExp2&&(x.fogDensity.value=p.density)}function r(x,p,g,_,w){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(x,p):p.isMeshLambertMaterial?(s(x,p),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(x,p),c(x,p)):p.isMeshPhongMaterial?(s(x,p),f(x,p),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(x,p),d(x,p),p.isMeshPhysicalMaterial&&h(x,p,w)):p.isMeshMatcapMaterial?(s(x,p),m(x,p)):p.isMeshDepthMaterial?s(x,p):p.isMeshDistanceMaterial?(s(x,p),v(x,p)):p.isMeshNormalMaterial?s(x,p):p.isLineBasicMaterial?(o(x,p),p.isLineDashedMaterial&&a(x,p)):p.isPointsMaterial?l(x,p,g,_):p.isSpriteMaterial?u(x,p):p.isShadowMaterial?(x.color.value.copy(p.color),x.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(x,p){x.opacity.value=p.opacity,p.color&&x.diffuse.value.copy(p.color),p.emissive&&x.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(x.map.value=p.map,n(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,n(p.alphaMap,x.alphaMapTransform)),p.bumpMap&&(x.bumpMap.value=p.bumpMap,n(p.bumpMap,x.bumpMapTransform),x.bumpScale.value=p.bumpScale,p.side===wn&&(x.bumpScale.value*=-1)),p.normalMap&&(x.normalMap.value=p.normalMap,n(p.normalMap,x.normalMapTransform),x.normalScale.value.copy(p.normalScale),p.side===wn&&x.normalScale.value.negate()),p.displacementMap&&(x.displacementMap.value=p.displacementMap,n(p.displacementMap,x.displacementMapTransform),x.displacementScale.value=p.displacementScale,x.displacementBias.value=p.displacementBias),p.emissiveMap&&(x.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,x.emissiveMapTransform)),p.specularMap&&(x.specularMap.value=p.specularMap,n(p.specularMap,x.specularMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest);const g=e.get(p),_=g.envMap,w=g.envMapRotation;_&&(x.envMap.value=_,x.envMapRotation.value.setFromMatrix4(pR.makeRotationFromEuler(w)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(_y),x.reflectivity.value=p.reflectivity,x.ior.value=p.ior,x.refractionRatio.value=p.refractionRatio),p.lightMap&&(x.lightMap.value=p.lightMap,x.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,x.lightMapTransform)),p.aoMap&&(x.aoMap.value=p.aoMap,x.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,x.aoMapTransform))}function o(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,p.map&&(x.map.value=p.map,n(p.map,x.mapTransform))}function a(x,p){x.dashSize.value=p.dashSize,x.totalSize.value=p.dashSize+p.gapSize,x.scale.value=p.scale}function l(x,p,g,_){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.size.value=p.size*g,x.scale.value=_*.5,p.map&&(x.map.value=p.map,n(p.map,x.uvTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,n(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function u(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.rotation.value=p.rotation,p.map&&(x.map.value=p.map,n(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,n(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function f(x,p){x.specular.value.copy(p.specular),x.shininess.value=Math.max(p.shininess,1e-4)}function c(x,p){p.gradientMap&&(x.gradientMap.value=p.gradientMap)}function d(x,p){x.metalness.value=p.metalness,p.metalnessMap&&(x.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,x.metalnessMapTransform)),x.roughness.value=p.roughness,p.roughnessMap&&(x.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,x.roughnessMapTransform)),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)}function h(x,p,g){x.ior.value=p.ior,p.sheen>0&&(x.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),x.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(x.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,x.sheenColorMapTransform)),p.sheenRoughnessMap&&(x.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,x.sheenRoughnessMapTransform))),p.clearcoat>0&&(x.clearcoat.value=p.clearcoat,x.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(x.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,x.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(x.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===wn&&x.clearcoatNormalScale.value.negate())),p.dispersion>0&&(x.dispersion.value=p.dispersion),p.iridescence>0&&(x.iridescence.value=p.iridescence,x.iridescenceIOR.value=p.iridescenceIOR,x.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(x.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,x.iridescenceMapTransform)),p.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),p.transmission>0&&(x.transmission.value=p.transmission,x.transmissionSamplerMap.value=g.texture,x.transmissionSamplerSize.value.set(g.width,g.height),p.transmissionMap&&(x.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,x.transmissionMapTransform)),x.thickness.value=p.thickness,p.thicknessMap&&(x.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=p.attenuationDistance,x.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(x.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(x.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=p.specularIntensity,x.specularColor.value.copy(p.specularColor),p.specularColorMap&&(x.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,x.specularColorMapTransform)),p.specularIntensityMap&&(x.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,x.specularIntensityMapTransform))}function m(x,p){p.matcap&&(x.matcap.value=p.matcap)}function v(x,p){const g=e.get(p).light;x.referencePosition.value.setFromMatrixPosition(g.matrixWorld),x.nearDistance.value=g.shadow.camera.near,x.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function gR(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,_){const w=_.program;i.uniformBlockBinding(g,w)}function u(g,_){let w=r[g.id];w===void 0&&(m(g),w=f(g),r[g.id]=w,g.addEventListener("dispose",x));const A=_.program;i.updateUBOMapping(g,A);const M=e.render.frame;s[g.id]!==M&&(d(g),s[g.id]=M)}function f(g){const _=c();g.__bindingPointIndex=_;const w=t.createBuffer(),A=g.__size,M=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,A,M),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,w),w}function c(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return Je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(g){const _=r[g.id],w=g.uniforms,A=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let M=0,R=w.length;M<R;M++){const S=Array.isArray(w[M])?w[M]:[w[M]];for(let P=0,T=S.length;P<T;P++){const L=S[P];if(h(L,M,P,A)===!0){const D=L.__offset,X=Array.isArray(L.value)?L.value:[L.value];let Z=0;for(let k=0;k<X.length;k++){const G=X[k],B=v(G);typeof G=="number"||typeof G=="boolean"?(L.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,D+Z,L.__data)):G.isMatrix3?(L.__data[0]=G.elements[0],L.__data[1]=G.elements[1],L.__data[2]=G.elements[2],L.__data[3]=0,L.__data[4]=G.elements[3],L.__data[5]=G.elements[4],L.__data[6]=G.elements[5],L.__data[7]=0,L.__data[8]=G.elements[6],L.__data[9]=G.elements[7],L.__data[10]=G.elements[8],L.__data[11]=0):ArrayBuffer.isView(G)?L.__data.set(new G.constructor(G.buffer,G.byteOffset,L.__data.length)):(G.toArray(L.__data,Z),Z+=B.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,D,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(g,_,w,A){const M=g.value,R=_+"_"+w;if(A[R]===void 0)return typeof M=="number"||typeof M=="boolean"?A[R]=M:ArrayBuffer.isView(M)?A[R]=M.slice():A[R]=M.clone(),!0;{const S=A[R];if(typeof M=="number"||typeof M=="boolean"){if(S!==M)return A[R]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(S.equals(M)===!1)return S.copy(M),!0}}return!1}function m(g){const _=g.uniforms;let w=0;const A=16;for(let R=0,S=_.length;R<S;R++){const P=Array.isArray(_[R])?_[R]:[_[R]];for(let T=0,L=P.length;T<L;T++){const D=P[T],X=Array.isArray(D.value)?D.value:[D.value];for(let Z=0,k=X.length;Z<k;Z++){const G=X[Z],B=v(G),V=w%A,Y=V%B.boundary,C=V+Y;w+=Y,C!==0&&A-C<B.storage&&(w+=A-C),D.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=w,w+=B.storage}}}const M=w%A;return M>0&&(w+=A-M),g.__size=w,g.__cache={},this}function v(g){const _={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(g)?(_.boundary=16,_.storage=g.byteLength):Ne("WebGLRenderer: Unsupported uniform value type.",g),_}function x(g){const _=g.target;_.removeEventListener("dispose",x);const w=o.indexOf(_.__bindingPointIndex);o.splice(w,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function p(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:u,dispose:p}}const xR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let gi=null;function _R(){return gi===null&&(gi=new uw(xR,16,16,os,Ki),gi.name="DFG_LUT",gi.minFilter=on,gi.magFilter=on,gi.wrapS=Hi,gi.wrapT=Hi,gi.generateMipmaps=!1,gi.needsUpdate=!0),gi}class vR{constructor(e={}){const{canvas:n=BE(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:c=!1,reversedDepthBuffer:d=!1,outputBufferType:h=Xn}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const v=h,x=new Set([Rp,Cp,Ap]),p=new Set([Xn,Ci,va,ya,Tp,bp]),g=new Uint32Array(4),_=new Int32Array(4),w=new H;let A=null,M=null;const R=[],S=[];let P=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let L=!1,D=null;this._outputColorSpace=Vn;let X=0,Z=0,k=null,G=-1,B=null;const V=new Nt,Y=new Nt;let C=null;const re=new rt(0);let fe=0,I=n.width,ke=n.height,Pe=1,Q=null,he=null;const ae=new Nt(0,0,I,ke),Ce=new Nt(0,0,I,ke);let De=!1;const Le=new ry;let _t=!1,je=!1;const it=new zt,lt=new H,He=new Nt,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let vt=!1;function Qt(){return k===null?Pe:1}let O=i;function Pt(b,z){return n.getContext(b,z)}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:c};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ep}`),n.addEventListener("webglcontextlost",ne,!1),n.addEventListener("webglcontextrestored",be,!1),n.addEventListener("webglcontextcreationerror",Oe,!1),O===null){const z="webgl2";if(O=Pt(z,b),O===null)throw Pt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw Je("WebGLRenderer: "+b.message),b}let Xe,ut,xe,Mt,E,y,U,$,J,ie,ue,K,ee,ge,me,ce,se,Ue,Be,tt,F,de,te;function Se(){Xe=new _A(O),Xe.init(),F=new uR(O,Xe),ut=new cA(O,Xe,e,F),xe=new aR(O,Xe),ut.reversedDepthBuffer&&d&&xe.buffers.depth.setReversed(!0),Mt=new SA(O),E=new $C,y=new lR(O,Xe,xe,E,ut,F,Mt),U=new xA(T),$=new Tw(O),de=new lA(O,$),J=new vA(O,$,Mt,de),ie=new EA(O,J,$,de,Mt),Ue=new MA(O,ut,y),me=new fA(E),ue=new XC(T,U,Xe,ut,de,me),K=new mR(T,E),ee=new YC,ge=new tR(Xe),se=new aA(T,U,xe,ie,m,l),ce=new oR(T,ie,ut),te=new gR(O,Mt,ut,xe),Be=new uA(O,Xe,Mt),tt=new yA(O,Xe,Mt),Mt.programs=ue.programs,T.capabilities=ut,T.extensions=Xe,T.properties=E,T.renderLists=ee,T.shadowMap=ce,T.state=xe,T.info=Mt}Se(),v!==Xn&&(P=new TA(v,n.width,n.height,r,s));const pe=new hR(T,O);this.xr=pe,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const b=Xe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Xe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Pe},this.setPixelRatio=function(b){b!==void 0&&(Pe=b,this.setSize(I,ke,!1))},this.getSize=function(b){return b.set(I,ke)},this.setSize=function(b,z,q=!0){if(pe.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}I=b,ke=z,n.width=Math.floor(b*Pe),n.height=Math.floor(z*Pe),q===!0&&(n.style.width=b+"px",n.style.height=z+"px"),P!==null&&P.setSize(n.width,n.height),this.setViewport(0,0,b,z)},this.getDrawingBufferSize=function(b){return b.set(I*Pe,ke*Pe).floor()},this.setDrawingBufferSize=function(b,z,q){I=b,ke=z,Pe=q,n.width=Math.floor(b*q),n.height=Math.floor(z*q),this.setViewport(0,0,b,z)},this.setEffects=function(b){if(v===Xn){Je("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let z=0;z<b.length;z++)if(b[z].isOutputPass===!0){Ne("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(V)},this.getViewport=function(b){return b.copy(ae)},this.setViewport=function(b,z,q,W){b.isVector4?ae.set(b.x,b.y,b.z,b.w):ae.set(b,z,q,W),xe.viewport(V.copy(ae).multiplyScalar(Pe).round())},this.getScissor=function(b){return b.copy(Ce)},this.setScissor=function(b,z,q,W){b.isVector4?Ce.set(b.x,b.y,b.z,b.w):Ce.set(b,z,q,W),xe.scissor(Y.copy(Ce).multiplyScalar(Pe).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(b){xe.setScissorTest(De=b)},this.setOpaqueSort=function(b){Q=b},this.setTransparentSort=function(b){he=b},this.getClearColor=function(b){return b.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor(...arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha(...arguments)},this.clear=function(b=!0,z=!0,q=!0){let W=0;if(b){let j=!1;if(k!==null){const ye=k.texture.format;j=x.has(ye)}if(j){const ye=k.texture.type,Ee=p.has(ye),ve=se.getClearColor(),Te=se.getClearAlpha(),Ae=ve.r,ze=ve.g,We=ve.b;Ee?(g[0]=Ae,g[1]=ze,g[2]=We,g[3]=Te,O.clearBufferuiv(O.COLOR,0,g)):(_[0]=Ae,_[1]=ze,_[2]=We,_[3]=Te,O.clearBufferiv(O.COLOR,0,_))}else W|=O.COLOR_BUFFER_BIT}z&&(W|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(W|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&O.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),D=b},this.dispose=function(){n.removeEventListener("webglcontextlost",ne,!1),n.removeEventListener("webglcontextrestored",be,!1),n.removeEventListener("webglcontextcreationerror",Oe,!1),se.dispose(),ee.dispose(),ge.dispose(),E.dispose(),U.dispose(),ie.dispose(),de.dispose(),te.dispose(),ue.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",rm),pe.removeEventListener("sessionend",sm),kr.stop()};function ne(b){b.preventDefault(),Pg("WebGLRenderer: Context Lost."),L=!0}function be(){Pg("WebGLRenderer: Context Restored."),L=!1;const b=Mt.autoReset,z=ce.enabled,q=ce.autoUpdate,W=ce.needsUpdate,j=ce.type;Se(),Mt.autoReset=b,ce.enabled=z,ce.autoUpdate=q,ce.needsUpdate=W,ce.type=j}function Oe(b){Je("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Lt(b){const z=b.target;z.removeEventListener("dispose",Lt),ct(z)}function ct(b){Li(b),E.remove(b)}function Li(b){const z=E.get(b).programs;z!==void 0&&(z.forEach(function(q){ue.releaseProgram(q)}),b.isShaderMaterial&&ue.releaseShaderCache(b))}this.renderBufferDirect=function(b,z,q,W,j,ye){z===null&&(z=At);const Ee=j.isMesh&&j.matrixWorld.determinant()<0,ve=RS(b,z,q,W,j);xe.setMaterial(W,Ee);let Te=q.index,Ae=1;if(W.wireframe===!0){if(Te=J.getWireframeAttribute(q),Te===void 0)return;Ae=2}const ze=q.drawRange,We=q.attributes.position;let Re=ze.start*Ae,ft=(ze.start+ze.count)*Ae;ye!==null&&(Re=Math.max(Re,ye.start*Ae),ft=Math.min(ft,(ye.start+ye.count)*Ae)),Te!==null?(Re=Math.max(Re,0),ft=Math.min(ft,Te.count)):We!=null&&(Re=Math.max(Re,0),ft=Math.min(ft,We.count));const It=ft-Re;if(It<0||It===1/0)return;de.setup(j,W,ve,q,Te);let Ct,dt=Be;if(Te!==null&&(Ct=$.get(Te),dt=tt,dt.setIndex(Ct)),j.isMesh)W.wireframe===!0?(xe.setLineWidth(W.wireframeLinewidth*Qt()),dt.setMode(O.LINES)):dt.setMode(O.TRIANGLES);else if(j.isLine){let Jt=W.linewidth;Jt===void 0&&(Jt=1),xe.setLineWidth(Jt*Qt()),j.isLineSegments?dt.setMode(O.LINES):j.isLineLoop?dt.setMode(O.LINE_LOOP):dt.setMode(O.LINE_STRIP)}else j.isPoints?dt.setMode(O.POINTS):j.isSprite&&dt.setMode(O.TRIANGLES);if(j.isBatchedMesh)if(Xe.get("WEBGL_multi_draw"))dt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Jt=j._multiDrawStarts,Me=j._multiDrawCounts,An=j._multiDrawCount,Qe=Te?$.get(Te).bytesPerElement:1,zn=E.get(W).currentProgram.getUniforms();for(let hi=0;hi<An;hi++)zn.setValue(O,"_gl_DrawID",hi),dt.render(Jt[hi]/Qe,Me[hi])}else if(j.isInstancedMesh)dt.renderInstances(Re,It,j.count);else if(q.isInstancedBufferGeometry){const Jt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Me=Math.min(q.instanceCount,Jt);dt.renderInstances(Re,It,Me)}else dt.render(Re,It)};function di(b,z,q){b.transparent===!0&&b.side===zi&&b.forceSinglePass===!1?(b.side=wn,b.needsUpdate=!0,Ua(b,z,q),b.side=Rr,b.needsUpdate=!0,Ua(b,z,q),b.side=zi):Ua(b,z,q)}this.compile=function(b,z,q=null){q===null&&(q=b),M=ge.get(q),M.init(z),S.push(M),q.traverseVisible(function(j){j.isLight&&j.layers.test(z.layers)&&(M.pushLight(j),j.castShadow&&M.pushShadow(j))}),b!==q&&b.traverseVisible(function(j){j.isLight&&j.layers.test(z.layers)&&(M.pushLight(j),j.castShadow&&M.pushShadow(j))}),M.setupLights();const W=new Set;return b.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const ye=j.material;if(ye)if(Array.isArray(ye))for(let Ee=0;Ee<ye.length;Ee++){const ve=ye[Ee];di(ve,q,j),W.add(ve)}else di(ye,q,j),W.add(ye)}),M=S.pop(),W},this.compileAsync=function(b,z,q=null){const W=this.compile(b,z,q);return new Promise(j=>{function ye(){if(W.forEach(function(Ee){E.get(Ee).currentProgram.isReady()&&W.delete(Ee)}),W.size===0){j(b);return}setTimeout(ye,10)}Xe.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let lc=null;function AS(b){lc&&lc(b)}function rm(){kr.stop()}function sm(){kr.start()}const kr=new fy;kr.setAnimationLoop(AS),typeof self<"u"&&kr.setContext(self),this.setAnimationLoop=function(b){lc=b,pe.setAnimationLoop(b),b===null?kr.stop():kr.start()},pe.addEventListener("sessionstart",rm),pe.addEventListener("sessionend",sm),this.render=function(b,z){if(z!==void 0&&z.isCamera!==!0){Je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;D!==null&&D.renderStart(b,z);const q=pe.enabled===!0&&pe.isPresenting===!0,W=P!==null&&(k===null||q)&&P.begin(T,k);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(z),z=pe.getCamera()),b.isScene===!0&&b.onBeforeRender(T,b,z,k),M=ge.get(b,S.length),M.init(z),M.state.textureUnits=y.getTextureUnits(),S.push(M),it.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Le.setFromProjectionMatrix(it,Mi,z.reversedDepth),je=this.localClippingEnabled,_t=me.init(this.clippingPlanes,je),A=ee.get(b,R.length),A.init(),R.push(A),pe.enabled===!0&&pe.isPresenting===!0){const Ee=T.xr.getDepthSensingMesh();Ee!==null&&uc(Ee,z,-1/0,T.sortObjects)}uc(b,z,0,T.sortObjects),A.finish(),T.sortObjects===!0&&A.sort(Q,he),vt=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,vt&&se.addToRenderList(A,b),this.info.render.frame++,_t===!0&&me.beginShadows();const j=M.state.shadowsArray;if(ce.render(j,b,z),_t===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset(),(W&&P.hasRenderPass())===!1){const Ee=A.opaque,ve=A.transmissive;if(M.setupLights(),z.isArrayCamera){const Te=z.cameras;if(ve.length>0)for(let Ae=0,ze=Te.length;Ae<ze;Ae++){const We=Te[Ae];am(Ee,ve,b,We)}vt&&se.render(b);for(let Ae=0,ze=Te.length;Ae<ze;Ae++){const We=Te[Ae];om(A,b,We,We.viewport)}}else ve.length>0&&am(Ee,ve,b,z),vt&&se.render(b),om(A,b,z)}k!==null&&Z===0&&(y.updateMultisampleRenderTarget(k),y.updateRenderTargetMipmap(k)),W&&P.end(T),b.isScene===!0&&b.onAfterRender(T,b,z),de.resetDefaultState(),G=-1,B=null,S.pop(),S.length>0?(M=S[S.length-1],y.setTextureUnits(M.state.textureUnits),_t===!0&&me.setGlobalState(T.clippingPlanes,M.state.camera)):M=null,R.pop(),R.length>0?A=R[R.length-1]:A=null,D!==null&&D.renderEnd()};function uc(b,z,q,W){if(b.visible===!1)return;if(b.layers.test(z.layers)){if(b.isGroup)q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(z);else if(b.isLightProbeGrid)M.pushLightProbeGrid(b);else if(b.isLight)M.pushLight(b),b.castShadow&&M.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Le.intersectsSprite(b)){W&&He.setFromMatrixPosition(b.matrixWorld).applyMatrix4(it);const Ee=ie.update(b),ve=b.material;ve.visible&&A.push(b,Ee,ve,q,He.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Le.intersectsObject(b))){const Ee=ie.update(b),ve=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),He.copy(b.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),He.copy(Ee.boundingSphere.center)),He.applyMatrix4(b.matrixWorld).applyMatrix4(it)),Array.isArray(ve)){const Te=Ee.groups;for(let Ae=0,ze=Te.length;Ae<ze;Ae++){const We=Te[Ae],Re=ve[We.materialIndex];Re&&Re.visible&&A.push(b,Ee,Re,q,He.z,We)}}else ve.visible&&A.push(b,Ee,ve,q,He.z,null)}}const ye=b.children;for(let Ee=0,ve=ye.length;Ee<ve;Ee++)uc(ye[Ee],z,q,W)}function om(b,z,q,W){const{opaque:j,transmissive:ye,transparent:Ee}=b;M.setupLightsView(q),_t===!0&&me.setGlobalState(T.clippingPlanes,q),W&&xe.viewport(V.copy(W)),j.length>0&&Na(j,z,q),ye.length>0&&Na(ye,z,q),Ee.length>0&&Na(Ee,z,q),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function am(b,z,q,W){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[W.id]===void 0){const Re=Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[W.id]=new bi(1,1,{generateMipmaps:!0,type:Re?Ki:Xn,minFilter:Yr,samples:Math.max(4,ut.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}const ye=M.state.transmissionRenderTarget[W.id],Ee=W.viewport||V;ye.setSize(Ee.z*T.transmissionResolutionScale,Ee.w*T.transmissionResolutionScale);const ve=T.getRenderTarget(),Te=T.getActiveCubeFace(),Ae=T.getActiveMipmapLevel();T.setRenderTarget(ye),T.getClearColor(re),fe=T.getClearAlpha(),fe<1&&T.setClearColor(16777215,.5),T.clear(),vt&&se.render(q);const ze=T.toneMapping;T.toneMapping=Ti;const We=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),M.setupLightsView(W),_t===!0&&me.setGlobalState(T.clippingPlanes,W),Na(b,q,W),y.updateMultisampleRenderTarget(ye),y.updateRenderTargetMipmap(ye),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let ft=0,It=z.length;ft<It;ft++){const Ct=z[ft],{object:dt,geometry:Jt,material:Me,group:An}=Ct;if(Me.side===zi&&dt.layers.test(W.layers)){const Qe=Me.side;Me.side=wn,Me.needsUpdate=!0,lm(dt,q,W,Jt,Me,An),Me.side=Qe,Me.needsUpdate=!0,Re=!0}}Re===!0&&(y.updateMultisampleRenderTarget(ye),y.updateRenderTargetMipmap(ye))}T.setRenderTarget(ve,Te,Ae),T.setClearColor(re,fe),We!==void 0&&(W.viewport=We),T.toneMapping=ze}function Na(b,z,q){const W=z.isScene===!0?z.overrideMaterial:null;for(let j=0,ye=b.length;j<ye;j++){const Ee=b[j],{object:ve,geometry:Te,group:Ae}=Ee;let ze=Ee.material;ze.allowOverride===!0&&W!==null&&(ze=W),ve.layers.test(q.layers)&&lm(ve,z,q,Te,ze,Ae)}}function lm(b,z,q,W,j,ye){b.onBeforeRender(T,z,q,W,j,ye),b.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),j.onBeforeRender(T,z,q,W,b,ye),j.transparent===!0&&j.side===zi&&j.forceSinglePass===!1?(j.side=wn,j.needsUpdate=!0,T.renderBufferDirect(q,z,W,j,b,ye),j.side=Rr,j.needsUpdate=!0,T.renderBufferDirect(q,z,W,j,b,ye),j.side=zi):T.renderBufferDirect(q,z,W,j,b,ye),b.onAfterRender(T,z,q,W,j,ye)}function Ua(b,z,q){z.isScene!==!0&&(z=At);const W=E.get(b),j=M.state.lights,ye=M.state.shadowsArray,Ee=j.state.version,ve=ue.getParameters(b,j.state,ye,z,q,M.state.lightProbeGridArray),Te=ue.getProgramCacheKey(ve);let Ae=W.programs;W.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?z.environment:null,W.fog=z.fog;const ze=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;W.envMap=U.get(b.envMap||W.environment,ze),W.envMapRotation=W.environment!==null&&b.envMap===null?z.environmentRotation:b.envMapRotation,Ae===void 0&&(b.addEventListener("dispose",Lt),Ae=new Map,W.programs=Ae);let We=Ae.get(Te);if(We!==void 0){if(W.currentProgram===We&&W.lightsStateVersion===Ee)return cm(b,ve),We}else ve.uniforms=ue.getUniforms(b),D!==null&&b.isNodeMaterial&&D.build(b,q,ve),b.onBeforeCompile(ve,T),We=ue.acquireProgram(ve,Te),Ae.set(Te,We),W.uniforms=ve.uniforms;const Re=W.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Re.clippingPlanes=me.uniform),cm(b,ve),W.needsLights=LS(b),W.lightsStateVersion=Ee,W.needsLights&&(Re.ambientLightColor.value=j.state.ambient,Re.lightProbe.value=j.state.probe,Re.directionalLights.value=j.state.directional,Re.directionalLightShadows.value=j.state.directionalShadow,Re.spotLights.value=j.state.spot,Re.spotLightShadows.value=j.state.spotShadow,Re.rectAreaLights.value=j.state.rectArea,Re.ltc_1.value=j.state.rectAreaLTC1,Re.ltc_2.value=j.state.rectAreaLTC2,Re.pointLights.value=j.state.point,Re.pointLightShadows.value=j.state.pointShadow,Re.hemisphereLights.value=j.state.hemi,Re.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Re.spotLightMatrix.value=j.state.spotLightMatrix,Re.spotLightMap.value=j.state.spotLightMap,Re.pointShadowMatrix.value=j.state.pointShadowMatrix),W.lightProbeGrid=M.state.lightProbeGridArray.length>0,W.currentProgram=We,W.uniformsList=null,We}function um(b){if(b.uniformsList===null){const z=b.currentProgram.getUniforms();b.uniformsList=Xl.seqWithValue(z.seq,b.uniforms)}return b.uniformsList}function cm(b,z){const q=E.get(b);q.outputColorSpace=z.outputColorSpace,q.batching=z.batching,q.batchingColor=z.batchingColor,q.instancing=z.instancing,q.instancingColor=z.instancingColor,q.instancingMorph=z.instancingMorph,q.skinning=z.skinning,q.morphTargets=z.morphTargets,q.morphNormals=z.morphNormals,q.morphColors=z.morphColors,q.morphTargetsCount=z.morphTargetsCount,q.numClippingPlanes=z.numClippingPlanes,q.numIntersection=z.numClipIntersection,q.vertexAlphas=z.vertexAlphas,q.vertexTangents=z.vertexTangents,q.toneMapping=z.toneMapping}function CS(b,z){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;w.setFromMatrixPosition(z.matrixWorld);for(let q=0,W=b.length;q<W;q++){const j=b[q];if(j.texture!==null&&j.boundingBox.containsPoint(w))return j}return null}function RS(b,z,q,W,j){z.isScene!==!0&&(z=At),y.resetTextureUnits();const ye=z.fog,Ee=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?z.environment:null,ve=k===null?T.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Ye.workingColorSpace,Te=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Ae=U.get(W.envMap||Ee,Te),ze=W.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,We=!!q.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Re=!!q.morphAttributes.position,ft=!!q.morphAttributes.normal,It=!!q.morphAttributes.color;let Ct=Ti;W.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Ct=T.toneMapping);const dt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Jt=dt!==void 0?dt.length:0,Me=E.get(W),An=M.state.lights;if(_t===!0&&(je===!0||b!==B)){const mt=b===B&&W.id===G;me.setState(W,b,mt)}let Qe=!1;W.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==An.state.version||Me.outputColorSpace!==ve||j.isBatchedMesh&&Me.batching===!1||!j.isBatchedMesh&&Me.batching===!0||j.isBatchedMesh&&Me.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Me.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Me.instancing===!1||!j.isInstancedMesh&&Me.instancing===!0||j.isSkinnedMesh&&Me.skinning===!1||!j.isSkinnedMesh&&Me.skinning===!0||j.isInstancedMesh&&Me.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Me.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Me.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Me.instancingMorph===!1&&j.morphTexture!==null||Me.envMap!==Ae||W.fog===!0&&Me.fog!==ye||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==me.numPlanes||Me.numIntersection!==me.numIntersection)||Me.vertexAlphas!==ze||Me.vertexTangents!==We||Me.morphTargets!==Re||Me.morphNormals!==ft||Me.morphColors!==It||Me.toneMapping!==Ct||Me.morphTargetsCount!==Jt||!!Me.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(Qe=!0):(Qe=!0,Me.__version=W.version);let zn=Me.currentProgram;Qe===!0&&(zn=Ua(W,z,j),D&&W.isNodeMaterial&&D.onUpdateProgram(W,zn,Me));let hi=!1,er=!1,hs=!1;const ht=zn.getUniforms(),Dt=Me.uniforms;if(xe.useProgram(zn.program)&&(hi=!0,er=!0,hs=!0),W.id!==G&&(G=W.id,er=!0),Me.needsLights){const mt=CS(M.state.lightProbeGridArray,j);Me.lightProbeGrid!==mt&&(Me.lightProbeGrid=mt,er=!0)}if(hi||B!==b){xe.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ht.setValue(O,"projectionMatrix",b.projectionMatrix),ht.setValue(O,"viewMatrix",b.matrixWorldInverse);const nr=ht.map.cameraPosition;nr!==void 0&&nr.setValue(O,lt.setFromMatrixPosition(b.matrixWorld)),ut.logarithmicDepthBuffer&&ht.setValue(O,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ht.setValue(O,"isOrthographic",b.isOrthographicCamera===!0),B!==b&&(B=b,er=!0,hs=!0)}if(Me.needsLights&&(An.state.directionalShadowMap.length>0&&ht.setValue(O,"directionalShadowMap",An.state.directionalShadowMap,y),An.state.spotShadowMap.length>0&&ht.setValue(O,"spotShadowMap",An.state.spotShadowMap,y),An.state.pointShadowMap.length>0&&ht.setValue(O,"pointShadowMap",An.state.pointShadowMap,y)),j.isSkinnedMesh){ht.setOptional(O,j,"bindMatrix"),ht.setOptional(O,j,"bindMatrixInverse");const mt=j.skeleton;mt&&(mt.boneTexture===null&&mt.computeBoneTexture(),ht.setValue(O,"boneTexture",mt.boneTexture,y))}j.isBatchedMesh&&(ht.setOptional(O,j,"batchingTexture"),ht.setValue(O,"batchingTexture",j._matricesTexture,y),ht.setOptional(O,j,"batchingIdTexture"),ht.setValue(O,"batchingIdTexture",j._indirectTexture,y),ht.setOptional(O,j,"batchingColorTexture"),j._colorsTexture!==null&&ht.setValue(O,"batchingColorTexture",j._colorsTexture,y));const tr=q.morphAttributes;if((tr.position!==void 0||tr.normal!==void 0||tr.color!==void 0)&&Ue.update(j,q,zn),(er||Me.receiveShadow!==j.receiveShadow)&&(Me.receiveShadow=j.receiveShadow,ht.setValue(O,"receiveShadow",j.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&z.environment!==null&&(Dt.envMapIntensity.value=z.environmentIntensity),Dt.dfgLUT!==void 0&&(Dt.dfgLUT.value=_R()),er){if(ht.setValue(O,"toneMappingExposure",T.toneMappingExposure),Me.needsLights&&PS(Dt,hs),ye&&W.fog===!0&&K.refreshFogUniforms(Dt,ye),K.refreshMaterialUniforms(Dt,W,Pe,ke,M.state.transmissionRenderTarget[b.id]),Me.needsLights&&Me.lightProbeGrid){const mt=Me.lightProbeGrid;Dt.probesSH.value=mt.texture,Dt.probesMin.value.copy(mt.boundingBox.min),Dt.probesMax.value.copy(mt.boundingBox.max),Dt.probesResolution.value.copy(mt.resolution)}Xl.upload(O,um(Me),Dt,y)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Xl.upload(O,um(Me),Dt,y),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ht.setValue(O,"center",j.center),ht.setValue(O,"modelViewMatrix",j.modelViewMatrix),ht.setValue(O,"normalMatrix",j.normalMatrix),ht.setValue(O,"modelMatrix",j.matrixWorld),W.uniformsGroups!==void 0){const mt=W.uniformsGroups;for(let nr=0,ps=mt.length;nr<ps;nr++){const fm=mt[nr];te.update(fm,zn),te.bind(fm,zn)}}return zn}function PS(b,z){b.ambientLightColor.needsUpdate=z,b.lightProbe.needsUpdate=z,b.directionalLights.needsUpdate=z,b.directionalLightShadows.needsUpdate=z,b.pointLights.needsUpdate=z,b.pointLightShadows.needsUpdate=z,b.spotLights.needsUpdate=z,b.spotLightShadows.needsUpdate=z,b.rectAreaLights.needsUpdate=z,b.hemisphereLights.needsUpdate=z}function LS(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(b,z,q){const W=E.get(b);W.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),E.get(b.texture).__webglTexture=z,E.get(b.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:q,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,z){const q=E.get(b);q.__webglFramebuffer=z,q.__useDefaultFramebuffer=z===void 0};const IS=O.createFramebuffer();this.setRenderTarget=function(b,z=0,q=0){k=b,X=z,Z=q;let W=null,j=!1,ye=!1;if(b){const ve=E.get(b);if(ve.__useDefaultFramebuffer!==void 0){xe.bindFramebuffer(O.FRAMEBUFFER,ve.__webglFramebuffer),V.copy(b.viewport),Y.copy(b.scissor),C=b.scissorTest,xe.viewport(V),xe.scissor(Y),xe.setScissorTest(C),G=-1;return}else if(ve.__webglFramebuffer===void 0)y.setupRenderTarget(b);else if(ve.__hasExternalTextures)y.rebindTextures(b,E.get(b.texture).__webglTexture,E.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const ze=b.depthTexture;if(ve.__boundDepthTexture!==ze){if(ze!==null&&E.has(ze)&&(b.width!==ze.image.width||b.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(b)}}const Te=b.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(ye=!0);const Ae=E.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ae[z])?W=Ae[z][q]:W=Ae[z],j=!0):b.samples>0&&y.useMultisampledRTT(b)===!1?W=E.get(b).__webglMultisampledFramebuffer:Array.isArray(Ae)?W=Ae[q]:W=Ae,V.copy(b.viewport),Y.copy(b.scissor),C=b.scissorTest}else V.copy(ae).multiplyScalar(Pe).floor(),Y.copy(Ce).multiplyScalar(Pe).floor(),C=De;if(q!==0&&(W=IS),xe.bindFramebuffer(O.FRAMEBUFFER,W)&&xe.drawBuffers(b,W),xe.viewport(V),xe.scissor(Y),xe.setScissorTest(C),j){const ve=E.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+z,ve.__webglTexture,q)}else if(ye){const ve=z;for(let Te=0;Te<b.textures.length;Te++){const Ae=E.get(b.textures[Te]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Te,Ae.__webglTexture,q,ve)}}else if(b!==null&&q!==0){const ve=E.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ve.__webglTexture,q)}G=-1},this.readRenderTargetPixels=function(b,z,q,W,j,ye,Ee,ve=0){if(!(b&&b.isWebGLRenderTarget)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=E.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ee!==void 0&&(Te=Te[Ee]),Te){xe.bindFramebuffer(O.FRAMEBUFFER,Te);try{const Ae=b.textures[ve],ze=Ae.format,We=Ae.type;if(b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ve),!ut.textureFormatReadable(ze)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(We)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=b.width-W&&q>=0&&q<=b.height-j&&O.readPixels(z,q,W,j,F.convert(ze),F.convert(We),ye)}finally{const Ae=k!==null?E.get(k).__webglFramebuffer:null;xe.bindFramebuffer(O.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(b,z,q,W,j,ye,Ee,ve=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=E.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ee!==void 0&&(Te=Te[Ee]),Te)if(z>=0&&z<=b.width-W&&q>=0&&q<=b.height-j){xe.bindFramebuffer(O.FRAMEBUFFER,Te);const Ae=b.textures[ve],ze=Ae.format,We=Ae.type;if(b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ve),!ut.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Re=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Re),O.bufferData(O.PIXEL_PACK_BUFFER,ye.byteLength,O.STREAM_READ),O.readPixels(z,q,W,j,F.convert(ze),F.convert(We),0);const ft=k!==null?E.get(k).__webglFramebuffer:null;xe.bindFramebuffer(O.FRAMEBUFFER,ft);const It=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await VE(O,It,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Re),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ye),O.deleteBuffer(Re),O.deleteSync(It),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,z=null,q=0){const W=Math.pow(2,-q),j=Math.floor(b.image.width*W),ye=Math.floor(b.image.height*W),Ee=z!==null?z.x:0,ve=z!==null?z.y:0;y.setTexture2D(b,0),O.copyTexSubImage2D(O.TEXTURE_2D,q,0,0,Ee,ve,j,ye),xe.unbindTexture()};const DS=O.createFramebuffer(),kS=O.createFramebuffer();this.copyTextureToTexture=function(b,z,q=null,W=null,j=0,ye=0){let Ee,ve,Te,Ae,ze,We,Re,ft,It;const Ct=b.isCompressedTexture?b.mipmaps[ye]:b.image;if(q!==null)Ee=q.max.x-q.min.x,ve=q.max.y-q.min.y,Te=q.isBox3?q.max.z-q.min.z:1,Ae=q.min.x,ze=q.min.y,We=q.isBox3?q.min.z:0;else{const Dt=Math.pow(2,-j);Ee=Math.floor(Ct.width*Dt),ve=Math.floor(Ct.height*Dt),b.isDataArrayTexture?Te=Ct.depth:b.isData3DTexture?Te=Math.floor(Ct.depth*Dt):Te=1,Ae=0,ze=0,We=0}W!==null?(Re=W.x,ft=W.y,It=W.z):(Re=0,ft=0,It=0);const dt=F.convert(z.format),Jt=F.convert(z.type);let Me;z.isData3DTexture?(y.setTexture3D(z,0),Me=O.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(y.setTexture2DArray(z,0),Me=O.TEXTURE_2D_ARRAY):(y.setTexture2D(z,0),Me=O.TEXTURE_2D),xe.activeTexture(O.TEXTURE0),xe.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,z.flipY),xe.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),xe.pixelStorei(O.UNPACK_ALIGNMENT,z.unpackAlignment);const An=xe.getParameter(O.UNPACK_ROW_LENGTH),Qe=xe.getParameter(O.UNPACK_IMAGE_HEIGHT),zn=xe.getParameter(O.UNPACK_SKIP_PIXELS),hi=xe.getParameter(O.UNPACK_SKIP_ROWS),er=xe.getParameter(O.UNPACK_SKIP_IMAGES);xe.pixelStorei(O.UNPACK_ROW_LENGTH,Ct.width),xe.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ct.height),xe.pixelStorei(O.UNPACK_SKIP_PIXELS,Ae),xe.pixelStorei(O.UNPACK_SKIP_ROWS,ze),xe.pixelStorei(O.UNPACK_SKIP_IMAGES,We);const hs=b.isDataArrayTexture||b.isData3DTexture,ht=z.isDataArrayTexture||z.isData3DTexture;if(b.isDepthTexture){const Dt=E.get(b),tr=E.get(z),mt=E.get(Dt.__renderTarget),nr=E.get(tr.__renderTarget);xe.bindFramebuffer(O.READ_FRAMEBUFFER,mt.__webglFramebuffer),xe.bindFramebuffer(O.DRAW_FRAMEBUFFER,nr.__webglFramebuffer);for(let ps=0;ps<Te;ps++)hs&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,E.get(b).__webglTexture,j,We+ps),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,E.get(z).__webglTexture,ye,It+ps)),O.blitFramebuffer(Ae,ze,Ee,ve,Re,ft,Ee,ve,O.DEPTH_BUFFER_BIT,O.NEAREST);xe.bindFramebuffer(O.READ_FRAMEBUFFER,null),xe.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(j!==0||b.isRenderTargetTexture||E.has(b)){const Dt=E.get(b),tr=E.get(z);xe.bindFramebuffer(O.READ_FRAMEBUFFER,DS),xe.bindFramebuffer(O.DRAW_FRAMEBUFFER,kS);for(let mt=0;mt<Te;mt++)hs?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Dt.__webglTexture,j,We+mt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Dt.__webglTexture,j),ht?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,tr.__webglTexture,ye,It+mt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,tr.__webglTexture,ye),j!==0?O.blitFramebuffer(Ae,ze,Ee,ve,Re,ft,Ee,ve,O.COLOR_BUFFER_BIT,O.NEAREST):ht?O.copyTexSubImage3D(Me,ye,Re,ft,It+mt,Ae,ze,Ee,ve):O.copyTexSubImage2D(Me,ye,Re,ft,Ae,ze,Ee,ve);xe.bindFramebuffer(O.READ_FRAMEBUFFER,null),xe.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ht?b.isDataTexture||b.isData3DTexture?O.texSubImage3D(Me,ye,Re,ft,It,Ee,ve,Te,dt,Jt,Ct.data):z.isCompressedArrayTexture?O.compressedTexSubImage3D(Me,ye,Re,ft,It,Ee,ve,Te,dt,Ct.data):O.texSubImage3D(Me,ye,Re,ft,It,Ee,ve,Te,dt,Jt,Ct):b.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,ye,Re,ft,Ee,ve,dt,Jt,Ct.data):b.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,ye,Re,ft,Ct.width,Ct.height,dt,Ct.data):O.texSubImage2D(O.TEXTURE_2D,ye,Re,ft,Ee,ve,dt,Jt,Ct);xe.pixelStorei(O.UNPACK_ROW_LENGTH,An),xe.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Qe),xe.pixelStorei(O.UNPACK_SKIP_PIXELS,zn),xe.pixelStorei(O.UNPACK_SKIP_ROWS,hi),xe.pixelStorei(O.UNPACK_SKIP_IMAGES,er),ye===0&&z.generateMipmaps&&O.generateMipmap(Me),xe.unbindTexture()},this.initRenderTarget=function(b){E.get(b).__webglFramebuffer===void 0&&y.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?y.setTextureCube(b,0):b.isData3DTexture?y.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?y.setTexture2DArray(b,0):y.setTexture2D(b,0),xe.unbindTexture()},this.resetState=function(){X=0,Z=0,k=null,xe.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ye._getUnpackColorSpace()}}const yR=()=>{const t=ot.useRef(null);return ot.useEffect(()=>{const e=t.current;if(!e)return;const n=new vR({canvas:e,antialias:!0,alpha:!0});n.setSize(window.innerWidth,window.innerHeight),n.setPixelRatio(Math.min(window.devicePixelRatio,2));const i=new iw,r=new Wn(75,window.innerWidth/window.innerHeight,.1,1e3);r.position.z=60;const s={x:0,y:0},o={x:0,y:0};let a=0;const l=w=>{s.x=(w.clientX/window.innerWidth-.5)*2,s.y=-(w.clientY/window.innerHeight-.5)*2},u=()=>{a=window.scrollY};window.addEventListener("mousemove",l),window.addEventListener("scroll",u);const f=new rt("#d1d4d0"),c=[],d=50,h=new Zr;for(let w=0;w<d;w++){const A=new Ru(.6,0),M=new bu({color:f,transparent:!0,opacity:.15}),R=new fi(A,M);R.position.set((Math.random()-.5)*120,(Math.random()-.5)*120,(Math.random()-.5)*60),c.push({mesh:R,velocity:new H((Math.random()-.5)*.04,(Math.random()-.5)*.04,(Math.random()-.5)*.04)}),h.add(R)}i.add(h);const m=new sy({color:f,transparent:!0,opacity:.05}),v=new Zr;i.add(v);const x=new Zr;for(let w=0;w<15;w++){const A=new Ru(Math.random()*5+3,0),M=new bu({color:f,wireframe:!0,transparent:!0,opacity:.08}),R=new fi(A,M);R.position.set((Math.random()-.5)*100,(Math.random()-.5)*100,(Math.random()-.5)*50),x.add(R)}i.add(x);let p;const g=()=>{p=requestAnimationFrame(g),o.x+=(s.x*10-o.x)*.05,o.y+=(s.y*5-o.y)*.05;const w=a*.05;if(h.position.z=w,h.rotation.y=w*.1,x.position.z=w*.5,x.rotation.x=w*.05,r.position.x=o.x,r.position.y=o.y,r.lookAt(0,0,0),c.forEach(A=>{A.mesh.position.add(A.velocity),Math.abs(A.mesh.position.x)>70&&(A.velocity.x*=-1),Math.abs(A.mesh.position.y)>70&&(A.velocity.y*=-1),Math.abs(A.mesh.position.z)>50&&(A.velocity.z*=-1)}),Math.floor(p)%2===0){v.clear();for(let A=0;A<c.length;A++)for(let M=A+1;M<c.length;M++)if(c[A].mesh.position.distanceTo(c[M].mesh.position)<25){const S=[c[A].mesh.position,c[M].mesh.position],P=new Zn().setFromPoints(S),T=new hw(P,m);v.add(T)}}x.children.forEach((A,M)=>{A.rotation.x+=.001*(M%2===0?1:-1),A.rotation.y+=.001}),n.render(i,r)};g();const _=()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",_),()=>{cancelAnimationFrame(p),window.removeEventListener("mousemove",l),window.removeEventListener("scroll",u),window.removeEventListener("resize",_),n.dispose()}},[]),N.jsx("canvas",{ref:t,style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:0,pointerEvents:"none",background:"#1d2f40"}})},S0=({className:t="",width:e="120"})=>N.jsx("div",{className:`flex flex-col items-center justify-center ${t}`,children:N.jsx("img",{src:"/logo.png",alt:"ProCells Logo",style:{width:`${e}px`},className:"object-contain"})});function SR(t,e){const n={};return(t[t.length-1]===""?[...t,""]:t).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const MR=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,ER=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,wR={};function M0(t,e){return(wR.jsx?ER:MR).test(t)}const TR=/[ \t\n\f\r]/g;function bR(t){return typeof t=="object"?t.type==="text"?E0(t.value):!1:E0(t)}function E0(t){return t.replace(TR,"")===""}class Ia{constructor(e,n,i){this.normal=n,this.property=e,i&&(this.space=i)}}Ia.prototype.normal={};Ia.prototype.property={};Ia.prototype.space=void 0;function vy(t,e){const n={},i={};for(const r of t)Object.assign(n,r.property),Object.assign(i,r.normal);return new Ia(n,i,e)}function xh(t){return t.toLowerCase()}class bn{constructor(e,n){this.attribute=n,this.property=e}}bn.prototype.attribute="";bn.prototype.booleanish=!1;bn.prototype.boolean=!1;bn.prototype.commaOrSpaceSeparated=!1;bn.prototype.commaSeparated=!1;bn.prototype.defined=!1;bn.prototype.mustUseProperty=!1;bn.prototype.number=!1;bn.prototype.overloadedBoolean=!1;bn.prototype.property="";bn.prototype.spaceSeparated=!1;bn.prototype.space=void 0;let AR=0;const Ve=ds(),Ft=ds(),_h=ds(),le=ds(),gt=ds(),Qs=ds(),Pn=ds();function ds(){return 2**++AR}const vh=Object.freeze(Object.defineProperty({__proto__:null,boolean:Ve,booleanish:Ft,commaOrSpaceSeparated:Pn,commaSeparated:Qs,number:le,overloadedBoolean:_h,spaceSeparated:gt},Symbol.toStringTag,{value:"Module"})),xf=Object.keys(vh);class kp extends bn{constructor(e,n,i,r){let s=-1;if(super(e,n),w0(this,"space",r),typeof i=="number")for(;++s<xf.length;){const o=xf[s];w0(this,xf[s],(i&vh[o])===vh[o])}}}kp.prototype.defined=!0;function w0(t,e,n){n&&(t[e]=n)}function xo(t){const e={},n={};for(const[i,r]of Object.entries(t.properties)){const s=new kp(i,t.transform(t.attributes||{},i),r,t.space);t.mustUseProperty&&t.mustUseProperty.includes(i)&&(s.mustUseProperty=!0),e[i]=s,n[xh(i)]=i,n[xh(s.attribute)]=i}return new Ia(e,n,t.space)}const yy=xo({properties:{ariaActiveDescendant:null,ariaAtomic:Ft,ariaAutoComplete:null,ariaBusy:Ft,ariaChecked:Ft,ariaColCount:le,ariaColIndex:le,ariaColSpan:le,ariaControls:gt,ariaCurrent:null,ariaDescribedBy:gt,ariaDetails:null,ariaDisabled:Ft,ariaDropEffect:gt,ariaErrorMessage:null,ariaExpanded:Ft,ariaFlowTo:gt,ariaGrabbed:Ft,ariaHasPopup:null,ariaHidden:Ft,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:gt,ariaLevel:le,ariaLive:null,ariaModal:Ft,ariaMultiLine:Ft,ariaMultiSelectable:Ft,ariaOrientation:null,ariaOwns:gt,ariaPlaceholder:null,ariaPosInSet:le,ariaPressed:Ft,ariaReadOnly:Ft,ariaRelevant:null,ariaRequired:Ft,ariaRoleDescription:gt,ariaRowCount:le,ariaRowIndex:le,ariaRowSpan:le,ariaSelected:Ft,ariaSetSize:le,ariaSort:null,ariaValueMax:le,ariaValueMin:le,ariaValueNow:le,ariaValueText:null,role:null},transform(t,e){return e==="role"?e:"aria-"+e.slice(4).toLowerCase()}});function Sy(t,e){return e in t?t[e]:e}function My(t,e){return Sy(t,e.toLowerCase())}const CR=xo({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Qs,acceptCharset:gt,accessKey:gt,action:null,allow:null,allowFullScreen:Ve,allowPaymentRequest:Ve,allowUserMedia:Ve,alt:null,as:null,async:Ve,autoCapitalize:null,autoComplete:gt,autoFocus:Ve,autoPlay:Ve,blocking:gt,capture:null,charSet:null,checked:Ve,cite:null,className:gt,cols:le,colSpan:null,content:null,contentEditable:Ft,controls:Ve,controlsList:gt,coords:le|Qs,crossOrigin:null,data:null,dateTime:null,decoding:null,default:Ve,defer:Ve,dir:null,dirName:null,disabled:Ve,download:_h,draggable:Ft,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:Ve,formTarget:null,headers:gt,height:le,hidden:_h,high:le,href:null,hrefLang:null,htmlFor:gt,httpEquiv:gt,id:null,imageSizes:null,imageSrcSet:null,inert:Ve,inputMode:null,integrity:null,is:null,isMap:Ve,itemId:null,itemProp:gt,itemRef:gt,itemScope:Ve,itemType:gt,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:Ve,low:le,manifest:null,max:null,maxLength:le,media:null,method:null,min:null,minLength:le,multiple:Ve,muted:Ve,name:null,nonce:null,noModule:Ve,noValidate:Ve,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:Ve,optimum:le,pattern:null,ping:gt,placeholder:null,playsInline:Ve,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:Ve,referrerPolicy:null,rel:gt,required:Ve,reversed:Ve,rows:le,rowSpan:le,sandbox:gt,scope:null,scoped:Ve,seamless:Ve,selected:Ve,shadowRootClonable:Ve,shadowRootDelegatesFocus:Ve,shadowRootMode:null,shape:null,size:le,sizes:null,slot:null,span:le,spellCheck:Ft,src:null,srcDoc:null,srcLang:null,srcSet:null,start:le,step:null,style:null,tabIndex:le,target:null,title:null,translate:null,type:null,typeMustMatch:Ve,useMap:null,value:Ft,width:le,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:gt,axis:null,background:null,bgColor:null,border:le,borderColor:null,bottomMargin:le,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:Ve,declare:Ve,event:null,face:null,frame:null,frameBorder:null,hSpace:le,leftMargin:le,link:null,longDesc:null,lowSrc:null,marginHeight:le,marginWidth:le,noResize:Ve,noHref:Ve,noShade:Ve,noWrap:Ve,object:null,profile:null,prompt:null,rev:null,rightMargin:le,rules:null,scheme:null,scrolling:Ft,standby:null,summary:null,text:null,topMargin:le,valueType:null,version:null,vAlign:null,vLink:null,vSpace:le,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:Ve,disableRemotePlayback:Ve,prefix:null,property:null,results:le,security:null,unselectable:null},space:"html",transform:My}),RR=xo({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Pn,accentHeight:le,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:le,amplitude:le,arabicForm:null,ascent:le,attributeName:null,attributeType:null,azimuth:le,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:le,by:null,calcMode:null,capHeight:le,className:gt,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:le,diffuseConstant:le,direction:null,display:null,dur:null,divisor:le,dominantBaseline:null,download:Ve,dx:null,dy:null,edgeMode:null,editable:null,elevation:le,enableBackground:null,end:null,event:null,exponent:le,externalResourcesRequired:null,fill:null,fillOpacity:le,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Qs,g2:Qs,glyphName:Qs,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:le,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:le,horizOriginX:le,horizOriginY:le,id:null,ideographic:le,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:le,k:le,k1:le,k2:le,k3:le,k4:le,kernelMatrix:Pn,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:le,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:le,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:le,overlineThickness:le,paintOrder:null,panose1:null,path:null,pathLength:le,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:gt,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:le,pointsAtY:le,pointsAtZ:le,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Pn,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Pn,rev:Pn,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Pn,requiredFeatures:Pn,requiredFonts:Pn,requiredFormats:Pn,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:le,specularExponent:le,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:le,strikethroughThickness:le,string:null,stroke:null,strokeDashArray:Pn,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:le,strokeOpacity:le,strokeWidth:null,style:null,surfaceScale:le,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Pn,tabIndex:le,tableValues:null,target:null,targetX:le,targetY:le,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Pn,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:le,underlineThickness:le,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:le,values:null,vAlphabetic:le,vMathematical:le,vectorEffect:null,vHanging:le,vIdeographic:le,version:null,vertAdvY:le,vertOriginX:le,vertOriginY:le,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:le,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:Sy}),Ey=xo({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(t,e){return"xlink:"+e.slice(5).toLowerCase()}}),wy=xo({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:My}),Ty=xo({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(t,e){return"xml:"+e.slice(3).toLowerCase()}}),PR={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},LR=/[A-Z]/g,T0=/-[a-z]/g,IR=/^data[-\w.:]+$/i;function DR(t,e){const n=xh(e);let i=e,r=bn;if(n in t.normal)return t.property[t.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&IR.test(e)){if(e.charAt(4)==="-"){const s=e.slice(5).replace(T0,NR);i="data"+s.charAt(0).toUpperCase()+s.slice(1)}else{const s=e.slice(4);if(!T0.test(s)){let o=s.replace(LR,kR);o.charAt(0)!=="-"&&(o="-"+o),e="data"+o}}r=kp}return new r(i,e)}function kR(t){return"-"+t.toLowerCase()}function NR(t){return t.charAt(1).toUpperCase()}const UR=vy([yy,CR,Ey,wy,Ty],"html"),Np=vy([yy,RR,Ey,wy,Ty],"svg");function FR(t){return t.join(" ").trim()}var Up={},b0=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,OR=/\n/g,zR=/^\s*/,BR=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,VR=/^:\s*/,HR=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,GR=/^[;\s]*/,WR=/^\s+|\s+$/g,jR=`
`,A0="/",C0="*",jr="",XR="comment",$R="declaration";function qR(t,e){if(typeof t!="string")throw new TypeError("First argument must be a string");if(!t)return[];e=e||{};var n=1,i=1;function r(m){var v=m.match(OR);v&&(n+=v.length);var x=m.lastIndexOf(jR);i=~x?m.length-x:i+m.length}function s(){var m={line:n,column:i};return function(v){return v.position=new o(m),u(),v}}function o(m){this.start=m,this.end={line:n,column:i},this.source=e.source}o.prototype.content=t;function a(m){var v=new Error(e.source+":"+n+":"+i+": "+m);if(v.reason=m,v.filename=e.source,v.line=n,v.column=i,v.source=t,!e.silent)throw v}function l(m){var v=m.exec(t);if(v){var x=v[0];return r(x),t=t.slice(x.length),v}}function u(){l(zR)}function f(m){var v;for(m=m||[];v=c();)v!==!1&&m.push(v);return m}function c(){var m=s();if(!(A0!=t.charAt(0)||C0!=t.charAt(1))){for(var v=2;jr!=t.charAt(v)&&(C0!=t.charAt(v)||A0!=t.charAt(v+1));)++v;if(v+=2,jr===t.charAt(v-1))return a("End of comment missing");var x=t.slice(2,v-2);return i+=2,r(x),t=t.slice(v),i+=2,m({type:XR,comment:x})}}function d(){var m=s(),v=l(BR);if(v){if(c(),!l(VR))return a("property missing ':'");var x=l(HR),p=m({type:$R,property:R0(v[0].replace(b0,jr)),value:x?R0(x[0].replace(b0,jr)):jr});return l(GR),p}}function h(){var m=[];f(m);for(var v;v=d();)v!==!1&&(m.push(v),f(m));return m}return u(),h()}function R0(t){return t?t.replace(WR,jr):jr}var YR=qR,KR=Yl&&Yl.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Up,"__esModule",{value:!0});Up.default=QR;const ZR=KR(YR);function QR(t,e){let n=null;if(!t||typeof t!="string")return n;const i=(0,ZR.default)(t),r=typeof e=="function";return i.forEach(s=>{if(s.type!=="declaration")return;const{property:o,value:a}=s;r?e(o,a,s):a&&(n=n||{},n[o]=a)}),n}var nc={};Object.defineProperty(nc,"__esModule",{value:!0});nc.camelCase=void 0;var JR=/^--[a-zA-Z0-9_-]+$/,e2=/-([a-z])/g,t2=/^[^-]+$/,n2=/^-(webkit|moz|ms|o|khtml)-/,i2=/^-(ms)-/,r2=function(t){return!t||t2.test(t)||JR.test(t)},s2=function(t,e){return e.toUpperCase()},P0=function(t,e){return"".concat(e,"-")},o2=function(t,e){return e===void 0&&(e={}),r2(t)?t:(t=t.toLowerCase(),e.reactCompat?t=t.replace(i2,P0):t=t.replace(n2,P0),t.replace(e2,s2))};nc.camelCase=o2;var a2=Yl&&Yl.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},l2=a2(Up),u2=nc;function yh(t,e){var n={};return!t||typeof t!="string"||(0,l2.default)(t,function(i,r){i&&r&&(n[(0,u2.camelCase)(i,e)]=r)}),n}yh.default=yh;var c2=yh;const f2=Sx(c2),by=Ay("end"),Fp=Ay("start");function Ay(t){return e;function e(n){const i=n&&n.position&&n.position[t]||{};if(typeof i.line=="number"&&i.line>0&&typeof i.column=="number"&&i.column>0)return{line:i.line,column:i.column,offset:typeof i.offset=="number"&&i.offset>-1?i.offset:void 0}}}function d2(t){const e=Fp(t),n=by(t);if(e&&n)return{start:e,end:n}}function Jo(t){return!t||typeof t!="object"?"":"position"in t||"type"in t?L0(t.position):"start"in t||"end"in t?L0(t):"line"in t||"column"in t?Sh(t):""}function Sh(t){return I0(t&&t.line)+":"+I0(t&&t.column)}function L0(t){return Sh(t&&t.start)+"-"+Sh(t&&t.end)}function I0(t){return t&&typeof t=="number"?t:1}class un extends Error{constructor(e,n,i){super(),typeof n=="string"&&(i=n,n=void 0);let r="",s={},o=!1;if(n&&("line"in n&&"column"in n?s={place:n}:"start"in n&&"end"in n?s={place:n}:"type"in n?s={ancestors:[n],place:n.position}:s={...n}),typeof e=="string"?r=e:!s.cause&&e&&(o=!0,r=e.message,s.cause=e),!s.ruleId&&!s.source&&typeof i=="string"){const l=i.indexOf(":");l===-1?s.ruleId=i:(s.source=i.slice(0,l),s.ruleId=i.slice(l+1))}if(!s.place&&s.ancestors&&s.ancestors){const l=s.ancestors[s.ancestors.length-1];l&&(s.place=l.position)}const a=s.place&&"start"in s.place?s.place.start:s.place;this.ancestors=s.ancestors||void 0,this.cause=s.cause||void 0,this.column=a?a.column:void 0,this.fatal=void 0,this.file="",this.message=r,this.line=a?a.line:void 0,this.name=Jo(s.place)||"1:1",this.place=s.place||void 0,this.reason=this.message,this.ruleId=s.ruleId||void 0,this.source=s.source||void 0,this.stack=o&&s.cause&&typeof s.cause.stack=="string"?s.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}un.prototype.file="";un.prototype.name="";un.prototype.reason="";un.prototype.message="";un.prototype.stack="";un.prototype.column=void 0;un.prototype.line=void 0;un.prototype.ancestors=void 0;un.prototype.cause=void 0;un.prototype.fatal=void 0;un.prototype.place=void 0;un.prototype.ruleId=void 0;un.prototype.source=void 0;const Op={}.hasOwnProperty,h2=new Map,p2=/[A-Z]/g,m2=new Set(["table","tbody","thead","tfoot","tr"]),g2=new Set(["td","th"]),Cy="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function x2(t,e){if(!e||e.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=e.filePath||void 0;let i;if(e.development){if(typeof e.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");i=T2(n,e.jsxDEV)}else{if(typeof e.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof e.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");i=w2(n,e.jsx,e.jsxs)}const r={Fragment:e.Fragment,ancestors:[],components:e.components||{},create:i,elementAttributeNameCase:e.elementAttributeNameCase||"react",evaluater:e.createEvaluater?e.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:e.ignoreInvalidStyle||!1,passKeys:e.passKeys!==!1,passNode:e.passNode||!1,schema:e.space==="svg"?Np:UR,stylePropertyNameCase:e.stylePropertyNameCase||"dom",tableCellAlignToStyle:e.tableCellAlignToStyle!==!1},s=Ry(r,t,void 0);return s&&typeof s!="string"?s:r.create(t,r.Fragment,{children:s||void 0},void 0)}function Ry(t,e,n){if(e.type==="element")return _2(t,e,n);if(e.type==="mdxFlowExpression"||e.type==="mdxTextExpression")return v2(t,e);if(e.type==="mdxJsxFlowElement"||e.type==="mdxJsxTextElement")return S2(t,e,n);if(e.type==="mdxjsEsm")return y2(t,e);if(e.type==="root")return M2(t,e,n);if(e.type==="text")return E2(t,e)}function _2(t,e,n){const i=t.schema;let r=i;e.tagName.toLowerCase()==="svg"&&i.space==="html"&&(r=Np,t.schema=r),t.ancestors.push(e);const s=Ly(t,e.tagName,!1),o=b2(t,e);let a=Bp(t,e);return m2.has(e.tagName)&&(a=a.filter(function(l){return typeof l=="string"?!bR(l):!0})),Py(t,o,s,e),zp(o,a),t.ancestors.pop(),t.schema=i,t.create(e,s,o,n)}function v2(t,e){if(e.data&&e.data.estree&&t.evaluater){const i=e.data.estree.body[0];return i.type,t.evaluater.evaluateExpression(i.expression)}Sa(t,e.position)}function y2(t,e){if(e.data&&e.data.estree&&t.evaluater)return t.evaluater.evaluateProgram(e.data.estree);Sa(t,e.position)}function S2(t,e,n){const i=t.schema;let r=i;e.name==="svg"&&i.space==="html"&&(r=Np,t.schema=r),t.ancestors.push(e);const s=e.name===null?t.Fragment:Ly(t,e.name,!0),o=A2(t,e),a=Bp(t,e);return Py(t,o,s,e),zp(o,a),t.ancestors.pop(),t.schema=i,t.create(e,s,o,n)}function M2(t,e,n){const i={};return zp(i,Bp(t,e)),t.create(e,t.Fragment,i,n)}function E2(t,e){return e.value}function Py(t,e,n,i){typeof n!="string"&&n!==t.Fragment&&t.passNode&&(e.node=i)}function zp(t,e){if(e.length>0){const n=e.length>1?e:e[0];n&&(t.children=n)}}function w2(t,e,n){return i;function i(r,s,o,a){const u=Array.isArray(o.children)?n:e;return a?u(s,o,a):u(s,o)}}function T2(t,e){return n;function n(i,r,s,o){const a=Array.isArray(s.children),l=Fp(i);return e(r,s,o,a,{columnNumber:l?l.column-1:void 0,fileName:t,lineNumber:l?l.line:void 0},void 0)}}function b2(t,e){const n={};let i,r;for(r in e.properties)if(r!=="children"&&Op.call(e.properties,r)){const s=C2(t,r,e.properties[r]);if(s){const[o,a]=s;t.tableCellAlignToStyle&&o==="align"&&typeof a=="string"&&g2.has(e.tagName)?i=a:n[o]=a}}if(i){const s=n.style||(n.style={});s[t.stylePropertyNameCase==="css"?"text-align":"textAlign"]=i}return n}function A2(t,e){const n={};for(const i of e.attributes)if(i.type==="mdxJsxExpressionAttribute")if(i.data&&i.data.estree&&t.evaluater){const s=i.data.estree.body[0];s.type;const o=s.expression;o.type;const a=o.properties[0];a.type,Object.assign(n,t.evaluater.evaluateExpression(a.argument))}else Sa(t,e.position);else{const r=i.name;let s;if(i.value&&typeof i.value=="object")if(i.value.data&&i.value.data.estree&&t.evaluater){const a=i.value.data.estree.body[0];a.type,s=t.evaluater.evaluateExpression(a.expression)}else Sa(t,e.position);else s=i.value===null?!0:i.value;n[r]=s}return n}function Bp(t,e){const n=[];let i=-1;const r=t.passKeys?new Map:h2;for(;++i<e.children.length;){const s=e.children[i];let o;if(t.passKeys){const l=s.type==="element"?s.tagName:s.type==="mdxJsxFlowElement"||s.type==="mdxJsxTextElement"?s.name:void 0;if(l){const u=r.get(l)||0;o=l+"-"+u,r.set(l,u+1)}}const a=Ry(t,s,o);a!==void 0&&n.push(a)}return n}function C2(t,e,n){const i=DR(t.schema,e);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=i.commaSeparated?SR(n):FR(n)),i.property==="style"){let r=typeof n=="object"?n:R2(t,String(n));return t.stylePropertyNameCase==="css"&&(r=P2(r)),["style",r]}return[t.elementAttributeNameCase==="react"&&i.space?PR[i.property]||i.property:i.attribute,n]}}function R2(t,e){try{return f2(e,{reactCompat:!0})}catch(n){if(t.ignoreInvalidStyle)return{};const i=n,r=new un("Cannot parse `style` attribute",{ancestors:t.ancestors,cause:i,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw r.file=t.filePath||void 0,r.url=Cy+"#cannot-parse-style-attribute",r}}function Ly(t,e,n){let i;if(!n)i={type:"Literal",value:e};else if(e.includes(".")){const r=e.split(".");let s=-1,o;for(;++s<r.length;){const a=M0(r[s])?{type:"Identifier",name:r[s]}:{type:"Literal",value:r[s]};o=o?{type:"MemberExpression",object:o,property:a,computed:!!(s&&a.type==="Literal"),optional:!1}:a}i=o}else i=M0(e)&&!/^[a-z]/.test(e)?{type:"Identifier",name:e}:{type:"Literal",value:e};if(i.type==="Literal"){const r=i.value;return Op.call(t.components,r)?t.components[r]:r}if(t.evaluater)return t.evaluater.evaluateExpression(i);Sa(t)}function Sa(t,e){const n=new un("Cannot handle MDX estrees without `createEvaluater`",{ancestors:t.ancestors,place:e,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=t.filePath||void 0,n.url=Cy+"#cannot-handle-mdx-estrees-without-createevaluater",n}function P2(t){const e={};let n;for(n in t)Op.call(t,n)&&(e[L2(n)]=t[n]);return e}function L2(t){let e=t.replace(p2,I2);return e.slice(0,3)==="ms-"&&(e="-"+e),e}function I2(t){return"-"+t.toLowerCase()}const _f={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},D2={};function Vp(t,e){const n=D2,i=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,r=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return Iy(t,i,r)}function Iy(t,e,n){if(k2(t)){if("value"in t)return t.type==="html"&&!n?"":t.value;if(e&&"alt"in t&&t.alt)return t.alt;if("children"in t)return D0(t.children,e,n)}return Array.isArray(t)?D0(t,e,n):""}function D0(t,e,n){const i=[];let r=-1;for(;++r<t.length;)i[r]=Iy(t[r],e,n);return i.join("")}function k2(t){return!!(t&&typeof t=="object")}const k0=document.createElement("i");function Hp(t){const e="&"+t+";";k0.innerHTML=e;const n=k0.textContent;return n.charCodeAt(n.length-1)===59&&t!=="semi"||n===e?!1:n}function Nn(t,e,n,i){const r=t.length;let s=0,o;if(e<0?e=-e>r?0:r+e:e=e>r?r:e,n=n>0?n:0,i.length<1e4)o=Array.from(i),o.unshift(e,n),t.splice(...o);else for(n&&t.splice(e,n);s<i.length;)o=i.slice(s,s+1e4),o.unshift(e,0),t.splice(...o),s+=1e4,e+=1e4}function jn(t,e){return t.length>0?(Nn(t,t.length,0,e),t):e}const N0={}.hasOwnProperty;function Dy(t){const e={};let n=-1;for(;++n<t.length;)N2(e,t[n]);return e}function N2(t,e){let n;for(n in e){const r=(N0.call(t,n)?t[n]:void 0)||(t[n]={}),s=e[n];let o;if(s)for(o in s){N0.call(r,o)||(r[o]=[]);const a=s[o];U2(r[o],Array.isArray(a)?a:a?[a]:[])}}}function U2(t,e){let n=-1;const i=[];for(;++n<e.length;)(e[n].add==="after"?t:i).push(e[n]);Nn(t,0,0,i)}function ky(t,e){const n=Number.parseInt(t,e);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function ui(t){return t.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const dn=Dr(/[A-Za-z]/),an=Dr(/[\dA-Za-z]/),F2=Dr(/[#-'*+\--9=?A-Z^-~]/);function Pu(t){return t!==null&&(t<32||t===127)}const Mh=Dr(/\d/),O2=Dr(/[\dA-Fa-f]/),z2=Dr(/[!-/:-@[-`{-~]/);function Ie(t){return t!==null&&t<-2}function pt(t){return t!==null&&(t<0||t===32)}function $e(t){return t===-2||t===-1||t===32}const ic=Dr(new RegExp("\\p{P}|\\p{S}","u")),ls=Dr(/\s/);function Dr(t){return e;function e(n){return n!==null&&n>-1&&t.test(String.fromCharCode(n))}}function _o(t){const e=[];let n=-1,i=0,r=0;for(;++n<t.length;){const s=t.charCodeAt(n);let o="";if(s===37&&an(t.charCodeAt(n+1))&&an(t.charCodeAt(n+2)))r=2;else if(s<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(s))||(o=String.fromCharCode(s));else if(s>55295&&s<57344){const a=t.charCodeAt(n+1);s<56320&&a>56319&&a<57344?(o=String.fromCharCode(s,a),r=1):o="�"}else o=String.fromCharCode(s);o&&(e.push(t.slice(i,n),encodeURIComponent(o)),i=n+r+1,o=""),r&&(n+=r,r=0)}return e.join("")+t.slice(i)}function Ze(t,e,n,i){const r=i?i-1:Number.POSITIVE_INFINITY;let s=0;return o;function o(l){return $e(l)?(t.enter(n),a(l)):e(l)}function a(l){return $e(l)&&s++<r?(t.consume(l),a):(t.exit(n),e(l))}}const B2={tokenize:V2};function V2(t){const e=t.attempt(this.parser.constructs.contentInitial,i,r);let n;return e;function i(a){if(a===null){t.consume(a);return}return t.enter("lineEnding"),t.consume(a),t.exit("lineEnding"),Ze(t,e,"linePrefix")}function r(a){return t.enter("paragraph"),s(a)}function s(a){const l=t.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=l),n=l,o(a)}function o(a){if(a===null){t.exit("chunkText"),t.exit("paragraph"),t.consume(a);return}return Ie(a)?(t.consume(a),t.exit("chunkText"),s):(t.consume(a),o)}}const H2={tokenize:G2},U0={tokenize:W2};function G2(t){const e=this,n=[];let i=0,r,s,o;return a;function a(_){if(i<n.length){const w=n[i];return e.containerState=w[1],t.attempt(w[0].continuation,l,u)(_)}return u(_)}function l(_){if(i++,e.containerState._closeFlow){e.containerState._closeFlow=void 0,r&&g();const w=e.events.length;let A=w,M;for(;A--;)if(e.events[A][0]==="exit"&&e.events[A][1].type==="chunkFlow"){M=e.events[A][1].end;break}p(i);let R=w;for(;R<e.events.length;)e.events[R][1].end={...M},R++;return Nn(e.events,A+1,0,e.events.slice(w)),e.events.length=R,u(_)}return a(_)}function u(_){if(i===n.length){if(!r)return d(_);if(r.currentConstruct&&r.currentConstruct.concrete)return m(_);e.interrupt=!!(r.currentConstruct&&!r._gfmTableDynamicInterruptHack)}return e.containerState={},t.check(U0,f,c)(_)}function f(_){return r&&g(),p(i),d(_)}function c(_){return e.parser.lazy[e.now().line]=i!==n.length,o=e.now().offset,m(_)}function d(_){return e.containerState={},t.attempt(U0,h,m)(_)}function h(_){return i++,n.push([e.currentConstruct,e.containerState]),d(_)}function m(_){if(_===null){r&&g(),p(0),t.consume(_);return}return r=r||e.parser.flow(e.now()),t.enter("chunkFlow",{_tokenizer:r,contentType:"flow",previous:s}),v(_)}function v(_){if(_===null){x(t.exit("chunkFlow"),!0),p(0),t.consume(_);return}return Ie(_)?(t.consume(_),x(t.exit("chunkFlow")),i=0,e.interrupt=void 0,a):(t.consume(_),v)}function x(_,w){const A=e.sliceStream(_);if(w&&A.push(null),_.previous=s,s&&(s.next=_),s=_,r.defineSkip(_.start),r.write(A),e.parser.lazy[_.start.line]){let M=r.events.length;for(;M--;)if(r.events[M][1].start.offset<o&&(!r.events[M][1].end||r.events[M][1].end.offset>o))return;const R=e.events.length;let S=R,P,T;for(;S--;)if(e.events[S][0]==="exit"&&e.events[S][1].type==="chunkFlow"){if(P){T=e.events[S][1].end;break}P=!0}for(p(i),M=R;M<e.events.length;)e.events[M][1].end={...T},M++;Nn(e.events,S+1,0,e.events.slice(R)),e.events.length=M}}function p(_){let w=n.length;for(;w-- >_;){const A=n[w];e.containerState=A[1],A[0].exit.call(e,t)}n.length=_}function g(){r.write([null]),s=void 0,r=void 0,e.containerState._closeFlow=void 0}}function W2(t,e,n){return Ze(t,t.attempt(this.parser.constructs.document,e,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function co(t){if(t===null||pt(t)||ls(t))return 1;if(ic(t))return 2}function rc(t,e,n){const i=[];let r=-1;for(;++r<t.length;){const s=t[r].resolveAll;s&&!i.includes(s)&&(e=s(e,n),i.push(s))}return e}const Eh={name:"attention",resolveAll:j2,tokenize:X2};function j2(t,e){let n=-1,i,r,s,o,a,l,u,f;for(;++n<t.length;)if(t[n][0]==="enter"&&t[n][1].type==="attentionSequence"&&t[n][1]._close){for(i=n;i--;)if(t[i][0]==="exit"&&t[i][1].type==="attentionSequence"&&t[i][1]._open&&e.sliceSerialize(t[i][1]).charCodeAt(0)===e.sliceSerialize(t[n][1]).charCodeAt(0)){if((t[i][1]._close||t[n][1]._open)&&(t[n][1].end.offset-t[n][1].start.offset)%3&&!((t[i][1].end.offset-t[i][1].start.offset+t[n][1].end.offset-t[n][1].start.offset)%3))continue;l=t[i][1].end.offset-t[i][1].start.offset>1&&t[n][1].end.offset-t[n][1].start.offset>1?2:1;const c={...t[i][1].end},d={...t[n][1].start};F0(c,-l),F0(d,l),o={type:l>1?"strongSequence":"emphasisSequence",start:c,end:{...t[i][1].end}},a={type:l>1?"strongSequence":"emphasisSequence",start:{...t[n][1].start},end:d},s={type:l>1?"strongText":"emphasisText",start:{...t[i][1].end},end:{...t[n][1].start}},r={type:l>1?"strong":"emphasis",start:{...o.start},end:{...a.end}},t[i][1].end={...o.start},t[n][1].start={...a.end},u=[],t[i][1].end.offset-t[i][1].start.offset&&(u=jn(u,[["enter",t[i][1],e],["exit",t[i][1],e]])),u=jn(u,[["enter",r,e],["enter",o,e],["exit",o,e],["enter",s,e]]),u=jn(u,rc(e.parser.constructs.insideSpan.null,t.slice(i+1,n),e)),u=jn(u,[["exit",s,e],["enter",a,e],["exit",a,e],["exit",r,e]]),t[n][1].end.offset-t[n][1].start.offset?(f=2,u=jn(u,[["enter",t[n][1],e],["exit",t[n][1],e]])):f=0,Nn(t,i-1,n-i+3,u),n=i+u.length-f-2;break}}for(n=-1;++n<t.length;)t[n][1].type==="attentionSequence"&&(t[n][1].type="data");return t}function X2(t,e){const n=this.parser.constructs.attentionMarkers.null,i=this.previous,r=co(i);let s;return o;function o(l){return s=l,t.enter("attentionSequence"),a(l)}function a(l){if(l===s)return t.consume(l),a;const u=t.exit("attentionSequence"),f=co(l),c=!f||f===2&&r||n.includes(l),d=!r||r===2&&f||n.includes(i);return u._open=!!(s===42?c:c&&(r||!d)),u._close=!!(s===42?d:d&&(f||!c)),e(l)}}function F0(t,e){t.column+=e,t.offset+=e,t._bufferIndex+=e}const $2={name:"autolink",tokenize:q2};function q2(t,e,n){let i=0;return r;function r(h){return t.enter("autolink"),t.enter("autolinkMarker"),t.consume(h),t.exit("autolinkMarker"),t.enter("autolinkProtocol"),s}function s(h){return dn(h)?(t.consume(h),o):h===64?n(h):u(h)}function o(h){return h===43||h===45||h===46||an(h)?(i=1,a(h)):u(h)}function a(h){return h===58?(t.consume(h),i=0,l):(h===43||h===45||h===46||an(h))&&i++<32?(t.consume(h),a):(i=0,u(h))}function l(h){return h===62?(t.exit("autolinkProtocol"),t.enter("autolinkMarker"),t.consume(h),t.exit("autolinkMarker"),t.exit("autolink"),e):h===null||h===32||h===60||Pu(h)?n(h):(t.consume(h),l)}function u(h){return h===64?(t.consume(h),f):F2(h)?(t.consume(h),u):n(h)}function f(h){return an(h)?c(h):n(h)}function c(h){return h===46?(t.consume(h),i=0,f):h===62?(t.exit("autolinkProtocol").type="autolinkEmail",t.enter("autolinkMarker"),t.consume(h),t.exit("autolinkMarker"),t.exit("autolink"),e):d(h)}function d(h){if((h===45||an(h))&&i++<63){const m=h===45?d:c;return t.consume(h),m}return n(h)}}const Da={partial:!0,tokenize:Y2};function Y2(t,e,n){return i;function i(s){return $e(s)?Ze(t,r,"linePrefix")(s):r(s)}function r(s){return s===null||Ie(s)?e(s):n(s)}}const Ny={continuation:{tokenize:Z2},exit:Q2,name:"blockQuote",tokenize:K2};function K2(t,e,n){const i=this;return r;function r(o){if(o===62){const a=i.containerState;return a.open||(t.enter("blockQuote",{_container:!0}),a.open=!0),t.enter("blockQuotePrefix"),t.enter("blockQuoteMarker"),t.consume(o),t.exit("blockQuoteMarker"),s}return n(o)}function s(o){return $e(o)?(t.enter("blockQuotePrefixWhitespace"),t.consume(o),t.exit("blockQuotePrefixWhitespace"),t.exit("blockQuotePrefix"),e):(t.exit("blockQuotePrefix"),e(o))}}function Z2(t,e,n){const i=this;return r;function r(o){return $e(o)?Ze(t,s,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o):s(o)}function s(o){return t.attempt(Ny,e,n)(o)}}function Q2(t){t.exit("blockQuote")}const Uy={name:"characterEscape",tokenize:J2};function J2(t,e,n){return i;function i(s){return t.enter("characterEscape"),t.enter("escapeMarker"),t.consume(s),t.exit("escapeMarker"),r}function r(s){return z2(s)?(t.enter("characterEscapeValue"),t.consume(s),t.exit("characterEscapeValue"),t.exit("characterEscape"),e):n(s)}}const Fy={name:"characterReference",tokenize:eP};function eP(t,e,n){const i=this;let r=0,s,o;return a;function a(c){return t.enter("characterReference"),t.enter("characterReferenceMarker"),t.consume(c),t.exit("characterReferenceMarker"),l}function l(c){return c===35?(t.enter("characterReferenceMarkerNumeric"),t.consume(c),t.exit("characterReferenceMarkerNumeric"),u):(t.enter("characterReferenceValue"),s=31,o=an,f(c))}function u(c){return c===88||c===120?(t.enter("characterReferenceMarkerHexadecimal"),t.consume(c),t.exit("characterReferenceMarkerHexadecimal"),t.enter("characterReferenceValue"),s=6,o=O2,f):(t.enter("characterReferenceValue"),s=7,o=Mh,f(c))}function f(c){if(c===59&&r){const d=t.exit("characterReferenceValue");return o===an&&!Hp(i.sliceSerialize(d))?n(c):(t.enter("characterReferenceMarker"),t.consume(c),t.exit("characterReferenceMarker"),t.exit("characterReference"),e)}return o(c)&&r++<s?(t.consume(c),f):n(c)}}const O0={partial:!0,tokenize:nP},z0={concrete:!0,name:"codeFenced",tokenize:tP};function tP(t,e,n){const i=this,r={partial:!0,tokenize:A};let s=0,o=0,a;return l;function l(M){return u(M)}function u(M){const R=i.events[i.events.length-1];return s=R&&R[1].type==="linePrefix"?R[2].sliceSerialize(R[1],!0).length:0,a=M,t.enter("codeFenced"),t.enter("codeFencedFence"),t.enter("codeFencedFenceSequence"),f(M)}function f(M){return M===a?(o++,t.consume(M),f):o<3?n(M):(t.exit("codeFencedFenceSequence"),$e(M)?Ze(t,c,"whitespace")(M):c(M))}function c(M){return M===null||Ie(M)?(t.exit("codeFencedFence"),i.interrupt?e(M):t.check(O0,v,w)(M)):(t.enter("codeFencedFenceInfo"),t.enter("chunkString",{contentType:"string"}),d(M))}function d(M){return M===null||Ie(M)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),c(M)):$e(M)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),Ze(t,h,"whitespace")(M)):M===96&&M===a?n(M):(t.consume(M),d)}function h(M){return M===null||Ie(M)?c(M):(t.enter("codeFencedFenceMeta"),t.enter("chunkString",{contentType:"string"}),m(M))}function m(M){return M===null||Ie(M)?(t.exit("chunkString"),t.exit("codeFencedFenceMeta"),c(M)):M===96&&M===a?n(M):(t.consume(M),m)}function v(M){return t.attempt(r,w,x)(M)}function x(M){return t.enter("lineEnding"),t.consume(M),t.exit("lineEnding"),p}function p(M){return s>0&&$e(M)?Ze(t,g,"linePrefix",s+1)(M):g(M)}function g(M){return M===null||Ie(M)?t.check(O0,v,w)(M):(t.enter("codeFlowValue"),_(M))}function _(M){return M===null||Ie(M)?(t.exit("codeFlowValue"),g(M)):(t.consume(M),_)}function w(M){return t.exit("codeFenced"),e(M)}function A(M,R,S){let P=0;return T;function T(k){return M.enter("lineEnding"),M.consume(k),M.exit("lineEnding"),L}function L(k){return M.enter("codeFencedFence"),$e(k)?Ze(M,D,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(k):D(k)}function D(k){return k===a?(M.enter("codeFencedFenceSequence"),X(k)):S(k)}function X(k){return k===a?(P++,M.consume(k),X):P>=o?(M.exit("codeFencedFenceSequence"),$e(k)?Ze(M,Z,"whitespace")(k):Z(k)):S(k)}function Z(k){return k===null||Ie(k)?(M.exit("codeFencedFence"),R(k)):S(k)}}}function nP(t,e,n){const i=this;return r;function r(o){return o===null?n(o):(t.enter("lineEnding"),t.consume(o),t.exit("lineEnding"),s)}function s(o){return i.parser.lazy[i.now().line]?n(o):e(o)}}const vf={name:"codeIndented",tokenize:rP},iP={partial:!0,tokenize:sP};function rP(t,e,n){const i=this;return r;function r(u){return t.enter("codeIndented"),Ze(t,s,"linePrefix",5)(u)}function s(u){const f=i.events[i.events.length-1];return f&&f[1].type==="linePrefix"&&f[2].sliceSerialize(f[1],!0).length>=4?o(u):n(u)}function o(u){return u===null?l(u):Ie(u)?t.attempt(iP,o,l)(u):(t.enter("codeFlowValue"),a(u))}function a(u){return u===null||Ie(u)?(t.exit("codeFlowValue"),o(u)):(t.consume(u),a)}function l(u){return t.exit("codeIndented"),e(u)}}function sP(t,e,n){const i=this;return r;function r(o){return i.parser.lazy[i.now().line]?n(o):Ie(o)?(t.enter("lineEnding"),t.consume(o),t.exit("lineEnding"),r):Ze(t,s,"linePrefix",5)(o)}function s(o){const a=i.events[i.events.length-1];return a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?e(o):Ie(o)?r(o):n(o)}}const oP={name:"codeText",previous:lP,resolve:aP,tokenize:uP};function aP(t){let e=t.length-4,n=3,i,r;if((t[n][1].type==="lineEnding"||t[n][1].type==="space")&&(t[e][1].type==="lineEnding"||t[e][1].type==="space")){for(i=n;++i<e;)if(t[i][1].type==="codeTextData"){t[n][1].type="codeTextPadding",t[e][1].type="codeTextPadding",n+=2,e-=2;break}}for(i=n-1,e++;++i<=e;)r===void 0?i!==e&&t[i][1].type!=="lineEnding"&&(r=i):(i===e||t[i][1].type==="lineEnding")&&(t[r][1].type="codeTextData",i!==r+2&&(t[r][1].end=t[i-1][1].end,t.splice(r+2,i-r-2),e-=i-r-2,i=r+2),r=void 0);return t}function lP(t){return t!==96||this.events[this.events.length-1][1].type==="characterEscape"}function uP(t,e,n){let i=0,r,s;return o;function o(c){return t.enter("codeText"),t.enter("codeTextSequence"),a(c)}function a(c){return c===96?(t.consume(c),i++,a):(t.exit("codeTextSequence"),l(c))}function l(c){return c===null?n(c):c===32?(t.enter("space"),t.consume(c),t.exit("space"),l):c===96?(s=t.enter("codeTextSequence"),r=0,f(c)):Ie(c)?(t.enter("lineEnding"),t.consume(c),t.exit("lineEnding"),l):(t.enter("codeTextData"),u(c))}function u(c){return c===null||c===32||c===96||Ie(c)?(t.exit("codeTextData"),l(c)):(t.consume(c),u)}function f(c){return c===96?(t.consume(c),r++,f):r===i?(t.exit("codeTextSequence"),t.exit("codeText"),e(c)):(s.type="codeTextData",u(c))}}class cP{constructor(e){this.left=e?[...e]:[],this.right=[]}get(e){if(e<0||e>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+e+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return e<this.left.length?this.left[e]:this.right[this.right.length-e+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(e,n){const i=n??Number.POSITIVE_INFINITY;return i<this.left.length?this.left.slice(e,i):e>this.left.length?this.right.slice(this.right.length-i+this.left.length,this.right.length-e+this.left.length).reverse():this.left.slice(e).concat(this.right.slice(this.right.length-i+this.left.length).reverse())}splice(e,n,i){const r=n||0;this.setCursor(Math.trunc(e));const s=this.right.splice(this.right.length-r,Number.POSITIVE_INFINITY);return i&&No(this.left,i),s.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(e){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(e)}pushMany(e){this.setCursor(Number.POSITIVE_INFINITY),No(this.left,e)}unshift(e){this.setCursor(0),this.right.push(e)}unshiftMany(e){this.setCursor(0),No(this.right,e.reverse())}setCursor(e){if(!(e===this.left.length||e>this.left.length&&this.right.length===0||e<0&&this.left.length===0))if(e<this.left.length){const n=this.left.splice(e,Number.POSITIVE_INFINITY);No(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-e,Number.POSITIVE_INFINITY);No(this.left,n.reverse())}}}function No(t,e){let n=0;if(e.length<1e4)t.push(...e);else for(;n<e.length;)t.push(...e.slice(n,n+1e4)),n+=1e4}function Oy(t){const e={};let n=-1,i,r,s,o,a,l,u;const f=new cP(t);for(;++n<f.length;){for(;n in e;)n=e[n];if(i=f.get(n),n&&i[1].type==="chunkFlow"&&f.get(n-1)[1].type==="listItemPrefix"&&(l=i[1]._tokenizer.events,s=0,s<l.length&&l[s][1].type==="lineEndingBlank"&&(s+=2),s<l.length&&l[s][1].type==="content"))for(;++s<l.length&&l[s][1].type!=="content";)l[s][1].type==="chunkText"&&(l[s][1]._isInFirstContentOfListItem=!0,s++);if(i[0]==="enter")i[1].contentType&&(Object.assign(e,fP(f,n)),n=e[n],u=!0);else if(i[1]._container){for(s=n,r=void 0;s--;)if(o=f.get(s),o[1].type==="lineEnding"||o[1].type==="lineEndingBlank")o[0]==="enter"&&(r&&(f.get(r)[1].type="lineEndingBlank"),o[1].type="lineEnding",r=s);else if(!(o[1].type==="linePrefix"||o[1].type==="listItemIndent"))break;r&&(i[1].end={...f.get(r)[1].start},a=f.slice(r,n),a.unshift(i),f.splice(r,n-r+1,a))}}return Nn(t,0,Number.POSITIVE_INFINITY,f.slice(0)),!u}function fP(t,e){const n=t.get(e)[1],i=t.get(e)[2];let r=e-1;const s=[];let o=n._tokenizer;o||(o=i.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(o._contentTypeTextTrailing=!0));const a=o.events,l=[],u={};let f,c,d=-1,h=n,m=0,v=0;const x=[v];for(;h;){for(;t.get(++r)[1]!==h;);s.push(r),h._tokenizer||(f=i.sliceStream(h),h.next||f.push(null),c&&o.defineSkip(h.start),h._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(f),h._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),c=h,h=h.next}for(h=n;++d<a.length;)a[d][0]==="exit"&&a[d-1][0]==="enter"&&a[d][1].type===a[d-1][1].type&&a[d][1].start.line!==a[d][1].end.line&&(v=d+1,x.push(v),h._tokenizer=void 0,h.previous=void 0,h=h.next);for(o.events=[],h?(h._tokenizer=void 0,h.previous=void 0):x.pop(),d=x.length;d--;){const p=a.slice(x[d],x[d+1]),g=s.pop();l.push([g,g+p.length-1]),t.splice(g,2,p)}for(l.reverse(),d=-1;++d<l.length;)u[m+l[d][0]]=m+l[d][1],m+=l[d][1]-l[d][0]-1;return u}const dP={resolve:pP,tokenize:mP},hP={partial:!0,tokenize:gP};function pP(t){return Oy(t),t}function mP(t,e){let n;return i;function i(a){return t.enter("content"),n=t.enter("chunkContent",{contentType:"content"}),r(a)}function r(a){return a===null?s(a):Ie(a)?t.check(hP,o,s)(a):(t.consume(a),r)}function s(a){return t.exit("chunkContent"),t.exit("content"),e(a)}function o(a){return t.consume(a),t.exit("chunkContent"),n.next=t.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,r}}function gP(t,e,n){const i=this;return r;function r(o){return t.exit("chunkContent"),t.enter("lineEnding"),t.consume(o),t.exit("lineEnding"),Ze(t,s,"linePrefix")}function s(o){if(o===null||Ie(o))return n(o);const a=i.events[i.events.length-1];return!i.parser.constructs.disable.null.includes("codeIndented")&&a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?e(o):t.interrupt(i.parser.constructs.flow,n,e)(o)}}function zy(t,e,n,i,r,s,o,a,l){const u=l||Number.POSITIVE_INFINITY;let f=0;return c;function c(p){return p===60?(t.enter(i),t.enter(r),t.enter(s),t.consume(p),t.exit(s),d):p===null||p===32||p===41||Pu(p)?n(p):(t.enter(i),t.enter(o),t.enter(a),t.enter("chunkString",{contentType:"string"}),v(p))}function d(p){return p===62?(t.enter(s),t.consume(p),t.exit(s),t.exit(r),t.exit(i),e):(t.enter(a),t.enter("chunkString",{contentType:"string"}),h(p))}function h(p){return p===62?(t.exit("chunkString"),t.exit(a),d(p)):p===null||p===60||Ie(p)?n(p):(t.consume(p),p===92?m:h)}function m(p){return p===60||p===62||p===92?(t.consume(p),h):h(p)}function v(p){return!f&&(p===null||p===41||pt(p))?(t.exit("chunkString"),t.exit(a),t.exit(o),t.exit(i),e(p)):f<u&&p===40?(t.consume(p),f++,v):p===41?(t.consume(p),f--,v):p===null||p===32||p===40||Pu(p)?n(p):(t.consume(p),p===92?x:v)}function x(p){return p===40||p===41||p===92?(t.consume(p),v):v(p)}}function By(t,e,n,i,r,s){const o=this;let a=0,l;return u;function u(h){return t.enter(i),t.enter(r),t.consume(h),t.exit(r),t.enter(s),f}function f(h){return a>999||h===null||h===91||h===93&&!l||h===94&&!a&&"_hiddenFootnoteSupport"in o.parser.constructs?n(h):h===93?(t.exit(s),t.enter(r),t.consume(h),t.exit(r),t.exit(i),e):Ie(h)?(t.enter("lineEnding"),t.consume(h),t.exit("lineEnding"),f):(t.enter("chunkString",{contentType:"string"}),c(h))}function c(h){return h===null||h===91||h===93||Ie(h)||a++>999?(t.exit("chunkString"),f(h)):(t.consume(h),l||(l=!$e(h)),h===92?d:c)}function d(h){return h===91||h===92||h===93?(t.consume(h),a++,c):c(h)}}function Vy(t,e,n,i,r,s){let o;return a;function a(d){return d===34||d===39||d===40?(t.enter(i),t.enter(r),t.consume(d),t.exit(r),o=d===40?41:d,l):n(d)}function l(d){return d===o?(t.enter(r),t.consume(d),t.exit(r),t.exit(i),e):(t.enter(s),u(d))}function u(d){return d===o?(t.exit(s),l(o)):d===null?n(d):Ie(d)?(t.enter("lineEnding"),t.consume(d),t.exit("lineEnding"),Ze(t,u,"linePrefix")):(t.enter("chunkString",{contentType:"string"}),f(d))}function f(d){return d===o||d===null||Ie(d)?(t.exit("chunkString"),u(d)):(t.consume(d),d===92?c:f)}function c(d){return d===o||d===92?(t.consume(d),f):f(d)}}function ea(t,e){let n;return i;function i(r){return Ie(r)?(t.enter("lineEnding"),t.consume(r),t.exit("lineEnding"),n=!0,i):$e(r)?Ze(t,i,n?"linePrefix":"lineSuffix")(r):e(r)}}const xP={name:"definition",tokenize:vP},_P={partial:!0,tokenize:yP};function vP(t,e,n){const i=this;let r;return s;function s(h){return t.enter("definition"),o(h)}function o(h){return By.call(i,t,a,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(h)}function a(h){return r=ui(i.sliceSerialize(i.events[i.events.length-1][1]).slice(1,-1)),h===58?(t.enter("definitionMarker"),t.consume(h),t.exit("definitionMarker"),l):n(h)}function l(h){return pt(h)?ea(t,u)(h):u(h)}function u(h){return zy(t,f,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(h)}function f(h){return t.attempt(_P,c,c)(h)}function c(h){return $e(h)?Ze(t,d,"whitespace")(h):d(h)}function d(h){return h===null||Ie(h)?(t.exit("definition"),i.parser.defined.push(r),e(h)):n(h)}}function yP(t,e,n){return i;function i(a){return pt(a)?ea(t,r)(a):n(a)}function r(a){return Vy(t,s,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(a)}function s(a){return $e(a)?Ze(t,o,"whitespace")(a):o(a)}function o(a){return a===null||Ie(a)?e(a):n(a)}}const SP={name:"hardBreakEscape",tokenize:MP};function MP(t,e,n){return i;function i(s){return t.enter("hardBreakEscape"),t.consume(s),r}function r(s){return Ie(s)?(t.exit("hardBreakEscape"),e(s)):n(s)}}const EP={name:"headingAtx",resolve:wP,tokenize:TP};function wP(t,e){let n=t.length-2,i=3,r,s;return t[i][1].type==="whitespace"&&(i+=2),n-2>i&&t[n][1].type==="whitespace"&&(n-=2),t[n][1].type==="atxHeadingSequence"&&(i===n-1||n-4>i&&t[n-2][1].type==="whitespace")&&(n-=i+1===n?2:4),n>i&&(r={type:"atxHeadingText",start:t[i][1].start,end:t[n][1].end},s={type:"chunkText",start:t[i][1].start,end:t[n][1].end,contentType:"text"},Nn(t,i,n-i+1,[["enter",r,e],["enter",s,e],["exit",s,e],["exit",r,e]])),t}function TP(t,e,n){let i=0;return r;function r(f){return t.enter("atxHeading"),s(f)}function s(f){return t.enter("atxHeadingSequence"),o(f)}function o(f){return f===35&&i++<6?(t.consume(f),o):f===null||pt(f)?(t.exit("atxHeadingSequence"),a(f)):n(f)}function a(f){return f===35?(t.enter("atxHeadingSequence"),l(f)):f===null||Ie(f)?(t.exit("atxHeading"),e(f)):$e(f)?Ze(t,a,"whitespace")(f):(t.enter("atxHeadingText"),u(f))}function l(f){return f===35?(t.consume(f),l):(t.exit("atxHeadingSequence"),a(f))}function u(f){return f===null||f===35||pt(f)?(t.exit("atxHeadingText"),a(f)):(t.consume(f),u)}}const bP=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],B0=["pre","script","style","textarea"],AP={concrete:!0,name:"htmlFlow",resolveTo:PP,tokenize:LP},CP={partial:!0,tokenize:DP},RP={partial:!0,tokenize:IP};function PP(t){let e=t.length;for(;e--&&!(t[e][0]==="enter"&&t[e][1].type==="htmlFlow"););return e>1&&t[e-2][1].type==="linePrefix"&&(t[e][1].start=t[e-2][1].start,t[e+1][1].start=t[e-2][1].start,t.splice(e-2,2)),t}function LP(t,e,n){const i=this;let r,s,o,a,l;return u;function u(I){return f(I)}function f(I){return t.enter("htmlFlow"),t.enter("htmlFlowData"),t.consume(I),c}function c(I){return I===33?(t.consume(I),d):I===47?(t.consume(I),s=!0,v):I===63?(t.consume(I),r=3,i.interrupt?e:C):dn(I)?(t.consume(I),o=String.fromCharCode(I),x):n(I)}function d(I){return I===45?(t.consume(I),r=2,h):I===91?(t.consume(I),r=5,a=0,m):dn(I)?(t.consume(I),r=4,i.interrupt?e:C):n(I)}function h(I){return I===45?(t.consume(I),i.interrupt?e:C):n(I)}function m(I){const ke="CDATA[";return I===ke.charCodeAt(a++)?(t.consume(I),a===ke.length?i.interrupt?e:D:m):n(I)}function v(I){return dn(I)?(t.consume(I),o=String.fromCharCode(I),x):n(I)}function x(I){if(I===null||I===47||I===62||pt(I)){const ke=I===47,Pe=o.toLowerCase();return!ke&&!s&&B0.includes(Pe)?(r=1,i.interrupt?e(I):D(I)):bP.includes(o.toLowerCase())?(r=6,ke?(t.consume(I),p):i.interrupt?e(I):D(I)):(r=7,i.interrupt&&!i.parser.lazy[i.now().line]?n(I):s?g(I):_(I))}return I===45||an(I)?(t.consume(I),o+=String.fromCharCode(I),x):n(I)}function p(I){return I===62?(t.consume(I),i.interrupt?e:D):n(I)}function g(I){return $e(I)?(t.consume(I),g):T(I)}function _(I){return I===47?(t.consume(I),T):I===58||I===95||dn(I)?(t.consume(I),w):$e(I)?(t.consume(I),_):T(I)}function w(I){return I===45||I===46||I===58||I===95||an(I)?(t.consume(I),w):A(I)}function A(I){return I===61?(t.consume(I),M):$e(I)?(t.consume(I),A):_(I)}function M(I){return I===null||I===60||I===61||I===62||I===96?n(I):I===34||I===39?(t.consume(I),l=I,R):$e(I)?(t.consume(I),M):S(I)}function R(I){return I===l?(t.consume(I),l=null,P):I===null||Ie(I)?n(I):(t.consume(I),R)}function S(I){return I===null||I===34||I===39||I===47||I===60||I===61||I===62||I===96||pt(I)?A(I):(t.consume(I),S)}function P(I){return I===47||I===62||$e(I)?_(I):n(I)}function T(I){return I===62?(t.consume(I),L):n(I)}function L(I){return I===null||Ie(I)?D(I):$e(I)?(t.consume(I),L):n(I)}function D(I){return I===45&&r===2?(t.consume(I),G):I===60&&r===1?(t.consume(I),B):I===62&&r===4?(t.consume(I),re):I===63&&r===3?(t.consume(I),C):I===93&&r===5?(t.consume(I),Y):Ie(I)&&(r===6||r===7)?(t.exit("htmlFlowData"),t.check(CP,fe,X)(I)):I===null||Ie(I)?(t.exit("htmlFlowData"),X(I)):(t.consume(I),D)}function X(I){return t.check(RP,Z,fe)(I)}function Z(I){return t.enter("lineEnding"),t.consume(I),t.exit("lineEnding"),k}function k(I){return I===null||Ie(I)?X(I):(t.enter("htmlFlowData"),D(I))}function G(I){return I===45?(t.consume(I),C):D(I)}function B(I){return I===47?(t.consume(I),o="",V):D(I)}function V(I){if(I===62){const ke=o.toLowerCase();return B0.includes(ke)?(t.consume(I),re):D(I)}return dn(I)&&o.length<8?(t.consume(I),o+=String.fromCharCode(I),V):D(I)}function Y(I){return I===93?(t.consume(I),C):D(I)}function C(I){return I===62?(t.consume(I),re):I===45&&r===2?(t.consume(I),C):D(I)}function re(I){return I===null||Ie(I)?(t.exit("htmlFlowData"),fe(I)):(t.consume(I),re)}function fe(I){return t.exit("htmlFlow"),e(I)}}function IP(t,e,n){const i=this;return r;function r(o){return Ie(o)?(t.enter("lineEnding"),t.consume(o),t.exit("lineEnding"),s):n(o)}function s(o){return i.parser.lazy[i.now().line]?n(o):e(o)}}function DP(t,e,n){return i;function i(r){return t.enter("lineEnding"),t.consume(r),t.exit("lineEnding"),t.attempt(Da,e,n)}}const kP={name:"htmlText",tokenize:NP};function NP(t,e,n){const i=this;let r,s,o;return a;function a(C){return t.enter("htmlText"),t.enter("htmlTextData"),t.consume(C),l}function l(C){return C===33?(t.consume(C),u):C===47?(t.consume(C),A):C===63?(t.consume(C),_):dn(C)?(t.consume(C),S):n(C)}function u(C){return C===45?(t.consume(C),f):C===91?(t.consume(C),s=0,m):dn(C)?(t.consume(C),g):n(C)}function f(C){return C===45?(t.consume(C),h):n(C)}function c(C){return C===null?n(C):C===45?(t.consume(C),d):Ie(C)?(o=c,B(C)):(t.consume(C),c)}function d(C){return C===45?(t.consume(C),h):c(C)}function h(C){return C===62?G(C):C===45?d(C):c(C)}function m(C){const re="CDATA[";return C===re.charCodeAt(s++)?(t.consume(C),s===re.length?v:m):n(C)}function v(C){return C===null?n(C):C===93?(t.consume(C),x):Ie(C)?(o=v,B(C)):(t.consume(C),v)}function x(C){return C===93?(t.consume(C),p):v(C)}function p(C){return C===62?G(C):C===93?(t.consume(C),p):v(C)}function g(C){return C===null||C===62?G(C):Ie(C)?(o=g,B(C)):(t.consume(C),g)}function _(C){return C===null?n(C):C===63?(t.consume(C),w):Ie(C)?(o=_,B(C)):(t.consume(C),_)}function w(C){return C===62?G(C):_(C)}function A(C){return dn(C)?(t.consume(C),M):n(C)}function M(C){return C===45||an(C)?(t.consume(C),M):R(C)}function R(C){return Ie(C)?(o=R,B(C)):$e(C)?(t.consume(C),R):G(C)}function S(C){return C===45||an(C)?(t.consume(C),S):C===47||C===62||pt(C)?P(C):n(C)}function P(C){return C===47?(t.consume(C),G):C===58||C===95||dn(C)?(t.consume(C),T):Ie(C)?(o=P,B(C)):$e(C)?(t.consume(C),P):G(C)}function T(C){return C===45||C===46||C===58||C===95||an(C)?(t.consume(C),T):L(C)}function L(C){return C===61?(t.consume(C),D):Ie(C)?(o=L,B(C)):$e(C)?(t.consume(C),L):P(C)}function D(C){return C===null||C===60||C===61||C===62||C===96?n(C):C===34||C===39?(t.consume(C),r=C,X):Ie(C)?(o=D,B(C)):$e(C)?(t.consume(C),D):(t.consume(C),Z)}function X(C){return C===r?(t.consume(C),r=void 0,k):C===null?n(C):Ie(C)?(o=X,B(C)):(t.consume(C),X)}function Z(C){return C===null||C===34||C===39||C===60||C===61||C===96?n(C):C===47||C===62||pt(C)?P(C):(t.consume(C),Z)}function k(C){return C===47||C===62||pt(C)?P(C):n(C)}function G(C){return C===62?(t.consume(C),t.exit("htmlTextData"),t.exit("htmlText"),e):n(C)}function B(C){return t.exit("htmlTextData"),t.enter("lineEnding"),t.consume(C),t.exit("lineEnding"),V}function V(C){return $e(C)?Ze(t,Y,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(C):Y(C)}function Y(C){return t.enter("htmlTextData"),o(C)}}const Gp={name:"labelEnd",resolveAll:zP,resolveTo:BP,tokenize:VP},UP={tokenize:HP},FP={tokenize:GP},OP={tokenize:WP};function zP(t){let e=-1;const n=[];for(;++e<t.length;){const i=t[e][1];if(n.push(t[e]),i.type==="labelImage"||i.type==="labelLink"||i.type==="labelEnd"){const r=i.type==="labelImage"?4:2;i.type="data",e+=r}}return t.length!==n.length&&Nn(t,0,t.length,n),t}function BP(t,e){let n=t.length,i=0,r,s,o,a;for(;n--;)if(r=t[n][1],s){if(r.type==="link"||r.type==="labelLink"&&r._inactive)break;t[n][0]==="enter"&&r.type==="labelLink"&&(r._inactive=!0)}else if(o){if(t[n][0]==="enter"&&(r.type==="labelImage"||r.type==="labelLink")&&!r._balanced&&(s=n,r.type!=="labelLink")){i=2;break}}else r.type==="labelEnd"&&(o=n);const l={type:t[s][1].type==="labelLink"?"link":"image",start:{...t[s][1].start},end:{...t[t.length-1][1].end}},u={type:"label",start:{...t[s][1].start},end:{...t[o][1].end}},f={type:"labelText",start:{...t[s+i+2][1].end},end:{...t[o-2][1].start}};return a=[["enter",l,e],["enter",u,e]],a=jn(a,t.slice(s+1,s+i+3)),a=jn(a,[["enter",f,e]]),a=jn(a,rc(e.parser.constructs.insideSpan.null,t.slice(s+i+4,o-3),e)),a=jn(a,[["exit",f,e],t[o-2],t[o-1],["exit",u,e]]),a=jn(a,t.slice(o+1)),a=jn(a,[["exit",l,e]]),Nn(t,s,t.length,a),t}function VP(t,e,n){const i=this;let r=i.events.length,s,o;for(;r--;)if((i.events[r][1].type==="labelImage"||i.events[r][1].type==="labelLink")&&!i.events[r][1]._balanced){s=i.events[r][1];break}return a;function a(d){return s?s._inactive?c(d):(o=i.parser.defined.includes(ui(i.sliceSerialize({start:s.end,end:i.now()}))),t.enter("labelEnd"),t.enter("labelMarker"),t.consume(d),t.exit("labelMarker"),t.exit("labelEnd"),l):n(d)}function l(d){return d===40?t.attempt(UP,f,o?f:c)(d):d===91?t.attempt(FP,f,o?u:c)(d):o?f(d):c(d)}function u(d){return t.attempt(OP,f,c)(d)}function f(d){return e(d)}function c(d){return s._balanced=!0,n(d)}}function HP(t,e,n){return i;function i(c){return t.enter("resource"),t.enter("resourceMarker"),t.consume(c),t.exit("resourceMarker"),r}function r(c){return pt(c)?ea(t,s)(c):s(c)}function s(c){return c===41?f(c):zy(t,o,a,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(c)}function o(c){return pt(c)?ea(t,l)(c):f(c)}function a(c){return n(c)}function l(c){return c===34||c===39||c===40?Vy(t,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(c):f(c)}function u(c){return pt(c)?ea(t,f)(c):f(c)}function f(c){return c===41?(t.enter("resourceMarker"),t.consume(c),t.exit("resourceMarker"),t.exit("resource"),e):n(c)}}function GP(t,e,n){const i=this;return r;function r(a){return By.call(i,t,s,o,"reference","referenceMarker","referenceString")(a)}function s(a){return i.parser.defined.includes(ui(i.sliceSerialize(i.events[i.events.length-1][1]).slice(1,-1)))?e(a):n(a)}function o(a){return n(a)}}function WP(t,e,n){return i;function i(s){return t.enter("reference"),t.enter("referenceMarker"),t.consume(s),t.exit("referenceMarker"),r}function r(s){return s===93?(t.enter("referenceMarker"),t.consume(s),t.exit("referenceMarker"),t.exit("reference"),e):n(s)}}const jP={name:"labelStartImage",resolveAll:Gp.resolveAll,tokenize:XP};function XP(t,e,n){const i=this;return r;function r(a){return t.enter("labelImage"),t.enter("labelImageMarker"),t.consume(a),t.exit("labelImageMarker"),s}function s(a){return a===91?(t.enter("labelMarker"),t.consume(a),t.exit("labelMarker"),t.exit("labelImage"),o):n(a)}function o(a){return a===94&&"_hiddenFootnoteSupport"in i.parser.constructs?n(a):e(a)}}const $P={name:"labelStartLink",resolveAll:Gp.resolveAll,tokenize:qP};function qP(t,e,n){const i=this;return r;function r(o){return t.enter("labelLink"),t.enter("labelMarker"),t.consume(o),t.exit("labelMarker"),t.exit("labelLink"),s}function s(o){return o===94&&"_hiddenFootnoteSupport"in i.parser.constructs?n(o):e(o)}}const yf={name:"lineEnding",tokenize:YP};function YP(t,e){return n;function n(i){return t.enter("lineEnding"),t.consume(i),t.exit("lineEnding"),Ze(t,e,"linePrefix")}}const $l={name:"thematicBreak",tokenize:KP};function KP(t,e,n){let i=0,r;return s;function s(u){return t.enter("thematicBreak"),o(u)}function o(u){return r=u,a(u)}function a(u){return u===r?(t.enter("thematicBreakSequence"),l(u)):i>=3&&(u===null||Ie(u))?(t.exit("thematicBreak"),e(u)):n(u)}function l(u){return u===r?(t.consume(u),i++,l):(t.exit("thematicBreakSequence"),$e(u)?Ze(t,a,"whitespace")(u):a(u))}}const _n={continuation:{tokenize:e3},exit:n3,name:"list",tokenize:JP},ZP={partial:!0,tokenize:i3},QP={partial:!0,tokenize:t3};function JP(t,e,n){const i=this,r=i.events[i.events.length-1];let s=r&&r[1].type==="linePrefix"?r[2].sliceSerialize(r[1],!0).length:0,o=0;return a;function a(h){const m=i.containerState.type||(h===42||h===43||h===45?"listUnordered":"listOrdered");if(m==="listUnordered"?!i.containerState.marker||h===i.containerState.marker:Mh(h)){if(i.containerState.type||(i.containerState.type=m,t.enter(m,{_container:!0})),m==="listUnordered")return t.enter("listItemPrefix"),h===42||h===45?t.check($l,n,u)(h):u(h);if(!i.interrupt||h===49)return t.enter("listItemPrefix"),t.enter("listItemValue"),l(h)}return n(h)}function l(h){return Mh(h)&&++o<10?(t.consume(h),l):(!i.interrupt||o<2)&&(i.containerState.marker?h===i.containerState.marker:h===41||h===46)?(t.exit("listItemValue"),u(h)):n(h)}function u(h){return t.enter("listItemMarker"),t.consume(h),t.exit("listItemMarker"),i.containerState.marker=i.containerState.marker||h,t.check(Da,i.interrupt?n:f,t.attempt(ZP,d,c))}function f(h){return i.containerState.initialBlankLine=!0,s++,d(h)}function c(h){return $e(h)?(t.enter("listItemPrefixWhitespace"),t.consume(h),t.exit("listItemPrefixWhitespace"),d):n(h)}function d(h){return i.containerState.size=s+i.sliceSerialize(t.exit("listItemPrefix"),!0).length,e(h)}}function e3(t,e,n){const i=this;return i.containerState._closeFlow=void 0,t.check(Da,r,s);function r(a){return i.containerState.furtherBlankLines=i.containerState.furtherBlankLines||i.containerState.initialBlankLine,Ze(t,e,"listItemIndent",i.containerState.size+1)(a)}function s(a){return i.containerState.furtherBlankLines||!$e(a)?(i.containerState.furtherBlankLines=void 0,i.containerState.initialBlankLine=void 0,o(a)):(i.containerState.furtherBlankLines=void 0,i.containerState.initialBlankLine=void 0,t.attempt(QP,e,o)(a))}function o(a){return i.containerState._closeFlow=!0,i.interrupt=void 0,Ze(t,t.attempt(_n,e,n),"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a)}}function t3(t,e,n){const i=this;return Ze(t,r,"listItemIndent",i.containerState.size+1);function r(s){const o=i.events[i.events.length-1];return o&&o[1].type==="listItemIndent"&&o[2].sliceSerialize(o[1],!0).length===i.containerState.size?e(s):n(s)}}function n3(t){t.exit(this.containerState.type)}function i3(t,e,n){const i=this;return Ze(t,r,"listItemPrefixWhitespace",i.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function r(s){const o=i.events[i.events.length-1];return!$e(s)&&o&&o[1].type==="listItemPrefixWhitespace"?e(s):n(s)}}const V0={name:"setextUnderline",resolveTo:r3,tokenize:s3};function r3(t,e){let n=t.length,i,r,s;for(;n--;)if(t[n][0]==="enter"){if(t[n][1].type==="content"){i=n;break}t[n][1].type==="paragraph"&&(r=n)}else t[n][1].type==="content"&&t.splice(n,1),!s&&t[n][1].type==="definition"&&(s=n);const o={type:"setextHeading",start:{...t[i][1].start},end:{...t[t.length-1][1].end}};return t[r][1].type="setextHeadingText",s?(t.splice(r,0,["enter",o,e]),t.splice(s+1,0,["exit",t[i][1],e]),t[i][1].end={...t[s][1].end}):t[i][1]=o,t.push(["exit",o,e]),t}function s3(t,e,n){const i=this;let r;return s;function s(u){let f=i.events.length,c;for(;f--;)if(i.events[f][1].type!=="lineEnding"&&i.events[f][1].type!=="linePrefix"&&i.events[f][1].type!=="content"){c=i.events[f][1].type==="paragraph";break}return!i.parser.lazy[i.now().line]&&(i.interrupt||c)?(t.enter("setextHeadingLine"),r=u,o(u)):n(u)}function o(u){return t.enter("setextHeadingLineSequence"),a(u)}function a(u){return u===r?(t.consume(u),a):(t.exit("setextHeadingLineSequence"),$e(u)?Ze(t,l,"lineSuffix")(u):l(u))}function l(u){return u===null||Ie(u)?(t.exit("setextHeadingLine"),e(u)):n(u)}}const o3={tokenize:a3};function a3(t){const e=this,n=t.attempt(Da,i,t.attempt(this.parser.constructs.flowInitial,r,Ze(t,t.attempt(this.parser.constructs.flow,r,t.attempt(dP,r)),"linePrefix")));return n;function i(s){if(s===null){t.consume(s);return}return t.enter("lineEndingBlank"),t.consume(s),t.exit("lineEndingBlank"),e.currentConstruct=void 0,n}function r(s){if(s===null){t.consume(s);return}return t.enter("lineEnding"),t.consume(s),t.exit("lineEnding"),e.currentConstruct=void 0,n}}const l3={resolveAll:Gy()},u3=Hy("string"),c3=Hy("text");function Hy(t){return{resolveAll:Gy(t==="text"?f3:void 0),tokenize:e};function e(n){const i=this,r=this.parser.constructs[t],s=n.attempt(r,o,a);return o;function o(f){return u(f)?s(f):a(f)}function a(f){if(f===null){n.consume(f);return}return n.enter("data"),n.consume(f),l}function l(f){return u(f)?(n.exit("data"),s(f)):(n.consume(f),l)}function u(f){if(f===null)return!0;const c=r[f];let d=-1;if(c)for(;++d<c.length;){const h=c[d];if(!h.previous||h.previous.call(i,i.previous))return!0}return!1}}}function Gy(t){return e;function e(n,i){let r=-1,s;for(;++r<=n.length;)s===void 0?n[r]&&n[r][1].type==="data"&&(s=r,r++):(!n[r]||n[r][1].type!=="data")&&(r!==s+2&&(n[s][1].end=n[r-1][1].end,n.splice(s+2,r-s-2),r=s+2),s=void 0);return t?t(n,i):n}}function f3(t,e){let n=0;for(;++n<=t.length;)if((n===t.length||t[n][1].type==="lineEnding")&&t[n-1][1].type==="data"){const i=t[n-1][1],r=e.sliceStream(i);let s=r.length,o=-1,a=0,l;for(;s--;){const u=r[s];if(typeof u=="string"){for(o=u.length;u.charCodeAt(o-1)===32;)a++,o--;if(o)break;o=-1}else if(u===-2)l=!0,a++;else if(u!==-1){s++;break}}if(e._contentTypeTextTrailing&&n===t.length&&(a=0),a){const u={type:n===t.length||l||a<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:s?o:i.start._bufferIndex+o,_index:i.start._index+s,line:i.end.line,column:i.end.column-a,offset:i.end.offset-a},end:{...i.end}};i.end={...u.start},i.start.offset===i.end.offset?Object.assign(i,u):(t.splice(n,0,["enter",u,e],["exit",u,e]),n+=2)}n++}return t}const d3={42:_n,43:_n,45:_n,48:_n,49:_n,50:_n,51:_n,52:_n,53:_n,54:_n,55:_n,56:_n,57:_n,62:Ny},h3={91:xP},p3={[-2]:vf,[-1]:vf,32:vf},m3={35:EP,42:$l,45:[V0,$l],60:AP,61:V0,95:$l,96:z0,126:z0},g3={38:Fy,92:Uy},x3={[-5]:yf,[-4]:yf,[-3]:yf,33:jP,38:Fy,42:Eh,60:[$2,kP],91:$P,92:[SP,Uy],93:Gp,95:Eh,96:oP},_3={null:[Eh,l3]},v3={null:[42,95]},y3={null:[]},S3=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:v3,contentInitial:h3,disable:y3,document:d3,flow:m3,flowInitial:p3,insideSpan:_3,string:g3,text:x3},Symbol.toStringTag,{value:"Module"}));function M3(t,e,n){let i={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const r={},s=[];let o=[],a=[];const l={attempt:R(A),check:R(M),consume:g,enter:_,exit:w,interrupt:R(M,{interrupt:!0})},u={code:null,containerState:{},defineSkip:v,events:[],now:m,parser:t,previous:null,sliceSerialize:d,sliceStream:h,write:c};let f=e.tokenize.call(u,l);return e.resolveAll&&s.push(e),u;function c(L){return o=jn(o,L),x(),o[o.length-1]!==null?[]:(S(e,0),u.events=rc(s,u.events,u),u.events)}function d(L,D){return w3(h(L),D)}function h(L){return E3(o,L)}function m(){const{_bufferIndex:L,_index:D,line:X,column:Z,offset:k}=i;return{_bufferIndex:L,_index:D,line:X,column:Z,offset:k}}function v(L){r[L.line]=L.column,T()}function x(){let L;for(;i._index<o.length;){const D=o[i._index];if(typeof D=="string")for(L=i._index,i._bufferIndex<0&&(i._bufferIndex=0);i._index===L&&i._bufferIndex<D.length;)p(D.charCodeAt(i._bufferIndex));else p(D)}}function p(L){f=f(L)}function g(L){Ie(L)?(i.line++,i.column=1,i.offset+=L===-3?2:1,T()):L!==-1&&(i.column++,i.offset++),i._bufferIndex<0?i._index++:(i._bufferIndex++,i._bufferIndex===o[i._index].length&&(i._bufferIndex=-1,i._index++)),u.previous=L}function _(L,D){const X=D||{};return X.type=L,X.start=m(),u.events.push(["enter",X,u]),a.push(X),X}function w(L){const D=a.pop();return D.end=m(),u.events.push(["exit",D,u]),D}function A(L,D){S(L,D.from)}function M(L,D){D.restore()}function R(L,D){return X;function X(Z,k,G){let B,V,Y,C;return Array.isArray(Z)?fe(Z):"tokenize"in Z?fe([Z]):re(Z);function re(Q){return he;function he(ae){const Ce=ae!==null&&Q[ae],De=ae!==null&&Q.null,Le=[...Array.isArray(Ce)?Ce:Ce?[Ce]:[],...Array.isArray(De)?De:De?[De]:[]];return fe(Le)(ae)}}function fe(Q){return B=Q,V=0,Q.length===0?G:I(Q[V])}function I(Q){return he;function he(ae){return C=P(),Y=Q,Q.partial||(u.currentConstruct=Q),Q.name&&u.parser.constructs.disable.null.includes(Q.name)?Pe():Q.tokenize.call(D?Object.assign(Object.create(u),D):u,l,ke,Pe)(ae)}}function ke(Q){return L(Y,C),k}function Pe(Q){return C.restore(),++V<B.length?I(B[V]):G}}}function S(L,D){L.resolveAll&&!s.includes(L)&&s.push(L),L.resolve&&Nn(u.events,D,u.events.length-D,L.resolve(u.events.slice(D),u)),L.resolveTo&&(u.events=L.resolveTo(u.events,u))}function P(){const L=m(),D=u.previous,X=u.currentConstruct,Z=u.events.length,k=Array.from(a);return{from:Z,restore:G};function G(){i=L,u.previous=D,u.currentConstruct=X,u.events.length=Z,a=k,T()}}function T(){i.line in r&&i.column<2&&(i.column=r[i.line],i.offset+=r[i.line]-1)}}function E3(t,e){const n=e.start._index,i=e.start._bufferIndex,r=e.end._index,s=e.end._bufferIndex;let o;if(n===r)o=[t[n].slice(i,s)];else{if(o=t.slice(n,r),i>-1){const a=o[0];typeof a=="string"?o[0]=a.slice(i):o.shift()}s>0&&o.push(t[r].slice(0,s))}return o}function w3(t,e){let n=-1;const i=[];let r;for(;++n<t.length;){const s=t[n];let o;if(typeof s=="string")o=s;else switch(s){case-5:{o="\r";break}case-4:{o=`
`;break}case-3:{o=`\r
`;break}case-2:{o=e?" ":"	";break}case-1:{if(!e&&r)continue;o=" ";break}default:o=String.fromCharCode(s)}r=s===-2,i.push(o)}return i.join("")}function T3(t){const i={constructs:Dy([S3,...(t||{}).extensions||[]]),content:r(B2),defined:[],document:r(H2),flow:r(o3),lazy:{},string:r(u3),text:r(c3)};return i;function r(s){return o;function o(a){return M3(i,s,a)}}}function b3(t){for(;!Oy(t););return t}const H0=/[\0\t\n\r]/g;function A3(){let t=1,e="",n=!0,i;return r;function r(s,o,a){const l=[];let u,f,c,d,h;for(s=e+(typeof s=="string"?s.toString():new TextDecoder(o||void 0).decode(s)),c=0,e="",n&&(s.charCodeAt(0)===65279&&c++,n=void 0);c<s.length;){if(H0.lastIndex=c,u=H0.exec(s),d=u&&u.index!==void 0?u.index:s.length,h=s.charCodeAt(d),!u){e=s.slice(c);break}if(h===10&&c===d&&i)l.push(-3),i=void 0;else switch(i&&(l.push(-5),i=void 0),c<d&&(l.push(s.slice(c,d)),t+=d-c),h){case 0:{l.push(65533),t++;break}case 9:{for(f=Math.ceil(t/4)*4,l.push(-2);t++<f;)l.push(-1);break}case 10:{l.push(-4),t=1;break}default:i=!0,t=1}c=d+1}return a&&(i&&l.push(-5),e&&l.push(e),l.push(null)),l}}const C3=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function R3(t){return t.replace(C3,P3)}function P3(t,e,n){if(e)return e;if(n.charCodeAt(0)===35){const r=n.charCodeAt(1),s=r===120||r===88;return ky(n.slice(s?2:1),s?16:10)}return Hp(n)||t}const Wy={}.hasOwnProperty;function L3(t,e,n){return e&&typeof e=="object"&&(n=e,e=void 0),I3(n)(b3(T3(n).document().write(A3()(t,e,!0))))}function I3(t){const e={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:s(Qt),autolinkProtocol:P,autolinkEmail:P,atxHeading:s(lt),blockQuote:s(De),characterEscape:P,characterReference:P,codeFenced:s(Le),codeFencedFenceInfo:o,codeFencedFenceMeta:o,codeIndented:s(Le,o),codeText:s(_t,o),codeTextData:P,data:P,codeFlowValue:P,definition:s(je),definitionDestinationString:o,definitionLabelString:o,definitionTitleString:o,emphasis:s(it),hardBreakEscape:s(He),hardBreakTrailing:s(He),htmlFlow:s(At,o),htmlFlowData:P,htmlText:s(At,o),htmlTextData:P,image:s(vt),label:o,link:s(Qt),listItem:s(Pt),listItemValue:d,listOrdered:s(O,c),listUnordered:s(O),paragraph:s(Xe),reference:I,referenceString:o,resourceDestinationString:o,resourceTitleString:o,setextHeading:s(lt),strong:s(ut),thematicBreak:s(Mt)},exit:{atxHeading:l(),atxHeadingSequence:A,autolink:l(),autolinkEmail:Ce,autolinkProtocol:ae,blockQuote:l(),characterEscapeValue:T,characterReferenceMarkerHexadecimal:Pe,characterReferenceMarkerNumeric:Pe,characterReferenceValue:Q,characterReference:he,codeFenced:l(x),codeFencedFence:v,codeFencedFenceInfo:h,codeFencedFenceMeta:m,codeFlowValue:T,codeIndented:l(p),codeText:l(k),codeTextData:T,data:T,definition:l(),definitionDestinationString:w,definitionLabelString:g,definitionTitleString:_,emphasis:l(),hardBreakEscape:l(D),hardBreakTrailing:l(D),htmlFlow:l(X),htmlFlowData:T,htmlText:l(Z),htmlTextData:T,image:l(B),label:Y,labelText:V,lineEnding:L,link:l(G),listItem:l(),listOrdered:l(),listUnordered:l(),paragraph:l(),referenceString:ke,resourceDestinationString:C,resourceTitleString:re,resource:fe,setextHeading:l(S),setextHeadingLineSequence:R,setextHeadingText:M,strong:l(),thematicBreak:l()}};jy(e,(t||{}).mdastExtensions||[]);const n={};return i;function i(E){let y={type:"root",children:[]};const U={stack:[y],tokenStack:[],config:e,enter:a,exit:u,buffer:o,resume:f,data:n},$=[];let J=-1;for(;++J<E.length;)if(E[J][1].type==="listOrdered"||E[J][1].type==="listUnordered")if(E[J][0]==="enter")$.push(J);else{const ie=$.pop();J=r(E,ie,J)}for(J=-1;++J<E.length;){const ie=e[E[J][0]];Wy.call(ie,E[J][1].type)&&ie[E[J][1].type].call(Object.assign({sliceSerialize:E[J][2].sliceSerialize},U),E[J][1])}if(U.tokenStack.length>0){const ie=U.tokenStack[U.tokenStack.length-1];(ie[1]||G0).call(U,void 0,ie[0])}for(y.position={start:cr(E.length>0?E[0][1].start:{line:1,column:1,offset:0}),end:cr(E.length>0?E[E.length-2][1].end:{line:1,column:1,offset:0})},J=-1;++J<e.transforms.length;)y=e.transforms[J](y)||y;return y}function r(E,y,U){let $=y-1,J=-1,ie=!1,ue,K,ee,ge;for(;++$<=U;){const me=E[$];switch(me[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{me[0]==="enter"?J++:J--,ge=void 0;break}case"lineEndingBlank":{me[0]==="enter"&&(ue&&!ge&&!J&&!ee&&(ee=$),ge=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:ge=void 0}if(!J&&me[0]==="enter"&&me[1].type==="listItemPrefix"||J===-1&&me[0]==="exit"&&(me[1].type==="listUnordered"||me[1].type==="listOrdered")){if(ue){let ce=$;for(K=void 0;ce--;){const se=E[ce];if(se[1].type==="lineEnding"||se[1].type==="lineEndingBlank"){if(se[0]==="exit")continue;K&&(E[K][1].type="lineEndingBlank",ie=!0),se[1].type="lineEnding",K=ce}else if(!(se[1].type==="linePrefix"||se[1].type==="blockQuotePrefix"||se[1].type==="blockQuotePrefixWhitespace"||se[1].type==="blockQuoteMarker"||se[1].type==="listItemIndent"))break}ee&&(!K||ee<K)&&(ue._spread=!0),ue.end=Object.assign({},K?E[K][1].start:me[1].end),E.splice(K||$,0,["exit",ue,me[2]]),$++,U++}if(me[1].type==="listItemPrefix"){const ce={type:"listItem",_spread:!1,start:Object.assign({},me[1].start),end:void 0};ue=ce,E.splice($,0,["enter",ce,me[2]]),$++,U++,ee=void 0,ge=!0}}}return E[y][1]._spread=ie,U}function s(E,y){return U;function U($){a.call(this,E($),$),y&&y.call(this,$)}}function o(){this.stack.push({type:"fragment",children:[]})}function a(E,y,U){this.stack[this.stack.length-1].children.push(E),this.stack.push(E),this.tokenStack.push([y,U||void 0]),E.position={start:cr(y.start),end:void 0}}function l(E){return y;function y(U){E&&E.call(this,U),u.call(this,U)}}function u(E,y){const U=this.stack.pop(),$=this.tokenStack.pop();if($)$[0].type!==E.type&&(y?y.call(this,E,$[0]):($[1]||G0).call(this,E,$[0]));else throw new Error("Cannot close `"+E.type+"` ("+Jo({start:E.start,end:E.end})+"): it’s not open");U.position.end=cr(E.end)}function f(){return Vp(this.stack.pop())}function c(){this.data.expectingFirstListItemValue=!0}function d(E){if(this.data.expectingFirstListItemValue){const y=this.stack[this.stack.length-2];y.start=Number.parseInt(this.sliceSerialize(E),10),this.data.expectingFirstListItemValue=void 0}}function h(){const E=this.resume(),y=this.stack[this.stack.length-1];y.lang=E}function m(){const E=this.resume(),y=this.stack[this.stack.length-1];y.meta=E}function v(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function x(){const E=this.resume(),y=this.stack[this.stack.length-1];y.value=E.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function p(){const E=this.resume(),y=this.stack[this.stack.length-1];y.value=E.replace(/(\r?\n|\r)$/g,"")}function g(E){const y=this.resume(),U=this.stack[this.stack.length-1];U.label=y,U.identifier=ui(this.sliceSerialize(E)).toLowerCase()}function _(){const E=this.resume(),y=this.stack[this.stack.length-1];y.title=E}function w(){const E=this.resume(),y=this.stack[this.stack.length-1];y.url=E}function A(E){const y=this.stack[this.stack.length-1];if(!y.depth){const U=this.sliceSerialize(E).length;y.depth=U}}function M(){this.data.setextHeadingSlurpLineEnding=!0}function R(E){const y=this.stack[this.stack.length-1];y.depth=this.sliceSerialize(E).codePointAt(0)===61?1:2}function S(){this.data.setextHeadingSlurpLineEnding=void 0}function P(E){const U=this.stack[this.stack.length-1].children;let $=U[U.length-1];(!$||$.type!=="text")&&($=xe(),$.position={start:cr(E.start),end:void 0},U.push($)),this.stack.push($)}function T(E){const y=this.stack.pop();y.value+=this.sliceSerialize(E),y.position.end=cr(E.end)}function L(E){const y=this.stack[this.stack.length-1];if(this.data.atHardBreak){const U=y.children[y.children.length-1];U.position.end=cr(E.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&e.canContainEols.includes(y.type)&&(P.call(this,E),T.call(this,E))}function D(){this.data.atHardBreak=!0}function X(){const E=this.resume(),y=this.stack[this.stack.length-1];y.value=E}function Z(){const E=this.resume(),y=this.stack[this.stack.length-1];y.value=E}function k(){const E=this.resume(),y=this.stack[this.stack.length-1];y.value=E}function G(){const E=this.stack[this.stack.length-1];if(this.data.inReference){const y=this.data.referenceType||"shortcut";E.type+="Reference",E.referenceType=y,delete E.url,delete E.title}else delete E.identifier,delete E.label;this.data.referenceType=void 0}function B(){const E=this.stack[this.stack.length-1];if(this.data.inReference){const y=this.data.referenceType||"shortcut";E.type+="Reference",E.referenceType=y,delete E.url,delete E.title}else delete E.identifier,delete E.label;this.data.referenceType=void 0}function V(E){const y=this.sliceSerialize(E),U=this.stack[this.stack.length-2];U.label=R3(y),U.identifier=ui(y).toLowerCase()}function Y(){const E=this.stack[this.stack.length-1],y=this.resume(),U=this.stack[this.stack.length-1];if(this.data.inReference=!0,U.type==="link"){const $=E.children;U.children=$}else U.alt=y}function C(){const E=this.resume(),y=this.stack[this.stack.length-1];y.url=E}function re(){const E=this.resume(),y=this.stack[this.stack.length-1];y.title=E}function fe(){this.data.inReference=void 0}function I(){this.data.referenceType="collapsed"}function ke(E){const y=this.resume(),U=this.stack[this.stack.length-1];U.label=y,U.identifier=ui(this.sliceSerialize(E)).toLowerCase(),this.data.referenceType="full"}function Pe(E){this.data.characterReferenceType=E.type}function Q(E){const y=this.sliceSerialize(E),U=this.data.characterReferenceType;let $;U?($=ky(y,U==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):$=Hp(y);const J=this.stack[this.stack.length-1];J.value+=$}function he(E){const y=this.stack.pop();y.position.end=cr(E.end)}function ae(E){T.call(this,E);const y=this.stack[this.stack.length-1];y.url=this.sliceSerialize(E)}function Ce(E){T.call(this,E);const y=this.stack[this.stack.length-1];y.url="mailto:"+this.sliceSerialize(E)}function De(){return{type:"blockquote",children:[]}}function Le(){return{type:"code",lang:null,meta:null,value:""}}function _t(){return{type:"inlineCode",value:""}}function je(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function it(){return{type:"emphasis",children:[]}}function lt(){return{type:"heading",depth:0,children:[]}}function He(){return{type:"break"}}function At(){return{type:"html",value:""}}function vt(){return{type:"image",title:null,url:"",alt:null}}function Qt(){return{type:"link",title:null,url:"",children:[]}}function O(E){return{type:"list",ordered:E.type==="listOrdered",start:null,spread:E._spread,children:[]}}function Pt(E){return{type:"listItem",spread:E._spread,checked:null,children:[]}}function Xe(){return{type:"paragraph",children:[]}}function ut(){return{type:"strong",children:[]}}function xe(){return{type:"text",value:""}}function Mt(){return{type:"thematicBreak"}}}function cr(t){return{line:t.line,column:t.column,offset:t.offset}}function jy(t,e){let n=-1;for(;++n<e.length;){const i=e[n];Array.isArray(i)?jy(t,i):D3(t,i)}}function D3(t,e){let n;for(n in e)if(Wy.call(e,n))switch(n){case"canContainEols":{const i=e[n];i&&t[n].push(...i);break}case"transforms":{const i=e[n];i&&t[n].push(...i);break}case"enter":case"exit":{const i=e[n];i&&Object.assign(t[n],i);break}}}function G0(t,e){throw t?new Error("Cannot close `"+t.type+"` ("+Jo({start:t.start,end:t.end})+"): a different token (`"+e.type+"`, "+Jo({start:e.start,end:e.end})+") is open"):new Error("Cannot close document, a token (`"+e.type+"`, "+Jo({start:e.start,end:e.end})+") is still open")}function k3(t){const e=this;e.parser=n;function n(i){return L3(i,{...e.data("settings"),...t,extensions:e.data("micromarkExtensions")||[],mdastExtensions:e.data("fromMarkdownExtensions")||[]})}}function N3(t,e){const n={type:"element",tagName:"blockquote",properties:{},children:t.wrap(t.all(e),!0)};return t.patch(e,n),t.applyData(e,n)}function U3(t,e){const n={type:"element",tagName:"br",properties:{},children:[]};return t.patch(e,n),[t.applyData(e,n),{type:"text",value:`
`}]}function F3(t,e){const n=e.value?e.value+`
`:"",i={},r=e.lang?e.lang.split(/\s+/):[];r.length>0&&(i.className=["language-"+r[0]]);let s={type:"element",tagName:"code",properties:i,children:[{type:"text",value:n}]};return e.meta&&(s.data={meta:e.meta}),t.patch(e,s),s=t.applyData(e,s),s={type:"element",tagName:"pre",properties:{},children:[s]},t.patch(e,s),s}function O3(t,e){const n={type:"element",tagName:"del",properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}function z3(t,e){const n={type:"element",tagName:"em",properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}function B3(t,e){const n=typeof t.options.clobberPrefix=="string"?t.options.clobberPrefix:"user-content-",i=String(e.identifier).toUpperCase(),r=_o(i.toLowerCase()),s=t.footnoteOrder.indexOf(i);let o,a=t.footnoteCounts.get(i);a===void 0?(a=0,t.footnoteOrder.push(i),o=t.footnoteOrder.length):o=s+1,a+=1,t.footnoteCounts.set(i,a);const l={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+r,id:n+"fnref-"+r+(a>1?"-"+a:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(o)}]};t.patch(e,l);const u={type:"element",tagName:"sup",properties:{},children:[l]};return t.patch(e,u),t.applyData(e,u)}function V3(t,e){const n={type:"element",tagName:"h"+e.depth,properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}function H3(t,e){if(t.options.allowDangerousHtml){const n={type:"raw",value:e.value};return t.patch(e,n),t.applyData(e,n)}}function Xy(t,e){const n=e.referenceType;let i="]";if(n==="collapsed"?i+="[]":n==="full"&&(i+="["+(e.label||e.identifier)+"]"),e.type==="imageReference")return[{type:"text",value:"!["+e.alt+i}];const r=t.all(e),s=r[0];s&&s.type==="text"?s.value="["+s.value:r.unshift({type:"text",value:"["});const o=r[r.length-1];return o&&o.type==="text"?o.value+=i:r.push({type:"text",value:i}),r}function G3(t,e){const n=String(e.identifier).toUpperCase(),i=t.definitionById.get(n);if(!i)return Xy(t,e);const r={src:_o(i.url||""),alt:e.alt};i.title!==null&&i.title!==void 0&&(r.title=i.title);const s={type:"element",tagName:"img",properties:r,children:[]};return t.patch(e,s),t.applyData(e,s)}function W3(t,e){const n={src:_o(e.url)};e.alt!==null&&e.alt!==void 0&&(n.alt=e.alt),e.title!==null&&e.title!==void 0&&(n.title=e.title);const i={type:"element",tagName:"img",properties:n,children:[]};return t.patch(e,i),t.applyData(e,i)}function j3(t,e){const n={type:"text",value:e.value.replace(/\r?\n|\r/g," ")};t.patch(e,n);const i={type:"element",tagName:"code",properties:{},children:[n]};return t.patch(e,i),t.applyData(e,i)}function X3(t,e){const n=String(e.identifier).toUpperCase(),i=t.definitionById.get(n);if(!i)return Xy(t,e);const r={href:_o(i.url||"")};i.title!==null&&i.title!==void 0&&(r.title=i.title);const s={type:"element",tagName:"a",properties:r,children:t.all(e)};return t.patch(e,s),t.applyData(e,s)}function $3(t,e){const n={href:_o(e.url)};e.title!==null&&e.title!==void 0&&(n.title=e.title);const i={type:"element",tagName:"a",properties:n,children:t.all(e)};return t.patch(e,i),t.applyData(e,i)}function q3(t,e,n){const i=t.all(e),r=n?Y3(n):$y(e),s={},o=[];if(typeof e.checked=="boolean"){const f=i[0];let c;f&&f.type==="element"&&f.tagName==="p"?c=f:(c={type:"element",tagName:"p",properties:{},children:[]},i.unshift(c)),c.children.length>0&&c.children.unshift({type:"text",value:" "}),c.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:e.checked,disabled:!0},children:[]}),s.className=["task-list-item"]}let a=-1;for(;++a<i.length;){const f=i[a];(r||a!==0||f.type!=="element"||f.tagName!=="p")&&o.push({type:"text",value:`
`}),f.type==="element"&&f.tagName==="p"&&!r?o.push(...f.children):o.push(f)}const l=i[i.length-1];l&&(r||l.type!=="element"||l.tagName!=="p")&&o.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:s,children:o};return t.patch(e,u),t.applyData(e,u)}function Y3(t){let e=!1;if(t.type==="list"){e=t.spread||!1;const n=t.children;let i=-1;for(;!e&&++i<n.length;)e=$y(n[i])}return e}function $y(t){const e=t.spread;return e??t.children.length>1}function K3(t,e){const n={},i=t.all(e);let r=-1;for(typeof e.start=="number"&&e.start!==1&&(n.start=e.start);++r<i.length;){const o=i[r];if(o.type==="element"&&o.tagName==="li"&&o.properties&&Array.isArray(o.properties.className)&&o.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const s={type:"element",tagName:e.ordered?"ol":"ul",properties:n,children:t.wrap(i,!0)};return t.patch(e,s),t.applyData(e,s)}function Z3(t,e){const n={type:"element",tagName:"p",properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}function Q3(t,e){const n={type:"root",children:t.wrap(t.all(e))};return t.patch(e,n),t.applyData(e,n)}function J3(t,e){const n={type:"element",tagName:"strong",properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}function eL(t,e){const n=t.all(e),i=n.shift(),r=[];if(i){const o={type:"element",tagName:"thead",properties:{},children:t.wrap([i],!0)};t.patch(e.children[0],o),r.push(o)}if(n.length>0){const o={type:"element",tagName:"tbody",properties:{},children:t.wrap(n,!0)},a=Fp(e.children[1]),l=by(e.children[e.children.length-1]);a&&l&&(o.position={start:a,end:l}),r.push(o)}const s={type:"element",tagName:"table",properties:{},children:t.wrap(r,!0)};return t.patch(e,s),t.applyData(e,s)}function tL(t,e,n){const i=n?n.children:void 0,s=(i?i.indexOf(e):1)===0?"th":"td",o=n&&n.type==="table"?n.align:void 0,a=o?o.length:e.children.length;let l=-1;const u=[];for(;++l<a;){const c=e.children[l],d={},h=o?o[l]:void 0;h&&(d.align=h);let m={type:"element",tagName:s,properties:d,children:[]};c&&(m.children=t.all(c),t.patch(c,m),m=t.applyData(c,m)),u.push(m)}const f={type:"element",tagName:"tr",properties:{},children:t.wrap(u,!0)};return t.patch(e,f),t.applyData(e,f)}function nL(t,e){const n={type:"element",tagName:"td",properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}const W0=9,j0=32;function iL(t){const e=String(t),n=/\r?\n|\r/g;let i=n.exec(e),r=0;const s=[];for(;i;)s.push(X0(e.slice(r,i.index),r>0,!0),i[0]),r=i.index+i[0].length,i=n.exec(e);return s.push(X0(e.slice(r),r>0,!1)),s.join("")}function X0(t,e,n){let i=0,r=t.length;if(e){let s=t.codePointAt(i);for(;s===W0||s===j0;)i++,s=t.codePointAt(i)}if(n){let s=t.codePointAt(r-1);for(;s===W0||s===j0;)r--,s=t.codePointAt(r-1)}return r>i?t.slice(i,r):""}function rL(t,e){const n={type:"text",value:iL(String(e.value))};return t.patch(e,n),t.applyData(e,n)}function sL(t,e){const n={type:"element",tagName:"hr",properties:{},children:[]};return t.patch(e,n),t.applyData(e,n)}const oL={blockquote:N3,break:U3,code:F3,delete:O3,emphasis:z3,footnoteReference:B3,heading:V3,html:H3,imageReference:G3,image:W3,inlineCode:j3,linkReference:X3,link:$3,listItem:q3,list:K3,paragraph:Z3,root:Q3,strong:J3,table:eL,tableCell:nL,tableRow:tL,text:rL,thematicBreak:sL,toml:wl,yaml:wl,definition:wl,footnoteDefinition:wl};function wl(){}const qy=-1,sc=0,ta=1,Lu=2,Wp=3,jp=4,Xp=5,$p=6,Yy=7,Ky=8,aL=typeof self=="object"?self:globalThis,$0=(t,e)=>{switch(t){case"Function":case"SharedWorker":case"Worker":case"eval":case"setInterval":case"setTimeout":throw new TypeError("unable to deserialize "+t)}return new aL[t](e)},lL=(t,e)=>{const n=(r,s)=>(t.set(s,r),r),i=r=>{if(t.has(r))return t.get(r);const[s,o]=e[r];switch(s){case sc:case qy:return n(o,r);case ta:{const a=n([],r);for(const l of o)a.push(i(l));return a}case Lu:{const a=n({},r);for(const[l,u]of o)a[i(l)]=i(u);return a}case Wp:return n(new Date(o),r);case jp:{const{source:a,flags:l}=o;return n(new RegExp(a,l),r)}case Xp:{const a=n(new Map,r);for(const[l,u]of o)a.set(i(l),i(u));return a}case $p:{const a=n(new Set,r);for(const l of o)a.add(i(l));return a}case Yy:{const{name:a,message:l}=o;return n($0(a,l),r)}case Ky:return n(BigInt(o),r);case"BigInt":return n(Object(BigInt(o)),r);case"ArrayBuffer":return n(new Uint8Array(o).buffer,o);case"DataView":{const{buffer:a}=new Uint8Array(o);return n(new DataView(a),o)}}return n($0(s,o),r)};return i},q0=t=>lL(new Map,t)(0),Ps="",{toString:uL}={},{keys:cL}=Object,Uo=t=>{const e=typeof t;if(e!=="object"||!t)return[sc,e];const n=uL.call(t).slice(8,-1);switch(n){case"Array":return[ta,Ps];case"Object":return[Lu,Ps];case"Date":return[Wp,Ps];case"RegExp":return[jp,Ps];case"Map":return[Xp,Ps];case"Set":return[$p,Ps];case"DataView":return[ta,n]}return n.includes("Array")?[ta,n]:n.includes("Error")?[Yy,n]:[Lu,n]},Tl=([t,e])=>t===sc&&(e==="function"||e==="symbol"),fL=(t,e,n,i)=>{const r=(o,a)=>{const l=i.push(o)-1;return n.set(a,l),l},s=o=>{if(n.has(o))return n.get(o);let[a,l]=Uo(o);switch(a){case sc:{let f=o;switch(l){case"bigint":a=Ky,f=o.toString();break;case"function":case"symbol":if(t)throw new TypeError("unable to serialize "+l);f=null;break;case"undefined":return r([qy],o)}return r([a,f],o)}case ta:{if(l){let d=o;return l==="DataView"?d=new Uint8Array(o.buffer):l==="ArrayBuffer"&&(d=new Uint8Array(o)),r([l,[...d]],o)}const f=[],c=r([a,f],o);for(const d of o)f.push(s(d));return c}case Lu:{if(l)switch(l){case"BigInt":return r([l,o.toString()],o);case"Boolean":case"Number":case"String":return r([l,o.valueOf()],o)}if(e&&"toJSON"in o)return s(o.toJSON());const f=[],c=r([a,f],o);for(const d of cL(o))(t||!Tl(Uo(o[d])))&&f.push([s(d),s(o[d])]);return c}case Wp:return r([a,o.toISOString()],o);case jp:{const{source:f,flags:c}=o;return r([a,{source:f,flags:c}],o)}case Xp:{const f=[],c=r([a,f],o);for(const[d,h]of o)(t||!(Tl(Uo(d))||Tl(Uo(h))))&&f.push([s(d),s(h)]);return c}case $p:{const f=[],c=r([a,f],o);for(const d of o)(t||!Tl(Uo(d)))&&f.push(s(d));return c}}const{message:u}=o;return r([a,{name:l,message:u}],o)};return s},Y0=(t,{json:e,lossy:n}={})=>{const i=[];return fL(!(e||n),!!e,new Map,i)(t),i},Iu=typeof structuredClone=="function"?(t,e)=>e&&("json"in e||"lossy"in e)?q0(Y0(t,e)):structuredClone(t):(t,e)=>q0(Y0(t,e));function dL(t,e){const n=[{type:"text",value:"↩"}];return e>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(e)}]}),n}function hL(t,e){return"Back to reference "+(t+1)+(e>1?"-"+e:"")}function pL(t){const e=typeof t.options.clobberPrefix=="string"?t.options.clobberPrefix:"user-content-",n=t.options.footnoteBackContent||dL,i=t.options.footnoteBackLabel||hL,r=t.options.footnoteLabel||"Footnotes",s=t.options.footnoteLabelTagName||"h2",o=t.options.footnoteLabelProperties||{className:["sr-only"]},a=[];let l=-1;for(;++l<t.footnoteOrder.length;){const u=t.footnoteById.get(t.footnoteOrder[l]);if(!u)continue;const f=t.all(u),c=String(u.identifier).toUpperCase(),d=_o(c.toLowerCase());let h=0;const m=[],v=t.footnoteCounts.get(c);for(;v!==void 0&&++h<=v;){m.length>0&&m.push({type:"text",value:" "});let g=typeof n=="string"?n:n(l,h);typeof g=="string"&&(g={type:"text",value:g}),m.push({type:"element",tagName:"a",properties:{href:"#"+e+"fnref-"+d+(h>1?"-"+h:""),dataFootnoteBackref:"",ariaLabel:typeof i=="string"?i:i(l,h),className:["data-footnote-backref"]},children:Array.isArray(g)?g:[g]})}const x=f[f.length-1];if(x&&x.type==="element"&&x.tagName==="p"){const g=x.children[x.children.length-1];g&&g.type==="text"?g.value+=" ":x.children.push({type:"text",value:" "}),x.children.push(...m)}else f.push(...m);const p={type:"element",tagName:"li",properties:{id:e+"fn-"+d},children:t.wrap(f,!0)};t.patch(u,p),a.push(p)}if(a.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:s,properties:{...Iu(o),id:"footnote-label"},children:[{type:"text",value:r}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:t.wrap(a,!0)},{type:"text",value:`
`}]}}const oc=function(t){if(t==null)return _L;if(typeof t=="function")return ac(t);if(typeof t=="object")return Array.isArray(t)?mL(t):gL(t);if(typeof t=="string")return xL(t);throw new Error("Expected function, string, or object as test")};function mL(t){const e=[];let n=-1;for(;++n<t.length;)e[n]=oc(t[n]);return ac(i);function i(...r){let s=-1;for(;++s<e.length;)if(e[s].apply(this,r))return!0;return!1}}function gL(t){const e=t;return ac(n);function n(i){const r=i;let s;for(s in t)if(r[s]!==e[s])return!1;return!0}}function xL(t){return ac(e);function e(n){return n&&n.type===t}}function ac(t){return e;function e(n,i,r){return!!(vL(n)&&t.call(this,n,typeof i=="number"?i:void 0,r||void 0))}}function _L(){return!0}function vL(t){return t!==null&&typeof t=="object"&&"type"in t}const Zy=[],yL=!0,wh=!1,SL="skip";function Qy(t,e,n,i){let r;typeof e=="function"&&typeof n!="function"?(i=n,n=e):r=e;const s=oc(r),o=i?-1:1;a(t,void 0,[])();function a(l,u,f){const c=l&&typeof l=="object"?l:{};if(typeof c.type=="string"){const h=typeof c.tagName=="string"?c.tagName:typeof c.name=="string"?c.name:void 0;Object.defineProperty(d,"name",{value:"node ("+(l.type+(h?"<"+h+">":""))+")"})}return d;function d(){let h=Zy,m,v,x;if((!e||s(l,u,f[f.length-1]||void 0))&&(h=ML(n(l,f)),h[0]===wh))return h;if("children"in l&&l.children){const p=l;if(p.children&&h[0]!==SL)for(v=(i?p.children.length:-1)+o,x=f.concat(p);v>-1&&v<p.children.length;){const g=p.children[v];if(m=a(g,v,x)(),m[0]===wh)return m;v=typeof m[1]=="number"?m[1]:v+o}}return h}}}function ML(t){return Array.isArray(t)?t:typeof t=="number"?[yL,t]:t==null?Zy:[t]}function qp(t,e,n,i){let r,s,o;typeof e=="function"&&typeof n!="function"?(s=void 0,o=e,r=n):(s=e,o=n,r=i),Qy(t,s,a,r);function a(l,u){const f=u[u.length-1],c=f?f.children.indexOf(l):void 0;return o(l,c,f)}}const Th={}.hasOwnProperty,EL={};function wL(t,e){const n=e||EL,i=new Map,r=new Map,s=new Map,o={...oL,...n.handlers},a={all:u,applyData:bL,definitionById:i,footnoteById:r,footnoteCounts:s,footnoteOrder:[],handlers:o,one:l,options:n,patch:TL,wrap:CL};return qp(t,function(f){if(f.type==="definition"||f.type==="footnoteDefinition"){const c=f.type==="definition"?i:r,d=String(f.identifier).toUpperCase();c.has(d)||c.set(d,f)}}),a;function l(f,c){const d=f.type,h=a.handlers[d];if(Th.call(a.handlers,d)&&h)return h(a,f,c);if(a.options.passThrough&&a.options.passThrough.includes(d)){if("children"in f){const{children:v,...x}=f,p=Iu(x);return p.children=a.all(f),p}return Iu(f)}return(a.options.unknownHandler||AL)(a,f,c)}function u(f){const c=[];if("children"in f){const d=f.children;let h=-1;for(;++h<d.length;){const m=a.one(d[h],f);if(m){if(h&&d[h-1].type==="break"&&(!Array.isArray(m)&&m.type==="text"&&(m.value=K0(m.value)),!Array.isArray(m)&&m.type==="element")){const v=m.children[0];v&&v.type==="text"&&(v.value=K0(v.value))}Array.isArray(m)?c.push(...m):c.push(m)}}}return c}}function TL(t,e){t.position&&(e.position=d2(t))}function bL(t,e){let n=e;if(t&&t.data){const i=t.data.hName,r=t.data.hChildren,s=t.data.hProperties;if(typeof i=="string")if(n.type==="element")n.tagName=i;else{const o="children"in n?n.children:[n];n={type:"element",tagName:i,properties:{},children:o}}n.type==="element"&&s&&Object.assign(n.properties,Iu(s)),"children"in n&&n.children&&r!==null&&r!==void 0&&(n.children=r)}return n}function AL(t,e){const n=e.data||{},i="value"in e&&!(Th.call(n,"hProperties")||Th.call(n,"hChildren"))?{type:"text",value:e.value}:{type:"element",tagName:"div",properties:{},children:t.all(e)};return t.patch(e,i),t.applyData(e,i)}function CL(t,e){const n=[];let i=-1;for(e&&n.push({type:"text",value:`
`});++i<t.length;)i&&n.push({type:"text",value:`
`}),n.push(t[i]);return e&&t.length>0&&n.push({type:"text",value:`
`}),n}function K0(t){let e=0,n=t.charCodeAt(e);for(;n===9||n===32;)e++,n=t.charCodeAt(e);return t.slice(e)}function Z0(t,e){const n=wL(t,e),i=n.one(t,void 0),r=pL(n),s=Array.isArray(i)?{type:"root",children:i}:i||{type:"root",children:[]};return r&&s.children.push({type:"text",value:`
`},r),s}function RL(t,e){return t&&"run"in t?async function(n,i){const r=Z0(n,{file:i,...e});await t.run(r,i)}:function(n,i){return Z0(n,{file:i,...t||e})}}function Q0(t){if(t)throw t}var ql=Object.prototype.hasOwnProperty,Jy=Object.prototype.toString,J0=Object.defineProperty,ex=Object.getOwnPropertyDescriptor,tx=function(e){return typeof Array.isArray=="function"?Array.isArray(e):Jy.call(e)==="[object Array]"},nx=function(e){if(!e||Jy.call(e)!=="[object Object]")return!1;var n=ql.call(e,"constructor"),i=e.constructor&&e.constructor.prototype&&ql.call(e.constructor.prototype,"isPrototypeOf");if(e.constructor&&!n&&!i)return!1;var r;for(r in e);return typeof r>"u"||ql.call(e,r)},ix=function(e,n){J0&&n.name==="__proto__"?J0(e,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):e[n.name]=n.newValue},rx=function(e,n){if(n==="__proto__")if(ql.call(e,n)){if(ex)return ex(e,n).value}else return;return e[n]},PL=function t(){var e,n,i,r,s,o,a=arguments[0],l=1,u=arguments.length,f=!1;for(typeof a=="boolean"&&(f=a,a=arguments[1]||{},l=2),(a==null||typeof a!="object"&&typeof a!="function")&&(a={});l<u;++l)if(e=arguments[l],e!=null)for(n in e)i=rx(a,n),r=rx(e,n),a!==r&&(f&&r&&(nx(r)||(s=tx(r)))?(s?(s=!1,o=i&&tx(i)?i:[]):o=i&&nx(i)?i:{},ix(a,{name:n,newValue:t(f,o,r)})):typeof r<"u"&&ix(a,{name:n,newValue:r}));return a};const Sf=Sx(PL);function bh(t){if(typeof t!="object"||t===null)return!1;const e=Object.getPrototypeOf(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)}function LL(){const t=[],e={run:n,use:i};return e;function n(...r){let s=-1;const o=r.pop();if(typeof o!="function")throw new TypeError("Expected function as last argument, not "+o);a(null,...r);function a(l,...u){const f=t[++s];let c=-1;if(l){o(l);return}for(;++c<r.length;)(u[c]===null||u[c]===void 0)&&(u[c]=r[c]);r=u,f?IL(f,a)(...u):o(null,...u)}}function i(r){if(typeof r!="function")throw new TypeError("Expected `middelware` to be a function, not "+r);return t.push(r),e}}function IL(t,e){let n;return i;function i(...o){const a=t.length>o.length;let l;a&&o.push(r);try{l=t.apply(this,o)}catch(u){const f=u;if(a&&n)throw f;return r(f)}a||(l&&l.then&&typeof l.then=="function"?l.then(s,r):l instanceof Error?r(l):s(l))}function r(o,...a){n||(n=!0,e(o,...a))}function s(o){r(null,o)}}const _i={basename:DL,dirname:kL,extname:NL,join:UL,sep:"/"};function DL(t,e){if(e!==void 0&&typeof e!="string")throw new TypeError('"ext" argument must be a string');ka(t);let n=0,i=-1,r=t.length,s;if(e===void 0||e.length===0||e.length>t.length){for(;r--;)if(t.codePointAt(r)===47){if(s){n=r+1;break}}else i<0&&(s=!0,i=r+1);return i<0?"":t.slice(n,i)}if(e===t)return"";let o=-1,a=e.length-1;for(;r--;)if(t.codePointAt(r)===47){if(s){n=r+1;break}}else o<0&&(s=!0,o=r+1),a>-1&&(t.codePointAt(r)===e.codePointAt(a--)?a<0&&(i=r):(a=-1,i=o));return n===i?i=o:i<0&&(i=t.length),t.slice(n,i)}function kL(t){if(ka(t),t.length===0)return".";let e=-1,n=t.length,i;for(;--n;)if(t.codePointAt(n)===47){if(i){e=n;break}}else i||(i=!0);return e<0?t.codePointAt(0)===47?"/":".":e===1&&t.codePointAt(0)===47?"//":t.slice(0,e)}function NL(t){ka(t);let e=t.length,n=-1,i=0,r=-1,s=0,o;for(;e--;){const a=t.codePointAt(e);if(a===47){if(o){i=e+1;break}continue}n<0&&(o=!0,n=e+1),a===46?r<0?r=e:s!==1&&(s=1):r>-1&&(s=-1)}return r<0||n<0||s===0||s===1&&r===n-1&&r===i+1?"":t.slice(r,n)}function UL(...t){let e=-1,n;for(;++e<t.length;)ka(t[e]),t[e]&&(n=n===void 0?t[e]:n+"/"+t[e]);return n===void 0?".":FL(n)}function FL(t){ka(t);const e=t.codePointAt(0)===47;let n=OL(t,!e);return n.length===0&&!e&&(n="."),n.length>0&&t.codePointAt(t.length-1)===47&&(n+="/"),e?"/"+n:n}function OL(t,e){let n="",i=0,r=-1,s=0,o=-1,a,l;for(;++o<=t.length;){if(o<t.length)a=t.codePointAt(o);else{if(a===47)break;a=47}if(a===47){if(!(r===o-1||s===1))if(r!==o-1&&s===2){if(n.length<2||i!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(l=n.lastIndexOf("/"),l!==n.length-1){l<0?(n="",i=0):(n=n.slice(0,l),i=n.length-1-n.lastIndexOf("/")),r=o,s=0;continue}}else if(n.length>0){n="",i=0,r=o,s=0;continue}}e&&(n=n.length>0?n+"/..":"..",i=2)}else n.length>0?n+="/"+t.slice(r+1,o):n=t.slice(r+1,o),i=o-r-1;r=o,s=0}else a===46&&s>-1?s++:s=-1}return n}function ka(t){if(typeof t!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(t))}const zL={cwd:BL};function BL(){return"/"}function Ah(t){return!!(t!==null&&typeof t=="object"&&"href"in t&&t.href&&"protocol"in t&&t.protocol&&t.auth===void 0)}function VL(t){if(typeof t=="string")t=new URL(t);else if(!Ah(t)){const e=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+t+"`");throw e.code="ERR_INVALID_ARG_TYPE",e}if(t.protocol!=="file:"){const e=new TypeError("The URL must be of scheme file");throw e.code="ERR_INVALID_URL_SCHEME",e}return HL(t)}function HL(t){if(t.hostname!==""){const i=new TypeError('File URL host must be "localhost" or empty on darwin');throw i.code="ERR_INVALID_FILE_URL_HOST",i}const e=t.pathname;let n=-1;for(;++n<e.length;)if(e.codePointAt(n)===37&&e.codePointAt(n+1)===50){const i=e.codePointAt(n+2);if(i===70||i===102){const r=new TypeError("File URL path must not include encoded / characters");throw r.code="ERR_INVALID_FILE_URL_PATH",r}}return decodeURIComponent(e)}const Mf=["history","path","basename","stem","extname","dirname"];class eS{constructor(e){let n;e?Ah(e)?n={path:e}:typeof e=="string"||GL(e)?n={value:e}:n=e:n={},this.cwd="cwd"in n?"":zL.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let i=-1;for(;++i<Mf.length;){const s=Mf[i];s in n&&n[s]!==void 0&&n[s]!==null&&(this[s]=s==="history"?[...n[s]]:n[s])}let r;for(r in n)Mf.includes(r)||(this[r]=n[r])}get basename(){return typeof this.path=="string"?_i.basename(this.path):void 0}set basename(e){wf(e,"basename"),Ef(e,"basename"),this.path=_i.join(this.dirname||"",e)}get dirname(){return typeof this.path=="string"?_i.dirname(this.path):void 0}set dirname(e){sx(this.basename,"dirname"),this.path=_i.join(e||"",this.basename)}get extname(){return typeof this.path=="string"?_i.extname(this.path):void 0}set extname(e){if(Ef(e,"extname"),sx(this.dirname,"extname"),e){if(e.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(e.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=_i.join(this.dirname,this.stem+(e||""))}get path(){return this.history[this.history.length-1]}set path(e){Ah(e)&&(e=VL(e)),wf(e,"path"),this.path!==e&&this.history.push(e)}get stem(){return typeof this.path=="string"?_i.basename(this.path,this.extname):void 0}set stem(e){wf(e,"stem"),Ef(e,"stem"),this.path=_i.join(this.dirname||"",e+(this.extname||""))}fail(e,n,i){const r=this.message(e,n,i);throw r.fatal=!0,r}info(e,n,i){const r=this.message(e,n,i);return r.fatal=void 0,r}message(e,n,i){const r=new un(e,n,i);return this.path&&(r.name=this.path+":"+r.name,r.file=this.path),r.fatal=!1,this.messages.push(r),r}toString(e){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(e||void 0).decode(this.value)}}function Ef(t,e){if(t&&t.includes(_i.sep))throw new Error("`"+e+"` cannot be a path: did not expect `"+_i.sep+"`")}function wf(t,e){if(!t)throw new Error("`"+e+"` cannot be empty")}function sx(t,e){if(!t)throw new Error("Setting `"+e+"` requires `path` to be set too")}function GL(t){return!!(t&&typeof t=="object"&&"byteLength"in t&&"byteOffset"in t)}const WL=function(t){const i=this.constructor.prototype,r=i[t],s=function(){return r.apply(s,arguments)};return Object.setPrototypeOf(s,i),s},jL={}.hasOwnProperty;class Yp extends WL{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=LL()}copy(){const e=new Yp;let n=-1;for(;++n<this.attachers.length;){const i=this.attachers[n];e.use(...i)}return e.data(Sf(!0,{},this.namespace)),e}data(e,n){return typeof e=="string"?arguments.length===2?(Af("data",this.frozen),this.namespace[e]=n,this):jL.call(this.namespace,e)&&this.namespace[e]||void 0:e?(Af("data",this.frozen),this.namespace=e,this):this.namespace}freeze(){if(this.frozen)return this;const e=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...i]=this.attachers[this.freezeIndex];if(i[0]===!1)continue;i[0]===!0&&(i[0]=void 0);const r=n.call(e,...i);typeof r=="function"&&this.transformers.use(r)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(e){this.freeze();const n=bl(e),i=this.parser||this.Parser;return Tf("parse",i),i(String(n),n)}process(e,n){const i=this;return this.freeze(),Tf("process",this.parser||this.Parser),bf("process",this.compiler||this.Compiler),n?r(void 0,n):new Promise(r);function r(s,o){const a=bl(e),l=i.parse(a);i.run(l,a,function(f,c,d){if(f||!c||!d)return u(f);const h=c,m=i.stringify(h,d);qL(m)?d.value=m:d.result=m,u(f,d)});function u(f,c){f||!c?o(f):s?s(c):n(void 0,c)}}}processSync(e){let n=!1,i;return this.freeze(),Tf("processSync",this.parser||this.Parser),bf("processSync",this.compiler||this.Compiler),this.process(e,r),ax("processSync","process",n),i;function r(s,o){n=!0,Q0(s),i=o}}run(e,n,i){ox(e),this.freeze();const r=this.transformers;return!i&&typeof n=="function"&&(i=n,n=void 0),i?s(void 0,i):new Promise(s);function s(o,a){const l=bl(n);r.run(e,l,u);function u(f,c,d){const h=c||e;f?a(f):o?o(h):i(void 0,h,d)}}}runSync(e,n){let i=!1,r;return this.run(e,n,s),ax("runSync","run",i),r;function s(o,a){Q0(o),r=a,i=!0}}stringify(e,n){this.freeze();const i=bl(n),r=this.compiler||this.Compiler;return bf("stringify",r),ox(e),r(e,i)}use(e,...n){const i=this.attachers,r=this.namespace;if(Af("use",this.frozen),e!=null)if(typeof e=="function")l(e,n);else if(typeof e=="object")Array.isArray(e)?a(e):o(e);else throw new TypeError("Expected usable value, not `"+e+"`");return this;function s(u){if(typeof u=="function")l(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[f,...c]=u;l(f,c)}else o(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function o(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");a(u.plugins),u.settings&&(r.settings=Sf(!0,r.settings,u.settings))}function a(u){let f=-1;if(u!=null)if(Array.isArray(u))for(;++f<u.length;){const c=u[f];s(c)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function l(u,f){let c=-1,d=-1;for(;++c<i.length;)if(i[c][0]===u){d=c;break}if(d===-1)i.push([u,...f]);else if(f.length>0){let[h,...m]=f;const v=i[d][1];bh(v)&&bh(h)&&(h=Sf(!0,v,h)),i[d]=[u,h,...m]}}}}const XL=new Yp().freeze();function Tf(t,e){if(typeof e!="function")throw new TypeError("Cannot `"+t+"` without `parser`")}function bf(t,e){if(typeof e!="function")throw new TypeError("Cannot `"+t+"` without `compiler`")}function Af(t,e){if(e)throw new Error("Cannot call `"+t+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function ox(t){if(!bh(t)||typeof t.type!="string")throw new TypeError("Expected node, got `"+t+"`")}function ax(t,e,n){if(!n)throw new Error("`"+t+"` finished async. Use `"+e+"` instead")}function bl(t){return $L(t)?t:new eS(t)}function $L(t){return!!(t&&typeof t=="object"&&"message"in t&&"messages"in t)}function qL(t){return typeof t=="string"||YL(t)}function YL(t){return!!(t&&typeof t=="object"&&"byteLength"in t&&"byteOffset"in t)}const KL="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",lx=[],ux={allowDangerousHtml:!0},ZL=/^(https?|ircs?|mailto|xmpp)$/i,QL=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function JL(t){const e=eI(t),n=tI(t);return nI(e.runSync(e.parse(n),n),t)}function eI(t){const e=t.rehypePlugins||lx,n=t.remarkPlugins||lx,i=t.remarkRehypeOptions?{...t.remarkRehypeOptions,...ux}:ux;return XL().use(k3).use(n).use(RL,i).use(e)}function tI(t){const e=t.children||"",n=new eS;return typeof e=="string"&&(n.value=e),n}function nI(t,e){const n=e.allowedElements,i=e.allowElement,r=e.components,s=e.disallowedElements,o=e.skipHtml,a=e.unwrapDisallowed,l=e.urlTransform||iI;for(const f of QL)Object.hasOwn(e,f.from)&&(""+f.from+(f.to?"use `"+f.to+"` instead":"remove it")+KL+f.id,void 0);return qp(t,u),x2(t,{Fragment:N.Fragment,components:r,ignoreInvalidStyle:!0,jsx:N.jsx,jsxs:N.jsxs,passKeys:!0,passNode:!0});function u(f,c,d){if(f.type==="raw"&&d&&typeof c=="number")return o?d.children.splice(c,1):d.children[c]={type:"text",value:f.value},c;if(f.type==="element"){let h;for(h in _f)if(Object.hasOwn(_f,h)&&Object.hasOwn(f.properties,h)){const m=f.properties[h],v=_f[h];(v===null||v.includes(f.tagName))&&(f.properties[h]=l(String(m||""),h,f))}}if(f.type==="element"){let h=n?!n.includes(f.tagName):s?s.includes(f.tagName):!1;if(!h&&i&&typeof c=="number"&&(h=!i(f,c,d)),h&&d&&typeof c=="number")return a&&f.children?d.children.splice(c,1,...f.children):d.children.splice(c,1),c}}}function iI(t){const e=t.indexOf(":"),n=t.indexOf("?"),i=t.indexOf("#"),r=t.indexOf("/");return e===-1||r!==-1&&e>r||n!==-1&&e>n||i!==-1&&e>i||ZL.test(t.slice(0,e))?t:""}function cx(t,e){const n=String(t);if(typeof e!="string")throw new TypeError("Expected character");let i=0,r=n.indexOf(e);for(;r!==-1;)i++,r=n.indexOf(e,r+e.length);return i}function rI(t){if(typeof t!="string")throw new TypeError("Expected a string");return t.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function sI(t,e,n){const r=oc((n||{}).ignore||[]),s=oI(e);let o=-1;for(;++o<s.length;)Qy(t,"text",a);function a(u,f){let c=-1,d;for(;++c<f.length;){const h=f[c],m=d?d.children:void 0;if(r(h,m?m.indexOf(h):void 0,d))return;d=h}if(d)return l(u,f)}function l(u,f){const c=f[f.length-1],d=s[o][0],h=s[o][1];let m=0;const x=c.children.indexOf(u);let p=!1,g=[];d.lastIndex=0;let _=d.exec(u.value);for(;_;){const w=_.index,A={index:_.index,input:_.input,stack:[...f,u]};let M=h(..._,A);if(typeof M=="string"&&(M=M.length>0?{type:"text",value:M}:void 0),M===!1?d.lastIndex=w+1:(m!==w&&g.push({type:"text",value:u.value.slice(m,w)}),Array.isArray(M)?g.push(...M):M&&g.push(M),m=w+_[0].length,p=!0),!d.global)break;_=d.exec(u.value)}return p?(m<u.value.length&&g.push({type:"text",value:u.value.slice(m)}),c.children.splice(x,1,...g)):g=[u],x+g.length}}function oI(t){const e=[];if(!Array.isArray(t))throw new TypeError("Expected find and replace tuple or list of tuples");const n=!t[0]||Array.isArray(t[0])?t:[t];let i=-1;for(;++i<n.length;){const r=n[i];e.push([aI(r[0]),lI(r[1])])}return e}function aI(t){return typeof t=="string"?new RegExp(rI(t),"g"):t}function lI(t){return typeof t=="function"?t:function(){return t}}const Cf="phrasing",Rf=["autolink","link","image","label"];function uI(){return{transforms:[gI],enter:{literalAutolink:fI,literalAutolinkEmail:Pf,literalAutolinkHttp:Pf,literalAutolinkWww:Pf},exit:{literalAutolink:mI,literalAutolinkEmail:pI,literalAutolinkHttp:dI,literalAutolinkWww:hI}}}function cI(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Cf,notInConstruct:Rf},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Cf,notInConstruct:Rf},{character:":",before:"[ps]",after:"\\/",inConstruct:Cf,notInConstruct:Rf}]}}function fI(t){this.enter({type:"link",title:null,url:"",children:[]},t)}function Pf(t){this.config.enter.autolinkProtocol.call(this,t)}function dI(t){this.config.exit.autolinkProtocol.call(this,t)}function hI(t){this.config.exit.data.call(this,t);const e=this.stack[this.stack.length-1];e.type,e.url="http://"+this.sliceSerialize(t)}function pI(t){this.config.exit.autolinkEmail.call(this,t)}function mI(t){this.exit(t)}function gI(t){sI(t,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,xI],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),_I]],{ignore:["link","linkReference"]})}function xI(t,e,n,i,r){let s="";if(!tS(r)||(/^w/i.test(e)&&(n=e+n,e="",s="http://"),!vI(n)))return!1;const o=yI(n+i);if(!o[0])return!1;const a={type:"link",title:null,url:s+e+o[0],children:[{type:"text",value:e+o[0]}]};return o[1]?[a,{type:"text",value:o[1]}]:a}function _I(t,e,n,i){return!tS(i,!0)||/[-\d_]$/.test(n)?!1:{type:"link",title:null,url:"mailto:"+e+"@"+n,children:[{type:"text",value:e+"@"+n}]}}function vI(t){const e=t.split(".");return!(e.length<2||e[e.length-1]&&(/_/.test(e[e.length-1])||!/[a-zA-Z\d]/.test(e[e.length-1]))||e[e.length-2]&&(/_/.test(e[e.length-2])||!/[a-zA-Z\d]/.test(e[e.length-2])))}function yI(t){const e=/[!"&'),.:;<>?\]}]+$/.exec(t);if(!e)return[t,void 0];t=t.slice(0,e.index);let n=e[0],i=n.indexOf(")");const r=cx(t,"(");let s=cx(t,")");for(;i!==-1&&r>s;)t+=n.slice(0,i+1),n=n.slice(i+1),i=n.indexOf(")"),s++;return[t,n]}function tS(t,e){const n=t.input.charCodeAt(t.index-1);return(t.index===0||ls(n)||ic(n))&&(!e||n!==47)}nS.peek=RI;function SI(){this.buffer()}function MI(t){this.enter({type:"footnoteReference",identifier:"",label:""},t)}function EI(){this.buffer()}function wI(t){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},t)}function TI(t){const e=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=ui(this.sliceSerialize(t)).toLowerCase(),n.label=e}function bI(t){this.exit(t)}function AI(t){const e=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=ui(this.sliceSerialize(t)).toLowerCase(),n.label=e}function CI(t){this.exit(t)}function RI(){return"["}function nS(t,e,n,i){const r=n.createTracker(i);let s=r.move("[^");const o=n.enter("footnoteReference"),a=n.enter("reference");return s+=r.move(n.safe(n.associationId(t),{after:"]",before:s})),a(),o(),s+=r.move("]"),s}function PI(){return{enter:{gfmFootnoteCallString:SI,gfmFootnoteCall:MI,gfmFootnoteDefinitionLabelString:EI,gfmFootnoteDefinition:wI},exit:{gfmFootnoteCallString:TI,gfmFootnoteCall:bI,gfmFootnoteDefinitionLabelString:AI,gfmFootnoteDefinition:CI}}}function LI(t){let e=!1;return t&&t.firstLineBlank&&(e=!0),{handlers:{footnoteDefinition:n,footnoteReference:nS},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function n(i,r,s,o){const a=s.createTracker(o);let l=a.move("[^");const u=s.enter("footnoteDefinition"),f=s.enter("label");return l+=a.move(s.safe(s.associationId(i),{before:l,after:"]"})),f(),l+=a.move("]:"),i.children&&i.children.length>0&&(a.shift(4),l+=a.move((e?`
`:" ")+s.indentLines(s.containerFlow(i,a.current()),e?iS:II))),u(),l}}function II(t,e,n){return e===0?t:iS(t,e,n)}function iS(t,e,n){return(n?"":"    ")+t}const DI=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];rS.peek=OI;function kI(){return{canContainEols:["delete"],enter:{strikethrough:UI},exit:{strikethrough:FI}}}function NI(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:DI}],handlers:{delete:rS}}}function UI(t){this.enter({type:"delete",children:[]},t)}function FI(t){this.exit(t)}function rS(t,e,n,i){const r=n.createTracker(i),s=n.enter("strikethrough");let o=r.move("~~");return o+=n.containerPhrasing(t,{...r.current(),before:o,after:"~"}),o+=r.move("~~"),s(),o}function OI(){return"~"}function zI(t){return t.length}function BI(t,e){const n=e||{},i=(n.align||[]).concat(),r=n.stringLength||zI,s=[],o=[],a=[],l=[];let u=0,f=-1;for(;++f<t.length;){const v=[],x=[];let p=-1;for(t[f].length>u&&(u=t[f].length);++p<t[f].length;){const g=VI(t[f][p]);if(n.alignDelimiters!==!1){const _=r(g);x[p]=_,(l[p]===void 0||_>l[p])&&(l[p]=_)}v.push(g)}o[f]=v,a[f]=x}let c=-1;if(typeof i=="object"&&"length"in i)for(;++c<u;)s[c]=fx(i[c]);else{const v=fx(i);for(;++c<u;)s[c]=v}c=-1;const d=[],h=[];for(;++c<u;){const v=s[c];let x="",p="";v===99?(x=":",p=":"):v===108?x=":":v===114&&(p=":");let g=n.alignDelimiters===!1?1:Math.max(1,l[c]-x.length-p.length);const _=x+"-".repeat(g)+p;n.alignDelimiters!==!1&&(g=x.length+g+p.length,g>l[c]&&(l[c]=g),h[c]=g),d[c]=_}o.splice(1,0,d),a.splice(1,0,h),f=-1;const m=[];for(;++f<o.length;){const v=o[f],x=a[f];c=-1;const p=[];for(;++c<u;){const g=v[c]||"";let _="",w="";if(n.alignDelimiters!==!1){const A=l[c]-(x[c]||0),M=s[c];M===114?_=" ".repeat(A):M===99?A%2?(_=" ".repeat(A/2+.5),w=" ".repeat(A/2-.5)):(_=" ".repeat(A/2),w=_):w=" ".repeat(A)}n.delimiterStart!==!1&&!c&&p.push("|"),n.padding!==!1&&!(n.alignDelimiters===!1&&g==="")&&(n.delimiterStart!==!1||c)&&p.push(" "),n.alignDelimiters!==!1&&p.push(_),p.push(g),n.alignDelimiters!==!1&&p.push(w),n.padding!==!1&&p.push(" "),(n.delimiterEnd!==!1||c!==u-1)&&p.push("|")}m.push(n.delimiterEnd===!1?p.join("").replace(/ +$/,""):p.join(""))}return m.join(`
`)}function VI(t){return t==null?"":String(t)}function fx(t){const e=typeof t=="string"?t.codePointAt(0):0;return e===67||e===99?99:e===76||e===108?108:e===82||e===114?114:0}function HI(t,e,n,i){const r=n.enter("blockquote"),s=n.createTracker(i);s.move("> "),s.shift(2);const o=n.indentLines(n.containerFlow(t,s.current()),GI);return r(),o}function GI(t,e,n){return">"+(n?"":" ")+t}function WI(t,e){return dx(t,e.inConstruct,!0)&&!dx(t,e.notInConstruct,!1)}function dx(t,e,n){if(typeof e=="string"&&(e=[e]),!e||e.length===0)return n;let i=-1;for(;++i<e.length;)if(t.includes(e[i]))return!0;return!1}function hx(t,e,n,i){let r=-1;for(;++r<n.unsafe.length;)if(n.unsafe[r].character===`
`&&WI(n.stack,n.unsafe[r]))return/[ \t]/.test(i.before)?"":" ";return`\\
`}function jI(t,e){const n=String(t);let i=n.indexOf(e),r=i,s=0,o=0;if(typeof e!="string")throw new TypeError("Expected substring");for(;i!==-1;)i===r?++s>o&&(o=s):s=1,r=i+e.length,i=n.indexOf(e,r);return o}function XI(t,e){return!!(e.options.fences===!1&&t.value&&!t.lang&&/[^ \r\n]/.test(t.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(t.value))}function $I(t){const e=t.options.fence||"`";if(e!=="`"&&e!=="~")throw new Error("Cannot serialize code with `"+e+"` for `options.fence`, expected `` ` `` or `~`");return e}function qI(t,e,n,i){const r=$I(n),s=t.value||"",o=r==="`"?"GraveAccent":"Tilde";if(XI(t,n)){const c=n.enter("codeIndented"),d=n.indentLines(s,YI);return c(),d}const a=n.createTracker(i),l=r.repeat(Math.max(jI(s,r)+1,3)),u=n.enter("codeFenced");let f=a.move(l);if(t.lang){const c=n.enter(`codeFencedLang${o}`);f+=a.move(n.safe(t.lang,{before:f,after:" ",encode:["`"],...a.current()})),c()}if(t.lang&&t.meta){const c=n.enter(`codeFencedMeta${o}`);f+=a.move(" "),f+=a.move(n.safe(t.meta,{before:f,after:`
`,encode:["`"],...a.current()})),c()}return f+=a.move(`
`),s&&(f+=a.move(s+`
`)),f+=a.move(l),u(),f}function YI(t,e,n){return(n?"":"    ")+t}function Kp(t){const e=t.options.quote||'"';if(e!=='"'&&e!=="'")throw new Error("Cannot serialize title with `"+e+"` for `options.quote`, expected `\"`, or `'`");return e}function KI(t,e,n,i){const r=Kp(n),s=r==='"'?"Quote":"Apostrophe",o=n.enter("definition");let a=n.enter("label");const l=n.createTracker(i);let u=l.move("[");return u+=l.move(n.safe(n.associationId(t),{before:u,after:"]",...l.current()})),u+=l.move("]: "),a(),!t.url||/[\0- \u007F]/.test(t.url)?(a=n.enter("destinationLiteral"),u+=l.move("<"),u+=l.move(n.safe(t.url,{before:u,after:">",...l.current()})),u+=l.move(">")):(a=n.enter("destinationRaw"),u+=l.move(n.safe(t.url,{before:u,after:t.title?" ":`
`,...l.current()}))),a(),t.title&&(a=n.enter(`title${s}`),u+=l.move(" "+r),u+=l.move(n.safe(t.title,{before:u,after:r,...l.current()})),u+=l.move(r),a()),o(),u}function ZI(t){const e=t.options.emphasis||"*";if(e!=="*"&&e!=="_")throw new Error("Cannot serialize emphasis with `"+e+"` for `options.emphasis`, expected `*`, or `_`");return e}function Ma(t){return"&#x"+t.toString(16).toUpperCase()+";"}function Du(t,e,n){const i=co(t),r=co(e);return i===void 0?r===void 0?n==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:r===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:i===1?r===void 0?{inside:!1,outside:!1}:r===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:r===void 0?{inside:!1,outside:!1}:r===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}sS.peek=QI;function sS(t,e,n,i){const r=ZI(n),s=n.enter("emphasis"),o=n.createTracker(i),a=o.move(r);let l=o.move(n.containerPhrasing(t,{after:r,before:a,...o.current()}));const u=l.charCodeAt(0),f=Du(i.before.charCodeAt(i.before.length-1),u,r);f.inside&&(l=Ma(u)+l.slice(1));const c=l.charCodeAt(l.length-1),d=Du(i.after.charCodeAt(0),c,r);d.inside&&(l=l.slice(0,-1)+Ma(c));const h=o.move(r);return s(),n.attentionEncodeSurroundingInfo={after:d.outside,before:f.outside},a+l+h}function QI(t,e,n){return n.options.emphasis||"*"}function JI(t,e){let n=!1;return qp(t,function(i){if("value"in i&&/\r?\n|\r/.test(i.value)||i.type==="break")return n=!0,wh}),!!((!t.depth||t.depth<3)&&Vp(t)&&(e.options.setext||n))}function eD(t,e,n,i){const r=Math.max(Math.min(6,t.depth||1),1),s=n.createTracker(i);if(JI(t,n)){const f=n.enter("headingSetext"),c=n.enter("phrasing"),d=n.containerPhrasing(t,{...s.current(),before:`
`,after:`
`});return c(),f(),d+`
`+(r===1?"=":"-").repeat(d.length-(Math.max(d.lastIndexOf("\r"),d.lastIndexOf(`
`))+1))}const o="#".repeat(r),a=n.enter("headingAtx"),l=n.enter("phrasing");s.move(o+" ");let u=n.containerPhrasing(t,{before:"# ",after:`
`,...s.current()});return/^[\t ]/.test(u)&&(u=Ma(u.charCodeAt(0))+u.slice(1)),u=u?o+" "+u:o,n.options.closeAtx&&(u+=" "+o),l(),a(),u}oS.peek=tD;function oS(t){return t.value||""}function tD(){return"<"}aS.peek=nD;function aS(t,e,n,i){const r=Kp(n),s=r==='"'?"Quote":"Apostrophe",o=n.enter("image");let a=n.enter("label");const l=n.createTracker(i);let u=l.move("![");return u+=l.move(n.safe(t.alt,{before:u,after:"]",...l.current()})),u+=l.move("]("),a(),!t.url&&t.title||/[\0- \u007F]/.test(t.url)?(a=n.enter("destinationLiteral"),u+=l.move("<"),u+=l.move(n.safe(t.url,{before:u,after:">",...l.current()})),u+=l.move(">")):(a=n.enter("destinationRaw"),u+=l.move(n.safe(t.url,{before:u,after:t.title?" ":")",...l.current()}))),a(),t.title&&(a=n.enter(`title${s}`),u+=l.move(" "+r),u+=l.move(n.safe(t.title,{before:u,after:r,...l.current()})),u+=l.move(r),a()),u+=l.move(")"),o(),u}function nD(){return"!"}lS.peek=iD;function lS(t,e,n,i){const r=t.referenceType,s=n.enter("imageReference");let o=n.enter("label");const a=n.createTracker(i);let l=a.move("![");const u=n.safe(t.alt,{before:l,after:"]",...a.current()});l+=a.move(u+"]["),o();const f=n.stack;n.stack=[],o=n.enter("reference");const c=n.safe(n.associationId(t),{before:l,after:"]",...a.current()});return o(),n.stack=f,s(),r==="full"||!u||u!==c?l+=a.move(c+"]"):r==="shortcut"?l=l.slice(0,-1):l+=a.move("]"),l}function iD(){return"!"}uS.peek=rD;function uS(t,e,n){let i=t.value||"",r="`",s=-1;for(;new RegExp("(^|[^`])"+r+"([^`]|$)").test(i);)r+="`";for(/[^ \r\n]/.test(i)&&(/^[ \r\n]/.test(i)&&/[ \r\n]$/.test(i)||/^`|`$/.test(i))&&(i=" "+i+" ");++s<n.unsafe.length;){const o=n.unsafe[s],a=n.compilePattern(o);let l;if(o.atBreak)for(;l=a.exec(i);){let u=l.index;i.charCodeAt(u)===10&&i.charCodeAt(u-1)===13&&u--,i=i.slice(0,u)+" "+i.slice(l.index+1)}}return r+i+r}function rD(){return"`"}function cS(t,e){const n=Vp(t);return!!(!e.options.resourceLink&&t.url&&!t.title&&t.children&&t.children.length===1&&t.children[0].type==="text"&&(n===t.url||"mailto:"+n===t.url)&&/^[a-z][a-z+.-]+:/i.test(t.url)&&!/[\0- <>\u007F]/.test(t.url))}fS.peek=sD;function fS(t,e,n,i){const r=Kp(n),s=r==='"'?"Quote":"Apostrophe",o=n.createTracker(i);let a,l;if(cS(t,n)){const f=n.stack;n.stack=[],a=n.enter("autolink");let c=o.move("<");return c+=o.move(n.containerPhrasing(t,{before:c,after:">",...o.current()})),c+=o.move(">"),a(),n.stack=f,c}a=n.enter("link"),l=n.enter("label");let u=o.move("[");return u+=o.move(n.containerPhrasing(t,{before:u,after:"](",...o.current()})),u+=o.move("]("),l(),!t.url&&t.title||/[\0- \u007F]/.test(t.url)?(l=n.enter("destinationLiteral"),u+=o.move("<"),u+=o.move(n.safe(t.url,{before:u,after:">",...o.current()})),u+=o.move(">")):(l=n.enter("destinationRaw"),u+=o.move(n.safe(t.url,{before:u,after:t.title?" ":")",...o.current()}))),l(),t.title&&(l=n.enter(`title${s}`),u+=o.move(" "+r),u+=o.move(n.safe(t.title,{before:u,after:r,...o.current()})),u+=o.move(r),l()),u+=o.move(")"),a(),u}function sD(t,e,n){return cS(t,n)?"<":"["}dS.peek=oD;function dS(t,e,n,i){const r=t.referenceType,s=n.enter("linkReference");let o=n.enter("label");const a=n.createTracker(i);let l=a.move("[");const u=n.containerPhrasing(t,{before:l,after:"]",...a.current()});l+=a.move(u+"]["),o();const f=n.stack;n.stack=[],o=n.enter("reference");const c=n.safe(n.associationId(t),{before:l,after:"]",...a.current()});return o(),n.stack=f,s(),r==="full"||!u||u!==c?l+=a.move(c+"]"):r==="shortcut"?l=l.slice(0,-1):l+=a.move("]"),l}function oD(){return"["}function Zp(t){const e=t.options.bullet||"*";if(e!=="*"&&e!=="+"&&e!=="-")throw new Error("Cannot serialize items with `"+e+"` for `options.bullet`, expected `*`, `+`, or `-`");return e}function aD(t){const e=Zp(t),n=t.options.bulletOther;if(!n)return e==="*"?"-":"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(n===e)throw new Error("Expected `bullet` (`"+e+"`) and `bulletOther` (`"+n+"`) to be different");return n}function lD(t){const e=t.options.bulletOrdered||".";if(e!=="."&&e!==")")throw new Error("Cannot serialize items with `"+e+"` for `options.bulletOrdered`, expected `.` or `)`");return e}function hS(t){const e=t.options.rule||"*";if(e!=="*"&&e!=="-"&&e!=="_")throw new Error("Cannot serialize rules with `"+e+"` for `options.rule`, expected `*`, `-`, or `_`");return e}function uD(t,e,n,i){const r=n.enter("list"),s=n.bulletCurrent;let o=t.ordered?lD(n):Zp(n);const a=t.ordered?o==="."?")":".":aD(n);let l=e&&n.bulletLastUsed?o===n.bulletLastUsed:!1;if(!t.ordered){const f=t.children?t.children[0]:void 0;if((o==="*"||o==="-")&&f&&(!f.children||!f.children[0])&&n.stack[n.stack.length-1]==="list"&&n.stack[n.stack.length-2]==="listItem"&&n.stack[n.stack.length-3]==="list"&&n.stack[n.stack.length-4]==="listItem"&&n.indexStack[n.indexStack.length-1]===0&&n.indexStack[n.indexStack.length-2]===0&&n.indexStack[n.indexStack.length-3]===0&&(l=!0),hS(n)===o&&f){let c=-1;for(;++c<t.children.length;){const d=t.children[c];if(d&&d.type==="listItem"&&d.children&&d.children[0]&&d.children[0].type==="thematicBreak"){l=!0;break}}}}l&&(o=a),n.bulletCurrent=o;const u=n.containerFlow(t,i);return n.bulletLastUsed=o,n.bulletCurrent=s,r(),u}function cD(t){const e=t.options.listItemIndent||"one";if(e!=="tab"&&e!=="one"&&e!=="mixed")throw new Error("Cannot serialize items with `"+e+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return e}function fD(t,e,n,i){const r=cD(n);let s=n.bulletCurrent||Zp(n);e&&e.type==="list"&&e.ordered&&(s=(typeof e.start=="number"&&e.start>-1?e.start:1)+(n.options.incrementListMarker===!1?0:e.children.indexOf(t))+s);let o=s.length+1;(r==="tab"||r==="mixed"&&(e&&e.type==="list"&&e.spread||t.spread))&&(o=Math.ceil(o/4)*4);const a=n.createTracker(i);a.move(s+" ".repeat(o-s.length)),a.shift(o);const l=n.enter("listItem"),u=n.indentLines(n.containerFlow(t,a.current()),f);return l(),u;function f(c,d,h){return d?(h?"":" ".repeat(o))+c:(h?s:s+" ".repeat(o-s.length))+c}}function dD(t,e,n,i){const r=n.enter("paragraph"),s=n.enter("phrasing"),o=n.containerPhrasing(t,i);return s(),r(),o}const hD=oc(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function pD(t,e,n,i){return(t.children.some(function(o){return hD(o)})?n.containerPhrasing:n.containerFlow).call(n,t,i)}function mD(t){const e=t.options.strong||"*";if(e!=="*"&&e!=="_")throw new Error("Cannot serialize strong with `"+e+"` for `options.strong`, expected `*`, or `_`");return e}pS.peek=gD;function pS(t,e,n,i){const r=mD(n),s=n.enter("strong"),o=n.createTracker(i),a=o.move(r+r);let l=o.move(n.containerPhrasing(t,{after:r,before:a,...o.current()}));const u=l.charCodeAt(0),f=Du(i.before.charCodeAt(i.before.length-1),u,r);f.inside&&(l=Ma(u)+l.slice(1));const c=l.charCodeAt(l.length-1),d=Du(i.after.charCodeAt(0),c,r);d.inside&&(l=l.slice(0,-1)+Ma(c));const h=o.move(r+r);return s(),n.attentionEncodeSurroundingInfo={after:d.outside,before:f.outside},a+l+h}function gD(t,e,n){return n.options.strong||"*"}function xD(t,e,n,i){return n.safe(t.value,i)}function _D(t){const e=t.options.ruleRepetition||3;if(e<3)throw new Error("Cannot serialize rules with repetition `"+e+"` for `options.ruleRepetition`, expected `3` or more");return e}function vD(t,e,n){const i=(hS(n)+(n.options.ruleSpaces?" ":"")).repeat(_D(n));return n.options.ruleSpaces?i.slice(0,-1):i}const mS={blockquote:HI,break:hx,code:qI,definition:KI,emphasis:sS,hardBreak:hx,heading:eD,html:oS,image:aS,imageReference:lS,inlineCode:uS,link:fS,linkReference:dS,list:uD,listItem:fD,paragraph:dD,root:pD,strong:pS,text:xD,thematicBreak:vD};function yD(){return{enter:{table:SD,tableData:px,tableHeader:px,tableRow:ED},exit:{codeText:wD,table:MD,tableData:Lf,tableHeader:Lf,tableRow:Lf}}}function SD(t){const e=t._align;this.enter({type:"table",align:e.map(function(n){return n==="none"?null:n}),children:[]},t),this.data.inTable=!0}function MD(t){this.exit(t),this.data.inTable=void 0}function ED(t){this.enter({type:"tableRow",children:[]},t)}function Lf(t){this.exit(t)}function px(t){this.enter({type:"tableCell",children:[]},t)}function wD(t){let e=this.resume();this.data.inTable&&(e=e.replace(/\\([\\|])/g,TD));const n=this.stack[this.stack.length-1];n.type,n.value=e,this.exit(t)}function TD(t,e){return e==="|"?e:t}function bD(t){const e=t||{},n=e.tableCellPadding,i=e.tablePipeAlign,r=e.stringLength,s=n?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:d,table:o,tableCell:l,tableRow:a}};function o(h,m,v,x){return u(f(h,v,x),h.align)}function a(h,m,v,x){const p=c(h,v,x),g=u([p]);return g.slice(0,g.indexOf(`
`))}function l(h,m,v,x){const p=v.enter("tableCell"),g=v.enter("phrasing"),_=v.containerPhrasing(h,{...x,before:s,after:s});return g(),p(),_}function u(h,m){return BI(h,{align:m,alignDelimiters:i,padding:n,stringLength:r})}function f(h,m,v){const x=h.children;let p=-1;const g=[],_=m.enter("table");for(;++p<x.length;)g[p]=c(x[p],m,v);return _(),g}function c(h,m,v){const x=h.children;let p=-1;const g=[],_=m.enter("tableRow");for(;++p<x.length;)g[p]=l(x[p],h,m,v);return _(),g}function d(h,m,v){let x=mS.inlineCode(h,m,v);return v.stack.includes("tableCell")&&(x=x.replace(/\|/g,"\\$&")),x}}function AD(){return{exit:{taskListCheckValueChecked:mx,taskListCheckValueUnchecked:mx,paragraph:RD}}}function CD(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:PD}}}function mx(t){const e=this.stack[this.stack.length-2];e.type,e.checked=t.type==="taskListCheckValueChecked"}function RD(t){const e=this.stack[this.stack.length-2];if(e&&e.type==="listItem"&&typeof e.checked=="boolean"){const n=this.stack[this.stack.length-1];n.type;const i=n.children[0];if(i&&i.type==="text"){const r=e.children;let s=-1,o;for(;++s<r.length;){const a=r[s];if(a.type==="paragraph"){o=a;break}}o===n&&(i.value=i.value.slice(1),i.value.length===0?n.children.shift():n.position&&i.position&&typeof i.position.start.offset=="number"&&(i.position.start.column++,i.position.start.offset++,n.position.start=Object.assign({},i.position.start)))}}this.exit(t)}function PD(t,e,n,i){const r=t.children[0],s=typeof t.checked=="boolean"&&r&&r.type==="paragraph",o="["+(t.checked?"x":" ")+"] ",a=n.createTracker(i);s&&a.move(o);let l=mS.listItem(t,e,n,{...i,...a.current()});return s&&(l=l.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,u)),l;function u(f){return f+o}}function LD(){return[uI(),PI(),kI(),yD(),AD()]}function ID(t){return{extensions:[cI(),LI(t),NI(),bD(t),CD()]}}const DD={tokenize:zD,partial:!0},gS={tokenize:BD,partial:!0},xS={tokenize:VD,partial:!0},_S={tokenize:HD,partial:!0},kD={tokenize:GD,partial:!0},vS={name:"wwwAutolink",tokenize:FD,previous:SS},yS={name:"protocolAutolink",tokenize:OD,previous:MS},Ji={name:"emailAutolink",tokenize:UD,previous:ES},Pi={};function ND(){return{text:Pi}}let zr=48;for(;zr<123;)Pi[zr]=Ji,zr++,zr===58?zr=65:zr===91&&(zr=97);Pi[43]=Ji;Pi[45]=Ji;Pi[46]=Ji;Pi[95]=Ji;Pi[72]=[Ji,yS];Pi[104]=[Ji,yS];Pi[87]=[Ji,vS];Pi[119]=[Ji,vS];function UD(t,e,n){const i=this;let r,s;return o;function o(c){return!Ch(c)||!ES.call(i,i.previous)||Qp(i.events)?n(c):(t.enter("literalAutolink"),t.enter("literalAutolinkEmail"),a(c))}function a(c){return Ch(c)?(t.consume(c),a):c===64?(t.consume(c),l):n(c)}function l(c){return c===46?t.check(kD,f,u)(c):c===45||c===95||an(c)?(s=!0,t.consume(c),l):f(c)}function u(c){return t.consume(c),r=!0,l}function f(c){return s&&r&&dn(i.previous)?(t.exit("literalAutolinkEmail"),t.exit("literalAutolink"),e(c)):n(c)}}function FD(t,e,n){const i=this;return r;function r(o){return o!==87&&o!==119||!SS.call(i,i.previous)||Qp(i.events)?n(o):(t.enter("literalAutolink"),t.enter("literalAutolinkWww"),t.check(DD,t.attempt(gS,t.attempt(xS,s),n),n)(o))}function s(o){return t.exit("literalAutolinkWww"),t.exit("literalAutolink"),e(o)}}function OD(t,e,n){const i=this;let r="",s=!1;return o;function o(c){return(c===72||c===104)&&MS.call(i,i.previous)&&!Qp(i.events)?(t.enter("literalAutolink"),t.enter("literalAutolinkHttp"),r+=String.fromCodePoint(c),t.consume(c),a):n(c)}function a(c){if(dn(c)&&r.length<5)return r+=String.fromCodePoint(c),t.consume(c),a;if(c===58){const d=r.toLowerCase();if(d==="http"||d==="https")return t.consume(c),l}return n(c)}function l(c){return c===47?(t.consume(c),s?u:(s=!0,l)):n(c)}function u(c){return c===null||Pu(c)||pt(c)||ls(c)||ic(c)?n(c):t.attempt(gS,t.attempt(xS,f),n)(c)}function f(c){return t.exit("literalAutolinkHttp"),t.exit("literalAutolink"),e(c)}}function zD(t,e,n){let i=0;return r;function r(o){return(o===87||o===119)&&i<3?(i++,t.consume(o),r):o===46&&i===3?(t.consume(o),s):n(o)}function s(o){return o===null?n(o):e(o)}}function BD(t,e,n){let i,r,s;return o;function o(u){return u===46||u===95?t.check(_S,l,a)(u):u===null||pt(u)||ls(u)||u!==45&&ic(u)?l(u):(s=!0,t.consume(u),o)}function a(u){return u===95?i=!0:(r=i,i=void 0),t.consume(u),o}function l(u){return r||i||!s?n(u):e(u)}}function VD(t,e){let n=0,i=0;return r;function r(o){return o===40?(n++,t.consume(o),r):o===41&&i<n?s(o):o===33||o===34||o===38||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===60||o===63||o===93||o===95||o===126?t.check(_S,e,s)(o):o===null||pt(o)||ls(o)?e(o):(t.consume(o),r)}function s(o){return o===41&&i++,t.consume(o),r}}function HD(t,e,n){return i;function i(a){return a===33||a===34||a===39||a===41||a===42||a===44||a===46||a===58||a===59||a===63||a===95||a===126?(t.consume(a),i):a===38?(t.consume(a),s):a===93?(t.consume(a),r):a===60||a===null||pt(a)||ls(a)?e(a):n(a)}function r(a){return a===null||a===40||a===91||pt(a)||ls(a)?e(a):i(a)}function s(a){return dn(a)?o(a):n(a)}function o(a){return a===59?(t.consume(a),i):dn(a)?(t.consume(a),o):n(a)}}function GD(t,e,n){return i;function i(s){return t.consume(s),r}function r(s){return an(s)?n(s):e(s)}}function SS(t){return t===null||t===40||t===42||t===95||t===91||t===93||t===126||pt(t)}function MS(t){return!dn(t)}function ES(t){return!(t===47||Ch(t))}function Ch(t){return t===43||t===45||t===46||t===95||an(t)}function Qp(t){let e=t.length,n=!1;for(;e--;){const i=t[e][1];if((i.type==="labelLink"||i.type==="labelImage")&&!i._balanced){n=!0;break}if(i._gfmAutolinkLiteralWalkedInto){n=!1;break}}return t.length>0&&!n&&(t[t.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}const WD={tokenize:QD,partial:!0};function jD(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:YD,continuation:{tokenize:KD},exit:ZD}},text:{91:{name:"gfmFootnoteCall",tokenize:qD},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:XD,resolveTo:$D}}}}function XD(t,e,n){const i=this;let r=i.events.length;const s=i.parser.gfmFootnotes||(i.parser.gfmFootnotes=[]);let o;for(;r--;){const l=i.events[r][1];if(l.type==="labelImage"){o=l;break}if(l.type==="gfmFootnoteCall"||l.type==="labelLink"||l.type==="label"||l.type==="image"||l.type==="link")break}return a;function a(l){if(!o||!o._balanced)return n(l);const u=ui(i.sliceSerialize({start:o.end,end:i.now()}));return u.codePointAt(0)!==94||!s.includes(u.slice(1))?n(l):(t.enter("gfmFootnoteCallLabelMarker"),t.consume(l),t.exit("gfmFootnoteCallLabelMarker"),e(l))}}function $D(t,e){let n=t.length;for(;n--;)if(t[n][1].type==="labelImage"&&t[n][0]==="enter"){t[n][1];break}t[n+1][1].type="data",t[n+3][1].type="gfmFootnoteCallLabelMarker";const i={type:"gfmFootnoteCall",start:Object.assign({},t[n+3][1].start),end:Object.assign({},t[t.length-1][1].end)},r={type:"gfmFootnoteCallMarker",start:Object.assign({},t[n+3][1].end),end:Object.assign({},t[n+3][1].end)};r.end.column++,r.end.offset++,r.end._bufferIndex++;const s={type:"gfmFootnoteCallString",start:Object.assign({},r.end),end:Object.assign({},t[t.length-1][1].start)},o={type:"chunkString",contentType:"string",start:Object.assign({},s.start),end:Object.assign({},s.end)},a=[t[n+1],t[n+2],["enter",i,e],t[n+3],t[n+4],["enter",r,e],["exit",r,e],["enter",s,e],["enter",o,e],["exit",o,e],["exit",s,e],t[t.length-2],t[t.length-1],["exit",i,e]];return t.splice(n,t.length-n+1,...a),t}function qD(t,e,n){const i=this,r=i.parser.gfmFootnotes||(i.parser.gfmFootnotes=[]);let s=0,o;return a;function a(c){return t.enter("gfmFootnoteCall"),t.enter("gfmFootnoteCallLabelMarker"),t.consume(c),t.exit("gfmFootnoteCallLabelMarker"),l}function l(c){return c!==94?n(c):(t.enter("gfmFootnoteCallMarker"),t.consume(c),t.exit("gfmFootnoteCallMarker"),t.enter("gfmFootnoteCallString"),t.enter("chunkString").contentType="string",u)}function u(c){if(s>999||c===93&&!o||c===null||c===91||pt(c))return n(c);if(c===93){t.exit("chunkString");const d=t.exit("gfmFootnoteCallString");return r.includes(ui(i.sliceSerialize(d)))?(t.enter("gfmFootnoteCallLabelMarker"),t.consume(c),t.exit("gfmFootnoteCallLabelMarker"),t.exit("gfmFootnoteCall"),e):n(c)}return pt(c)||(o=!0),s++,t.consume(c),c===92?f:u}function f(c){return c===91||c===92||c===93?(t.consume(c),s++,u):u(c)}}function YD(t,e,n){const i=this,r=i.parser.gfmFootnotes||(i.parser.gfmFootnotes=[]);let s,o=0,a;return l;function l(m){return t.enter("gfmFootnoteDefinition")._container=!0,t.enter("gfmFootnoteDefinitionLabel"),t.enter("gfmFootnoteDefinitionLabelMarker"),t.consume(m),t.exit("gfmFootnoteDefinitionLabelMarker"),u}function u(m){return m===94?(t.enter("gfmFootnoteDefinitionMarker"),t.consume(m),t.exit("gfmFootnoteDefinitionMarker"),t.enter("gfmFootnoteDefinitionLabelString"),t.enter("chunkString").contentType="string",f):n(m)}function f(m){if(o>999||m===93&&!a||m===null||m===91||pt(m))return n(m);if(m===93){t.exit("chunkString");const v=t.exit("gfmFootnoteDefinitionLabelString");return s=ui(i.sliceSerialize(v)),t.enter("gfmFootnoteDefinitionLabelMarker"),t.consume(m),t.exit("gfmFootnoteDefinitionLabelMarker"),t.exit("gfmFootnoteDefinitionLabel"),d}return pt(m)||(a=!0),o++,t.consume(m),m===92?c:f}function c(m){return m===91||m===92||m===93?(t.consume(m),o++,f):f(m)}function d(m){return m===58?(t.enter("definitionMarker"),t.consume(m),t.exit("definitionMarker"),r.includes(s)||r.push(s),Ze(t,h,"gfmFootnoteDefinitionWhitespace")):n(m)}function h(m){return e(m)}}function KD(t,e,n){return t.check(Da,e,t.attempt(WD,e,n))}function ZD(t){t.exit("gfmFootnoteDefinition")}function QD(t,e,n){const i=this;return Ze(t,r,"gfmFootnoteDefinitionIndent",5);function r(s){const o=i.events[i.events.length-1];return o&&o[1].type==="gfmFootnoteDefinitionIndent"&&o[2].sliceSerialize(o[1],!0).length===4?e(s):n(s)}}function JD(t){let n=(t||{}).singleTilde;const i={name:"strikethrough",tokenize:s,resolveAll:r};return n==null&&(n=!0),{text:{126:i},insideSpan:{null:[i]},attentionMarkers:{null:[126]}};function r(o,a){let l=-1;for(;++l<o.length;)if(o[l][0]==="enter"&&o[l][1].type==="strikethroughSequenceTemporary"&&o[l][1]._close){let u=l;for(;u--;)if(o[u][0]==="exit"&&o[u][1].type==="strikethroughSequenceTemporary"&&o[u][1]._open&&o[l][1].end.offset-o[l][1].start.offset===o[u][1].end.offset-o[u][1].start.offset){o[l][1].type="strikethroughSequence",o[u][1].type="strikethroughSequence";const f={type:"strikethrough",start:Object.assign({},o[u][1].start),end:Object.assign({},o[l][1].end)},c={type:"strikethroughText",start:Object.assign({},o[u][1].end),end:Object.assign({},o[l][1].start)},d=[["enter",f,a],["enter",o[u][1],a],["exit",o[u][1],a],["enter",c,a]],h=a.parser.constructs.insideSpan.null;h&&Nn(d,d.length,0,rc(h,o.slice(u+1,l),a)),Nn(d,d.length,0,[["exit",c,a],["enter",o[l][1],a],["exit",o[l][1],a],["exit",f,a]]),Nn(o,u-1,l-u+3,d),l=u+d.length-2;break}}for(l=-1;++l<o.length;)o[l][1].type==="strikethroughSequenceTemporary"&&(o[l][1].type="data");return o}function s(o,a,l){const u=this.previous,f=this.events;let c=0;return d;function d(m){return u===126&&f[f.length-1][1].type!=="characterEscape"?l(m):(o.enter("strikethroughSequenceTemporary"),h(m))}function h(m){const v=co(u);if(m===126)return c>1?l(m):(o.consume(m),c++,h);if(c<2&&!n)return l(m);const x=o.exit("strikethroughSequenceTemporary"),p=co(m);return x._open=!p||p===2&&!!v,x._close=!v||v===2&&!!p,a(m)}}}class ek{constructor(){this.map=[]}add(e,n,i){tk(this,e,n,i)}consume(e){if(this.map.sort(function(s,o){return s[0]-o[0]}),this.map.length===0)return;let n=this.map.length;const i=[];for(;n>0;)n-=1,i.push(e.slice(this.map[n][0]+this.map[n][1]),this.map[n][2]),e.length=this.map[n][0];i.push(e.slice()),e.length=0;let r=i.pop();for(;r;){for(const s of r)e.push(s);r=i.pop()}this.map.length=0}}function tk(t,e,n,i){let r=0;if(!(n===0&&i.length===0)){for(;r<t.map.length;){if(t.map[r][0]===e){t.map[r][1]+=n,t.map[r][2].push(...i);return}r+=1}t.map.push([e,n,i])}}function nk(t,e){let n=!1;const i=[];for(;e<t.length;){const r=t[e];if(n){if(r[0]==="enter")r[1].type==="tableContent"&&i.push(t[e+1][1].type==="tableDelimiterMarker"?"left":"none");else if(r[1].type==="tableContent"){if(t[e-1][1].type==="tableDelimiterMarker"){const s=i.length-1;i[s]=i[s]==="left"?"center":"right"}}else if(r[1].type==="tableDelimiterRow")break}else r[0]==="enter"&&r[1].type==="tableDelimiterRow"&&(n=!0);e+=1}return i}function ik(){return{flow:{null:{name:"table",tokenize:rk,resolveAll:sk}}}}function rk(t,e,n){const i=this;let r=0,s=0,o;return a;function a(T){let L=i.events.length-1;for(;L>-1;){const Z=i.events[L][1].type;if(Z==="lineEnding"||Z==="linePrefix")L--;else break}const D=L>-1?i.events[L][1].type:null,X=D==="tableHead"||D==="tableRow"?M:l;return X===M&&i.parser.lazy[i.now().line]?n(T):X(T)}function l(T){return t.enter("tableHead"),t.enter("tableRow"),u(T)}function u(T){return T===124||(o=!0,s+=1),f(T)}function f(T){return T===null?n(T):Ie(T)?s>1?(s=0,i.interrupt=!0,t.exit("tableRow"),t.enter("lineEnding"),t.consume(T),t.exit("lineEnding"),h):n(T):$e(T)?Ze(t,f,"whitespace")(T):(s+=1,o&&(o=!1,r+=1),T===124?(t.enter("tableCellDivider"),t.consume(T),t.exit("tableCellDivider"),o=!0,f):(t.enter("data"),c(T)))}function c(T){return T===null||T===124||pt(T)?(t.exit("data"),f(T)):(t.consume(T),T===92?d:c)}function d(T){return T===92||T===124?(t.consume(T),c):c(T)}function h(T){return i.interrupt=!1,i.parser.lazy[i.now().line]?n(T):(t.enter("tableDelimiterRow"),o=!1,$e(T)?Ze(t,m,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(T):m(T))}function m(T){return T===45||T===58?x(T):T===124?(o=!0,t.enter("tableCellDivider"),t.consume(T),t.exit("tableCellDivider"),v):A(T)}function v(T){return $e(T)?Ze(t,x,"whitespace")(T):x(T)}function x(T){return T===58?(s+=1,o=!0,t.enter("tableDelimiterMarker"),t.consume(T),t.exit("tableDelimiterMarker"),p):T===45?(s+=1,p(T)):T===null||Ie(T)?w(T):A(T)}function p(T){return T===45?(t.enter("tableDelimiterFiller"),g(T)):A(T)}function g(T){return T===45?(t.consume(T),g):T===58?(o=!0,t.exit("tableDelimiterFiller"),t.enter("tableDelimiterMarker"),t.consume(T),t.exit("tableDelimiterMarker"),_):(t.exit("tableDelimiterFiller"),_(T))}function _(T){return $e(T)?Ze(t,w,"whitespace")(T):w(T)}function w(T){return T===124?m(T):T===null||Ie(T)?!o||r!==s?A(T):(t.exit("tableDelimiterRow"),t.exit("tableHead"),e(T)):A(T)}function A(T){return n(T)}function M(T){return t.enter("tableRow"),R(T)}function R(T){return T===124?(t.enter("tableCellDivider"),t.consume(T),t.exit("tableCellDivider"),R):T===null||Ie(T)?(t.exit("tableRow"),e(T)):$e(T)?Ze(t,R,"whitespace")(T):(t.enter("data"),S(T))}function S(T){return T===null||T===124||pt(T)?(t.exit("data"),R(T)):(t.consume(T),T===92?P:S)}function P(T){return T===92||T===124?(t.consume(T),S):S(T)}}function sk(t,e){let n=-1,i=!0,r=0,s=[0,0,0,0],o=[0,0,0,0],a=!1,l=0,u,f,c;const d=new ek;for(;++n<t.length;){const h=t[n],m=h[1];h[0]==="enter"?m.type==="tableHead"?(a=!1,l!==0&&(gx(d,e,l,u,f),f=void 0,l=0),u={type:"table",start:Object.assign({},m.start),end:Object.assign({},m.end)},d.add(n,0,[["enter",u,e]])):m.type==="tableRow"||m.type==="tableDelimiterRow"?(i=!0,c=void 0,s=[0,0,0,0],o=[0,n+1,0,0],a&&(a=!1,f={type:"tableBody",start:Object.assign({},m.start),end:Object.assign({},m.end)},d.add(n,0,[["enter",f,e]])),r=m.type==="tableDelimiterRow"?2:f?3:1):r&&(m.type==="data"||m.type==="tableDelimiterMarker"||m.type==="tableDelimiterFiller")?(i=!1,o[2]===0&&(s[1]!==0&&(o[0]=o[1],c=Al(d,e,s,r,void 0,c),s=[0,0,0,0]),o[2]=n)):m.type==="tableCellDivider"&&(i?i=!1:(s[1]!==0&&(o[0]=o[1],c=Al(d,e,s,r,void 0,c)),s=o,o=[s[1],n,0,0])):m.type==="tableHead"?(a=!0,l=n):m.type==="tableRow"||m.type==="tableDelimiterRow"?(l=n,s[1]!==0?(o[0]=o[1],c=Al(d,e,s,r,n,c)):o[1]!==0&&(c=Al(d,e,o,r,n,c)),r=0):r&&(m.type==="data"||m.type==="tableDelimiterMarker"||m.type==="tableDelimiterFiller")&&(o[3]=n)}for(l!==0&&gx(d,e,l,u,f),d.consume(e.events),n=-1;++n<e.events.length;){const h=e.events[n];h[0]==="enter"&&h[1].type==="table"&&(h[1]._align=nk(e.events,n))}return t}function Al(t,e,n,i,r,s){const o=i===1?"tableHeader":i===2?"tableDelimiter":"tableData",a="tableContent";n[0]!==0&&(s.end=Object.assign({},Ls(e.events,n[0])),t.add(n[0],0,[["exit",s,e]]));const l=Ls(e.events,n[1]);if(s={type:o,start:Object.assign({},l),end:Object.assign({},l)},t.add(n[1],0,[["enter",s,e]]),n[2]!==0){const u=Ls(e.events,n[2]),f=Ls(e.events,n[3]),c={type:a,start:Object.assign({},u),end:Object.assign({},f)};if(t.add(n[2],0,[["enter",c,e]]),i!==2){const d=e.events[n[2]],h=e.events[n[3]];if(d[1].end=Object.assign({},h[1].end),d[1].type="chunkText",d[1].contentType="text",n[3]>n[2]+1){const m=n[2]+1,v=n[3]-n[2]-1;t.add(m,v,[])}}t.add(n[3]+1,0,[["exit",c,e]])}return r!==void 0&&(s.end=Object.assign({},Ls(e.events,r)),t.add(r,0,[["exit",s,e]]),s=void 0),s}function gx(t,e,n,i,r){const s=[],o=Ls(e.events,n);r&&(r.end=Object.assign({},o),s.push(["exit",r,e])),i.end=Object.assign({},o),s.push(["exit",i,e]),t.add(n+1,0,s)}function Ls(t,e){const n=t[e],i=n[0]==="enter"?"start":"end";return n[1][i]}const ok={name:"tasklistCheck",tokenize:lk};function ak(){return{text:{91:ok}}}function lk(t,e,n){const i=this;return r;function r(l){return i.previous!==null||!i._gfmTasklistFirstContentOfListItem?n(l):(t.enter("taskListCheck"),t.enter("taskListCheckMarker"),t.consume(l),t.exit("taskListCheckMarker"),s)}function s(l){return pt(l)?(t.enter("taskListCheckValueUnchecked"),t.consume(l),t.exit("taskListCheckValueUnchecked"),o):l===88||l===120?(t.enter("taskListCheckValueChecked"),t.consume(l),t.exit("taskListCheckValueChecked"),o):n(l)}function o(l){return l===93?(t.enter("taskListCheckMarker"),t.consume(l),t.exit("taskListCheckMarker"),t.exit("taskListCheck"),a):n(l)}function a(l){return Ie(l)?e(l):$e(l)?t.check({tokenize:uk},e,n)(l):n(l)}}function uk(t,e,n){return Ze(t,i,"whitespace");function i(r){return r===null?n(r):e(r)}}function ck(t){return Dy([ND(),jD(),JD(t),ik(),ak()])}const fk={};function dk(t){const e=this,n=t||fk,i=e.data(),r=i.micromarkExtensions||(i.micromarkExtensions=[]),s=i.fromMarkdownExtensions||(i.fromMarkdownExtensions=[]),o=i.toMarkdownExtensions||(i.toMarkdownExtensions=[]);r.push(ck(n)),s.push(LD()),o.push(ID(n))}/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wS=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hk=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pk=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,i)=>i?i.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx=t=>{const e=pk(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var If={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mk=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},gk=ot.createContext({}),xk=()=>ot.useContext(gk),_k=ot.forwardRef(({color:t,size:e,strokeWidth:n,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>{const{size:u=24,strokeWidth:f=2,absoluteStrokeWidth:c=!1,color:d="currentColor",className:h=""}=xk()??{},m=i??c?Number(n??f)*24/Number(e??u):n??f;return ot.createElement("svg",{ref:l,...If,width:e??u??If.width,height:e??u??If.height,stroke:t??d,strokeWidth:m,className:wS("lucide",h,r),...!s&&!mk(a)&&{"aria-hidden":"true"},...a},[...o.map(([v,x])=>ot.createElement(v,x)),...Array.isArray(s)?s:[s]])});/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bt=(t,e)=>{const n=ot.forwardRef(({className:i,...r},s)=>ot.createElement(_k,{ref:s,iconNode:e,className:wS(`lucide-${hk(xx(t))}`,`lucide-${t}`,i),...r}));return n.displayName=xx(t),n};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vk=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],yk=Bt("arrow-right",vk);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sk=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],_x=Bt("bot",Sk);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mk=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],vx=Bt("building-2",Mk);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ek=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],wk=Bt("check",Ek);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tk=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],bk=Bt("copy",Tk);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ak=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Ck=Bt("globe",Ak);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rk=[["path",{d:"M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5",key:"1p9q5i"}],["path",{d:"M14 6a6 6 0 0 1 6 6v3",key:"1hnv84"}],["path",{d:"M4 15v-3a6 6 0 0 1 6-6",key:"9ciidu"}],["rect",{x:"2",y:"15",width:"20",height:"4",rx:"1",key:"g3x8cw"}]],Pk=Bt("hard-hat",Rk);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lk=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}],["path",{d:"M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"auskq0"}]],Ik=Bt("heart-pulse",Lk);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dk=[["path",{d:"M10 22v-6.57",key:"1wmca3"}],["path",{d:"M12 11h.01",key:"z322tv"}],["path",{d:"M12 7h.01",key:"1ivr5q"}],["path",{d:"M14 15.43V22",key:"1q2vjd"}],["path",{d:"M15 16a5 5 0 0 0-6 0",key:"o9wqvi"}],["path",{d:"M16 11h.01",key:"xkw8gn"}],["path",{d:"M16 7h.01",key:"1kdx03"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 7h.01",key:"1vti4s"}],["rect",{x:"4",y:"2",width:"16",height:"20",rx:"2",key:"1uxh74"}]],kk=Bt("hotel",Dk);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nk=[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]],Uk=Bt("languages",Nk);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fk=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Ok=Bt("loader-circle",Fk);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zk=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],Bk=Bt("message-square",zk);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vk=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Hk=Bt("search",Vk);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gk=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Wk=Bt("send",Gk);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jk=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Xk=Bt("shield-check",jk);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $k=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Go=Bt("sparkles",$k);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qk=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5",key:"slp6dd"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244",key:"o0xfot"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05",key:"wn3emo"}]],Yk=Bt("store",qk);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kk=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Zk=Bt("user",Kk);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qk=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],yx=Bt("users",Qk);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jk=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],TS=Bt("x",Jk),eN=`
ProCells (الخلايا الاحترافية) is a premier, multi-sector service hub based in Saudi Arabia (Jeddah and Riyadh).
Official Brand Name: PRO CELLS (Professional Business Station).
Digital Identity: ProCells24.
Motto: Professional Business Station (محطة الأعمال الاحترافية).

Core Pillars:
1. Human Resources & Specialized Staffing: Providing workforce solutions (Ajeer, Manpower Rental, Hiring Process).
2. Professional Cleaning & Sanitization: Residential (Homes, Villas), Corporate (Offices), and Deep Cleaning (Carpets, Upholstery).

Competitive Advantages:
- Elite Team with accredited certifications.
- Premium Italian cleaning materials.
- Reliable, gold-standard delivery.

Market Scope: Jeddah and Riyadh, Saudi Arabia.
Sectors: Commercial, Hospitality, Health, Construction, Residential.

Contact: procells.sa | +966 55 598 4276.
Social: @procells24 (Instagram, TikTok, Snapchat, Facebook).
Current Promotions: Up to 50% off.

AI Personality: Human-friendly, professional, helpful. Use bold and italics for emphasis. Reply in the same language the user uses (English or Arabic). If the user asks about anything not related to ProCells, try to relate it back or answer politely while maintaining the brand persona.
`,tN=({isOpen:t,onClose:e,lang:n})=>{const[i,r]=ot.useState([{role:"assistant",content:n==="en"?"Hello! I am **PRO CELL AI**. How can I assist you with our professional services today?":"مرحباً! أنا **PRO CELL AI**. كيف يمكنني مساعدتك في خدماتنا الاحترافية اليوم؟"}]),[s,o]=ot.useState(""),[a,l]=ot.useState(!1),[u,f]=ot.useState(null),c=ot.useRef(null);ot.useEffect(()=>{c.current&&(c.current.scrollTop=c.current.scrollHeight)},[i,a]);const d=(v,x)=>{navigator.clipboard.writeText(v),f(x),setTimeout(()=>f(null),2e3)},h=v=>/[\u0600-\u06FF]/.test(v),m=async()=>{if(!s.trim()||a)return;const v={role:"user",content:s};r(x=>[...x,v]),o(""),l(!0);try{const x=await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer YOUR_API_KEY_HERE"},body:JSON.stringify({model:"gpt-4-turbo",messages:[{role:"system",content:eN},...i,v],temperature:.7})});setTimeout(()=>{const p=h(s)?"ar":"en";let g="";s.toLowerCase().includes("cleaning")||s.includes("تنظيف")?g=p==="en"?"We offer **premium cleaning services** for homes, villas, and offices. We use high-quality **Italian materials** to ensure a gold-standard finish. Would you like to know about our *50% discount*?":"نحن نقدم **خدمات تنظيف متميزة** للمنازل والفلل والمكاتب. نستخدم **مواد إيطالية عالية الجودة** لضمان أعلى المعايير. هل تود معرفة المزيد عن *خصم الـ ٥٠٪*؟":s.toLowerCase().includes("staff")||s.includes("عمالة")?g=p==="en"?"Our **Workforce Solutions** include **Ajeer services** and manpower rental. We provide *elite teams* with accredited certifications in Jeddah and Riyadh.":"تشمل **حلول القوى العاملة** لدينا **خدمات أجير** وتأجير العمالة. نحن نوفر *فرقاً نخبوية* حاصلة على شهادات معتمدة في جدة والرياض.":g=p==="en"?"I am **PRO CELL AI**, your professional assistant for **PRO CELLS Saudi Arabia**. We specialize in elite staffing and premium cleaning in Jeddah and Riyadh. How can I help you further?":"أنا **PRO CELL AI**، مساعدك المهني لشركة **برو سيلز السعودية**. نحن متخصصون في حلول الكوادر البشرية والتنظيف المتميز في جدة والرياض. كيف يمكنني مساعدتك؟",r(_=>[..._,{role:"assistant",content:g}]),l(!1)},1500)}catch(x){console.error("AI Error:",x),l(!1)}};return t?N.jsx("div",{className:"fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6 bg-primary/80 backdrop-blur-xl animate-in fade-in duration-300",children:N.jsxs("div",{className:"glass-card w-full max-w-2xl h-[80vh] flex flex-col relative overflow-hidden border-secondary/20 shadow-2xl",children:[N.jsxs("div",{className:"p-6 border-b border-secondary/10 flex justify-between items-center bg-secondary/5",children:[N.jsxs("div",{className:"flex items-center gap-4",children:[N.jsx("div",{className:"w-10 h-10 hexagon bg-secondary text-primary flex items-center justify-center",children:N.jsx(Go,{size:20})}),N.jsxs("div",{children:[N.jsx("h3",{className:"font-black text-sm uppercase tracking-widest text-secondary",children:"PRO CELL AI"}),N.jsx("p",{className:"text-[10px] text-secondary/40 uppercase tracking-widest",children:n==="en"?"Professional Assistant":"المساعد المهني"})]})]}),N.jsx("button",{onClick:e,className:"p-2 hover:bg-secondary/10 rounded-full transition-colors",children:N.jsx(TS,{size:20,className:"text-secondary/50"})})]}),N.jsxs("div",{ref:c,className:"flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth",children:[i.map((v,x)=>N.jsx("div",{className:`flex ${v.role==="user"?"justify-end":"justify-start"} animate-in slide-in-from-bottom-2 duration-300`,children:N.jsxs("div",{className:`flex gap-4 max-w-[85%] ${v.role==="user"?"flex-row-reverse":""}`,children:[N.jsx("div",{className:"w-8 h-8 shrink-0 rounded-full flex items-center justify-center border border-secondary/20 bg-secondary/5",children:v.role==="user"?N.jsx(Zk,{size:14}):N.jsx(_x,{size:14,className:"text-secondary"})}),N.jsx("div",{className:"space-y-2",children:N.jsxs("div",{className:`p-4 rounded-2xl text-[12px] leading-relaxed relative group ${v.role==="user"?"bg-secondary text-primary font-medium rounded-tr-none":"bg-primary/50 border border-secondary/10 text-secondary/80 rounded-tl-none"}`,children:[N.jsx(JL,{remarkPlugins:[dk],children:v.content}),N.jsx("button",{onClick:()=>d(v.content,x),className:"absolute -bottom-8 right-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-[9px] text-secondary/40 hover:text-secondary",children:u===x?N.jsxs(N.Fragment,{children:[N.jsx(wk,{size:10})," ",n==="en"?"Copied":"تم النسخ"]}):N.jsxs(N.Fragment,{children:[N.jsx(bk,{size:10})," ",n==="en"?"Copy":"نسخ"]})})]})})]})},x)),a&&N.jsx("div",{className:"flex justify-start animate-pulse",children:N.jsxs("div",{className:"flex gap-4",children:[N.jsx("div",{className:"w-8 h-8 rounded-full border border-secondary/20 bg-secondary/5 flex items-center justify-center",children:N.jsx(_x,{size:14,className:"text-secondary"})}),N.jsx("div",{className:"p-4 bg-primary/50 border border-secondary/10 rounded-2xl rounded-tl-none",children:N.jsx(Ok,{size:16,className:"animate-spin text-secondary/40"})})]})})]}),N.jsxs("div",{className:"p-6 border-t border-secondary/10 bg-secondary/5",children:[N.jsxs("div",{className:"relative",children:[N.jsx("input",{type:"text",value:s,onChange:v=>o(v.target.value),onKeyPress:v=>v.key==="Enter"&&m(),placeholder:n==="en"?"Ask PRO CELL AI anything...":"اسأل PRO CELL AI عن أي شيء...",className:"w-full bg-primary/50 border border-secondary/20 rounded-xl py-4 px-6 pr-14 text-xs text-secondary placeholder:text-secondary/20 focus:border-secondary transition-all outline-none",dir:h(s)?"rtl":"ltr"}),N.jsx("button",{onClick:m,disabled:a||!s.trim(),className:"absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-secondary text-primary rounded-lg hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:scale-100",children:N.jsx(Wk,{size:16})})]}),N.jsx("p",{className:"text-[9px] text-center text-secondary/20 mt-4 uppercase tracking-widest",children:n==="en"?"AI can make mistakes. Verify important info.":"يمكن للذكاء الاصطناعي ارتكاب الأخطاء. تحقق من المعلومات المهمة."})]}),N.jsx("div",{className:"scanline pointer-events-none"})]})}):null},bS={en:{nav:{services:"Services",identity:"Identity",sectors:"Sectors",connect:"Connect",button:"Reserve",aiSearch:"PRO CELL AI // ASK ANYTHING"},hero:{tag:"PRO CELLS Saudi Arabia",titles:["Professional Business Station","Elite Workforce Solutions","Premium Facility Services","Cleaning & HR Hub","Integrated Business Support"],desc:"Bridging the gap between market demands and elite execution. A sophisticated intersection of HR excellence and high-end facility maintenance.",explore:"Explore Services",connect:"Connect"},identity:{tag:"01 // Identity",title:"The Service Hub",p1:"PRO CELLS is a premier, multi-sector service hub dedicated to bridging the gap between evolving market demands and elite operational execution.",p2:"Our philosophy is built on the concept of 'cells'—specialized, interconnected units working together to create an efficient environment.",regional:{t:"Regional Presence",d:"Vital support across the key hubs of Jeddah and Riyadh."},technical:{t:"Technical Excellence",d:"Advanced tools and safe, high-quality products for a healthy environment."},expertise:{t:"Sector Expertise",d:"Experience spanning hospitality, health, wellness, and commercial sectors."},team:{tag:"Our Elite Team",title:"We pride in our workforce.",items:[{t:"Experience",d:"Years of expertise in HR and employment."},{t:"Accredited",d:"Recognized certifications ensuring excellence."},{t:"Investment",d:"Ongoing development through advanced training."}]}},services:{tag:"02 // Solutions",title:"Specialized Cells",residential:{t:"Residential",d:"Home, Apartment, and Villa cleaning in Jeddah & Riyadh.",details:"Our residential cleaning deep cleans homes using non-toxic materials, ensuring every corner reflects beauty. Specialized for villas and modern apartments."},fabric:{t:"Fabric Care",d:"Deep-extraction technology for carpets and upholstery.",details:"Using high-end extraction tools, we remove odors, dust, and deep-seated bacteria from sofas, curtains, and carpets."},corporate:{t:"Corporate",d:"Office maintenance and Ajeer compliance services.",details:"Comprehensive business support including professional office maintenance and full Ajeer system compliance."},close:"Close"},sectors:{tag:"03 // Industries",title:"Sectors We Support",commercial:{t:"Commercial",d:"Retail, Malls",details:"Maintaining professional standards in high-traffic retail environments."},hospitality:{t:"Hospitality",d:"Cafes, Restaurants",details:"Deep sanitization for cafes and restaurants to meet health standards."},health:{t:"Health",d:"Gyms, Clinics",details:"Medical-grade cleaning for fitness centers and medical spaces."},construction:{t:"Construction",d:"Post-construction",details:"Heavy-duty cleaning for construction sites and completion handovers."}},connect:{tag:"04 // Connect",title:"The Gold Standard",desc:"Our professional team is standing by in Jeddah and Riyadh.",whatsapp:"WhatsApp Reservation",call:"Direct Call",web:"Official Website",socialTag:"Join Our Community",insta:"Instagram",tiktok:"TikTok",snap:"Snapchat",offerTitle:"Current Offer",offerDesc:"Up to 50% off on selected cleaning packages."},footer:{tag:"PRO CELLS Saudi Arabia",copy:"2026 Professional Business Station",loc:"Location",locVal:"Jeddah & Riyadh",op:"Operation",opVal:"Wed 8:00 AM – 5:00 PM",legal:"Legal",legalVal:"All Rights Reserved",credit:"MADE BY MOHAMMAD FAIZAN KHAN"}},ar:{nav:{services:"الخدمات",identity:"الهوية",sectors:"القطاعات",connect:"تواصل",button:"احجز",aiSearch:"PRO CELL AI // اسأل عن أي شيء"},hero:{tag:"برو سيلز السعودية",titles:["محطة الأعمال الاحترافية","نخبة حلول القوى العاملة","خدمات المرافق المتميزة","مركز التنظيف والموارد البشرية","دعم الأعمال المتكامل"],desc:"نسد الفجوة بين متطلبات السوق والتنفيذ النخبوية. تقاطع متطور بين تميز الموارد البشرية وصيانة المرافق الراقية.",explore:"استكشف الخدمات",connect:"تواصل"},identity:{tag:"٠١ // الهوية",title:"مركز الخدمات",p1:"برو سيلز هي مركز خدمات رائد متعدد القطاعات مخصص لسد الفجوة بين متطلبات السوق المتطورة والتنفيذ التشغيلي النخبوي.",p2:"تعتمد فلسفتنا على مفهوم 'الخلايا' - وحدات متخصصة ومترابطة تعمل معاً لخلق بيئة فعالة.",regional:{t:"التواجد الإقليمي",d:"دعم حيوي عبر المراكز الرئيسية في جدة والرياض."},technical:{t:"التميز التقني",d:"أدوات متطورة ومنتجات آمنة لبيئة صحية."},expertise:{t:"خبرة القطاع",d:"خبرة تشمل قطاعات الضيافة والصحة والتجارة."},team:{tag:"فريقنا النخبوي",title:"نحن نفخر بقوانا العاملة.",items:[{t:"الخبرة",d:"سنوات من الخبرة في الموارد البشرية."},{t:"الاعتماد",d:"شهادات معتمدة تضمن التميز."},{t:"الاستثمار",d:"تطوير مستمر من خلال التدريب المتقدم."}]}},services:{tag:"٠٢ // الحلول",title:"خلايا متخصصة",residential:{t:"السكني",d:"تنظيف المنازل والشقق والفلل في جدة والرياض.",details:"تنظيفنا السكني يتجاوز السطح. نحن نتعامل مع التنظيف العميق لجميع أنواع المنازل باستخدام مواد غير سامة."},fabric:{t:"العناية بالأقمشة",d:"تقنية الاستخراج العميق للسجاد والمفروشات.",details:"باستخدام أدوات استخراج راقية، نقوم بإزالة الروائح والغبار والبكتيريا العميقة من الأرائك والستائر والسجاد."},corporate:{t:"الشركات",d:"صيانة المكاتب وخدمات الالتزام بنظام أجير.",details:"دعم أعمال شامل يشمل صيانة المكاتب المهنية والالتزام الكامل بنظام أجير لتبسيط عمليات القوى العاملة."},close:"إغلاق"},sectors:{tag:"٠٣ // الصناعات",title:"القطاعات التي ندعمها",commercial:{t:"التجاري",d:"التجزئة، المولات",details:"الحفاظ على المعايير المهنية في بيئات التجزئة ذات الحركة المرورية العالية."},hospitality:{t:"الضيافة",d:"المقاهي، المطاعم",details:"التعقيم العميق وإدارة النظافة للمقاهي والمطاعم لتلبية المعايير الصحية."},health:{t:"الصحة",d:"الصالات، العيادات",details:"تنظيف وتعقيم على المستوى الطبي لمراكز اللياقة والمساحات الطبية."},construction:{t:"الإنشاءات",d:"ما بعد الإنشاء",details:"تنظيف شاق ودعم تشغيلي لمواقع الإنشاء وعمليات التسليم."}},connect:{tag:"٠٤ // التواصل",title:"المعيار الذهبي",desc:"فريقنا المهني في انتظارك في جدة والرياض.",whatsapp:"حجز عبر واتساب",call:"اتصال مباشر",web:"الموقع الرسمي",socialTag:"انضم إلى مجتمعنا",insta:"إنستغرام",tiktok:"تيك توك",snap:"سناب شات",offerTitle:"العرض الحالي",offerDesc:"خصم يصل إلى ٥٠٪ على باقات تنظيف مختارة."},footer:{tag:"برو سيلز السعودية",copy:"٢٠٢٦ محطة الأعمال الاحترافية",loc:"الموقع",locVal:"جدة والرياض",op:"التشغيل",opVal:"الأربعاء ٨:٠٠ صباحاً – ٥:٠٠ مساءً",legal:"قانوني",legalVal:"جميع الحقوق محفوظة",credit:"صنع بواسطة محمد فيزان خان"}}},nN=t=>{const e=["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"];return t.toString().replace(/[0-9]/g,n=>e[+n])},Cl=({children:t,lang:e,className:n=""})=>e!=="ar"?N.jsx("span",{className:n,children:t}):N.jsx("span",{dir:"ltr",className:`inline-block ${n}`,style:{unicodeBidi:"bidi-override"},children:nN(t)}),iN=({isOpen:t,onClose:e,content:n,lang:i})=>!t||!n?null:N.jsx("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-6 bg-primary/95 backdrop-blur-2xl transition-all duration-300",children:N.jsxs("div",{className:"glass-card w-full max-w-lg p-10 relative overflow-hidden border-secondary/20",children:[N.jsx("button",{onClick:e,className:"absolute top-8 right-8 text-secondary/40 hover:text-secondary transition-colors",children:N.jsx(TS,{size:20})}),N.jsx("div",{className:"hexagon-outline w-16 h-18 mb-8 mx-auto",children:N.jsx("div",{className:"hexagon-inner",children:n.icon&&N.jsx(n.icon,{size:24,className:"text-secondary"})})}),N.jsx("h3",{className:"text-xl font-black uppercase text-center mb-6 tracking-tight",children:n.title}),N.jsx("p",{className:"text-secondary/60 leading-relaxed font-light text-center text-[12px] mb-10 max-w-sm mx-auto",children:n.details}),N.jsx("div",{className:"flex justify-center",children:N.jsx("button",{onClick:e,className:"btn-outline py-2 px-10 text-[10px]",children:bS[i].services.close})}),N.jsx("div",{className:"scanline"})]})}),rN=()=>{const t=ot.useRef(null),e=ot.useRef(null);return ot.useEffect(()=>{const n=i=>{t.current&&(t.current.style.left=`${i.clientX}px`,t.current.style.top=`${i.clientY}px`),e.current&&(e.current.style.left=`${i.clientX}px`,e.current.style.top=`${i.clientY}px`)};return window.addEventListener("mousemove",n),()=>window.removeEventListener("mousemove",n)},[]),N.jsxs(N.Fragment,{children:[N.jsx("div",{ref:t,className:"cursor-dot"}),N.jsx("div",{ref:e,className:"cursor-ring"})]})},Df=({icon:t,title:e,desc:n,onClick:i,delay:r=0})=>N.jsxs("button",{className:"reveal flex flex-col items-center text-center p-8 glass-card group w-full",style:{transitionDelay:`${r}ms`},onClick:i,children:[N.jsx("div",{className:"hexagon-outline mb-6 group-hover:scale-105 transition-transform",children:N.jsx("div",{className:"hexagon-inner",children:N.jsx(t,{className:"text-secondary w-6 h-6"})})}),N.jsx("h3",{className:"text-sm font-bold uppercase tracking-wide mb-3",children:e}),N.jsx("p",{className:"text-[11px] text-secondary/50 leading-relaxed font-light",children:n}),N.jsx("div",{className:"scanline"})]}),sN=({titles:t,lang:e})=>{const[n,i]=ot.useState(0),[r,s]=ot.useState(!0);return ot.useEffect(()=>{const o=setInterval(()=>{s(!1),setTimeout(()=>{i(a=>(a+1)%t.length),s(!0)},800)},4e3);return()=>clearInterval(o)},[t]),N.jsx("div",{className:`transition-all duration-1000 transform ${r?"opacity-100 translate-y-0":"opacity-0 translate-y-4"}`,children:N.jsx("span",{className:"text-transparent",style:{WebkitTextStroke:"1px var(--secondary)"},children:t[n]})})};function oN(){const[t,e]=ot.useState("en"),[n,i]=ot.useState(!1),[r,s]=ot.useState(null),[o,a]=ot.useState(!1),l=bS[t];ot.useEffect(()=>{const f=()=>i(window.scrollY>50);window.addEventListener("scroll",f);const c=new IntersectionObserver(d=>{d.forEach(h=>{h.isIntersecting&&h.target.classList.add("visible")})},{threshold:.1});return document.querySelectorAll(".reveal").forEach(d=>c.observe(d)),()=>{window.removeEventListener("scroll",f),c.disconnect()}},[t]);const u=()=>e(t==="en"?"ar":"en");return N.jsxs("div",{className:`site-wrapper selection:bg-secondary selection:text-primary ${t==="ar"?"rtl":""}`,lang:t,children:[N.jsx(yR,{}),N.jsx(rN,{}),N.jsx("div",{className:"noise"}),N.jsx(iN,{isOpen:!!r,onClose:()=>s(null),content:r,lang:t}),N.jsx(tN,{isOpen:o,onClose:()=>a(!1),lang:t}),N.jsx("nav",{className:`fixed w-full z-50 transition-all duration-500 ${n?"bg-primary/95 backdrop-blur-xl border-b border-secondary/10 py-4":"bg-transparent py-10"}`,children:N.jsxs("div",{className:"max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-6 lg:gap-0 justify-between items-center",children:[N.jsxs("div",{className:"flex items-center gap-6",children:[N.jsx(S0,{width:"65",className:"filter-silver"})," ",N.jsxs("div",{className:"flex flex-col",children:[N.jsx("span",{className:"font-bold text-lg text-secondary leading-none tracking-tighter",children:"PRO CELLS"}),N.jsx("span",{className:"font-mono text-[9px] text-secondary/40 uppercase tracking-[0.3em]",children:t==="en"?"Professional Business Station":"محطة الأعمال الاحترافية"})]})]}),N.jsx("div",{className:"w-full lg:max-w-md px-4",children:N.jsxs("button",{onClick:()=>a(!0),className:"w-full glass-card py-2 px-6 rounded-full flex items-center justify-between group hover:border-secondary transition-all",children:[N.jsx("span",{className:"text-[10px] font-mono text-secondary/40 group-hover:text-secondary/60 tracking-widest",children:l.nav.aiSearch}),N.jsxs("div",{className:"flex items-center gap-2",children:[N.jsx(Hk,{size:14,className:"text-secondary/30 group-hover:text-secondary"}),N.jsx(Go,{size:14,className:"text-secondary/30 group-hover:text-secondary animate-pulse"})]})]})}),N.jsxs("div",{className:"hidden lg:flex gap-8 items-center",children:[["Services","Identity","Sectors"].map(f=>N.jsx("a",{href:`#${f.toLowerCase()}`,className:"text-[10px] font-mono uppercase tracking-[0.2em] hover:text-white transition-colors",children:l.nav[f.toLowerCase()]},f)),N.jsxs("button",{onClick:u,className:"flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] border border-secondary/20 px-4 py-1.5 rounded-full hover:bg-secondary/10",children:[N.jsx(Uk,{size:12})," ",t==="en"?"Arabic":"English"]}),N.jsx("a",{href:"#connect",className:"btn-primary py-2.5 px-8 text-[10px] font-bold",children:l.nav.button})]})]})}),N.jsxs("section",{className:"relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-32",children:[N.jsx("div",{className:"molecular-grid absolute inset-0 pointer-events-none"}),N.jsxs("div",{className:"reveal max-w-5xl mx-auto",children:[N.jsx("span",{className:"section-tag",children:l.hero.tag}),N.jsxs("h1",{className:"hero-title mb-10",children:[t==="en"?"PRO CELLS":"برو سيلز"," ",N.jsx("br",{}),N.jsx(sN,{titles:l.hero.titles,lang:t})]}),N.jsx("p",{className:"text-sm md:text-base text-secondary/60 max-w-2xl mx-auto font-light leading-relaxed mb-12",children:l.hero.desc}),N.jsxs("div",{className:"flex flex-wrap gap-4 justify-center",children:[N.jsx("a",{href:"#services",className:"btn-primary",children:l.hero.explore}),N.jsx("a",{href:"#connect",className:"btn-outline",children:l.hero.connect})]})]})]}),N.jsx("section",{id:"identity",className:"py-24 relative border-y border-secondary/5 bg-primary/20",children:N.jsx("div",{className:"max-w-7xl mx-auto px-6",children:N.jsxs("div",{className:"grid lg:grid-cols-2 gap-24 items-center",children:[N.jsxs("div",{className:"reveal",children:[N.jsx("span",{className:"section-tag",children:l.identity.tag}),N.jsx("h2",{className:"text-4xl md:text-5xl font-black uppercase mb-8 tracking-tighter",children:l.identity.title}),N.jsxs("div",{className:"space-y-6 text-sm text-secondary/60 font-light max-w-lg",children:[N.jsx("p",{children:l.identity.p1}),N.jsx("div",{className:"grid gap-6 mt-10",children:[{...l.identity.regional,i:Ck},{...l.identity.technical,i:Go},{...l.identity.expertise,i:Xk}].map((f,c)=>N.jsxs("button",{className:"flex gap-4 text-left group w-full",onClick:()=>s({...f,title:f.t,details:f.d,icon:f.i}),children:[N.jsx("div",{className:"bg-secondary/10 p-3 rounded-lg shrink-0 group-hover:bg-secondary group-hover:text-primary transition-all",children:N.jsx(f.i,{size:16})}),N.jsxs("div",{children:[N.jsx("h4",{className:"font-bold text-secondary text-[11px] uppercase tracking-widest mb-1",children:f.t}),N.jsx("p",{className:"text-[10px] opacity-50",children:f.d})]})]},c))})]})]}),N.jsx("div",{className:"reveal",children:N.jsxs("div",{className:"glass-card p-10 border-secondary/10 relative",children:[N.jsx("span",{className:"text-[9px] font-mono text-secondary/30 uppercase mb-8 block tracking-[0.3em]",children:l.identity.team.tag}),N.jsx("h3",{className:"text-xl font-bold text-white mb-8 uppercase",children:l.identity.team.title}),N.jsx("ul",{className:"space-y-6",children:l.identity.team.items.map((f,c)=>N.jsxs("li",{className:"flex gap-4",children:[N.jsx("div",{className:"w-1 h-1 bg-secondary mt-2 shrink-0 opacity-40"}),N.jsxs("div",{children:[N.jsx("h4",{className:"font-bold text-secondary text-[11px] uppercase tracking-wider mb-1",children:f.t}),N.jsx("p",{className:"text-[10px] text-secondary/40 font-light leading-relaxed",children:f.d})]})]},c))}),N.jsx("div",{className:"scanline"})]})})]})})}),N.jsx("section",{id:"services",className:"py-24 relative",children:N.jsxs("div",{className:"max-w-7xl mx-auto px-6",children:[N.jsxs("div",{className:"reveal text-center mb-16",children:[N.jsx("span",{className:"section-tag",children:l.services.tag}),N.jsx("h2",{className:"text-4xl md:text-5xl font-black uppercase tracking-tighter",children:l.services.title})]}),N.jsxs("div",{className:"grid md:grid-cols-3 gap-6",children:[N.jsx(Df,{icon:vx,title:l.services.residential.t,desc:l.services.residential.d,delay:0,onClick:()=>s({...l.services.residential,title:l.services.residential.t,icon:vx})}),N.jsx(Df,{icon:Go,title:l.services.fabric.t,desc:l.services.fabric.d,delay:100,onClick:()=>s({...l.services.fabric,title:l.services.fabric.t,icon:Go})}),N.jsx(Df,{icon:yx,title:l.services.corporate.t,desc:l.services.corporate.d,delay:200,onClick:()=>s({...l.services.corporate,title:l.services.corporate.t,icon:yx})})]})]})}),N.jsx("section",{id:"sectors",className:"py-24 bg-secondary/5 relative",children:N.jsxs("div",{className:"max-w-7xl mx-auto px-6",children:[N.jsxs("div",{className:"reveal text-center mb-16",children:[N.jsx("span",{className:"section-tag",children:l.sectors.tag}),N.jsx("h2",{className:"text-4xl md:text-5xl font-black uppercase tracking-tighter",children:l.sectors.title})]}),N.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[{...l.sectors.commercial,i:Yk},{...l.sectors.hospitality,i:kk},{...l.sectors.health,i:Ik},{...l.sectors.construction,i:Pk}].map((f,c)=>N.jsxs("button",{className:"reveal glass-card p-8 text-center group hover:border-secondary/30 transition-all",style:{transitionDelay:`${c*100}ms`},onClick:()=>s({...f,title:f.t,icon:f.i}),children:[N.jsx(f.i,{size:20,className:"mx-auto mb-4 text-secondary/30 group-hover:text-secondary transition-colors"}),N.jsx("span",{className:"text-[10px] font-bold uppercase tracking-widest",children:f.t})]},c))})]})}),N.jsx("section",{id:"connect",className:"py-24 relative overflow-hidden",children:N.jsx("div",{className:"max-w-7xl mx-auto px-6",children:N.jsxs("div",{className:"grid lg:grid-cols-2 gap-24 items-center",children:[N.jsxs("div",{className:"reveal",children:[N.jsx("span",{className:"section-tag",children:l.connect.tag}),N.jsx("h2",{className:"text-4xl md:text-5xl font-black uppercase mb-8 tracking-tighter",children:l.connect.title}),N.jsx("p",{className:"text-sm text-secondary/50 mb-10 max-w-sm font-light",children:l.connect.desc}),N.jsxs("div",{className:"space-y-4",children:[N.jsxs("a",{href:"https://wa.me/966555984276",className:"btn-primary w-full justify-center flex gap-3 text-xs",children:[N.jsx(Bk,{size:16})," ",l.connect.whatsapp]}),N.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[N.jsxs("div",{className:"glass-card p-6 text-center",children:[N.jsx("span",{className:"text-[8px] font-mono text-secondary/30 uppercase mb-2 block",children:l.connect.call}),N.jsx(Cl,{lang:t,className:"font-bold text-xs tracking-widest",children:"+966 55 598 4276"})]}),N.jsxs("div",{className:"glass-card p-6 text-center",children:[N.jsx("span",{className:"text-[8px] font-mono text-secondary/30 uppercase mb-2 block",children:l.connect.web}),N.jsx("span",{className:"font-bold text-xs tracking-widest",children:"procells.sa"})]})]})]})]}),N.jsxs("div",{className:"reveal space-y-6",children:[N.jsxs("div",{className:"glass-card p-10 bg-secondary/5",children:[N.jsx("span",{className:"text-[9px] font-mono text-secondary/30 uppercase mb-8 block tracking-[0.3em]",children:l.connect.socialTag}),N.jsx("div",{className:"grid gap-4",children:[{n:l.connect.insta,h:"https://www.instagram.com/PROCELLS24",i:()=>N.jsx("div",{className:"w-5 h-5 border border-secondary/20 rounded-md flex items-center justify-center text-[10px]",children:"IG"})},{n:l.connect.tiktok,h:"https://www.tiktok.com/@procells24",i:()=>N.jsx("div",{className:"w-5 h-5 border border-secondary/20 rounded-md flex items-center justify-center text-[10px]",children:"TK"})},{n:l.connect.snap,h:"https://www.snapchat.com/@procells24",i:()=>N.jsx("div",{className:"w-5 h-5 border border-secondary/20 rounded-md flex items-center justify-center text-[10px]",children:"SC"})}].map((f,c)=>N.jsxs("a",{href:f.h,className:"flex items-center justify-between p-4 rounded-xl border border-secondary/5 hover:bg-secondary/10 transition-all group",children:[N.jsxs("div",{className:"flex items-center gap-4",children:[N.jsx(f.i,{}),N.jsx("span",{className:"text-[11px] font-bold uppercase tracking-widest",children:f.n})]}),N.jsx(yk,{size:14,className:"opacity-10 group-hover:opacity-40"})]},c))})]}),N.jsxs("div",{className:"p-6 border border-dashed border-secondary/20 rounded-2xl flex items-center gap-6",children:[N.jsx("div",{className:"w-12 h-12 hexagon bg-secondary text-primary font-black text-xs",children:N.jsx(Cl,{lang:t,children:"50%"})}),N.jsxs("div",{children:[N.jsx("h5",{className:"font-bold text-secondary text-[10px] uppercase mb-1",children:l.connect.offerTitle}),N.jsx("p",{className:"text-[10px] opacity-40 leading-relaxed font-light",children:l.connect.offerDesc})]})]})]})]})})}),N.jsx("footer",{className:"py-16 border-t border-secondary/5 bg-primary/40",children:N.jsxs("div",{className:"max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10 font-mono text-[9px] text-secondary/30 uppercase tracking-[0.2em]",children:[N.jsxs("div",{className:"flex items-center gap-6",children:[N.jsx(S0,{width:"45",className:"filter-silver opacity-30"}),N.jsxs("div",{className:"flex flex-col",children:[N.jsx("span",{children:l.footer.tag}),N.jsxs("span",{children:["© ",N.jsx(Cl,{lang:t,children:"2026"})," ",t==="en"?"Professional Business Station":"محطة الأعمال الاحترافية"]})]})]}),N.jsxs("div",{className:"flex flex-col items-center gap-2",children:[N.jsxs("div",{className:"flex gap-12 text-center md:text-left",children:[N.jsxs("div",{children:[N.jsx("p",{className:"opacity-40 mb-2",children:l.footer.loc}),N.jsx("p",{className:"text-secondary/50",children:l.footer.locVal})]}),N.jsxs("div",{children:[N.jsx("p",{className:"opacity-40 mb-2",children:l.footer.op}),N.jsx("p",{className:"text-secondary/50",children:t==="en"?l.footer.opVal:N.jsx(Cl,{lang:t,children:"الأربعاء ٨:٠٠ صباحاً – ٥:٠٠ مساءً"})})]}),N.jsxs("div",{children:[N.jsx("p",{className:"opacity-40 mb-2",children:l.footer.legal}),N.jsx("p",{className:"text-secondary/50",children:l.footer.legalVal})]})]}),N.jsx("a",{href:"https://khan.linux-aios.com",className:"text-[7px] text-secondary/10 hover:text-secondary/30 transition-colors mt-4 tracking-[0.5em] font-light",children:l.footer.credit})]})]})})]})}kv(document.getElementById("root")).render(N.jsx(ot.StrictMode,{children:N.jsx(oN,{})}));

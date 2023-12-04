var Ga=Object.defineProperty;var Ka=(s,t,e)=>t in s?Ga(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var Ir=(s,t,e)=>(Ka(s,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tr=window,ki=tr.ShadowRoot&&(tr.ShadyCSS===void 0||tr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ii=Symbol(),bs=new WeakMap;let Oi=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==Ii)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(ki&&t===void 0){const r=e!==void 0&&e.length===1;r&&(t=bs.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&bs.set(e,t))}return t}toString(){return this.cssText}};const Xa=s=>new Oi(typeof s=="string"?s:s+"",void 0,Ii),g=(s,...t)=>{const e=s.length===1?s[0]:t.reduce((r,i,o)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+s[o+1],s[0]);return new Oi(e,s,Ii)},Qa=(s,t)=>{ki?s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const r=document.createElement("style"),i=tr.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=e.cssText,s.appendChild(r)})},ys=ki?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return Xa(e)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Or;const sr=window,ws=sr.trustedTypes,Ja=ws?ws.emptyScript:"",xs=sr.reactiveElementPolyfillSupport,ti={toAttribute(s,t){switch(t){case Boolean:s=s?Ja:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},Yo=(s,t)=>t!==s&&(t==t||s==s),zr={attribute:!0,type:String,converter:ti,reflect:!1,hasChanged:Yo},ri="finalized";let Ue=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,r)=>{const i=this._$Ep(r,e);i!==void 0&&(this._$Ev.set(i,r),t.push(i))}),t}static createProperty(t,e=zr){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const r=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,r,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(i){const o=this[t];this[e]=i,this.requestUpdate(t,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||zr}static finalize(){if(this.hasOwnProperty(ri))return!1;this[ri]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,r=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of r)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)e.unshift(ys(i))}else t!==void 0&&e.push(ys(t));return e}static _$Ep(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,r;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)===null||r===void 0||r.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Qa(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var r;return(r=e.hostConnected)===null||r===void 0?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var r;return(r=e.hostDisconnected)===null||r===void 0?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EO(t,e,r=zr){var i;const o=this.constructor._$Ep(t,r);if(o!==void 0&&r.reflect===!0){const n=(((i=r.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?r.converter:ti).toAttribute(e,r.type);this._$El=t,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(t,e){var r;const i=this.constructor,o=i._$Ev.get(t);if(o!==void 0&&this._$El!==o){const n=i.getPropertyOptions(o),a=typeof n.converter=="function"?{fromAttribute:n.converter}:((r=n.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?n.converter:ti;this._$El=o,this[o]=a.fromAttribute(e,n.type),this._$El=null}}requestUpdate(t,e,r){let i=!0;t!==void 0&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||Yo)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,r))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,o)=>this[o]=i),this._$Ei=void 0);let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var o;return(o=i.hostUpdate)===null||o===void 0?void 0:o.call(i)}),this.update(r)):this._$Ek()}catch(i){throw e=!1,this._$Ek(),i}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(r=>{var i;return(i=r.hostUpdated)===null||i===void 0?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,r)=>this._$EO(r,this[r],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};Ue[ri]=!0,Ue.elementProperties=new Map,Ue.elementStyles=[],Ue.shadowRootOptions={mode:"open"},xs==null||xs({ReactiveElement:Ue}),((Or=sr.reactiveElementVersions)!==null&&Or!==void 0?Or:sr.reactiveElementVersions=[]).push("1.6.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Mr;const or=window,Ke=or.trustedTypes,Cs=Ke?Ke.createPolicy("lit-html",{createHTML:s=>s}):void 0,ii="$lit$",be=`lit$${(Math.random()+"").slice(9)}$`,qo="?"+be,Za=`<${qo}>`,ze=document,Dt=()=>ze.createComment(""),St=s=>s===null||typeof s!="object"&&typeof s!="function",jo=Array.isArray,el=s=>jo(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",Nr=`[ 	
\f\r]`,nt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ts=/-->/g,Es=/>/g,Ee=RegExp(`>|${Nr}(?:([^\\s"'>=/]+)(${Nr}*=${Nr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),As=/'/g,Ps=/"/g,Go=/^(?:script|style|textarea|title)$/i,Ko=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),G=Ko(1),tl=Ko(2),Me=Symbol.for("lit-noChange"),O=Symbol.for("lit-nothing"),Ds=new WeakMap,Se=ze.createTreeWalker(ze,129,null,!1);function Xo(s,t){if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return Cs!==void 0?Cs.createHTML(t):t}const rl=(s,t)=>{const e=s.length-1,r=[];let i,o=t===2?"<svg>":"",n=nt;for(let a=0;a<e;a++){const l=s[a];let d,c,h=-1,u=0;for(;u<l.length&&(n.lastIndex=u,c=n.exec(l),c!==null);)u=n.lastIndex,n===nt?c[1]==="!--"?n=Ts:c[1]!==void 0?n=Es:c[2]!==void 0?(Go.test(c[2])&&(i=RegExp("</"+c[2],"g")),n=Ee):c[3]!==void 0&&(n=Ee):n===Ee?c[0]===">"?(n=i??nt,h=-1):c[1]===void 0?h=-2:(h=n.lastIndex-c[2].length,d=c[1],n=c[3]===void 0?Ee:c[3]==='"'?Ps:As):n===Ps||n===As?n=Ee:n===Ts||n===Es?n=nt:(n=Ee,i=void 0);const p=n===Ee&&s[a+1].startsWith("/>")?" ":"";o+=n===nt?l+Za:h>=0?(r.push(d),l.slice(0,h)+ii+l.slice(h)+be+p):l+be+(h===-2?(r.push(void 0),a):p)}return[Xo(s,o+(s[e]||"<?>")+(t===2?"</svg>":"")),r]};class kt{constructor({strings:t,_$litType$:e},r){let i;this.parts=[];let o=0,n=0;const a=t.length-1,l=this.parts,[d,c]=rl(t,e);if(this.el=kt.createElement(d,r),Se.currentNode=this.el.content,e===2){const h=this.el.content,u=h.firstChild;u.remove(),h.append(...u.childNodes)}for(;(i=Se.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes()){const h=[];for(const u of i.getAttributeNames())if(u.endsWith(ii)||u.startsWith(be)){const p=c[n++];if(h.push(u),p!==void 0){const _=i.getAttribute(p.toLowerCase()+ii).split(be),v=/([.?@])?(.*)/.exec(p);l.push({type:1,index:o,name:v[2],strings:_,ctor:v[1]==="."?sl:v[1]==="?"?nl:v[1]==="@"?al:vr})}else l.push({type:6,index:o})}for(const u of h)i.removeAttribute(u)}if(Go.test(i.tagName)){const h=i.textContent.split(be),u=h.length-1;if(u>0){i.textContent=Ke?Ke.emptyScript:"";for(let p=0;p<u;p++)i.append(h[p],Dt()),Se.nextNode(),l.push({type:2,index:++o});i.append(h[u],Dt())}}}else if(i.nodeType===8)if(i.data===qo)l.push({type:2,index:o});else{let h=-1;for(;(h=i.data.indexOf(be,h+1))!==-1;)l.push({type:7,index:o}),h+=be.length-1}o++}}static createElement(t,e){const r=ze.createElement("template");return r.innerHTML=t,r}}function Xe(s,t,e=s,r){var i,o,n,a;if(t===Me)return t;let l=r!==void 0?(i=e._$Co)===null||i===void 0?void 0:i[r]:e._$Cl;const d=St(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==d&&((o=l==null?void 0:l._$AO)===null||o===void 0||o.call(l,!1),d===void 0?l=void 0:(l=new d(s),l._$AT(s,e,r)),r!==void 0?((n=(a=e)._$Co)!==null&&n!==void 0?n:a._$Co=[])[r]=l:e._$Cl=l),l!==void 0&&(t=Xe(s,l._$AS(s,t.values),l,r)),t}class il{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:r},parts:i}=this._$AD,o=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:ze).importNode(r,!0);Se.currentNode=o;let n=Se.nextNode(),a=0,l=0,d=i[0];for(;d!==void 0;){if(a===d.index){let c;d.type===2?c=new Lt(n,n.nextSibling,this,t):d.type===1?c=new d.ctor(n,d.name,d.strings,this,t):d.type===6&&(c=new ll(n,this,t)),this._$AV.push(c),d=i[++l]}a!==(d==null?void 0:d.index)&&(n=Se.nextNode(),a++)}return Se.currentNode=ze,o}v(t){let e=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class Lt{constructor(t,e,r,i){var o;this.type=2,this._$AH=O,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=i,this._$Cp=(o=i==null?void 0:i.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Xe(this,t,e),St(t)?t===O||t==null||t===""?(this._$AH!==O&&this._$AR(),this._$AH=O):t!==this._$AH&&t!==Me&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):el(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==O&&St(this._$AH)?this._$AA.nextSibling.data=t:this.$(ze.createTextNode(t)),this._$AH=t}g(t){var e;const{values:r,_$litType$:i}=t,o=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=kt.createElement(Xo(i.h,i.h[0]),this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.v(r);else{const n=new il(o,this),a=n.u(this.options);n.v(r),this.$(a),this._$AH=n}}_$AC(t){let e=Ds.get(t.strings);return e===void 0&&Ds.set(t.strings,e=new kt(t)),e}T(t){jo(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,i=0;for(const o of t)i===e.length?e.push(r=new Lt(this.k(Dt()),this.k(Dt()),this,this.options)):r=e[i],r._$AI(o),i++;i<e.length&&(this._$AR(r&&r._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class vr{constructor(t,e,r,i,o){this.type=1,this._$AH=O,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=O}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,r,i){const o=this.strings;let n=!1;if(o===void 0)t=Xe(this,t,e,0),n=!St(t)||t!==this._$AH&&t!==Me,n&&(this._$AH=t);else{const a=t;let l,d;for(t=o[0],l=0;l<o.length-1;l++)d=Xe(this,a[r+l],e,l),d===Me&&(d=this._$AH[l]),n||(n=!St(d)||d!==this._$AH[l]),d===O?t=O:t!==O&&(t+=(d??"")+o[l+1]),this._$AH[l]=d}n&&!i&&this.j(t)}j(t){t===O?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class sl extends vr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===O?void 0:t}}const ol=Ke?Ke.emptyScript:"";class nl extends vr{constructor(){super(...arguments),this.type=4}j(t){t&&t!==O?this.element.setAttribute(this.name,ol):this.element.removeAttribute(this.name)}}class al extends vr{constructor(t,e,r,i,o){super(t,e,r,i,o),this.type=5}_$AI(t,e=this){var r;if((t=(r=Xe(this,t,e,0))!==null&&r!==void 0?r:O)===Me)return;const i=this._$AH,o=t===O&&i!==O||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==O&&(i===O||o);o&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,r;typeof this._$AH=="function"?this._$AH.call((r=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&r!==void 0?r:this.element,t):this._$AH.handleEvent(t)}}class ll{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Xe(this,t)}}const Ss=or.litHtmlPolyfillSupport;Ss==null||Ss(kt,Lt),((Mr=or.litHtmlVersions)!==null&&Mr!==void 0?Mr:or.litHtmlVersions=[]).push("2.7.5");const zi=(s,t,e)=>{var r,i;const o=(r=e==null?void 0:e.renderBefore)!==null&&r!==void 0?r:t;let n=o._$litPart$;if(n===void 0){const a=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:null;o._$litPart$=n=new Lt(t.insertBefore(Dt(),a),a,void 0,e??{})}return n._$AI(s),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Rr,Fr;let Ct=class extends Ue{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const r=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=r.firstChild),r}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=zi(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return Me}};Ct.finalized=!0,Ct._$litElement$=!0,(Rr=globalThis.litElementHydrateSupport)===null||Rr===void 0||Rr.call(globalThis,{LitElement:Ct});const ks=globalThis.litElementPolyfillSupport;ks==null||ks({LitElement:Ct});((Fr=globalThis.litElementVersions)!==null&&Fr!==void 0?Fr:globalThis.litElementVersions=[]).push("3.3.2");function ue(s){"@babel/helpers - typeof";return ue=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ue(s)}function R(s,t){if(t.length<s)throw new TypeError(s+" argument"+(s>1?"s":"")+" required, but only "+t.length+" present")}function U(s){R(1,arguments);var t=Object.prototype.toString.call(s);return s instanceof Date||ue(s)==="object"&&t==="[object Date]"?new Date(s.getTime()):typeof s=="number"||t==="[object Number]"?new Date(s):((typeof s=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function dl(s){R(1,arguments);var t=U(s);return t.setHours(0,0,0,0),t}function Qo(){return dl(Date.now())}function j(s){if(s===null||s===!0||s===!1)return NaN;var t=Number(s);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function cl(s,t){R(2,arguments);var e=U(s),r=j(t);return isNaN(r)?new Date(NaN):(r&&e.setDate(e.getDate()+r),e)}function hl(s,t){R(2,arguments);var e=j(t);return cl(s,-e)}function ul(s){return R(1,arguments),s instanceof Date||ue(s)==="object"&&Object.prototype.toString.call(s)==="[object Date]"}function pl(s){if(R(1,arguments),!ul(s)&&typeof s!="number")return!1;var t=U(s);return!isNaN(Number(t))}function fl(s,t){R(2,arguments);var e=U(s).getTime(),r=j(t);return new Date(e+r)}function Jo(s,t){R(2,arguments);var e=j(t);return fl(s,-e)}var ml=864e5;function _l(s){R(1,arguments);var t=U(s),e=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=t.getTime(),i=e-r;return Math.floor(i/ml)+1}function Qe(s){R(1,arguments);var t=1,e=U(s),r=e.getUTCDay(),i=(r<t?7:0)+r-t;return e.setUTCDate(e.getUTCDate()-i),e.setUTCHours(0,0,0,0),e}function Zo(s){R(1,arguments);var t=U(s),e=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(e+1,0,4),r.setUTCHours(0,0,0,0);var i=Qe(r),o=new Date(0);o.setUTCFullYear(e,0,4),o.setUTCHours(0,0,0,0);var n=Qe(o);return t.getTime()>=i.getTime()?e+1:t.getTime()>=n.getTime()?e:e-1}function gl(s){R(1,arguments);var t=Zo(s),e=new Date(0);e.setUTCFullYear(t,0,4),e.setUTCHours(0,0,0,0);var r=Qe(e);return r}var vl=6048e5;function en(s){R(1,arguments);var t=U(s),e=Qe(t).getTime()-gl(t).getTime();return Math.round(e/vl)+1}var bl={};function et(){return bl}function Ne(s,t){var e,r,i,o,n,a,l,d;R(1,arguments);var c=et(),h=j((e=(r=(i=(o=t==null?void 0:t.weekStartsOn)!==null&&o!==void 0?o:t==null||(n=t.locale)===null||n===void 0||(a=n.options)===null||a===void 0?void 0:a.weekStartsOn)!==null&&i!==void 0?i:c.weekStartsOn)!==null&&r!==void 0?r:(l=c.locale)===null||l===void 0||(d=l.options)===null||d===void 0?void 0:d.weekStartsOn)!==null&&e!==void 0?e:0);if(!(h>=0&&h<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var u=U(s),p=u.getUTCDay(),_=(p<h?7:0)+p-h;return u.setUTCDate(u.getUTCDate()-_),u.setUTCHours(0,0,0,0),u}function Mi(s,t){var e,r,i,o,n,a,l,d;R(1,arguments);var c=U(s),h=c.getUTCFullYear(),u=et(),p=j((e=(r=(i=(o=t==null?void 0:t.firstWeekContainsDate)!==null&&o!==void 0?o:t==null||(n=t.locale)===null||n===void 0||(a=n.options)===null||a===void 0?void 0:a.firstWeekContainsDate)!==null&&i!==void 0?i:u.firstWeekContainsDate)!==null&&r!==void 0?r:(l=u.locale)===null||l===void 0||(d=l.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&e!==void 0?e:1);if(!(p>=1&&p<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var _=new Date(0);_.setUTCFullYear(h+1,0,p),_.setUTCHours(0,0,0,0);var v=Ne(_,t),w=new Date(0);w.setUTCFullYear(h,0,p),w.setUTCHours(0,0,0,0);var A=Ne(w,t);return c.getTime()>=v.getTime()?h+1:c.getTime()>=A.getTime()?h:h-1}function yl(s,t){var e,r,i,o,n,a,l,d;R(1,arguments);var c=et(),h=j((e=(r=(i=(o=t==null?void 0:t.firstWeekContainsDate)!==null&&o!==void 0?o:t==null||(n=t.locale)===null||n===void 0||(a=n.options)===null||a===void 0?void 0:a.firstWeekContainsDate)!==null&&i!==void 0?i:c.firstWeekContainsDate)!==null&&r!==void 0?r:(l=c.locale)===null||l===void 0||(d=l.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&e!==void 0?e:1),u=Mi(s,t),p=new Date(0);p.setUTCFullYear(u,0,h),p.setUTCHours(0,0,0,0);var _=Ne(p,t);return _}var wl=6048e5;function tn(s,t){R(1,arguments);var e=U(s),r=Ne(e,t).getTime()-yl(e,t).getTime();return Math.round(r/wl)+1}function D(s,t){for(var e=s<0?"-":"",r=Math.abs(s).toString();r.length<t;)r="0"+r;return e+r}var xl={y:function(t,e){var r=t.getUTCFullYear(),i=r>0?r:1-r;return D(e==="yy"?i%100:i,e.length)},M:function(t,e){var r=t.getUTCMonth();return e==="M"?String(r+1):D(r+1,2)},d:function(t,e){return D(t.getUTCDate(),e.length)},a:function(t,e){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h:function(t,e){return D(t.getUTCHours()%12||12,e.length)},H:function(t,e){return D(t.getUTCHours(),e.length)},m:function(t,e){return D(t.getUTCMinutes(),e.length)},s:function(t,e){return D(t.getUTCSeconds(),e.length)},S:function(t,e){var r=e.length,i=t.getUTCMilliseconds(),o=Math.floor(i*Math.pow(10,r-3));return D(o,e.length)}};const ge=xl;var He={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Cl={G:function(t,e,r){var i=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return r.era(i,{width:"abbreviated"});case"GGGGG":return r.era(i,{width:"narrow"});case"GGGG":default:return r.era(i,{width:"wide"})}},y:function(t,e,r){if(e==="yo"){var i=t.getUTCFullYear(),o=i>0?i:1-i;return r.ordinalNumber(o,{unit:"year"})}return ge.y(t,e)},Y:function(t,e,r,i){var o=Mi(t,i),n=o>0?o:1-o;if(e==="YY"){var a=n%100;return D(a,2)}return e==="Yo"?r.ordinalNumber(n,{unit:"year"}):D(n,e.length)},R:function(t,e){var r=Zo(t);return D(r,e.length)},u:function(t,e){var r=t.getUTCFullYear();return D(r,e.length)},Q:function(t,e,r){var i=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(i);case"QQ":return D(i,2);case"Qo":return r.ordinalNumber(i,{unit:"quarter"});case"QQQ":return r.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(i,{width:"wide",context:"formatting"})}},q:function(t,e,r){var i=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(i);case"qq":return D(i,2);case"qo":return r.ordinalNumber(i,{unit:"quarter"});case"qqq":return r.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(i,{width:"wide",context:"standalone"})}},M:function(t,e,r){var i=t.getUTCMonth();switch(e){case"M":case"MM":return ge.M(t,e);case"Mo":return r.ordinalNumber(i+1,{unit:"month"});case"MMM":return r.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(i,{width:"wide",context:"formatting"})}},L:function(t,e,r){var i=t.getUTCMonth();switch(e){case"L":return String(i+1);case"LL":return D(i+1,2);case"Lo":return r.ordinalNumber(i+1,{unit:"month"});case"LLL":return r.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(i,{width:"wide",context:"standalone"})}},w:function(t,e,r,i){var o=tn(t,i);return e==="wo"?r.ordinalNumber(o,{unit:"week"}):D(o,e.length)},I:function(t,e,r){var i=en(t);return e==="Io"?r.ordinalNumber(i,{unit:"week"}):D(i,e.length)},d:function(t,e,r){return e==="do"?r.ordinalNumber(t.getUTCDate(),{unit:"date"}):ge.d(t,e)},D:function(t,e,r){var i=_l(t);return e==="Do"?r.ordinalNumber(i,{unit:"dayOfYear"}):D(i,e.length)},E:function(t,e,r){var i=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return r.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(i,{width:"short",context:"formatting"});case"EEEE":default:return r.day(i,{width:"wide",context:"formatting"})}},e:function(t,e,r,i){var o=t.getUTCDay(),n=(o-i.weekStartsOn+8)%7||7;switch(e){case"e":return String(n);case"ee":return D(n,2);case"eo":return r.ordinalNumber(n,{unit:"day"});case"eee":return r.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(o,{width:"short",context:"formatting"});case"eeee":default:return r.day(o,{width:"wide",context:"formatting"})}},c:function(t,e,r,i){var o=t.getUTCDay(),n=(o-i.weekStartsOn+8)%7||7;switch(e){case"c":return String(n);case"cc":return D(n,e.length);case"co":return r.ordinalNumber(n,{unit:"day"});case"ccc":return r.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(o,{width:"narrow",context:"standalone"});case"cccccc":return r.day(o,{width:"short",context:"standalone"});case"cccc":default:return r.day(o,{width:"wide",context:"standalone"})}},i:function(t,e,r){var i=t.getUTCDay(),o=i===0?7:i;switch(e){case"i":return String(o);case"ii":return D(o,e.length);case"io":return r.ordinalNumber(o,{unit:"day"});case"iii":return r.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(i,{width:"short",context:"formatting"});case"iiii":default:return r.day(i,{width:"wide",context:"formatting"})}},a:function(t,e,r){var i=t.getUTCHours(),o=i/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(t,e,r){var i=t.getUTCHours(),o;switch(i===12?o=He.noon:i===0?o=He.midnight:o=i/12>=1?"pm":"am",e){case"b":case"bb":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(t,e,r){var i=t.getUTCHours(),o;switch(i>=17?o=He.evening:i>=12?o=He.afternoon:i>=4?o=He.morning:o=He.night,e){case"B":case"BB":case"BBB":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(t,e,r){if(e==="ho"){var i=t.getUTCHours()%12;return i===0&&(i=12),r.ordinalNumber(i,{unit:"hour"})}return ge.h(t,e)},H:function(t,e,r){return e==="Ho"?r.ordinalNumber(t.getUTCHours(),{unit:"hour"}):ge.H(t,e)},K:function(t,e,r){var i=t.getUTCHours()%12;return e==="Ko"?r.ordinalNumber(i,{unit:"hour"}):D(i,e.length)},k:function(t,e,r){var i=t.getUTCHours();return i===0&&(i=24),e==="ko"?r.ordinalNumber(i,{unit:"hour"}):D(i,e.length)},m:function(t,e,r){return e==="mo"?r.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):ge.m(t,e)},s:function(t,e,r){return e==="so"?r.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):ge.s(t,e)},S:function(t,e){return ge.S(t,e)},X:function(t,e,r,i){var o=i._originalDate||t,n=o.getTimezoneOffset();if(n===0)return"Z";switch(e){case"X":return Os(n);case"XXXX":case"XX":return Pe(n);case"XXXXX":case"XXX":default:return Pe(n,":")}},x:function(t,e,r,i){var o=i._originalDate||t,n=o.getTimezoneOffset();switch(e){case"x":return Os(n);case"xxxx":case"xx":return Pe(n);case"xxxxx":case"xxx":default:return Pe(n,":")}},O:function(t,e,r,i){var o=i._originalDate||t,n=o.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Is(n,":");case"OOOO":default:return"GMT"+Pe(n,":")}},z:function(t,e,r,i){var o=i._originalDate||t,n=o.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Is(n,":");case"zzzz":default:return"GMT"+Pe(n,":")}},t:function(t,e,r,i){var o=i._originalDate||t,n=Math.floor(o.getTime()/1e3);return D(n,e.length)},T:function(t,e,r,i){var o=i._originalDate||t,n=o.getTime();return D(n,e.length)}};function Is(s,t){var e=s>0?"-":"+",r=Math.abs(s),i=Math.floor(r/60),o=r%60;if(o===0)return e+String(i);var n=t||"";return e+String(i)+n+D(o,2)}function Os(s,t){if(s%60===0){var e=s>0?"-":"+";return e+D(Math.abs(s)/60,2)}return Pe(s,t)}function Pe(s,t){var e=t||"",r=s>0?"-":"+",i=Math.abs(s),o=D(Math.floor(i/60),2),n=D(i%60,2);return r+o+e+n}const Tl=Cl;var zs=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},rn=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},El=function(t,e){var r=t.match(/(P+)(p+)?/)||[],i=r[1],o=r[2];if(!o)return zs(t,e);var n;switch(i){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"});break}return n.replace("{{date}}",zs(i,e)).replace("{{time}}",rn(o,e))},Al={p:rn,P:El};const si=Al;function sn(s){var t=new Date(Date.UTC(s.getFullYear(),s.getMonth(),s.getDate(),s.getHours(),s.getMinutes(),s.getSeconds(),s.getMilliseconds()));return t.setUTCFullYear(s.getFullYear()),s.getTime()-t.getTime()}var Pl=["D","DD"],Dl=["YY","YYYY"];function on(s){return Pl.indexOf(s)!==-1}function nn(s){return Dl.indexOf(s)!==-1}function nr(s,t,e){if(s==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(s==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(s==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(s==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var Sl={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},kl=function(t,e,r){var i,o=Sl[t];return typeof o=="string"?i=o:e===1?i=o.one:i=o.other.replace("{{count}}",e.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+i:i+" ago":i};const Il=kl;function Lr(s){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.width?String(t.width):s.defaultWidth,r=s.formats[e]||s.formats[s.defaultWidth];return r}}var Ol={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},zl={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Ml={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Nl={date:Lr({formats:Ol,defaultWidth:"full"}),time:Lr({formats:zl,defaultWidth:"full"}),dateTime:Lr({formats:Ml,defaultWidth:"full"})};const Rl=Nl;var Fl={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Ll=function(t,e,r,i){return Fl[t]};const $l=Ll;function at(s){return function(t,e){var r=e!=null&&e.context?String(e.context):"standalone",i;if(r==="formatting"&&s.formattingValues){var o=s.defaultFormattingWidth||s.defaultWidth,n=e!=null&&e.width?String(e.width):o;i=s.formattingValues[n]||s.formattingValues[o]}else{var a=s.defaultWidth,l=e!=null&&e.width?String(e.width):s.defaultWidth;i=s.values[l]||s.values[a]}var d=s.argumentCallback?s.argumentCallback(t):t;return i[d]}}var Hl={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Bl={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Vl={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Ul={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Wl={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Yl={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},ql=function(t,e){var r=Number(t),i=r%100;if(i>20||i<10)switch(i%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},jl={ordinalNumber:ql,era:at({values:Hl,defaultWidth:"wide"}),quarter:at({values:Bl,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:at({values:Vl,defaultWidth:"wide"}),day:at({values:Ul,defaultWidth:"wide"}),dayPeriod:at({values:Wl,defaultWidth:"wide",formattingValues:Yl,defaultFormattingWidth:"wide"})};const Gl=jl;function lt(s){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.width,i=r&&s.matchPatterns[r]||s.matchPatterns[s.defaultMatchWidth],o=t.match(i);if(!o)return null;var n=o[0],a=r&&s.parsePatterns[r]||s.parsePatterns[s.defaultParseWidth],l=Array.isArray(a)?Xl(a,function(h){return h.test(n)}):Kl(a,function(h){return h.test(n)}),d;d=s.valueCallback?s.valueCallback(l):l,d=e.valueCallback?e.valueCallback(d):d;var c=t.slice(n.length);return{value:d,rest:c}}}function Kl(s,t){for(var e in s)if(s.hasOwnProperty(e)&&t(s[e]))return e}function Xl(s,t){for(var e=0;e<s.length;e++)if(t(s[e]))return e}function Ql(s){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.match(s.matchPattern);if(!r)return null;var i=r[0],o=t.match(s.parsePattern);if(!o)return null;var n=s.valueCallback?s.valueCallback(o[0]):o[0];n=e.valueCallback?e.valueCallback(n):n;var a=t.slice(i.length);return{value:n,rest:a}}}var Jl=/^(\d+)(th|st|nd|rd)?/i,Zl=/\d+/i,ed={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},td={any:[/^b/i,/^(a|c)/i]},rd={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},id={any:[/1/i,/2/i,/3/i,/4/i]},sd={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},od={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},nd={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},ad={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},ld={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},dd={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},cd={ordinalNumber:Ql({matchPattern:Jl,parsePattern:Zl,valueCallback:function(t){return parseInt(t,10)}}),era:lt({matchPatterns:ed,defaultMatchWidth:"wide",parsePatterns:td,defaultParseWidth:"any"}),quarter:lt({matchPatterns:rd,defaultMatchWidth:"wide",parsePatterns:id,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:lt({matchPatterns:sd,defaultMatchWidth:"wide",parsePatterns:od,defaultParseWidth:"any"}),day:lt({matchPatterns:nd,defaultMatchWidth:"wide",parsePatterns:ad,defaultParseWidth:"any"}),dayPeriod:lt({matchPatterns:ld,defaultMatchWidth:"any",parsePatterns:dd,defaultParseWidth:"any"})};const hd=cd;var ud={code:"en-US",formatDistance:Il,formatLong:Rl,formatRelative:$l,localize:Gl,match:hd,options:{weekStartsOn:0,firstWeekContainsDate:1}};const an=ud;var pd=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,fd=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,md=/^'([^]*?)'?$/,_d=/''/g,gd=/[a-zA-Z]/;function bt(s,t,e){var r,i,o,n,a,l,d,c,h,u,p,_,v,w,A,P,W,Y;R(2,arguments);var z=String(t),F=et(),te=(r=(i=e==null?void 0:e.locale)!==null&&i!==void 0?i:F.locale)!==null&&r!==void 0?r:an,le=j((o=(n=(a=(l=e==null?void 0:e.firstWeekContainsDate)!==null&&l!==void 0?l:e==null||(d=e.locale)===null||d===void 0||(c=d.options)===null||c===void 0?void 0:c.firstWeekContainsDate)!==null&&a!==void 0?a:F.firstWeekContainsDate)!==null&&n!==void 0?n:(h=F.locale)===null||h===void 0||(u=h.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&o!==void 0?o:1);if(!(le>=1&&le<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var me=j((p=(_=(v=(w=e==null?void 0:e.weekStartsOn)!==null&&w!==void 0?w:e==null||(A=e.locale)===null||A===void 0||(P=A.options)===null||P===void 0?void 0:P.weekStartsOn)!==null&&v!==void 0?v:F.weekStartsOn)!==null&&_!==void 0?_:(W=F.locale)===null||W===void 0||(Y=W.options)===null||Y===void 0?void 0:Y.weekStartsOn)!==null&&p!==void 0?p:0);if(!(me>=0&&me<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!te.localize)throw new RangeError("locale must contain localize property");if(!te.formatLong)throw new RangeError("locale must contain formatLong property");var _e=U(s);if(!pl(_e))throw new RangeError("Invalid time value");var rt=sn(_e),it=Jo(_e,rt),st={firstWeekContainsDate:le,weekStartsOn:me,locale:te,_originalDate:_e},Dr=z.match(fd).map(function(q){var J=q[0];if(J==="p"||J==="P"){var Te=si[J];return Te(q,te.formatLong)}return q}).join("").match(pd).map(function(q){if(q==="''")return"'";var J=q[0];if(J==="'")return vd(q);var Te=Tl[J];if(Te)return!(e!=null&&e.useAdditionalWeekYearTokens)&&nn(q)&&nr(q,t,String(s)),!(e!=null&&e.useAdditionalDayOfYearTokens)&&on(q)&&nr(q,t,String(s)),Te(it,q,te.localize,st);if(J.match(gd))throw new RangeError("Format string contains an unescaped latin alphabet character `"+J+"`");return q}).join("");return Dr}function vd(s){var t=s.match(md);return t?t[1].replace(_d,"'"):s}function Ms(s,t){(t==null||t>s.length)&&(t=s.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=s[e];return r}function bd(s,t){if(s){if(typeof s=="string")return Ms(s,t);var e=Object.prototype.toString.call(s).slice(8,-1);if(e==="Object"&&s.constructor&&(e=s.constructor.name),e==="Map"||e==="Set")return Array.from(s);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Ms(s,t)}}function Ns(s,t){var e=typeof Symbol<"u"&&s[Symbol.iterator]||s["@@iterator"];if(!e){if(Array.isArray(s)||(e=bd(s))||t&&s&&typeof s.length=="number"){e&&(s=e);var r=0,i=function(){};return{s:i,n:function(){return r>=s.length?{done:!0}:{done:!1,value:s[r++]}},e:function(d){throw d},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,n=!1,a;return{s:function(){e=e.call(s)},n:function(){var d=e.next();return o=d.done,d},e:function(d){n=!0,a=d},f:function(){try{!o&&e.return!=null&&e.return()}finally{if(n)throw a}}}}function yd(s,t){if(s==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(s[e]=t[e]);return s}function m(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function oi(s,t){return oi=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},oi(s,t)}function x(s,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");s.prototype=Object.create(t&&t.prototype,{constructor:{value:s,writable:!0,configurable:!0}}),Object.defineProperty(s,"prototype",{writable:!1}),t&&oi(s,t)}function ar(s){return ar=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},ar(s)}function wd(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function xd(s,t){if(t&&(ue(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return m(s)}function C(s){var t=wd();return function(){var r=ar(s),i;if(t){var o=ar(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return xd(this,i)}}function b(s,t){if(!(s instanceof t))throw new TypeError("Cannot call a class as a function")}function Cd(s,t){if(ue(s)!=="object"||s===null)return s;var e=s[Symbol.toPrimitive];if(e!==void 0){var r=e.call(s,t||"default");if(ue(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(s)}function ln(s){var t=Cd(s,"string");return ue(t)==="symbol"?t:String(t)}function Rs(s,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(s,ln(r.key),r)}}function y(s,t,e){return t&&Rs(s.prototype,t),e&&Rs(s,e),Object.defineProperty(s,"prototype",{writable:!1}),s}function f(s,t,e){return t=ln(t),t in s?Object.defineProperty(s,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):s[t]=e,s}var Td=10,dn=function(){function s(){b(this,s),f(this,"priority",void 0),f(this,"subPriority",0)}return y(s,[{key:"validate",value:function(e,r){return!0}}]),s}(),Ed=function(s){x(e,s);var t=C(e);function e(r,i,o,n,a){var l;return b(this,e),l=t.call(this),l.value=r,l.validateValue=i,l.setValue=o,l.priority=n,a&&(l.subPriority=a),l}return y(e,[{key:"validate",value:function(i,o){return this.validateValue(i,this.value,o)}},{key:"set",value:function(i,o,n){return this.setValue(i,o,this.value,n)}}]),e}(dn),Ad=function(s){x(e,s);var t=C(e);function e(){var r;b(this,e);for(var i=arguments.length,o=new Array(i),n=0;n<i;n++)o[n]=arguments[n];return r=t.call.apply(t,[this].concat(o)),f(m(r),"priority",Td),f(m(r),"subPriority",-1),r}return y(e,[{key:"set",value:function(i,o){if(o.timestampIsSet)return i;var n=new Date(0);return n.setFullYear(i.getUTCFullYear(),i.getUTCMonth(),i.getUTCDate()),n.setHours(i.getUTCHours(),i.getUTCMinutes(),i.getUTCSeconds(),i.getUTCMilliseconds()),n}}]),e}(dn),E=function(){function s(){b(this,s),f(this,"incompatibleTokens",void 0),f(this,"priority",void 0),f(this,"subPriority",void 0)}return y(s,[{key:"run",value:function(e,r,i,o){var n=this.parse(e,r,i,o);return n?{setter:new Ed(n.value,this.validate,this.set,this.priority,this.subPriority),rest:n.rest}:null}},{key:"validate",value:function(e,r,i){return!0}}]),s}(),Pd=function(s){x(e,s);var t=C(e);function e(){var r;b(this,e);for(var i=arguments.length,o=new Array(i),n=0;n<i;n++)o[n]=arguments[n];return r=t.call.apply(t,[this].concat(o)),f(m(r),"priority",140),f(m(r),"incompatibleTokens",["R","u","t","T"]),r}return y(e,[{key:"parse",value:function(i,o,n){switch(o){case"G":case"GG":case"GGG":return n.era(i,{width:"abbreviated"})||n.era(i,{width:"narrow"});case"GGGGG":return n.era(i,{width:"narrow"});case"GGGG":default:return n.era(i,{width:"wide"})||n.era(i,{width:"abbreviated"})||n.era(i,{width:"narrow"})}}},{key:"set",value:function(i,o,n){return o.era=n,i.setUTCFullYear(n,0,1),i.setUTCHours(0,0,0,0),i}}]),e}(E),Dd=6e4,Sd=36e5,kd=1e3,$={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},oe={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function H(s,t){return s&&{value:t(s.value),rest:s.rest}}function N(s,t){var e=t.match(s);return e?{value:parseInt(e[0],10),rest:t.slice(e[0].length)}:null}function ne(s,t){var e=t.match(s);if(!e)return null;if(e[0]==="Z")return{value:0,rest:t.slice(1)};var r=e[1]==="+"?1:-1,i=e[2]?parseInt(e[2],10):0,o=e[3]?parseInt(e[3],10):0,n=e[5]?parseInt(e[5],10):0;return{value:r*(i*Sd+o*Dd+n*kd),rest:t.slice(e[0].length)}}function cn(s){return N($.anyDigitsSigned,s)}function L(s,t){switch(s){case 1:return N($.singleDigit,t);case 2:return N($.twoDigits,t);case 3:return N($.threeDigits,t);case 4:return N($.fourDigits,t);default:return N(new RegExp("^\\d{1,"+s+"}"),t)}}function lr(s,t){switch(s){case 1:return N($.singleDigitSigned,t);case 2:return N($.twoDigitsSigned,t);case 3:return N($.threeDigitsSigned,t);case 4:return N($.fourDigitsSigned,t);default:return N(new RegExp("^-?\\d{1,"+s+"}"),t)}}function Ni(s){switch(s){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function hn(s,t){var e=t>0,r=e?t:1-t,i;if(r<=50)i=s||100;else{var o=r+50,n=Math.floor(o/100)*100,a=s>=o%100;i=s+n-(a?100:0)}return e?i:1-i}function un(s){return s%400===0||s%4===0&&s%100!==0}var Id=function(s){x(e,s);var t=C(e);function e(){var r;b(this,e);for(var i=arguments.length,o=new Array(i),n=0;n<i;n++)o[n]=arguments[n];return r=t.call.apply(t,[this].concat(o)),f(m(r),"priority",130),f(m(r),"incompatibleTokens",["Y","R","u","w","I","i","e","c","t","T"]),r}return y(e,[{key:"parse",value:function(i,o,n){var a=function(d){return{year:d,isTwoDigitYear:o==="yy"}};switch(o){case"y":return H(L(4,i),a);case"yo":return H(n.ordinalNumber(i,{unit:"year"}),a);default:return H(L(o.length,i),a)}}},{key:"validate",value:function(i,o){return o.isTwoDigitYear||o.year>0}},{key:"set",value:function(i,o,n){var a=i.getUTCFullYear();if(n.isTwoDigitYear){var l=hn(n.year,a);return i.setUTCFullYear(l,0,1),i.setUTCHours(0,0,0,0),i}var d=!("era"in o)||o.era===1?n.year:1-n.year;return i.setUTCFullYear(d,0,1),i.setUTCHours(0,0,0,0),i}}]),e}(E),Od=function(s){x(e,s);var t=C(e);function e(){var r;b(this,e);for(var i=arguments.length,o=new Array(i),n=0;n<i;n++)o[n]=arguments[n];return r=t.call.apply(t,[this].concat(o)),f(m(r),"priority",130),f(m(r),"incompatibleTokens",["y","R","u","Q","q","M","L","I","d","D","i","t","T"]),r}return y(e,[{key:"parse",value:function(i,o,n){var a=function(d){return{year:d,isTwoDigitYear:o==="YY"}};switch(o){case"Y":return H(L(4,i),a);case"Yo":return H(n.ordinalNumber(i,{unit:"year"}),a);default:return H(L(o.length,i),a)}}},{key:"validate",value:function(i,o){return o.isTwoDigitYear||o.year>0}},{key:"set",value:function(i,o,n,a){var l=Mi(i,a);if(n.isTwoDigitYear){var d=hn(n.year,l);return i.setUTCFullYear(d,0,a.firstWeekContainsDate),i.setUTCHours(0,0,0,0),Ne(i,a)}var c=!("era"in o)||o.era===1?n.year:1-n.year;return i.setUTCFullYear(c,0,a.firstWeekContainsDate),i.setUTCHours(0,0,0,0),Ne(i,a)}}]),e}(E),zd=function(s){x(e,s);var t=C(e);function e(){var r;b(this,e);for(var i=arguments.length,o=new Array(i),n=0;n<i;n++)o[n]=arguments[n];return r=t.call.apply(t,[this].concat(o)),f(m(r),"priority",130),f(m(r),"incompatibleTokens",["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"]),r}return y(e,[{key:"parse",value:function(i,o){return lr(o==="R"?4:o.length,i)}},{key:"set",value:function(i,o,n){var a=new Date(0);return a.setUTCFullYear(n,0,4),a.setUTCHours(0,0,0,0),Qe(a)}}]),e}(E),Md=function(s){x(e,s);var t=C(e);function e(){var r;b(this,e);for(var i=arguments.length,o=new Array(i),n=0;n<i;n++)o[n]=arguments[n];return r=t.call.apply(t,[this].concat(o)),f(m(r),"priority",130),f(m(r),"incompatibleTokens",["G","y","Y","R","w","I","i","e","c","t","T"]),r}return y(e,[{key:"parse",value:function(i,o){return lr(o==="u"?4:o.length,i)}},{key:"set",value:function(i,o,n){return i.setUTCFullYear(n,0,1),i.setUTCHours(0,0,0,0),i}}]),e}(E),Nd=function(s){x(e,s);var t=C(e);function e(){var r;b(this,e);for(var i=arguments.length,o=new Array(i),n=0;n<i;n++)o[n]=arguments[n];return r=t.call.apply(t,[this].concat(o)),f(m(r),"priority",120),f(m(r),"incompatibleTokens",["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"]),r}return y(e,[{key:"parse",value:function(i,o,n){switch(o){case"Q":case"QQ":return L(o.length,i);case"Qo":return n.ordinalNumber(i,{unit:"quarter"});case"QQQ":return n.quarter(i,{width:"abbreviated",context:"formatting"})||n.quarter(i,{width:"narrow",context:"formatting"});case"QQQQQ":return n.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(i,{width:"wide",context:"formatting"})||n.quarter(i,{width:"abbreviated",context:"formatting"})||n.quarter(i,{width:"narrow",context:"formatting"})}}},{key:"validate",value:function(i,o){return o>=1&&o<=4}},{key:"set",value:function(i,o,n){return i.setUTCMonth((n-1)*3,1),i.setUTCHours(0,0,0,0),i}}]),e}(E),Rd=function(s){x(e,s);var t=C(e);function e(){var r;b(this,e);for(var i=arguments.length,o=new Array(i),n=0;n<i;n++)o[n]=arguments[n];return r=t.call.apply(t,[this].concat(o)),f(m(r),"priority",120),f(m(r),"incompatibleTokens",["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"]),r}return y(e,[{key:"parse",value:function(i,o,n){switch(o){case"q":case"qq":return L(o.length,i);case"qo":return n.ordinalNumber(i,{unit:"quarter"});case"qqq":return n.quarter(i,{width:"abbreviated",context:"standalone"})||n.quarter(i,{width:"narrow",context:"standalone"});case"qqqqq":return n.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(i,{width:"wide",context:"standalone"})||n.quarter(i,{width:"abbreviated",context:"standalone"})||n.quarter(i,{width:"narrow",context:"standalone"})}}},{key:"validate",value:function(i,o){return o>=1&&o<=4}},{key:"set",value:function(i,o,n){return i.setUTCMonth((n-1)*3,1),i.setUTCHours(0,0,0,0),i}}]),e}(E),Fd=function(s){x(e,s);var t=C(e);function e(){var r;b(this,e);for(var i=arguments.length,o=new Array(i),n=0;n<i;n++)o[n]=arguments[n];return r=t.call.apply(t,[this].concat(o)),f(m(r),"incompatibleTokens",["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]),f(m(r),"priority",110),r}return y(e,[{key:"parse",value:function(i,o,n){var a=function(d){return d-1};switch(o){case"M":return H(N($.month,i),a);case"MM":return H(L(2,i),a);case"Mo":return H(n.ordinalNumber(i,{unit:"month"}),a);case"MMM":return n.month(i,{width:"abbreviated",context:"formatting"})||n.month(i,{width:"narrow",context:"formatting"});case"MMMMM":return n.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(i,{width:"wide",context:"formatting"})||n.month(i,{width:"abbreviated",context:"formatting"})||n.month(i,{width:"narrow",context:"formatting"})}}},{key:"validate",value:function(i,o){return o>=0&&o<=11}},{key:"set",value:function(i,o,n){return i.setUTCMonth(n,1),i.setUTCHours(0,0,0,0),i}}]),e}(E),Ld=function(s){x(e,s);var t=C(e);function e(){var r;b(this,e);for(var i=arguments.length,o=new Array(i),n=0;n<i;n++)o[n]=arguments[n];return r=t.call.apply(t,[this].concat(o)),f(m(r),"priority",110),f(m(r),"incompatibleTokens",["Y","R","q","Q","M","w","I","D","i","e","c","t","T"]),r}return y(e,[{key:"parse",value:function(i,o,n){var a=function(d){return d-1};switch(o){case"L":return H(N($.month,i),a);case"LL":return H(L(2,i),a);case"Lo":return H(n.ordinalNumber(i,{unit:"month"}),a);case"LLL":return n.month(i,{width:"abbreviated",context:"standalone"})||n.month(i,{width:"narrow",context:"standalone"});case"LLLLL":return n.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(i,{width:"wide",context:"standalone"})||n.month(i,{width:"abbreviated",context:"standalone"})||n.month(i,{width:"narrow",context:"standalone"})}}},{key:"validate",value:function(i,o){return o>=0&&o<=11}},{key:"set",value:function(i,o,n){return i.setUTCMonth(n,1),i.setUTCHours(0,0,0,0),i}}]),e}(E);function $d(s,t,e){R(2,arguments);var r=U(s),i=j(t),o=tn(r,e)-i;return r.setUTCDate(r.getUTCDate()-o*7),r}var Hd=function(s){x(e,s);var t=C(e);function e(){var r;b(this,e);for(var i=arguments.length,o=new Array(i),n=0;n<i;n++)o[n]=arguments[n];return r=t.call.apply(t,[this].concat(o)),f(m(r),"priority",100),f(m(r),"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","i","t","T"]),r}return y(e,[{key:"parse",value:function(i,o,n){switch(o){case"w":return N($.week,i);case"wo":return n.ordinalNumber(i,{unit:"week"});default:return L(o.length,i)}}},{key:"validate",value:function(i,o){return o>=1&&o<=53}},{key:"set",value:function(i,o,n,a){return Ne($d(i,n,a),a)}}]),e}(E);function Bd(s,t){R(2,arguments);var e=U(s),r=j(t),i=en(e)-r;return e.setUTCDate(e.getUTCDate()-i*7),e}var Vd=function(s){x(e,s);var t=C(e);function e(){var r;b(this,e);for(var i=arguments.length,o=new Array(i),n=0;n<i;n++)o[n]=arguments[n];return r=t.call.apply(t,[this].concat(o)),f(m(r),"priority",100),f(m(r),"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"]),r}return y(e,[{key:"parse",value:function(i,o,n){switch(o){case"I":return N($.week,i);case"Io":return n.ordinalNumber(i,{unit:"week"});default:return L(o.length,i)}}},{key:"validate",value:function(i,o){return o>=1&&o<=53}},{key:"set",value:function(i,o,n){return Qe(Bd(i,n))}}]),e}(E),Ud=[31,28,31,30,31,30,31,31,30,31,30,31],Wd=[31,29,31,30,31,30,31,31,30,31,30,31],Yd=function(s){x(e,s);var t=C(e);function e(){var r;b(this,e);for(var i=arguments.length,o=new Array(i),n=0;n<i;n++)o[n]=arguments[n];return r=t.call.apply(t,[this].concat(o)),f(m(r),"priority",90),f(m(r),"subPriority",1),f(m(r),"incompatibleTokens",["Y","R","q","Q","w","I","D","i","e","c","t","T"]),r}return y(e,[{key:"parse",value:function(i,o,n){switch(o){case"d":return N($.date,i);case"do":return n.ordinalNumber(i,{unit:"date"});default:return L(o.length,i)}}},{key:"validate",value:function(i,o){var n=i.getUTCFullYear(),a=un(n),l=i.getUTCMonth();return a?o>=1&&o<=Wd[l]:o>=1&&o<=Ud[l]}},{key:"set",value:function(i,o,n){return i.setUTCDate(n),i.setUTCHours(0,0,0,0),i}}]),e}(E),qd=function(s){x(e,s);var t=C(e);function e(){var r;b(this,e);for(var i=arguments.length,o=new Array(i),n=0;n<i;n++)o[n]=arguments[n];return r=t.call.apply(t,[this].concat(o)),f(m(r),"priority",90),f(m(r),"subpriority",1),f(m(r),"incompatibleTokens",["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"]),r}return y(e,[{key:"parse",value:function(i,o,n){switch(o){case"D":case"DD":return N($.dayOfYear,i);case"Do":return n.ordinalNumber(i,{unit:"date"});default:return L(o.length,i)}}},{key:"validate",value:function(i,o){var n=i.getUTCFullYear(),a=un(n);return a?o>=1&&o<=366:o>=1&&o<=365}},{key:"set",value:function(i,o,n){return i.setUTCMonth(0,n),i.setUTCHours(0,0,0,0),i}}]),e}(E);function Ri(s,t,e){var r,i,o,n,a,l,d,c;R(2,arguments);var h=et(),u=j((r=(i=(o=(n=e==null?void 0:e.weekStartsOn)!==null&&n!==void 0?n:e==null||(a=e.locale)===null||a===void 0||(l=a.options)===null||l===void 0?void 0:l.weekStartsOn)!==null&&o!==void 0?o:h.weekStartsOn)!==null&&i!==void 0?i:(d=h.locale)===null||d===void 0||(c=d.options)===null||c===void 0?void 0:c.weekStartsOn)!==null&&r!==void 0?r:0);if(!(u>=0&&u<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var p=U(s),_=j(t),v=p.getUTCDay(),w=_%7,A=(w+7)%7,P=(A<u?7:0)+_-v;return p.setUTCDate(p.getUTCDate()+P),p}var jd=function(s){x(e,s);var t=C(e);function e(){var r;b(this,e);for(var i=arguments.length,o=new Array(i),n=0;n<i;n++)o[n]=arguments[n];return r=t.call.apply(t,[this].concat(o)),f(m(r),"priority",90),f(m(r),"incompatibleTokens",["D","i","e","c","t","T"]),r}return y(e,[{key:"parse",value:function(i,o,n){switch(o){case"E":case"EE":case"EEE":return n.day(i,{width:"abbreviated",context:"formatting"})||n.day(i,{width:"short",context:"formatting"})||n.day(i,{width:"narrow",context:"formatting"});case"EEEEE":return n.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(i,{width:"short",context:"formatting"})||n.day(i,{width:"narrow",context:"formatting"});case"EEEE":default:return n.day(i,{width:"wide",context:"formatting"})||n.day(i,{width:"abbreviated",context:"formatting"})||n.day(i,{width:"short",context:"formatting"})||n.day(i,{width:"narrow",context:"formatting"})}}},{key:"validate",value:function(i,o){return o>=0&&o<=6}},{key:"set",value:function(i,o,n,a){return i=Ri(i,n,a),i.setUTCHours(0,0,0,0),i}}]),e}(E),Gd=function(s){x(e,s);var t=C(e);function e(){var r;b(this,e);for(var i=arguments.length,o=new Array(i),n=0;n<i;n++)o[n]=arguments[n];return r=t.call.apply(t,[this].concat(o)),f(m(r),"priority",90),f(m(r),"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"]),r}return y(e,[{key:"parse",value:function(i,o,n,a){var l=function(c){var h=Math.floor((c-1)/7)*7;return(c+a.weekStartsOn+6)%7+h};switch(o){case"e":case"ee":return H(L(o.length,i),l);case"eo":return H(n.ordinalNumber(i,{unit:"day"}),l);case"eee":return n.day(i,{width:"abbreviated",context:"formatting"})||n.day(i,{width:"short",context:"formatting"})||n.day(i,{width:"narrow",context:"formatting"});case"eeeee":return n.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(i,{width:"short",context:"formatting"})||n.day(i,{width:"narrow",context:"formatting"});case"eeee":default:return n.day(i,{width:"wide",context:"formatting"})||n.day(i,{width:"abbreviated",context:"formatting"})||n.day(i,{width:"short",context:"formatting"})||n.day(i,{width:"narrow",context:"formatting"})}}},{key:"validate",value:function(i,o){return o>=0&&o<=6}},{key:"set",value:function(i,o,n,a){return i=Ri(i,n,a),i.setUTCHours(0,0,0,0),i}}]),e}(E),Kd=function(s){x(e,s);var t=C(e);function e(){var r;b(this,e);for(var i=arguments.length,o=new Array(i),n=0;n<i;n++)o[n]=arguments[n];return r=t.call.apply(t,[this].concat(o)),f(m(r),"priority",90),f(m(r),"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"]),r}return y(e,[{key:"parse",value:function(i,o,n,a){var l=function(c){var h=Math.floor((c-1)/7)*7;return(c+a.weekStartsOn+6)%7+h};switch(o){case"c":case"cc":return H(L(o.length,i),l);case"co":return H(n.ordinalNumber(i,{unit:"day"}),l);case"ccc":return n.day(i,{width:"abbreviated",context:"standalone"})||n.day(i,{width:"short",context:"standalone"})||n.day(i,{width:"narrow",context:"standalone"});case"ccccc":return n.day(i,{width:"narrow",context:"standalone"});case"cccccc":return n.day(i,{width:"short",context:"standalone"})||n.day(i,{width:"narrow",context:"standalone"});case"cccc":default:return n.day(i,{width:"wide",context:"standalone"})||n.day(i,{width:"abbreviated",context:"standalone"})||n.day(i,{width:"short",context:"standalone"})||n.day(i,{width:"narrow",context:"standalone"})}}},{key:"validate",value:function(i,o){return o>=0&&o<=6}},{key:"set",value:function(i,o,n,a){return i=Ri(i,n,a),i.setUTCHours(0,0,0,0),i}}]),e}(E);function Xd(s,t){R(2,arguments);var e=j(t);e%7===0&&(e=e-7);var r=1,i=U(s),o=i.getUTCDay(),n=e%7,a=(n+7)%7,l=(a<r?7:0)+e-o;return i.setUTCDate(i.getUTCDate()+l),i}var Qd=function(s){x(e,s);var t=C(e);function e(){var r;b(this,e);for(var i=arguments.length,o=new Array(i),n=0;n<i;n++)o[n]=arguments[n];return r=t.call.apply(t,[this].concat(o)),f(m(r),"priority",90),f(m(r),"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"]),r}return y(e,[{key:"parse",value:function(i,o,n){var a=function(d){return d===0?7:d};switch(o){case"i":case"ii":return L(o.length,i);case"io":return n.ordinalNumber(i,{unit:"day"});case"iii":return H(n.day(i,{width:"abbreviated",context:"formatting"})||n.day(i,{width:"short",context:"formatting"})||n.day(i,{width:"narrow",context:"formatting"}),a);case"iiiii":return H(n.day(i,{width:"narrow",context:"formatting"}),a);case"iiiiii":return H(n.day(i,{width:"short",context:"formatting"})||n.day(i,{width:"narrow",context:"formatting"}),a);case"iiii":default:return H(n.day(i,{width:"wide",context:"formatting"})||n.day(i,{width:"abbreviated",context:"formatting"})||n.day(i,{width:"short",context:"formatting"})||n.day(i,{width:"narrow",context:"formatting"}),a)}}},{key:"validate",value:function(i,o){return o>=1&&o<=7}},{key:"set",value:function(i,o,n){return i=Xd(i,n),i.setUTCHours(0,0,0,0),i}}]),e}(E),Jd=function(s){x(e,s);var t=C(e);function e(){var r;b(this,e);for(var i=arguments.length,o=new Array(i),n=0;n<i;n++)o[n]=arguments[n];return r=t.call.apply(t,[this].concat(o)),f(m(r),"priority",80),f(m(r),"incompatibleTokens",["b","B","H","k","t","T"]),r}return y(e,[{key:"parse",value:function(i,o,n){switch(o){case"a":case"aa":case"aaa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"})||n.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaaa":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})||n.dayPeriod(i,{width:"abbreviated",context:"formatting"})||n.dayPeriod(i,{width:"narrow",context:"formatting"})}}},{key:"set",value:function(i,o,n){return i.setUTCHours(Ni(n),0,0,0),i}}]),e}(E),Zd=function(s){x(e,s);var t=C(e);function e(){var r;b(this,e);for(var i=arguments.length,o=new Array(i),n=0;n<i;n++)o[n]=arguments[n];return r=t.call.apply(t,[this].concat(o)),f(m(r),"priority",80),f(m(r),"incompatibleTokens",["a","B","H","k","t","T"]),r}return y(e,[{key:"parse",value:function(i,o,n){switch(o){case"b":case"bb":case"bbb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"})||n.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbbb":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})||n.dayPeriod(i,{width:"abbreviated",context:"formatting"})||n.dayPeriod(i,{width:"narrow",context:"formatting"})}}},{key:"set",value:function(i,o,n){return i.setUTCHours(Ni(n),0,0,0),i}}]),e}(E),ec=function(s){x(e,s);var t=C(e);function e(){var r;b(this,e);for(var i=arguments.length,o=new Array(i),n=0;n<i;n++)o[n]=arguments[n];return r=t.call.apply(t,[this].concat(o)),f(m(r),"priority",80),f(m(r),"incompatibleTokens",["a","b","t","T"]),r}return y(e,[{key:"parse",value:function(i,o,n){switch(o){case"B":case"BB":case"BBB":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"})||n.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBBB":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})||n.dayPeriod(i,{width:"abbreviated",context:"formatting"})||n.dayPeriod(i,{width:"narrow",context:"formatting"})}}},{key:"set",value:function(i,o,n){return i.setUTCHours(Ni(n),0,0,0),i}}]),e}(E),tc=function(s){x(e,s);var t=C(e);function e(){var r;b(this,e);for(var i=arguments.length,o=new Array(i),n=0;n<i;n++)o[n]=arguments[n];return r=t.call.apply(t,[this].concat(o)),f(m(r),"priority",70),f(m(r),"incompatibleTokens",["H","K","k","t","T"]),r}return y(e,[{key:"parse",value:function(i,o,n){switch(o){case"h":return N($.hour12h,i);case"ho":return n.ordinalNumber(i,{unit:"hour"});default:return L(o.length,i)}}},{key:"validate",value:function(i,o){return o>=1&&o<=12}},{key:"set",value:function(i,o,n){var a=i.getUTCHours()>=12;return a&&n<12?i.setUTCHours(n+12,0,0,0):!a&&n===12?i.setUTCHours(0,0,0,0):i.setUTCHours(n,0,0,0),i}}]),e}(E),rc=function(s){x(e,s);var t=C(e);function e(){var r;b(this,e);for(var i=arguments.length,o=new Array(i),n=0;n<i;n++)o[n]=arguments[n];return r=t.call.apply(t,[this].concat(o)),f(m(r),"priority",70),f(m(r),"incompatibleTokens",["a","b","h","K","k","t","T"]),r}return y(e,[{key:"parse",value:function(i,o,n){switch(o){case"H":return N($.hour23h,i);case"Ho":return n.ordinalNumber(i,{unit:"hour"});default:return L(o.length,i)}}},{key:"validate",value:function(i,o){return o>=0&&o<=23}},{key:"set",value:function(i,o,n){return i.setUTCHours(n,0,0,0),i}}]),e}(E),ic=function(s){x(e,s);var t=C(e);function e(){var r;b(this,e);for(var i=arguments.length,o=new Array(i),n=0;n<i;n++)o[n]=arguments[n];return r=t.call.apply(t,[this].concat(o)),f(m(r),"priority",70),f(m(r),"incompatibleTokens",["h","H","k","t","T"]),r}return y(e,[{key:"parse",value:function(i,o,n){switch(o){case"K":return N($.hour11h,i);case"Ko":return n.ordinalNumber(i,{unit:"hour"});default:return L(o.length,i)}}},{key:"validate",value:function(i,o){return o>=0&&o<=11}},{key:"set",value:function(i,o,n){var a=i.getUTCHours()>=12;return a&&n<12?i.setUTCHours(n+12,0,0,0):i.setUTCHours(n,0,0,0),i}}]),e}(E),sc=function(s){x(e,s);var t=C(e);function e(){var r;b(this,e);for(var i=arguments.length,o=new Array(i),n=0;n<i;n++)o[n]=arguments[n];return r=t.call.apply(t,[this].concat(o)),f(m(r),"priority",70),f(m(r),"incompatibleTokens",["a","b","h","H","K","t","T"]),r}return y(e,[{key:"parse",value:function(i,o,n){switch(o){case"k":return N($.hour24h,i);case"ko":return n.ordinalNumber(i,{unit:"hour"});default:return L(o.length,i)}}},{key:"validate",value:function(i,o){return o>=1&&o<=24}},{key:"set",value:function(i,o,n){var a=n<=24?n%24:n;return i.setUTCHours(a,0,0,0),i}}]),e}(E),oc=function(s){x(e,s);var t=C(e);function e(){var r;b(this,e);for(var i=arguments.length,o=new Array(i),n=0;n<i;n++)o[n]=arguments[n];return r=t.call.apply(t,[this].concat(o)),f(m(r),"priority",60),f(m(r),"incompatibleTokens",["t","T"]),r}return y(e,[{key:"parse",value:function(i,o,n){switch(o){case"m":return N($.minute,i);case"mo":return n.ordinalNumber(i,{unit:"minute"});default:return L(o.length,i)}}},{key:"validate",value:function(i,o){return o>=0&&o<=59}},{key:"set",value:function(i,o,n){return i.setUTCMinutes(n,0,0),i}}]),e}(E),nc=function(s){x(e,s);var t=C(e);function e(){var r;b(this,e);for(var i=arguments.length,o=new Array(i),n=0;n<i;n++)o[n]=arguments[n];return r=t.call.apply(t,[this].concat(o)),f(m(r),"priority",50),f(m(r),"incompatibleTokens",["t","T"]),r}return y(e,[{key:"parse",value:function(i,o,n){switch(o){case"s":return N($.second,i);case"so":return n.ordinalNumber(i,{unit:"second"});default:return L(o.length,i)}}},{key:"validate",value:function(i,o){return o>=0&&o<=59}},{key:"set",value:function(i,o,n){return i.setUTCSeconds(n,0),i}}]),e}(E),ac=function(s){x(e,s);var t=C(e);function e(){var r;b(this,e);for(var i=arguments.length,o=new Array(i),n=0;n<i;n++)o[n]=arguments[n];return r=t.call.apply(t,[this].concat(o)),f(m(r),"priority",30),f(m(r),"incompatibleTokens",["t","T"]),r}return y(e,[{key:"parse",value:function(i,o){var n=function(l){return Math.floor(l*Math.pow(10,-o.length+3))};return H(L(o.length,i),n)}},{key:"set",value:function(i,o,n){return i.setUTCMilliseconds(n),i}}]),e}(E),lc=function(s){x(e,s);var t=C(e);function e(){var r;b(this,e);for(var i=arguments.length,o=new Array(i),n=0;n<i;n++)o[n]=arguments[n];return r=t.call.apply(t,[this].concat(o)),f(m(r),"priority",10),f(m(r),"incompatibleTokens",["t","T","x"]),r}return y(e,[{key:"parse",value:function(i,o){switch(o){case"X":return ne(oe.basicOptionalMinutes,i);case"XX":return ne(oe.basic,i);case"XXXX":return ne(oe.basicOptionalSeconds,i);case"XXXXX":return ne(oe.extendedOptionalSeconds,i);case"XXX":default:return ne(oe.extended,i)}}},{key:"set",value:function(i,o,n){return o.timestampIsSet?i:new Date(i.getTime()-n)}}]),e}(E),dc=function(s){x(e,s);var t=C(e);function e(){var r;b(this,e);for(var i=arguments.length,o=new Array(i),n=0;n<i;n++)o[n]=arguments[n];return r=t.call.apply(t,[this].concat(o)),f(m(r),"priority",10),f(m(r),"incompatibleTokens",["t","T","X"]),r}return y(e,[{key:"parse",value:function(i,o){switch(o){case"x":return ne(oe.basicOptionalMinutes,i);case"xx":return ne(oe.basic,i);case"xxxx":return ne(oe.basicOptionalSeconds,i);case"xxxxx":return ne(oe.extendedOptionalSeconds,i);case"xxx":default:return ne(oe.extended,i)}}},{key:"set",value:function(i,o,n){return o.timestampIsSet?i:new Date(i.getTime()-n)}}]),e}(E),cc=function(s){x(e,s);var t=C(e);function e(){var r;b(this,e);for(var i=arguments.length,o=new Array(i),n=0;n<i;n++)o[n]=arguments[n];return r=t.call.apply(t,[this].concat(o)),f(m(r),"priority",40),f(m(r),"incompatibleTokens","*"),r}return y(e,[{key:"parse",value:function(i){return cn(i)}},{key:"set",value:function(i,o,n){return[new Date(n*1e3),{timestampIsSet:!0}]}}]),e}(E),hc=function(s){x(e,s);var t=C(e);function e(){var r;b(this,e);for(var i=arguments.length,o=new Array(i),n=0;n<i;n++)o[n]=arguments[n];return r=t.call.apply(t,[this].concat(o)),f(m(r),"priority",20),f(m(r),"incompatibleTokens","*"),r}return y(e,[{key:"parse",value:function(i){return cn(i)}},{key:"set",value:function(i,o,n){return[new Date(n),{timestampIsSet:!0}]}}]),e}(E),uc={G:new Pd,y:new Id,Y:new Od,R:new zd,u:new Md,Q:new Nd,q:new Rd,M:new Fd,L:new Ld,w:new Hd,I:new Vd,d:new Yd,D:new qd,E:new jd,e:new Gd,c:new Kd,i:new Qd,a:new Jd,b:new Zd,B:new ec,h:new tc,H:new rc,K:new ic,k:new sc,m:new oc,s:new nc,S:new ac,X:new lc,x:new dc,t:new cc,T:new hc},pc=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,fc=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,mc=/^'([^]*?)'?$/,_c=/''/g,gc=/\S/,vc=/[a-zA-Z]/;function bc(s,t,e,r){var i,o,n,a,l,d,c,h,u,p,_,v,w,A,P,W,Y,z;R(3,arguments);var F=String(s),te=String(t),le=et(),me=(i=(o=r==null?void 0:r.locale)!==null&&o!==void 0?o:le.locale)!==null&&i!==void 0?i:an;if(!me.match)throw new RangeError("locale must contain match property");var _e=j((n=(a=(l=(d=r==null?void 0:r.firstWeekContainsDate)!==null&&d!==void 0?d:r==null||(c=r.locale)===null||c===void 0||(h=c.options)===null||h===void 0?void 0:h.firstWeekContainsDate)!==null&&l!==void 0?l:le.firstWeekContainsDate)!==null&&a!==void 0?a:(u=le.locale)===null||u===void 0||(p=u.options)===null||p===void 0?void 0:p.firstWeekContainsDate)!==null&&n!==void 0?n:1);if(!(_e>=1&&_e<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var rt=j((_=(v=(w=(A=r==null?void 0:r.weekStartsOn)!==null&&A!==void 0?A:r==null||(P=r.locale)===null||P===void 0||(W=P.options)===null||W===void 0?void 0:W.weekStartsOn)!==null&&w!==void 0?w:le.weekStartsOn)!==null&&v!==void 0?v:(Y=le.locale)===null||Y===void 0||(z=Y.options)===null||z===void 0?void 0:z.weekStartsOn)!==null&&_!==void 0?_:0);if(!(rt>=0&&rt<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(te==="")return F===""?U(e):new Date(NaN);var it={firstWeekContainsDate:_e,weekStartsOn:rt,locale:me},st=[new Ad],Dr=te.match(fc).map(function(V){var k=V[0];if(k in si){var re=si[k];return re(V,me.formatLong)}return V}).join("").match(pc),q=[],J=Ns(Dr),Te;try{var qa=function(){var k=Te.value;!(r!=null&&r.useAdditionalWeekYearTokens)&&nn(k)&&nr(k,te,s),!(r!=null&&r.useAdditionalDayOfYearTokens)&&on(k)&&nr(k,te,s);var re=k[0],Ut=uc[re];if(Ut){var _s=Ut.incompatibleTokens;if(Array.isArray(_s)){var gs=q.find(function(vs){return _s.includes(vs.token)||vs.token===re});if(gs)throw new RangeError("The format string mustn't contain `".concat(gs.fullToken,"` and `").concat(k,"` at the same time"))}else if(Ut.incompatibleTokens==="*"&&q.length>0)throw new RangeError("The format string mustn't contain `".concat(k,"` and any other token at the same time"));q.push({token:re,fullToken:k});var kr=Ut.run(F,k,me.match,it);if(!kr)return{v:new Date(NaN)};st.push(kr.setter),F=kr.rest}else{if(re.match(vc))throw new RangeError("Format string contains an unescaped latin alphabet character `"+re+"`");if(k==="''"?k="'":re==="'"&&(k=yc(k)),F.indexOf(k)===0)F=F.slice(k.length);else return{v:new Date(NaN)}}};for(J.s();!(Te=J.n()).done;){var us=qa();if(ue(us)==="object")return us.v}}catch(V){J.e(V)}finally{J.f()}if(F.length>0&&gc.test(F))return new Date(NaN);var ja=st.map(function(V){return V.priority}).sort(function(V,k){return k-V}).filter(function(V,k,re){return re.indexOf(V)===k}).map(function(V){return st.filter(function(k){return k.priority===V}).sort(function(k,re){return re.subPriority-k.subPriority})}).map(function(V){return V[0]}),Sr=U(e);if(isNaN(Sr.getTime()))return new Date(NaN);var ot=Jo(Sr,sn(Sr)),ps={},Bt=Ns(ja),fs;try{for(Bt.s();!(fs=Bt.n()).done;){var ms=fs.value;if(!ms.validate(ot,it))return new Date(NaN);var Vt=ms.set(ot,ps,it);Array.isArray(Vt)?(ot=Vt[0],yd(ps,Vt[1])):ot=Vt}}catch(V){Bt.e(V)}finally{Bt.f()}return ot}function yc(s){return s.match(mc)[1].replace(_c,"'")}/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class wc extends HTMLElement{static get version(){return"24.1.3"}}customElements.define("vaadin-lumo-styles",wc);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const pn=s=>class extends s{static get properties(){return{_theme:{type:String,readOnly:!0}}}static get observedAttributes(){return[...super.observedAttributes,"theme"]}attributeChangedCallback(e,r,i){super.attributeChangedCallback(e,r,i),e==="theme"&&this._set_theme(i)}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const fn=[];function mn(s){return s&&Object.prototype.hasOwnProperty.call(s,"__themes")}function xc(s){return mn(customElements.get(s))}function Cc(s=[]){return[s].flat(1/0).filter(t=>t instanceof Oi?!0:(console.warn("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`."),!1))}function S(s,t,e={}){s&&xc(s)&&console.warn(`The custom element definition for "${s}"
      was finalized before a style module was registered.
      Make sure to add component specific style modules before
      importing the corresponding custom element.`),t=Cc(t),window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.registerStyles(s,t,e):fn.push({themeFor:s,styles:t,include:e.include,moduleId:e.moduleId})}function ni(){return window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.getAllThemes():fn}function Tc(s,t){return(s||"").split(" ").some(e=>new RegExp(`^${e.split("*").join(".*")}$`,"u").test(t))}function Ec(s=""){let t=0;return s.startsWith("lumo-")||s.startsWith("material-")?t=1:s.startsWith("vaadin-")&&(t=2),t}function _n(s){const t=[];return s.include&&[].concat(s.include).forEach(e=>{const r=ni().find(i=>i.moduleId===e);r?t.push(..._n(r),...r.styles):console.warn(`Included moduleId ${e} not found in style registry`)},s.styles),t}function Ac(s,t){const e=document.createElement("style");e.innerHTML=s.map(r=>r.cssText).join(`
`),t.content.appendChild(e)}function Pc(s){const t=`${s}-default-theme`,e=ni().filter(r=>r.moduleId!==t&&Tc(r.themeFor,s)).map(r=>({...r,styles:[..._n(r),...r.styles],includePriority:Ec(r.moduleId)})).sort((r,i)=>i.includePriority-r.includePriority);return e.length>0?e:ni().filter(r=>r.moduleId===t)}const fe=s=>class extends pn(s){static finalize(){if(super.finalize(),this.elementStyles)return;const e=this.prototype._template;!e||mn(this)||Ac(this.getStylesForThis(),e)}static finalizeStyles(e){const r=this.getStylesForThis();return e?[...super.finalizeStyles(e),...r]:r}static getStylesForThis(){const e=Object.getPrototypeOf(this.prototype),r=(e?e.constructor.__themes:[])||[];this.__themes=[...r,...Pc(this.is)];const i=this.__themes.flatMap(o=>o.styles);return i.filter((o,n)=>n===i.lastIndexOf(o))}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Dc=(s,...t)=>{const e=document.createElement("style");e.id=s,e.textContent=t.map(r=>r.toString()).join(`
`).replace(":host","html"),document.head.insertAdjacentElement("afterbegin",e)},Fe=(s,...t)=>{Dc(`lumo-${s}`,t)};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Sc=g`
  :host {
    /* Base (background) */
    --lumo-base-color: #fff;

    /* Tint */
    --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);
    --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);
    --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);
    --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);
    --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);
    --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);
    --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);
    --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);
    --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);
    --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);
    --lumo-tint: #fff;

    /* Shade */
    --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);
    --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);
    --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);
    --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);
    --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);
    --lumo-shade-50pct: hsla(214, 45%, 20%, 0.52);
    --lumo-shade-60pct: hsla(214, 43%, 19%, 0.6);
    --lumo-shade-70pct: hsla(214, 42%, 18%, 0.69);
    --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);
    --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);
    --lumo-shade: hsl(214, 35%, 15%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-shade-5pct);
    --lumo-contrast-10pct: var(--lumo-shade-10pct);
    --lumo-contrast-20pct: var(--lumo-shade-20pct);
    --lumo-contrast-30pct: var(--lumo-shade-30pct);
    --lumo-contrast-40pct: var(--lumo-shade-40pct);
    --lumo-contrast-50pct: var(--lumo-shade-50pct);
    --lumo-contrast-60pct: var(--lumo-shade-60pct);
    --lumo-contrast-70pct: var(--lumo-shade-70pct);
    --lumo-contrast-80pct: var(--lumo-shade-80pct);
    --lumo-contrast-90pct: var(--lumo-shade-90pct);
    --lumo-contrast: var(--lumo-shade);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 100%, 48%);
    --lumo-primary-color-50pct: hsla(214, 100%, 49%, 0.76);
    --lumo-primary-color-10pct: hsla(214, 100%, 60%, 0.13);
    --lumo-primary-text-color: hsl(214, 100%, 43%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 85%, 48%);
    --lumo-error-color-50pct: hsla(3, 85%, 49%, 0.5);
    --lumo-error-color-10pct: hsla(3, 85%, 49%, 0.1);
    --lumo-error-text-color: hsl(3, 89%, 42%);
    --lumo-error-contrast-color: #fff;

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 72%, 31%, 0.5);
    --lumo-success-color-10pct: hsla(145, 72%, 31%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 25%);
    --lumo-success-contrast-color: #fff;

    /* Warning */
    --lumo-warning-color: hsl(48, 100%, 50%);
    --lumo-warning-color-10pct: hsla(48, 100%, 50%, 0.25);
    --lumo-warning-text-color: hsl(32, 100%, 30%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  /* forced-colors mode adjustments */
  @media (forced-colors: active) {
    html {
      --lumo-disabled-text-color: GrayText;
    }
  }
`;Fe("color-props",Sc);const gn=g`
  [theme~='dark'] {
    /* Base (background) */
    --lumo-base-color: hsl(214, 35%, 21%);

    /* Tint */
    --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);
    --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);
    --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);
    --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);
    --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);
    --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);
    --lumo-tint-60pct: hsla(214, 82%, 90%, 0.58);
    --lumo-tint-70pct: hsla(214, 87%, 92%, 0.69);
    --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);
    --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);
    --lumo-tint: hsl(214, 100%, 98%);

    /* Shade */
    --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);
    --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);
    --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);
    --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);
    --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);
    --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);
    --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);
    --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);
    --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);
    --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);
    --lumo-shade: hsl(214, 33%, 13%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-tint-5pct);
    --lumo-contrast-10pct: var(--lumo-tint-10pct);
    --lumo-contrast-20pct: var(--lumo-tint-20pct);
    --lumo-contrast-30pct: var(--lumo-tint-30pct);
    --lumo-contrast-40pct: var(--lumo-tint-40pct);
    --lumo-contrast-50pct: var(--lumo-tint-50pct);
    --lumo-contrast-60pct: var(--lumo-tint-60pct);
    --lumo-contrast-70pct: var(--lumo-tint-70pct);
    --lumo-contrast-80pct: var(--lumo-tint-80pct);
    --lumo-contrast-90pct: var(--lumo-tint-90pct);
    --lumo-contrast: var(--lumo-tint);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 90%, 48%);
    --lumo-primary-color-50pct: hsla(214, 90%, 70%, 0.69);
    --lumo-primary-color-10pct: hsla(214, 90%, 55%, 0.13);
    --lumo-primary-text-color: hsl(214, 90%, 77%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 79%, 49%);
    --lumo-error-color-50pct: hsla(3, 75%, 62%, 0.5);
    --lumo-error-color-10pct: hsla(3, 75%, 62%, 0.14);
    --lumo-error-text-color: hsl(3, 100%, 80%);

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 92%, 51%, 0.5);
    --lumo-success-color-10pct: hsla(145, 92%, 51%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 46%);

    /* Warning */
    --lumo-warning-color: hsl(43, 100%, 48%);
    --lumo-warning-color-10pct: hsla(40, 100%, 50%, 0.2);
    --lumo-warning-text-color: hsl(45, 100%, 60%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  html {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: light;
  }

  [theme~='dark'] {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: dark;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--lumo-header-text-color);
  }

  a:where(:any-link) {
    color: var(--lumo-primary-text-color);
  }

  a:not(:any-link) {
    color: var(--lumo-disabled-text-color);
  }

  blockquote {
    color: var(--lumo-secondary-text-color);
  }

  code,
  pre {
    background-color: var(--lumo-contrast-10pct);
    border-radius: var(--lumo-border-radius-m);
  }
`;S("",gn,{moduleId:"lumo-color"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const kc=g`
  :host {
    --lumo-size-xs: 1.625rem;
    --lumo-size-s: 1.875rem;
    --lumo-size-m: 2.25rem;
    --lumo-size-l: 2.75rem;
    --lumo-size-xl: 3.5rem;

    /* Icons */
    --lumo-icon-size-s: 1.25em;
    --lumo-icon-size-m: 1.5em;
    --lumo-icon-size-l: 2.25em;
    /* For backwards compatibility */
    --lumo-icon-size: var(--lumo-icon-size-m);
  }
`;Fe("sizing-props",kc);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const vn=g`
  :host {
    /* Square */
    --lumo-space-xs: 0.25rem;
    --lumo-space-s: 0.5rem;
    --lumo-space-m: 1rem;
    --lumo-space-l: 1.5rem;
    --lumo-space-xl: 2.5rem;

    /* Wide */
    --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);
    --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);
    --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);
    --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);
    --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);

    /* Tall */
    --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);
    --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);
    --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);
    --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);
    --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);
  }
`;Fe("spacing-props",vn);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ic=g`
  :host {
    /* Border radius */
    --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */
    --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */
    --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */

    /* Shadow */
    --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);
    --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);
    --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);
    --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);
    --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);

    /* Clickable element cursor */
    --lumo-clickable-cursor: default;
  }
`;g`
  html {
    --vaadin-checkbox-size: calc(var(--lumo-size-m) / 2);
    --vaadin-radio-button-size: calc(var(--lumo-size-m) / 2);
    --vaadin-input-field-border-radius: var(--lumo-border-radius-m);
  }
`;Fe("style-props",Ic);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Oc=g`
  :host {
    /* prettier-ignore */
    --lumo-font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    /* Font sizes */
    --lumo-font-size-xxs: 0.75rem;
    --lumo-font-size-xs: 0.8125rem;
    --lumo-font-size-s: 0.875rem;
    --lumo-font-size-m: 1rem;
    --lumo-font-size-l: 1.125rem;
    --lumo-font-size-xl: 1.375rem;
    --lumo-font-size-xxl: 1.75rem;
    --lumo-font-size-xxxl: 2.5rem;

    /* Line heights */
    --lumo-line-height-xs: 1.25;
    --lumo-line-height-s: 1.375;
    --lumo-line-height-m: 1.625;
  }
`,bn=g`
  body,
  :host {
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-m);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  small,
  [theme~='font-size-s'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
  }

  [theme~='font-size-xs'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
  }

  :where(h1, h2, h3, h4, h5, h6) {
    font-weight: 600;
    line-height: var(--lumo-line-height-xs);
    margin-block: 0;
  }

  :where(h1) {
    font-size: var(--lumo-font-size-xxxl);
  }

  :where(h2) {
    font-size: var(--lumo-font-size-xxl);
  }

  :where(h3) {
    font-size: var(--lumo-font-size-xl);
  }

  :where(h4) {
    font-size: var(--lumo-font-size-l);
  }

  :where(h5) {
    font-size: var(--lumo-font-size-m);
  }

  :where(h6) {
    font-size: var(--lumo-font-size-xs);
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  p,
  blockquote {
    margin-top: 0.5em;
    margin-bottom: 0.75em;
  }

  a {
    text-decoration: none;
  }

  a:where(:any-link):hover {
    text-decoration: underline;
  }

  hr {
    display: block;
    align-self: stretch;
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);
    background-color: var(--lumo-contrast-10pct);
  }

  blockquote {
    border-left: 2px solid var(--lumo-contrast-30pct);
  }

  b,
  strong {
    font-weight: 600;
  }

  /* RTL specific styles */
  blockquote[dir='rtl'] {
    border-left: none;
    border-right: 2px solid var(--lumo-contrast-30pct);
  }
`;S("",bn,{moduleId:"lumo-typography"});Fe("typography-props",Oc);const zc=g`
  :host {
    /* Sizing */
    --lumo-button-size: var(--lumo-size-m);
    min-width: calc(var(--lumo-button-size) * 2);
    height: var(--lumo-button-size);
    padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius-m) / 2);
    margin: var(--lumo-space-xs) 0;
    box-sizing: border-box;
    /* Style */
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 500;
    color: var(--_lumo-button-color, var(--lumo-primary-text-color));
    background-color: var(--_lumo-button-background-color, var(--lumo-contrast-5pct));
    border-radius: var(--lumo-border-radius-m);
    cursor: var(--lumo-clickable-cursor);
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    flex-shrink: 0;
  }

  /* Set only for the internal parts so we don't affect the host vertical alignment */
  [part='label'],
  [part='prefix'],
  [part='suffix'] {
    line-height: var(--lumo-line-height-xs);
  }

  [part='label'] {
    padding: calc(var(--lumo-button-size) / 6) 0;
  }

  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-button-size: var(--lumo-size-s);
  }

  :host([theme~='large']) {
    font-size: var(--lumo-font-size-l);
    --lumo-button-size: var(--lumo-size-l);
  }

  /* For interaction states */
  :host::before,
  :host::after {
    content: '';
    /* We rely on the host always being relative */
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: currentColor;
    border-radius: inherit;
    opacity: 0;
    pointer-events: none;
  }

  /* Hover */

  @media (any-hover: hover) {
    :host(:hover)::before {
      opacity: 0.02;
    }
  }

  /* Active */

  :host::after {
    transition: opacity 1.4s, transform 0.1s;
    filter: blur(8px);
  }

  :host([active])::before {
    opacity: 0.05;
    transition-duration: 0s;
  }

  :host([active])::after {
    opacity: 0.1;
    transition-duration: 0s, 0s;
    transform: scale(0);
  }

  /* Keyboard focus */

  :host([focus-ring]) {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  :host([theme~='primary'][focus-ring]) {
    box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
  }

  /* Types (primary, tertiary, tertiary-inline */

  :host([theme~='tertiary']),
  :host([theme~='tertiary-inline']) {
    background-color: transparent !important;
    min-width: 0;
  }

  :host([theme~='tertiary']) {
    padding: 0 calc(var(--lumo-button-size) / 6);
  }

  :host([theme~='tertiary-inline'])::before {
    display: none;
  }

  :host([theme~='tertiary-inline']) {
    margin: 0;
    height: auto;
    padding: 0;
    line-height: inherit;
    font-size: inherit;
  }

  :host([theme~='tertiary-inline']) [part='label'] {
    padding: 0;
    overflow: visible;
    line-height: inherit;
  }

  :host([theme~='primary']) {
    background-color: var(--_lumo-button-primary-background-color, var(--lumo-primary-color));
    color: var(--_lumo-button-primary-color, var(--lumo-primary-contrast-color));
    font-weight: 600;
    min-width: calc(var(--lumo-button-size) * 2.5);
  }

  :host([theme~='primary'])::before {
    background-color: black;
  }

  @media (any-hover: hover) {
    :host([theme~='primary']:hover)::before {
      opacity: 0.05;
    }
  }

  :host([theme~='primary'][active])::before {
    opacity: 0.1;
  }

  :host([theme~='primary'][active])::after {
    opacity: 0.2;
  }

  /* Colors (success, error, contrast) */

  :host([theme~='success']) {
    color: var(--lumo-success-text-color);
  }

  :host([theme~='success'][theme~='primary']) {
    background-color: var(--lumo-success-color);
    color: var(--lumo-success-contrast-color);
  }

  :host([theme~='error']) {
    color: var(--lumo-error-text-color);
  }

  :host([theme~='error'][theme~='primary']) {
    background-color: var(--lumo-error-color);
    color: var(--lumo-error-contrast-color);
  }

  :host([theme~='contrast']) {
    color: var(--lumo-contrast);
  }

  :host([theme~='contrast'][theme~='primary']) {
    background-color: var(--lumo-contrast);
    color: var(--lumo-base-color);
  }

  /* Disabled state. Keep selectors after other color variants. */

  :host([disabled]) {
    pointer-events: none;
    color: var(--lumo-disabled-text-color);
  }

  :host([theme~='primary'][disabled]) {
    background-color: var(--lumo-contrast-30pct);
    color: var(--lumo-base-color);
  }

  :host([theme~='primary'][disabled]) [part] {
    opacity: 0.7;
  }

  /* Icons */

  [part] ::slotted(vaadin-icon) {
    display: inline-block;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
  [part] ::slotted(vaadin-icon[icon^='vaadin:']) {
    padding: 0.25em;
    box-sizing: border-box !important;
  }

  [part='prefix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  [part='suffix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  /* Icon-only */

  :host([theme~='icon']:not([theme~='tertiary-inline'])) {
    min-width: var(--lumo-button-size);
    padding-left: calc(var(--lumo-button-size) / 4);
    padding-right: calc(var(--lumo-button-size) / 4);
  }

  :host([theme~='icon']) [part='prefix'],
  :host([theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='prefix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  :host([dir='rtl']) [part='suffix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  :host([dir='rtl'][theme~='icon']) [part='prefix'],
  :host([dir='rtl'][theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }
`;S("vaadin-button",zc,{moduleId:"lumo-button"});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(s,t){return s};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Mc=/(url\()([^)]*)(\))/g,Nc=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,Wt,Z;function Tt(s,t){if(s&&Nc.test(s)||s==="//")return s;if(Wt===void 0){Wt=!1;try{const e=new URL("b","http://a");e.pathname="c%20d",Wt=e.href==="http://a/c%20d"}catch{}}if(t||(t=document.baseURI||window.location.href),Wt)try{return new URL(s,t).href}catch{return s}return Z||(Z=document.implementation.createHTMLDocument("temp"),Z.base=Z.createElement("base"),Z.head.appendChild(Z.base),Z.anchor=Z.createElement("a"),Z.body.appendChild(Z.anchor)),Z.base.href=t,Z.anchor.href=s,Z.anchor.href||s}function Fi(s,t){return s.replace(Mc,function(e,r,i,o){return r+"'"+Tt(i.replace(/["']/g,""),t)+"'"+o})}function Li(s){return s.substring(0,s.lastIndexOf("/")+1)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const yn=!window.ShadyDOM||!window.ShadyDOM.inUse;!window.ShadyCSS||window.ShadyCSS.nativeCss;const Rc=yn&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const s=new CSSStyleSheet;s.replaceSync("");const t=document.createElement("div");return t.attachShadow({mode:"open"}),t.shadowRoot.adoptedStyleSheets=[s],t.shadowRoot.adoptedStyleSheets[0]===s}catch{return!1}})();let Fc=window.Polymer&&window.Polymer.rootPath||Li(document.baseURI||window.location.href),dr=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;window.Polymer&&window.Polymer.setPassiveTouchGestures;let cr=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,Lc=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,wn=window.Polymer&&window.Polymer.legacyOptimizations||!1,xn=window.Polymer&&window.Polymer.legacyWarnings||!1,$c=window.Polymer&&window.Polymer.syncInitialRender||!1,ai=window.Polymer&&window.Polymer.legacyUndefined||!1,Hc=window.Polymer&&window.Polymer.orderedComputed||!1,Fs=window.Polymer&&window.Polymer.removeNestedTemplates||!1,Bc=window.Polymer&&window.Polymer.fastDomIf||!1,Ls=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1;window.Polymer&&window.Polymer.legacyNoObservedAttributes;let Vc=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Uc=0;const B=function(s){let t=s.__mixinApplications;t||(t=new WeakMap,s.__mixinApplications=t);let e=Uc++;function r(i){let o=i.__mixinSet;if(o&&o[e])return i;let n=t,a=n.get(i);if(!a){a=s(i),n.set(i,a);let l=Object.create(a.__mixinSet||o||null);l[e]=!0,a.__mixinSet=l}return a}return r};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let $i={},Cn={};function $s(s,t){$i[s]=Cn[s.toLowerCase()]=t}function Hs(s){return $i[s]||Cn[s.toLowerCase()]}function Wc(s){s.querySelector("style")&&console.warn("dom-module %s has style outside template",s.id)}class It extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,e){if(t){let r=Hs(t);return r&&e?r.querySelector(e):r}return null}attributeChangedCallback(t,e,r,i){e!==r&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,e=Tt(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=Li(e)}return this.__assetpath}register(t){if(t=t||this.id,t){if(cr&&Hs(t)!==void 0)throw $s(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,$s(t,this),Wc(this)}}}It.prototype.modules=$i;customElements.define("dom-module",It);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Yc="link[rel=import][type~=css]",qc="include",Bs="shady-unscoped";function Tn(s){return It.import(s)}function Vs(s){let t=s.body?s.body:s;const e=Fi(t.textContent,s.baseURI),r=document.createElement("style");return r.textContent=e,r}function jc(s){const t=s.trim().split(/\s+/),e=[];for(let r=0;r<t.length;r++)e.push(...Gc(t[r]));return e}function Gc(s){const t=Tn(s);if(!t)return console.warn("Could not find style data in module named",s),[];if(t._styles===void 0){const e=[];e.push(...An(t));const r=t.querySelector("template");r&&e.push(...En(r,t.assetpath)),t._styles=e}return t._styles}function En(s,t){if(!s._styles){const e=[],r=s.content.querySelectorAll("style");for(let i=0;i<r.length;i++){let o=r[i],n=o.getAttribute(qc);n&&e.push(...jc(n).filter(function(a,l,d){return d.indexOf(a)===l})),t&&(o.textContent=Fi(o.textContent,t)),e.push(o)}s._styles=e}return s._styles}function Kc(s){let t=Tn(s);return t?An(t):[]}function An(s){const t=[],e=s.querySelectorAll(Yc);for(let r=0;r<e.length;r++){let i=e[r];if(i.import){const o=i.import,n=i.hasAttribute(Bs);if(n&&!o._unscopedStyle){const a=Vs(o);a.setAttribute(Bs,""),o._unscopedStyle=a}else o._style||(o._style=Vs(o));t.push(n?o._unscopedStyle:o._style)}}return t}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const M=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?s=>ShadyDOM.patch(s):s=>s;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function li(s){return s.indexOf(".")>=0}function Le(s){let t=s.indexOf(".");return t===-1?s:s.slice(0,t)}function Pn(s,t){return s.indexOf(t+".")===0}function Ot(s,t){return t.indexOf(s+".")===0}function zt(s,t,e){return t+e.slice(s.length)}function Xc(s,t){return s===t||Pn(s,t)||Ot(s,t)}function yt(s){if(Array.isArray(s)){let t=[];for(let e=0;e<s.length;e++){let r=s[e].toString().split(".");for(let i=0;i<r.length;i++)t.push(r[i])}return t.join(".")}else return s}function Dn(s){return Array.isArray(s)?yt(s).split("."):s.toString().split(".")}function X(s,t,e){let r=s,i=Dn(t);for(let o=0;o<i.length;o++){if(!r)return;let n=i[o];r=r[n]}return e&&(e.path=i.join(".")),r}function Us(s,t,e){let r=s,i=Dn(t),o=i[i.length-1];if(i.length>1){for(let n=0;n<i.length-1;n++){let a=i[n];if(r=r[a],!r)return}r[o]=e}else r[t]=e;return i.join(".")}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const hr={},Qc=/-[a-z]/g,Jc=/([A-Z])/g;function Sn(s){return hr[s]||(hr[s]=s.indexOf("-")<0?s:s.replace(Qc,t=>t[1].toUpperCase()))}function br(s){return hr[s]||(hr[s]=s.replace(Jc,"-$1").toLowerCase())}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Zc=0,kn=0,Ye=[],eh=0,di=!1,In=document.createTextNode("");new window.MutationObserver(th).observe(In,{characterData:!0});function th(){di=!1;const s=Ye.length;for(let t=0;t<s;t++){let e=Ye[t];if(e)try{e()}catch(r){setTimeout(()=>{throw r})}}Ye.splice(0,s),kn+=s}const rh={after(s){return{run(t){return window.setTimeout(t,s)},cancel(t){window.clearTimeout(t)}}},run(s,t){return window.setTimeout(s,t)},cancel(s){window.clearTimeout(s)}},Hi={run(s){return di||(di=!0,In.textContent=eh++),Ye.push(s),Zc++},cancel(s){const t=s-kn;if(t>=0){if(!Ye[t])throw new Error("invalid async handle: "+s);Ye[t]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ih=Hi,On=B(s=>{class t extends s{static createProperties(r){const i=this.prototype;for(let o in r)o in i||i._createPropertyAccessor(o)}static attributeNameForProperty(r){return r.toLowerCase()}static typeForProperty(r){}_createPropertyAccessor(r,i){this._addPropertyToAttributeMap(r),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[r]||(this.__dataHasAccessor[r]=!0,this._definePropertyAccessor(r,i))}_addPropertyToAttributeMap(r){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let i=this.__dataAttributes[r];return i||(i=this.constructor.attributeNameForProperty(r),this.__dataAttributes[i]=r),i}_definePropertyAccessor(r,i){Object.defineProperty(this,r,{get(){return this.__data[r]},set:i?function(){}:function(o){this._setPendingProperty(r,o,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let r in this.__dataHasAccessor)this.hasOwnProperty(r)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[r]=this[r],delete this[r])}_initializeInstanceProperties(r){Object.assign(this,r)}_setProperty(r,i){this._setPendingProperty(r,i)&&this._invalidateProperties()}_getProperty(r){return this.__data[r]}_setPendingProperty(r,i,o){let n=this.__data[r],a=this._shouldPropertyChange(r,i,n);return a&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(r in this.__dataOld)&&(this.__dataOld[r]=n),this.__data[r]=i,this.__dataPending[r]=i),a}_isPropertyPending(r){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(r))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,ih.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const r=this.__data,i=this.__dataPending,o=this.__dataOld;this._shouldPropertiesChange(r,i,o)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(r,i,o)),this.__dataCounter--}_shouldPropertiesChange(r,i,o){return!!i}_propertiesChanged(r,i,o){}_shouldPropertyChange(r,i,o){return o!==i&&(o===o||i===i)}attributeChangedCallback(r,i,o,n){i!==o&&this._attributeToProperty(r,o),super.attributeChangedCallback&&super.attributeChangedCallback(r,i,o,n)}_attributeToProperty(r,i,o){if(!this.__serializing){const n=this.__dataAttributes,a=n&&n[r]||r;this[a]=this._deserializeValue(i,o||this.constructor.typeForProperty(a))}}_propertyToAttribute(r,i,o){this.__serializing=!0,o=arguments.length<3?this[r]:o,this._valueToNodeAttribute(this,o,i||this.constructor.attributeNameForProperty(r)),this.__serializing=!1}_valueToNodeAttribute(r,i,o){const n=this._serializeValue(i);(o==="class"||o==="name"||o==="slot")&&(r=M(r)),n===void 0?r.removeAttribute(o):r.setAttribute(o,n===""&&window.trustedTypes?window.trustedTypes.emptyScript:n)}_serializeValue(r){switch(typeof r){case"boolean":return r?"":void 0;default:return r!=null?r.toString():void 0}}_deserializeValue(r,i){switch(i){case Boolean:return r!==null;case Number:return Number(r);default:return r}}}return t});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const zn={};let Yt=HTMLElement.prototype;for(;Yt;){let s=Object.getOwnPropertyNames(Yt);for(let t=0;t<s.length;t++)zn[s[t]]=!0;Yt=Object.getPrototypeOf(Yt)}const sh=(()=>window.trustedTypes?s=>trustedTypes.isHTML(s)||trustedTypes.isScript(s)||trustedTypes.isScriptURL(s):()=>!1)();function oh(s,t){if(!zn[t]){let e=s[t];e!==void 0&&(s.__data?s._setPendingProperty(t,e):(s.__dataProto?s.hasOwnProperty(JSCompiler_renameProperty("__dataProto",s))||(s.__dataProto=Object.create(s.__dataProto)):s.__dataProto={},s.__dataProto[t]=e))}}const nh=B(s=>{const t=On(s);class e extends t{static createPropertiesForAttributes(){let i=this.observedAttributes;for(let o=0;o<i.length;o++)this.prototype._createPropertyAccessor(Sn(i[o]))}static attributeNameForProperty(i){return br(i)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(i){for(let o in i)this._setProperty(o,i[o])}_ensureAttribute(i,o){const n=this;n.hasAttribute(i)||this._valueToNodeAttribute(n,o,i)}_serializeValue(i){switch(typeof i){case"object":if(i instanceof Date)return i.toString();if(i){if(sh(i))return i;try{return JSON.stringify(i)}catch{return""}}default:return super._serializeValue(i)}}_deserializeValue(i,o){let n;switch(o){case Object:try{n=JSON.parse(i)}catch{n=i}break;case Array:try{n=JSON.parse(i)}catch{n=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${i}`)}break;case Date:n=isNaN(i)?String(i):Number(i),n=new Date(n);break;default:n=super._deserializeValue(i,o);break}return n}_definePropertyAccessor(i,o){oh(this,i),super._definePropertyAccessor(i,o)}_hasAccessor(i){return this.__dataHasAccessor&&this.__dataHasAccessor[i]}_isPropertyPending(i){return!!(this.__dataPending&&i in this.__dataPending)}}return e});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ah={"dom-if":!0,"dom-repeat":!0};let Ws=!1,Ys=!1;function lh(){if(!Ws){Ws=!0;const s=document.createElement("textarea");s.placeholder="a",Ys=s.placeholder===s.textContent}return Ys}function dh(s){lh()&&s.localName==="textarea"&&s.placeholder&&s.placeholder===s.textContent&&(s.textContent=null)}const ch=(()=>{const s=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:t=>t});return(t,e,r)=>{const i=e.getAttribute(r);if(s&&r.startsWith("on-")){t.setAttribute(r,s.createScript(i,r));return}t.setAttribute(r,i)}})();function hh(s){let t=s.getAttribute("is");if(t&&ah[t]){let e=s;for(e.removeAttribute("is"),s=e.ownerDocument.createElement(t),e.parentNode.replaceChild(s,e),s.appendChild(e);e.attributes.length;){const{name:r}=e.attributes[0];ch(s,e,r),e.removeAttribute(r)}}return s}function Mn(s,t){let e=t.parentInfo&&Mn(s,t.parentInfo);if(e){for(let r=e.firstChild,i=0;r;r=r.nextSibling)if(t.parentIndex===i++)return r}else return s}function uh(s,t,e,r){r.id&&(t[r.id]=e)}function ph(s,t,e){if(e.events&&e.events.length)for(let r=0,i=e.events,o;r<i.length&&(o=i[r]);r++)s._addMethodEventListenerToNode(t,o.name,o.value,s)}function fh(s,t,e,r){e.templateInfo&&(t._templateInfo=e.templateInfo,t._parentTemplateInfo=r)}function mh(s,t,e){return s=s._methodHost||s,function(i){s[e]?s[e](i,i.detail):console.warn("listener method `"+e+"` not defined")}}const _h=B(s=>{class t extends s{static _parseTemplate(r,i){if(!r._templateInfo){let o=r._templateInfo={};o.nodeInfoList=[],o.nestedTemplate=!!i,o.stripWhiteSpace=i&&i.stripWhiteSpace||r.hasAttribute&&r.hasAttribute("strip-whitespace"),this._parseTemplateContent(r,o,{parent:null})}return r._templateInfo}static _parseTemplateContent(r,i,o){return this._parseTemplateNode(r.content,i,o)}static _parseTemplateNode(r,i,o){let n=!1,a=r;return a.localName=="template"&&!a.hasAttribute("preserve-content")?n=this._parseTemplateNestedTemplate(a,i,o)||n:a.localName==="slot"&&(i.hasInsertionPoint=!0),dh(a),a.firstChild&&this._parseTemplateChildNodes(a,i,o),a.hasAttributes&&a.hasAttributes()&&(n=this._parseTemplateNodeAttributes(a,i,o)||n),n||o.noted}static _parseTemplateChildNodes(r,i,o){if(!(r.localName==="script"||r.localName==="style"))for(let n=r.firstChild,a=0,l;n;n=l){if(n.localName=="template"&&(n=hh(n)),l=n.nextSibling,n.nodeType===Node.TEXT_NODE){let c=l;for(;c&&c.nodeType===Node.TEXT_NODE;)n.textContent+=c.textContent,l=c.nextSibling,r.removeChild(c),c=l;if(i.stripWhiteSpace&&!n.textContent.trim()){r.removeChild(n);continue}}let d={parentIndex:a,parentInfo:o};this._parseTemplateNode(n,i,d)&&(d.infoIndex=i.nodeInfoList.push(d)-1),n.parentNode&&a++}}static _parseTemplateNestedTemplate(r,i,o){let n=r,a=this._parseTemplate(n,i);return(a.content=n.content.ownerDocument.createDocumentFragment()).appendChild(n.content),o.templateInfo=a,!0}static _parseTemplateNodeAttributes(r,i,o){let n=!1,a=Array.from(r.attributes);for(let l=a.length-1,d;d=a[l];l--)n=this._parseTemplateNodeAttribute(r,i,o,d.name,d.value)||n;return n}static _parseTemplateNodeAttribute(r,i,o,n,a){return n.slice(0,3)==="on-"?(r.removeAttribute(n),o.events=o.events||[],o.events.push({name:n.slice(3),value:a}),!0):n==="id"?(o.id=a,!0):!1}static _contentForTemplate(r){let i=r._templateInfo;return i&&i.content||r.content}_stampTemplate(r,i){r&&!r.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(r),i=i||this.constructor._parseTemplate(r);let o=i.nodeInfoList,n=i.content||r.content,a=document.importNode(n,!0);a.__noInsertionPoint=!i.hasInsertionPoint;let l=a.nodeList=new Array(o.length);a.$={};for(let d=0,c=o.length,h;d<c&&(h=o[d]);d++){let u=l[d]=Mn(a,h);uh(this,a.$,u,h),fh(this,u,h,i),ph(this,u,h)}return a=a,a}_addMethodEventListenerToNode(r,i,o,n){n=n||r;let a=mh(n,i,o);return this._addEventListenerToNode(r,i,a),a}_addEventListenerToNode(r,i,o){r.addEventListener(i,o)}_removeEventListenerFromNode(r,i,o){r.removeEventListener(i,o)}}return t});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let Mt=0;const Nt=[],T={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},Nn="__computeInfo",gh=/[A-Z]/;function $r(s,t,e){let r=s[t];if(!r)r=s[t]={};else if(!s.hasOwnProperty(t)&&(r=s[t]=Object.create(s[t]),e))for(let i in r){let o=r[i],n=r[i]=Array(o.length);for(let a=0;a<o.length;a++)n[a]=o[a]}return r}function wt(s,t,e,r,i,o){if(t){let n=!1;const a=Mt++;for(let l in e){let d=i?Le(l):l,c=t[d];if(c)for(let h=0,u=c.length,p;h<u&&(p=c[h]);h++)(!p.info||p.info.lastRun!==a)&&(!i||Bi(l,p.trigger))&&(p.info&&(p.info.lastRun=a),p.fn(s,l,e,r,p.info,i,o),n=!0)}return n}return!1}function vh(s,t,e,r,i,o,n,a){let l=!1,d=n?Le(r):r,c=t[d];if(c)for(let h=0,u=c.length,p;h<u&&(p=c[h]);h++)(!p.info||p.info.lastRun!==e)&&(!n||Bi(r,p.trigger))&&(p.info&&(p.info.lastRun=e),p.fn(s,r,i,o,p.info,n,a),l=!0);return l}function Bi(s,t){if(t){let e=t.name;return e==s||!!(t.structured&&Pn(e,s))||!!(t.wildcard&&Ot(e,s))}else return!0}function qs(s,t,e,r,i){let o=typeof i.method=="string"?s[i.method]:i.method,n=i.property;o?o.call(s,s.__data[n],r[n]):i.dynamicFn||console.warn("observer method `"+i.method+"` not defined")}function bh(s,t,e,r,i){let o=s[T.NOTIFY],n,a=Mt++;for(let d in t)t[d]&&(o&&vh(s,o,a,d,e,r,i)||i&&yh(s,d,e))&&(n=!0);let l;n&&(l=s.__dataHost)&&l._invalidateProperties&&l._invalidateProperties()}function yh(s,t,e){let r=Le(t);if(r!==t){let i=br(r)+"-changed";return Rn(s,i,e[t],t),!0}return!1}function Rn(s,t,e,r){let i={value:e,queueProperty:!0};r&&(i.path=r),M(s).dispatchEvent(new CustomEvent(t,{detail:i}))}function wh(s,t,e,r,i,o){let a=(o?Le(t):t)!=t?t:null,l=a?X(s,a):s.__data[t];a&&l===void 0&&(l=e[t]),Rn(s,i.eventName,l,a)}function xh(s,t,e,r,i){let o,n=s.detail,a=n&&n.path;a?(r=zt(e,r,a),o=n&&n.value):o=s.currentTarget[e],o=i?!o:o,(!t[T.READ_ONLY]||!t[T.READ_ONLY][r])&&t._setPendingPropertyOrPath(r,o,!0,!!a)&&(!n||!n.queueProperty)&&t._invalidateProperties()}function Ch(s,t,e,r,i){let o=s.__data[t];dr&&(o=dr(o,i.attrName,"attribute",s)),s._propertyToAttribute(t,i.attrName,o)}function Th(s,t,e,r){let i=s[T.COMPUTE];if(i)if(Hc){Mt++;const o=Ah(s),n=[];for(let l in t)js(l,i,n,o,r);let a;for(;a=n.shift();)Fn(s,"",t,e,a)&&js(a.methodInfo,i,n,o,r);Object.assign(e,s.__dataOld),Object.assign(t,s.__dataPending),s.__dataPending=null}else{let o=t;for(;wt(s,i,o,e,r);)Object.assign(e,s.__dataOld),Object.assign(t,s.__dataPending),o=s.__dataPending,s.__dataPending=null}}const Eh=(s,t,e)=>{let r=0,i=t.length-1,o=-1;for(;r<=i;){const n=r+i>>1,a=e.get(t[n].methodInfo)-e.get(s.methodInfo);if(a<0)r=n+1;else if(a>0)i=n-1;else{o=n;break}}o<0&&(o=i+1),t.splice(o,0,s)},js=(s,t,e,r,i)=>{const o=i?Le(s):s,n=t[o];if(n)for(let a=0;a<n.length;a++){const l=n[a];l.info.lastRun!==Mt&&(!i||Bi(s,l.trigger))&&(l.info.lastRun=Mt,Eh(l.info,e,r))}};function Ah(s){let t=s.constructor.__orderedComputedDeps;if(!t){t=new Map;const e=s[T.COMPUTE];let{counts:r,ready:i,total:o}=Ph(s),n;for(;n=i.shift();){t.set(n,t.size);const a=e[n];a&&a.forEach(l=>{const d=l.info.methodInfo;--o,--r[d]===0&&i.push(d)})}o!==0&&console.warn(`Computed graph for ${s.localName} incomplete; circular?`),s.constructor.__orderedComputedDeps=t}return t}function Ph(s){const t=s[Nn],e={},r=s[T.COMPUTE],i=[];let o=0;for(let n in t){const a=t[n];o+=e[n]=a.args.filter(l=>!l.literal).length+(a.dynamicFn?1:0)}for(let n in r)t[n]||i.push(n);return{counts:e,ready:i,total:o}}function Fn(s,t,e,r,i){let o=ci(s,t,e,r,i);if(o===Nt)return!1;let n=i.methodInfo;return s.__dataHasAccessor&&s.__dataHasAccessor[n]?s._setPendingProperty(n,o,!0):(s[n]=o,!1)}function Dh(s,t,e){let r=s.__dataLinkedPaths;if(r){let i;for(let o in r){let n=r[o];Ot(o,t)?(i=zt(o,n,t),s._setPendingPropertyOrPath(i,e,!0,!0)):Ot(n,t)&&(i=zt(n,o,t),s._setPendingPropertyOrPath(i,e,!0,!0))}}}function Hr(s,t,e,r,i,o,n){e.bindings=e.bindings||[];let a={kind:r,target:i,parts:o,literal:n,isCompound:o.length!==1};if(e.bindings.push(a),zh(a)){let{event:d,negate:c}=a.parts[0];a.listenerEvent=d||br(i)+"-changed",a.listenerNegate=c}let l=t.nodeInfoList.length;for(let d=0;d<a.parts.length;d++){let c=a.parts[d];c.compoundIndex=d,Sh(s,t,a,c,l)}}function Sh(s,t,e,r,i){if(!r.literal)if(e.kind==="attribute"&&e.target[0]==="-")console.warn("Cannot set attribute "+e.target+' because "-" is not a valid attribute starting character');else{let o=r.dependencies,n={index:i,binding:e,part:r,evaluator:s};for(let a=0;a<o.length;a++){let l=o[a];typeof l=="string"&&(l=$n(l),l.wildcard=!0),s._addTemplatePropertyEffect(t,l.rootProperty,{fn:kh,info:n,trigger:l})}}}function kh(s,t,e,r,i,o,n){let a=n[i.index],l=i.binding,d=i.part;if(o&&d.source&&t.length>d.source.length&&l.kind=="property"&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let c=e[t];t=zt(d.source,l.target,t),a._setPendingPropertyOrPath(t,c,!1,!0)&&s._enqueueClient(a)}else{let c=i.evaluator._evaluateBinding(s,d,t,e,r,o);c!==Nt&&Ih(s,a,l,d,c)}}function Ih(s,t,e,r,i){if(i=Oh(t,i,e,r),dr&&(i=dr(i,e.target,e.kind,t)),e.kind=="attribute")s._valueToNodeAttribute(t,i,e.target);else{let o=e.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[o]?(!t[T.READ_ONLY]||!t[T.READ_ONLY][o])&&t._setPendingProperty(o,i)&&s._enqueueClient(t):s._setUnmanagedPropertyToNode(t,o,i)}}function Oh(s,t,e,r){if(e.isCompound){let i=s.__dataCompoundStorage[e.target];i[r.compoundIndex]=t,t=i.join("")}return e.kind!=="attribute"&&(e.target==="textContent"||e.target==="value"&&(s.localName==="input"||s.localName==="textarea"))&&(t=t??""),t}function zh(s){return!!s.target&&s.kind!="attribute"&&s.kind!="text"&&!s.isCompound&&s.parts[0].mode==="{"}function Mh(s,t){let{nodeList:e,nodeInfoList:r}=t;if(r.length)for(let i=0;i<r.length;i++){let o=r[i],n=e[i],a=o.bindings;if(a)for(let l=0;l<a.length;l++){let d=a[l];Nh(n,d),Rh(n,s,d)}n.__dataHost=s}}function Nh(s,t){if(t.isCompound){let e=s.__dataCompoundStorage||(s.__dataCompoundStorage={}),r=t.parts,i=new Array(r.length);for(let n=0;n<r.length;n++)i[n]=r[n].literal;let o=t.target;e[o]=i,t.literal&&t.kind=="property"&&(o==="className"&&(s=M(s)),s[o]=t.literal)}}function Rh(s,t,e){if(e.listenerEvent){let r=e.parts[0];s.addEventListener(e.listenerEvent,function(i){xh(i,t,e.target,r.source,r.negate)})}}function Gs(s,t,e,r,i,o){o=t.static||o&&(typeof o!="object"||o[t.methodName]);let n={methodName:t.methodName,args:t.args,methodInfo:i,dynamicFn:o};for(let a=0,l;a<t.args.length&&(l=t.args[a]);a++)l.literal||s._addPropertyEffect(l.rootProperty,e,{fn:r,info:n,trigger:l});return o&&s._addPropertyEffect(t.methodName,e,{fn:r,info:n}),n}function ci(s,t,e,r,i){let o=s._methodHost||s,n=o[i.methodName];if(n){let a=s._marshalArgs(i.args,t,e);return a===Nt?Nt:n.apply(o,a)}else i.dynamicFn||console.warn("method `"+i.methodName+"` not defined")}const Fh=[],Ln="(?:[a-zA-Z_$][\\w.:$\\-*]*)",Lh="(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)",$h="(?:'(?:[^'\\\\]|\\\\.)*')",Hh='(?:"(?:[^"\\\\]|\\\\.)*")',Bh="(?:"+$h+"|"+Hh+")",Ks="(?:("+Ln+"|"+Lh+"|"+Bh+")\\s*)",Vh="(?:"+Ks+"(?:,\\s*"+Ks+")*)",Uh="(?:\\(\\s*(?:"+Vh+"?)\\)\\s*)",Wh="("+Ln+"\\s*"+Uh+"?)",Yh="(\\[\\[|{{)\\s*",qh="(?:]]|}})",jh="(?:(!)\\s*)?",Gh=Yh+jh+Wh+qh,Xs=new RegExp(Gh,"g");function Qs(s){let t="";for(let e=0;e<s.length;e++){let r=s[e].literal;t+=r||""}return t}function Br(s){let t=s.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let r={methodName:t[1],static:!0,args:Fh};if(t[2].trim()){let i=t[2].replace(/\\,/g,"&comma;").split(",");return Kh(i,r)}else return r}return null}function Kh(s,t){return t.args=s.map(function(e){let r=$n(e);return r.literal||(t.static=!1),r},this),t}function $n(s){let t=s.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),e={name:t,value:"",literal:!1},r=t[0];switch(r==="-"&&(r=t[1]),r>="0"&&r<="9"&&(r="#"),r){case"'":case'"':e.value=t.slice(1,-1),e.literal=!0;break;case"#":e.value=Number(t),e.literal=!0;break}return e.literal||(e.rootProperty=Le(t),e.structured=li(t),e.structured&&(e.wildcard=t.slice(-2)==".*",e.wildcard&&(e.name=t.slice(0,-2)))),e}function Js(s,t,e){let r=X(s,e);return r===void 0&&(r=t[e]),r}function Hn(s,t,e,r){const i={indexSplices:r};ai&&!s._overrideLegacyUndefined&&(t.splices=i),s.notifyPath(e+".splices",i),s.notifyPath(e+".length",t.length),ai&&!s._overrideLegacyUndefined&&(i.indexSplices=[])}function dt(s,t,e,r,i,o){Hn(s,t,e,[{index:r,addedCount:i,removed:o,object:t,type:"splice"}])}function Xh(s){return s[0].toUpperCase()+s.substring(1)}const Vi=B(s=>{const t=_h(nh(s));class e extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return T}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(ct.length){let i=ct[ct.length-1];i._enqueueClient(this),this.__dataHost=i}}_initializeProtoProperties(i){this.__data=Object.create(i),this.__dataPending=Object.create(i),this.__dataOld={}}_initializeInstanceProperties(i){let o=this[T.READ_ONLY];for(let n in i)(!o||!o[n])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[n]=this.__dataPending[n]=i[n])}_addPropertyEffect(i,o,n){this._createPropertyAccessor(i,o==T.READ_ONLY);let a=$r(this,o,!0)[i];a||(a=this[o][i]=[]),a.push(n)}_removePropertyEffect(i,o,n){let a=$r(this,o,!0)[i],l=a.indexOf(n);l>=0&&a.splice(l,1)}_hasPropertyEffect(i,o){let n=this[o];return!!(n&&n[i])}_hasReadOnlyEffect(i){return this._hasPropertyEffect(i,T.READ_ONLY)}_hasNotifyEffect(i){return this._hasPropertyEffect(i,T.NOTIFY)}_hasReflectEffect(i){return this._hasPropertyEffect(i,T.REFLECT)}_hasComputedEffect(i){return this._hasPropertyEffect(i,T.COMPUTE)}_setPendingPropertyOrPath(i,o,n,a){if(a||Le(Array.isArray(i)?i[0]:i)!==i){if(!a){let l=X(this,i);if(i=Us(this,i,o),!i||!super._shouldPropertyChange(i,o,l))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(i,o,n))return Dh(this,i,o),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[i])return this._setPendingProperty(i,o,n);this[i]=o}return!1}_setUnmanagedPropertyToNode(i,o,n){(n!==i[o]||typeof n=="object")&&(o==="className"&&(i=M(i)),i[o]=n)}_setPendingProperty(i,o,n){let a=this.__dataHasPaths&&li(i),l=a?this.__dataTemp:this.__data;return this._shouldPropertyChange(i,o,l[i])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),i in this.__dataOld||(this.__dataOld[i]=this.__data[i]),a?this.__dataTemp[i]=o:this.__data[i]=o,this.__dataPending[i]=o,(a||this[T.NOTIFY]&&this[T.NOTIFY][i])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[i]=n),!0):!1}_setProperty(i,o){this._setPendingProperty(i,o,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(i){this.__dataPendingClients=this.__dataPendingClients||[],i!==this&&this.__dataPendingClients.push(i)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let i=this.__dataPendingClients;if(i){this.__dataPendingClients=null;for(let o=0;o<i.length;o++){let n=i[o];n.__dataEnabled?n.__dataPending&&n._flushProperties():n._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(i,o){for(let n in i)(o||!this[T.READ_ONLY]||!this[T.READ_ONLY][n])&&this._setPendingPropertyOrPath(n,i[n],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(i,o,n){let a=this.__dataHasPaths;this.__dataHasPaths=!1;let l;Th(this,o,n,a),l=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(o,n,a),this._flushClients(),wt(this,this[T.REFLECT],o,n,a),wt(this,this[T.OBSERVE],o,n,a),l&&bh(this,l,o,n,a),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(i,o,n){this[T.PROPAGATE]&&wt(this,this[T.PROPAGATE],i,o,n),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,i,o,n)}_runEffectsForTemplate(i,o,n,a){const l=(d,c)=>{wt(this,i.propertyEffects,d,n,c,i.nodeList);for(let h=i.firstChild;h;h=h.nextSibling)this._runEffectsForTemplate(h,d,n,c)};i.runEffects?i.runEffects(l,o,a):l(o,a)}linkPaths(i,o){i=yt(i),o=yt(o),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[i]=o}unlinkPaths(i){i=yt(i),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[i]}notifySplices(i,o){let n={path:""},a=X(this,i,n);Hn(this,a,n.path,o)}get(i,o){return X(o||this,i)}set(i,o,n){n?Us(n,i,o):(!this[T.READ_ONLY]||!this[T.READ_ONLY][i])&&this._setPendingPropertyOrPath(i,o,!0)&&this._invalidateProperties()}push(i,...o){let n={path:""},a=X(this,i,n),l=a.length,d=a.push(...o);return o.length&&dt(this,a,n.path,l,o.length,[]),d}pop(i){let o={path:""},n=X(this,i,o),a=!!n.length,l=n.pop();return a&&dt(this,n,o.path,n.length,0,[l]),l}splice(i,o,n,...a){let l={path:""},d=X(this,i,l);o<0?o=d.length-Math.floor(-o):o&&(o=Math.floor(o));let c;return arguments.length===2?c=d.splice(o):c=d.splice(o,n,...a),(a.length||c.length)&&dt(this,d,l.path,o,a.length,c),c}shift(i){let o={path:""},n=X(this,i,o),a=!!n.length,l=n.shift();return a&&dt(this,n,o.path,0,0,[l]),l}unshift(i,...o){let n={path:""},a=X(this,i,n),l=a.unshift(...o);return o.length&&dt(this,a,n.path,0,o.length,[]),l}notifyPath(i,o){let n;if(arguments.length==1){let a={path:""};o=X(this,i,a),n=a.path}else Array.isArray(i)?n=yt(i):n=i;this._setPendingPropertyOrPath(n,o,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(i,o){this._addPropertyEffect(i,T.READ_ONLY),o&&(this["_set"+Xh(i)]=function(n){this._setProperty(i,n)})}_createPropertyObserver(i,o,n){let a={property:i,method:o,dynamicFn:!!n};this._addPropertyEffect(i,T.OBSERVE,{fn:qs,info:a,trigger:{name:i}}),n&&this._addPropertyEffect(o,T.OBSERVE,{fn:qs,info:a,trigger:{name:o}})}_createMethodObserver(i,o){let n=Br(i);if(!n)throw new Error("Malformed observer expression '"+i+"'");Gs(this,n,T.OBSERVE,ci,null,o)}_createNotifyingProperty(i){this._addPropertyEffect(i,T.NOTIFY,{fn:wh,info:{eventName:br(i)+"-changed",property:i}})}_createReflectedProperty(i){let o=this.constructor.attributeNameForProperty(i);o[0]==="-"?console.warn("Property "+i+" cannot be reflected to attribute "+o+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(i,T.REFLECT,{fn:Ch,info:{attrName:o}})}_createComputedProperty(i,o,n){let a=Br(o);if(!a)throw new Error("Malformed computed expression '"+o+"'");const l=Gs(this,a,T.COMPUTE,Fn,i,n);$r(this,Nn)[i]=l}_marshalArgs(i,o,n){const a=this.__data,l=[];for(let d=0,c=i.length;d<c;d++){let{name:h,structured:u,wildcard:p,value:_,literal:v}=i[d];if(!v)if(p){const w=Ot(h,o),A=Js(a,n,w?o:h);_={path:w?o:h,value:A,base:w?X(a,h):A}}else _=u?Js(a,n,h):a[h];if(ai&&!this._overrideLegacyUndefined&&_===void 0&&i.length>1)return Nt;l[d]=_}return l}static addPropertyEffect(i,o,n){this.prototype._addPropertyEffect(i,o,n)}static createPropertyObserver(i,o,n){this.prototype._createPropertyObserver(i,o,n)}static createMethodObserver(i,o){this.prototype._createMethodObserver(i,o)}static createNotifyingProperty(i){this.prototype._createNotifyingProperty(i)}static createReadOnlyProperty(i,o){this.prototype._createReadOnlyProperty(i,o)}static createReflectedProperty(i){this.prototype._createReflectedProperty(i)}static createComputedProperty(i,o,n){this.prototype._createComputedProperty(i,o,n)}static bindTemplate(i){return this.prototype._bindTemplate(i)}_bindTemplate(i,o){let n=this.constructor._parseTemplate(i),a=this.__preBoundTemplateInfo==n;if(!a)for(let l in n.propertyEffects)this._createPropertyAccessor(l);if(o)if(n=Object.create(n),n.wasPreBound=a,!this.__templateInfo)this.__templateInfo=n;else{const l=i._parentTemplateInfo||this.__templateInfo,d=l.lastChild;n.parent=l,l.lastChild=n,n.previousSibling=d,d?d.nextSibling=n:l.firstChild=n}else this.__preBoundTemplateInfo=n;return n}static _addTemplatePropertyEffect(i,o,n){let a=i.hostProps=i.hostProps||{};a[o]=!0;let l=i.propertyEffects=i.propertyEffects||{};(l[o]=l[o]||[]).push(n)}_stampTemplate(i,o){o=o||this._bindTemplate(i,!0),ct.push(this);let n=super._stampTemplate(i,o);if(ct.pop(),o.nodeList=n.nodeList,!o.wasPreBound){let a=o.childNodes=[];for(let l=n.firstChild;l;l=l.nextSibling)a.push(l)}return n.templateInfo=o,Mh(this,o),this.__dataClientsReady&&(this._runEffectsForTemplate(o,this.__data,null,!1),this._flushClients()),n}_removeBoundDom(i){const o=i.templateInfo,{previousSibling:n,nextSibling:a,parent:l}=o;n?n.nextSibling=a:l&&(l.firstChild=a),a?a.previousSibling=n:l&&(l.lastChild=n),o.nextSibling=o.previousSibling=null;let d=o.childNodes;for(let c=0;c<d.length;c++){let h=d[c];M(M(h).parentNode).removeChild(h)}}static _parseTemplateNode(i,o,n){let a=t._parseTemplateNode.call(this,i,o,n);if(i.nodeType===Node.TEXT_NODE){let l=this._parseBindings(i.textContent,o);l&&(i.textContent=Qs(l)||" ",Hr(this,o,n,"text","textContent",l),a=!0)}return a}static _parseTemplateNodeAttribute(i,o,n,a,l){let d=this._parseBindings(l,o);if(d){let c=a,h="property";gh.test(a)?h="attribute":a[a.length-1]=="$"&&(a=a.slice(0,-1),h="attribute");let u=Qs(d);return u&&h=="attribute"&&(a=="class"&&i.hasAttribute("class")&&(u+=" "+i.getAttribute(a)),i.setAttribute(a,u)),h=="attribute"&&c=="disable-upgrade$"&&i.setAttribute(a,""),i.localName==="input"&&c==="value"&&i.setAttribute(c,""),i.removeAttribute(c),h==="property"&&(a=Sn(a)),Hr(this,o,n,h,a,d,u),!0}else return t._parseTemplateNodeAttribute.call(this,i,o,n,a,l)}static _parseTemplateNestedTemplate(i,o,n){let a=t._parseTemplateNestedTemplate.call(this,i,o,n);const l=i.parentNode,d=n.templateInfo,c=l.localName==="dom-if",h=l.localName==="dom-repeat";Fs&&(c||h)&&(l.removeChild(i),n=n.parentInfo,n.templateInfo=d,n.noted=!0,a=!1);let u=d.hostProps;if(Bc&&c)u&&(o.hostProps=Object.assign(o.hostProps||{},u),Fs||(n.parentInfo.noted=!0));else{let p="{";for(let _ in u){let v=[{mode:p,source:_,dependencies:[_],hostProp:!0}];Hr(this,o,n,"property","_host_"+_,v)}}return a}static _parseBindings(i,o){let n=[],a=0,l;for(;(l=Xs.exec(i))!==null;){l.index>a&&n.push({literal:i.slice(a,l.index)});let d=l[1][0],c=!!l[2],h=l[3].trim(),u=!1,p="",_=-1;d=="{"&&(_=h.indexOf("::"))>0&&(p=h.substring(_+2),h=h.substring(0,_),u=!0);let v=Br(h),w=[];if(v){let{args:A,methodName:P}=v;for(let Y=0;Y<A.length;Y++){let z=A[Y];z.literal||w.push(z)}let W=o.dynamicFns;(W&&W[P]||v.static)&&(w.push(P),v.dynamicFn=!0)}else w.push(h);n.push({source:h,mode:d,negate:c,customEvent:u,signature:v,dependencies:w,event:p}),a=Xs.lastIndex}if(a&&a<i.length){let d=i.substring(a);d&&n.push({literal:d})}return n.length?n:null}static _evaluateBinding(i,o,n,a,l,d){let c;return o.signature?c=ci(i,n,a,l,o.signature):n!=o.source?c=X(i,o.source):d&&li(n)?c=X(i,n):c=i.__data[n],o.negate&&(c=!c),c}}return e}),ct=[];/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*//**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Qh(s){const t={};for(let e in s){const r=s[e];t[e]=typeof r=="function"?{type:r}:r}return t}const Jh=B(s=>{const t=On(s);function e(o){const n=Object.getPrototypeOf(o);return n.prototype instanceof i?n:null}function r(o){if(!o.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",o))){let n=null;if(o.hasOwnProperty(JSCompiler_renameProperty("properties",o))){const a=o.properties;a&&(n=Qh(a))}o.__ownProperties=n}return o.__ownProperties}class i extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const n=this._properties;this.__observedAttributes=n?Object.keys(n).map(a=>this.prototype._addPropertyToAttributeMap(a)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const n=e(this);n&&n.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const n=r(this);n&&this.createProperties(n)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const n=e(this);this.__properties=Object.assign({},n&&n._properties,r(this))}return this.__properties}static typeForProperty(n){const a=this._properties[n];return a&&a.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return i});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const Zh="3.5.1",Zs=window.ShadyCSS&&window.ShadyCSS.cssBuild,eu=B(s=>{const t=Jh(Vi(s));function e(l){if(!l.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",l))){l.__propertyDefaults=null;let d=l._properties;for(let c in d){let h=d[c];"value"in h&&(l.__propertyDefaults=l.__propertyDefaults||{},l.__propertyDefaults[c]=h)}}return l.__propertyDefaults}function r(l){return l.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",l))||(l.__ownObservers=l.hasOwnProperty(JSCompiler_renameProperty("observers",l))?l.observers:null),l.__ownObservers}function i(l,d,c,h){c.computed&&(c.readOnly=!0),c.computed&&(l._hasReadOnlyEffect(d)?console.warn(`Cannot redefine computed property '${d}'.`):l._createComputedProperty(d,c.computed,h)),c.readOnly&&!l._hasReadOnlyEffect(d)?l._createReadOnlyProperty(d,!c.computed):c.readOnly===!1&&l._hasReadOnlyEffect(d)&&console.warn(`Cannot make readOnly property '${d}' non-readOnly.`),c.reflectToAttribute&&!l._hasReflectEffect(d)?l._createReflectedProperty(d):c.reflectToAttribute===!1&&l._hasReflectEffect(d)&&console.warn(`Cannot make reflected property '${d}' non-reflected.`),c.notify&&!l._hasNotifyEffect(d)?l._createNotifyingProperty(d):c.notify===!1&&l._hasNotifyEffect(d)&&console.warn(`Cannot make notify property '${d}' non-notify.`),c.observer&&l._createPropertyObserver(d,c.observer,h[c.observer]),l._addPropertyToAttributeMap(d)}function o(l,d,c,h){if(!Zs){const u=d.content.querySelectorAll("style"),p=En(d),_=Kc(c),v=d.content.firstElementChild;for(let A=0;A<_.length;A++){let P=_[A];P.textContent=l._processStyleText(P.textContent,h),d.content.insertBefore(P,v)}let w=0;for(let A=0;A<p.length;A++){let P=p[A],W=u[w];W!==P?(P=P.cloneNode(!0),W.parentNode.insertBefore(P,W)):w++,P.textContent=l._processStyleText(P.textContent,h)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(d,c),Vc&&Zs&&Rc){const u=d.content.querySelectorAll("style");if(u){let p="";Array.from(u).forEach(_=>{p+=_.textContent,_.parentNode.removeChild(_)}),l._styleSheet=new CSSStyleSheet,l._styleSheet.replaceSync(p)}}}function n(l){let d=null;if(l&&(!cr||Lc)&&(d=It.import(l,"template"),cr&&!d))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${l}`);return d}class a extends t{static get polymerElementVersion(){return Zh}static _finalizeClass(){t._finalizeClass.call(this);const d=r(this);d&&this.createObservers(d,this._properties),this._prepareTemplate()}static _prepareTemplate(){let d=this.template;d&&(typeof d=="string"?(console.error("template getter must return HTMLTemplateElement"),d=null):wn||(d=d.cloneNode(!0))),this.prototype._template=d}static createProperties(d){for(let c in d)i(this.prototype,c,d[c],d)}static createObservers(d,c){const h=this.prototype;for(let u=0;u<d.length;u++)h._createMethodObserver(d[u],c)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let d=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;typeof d=="function"&&(d=d()),this._template=d!==void 0?d:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&n(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(d){this._template=d}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const d=this.importMeta;if(d)this._importPath=Li(d.url);else{const c=It.import(this.is);this._importPath=c&&c.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=Fc,this.importPath=this.constructor.importPath;let d=e(this.constructor);if(d)for(let c in d){let h=d[c];if(this._canApplyPropertyDefault(c)){let u=typeof h.value=="function"?h.value.call(this):h.value;this._hasAccessor(c)?this._setPendingProperty(c,u,!0):this[c]=u}}}_canApplyPropertyDefault(d){return!this.hasOwnProperty(d)}static _processStyleText(d,c){return Fi(d,c)}static _finalizeTemplate(d){const c=this.prototype._template;if(c&&!c.__polymerFinalized){c.__polymerFinalized=!0;const h=this.importPath,u=h?Tt(h):"";o(this,c,d,u),this.prototype._bindTemplate(c)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(d){const c=M(this);if(c.attachShadow)return d?(c.shadowRoot||(c.attachShadow({mode:"open",shadyUpgradeFragment:d}),c.shadowRoot.appendChild(d),this.constructor._styleSheet&&(c.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),$c&&window.ShadyDOM&&window.ShadyDOM.flushInitial(c.shadowRoot),c.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(d){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,d)}resolveUrl(d,c){return!c&&this.importPath&&(c=Tt(this.importPath)),Tt(d,c)}static _parseTemplateContent(d,c,h){return c.dynamicFns=c.dynamicFns||this._properties,t._parseTemplateContent.call(this,d,c,h)}static _addTemplatePropertyEffect(d,c,h){return xn&&!(c in this._properties)&&!(h.info.part.signature&&h.info.part.signature.static)&&!h.info.part.hostProp&&!d.nestedTemplate&&console.warn(`Property '${c}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,d,c,h)}}return a});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const eo=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:s=>s});class Bn{constructor(t,e){Un(t,e);const r=e.reduce((i,o,n)=>i+Vn(o)+t[n+1],t[0]);this.value=r.toString()}toString(){return this.value}}function Vn(s){if(s instanceof Bn)return s.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${s}`)}function tu(s){if(s instanceof HTMLTemplateElement)return s.innerHTML;if(s instanceof Bn)return Vn(s);throw new Error(`non-template value passed to Polymer's html function: ${s}`)}const ee=function(t,...e){Un(t,e);const r=document.createElement("template");let i=e.reduce((o,n,a)=>o+tu(n)+t[a+1],t[0]);return eo&&(i=eo.createHTML(i)),r.innerHTML=i,r},Un=(s,t)=>{if(!Array.isArray(s)||!Array.isArray(s.raw)||t.length!==s.length-1)throw new TypeError("Invalid call to the html template tag")};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const K=eu(HTMLElement);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const $e=B(s=>class extends s{constructor(){super(),this.__controllers=new Set}connectedCallback(){super.connectedCallback(),this.__controllers.forEach(e=>{e.hostConnected&&e.hostConnected()})}disconnectedCallback(){super.disconnectedCallback(),this.__controllers.forEach(e=>{e.hostDisconnected&&e.hostDisconnected()})}addController(e){this.__controllers.add(e),this.$!==void 0&&this.isConnected&&e.hostConnected&&e.hostConnected()}removeController(e){this.__controllers.delete(e)}}),ru=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,rr=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function iu(){function s(){return!0}return Wn(s)}function su(){try{return ou()?!0:nu()?rr?!au():!iu():!1}catch{return!1}}function ou(){return localStorage.getItem("vaadin.developmentmode.force")}function nu(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function au(){return!!(rr&&Object.keys(rr).map(t=>rr[t]).filter(t=>t.productionMode).length>0)}function Wn(s,t){if(typeof s!="function")return;const e=ru.exec(s.toString());if(e)try{s=new Function(e[1])}catch(r){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",r)}return s(t)}window.Vaadin=window.Vaadin||{};const to=function(s,t){if(window.Vaadin.developmentMode)return Wn(s,t)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=su());function lu(){}const du=function(){if(typeof to=="function")return to(lu)};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */let ro=0,Yn=0;const qe=[];let hi=!1;function cu(){hi=!1;const s=qe.length;for(let t=0;t<s;t++){const e=qe[t];if(e)try{e()}catch(r){setTimeout(()=>{throw r})}}qe.splice(0,s),Yn+=s}const se={after(s){return{run(t){return window.setTimeout(t,s)},cancel(t){window.clearTimeout(t)}}},run(s,t){return window.setTimeout(s,t)},cancel(s){window.clearTimeout(s)}},Re={run(s){return window.requestAnimationFrame(s)},cancel(s){window.cancelAnimationFrame(s)}},qn={run(s){return window.requestIdleCallback?window.requestIdleCallback(s):window.setTimeout(s,16)},cancel(s){window.cancelIdleCallback?window.cancelIdleCallback(s):window.clearTimeout(s)}},pe={run(s){hi||(hi=!0,queueMicrotask(()=>cu())),qe.push(s);const t=ro;return ro+=1,t},cancel(s){const t=s-Yn;if(t>=0){if(!qe[t])throw new Error(`invalid async handle: ${s}`);qe[t]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Rt=new Set;let I=class ui{static debounce(t,e,r){return t instanceof ui?t._cancelAsync():t=new ui,t.setConfig(e,r),t}constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,Rt.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),Rt.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}};function jn(s){Rt.add(s)}function hu(){const s=!!Rt.size;return Rt.forEach(t=>{try{t.flush()}catch(e){setTimeout(()=>{throw e})}}),s}const xt=()=>{let s;do s=hu();while(s)};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const de=[];function pi(s,t,e=s.getAttribute("dir")){t?s.setAttribute("dir",t):e!=null&&s.removeAttribute("dir")}function fi(){return document.documentElement.getAttribute("dir")}function uu(){const s=fi();de.forEach(t=>{pi(t,s)})}const pu=new MutationObserver(uu);pu.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const $t=s=>class extends s{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0,converter:{fromAttribute:e=>e||"",toAttribute:e=>e===""?null:e}}}}get __isRTL(){return this.getAttribute("dir")==="rtl"}connectedCallback(){super.connectedCallback(),(!this.hasAttribute("dir")||this.__restoreSubscription)&&(this.__subscribe(),pi(this,fi(),null))}attributeChangedCallback(e,r,i){if(super.attributeChangedCallback(e,r,i),e!=="dir")return;const o=fi(),n=i===o&&de.indexOf(this)===-1,a=!i&&r&&de.indexOf(this)===-1;n||a?(this.__subscribe(),pi(this,o,i)):i!==o&&r===o&&this.__unsubscribe()}disconnectedCallback(){super.disconnectedCallback(),this.__restoreSubscription=de.includes(this),this.__unsubscribe()}_valueToNodeAttribute(e,r,i){i==="dir"&&r===""&&!e.hasAttribute("dir")||super._valueToNodeAttribute(e,r,i)}_attributeToProperty(e,r,i){e==="dir"&&!r?this.dir="":super._attributeToProperty(e,r,i)}__subscribe(){de.includes(this)||de.push(this)}__unsubscribe(){de.includes(this)&&de.splice(de.indexOf(this),1)}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */window.Vaadin||(window.Vaadin={});window.Vaadin.registrations||(window.Vaadin.registrations=[]);window.Vaadin.developmentModeCallback||(window.Vaadin.developmentModeCallback={});window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){du()};let Vr;const io=new Set,tt=s=>class extends $t(s){static get version(){return"24.1.3"}static finalize(){super.finalize();const{is:e}=this;e&&!io.has(e)&&(window.Vaadin.registrations.push(this),io.add(e),window.Vaadin.developmentModeCallback&&(Vr=I.debounce(Vr,qn,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),jn(Vr)))}constructor(){super(),document.doctype===null&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function ht(s,t,e){return{index:s,removed:t,addedCount:e}}const Gn=0,Kn=1,mi=2,_i=3;function fu(s,t,e,r,i,o){let n=o-i+1,a=e-t+1,l=new Array(n);for(let d=0;d<n;d++)l[d]=new Array(a),l[d][0]=d;for(let d=0;d<a;d++)l[0][d]=d;for(let d=1;d<n;d++)for(let c=1;c<a;c++)if(Ui(s[t+c-1],r[i+d-1]))l[d][c]=l[d-1][c-1];else{let h=l[d-1][c]+1,u=l[d][c-1]+1;l[d][c]=h<u?h:u}return l}function mu(s){let t=s.length-1,e=s[0].length-1,r=s[t][e],i=[];for(;t>0||e>0;){if(t==0){i.push(mi),e--;continue}if(e==0){i.push(_i),t--;continue}let o=s[t-1][e-1],n=s[t-1][e],a=s[t][e-1],l;n<a?l=n<o?n:o:l=a<o?a:o,l==o?(o==r?i.push(Gn):(i.push(Kn),r=o),t--,e--):l==n?(i.push(_i),t--,r=n):(i.push(mi),e--,r=a)}return i.reverse(),i}function _u(s,t,e,r,i,o){let n=0,a=0,l,d=Math.min(e-t,o-i);if(t==0&&i==0&&(n=gu(s,r,d)),e==s.length&&o==r.length&&(a=vu(s,r,d-n)),t+=n,i+=n,e-=a,o-=a,e-t==0&&o-i==0)return[];if(t==e){for(l=ht(t,[],0);i<o;)l.removed.push(r[i++]);return[l]}else if(i==o)return[ht(t,[],e-t)];let c=mu(fu(s,t,e,r,i,o));l=void 0;let h=[],u=t,p=i;for(let _=0;_<c.length;_++)switch(c[_]){case Gn:l&&(h.push(l),l=void 0),u++,p++;break;case Kn:l||(l=ht(u,[],0)),l.addedCount++,u++,l.removed.push(r[p]),p++;break;case mi:l||(l=ht(u,[],0)),l.addedCount++,u++;break;case _i:l||(l=ht(u,[],0)),l.removed.push(r[p]),p++;break}return l&&h.push(l),h}function gu(s,t,e){for(let r=0;r<e;r++)if(!Ui(s[r],t[r]))return r;return e}function vu(s,t,e){let r=s.length,i=t.length,o=0;for(;o<e&&Ui(s[--r],t[--i]);)o++;return o}function bu(s,t){return _u(s,0,s.length,t,0,t.length)}function Ui(s,t){return s===t}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Be(s){return s.localName==="slot"}let ir=class{static getFlattenedNodes(s){const t=M(s);return Be(s)?(s=s,t.assignedNodes({flatten:!0})):Array.from(t.childNodes).map(e=>Be(e)?(e=e,M(e).assignedNodes({flatten:!0})):[e]).reduce((e,r)=>e.concat(r),[])}constructor(s,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=s,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){Be(this._target)?this._listenSlots([this._target]):M(this._target).children&&(this._listenSlots(M(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,s=>{this._processMutations(s)}):(this._nativeChildrenObserver=new MutationObserver(s=>{this._processMutations(s)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){Be(this._target)?this._unlistenSlots([this._target]):M(this._target).children&&(this._unlistenSlots(M(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,Hi.run(()=>this.flush()))}_processMutations(s){this._processSlotMutations(s),this.flush()}_processSlotMutations(s){if(s)for(let t=0;t<s.length;t++){let e=s[t];e.addedNodes&&this._listenSlots(e.addedNodes),e.removedNodes&&this._unlistenSlots(e.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let s={target:this._target,addedNodes:[],removedNodes:[]},t=this.constructor.getFlattenedNodes(this._target),e=bu(t,this._effectiveNodes);for(let i=0,o;i<e.length&&(o=e[i]);i++)for(let n=0,a;n<o.removed.length&&(a=o.removed[n]);n++)s.removedNodes.push(a);for(let i=0,o;i<e.length&&(o=e[i]);i++)for(let n=o.index;n<o.index+o.addedCount;n++)s.addedNodes.push(t[n]);this._effectiveNodes=t;let r=!1;return(s.addedNodes.length||s.removedNodes.length)&&(r=!0,this.callback.call(this._target,s)),r}_listenSlots(s){for(let t=0;t<s.length;t++){let e=s[t];Be(e)&&e.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(s){for(let t=0;t<s.length;t++){let e=s[t];Be(e)&&e.removeEventListener("slotchange",this._boundSchedule)}}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function yu(s){const t=[];for(;s;){if(s.nodeType===Node.DOCUMENT_NODE){t.push(s);break}if(s.nodeType===Node.DOCUMENT_FRAGMENT_NODE){t.push(s),s=s.host;continue}if(s.assignedSlot){s=s.assignedSlot;continue}s=s.parentNode}return t}function Xn(s,t){return t?t.closest(s)||Xn(s,t.getRootNode().host):null}function Wi(s){return s?new Set(s.split(" ")):new Set}function yr(s){return s?[...s].join(" "):""}function Ht(s,t,e){const r=Wi(s.getAttribute(t));r.add(e),s.setAttribute(t,yr(r))}function wr(s,t,e){const r=Wi(s.getAttribute(t));if(r.delete(e),r.size===0){s.removeAttribute(t);return}s.setAttribute(t,yr(r))}function wu(s){return s.nodeType===Node.TEXT_NODE&&s.textContent.trim()===""}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let xu=0;function Yi(){return xu++}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ke extends EventTarget{static generateId(t,e){return`${e||"default"}-${t.localName}-${Yi()}`}constructor(t,e,r,i={}){super();const{initializer:o,multiple:n,observe:a,useUniqueId:l}=i;this.host=t,this.slotName=e,this.tagName=r,this.observe=typeof a=="boolean"?a:!0,this.multiple=typeof n=="boolean"?n:!1,this.slotInitializer=o,n&&(this.nodes=[]),l&&(this.defaultId=this.constructor.generateId(t,e))}hostConnected(){this.initialized||(this.multiple?this.initMultiple():this.initSingle(),this.observe&&this.observeSlot(),this.initialized=!0)}initSingle(){let t=this.getSlotChild();t?(this.node=t,this.initAddedNode(t)):(t=this.attachDefaultNode(),this.initNode(t))}initMultiple(){const t=this.getSlotChildren();if(t.length===0){const e=this.attachDefaultNode();this.nodes=[e],this.initNode(e)}else this.nodes=t,t.forEach(e=>{this.initAddedNode(e)})}attachDefaultNode(){const{host:t,slotName:e,tagName:r}=this;let i=this.defaultNode;return!i&&r&&(i=document.createElement(r),i instanceof Element&&(e!==""&&i.setAttribute("slot",e),this.node=i,this.defaultNode=i)),i&&t.appendChild(i),i}getSlotChildren(){const{slotName:t}=this;return Array.from(this.host.childNodes).filter(e=>e.nodeType===Node.ELEMENT_NODE&&e.slot===t||e.nodeType===Node.TEXT_NODE&&e.textContent.trim()&&t==="")}getSlotChild(){return this.getSlotChildren()[0]}initNode(t){const{slotInitializer:e}=this;e&&e(t,this.host)}initCustomNode(t){}teardownNode(t){}initAddedNode(t){t!==this.defaultNode&&(this.initCustomNode(t),this.initNode(t))}observeSlot(){const{slotName:t}=this,e=t===""?"slot:not([name])":`slot[name=${t}]`,r=this.host.shadowRoot.querySelector(e);this.__slotObserver=new ir(r,i=>{const o=this.multiple?this.nodes:[this.node],n=i.addedNodes.filter(a=>!wu(a)&&!o.includes(a));i.removedNodes.length&&i.removedNodes.forEach(a=>{this.teardownNode(a)}),n&&n.length>0&&(this.multiple?(this.defaultNode&&this.defaultNode.remove(),this.nodes=[...o,...n].filter(a=>a!==this.defaultNode),n.forEach(a=>{this.initAddedNode(a)})):(this.node&&this.node.remove(),this.node=n[0],this.initAddedNode(this.node)))})}}/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class xr extends ke{constructor(t){super(t,"tooltip"),this.setTarget(t)}initCustomNode(t){t.target=this.target,this.context!==void 0&&(t.context=this.context),this.manual!==void 0&&(t.manual=this.manual),this.opened!==void 0&&(t.opened=this.opened),this.position!==void 0&&(t._position=this.position),this.shouldShow!==void 0&&(t.shouldShow=this.shouldShow)}setContext(t){this.context=t;const e=this.node;e&&(e.context=t)}setManual(t){this.manual=t;const e=this.node;e&&(e.manual=t)}setOpened(t){this.opened=t;const e=this.node;e&&(e.opened=t)}setPosition(t){this.position=t;const e=this.node;e&&(e._position=t)}setShouldShow(t){this.shouldShow=t;const e=this.node;e&&(e.shouldShow=t)}setTarget(t){this.target=t;const e=this.node;e&&(e.target=t)}}/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Cu=g`
  :host {
    display: inline-block;
    position: relative;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }

  :host([hidden]) {
    display: none !important;
  }

  /* Aligns the button with form fields when placed on the same line.
  Note, to make it work, the form fields should have the same "::before" pseudo-element. */
  .vaadin-button-container::before {
    content: '\\2003';
    display: inline-block;
    width: 0;
    max-height: 100%;
  }

  .vaadin-button-container {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
    min-height: inherit;
    text-shadow: inherit;
  }

  [part='prefix'],
  [part='suffix'] {
    flex: none;
  }

  [part='label'] {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (forced-colors: active) {
    :host {
      outline: 1px solid;
      outline-offset: -1px;
    }

    :host([focused]) {
      outline-width: 2px;
    }

    :host([disabled]) {
      outline-color: GrayText;
    }
  }
`,Tu=s=>s`
  <div class="vaadin-button-container">
    <span part="prefix" aria-hidden="true">
      <slot name="prefix"></slot>
    </span>
    <span part="label">
      <slot></slot>
    </span>
    <span part="suffix" aria-hidden="true">
      <slot name="suffix"></slot>
    </span>
  </div>
  <slot name="tooltip"></slot>
`;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Eu=!1,Au=s=>s,qi=typeof document.head.style.touchAction=="string",gi="__polymerGestures",Ur="__polymerGesturesHandled",vi="__polymerGesturesTouchAction",so=25,oo=5,Pu=2,Du=["mousedown","mousemove","mouseup","click"],Su=[0,1,4,2],ku=function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch{return!1}}();function ji(s){return Du.indexOf(s)>-1}let Qn=!1;(function(){try{const s=Object.defineProperty({},"passive",{get(){Qn=!0}});window.addEventListener("test",null,s),window.removeEventListener("test",null,s)}catch{}})();function Iu(s){if(!(ji(s)||s==="touchend")&&qi&&Qn&&Eu)return{passive:!0}}const Ou=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/u),zu={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function Oe(s){const t=s.type;if(!ji(t))return!1;if(t==="mousemove"){let r=s.buttons===void 0?1:s.buttons;return s instanceof window.MouseEvent&&!ku&&(r=Su[s.which]||0),!!(r&1)}return(s.button===void 0?0:s.button)===0}function Mu(s){if(s.type==="click"){if(s.detail===0)return!0;const t=we(s);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;const e=t.getBoundingClientRect(),r=s.pageX,i=s.pageY;return!(r>=e.left&&r<=e.right&&i>=e.top&&i<=e.bottom)}return!1}const ce={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function Nu(s){let t="auto";const e=Zn(s);for(let r=0,i;r<e.length;r++)if(i=e[r],i[vi]){t=i[vi];break}return t}function Jn(s,t,e){s.movefn=t,s.upfn=e,document.addEventListener("mousemove",t),document.addEventListener("mouseup",e)}function je(s){document.removeEventListener("mousemove",s.movefn),document.removeEventListener("mouseup",s.upfn),s.movefn=null,s.upfn=null}const Zn=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:s=>s.composedPath&&s.composedPath()||[],Gi={},Ie=[];function Ru(s,t){let e=document.elementFromPoint(s,t),r=e;for(;r&&r.shadowRoot&&!window.ShadyDOM;){const i=r;if(r=r.shadowRoot.elementFromPoint(s,t),i===r)break;r&&(e=r)}return e}function we(s){const t=Zn(s);return t.length>0?t[0]:s.target}function Fu(s){const t=s.type,r=s.currentTarget[gi];if(!r)return;const i=r[t];if(!i)return;if(!s[Ur]&&(s[Ur]={},t.startsWith("touch"))){const n=s.changedTouches[0];if(t==="touchstart"&&s.touches.length===1&&(ce.touch.id=n.identifier),ce.touch.id!==n.identifier)return;qi||(t==="touchstart"||t==="touchmove")&&Lu(s)}const o=s[Ur];if(!o.skip){for(let n=0,a;n<Ie.length;n++)a=Ie[n],i[a.name]&&!o[a.name]&&a.flow&&a.flow.start.indexOf(s.type)>-1&&a.reset&&a.reset();for(let n=0,a;n<Ie.length;n++)a=Ie[n],i[a.name]&&!o[a.name]&&(o[a.name]=!0,a[t](s))}}function Lu(s){const t=s.changedTouches[0],e=s.type;if(e==="touchstart")ce.touch.x=t.clientX,ce.touch.y=t.clientY,ce.touch.scrollDecided=!1;else if(e==="touchmove"){if(ce.touch.scrollDecided)return;ce.touch.scrollDecided=!0;const r=Nu(s);let i=!1;const o=Math.abs(ce.touch.x-t.clientX),n=Math.abs(ce.touch.y-t.clientY);s.cancelable&&(r==="none"?i=!0:r==="pan-x"?i=n>o:r==="pan-y"&&(i=o>n)),i?s.preventDefault():ur("track")}}function ie(s,t,e){return Gi[t]?($u(s,t,e),!0):!1}function $u(s,t,e){const r=Gi[t],i=r.deps,o=r.name;let n=s[gi];n||(s[gi]=n={});for(let a=0,l,d;a<i.length;a++)l=i[a],!(Ou&&ji(l)&&l!=="click")&&(d=n[l],d||(n[l]=d={_count:0}),d._count===0&&s.addEventListener(l,Fu,Iu(l)),d[o]=(d[o]||0)+1,d._count=(d._count||0)+1);s.addEventListener(t,e),r.touchAction&&ea(s,r.touchAction)}function Ki(s){Ie.push(s),s.emits.forEach(t=>{Gi[t]=s})}function Hu(s){for(let t=0,e;t<Ie.length;t++){e=Ie[t];for(let r=0,i;r<e.emits.length;r++)if(i=e.emits[r],i===s)return e}return null}function ea(s,t){qi&&s instanceof HTMLElement&&pe.run(()=>{s.style.touchAction=t}),s[vi]=t}function Xi(s,t,e){const r=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(r.detail=e,Au(s).dispatchEvent(r),r.defaultPrevented){const i=e.preventer||e.sourceEvent;i&&i.preventDefault&&i.preventDefault()}}function ur(s){const t=Hu(s);t.info&&(t.info.prevent=!0)}Ki({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset(){je(this.info)},mousedown(s){if(!Oe(s))return;const t=we(s),e=this,r=o=>{Oe(o)||(ut("up",t,o),je(e.info))},i=o=>{Oe(o)&&ut("up",t,o),je(e.info)};Jn(this.info,r,i),ut("down",t,s)},touchstart(s){ut("down",we(s),s.changedTouches[0],s)},touchend(s){ut("up",we(s),s.changedTouches[0],s)}});function ut(s,t,e,r){t&&Xi(t,s,{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:r,prevent(i){return ur(i)}})}Ki({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove(s){this.moves.length>Pu&&this.moves.shift(),this.moves.push(s)},movefn:null,upfn:null,prevent:!1},reset(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,je(this.info)},mousedown(s){if(!Oe(s))return;const t=we(s),e=this,r=o=>{const n=o.clientX,a=o.clientY;no(e.info,n,a)&&(e.info.state=e.info.started?o.type==="mouseup"?"end":"track":"start",e.info.state==="start"&&ur("tap"),e.info.addMove({x:n,y:a}),Oe(o)||(e.info.state="end",je(e.info)),t&&Wr(e.info,t,o),e.info.started=!0)},i=o=>{e.info.started&&r(o),je(e.info)};Jn(this.info,r,i),this.info.x=s.clientX,this.info.y=s.clientY},touchstart(s){const t=s.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove(s){const t=we(s),e=s.changedTouches[0],r=e.clientX,i=e.clientY;no(this.info,r,i)&&(this.info.state==="start"&&ur("tap"),this.info.addMove({x:r,y:i}),Wr(this.info,t,e),this.info.state="track",this.info.started=!0)},touchend(s){const t=we(s),e=s.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:e.clientX,y:e.clientY}),Wr(this.info,t,e))}});function no(s,t,e){if(s.prevent)return!1;if(s.started)return!0;const r=Math.abs(s.x-t),i=Math.abs(s.y-e);return r>=oo||i>=oo}function Wr(s,t,e){if(!t)return;const r=s.moves[s.moves.length-2],i=s.moves[s.moves.length-1],o=i.x-s.x,n=i.y-s.y;let a,l=0;r&&(a=i.x-r.x,l=i.y-r.y),Xi(t,"track",{state:s.state,x:e.clientX,y:e.clientY,dx:o,dy:n,ddx:a,ddy:l,sourceEvent:e,hover(){return Ru(e.clientX,e.clientY)}})}Ki({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown(s){Oe(s)&&(this.info.x=s.clientX,this.info.y=s.clientY)},click(s){Oe(s)&&ao(this.info,s)},touchstart(s){const t=s.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend(s){ao(this.info,s.changedTouches[0],s)}});function ao(s,t,e){const r=Math.abs(t.clientX-s.x),i=Math.abs(t.clientY-s.y),o=we(e||t);!o||zu[o.localName]&&o.hasAttribute("disabled")||(isNaN(r)||isNaN(i)||r<=so&&i<=so||Mu(t))&&(s.prevent||Xi(o,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:e}))}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Qi=B(s=>class extends s{static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0}}}_disabledChanged(e){this._setAriaDisabled(e)}_setAriaDisabled(e){e?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}click(){this.disabled||super.click()}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Cr=B(s=>class extends s{ready(){super.ready(),this.addEventListener("keydown",e=>{this._onKeyDown(e)}),this.addEventListener("keyup",e=>{this._onKeyUp(e)})}_onKeyDown(e){switch(e.key){case"Enter":this._onEnter(e);break;case"Escape":this._onEscape(e);break}}_onKeyUp(e){}_onEnter(e){}_onEscape(e){}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ta=s=>class extends Qi(Cr(s)){get _activeKeys(){return[" "]}ready(){super.ready(),ie(this,"down",e=>{this._shouldSetActive(e)&&this._setActive(!0)}),ie(this,"up",()=>{this._setActive(!1)})}disconnectedCallback(){super.disconnectedCallback(),this._setActive(!1)}_shouldSetActive(e){return!this.disabled}_onKeyDown(e){super._onKeyDown(e),this._shouldSetActive(e)&&this._activeKeys.includes(e.key)&&(this._setActive(!0),document.addEventListener("keyup",r=>{this._activeKeys.includes(r.key)&&this._setActive(!1)},{once:!0}))}_setActive(e){this.toggleAttribute("active",e)}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let Ji=!1;window.addEventListener("keydown",()=>{Ji=!0},{capture:!0});window.addEventListener("mousedown",()=>{Ji=!1},{capture:!0});function bi(){let s=document.activeElement||document.body;for(;s.shadowRoot&&s.shadowRoot.activeElement;)s=s.shadowRoot.activeElement;return s}function Zi(){return Ji}function ra(s){const t=s.style;if(t.visibility==="hidden"||t.display==="none")return!0;const e=window.getComputedStyle(s);return e.visibility==="hidden"||e.display==="none"}function Bu(s,t){const e=Math.max(s.tabIndex,0),r=Math.max(t.tabIndex,0);return e===0||r===0?r>e:e>r}function Vu(s,t){const e=[];for(;s.length>0&&t.length>0;)Bu(s[0],t[0])?e.push(t.shift()):e.push(s.shift());return e.concat(s,t)}function yi(s){const t=s.length;if(t<2)return s;const e=Math.ceil(t/2),r=yi(s.slice(0,e)),i=yi(s.slice(e));return Vu(r,i)}function pr(s){return s.offsetParent===null&&s.clientWidth===0&&s.clientHeight===0?!0:ra(s)}function Uu(s){return s.matches('[tabindex="-1"]')?!1:s.matches("input, select, textarea, button, object")?s.matches(":not([disabled])"):s.matches("a[href], area[href], iframe, [tabindex], [contentEditable]")}function ia(s){return s.getRootNode().activeElement===s}function Wu(s){if(!Uu(s))return-1;const t=s.getAttribute("tabindex")||0;return Number(t)}function sa(s,t){if(s.nodeType!==Node.ELEMENT_NODE||ra(s))return!1;const e=s,r=Wu(e);let i=r>0;r>=0&&t.push(e);let o=[];return e.localName==="slot"?o=e.assignedNodes({flatten:!0}):o=(e.shadowRoot||e).children,[...o].forEach(n=>{i=sa(n,t)||i}),i}function Yu(s){const t=[];return sa(s,t)?yi(t):t}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const es=B(s=>class extends s{get _keyboardActive(){return Zi()}ready(){this.addEventListener("focusin",e=>{this._shouldSetFocus(e)&&this._setFocused(!0)}),this.addEventListener("focusout",e=>{this._shouldRemoveFocus(e)&&this._setFocused(!1)}),super.ready()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(e){this.toggleAttribute("focused",e),this.toggleAttribute("focus-ring",e&&this._keyboardActive)}_shouldSetFocus(e){return!0}_shouldRemoveFocus(e){return!0}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ts=s=>class extends Qi(s){static get properties(){return{tabindex:{type:Number,reflectToAttribute:!0,observer:"_tabindexChanged"},_lastTabIndex:{type:Number}}}_disabledChanged(e,r){super._disabledChanged(e,r),e?(this.tabindex!==void 0&&(this._lastTabIndex=this.tabindex),this.tabindex=-1):r&&(this.tabindex=this._lastTabIndex)}_tabindexChanged(e){this.disabled&&e!==-1&&(this._lastTabIndex=e,this.tabindex=-1)}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const qu=s=>class extends ta(ts(es(s))){static get properties(){return{tabindex:{type:Number,value:0,reflectToAttribute:!0}}}get _activeKeys(){return["Enter"," "]}ready(){super.ready(),this.hasAttribute("role")||this.setAttribute("role","button")}_onKeyDown(e){super._onKeyDown(e),this._activeKeys.includes(e.key)&&(e.preventDefault(),this.click())}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */S("vaadin-button",Cu,{moduleId:"vaadin-button-styles"});class lo extends qu(tt(fe($e(K)))){static get is(){return"vaadin-button"}static get template(){return Tu(ee)}ready(){super.ready(),this._tooltipController=new xr(this),this.addController(this._tooltipController)}}customElements.define(lo.is,lo);S("vaadin-input-container",g`
    :host {
      background-color: var(--lumo-contrast-10pct);
      padding: 0 calc(0.375em + var(--_input-container-radius) / 4 - 1px);
      font-weight: 500;
      line-height: 1;
      position: relative;
      cursor: text;
      box-sizing: border-box;
      border-radius:
        /* See https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius#syntax */
        var(--vaadin-input-field-top-start-radius, var(--_input-container-radius))
        var(--vaadin-input-field-top-end-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-end-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-start-radius, var(--_input-container-radius));
      /* Fallback */
      --_input-container-radius: var(--vaadin-input-field-border-radius, var(--lumo-border-radius-m));
      /* Default field border color */
      --_input-border-color: var(--vaadin-input-field-border-color, var(--lumo-contrast-50pct));
    }

    :host([dir='rtl']) {
      border-radius:
        /* Don't use logical props, see https://github.com/vaadin/vaadin-time-picker/issues/145 */
        var(--vaadin-input-field-top-end-radius, var(--_input-container-radius))
        var(--vaadin-input-field-top-start-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-start-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-end-radius, var(--_input-container-radius));
    }

    /* Used for hover and activation effects */
    :host::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: inherit;
      pointer-events: none;
      background-color: var(--lumo-contrast-50pct);
      opacity: 0;
      transition: transform 0.15s, opacity 0.2s;
      transform-origin: 100% 0;
    }

    ::slotted(:not([slot$='fix'])) {
      cursor: inherit;
      min-height: var(--lumo-text-field-size, var(--lumo-size-m));
      padding: 0 0.25em;
      --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
      -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);
      mask-image: var(--_lumo-text-field-overflow-mask-image);
    }

    /* Read-only */
    :host([readonly]) {
      color: var(--lumo-secondary-text-color);
      background-color: transparent;
      cursor: default;
    }

    :host([readonly])::after {
      background-color: transparent;
      opacity: 1;
      border: 1px dashed var(--lumo-contrast-30pct);
    }

    /* Disabled */
    :host([disabled]) {
      background-color: var(--lumo-contrast-5pct);
    }

    :host([disabled]) ::slotted(*) {
      color: var(--lumo-disabled-text-color);
      -webkit-text-fill-color: var(--lumo-disabled-text-color);
    }

    /* Invalid */
    :host([invalid]) {
      background-color: var(--lumo-error-color-10pct);
    }

    :host([invalid])::after {
      background-color: var(--lumo-error-color-50pct);
    }

    /* Slotted icons */
    ::slotted(vaadin-icon) {
      color: var(--lumo-contrast-60pct);
      width: var(--lumo-icon-size-m);
      height: var(--lumo-icon-size-m);
    }

    /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
    ::slotted(vaadin-icon[icon^='vaadin:']) {
      padding: 0.25em;
      box-sizing: border-box !important;
    }

    /* Text align */
    :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent, #000 1.25em);
    }

    @-moz-document url-prefix() {
      :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
        mask-image: var(--_lumo-text-field-overflow-mask-image);
      }
    }

    :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
      text-align: start;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center']) ::slotted(:not([slot$='fix'])) {
      text-align: center;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
      text-align: end;
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }

    /* RTL specific styles */
    :host([dir='rtl'])::after {
      transform-origin: 0% 0;
    }

    :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }
  `,{moduleId:"lumo-input-container"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class co extends fe($t(K)){static get is(){return"vaadin-input-container"}static get template(){return ee`
      <style>
        :host {
          display: flex;
          align-items: center;
          flex: 0 1 auto;
          border-radius:
            /* See https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius */
            var(--vaadin-input-field-top-start-radius, var(--__border-radius))
            var(--vaadin-input-field-top-end-radius, var(--__border-radius))
            var(--vaadin-input-field-bottom-end-radius, var(--__border-radius))
            var(--vaadin-input-field-bottom-start-radius, var(--__border-radius));
          --_border-radius: var(--vaadin-input-field-border-radius, 0px);
          --_input-border-width: var(--vaadin-input-field-border-width, 0);
          --_input-border-color: var(--vaadin-input-field-border-color, transparent);
          box-shadow: inset 0 0 0 var(--_input-border-width, 0) var(--_input-border-color);
        }

        :host([dir='rtl']) {
          border-radius:
            /* Don't use logical props, see https://github.com/vaadin/vaadin-time-picker/issues/145 */
            var(--vaadin-input-field-top-end-radius, var(--_border-radius))
            var(--vaadin-input-field-top-start-radius, var(--_border-radius))
            var(--vaadin-input-field-bottom-start-radius, var(--_border-radius))
            var(--vaadin-input-field-bottom-end-radius, var(--_border-radius));
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Reset the native input styles */
        ::slotted(input) {
          -webkit-appearance: none;
          -moz-appearance: none;
          flex: auto;
          white-space: nowrap;
          overflow: hidden;
          width: 100%;
          height: 100%;
          outline: none;
          margin: 0;
          padding: 0;
          border: 0;
          border-radius: 0;
          min-width: 0;
          font: inherit;
          line-height: normal;
          color: inherit;
          background-color: transparent;
          /* Disable default invalid style in Firefox */
          box-shadow: none;
        }

        ::slotted(*) {
          flex: none;
        }

        ::slotted(:is(input, textarea))::placeholder {
          /* Use ::slotted(input:placeholder-shown) in themes to style the placeholder. */
          /* because ::slotted(...)::placeholder does not work in Safari. */
          font: inherit;
          color: inherit;
          /* Override default opacity in Firefox */
          opacity: 1;
        }
      </style>
      <slot name="prefix"></slot>
      <slot></slot>
      <slot name="suffix"></slot>
    `}static get properties(){return{disabled:{type:Boolean,reflectToAttribute:!0},readonly:{type:Boolean,reflectToAttribute:!0},invalid:{type:Boolean,reflectToAttribute:!0}}}ready(){super.ready(),this.addEventListener("pointerdown",t=>{t.target===this&&t.preventDefault()}),this.addEventListener("click",t=>{t.target===this&&this.shadowRoot.querySelector("slot:not([name])").assignedNodes({flatten:!0}).forEach(e=>e.focus&&e.focus())})}}customElements.define(co.is,co);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Tr=g`
  :host {
    top: var(--lumo-space-m);
    right: var(--lumo-space-m);
    bottom: var(--lumo-space-m);
    left: var(--lumo-space-m);
    /* Workaround for Edge issue (only on Surface), where an overflowing vaadin-list-box inside vaadin-select-overlay makes the overlay transparent */
    /* stylelint-disable-next-line */
    outline: 0px solid transparent;
  }

  [part='overlay'] {
    background-color: var(--lumo-base-color);
    background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
    border-radius: var(--lumo-border-radius-m);
    box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-m);
    color: var(--lumo-body-text-color);
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 400;
    line-height: var(--lumo-line-height-m);
    letter-spacing: 0;
    text-transform: none;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  [part='content'] {
    padding: var(--lumo-space-xs);
  }

  [part='backdrop'] {
    background-color: var(--lumo-shade-20pct);
    animation: 0.2s lumo-overlay-backdrop-enter both;
    will-change: opacity;
  }

  @keyframes lumo-overlay-backdrop-enter {
    0% {
      opacity: 0;
    }
  }

  :host([closing]) [part='backdrop'] {
    animation: 0.2s lumo-overlay-backdrop-exit both;
  }

  @keyframes lumo-overlay-backdrop-exit {
    100% {
      opacity: 0;
    }
  }

  @keyframes lumo-overlay-dummy-animation {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 1;
    }
  }
`;S("",Tr,{moduleId:"lumo-overlay"});S("vaadin-overlay",Tr,{moduleId:"lumo-vaadin-overlay"});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let wi=!1,ju=[],oa=[];function Gu(){wi=!0,requestAnimationFrame(function(){wi=!1,Ku(ju),setTimeout(function(){Xu(oa)})})}function Ku(s){for(;s.length;)na(s.shift())}function Xu(s){for(let t=0,e=s.length;t<e;t++)na(s.shift())}function na(s){const t=s[0],e=s[1],r=s[2];try{e.apply(t,r)}catch(i){setTimeout(()=>{throw i})}}function rs(s,t,e){wi||Gu(),oa.push([s,t,e])}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Er=s=>s.test(navigator.userAgent),xi=s=>s.test(navigator.platform),Qu=s=>s.test(navigator.vendor),ho=Er(/Android/u),Ju=Er(/Chrome/u)&&Qu(/Google Inc/u),aa=Er(/Firefox/u),Zu=xi(/^iPad/u)||xi(/^Mac/u)&&navigator.maxTouchPoints>1,ep=xi(/^iPhone/u),fr=ep||Zu,la=Er(/^((?!chrome|android).)*safari/iu),is=(()=>{try{return document.createEvent("TouchEvent"),!0}catch{return!1}})();/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function ss(s){if(window.Vaadin&&window.Vaadin.templateRendererCallback){window.Vaadin.templateRendererCallback(s);return}s.querySelector("template")&&console.warn(`WARNING: <template> inside <${s.localName}> is no longer supported. Import @vaadin/polymer-legacy-adapter/template-renderer.js to enable compatibility.`)}/**
 * @license
 * Copyright (c) 2017 Anton Korzunov
 * SPDX-License-Identifier: MIT
 */let Ve=new WeakMap,qt=new WeakMap,jt={},Yr=0;const da=s=>s?s.host||da(s.parentNode):null,uo=s=>s&&s.nodeType===Node.ELEMENT_NODE,qr=(...s)=>{console.error(`Error: ${s.join(" ")}. Skip setting aria-hidden.`)},tp=(s,t)=>uo(s)?t.map(e=>{if(!uo(e))return qr(e,"is not a valid element"),null;if(s.contains(e))return e;const r=da(e);return r&&s.contains(r)?r:(qr(e,"is not contained inside",s),null)}).filter(e=>!!e):(qr(s,"is not a valid element"),[]),rp=(s,t,e,r)=>{const i=tp(t,Array.isArray(s)?s:[s]);jt[e]||(jt[e]=new WeakMap);const o=jt[e],n=[],a=new Set,l=new Set(i),d=h=>{!h||a.has(h)||(a.add(h),d(h.parentNode))};i.forEach(d);const c=h=>{!h||l.has(h)||[...h.children].forEach(u=>{if(!["template","script","style"].includes(u.localName))if(a.has(u))c(u);else{const p=u.getAttribute(r),_=p!==null&&p!=="false",v=(Ve.get(u)||0)+1,w=(o.get(u)||0)+1;Ve.set(u,v),o.set(u,w),n.push(u),v===1&&_&&qt.set(u,!0),w===1&&u.setAttribute(e,"true"),_||u.setAttribute(r,"true")}})};return c(t),a.clear(),Yr+=1,()=>{n.forEach(h=>{const u=Ve.get(h)-1,p=o.get(h)-1;Ve.set(h,u),o.set(h,p),u||(qt.has(h)?qt.delete(h):h.removeAttribute(r)),p||h.removeAttribute(e)}),Yr-=1,Yr||(Ve=new WeakMap,Ve=new WeakMap,qt=new WeakMap,jt={})}},ca=(s,t=document.body,e="data-aria-hidden")=>{const r=Array.from(Array.isArray(s)?s:[s]);return t&&r.push(...Array.from(t.querySelectorAll("[aria-live]"))),rp(r,t,e,"aria-hidden")};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ip{constructor(t,e){this.host=t,this.callback=typeof e=="function"?e:()=>t}showModal(){const t=this.callback();this.__showOthers=ca(t)}close(){this.__showOthers&&(this.__showOthers(),this.__showOthers=null)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class sp{saveFocus(t){this.focusNode=t||bi()}restoreFocus(){const t=this.focusNode;t&&(bi()===document.body?setTimeout(()=>t.focus()):t.focus(),this.focusNode=null)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const jr=[];class op{constructor(t){this.host=t,this.__trapNode=null,this.__onKeyDown=this.__onKeyDown.bind(this)}get __focusableElements(){return Yu(this.__trapNode)}get __focusedElementIndex(){const t=this.__focusableElements;return t.indexOf(t.filter(ia).pop())}hostConnected(){document.addEventListener("keydown",this.__onKeyDown)}hostDisconnected(){document.removeEventListener("keydown",this.__onKeyDown)}trapFocus(t){if(this.__trapNode=t,this.__focusableElements.length===0)throw this.__trapNode=null,new Error("The trap node should have at least one focusable descendant or be focusable itself.");jr.push(this),this.__focusedElementIndex===-1&&this.__focusableElements[0].focus()}releaseFocus(){this.__trapNode=null,jr.pop()}__onKeyDown(t){if(this.__trapNode&&this===Array.from(jr).pop()&&t.key==="Tab"){t.preventDefault();const e=t.shiftKey;this.__focusNextElement(e)}}__focusNextElement(t=!1){const e=this.__focusableElements,r=t?-1:1,i=this.__focusedElementIndex,o=(e.length+i+r)%e.length,n=e[o];n.focus(),n.localName==="input"&&n.select()}}/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const np=s=>class extends $e(s){static get properties(){return{focusTrap:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!1},restoreFocusNode:{type:HTMLElement}}}constructor(){super(),this.__ariaModalController=new ip(this),this.__focusTrapController=new op(this),this.__focusRestorationController=new sp}ready(){super.ready(),this.addController(this.__ariaModalController),this.addController(this.__focusTrapController),this.addController(this.__focusRestorationController)}_resetFocus(){this.focusTrap&&(this.__ariaModalController.close(),this.__focusTrapController.releaseFocus()),this.restoreFocusOnClose&&this._shouldRestoreFocus()&&this.__focusRestorationController.restoreFocus()}_saveFocus(){this.restoreFocusOnClose&&this.__focusRestorationController.saveFocus(this.restoreFocusNode)}_trapFocus(){this.focusTrap&&(this.__ariaModalController.showModal(),this.__focusTrapController.trapFocus(this.$.overlay))}_shouldRestoreFocus(){const e=bi();return e===document.body||this._deepContains(e)}_deepContains(e){if(this.contains(e))return!0;let r=e;const i=e.ownerDocument;for(;r&&r!==i&&r!==this;)r=r.parentNode||r.host;return r===this}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ae extends np(fe($t(K))){static get template(){return ee`
      <style>
        :host {
          z-index: 200;
          position: fixed;

          /* Despite of what the names say, <vaadin-overlay> is just a container
          for position/sizing/alignment. The actual overlay is the overlay part. */

          /* Default position constraints: the entire viewport. Note: themes can
          override this to introduce gaps between the overlay and the viewport. */
          top: 0;
          right: 0;
          bottom: var(--vaadin-overlay-viewport-bottom);
          left: 0;

          /* Use flexbox alignment for the overlay part. */
          display: flex;
          flex-direction: column; /* makes dropdowns sizing easier */
          /* Align to center by default. */
          align-items: center;
          justify-content: center;

          /* Allow centering when max-width/max-height applies. */
          margin: auto;

          /* The host is not clickable, only the overlay part is. */
          pointer-events: none;

          /* Remove tap highlight on touch devices. */
          -webkit-tap-highlight-color: transparent;

          /* CSS API for host */
          --vaadin-overlay-viewport-bottom: 0;
        }

        :host([hidden]),
        :host(:not([opened]):not([closing])) {
          display: none !important;
        }

        [part='overlay'] {
          -webkit-overflow-scrolling: touch;
          overflow: auto;
          pointer-events: auto;

          /* Prevent overflowing the host in MSIE 11 */
          max-width: 100%;
          box-sizing: border-box;

          -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */
        }

        [part='backdrop'] {
          z-index: -1;
          content: '';
          background: rgba(0, 0, 0, 0.5);
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          pointer-events: auto;
        }
      </style>

      <div id="backdrop" part="backdrop" hidden$="[[!withBackdrop]]"></div>
      <div part="overlay" id="overlay" tabindex="0">
        <div part="content" id="content">
          <slot></slot>
        </div>
      </div>
    `}static get is(){return"vaadin-overlay"}static get properties(){return{opened:{type:Boolean,notify:!0,observer:"_openedChanged",reflectToAttribute:!0},owner:Element,renderer:Function,withBackdrop:{type:Boolean,value:!1,reflectToAttribute:!0},model:Object,modeless:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_modelessChanged"},hidden:{type:Boolean,reflectToAttribute:!0,observer:"_hiddenChanged"},_mouseDownInside:{type:Boolean},_mouseUpInside:{type:Boolean},_oldOwner:Element,_oldModel:Object,_oldRenderer:Object,_oldOpened:Boolean}}static get observers(){return["_rendererOrDataChanged(renderer, owner, model, opened)"]}static get __attachedInstances(){return Array.from(document.body.children).filter(t=>t instanceof ae&&!t.hasAttribute("closing")).sort((t,e)=>t.__zIndex-e.__zIndex||0)}constructor(){super(),this._boundMouseDownListener=this._mouseDownListener.bind(this),this._boundMouseUpListener=this._mouseUpListener.bind(this),this._boundOutsideClickListener=this._outsideClickListener.bind(this),this._boundKeydownListener=this._keydownListener.bind(this),fr&&(this._boundIosResizeListener=()=>this._detectIosNavbar())}get _last(){return this===ae.__attachedInstances.pop()}ready(){super.ready(),this.addEventListener("click",()=>{}),this.$.backdrop.addEventListener("click",()=>{}),ss(this)}_detectIosNavbar(){if(!this.opened)return;const t=window.innerHeight,r=window.innerWidth>t,i=document.documentElement.clientHeight;r&&i>t?this.style.setProperty("--vaadin-overlay-viewport-bottom",`${i-t}px`):this.style.setProperty("--vaadin-overlay-viewport-bottom","0")}close(t){const e=new CustomEvent("vaadin-overlay-close",{bubbles:!0,cancelable:!0,detail:{sourceEvent:t}});this.dispatchEvent(e),e.defaultPrevented||(this.opened=!1)}connectedCallback(){super.connectedCallback(),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))}disconnectedCallback(){super.disconnectedCallback(),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener)}requestContentUpdate(){this.renderer&&this.renderer.call(this.owner,this,this.owner,this.model)}_mouseDownListener(t){this._mouseDownInside=t.composedPath().indexOf(this.$.overlay)>=0}_mouseUpListener(t){this._mouseUpInside=t.composedPath().indexOf(this.$.overlay)>=0}_shouldCloseOnOutsideClick(t){return this._last}_outsideClickListener(t){if(t.composedPath().includes(this.$.overlay)||this._mouseDownInside||this._mouseUpInside){this._mouseDownInside=!1,this._mouseUpInside=!1;return}if(!this._shouldCloseOnOutsideClick(t))return;const e=new CustomEvent("vaadin-overlay-outside-click",{bubbles:!0,cancelable:!0,detail:{sourceEvent:t}});this.dispatchEvent(e),this.opened&&!e.defaultPrevented&&this.close(t)}_keydownListener(t){if(this._last&&!(this.modeless&&!t.composedPath().includes(this.$.overlay))&&t.key==="Escape"){const e=new CustomEvent("vaadin-overlay-escape-press",{bubbles:!0,cancelable:!0,detail:{sourceEvent:t}});this.dispatchEvent(e),this.opened&&!e.defaultPrevented&&this.close(t)}}_openedChanged(t,e){t?(this._saveFocus(),this._animatedOpening(),rs(this,()=>{this._trapFocus();const r=new CustomEvent("vaadin-overlay-open",{bubbles:!0});this.dispatchEvent(r)}),document.addEventListener("keydown",this._boundKeydownListener),this.modeless||this._addGlobalListeners()):e&&(this._resetFocus(),this._animatedClosing(),document.removeEventListener("keydown",this._boundKeydownListener),this.modeless||this._removeGlobalListeners())}_hiddenChanged(t){t&&this.hasAttribute("closing")&&this._flushAnimation("closing")}_shouldAnimate(){const t=getComputedStyle(this),e=t.getPropertyValue("animation-name");return!(t.getPropertyValue("display")==="none")&&e&&e!=="none"}_enqueueAnimation(t,e){const r=`__${t}Handler`,i=o=>{o&&o.target!==this||(e(),this.removeEventListener("animationend",i),delete this[r])};this[r]=i,this.addEventListener("animationend",i)}_flushAnimation(t){const e=`__${t}Handler`;typeof this[e]=="function"&&this[e]()}_animatedOpening(){this.parentNode===document.body&&this.hasAttribute("closing")&&this._flushAnimation("closing"),this._attachOverlay(),this.modeless||this._enterModalState(),this.setAttribute("opening",""),this._shouldAnimate()?this._enqueueAnimation("opening",()=>{this._finishOpening()}):this._finishOpening()}_attachOverlay(){this._placeholder=document.createComment("vaadin-overlay-placeholder"),this.parentNode.insertBefore(this._placeholder,this),document.body.appendChild(this),this.bringToFront()}_finishOpening(){this.removeAttribute("opening")}_finishClosing(){this._detachOverlay(),this.$.overlay.style.removeProperty("pointer-events"),this.removeAttribute("closing"),this.dispatchEvent(new CustomEvent("vaadin-overlay-closed"))}_animatedClosing(){this.hasAttribute("opening")&&this._flushAnimation("opening"),this._placeholder&&(this._exitModalState(),this.setAttribute("closing",""),this.dispatchEvent(new CustomEvent("vaadin-overlay-closing")),this._shouldAnimate()?this._enqueueAnimation("closing",()=>{this._finishClosing()}):this._finishClosing())}_detachOverlay(){this._placeholder.parentNode.insertBefore(this,this._placeholder),this._placeholder.parentNode.removeChild(this._placeholder)}_modelessChanged(t){t?(this._removeGlobalListeners(),this._exitModalState()):this.opened&&(this._addGlobalListeners(),this._enterModalState())}_addGlobalListeners(){document.addEventListener("mousedown",this._boundMouseDownListener),document.addEventListener("mouseup",this._boundMouseUpListener),document.documentElement.addEventListener("click",this._boundOutsideClickListener,!0)}_enterModalState(){document.body.style.pointerEvents!=="none"&&(this._previousDocumentPointerEvents=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),ae.__attachedInstances.forEach(t=>{t!==this&&(t.shadowRoot.querySelector('[part="overlay"]').style.pointerEvents="none")})}_removeGlobalListeners(){document.removeEventListener("mousedown",this._boundMouseDownListener),document.removeEventListener("mouseup",this._boundMouseUpListener),document.documentElement.removeEventListener("click",this._boundOutsideClickListener,!0)}_exitModalState(){this._previousDocumentPointerEvents!==void 0&&(document.body.style.pointerEvents=this._previousDocumentPointerEvents,delete this._previousDocumentPointerEvents);const t=ae.__attachedInstances;let e;for(;(e=t.pop())&&!(e!==this&&(e.shadowRoot.querySelector('[part="overlay"]').style.removeProperty("pointer-events"),!e.modeless)););}_rendererOrDataChanged(t,e,r,i){const o=this._oldOwner!==e||this._oldModel!==r;this._oldModel=r,this._oldOwner=e;const n=this._oldRenderer!==t;this._oldRenderer=t;const a=this._oldOpened!==i;this._oldOpened=i,n&&(this.innerHTML="",delete this._$litPart$),i&&t&&(n||a||o)&&this.requestContentUpdate()}bringToFront(){let t="";const e=ae.__attachedInstances.filter(r=>r!==this).pop();e&&(t=e.__zIndex+1),this.style.zIndex=t,this.__zIndex=t||parseFloat(getComputedStyle(this).zIndex)}}customElements.define(ae.is,ae);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ha=g`
  :host([opening]),
  :host([closing]) {
    animation: 0.14s lumo-overlay-dummy-animation;
  }

  [part='overlay'] {
    will-change: opacity, transform;
  }

  :host([opening]) [part='overlay'] {
    animation: 0.1s lumo-menu-overlay-enter ease-out both;
  }

  @keyframes lumo-menu-overlay-enter {
    0% {
      opacity: 0;
      transform: translateY(-4px);
    }
  }

  :host([closing]) [part='overlay'] {
    animation: 0.1s lumo-menu-overlay-exit both;
  }

  @keyframes lumo-menu-overlay-exit {
    100% {
      opacity: 0;
    }
  }
`;S("",ha,{moduleId:"lumo-menu-overlay-core"});const ap=g`
  /* Small viewport (bottom sheet) styles */
  /* Use direct media queries instead of the state attributes ([phone] and [fullscreen]) provided by the elements */
  @media (max-width: 420px), (max-height: 420px) {
    :host {
      top: 0 !important;
      right: 0 !important;
      bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;
      left: 0 !important;
      align-items: stretch !important;
      justify-content: flex-end !important;
    }

    [part='overlay'] {
      max-height: 50vh;
      width: 100vw;
      border-radius: 0;
      box-shadow: var(--lumo-box-shadow-xl);
    }

    /* The content part scrolls instead of the overlay part, because of the gradient fade-out */
    [part='content'] {
      padding: 30px var(--lumo-space-m);
      max-height: inherit;
      box-sizing: border-box;
      -webkit-overflow-scrolling: touch;
      overflow: auto;
      -webkit-mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
      mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
    }

    [part='backdrop'] {
      display: block;
    }

    /* Animations */

    :host([opening]) [part='overlay'] {
      animation: 0.2s lumo-mobile-menu-overlay-enter cubic-bezier(0.215, 0.61, 0.355, 1) both;
    }

    :host([closing]),
    :host([closing]) [part='backdrop'] {
      animation-delay: 0.14s;
    }

    :host([closing]) [part='overlay'] {
      animation: 0.14s 0.14s lumo-mobile-menu-overlay-exit cubic-bezier(0.55, 0.055, 0.675, 0.19) both;
    }
  }

  @keyframes lumo-mobile-menu-overlay-enter {
    0% {
      transform: translateY(150%);
    }
  }

  @keyframes lumo-mobile-menu-overlay-exit {
    100% {
      transform: translateY(150%);
    }
  }
`,ua=[Tr,ha,ap];S("",ua,{moduleId:"lumo-menu-overlay"});const lp=g`
  [part='overlay'] {
    /*
  Width:
      date cell widths
    + month calendar side padding
    + year scroller width
  */
    /* prettier-ignore */
    width:
    calc(
        var(--lumo-size-m) * 7
      + var(--lumo-space-xs) * 2
      + 57px
    );
    height: 100%;
    max-height: calc(var(--lumo-size-m) * 14);
    overflow: hidden;
    -webkit-tap-highlight-color: transparent;
  }

  [part='overlay'] {
    flex-direction: column;
  }

  [part='content'] {
    padding: 0;
    height: 100%;
    overflow: hidden;
    -webkit-mask-image: none;
    mask-image: none;
  }

  :host([top-aligned]) [part~='overlay'] {
    margin-top: var(--lumo-space-xs);
  }

  :host([bottom-aligned]) [part~='overlay'] {
    margin-bottom: var(--lumo-space-xs);
  }

  @media (max-width: 420px), (max-height: 420px) {
    [part='overlay'] {
      width: 100vw;
      height: 70vh;
      max-height: 70vh;
    }
  }
`;S("vaadin-date-picker-overlay",[ua,lp],{moduleId:"lumo-date-picker-overlay"});S("vaadin-date-picker-year",g`
    :host([current]) [part='year-number'] {
      color: var(--lumo-primary-text-color);
    }

    :host(:not([current])) [part='year-number'],
    [part='year-separator'] {
      opacity: var(--_lumo-date-picker-year-opacity, 0.7);
      transition: 0.2s opacity;
    }

    [part='year-number'],
    [part='year-separator'] {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50%;
      transform: translateY(-50%);
    }

    [part='year-separator']::after {
      color: var(--lumo-disabled-text-color);
      content: '\\2022';
    }
  `,{moduleId:"lumo-date-picker-year"});S("vaadin-date-picker-overlay-content",g`
    :host {
      position: relative;
      /* Background for the year scroller, placed here as we are using a mask image on the actual years part */
      background-image: linear-gradient(var(--lumo-shade-5pct), var(--lumo-shade-5pct));
      background-size: 57px 100%;
      background-position: top right;
      background-repeat: no-repeat;
      cursor: default;
    }

    ::slotted([slot='months']) {
      /* Month calendar height:
              header height + margin-bottom
            + weekdays height + margin-bottom
            + date cell heights
            + small margin between month calendars
        */
      /* prettier-ignore */
      --vaadin-infinite-scroller-item-height:
          calc(
              var(--lumo-font-size-l) + var(--lumo-space-m)
            + var(--lumo-font-size-xs) + var(--lumo-space-s)
            + var(--lumo-size-m) * 6
            + var(--lumo-space-s)
          );
      --vaadin-infinite-scroller-buffer-offset: 10%;
      -webkit-mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);
      mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);
      position: relative;
      margin-right: 57px;
    }

    ::slotted([slot='years']) {
      /* TODO get rid of fixed magic number */
      --vaadin-infinite-scroller-buffer-width: 97px;
      width: 57px;
      height: auto;
      top: 0;
      bottom: 0;
      font-size: var(--lumo-font-size-s);
      box-shadow: inset 2px 0 4px 0 var(--lumo-shade-5pct);
      -webkit-mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);
      mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);
      cursor: var(--lumo-clickable-cursor);
    }

    ::slotted([slot='years']:hover) {
      --_lumo-date-picker-year-opacity: 1;
    }

    /* TODO unsupported selector */
    #scrollers {
      position: static;
      display: block;
    }

    /* TODO fix this in vaadin-date-picker that it adapts to the width of the year scroller */
    :host([desktop]) ::slotted([slot='months']) {
      right: auto;
    }

    /* Year scroller position indicator */
    ::slotted([slot='years'])::before {
      border: none;
      width: 1em;
      height: 1em;
      background-color: var(--lumo-base-color);
      background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
      transform: translate(-75%, -50%) rotate(45deg);
      border-top-right-radius: var(--lumo-border-radius-s);
      box-shadow: 2px -2px 6px 0 var(--lumo-shade-5pct);
      z-index: 1;
    }

    [part='toolbar'] {
      padding: var(--lumo-space-s);
      border-bottom-left-radius: var(--lumo-border-radius-l);
      margin-right: 57px;
    }

    [part='toolbar'] ::slotted(vaadin-button) {
      margin: 0;
    }

    /* Narrow viewport mode (fullscreen) */

    :host([fullscreen]) [part='toolbar'] {
      order: -1;
      background-color: var(--lumo-base-color);
    }

    :host([fullscreen]) [part='overlay-header'] {
      order: -2;
      height: var(--lumo-size-m);
      padding: var(--lumo-space-s);
      position: absolute;
      left: 0;
      right: 0;
      justify-content: center;
    }

    :host([fullscreen]) [part='toggle-button'],
    :host([fullscreen]) [part='clear-button'],
    [part='overlay-header'] [part='label'] {
      display: none;
    }

    /* Very narrow screen (year scroller initially hidden) */

    [part='years-toggle-button'] {
      display: flex;
      align-items: center;
      height: var(--lumo-size-s);
      padding: 0 0.5em;
      border-radius: var(--lumo-border-radius-m);
      z-index: 3;
      color: var(--lumo-primary-text-color);
      font-weight: 500;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    :host([years-visible]) [part='years-toggle-button'] {
      background-color: var(--lumo-primary-color);
      color: var(--lumo-primary-contrast-color);
    }

    /* TODO magic number (same as used for media-query in vaadin-date-picker-overlay-content) */
    @media screen and (max-width: 374px) {
      :host {
        background-image: none;
      }

      [part='toolbar'],
      ::slotted([slot='months']) {
        margin-right: 0;
      }

      /* TODO make date-picker adapt to the width of the years part */
      ::slotted([slot='years']) {
        --vaadin-infinite-scroller-buffer-width: 90px;
        width: 50px;
        background-color: var(--lumo-shade-5pct);
      }

      :host([years-visible]) ::slotted([slot='months']) {
        padding-left: 50px;
      }
    }
  `,{moduleId:"lumo-date-picker-overlay-content"});S("vaadin-month-calendar",g`
    :host {
      -moz-user-select: none;
      -webkit-user-select: none;
      -webkit-tap-highlight-color: transparent;
      user-select: none;
      font-size: var(--lumo-font-size-m);
      color: var(--lumo-body-text-color);
      text-align: center;
      padding: 0 var(--lumo-space-xs);
    }

    /* Month header */

    [part='month-header'] {
      color: var(--lumo-header-text-color);
      font-size: var(--lumo-font-size-l);
      line-height: 1;
      font-weight: 500;
      margin-bottom: var(--lumo-space-m);
    }

    /* Week days and numbers */

    [part='weekdays'],
    [part='weekday'],
    [part='week-number'] {
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
      color: var(--lumo-secondary-text-color);
    }

    [part='weekdays'] {
      margin-bottom: var(--lumo-space-s);
    }

    [part='weekday']:empty,
    [part='week-number'] {
      width: var(--lumo-size-xs);
    }

    /* Date and week number cells */

    [part~='date'],
    [part='week-number'] {
      box-sizing: border-box;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: var(--lumo-size-m);
      position: relative;
    }

    [part~='date'] {
      transition: color 0.1s;
    }

    [part~='date']:not(:empty) {
      cursor: var(--lumo-clickable-cursor);
    }

    :host([week-numbers]) [part='weekday']:not(:empty),
    :host([week-numbers]) [part~='date'] {
      width: calc((100% - var(--lumo-size-xs)) / 7);
    }

    /* Today date */

    [part~='date'][part~='today'] {
      color: var(--lumo-primary-text-color);
    }

    /* Focused date */

    [part~='date']::before {
      content: '';
      position: absolute;
      z-index: -1;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      min-width: 2em;
      min-height: 2em;
      width: 80%;
      height: 80%;
      max-height: 100%;
      max-width: 100%;
      border-radius: var(--lumo-border-radius-m);
    }

    [part~='date'][part~='focused']::before {
      box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
    }

    :host(:not([focused])) [part~='date'][part~='focused']::before {
      animation: vaadin-date-picker-month-calendar-focus-date 1.4s infinite;
    }

    @keyframes vaadin-date-picker-month-calendar-focus-date {
      50% {
        box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px transparent;
      }
    }

    [part~='date']:not(:empty):not([part~='disabled']):not([part~='selected']):hover::before {
      background-color: var(--lumo-primary-color-10pct);
    }

    [part~='date'][part~='selected'] {
      color: var(--lumo-primary-contrast-color);
    }

    [part~='date'][part~='selected']::before {
      background-color: var(--lumo-primary-color);
    }

    [part~='date'][part~='disabled'] {
      color: var(--lumo-disabled-text-color);
    }

    @media (pointer: coarse) {
      [part~='date']:hover:not([part~='selected'])::before,
      [part~='focused']:not([part~='selected'])::before {
        display: none;
      }

      [part~='date']:not(:empty):not([part~='disabled']):active::before {
        display: block;
      }

      [part~='date'][part~='selected']::before {
        box-shadow: none;
      }
    }

    /* Disabled */

    :host([disabled]) * {
      color: var(--lumo-disabled-text-color) !important;
    }
  `,{moduleId:"lumo-month-calendar"});const pa=document.createElement("template");pa.innerHTML=`
  <style>
    @keyframes vaadin-date-picker-month-calendar-focus-date {
      50% {
        box-shadow: 0 0 0 2px transparent;
      }
    }
  </style>
`;document.head.appendChild(pa.content);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const dp=g`
  @font-face {
    font-family: 'lumo-icons';
    src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEgAAsAAAAAIjQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2cAABeAWri7U2hlYWQAAA3oAAAAMAAAADZa/6SsaGhlYQAADhgAAAAdAAAAJAbpA35obXR4AAAOOAAAABAAAACspBAAAGxvY2EAAA5IAAAAWAAAAFh57oA4bWF4cAAADqAAAAAfAAAAIAFKAXBuYW1lAAAOwAAAATEAAAIuUUJZCHBvc3QAAA/0AAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wic1Z9N0jpNHCD9SNqqoVBgbQoMjY+pjA4hNnWa2pV1rHSIif0DGkyT2k10Kmu1Cag6huj4ZpqYBHSqJsTEJgZCG3TaVBFv595nO3ZIv4RIrPPuvefe884599zzO/cRF8G/tgn6CFFImNgkR0ggX8wlspbhSSWSdrC5ozd30s2dw5afzvgtyz9/zG9t1hV4RtF1pXolowvtzc2z6L2aYUQM45jKH9WDTvd1LRDoDASYWhfTzTyvboXz6uZX4ARX5wrF39y+HM2+CJ8d0pkyqBIqoze3D12ez4DrFoYzxI8dWwMrDlZ2DMqQAR9AROsJU+2smlTPaTTco52BVxXa2a2+I8vvqd2dVHm1LoPeTn/AZPRYGthDYOeZjBjKoFsVGulR3lGU95SeCK44oHU7MhWUGUKZDT3oSUcG2GWuh+EDDfUYA/jhIhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgJW95qEtpJ1VcW9HiTriZBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKifkqHRCoWZc3m11Wa/dKdFgXD4kSYfkeJBKd8KMz7J8dZn/cGRCcLGDnA2Ge3bKzcvlnTDNthFWLH7Xt80ua5FMjA4WKelWv5Xo16vHuYzpRbJhhdVlftuRK0VlR27D9lu5TF0DPBi60OrHNO0AfP/uRWvhn/U3LXICE+nh+3IHPUJ8JE6GyBjZQLbjGchlrSgYngF8zyrIF4NJD3atUcgWsWunGN/UHX5B5/yg7uF87Nqp4Gf52F3gH73DjEZNRoqCKAr9giQJp5rGJABpiVE2htNhW9R8nw0jqYjCYcY4LIjwYNScf4WN06IZnZCEqsI4cFaQbo4Z1TsZBx40YhXkHOecaYE5oY37IIQ+iJJ+UsDYSun5MuRSBRZRUUhlY2DqOGajOR6zrSU/5My6l2DnusH1GQgnw5BZP7iuYM/ahcfQ7Z8y51ddfutvuwNqWQ0cBYr8fj0U0vsHpwerVaB2sWhXT2NExi2r1KUE2tUuVMnkepVQrxTmpQrZTG4iu8he8iPyM3KcPE/+RP5KPoE2CEAKclCBzXATxkYOtUY/o961PWRqsj0chRrHFBbtrjP9/P0ven5pcbRdpL94vfsy33e5+izuwz3nFLFPVNayPZx/jdG1fOChflFRvYzsW6L18efgLrSWIgvcqnGJYi4skO4xREURjbDuxKke5v0T3Mrzkt2fi31uyZlLLrqIpEuXXsMlgw442Jb0GAxjS1DM20kBoCzHLXm/jEm0IltdcvU0fEW24jgiwwRjVd9u4NJHcIyoHJcwvyVqgqj5hqBJ1ZWSJryh9p56UWhX1XbhRbW2ZopuZWsQd5y8mEQ8M+C6xjRYxZbDKWf5AgY+Qq/l6wSPk16zDFjowYuu+wjx13mfkxbyDDxadYT/LijZyI0THB+6yfLaWsRcO82zo9mWTNtpO18qlorZoIVMwSN40tky5DOQ1MCIAe24mvlsuwIIxPb10+uXDQ4uWz/9m3rj+ql7p6bufZARuPVq5tXtsn6KwfP8Jy0TeWOyNhUJN6mhX5rkUTtUppQWEMNTqEdaCGKFYKJaQrCE4JtDLYOlNEKmO5kBTPGY2A0N2sY3+dVlo1N9ycBsIGtOjQ2p/tlZvzo0ur4v6cOh8NTospB7U/X40KahoU3bGIH97dnwmtHlYffVG3R1YOwKM2vNhrPhCT5zk64sG53oS4b31aYjqe/B7+kQiXBN+b6h21hNUPMq29B8CU4elINdygMPKF1B+WBTG7Z9ZshpN/xwEuuDQZR+nuoo4CDaAiiwXmLpmukMQyPf/JMclqgL1ixZQ/nnP2VbdUODFGt2fgBvL123rlLYu/6A9ckb7F3K0/CyBMEu6aQoPscroCcacVehvyQyCZAsizsWWBkoLC+WAiWnOksLKaeuQDzGuqSk42aiYTiJ4zf9afl17SrqaTO1f+XlZAfIuYcq7/IqYMaMrksOJ6vHkOCPDq943xcCnHqVD9pHFRpMqSPXrIua1WNs+tOz1U+ciTCDpPk+c4QYJIHnYhxP/kVPAq+ahFpVhPcHp8qyarhiF+HsBU9Hrl+UZa876fbKipL0KqB6OdUveErgtOI97fZ63ae9SvWU6k2w1JfwqnUbHsYcFCJFrC/W12zIMMirWYEHxMPs6LGYSdkSZ5TsNP9PCpwnWC3HKZ1lydNjWHC2Mn3l6vL0dHn1ldP3LTSrX+vKrBqv7KmMr8p0SR6P1NqF63or6XRlIyO90f7+kf7+myOhvt4tq7f09oUiTc2/dycGgqFQcCDRLYmi1NL7fk0CknVMxEg/cdfs/TnpJMNkgqwj17B8beVazSrVbU4lG67IZYOCnWrYy3yBR9cyWcChywos3LJBEdhhFoAdYjiw0rLGm0xU5OzoGm5/ZfmHjVZpNNg6SznzGKDdwv2cCtVn6Eaxo12cfxLprpVtTcZ6hVx6dow7Yq7e8LXO8PY9Jgjoze9yCtU5FNbegcKkQMdCbt9au/te4Ebe0jkc0ukUL32eYnTpNs20h0KpUOhZPYwVcfhZnfdqeCvDfXiuCbAoYWcXERPc/mDQD3/hdF+wK4i/xv3kYfprIpAuMkk2kW3kdtS0kBIKpZwp8KxmsCyfM1MFzAss9LBkDxRyThiaqTLwKYKJVTwmWTudMyz+yks09346MDh4m72yOxCKrt1XMlQ1qPVlTEVVQ1ofdK/sCWjtZu9qGwZ8YZ9PPWlo1IV3eW3+U0aXblP39zrt+JPf6UhEQ1rUjNBULN+utyuaDNW34kpAVuSOeMTyWbSNWnooFu+QFNWQ4d/Ox4IPWx41fP/fB/Rjeoz08ezPA9TysMtmnOXfGN7Ui3xIYLDALrlDLOP09qtJuY2OeL0+QZXdRnR1nxRVBF/SOyKKPpcrn9mWzH4rH9IidE+PTNU2182+hOgSItrE1slByS24vaLvJpxOqe4Pduf3HJkZ+jLqUz9rRzB7p8gKcgWZwV1L8JtUS5Z2JxZSOCuBoMTQihMzLbCPA0KqGMAljRQjONklW/wjnXKy8vxT/Elvm3/KiMUMOoV0/vnDYlhec0SMKtt3/kKMyOt33tj2bqxQLsTjSGLl+EAsNhCnTyRGktW55EgCn/A4PlnWn+Mg8bgZrWqHxTbPwMuyy1u5YeZF2SUM7JRhddwRgiRuxpmgJmxn9ZW7XpcF3ViX/ar6ptRpGJ0S9Adg4qhb9sI3vbL7qNJV/y4i07t5TZBiho1imFoMz3gED+CtjYUxvP4SOxov4bFoNPg5aR1e+G4UgDPoedJTpogyCJ7oYvRqoVS0MQAy+CoNEdTDUjok5ZHZL/WtjV7rFj3PKQE3iKp7ou+rIxN3b9LB1dGjeT4cvKo3FrnWpYpuaFd/h3dtV8UeKN1Y9hpR3dt4p0H/zKuPQq0kZQUIIpuDfoiETsnIk+gCWMJZUXHtE8V9LkUc2TE8vOMbO4ax/MACabzyaGXc7u3FBr11ThBdB8SIeMAlCntG2KThHSPsaj2Dc9KNyY2a0KZ7ODaTHoRiFkeYz+shZBpCS4X6471KKKnuHd84edfk5F37d1XO5bbkcltu2ZLNbvnPXiUVAnVvprJrP+NObryjxrllS65md6Tm6wzFHRR4dY3QUUjb7MgxaIixU8hspi98fl/Xc+IB4iU66eCVL9YfAfahiSUt4TONS8x0D8W7u8vd3fGWx6OXlM/U1IoU/s61PGhpyXRFa3eReq2qG56lvmYtXavCC1iN7lbiBpWxXHU+cSlztVLVz0tVN600fVsLxaVDknhYioeoXP3t4lqV1r79MAw0GCI1FTL1YIGzPL1MMlJ9ZsN9P7lvA2yr9ZFUzwzPrVgxN/x/SS+chwB4nGNgZGBgAOLPrYdY4vltvjJwM78AijDUqG5oRND/XzNPZboF5HIwMIFEAU/lC+J4nGNgZGBgDvqfBSRfMAAB81QGRgZUoA0AVvYDbwAAAHicY2BgYGB+MTQwAM8EJo8AAAAAAE4AmgDoAQoBLAFOAXABmgHEAe4CGgKcAugEmgS8BNYE8gUOBSoFegXQBf4GRAZmBrYHGAeQCBgIUghqCP4JRgm+CdoKBAo+CoQKugr0C1QLmgvAeJxjYGRgYNBmTGEQZQABJiDmAkIGhv9gPgMAGJQBvAB4nG2RPU7DMBiG3/QP0UoIBGJh8QILavozdmRo9w7d09RpUzlx5LgVvQMn4BAcgoEzcAgOwVvzSZVQbcnf48fvFysJgGt8IcJxROiG9TgauODuj5ukG+EW+UG4jR4ehTv0Q+EunjER7uEWmk+IWpc0d3gVbuAKb8JN+nfhFvlDuI17fAp36L+Fu1jgR7iHp+jF7Arbz1Nb1nO93pnEncSJFtrVuS3VKB6e5EyX2iVer9TyoOr9eux9pjJnCzW1pdfGWFU5u9WpjzfeV5PBIBMfp7aAwQ4FLPrIkbKWqDHn+67pDRK4s4lzbsEux5qHvcIIMb/nueSMyTKkE3jWFdNLHLjW2PPmMa1Hxn3GjGW/wjT0HtOG09JU4WxLk9LH2ISuiv9twJn9y8fh9uIXI+BknAAAAHicbY7ZboMwEEW5CVBCSLrv+76kfJRjTwHFsdGAG+Xvy5JUfehIHp0rnxmNN/D6ir3/a4YBhvARIMQOIowQY4wEE0yxiz3s4wCHOMIxTnCKM5zjApe4wjVucIs73OMBj3jCM17wije84wMzfHqJ0EVmUkmmJo77oOmrHvfIRZbXsTCZplTZldlgb3TYGVHProwFs11t1A57tcON2rErR3PBqcwF1/6ctI6k0GSU4JHMSS6WghdJQ99sTbfuN7QLJ9vQ37dNrgyktnIxlDYLJNuqitpRbYWKFNuyDT6pog6oOYKHtKakeakqKjHXpPwlGRcsC+OqxLIiJpXqoqqDMreG2l5bv9Ri3TRX+c23DZna9WFFgmXuO6Ps1Jm/w6ErW8N3FbHn/QC444j0AA==)
      format('woff');
    font-weight: normal;
    font-style: normal;
  }

  html {
    --lumo-icons-align-center: '\\ea01';
    --lumo-icons-align-left: '\\ea02';
    --lumo-icons-align-right: '\\ea03';
    --lumo-icons-angle-down: '\\ea04';
    --lumo-icons-angle-left: '\\ea05';
    --lumo-icons-angle-right: '\\ea06';
    --lumo-icons-angle-up: '\\ea07';
    --lumo-icons-arrow-down: '\\ea08';
    --lumo-icons-arrow-left: '\\ea09';
    --lumo-icons-arrow-right: '\\ea0a';
    --lumo-icons-arrow-up: '\\ea0b';
    --lumo-icons-bar-chart: '\\ea0c';
    --lumo-icons-bell: '\\ea0d';
    --lumo-icons-calendar: '\\ea0e';
    --lumo-icons-checkmark: '\\ea0f';
    --lumo-icons-chevron-down: '\\ea10';
    --lumo-icons-chevron-left: '\\ea11';
    --lumo-icons-chevron-right: '\\ea12';
    --lumo-icons-chevron-up: '\\ea13';
    --lumo-icons-clock: '\\ea14';
    --lumo-icons-cog: '\\ea15';
    --lumo-icons-cross: '\\ea16';
    --lumo-icons-download: '\\ea17';
    --lumo-icons-dropdown: '\\ea18';
    --lumo-icons-edit: '\\ea19';
    --lumo-icons-error: '\\ea1a';
    --lumo-icons-eye: '\\ea1b';
    --lumo-icons-eye-disabled: '\\ea1c';
    --lumo-icons-menu: '\\ea1d';
    --lumo-icons-minus: '\\ea1e';
    --lumo-icons-ordered-list: '\\ea1f';
    --lumo-icons-phone: '\\ea20';
    --lumo-icons-photo: '\\ea21';
    --lumo-icons-play: '\\ea22';
    --lumo-icons-plus: '\\ea23';
    --lumo-icons-redo: '\\ea24';
    --lumo-icons-reload: '\\ea25';
    --lumo-icons-search: '\\ea26';
    --lumo-icons-undo: '\\ea27';
    --lumo-icons-unordered-list: '\\ea28';
    --lumo-icons-upload: '\\ea29';
    --lumo-icons-user: '\\ea2a';
  }
`;Fe("font-icons",dp);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const fa=g`
  [part$='button'] {
    flex: none;
    width: 1em;
    height: 1em;
    line-height: 1;
    font-size: var(--lumo-icon-size-m);
    text-align: center;
    color: var(--lumo-contrast-60pct);
    transition: 0.2s color;
    cursor: var(--lumo-clickable-cursor);
  }

  [part$='button']:hover {
    color: var(--lumo-contrast-90pct);
  }

  :host([disabled]) [part$='button'],
  :host([readonly]) [part$='button'] {
    color: var(--lumo-contrast-20pct);
    cursor: default;
  }

  [part$='button']::before {
    font-family: 'lumo-icons';
    display: block;
  }
`;S("",fa,{moduleId:"lumo-field-button"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const cp=g`
  :host([has-helper]) [part='helper-text']::before {
    content: '';
    display: block;
    height: 0.4em;
  }

  [part='helper-text'] {
    display: block;
    color: var(--lumo-secondary-text-color);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
  }

  :host(:hover:not([readonly])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  :host([disabled]) [part='helper-text'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::before {
    display: none;
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::after {
    content: '';
    display: block;
    height: 0.4em;
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] {
    order: 0;
    padding-bottom: 0.4em;
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text'] {
    order: 1;
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] + * {
    order: 2;
  }

  :host([has-helper][theme~='helper-above-field']) [part='error-message'] {
    order: 3;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ma=g`
  [part='label'] {
    align-self: flex-start;
    color: var(--lumo-secondary-text-color);
    font-weight: 500;
    font-size: var(--lumo-font-size-s);
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
    line-height: 1;
    padding-right: 1em;
    padding-bottom: 0.5em;
    /* As a workaround for diacritics being cut off, add a top padding and a 
    negative margin to compensate */
    padding-top: 0.25em;
    margin-top: -0.25em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
    max-width: 100%;
    box-sizing: border-box;
  }

  :host([has-label])::before {
    margin-top: calc(var(--lumo-font-size-s) * 1.5);
  }

  :host([has-label][theme~='small'])::before {
    margin-top: calc(var(--lumo-font-size-xs) * 1.5);
  }

  :host([has-label]) {
    padding-top: var(--lumo-space-m);
  }

  :host([has-label]) ::slotted([slot='tooltip']) {
    --vaadin-tooltip-offset-bottom: calc((var(--lumo-space-m) - var(--lumo-space-xs)) * -1);
  }

  :host([required]) [part='required-indicator']::after {
    content: var(--lumo-required-field-indicator, '\\2022');
    transition: opacity 0.2s;
    color: var(--lumo-required-field-indicator-color, var(--lumo-primary-text-color));
    position: absolute;
    right: 0;
    width: 1em;
    text-align: center;
  }

  :host([invalid]) [part='required-indicator']::after {
    color: var(--lumo-required-field-indicator-color, var(--lumo-error-text-color));
  }

  [part='error-message'] {
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
    color: var(--lumo-error-text-color);
    will-change: max-height;
    transition: 0.4s max-height;
    max-height: 5em;
  }

  :host([has-error-message]) [part='error-message']::before,
  :host([has-error-message]) [part='error-message']::after {
    content: '';
    display: block;
    height: 0.4em;
  }

  :host(:not([invalid])) [part='error-message'] {
    max-height: 0;
    overflow: hidden;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='label'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }

  :host([dir='rtl']) [part='label'] {
    padding-left: 1em;
    padding-right: 0;
  }

  :host([dir='rtl']) [part='required-indicator']::after {
    right: auto;
    left: 0;
  }

  :host([dir='rtl']) [part='error-message'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }
`;S("",ma,{moduleId:"lumo-required-field"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const hp=g`
  :host {
    --lumo-text-field-size: var(--lumo-size-m);
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: var(--lumo-space-xs) 0;
  }

  :host::before {
    height: var(--lumo-text-field-size);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host([focused]:not([readonly])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host([focused]) [part='input-field'] ::slotted(:is(input, textarea)) {
    -webkit-mask-image: none;
    mask-image: none;
  }

  ::slotted(:is(input, textarea):placeholder-shown) {
    color: var(--lumo-secondary-text-color);
  }

  /* Hover */
  :host(:hover:not([readonly]):not([focused])) [part='label'] {
    color: var(--lumo-body-text-color);
  }

  :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
    opacity: 0.1;
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }

    :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0;
    }

    :host(:active:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0.2;
    }
  }

  /* Trigger when not focusing using the keyboard */
  :host([focused]:not([focus-ring]):not([readonly])) [part='input-field']::after {
    transform: scaleX(0);
    transition-duration: 0.15s, 1s;
  }

  /* Focus-ring */
  :host([focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  /* Read-only and disabled */
  :host(:is([readonly], [disabled])) ::slotted(:is(input, textarea):placeholder-shown) {
    opacity: 0;
  }

  /* Read-only style */
  :host([readonly]) {
    --vaadin-input-field-border-color: transparent;
  }

  /* Disabled style */
  :host([disabled]) {
    pointer-events: none;
    --vaadin-input-field-border-color: var(--lumo-contrast-20pct);
  }

  :host([disabled]) [part='label'],
  :host([disabled]) [part='input-field'] ::slotted(*) {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  /* Invalid style */
  :host([invalid]) {
    --vaadin-input-field-border-color: var(--lumo-error-color);
  }

  :host([invalid][focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);
  }

  :host([input-prevented]) [part='input-field'] {
    animation: shake 0.15s infinite;
  }

  @keyframes shake {
    25% {
      transform: translateX(4px);
    }
    75% {
      transform: translateX(-4px);
    }
  }

  /* Small theme */
  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-text-field-size: var(--lumo-size-s);
  }

  :host([theme~='small']) [part='label'] {
    font-size: var(--lumo-font-size-xs);
  }

  :host([theme~='small']) [part='error-message'] {
    font-size: var(--lumo-font-size-xxs);
  }

  /* Slotted content */
  [part='input-field'] ::slotted(:not(vaadin-icon):not(input):not(textarea)) {
    color: var(--lumo-secondary-text-color);
    font-weight: 400;
  }

  [part='clear-button']::before {
    content: var(--lumo-icons-cross);
  }
`,_a=[ma,fa,cp,hp];S("",_a,{moduleId:"lumo-input-field-shared-styles"});const up=g`
  :host {
    outline: none;
  }

  [part='toggle-button']::before {
    content: var(--lumo-icons-calendar);
  }

  [part='clear-button']::before {
    content: var(--lumo-icons-cross);
  }

  @media (max-width: 420px), (max-height: 420px) {
    [part='overlay-content'] {
      height: 70vh;
    }
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input:placeholder-shown) {
    --_lumo-text-field-overflow-mask-image: none;
  }
`;S("vaadin-date-picker",[_a,up],{moduleId:"lumo-date-picker"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Gr={start:"top",end:"bottom"},Kr={start:"left",end:"right"},po=new ResizeObserver(s=>{setTimeout(()=>{s.forEach(t=>{t.target.__overlay&&t.target.__overlay._updatePosition()})})}),ga=s=>class extends s{static get properties(){return{positionTarget:{type:Object,value:null},horizontalAlign:{type:String,value:"start"},verticalAlign:{type:String,value:"top"},noHorizontalOverlap:{type:Boolean,value:!1},noVerticalOverlap:{type:Boolean,value:!1},requiredVerticalSpace:{type:Number,value:0}}}static get observers(){return["__positionSettingsChanged(horizontalAlign, verticalAlign, noHorizontalOverlap, noVerticalOverlap, requiredVerticalSpace)","__overlayOpenedChanged(opened, positionTarget)"]}constructor(){super(),this.__onScroll=this.__onScroll.bind(this),this._updatePosition=this._updatePosition.bind(this)}connectedCallback(){super.connectedCallback(),this.opened&&this.__addUpdatePositionEventListeners()}disconnectedCallback(){super.disconnectedCallback(),this.__removeUpdatePositionEventListeners()}__addUpdatePositionEventListeners(){window.addEventListener("resize",this._updatePosition),this.__positionTargetAncestorRootNodes=yu(this.positionTarget),this.__positionTargetAncestorRootNodes.forEach(e=>{e.addEventListener("scroll",this.__onScroll,!0)})}__removeUpdatePositionEventListeners(){window.removeEventListener("resize",this._updatePosition),this.__positionTargetAncestorRootNodes&&(this.__positionTargetAncestorRootNodes.forEach(e=>{e.removeEventListener("scroll",this.__onScroll,!0)}),this.__positionTargetAncestorRootNodes=null)}__overlayOpenedChanged(e,r){if(this.__removeUpdatePositionEventListeners(),r&&(r.__overlay=null,po.unobserve(r),e&&(this.__addUpdatePositionEventListeners(),r.__overlay=this,po.observe(r))),e){const i=getComputedStyle(this);this.__margins||(this.__margins={},["top","bottom","left","right"].forEach(o=>{this.__margins[o]=parseInt(i[o],10)})),this.setAttribute("dir",i.direction),this._updatePosition(),requestAnimationFrame(()=>this._updatePosition())}}__positionSettingsChanged(){this._updatePosition()}__onScroll(e){this.contains(e.target)||this._updatePosition()}_updatePosition(){if(!this.positionTarget||!this.opened)return;const e=this.positionTarget.getBoundingClientRect(),r=this.__shouldAlignStartVertically(e);this.style.justifyContent=r?"flex-start":"flex-end";const i=this.__isRTL,o=this.__shouldAlignStartHorizontally(e,i),n=!i&&o||i&&!o;this.style.alignItems=n?"flex-start":"flex-end";const a=this.getBoundingClientRect(),l=this.__calculatePositionInOneDimension(e,a,this.noVerticalOverlap,Gr,this,r),d=this.__calculatePositionInOneDimension(e,a,this.noHorizontalOverlap,Kr,this,o);Object.assign(this.style,l,d),this.toggleAttribute("bottom-aligned",!r),this.toggleAttribute("top-aligned",r),this.toggleAttribute("end-aligned",!n),this.toggleAttribute("start-aligned",n)}__shouldAlignStartHorizontally(e,r){const i=Math.max(this.__oldContentWidth||0,this.$.overlay.offsetWidth);this.__oldContentWidth=this.$.overlay.offsetWidth;const o=Math.min(window.innerWidth,document.documentElement.clientWidth),n=!r&&this.horizontalAlign==="start"||r&&this.horizontalAlign==="end";return this.__shouldAlignStart(e,i,o,this.__margins,n,this.noHorizontalOverlap,Kr)}__shouldAlignStartVertically(e){const r=this.requiredVerticalSpace||Math.max(this.__oldContentHeight||0,this.$.overlay.offsetHeight);this.__oldContentHeight=this.$.overlay.offsetHeight;const i=Math.min(window.innerHeight,document.documentElement.clientHeight),o=this.verticalAlign==="top";return this.__shouldAlignStart(e,r,i,this.__margins,o,this.noVerticalOverlap,Gr)}__shouldAlignStart(e,r,i,o,n,a,l){const d=i-e[a?l.end:l.start]-o[l.end],c=e[a?l.start:l.end]-o[l.start],h=n?d:c,p=h>(n?c:d)||h>r;return n===p}__adjustBottomProperty(e,r,i){let o;if(e===r.end){if(r.end===Gr.end){const n=Math.min(window.innerHeight,document.documentElement.clientHeight);if(i>n&&this.__oldViewportHeight){const a=this.__oldViewportHeight-n;o=i-a}this.__oldViewportHeight=n}if(r.end===Kr.end){const n=Math.min(window.innerWidth,document.documentElement.clientWidth);if(i>n&&this.__oldViewportWidth){const a=this.__oldViewportWidth-n;o=i-a}this.__oldViewportWidth=n}}return o}__calculatePositionInOneDimension(e,r,i,o,n,a){const l=a?o.start:o.end,d=a?o.end:o.start,c=parseFloat(n.style[l]||getComputedStyle(n)[l]),h=this.__adjustBottomProperty(l,o,c),u=r[a?o.start:o.end]-e[i===a?o.end:o.start],p=h?`${h}px`:`${c+u*(a?-1:1)}px`;return{[l]:p,[d]:""}}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */S("vaadin-date-picker-overlay",g`
    [part='overlay'] {
      display: flex;
      flex: auto;
    }

    [part~='content'] {
      flex: auto;
    }

    @media (forced-colors: active) {
      [part='overlay'] {
        outline: 3px solid;
      }
    }
  `,{moduleId:"vaadin-date-picker-overlay-styles"});let Gt;class fo extends ga(ae){static get is(){return"vaadin-date-picker-overlay"}static get template(){return Gt||(Gt=super.template.cloneNode(!0),Gt.content.querySelector('[part~="overlay"]').removeAttribute("tabindex")),Gt}}customElements.define(fo.is,fo);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function os(s,t,e,r,i){let o;i&&(o=typeof e=="object"&&e!==null,o&&(r=s.__dataTemp[t]));let n=r!==e&&(r===r||e===e);return o&&n&&(s.__dataTemp[t]=e),n}const ns=B(s=>{class t extends s{_shouldPropertyChange(r,i,o){return os(this,r,i,o,!0)}}return t}),pp=B(s=>{class t extends s{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(r,i,o){return os(this,r,i,o,this.mutableData)}}return t});ns._mutablePropertyChange=os;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Ci=null;function Ti(){return Ci}Ti.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:Ti,writable:!0}});const va=Vi(Ti),fp=ns(va);function mp(s,t){Ci=s,Object.setPrototypeOf(s,t.prototype),new t,Ci=null}const _p=Vi(class{});function gp(s,t){for(let e=0;e<t.length;e++){let r=t[e];if(!!s!=!!r.__hideTemplateChildren__)if(r.nodeType===Node.TEXT_NODE)s?(r.__polymerTextContent__=r.textContent,r.textContent=""):r.textContent=r.__polymerTextContent__;else if(r.localName==="slot")if(s)r.__polymerReplaced__=document.createComment("hidden-slot"),M(M(r).parentNode).replaceChild(r.__polymerReplaced__,r);else{const i=r.__polymerReplaced__;i&&M(M(i).parentNode).replaceChild(r,i)}else r.style&&(s?(r.__polymerDisplay__=r.style.display,r.style.display="none"):r.style.display=r.__polymerDisplay__);r.__hideTemplateChildren__=s,r._showHideChildren&&r._showHideChildren(s)}}class Ce extends _p{constructor(t){super(),this._configureProperties(t),this.root=this._stampTemplate(this.__dataHost);let e=[];this.children=e;for(let i=this.root.firstChild;i;i=i.nextSibling)e.push(i),i.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let r=this.__templatizeOptions;(t&&r.instanceProps||!r.instanceProps)&&this._enableProperties()}_configureProperties(t){if(this.__templatizeOptions.forwardHostProp)for(let r in this.__hostProps)this._setPendingProperty(r,this.__dataHost["_host_"+r]);for(let r in t)this._setPendingProperty(r,t[r])}forwardHostProp(t,e){this._setPendingPropertyOrPath(t,e,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(t,e,r){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(t,e,i=>{i.model=this,r(i)});else{let i=this.__dataHost.__dataHost;i&&i._addEventListenerToNode(t,e,r)}}_showHideChildren(t){gp(t,this.children)}_setUnmanagedPropertyToNode(t,e,r){t.__hideTemplateChildren__&&t.nodeType==Node.TEXT_NODE&&e=="textContent"?t.__polymerTextContent__=r:super._setUnmanagedPropertyToNode(t,e,r)}get parentModel(){let t=this.__parentModel;if(!t){let e;t=this;do t=t.__dataHost.__dataHost;while((e=t.__templatizeOptions)&&!e.parentModel);this.__parentModel=t}return t}dispatchEvent(t){return!0}}Ce.prototype.__dataHost;Ce.prototype.__templatizeOptions;Ce.prototype._methodHost;Ce.prototype.__templatizeOwner;Ce.prototype.__hostProps;const vp=ns(Ce);function mo(s){let t=s.__dataHost;return t&&t._methodHost||t}function bp(s,t,e){let r=e.mutableData?vp:Ce;Ei.mixin&&(r=Ei.mixin(r));let i=class extends r{};return i.prototype.__templatizeOptions=e,i.prototype._bindTemplate(s),xp(i,s,t,e),i}function yp(s,t,e,r){let i=e.forwardHostProp;if(i&&t.hasHostProps){const o=s.localName=="template";let n=t.templatizeTemplateClass;if(!n){if(o){let l=e.mutableData?fp:va;class d extends l{}n=t.templatizeTemplateClass=d}else{const l=s.constructor;class d extends l{}n=t.templatizeTemplateClass=d}let a=t.hostProps;for(let l in a)n.prototype._addPropertyEffect("_host_"+l,n.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:wp(l,i)}),n.prototype._createNotifyingProperty("_host_"+l);xn&&r&&Ep(t,e,r)}if(s.__dataProto&&Object.assign(s.__data,s.__dataProto),o)mp(s,n),s.__dataTemp={},s.__dataPending=null,s.__dataOld=null,s._enableProperties();else{Object.setPrototypeOf(s,n.prototype);const a=t.hostProps;for(let l in a)if(l="_host_"+l,l in s){const d=s[l];delete s[l],s.__data[l]=d}}}}function wp(s,t){return function(r,i,o){t.call(r.__templatizeOwner,i.substring(6),o[i])}}function xp(s,t,e,r){let i=e.hostProps||{};for(let o in r.instanceProps){delete i[o];let n=r.notifyInstanceProp;n&&s.prototype._addPropertyEffect(o,s.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:Cp(o,n)})}if(r.forwardHostProp&&t.__dataHost)for(let o in i)e.hasHostProps||(e.hasHostProps=!0),s.prototype._addPropertyEffect(o,s.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:Tp()})}function Cp(s,t){return function(r,i,o){t.call(r.__templatizeOwner,r,i,o[i])}}function Tp(){return function(t,e,r){t.__dataHost._setPendingPropertyOrPath("_host_"+e,r[e],!0,!0)}}function Ei(s,t,e){if(cr&&!mo(s))throw new Error("strictTemplatePolicy: template owner not trusted");if(e=e||{},s.__templatizeOwner)throw new Error("A <template> can only be templatized once");s.__templatizeOwner=t;let i=(t?t.constructor:Ce)._parseTemplate(s),o=i.templatizeInstanceClass;o||(o=bp(s,i,e),i.templatizeInstanceClass=o);const n=mo(s);yp(s,i,e,n);let a=class extends o{};return a.prototype._methodHost=n,a.prototype.__dataHost=s,a.prototype.__templatizeOwner=t,a.prototype.__hostProps=i.hostProps,a=a,a}function Ep(s,t,e){const r=e.constructor._properties,{propertyEffects:i}=s,{instanceProps:o}=t;for(let n in i)if(!r[n]&&!(o&&o[n])){const a=i[n];for(let l=0;l<a.length;l++){const{part:d}=a[l].info;if(!(d.signature&&d.signature.static)){console.warn(`Property '${n}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}function Ap(s,t){let e;for(;t;)if(e=t.__dataHost?t:t.__templatizeInstance)if(e.__dataHost!=s)t=e.__dataHost;else return e;else t=M(t).parentNode;return null}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class mr{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,Ft.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),Ft.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}static debounce(t,e,r){return t instanceof mr?t._cancelAsync():t=new mr,t.setConfig(e,r),t}}let Ft=new Set;const Pp=function(s){Ft.add(s)},Dp=function(){const s=!!Ft.size;return Ft.forEach(t=>{try{t.flush()}catch(e){setTimeout(()=>{throw e})}}),s};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ba=function(){let s,t;do s=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),t=Dp();while(s||t)};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let _o=!1;function Sp(){if(wn&&!yn){if(!_o){_o=!0;const s=document.createElement("style");s.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(s)}return!0}return!1}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const kp=pp(K);class go extends kp{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!Ls,readOnly:!0},initialCount:{type:Number},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"},notifyDomChange:{type:Boolean},reuseChunkedInstances:{type:Boolean}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__renderStartTime=null,this.__itemsArrayChanged=!1,this.__shouldMeasureChunk=!1,this.__shouldContinueChunking=!1,this.__chunkingId=0,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null,this._templateInfo}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let t=0;t<this.__instances.length;t++)this.__detachInstance(t);this.__chunkingId&&cancelAnimationFrame(this.__chunkingId)}connectedCallback(){if(super.connectedCallback(),Sp()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let t=M(M(this).parentNode);for(let e=0;e<this.__instances.length;e++)this.__attachInstance(e,t);this.__chunkingId&&this.__render()}}__ensureTemplatized(){if(!this.__ctor){const t=this;let e=this.template=t._templateInfo?t:this.querySelector("template");if(!e){let i=new MutationObserver(()=>{if(this.querySelector("template"))i.disconnect(),this.__render();else throw new Error("dom-repeat requires a <template> child")});return i.observe(this,{childList:!0}),!1}let r={};r[this.as]=!0,r[this.indexAs]=!0,r[this.itemsIndexAs]=!0,this.__ctor=Ei(e,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:r,forwardHostProp:function(i,o){let n=this.__instances;for(let a=0,l;a<n.length&&(l=n[a]);a++)l.forwardHostProp(i,o)},notifyInstanceProp:function(i,o,n){if(Xc(this.as,o)){let a=i[this.itemsIndexAs];o==this.as&&(this.items[a]=n);let l=zt(this.as,`${JSCompiler_renameProperty("items",this)}.${a}`,o);this.notifyPath(l,n)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(t){if(typeof t=="string"){let e=t,r=this.__getMethodHost();return function(){return r[e].apply(r,arguments)}}return t}__sortChanged(t){this.__sortFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__filterChanged(t){this.__filterFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(t){return Math.ceil(1e3/t)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__handleObservedPaths(t){if(this.__sortFn||this.__filterFn){if(!t)this.__debounceRender(this.__render,this.delay);else if(this.__observePaths){let e=this.__observePaths;for(let r=0;r<e.length;r++)t.indexOf(e[r])===0&&this.__debounceRender(this.__render,this.delay)}}}__itemsChanged(t){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(t.path,t.value)||(t.path==="items"&&(this.__itemsArrayChanged=!0),this.__debounceRender(this.__render))}__debounceRender(t,e=0){this.__renderDebouncer=mr.debounce(this.__renderDebouncer,e>0?rh.after(e):Hi,t.bind(this)),Pp(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),ba()}__render(){if(!this.__ensureTemplatized())return;let t=this.items||[];const e=this.__sortAndFilterItems(t),r=this.__calculateLimit(e.length);this.__updateInstances(t,r,e),this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)&&(cancelAnimationFrame(this.__chunkingId),this.__chunkingId=requestAnimationFrame(()=>{this.__chunkingId=null,this.__continueChunking()})),this._setRenderedItemCount(this.__instances.length),(!Ls||this.notifyDomChange)&&this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}__sortAndFilterItems(t){let e=new Array(t.length);for(let r=0;r<t.length;r++)e[r]=r;return this.__filterFn&&(e=e.filter((r,i,o)=>this.__filterFn(t[r],i,o))),this.__sortFn&&e.sort((r,i)=>this.__sortFn(t[r],t[i])),e}__calculateLimit(t){let e=t;const r=this.__instances.length;if(this.initialCount){let i;!this.__chunkCount||this.__itemsArrayChanged&&!this.reuseChunkedInstances?(e=Math.min(t,this.initialCount),i=Math.max(e-r,0),this.__chunkCount=i||1):(i=Math.min(Math.max(t-r,0),this.__chunkCount),e=Math.min(r+i,t)),this.__shouldMeasureChunk=i===this.__chunkCount,this.__shouldContinueChunking=e<t,this.__renderStartTime=performance.now()}return this.__itemsArrayChanged=!1,e}__continueChunking(){if(this.__shouldMeasureChunk){const t=performance.now()-this.__renderStartTime,e=this._targetFrameTime/t;this.__chunkCount=Math.round(this.__chunkCount*e)||1}this.__shouldContinueChunking&&this.__debounceRender(this.__render)}__updateInstances(t,e,r){const i=this.__itemsIdxToInstIdx={};let o;for(o=0;o<e;o++){let n=this.__instances[o],a=r[o],l=t[a];i[a]=o,n?(n._setPendingProperty(this.as,l),n._setPendingProperty(this.indexAs,o),n._setPendingProperty(this.itemsIndexAs,a),n._flushProperties()):this.__insertInstance(l,o,a)}for(let n=this.__instances.length-1;n>=o;n--)this.__detachAndRemoveInstance(n)}__detachInstance(t){let e=this.__instances[t];const r=M(e.root);for(let i=0;i<e.children.length;i++){let o=e.children[i];r.appendChild(o)}return e}__attachInstance(t,e){let r=this.__instances[t];e.insertBefore(r.root,this)}__detachAndRemoveInstance(t){this.__detachInstance(t),this.__instances.splice(t,1)}__stampInstance(t,e,r){let i={};return i[this.as]=t,i[this.indexAs]=e,i[this.itemsIndexAs]=r,new this.__ctor(i)}__insertInstance(t,e,r){const i=this.__stampInstance(t,e,r);let o=this.__instances[e+1],n=o?o.children[0]:this;return M(M(this).parentNode).insertBefore(i.root,n),this.__instances[e]=i,i}_showHideChildren(t){for(let e=0;e<this.__instances.length;e++)this.__instances[e]._showHideChildren(t)}__handleItemPath(t,e){let r=t.slice(6),i=r.indexOf("."),o=i<0?r:r.substring(0,i);if(o==parseInt(o,10)){let n=i<0?"":r.substring(i+1);this.__handleObservedPaths(n);let a=this.__itemsIdxToInstIdx[o],l=this.__instances[a];if(l){let d=this.as+(n?"."+n:"");l._setPendingPropertyOrPath(d,e,!1,!0),l._flushProperties()}return!0}}itemForElement(t){let e=this.modelForElement(t);return e&&e[this.as]}indexForElement(t){let e=this.modelForElement(t);return e&&e[this.indexAs]}modelForElement(t){return Ap(this.template,t)}}customElements.define(go.is,go);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Ip(s){let t=s.getDay();t===0&&(t=7);const e=4-t,r=new Date(s.getTime()+e*24*3600*1e3),i=new Date(0,0);i.setFullYear(r.getFullYear());const o=r.getTime()-i.getTime(),n=Math.round(o/(24*3600*1e3));return Math.floor(n/7+1)}function he(s,t){return s instanceof Date&&t instanceof Date&&s.getFullYear()===t.getFullYear()&&s.getMonth()===t.getMonth()&&s.getDate()===t.getDate()}function Et(s,t,e){return(!t||s>=t)&&(!e||s<=e)}function ya(s,t){return t.filter(e=>e!==void 0).reduce((e,r)=>{if(!r)return e;if(!e)return r;const i=Math.abs(s.getTime()-r.getTime()),o=Math.abs(e.getTime()-s.getTime());return i<o?r:e})}function wa(s){return{day:s.getDate(),month:s.getMonth(),year:s.getFullYear()}}function xa(s){const t=new Date,e=new Date(t);return e.setDate(1),e.setMonth(parseInt(s)+t.getMonth()),e}function Op(s,t,e=0,r=1){if(t>99)throw new Error("The provided year cannot have more than 2 digits.");if(t<0)throw new Error("The provided year cannot be negative.");let i=t+Math.floor(s.getFullYear()/100)*100;return s<new Date(i-50,e,r)?i-=100:s>new Date(i+50,e,r)&&(i+=100),i}function pt(s){const t=/^([-+]\d{1}|\d{2,4}|[-+]\d{6})-(\d{1,2})-(\d{1,2})$/u.exec(s);if(!t)return;const e=new Date(0,0);return e.setFullYear(parseInt(t[1],10)),e.setMonth(parseInt(t[2],10)-1),e.setDate(parseInt(t[3],10)),e}/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class vo extends es(fe(K)){static get template(){return ee`
      <style>
        :host {
          display: block;
        }

        #monthGrid {
          width: 100%;
          border-collapse: collapse;
        }

        #days-container tr,
        #weekdays-container tr {
          display: flex;
        }

        [part~='date'] {
          outline: none;
        }

        [part~='disabled'] {
          pointer-events: none;
        }

        [part='week-number'][hidden],
        [part='weekday'][hidden] {
          display: none;
        }

        [part='weekday'],
        [part~='date'] {
          width: calc(100% / 7);
          padding: 0;
          font-weight: normal;
        }

        [part='weekday']:empty,
        [part='week-number'] {
          width: 12.5%;
          flex-shrink: 0;
          padding: 0;
        }

        :host([week-numbers]) [part='weekday']:not(:empty),
        :host([week-numbers]) [part~='date'] {
          width: 12.5%;
        }

        @media (forced-colors: active) {
          [part~='date'][part~='focused'] {
            outline: 1px solid;
          }
          [part~='date'][part~='selected'] {
            outline: 3px solid;
          }
        }
      </style>

      <div part="month-header" id="month-header" aria-hidden="true">[[_getTitle(month, i18n.monthNames)]]</div>
      <table
        id="monthGrid"
        role="grid"
        aria-labelledby="month-header"
        on-touchend="_preventDefault"
        on-touchstart="_onMonthGridTouchStart"
      >
        <thead id="weekdays-container">
          <tr role="row" part="weekdays">
            <th
              part="weekday"
              aria-hidden="true"
              hidden$="[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]"
            ></th>
            <template
              is="dom-repeat"
              items="[[_getWeekDayNames(i18n.weekdays, i18n.weekdaysShort, showWeekNumbers, i18n.firstDayOfWeek)]]"
            >
              <th role="columnheader" part="weekday" scope="col" abbr$="[[item.weekDay]]" aria-hidden="true">
                [[item.weekDayShort]]
              </th>
            </template>
          </tr>
        </thead>
        <tbody id="days-container">
          <template is="dom-repeat" items="[[_weeks]]" as="week">
            <tr role="row">
              <td
                part="week-number"
                aria-hidden="true"
                hidden$="[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]"
              >
                [[__getWeekNumber(week)]]
              </td>
              <template is="dom-repeat" items="[[week]]">
                <td
                  role="gridcell"
                  part$="[[__getDatePart(item, focusedDate, selectedDate, minDate, maxDate)]]"
                  date="[[item]]"
                  tabindex$="[[__getDayTabindex(item, focusedDate)]]"
                  disabled$="[[__isDayDisabled(item, minDate, maxDate)]]"
                  aria-selected$="[[__getDayAriaSelected(item, selectedDate)]]"
                  aria-disabled$="[[__getDayAriaDisabled(item, minDate, maxDate)]]"
                  aria-label$="[[__getDayAriaLabel(item)]]"
                  >[[_getDate(item)]]</td
                >
              </template>
            </tr>
          </template>
        </tbody>
      </table>
    `}static get is(){return"vaadin-month-calendar"}static get properties(){return{month:{type:Date,value:new Date},selectedDate:{type:Date,notify:!0},focusedDate:Date,showWeekNumbers:{type:Boolean,value:!1},i18n:{type:Object},ignoreTaps:Boolean,_notTapping:Boolean,minDate:{type:Date,value:null},maxDate:{type:Date,value:null},_days:{type:Array,computed:"_getDays(month, i18n.firstDayOfWeek, minDate, maxDate)"},_weeks:{type:Array,computed:"_getWeeks(_days)"},disabled:{type:Boolean,reflectToAttribute:!0,computed:"_isDisabled(month, minDate, maxDate)"}}}static get observers(){return["_showWeekNumbersChanged(showWeekNumbers, i18n.firstDayOfWeek)","__focusedDateChanged(focusedDate, _days)"]}get focusableDateElement(){return[...this.shadowRoot.querySelectorAll("[part~=date]")].find(t=>he(t.date,this.focusedDate))}ready(){super.ready(),ie(this.$.monthGrid,"tap",this._handleTap.bind(this))}_isDisabled(t,e,r){const i=new Date(0,0);i.setFullYear(t.getFullYear()),i.setMonth(t.getMonth()),i.setDate(1);const o=new Date(0,0);return o.setFullYear(t.getFullYear()),o.setMonth(t.getMonth()+1),o.setDate(0),e&&r&&e.getMonth()===r.getMonth()&&e.getMonth()===t.getMonth()&&r.getDate()-e.getDate()>=0?!1:!Et(i,e,r)&&!Et(o,e,r)}_getTitle(t,e){if(!(t===void 0||e===void 0))return this.i18n.formatTitle(e[t.getMonth()],t.getFullYear())}_onMonthGridTouchStart(){this._notTapping=!1,setTimeout(()=>{this._notTapping=!0},300)}_dateAdd(t,e){t.setDate(t.getDate()+e)}_applyFirstDayOfWeek(t,e){if(!(t===void 0||e===void 0))return t.slice(e).concat(t.slice(0,e))}_getWeekDayNames(t,e,r,i){if(!(t===void 0||e===void 0||r===void 0||i===void 0))return t=this._applyFirstDayOfWeek(t,i),e=this._applyFirstDayOfWeek(e,i),t=t.map((o,n)=>({weekDay:o,weekDayShort:e[n]})),t}__focusedDateChanged(t,e){e.some(r=>he(r,t))?this.removeAttribute("aria-hidden"):this.setAttribute("aria-hidden","true")}_getDate(t){return t?t.getDate():""}_showWeekNumbersChanged(t,e){t&&e===1?this.setAttribute("week-numbers",""):this.removeAttribute("week-numbers")}_showWeekSeparator(t,e){return t&&e===1}_isToday(t){return he(new Date,t)}_getDays(t,e){if(t===void 0||e===void 0)return;const r=new Date(0,0);for(r.setFullYear(t.getFullYear()),r.setMonth(t.getMonth()),r.setDate(1);r.getDay()!==e;)this._dateAdd(r,-1);const i=[],o=r.getMonth(),n=t.getMonth();for(;r.getMonth()===n||r.getMonth()===o;)i.push(r.getMonth()===n?new Date(r.getTime()):null),this._dateAdd(r,1);return i}_getWeeks(t){return t.reduce((e,r,i)=>(i%7===0&&e.push([]),e[e.length-1].push(r),e),[])}_handleTap(t){!this.ignoreTaps&&!this._notTapping&&t.target.date&&!t.target.hasAttribute("disabled")&&(this.selectedDate=t.target.date,this.dispatchEvent(new CustomEvent("date-tap",{detail:{date:t.target.date},bubbles:!0,composed:!0})))}_preventDefault(t){t.preventDefault()}__getDatePart(t,e,r,i,o){const n=["date"];return this.__isDayDisabled(t,i,o)&&n.push("disabled"),this.__isDayFocused(t,e)&&n.push("focused"),this.__isDaySelected(t,r)&&n.push("selected"),this._isToday(t)&&n.push("today"),n.join(" ")}__getWeekNumber(t){const e=t.reduce((r,i)=>!r&&i?i:r);return Ip(e)}__isDayFocused(t,e){return he(t,e)}__isDaySelected(t,e){return he(t,e)}__getDayAriaSelected(t,e){if(this.__isDaySelected(t,e))return"true"}__isDayDisabled(t,e,r){return!Et(t,e,r)}__getDayAriaDisabled(t,e,r){if(!(t===void 0||e===void 0||r===void 0)&&this.__isDayDisabled(t,e,r))return"true"}__getDayAriaLabel(t){if(!t)return"";let e=`${this._getDate(t)} ${this.i18n.monthNames[t.getMonth()]} ${t.getFullYear()}, ${this.i18n.weekdays[t.getDay()]}`;return this._isToday(t)&&(e+=`, ${this.i18n.today}`),e}__getDayTabindex(t,e){return this.__isDayFocused(t,e)?"0":"-1"}}customElements.define(vo.is,vo);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ca extends K{static get template(){return ee`
      <style>
        :host {
          display: block;
          overflow: hidden;
          height: 500px;
        }

        #scroller {
          position: relative;
          height: 100%;
          overflow: auto;
          outline: none;
          margin-right: -40px;
          -webkit-overflow-scrolling: touch;
          overflow-x: hidden;
        }

        #scroller.notouchscroll {
          -webkit-overflow-scrolling: auto;
        }

        #scroller::-webkit-scrollbar {
          display: none;
        }

        .buffer {
          position: absolute;
          width: var(--vaadin-infinite-scroller-buffer-width, 100%);
          box-sizing: border-box;
          padding-right: 40px;
          top: var(--vaadin-infinite-scroller-buffer-offset, 0);
          animation: fadein 0.2s;
        }

        @keyframes fadein {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      </style>

      <div id="scroller" on-scroll="_scroll">
        <div class="buffer"></div>
        <div class="buffer"></div>
        <div id="fullHeight"></div>
      </div>
    `}static get properties(){return{bufferSize:{type:Number,value:20},_initialScroll:{value:5e5},_initialIndex:{value:0},_buffers:Array,_preventScrollEvent:Boolean,_mayHaveMomentum:Boolean,_initialized:Boolean,active:{type:Boolean,observer:"_activated"}}}get bufferOffset(){return this._buffers[0].offsetTop}get itemHeight(){if(!this._itemHeightVal){const t=getComputedStyle(this).getPropertyValue("--vaadin-infinite-scroller-item-height"),e="background-position";this.$.fullHeight.style.setProperty(e,t);const r=getComputedStyle(this.$.fullHeight).getPropertyValue(e);this.$.fullHeight.style.removeProperty(e),this._itemHeightVal=parseFloat(r)}return this._itemHeightVal}get _bufferHeight(){return this.itemHeight*this.bufferSize}get position(){return(this.$.scroller.scrollTop-this._buffers[0].translateY)/this.itemHeight+this._firstIndex}set position(t){this._preventScrollEvent=!0,t>this._firstIndex&&t<this._firstIndex+this.bufferSize*2?this.$.scroller.scrollTop=this.itemHeight*(t-this._firstIndex)+this._buffers[0].translateY:(this._initialIndex=~~t,this._reset(),this._scrollDisabled=!0,this.$.scroller.scrollTop+=t%1*this.itemHeight,this._scrollDisabled=!1),this._mayHaveMomentum&&(this.$.scroller.classList.add("notouchscroll"),this._mayHaveMomentum=!1,setTimeout(()=>{this.$.scroller.classList.remove("notouchscroll")},10))}ready(){super.ready(),this._buffers=[...this.shadowRoot.querySelectorAll(".buffer")],this.$.fullHeight.style.height=`${this._initialScroll*2}px`,aa&&(this.$.scroller.tabIndex=-1)}forceUpdate(){this._debouncerUpdateClones&&(this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones(),this._debouncerUpdateClones.cancel())}_createElement(){}_updateElement(t,e){}_activated(t){t&&!this._initialized&&(this._createPool(),this._initialized=!0)}_finishInit(){this._initDone||(this._buffers.forEach(t=>{[...t.children].forEach(e=>{this._ensureStampedInstance(e._itemWrapper)})}),this._buffers[0].translateY||this._reset(),this._initDone=!0,this.dispatchEvent(new CustomEvent("init-done")))}_translateBuffer(t){const e=t?1:0;this._buffers[e].translateY=this._buffers[e?0:1].translateY+this._bufferHeight*(e?-1:1),this._buffers[e].style.transform=`translate3d(0, ${this._buffers[e].translateY}px, 0)`,this._buffers[e].updated=!1,this._buffers.reverse()}_scroll(){if(this._scrollDisabled)return;const t=this.$.scroller.scrollTop;(t<this._bufferHeight||t>this._initialScroll*2-this._bufferHeight)&&(this._initialIndex=~~this.position,this._reset());const e=this.itemHeight+this.bufferOffset,r=t>this._buffers[1].translateY+e,i=t<this._buffers[0].translateY+e;(r||i)&&(this._translateBuffer(i),this._updateClones()),this._preventScrollEvent||(this.dispatchEvent(new CustomEvent("custom-scroll",{bubbles:!1,composed:!0})),this._mayHaveMomentum=!0),this._preventScrollEvent=!1,this._debouncerScrollFinish=I.debounce(this._debouncerScrollFinish,se.after(200),()=>{const o=this.$.scroller.getBoundingClientRect();!this._isVisible(this._buffers[0],o)&&!this._isVisible(this._buffers[1],o)&&(this.position=this.position)})}_reset(){this._scrollDisabled=!0,this.$.scroller.scrollTop=this._initialScroll,this._buffers[0].translateY=this._initialScroll-this._bufferHeight,this._buffers[1].translateY=this._initialScroll,this._buffers.forEach(t=>{t.style.transform=`translate3d(0, ${t.translateY}px, 0)`}),this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones(!0),this._debouncerUpdateClones=I.debounce(this._debouncerUpdateClones,se.after(200),()=>{this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones()}),this._scrollDisabled=!1}_createPool(){const t=this.getBoundingClientRect();this._buffers.forEach(e=>{for(let r=0;r<this.bufferSize;r++){const i=document.createElement("div");i.style.height=`${this.itemHeight}px`,i.instance={};const o=`vaadin-infinite-scroller-item-content-${Yi()}`,n=document.createElement("slot");n.setAttribute("name",o),n._itemWrapper=i,e.appendChild(n),i.setAttribute("slot",o),this.appendChild(i),this._isVisible(i,t)&&this._ensureStampedInstance(i)}}),rs(this,()=>{this._finishInit()})}_ensureStampedInstance(t){if(t.firstElementChild)return;const e=t.instance;t.instance=this._createElement(),t.appendChild(t.instance),Object.keys(e).forEach(r=>{t.instance.set(r,e[r])})}_updateClones(t){this._firstIndex=~~((this._buffers[0].translateY-this._initialScroll)/this.itemHeight)+this._initialIndex;const e=t?this.$.scroller.getBoundingClientRect():void 0;this._buffers.forEach((r,i)=>{if(!r.updated){const o=this._firstIndex+this.bufferSize*i;[...r.children].forEach((n,a)=>{const l=n._itemWrapper;(!t||this._isVisible(l,e))&&this._updateElement(l.instance,o+a)}),r.updated=!0}})}_isVisible(t,e){const r=t.getBoundingClientRect();return r.bottom>e.top&&r.top<e.bottom}}/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const zp=ee`
  <style>
    :host {
      --vaadin-infinite-scroller-item-height: 270px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      height: 100%;
    }
  </style>
`;let Kt;class bo extends Ca{static get is(){return"vaadin-date-picker-month-scroller"}static get template(){return Kt||(Kt=super.template.cloneNode(!0),Kt.content.appendChild(zp.content.cloneNode(!0))),Kt}static get properties(){return{bufferSize:{type:Number,value:3}}}_createElement(){return document.createElement("vaadin-month-calendar")}_updateElement(t,e){t.month=xa(e)}}customElements.define(bo.is,bo);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Mp=ee`
  <style>
    :host {
      --vaadin-infinite-scroller-item-height: 80px;
      width: 50px;
      display: block;
      height: 100%;
      position: absolute;
      right: 0;
      transform: translateX(100%);
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      /* Center the year scroller position. */
      --vaadin-infinite-scroller-buffer-offset: 50%;
    }

    :host::before {
      content: '';
      display: block;
      background: transparent;
      width: 0;
      height: 0;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      border-width: 6px;
      border-style: solid;
      border-color: transparent;
      border-left-color: #000;
    }
  </style>
`;let Xt;class yo extends Ca{static get is(){return"vaadin-date-picker-year-scroller"}static get template(){return Xt||(Xt=super.template.cloneNode(!0),Xt.content.appendChild(Mp.content.cloneNode(!0))),Xt}static get properties(){return{bufferSize:{type:Number,value:12}}}_createElement(){return document.createElement("vaadin-date-picker-year")}_updateElement(t,e){t.year=this._yearAfterXYears(e)}_yearAfterXYears(t){const e=new Date,r=new Date(e);return r.setFullYear(parseInt(t)+e.getFullYear()),r.getFullYear()}}customElements.define(yo.is,yo);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class wo extends fe(K){static get is(){return"vaadin-date-picker-year"}static get template(){return ee`
      <style>
        :host {
          display: block;
          height: 100%;
        }
      </style>
      <div part="year-number">[[year]]</div>
      <div part="year-separator" aria-hidden="true"></div>
    `}static get properties(){return{year:{type:String},selectedDate:{type:Object}}}static get observers(){return["__updateSelected(year, selectedDate)"]}__updateSelected(t,e){this.toggleAttribute("selected",e&&e.getFullYear()===t),this.toggleAttribute("current",t===new Date().getFullYear())}}customElements.define(wo.is,wo);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ta{constructor(t,e){this.query=t,this.callback=e,this._boundQueryHandler=this._queryHandler.bind(this)}hostConnected(){this._removeListener(),this._mediaQuery=window.matchMedia(this.query),this._addListener(),this._queryHandler(this._mediaQuery)}hostDisconnected(){this._removeListener()}_addListener(){this._mediaQuery&&this._mediaQuery.addListener(this._boundQueryHandler)}_removeListener(){this._mediaQuery&&this._mediaQuery.removeListener(this._boundQueryHandler),this._mediaQuery=null}_queryHandler(t){typeof this.callback=="function"&&this.callback(t.matches)}}/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class xo extends $e(fe($t(K))){static get template(){return ee`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 100%;
          outline: none;
        }

        [part='overlay-header'] {
          display: flex;
          flex-shrink: 0;
          flex-wrap: nowrap;
          align-items: center;
        }

        :host(:not([fullscreen])) [part='overlay-header'] {
          display: none;
        }

        [part='label'] {
          flex-grow: 1;
        }

        [hidden] {
          display: none !important;
        }

        [part='years-toggle-button'] {
          display: flex;
        }

        #scrollers {
          display: flex;
          height: 100%;
          width: 100%;
          position: relative;
          overflow: hidden;
        }

        :host([desktop]) ::slotted([slot='months']) {
          right: 50px;
          transform: none !important;
        }

        :host([desktop]) ::slotted([slot='years']) {
          transform: none !important;
        }

        :host(.animate) ::slotted([slot='months']),
        :host(.animate) ::slotted([slot='years']) {
          transition: all 200ms;
        }

        [part='toolbar'] {
          display: flex;
          justify-content: space-between;
          z-index: 2;
          flex-shrink: 0;
        }
      </style>

      <div part="overlay-header" on-touchend="_preventDefault" aria-hidden="true">
        <div part="label">[[_formatDisplayed(selectedDate, i18n.formatDate, label)]]</div>
        <div part="clear-button" hidden$="[[!selectedDate]]"></div>
        <div part="toggle-button"></div>

        <div part="years-toggle-button" hidden$="[[_desktopMode]]" aria-hidden="true">
          [[_yearAfterXMonths(_visibleMonthIndex)]]
        </div>
      </div>

      <div id="scrollers">
        <slot name="months"></slot>
        <slot name="years"></slot>
      </div>

      <div on-touchend="_preventDefault" role="toolbar" part="toolbar">
        <slot name="today-button"></slot>
        <slot name="cancel-button"></slot>
      </div>
    `}static get is(){return"vaadin-date-picker-overlay-content"}static get properties(){return{scrollDuration:{type:Number,value:300},selectedDate:{type:Date,value:null},focusedDate:{type:Date,notify:!0,observer:"_focusedDateChanged"},_focusedMonthDate:Number,initialPosition:{type:Date,observer:"_initialPositionChanged"},_originDate:{value:new Date},_visibleMonthIndex:Number,_desktopMode:{type:Boolean,observer:"_desktopModeChanged"},_desktopMediaQuery:{type:String,value:"(min-width: 375px)"},_translateX:{observer:"_translateXChanged"},_yearScrollerWidth:{value:50},i18n:{type:Object},showWeekNumbers:{type:Boolean,value:!1},_ignoreTaps:Boolean,_notTapping:Boolean,minDate:Date,maxDate:Date,label:String,_cancelButton:{type:Object},_todayButton:{type:Object},calendars:{type:Array,value:()=>[]},years:{type:Array,value:()=>[]}}}static get observers(){return["__updateCalendars(calendars, i18n, minDate, maxDate, selectedDate, focusedDate, showWeekNumbers, _ignoreTaps, _theme)","__updateCancelButton(_cancelButton, i18n)","__updateTodayButton(_todayButton, i18n, minDate, maxDate)","__updateYears(years, selectedDate, _theme)"]}get __useSubMonthScrolling(){return this._monthScroller.clientHeight<this._monthScroller.itemHeight+this._monthScroller.bufferOffset}get focusableDateElement(){return this.calendars.map(t=>t.focusableDateElement).find(Boolean)}ready(){super.ready(),this.setAttribute("role","dialog"),ie(this.$.scrollers,"track",this._track.bind(this)),ie(this.shadowRoot.querySelector('[part="clear-button"]'),"tap",this._clear.bind(this)),ie(this.shadowRoot.querySelector('[part="toggle-button"]'),"tap",this._cancel.bind(this)),ie(this.shadowRoot.querySelector('[part="years-toggle-button"]'),"tap",this._toggleYearScroller.bind(this)),this.addController(new Ta(this._desktopMediaQuery,t=>{this._desktopMode=t})),this.addController(new ke(this,"today-button","vaadin-button",{observe:!1,initializer:t=>{t.setAttribute("theme","tertiary"),t.addEventListener("keydown",e=>this.__onTodayButtonKeyDown(e)),ie(t,"tap",this._onTodayTap.bind(this)),this._todayButton=t}})),this.addController(new ke(this,"cancel-button","vaadin-button",{observe:!1,initializer:t=>{t.setAttribute("theme","tertiary"),t.addEventListener("keydown",e=>this.__onCancelButtonKeyDown(e)),ie(t,"tap",this._cancel.bind(this)),this._cancelButton=t}})),this.__initMonthScroller(),this.__initYearScroller()}connectedCallback(){super.connectedCallback(),this._closeYearScroller(),this._toggleAnimateClass(!0),ea(this.$.scrollers,"pan-y")}focusCancel(){this._cancelButton.focus()}scrollToDate(t,e){const r=this.__useSubMonthScrolling?this._calculateWeekScrollOffset(t):0;this._scrollToPosition(this._differenceInMonths(t,this._originDate)+r,e),this._monthScroller.forceUpdate()}__initMonthScroller(){this.addController(new ke(this,"months","vaadin-date-picker-month-scroller",{observe:!1,initializer:t=>{t.addEventListener("custom-scroll",()=>{this._onMonthScroll()}),t.addEventListener("touchstart",()=>{this._onMonthScrollTouchStart()}),t.addEventListener("keydown",e=>{this.__onMonthCalendarKeyDown(e)}),t.addEventListener("init-done",()=>{const e=[...this.querySelectorAll("vaadin-month-calendar")];e.forEach(r=>{r.addEventListener("selected-date-changed",i=>{this.selectedDate=i.detail.value})}),this.calendars=e}),this._monthScroller=t}}))}__initYearScroller(){this.addController(new ke(this,"years","vaadin-date-picker-year-scroller",{observe:!1,initializer:t=>{t.setAttribute("aria-hidden","true"),ie(t,"tap",e=>{this._onYearTap(e)}),t.addEventListener("custom-scroll",()=>{this._onYearScroll()}),t.addEventListener("touchstart",()=>{this._onYearScrollTouchStart()}),t.addEventListener("init-done",()=>{this.years=[...this.querySelectorAll("vaadin-date-picker-year")]}),this._yearScroller=t}}))}__updateCancelButton(t,e){t&&(t.textContent=e&&e.cancel)}__updateTodayButton(t,e,r,i){t&&(t.textContent=e&&e.today,t.disabled=!this._isTodayAllowed(r,i))}__updateCalendars(t,e,r,i,o,n,a,l,d){t&&t.length&&t.forEach(c=>{c.setProperties({i18n:e,minDate:r,maxDate:i,focusedDate:n,selectedDate:o,showWeekNumbers:a,ignoreTaps:l}),d?c.setAttribute("theme",d):c.removeAttribute("theme")})}__updateYears(t,e,r){t&&t.length&&t.forEach(i=>{i.selectedDate=e,r?i.setAttribute("theme",r):i.removeAttribute("theme")})}_selectDate(t){this.selectedDate=t,this.dispatchEvent(new CustomEvent("date-selected",{detail:{date:t},bubbles:!0,composed:!0}))}_desktopModeChanged(t){this.toggleAttribute("desktop",t)}_focusedDateChanged(t){this.revealDate(t)}revealDate(t,e=!0){if(!t)return;const r=this._differenceInMonths(t,this._originDate);if(this.__useSubMonthScrolling){const l=this._calculateWeekScrollOffset(t);this._scrollToPosition(r+l,e);return}const i=this._monthScroller.position>r,n=Math.max(this._monthScroller.itemHeight,this._monthScroller.clientHeight-this._monthScroller.bufferOffset*2)/this._monthScroller.itemHeight,a=this._monthScroller.position+n-1<r;i?this._scrollToPosition(r,e):a&&this._scrollToPosition(r-n+1,e)}_calculateWeekScrollOffset(t){const e=new Date(0,0);e.setFullYear(t.getFullYear()),e.setMonth(t.getMonth()),e.setDate(1);let r=0;for(;e.getDate()<t.getDate();)e.setDate(e.getDate()+1),e.getDay()===this.i18n.firstDayOfWeek&&(r+=1);return r/6}_initialPositionChanged(t){this._monthScroller&&this._yearScroller&&(this._monthScroller.active=!0,this._yearScroller.active=!0),this.scrollToDate(t)}_repositionYearScroller(){const t=this._monthScroller.position;this._visibleMonthIndex=Math.floor(t),this._yearScroller.position=(t+this._originDate.getMonth())/12}_repositionMonthScroller(){this._monthScroller.position=this._yearScroller.position*12-this._originDate.getMonth(),this._visibleMonthIndex=Math.floor(this._monthScroller.position)}_onMonthScroll(){this._repositionYearScroller(),this._doIgnoreTaps()}_onYearScroll(){this._repositionMonthScroller(),this._doIgnoreTaps()}_onYearScrollTouchStart(){this._notTapping=!1,setTimeout(()=>{this._notTapping=!0},300),this._repositionMonthScroller()}_onMonthScrollTouchStart(){this._repositionYearScroller()}_doIgnoreTaps(){this._ignoreTaps=!0,this._debouncer=I.debounce(this._debouncer,se.after(300),()=>{this._ignoreTaps=!1})}_formatDisplayed(t,e,r){return t?e(wa(t)):r}_onTodayTap(){const t=new Date;Math.abs(this._monthScroller.position-this._differenceInMonths(t,this._originDate))<.001?(this._selectDate(t),this._close()):this._scrollToCurrentMonth()}_scrollToCurrentMonth(){this.focusedDate&&(this.focusedDate=new Date),this.scrollToDate(new Date,!0)}_onYearTap(t){if(!this._ignoreTaps&&!this._notTapping){const r=(t.detail.y-(this._yearScroller.getBoundingClientRect().top+this._yearScroller.clientHeight/2))/this._yearScroller.itemHeight;this._scrollToPosition(this._monthScroller.position+r*12,!0)}}_scrollToPosition(t,e){if(this._targetPosition!==void 0){this._targetPosition=t;return}if(!e){this._monthScroller.position=t,this._targetPosition=void 0,this._repositionYearScroller(),this.__tryFocusDate();return}this._targetPosition=t;let r;this._revealPromise=new Promise(l=>{r=l});const i=(l,d,c,h)=>(l/=h/2,l<1?c/2*l*l+d:(l-=1,-c/2*(l*(l-2)-1)+d));let o=0;const n=this._monthScroller.position,a=l=>{o||(o=l);const d=l-o;if(d<this.scrollDuration){const c=i(d,n,this._targetPosition-n,this.scrollDuration);this._monthScroller.position=c,window.requestAnimationFrame(a)}else this.dispatchEvent(new CustomEvent("scroll-animation-finished",{bubbles:!0,composed:!0,detail:{position:this._targetPosition,oldPosition:n}})),this._monthScroller.position=this._targetPosition,this._targetPosition=void 0,r(),this._revealPromise=void 0;setTimeout(this._repositionYearScroller.bind(this),1)};window.requestAnimationFrame(a)}_limit(t,e){return Math.min(e.max,Math.max(e.min,t))}_handleTrack(t){if(Math.abs(t.detail.dx)<10||Math.abs(t.detail.ddy)>10)return;Math.abs(t.detail.ddx)>this._yearScrollerWidth/3&&this._toggleAnimateClass(!0);const e=this._translateX+t.detail.ddx;this._translateX=this._limit(e,{min:0,max:this._yearScrollerWidth})}_track(t){if(!this._desktopMode)switch(t.detail.state){case"start":this._toggleAnimateClass(!1);break;case"track":this._handleTrack(t);break;case"end":this._toggleAnimateClass(!0),this._translateX>=this._yearScrollerWidth/2?this._closeYearScroller():this._openYearScroller();break}}_toggleAnimateClass(t){t?this.classList.add("animate"):this.classList.remove("animate")}_toggleYearScroller(){this._isYearScrollerVisible()?this._closeYearScroller():this._openYearScroller()}_openYearScroller(){this._translateX=0,this.setAttribute("years-visible","")}_closeYearScroller(){this.removeAttribute("years-visible"),this._translateX=this._yearScrollerWidth}_isYearScrollerVisible(){return this._translateX<this._yearScrollerWidth/2}_translateXChanged(t){this._desktopMode||(this._monthScroller.style.transform=`translateX(${t-this._yearScrollerWidth}px)`,this._yearScroller.style.transform=`translateX(${t}px)`)}_yearAfterXMonths(t){return xa(t).getFullYear()}_differenceInMonths(t,e){return(t.getFullYear()-e.getFullYear())*12-e.getMonth()+t.getMonth()}_clear(){this._selectDate("")}_close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}_cancel(){this.focusedDate=this.selectedDate,this._close()}_preventDefault(t){t.preventDefault()}__toggleDate(t){he(t,this.selectedDate)?(this._clear(),this.focusedDate=t):this._selectDate(t)}__onMonthCalendarKeyDown(t){let e=!1;switch(t.key){case"ArrowDown":this._moveFocusByDays(7),e=!0;break;case"ArrowUp":this._moveFocusByDays(-7),e=!0;break;case"ArrowRight":this._moveFocusByDays(this.__isRTL?-1:1),e=!0;break;case"ArrowLeft":this._moveFocusByDays(this.__isRTL?1:-1),e=!0;break;case"Enter":this._selectDate(this.focusedDate),this._close(),e=!0;break;case" ":this.__toggleDate(this.focusedDate),e=!0;break;case"Home":this._moveFocusInsideMonth(this.focusedDate,"minDate"),e=!0;break;case"End":this._moveFocusInsideMonth(this.focusedDate,"maxDate"),e=!0;break;case"PageDown":this._moveFocusByMonths(t.shiftKey?12:1),e=!0;break;case"PageUp":this._moveFocusByMonths(t.shiftKey?-12:-1),e=!0;break;case"Tab":this._onTabKeyDown(t,"calendar");break}e&&(t.preventDefault(),t.stopPropagation())}_onTabKeyDown(t,e){switch(t.stopPropagation(),e){case"calendar":t.shiftKey&&(t.preventDefault(),this.hasAttribute("fullscreen")?this.focusCancel():this.__focusInput());break;case"today":t.shiftKey&&(t.preventDefault(),this.focusDateElement());break;case"cancel":t.shiftKey||(t.preventDefault(),this.hasAttribute("fullscreen")?this.focusDateElement():this.__focusInput());break}}__onTodayButtonKeyDown(t){t.key==="Tab"&&this._onTabKeyDown(t,"today")}__onCancelButtonKeyDown(t){t.key==="Tab"&&this._onTabKeyDown(t,"cancel")}__focusInput(){this.dispatchEvent(new CustomEvent("focus-input",{bubbles:!0,composed:!0}))}__tryFocusDate(){if(this.__pendingDateFocus){const e=this.focusableDateElement;e&&he(e.date,this.__pendingDateFocus)&&(delete this.__pendingDateFocus,e.focus())}}async focusDate(t,e){const r=t||this.selectedDate||this.initialPosition||new Date;this.focusedDate=r,e||(this._focusedMonthDate=r.getDate()),await this.focusDateElement(!1)}async focusDateElement(t=!0){this.__pendingDateFocus=this.focusedDate,this.calendars.length||await new Promise(e=>{rs(this,()=>{ba(),e()})}),t&&this.revealDate(this.focusedDate),this._revealPromise&&await this._revealPromise,this.__tryFocusDate()}_focusClosestDate(t){this.focusDate(ya(t,[this.minDate,this.maxDate]))}_focusAllowedDate(t,e,r){this._dateAllowed(t)?this.focusDate(t,r):this._dateAllowed(this.focusedDate)?e>0?this.focusDate(this.maxDate):this.focusDate(this.minDate):this._focusClosestDate(this.focusedDate)}_getDateDiff(t,e){const r=new Date(0,0);return r.setFullYear(this.focusedDate.getFullYear()),r.setMonth(this.focusedDate.getMonth()+t),e&&r.setDate(this.focusedDate.getDate()+e),r}_moveFocusByDays(t){const e=this._getDateDiff(0,t);this._focusAllowedDate(e,t,!1)}_moveFocusByMonths(t){const e=this._getDateDiff(t),r=e.getMonth();this._focusedMonthDate||(this._focusedMonthDate=this.focusedDate.getDate()),e.setDate(this._focusedMonthDate),e.getMonth()!==r&&e.setDate(0),this._focusAllowedDate(e,t,!0)}_moveFocusInsideMonth(t,e){const r=new Date(0,0);r.setFullYear(t.getFullYear()),e==="minDate"?(r.setMonth(t.getMonth()),r.setDate(1)):(r.setMonth(t.getMonth()+1),r.setDate(0)),this._dateAllowed(r)?this.focusDate(r):this._dateAllowed(t)?this.focusDate(this[e]):this._focusClosestDate(t)}_dateAllowed(t,e=this.minDate,r=this.maxDate){return(!e||t>=e)&&(!r||t<=r)}_isTodayAllowed(t,e){const r=new Date,i=new Date(0,0);return i.setFullYear(r.getFullYear()),i.setMonth(r.getMonth()),i.setDate(r.getDate()),this._dateAllowed(i,t,e)}}customElements.define(xo.is,xo);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const as=B(s=>class extends es(ts(s)){static get properties(){return{autofocus:{type:Boolean},focusElement:{type:Object,readOnly:!0,observer:"_focusElementChanged"},_lastTabIndex:{value:0}}}constructor(){super(),this._boundOnBlur=this._onBlur.bind(this),this._boundOnFocus=this._onFocus.bind(this)}ready(){super.ready(),this.autofocus&&!this.disabled&&requestAnimationFrame(()=>{this.focus(),this.setAttribute("focus-ring","")})}focus(){!this.focusElement||this.disabled||(this.focusElement.focus(),this._setFocused(!0))}blur(){this.focusElement&&(this.focusElement.blur(),this._setFocused(!1))}click(){this.focusElement&&!this.disabled&&this.focusElement.click()}_focusElementChanged(e,r){e?(e.disabled=this.disabled,this._addFocusListeners(e),this.__forwardTabIndex(this.tabindex)):r&&this._removeFocusListeners(r)}_addFocusListeners(e){e.addEventListener("blur",this._boundOnBlur),e.addEventListener("focus",this._boundOnFocus)}_removeFocusListeners(e){e.removeEventListener("blur",this._boundOnBlur),e.removeEventListener("focus",this._boundOnFocus)}_onFocus(e){e.stopPropagation(),this.dispatchEvent(new Event("focus"))}_onBlur(e){e.stopPropagation(),this.dispatchEvent(new Event("blur"))}_shouldSetFocus(e){return e.target===this.focusElement}_shouldRemoveFocus(e){return e.target===this.focusElement}_disabledChanged(e,r){super._disabledChanged(e,r),this.focusElement&&(this.focusElement.disabled=e),e&&this.blur()}_tabindexChanged(e){this.__forwardTabIndex(e)}__forwardTabIndex(e){e!==void 0&&this.focusElement&&(this.focusElement.tabIndex=e,e!==-1&&(this.tabindex=void 0)),this.disabled&&e&&(e!==-1&&(this._lastTabIndex=e),this.tabindex=void 0)}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ls=B(s=>class extends s{static get properties(){return{inputElement:{type:Object,readOnly:!0,observer:"_inputElementChanged"},type:{type:String,readOnly:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0},_hasInputValue:{type:Boolean,value:!1,observer:"_hasInputValueChanged"}}}constructor(){super(),this._boundOnInput=this.__onInput.bind(this),this._boundOnChange=this._onChange.bind(this)}get _hasValue(){return this.value!=null&&this.value!==""}get _inputElementValueProperty(){return"value"}get _inputElementValue(){return this.inputElement?this.inputElement[this._inputElementValueProperty]:void 0}set _inputElementValue(e){this.inputElement&&(this.inputElement[this._inputElementValueProperty]=e)}clear(){this._hasInputValue=!1,this.value="",this._inputElementValue=""}_addInputListeners(e){e.addEventListener("input",this._boundOnInput),e.addEventListener("change",this._boundOnChange)}_removeInputListeners(e){e.removeEventListener("input",this._boundOnInput),e.removeEventListener("change",this._boundOnChange)}_forwardInputValue(e){this.inputElement&&(this._inputElementValue=e??"")}_inputElementChanged(e,r){e?this._addInputListeners(e):r&&this._removeInputListeners(r)}_hasInputValueChanged(e,r){(e||r)&&this.dispatchEvent(new CustomEvent("has-input-value-changed"))}__onInput(e){this._setHasInputValue(e),this._onInput(e)}_onInput(e){const r=e.composedPath()[0];this.__userInput=e.isTrusted,this.value=r.value,this.__userInput=!1}_onChange(e){}_toggleHasValue(e){this.toggleAttribute("has-value",e)}_valueChanged(e,r){this._toggleHasValue(this._hasValue),!(e===""&&r===void 0)&&(this.__userInput||this._forwardInputValue(e))}_setHasInputValue(e){const r=e.composedPath()[0];this._hasInputValue=r.value.length>0}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Np=s=>class extends ls(Cr(s)){static get properties(){return{clearButtonVisible:{type:Boolean,reflectToAttribute:!0,value:!1}}}get clearElement(){return console.warn(`Please implement the 'clearElement' property in <${this.localName}>`),null}ready(){super.ready(),this.clearElement&&(this.clearElement.addEventListener("mousedown",e=>this._onClearButtonMouseDown(e)),this.clearElement.addEventListener("click",e=>this._onClearButtonClick(e)))}_onClearButtonClick(e){e.preventDefault(),this._onClearAction()}_onClearButtonMouseDown(e){e.preventDefault(),is||this.inputElement.focus()}_onEscape(e){super._onEscape(e),this.clearButtonVisible&&this.value&&(e.stopPropagation(),this._onClearAction())}_onClearAction(){this.clear(),this.inputElement.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.inputElement.dispatchEvent(new Event("change",{bubbles:!0}))}};/**
 * @license
 * Copyright (c) 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Xr=new Map;function ds(s){return Xr.has(s)||Xr.set(s,new WeakMap),Xr.get(s)}function Ea(s,t){s&&s.removeAttribute(t)}function Aa(s,t){if(!s||!t)return;const e=ds(t);if(e.has(s))return;const r=Wi(s.getAttribute(t));e.set(s,new Set(r))}function Rp(s,t){if(!s||!t)return;const e=ds(t),r=e.get(s);!r||r.size===0?s.removeAttribute(t):Ht(s,t,yr(r)),e.delete(s)}function Qr(s,t,e={newId:null,oldId:null,fromUser:!1}){if(!s||!t)return;const{newId:r,oldId:i,fromUser:o}=e,n=ds(t),a=n.get(s);if(!o&&a){i&&a.delete(i),r&&a.add(r);return}o&&(a?r||n.delete(s):Aa(s,t),Ea(s,t)),wr(s,t,i);const l=r||yr(a);l&&Ht(s,t,l)}function Fp(s,t){Aa(s,t),Ea(s,t)}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Lp{constructor(t){this.host=t,this.__required=!1}setTarget(t){this.__target=t,this.__setAriaRequiredAttribute(this.__required),this.__setLabelIdToAriaAttribute(this.__labelId,this.__labelId),this.__labelIdFromUser!=null&&this.__setLabelIdToAriaAttribute(this.__labelIdFromUser,this.__labelIdFromUser,!0),this.__setErrorIdToAriaAttribute(this.__errorId),this.__setHelperIdToAriaAttribute(this.__helperId),this.setAriaLabel(this.__label)}setRequired(t){this.__setAriaRequiredAttribute(t),this.__required=t}setAriaLabel(t){this.__setAriaLabelToAttribute(t),this.__label=t}setLabelId(t,e=!1){const r=e?this.__labelIdFromUser:this.__labelId;this.__setLabelIdToAriaAttribute(t,r,e),e?this.__labelIdFromUser=t:this.__labelId=t}setErrorId(t){this.__setErrorIdToAriaAttribute(t,this.__errorId),this.__errorId=t}setHelperId(t){this.__setHelperIdToAriaAttribute(t,this.__helperId),this.__helperId=t}__setAriaLabelToAttribute(t){this.__target&&(t?(Fp(this.__target,"aria-labelledby"),this.__target.setAttribute("aria-label",t)):this.__label&&(Rp(this.__target,"aria-labelledby"),this.__target.removeAttribute("aria-label")))}__setLabelIdToAriaAttribute(t,e,r){Qr(this.__target,"aria-labelledby",{newId:t,oldId:e,fromUser:r})}__setErrorIdToAriaAttribute(t,e){Qr(this.__target,"aria-describedby",{newId:t,oldId:e,fromUser:!1})}__setHelperIdToAriaAttribute(t,e){Qr(this.__target,"aria-describedby",{newId:t,oldId:e,fromUser:!1})}__setAriaRequiredAttribute(t){this.__target&&(["input","textarea"].includes(this.__target.localName)||(t?this.__target.setAttribute("aria-required","true"):this.__target.removeAttribute("aria-required")))}}/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class cs extends ke{constructor(t,e,r,i={}){super(t,e,r,{...i,useUniqueId:!0})}initCustomNode(t){this.__updateNodeId(t),this.__notifyChange(t)}teardownNode(t){const e=this.getSlotChild();e&&e!==this.defaultNode?this.__notifyChange(e):(this.restoreDefaultNode(),this.updateDefaultNode(this.node))}attachDefaultNode(){const t=super.attachDefaultNode();return t&&this.__updateNodeId(t),t}restoreDefaultNode(){}updateDefaultNode(t){this.__notifyChange(t)}observeNode(t){this.__nodeObserver&&this.__nodeObserver.disconnect(),this.__nodeObserver=new MutationObserver(e=>{e.forEach(r=>{const i=r.target,o=i===this.node;r.type==="attributes"?o&&this.__updateNodeId(i):(o||i.parentElement===this.node)&&this.__notifyChange(this.node)})}),this.__nodeObserver.observe(t,{attributes:!0,attributeFilter:["id"],childList:!0,subtree:!0,characterData:!0})}__hasContent(t){return t?t.nodeType===Node.ELEMENT_NODE&&(customElements.get(t.localName)||t.children.length>0)||t.textContent&&t.textContent.trim()!=="":!1}__notifyChange(t){this.dispatchEvent(new CustomEvent("slot-content-changed",{detail:{hasContent:this.__hasContent(t),node:t}}))}__updateNodeId(t){const e=!this.nodes||t===this.nodes[0];t.nodeType===Node.ELEMENT_NODE&&(!this.multiple||e)&&!t.id&&(t.id=this.defaultId)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class $p extends cs{constructor(t){super(t,"error-message","div")}setErrorMessage(t){this.errorMessage=t,this.updateDefaultNode(this.node)}setInvalid(t){this.invalid=t,this.updateDefaultNode(this.node)}initAddedNode(t){t!==this.defaultNode&&this.initCustomNode(t)}initNode(t){this.updateDefaultNode(t)}initCustomNode(t){t.textContent&&!this.errorMessage&&(this.errorMessage=t.textContent.trim()),super.initCustomNode(t)}restoreDefaultNode(){this.attachDefaultNode()}updateDefaultNode(t){const{errorMessage:e,invalid:r}=this,i=!!(r&&e&&e.trim()!=="");t&&(t.textContent=i?e:"",t.hidden=!i,i?t.setAttribute("role","alert"):t.removeAttribute("role")),super.updateDefaultNode(t)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Hp extends cs{constructor(t){super(t,"helper",null)}setHelperText(t){this.helperText=t,this.getSlotChild()||this.restoreDefaultNode(),this.node===this.defaultNode&&this.updateDefaultNode(this.node)}restoreDefaultNode(){const{helperText:t}=this;if(t&&t.trim()!==""){this.tagName="div";const e=this.attachDefaultNode();this.observeNode(e)}}updateDefaultNode(t){t&&(t.textContent=this.helperText),super.updateDefaultNode(t)}initCustomNode(t){super.initCustomNode(t),this.observeNode(t)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Bp extends cs{constructor(t){super(t,"label","label")}setLabel(t){this.label=t,this.getSlotChild()||this.restoreDefaultNode(),this.node===this.defaultNode&&this.updateDefaultNode(this.node)}restoreDefaultNode(){const{label:t}=this;if(t&&t.trim()!==""){const e=this.attachDefaultNode();this.observeNode(e)}}updateDefaultNode(t){t&&(t.textContent=this.label),super.updateDefaultNode(t)}initCustomNode(t){super.initCustomNode(t),this.observeNode(t)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Pa=B(s=>class extends $e(s){static get properties(){return{label:{type:String,observer:"_labelChanged"}}}constructor(){super(),this._labelController=new Bp(this),this._labelController.addEventListener("slot-content-changed",e=>{this.toggleAttribute("has-label",e.detail.hasContent)})}get _labelId(){const e=this._labelNode;return e&&e.id}get _labelNode(){return this._labelController.node}ready(){super.ready(),this.addController(this._labelController)}_labelChanged(e){this._labelController.setLabel(e)}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Da=B(s=>class extends s{static get properties(){return{invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},required:{type:Boolean,reflectToAttribute:!0}}}validate(){const e=this.checkValidity();return this._setInvalid(!e),this.dispatchEvent(new CustomEvent("validated",{detail:{valid:e}})),e}checkValidity(){return!this.required||!!this.value}_setInvalid(e){this._shouldSetInvalid(e)&&(this.invalid=e)}_shouldSetInvalid(e){return!0}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Vp=s=>class extends Da(Pa($e(s))){static get properties(){return{ariaTarget:{type:Object,observer:"_ariaTargetChanged"},errorMessage:{type:String,observer:"_errorMessageChanged"},helperText:{type:String,observer:"_helperTextChanged"},accessibleName:{type:String,observer:"_accessibleNameChanged"},accessibleNameRef:{type:String,observer:"_accessibleNameRefChanged"}}}static get observers(){return["_invalidChanged(invalid)","_requiredChanged(required)"]}constructor(){super(),this._fieldAriaController=new Lp(this),this._helperController=new Hp(this),this._errorController=new $p(this),this._errorController.addEventListener("slot-content-changed",e=>{this.toggleAttribute("has-error-message",e.detail.hasContent)}),this._labelController.addEventListener("slot-content-changed",e=>{const{hasContent:r,node:i}=e.detail;this.__labelChanged(r,i)}),this._helperController.addEventListener("slot-content-changed",e=>{const{hasContent:r,node:i}=e.detail;this.toggleAttribute("has-helper",r),this.__helperChanged(r,i)})}get _errorNode(){return this._errorController.node}get _helperNode(){return this._helperController.node}ready(){super.ready(),this.addController(this._fieldAriaController),this.addController(this._helperController),this.addController(this._errorController)}__helperChanged(e,r){e?this._fieldAriaController.setHelperId(r.id):this._fieldAriaController.setHelperId(null)}_accessibleNameChanged(e){this._fieldAriaController.setAriaLabel(e)}_accessibleNameRefChanged(e){this._fieldAriaController.setLabelId(e,!0)}__labelChanged(e,r){e?this._fieldAriaController.setLabelId(r.id):this._fieldAriaController.setLabelId(null)}_errorMessageChanged(e){this._errorController.setErrorMessage(e)}_helperTextChanged(e){this._helperController.setHelperText(e)}_ariaTargetChanged(e){e&&this._fieldAriaController.setTarget(e)}_requiredChanged(e){this._fieldAriaController.setRequired(e)}_invalidChanged(e){this._errorController.setInvalid(e),setTimeout(()=>{if(e){const r=this._errorNode;this._fieldAriaController.setErrorId(r&&r.id)}else this._fieldAriaController.setErrorId(null)})}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Sa=B(s=>class extends s{static get properties(){return{stateTarget:{type:Object,observer:"_stateTargetChanged"}}}static get delegateAttrs(){return[]}static get delegateProps(){return[]}ready(){super.ready(),this._createDelegateAttrsObserver(),this._createDelegatePropsObserver()}_stateTargetChanged(e){e&&(this._ensureAttrsDelegated(),this._ensurePropsDelegated())}_createDelegateAttrsObserver(){this._createMethodObserver(`_delegateAttrsChanged(${this.constructor.delegateAttrs.join(", ")})`)}_createDelegatePropsObserver(){this._createMethodObserver(`_delegatePropsChanged(${this.constructor.delegateProps.join(", ")})`)}_ensureAttrsDelegated(){this.constructor.delegateAttrs.forEach(e=>{this._delegateAttribute(e,this[e])})}_ensurePropsDelegated(){this.constructor.delegateProps.forEach(e=>{this._delegateProperty(e,this[e])})}_delegateAttrsChanged(...e){this.constructor.delegateAttrs.forEach((r,i)=>{this._delegateAttribute(r,e[i])})}_delegatePropsChanged(...e){this.constructor.delegateProps.forEach((r,i)=>{this._delegateProperty(r,e[i])})}_delegateAttribute(e,r){this.stateTarget&&(e==="invalid"&&this._delegateAttribute("aria-invalid",r?"true":!1),typeof r=="boolean"?this.stateTarget.toggleAttribute(e,r):r?this.stateTarget.setAttribute(e,r):this.stateTarget.removeAttribute(e))}_delegateProperty(e,r){this.stateTarget&&(this.stateTarget[e]=r)}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ka=B(s=>class extends Sa(Da(ls(s))){static get constraints(){return["required"]}static get delegateAttrs(){return[...super.delegateAttrs,"required"]}ready(){super.ready(),this._createConstraintsObserver()}checkValidity(){return this.inputElement&&this._hasValidConstraints(this.constructor.constraints.map(e=>this[e]))?this.inputElement.checkValidity():!this.invalid}_hasValidConstraints(e){return e.some(r=>this.__isValidConstraint(r))}_createConstraintsObserver(){this._createMethodObserver(`_constraintsChanged(stateTarget, ${this.constructor.constraints.join(", ")})`)}_constraintsChanged(e,...r){if(!e)return;const i=this._hasValidConstraints(r),o=this.__previousHasConstraints&&!i;(this._hasValue||this.invalid)&&i?this.validate():o&&this._setInvalid(!1),this.__previousHasConstraints=i}_onChange(e){e.stopPropagation(),this.validate(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:e},bubbles:e.bubbles,cancelable:e.cancelable}))}__isValidConstraint(e){return!!e||e===0}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Jr=new WeakMap;function Up(s){return Jr.has(s)||Jr.set(s,new Set),Jr.get(s)}function Wp(s,t){const e=document.createElement("style");e.textContent=s,t===document?document.head.appendChild(e):t.insertBefore(e,t.firstChild)}const Yp=B(s=>class extends s{get slotStyles(){return{}}connectedCallback(){super.connectedCallback(),this.__applySlotStyles()}__applySlotStyles(){const e=this.getRootNode(),r=Up(e);this.slotStyles.forEach(i=>{r.has(i)||(Wp(i,e),r.add(i))})}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const qp=s=>class extends Yp(as(ka(Vp(Np(Cr(s)))))){static get properties(){return{allowedCharPattern:{type:String,observer:"_allowedCharPatternChanged"},autoselect:{type:Boolean,value:!1},name:{type:String,reflectToAttribute:!0},placeholder:{type:String,reflectToAttribute:!0},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},title:{type:String,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"name","type","placeholder","readonly","invalid","title"]}constructor(){super(),this._boundOnPaste=this._onPaste.bind(this),this._boundOnDrop=this._onDrop.bind(this),this._boundOnBeforeInput=this._onBeforeInput.bind(this)}get slotStyles(){return[`
          :is(input[slot='input'], textarea[slot='textarea'])::placeholder {
            font: inherit;
            color: inherit;
          }
        `]}_onFocus(e){super._onFocus(e),this.autoselect&&this.inputElement&&this.inputElement.select()}_onChange(e){e.stopPropagation(),this.validate(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:e},bubbles:e.bubbles,cancelable:e.cancelable}))}_addInputListeners(e){super._addInputListeners(e),e.addEventListener("paste",this._boundOnPaste),e.addEventListener("drop",this._boundOnDrop),e.addEventListener("beforeinput",this._boundOnBeforeInput)}_removeInputListeners(e){super._removeInputListeners(e),e.removeEventListener("paste",this._boundOnPaste),e.removeEventListener("drop",this._boundOnDrop),e.removeEventListener("beforeinput",this._boundOnBeforeInput)}_onKeyDown(e){super._onKeyDown(e),this.allowedCharPattern&&!this.__shouldAcceptKey(e)&&(e.preventDefault(),this._markInputPrevented())}_markInputPrevented(){this.setAttribute("input-prevented",""),this._preventInputDebouncer=I.debounce(this._preventInputDebouncer,se.after(200),()=>{this.removeAttribute("input-prevented")})}__shouldAcceptKey(e){return e.metaKey||e.ctrlKey||!e.key||e.key.length!==1||this.__allowedCharRegExp.test(e.key)}_onPaste(e){if(this.allowedCharPattern){const r=e.clipboardData.getData("text");this.__allowedTextRegExp.test(r)||(e.preventDefault(),this._markInputPrevented())}}_onDrop(e){if(this.allowedCharPattern){const r=e.dataTransfer.getData("text");this.__allowedTextRegExp.test(r)||(e.preventDefault(),this._markInputPrevented())}}_onBeforeInput(e){this.allowedCharPattern&&e.data&&!this.__allowedTextRegExp.test(e.data)&&(e.preventDefault(),this._markInputPrevented())}_allowedCharPatternChanged(e){if(e)try{this.__allowedCharRegExp=new RegExp(`^${e}$`,"u"),this.__allowedTextRegExp=new RegExp(`^${e}*$`,"u")}catch(r){console.error(r)}}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ia extends ke{constructor(t,e){super(t,"input","input",{initializer:(r,i)=>{i.value&&r.setAttribute("value",i.value),i.type&&r.setAttribute("type",i.type),r.id=this.defaultId,typeof e=="function"&&e(r)},useUniqueId:!0})}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Oa{constructor(t,e){this.input=t,this.__preventDuplicateLabelClick=this.__preventDuplicateLabelClick.bind(this),e.addEventListener("slot-content-changed",r=>{this.__initLabel(r.detail.node)}),this.__initLabel(e.node)}__initLabel(t){t&&(t.addEventListener("click",this.__preventDuplicateLabelClick),this.input&&t.setAttribute("for",this.input.id))}__preventDuplicateLabelClick(){const t=e=>{e.stopImmediatePropagation(),this.input.removeEventListener("click",t)};this.input.addEventListener("click",t)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const jp=g`
  [part='clear-button'] {
    display: none;
    cursor: default;
  }

  [part='clear-button']::before {
    content: '\\2715';
  }

  :host([clear-button-visible][has-value]:not([disabled]):not([readonly])) [part='clear-button'] {
    display: block;
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Gp=g`
  :host {
    display: inline-flex;
    outline: none;
  }

  :host::before {
    content: '\\2003';
    width: 0;
    display: inline-block;
    /* Size and position this element on the same vertical position as the input-field element
          to make vertical align for the host element work as expected */
  }

  :host([hidden]) {
    display: none !important;
  }

  :host(:not([has-label])) [part='label'] {
    display: none;
  }

  @media (forced-colors: active) {
    :host(:not([readonly])) [part='input-field'] {
      outline: 1px solid;
      outline-offset: -1px;
    }
    :host([focused]) [part='input-field'] {
      outline-width: 2px;
    }
    :host([disabled]) [part='input-field'] {
      outline-color: GrayText;
    }
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Kp=g`
  [class$='container'] {
    display: flex;
    flex-direction: column;
    min-width: 100%;
    max-width: 100%;
    width: var(--vaadin-field-default-width, 12em);
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Xp=[Gp,Kp,jp];/**
 * @license
 * Copyright (c) 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const za=s=>class extends s{static get properties(){return{overlayClass:{type:String},_overlayElement:{type:Object}}}static get observers(){return["__updateOverlayClassNames(overlayClass, _overlayElement)"]}__updateOverlayClassNames(e,r){if(!r||e===void 0)return;const{classList:i}=r;if(this.__initialClasses||(this.__initialClasses=new Set(i)),Array.isArray(this.__previousClasses)){const n=this.__previousClasses.filter(a=>!this.__initialClasses.has(a));n.length>0&&i.remove(...n)}const o=typeof e=="string"?e.split(" "):[];o.length>0&&i.add(...o),this.__previousClasses=o}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Qp{constructor(t){this.host=t,t.addEventListener("opened-changed",()=>{t.opened||this.__setVirtualKeyboardEnabled(!1)}),t.addEventListener("blur",()=>this.__setVirtualKeyboardEnabled(!0)),t.addEventListener("touchstart",()=>this.__setVirtualKeyboardEnabled(!0))}__setVirtualKeyboardEnabled(t){this.host.inputElement&&(this.host.inputElement.inputMode=t?"":"none")}}/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Jp=s=>class extends za($e(as(ka(Cr(s))))){static get properties(){return{_selectedDate:{type:Date},_focusedDate:Date,value:{type:String,notify:!0,value:""},initialPosition:String,opened:{type:Boolean,reflectToAttribute:!0,notify:!0,observer:"_openedChanged"},autoOpenDisabled:Boolean,showWeekNumbers:{type:Boolean,value:!1},_fullscreen:{type:Boolean,value:!1},_fullscreenMediaQuery:{value:"(max-width: 420px), (max-height: 420px)"},i18n:{type:Object,value:()=>({monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],firstDayOfWeek:0,today:"Today",cancel:"Cancel",referenceDate:"",formatDate(e){const r=String(e.year).replace(/\d+/u,i=>"0000".substr(i.length)+i);return[e.month+1,e.day,r].join("/")},parseDate(e){const r=e.split("/"),i=new Date;let o,n=i.getMonth(),a=i.getFullYear();if(r.length===3){if(n=parseInt(r[0])-1,o=parseInt(r[1]),a=parseInt(r[2]),r[2].length<3&&a>=0){const l=this.referenceDate?pt(this.referenceDate):new Date;a=Op(l,a,n,o)}}else r.length===2?(n=parseInt(r[0])-1,o=parseInt(r[1])):r.length===1&&(o=parseInt(r[0]));if(o!==void 0)return{day:o,month:n,year:a}},formatTitle:(e,r)=>`${e} ${r}`})},min:{type:String},max:{type:String},_minDate:{type:Date,computed:"__computeMinOrMaxDate(min)"},_maxDate:{type:Date,computed:"__computeMinOrMaxDate(max)"},_noInput:{type:Boolean,computed:"_isNoInput(inputElement, _fullscreen, _ios, i18n, opened, autoOpenDisabled)"},_ios:{type:Boolean,value:fr},_focusOverlayOnOpen:Boolean,_overlayContent:Object,_hasInputValue:{type:Boolean}}}static get observers(){return["_selectedDateChanged(_selectedDate, i18n.formatDate)","_focusedDateChanged(_focusedDate, i18n.formatDate)","__updateOverlayContent(_overlayContent, i18n, label, _minDate, _maxDate, _focusedDate, _selectedDate, showWeekNumbers)","__updateOverlayContentTheme(_overlayContent, _theme)","__updateOverlayContentFullScreen(_overlayContent, _fullscreen)"]}static get constraints(){return[...super.constraints,"min","max"]}constructor(){super(),this._boundOnClick=this._onClick.bind(this),this._boundOnScroll=this._onScroll.bind(this),this._boundOverlayRenderer=this._overlayRenderer.bind(this)}get _inputElementValue(){return super._inputElementValue}set _inputElementValue(e){super._inputElementValue=e,this._hasInputValue=!1}get clearElement(){return null}get _nativeInput(){return this.inputElement?this.inputElement.focusElement||this.inputElement:null}_onFocus(e){super._onFocus(e),this._noInput&&e.target.blur()}_onBlur(e){super._onBlur(e),this.opened||(this.autoOpenDisabled&&this._selectParsedOrFocusedDate(),document.hasFocus()&&this.validate(),this._inputElementValue===""&&this.value!==""&&(this.value=""))}ready(){super.ready(),this.addEventListener("click",this._boundOnClick),this.addController(new Ta(this._fullscreenMediaQuery,r=>{this._fullscreen=r})),this.addController(new Qp(this));const e=this.$.overlay;this._overlayElement=e,e.renderer=this._boundOverlayRenderer,this.addEventListener("mousedown",()=>this.__bringToFront()),this.addEventListener("touchstart",()=>this.__bringToFront())}disconnectedCallback(){super.disconnectedCallback(),this.opened=!1}_propertiesChanged(e,r,i){super._propertiesChanged(e,r,i),"value"in r&&this.__dispatchChange&&(this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this.__dispatchChange=!1)}open(){!this.disabled&&!this.readonly&&(this.opened=!0)}close(){this.$.overlay.close()}_overlayRenderer(e){if(e.firstChild)return;const r=document.createElement("vaadin-date-picker-overlay-content");e.appendChild(r),this._overlayContent=r,r.addEventListener("close",()=>{this._close()}),r.addEventListener("focus-input",this._focusAndSelect.bind(this)),r.addEventListener("date-tap",i=>{this.__userConfirmedDate=!0,this._selectDate(i.detail.date),this._close()}),r.addEventListener("date-selected",i=>{this.__userConfirmedDate=!!i.detail.date,this._selectDate(i.detail.date)}),r.addEventListener("focusin",()=>{this._keyboardActive&&this._setFocused(!0)}),r.addEventListener("focused-date-changed",i=>{this._focusedDate=i.detail.value})}checkValidity(){const e=this._inputElementValue,r=!e||!!this._selectedDate&&e===this._getFormattedDate(this.i18n.formatDate,this._selectedDate),i=!this._selectedDate||Et(this._selectedDate,this._minDate,this._maxDate);let o=!0;return this.inputElement&&(this.inputElement.checkValidity?o=this.inputElement.checkValidity():this.inputElement.validate&&(o=this.inputElement.validate())),r&&i&&o}_shouldSetFocus(e){return!this._shouldKeepFocusRing}_shouldRemoveFocus(e){return!this.opened}_setFocused(e){super._setFocused(e),this._shouldKeepFocusRing=e&&this._keyboardActive}_selectDate(e){const r=this._formatISO(e);this.value!==r&&(this.__dispatchChange=!0),this._selectedDate=e}_close(){this._focus(),this.close()}__bringToFront(){requestAnimationFrame(()=>{this.$.overlay.bringToFront()})}_isNoInput(e,r,i,o,n,a){return!e||r&&(!a||n)||i&&n||!o.parseDate}_formatISO(e){if(!(e instanceof Date))return"";const r=(c,h="00")=>(h+c).substr((h+c).length-h.length);let i="",o="0000",n=e.getFullYear();n<0?(n=-n,i="-",o="000000"):e.getFullYear()>=1e4&&(i="+",o="000000");const a=i+r(n,o),l=r(e.getMonth()+1),d=r(e.getDate());return[a,l,d].join("-")}_inputElementChanged(e){super._inputElementChanged(e),e&&(e.autocomplete="off",e.setAttribute("role","combobox"),e.setAttribute("aria-haspopup","dialog"),e.setAttribute("aria-expanded",!!this.opened),this._applyInputValue(this._selectedDate))}_openedChanged(e){this.inputElement&&this.inputElement.setAttribute("aria-expanded",e)}_selectedDateChanged(e,r){if(e===void 0||r===void 0)return;const i=this._formatISO(e);this.__keepInputValue||this._applyInputValue(e),i!==this.value&&(this.validate(),this.value=i),this._ignoreFocusedDateChange=!0,this._focusedDate=e,this._ignoreFocusedDateChange=!1}_focusedDateChanged(e,r){e===void 0||r===void 0||!this._ignoreFocusedDateChange&&!this._noInput&&this._applyInputValue(e)}_valueChanged(e,r){const i=pt(e);if(e&&!i){this.value=r;return}e?he(this._selectedDate,i)||(this._selectedDate=i,r!==void 0&&this.validate()):this._selectedDate=null,this._toggleHasValue(this._hasValue)}__updateOverlayContent(e,r,i,o,n,a,l,d){e&&e.setProperties({i18n:r,label:i,minDate:o,maxDate:n,focusedDate:a,selectedDate:l,showWeekNumbers:d})}__updateOverlayContentTheme(e,r){e&&(r?e.setAttribute("theme",r):e.removeAttribute("theme"))}__updateOverlayContentFullScreen(e,r){e&&e.toggleAttribute("fullscreen",r)}_onOverlayEscapePress(){this._focusedDate=this._selectedDate,this._close()}_onOverlayOpened(){const e=this._overlayContent,r=this._getInitialPosition();e.initialPosition=r;const i=e.focusedDate||r;e.scrollToDate(i),this._ignoreFocusedDateChange=!0,e.focusedDate=i,this._ignoreFocusedDateChange=!1,window.addEventListener("scroll",this._boundOnScroll,!0),this._focusOverlayOnOpen?(e.focusDateElement(),this._focusOverlayOnOpen=!1):this._focus();const o=this._nativeInput;this._noInput&&o&&(o.blur(),this._overlayContent.focusDateElement());const n=this._noInput?e:[o,e];this.__showOthers=ca(n)}_getInitialPosition(){const e=pt(this.initialPosition),r=this._selectedDate||this._overlayContent.initialPosition||e||new Date;return e||Et(r,this._minDate,this._maxDate)?r:ya(r,[this._minDate,this._maxDate])}_selectParsedOrFocusedDate(){if(this._ignoreFocusedDateChange=!0,this.i18n.parseDate){const e=this._inputElementValue||"",r=this._getParsedDate(e);this._isValidDate(r)?this._selectDate(r):(this.__keepInputValue=!0,this._selectDate(null),this._selectedDate=null,this.__keepInputValue=!1)}else this._focusedDate&&this._selectDate(this._focusedDate);this._ignoreFocusedDateChange=!1}_onOverlayClosed(){this.__showOthers&&(this.__showOthers(),this.__showOthers=null),window.removeEventListener("scroll",this._boundOnScroll,!0),this.__userConfirmedDate?this.__userConfirmedDate=!1:this._selectParsedOrFocusedDate(),this._nativeInput&&this._nativeInput.selectionStart&&(this._nativeInput.selectionStart=this._nativeInput.selectionEnd),this.value||this.validate()}_onScroll(e){(e.target===window||!this._overlayContent.contains(e.target))&&this._overlayContent._repositionYearScroller()}_focus(){this._noInput||this.inputElement.focus()}_focusAndSelect(){this._focus(),this._setSelectionRange(0,this._inputElementValue.length)}_applyInputValue(e){this._inputElementValue=e?this._getFormattedDate(this.i18n.formatDate,e):""}_getFormattedDate(e,r){return e(wa(r))}_setSelectionRange(e,r){this._nativeInput&&this._nativeInput.setSelectionRange&&this._nativeInput.setSelectionRange(e,r)}_isValidDate(e){return e&&!isNaN(e.getTime())}_onChange(e){this._inputElementValue===""&&(this.__dispatchChange=!0),e.stopPropagation()}_onClick(e){this._isClearButton(e)||this._onHostClick(e)}_onHostClick(e){(!this.autoOpenDisabled||this._noInput)&&(e.preventDefault(),this.open())}_onClearButtonClick(e){e.preventDefault(),this._inputElementValue="",this.value="",this.validate(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}_onKeyDown(e){switch(super._onKeyDown(e),this._noInput&&[9].indexOf(e.keyCode)===-1&&e.preventDefault(),e.key){case"ArrowDown":case"ArrowUp":e.preventDefault(),this.opened?this._overlayContent.focusDateElement():(this._focusOverlayOnOpen=!0,this.open());break;case"Tab":this.opened&&(e.preventDefault(),e.stopPropagation(),this._setSelectionRange(0,0),e.shiftKey?this._overlayContent.focusCancel():this._overlayContent.focusDateElement());break}}_onEnter(e){const r=this.value;this.opened?this.close():this._selectParsedOrFocusedDate(),r===this.value&&this.validate()}_onEscape(e){if(!this.opened){if(this.clearButtonVisible&&this.value){e.stopPropagation(),this._onClearButtonClick(e);return}this.autoOpenDisabled?(this.inputElement.value===""&&this._selectDate(null),this._applyInputValue(this._selectedDate)):(this._focusedDate=this._selectedDate,this._selectParsedOrFocusedDate())}}_getParsedDate(e=this._inputElementValue){const r=this.i18n.parseDate&&this.i18n.parseDate(e);return r&&pt(`${r.year}-${r.month+1}-${r.day}`)}_isClearButton(e){return e.composedPath()[0]===this.clearElement}_onInput(){!this.opened&&this.inputElement.value&&!this.autoOpenDisabled&&this.open(),this._userInputValueChanged()}_userInputValueChanged(){if(this._inputElementValue){const e=this._getParsedDate();this._isValidDate(e)&&(this._ignoreFocusedDateChange=!0,he(e,this._focusedDate)||(this._focusedDate=e),this._ignoreFocusedDateChange=!1)}}__computeMinOrMaxDate(e){return pt(e)}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */S("vaadin-date-picker",Xp,{moduleId:"vaadin-date-picker-styles"});class Co extends Jp(qp(fe(tt(K)))){static get is(){return"vaadin-date-picker"}static get template(){return ee`
      <style>
        :host([opened]) {
          pointer-events: auto;
        }

        :host([dir='rtl']) [part='input-field'] {
          direction: ltr;
        }

        :host([dir='rtl']) [part='input-field'] ::slotted(input)::placeholder {
          direction: rtl;
          text-align: left;
        }
      </style>

      <div class="vaadin-date-picker-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
          <div part="toggle-button" slot="suffix" aria-hidden="true" on-click="_toggle"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <vaadin-date-picker-overlay
        id="overlay"
        fullscreen$="[[_fullscreen]]"
        theme$="[[_theme]]"
        opened="{{opened}}"
        on-vaadin-overlay-escape-press="_onOverlayEscapePress"
        on-vaadin-overlay-open="_onOverlayOpened"
        on-vaadin-overlay-closing="_onOverlayClosed"
        restore-focus-on-close
        restore-focus-node="[[inputElement]]"
      ></vaadin-date-picker-overlay>

      <slot name="tooltip"></slot>
    `}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new Ia(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new Oa(this.inputElement,this._labelController)),this._tooltipController=new xr(this),this.addController(this._tooltipController),this._tooltipController.setPosition("top"),this._tooltipController.setShouldShow(e=>!e.opened),this.shadowRoot.querySelector('[part="toggle-button"]').addEventListener("mousedown",e=>e.preventDefault()),this.$.overlay.addEventListener("vaadin-overlay-close",this._onVaadinOverlayClose.bind(this))}_onVaadinOverlayClose(t){t.detail.sourceEvent&&t.detail.sourceEvent.composedPath().includes(this)&&t.preventDefault()}_toggle(t){t.stopPropagation(),this.$.overlay.opened?this.close():this.open()}_openedChanged(t){super._openedChanged(t),this.$.overlay.positionTarget=this.shadowRoot.querySelector('[part="input-field"]'),this.$.overlay.noVerticalOverlap=!0}}customElements.define(Co.is,Co);S("vaadin-checkbox",g`
    :host {
      color: var(--lumo-body-text-color);
      font-size: var(--lumo-font-size-m);
      font-family: var(--lumo-font-family);
      line-height: var(--lumo-line-height-s);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: default;
      outline: none;
      --_checkbox-size: var(--vaadin-checkbox-size, calc(var(--lumo-size-m) / 2));
    }

    :host([has-label]) ::slotted(label) {
      padding-block: var(--lumo-space-xs);
      padding-inline: var(--lumo-space-xs) var(--lumo-space-s);
    }

    [part='checkbox'] {
      width: var(--_checkbox-size);
      height: var(--_checkbox-size);
      margin: var(--lumo-space-xs);
      position: relative;
      border-radius: var(--lumo-border-radius-s);
      background-color: var(--lumo-contrast-20pct);
      transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), background-color 0.15s;
      cursor: var(--lumo-clickable-cursor);
      /* Default field border color */
      --_input-border-color: var(--vaadin-input-field-border-color, var(--lumo-contrast-50pct));
    }

    :host([indeterminate]),
    :host([checked]) {
      --vaadin-input-field-border-color: transparent;
    }

    :host([indeterminate]) [part='checkbox'],
    :host([checked]) [part='checkbox'] {
      background-color: var(--lumo-primary-color);
    }

    /* Checkmark */
    [part='checkbox']::after {
      pointer-events: none;
      font-family: 'lumo-icons';
      content: var(--lumo-icons-checkmark);
      color: var(--lumo-primary-contrast-color);
      font-size: calc(var(--_checkbox-size) + 2px);
      line-height: 1;
      position: absolute;
      top: -1px;
      left: -1px;
      contain: content;
      opacity: 0;
    }

    :host([checked]) [part='checkbox']::after {
      opacity: 1;
    }

    /* Indeterminate checkmark */
    :host([indeterminate]) [part='checkbox']::after {
      content: '';
      opacity: 1;
      top: 45%;
      height: 10%;
      left: 22%;
      right: 22%;
      width: auto;
      border: 0;
      background-color: var(--lumo-primary-contrast-color);
    }

    /* Focus ring */
    :host([focus-ring]) [part='checkbox'] {
      box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct),
        inset 0 0 0 var(--_input-border-width, 0) var(--_input-border-color);
    }

    /* Disabled */
    :host([disabled]) {
      pointer-events: none;
      color: var(--lumo-disabled-text-color);
      --vaadin-input-field-border-color: var(--lumo-contrast-20pct);
    }

    :host([disabled]) ::slotted(label) {
      color: inherit;
    }

    :host([disabled]) [part='checkbox'] {
      background-color: var(--lumo-contrast-10pct);
    }

    :host([disabled]) [part='checkbox']::after {
      color: var(--lumo-contrast-30pct);
    }

    :host([indeterminate][disabled]) [part='checkbox']::after {
      background-color: var(--lumo-contrast-30pct);
    }

    /* RTL specific styles */
    :host([dir='rtl'][has-label]) ::slotted(label) {
      padding: var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-s);
    }

    /* Used for activation "halo" */
    [part='checkbox']::before {
      pointer-events: none;
      color: transparent;
      width: 100%;
      height: 100%;
      line-height: var(--_checkbox-size);
      border-radius: inherit;
      background-color: inherit;
      transform: scale(1.4);
      opacity: 0;
      transition: transform 0.1s, opacity 0.8s;
    }

    /* Hover */
    :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {
      background-color: var(--lumo-contrast-30pct);
    }

    /* Disable hover for touch devices */
    @media (pointer: coarse) {
      :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {
        background-color: var(--lumo-contrast-20pct);
      }
    }

    /* Active */
    :host([active]) [part='checkbox'] {
      transform: scale(0.9);
      transition-duration: 0.05s;
    }

    :host([active][checked]) [part='checkbox'] {
      transform: scale(1.1);
    }

    :host([active]:not([checked])) [part='checkbox']::before {
      transition-duration: 0.01s, 0.01s;
      transform: scale(0);
      opacity: 0.4;
    }
  `,{moduleId:"lumo-checkbox"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Zp=B(s=>class extends Sa(Qi(ls(s))){static get properties(){return{checked:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0}}}static get delegateProps(){return[...super.delegateProps,"checked"]}_onChange(e){const r=e.target;this._toggleChecked(r.checked),ia(r)||r.focus()}_toggleChecked(e){this.checked=e}});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ef=s=>class extends Pa(Zp(as(ta(s)))){static get properties(){return{indeterminate:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0},name:{type:String,value:""}}}static get delegateProps(){return[...super.delegateProps,"indeterminate"]}static get delegateAttrs(){return[...super.delegateAttrs,"name"]}constructor(){super(),this._setType("checkbox"),this.value="on"}ready(){super.ready(),this.addController(new Ia(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new Oa(this.inputElement,this._labelController))}_shouldSetActive(e){return e.target.localName==="a"?!1:super._shouldSetActive(e)}_toggleChecked(e){this.indeterminate&&(this.indeterminate=!1),super._toggleChecked(e)}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const tf=g`
  :host {
    display: inline-block;
  }

  :host([hidden]) {
    display: none !important;
  }

  :host([disabled]) {
    -webkit-tap-highlight-color: transparent;
  }

  .vaadin-checkbox-container {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: baseline;
  }

  [part='checkbox'],
  ::slotted(input),
  ::slotted(label) {
    grid-row: 1;
  }

  [part='checkbox'],
  ::slotted(input) {
    grid-column: 1;
  }

  [part='checkbox'] {
    width: var(--vaadin-checkbox-size, 1em);
    height: var(--vaadin-checkbox-size, 1em);
    --_input-border-width: var(--vaadin-input-field-border-width, 0);
    --_input-border-color: var(--vaadin-input-field-border-color, transparent);
    box-shadow: inset 0 0 0 var(--_input-border-width, 0) var(--_input-border-color);
  }

  [part='checkbox']::before {
    display: block;
    content: '\\202F';
    line-height: var(--vaadin-checkbox-size, 1em);
    contain: paint;
  }

  /* visually hidden */
  ::slotted(input) {
    opacity: 0;
    cursor: inherit;
    margin: 0;
    align-self: stretch;
    -webkit-appearance: none;
  }

  @media (forced-colors: active) {
    [part='checkbox'] {
      outline: 1px solid;
      outline-offset: -1px;
    }

    :host([disabled]) [part='checkbox'],
    :host([disabled]) [part='checkbox']::after {
      outline-color: GrayText;
    }

    :host(:is([checked], [indeterminate])) [part='checkbox']::after {
      outline: 1px solid;
      outline-offset: -1px;
      border-radius: inherit;
    }

    :host([focused]) [part='checkbox'],
    :host([focused]) [part='checkbox']::after {
      outline-width: 2px;
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */S("vaadin-checkbox",tf,{moduleId:"vaadin-checkbox-styles"});class To extends ef(tt(fe(K))){static get is(){return"vaadin-checkbox"}static get template(){return ee`
      <div class="vaadin-checkbox-container">
        <div part="checkbox" aria-hidden="true"></div>
        <slot name="input"></slot>
        <slot name="label"></slot>
      </div>
      <slot name="tooltip"></slot>
    `}ready(){super.ready(),this._tooltipController=new xr(this),this.addController(this._tooltipController)}}customElements.define(To.is,To);S("vaadin-grid",g`
    :host {
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-s);
      color: var(--lumo-body-text-color);
      background-color: var(--lumo-base-color);
      box-sizing: border-box;
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: transparent;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      /* For internal use only */
      --_lumo-grid-border-color: var(--lumo-contrast-20pct);
      --_lumo-grid-secondary-border-color: var(--lumo-contrast-10pct);
      --_lumo-grid-border-width: 1px;
      --_lumo-grid-selected-row-color: var(--lumo-primary-color-10pct);
    }

    /* No (outer) border */

    :host(:not([theme~='no-border'])) {
      border: var(--_lumo-grid-border-width) solid var(--_lumo-grid-border-color);
    }

    :host([disabled]) {
      opacity: 0.7;
    }

    /* Cell styles */

    [part~='cell'] {
      min-height: var(--lumo-size-m);
      background-color: var(--lumo-base-color);
    }

    [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      cursor: default;
      padding: var(--lumo-space-xs) var(--lumo-space-m);
    }

    /* Apply row borders by default and introduce the "no-row-borders" variant */
    :host(:not([theme~='no-row-borders'])) [part~='cell']:not([part~='details-cell']) {
      border-top: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Hide first body row top border */
    :host(:not([theme~='no-row-borders'])) [part~='first-row'] [part~='cell']:not([part~='details-cell']) {
      border-top: 0;
      min-height: calc(var(--lumo-size-m) - var(--_lumo-grid-border-width));
    }

    /* Focus-ring */

    [part~='row'] {
      position: relative;
    }

    [part~='row']:focus,
    [part~='focused-cell']:focus {
      outline: none;
    }

    :host([navigating]) [part~='row']:focus::before,
    :host([navigating]) [part~='focused-cell']:focus::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }

    :host([navigating]) [part~='row']:focus::before {
      transform: translateX(calc(-1 * var(--_grid-horizontal-scroll-position)));
      z-index: 3;
    }

    /* Drag and Drop styles */
    :host([dragover])::after {
      content: '';
      position: absolute;
      z-index: 100;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }

    [part~='row'][dragover] {
      z-index: 100 !important;
    }

    [part~='row'][dragover] [part~='cell'] {
      overflow: visible;
    }

    [part~='row'][dragover] [part~='cell']::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      height: calc(var(--_lumo-grid-border-width) + 2px);
      pointer-events: none;
      background: var(--lumo-primary-color-50pct);
    }

    [part~='row'][dragover] [part~='cell'][last-frozen]::after {
      right: -1px;
    }

    :host([theme~='no-row-borders']) [dragover] [part~='cell']::after {
      height: 2px;
    }

    [part~='row'][dragover='below'] [part~='cell']::after {
      top: 100%;
      bottom: auto;
      margin-top: -1px;
    }

    :host([all-rows-visible]) [part~='last-row'][dragover='below'] [part~='cell']::after {
      height: 1px;
    }

    [part~='row'][dragover='above'] [part~='cell']::after {
      top: auto;
      bottom: 100%;
      margin-bottom: -1px;
    }

    [part~='row'][details-opened][dragover='below'] [part~='cell']:not([part~='details-cell'])::after,
    [part~='row'][details-opened][dragover='above'] [part~='details-cell']::after {
      display: none;
    }

    [part~='row'][dragover][dragover='on-top'] [part~='cell']::after {
      height: 100%;
      opacity: 0.5;
    }

    [part~='row'][dragstart] [part~='cell'] {
      border: none !important;
      box-shadow: none !important;
    }

    [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    #scroller [part~='row'][dragstart]:not([dragstart=''])::after {
      display: block;
      position: absolute;
      left: var(--_grid-drag-start-x);
      top: var(--_grid-drag-start-y);
      z-index: 100;
      content: attr(dragstart);
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding: calc(var(--lumo-space-xs) * 0.8);
      color: var(--lumo-error-contrast-color);
      background-color: var(--lumo-error-color);
      border-radius: var(--lumo-border-radius-m);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
      font-weight: 500;
      text-transform: initial;
      letter-spacing: initial;
      min-width: calc(var(--lumo-size-s) * 0.7);
      text-align: center;
    }

    /* Headers and footers */

    [part~='header-cell'] ::slotted(vaadin-grid-cell-content),
    [part~='footer-cell'] ::slotted(vaadin-grid-cell-content),
    [part~='reorder-ghost'] {
      font-size: var(--lumo-font-size-s);
      font-weight: 500;
    }

    [part~='footer-cell'] ::slotted(vaadin-grid-cell-content) {
      font-weight: 400;
    }

    [part~='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-xl);
    }

    /* Header borders */

    /* Hide first header row top border */
    :host(:not([theme~='no-row-borders'])) [part~='row']:first-child [part~='header-cell'] {
      border-top: 0;
    }

    [part~='row']:last-child [part~='header-cell'] {
      border-bottom: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part~='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='top']) [part~='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-border-color);
    }

    /* Footer borders */

    [part~='row']:first-child [part~='footer-cell'] {
      border-top: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part~='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='bottom']) [part~='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-border-color);
    }

    /* Column reordering */

    :host([reordering]) [part~='cell'] {
      background: linear-gradient(var(--lumo-shade-20pct), var(--lumo-shade-20pct)) var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='allowed'] {
      background: var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='dragging'] {
      background: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct)) var(--lumo-base-color);
    }

    [part~='reorder-ghost'] {
      opacity: 0.85;
      box-shadow: var(--lumo-box-shadow-s);
      /* TODO Use the same styles as for the cell element (reorder-ghost copies styles from the cell element) */
      padding: var(--lumo-space-s) var(--lumo-space-m) !important;
    }

    /* Column resizing */

    [part='resize-handle'] {
      width: 3px;
      background-color: var(--lumo-primary-color-50pct);
      opacity: 0;
      transition: opacity 0.2s;
    }

    :host(:not([reordering])) *:not([column-resizing]) [part~='cell']:hover [part='resize-handle'],
    [part='resize-handle']:active {
      opacity: 1;
      transition-delay: 0.15s;
    }

    /* Column borders */

    :host([theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Frozen columns */

    [last-frozen] {
      border-right: var(--_lumo-grid-border-width) solid transparent;
      overflow: hidden;
    }

    :host([overflow~='start']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-right-color: var(--_lumo-grid-border-color);
    }

    [first-frozen-to-end] {
      border-left: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([overflow~='end']) [part~='cell'][first-frozen-to-end]:not([part~='details-cell']) {
      border-left-color: var(--_lumo-grid-border-color);
    }

    /* Row stripes */

    :host([theme~='row-stripes']) [part~='even-row'] [part~='body-cell'],
    :host([theme~='row-stripes']) [part~='even-row'] [part~='details-cell'] {
      background-image: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
      background-repeat: repeat-x;
    }

    /* Selected row */

    /* Raise the selected rows above unselected rows (so that box-shadow can cover unselected rows) */
    :host(:not([reordering])) [part~='row'][selected] {
      z-index: 1;
    }

    :host(:not([reordering])) [part~='row'][selected] [part~='body-cell']:not([part~='details-cell']) {
      background-image: linear-gradient(var(--_lumo-grid-selected-row-color), var(--_lumo-grid-selected-row-color));
      background-repeat: repeat;
    }

    /* Cover the border of an unselected row */
    :host(:not([theme~='no-row-borders'])) [part~='row'][selected] [part~='cell']:not([part~='details-cell']) {
      box-shadow: 0 var(--_lumo-grid-border-width) 0 0 var(--_lumo-grid-selected-row-color);
    }

    /* Compact */

    :host([theme~='compact']) [part~='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-m);
    }

    :host([theme~='compact']) [part~='cell'] {
      min-height: var(--lumo-size-s);
    }

    :host([theme~='compact']) [part~='first-row'] [part~='cell']:not([part~='details-cell']) {
      min-height: calc(var(--lumo-size-s) - var(--_lumo-grid-border-width));
    }

    :host([theme~='compact']) [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      padding: var(--lumo-space-xs) var(--lumo-space-s);
    }

    /* Wrap cell contents */

    :host([theme~='wrap-cell-content']) [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      white-space: normal;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    :host([dir='rtl'][theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    :host([dir='rtl']) [last-frozen] {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([dir='rtl']) [first-frozen-to-end] {
      border-left: none;
      border-right: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([dir='rtl'][overflow~='start']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-left-color: var(--_lumo-grid-border-color);
    }

    :host([dir='rtl'][overflow~='end']) [part~='cell'][first-frozen-to-end]:not([part~='details-cell']) {
      border-right-color: var(--_lumo-grid-border-color);
    }
  `,{moduleId:"lumo-grid"});/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Je(s){return s.__cells||Array.from(s.querySelectorAll('[part~="cell"]:not([part~="details-cell"])'))}function Q(s,t){[...s.children].forEach(t)}function Ze(s,t){Je(s).forEach(t),s.__detailsCell&&t(s.__detailsCell)}function rf(s,t,e){let r=1;s.forEach(i=>{r%10===0&&(r+=1),i._order=e+r*t,r+=1})}function Ar(s,t,e){switch(typeof e){case"boolean":s.toggleAttribute(t,e);break;case"string":s.setAttribute(t,e);break;default:s.removeAttribute(t);break}}function xe(s,t,e){t||t===""?Ht(s,"part",e):wr(s,"part",e)}function ye(s,t,e){s.forEach(r=>{xe(r,e,t)})}function At(s,t){const e=Je(s);Object.entries(t).forEach(([r,i])=>{Ar(s,r,i);const o=`${r}-row`;xe(s,i,o),ye(e,`${o}-cell`,i)})}function Eo(s,t){const e=Je(s);Object.entries(t).forEach(([r,i])=>{const o=s.getAttribute(r);if(Ar(s,r,i),o){const n=`${r}-${o}-row`;xe(s,!1,n),ye(e,`${n}-cell`,!1)}if(i){const n=`${r}-${i}-row`;xe(s,i,n),ye(e,`${n}-cell`,i)}})}function De(s,t,e,r,i){Ar(s,t,e),i&&xe(s,!1,i),xe(s,e,r||`${t}-cell`)}/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const sf=s=>class extends s{static get properties(){return{resizable:{type:Boolean,value(){if(this.localName==="vaadin-grid-column-group")return;const e=this.parentNode;return e&&e.localName==="vaadin-grid-column-group"&&e.resizable||!1}},frozen:{type:Boolean,value:!1},frozenToEnd:{type:Boolean,value:!1},hidden:{type:Boolean,value:!1},header:{type:String},textAlign:{type:String},_lastFrozen:{type:Boolean,value:!1},_bodyContentHidden:{type:Boolean,value:!1},_firstFrozenToEnd:{type:Boolean,value:!1},_order:Number,_reorderStatus:Boolean,_emptyCells:Array,_headerCell:Object,_footerCell:Object,_grid:Object,__initialized:{type:Boolean,value:!0},headerRenderer:Function,_headerRenderer:{type:Function,computed:"_computeHeaderRenderer(headerRenderer, header, __initialized)"},footerRenderer:Function,_footerRenderer:{type:Function,computed:"_computeFooterRenderer(footerRenderer, __initialized)"},__gridColumnElement:{type:Boolean,value:!0}}}static get observers(){return["_widthChanged(width, _headerCell, _footerCell, _cells.*)","_frozenChanged(frozen, _headerCell, _footerCell, _cells.*)","_frozenToEndChanged(frozenToEnd, _headerCell, _footerCell, _cells.*)","_flexGrowChanged(flexGrow, _headerCell, _footerCell, _cells.*)","_textAlignChanged(textAlign, _cells.*, _headerCell, _footerCell)","_orderChanged(_order, _headerCell, _footerCell, _cells.*)","_lastFrozenChanged(_lastFrozen)","_firstFrozenToEndChanged(_firstFrozenToEnd)","_onRendererOrBindingChanged(_renderer, _cells, _bodyContentHidden, _cells.*, path)","_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header)","_onFooterRendererOrBindingChanged(_footerRenderer, _footerCell)","_resizableChanged(resizable, _headerCell)","_reorderStatusChanged(_reorderStatus, _headerCell, _footerCell, _cells.*)","_hiddenChanged(hidden, _headerCell, _footerCell, _cells.*)"]}get _grid(){return this._gridValue||(this._gridValue=this._findHostGrid()),this._gridValue}get _allCells(){return[].concat(this._cells||[]).concat(this._emptyCells||[]).concat(this._headerCell).concat(this._footerCell).filter(e=>e)}connectedCallback(){super.connectedCallback(),requestAnimationFrame(()=>{this._grid&&this._allCells.forEach(e=>{e._content.parentNode||this._grid.appendChild(e._content)})})}disconnectedCallback(){super.disconnectedCallback(),requestAnimationFrame(()=>{this._grid||this._allCells.forEach(e=>{e._content.parentNode&&e._content.parentNode.removeChild(e._content)})}),this._gridValue=void 0}ready(){super.ready(),ss(this)}_findHostGrid(){let e=this;for(;e&&!/^vaadin.*grid(-pro)?$/u.test(e.localName);)e=e.assignedSlot?e.assignedSlot.parentNode:e.parentNode;return e||void 0}_renderHeaderAndFooter(){this._renderHeaderCellContent(this._headerRenderer,this._headerCell),this._renderFooterCellContent(this._footerRenderer,this._footerCell)}_flexGrowChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("flexGrow"),this._allCells.forEach(r=>{r.style.flexGrow=e})}_orderChanged(e){this._allCells.forEach(r=>{r.style.order=e})}_widthChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("width"),this._allCells.forEach(r=>{r.style.width=e})}_frozenChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozen",e),this._allCells.forEach(r=>{De(r,"frozen",e)}),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_frozenToEndChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozenToEnd",e),this._allCells.forEach(r=>{this._grid&&r.parentElement===this._grid.$.sizer||De(r,"frozen-to-end",e)}),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_lastFrozenChanged(e){this._allCells.forEach(r=>{De(r,"last-frozen",e)}),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._lastFrozen=e)}_firstFrozenToEndChanged(e){this._allCells.forEach(r=>{this._grid&&r.parentElement===this._grid.$.sizer||De(r,"first-frozen-to-end",e)}),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._firstFrozenToEnd=e)}_generateHeader(e){return e.substr(e.lastIndexOf(".")+1).replace(/([A-Z])/gu,"-$1").toLowerCase().replace(/-/gu," ").replace(/^./u,r=>r.toUpperCase())}_reorderStatusChanged(e){const r=this.__previousReorderStatus,i=r?`reorder-${r}-cell`:"",o=`reorder-${e}-cell`;this._allCells.forEach(n=>{De(n,"reorder-status",e,o,i)}),this.__previousReorderStatus=e}_resizableChanged(e,r){e===void 0||r===void 0||r&&[r].concat(this._emptyCells).forEach(i=>{if(i){const o=i.querySelector('[part~="resize-handle"]');if(o&&i.removeChild(o),e){const n=document.createElement("div");n.setAttribute("part","resize-handle"),i.appendChild(n)}}})}_textAlignChanged(e){if(e===void 0)return;if(["start","end","center"].indexOf(e)===-1){console.warn('textAlign can only be set as "start", "end" or "center"');return}let r;getComputedStyle(this._grid).direction==="ltr"?e==="start"?r="left":e==="end"&&(r="right"):e==="start"?r="right":e==="end"&&(r="left"),this._allCells.forEach(i=>{i._content.style.textAlign=e,getComputedStyle(i._content).textAlign!==e&&(i._content.style.textAlign=r)})}_hiddenChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("hidden",e),!!e!=!!this._previousHidden&&this._grid&&(e===!0&&this._allCells.forEach(r=>{r._content.parentNode&&r._content.parentNode.removeChild(r._content)}),this._grid._debouncerHiddenChanged=I.debounce(this._grid._debouncerHiddenChanged,Re,()=>{this._grid&&this._grid._renderColumnTree&&this._grid._renderColumnTree(this._grid._columnTree)}),this._grid._debounceUpdateFrozenColumn&&this._grid._debounceUpdateFrozenColumn(),this._grid._resetKeyboardNavigation&&this._grid._resetKeyboardNavigation()),this._previousHidden=e}_runRenderer(e,r,i){const o=[r._content,this];i&&i.item&&o.push(i),e.apply(this,o)}__renderCellsContent(e,r){this.hidden||!this._grid||r.forEach(i=>{if(!i.parentElement)return;const o=this._grid.__getRowModel(i.parentElement);e&&(i._renderer!==e&&this._clearCellContent(i),i._renderer=e,(o.item||e===this._headerRenderer||e===this._footerRenderer)&&this._runRenderer(e,i,o))})}_clearCellContent(e){e._content.innerHTML="",delete e._content._$litPart$}_renderHeaderCellContent(e,r){!r||!e||(this.__renderCellsContent(e,[r]),this._grid&&r.parentElement&&this._grid.__debounceUpdateHeaderFooterRowVisibility(r.parentElement))}_onHeaderRendererOrBindingChanged(e,r,...i){this._renderHeaderCellContent(e,r)}_renderBodyCellsContent(e,r){!r||!e||this.__renderCellsContent(e,r)}_onRendererOrBindingChanged(e,r,...i){this._renderBodyCellsContent(e,r)}_renderFooterCellContent(e,r){!r||!e||(this.__renderCellsContent(e,[r]),this._grid&&r.parentElement&&this._grid.__debounceUpdateHeaderFooterRowVisibility(r.parentElement))}_onFooterRendererOrBindingChanged(e,r){this._renderFooterCellContent(e,r)}__setTextContent(e,r){e.textContent!==r&&(e.textContent=r)}__textHeaderRenderer(){this.__setTextContent(this._headerCell._content,this.header)}_defaultHeaderRenderer(){this.path&&this.__setTextContent(this._headerCell._content,this._generateHeader(this.path))}_defaultRenderer(e,r,{item:i}){this.path&&this.__setTextContent(e,this.get(this.path,i))}_defaultFooterRenderer(){}_computeHeaderRenderer(e,r){return e||(r!=null?this.__textHeaderRenderer:this._defaultHeaderRenderer)}_computeRenderer(e){return e||this._defaultRenderer}_computeFooterRenderer(e){return e||this._defaultFooterRenderer}};class Ao extends sf($t(K)){static get is(){return"vaadin-grid-column"}static get properties(){return{width:{type:String,value:"100px"},flexGrow:{type:Number,value:1},renderer:Function,_renderer:{type:Function,computed:"_computeRenderer(renderer, __initialized)"},path:{type:String},autoWidth:{type:Boolean,value:!1},_focusButtonMode:{type:Boolean,value:!1},_cells:Array}}}customElements.define(Ao.is,Ao);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */S("vaadin-grid",g`
    @keyframes vaadin-grid-appear {
      to {
        opacity: 1;
      }
    }

    :host {
      display: flex;
      flex-direction: column;
      animation: 1ms vaadin-grid-appear;
      height: 400px;
      flex: 1 1 auto;
      align-self: stretch;
      position: relative;
    }

    :host([hidden]) {
      display: none !important;
    }

    :host([disabled]) {
      pointer-events: none;
    }

    #scroller {
      display: flex;
      flex-direction: column;
      min-height: 100%;
      transform: translateY(0);
      width: auto;
      height: auto;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    :host([all-rows-visible]) {
      height: auto;
      align-self: flex-start;
      flex-grow: 0;
      width: 100%;
    }

    :host([all-rows-visible]) #scroller {
      width: 100%;
      height: 100%;
      position: relative;
    }

    :host([all-rows-visible]) #items {
      min-height: 1px;
    }

    #table {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      overflow: auto;
      position: relative;
      outline: none;
      /* Workaround for a Desktop Safari bug: new stacking context here prevents the scrollbar from getting hidden */
      z-index: 0;
    }

    #header,
    #footer {
      display: block;
      position: -webkit-sticky;
      position: sticky;
      left: 0;
      overflow: visible;
      width: 100%;
      z-index: 1;
    }

    #header {
      top: 0;
    }

    th {
      text-align: inherit;
    }

    /* Safari doesn't work with "inherit" */
    [safari] th {
      text-align: initial;
    }

    #footer {
      bottom: 0;
    }

    #items {
      flex-grow: 1;
      flex-shrink: 0;
      display: block;
      position: -webkit-sticky;
      position: sticky;
      width: 100%;
      left: 0;
      overflow: visible;
    }

    [part~='row'] {
      display: flex;
      width: 100%;
      box-sizing: border-box;
      margin: 0;
    }

    [part~='row'][loading] [part~='body-cell'] ::slotted(vaadin-grid-cell-content) {
      visibility: hidden;
    }

    [column-rendering='lazy'] [part~='body-cell']:not([frozen]):not([frozen-to-end]) {
      transform: translateX(var(--_grid-lazy-columns-start));
    }

    #items [part~='row'] {
      position: absolute;
    }

    #items [part~='row']:empty {
      height: 100%;
    }

    [part~='cell']:not([part~='details-cell']) {
      flex-shrink: 0;
      flex-grow: 1;
      box-sizing: border-box;
      display: flex;
      width: 100%;
      position: relative;
      align-items: center;
      padding: 0;
      white-space: nowrap;
    }

    [part~='cell'] > [tabindex] {
      display: flex;
      align-items: inherit;
      outline: none;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }

    [part~='details-cell'] {
      position: absolute;
      bottom: 0;
      width: 100%;
      box-sizing: border-box;
      padding: 0;
    }

    [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      display: block;
      width: 100%;
      box-sizing: border-box;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    [hidden] {
      display: none !important;
    }

    [frozen],
    [frozen-to-end] {
      z-index: 2;
      will-change: transform;
    }

    [no-scrollbars][safari] #table,
    [no-scrollbars][firefox] #table {
      overflow: hidden;
    }

    /* Reordering styles */
    :host([reordering]) [part~='cell'] ::slotted(vaadin-grid-cell-content),
    :host([reordering]) [part~='resize-handle'],
    #scroller[no-content-pointer-events] [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      pointer-events: none;
    }

    [part~='reorder-ghost'] {
      visibility: hidden;
      position: fixed;
      pointer-events: none;
      opacity: 0.5;

      /* Prevent overflowing the grid in Firefox */
      top: 0;
      left: 0;
    }

    :host([reordering]) {
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    /* Resizing styles */
    [part~='resize-handle'] {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      cursor: col-resize;
      z-index: 1;
    }

    [part~='resize-handle']::before {
      position: absolute;
      content: '';
      height: 100%;
      width: 35px;
      transform: translateX(-50%);
    }

    [last-column] [part~='resize-handle']::before,
    [last-frozen] [part~='resize-handle']::before {
      width: 18px;
      transform: none;
      right: 0;
    }

    [frozen-to-end] [part~='resize-handle'] {
      left: 0;
      right: auto;
    }

    [frozen-to-end] [part~='resize-handle']::before {
      left: 0;
      right: auto;
    }

    [first-frozen-to-end] [part~='resize-handle']::before {
      width: 18px;
      transform: none;
    }

    [first-frozen-to-end] {
      margin-inline-start: auto;
    }

    /* Hide resize handle if scrolled to end */
    :host(:not([overflow~='end'])) [first-frozen-to-end] [part~='resize-handle'] {
      display: none;
    }

    #scroller[column-resizing] {
      -ms-user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    /* Sizer styles */
    #sizer {
      display: flex;
      position: absolute;
      visibility: hidden;
    }

    #sizer [part~='details-cell'] {
      display: none !important;
    }

    #sizer [part~='cell'][hidden] {
      display: none !important;
    }

    #sizer [part~='cell'] {
      display: block;
      flex-shrink: 0;
      line-height: 0;
      height: 0 !important;
      min-height: 0 !important;
      max-height: 0 !important;
      padding: 0 !important;
      border: none !important;
    }

    #sizer [part~='cell']::before {
      content: '-';
    }

    #sizer [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      display: none !important;
    }

    /* RTL specific styles */

    :host([dir='rtl']) #items,
    :host([dir='rtl']) #header,
    :host([dir='rtl']) #footer {
      left: auto;
    }

    :host([dir='rtl']) [part~='reorder-ghost'] {
      left: auto;
      right: 0;
    }

    :host([dir='rtl']) [part~='resize-handle'] {
      left: 0;
      right: auto;
    }

    :host([dir='rtl']) [part~='resize-handle']::before {
      transform: translateX(50%);
    }

    :host([dir='rtl']) [last-column] [part~='resize-handle']::before,
    :host([dir='rtl']) [last-frozen] [part~='resize-handle']::before {
      left: 0;
      right: auto;
    }

    :host([dir='rtl']) [frozen-to-end] [part~='resize-handle'] {
      right: 0;
      left: auto;
    }

    :host([dir='rtl']) [frozen-to-end] [part~='resize-handle']::before {
      right: 0;
      left: auto;
    }

    @media (forced-colors: active) {
      [part~='selected-row'] [part~='first-column-cell']::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        border: 2px solid;
      }

      [part~='focused-cell']::before {
        outline: 2px solid !important;
        outline-offset: -1px;
      }
    }
  `,{moduleId:"vaadin-grid-styles"});/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */const Po=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/u),of=Po&&Po[1]>=8,Do=3,nf={_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_lastVisibleIndexVal:null,_maxPages:2,_templateCost:0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){return this._physicalSize-this._viewportHeight},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){const s=this._virtualCount;return Math.max(0,s-this._physicalCount)},get _virtualStart(){return this._virtualStartVal||0},set _virtualStart(s){s=this._clamp(s,0,this._maxVirtualStart),this._virtualStartVal=s},get _physicalStart(){return this._physicalStartVal||0},set _physicalStart(s){s%=this._physicalCount,s<0&&(s=this._physicalCount+s),this._physicalStartVal=s},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},get _physicalCount(){return this._physicalCountVal||0},set _physicalCount(s){this._physicalCountVal=s},get _optPhysicalSize(){return this._viewportHeight===0?1/0:this._viewportHeight*this._maxPages},get _isVisible(){return!!(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){let s=this._firstVisibleIndexVal;if(s==null){let t=this._physicalTop+this._scrollOffset;s=this._iterateItems((e,r)=>{if(t+=this._getPhysicalSizeIncrement(e),t>this._scrollPosition)return r})||0,this._firstVisibleIndexVal=s}return s},get lastVisibleIndex(){let s=this._lastVisibleIndexVal;if(s==null){let t=this._physicalTop+this._scrollOffset;this._iterateItems((e,r)=>{t<this._scrollBottom&&(s=r),t+=this._getPhysicalSizeIncrement(e)}),this._lastVisibleIndexVal=s}return s},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset},_scrollHandler(){const s=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop));let t=s-this._scrollPosition;const e=t>=0;if(this._scrollPosition=s,this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,Math.abs(t)>this._physicalSize&&this._physicalSize>0){t-=this._scrollOffset;const r=Math.round(t/this._physicalAverage);this._virtualStart+=r,this._physicalStart+=r,this._physicalTop=Math.min(Math.floor(this._virtualStart)*this._physicalAverage,this._scrollPosition),this._update()}else if(this._physicalCount>0){const r=this._getReusables(e);e?(this._physicalTop=r.physicalTop,this._virtualStart+=r.indexes.length,this._physicalStart+=r.indexes.length):(this._virtualStart-=r.indexes.length,this._physicalStart-=r.indexes.length),this._update(r.indexes,e?null:r.indexes),this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),pe)}},_getReusables(s){let t,e,r;const i=[],o=this._hiddenContentSize*this._ratio,n=this._virtualStart,a=this._virtualEnd,l=this._physicalCount;let d=this._physicalTop+this._scrollOffset;const c=this._physicalBottom+this._scrollOffset,h=this._scrollPosition,u=this._scrollBottom;for(s?(t=this._physicalStart,e=h-d):(t=this._physicalEnd,e=c-u);r=this._getPhysicalSizeIncrement(t),e-=r,!(i.length>=l||e<=o);)if(s){if(a+i.length+1>=this._virtualCount||d+r>=h-this._scrollOffset)break;i.push(t),d+=r,t=(t+1)%l}else{if(n-i.length<=0||d+this._physicalSize-r<=u)break;i.push(t),d-=r,t=t===0?l-1:t-1}return{indexes:i,physicalTop:d-this._scrollOffset}},_update(s,t){if(!(s&&s.length===0||this._physicalCount===0)){if(this._assignModels(s),this._updateMetrics(s),t)for(;t.length;){const e=t.pop();this._physicalTop-=this._getPhysicalSizeIncrement(e)}this._positionItems(),this._updateScrollerSize()}},_isClientFull(){return this._scrollBottom!==0&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded(s){const e=this._clamp(this._physicalCount+s,Do,this._virtualCount-this._virtualStart)-this._physicalCount;let r=Math.round(this._physicalCount*.5);if(!(e<0)){if(e>0){const i=window.performance.now();[].push.apply(this._physicalItems,this._createPool(e));for(let o=0;o<e;o++)this._physicalSizes.push(0);this._physicalCount+=e,this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd&&(this._physicalStart+=e),this._update(),this._templateCost=(window.performance.now()-i)/e,r=Math.round(this._physicalCount*.5)}this._virtualEnd>=this._virtualCount-1||r===0||(this._isClientFull()?this._physicalSize<this._optPhysicalSize&&this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,r)),qn):this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,r),pe))}},_render(){if(!(!this.isAttached||!this._isVisible))if(this._physicalCount!==0){const s=this._getReusables(!0);this._physicalTop=s.physicalTop,this._virtualStart+=s.indexes.length,this._physicalStart+=s.indexes.length,this._update(s.indexes),this._update(),this._increasePoolIfNeeded(0)}else this._virtualCount>0&&(this.updateViewportBoundaries(),this._increasePoolIfNeeded(Do))},_itemsChanged(s){s.path==="items"&&(this._virtualStart=0,this._physicalTop=0,this._virtualCount=this.items?this.items.length:0,this._physicalIndexForKey={},this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._physicalItems||(this._physicalItems=[]),this._physicalSizes||(this._physicalSizes=[]),this._physicalStart=0,this._scrollTop>this._scrollOffset&&this._resetScrollPosition(0),this._debounce("_render",this._render,Re))},_iterateItems(s,t){let e,r,i,o;if(arguments.length===2&&t){for(o=0;o<t.length;o++)if(e=t[o],r=this._computeVidx(e),(i=s.call(this,e,r))!=null)return i}else{for(e=this._physicalStart,r=this._virtualStart;e<this._physicalCount;e++,r++)if((i=s.call(this,e,r))!=null)return i;for(e=0;e<this._physicalStart;e++,r++)if((i=s.call(this,e,r))!=null)return i}},_computeVidx(s){return s>=this._physicalStart?this._virtualStart+(s-this._physicalStart):this._virtualStart+(this._physicalCount-this._physicalStart)+s},_positionItems(){this._adjustScrollPosition();let s=this._physicalTop;this._iterateItems(t=>{this.translate3d(0,`${s}px`,0,this._physicalItems[t]),s+=this._physicalSizes[t]})},_getPhysicalSizeIncrement(s){return this._physicalSizes[s]},_adjustScrollPosition(){const s=this._virtualStart===0?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(s!==0){this._physicalTop-=s;const t=this._scrollPosition;!of&&t>0&&this._resetScrollPosition(t-s)}},_resetScrollPosition(s){this.scrollTarget&&s>=0&&(this._scrollTop=s,this._scrollPosition=this._scrollTop)},_updateScrollerSize(s){const t=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage;this._estScrollHeight=t,(s||this._scrollHeight===0||this._scrollPosition>=t-this._physicalSize||Math.abs(t-this._scrollHeight)>=this._viewportHeight)&&(this.$.items.style.height=`${t}px`,this._scrollHeight=t)},scrollToIndex(s){if(typeof s!="number"||s<0||s>this.items.length-1||(xt(),this._physicalCount===0))return;s=this._clamp(s,0,this._virtualCount-1),(!this._isIndexRendered(s)||s>=this._maxVirtualStart)&&(this._virtualStart=s-1),this._assignModels(),this._updateMetrics(),this._physicalTop=this._virtualStart*this._physicalAverage;let t=this._physicalStart,e=this._virtualStart,r=0;const i=this._hiddenContentSize;for(;e<s&&r<=i;)r+=this._getPhysicalSizeIncrement(t),t=(t+1)%this._physicalCount,e+=1;this._updateScrollerSize(!0),this._positionItems(),this._resetScrollPosition(this._physicalTop+this._scrollOffset+r),this._increasePoolIfNeeded(0),this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null},_resetAverage(){this._physicalAverage=0,this._physicalAverageCount=0},_resizeHandler(){this._debounce("_render",()=>{this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._isVisible?(this.updateViewportBoundaries(),this.toggleScrollListener(!0),this._resetAverage(),this._render()):this.toggleScrollListener(!1)},Re)},_isIndexRendered(s){return s>=this._virtualStart&&s<=this._virtualEnd},_getPhysicalIndex(s){return(this._physicalStart+(s-this._virtualStart))%this._physicalCount},_clamp(s,t,e){return Math.min(e,Math.max(t,s))},_debounce(s,t,e){this._debouncers||(this._debouncers={}),this._debouncers[s]=I.debounce(this._debouncers[s],e,t.bind(this)),jn(this._debouncers[s])}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const af=1e5,Zr=1e3;class Ma{constructor({createElements:t,updateElement:e,scrollTarget:r,scrollContainer:i,elementsContainer:o,reorderElements:n}){this.isAttached=!0,this._vidxOffset=0,this.createElements=t,this.updateElement=e,this.scrollTarget=r,this.scrollContainer=i,this.elementsContainer=o||i,this.reorderElements=n,this._maxPages=1.3,this.__placeholderHeight=200,this.__elementHeightQueue=Array(10),this.timeouts={SCROLL_REORDER:500,IGNORE_WHEEL:500,FIX_INVALID_ITEM_POSITIONING:100},this.__resizeObserver=new ResizeObserver(()=>this._resizeHandler()),getComputedStyle(this.scrollTarget).overflow==="visible"&&(this.scrollTarget.style.overflow="auto"),getComputedStyle(this.scrollContainer).position==="static"&&(this.scrollContainer.style.position="relative"),this.__resizeObserver.observe(this.scrollTarget),this.scrollTarget.addEventListener("scroll",()=>this._scrollHandler()),this._scrollLineHeight=this._getScrollLineHeight(),this.scrollTarget.addEventListener("wheel",a=>this.__onWheel(a)),this.reorderElements&&(this.scrollTarget.addEventListener("mousedown",()=>{this.__mouseDown=!0}),this.scrollTarget.addEventListener("mouseup",()=>{this.__mouseDown=!1,this.__pendingReorder&&this.__reorderElements()}))}get scrollOffset(){return 0}get adjustedFirstVisibleIndex(){return this.firstVisibleIndex+this._vidxOffset}get adjustedLastVisibleIndex(){return this.lastVisibleIndex+this._vidxOffset}scrollToIndex(t){if(typeof t!="number"||isNaN(t)||this.size===0||!this.scrollTarget.offsetHeight)return;t=this._clamp(t,0,this.size-1);const e=this.__getVisibleElements().length;let r=Math.floor(t/this.size*this._virtualCount);this._virtualCount-r<e?(r=this._virtualCount-(this.size-t),this._vidxOffset=this.size-this._virtualCount):r<e?t<Zr?(r=t,this._vidxOffset=0):(r=Zr,this._vidxOffset=t-r):this._vidxOffset=t-r,this.__skipNextVirtualIndexAdjust=!0,super.scrollToIndex(r),this.adjustedFirstVisibleIndex!==t&&this._scrollTop<this._maxScrollTop&&!this.grid&&(this._scrollTop-=this.__getIndexScrollOffset(t)||0),this._scrollHandler()}flush(){this.scrollTarget.offsetHeight!==0&&(this._resizeHandler(),xt(),this._scrollHandler(),this.__fixInvalidItemPositioningDebouncer&&this.__fixInvalidItemPositioningDebouncer.flush(),this.__scrollReorderDebouncer&&this.__scrollReorderDebouncer.flush(),this.__debouncerWheelAnimationFrame&&this.__debouncerWheelAnimationFrame.flush())}update(t=0,e=this.size-1){const r=[];this.__getVisibleElements().forEach(i=>{i.__virtualIndex>=t&&i.__virtualIndex<=e&&(this.__updateElement(i,i.__virtualIndex,!0),r.push(i))}),this.__afterElementsUpdated(r)}_updateMetrics(t){xt();let e=0,r=0;const i=this._physicalAverageCount,o=this._physicalAverage;this._iterateItems((n,a)=>{r+=this._physicalSizes[n],this._physicalSizes[n]=Math.ceil(this.__getBorderBoxHeight(this._physicalItems[n])),e+=this._physicalSizes[n],this._physicalAverageCount+=this._physicalSizes[n]?1:0},t),this._physicalSize=this._physicalSize+e-r,this._physicalAverageCount!==i&&(this._physicalAverage=Math.round((o*i+e)/this._physicalAverageCount))}__getBorderBoxHeight(t){const e=getComputedStyle(t),r=parseFloat(e.height)||0;if(e.boxSizing==="border-box")return r;const i=parseFloat(e.paddingBottom)||0,o=parseFloat(e.paddingTop)||0,n=parseFloat(e.borderBottomWidth)||0,a=parseFloat(e.borderTopWidth)||0;return r+i+o+n+a}__updateElement(t,e,r){t.style.paddingTop&&(t.style.paddingTop=""),!this.__preventElementUpdates&&(t.__lastUpdatedIndex!==e||r)&&(this.updateElement(t,e),t.__lastUpdatedIndex=e)}__afterElementsUpdated(t){t.forEach(e=>{const r=e.offsetHeight;if(r===0)e.style.paddingTop=`${this.__placeholderHeight}px`,this.__placeholderClearDebouncer=I.debounce(this.__placeholderClearDebouncer,Re,()=>this._resizeHandler());else{this.__elementHeightQueue.push(r),this.__elementHeightQueue.shift();const i=this.__elementHeightQueue.filter(o=>o!==void 0);this.__placeholderHeight=Math.round(i.reduce((o,n)=>o+n,0)/i.length)}})}__getIndexScrollOffset(t){const e=this.__getVisibleElements().find(r=>r.__virtualIndex===t);return e?this.scrollTarget.getBoundingClientRect().top-e.getBoundingClientRect().top:void 0}get size(){return this.__size}set size(t){t!==this.size&&(this.__fixInvalidItemPositioningDebouncer&&this.__fixInvalidItemPositioningDebouncer.cancel(),this._debouncers&&this._debouncers._increasePoolIfNeeded&&this._debouncers._increasePoolIfNeeded.cancel(),this.__size=t,this._physicalItems?this._virtualCount=this.items.length:(this._itemsChanged({path:"items"}),this.__preventElementUpdates=!0,xt(),this.__preventElementUpdates=!1),this._isVisible||this._assignModels(),this.elementsContainer.children.length||requestAnimationFrame(()=>this._resizeHandler()),this._resizeHandler(),xt())}get _scrollTop(){return this.scrollTarget.scrollTop}set _scrollTop(t){this.scrollTarget.scrollTop=t}get items(){return{length:Math.min(this.size,af)}}get offsetHeight(){return this.scrollTarget.offsetHeight}get $(){return{items:this.scrollContainer}}updateViewportBoundaries(){const t=window.getComputedStyle(this.scrollTarget);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(t["padding-top"],10),this._isRTL=t.direction==="rtl",this._viewportWidth=this.elementsContainer.offsetWidth,this._viewportHeight=this.scrollTarget.offsetHeight,this._scrollPageHeight=this._viewportHeight-this._scrollLineHeight,this.grid&&this._updateGridMetrics()}setAttribute(){}_createPool(t){const e=this.createElements(t),r=document.createDocumentFragment();return e.forEach(i=>{i.style.position="absolute",r.appendChild(i),this.__resizeObserver.observe(i)}),this.elementsContainer.appendChild(r),e}_assignModels(t){const e=[];this._iterateItems((r,i)=>{const o=this._physicalItems[r];o.hidden=i>=this.size,o.hidden?delete o.__lastUpdatedIndex:(o.__virtualIndex=i+(this._vidxOffset||0),this.__updateElement(o,o.__virtualIndex),e.push(o))},t),this.__afterElementsUpdated(e)}_isClientFull(){return setTimeout(()=>{this.__clientFull=!0}),this.__clientFull||super._isClientFull()}translate3d(t,e,r,i){i.style.transform=`translateY(${e})`}toggleScrollListener(){}_scrollHandler(){if(this.scrollTarget.offsetHeight===0)return;this._adjustVirtualIndexOffset(this._scrollTop-(this.__previousScrollTop||0));const t=this.scrollTarget.scrollTop-this._scrollPosition;if(super._scrollHandler(),this._physicalCount!==0){const e=t>=0,r=this._getReusables(!e);r.indexes.length&&(this._physicalTop=r.physicalTop,e?(this._virtualStart-=r.indexes.length,this._physicalStart-=r.indexes.length):(this._virtualStart+=r.indexes.length,this._physicalStart+=r.indexes.length),this._resizeHandler())}t&&(this.__fixInvalidItemPositioningDebouncer=I.debounce(this.__fixInvalidItemPositioningDebouncer,se.after(this.timeouts.FIX_INVALID_ITEM_POSITIONING),()=>this.__fixInvalidItemPositioning())),this.reorderElements&&(this.__scrollReorderDebouncer=I.debounce(this.__scrollReorderDebouncer,se.after(this.timeouts.SCROLL_REORDER),()=>this.__reorderElements())),this.__previousScrollTop=this._scrollTop,this._scrollTop===0&&this.firstVisibleIndex!==0&&Math.abs(t)>0&&this.scrollToIndex(0)}__fixInvalidItemPositioning(){if(!this.scrollTarget.isConnected)return;const t=this._physicalTop>this._scrollTop,e=this._physicalBottom<this._scrollBottom,r=this.adjustedFirstVisibleIndex===0,i=this.adjustedLastVisibleIndex===this.size-1;if(t&&!r||e&&!i){const o=e,n=this._ratio;this._ratio=0,this._scrollPosition=this._scrollTop+(o?-1:1),this._scrollHandler(),this._ratio=n}}__onWheel(t){if(t.ctrlKey||this._hasScrolledAncestor(t.target,t.deltaX,t.deltaY))return;let e=t.deltaY;if(t.deltaMode===WheelEvent.DOM_DELTA_LINE?e*=this._scrollLineHeight:t.deltaMode===WheelEvent.DOM_DELTA_PAGE&&(e*=this._scrollPageHeight),this._deltaYAcc||(this._deltaYAcc=0),this._wheelAnimationFrame){this._deltaYAcc+=e,t.preventDefault();return}e+=this._deltaYAcc,this._deltaYAcc=0,this._wheelAnimationFrame=!0,this.__debouncerWheelAnimationFrame=I.debounce(this.__debouncerWheelAnimationFrame,Re,()=>{this._wheelAnimationFrame=!1});const r=Math.abs(t.deltaX)+Math.abs(e);this._canScroll(this.scrollTarget,t.deltaX,e)?(t.preventDefault(),this.scrollTarget.scrollTop+=e,this.scrollTarget.scrollLeft+=t.deltaX,this._hasResidualMomentum=!0,this._ignoreNewWheel=!0,this._debouncerIgnoreNewWheel=I.debounce(this._debouncerIgnoreNewWheel,se.after(this.timeouts.IGNORE_WHEEL),()=>{this._ignoreNewWheel=!1})):this._hasResidualMomentum&&r<=this._previousMomentum||this._ignoreNewWheel?t.preventDefault():r>this._previousMomentum&&(this._hasResidualMomentum=!1),this._previousMomentum=r}_hasScrolledAncestor(t,e,r){if(t===this.scrollTarget||t===this.scrollTarget.getRootNode().host)return!1;if(this._canScroll(t,e,r)&&["auto","scroll"].indexOf(getComputedStyle(t).overflow)!==-1)return!0;if(t!==this&&t.parentElement)return this._hasScrolledAncestor(t.parentElement,e,r)}_canScroll(t,e,r){return r>0&&t.scrollTop<t.scrollHeight-t.offsetHeight||r<0&&t.scrollTop>0||e>0&&t.scrollLeft<t.scrollWidth-t.offsetWidth||e<0&&t.scrollLeft>0}_increasePoolIfNeeded(t){if(this._physicalCount>2&&t){const r=Math.ceil(this._optPhysicalSize/this._physicalAverage)-this._physicalCount;super._increasePoolIfNeeded(Math.max(t,Math.min(100,r)))}else super._increasePoolIfNeeded(t)}_getScrollLineHeight(){const t=document.createElement("div");t.style.fontSize="initial",t.style.display="none",document.body.appendChild(t);const e=window.getComputedStyle(t).fontSize;return document.body.removeChild(t),e?window.parseInt(e):void 0}__getVisibleElements(){return Array.from(this.elementsContainer.children).filter(t=>!t.hidden)}__reorderElements(){if(this.__mouseDown){this.__pendingReorder=!0;return}this.__pendingReorder=!1;const t=this._virtualStart+(this._vidxOffset||0),e=this.__getVisibleElements(),i=e.find(a=>a.contains(this.elementsContainer.getRootNode().activeElement)||a.contains(this.scrollTarget.getRootNode().activeElement))||e[0];if(!i)return;const o=i.__virtualIndex-t,n=e.indexOf(i)-o;if(n>0)for(let a=0;a<n;a++)this.elementsContainer.appendChild(e[a]);else if(n<0)for(let a=e.length+n;a<e.length;a++)this.elementsContainer.insertBefore(e[a],e[0]);if(la){const{transform:a}=this.scrollTarget.style;this.scrollTarget.style.transform="translateZ(0)",setTimeout(()=>{this.scrollTarget.style.transform=a})}}_adjustVirtualIndexOffset(t){if(this._virtualCount>=this.size)this._vidxOffset=0;else if(this.__skipNextVirtualIndexAdjust)this.__skipNextVirtualIndexAdjust=!1;else if(Math.abs(t)>1e4){const e=this._scrollTop/(this.scrollTarget.scrollHeight-this.scrollTarget.offsetHeight),r=e*this.size;this._vidxOffset=Math.round(r-e*this._virtualCount)}else{const e=this._vidxOffset,r=Zr,i=100;this._scrollTop===0?(this._vidxOffset=0,e!==this._vidxOffset&&super.scrollToIndex(0)):this.firstVisibleIndex<r&&this._vidxOffset>0&&(this._vidxOffset-=Math.min(this._vidxOffset,i),super.scrollToIndex(this.firstVisibleIndex+(e-this._vidxOffset)));const o=this.size-this._virtualCount;this._scrollTop>=this._maxScrollTop&&this._maxScrollTop>0?(this._vidxOffset=o,e!==this._vidxOffset&&super.scrollToIndex(this._virtualCount-1)):this.firstVisibleIndex>this._virtualCount-r&&this._vidxOffset<o&&(this._vidxOffset+=Math.min(o-this._vidxOffset,i),super.scrollToIndex(this.firstVisibleIndex-(this._vidxOffset-e)))}}}Object.setPrototypeOf(Ma.prototype,nf);class lf{constructor(t){this.__adapter=new Ma(t)}get firstVisibleIndex(){return this.__adapter.adjustedFirstVisibleIndex}get lastVisibleIndex(){return this.__adapter.adjustedLastVisibleIndex}get size(){return this.__adapter.size}set size(t){this.__adapter.size=t}scrollToIndex(t){this.__adapter.scrollToIndex(t)}update(t=0,e=this.size-1){this.__adapter.update(t,e)}flush(){this.__adapter.flush()}}/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const df=s=>class extends s{static get observers(){return["_a11yUpdateGridSize(size, _columnTree, _columnTree.*)"]}_a11yGetHeaderRowCount(e){return e.filter(r=>r.some(i=>i.headerRenderer||i.path||i.header)).length}_a11yGetFooterRowCount(e){return e.filter(r=>r.some(i=>i.headerRenderer)).length}_a11yUpdateGridSize(e,r){if(e===void 0||r===void 0)return;const i=r[r.length-1];this.$.table.setAttribute("aria-rowcount",e+this._a11yGetHeaderRowCount(r)+this._a11yGetFooterRowCount(r)),this.$.table.setAttribute("aria-colcount",i&&i.length||0),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows()}_a11yUpdateHeaderRows(){Q(this.$.header,(e,r)=>{e.setAttribute("aria-rowindex",r+1)})}_a11yUpdateFooterRows(){Q(this.$.footer,(e,r)=>{e.setAttribute("aria-rowindex",this._a11yGetHeaderRowCount(this._columnTree)+this.size+r+1)})}_a11yUpdateRowRowindex(e,r){e.setAttribute("aria-rowindex",r+this._a11yGetHeaderRowCount(this._columnTree)+1)}_a11yUpdateRowSelected(e,r){e.setAttribute("aria-selected",!!r),Ze(e,i=>{i.setAttribute("aria-selected",!!r)})}_a11yUpdateRowExpanded(e){this.__isRowExpandable(e)?e.setAttribute("aria-expanded","false"):this.__isRowCollapsible(e)?e.setAttribute("aria-expanded","true"):e.removeAttribute("aria-expanded")}_a11yUpdateRowLevel(e,r){r>0||this.__isRowCollapsible(e)||this.__isRowExpandable(e)?e.setAttribute("aria-level",r+1):e.removeAttribute("aria-level")}_a11ySetRowDetailsCell(e,r){Ze(e,i=>{i!==r&&i.setAttribute("aria-controls",r.id)})}_a11yUpdateCellColspan(e,r){e.setAttribute("aria-colspan",Number(r))}_a11yUpdateSorters(){Array.from(this.querySelectorAll("vaadin-grid-sorter")).forEach(e=>{let r=e.parentNode;for(;r&&r.localName!=="vaadin-grid-cell-content";)r=r.parentNode;r&&r.assignedSlot&&r.assignedSlot.parentNode.setAttribute("aria-sort",{asc:"ascending",desc:"descending"}[String(e.direction)]||"none")})}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const cf=s=>{if(!s.parentNode)return!1;const e=Array.from(s.parentNode.querySelectorAll("[tabindex], button, input, select, textarea, object, iframe, a[href], area[href]")).filter(r=>{const i=r.getAttribute("part");return!(i&&i.includes("body-cell"))}).includes(s);return!s.disabled&&e&&s.offsetParent&&getComputedStyle(s).visibility!=="hidden"},hf=s=>class extends s{static get properties(){return{activeItem:{type:Object,notify:!0,value:null}}}ready(){super.ready(),this.$.scroller.addEventListener("click",this._onClick.bind(this)),this.addEventListener("cell-activate",this._activateItem.bind(this)),this.addEventListener("row-activate",this._activateItem.bind(this))}_activateItem(e){const r=e.detail.model,i=r?r.item:null;i&&(this.activeItem=this._itemsEqual(this.activeItem,i)?null:i)}_onClick(e){if(e.defaultPrevented)return;const r=e.composedPath(),i=r[r.indexOf(this.$.table)-3];if(!i||i.getAttribute("part").indexOf("details-cell")>-1)return;const o=i._content,n=this.getRootNode().activeElement;!o.contains(n)&&!this._isFocusable(e.target)&&!(e.target instanceof HTMLLabelElement)&&this.dispatchEvent(new CustomEvent("cell-activate",{detail:{model:this.__getRowModel(i.parentElement)}}))}_isFocusable(e){return cf(e)}};function We(s,t){return s.split(".").reduce((e,r)=>e[r],t)}function So(s,t,e){if(e.length===0)return!1;let r=!0;return s.forEach(({path:i})=>{if(!i||i.indexOf(".")===-1)return;const o=i.replace(/\.[^.]*$/u,"");We(o,e[0])===void 0&&(console.warn(`Path "${i}" used for ${t} does not exist in all of the items, ${t} is disabled.`),r=!1)}),r}function _r(s){return[void 0,null].indexOf(s)>=0?"":isNaN(s)?s.toString():s}function ko(s,t){return s=_r(s),t=_r(t),s<t?-1:s>t?1:0}function uf(s,t){return s.sort((e,r)=>t.map(i=>i.direction==="asc"?ko(We(i.path,e),We(i.path,r)):i.direction==="desc"?ko(We(i.path,r),We(i.path,e)):0).reduce((i,o)=>i!==0?i:o,0))}function pf(s,t){return s.filter(e=>t.every(r=>{const i=_r(We(r.path,e)),o=_r(r.value).toString().toLowerCase();return i.toString().toLowerCase().includes(o)}))}const ff=s=>(t,e)=>{let r=s?[...s]:[];t.filters&&So(t.filters,"filtering",r)&&(r=pf(r,t.filters)),Array.isArray(t.sortOrders)&&t.sortOrders.length&&So(t.sortOrders,"sorting",r)&&(r=uf(r,t.sortOrders));const i=Math.min(r.length,t.pageSize),o=t.page*i,n=o+i,a=r.slice(o,n);e(a,r.length)};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const mf=s=>class extends s{static get properties(){return{items:Array}}static get observers(){return["__dataProviderOrItemsChanged(dataProvider, items, isAttached, items.*, _filters, _sorters)"]}__setArrayDataProvider(e){const r=ff(this.items);r.__items=e,this.setProperties({_arrayDataProvider:r,size:e.length,dataProvider:r})}__dataProviderOrItemsChanged(e,r,i){i&&(this._arrayDataProvider?e!==this._arrayDataProvider?this.setProperties({_arrayDataProvider:void 0,items:void 0}):r?this._arrayDataProvider.__items===r?(this.clearCache(),this.size=this._effectiveSize):this.__setArrayDataProvider(r):(this.setProperties({_arrayDataProvider:void 0,dataProvider:void 0,size:0}),this.clearCache()):r&&this.__setArrayDataProvider(r))}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const _f=s=>class extends s{static get properties(){return{columnReorderingAllowed:{type:Boolean,value:!1},_orderBaseScope:{type:Number,value:1e7}}}static get observers(){return["_updateOrders(_columnTree)"]}ready(){super.ready(),ie(this,"track",this._onTrackEvent),this._reorderGhost=this.shadowRoot.querySelector('[part="reorder-ghost"]'),this.addEventListener("touchstart",this._onTouchStart.bind(this)),this.addEventListener("touchmove",this._onTouchMove.bind(this)),this.addEventListener("touchend",this._onTouchEnd.bind(this)),this.addEventListener("contextmenu",this._onContextMenu.bind(this))}_onContextMenu(e){this.hasAttribute("reordering")&&(e.preventDefault(),is||this._onTrackEnd())}_onTouchStart(e){this._startTouchReorderTimeout=setTimeout(()=>{this._onTrackStart({detail:{x:e.touches[0].clientX,y:e.touches[0].clientY}})},100)}_onTouchMove(e){this._draggedColumn&&e.preventDefault(),clearTimeout(this._startTouchReorderTimeout)}_onTouchEnd(){clearTimeout(this._startTouchReorderTimeout),this._onTrackEnd()}_onTrackEvent(e){if(e.detail.state==="start"){const r=e.composedPath(),i=r[r.indexOf(this.$.header)-2];if(!i||!i._content||i._content.contains(this.getRootNode().activeElement)||this.$.scroller.hasAttribute("column-resizing"))return;this._touchDevice||this._onTrackStart(e)}else e.detail.state==="track"?this._onTrack(e):e.detail.state==="end"&&this._onTrackEnd(e)}_onTrackStart(e){if(!this.columnReorderingAllowed)return;const r=e.composedPath&&e.composedPath();if(r&&r.some(o=>o.hasAttribute&&o.hasAttribute("draggable")))return;const i=this._cellFromPoint(e.detail.x,e.detail.y);if(!(!i||!i.getAttribute("part").includes("header-cell"))){for(this.toggleAttribute("reordering",!0),this._draggedColumn=i._column;this._draggedColumn.parentElement.childElementCount===1;)this._draggedColumn=this._draggedColumn.parentElement;this._setSiblingsReorderStatus(this._draggedColumn,"allowed"),this._draggedColumn._reorderStatus="dragging",this._updateGhost(i),this._reorderGhost.style.visibility="visible",this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y),this._autoScroller()}}_onTrack(e){if(!this._draggedColumn)return;const r=this._cellFromPoint(e.detail.x,e.detail.y);if(!r)return;const i=this._getTargetColumn(r,this._draggedColumn);if(this._isSwapAllowed(this._draggedColumn,i)&&this._isSwappableByPosition(i,e.detail.x)){const o=this._columnTree.findIndex(c=>c.includes(i)),n=this._getColumnsInOrder(o),a=n.indexOf(this._draggedColumn),l=n.indexOf(i),d=a<l?1:-1;for(let c=a;c!==l;c+=d)this._swapColumnOrders(this._draggedColumn,n[c+d])}this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y),this._lastDragClientX=e.detail.x}_onTrackEnd(){this._draggedColumn&&(this.toggleAttribute("reordering",!1),this._draggedColumn._reorderStatus="",this._setSiblingsReorderStatus(this._draggedColumn,""),this._draggedColumn=null,this._lastDragClientX=null,this._reorderGhost.style.visibility="hidden",this.dispatchEvent(new CustomEvent("column-reorder",{detail:{columns:this._getColumnsInOrder()}})))}_getColumnsInOrder(e=this._columnTree.length-1){return this._columnTree[e].filter(r=>!r.hidden).sort((r,i)=>r._order-i._order)}_cellFromPoint(e=0,r=0){this._draggedColumn||this.$.scroller.toggleAttribute("no-content-pointer-events",!0);const i=this.shadowRoot.elementFromPoint(e,r);if(this.$.scroller.toggleAttribute("no-content-pointer-events",!1),i&&i._column)return i}_updateGhostPosition(e,r){const i=this._reorderGhost.getBoundingClientRect(),o=e-i.width/2,n=r-i.height/2,a=parseInt(this._reorderGhost._left||0),l=parseInt(this._reorderGhost._top||0);this._reorderGhost._left=a-(i.left-o),this._reorderGhost._top=l-(i.top-n),this._reorderGhost.style.transform=`translate(${this._reorderGhost._left}px, ${this._reorderGhost._top}px)`}_updateGhost(e){const r=this._reorderGhost;r.textContent=e._content.innerText;const i=window.getComputedStyle(e);return["boxSizing","display","width","height","background","alignItems","padding","border","flex-direction","overflow"].forEach(o=>{r.style[o]=i[o]}),r}_updateOrders(e){e!==void 0&&(e[0].forEach(r=>{r._order=0}),rf(e[0],this._orderBaseScope,0))}_setSiblingsReorderStatus(e,r){Q(e.parentNode,i=>{/column/u.test(i.localName)&&this._isSwapAllowed(i,e)&&(i._reorderStatus=r)})}_autoScroller(){if(this._lastDragClientX){const e=this._lastDragClientX-this.getBoundingClientRect().right+50,r=this.getBoundingClientRect().left-this._lastDragClientX+50;e>0?this.$.table.scrollLeft+=e/10:r>0&&(this.$.table.scrollLeft-=r/10)}this._draggedColumn&&setTimeout(()=>this._autoScroller(),10)}_isSwapAllowed(e,r){if(e&&r){const i=e!==r,o=e.parentElement===r.parentElement,n=e.frozen&&r.frozen||e.frozenToEnd&&r.frozenToEnd||!e.frozen&&!e.frozenToEnd&&!r.frozen&&!r.frozenToEnd;return i&&o&&n}}_isSwappableByPosition(e,r){const i=Array.from(this.$.header.querySelectorAll('tr:not([hidden]) [part~="cell"]')).find(a=>e.contains(a._column)),o=this.$.header.querySelector("tr:not([hidden]) [reorder-status=dragging]").getBoundingClientRect(),n=i.getBoundingClientRect();return n.left>o.left?r>n.right-o.width:r<n.left+o.width}_swapColumnOrders(e,r){[e._order,r._order]=[r._order,e._order],this._debounceUpdateFrozenColumn(),this._updateFirstAndLastColumn()}_getTargetColumn(e,r){if(e&&r){let i=e._column;for(;i.parentElement!==r.parentElement&&i!==this;)i=i.parentElement;return i.parentElement===r.parentElement?i:e._column}}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const gf=s=>class extends s{ready(){super.ready();const e=this.$.scroller;ie(e,"track",this._onHeaderTrack.bind(this)),e.addEventListener("touchmove",r=>e.hasAttribute("column-resizing")&&r.preventDefault()),e.addEventListener("contextmenu",r=>r.target.getAttribute("part")==="resize-handle"&&r.preventDefault()),e.addEventListener("mousedown",r=>r.target.getAttribute("part")==="resize-handle"&&r.preventDefault())}_onHeaderTrack(e){const r=e.target;if(r.getAttribute("part")==="resize-handle"){let o=r.parentElement._column;for(this.$.scroller.toggleAttribute("column-resizing",!0);o.localName==="vaadin-grid-column-group";)o=o._childColumns.slice(0).sort((h,u)=>h._order-u._order).filter(h=>!h.hidden).pop();const n=this.__isRTL,a=e.detail.x,l=Array.from(this.$.header.querySelectorAll('[part~="row"]:last-child [part~="cell"]')),d=l.find(h=>h._column===o);if(d.offsetWidth){const h=getComputedStyle(d._content),u=10+parseInt(h.paddingLeft)+parseInt(h.paddingRight)+parseInt(h.borderLeftWidth)+parseInt(h.borderRightWidth)+parseInt(h.marginLeft)+parseInt(h.marginRight);let p;const _=d.offsetWidth,v=d.getBoundingClientRect();d.hasAttribute("frozen-to-end")?p=_+(n?a-v.right:v.left-a):p=_+(n?v.left-a:a-v.right),o.width=`${Math.max(u,p)}px`,o.flexGrow=0}l.sort((h,u)=>h._column._order-u._column._order).forEach((h,u,p)=>{u<p.indexOf(d)&&(h._column.width=`${h.offsetWidth}px`,h._column.flexGrow=0)});const c=this._frozenToEndCells[0];if(c&&this.$.table.scrollWidth>this.$.table.offsetWidth){const h=c.getBoundingClientRect(),u=a-(n?h.right:h.left);(n&&u<=0||!n&&u>=0)&&(this.$.table.scrollLeft+=u)}e.detail.state==="end"&&(this.$.scroller.toggleAttribute("column-resizing",!1),this.dispatchEvent(new CustomEvent("column-resize",{detail:{resizedColumn:o}}))),this._resizeHandler()}}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Io=class Na{constructor(t,e,r){this.grid=t,this.parentCache=e,this.parentItem=r,this.itemCaches={},this.items={},this.effectiveSize=0,this.size=0,this.pendingRequests={}}isLoading(){return!!(Object.keys(this.pendingRequests).length||Object.keys(this.itemCaches).filter(t=>this.itemCaches[t].isLoading())[0])}getItemForIndex(t){const{cache:e,scaledIndex:r}=this.getCacheAndIndex(t);return e.items[r]}updateSize(){this.effectiveSize=!this.parentItem||this.grid._isExpanded(this.parentItem)?this.size+Object.keys(this.itemCaches).reduce((t,e)=>{const r=this.itemCaches[e];return r.updateSize(),t+r.effectiveSize},0):0}ensureSubCacheForScaledIndex(t){if(!this.itemCaches[t]){const e=new Na(this.grid,this,this.items[t]);this.itemCaches[t]=e,this.grid._loadPage(0,e)}}getCacheAndIndex(t){let e=t;for(const[r,i]of Object.entries(this.itemCaches)){const o=Number(r);if(e<=o)return{cache:this,scaledIndex:e};if(e<=o+i.effectiveSize)return i.getCacheAndIndex(e-o-1);e-=i.effectiveSize}return{cache:this,scaledIndex:e}}getFlatIndex(t){const e=Math.max(0,Math.min(this.size-1,t));return Object.entries(this.itemCaches).reduce((r,[i,o])=>e>Number(i)?r+o.effectiveSize:r,e)}},vf=s=>class extends s{static get properties(){return{size:{type:Number,notify:!0},pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},dataProvider:{type:Object,notify:!0,observer:"_dataProviderChanged"},loading:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0},_cache:{type:Object,value(){return new Io(this)}},_hasData:{type:Boolean,value:!1},itemHasChildrenPath:{type:String,value:"children",observer:"__itemHasChildrenPathChanged"},itemIdPath:{type:String,value:null},expandedItems:{type:Object,notify:!0,value:()=>[]},__expandedKeys:{type:Object,computed:"__computeExpandedKeys(itemIdPath, expandedItems.*)"}}}static get observers(){return["_sizeChanged(size)","_expandedItemsChanged(expandedItems.*)"]}_sizeChanged(e){const r=e-this._cache.size;this._cache.size+=r,this._cache.effectiveSize+=r,this._effectiveSize=this._cache.effectiveSize}__itemHasChildrenPathChanged(e,r){!r&&e==="children"||this.requestContentUpdate()}_getItem(e,r){if(e>=this._effectiveSize)return;r.index=e;const{cache:i,scaledIndex:o}=this._cache.getCacheAndIndex(e),n=i.items[o];n?(this.__updateLoading(r,!1),this._updateItem(r,n),this._isExpanded(n)&&i.ensureSubCacheForScaledIndex(o)):(this.__updateLoading(r,!0),this._loadPage(this._getPageForIndex(o),i))}__updateLoading(e,r){const i=Je(e);Ar(e,"loading",r),ye(i,"loading-row-cell",r)}getItemId(e){return this.itemIdPath?this.get(this.itemIdPath,e):e}_isExpanded(e){return this.__expandedKeys.has(this.getItemId(e))}_expandedItemsChanged(){this._cache.updateSize(),this._effectiveSize=this._cache.effectiveSize,this.__updateVisibleRows()}__computeExpandedKeys(e,r){const i=r.base||[],o=new Set;return i.forEach(n=>{o.add(this.getItemId(n))}),o}expandItem(e){this._isExpanded(e)||(this.expandedItems=[...this.expandedItems,e])}collapseItem(e){this._isExpanded(e)&&(this.expandedItems=this.expandedItems.filter(r=>!this._itemsEqual(r,e)))}_getIndexLevel(e){let{cache:r}=this._cache.getCacheAndIndex(e),i=0;for(;r.parentCache;)r=r.parentCache,i+=1;return i}_loadPage(e,r){if(!r.pendingRequests[e]&&this.dataProvider){this._setLoading(!0),r.pendingRequests[e]=!0;const i={page:e,pageSize:this.pageSize,sortOrders:this._mapSorters(),filters:this._mapFilters(),parentItem:r.parentItem};this.dataProvider(i,(o,n)=>{n!==void 0?r.size=n:i.parentItem&&(r.size=o.length),o.forEach((a,l)=>{const d=e*this.pageSize+l;r.items[d]=a}),this._cache.updateSize(),this._effectiveSize=this._cache.effectiveSize,this._getVisibleRows().forEach(a=>{const{cache:l,scaledIndex:d}=this._cache.getCacheAndIndex(a.index),c=l.items[d];c&&this._isExpanded(c)&&l.ensureSubCacheForScaledIndex(d)}),this._hasData=!0,delete r.pendingRequests[e],this._debouncerApplyCachedData=I.debounce(this._debouncerApplyCachedData,se.after(0),()=>{this._setLoading(!1),this._getVisibleRows().forEach(a=>{this._cache.getItemForIndex(a.index)&&this._getItem(a.index,a)}),this.__scrollToPendingIndexes()}),this._cache.isLoading()||this._debouncerApplyCachedData.flush(),this._onDataProviderPageLoaded()})}}_onDataProviderPageLoaded(){}_getPageForIndex(e){return Math.floor(e/this.pageSize)}clearCache(){this._cache=new Io(this),this._cache.size=this.size||0,this._cache.updateSize(),this._hasData=!1,this.__updateVisibleRows(),this._effectiveSize||this._loadPage(0,this._cache)}_pageSizeChanged(e,r){r!==void 0&&e!==r&&this.clearCache()}_checkSize(){this.size===void 0&&this._effectiveSize===0&&console.warn("The <vaadin-grid> needs the total number of items in order to display rows, which you can specify either by setting the `size` property, or by providing it to the second argument of the `dataProvider` function `callback` call.")}_dataProviderChanged(e,r){r!==void 0&&this.clearCache(),this._ensureFirstPageLoaded(),this._debouncerCheckSize=I.debounce(this._debouncerCheckSize,se.after(2e3),this._checkSize.bind(this))}_ensureFirstPageLoaded(){this._hasData||this._loadPage(0,this._cache)}_itemsEqual(e,r){return this.getItemId(e)===this.getItemId(r)}_getItemIndexInArray(e,r){let i=-1;return r.forEach((o,n)=>{this._itemsEqual(o,e)&&(i=n)}),i}scrollToIndex(...e){let r;for(;r!==(r=this.__getGlobalFlatIndex(e));)this._scrollToFlatIndex(r);(this._cache.isLoading()||!this.clientHeight)&&(this.__pendingScrollToIndexes=e)}__getGlobalFlatIndex([e,...r],i=this._cache,o=0){e===1/0&&(e=i.size-1);const n=i.getFlatIndex(e),a=i.itemCaches[e];return a&&a.effectiveSize&&r.length?this.__getGlobalFlatIndex(r,a,o+n+1):o+n}__scrollToPendingIndexes(){if(this.__pendingScrollToIndexes&&this.$.items.children.length){const e=this.__pendingScrollToIndexes;delete this.__pendingScrollToIndexes,this.scrollToIndex(...e)}}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ft={BETWEEN:"between",ON_TOP:"on-top",ON_TOP_OR_BETWEEN:"on-top-or-between",ON_GRID:"on-grid"},ve={ON_TOP:"on-top",ABOVE:"above",BELOW:"below",EMPTY:"empty"},bf=!("draggable"in document.createElement("div")),yf=s=>class extends s{static get properties(){return{dropMode:String,rowsDraggable:Boolean,dragFilter:Function,dropFilter:Function,__dndAutoScrollThreshold:{value:50}}}static get observers(){return["_dragDropAccessChanged(rowsDraggable, dropMode, dragFilter, dropFilter, loading)"]}ready(){super.ready(),this.$.table.addEventListener("dragstart",this._onDragStart.bind(this)),this.$.table.addEventListener("dragend",this._onDragEnd.bind(this)),this.$.table.addEventListener("dragover",this._onDragOver.bind(this)),this.$.table.addEventListener("dragleave",this._onDragLeave.bind(this)),this.$.table.addEventListener("drop",this._onDrop.bind(this)),this.$.table.addEventListener("dragenter",e=>{this.dropMode&&(e.preventDefault(),e.stopPropagation())})}_onDragStart(e){if(this.rowsDraggable){let r=e.target;if(r.localName==="vaadin-grid-cell-content"&&(r=r.assignedSlot.parentNode.parentNode),r.parentNode!==this.$.items)return;if(e.stopPropagation(),this.toggleAttribute("dragging-rows",!0),this._safari){const a=r.style.transform;r.style.top=/translateY\((.*)\)/u.exec(a)[1],r.style.transform="none",requestAnimationFrame(()=>{r.style.top="",r.style.transform=a})}const i=r.getBoundingClientRect();bf?e.dataTransfer.setDragImage(r):e.dataTransfer.setDragImage(r,e.clientX-i.left,e.clientY-i.top);let o=[r];this._isSelected(r._item)&&(o=this.__getViewportRows().filter(a=>this._isSelected(a._item)).filter(a=>!this.dragFilter||this.dragFilter(this.__getRowModel(a)))),e.dataTransfer.setData("text",this.__formatDefaultTransferData(o)),At(r,{dragstart:o.length>1?`${o.length}`:""}),this.style.setProperty("--_grid-drag-start-x",`${e.clientX-i.left+20}px`),this.style.setProperty("--_grid-drag-start-y",`${e.clientY-i.top+10}px`),requestAnimationFrame(()=>{At(r,{dragstart:!1}),this.style.setProperty("--_grid-drag-start-x",""),this.style.setProperty("--_grid-drag-start-y","")});const n=new CustomEvent("grid-dragstart",{detail:{draggedItems:o.map(a=>a._item),setDragData:(a,l)=>e.dataTransfer.setData(a,l),setDraggedItemsCount:a=>r.setAttribute("dragstart",a)}});n.originalEvent=e,this.dispatchEvent(n)}}_onDragEnd(e){this.toggleAttribute("dragging-rows",!1),e.stopPropagation();const r=new CustomEvent("grid-dragend");r.originalEvent=e,this.dispatchEvent(r)}_onDragLeave(e){e.stopPropagation(),this._clearDragStyles()}_onDragOver(e){if(this.dropMode){if(this._dropLocation=void 0,this._dragOverItem=void 0,this.__dndAutoScroll(e.clientY)){this._clearDragStyles();return}let r=e.composedPath().find(i=>i.localName==="tr");if(!this._effectiveSize||this.dropMode===ft.ON_GRID)this._dropLocation=ve.EMPTY;else if(!r||r.parentNode!==this.$.items){if(r)return;if(this.dropMode===ft.BETWEEN||this.dropMode===ft.ON_TOP_OR_BETWEEN)r=Array.from(this.$.items.children).filter(i=>!i.hidden).pop(),this._dropLocation=ve.BELOW;else return}else{const i=r.getBoundingClientRect();if(this._dropLocation=ve.ON_TOP,this.dropMode===ft.BETWEEN){const o=e.clientY-i.top<i.bottom-e.clientY;this._dropLocation=o?ve.ABOVE:ve.BELOW}else this.dropMode===ft.ON_TOP_OR_BETWEEN&&(e.clientY-i.top<i.height/3?this._dropLocation=ve.ABOVE:e.clientY-i.top>i.height/3*2&&(this._dropLocation=ve.BELOW))}if(r&&r.hasAttribute("drop-disabled")){this._dropLocation=void 0;return}e.stopPropagation(),e.preventDefault(),this._dropLocation===ve.EMPTY?this.toggleAttribute("dragover",!0):r?(this._dragOverItem=r._item,r.getAttribute("dragover")!==this._dropLocation&&Eo(r,{dragover:this._dropLocation})):this._clearDragStyles()}}__dndAutoScroll(e){if(this.__dndAutoScrolling)return!0;const r=this.$.header.getBoundingClientRect().bottom,i=this.$.footer.getBoundingClientRect().top,o=r-e+this.__dndAutoScrollThreshold,n=e-i+this.__dndAutoScrollThreshold;let a=0;if(n>0?a=n*2:o>0&&(a=-o*2),a){const l=this.$.table.scrollTop;if(this.$.table.scrollTop+=a,l!==this.$.table.scrollTop)return this.__dndAutoScrolling=!0,setTimeout(()=>{this.__dndAutoScrolling=!1},20),!0}}__getViewportRows(){const e=this.$.header.getBoundingClientRect().bottom,r=this.$.footer.getBoundingClientRect().top;return Array.from(this.$.items.children).filter(i=>{const o=i.getBoundingClientRect();return o.bottom>e&&o.top<r})}_clearDragStyles(){this.removeAttribute("dragover"),Q(this.$.items,e=>{Eo(e,{dragover:null})})}_onDrop(e){if(this.dropMode){e.stopPropagation(),e.preventDefault();const r=e.dataTransfer.types&&Array.from(e.dataTransfer.types).map(o=>({type:o,data:e.dataTransfer.getData(o)}));this._clearDragStyles();const i=new CustomEvent("grid-drop",{bubbles:e.bubbles,cancelable:e.cancelable,detail:{dropTargetItem:this._dragOverItem,dropLocation:this._dropLocation,dragData:r}});i.originalEvent=e,this.dispatchEvent(i)}}__formatDefaultTransferData(e){return e.map(r=>Array.from(r.children).filter(i=>!i.hidden&&i.getAttribute("part").indexOf("details-cell")===-1).sort((i,o)=>i._column._order>o._column._order?1:-1).map(i=>i._content.textContent.trim()).filter(i=>i).join("	")).join(`
`)}_dragDropAccessChanged(){this.filterDragAndDrop()}filterDragAndDrop(){Q(this.$.items,e=>{e.hidden||this._filterDragAndDrop(e,this.__getRowModel(e))})}_filterDragAndDrop(e,r){const i=this.loading||e.hasAttribute("loading"),o=!this.rowsDraggable||i||this.dragFilter&&!this.dragFilter(r),n=!this.dropMode||i||this.dropFilter&&!this.dropFilter(r);Ze(e,a=>{o?a._content.removeAttribute("draggable"):a._content.setAttribute("draggable",!0)}),At(e,{"drag-disabled":!!o,"drop-disabled":!!n})}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Ra(s,t){if(!s||!t||s.length!==t.length)return!1;for(let e=0,r=s.length;e<r;e++)if(s[e]instanceof Array&&t[e]instanceof Array){if(!Ra(s[e],t[e]))return!1}else if(s[e]!==t[e])return!1;return!0}const wf=s=>class extends s{static get properties(){return{_columnTree:Object}}ready(){super.ready(),this._addNodeObserver()}_hasColumnGroups(e){return e.some(r=>r.localName==="vaadin-grid-column-group")}_getChildColumns(e){return ir.getFlattenedNodes(e).filter(this._isColumnElement)}_flattenColumnGroups(e){return e.map(r=>r.localName==="vaadin-grid-column-group"?this._getChildColumns(r):[r]).reduce((r,i)=>r.concat(i),[])}_getColumnTree(){const e=ir.getFlattenedNodes(this).filter(this._isColumnElement),r=[e];let i=e;for(;this._hasColumnGroups(i);)i=this._flattenColumnGroups(i),r.push(i);return r}_debounceUpdateColumnTree(){this.__updateColumnTreeDebouncer=I.debounce(this.__updateColumnTreeDebouncer,pe,()=>this._updateColumnTree())}_updateColumnTree(){const e=this._getColumnTree();Ra(e,this._columnTree)||(this._columnTree=e)}_addNodeObserver(){this._observer=new ir(this,e=>{const r=i=>i.filter(this._isColumnElement).length>0;if(r(e.addedNodes)||r(e.removedNodes)){const i=e.removedNodes.flatMap(n=>n._allCells),o=n=>i.filter(a=>a._content.contains(n)).length;this.__removeSorters(this._sorters.filter(o)),this.__removeFilters(this._filters.filter(o)),this._debounceUpdateColumnTree()}this._debouncerCheckImports=I.debounce(this._debouncerCheckImports,se.after(2e3),this._checkImports.bind(this)),this._ensureFirstPageLoaded()})}_checkImports(){["vaadin-grid-column-group","vaadin-grid-filter","vaadin-grid-filter-column","vaadin-grid-tree-toggle","vaadin-grid-selection-column","vaadin-grid-sort-column","vaadin-grid-sorter"].forEach(e=>{const r=this.querySelector(e);r&&!(r instanceof K)&&console.warn(`Make sure you have imported the required module for <${e}> element.`)})}_updateFirstAndLastColumn(){Array.from(this.shadowRoot.querySelectorAll("tr")).forEach(e=>this._updateFirstAndLastColumnForRow(e))}_updateFirstAndLastColumnForRow(e){Array.from(e.querySelectorAll('[part~="cell"]:not([part~="details-cell"])')).sort((r,i)=>r._column._order-i._column._order).forEach((r,i,o)=>{De(r,"first-column",i===0),De(r,"last-column",i===o.length-1)})}_isColumnElement(e){return e.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/u.test(e.localName)}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const xf=s=>class extends s{getEventContext(e){const r={},i=e.__composedPath||e.composedPath(),o=i[i.indexOf(this.$.table)-3];return o&&(r.section=["body","header","footer","details"].find(n=>o.getAttribute("part").indexOf(n)>-1),o._column&&(r.column=o._column),(r.section==="body"||r.section==="details")&&Object.assign(r,this.__getRowModel(o.parentElement))),r}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Cf=s=>class extends s{static get properties(){return{_filters:{type:Array,value:()=>[]}}}ready(){super.ready(),this.addEventListener("filter-changed",this._filterChanged.bind(this))}_filterChanged(e){e.stopPropagation(),this.__addFilter(e.target),this.__applyFilters()}__removeFilters(e){e.length!==0&&(this._filters=this._filters.filter(r=>e.indexOf(r)<0),this.__applyFilters())}__addFilter(e){this._filters.indexOf(e)===-1&&this._filters.push(e)}__applyFilters(){this.dataProvider&&this.isAttached&&this.clearCache()}_mapFilters(){return this._filters.map(e=>({path:e.path,value:e.value}))}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Tf=s=>class extends s{static get properties(){return{_headerFocusable:{type:Object,observer:"_focusableChanged"},_itemsFocusable:{type:Object,observer:"_focusableChanged"},_footerFocusable:{type:Object,observer:"_focusableChanged"},_navigatingIsHidden:Boolean,_focusedItemIndex:{type:Number,value:0},_focusedColumnOrder:Number,_focusedCell:{type:Object,observer:"_focusedCellChanged"},interacting:{type:Boolean,value:!1,reflectToAttribute:!0,readOnly:!0,observer:"_interactingChanged"}}}get __rowFocusMode(){return this.__isRow(this._itemsFocusable)||this.__isRow(this._headerFocusable)||this.__isRow(this._footerFocusable)}set __rowFocusMode(e){["_itemsFocusable","_footerFocusable","_headerFocusable"].forEach(r=>{const i=this[r];if(e){const o=i&&i.parentElement;this.__isCell(i)?this[r]=o:this.__isCell(o)&&(this[r]=o.parentElement)}else if(!e&&this.__isRow(i)){const o=i.firstElementChild;this[r]=o._focusButton||o}})}ready(){super.ready(),!(this._ios||this._android)&&(this.addEventListener("keydown",this._onKeyDown),this.addEventListener("keyup",this._onKeyUp),this.addEventListener("focusin",this._onFocusIn),this.addEventListener("focusout",this._onFocusOut),this.$.table.addEventListener("focusin",this._onContentFocusIn.bind(this)),this.addEventListener("mousedown",()=>{this.toggleAttribute("navigating",!1),this._isMousedown=!0,this._focusedColumnOrder=void 0}),this.addEventListener("mouseup",()=>{this._isMousedown=!1}))}_focusableChanged(e,r){r&&r.setAttribute("tabindex","-1"),e&&this._updateGridSectionFocusTarget(e)}_focusedCellChanged(e,r){r&&wr(r,"part","focused-cell"),e&&Ht(e,"part","focused-cell")}_interactingChanged(){this._updateGridSectionFocusTarget(this._headerFocusable),this._updateGridSectionFocusTarget(this._itemsFocusable),this._updateGridSectionFocusTarget(this._footerFocusable)}__updateItemsFocusable(){if(!this._itemsFocusable)return;const e=this.shadowRoot.activeElement===this._itemsFocusable;this._getVisibleRows().forEach(r=>{if(r.index===this._focusedItemIndex)if(this.__rowFocusMode)this._itemsFocusable=r;else{let i=this._itemsFocusable.parentElement,o=this._itemsFocusable;if(i){this.__isCell(i)&&(o=i,i=i.parentElement);const n=[...i.children].indexOf(o);this._itemsFocusable=this.__getFocusable(r,r.children[n])}}}),e&&this._itemsFocusable.focus()}_onKeyDown(e){const r=e.key;let i;switch(r){case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"PageUp":case"PageDown":case"Home":case"End":i="Navigation";break;case"Enter":case"Escape":case"F2":i="Interaction";break;case"Tab":i="Tab";break;case" ":i="Space";break}this._detectInteracting(e),this.interacting&&i!=="Interaction"&&(i=void 0),i&&this[`_on${i}KeyDown`](e,r)}_ensureScrolledToIndex(e){[...this.$.items.children].find(i=>i.index===e)?this.__scrollIntoViewport(e):this.scrollToIndex(e)}__isRowExpandable(e){if(this.itemHasChildrenPath){const r=e._item;return r&&this.get(this.itemHasChildrenPath,r)&&!this._isExpanded(r)}}__isRowCollapsible(e){return this._isExpanded(e._item)}__isDetailsCell(e){return e.matches('[part~="details-cell"]')}__isCell(e){return e instanceof HTMLTableCellElement}__isRow(e){return e instanceof HTMLTableRowElement}__getIndexOfChildElement(e){return Array.prototype.indexOf.call(e.parentNode.children,e)}_onNavigationKeyDown(e,r){e.preventDefault();const i=this._lastVisibleIndex-this._firstVisibleIndex-1,o=this.__isRTL;let n=0,a=0;switch(r){case"ArrowRight":n=o?-1:1;break;case"ArrowLeft":n=o?1:-1;break;case"Home":this.__rowFocusMode||e.ctrlKey?a=-1/0:n=-1/0;break;case"End":this.__rowFocusMode||e.ctrlKey?a=1/0:n=1/0;break;case"ArrowDown":a=1;break;case"ArrowUp":a=-1;break;case"PageDown":a=i;break;case"PageUp":a=-i;break}const l=e.composedPath().find(u=>this.__isRow(u)),d=e.composedPath().find(u=>this.__isCell(u));if(this.__rowFocusMode&&!l||!this.__rowFocusMode&&!d)return;const c=o?"ArrowLeft":"ArrowRight",h=o?"ArrowRight":"ArrowLeft";if(r===c){if(this.__rowFocusMode){if(this.__isRowExpandable(l)){this.expandItem(l._item);return}this.__rowFocusMode=!1,this._onCellNavigation(l.firstElementChild,0,0);return}}else if(r===h)if(this.__rowFocusMode){if(this.__isRowCollapsible(l)){this.collapseItem(l._item);return}}else{const u=[...l.children].sort((p,_)=>p._order-_._order);if(d===u[0]||this.__isDetailsCell(d)){this.__rowFocusMode=!0,this._onRowNavigation(l,0);return}}this.__rowFocusMode?this._onRowNavigation(l,a):this._onCellNavigation(d,n,a)}_onRowNavigation(e,r){const{dstRow:i}=this.__navigateRows(r,e);i&&i.focus()}__getIndexInGroup(e,r){return e.parentNode===this.$.items?r!==void 0?r:e.index:this.__getIndexOfChildElement(e)}__navigateRows(e,r,i){const o=this.__getIndexInGroup(r,this._focusedItemIndex),n=r.parentNode,a=(n===this.$.items?this._effectiveSize:n.children.length)-1;let l=Math.max(0,Math.min(o+e,a));if(n!==this.$.items){if(l>o)for(;l<a&&n.children[l].hidden;)l+=1;else if(l<o)for(;l>0&&n.children[l].hidden;)l-=1;return this.toggleAttribute("navigating",!0),{dstRow:n.children[l]}}let d=!1;if(i){const c=this.__isDetailsCell(i);if(n===this.$.items){const h=r._item,u=this._cache.getItemForIndex(l);c?d=e===0:d=e===1&&this._isDetailsOpened(h)||e===-1&&l!==o&&this._isDetailsOpened(u),d!==c&&(e===1&&d||e===-1&&!d)&&(l=o)}}return this._ensureScrolledToIndex(l),this._focusedItemIndex=l,this.toggleAttribute("navigating",!0),{dstRow:[...n.children].find(c=>!c.hidden&&c.index===l),dstIsRowDetails:d}}_onCellNavigation(e,r,i){const o=e.parentNode,{dstRow:n,dstIsRowDetails:a}=this.__navigateRows(i,o,e);if(!n)return;let l=this.__getIndexOfChildElement(e);this.$.items.contains(e)&&(l=[...this.$.sizer.children].findIndex(u=>u._column===e._column));const d=this.__isDetailsCell(e),c=o.parentNode,h=this.__getIndexInGroup(o,this._focusedItemIndex);if(this._focusedColumnOrder===void 0&&(d?this._focusedColumnOrder=0:this._focusedColumnOrder=this._getColumns(c,h).filter(u=>!u.hidden)[l]._order),a)[...n.children].find(p=>this.__isDetailsCell(p)).focus();else{const u=this.__getIndexInGroup(n,this._focusedItemIndex),p=this._getColumns(c,u).filter(z=>!z.hidden),_=p.map(z=>z._order).sort((z,F)=>z-F),v=_.length-1,w=_.indexOf(_.slice(0).sort((z,F)=>Math.abs(z-this._focusedColumnOrder)-Math.abs(F-this._focusedColumnOrder))[0]),A=i===0&&d?w:Math.max(0,Math.min(w+r,v));A!==w&&(this._focusedColumnOrder=void 0);const W=p.reduce((z,F,te)=>(z[F._order]=te,z),{})[_[A]];let Y;if(this.$.items.contains(e)){const z=this.$.sizer.children[W];this._lazyColumns&&(this.__isColumnInViewport(z._column)||z.scrollIntoView(),this.__updateColumnsBodyContentHidden(),this.__updateHorizontalScrollPosition()),Y=[...n.children].find(F=>F._column===z._column),this._scrollHorizontallyToCell(Y)}else Y=n.children[W],this._scrollHorizontallyToCell(Y);Y.focus()}}_onInteractionKeyDown(e,r){const i=e.composedPath()[0],o=i.localName==="input"&&!/^(button|checkbox|color|file|image|radio|range|reset|submit)$/iu.test(i.type);let n;switch(r){case"Enter":n=this.interacting?!o:!0;break;case"Escape":n=!1;break;case"F2":n=!this.interacting;break}const{cell:a}=this._getGridEventLocation(e);if(this.interacting!==n&&a!==null)if(n){const l=a._content.querySelector("[focus-target]")||[...a._content.querySelectorAll("*")].find(d=>this._isFocusable(d));l&&(e.preventDefault(),l.focus(),this._setInteracting(!0),this.toggleAttribute("navigating",!1))}else e.preventDefault(),this._focusedColumnOrder=void 0,a.focus(),this._setInteracting(!1),this.toggleAttribute("navigating",!0);r==="Escape"&&this._hideTooltip(!0)}_predictFocusStepTarget(e,r){const i=[this.$.table,this._headerFocusable,this._itemsFocusable,this._footerFocusable,this.$.focusexit];let o=i.indexOf(e);for(o+=r;o>=0&&o<=i.length-1;){let n=i[o];if(n&&!this.__rowFocusMode&&(n=i[o].parentNode),!n||n.hidden)o+=r;else break}return i[o]}_onTabKeyDown(e){const r=this._predictFocusStepTarget(e.composedPath()[0],e.shiftKey?-1:1);if(r){if(e.stopPropagation(),r===this.$.table)this.$.table.focus();else if(r===this.$.focusexit)this.$.focusexit.focus();else if(r===this._itemsFocusable){let i=r;const o=this.__isRow(r)?r:r.parentNode;if(this._ensureScrolledToIndex(this._focusedItemIndex),o.index!==this._focusedItemIndex&&this.__isCell(r)){const n=Array.from(o.children).indexOf(this._itemsFocusable),a=Array.from(this.$.items.children).find(l=>!l.hidden&&l.index===this._focusedItemIndex);a&&(i=a.children[n])}e.preventDefault(),i.focus()}else e.preventDefault(),r.focus();this.toggleAttribute("navigating",!0)}}_onSpaceKeyDown(e){e.preventDefault();const r=e.composedPath()[0],i=this.__isRow(r);(i||!r._content||!r._content.firstElementChild)&&this.dispatchEvent(new CustomEvent(i?"row-activate":"cell-activate",{detail:{model:this.__getRowModel(i?r:r.parentElement)}}))}_onKeyUp(e){if(!/^( |SpaceBar)$/u.test(e.key)||this.interacting)return;e.preventDefault();const r=e.composedPath()[0];if(r._content&&r._content.firstElementChild){const i=this.hasAttribute("navigating");r._content.firstElementChild.dispatchEvent(new MouseEvent("click",{shiftKey:e.shiftKey,bubbles:!0,composed:!0,cancelable:!0})),this.toggleAttribute("navigating",i)}}_onFocusIn(e){this._isMousedown||this.toggleAttribute("navigating",!0);const r=e.composedPath()[0];r===this.$.table||r===this.$.focusexit?(this._predictFocusStepTarget(r,r===this.$.table?1:-1).focus(),this._setInteracting(!1)):this._detectInteracting(e)}_onFocusOut(e){this.toggleAttribute("navigating",!1),this._detectInteracting(e),this._hideTooltip(),this._focusedCell=null}_onContentFocusIn(e){const{section:r,cell:i,row:o}=this._getGridEventLocation(e);if(!(!i&&!this.__rowFocusMode)){if(this._detectInteracting(e),r&&(i||o))if(this._activeRowGroup=r,this.$.header===r?this._headerFocusable=this.__getFocusable(o,i):this.$.items===r?this._itemsFocusable=this.__getFocusable(o,i):this.$.footer===r&&(this._footerFocusable=this.__getFocusable(o,i)),i){const n=this.getEventContext(e);i.dispatchEvent(new CustomEvent("cell-focus",{bubbles:!0,composed:!0,detail:{context:n}})),this._focusedCell=i._focusButton||i,Zi()&&e.target===i&&this._showTooltip(e)}else this._focusedCell=null;this._detectFocusedItemIndex(e)}}__getFocusable(e,r){return this.__rowFocusMode?e:r._focusButton||r}_detectInteracting(e){const r=e.composedPath().some(i=>i.localName==="vaadin-grid-cell-content");this._setInteracting(r),this.__updateHorizontalScrollPosition()}_detectFocusedItemIndex(e){const{section:r,row:i}=this._getGridEventLocation(e);r===this.$.items&&(this._focusedItemIndex=i.index)}_updateGridSectionFocusTarget(e){if(!e)return;const r=this._getGridSectionFromFocusTarget(e),i=this.interacting&&r===this._activeRowGroup;e.tabIndex=i?-1:0}_preventScrollerRotatingCellFocus(e,r){e.index===this._focusedItemIndex&&this.hasAttribute("navigating")&&this._activeRowGroup===this.$.items&&(this._navigatingIsHidden=!0,this.toggleAttribute("navigating",!1)),r===this._focusedItemIndex&&this._navigatingIsHidden&&(this._navigatingIsHidden=!1,this.toggleAttribute("navigating",!0))}_getColumns(e,r){let i=this._columnTree.length-1;return e===this.$.header?i=r:e===this.$.footer&&(i=this._columnTree.length-1-r),this._columnTree[i]}__isValidFocusable(e){return this.$.table.contains(e)&&e.offsetHeight}_resetKeyboardNavigation(){if(["header","footer"].forEach(e=>{if(!this.__isValidFocusable(this[`_${e}Focusable`])){const r=[...this.$[e].children].find(o=>o.offsetHeight),i=r?[...r.children].find(o=>!o.hidden):null;r&&i&&(this[`_${e}Focusable`]=this.__getFocusable(r,i))}}),!this.__isValidFocusable(this._itemsFocusable)&&this.$.items.firstElementChild){const e=this.__getFirstVisibleItem(),r=e?[...e.children].find(i=>!i.hidden):null;r&&e&&(delete this._focusedColumnOrder,this._itemsFocusable=this.__getFocusable(e,r))}else this.__updateItemsFocusable()}_scrollHorizontallyToCell(e){if(e.hasAttribute("frozen")||e.hasAttribute("frozen-to-end")||this.__isDetailsCell(e))return;const r=e.getBoundingClientRect(),i=e.parentNode,o=Array.from(i.children).indexOf(e),n=this.$.table.getBoundingClientRect();let a=n.left,l=n.right;for(let d=o-1;d>=0;d--){const c=i.children[d];if(!(c.hasAttribute("hidden")||this.__isDetailsCell(c))&&(c.hasAttribute("frozen")||c.hasAttribute("frozen-to-end"))){a=c.getBoundingClientRect().right;break}}for(let d=o+1;d<i.children.length;d++){const c=i.children[d];if(!(c.hasAttribute("hidden")||this.__isDetailsCell(c))&&(c.hasAttribute("frozen")||c.hasAttribute("frozen-to-end"))){l=c.getBoundingClientRect().left;break}}r.left<a&&(this.$.table.scrollLeft+=Math.round(r.left-a)),r.right>l&&(this.$.table.scrollLeft+=Math.round(r.right-l))}_getGridEventLocation(e){const r=e.composedPath(),i=r.indexOf(this.$.table),o=i>=1?r[i-1]:null,n=i>=2?r[i-2]:null,a=i>=3?r[i-3]:null;return{section:o,row:n,cell:a}}_getGridSectionFromFocusTarget(e){return e===this._headerFocusable?this.$.header:e===this._itemsFocusable?this.$.items:e===this._footerFocusable?this.$.footer:null}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ef=s=>class extends s{static get properties(){return{detailsOpenedItems:{type:Array,value:()=>[]},rowDetailsRenderer:Function,_detailsCells:{type:Array}}}static get observers(){return["_detailsOpenedItemsChanged(detailsOpenedItems.*, rowDetailsRenderer)","_rowDetailsRendererChanged(rowDetailsRenderer)"]}ready(){super.ready(),this._detailsCellResizeObserver=new ResizeObserver(e=>{e.forEach(({target:r})=>{this._updateDetailsCellHeight(r.parentElement)}),this.__virtualizer.__adapter._resizeHandler()})}_rowDetailsRendererChanged(e){e&&this._columnTree&&Q(this.$.items,r=>{if(!r.querySelector("[part~=details-cell]")){this._updateRow(r,this._columnTree[this._columnTree.length-1]);const i=this._isDetailsOpened(r._item);this._toggleDetailsCell(r,i)}})}_detailsOpenedItemsChanged(e,r){e.path==="detailsOpenedItems.length"||!e.value||Q(this.$.items,i=>{if(i.hasAttribute("details-opened")){this._updateItem(i,i._item);return}r&&this._isDetailsOpened(i._item)&&this._updateItem(i,i._item)})}_configureDetailsCell(e){e.setAttribute("part","cell details-cell"),e.toggleAttribute("frozen",!0),this._detailsCellResizeObserver.observe(e)}_toggleDetailsCell(e,r){const i=e.querySelector('[part~="details-cell"]');i&&(i.hidden=!r,!i.hidden&&this.rowDetailsRenderer&&(i._renderer=this.rowDetailsRenderer))}_updateDetailsCellHeight(e){const r=e.querySelector('[part~="details-cell"]');r&&(r.hidden?e.style.removeProperty("padding-bottom"):e.style.setProperty("padding-bottom",`${r.offsetHeight}px`))}_updateDetailsCellHeights(){Q(this.$.items,e=>{this._updateDetailsCellHeight(e)})}_isDetailsOpened(e){return this.detailsOpenedItems&&this._getItemIndexInArray(e,this.detailsOpenedItems)!==-1}openItemDetails(e){this._isDetailsOpened(e)||(this.detailsOpenedItems=[...this.detailsOpenedItems,e])}closeItemDetails(e){this._isDetailsOpened(e)&&(this.detailsOpenedItems=this.detailsOpenedItems.filter(r=>!this._itemsEqual(r,e)))}};/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Pr=document.createElement("div");Pr.style.position="fixed";Pr.style.clip="rect(0px, 0px, 0px, 0px)";Pr.setAttribute("aria-live","polite");document.body.appendChild(Pr);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Oo(s,t){const{scrollLeft:e}=s;return t!=="rtl"?e:s.scrollWidth-s.clientWidth+e}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Qt=new ResizeObserver(s=>{setTimeout(()=>{s.forEach(t=>{t.target.resizables?t.target.resizables.forEach(e=>{e._onResize(t.contentRect)}):t.target._onResize(t.contentRect)})})}),Af=B(s=>class extends s{get _observeParent(){return!1}connectedCallback(){if(super.connectedCallback(),Qt.observe(this),this._observeParent){const e=this.parentNode instanceof ShadowRoot?this.parentNode.host:this.parentNode;e.resizables||(e.resizables=new Set,Qt.observe(e)),e.resizables.add(this),this.__parent=e}}disconnectedCallback(){super.disconnectedCallback(),Qt.unobserve(this);const e=this.__parent;if(this._observeParent&&e){const r=e.resizables;r&&(r.delete(this),r.size===0&&Qt.unobserve(e)),this.__parent=null}}_onResize(e){}});/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const zo={SCROLLING:500,UPDATE_CONTENT_VISIBILITY:100},Pf=s=>class extends Af(s){static get properties(){return{columnRendering:{type:String,value:"eager"},_frozenCells:{type:Array,value:()=>[]},_frozenToEndCells:{type:Array,value:()=>[]},_rowWithFocusedElement:Element}}static get observers(){return["__columnRenderingChanged(_columnTree, columnRendering)"]}get _scrollLeft(){return this.$.table.scrollLeft}get _scrollTop(){return this.$.table.scrollTop}set _scrollTop(e){this.$.table.scrollTop=e}get _lazyColumns(){return this.columnRendering==="lazy"}ready(){super.ready(),this.scrollTarget=this.$.table,this.$.items.addEventListener("focusin",e=>{const r=e.composedPath().indexOf(this.$.items);this._rowWithFocusedElement=e.composedPath()[r-1]}),this.$.items.addEventListener("focusout",()=>{this._rowWithFocusedElement=void 0}),this.$.table.addEventListener("scroll",()=>this._afterScroll())}_onResize(){if(this._updateOverflow(),this.__updateHorizontalScrollPosition(),this._firefox){const e=!pr(this);e&&this.__previousVisible===!1&&(this._scrollTop=this.__memorizedScrollTop||0),this.__previousVisible=e}}_scrollToFlatIndex(e){e=Math.min(this._effectiveSize-1,Math.max(0,e)),this.__virtualizer.scrollToIndex(e),this.__scrollIntoViewport(e)}__scrollIntoViewport(e){const r=[...this.$.items.children].find(i=>i.index===e);if(r){const i=r.getBoundingClientRect(),o=this.$.footer.getBoundingClientRect().top,n=this.$.header.getBoundingClientRect().bottom;i.bottom>o?this.$.table.scrollTop+=i.bottom-o:i.top<n&&(this.$.table.scrollTop-=n-i.top)}}_scheduleScrolling(){this._scrollingFrame||(this._scrollingFrame=requestAnimationFrame(()=>this.$.scroller.toggleAttribute("scrolling",!0))),this._debounceScrolling=I.debounce(this._debounceScrolling,se.after(zo.SCROLLING),()=>{cancelAnimationFrame(this._scrollingFrame),delete this._scrollingFrame,this.$.scroller.toggleAttribute("scrolling",!1)})}_afterScroll(){this.__updateHorizontalScrollPosition(),this.hasAttribute("reordering")||this._scheduleScrolling(),this.hasAttribute("navigating")||this._hideTooltip(!0),this._updateOverflow(),this._debounceColumnContentVisibility=I.debounce(this._debounceColumnContentVisibility,se.after(zo.UPDATE_CONTENT_VISIBILITY),()=>{this._lazyColumns&&this.__cachedScrollLeft!==this._scrollLeft&&(this.__cachedScrollLeft=this._scrollLeft,this.__updateColumnsBodyContentHidden())}),this._firefox&&!pr(this)&&this.__previousVisible!==!1&&(this.__memorizedScrollTop=this._scrollTop)}__updateColumnsBodyContentHidden(){if(!this._columnTree)return;const e=this._getColumnsInOrder();if(!e[0]||!e[0]._sizerCell)return;let r=!1;if(e.forEach(i=>{const o=this._lazyColumns&&!this.__isColumnInViewport(i);i._bodyContentHidden!==o&&(r=!0,i._cells.forEach(n=>{if(n!==i._sizerCell){if(o)n.remove();else if(n.__parentRow){const a=[...n.__parentRow.children].find(l=>e.indexOf(l._column)>e.indexOf(i));n.__parentRow.insertBefore(n,a)}}})),i._bodyContentHidden=o}),r&&this._frozenCellsChanged(),this._lazyColumns){const i=[...e].reverse().find(a=>a.frozen),o=this.__getColumnEnd(i),n=e.find(a=>!a.frozen&&!a._bodyContentHidden);this.__lazyColumnsStart=this.__getColumnStart(n)-o,this.$.items.style.setProperty("--_grid-lazy-columns-start",`${this.__lazyColumnsStart}px`),this._resetKeyboardNavigation()}}__getColumnEnd(e){return e?e._sizerCell.offsetLeft+(this.__isRTL?0:e._sizerCell.offsetWidth):this.__isRTL?this.$.table.clientWidth:0}__getColumnStart(e){return e?e._sizerCell.offsetLeft+(this.__isRTL?e._sizerCell.offsetWidth:0):this.__isRTL?this.$.table.clientWidth:0}__isColumnInViewport(e){return e.frozen||e.frozenToEnd?!0:e._sizerCell.offsetLeft+e._sizerCell.offsetWidth>=this._scrollLeft&&e._sizerCell.offsetLeft<=this._scrollLeft+this.clientWidth}__columnRenderingChanged(e,r){r==="eager"?this.$.scroller.removeAttribute("column-rendering"):this.$.scroller.setAttribute("column-rendering",r),this.__updateColumnsBodyContentHidden()}_updateOverflow(){this._debounceOverflow=I.debounce(this._debounceOverflow,Re,()=>{this.__doUpdateOverflow()})}__doUpdateOverflow(){let e="";const r=this.$.table;r.scrollTop<r.scrollHeight-r.clientHeight&&(e+=" bottom"),r.scrollTop>0&&(e+=" top");const i=Oo(r,this.getAttribute("dir"));i>0&&(e+=" start"),i<r.scrollWidth-r.clientWidth&&(e+=" end"),this.__isRTL&&(e=e.replace(/start|end/giu,n=>n==="start"?"end":"start")),r.scrollLeft<r.scrollWidth-r.clientWidth&&(e+=" right"),r.scrollLeft>0&&(e+=" left");const o=e.trim();o.length>0&&this.getAttribute("overflow")!==o?this.setAttribute("overflow",o):o.length===0&&this.hasAttribute("overflow")&&this.removeAttribute("overflow")}_frozenCellsChanged(){this._debouncerCacheElements=I.debounce(this._debouncerCacheElements,pe,()=>{Array.from(this.shadowRoot.querySelectorAll('[part~="cell"]')).forEach(e=>{e.style.transform=""}),this._frozenCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen]")),this._frozenToEndCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen-to-end]")),this.__updateHorizontalScrollPosition()}),this._debounceUpdateFrozenColumn()}_debounceUpdateFrozenColumn(){this.__debounceUpdateFrozenColumn=I.debounce(this.__debounceUpdateFrozenColumn,pe,()=>this._updateFrozenColumn())}_updateFrozenColumn(){if(!this._columnTree)return;const e=this._columnTree[this._columnTree.length-1].slice(0);e.sort((o,n)=>o._order-n._order);let r,i;for(let o=0;o<e.length;o++){const n=e[o];n._lastFrozen=!1,n._firstFrozenToEnd=!1,i===void 0&&n.frozenToEnd&&!n.hidden&&(i=o),n.frozen&&!n.hidden&&(r=o)}r!==void 0&&(e[r]._lastFrozen=!0),i!==void 0&&(e[i]._firstFrozenToEnd=!0),this.__updateColumnsBodyContentHidden()}__updateHorizontalScrollPosition(){if(!this._columnTree)return;const e=this.$.table.scrollWidth,r=this.$.table.clientWidth,i=Math.max(0,this.$.table.scrollLeft),o=Oo(this.$.table,this.getAttribute("dir")),n=`translate(${-i}px, 0)`;this.$.header.style.transform=n,this.$.footer.style.transform=n,this.$.items.style.transform=n;const a=this.__isRTL?o+r-e:i,l=`translate(${a}px, 0)`;this._frozenCells.forEach(u=>{u.style.transform=l});const d=this.__isRTL?o:i+r-e,c=`translate(${d}px, 0)`;let h=c;if(this._lazyColumns){const u=this._getColumnsInOrder(),p=[...u].reverse().find(P=>!P.frozenToEnd&&!P._bodyContentHidden),_=this.__getColumnEnd(p),v=u.find(P=>P.frozenToEnd),w=this.__getColumnStart(v);h=`translate(${d+(w-_)+this.__lazyColumnsStart}px, 0)`}this._frozenToEndCells.forEach(u=>{this.$.items.contains(u)?u.style.transform=h:u.style.transform=c}),this.hasAttribute("navigating")&&this.__rowFocusMode&&this.$.table.style.setProperty("--_grid-horizontal-scroll-position",`${-a}px`)}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Df=s=>class extends s{static get properties(){return{selectedItems:{type:Object,notify:!0,value:()=>[]},__selectedKeys:{type:Object,computed:"__computeSelectedKeys(itemIdPath, selectedItems.*)"}}}static get observers(){return["__selectedItemsChanged(itemIdPath, selectedItems.*)"]}_isSelected(e){return this.__selectedKeys.has(this.getItemId(e))}selectItem(e){this._isSelected(e)||(this.selectedItems=[...this.selectedItems,e])}deselectItem(e){this._isSelected(e)&&(this.selectedItems=this.selectedItems.filter(r=>!this._itemsEqual(r,e)))}_toggleItem(e){this._isSelected(e)?this.deselectItem(e):this.selectItem(e)}__selectedItemsChanged(){this.requestContentUpdate()}__computeSelectedKeys(e,r){const i=r.base||[],o=new Set;return i.forEach(n=>{o.add(this.getItemId(n))}),o}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let Mo="prepend";const Sf=s=>class extends s{static get properties(){return{multiSort:{type:Boolean,value:!1},multiSortPriority:{type:String,value:()=>Mo},multiSortOnShiftClick:{type:Boolean,value:!1},_sorters:{type:Array,value:()=>[]},_previousSorters:{type:Array,value:()=>[]}}}static setDefaultMultiSortPriority(e){Mo=["append","prepend"].includes(e)?e:"prepend"}ready(){super.ready(),this.addEventListener("sorter-changed",this._onSorterChanged)}_onSorterChanged(e){const r=e.target;e.stopPropagation(),r._grid=this,this.__updateSorter(r,e.detail.shiftClick,e.detail.fromSorterClick),this.__applySorters()}__removeSorters(e){e.length!==0&&(this._sorters=this._sorters.filter(r=>e.indexOf(r)<0),this.multiSort&&this.__updateSortOrders(),this.__applySorters())}__updateSortOrders(){this._sorters.forEach((e,r)=>{e._order=this._sorters.length>1?r:null})}__appendSorter(e){e.direction?this._sorters.includes(e)||this._sorters.push(e):this._removeArrayItem(this._sorters,e),this.__updateSortOrders()}__prependSorter(e){this._removeArrayItem(this._sorters,e),e.direction&&this._sorters.unshift(e),this.__updateSortOrders()}__updateSorter(e,r,i){if(!(!e.direction&&this._sorters.indexOf(e)===-1)){if(e._order=null,this.multiSort&&(!this.multiSortOnShiftClick||!i)||this.multiSortOnShiftClick&&r)this.multiSortPriority==="append"?this.__appendSorter(e):this.__prependSorter(e);else if(e.direction||this.multiSortOnShiftClick){const o=this._sorters.filter(n=>n!==e);this._sorters=e.direction?[e]:[],o.forEach(n=>{n._order=null,n.direction=null})}}}__applySorters(){this.dataProvider&&this.isAttached&&JSON.stringify(this._previousSorters)!==JSON.stringify(this._mapSorters())&&this.clearCache(),this._a11yUpdateSorters(),this._previousSorters=this._mapSorters()}_mapSorters(){return this._sorters.map(e=>({path:e.path,direction:e.direction}))}_removeArrayItem(e,r){const i=e.indexOf(r);i>-1&&e.splice(i,1)}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const kf=s=>class extends s{static get properties(){return{cellClassNameGenerator:Function,cellPartNameGenerator:Function}}static get observers(){return["__cellClassNameGeneratorChanged(cellClassNameGenerator)","__cellPartNameGeneratorChanged(cellPartNameGenerator)"]}__cellClassNameGeneratorChanged(){this.generateCellClassNames()}__cellPartNameGeneratorChanged(){this.generateCellPartNames()}generateCellClassNames(){Q(this.$.items,e=>{!e.hidden&&!e.hasAttribute("loading")&&this._generateCellClassNames(e,this.__getRowModel(e))})}generateCellPartNames(){Q(this.$.items,e=>{!e.hidden&&!e.hasAttribute("loading")&&this._generateCellPartNames(e,this.__getRowModel(e))})}_generateCellClassNames(e,r){Ze(e,i=>{if(i.__generatedClasses&&i.__generatedClasses.forEach(o=>i.classList.remove(o)),this.cellClassNameGenerator){const o=this.cellClassNameGenerator(i._column,r);i.__generatedClasses=o&&o.split(" ").filter(n=>n.length>0),i.__generatedClasses&&i.__generatedClasses.forEach(n=>i.classList.add(n))}})}_generateCellPartNames(e,r){Ze(e,i=>{if(i.__generatedParts&&i.__generatedParts.forEach(o=>{xe(i,null,o)}),this.cellPartNameGenerator){const o=this.cellPartNameGenerator(i._column,r);i.__generatedParts=o&&o.split(" ").filter(n=>n.length>0),i.__generatedParts&&i.__generatedParts.forEach(n=>{xe(i,!0,n)})}})}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class No extends tt(fe(vf(mf(wf(hf(Pf(Df(Sf(Ef(Tf(df(Cf(_f(gf($e(xf(yf(kf(ts(K)))))))))))))))))))){static get template(){return ee`
      <div
        id="scroller"
        safari$="[[_safari]]"
        ios$="[[_ios]]"
        loading$="[[loading]]"
        column-reordering-allowed$="[[columnReorderingAllowed]]"
      >
        <table id="table" role="treegrid" aria-multiselectable="true" tabindex="0">
          <caption id="sizer" part="row"></caption>
          <thead id="header" role="rowgroup"></thead>
          <tbody id="items" role="rowgroup"></tbody>
          <tfoot id="footer" role="rowgroup"></tfoot>
        </table>

        <div part="reorder-ghost"></div>
      </div>

      <slot name="tooltip"></slot>

      <div id="focusexit" tabindex="0"></div>
    `}static get is(){return"vaadin-grid"}static get observers(){return["_columnTreeChanged(_columnTree, _columnTree.*)","_effectiveSizeChanged(_effectiveSize, __virtualizer, _hasData, _columnTree)"]}static get properties(){return{_safari:{type:Boolean,value:la},_ios:{type:Boolean,value:fr},_firefox:{type:Boolean,value:aa},_android:{type:Boolean,value:ho},_touchDevice:{type:Boolean,value:is},allRowsVisible:{type:Boolean,value:!1,reflectToAttribute:!0},__pendingRecalculateColumnWidths:{type:Boolean,value:!0},isAttached:{value:!1},__gridElement:{type:Boolean,value:!0}}}constructor(){super(),this.addEventListener("animationend",this._onAnimationEnd)}get _firstVisibleIndex(){const t=this.__getFirstVisibleItem();return t?t.index:void 0}get _lastVisibleIndex(){const t=this.__getLastVisibleItem();return t?t.index:void 0}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.recalculateColumnWidths()}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this._hideTooltip(!0)}__getFirstVisibleItem(){return this._getVisibleRows().find(t=>this._isInViewport(t))}__getLastVisibleItem(){return this._getVisibleRows().reverse().find(t=>this._isInViewport(t))}_isInViewport(t){const e=this.$.table.getBoundingClientRect(),r=t.getBoundingClientRect(),i=this.$.header.getBoundingClientRect().height,o=this.$.footer.getBoundingClientRect().height;return r.bottom>e.top+i&&r.top<e.bottom-o}_getVisibleRows(){return Array.from(this.$.items.children).filter(t=>!t.hidden).sort((t,e)=>t.index-e.index)}_getRowContainingNode(t){const e=Xn("vaadin-grid-cell-content",t);return e?e.assignedSlot.parentElement.parentElement:void 0}_isItemAssignedToRow(t,e){const r=this.__getRowModel(e);return this.getItemId(t)===this.getItemId(r.item)}ready(){super.ready(),this.__virtualizer=new lf({createElements:this._createScrollerRows.bind(this),updateElement:this._updateScrollerItem.bind(this),scrollContainer:this.$.items,scrollTarget:this.$.table,reorderElements:!0}),new ResizeObserver(()=>setTimeout(()=>{this.__updateFooterPositioning(),this.__updateColumnsBodyContentHidden(),this.__tryToRecalculateColumnWidthsIfPending()})).observe(this.$.table),ss(this),this._tooltipController=new xr(this),this.addController(this._tooltipController),this._tooltipController.setManual(!0)}__getBodyCellCoordinates(t){if(this.$.items.contains(t)&&t.localName==="td")return{item:t.parentElement._item,column:t._column}}__focusBodyCell({item:t,column:e}){const r=this._getVisibleRows().find(o=>o._item===t),i=r&&[...r.children].find(o=>o._column===e);i&&i.focus()}_focusFirstVisibleRow(){const t=this.__getFirstVisibleItem();this.__rowFocusMode=!0,t.focus()}_effectiveSizeChanged(t,e,r,i){if(e&&r&&i){const o=this.shadowRoot.activeElement,n=this.__getBodyCellCoordinates(o),a=e.size||0;e.size=t,e.update(a-1,a-1),t<a&&e.update(t-1,t-1),n&&o.parentElement.hidden&&this.__focusBodyCell(n),this._resetKeyboardNavigation()}}__hasRowsWithClientHeight(){return!!Array.from(this.$.items.children).filter(t=>t.clientHeight).length}__getIntrinsicWidth(t){return this.__intrinsicWidthCache.has(t)||this.__calculateAndCacheIntrinsicWidths([t]),this.__intrinsicWidthCache.get(t)}__getDistributedWidth(t,e){if(t==null||t===this)return 0;const r=Math.max(this.__getIntrinsicWidth(t),this.__getDistributedWidth(t.parentElement,t));if(!e)return r;const i=t,o=r,n=i._visibleChildColumns.map(c=>this.__getIntrinsicWidth(c)).reduce((c,h)=>c+h,0),a=Math.max(0,o-n),d=this.__getIntrinsicWidth(e)/n*a;return this.__getIntrinsicWidth(e)+d}_recalculateColumnWidths(t){this.__virtualizer.flush(),[...this.$.header.children,...this.$.footer.children].forEach(i=>{i.__debounceUpdateHeaderFooterRowVisibility&&i.__debounceUpdateHeaderFooterRowVisibility.flush()}),this._debouncerHiddenChanged&&this._debouncerHiddenChanged.flush(),this.__intrinsicWidthCache=new Map;const e=this._firstVisibleIndex,r=this._lastVisibleIndex;this.__viewportRowsCache=this._getVisibleRows().filter(i=>i.index>=e&&i.index<=r),this.__calculateAndCacheIntrinsicWidths(t),t.forEach(i=>{i.width=`${this.__getDistributedWidth(i)}px`})}__setVisibleCellContentAutoWidth(t,e){t._allCells.filter(r=>this.$.items.contains(r)?this.__viewportRowsCache.includes(r.parentElement):!0).forEach(r=>{r.__measuringAutoWidth=e,r._content.style.width=e?"auto":"",r._content.style.position=e?"absolute":""})}__getAutoWidthCellsMaxWidth(t){return t._allCells.reduce((e,r)=>r.__measuringAutoWidth?Math.max(e,r._content.offsetWidth+1):e,0)}__calculateAndCacheIntrinsicWidths(t){t.forEach(e=>this.__setVisibleCellContentAutoWidth(e,!0)),t.forEach(e=>{const r=this.__getAutoWidthCellsMaxWidth(e);this.__intrinsicWidthCache.set(e,r)}),t.forEach(e=>this.__setVisibleCellContentAutoWidth(e,!1))}recalculateColumnWidths(){if(!this._columnTree)return;if(pr(this)||this._cache.isLoading()){this.__pendingRecalculateColumnWidths=!0;return}const t=this._getColumns().filter(e=>!e.hidden&&e.autoWidth);this._recalculateColumnWidths(t)}__tryToRecalculateColumnWidthsIfPending(){this.__pendingRecalculateColumnWidths&&!pr(this)&&!this._cache.isLoading()&&this.__hasRowsWithClientHeight()&&(this.__pendingRecalculateColumnWidths=!1,this.recalculateColumnWidths())}_onDataProviderPageLoaded(){super._onDataProviderPageLoaded(),this.__tryToRecalculateColumnWidthsIfPending()}_createScrollerRows(t){const e=[];for(let r=0;r<t;r++){const i=document.createElement("tr");i.setAttribute("part","row"),i.setAttribute("role","row"),i.setAttribute("tabindex","-1"),this._columnTree&&this._updateRow(i,this._columnTree[this._columnTree.length-1],"body",!1,!0),e.push(i)}return this._columnTree&&this._columnTree[this._columnTree.length-1].forEach(r=>r.isConnected&&r.notifyPath&&r.notifyPath("_cells.*",r._cells)),this.__afterCreateScrollerRowsDebouncer=I.debounce(this.__afterCreateScrollerRowsDebouncer,Re,()=>{this._afterScroll(),this.__tryToRecalculateColumnWidthsIfPending()}),e}_createCell(t,e){const i=`vaadin-grid-cell-content-${this._contentIndex=this._contentIndex+1||0}`,o=document.createElement("vaadin-grid-cell-content");o.setAttribute("slot",i);const n=document.createElement(t);n.id=i.replace("-content-","-"),n.setAttribute("role",t==="td"?"gridcell":"columnheader"),!ho&&!fr&&(n.addEventListener("mouseenter",l=>{this.$.scroller.hasAttribute("scrolling")||this._showTooltip(l)}),n.addEventListener("mouseleave",()=>{this._hideTooltip()}),n.addEventListener("mousedown",()=>{this._hideTooltip(!0)}));const a=document.createElement("slot");if(a.setAttribute("name",i),e&&e._focusButtonMode){const l=document.createElement("div");l.setAttribute("role","button"),l.setAttribute("tabindex","-1"),n.appendChild(l),n._focusButton=l,n.focus=function(){n._focusButton.focus()},l.appendChild(a)}else n.setAttribute("tabindex","-1"),n.appendChild(a);return n._content=o,o.addEventListener("mousedown",()=>{if(Ju){const l=d=>{const c=o.contains(this.getRootNode().activeElement),h=d.composedPath().includes(o);!c&&h&&n.focus(),document.removeEventListener("mouseup",l,!0)};document.addEventListener("mouseup",l,!0)}else setTimeout(()=>{o.contains(this.getRootNode().activeElement)||n.focus()})}),n}_updateRow(t,e,r="body",i=!1,o=!1){const n=document.createDocumentFragment();Ze(t,a=>{a._vacant=!0}),t.innerHTML="",r==="body"&&(t.__cells=[],t.__detailsCell=null),e.filter(a=>!a.hidden).forEach((a,l,d)=>{let c;if(r==="body"){if(a._cells||(a._cells=[]),c=a._cells.find(h=>h._vacant),c||(c=this._createCell("td",a),a._cells.push(c)),c.setAttribute("part","cell body-cell"),c.__parentRow=t,t.__cells.push(c),a._bodyContentHidden||t.appendChild(c),t===this.$.sizer&&(a._sizerCell=c),l===d.length-1&&this.rowDetailsRenderer){this._detailsCells||(this._detailsCells=[]);const h=this._detailsCells.find(u=>u._vacant)||this._createCell("td");this._detailsCells.indexOf(h)===-1&&this._detailsCells.push(h),h._content.parentElement||n.appendChild(h._content),this._configureDetailsCell(h),t.appendChild(h),t.__detailsCell=h,this._a11ySetRowDetailsCell(t,h),h._vacant=!1}a.notifyPath&&!o&&a.notifyPath("_cells.*",a._cells)}else{const h=r==="header"?"th":"td";i||a.localName==="vaadin-grid-column-group"?(c=a[`_${r}Cell`]||this._createCell(h),c._column=a,t.appendChild(c),a[`_${r}Cell`]=c):(a._emptyCells||(a._emptyCells=[]),c=a._emptyCells.find(u=>u._vacant)||this._createCell(h),c._column=a,t.appendChild(c),a._emptyCells.indexOf(c)===-1&&a._emptyCells.push(c)),c.setAttribute("part",`cell ${r}-cell`)}c._content.parentElement||n.appendChild(c._content),c._vacant=!1,c._column=a}),r!=="body"&&this.__debounceUpdateHeaderFooterRowVisibility(t),this.appendChild(n),this._frozenCellsChanged(),this._updateFirstAndLastColumnForRow(t)}__debounceUpdateHeaderFooterRowVisibility(t){t.__debounceUpdateHeaderFooterRowVisibility=I.debounce(t.__debounceUpdateHeaderFooterRowVisibility,pe,()=>this.__updateHeaderFooterRowVisibility(t))}__updateHeaderFooterRowVisibility(t){if(!t)return;const e=Array.from(t.children).filter(r=>{const i=r._column;if(i._emptyCells&&i._emptyCells.indexOf(r)>-1)return!1;if(t.parentElement===this.$.header){if(i.headerRenderer)return!0;if(i.header===null)return!1;if(i.path||i.header!==void 0)return!0}else if(i.footerRenderer)return!0;return!1});t.hidden!==!e.length&&(t.hidden=!e.length),this._resetKeyboardNavigation()}_updateScrollerItem(t,e){this._preventScrollerRotatingCellFocus(t,e),this._columnTree&&(this._updateRowOrderParts(t,e),this._a11yUpdateRowRowindex(t,e),this._getItem(e,t))}_columnTreeChanged(t){this._renderColumnTree(t),this.recalculateColumnWidths(),this.__updateColumnsBodyContentHidden()}_updateRowOrderParts(t,e=t.index){At(t,{first:e===0,last:e===this._effectiveSize-1,odd:e%2!==0,even:e%2===0})}_updateRowStateParts(t,{expanded:e,selected:r,detailsOpened:i}){At(t,{expanded:e,selected:r,"details-opened":i})}_renderColumnTree(t){for(Q(this.$.items,e=>{this._updateRow(e,t[t.length-1],"body",!1,!0);const r=this.__getRowModel(e);this._updateRowOrderParts(e),this._updateRowStateParts(e,r),this._filterDragAndDrop(e,r)});this.$.header.children.length<t.length;){const e=document.createElement("tr");e.setAttribute("part","row"),e.setAttribute("role","row"),e.setAttribute("tabindex","-1"),this.$.header.appendChild(e);const r=document.createElement("tr");r.setAttribute("part","row"),r.setAttribute("role","row"),r.setAttribute("tabindex","-1"),this.$.footer.appendChild(r)}for(;this.$.header.children.length>t.length;)this.$.header.removeChild(this.$.header.firstElementChild),this.$.footer.removeChild(this.$.footer.firstElementChild);Q(this.$.header,(e,r,i)=>{this._updateRow(e,t[r],"header",r===t.length-1);const o=Je(e);ye(o,"first-header-row-cell",r===0),ye(o,"last-header-row-cell",r===i.length-1)}),Q(this.$.footer,(e,r,i)=>{this._updateRow(e,t[t.length-1-r],"footer",r===0);const o=Je(e);ye(o,"first-footer-row-cell",r===0),ye(o,"last-footer-row-cell",r===i.length-1)}),this._updateRow(this.$.sizer,t[t.length-1]),this._resizeHandler(),this._frozenCellsChanged(),this._updateFirstAndLastColumn(),this._resetKeyboardNavigation(),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows(),this.__updateFooterPositioning(),this.generateCellClassNames(),this.generateCellPartNames()}__updateFooterPositioning(){this._firefox&&parseFloat(navigator.userAgent.match(/Firefox\/(\d{2,3}.\d)/u)[1])<99&&(this.$.items.style.paddingBottom=0,this.allRowsVisible||(this.$.items.style.paddingBottom=`${this.$.footer.offsetHeight}px`))}_updateItem(t,e){t._item=e;const r=this.__getRowModel(t);this._toggleDetailsCell(t,r.detailsOpened),this._a11yUpdateRowLevel(t,r.level),this._a11yUpdateRowSelected(t,r.selected),this._updateRowStateParts(t,r),this._generateCellClassNames(t,r),this._generateCellPartNames(t,r),this._filterDragAndDrop(t,r),Q(t,i=>{if(i._renderer){const o=i._column||this;i._renderer.call(o,i._content,o,r)}}),this._updateDetailsCellHeight(t),this._a11yUpdateRowExpanded(t,r.expanded)}_resizeHandler(){this._updateDetailsCellHeights(),this.__updateFooterPositioning(),this.__updateHorizontalScrollPosition()}_onAnimationEnd(t){t.animationName.indexOf("vaadin-grid-appear")===0&&(t.stopPropagation(),this.__tryToRecalculateColumnWidthsIfPending(),requestAnimationFrame(()=>{this.__scrollToPendingIndexes()}))}__getRowModel(t){return{index:t.index,item:t._item,level:this._getIndexLevel(t.index),expanded:this._isExpanded(t._item),selected:this._isSelected(t._item),detailsOpened:!!this.rowDetailsRenderer&&this._isDetailsOpened(t._item)}}_showTooltip(t){const e=this._tooltipController.node;e&&e.isConnected&&(this._tooltipController.setTarget(t.target),this._tooltipController.setContext(this.getEventContext(t)),e._stateController.open({focus:t.type==="focusin",hover:t.type==="mouseenter"}))}_hideTooltip(t){const e=this._tooltipController.node;e&&e._stateController.close(t)}requestContentUpdate(){this._columnTree&&(this._columnTree.forEach(t=>{t.forEach(e=>{e._renderHeaderAndFooter&&e._renderHeaderAndFooter()})}),this.__updateVisibleRows())}__updateVisibleRows(t,e){this.__virtualizer&&this.__virtualizer.update(t,e)}}customElements.define(No.is,No);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hs={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Fa=s=>(...t)=>({_$litDirective$:s,values:t});class La{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const If=s=>s.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pt=(s,t)=>{var e,r;const i=s._$AN;if(i===void 0)return!1;for(const o of i)(r=(e=o)._$AO)===null||r===void 0||r.call(e,t,!1),Pt(o,t);return!0},gr=s=>{let t,e;do{if((t=s._$AM)===void 0)break;e=t._$AN,e.delete(s),s=t}while((e==null?void 0:e.size)===0)},$a=s=>{for(let t;t=s._$AM;s=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(s))break;e.add(s),Mf(t)}};function Of(s){this._$AN!==void 0?(gr(this),this._$AM=s,$a(this)):this._$AM=s}function zf(s,t=!1,e=0){const r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(r))for(let o=e;o<r.length;o++)Pt(r[o],!1),gr(r[o]);else r!=null&&(Pt(r,!1),gr(r));else Pt(this,s)}const Mf=s=>{var t,e,r,i;s.type==hs.CHILD&&((t=(r=s)._$AP)!==null&&t!==void 0||(r._$AP=zf),(e=(i=s)._$AQ)!==null&&e!==void 0||(i._$AQ=Of))};class Nf extends La{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,r){super._$AT(t,e,r),$a(this),this.isConnected=t._$AU}_$AO(t,e=!0){var r,i;t!==this.isConnected&&(this.isConnected=t,t?(r=this.reconnected)===null||r===void 0||r.call(this):(i=this.disconnected)===null||i===void 0||i.call(this)),e&&(Pt(this,t),gr(this))}setValue(t){if(If(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ro=Symbol("valueNotInitialized");class Rf extends Nf{constructor(t){if(super(t),t.type!==hs.ELEMENT)throw new Error(`\`${this.constructor.name}\` must be bound to an element.`);this.previousValue=Ro}render(t,e){return O}update(t,[e,r]){return this.hasChanged(r)&&(this.host=t.options&&t.options.host,this.element=t.element,this.renderer=e,this.previousValue===Ro?this.addRenderer():this.runRenderer(),this.previousValue=Array.isArray(r)?[...r]:r),O}reconnected(){this.addRenderer()}disconnected(){this.removeRenderer()}addRenderer(){throw new Error("The `addRenderer` method must be implemented.")}runRenderer(){throw new Error("The `runRenderer` method must be implemented.")}removeRenderer(){throw new Error("The `removeRenderer` method must be implemented.")}renderRenderer(t,...e){const r=this.renderer.call(this.host,...e);zi(r,t,{host:this.host})}hasChanged(t){return Array.isArray(t)?!Array.isArray(this.previousValue)||this.previousValue.length!==t.length?!0:t.some((e,r)=>e!==this.previousValue[r]):this.previousValue!==t}}/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Fo=Symbol("contentUpdateDebouncer");/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ff extends Rf{get rendererProperty(){throw new Error("The `rendererProperty` getter must be implemented.")}addRenderer(){this.element[this.rendererProperty]=(t,e)=>{this.renderRenderer(t,e)}}runRenderer(){const t=this.element._grid;t[Fo]=I.debounce(t[Fo],pe,()=>{t.requestContentUpdate()})}removeRenderer(){this.element[this.rendererProperty]=null}}class Lf extends Ff{get rendererProperty(){return"renderer"}addRenderer(){this.element[this.rendererProperty]=(t,e,r)=>{this.renderRenderer(t,r.item,r,e)}}}const ei=Fa(Lf),$f=g`
  :host {
    --vaadin-tooltip-offset-top: var(--lumo-space-xs);
    --vaadin-tooltip-offset-bottom: var(--lumo-space-xs);
    --vaadin-tooltip-offset-start: var(--lumo-space-xs);
    --vaadin-tooltip-offset-end: var(--lumo-space-xs);
  }

  [part='overlay'] {
    background: var(--lumo-base-color) linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-s);
  }

  [part='content'] {
    padding: var(--lumo-space-xs) var(--lumo-space-s);
  }
`;S("vaadin-tooltip-overlay",[Tr,$f],{moduleId:"lumo-tooltip-overlay"});/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */S("vaadin-tooltip-overlay",g`
    :host {
      z-index: 1100;
    }

    [part='overlay'] {
      max-width: 40ch;
    }

    :host([position^='top'][top-aligned]) [part='overlay'],
    :host([position^='bottom'][top-aligned]) [part='overlay'] {
      margin-top: var(--vaadin-tooltip-offset-top, 0);
    }

    :host([position^='top'][bottom-aligned]) [part='overlay'],
    :host([position^='bottom'][bottom-aligned]) [part='overlay'] {
      margin-bottom: var(--vaadin-tooltip-offset-bottom, 0);
    }

    :host([position^='start'][start-aligned]) [part='overlay'],
    :host([position^='end'][start-aligned]) [part='overlay'] {
      margin-inline-start: var(--vaadin-tooltip-offset-start, 0);
    }

    :host([position^='start'][end-aligned]) [part='overlay'],
    :host([position^='end'][end-aligned]) [part='overlay'] {
      margin-inline-end: var(--vaadin-tooltip-offset-end, 0);
    }

    @media (forced-colors: active) {
      [part='overlay'] {
        outline: 1px dashed;
      }
    }
  `,{moduleId:"vaadin-tooltip-overlay-styles"});let mt;class Lo extends ga(ae){static get is(){return"vaadin-tooltip-overlay"}static get template(){return mt||(mt=super.template.cloneNode(!0),mt.content.querySelector('[part~="overlay"]').removeAttribute("tabindex"),mt.content.querySelector('[part~="content"]').innerHTML="<slot></slot>"),mt}static get properties(){return{position:{type:String,reflectToAttribute:!0}}}ready(){super.ready(),this.owner=this.__dataHost,this.owner._overlayElement=this}requestContentUpdate(){if(super.requestContentUpdate(),this.toggleAttribute("hidden",this.textContent.trim()===""),this.positionTarget&&this.owner){const t=getComputedStyle(this.owner);["top","bottom","start","end"].forEach(e=>{this.style.setProperty(`--vaadin-tooltip-offset-${e}`,t.getPropertyValue(`--vaadin-tooltip-offset-${e}`))})}}_updatePosition(){if(super._updatePosition(),!!this.positionTarget){if(this.position==="bottom"||this.position==="top"){const t=this.positionTarget.getBoundingClientRect(),e=this.$.overlay.getBoundingClientRect(),r=t.width/2-e.width/2;if(this.style.left){const i=e.left+r;i>0&&(this.style.left=`${i}px`)}if(this.style.right){const i=parseFloat(this.style.right)+r;i>0&&(this.style.right=`${i}px`)}}if(this.position==="start"||this.position==="end"){const t=this.positionTarget.getBoundingClientRect(),e=this.$.overlay.getBoundingClientRect(),r=t.height/2-e.height/2;this.style.top=`${e.top+r}px`}}}}customElements.define(Lo.is,Lo);/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ge=500;let Ha=Ge,Ba=Ge,Va=Ge;const Jt=new Set;let _t=!1,gt=null,vt=null;class Hf{constructor(t){this.host=t}get openedProp(){return this.host.manual?"opened":"_autoOpened"}get focusDelay(){const t=this.host;return t.focusDelay!=null&&t.focusDelay>0?t.focusDelay:Ha}get hoverDelay(){const t=this.host;return t.hoverDelay!=null&&t.hoverDelay>0?t.hoverDelay:Ba}get hideDelay(){const t=this.host;return t.hideDelay!=null&&t.hideDelay>0?t.hideDelay:Va}open(t={immediate:!1}){const{immediate:e,hover:r,focus:i}=t,o=r&&this.hoverDelay>0,n=i&&this.focusDelay>0;!e&&(o||n)&&!this.__closeTimeout?this.__warmupTooltip(n):this.__showTooltip()}close(t){!t&&this.hideDelay>0?this.__scheduleClose():(this.__abortClose(),this._setOpened(!1)),this.__abortWarmUp(),_t&&(this.__abortCooldown(),this.__scheduleCooldown())}_isOpened(){return this.host[this.openedProp]}_setOpened(t){this.host[this.openedProp]=t}__flushClosingTooltips(){Jt.forEach(t=>{t._stateController.close(!0),Jt.delete(t)})}__showTooltip(){this.__abortClose(),this.__flushClosingTooltips(),this._setOpened(!0),_t=!0,this.__abortWarmUp(),this.__abortCooldown()}__warmupTooltip(t){this._isOpened()||(_t?this.__showTooltip():this.__scheduleWarmUp(t))}__abortClose(){this.__closeTimeout&&(clearTimeout(this.__closeTimeout),this.__closeTimeout=null)}__abortCooldown(){vt&&(clearTimeout(vt),vt=null)}__abortWarmUp(){gt&&(clearTimeout(gt),gt=null)}__scheduleClose(){this._isOpened()&&(Jt.add(this.host),this.__closeTimeout=setTimeout(()=>{Jt.delete(this.host),this.__closeTimeout=null,this._setOpened(!1)},this.hideDelay))}__scheduleCooldown(){vt=setTimeout(()=>{vt=null,_t=!1},this.hideDelay)}__scheduleWarmUp(t){const e=t?this.focusDelay:this.hoverDelay;gt=setTimeout(()=>{gt=null,_t=!0,this.__showTooltip()},e)}}class $o extends za(pn(tt(K))){static get is(){return"vaadin-tooltip"}static get template(){return ee`
      <style>
        :host {
          display: none;
        }
      </style>
      <vaadin-tooltip-overlay
        id="[[_uniqueId]]"
        role="tooltip"
        renderer="[[_renderer]]"
        theme$="[[_theme]]"
        opened="[[__computeOpened(manual, opened, _autoOpened, _isConnected)]]"
        position-target="[[target]]"
        position="[[__effectivePosition]]"
        no-horizontal-overlap$="[[__computeNoHorizontalOverlap(__effectivePosition)]]"
        no-vertical-overlap$="[[__computeNoVerticalOverlap(__effectivePosition)]]"
        horizontal-align="[[__computeHorizontalAlign(__effectivePosition)]]"
        vertical-align="[[__computeVerticalAlign(__effectivePosition)]]"
        on-mouseleave="__onOverlayMouseLeave"
        modeless
      ></vaadin-tooltip-overlay>
    `}static get properties(){return{context:{type:Object,value:()=>({})},focusDelay:{type:Number},for:{type:String,observer:"__forChanged"},hideDelay:{type:Number},hoverDelay:{type:Number},manual:{type:Boolean,value:!1},opened:{type:Boolean,value:!1},position:{type:String},shouldShow:{type:Object,value:()=>(t,e)=>!0},target:{type:Object,observer:"__targetChanged"},text:{type:String,observer:"__textChanged"},generator:{type:Object},_autoOpened:{type:Boolean,observer:"__autoOpenedChanged"},_position:{type:String,value:"bottom"},__effectivePosition:{type:String,computed:"__computePosition(position, _position)"},__isTargetHidden:{type:Boolean,value:!1},_isConnected:{type:Boolean}}}static get observers(){return["__generatorChanged(_overlayElement, generator, context)"]}static setDefaultFocusDelay(t){Ha=t!=null&&t>=0?t:Ge}static setDefaultHideDelay(t){Va=t!=null&&t>=0?t:Ge}static setDefaultHoverDelay(t){Ba=t!=null&&t>=0?t:Ge}constructor(){super(),this._uniqueId=`vaadin-tooltip-${Yi()}`,this._renderer=this.__tooltipRenderer.bind(this),this.__onFocusin=this.__onFocusin.bind(this),this.__onFocusout=this.__onFocusout.bind(this),this.__onMouseDown=this.__onMouseDown.bind(this),this.__onMouseEnter=this.__onMouseEnter.bind(this),this.__onMouseLeave=this.__onMouseLeave.bind(this),this.__onKeyDown=this.__onKeyDown.bind(this),this.__onOverlayOpen=this.__onOverlayOpen.bind(this),this.__targetVisibilityObserver=new IntersectionObserver(t=>{t.forEach(e=>this.__onTargetVisibilityChange(e.isIntersecting))},{threshold:0}),this._stateController=new Hf(this)}connectedCallback(){super.connectedCallback(),this._isConnected=!0,document.body.addEventListener("vaadin-overlay-open",this.__onOverlayOpen)}disconnectedCallback(){super.disconnectedCallback(),this._autoOpened&&this._stateController.close(!0),this._isConnected=!1,document.body.removeEventListener("vaadin-overlay-open",this.__onOverlayOpen)}__computeHorizontalAlign(t){return["top-end","bottom-end","start-top","start","start-bottom"].includes(t)?"end":"start"}__computeNoHorizontalOverlap(t){return["start-top","start","start-bottom","end-top","end","end-bottom"].includes(t)}__computeNoVerticalOverlap(t){return["top-start","top-end","top","bottom-start","bottom","bottom-end"].includes(t)}__computeVerticalAlign(t){return["top-start","top-end","top","start-bottom","end-bottom"].includes(t)?"bottom":"top"}__computeOpened(t,e,r,i){return i&&(t?e:r)}__computePosition(t,e){return t||e}__tooltipRenderer(t){t.textContent=typeof this.generator=="function"?this.generator(this.context):this.text}__autoOpenedChanged(t,e){t?document.addEventListener("keydown",this.__onKeyDown,!0):e&&document.removeEventListener("keydown",this.__onKeyDown,!0)}__forChanged(t){t&&(this.__setTargetByIdDebouncer=I.debounce(this.__setTargetByIdDebouncer,pe,()=>this.__setTargetById(t)))}__setTargetById(t){if(!this.isConnected)return;const e=this.getRootNode().getElementById(t);e?this.target=e:console.warn(`No element with id="${t}" found to show tooltip.`)}__targetChanged(t,e){e&&(e.removeEventListener("mouseenter",this.__onMouseEnter),e.removeEventListener("mouseleave",this.__onMouseLeave),e.removeEventListener("focusin",this.__onFocusin),e.removeEventListener("focusout",this.__onFocusout),e.removeEventListener("mousedown",this.__onMouseDown),this.__targetVisibilityObserver.unobserve(e),wr(e,"aria-describedby",this._uniqueId)),t&&(t.addEventListener("mouseenter",this.__onMouseEnter),t.addEventListener("mouseleave",this.__onMouseLeave),t.addEventListener("focusin",this.__onFocusin),t.addEventListener("focusout",this.__onFocusout),t.addEventListener("mousedown",this.__onMouseDown),requestAnimationFrame(()=>{this.__targetVisibilityObserver.observe(t)}),Ht(t,"aria-describedby",this._uniqueId))}__onFocusin(t){this.manual||Zi()&&(this.target.contains(t.relatedTarget)||this.__isShouldShow()&&(this.__focusInside=!0,!this.__isTargetHidden&&(!this.__hoverInside||!this._autoOpened)&&this._stateController.open({focus:!0})))}__onFocusout(t){this.manual||this.target.contains(t.relatedTarget)||(this.__focusInside=!1,this.__hoverInside||this._stateController.close(!0))}__onKeyDown(t){t.key==="Escape"&&(t.stopPropagation(),this._stateController.close(!0))}__onMouseDown(){this._stateController.close(!0)}__onMouseEnter(){this.manual||this.__isShouldShow()&&(this.__hoverInside||(this.__hoverInside=!0,!this.__isTargetHidden&&(!this.__focusInside||!this._autoOpened)&&this._stateController.open({hover:!0})))}__onMouseLeave(t){t.relatedTarget!==this._overlayElement&&this.__handleMouseLeave()}__onOverlayMouseLeave(t){t.relatedTarget!==this.target&&this.__handleMouseLeave()}__handleMouseLeave(){this.manual||(this.__hoverInside=!1,this.__focusInside||this._stateController.close())}__onOverlayOpen(){this.manual||this._overlayElement.opened&&!this._overlayElement._last&&this._stateController.close(!0)}__onTargetVisibilityChange(t){const e=this.__isTargetHidden;if(this.__isTargetHidden=!t,e&&t&&(this.__focusInside||this.__hoverInside)){this._stateController.open({immediate:!0});return}!t&&this._autoOpened&&this._stateController.close(!0)}__isShouldShow(){return!(typeof this.shouldShow=="function"&&this.shouldShow(this.target,this.context)!==!0)}__textChanged(t,e){this._overlayElement&&(t||e)&&this._overlayElement.requestContentUpdate()}__generatorChanged(t,e,r){t&&((e!==this.__oldTextGenerator||r!==this.__oldContext)&&t.requestContentUpdate(),this.__oldTextGenerator=e,this.__oldContext=r)}}customElements.define($o.is,$o);const Zt={moon(){return G`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-moon-2"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M16.418 4.157a8 8 0 0 0 0 15.686"></path>
        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
      </svg>
    `},help(){return G`<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-help"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
      <path d="M12 17l0 .01"></path>
      <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4"></path>
    </svg>`},externalLink(){return G`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-external-link"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path
          d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"
        ></path>
        <path d="M11 13l9 -9"></path>
        <path d="M15 4h5v5"></path>
      </svg>
    `},spinner(){return G`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-loader-2"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M12 3a9 9 0 1 0 9 9"></path>
      </svg>
    `}};async function Bf(s,t,e){async function r(n){let a=[];return e&&e(`Loading recently opened pulls: repo=${s}, page=${n}`),await fetch(`https://api.github.com/repos/${s}/pulls?sort=updated&direction=desc&state=opened&per_page=100&page=${n}`).then(l=>l.json()).then(l=>{l.forEach(d=>{new Date(d.updated_at)>=t&&a.push(Vf(d))})}),a}let i=1,o=[];for(;;){const n=await r(i);if(n.length===0)break;o=o.concat(n),i++}return o}function Vf(s){return{number:s.number,title:s.title,url:s.html_url,author:s.user.login,updatedAt:s.updated_at}}const Uf={loadRecentlyOpenedPulls:Bf};class Wf{saveGithubData(t){t.hash=Ho();const e=JSON.stringify(t);localStorage.setItem("vdg-github-data",e)}loadGithubData(){const t=localStorage.getItem("vdg-github-data");if(t){const e=JSON.parse(t);if(e.hash===Ho())return e}return null}saveSettings(t){const e=JSON.stringify(t);localStorage.setItem("vdg-settings",e)}loadSettings(){const t=localStorage.getItem("vdg-settings");return t?JSON.parse(t):{theme:"light"}}}function Ho(){return Qo().getTime()}const er=new Wf;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ua=g`
  [theme~='badge'] {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 0.4em calc(0.5em + var(--lumo-border-radius-s) / 4);
    color: var(--lumo-primary-text-color);
    background-color: var(--lumo-primary-color-10pct);
    border-radius: var(--lumo-border-radius-s);
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-s);
    line-height: 1;
    font-weight: 500;
    text-transform: initial;
    letter-spacing: initial;
    min-width: calc(var(--lumo-line-height-xs) * 1em + 0.45em);
    flex-shrink: 0;
  }

  /* Ensure proper vertical alignment */
  [theme~='badge']::before {
    display: inline-block;
    content: '\\2003';
    width: 0;
  }

  [theme~='badge'][theme~='small'] {
    font-size: var(--lumo-font-size-xxs);
    line-height: 1;
  }

  /* Colors */

  [theme~='badge'][theme~='success'] {
    color: var(--lumo-success-text-color);
    background-color: var(--lumo-success-color-10pct);
  }

  [theme~='badge'][theme~='error'] {
    color: var(--lumo-error-text-color);
    background-color: var(--lumo-error-color-10pct);
  }

  [theme~='badge'][theme~='warning'] {
    color: var(--lumo-warning-text-color);
    background-color: var(--lumo-warning-color-10pct);
  }

  [theme~='badge'][theme~='contrast'] {
    color: var(--lumo-contrast-80pct);
    background-color: var(--lumo-contrast-5pct);
  }

  /* Primary */

  [theme~='badge'][theme~='primary'] {
    color: var(--lumo-primary-contrast-color);
    background-color: var(--lumo-primary-color);
  }

  [theme~='badge'][theme~='success'][theme~='primary'] {
    color: var(--lumo-success-contrast-color);
    background-color: var(--lumo-success-color);
  }

  [theme~='badge'][theme~='error'][theme~='primary'] {
    color: var(--lumo-error-contrast-color);
    background-color: var(--lumo-error-color);
  }

  [theme~='badge'][theme~='warning'][theme~='primary'] {
    color: var(--lumo-warning-contrast-color);
    background-color: var(--lumo-warning-color);
  }

  [theme~='badge'][theme~='contrast'][theme~='primary'] {
    color: var(--lumo-base-color);
    background-color: var(--lumo-contrast);
  }

  /* Links */

  [theme~='badge'][href]:hover {
    text-decoration: none;
  }

  /* Icon */

  [theme~='badge'] vaadin-icon {
    margin: -0.25em 0;
  }

  [theme~='badge'] vaadin-icon:first-child {
    margin-left: -0.375em;
  }

  [theme~='badge'] vaadin-icon:last-child {
    margin-right: -0.375em;
  }

  vaadin-icon[theme~='badge'][icon] {
    min-width: 0;
    padding: 0;
    font-size: 1rem;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  vaadin-icon[theme~='badge'][icon][theme~='small'] {
    width: var(--lumo-icon-size-s);
    height: var(--lumo-icon-size-s);
  }

  /* Empty */

  [theme~='badge']:not([icon]):empty {
    min-width: 0;
    width: 1em;
    height: 1em;
    padding: 0;
    border-radius: 50%;
    background-color: var(--lumo-primary-color);
  }

  [theme~='badge'][theme~='small']:not([icon]):empty {
    width: 0.75em;
    height: 0.75em;
  }

  [theme~='badge'][theme~='contrast']:not([icon]):empty {
    background-color: var(--lumo-contrast);
  }

  [theme~='badge'][theme~='success']:not([icon]):empty {
    background-color: var(--lumo-success-color);
  }

  [theme~='badge'][theme~='error']:not([icon]):empty {
    background-color: var(--lumo-error-color);
  }

  [theme~='badge'][theme~='warning']:not([icon]):empty {
    background-color: var(--lumo-warning-color);
  }

  /* Pill */

  [theme~='badge'][theme~='pill'] {
    --lumo-border-radius-s: 1em;
  }

  /* RTL specific styles */

  [dir='rtl'][theme~='badge'] vaadin-icon:first-child {
    margin-right: -0.375em;
    margin-left: 0;
  }

  [dir='rtl'][theme~='badge'] vaadin-icon:last-child {
    margin-left: -0.375em;
    margin-right: 0;
  }
`;S("",Ua,{moduleId:"lumo-badge"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Yf=g`
  :host {
    --vaadin-user-color-0: #df0b92;
    --vaadin-user-color-1: #650acc;
    --vaadin-user-color-2: #097faa;
    --vaadin-user-color-3: #ad6200;
    --vaadin-user-color-4: #bf16f3;
    --vaadin-user-color-5: #084391;
    --vaadin-user-color-6: #078836;
  }

  [theme~='dark'] {
    --vaadin-user-color-0: #ff66c7;
    --vaadin-user-color-1: #9d8aff;
    --vaadin-user-color-2: #8aff66;
    --vaadin-user-color-3: #ffbd66;
    --vaadin-user-color-4: #dc6bff;
    --vaadin-user-color-5: #66fffa;
    --vaadin-user-color-6: #e6ff66;
  }
`;Fe("user-color-props",Yf);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const qf=g`
  /* === Screen readers === */
  .sr-only {
    border-width: 0;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const jf=g`
  /* === Background color === */
  .bg-base {
    background-color: var(--lumo-base-color);
  }

  .bg-transparent {
    background-color: transparent;
  }

  .bg-contrast-5 {
    background-color: var(--lumo-contrast-5pct);
  }
  .bg-contrast-10 {
    background-color: var(--lumo-contrast-10pct);
  }
  .bg-contrast-20 {
    background-color: var(--lumo-contrast-20pct);
  }
  .bg-contrast-30 {
    background-color: var(--lumo-contrast-30pct);
  }
  .bg-contrast-40 {
    background-color: var(--lumo-contrast-40pct);
  }
  .bg-contrast-50 {
    background-color: var(--lumo-contrast-50pct);
  }
  .bg-contrast-60 {
    background-color: var(--lumo-contrast-60pct);
  }
  .bg-contrast-70 {
    background-color: var(--lumo-contrast-70pct);
  }
  .bg-contrast-80 {
    background-color: var(--lumo-contrast-80pct);
  }
  .bg-contrast-90 {
    background-color: var(--lumo-contrast-90pct);
  }
  .bg-contrast {
    background-color: var(--lumo-contrast);
  }

  .bg-primary {
    background-color: var(--lumo-primary-color);
  }
  .bg-primary-50 {
    background-color: var(--lumo-primary-color-50pct);
  }
  .bg-primary-10 {
    background-color: var(--lumo-primary-color-10pct);
  }

  .bg-error {
    background-color: var(--lumo-error-color);
  }
  .bg-error-50 {
    background-color: var(--lumo-error-color-50pct);
  }
  .bg-error-10 {
    background-color: var(--lumo-error-color-10pct);
  }

  .bg-success {
    background-color: var(--lumo-success-color);
  }
  .bg-success-50 {
    background-color: var(--lumo-success-color-50pct);
  }
  .bg-success-10 {
    background-color: var(--lumo-success-color-10pct);
  }

  .bg-warning {
    background-color: var(--lumo-warning-color);
  }
  .bg-warning-10 {
    background-color: var(--lumo-warning-color-10pct);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Gf=g`
  /* === Border === */
  .border-0 {
    border: none;
  }
  .border {
    border: 1px solid;
  }
  .border-b {
    border-bottom: 1px solid;
  }
  .border-l {
    border-left: 1px solid;
  }
  .border-r {
    border-right: 1px solid;
  }
  .border-t {
    border-top: 1px solid;
  }

  /* === Border color === */
  .border-contrast-5 {
    border-color: var(--lumo-contrast-5pct);
  }
  .border-contrast-10 {
    border-color: var(--lumo-contrast-10pct);
  }
  .border-contrast-20 {
    border-color: var(--lumo-contrast-20pct);
  }
  .border-contrast-30 {
    border-color: var(--lumo-contrast-30pct);
  }
  .border-contrast-40 {
    border-color: var(--lumo-contrast-40pct);
  }
  .border-contrast-50 {
    border-color: var(--lumo-contrast-50pct);
  }
  .border-contrast-60 {
    border-color: var(--lumo-contrast-60pct);
  }
  .border-contrast-70 {
    border-color: var(--lumo-contrast-70pct);
  }
  .border-contrast-80 {
    border-color: var(--lumo-contrast-80pct);
  }
  .border-contrast-90 {
    border-color: var(--lumo-contrast-90pct);
  }
  .border-contrast {
    border-color: var(--lumo-contrast);
  }

  .border-primary {
    border-color: var(--lumo-primary-color);
  }
  .border-primary-50 {
    border-color: var(--lumo-primary-color-50pct);
  }
  .border-primary-10 {
    border-color: var(--lumo-primary-color-10pct);
  }

  .border-error {
    border-color: var(--lumo-error-color);
  }
  .border-error-50 {
    border-color: var(--lumo-error-color-50pct);
  }
  .border-error-10 {
    border-color: var(--lumo-error-color-10pct);
  }

  .border-success {
    border-color: var(--lumo-success-color);
  }
  .border-success-50 {
    border-color: var(--lumo-success-color-50pct);
  }
  .border-success-10 {
    border-color: var(--lumo-success-color-10pct);
  }

  .border-warning {
    border-color: var(--lumo-warning-color);
  }
  .border-warning-10 {
    border-color: var(--lumo-warning-color-10pct);
  }
  .border-warning-strong {
    border-color: var(--lumo-warning-text-color);
  }

  /* === Border radius === */
  .rounded-none {
    border-radius: 0;
  }
  .rounded-s {
    border-radius: var(--lumo-border-radius-s);
  }
  .rounded-m {
    border-radius: var(--lumo-border-radius-m);
  }
  .rounded-l {
    border-radius: var(--lumo-border-radius-l);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Kf=g`
  /* === Align content === */
  .content-center {
    align-content: center;
  }
  .content-end {
    align-content: flex-end;
  }
  .content-start {
    align-content: flex-start;
  }
  .content-around {
    align-content: space-around;
  }
  .content-between {
    align-content: space-between;
  }
  .content-evenly {
    align-content: space-evenly;
  }
  .content-stretch {
    align-content: stretch;
  }

  /* === Align items === */
  .items-baseline {
    align-items: baseline;
  }
  .items-center {
    align-items: center;
  }
  .items-end {
    align-items: flex-end;
  }
  .items-start {
    align-items: flex-start;
  }
  .items-stretch {
    align-items: stretch;
  }

  /* === Align self === */
  .self-auto {
    align-self: auto;
  }
  .self-baseline {
    align-self: baseline;
  }
  .self-center {
    align-self: center;
  }
  .self-end {
    align-self: flex-end;
  }
  .self-start {
    align-self: flex-start;
  }
  .self-stretch {
    align-self: stretch;
  }

  /* === Flex === */
  .flex-auto {
    flex: auto;
  }
  .flex-none {
    flex: none;
  }

  /* === Flex direction === */
  .flex-col {
    flex-direction: column;
  }
  .flex-col-reverse {
    flex-direction: column-reverse;
  }
  .flex-row {
    flex-direction: row;
  }
  .flex-row-reverse {
    flex-direction: row-reverse;
  }

  /* === Flex grow === */
  .flex-grow-0 {
    flex-grow: 0;
  }
  .flex-grow {
    flex-grow: 1;
  }

  /* === Flex shrink === */
  .flex-shrink-0 {
    flex-shrink: 0;
  }
  .flex-shrink {
    flex-shrink: 1;
  }

  /* === Flex wrap === */
  .flex-nowrap {
    flex-wrap: nowrap;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .flex-wrap-reverse {
    flex-wrap: wrap-reverse;
  }

  /* === Gap === */
  .gap-xs {
    gap: var(--lumo-space-xs);
  }
  .gap-s {
    gap: var(--lumo-space-s);
  }
  .gap-m {
    gap: var(--lumo-space-m);
  }
  .gap-l {
    gap: var(--lumo-space-l);
  }
  .gap-xl {
    gap: var(--lumo-space-xl);
  }

  /* === Gap (column) === */
  .gap-x-xs {
    column-gap: var(--lumo-space-xs);
  }
  .gap-x-s {
    column-gap: var(--lumo-space-s);
  }
  .gap-x-m {
    column-gap: var(--lumo-space-m);
  }
  .gap-x-l {
    column-gap: var(--lumo-space-l);
  }
  .gap-x-xl {
    column-gap: var(--lumo-space-xl);
  }

  /* === Gap (row) === */
  .gap-y-xs {
    row-gap: var(--lumo-space-xs);
  }
  .gap-y-s {
    row-gap: var(--lumo-space-s);
  }
  .gap-y-m {
    row-gap: var(--lumo-space-m);
  }
  .gap-y-l {
    row-gap: var(--lumo-space-l);
  }
  .gap-y-xl {
    row-gap: var(--lumo-space-xl);
  }

  /* === Grid auto flow === */
  .grid-flow-col {
    grid-auto-flow: column;
  }
  .grid-flow-row {
    grid-auto-flow: row;
  }

  /* === Grid columns === */
  .grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  .grid-cols-5 {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
  .grid-cols-6 {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
  .grid-cols-7 {
    grid-template-columns: repeat(7, minmax(0, 1fr));
  }
  .grid-cols-8 {
    grid-template-columns: repeat(8, minmax(0, 1fr));
  }
  .grid-cols-9 {
    grid-template-columns: repeat(9, minmax(0, 1fr));
  }
  .grid-cols-10 {
    grid-template-columns: repeat(10, minmax(0, 1fr));
  }
  .grid-cols-11 {
    grid-template-columns: repeat(11, minmax(0, 1fr));
  }
  .grid-cols-12 {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }

  /* === Grid rows === */
  .grid-rows-1 {
    grid-template-rows: repeat(1, minmax(0, 1fr));
  }
  .grid-rows-2 {
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }
  .grid-rows-3 {
    grid-template-rows: repeat(3, minmax(0, 1fr));
  }
  .grid-rows-4 {
    grid-template-rows: repeat(4, minmax(0, 1fr));
  }
  .grid-rows-5 {
    grid-template-rows: repeat(5, minmax(0, 1fr));
  }
  .grid-rows-6 {
    grid-template-rows: repeat(6, minmax(0, 1fr));
  }

  /* === Justify content === */
  .justify-center {
    justify-content: center;
  }
  .justify-end {
    justify-content: flex-end;
  }
  .justify-start {
    justify-content: flex-start;
  }
  .justify-around {
    justify-content: space-around;
  }
  .justify-between {
    justify-content: space-between;
  }
  .justify-evenly {
    justify-content: space-evenly;
  }

  /* === Span (column) === */
  .col-span-1 {
    grid-column: span 1 / span 1;
  }
  .col-span-2 {
    grid-column: span 2 / span 2;
  }
  .col-span-3 {
    grid-column: span 3 / span 3;
  }
  .col-span-4 {
    grid-column: span 4 / span 4;
  }
  .col-span-5 {
    grid-column: span 5 / span 5;
  }
  .col-span-6 {
    grid-column: span 6 / span 6;
  }
  .col-span-7 {
    grid-column: span 7 / span 7;
  }
  .col-span-8 {
    grid-column: span 8 / span 8;
  }
  .col-span-9 {
    grid-column: span 9 / span 9;
  }
  .col-span-10 {
    grid-column: span 10 / span 10;
  }
  .col-span-11 {
    grid-column: span 11 / span 11;
  }
  .col-span-12 {
    grid-column: span 12 / span 12;
  }

  /* === Span (row) === */
  .row-span-1 {
    grid-row: span 1 / span 1;
  }
  .row-span-2 {
    grid-row: span 2 / span 2;
  }
  .row-span-3 {
    grid-row: span 3 / span 3;
  }
  .row-span-4 {
    grid-row: span 4 / span 4;
  }
  .row-span-5 {
    grid-row: span 5 / span 5;
  }
  .row-span-6 {
    grid-row: span 6 / span 6;
  }

  /* === Responsive design === */
  @media (min-width: 640px) {
    .sm\\:flex-col {
      flex-direction: column;
    }
    .sm\\:flex-row {
      flex-direction: row;
    }
    .sm\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .sm\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .sm\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .sm\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .sm\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .sm\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .sm\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .sm\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .sm\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .sm\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .sm\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .sm\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }

  @media (min-width: 768px) {
    .md\\:flex-col {
      flex-direction: column;
    }
    .md\\:flex-row {
      flex-direction: row;
    }
    .md\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .md\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .md\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .md\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .md\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .md\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .md\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .md\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .md\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .md\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .md\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .md\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
  @media (min-width: 1024px) {
    .lg\\:flex-col {
      flex-direction: column;
    }
    .lg\\:flex-row {
      flex-direction: row;
    }
    .lg\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .lg\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .lg\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .lg\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .lg\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .lg\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .lg\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .lg\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .lg\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .lg\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .lg\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .lg\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
  @media (min-width: 1280px) {
    .xl\\:flex-col {
      flex-direction: column;
    }
    .xl\\:flex-row {
      flex-direction: row;
    }
    .xl\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .xl\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .xl\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .xl\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .xl\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .xl\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .xl\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .xl\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .xl\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .xl\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .xl\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .xl\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
  @media (min-width: 1536px) {
    .\\32xl\\:flex-col {
      flex-direction: column;
    }
    .\\32xl\\:flex-row {
      flex-direction: row;
    }
    .\\32xl\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Xf=g`
  /* === Box sizing === */
  .box-border {
    box-sizing: border-box;
  }
  .box-content {
    box-sizing: content-box;
  }

  /* === Display === */
  .block {
    display: block;
  }
  .flex {
    display: flex;
  }
  .hidden {
    display: none;
  }
  .inline {
    display: inline;
  }
  .inline-block {
    display: inline-block;
  }
  .inline-flex {
    display: inline-flex;
  }
  .inline-grid {
    display: inline-grid;
  }
  .grid {
    display: grid;
  }

  /* === Overflow === */
  .overflow-auto {
    overflow: auto;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .overflow-scroll {
    overflow: scroll;
  }

  /* === Position === */
  .absolute {
    position: absolute;
  }
  .fixed {
    position: fixed;
  }
  .static {
    position: static;
  }
  .sticky {
    position: sticky;
  }
  .relative {
    position: relative;
  }

  /* === Responsive design === */
  @media (min-width: 640px) {
    .sm\\:flex {
      display: flex;
    }
    .sm\\:hidden {
      display: none;
    }
  }
  @media (min-width: 768px) {
    .md\\:flex {
      display: flex;
    }
    .md\\:hidden {
      display: none;
    }
  }
  @media (min-width: 1024px) {
    .lg\\:flex {
      display: flex;
    }
    .lg\\:hidden {
      display: none;
    }
  }
  @media (min-width: 1280px) {
    .xl\\:flex {
      display: flex;
    }
    .xl\\:hidden {
      display: none;
    }
  }
  @media (min-width: 1536px) {
    .\\32xl\\:flex {
      display: flex;
    }
    .\\32xl\\:hidden {
      display: none;
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Qf=g`
  /* === Box shadows === */
  .shadow-xs {
    box-shadow: var(--lumo-box-shadow-xs);
  }
  .shadow-s {
    box-shadow: var(--lumo-box-shadow-s);
  }
  .shadow-m {
    box-shadow: var(--lumo-box-shadow-m);
  }
  .shadow-l {
    box-shadow: var(--lumo-box-shadow-l);
  }
  .shadow-xl {
    box-shadow: var(--lumo-box-shadow-xl);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Jf=g`
  /* === Height === */
  .h-0 {
    height: 0;
  }
  .h-xs {
    height: var(--lumo-size-xs);
  }
  .h-s {
    height: var(--lumo-size-s);
  }
  .h-m {
    height: var(--lumo-size-m);
  }
  .h-l {
    height: var(--lumo-size-l);
  }
  .h-xl {
    height: var(--lumo-size-xl);
  }
  .h-auto {
    height: auto;
  }
  .h-full {
    height: 100%;
  }
  .h-screen {
    height: 100vh;
  }

  /* === Height (max) === */
  .max-h-full {
    max-height: 100%;
  }
  .max-h-screen {
    max-height: 100vh;
  }

  /* === Height (min) === */
  .min-h-0 {
    min-height: 0;
  }
  .min-h-full {
    min-height: 100%;
  }
  .min-h-screen {
    min-height: 100vh;
  }

  /* === Icon sizing === */
  .icon-s {
    height: var(--lumo-icon-size-s);
    width: var(--lumo-icon-size-s);
  }
  .icon-m {
    height: var(--lumo-icon-size-m);
    width: var(--lumo-icon-size-m);
  }
  .icon-l {
    height: var(--lumo-icon-size-l);
    width: var(--lumo-icon-size-l);
  }

  /* === Width === */
  .w-xs {
    width: var(--lumo-size-xs);
  }
  .w-s {
    width: var(--lumo-size-s);
  }
  .w-m {
    width: var(--lumo-size-m);
  }
  .w-l {
    width: var(--lumo-size-l);
  }
  .w-xl {
    width: var(--lumo-size-xl);
  }
  .w-auto {
    width: auto;
  }
  .w-full {
    width: 100%;
  }

  /* === Width (max) === */
  .max-w-full {
    max-width: 100%;
  }
  .max-w-screen-sm {
    max-width: 640px;
  }
  .max-w-screen-md {
    max-width: 768px;
  }
  .max-w-screen-lg {
    max-width: 1024px;
  }
  .max-w-screen-xl {
    max-width: 1280px;
  }
  .max-w-screen-2xl {
    max-width: 1536px;
  }

  /* === Width (min) === */
  .min-w-0 {
    min-width: 0;
  }
  .min-w-full {
    min-width: 100%;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Zf=g`
  /* === Margin === */
  .m-auto {
    margin: auto;
  }
  .m-0 {
    margin: 0;
  }
  .m-xs {
    margin: var(--lumo-space-xs);
  }
  .m-s {
    margin: var(--lumo-space-s);
  }
  .m-m {
    margin: var(--lumo-space-m);
  }
  .m-l {
    margin: var(--lumo-space-l);
  }
  .m-xl {
    margin: var(--lumo-space-xl);
  }

  /* === Margin (bottom) === */
  .mb-auto {
    margin-bottom: auto;
  }
  .mb-0 {
    margin-bottom: 0;
  }
  .mb-xs {
    margin-bottom: var(--lumo-space-xs);
  }
  .mb-s {
    margin-bottom: var(--lumo-space-s);
  }
  .mb-m {
    margin-bottom: var(--lumo-space-m);
  }
  .mb-l {
    margin-bottom: var(--lumo-space-l);
  }
  .mb-xl {
    margin-bottom: var(--lumo-space-xl);
  }

  /* === Margin (end) === */
  .me-auto {
    margin-inline-end: auto;
  }
  .me-0 {
    margin-inline-end: 0;
  }
  .me-xs {
    margin-inline-end: var(--lumo-space-xs);
  }
  .me-s {
    margin-inline-end: var(--lumo-space-s);
  }
  .me-m {
    margin-inline-end: var(--lumo-space-m);
  }
  .me-l {
    margin-inline-end: var(--lumo-space-l);
  }
  .me-xl {
    margin-inline-end: var(--lumo-space-xl);
  }

  /* === Margin (horizontal) === */
  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }
  .mx-0 {
    margin-left: 0;
    margin-right: 0;
  }
  .mx-xs {
    margin-left: var(--lumo-space-xs);
    margin-right: var(--lumo-space-xs);
  }
  .mx-s {
    margin-left: var(--lumo-space-s);
    margin-right: var(--lumo-space-s);
  }
  .mx-m {
    margin-left: var(--lumo-space-m);
    margin-right: var(--lumo-space-m);
  }
  .mx-l {
    margin-left: var(--lumo-space-l);
    margin-right: var(--lumo-space-l);
  }
  .mx-xl {
    margin-left: var(--lumo-space-xl);
    margin-right: var(--lumo-space-xl);
  }

  /* === Margin (left) === */
  .ml-auto {
    margin-left: auto;
  }
  .ml-0 {
    margin-left: 0;
  }
  .ml-xs {
    margin-left: var(--lumo-space-xs);
  }
  .ml-s {
    margin-left: var(--lumo-space-s);
  }
  .ml-m {
    margin-left: var(--lumo-space-m);
  }
  .ml-l {
    margin-left: var(--lumo-space-l);
  }
  .ml-xl {
    margin-left: var(--lumo-space-xl);
  }

  /* === Margin (right) === */
  .mr-auto {
    margin-right: auto;
  }
  .mr-0 {
    margin-right: 0;
  }
  .mr-xs {
    margin-right: var(--lumo-space-xs);
  }
  .mr-s {
    margin-right: var(--lumo-space-s);
  }
  .mr-m {
    margin-right: var(--lumo-space-m);
  }
  .mr-l {
    margin-right: var(--lumo-space-l);
  }
  .mr-xl {
    margin-right: var(--lumo-space-xl);
  }

  /* === Margin (start) === */
  .ms-auto {
    margin-inline-start: auto;
  }
  .ms-0 {
    margin-inline-start: 0;
  }
  .ms-xs {
    margin-inline-start: var(--lumo-space-xs);
  }
  .ms-s {
    margin-inline-start: var(--lumo-space-s);
  }
  .ms-m {
    margin-inline-start: var(--lumo-space-m);
  }
  .ms-l {
    margin-inline-start: var(--lumo-space-l);
  }
  .ms-xl {
    margin-inline-start: var(--lumo-space-xl);
  }

  /* === Margin (top) === */
  .mt-auto {
    margin-top: auto;
  }
  .mt-0 {
    margin-top: 0;
  }
  .mt-xs {
    margin-top: var(--lumo-space-xs);
  }
  .mt-s {
    margin-top: var(--lumo-space-s);
  }
  .mt-m {
    margin-top: var(--lumo-space-m);
  }
  .mt-l {
    margin-top: var(--lumo-space-l);
  }
  .mt-xl {
    margin-top: var(--lumo-space-xl);
  }

  /* === Margin (vertical) === */
  .my-auto {
    margin-bottom: auto;
    margin-top: auto;
  }
  .my-0 {
    margin-bottom: 0;
    margin-top: 0;
  }
  .my-xs {
    margin-bottom: var(--lumo-space-xs);
    margin-top: var(--lumo-space-xs);
  }
  .my-s {
    margin-bottom: var(--lumo-space-s);
    margin-top: var(--lumo-space-s);
  }
  .my-m {
    margin-bottom: var(--lumo-space-m);
    margin-top: var(--lumo-space-m);
  }
  .my-l {
    margin-bottom: var(--lumo-space-l);
    margin-top: var(--lumo-space-l);
  }
  .my-xl {
    margin-bottom: var(--lumo-space-xl);
    margin-top: var(--lumo-space-xl);
  }

  /* === Padding === */
  .p-0 {
    padding: 0;
  }
  .p-xs {
    padding: var(--lumo-space-xs);
  }
  .p-s {
    padding: var(--lumo-space-s);
  }
  .p-m {
    padding: var(--lumo-space-m);
  }
  .p-l {
    padding: var(--lumo-space-l);
  }
  .p-xl {
    padding: var(--lumo-space-xl);
  }

  /* === Padding (bottom) === */
  .pb-0 {
    padding-bottom: 0;
  }
  .pb-xs {
    padding-bottom: var(--lumo-space-xs);
  }
  .pb-s {
    padding-bottom: var(--lumo-space-s);
  }
  .pb-m {
    padding-bottom: var(--lumo-space-m);
  }
  .pb-l {
    padding-bottom: var(--lumo-space-l);
  }
  .pb-xl {
    padding-bottom: var(--lumo-space-xl);
  }

  /* === Padding (end) === */
  .pe-0 {
    padding-inline-end: 0;
  }
  .pe-xs {
    padding-inline-end: var(--lumo-space-xs);
  }
  .pe-s {
    padding-inline-end: var(--lumo-space-s);
  }
  .pe-m {
    padding-inline-end: var(--lumo-space-m);
  }
  .pe-l {
    padding-inline-end: var(--lumo-space-l);
  }
  .pe-xl {
    padding-inline-end: var(--lumo-space-xl);
  }

  /* === Padding (horizontal) === */
  .px-0 {
    padding-left: 0;
    padding-right: 0;
  }
  .px-xs {
    padding-left: var(--lumo-space-xs);
    padding-right: var(--lumo-space-xs);
  }
  .px-s {
    padding-left: var(--lumo-space-s);
    padding-right: var(--lumo-space-s);
  }
  .px-m {
    padding-left: var(--lumo-space-m);
    padding-right: var(--lumo-space-m);
  }
  .px-l {
    padding-left: var(--lumo-space-l);
    padding-right: var(--lumo-space-l);
  }
  .px-xl {
    padding-left: var(--lumo-space-xl);
    padding-right: var(--lumo-space-xl);
  }

  /* === Padding (left) === */
  .pl-0 {
    padding-left: 0;
  }
  .pl-xs {
    padding-left: var(--lumo-space-xs);
  }
  .pl-s {
    padding-left: var(--lumo-space-s);
  }
  .pl-m {
    padding-left: var(--lumo-space-m);
  }
  .pl-l {
    padding-left: var(--lumo-space-l);
  }
  .pl-xl {
    padding-left: var(--lumo-space-xl);
  }

  /* === Padding (right) === */
  .pr-0 {
    padding-right: 0;
  }
  .pr-xs {
    padding-right: var(--lumo-space-xs);
  }
  .pr-s {
    padding-right: var(--lumo-space-s);
  }
  .pr-m {
    padding-right: var(--lumo-space-m);
  }
  .pr-l {
    padding-right: var(--lumo-space-l);
  }
  .pr-xl {
    padding-right: var(--lumo-space-xl);
  }

  /* === Padding (start) === */
  .ps-0 {
    padding-inline-start: 0;
  }
  .ps-xs {
    padding-inline-start: var(--lumo-space-xs);
  }
  .ps-s {
    padding-inline-start: var(--lumo-space-s);
  }
  .ps-m {
    padding-inline-start: var(--lumo-space-m);
  }
  .ps-l {
    padding-inline-start: var(--lumo-space-l);
  }
  .ps-xl {
    padding-inline-start: var(--lumo-space-xl);
  }

  /* === Padding (top) === */
  .pt-0 {
    padding-top: 0;
  }
  .pt-xs {
    padding-top: var(--lumo-space-xs);
  }
  .pt-s {
    padding-top: var(--lumo-space-s);
  }
  .pt-m {
    padding-top: var(--lumo-space-m);
  }
  .pt-l {
    padding-top: var(--lumo-space-l);
  }
  .pt-xl {
    padding-top: var(--lumo-space-xl);
  }

  /* === Padding (vertical) === */
  .py-0 {
    padding-bottom: 0;
    padding-top: 0;
  }
  .py-xs {
    padding-bottom: var(--lumo-space-xs);
    padding-top: var(--lumo-space-xs);
  }
  .py-s {
    padding-bottom: var(--lumo-space-s);
    padding-top: var(--lumo-space-s);
  }
  .py-m {
    padding-bottom: var(--lumo-space-m);
    padding-top: var(--lumo-space-m);
  }
  .py-l {
    padding-bottom: var(--lumo-space-l);
    padding-top: var(--lumo-space-l);
  }
  .py-xl {
    padding-bottom: var(--lumo-space-xl);
    padding-top: var(--lumo-space-xl);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const em=g`
  /* === Font size === */
  .text-2xs {
    font-size: var(--lumo-font-size-xxs);
  }
  .text-xs {
    font-size: var(--lumo-font-size-xs);
  }
  .text-s {
    font-size: var(--lumo-font-size-s);
  }
  .text-m {
    font-size: var(--lumo-font-size-m);
  }
  .text-l {
    font-size: var(--lumo-font-size-l);
  }
  .text-xl {
    font-size: var(--lumo-font-size-xl);
  }
  .text-2xl {
    font-size: var(--lumo-font-size-xxl);
  }
  .text-3xl {
    font-size: var(--lumo-font-size-xxxl);
  }

  /* === Font weight === */
  .font-thin {
    font-weight: 100;
  }
  .font-extralight {
    font-weight: 200;
  }
  .font-light {
    font-weight: 300;
  }
  .font-normal {
    font-weight: 400;
  }
  .font-medium {
    font-weight: 500;
  }
  .font-semibold {
    font-weight: 600;
  }
  .font-bold {
    font-weight: 700;
  }
  .font-extrabold {
    font-weight: 800;
  }
  .font-black {
    font-weight: 900;
  }

  /* === Line height === */
  .leading-none {
    line-height: 1;
  }
  .leading-xs {
    line-height: var(--lumo-line-height-xs);
  }
  .leading-s {
    line-height: var(--lumo-line-height-s);
  }
  .leading-m {
    line-height: var(--lumo-line-height-m);
  }

  /* === List style type === */
  .list-none {
    list-style-type: none;
  }

  /* === Text alignment === */
  .text-left {
    text-align: left;
  }
  .text-center {
    text-align: center;
  }
  .text-right {
    text-align: right;
  }
  .text-justify {
    text-align: justify;
  }

  /* === Text color === */
  .text-header {
    color: var(--lumo-header-text-color);
  }
  .text-body {
    color: var(--lumo-body-text-color);
  }
  .text-secondary {
    color: var(--lumo-secondary-text-color);
  }
  .text-tertiary {
    color: var(--lumo-tertiary-text-color);
  }
  .text-disabled {
    color: var(--lumo-disabled-text-color);
  }
  .text-primary {
    color: var(--lumo-primary-text-color);
  }
  .text-primary-contrast {
    color: var(--lumo-primary-contrast-color);
  }
  .text-error {
    color: var(--lumo-error-text-color);
  }
  .text-error-contrast {
    color: var(--lumo-error-contrast-color);
  }
  .text-success {
    color: var(--lumo-success-text-color);
  }
  .text-success-contrast {
    color: var(--lumo-success-contrast-color);
  }
  .text-warning {
    color: var(--lumo-warning-text-color);
  }
  .text-warning-contrast {
    color: var(--lumo-warning-contrast-color);
  }

  /* === Text overflow === */
  .overflow-clip {
    text-overflow: clip;
  }
  .overflow-ellipsis {
    text-overflow: ellipsis;
  }

  /* === Text transform === */
  .capitalize {
    text-transform: capitalize;
  }
  .lowercase {
    text-transform: lowercase;
  }
  .uppercase {
    text-transform: uppercase;
  }

  /* === Whitespace === */
  .whitespace-normal {
    white-space: normal;
  }
  .whitespace-nowrap {
    white-space: nowrap;
  }
  .whitespace-pre {
    white-space: pre;
  }
  .whitespace-pre-line {
    white-space: pre-line;
  }
  .whitespace-pre-wrap {
    white-space: pre-wrap;
  }

  /* === Responsive design === */
  @media (min-width: 640px) {
    .sm\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .sm\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .sm\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .sm\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .sm\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .sm\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .sm\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .sm\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 768px) {
    .md\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .md\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .md\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .md\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .md\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .md\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .md\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .md\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 1024px) {
    .lg\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .lg\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .lg\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .lg\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .lg\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .lg\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .lg\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .lg\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 1280px) {
    .xl\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .xl\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .xl\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .xl\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .xl\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .xl\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .xl\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .xl\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 1536px) {
    .\\32xl\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .\\32xl\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .\\32xl\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .\\32xl\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .\\32xl\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .\\32xl\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .\\32xl\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .\\32xl\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const tm=g`
${qf}
${jf}
${Gf}
${Qf}
${Kf}
${Xf}
${Jf}
${Zf}
${em}
`;S("",tm,{moduleId:"lumo-utility"});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ai extends La{constructor(t){if(super(t),this.et=O,t.type!==hs.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===O||t==null)return this.ft=void 0,this.et=t;if(t===Me)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}}Ai.directiveName="unsafeHTML",Ai.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Pi extends Ai{}Pi.directiveName="unsafeSVG",Pi.resultType=2;const rm=Fa(Pi);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Bo(s){let t=O;if(s){const e=s.cloneNode(!0);e.removeAttribute("id"),t=tl`${rm(e.outerHTML)}`}return t}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ae={},Vo=new Set;function Wa(s,t){return(s||"").replace(`${t}:`,"")}function Uo(s){return s?s.split(":")[0]||"vaadin":void 0}function Wo(s,t){s._icons=[...s.querySelectorAll("[id]")].reduce((e,r)=>{const i=Wa(r.id,t);return e[i]=r,e},{})}class Di extends tt(K){static get template(){return null}static get is(){return"vaadin-iconset"}static get properties(){return{name:{type:String,observer:"__nameChanged"},size:{type:Number,value:24}}}static get attachedIcons(){return Vo}static getIconset(t){return Ae[t]}static getIconSvg(t,e){const r=e||Uo(t),i=this.getIconset(r);if(!t||!i)return{svg:Bo(null)};const o=Wa(t,r),n=i._icons[o];return{preserveAspectRatio:n?n.getAttribute("preserveAspectRatio"):null,svg:Bo(n),size:i.size,viewBox:n?n.getAttribute("viewBox"):null}}static register(t,e,r){if(!Ae[t]){const i=document.createElement("vaadin-iconset");i.appendChild(r.content.cloneNode(!0)),Ae[t]=i,Wo(i,t),i.size=e,i.name=t,i.__nameChanged(t)}}connectedCallback(){super.connectedCallback(),this.style.display="none";const{name:t}=this;Ae[t]=this,Wo(this,t),this.__updateIcons(t)}__updateIcons(t){Vo.forEach(e=>{t===Uo(e.icon)&&e._applyIcon()})}__nameChanged(t,e){e&&(Ae[t]=Ae[e],delete Ae[e]),t&&this.__updateIcons(t)}}customElements.define(Di.is,Di);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ya=document.createElement("template");Ya.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg"><defs>
<g id="lumo:align-center"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m83 191c0-18 13-33 29-33H721c16 0 29 15 29 33 0 18-13 33-29 34H279C263 442 250 427 250 408zM250 792c0-18 13-33 29-34H721c16 0 29 15 29 34s-13 33-29 33H279C263 825 250 810 250 792z m-83-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>
<g id="lumo:align-left"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m0 191c0-18 13-33 28-33H638c16 0 29 15 29 33 0 18-13 33-29 34H195C179 442 167 427 167 408zM167 792c0-18 13-33 28-34H638c16 0 29 15 29 34s-13 33-29 33H195C179 825 167 810 167 792z m0-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>
<g id="lumo:align-right"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m166 191c0-18 13-33 29-33H805c16 0 29 15 28 33 0 18-13 33-28 34H362C346 442 333 427 333 408zM333 792c0-18 13-33 29-34H805c16 0 29 15 28 34s-13 33-28 33H362C346 825 333 810 333 792z m-166-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>
<g id="lumo:angle-down"><path d="M283 391c-18-16-46-15-63 4-16 18-15 46 3 63l244 224c17 15 43 15 60 0l250-229c18-16 20-45 3-63-16-18-45-20-63-4l-220 203-214-198z"></path></g>
<g id="lumo:angle-left"><path d="M601 710c16 18 15 46-3 63-18 16-46 15-63-4l-224-244c-15-17-15-43 0-59l229-250c16-18 45-20 63-4 18 16 20 45 3 63l-203 220 198 215z"></path></g>
<g id="lumo:angle-right"><path d="M399 275c-16-18-15-46 3-63 18-16 46-15 63 4l224 244c15 17 15 43 0 59l-229 250c-16 18-45 20-63 4-18-16-20-45-3-63l203-220-198-215z"></path></g>
<g id="lumo:angle-up"><path d="M283 635c-18 16-46 15-63-3-16-18-15-46 3-63l244-224c17-15 43-15 60 0l250 229c18 16 20 45 3 63-16 18-45 20-63 3l-220-202L283 635z"></path></g>
<g id="lumo:arrow-down"><path d="M538 646l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166c0 0 0 0 0 0-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 646V312c0-21 17-38 38-37s38 17 37 37v334z"></path></g>
<g id="lumo:arrow-left"><path d="M375 538l111 125c14 15 12 39-3 53-15 14-39 12-53-4l-166-187c0 0 0 0 0 0-13-14-12-36 0-50l166-187c14-15 37-17 53-4 15 14 17 37 3 53L375 463h333c21 0 38 17 38 37 0 21-17 38-38 38h-333z"></path></g>
<g id="lumo:arrow-right"><path d="M625 538h-333c-21 0-38-17-38-38 0-21 17-38 38-37h333l-111-126c-14-15-12-39 3-53 15-14 39-12 53 4l166 187c13 14 13 36 0 50 0 0 0 0 0 0l-166 187c-14 15-37 17-53 4-15-14-17-37-3-53l111-125z"></path></g>
<g id="lumo:arrow-up"><path d="M538 354V688c0 21-17 38-38 37s-38-17-38-38V354l-125 112c-15 14-39 12-53-4-14-15-12-39 4-53l187-166c14-13 36-13 50 0 0 0 0 0 0 0l187 166c15 14 17 37 4 53-14 15-37 17-53 4L538 354z"></path></g>
<g id="lumo:bar-chart"><path d="M175 500h108c28 0 50 22 50 50v233c0 28-22 50-50 50H175c-28 0-50-22-50-50v-233c0-28 22-50 50-50z m33 67c-9 0-17 7-16 16v167c0 9 7 17 16 17h42c9 0 17-7 17-17v-167c0-9-7-17-17-16H208zM446 167h108c28 0 50 22 50 50v566c0 28-22 50-50 50h-108c-28 0-50-22-50-50V217c0-28 22-50 50-50z m33 66c-9 0-17 7-17 17v500c0 9 7 17 17 17h42c9 0 17-7 16-17V250c0-9-7-17-16-17h-42zM717 333h108c28 0 50 22 50 50v400c0 28-22 50-50 50h-108c-28 0-50-22-50-50V383c0-28 22-50 50-50z m33 67c-9 0-17 7-17 17v333c0 9 7 17 17 17h42c9 0 17-7 16-17v-333c0-9-7-17-16-17h-42z"></path></g>
<g id="lumo:bell"><path d="M367 675H292v-258C292 325 366 250 459 250H458V208c0-23 18-42 42-41 23 0 42 18 42 41v42h-1C634 250 708 325 708 417V675h-75v-258c0-51-41-92-91-92h-84C408 325 367 366 367 417V675z m-159 37c0-21 17-38 38-37h508c21 0 37 17 38 37 0 21-17 38-38 38H246C225 750 208 733 208 713z m230 71h125v32c0 17-14 31-32 31h-62c-17 0-32-14-31-31v-32z"></path></g>
<g id="lumo:calendar"><path d="M375 208h250v-20C625 176 634 167 646 167h41C699 167 708 176 708 188V208h74c23 0 41 19 41 42v42C823 315 804 333 782 333H218C196 333 177 315 177 292V250C177 227 196 208 218 208H292v-20C292 176 301 167 313 167h41C366 167 375 176 375 188V208zM229 375h42C283 375 292 384 292 396v41C292 449 282 458 271 458h-42C217 458 208 449 208 437v-41C208 384 218 375 229 375z m125 0h42C408 375 417 384 417 396v41C417 449 407 458 396 458h-42C342 458 333 449 333 437v-41C333 384 343 375 354 375z m125 0h42C533 375 542 384 542 396v41C542 449 532 458 521 458h-42C467 458 458 449 458 437v-41C458 384 468 375 479 375z m-250 125h42C283 500 292 509 292 521v41C292 574 282 583 271 583h-42C217 583 208 574 208 562v-41C208 509 218 500 229 500z m125 0h42C408 500 417 509 417 521v41C417 574 407 583 396 583h-42C342 583 333 574 333 562v-41C333 509 343 500 354 500z m125 0h42c12 0 21 9 21 21v41C542 574 532 583 521 583h-42C467 583 458 574 458 562v-41C458 509 468 500 479 500z m-250 125h42C283 625 292 634 292 646v41C292 699 282 708 271 708h-42C217 708 208 699 208 687v-41C208 634 218 625 229 625z m125 0h42C408 625 417 634 417 646v41C417 699 407 708 396 708h-42C342 708 333 699 333 687v-41C333 634 343 625 354 625z m125 0h42c12 0 21 9 21 21v41C542 699 532 708 521 708h-42C467 708 458 699 458 687v-41C458 634 468 625 479 625z m125-250h42C658 375 667 384 667 396v41C667 449 657 458 646 458h-42C592 458 583 449 583 437v-41C583 384 593 375 604 375z m0 125h42c12 0 21 9 21 21v41C667 574 657 583 646 583h-42C592 583 583 574 583 562v-41C583 509 593 500 604 500z m0 125h42c12 0 21 9 21 21v41C667 699 657 708 646 708h-42C592 708 583 699 583 687v-41C583 634 593 625 604 625z m125 0h42c12 0 21 9 21 21v41C792 699 782 708 771 708h-42C717 708 708 699 708 687v-41C708 634 718 625 729 625z m-500 125h42C283 750 292 759 292 771v41C292 824 282 833 271 833h-42C217 833 208 824 208 812v-41C208 759 218 750 229 750z m125 0h42C408 750 417 759 417 771v41C417 824 407 833 396 833h-42C342 833 333 824 333 812v-41C333 759 343 750 354 750z m125 0h42c12 0 21 9 21 21v41C542 824 532 833 521 833h-42C467 833 458 824 458 812v-41C458 759 468 750 479 750z m125 0h42c12 0 21 9 21 21v41C667 824 657 833 646 833h-42C592 833 583 824 583 812v-41C583 759 593 750 604 750z m125 0h42c12 0 21 9 21 21v41C792 824 782 833 771 833h-42C717 833 708 824 708 812v-41C708 759 718 750 729 750z m0-250h42c12 0 21 9 21 21v41C792 574 782 583 771 583h-42C717 583 708 574 708 562v-41C708 509 718 500 729 500z m0-125h42C783 375 792 384 792 396v41C792 449 782 458 771 458h-42C717 458 708 449 708 437v-41C708 384 718 375 729 375z"></path></g>
<g id="lumo:checkmark"><path d="M318 493c-15-15-38-15-53 0-15 15-15 38 0 53l136 136c15 15 38 15 53 0l323-322c15-15 15-38 0-53-15-15-38-15-54 0l-295 296-110-110z"></path></g>
<g id="lumo:chevron-down"><path d="M533 654l210-199c9-9 9-23 0-32C739 419 733 417 726 417H274C261 417 250 427 250 439c0 6 2 12 7 16l210 199c18 17 48 17 66 0z"></path></g>
<g id="lumo:chevron-left"><path d="M346 533l199 210c9 9 23 9 32 0 4-4 7-10 6-17V274C583 261 573 250 561 250c-6 0-12 2-16 7l-199 210c-17 18-17 48 0 66z"></path></g>
<g id="lumo:chevron-right"><path d="M654 533L455 743c-9 9-23 9-32 0C419 739 417 733 417 726V274C417 261 427 250 439 250c6 0 12 2 16 7l199 210c17 18 17 48 0 66z"></path></g>
<g id="lumo:chevron-up"><path d="M533 346l210 199c9 9 9 23 0 32-4 4-10 7-17 6H274C261 583 250 573 250 561c0-6 2-12 7-16l210-199c18-17 48-17 66 0z"></path></g>
<g id="lumo:clock"><path d="M538 489l85 85c15 15 15 38 0 53-15 15-38 15-53 0l-93-93a38 38 0 0 1-2-2C467 525 462 515 462 504V308c0-21 17-38 38-37 21 0 38 17 37 37v181zM500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265z"></path></g>
<g id="lumo:cog"><path d="M833 458l-81-18c-8-25-17-50-29-75L767 292 708 233l-72 49c-21-12-46-25-75-30L542 167h-84l-19 79c-25 8-50 17-71 30L296 233 233 296l47 69c-12 21-21 46-29 71L167 458v84l84 25c8 25 17 50 29 75L233 708 292 767l76-44c21 12 46 25 75 29L458 833h84l19-81c25-8 50-17 75-29L708 767l59-59-44-66c12-21 25-46 29-75L833 542v-84z m-333 217c-96 0-175-79-175-175 0-96 79-175 175-175 96 0 175 79 175 175 0 96-79 175-175 175z"></path></g>
<g id="lumo:cross"><path d="M445 500l-142-141c-15-15-15-40 0-56 15-15 40-15 56 0L500 445l141-142c15-15 40-15 56 0 15 15 15 40 0 56L555 500l142 141c15 15 15 40 0 56-15 15-40 15-56 0L500 555l-141 142c-15 15-40 15-56 0-15-15-15-40 0-56L445 500z"></path></g>
<g id="lumo:download"><path d="M538 521l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166a38 38 0 0 1 0 0c-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 521V188c0-21 17-38 38-38s38 17 37 38v333zM758 704c0-21 17-38 38-37 21 0 38 17 37 37v92c0 21-17 38-37 37H204c-21 0-38-17-37-37v-92c0-21 17-38 37-37s38 17 38 37v54h516v-54z"></path></g>
<g id="lumo:dropdown"><path d="M317 393c-15-14-39-13-53 3-14 15-13 39 3 53l206 189c14 13 36 13 50 0l210-193c15-14 17-38 3-53-14-15-38-17-53-3l-185 171L317 393z"></path></g>
<g id="lumo:edit"><path d="M673 281l62 56-205 233c-9 10-38 24-85 39a8 8 0 0 1-5 0c-4-1-7-6-6-10l0 0c14-47 25-76 35-86l204-232z m37-42l52-59c15-17 41-18 58-2 17 16 18 42 3 59L772 295l-62-56zM626 208l-67 75h-226C305 283 283 306 283 333v334C283 695 306 717 333 717h334c28 0 50-22 50-50v-185L792 398v269C792 736 736 792 667 792H333C264 792 208 736 208 667V333C208 264 264 208 333 208h293z"></path></g>
<g id="lumo:error"><path d="M500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265zM479 292h42c12 0 21 9 20 20l-11 217c0 8-6 13-13 13h-34c-7 0-13-6-13-13l-11-217C459 301 468 292 479 292zM483 608h34c12 0 21 9 20 21v33c0 12-9 21-20 21h-34c-12 0-21-9-21-21v-33c0-12 9-21 21-21z"></path></g>
<g id="lumo:eye"><path d="M500 750c-187 0-417-163-417-250s230-250 417-250 417 163 417 250-230 250-417 250z m-336-231c20 22 47 46 78 69C322 644 411 678 500 678s178-34 258-90c31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69C678 356 589 322 500 322s-178 34-258 90c-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19zM500 646c-81 0-146-65-146-146s65-146 146-146 146 65 146 146-65 146-146 146z m0-75c39 0 71-32 71-71 0-39-32-71-71-71-39 0-71 32-71 71 0 39 32 71 71 71z"></path></g>
<g id="lumo:eye-disabled"><path d="M396 735l60-60c15 2 30 3 44 3 89 0 178-34 258-90 31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69-8-5-15-11-23-15l50-51C862 397 917 458 917 500c0 87-230 250-417 250-34 0-69-5-104-15zM215 654C138 603 83 542 83 500c0-87 230-250 417-250 34 0 69 5 104 15l-59 60c-15-2-30-3-45-3-89 0-178 34-258 90-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19 20 22 47 46 78 69 8 5 16 11 24 16L215 654z m271-9l159-159c0 5 1 9 1 14 0 81-65 146-146 146-5 0-9 0-14-1z m-131-131C354 510 354 505 354 500c0-81 65-146 146-146 5 0 10 0 14 1l-159 159z m-167 257L780 179c12-12 32-12 44 0 12 12 12 32 0 44L232 815c-12 12-32 12-44 0s-12-32 0-44z"></path></g>
<g id="lumo:menu"><path d="M167 292c0-23 19-42 41-42h584C815 250 833 268 833 292c0 23-19 42-41 41H208C185 333 167 315 167 292z m0 208c0-23 19-42 41-42h584C815 458 833 477 833 500c0 23-19 42-41 42H208C185 542 167 523 167 500z m0 208c0-23 19-42 41-41h584C815 667 833 685 833 708c0 23-19 42-41 42H208C185 750 167 732 167 708z"></path></g>
<g id="lumo:minus"><path d="M261 461c-22 0-39 18-39 39 0 22 18 39 39 39h478c22 0 39-18 39-39 0-22-18-39-39-39H261z"></path></g>
<g id="lumo:ordered-list"><path d="M138 333V198H136l-43 28v-38l45-31h45V333H138z m-61 128c0-35 27-59 68-59 39 0 66 21 66 53 0 20-11 37-43 64l-29 27v2h74V583H80v-30l55-52c26-24 32-33 33-43 0-13-10-22-24-22-15 0-26 10-26 25v1h-41v-1zM123 759v-31h21c15 0 25-8 25-21 0-13-10-21-25-21-15 0-26 9-26 23h-41c1-34 27-56 68-57 39 0 66 20 66 49 0 20-14 36-33 39v3c24 3 40 19 39 41 0 32-30 54-73 54-41 0-69-22-70-57h43c1 13 11 22 28 22 16 0 27-9 27-22 0-14-10-22-28-22h-21zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>
<g id="lumo:phone"><path d="M296 208l42-37c17-15 44-13 58 4a42 42 0 0 1 5 7L459 282c12 20 5 45-15 57l-7 4c-17 10-25 30-19 48l20 66a420 420 0 0 0 93 157l41 45c13 14 35 17 51 8l7-5c20-12 45-5 57 16L745 777c12 20 5 45-15 57a42 42 0 0 1-8 4l-52 17c-61 21-129 4-174-43l-50-52c-81-85-141-189-175-302l-24-78c-19-62 0-129 49-172z"></path></g>
<g id="lumo:photo"><path d="M208 167h584c69 0 125 56 125 125v416c0 69-56 125-125 125H208c-69 0-125-56-125-125V292c0-69 56-125 125-125z m584 75H208c-28 0-50 22-50 50v416c0 28 22 50 50 50h584c28 0 50-22 50-50V292c0-28-22-50-50-50zM239 740l167-167c12-12 31-14 45-6l73 43 172-201c13-15 34-18 50-7l95 67v92l-111-78-169 199c-12 14-32 17-47 8l-76-43-111 111H229c2-7 5-13 10-18zM458 427C458 490 407 542 344 542S229 490 229 427c0-63 51-115 115-115S458 364 458 427z m-62 0C396 398 373 375 344 375S292 398 292 427c0 29 23 52 52 52s52-23 52-52z"></path></g>
<g id="lumo:play"><path d="M689 528l-298 175c-13 8-34 8-48 0-6-4-10-9-10-14V311C333 300 348 292 367 292c9 0 17 2 24 5l298 175c26 15 26 40 0 56z"></path></g>
<g id="lumo:plus"><path d="M461 461H261c-22 0-39 18-39 39 0 22 18 39 39 39h200v200c0 22 18 39 39 39 22 0 39-18 39-39v-200h200c22 0 39-18 39-39 0-22-18-39-39-39h-200V261c0-22-18-39-39-39-22 0-39 18-39 39v200z"></path></g>
<g id="lumo:redo"><path d="M290 614C312 523 393 458 491 458c55 0 106 22 144 57l-88 88c-3 3-5 7-5 11 0 8 6 15 15 15l193-5c17 0 31-15 31-32l5-192c0-4-1-8-4-11-6-6-16-6-22 0l-66 67C641 406 570 375 491 375c-136 0-248 90-281 215-1 2-1 5-1 8-8 44 45 68 73 32 4-5 7-11 8-16z"></path></g>
<g id="lumo:reload"><path d="M500 233V137c0-9 7-16 15-16 4 0 8 2 10 4l133 140c12 12 12 32 0 45l-133 140c-6 6-15 6-21 0C502 447 500 443 500 438V308c-117 0-212 95-212 213 0 117 95 212 212 212 117 0 212-95 212-212 0-21 17-38 38-38s38 17 37 38c0 159-129 288-287 287-159 0-288-129-288-287 0-159 129-288 288-288z"></path></g>
<g id="lumo:search"><path d="M662 603l131 131c16 16 16 42 0 59-16 16-43 16-59 0l-131-131C562 691 512 708 458 708c-138 0-250-112-250-250 0-138 112-250 250-250 138 0 250 112 250 250 0 54-17 104-46 145zM458 646c104 0 188-84 188-188S562 271 458 271 271 355 271 458s84 188 187 188z"></path></g>
<g id="lumo:undo"><path d="M710 614C688 523 607 458 509 458c-55 0-106 22-144 57l88 88c3 3 5 7 5 11 0 8-6 15-15 15l-193-5c-17 0-31-15-31-32L214 400c0-4 1-8 4-11 6-6 16-6 22 0l66 67C359 406 430 375 509 375c136 0 248 90 281 215 1 2 1 5 1 8 8 44-45 68-73 32-4-5-7-11-8-16z"></path></g>
<g id="lumo:unordered-list"><path d="M146 325c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>
<g id="lumo:upload"><path d="M454 271V604c0 21-17 38-37 38s-38-17-38-38V271L254 382c-15 14-39 12-53-3-14-15-12-39 3-53L391 160c14-13 36-13 51-1 0 0 0 0 0 1l187 166c15 14 17 37 3 53-14 15-37 17-53 3L454 271zM675 704c0-21 17-38 37-37 21 0 38 17 38 37v92c0 21-17 38-38 37H121c-21 0-38-17-38-37v-92c0-21 17-38 38-37s38 17 37 37v54h517v-54z"></path></g>
<g id="lumo:user"><path d="M500 500c-69 0-125-56-125-125s56-125 125-125 125 56 125 125-56 125-125 125z m-292 292c0-115 131-208 292-209s292 93 292 209H208z"></path></g>
</defs></svg>`;Di.register("lumo",1e3,Ya);const im=[bn,gn,vn,Ua];class Si extends Ct{constructor(){super(),this.loading=!1,this.loadingProgress="",this.dataStart=hl(Qo(),30),this.rangeStart=this.dataStart,this.settings=er.loadSettings()}async firstUpdated(){this.githubData=er.loadGithubData(),this.githubData?this.refreshDashboard():await this.refreshData()}render(){return G`
      <div class="dashboard" theme="${this.settings.theme}">
        <div class="header">
          <h1>Vaadin DS PRs Github Dashboard</h1>
          <div class="actions">
            <vaadin-button
              theme="tertiary small"
              @click="${this.handleToggleTheme}"
            >
              ${Zt.moon()}
            </vaadin-button>
            <vaadin-date-picker
              label="Show PRs updated since"
              theme="small"
              .min="${bt(this.dataStart,"yyyy-MM-dd")}"
              .max="${bt(new Date,"yyyy-MM-dd")}"
              .value="${bt(this.rangeStart,"yyyy-MM-dd")}"
              @change="${this.handleRangeStartChange}"
            ></vaadin-date-picker>

            <vaadin-button theme="small" @click="${this.refreshData}"
              >Refresh data
            </vaadin-button>
            <span id="help-icon" class="help-icon"> ${Zt.help()} </span>
            <vaadin-tooltip
              for="help-icon"
              text="Github data is updated once per day and then cached in local storage. 'Refresh data' forces an update. Data contains pulls updated from the last 30 days, which is the maximum time range that can be configured."
            ></vaadin-tooltip>
          </div>
        </div>
        <div class="main">
          ${this.loading?G` <div class="section flex">
                <div class="panel loading">
                  <div class="title">
                    <div class="spinner">${Zt.spinner()}</div>
                    <span>Loading Github Data</span>
                  </div>
                  <div class="progress">${this.loadingProgress}</div>
                </div>
              </div>`:null}
          ${this.dashboard?G`
                <div class="section flex">
                  ${this.renderStats("Contributions",[{label:"Contributions",value:this.dashboard.contributions.length}])}
                </div>

                <div class="section grid">
                  <div class="panel issues">
                    <h2>Contribution PRs</h2>
                    <div class="card">
                      ${this.renderGrid(this.dashboard.contributions,!0)}
                    </div>
                  </div>
                </div>
              `:null}
        </div>
      </div>
    `}renderStats(t,e){return G`
      <div class="panel stats">
        <div class="card">
          <div class="title">${t}</div>
          <div class="list">
            ${e.map(r=>G`
                <div class="stat">
                  <span class="value">${r.value}</span>
                  <span class="label">${r.label}</span>
                </div>
              `)}
          </div>
        </div>
      </div>
    `}renderGrid(t,e=!1){return G`
      <vaadin-grid .items="${t}" theme="no-border">
        <vaadin-grid-column
          width="250px"
          flex-grow="0"
          ${ei(r=>G`
              <span>${bt(new Date(r.updatedAt),"MMM do 'at' H:m")}</span>
            `)}></vaadin-grid-column>
        <vaadin-grid-column path="title"></vaadin-grid-column>
        ${e?G` <vaadin-grid-column
              width="200px"
              flex-grow="0"
              ${ei(r=>G`<span style="color: var(--lumo-secondary-text-color)"
                    >@${r.author}</span
                  >`)}
            ></vaadin-grid-column>`:null}
        <vaadin-grid-column
          width="60px"
          flex-grow="0"
          ${ei(r=>G`
              <a href="${r.url}" target="_blank">
                ${Zt.externalLink()}
              </a>
            `)}
        ></vaadin-grid-column>
      </vaadin-grid>
    `}handleToggleTheme(){const t=this.settings.theme==="dark"?"light":"dark";this.settings={...this.settings,theme:t},er.saveSettings(this.settings)}handleRangeStartChange(t){this.rangeStart=bc(t.target.value,"yyyy-MM-dd",new Date),this.refreshDashboard()}async refreshData(){this.loading=!0,this.loadingProgress="",this.dashboard=null,this.githubData=await sm(this.dataStart,t=>{this.loadingProgress+=t+`
`}),er.saveGithubData(this.githubData),this.refreshDashboard(),this.loading=!1}refreshDashboard(){this.dashboard=om(this.githubData,this.rangeStart)}}Ir(Si,"styles",[im,g`
      :host {
        display: block;
        min-height: 100vh;
        background: var(--lumo-shade-10pct);
        box-sizing: border-box;
      }

      h1 {
        font-size: var(--lumo-font-size-xxl);
      }

      h2 {
        font-size: var(--lumo-font-size-xl);
      }

      .dashboard {
        --dashboard-panel-background: var(--lumo-base-color);
        min-height: 100vh;
      }

      .dashboard[theme="dark"] {
        --dashboard-panel-background: var(--lumo-tint-10pct);
      }

      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: var(--lumo-space-s) var(--lumo-space-xl);
        background: var(--dashboard-panel-background);
        box-shadow: var(--lumo-box-shadow-s);
      }

      .header vaadin-date-picker {
        padding: 0;
      }

      .header .help-icon {
        display: inline-block;
        color: var(--lumo-contrast-80pct);
      }

      .header svg {
        vertical-align: bottom;
      }

      .main {
        display: flex;
        flex-direction: column;
        gap: var(--lumo-space-xl);
        padding: var(--lumo-space-xl);
      }

      .section.flex {
        display: flex;
        flex-wrap: wrap;
        gap: var(--lumo-space-xl);
      }

      .section.grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
        gap: var(--lumo-space-xl);
      }

      @media (max-width: 600px) {
        .section.grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--lumo-space-xl);
        }
      }

      .panel {
        min-width: 200px;
        display: flex;
        flex-direction: column;
      }

      .panel > h2 {
        margin-bottom: var(--lumo-space-m);
      }

      .panel > .card {
        background: var(--dashboard-panel-background);
        box-shadow: var(--lumo-box-shadow-s);
        border-radius: var(--lumo-border-radius-l);
      }

      .panel.loading .title {
        display: flex;
        align-items: center;
        font-weight: bold;
      }

      .panel.loading .progress {
        padding-left: calc(var(--lumo-space-s) + 20px);
        color: var(--lumo-secondary-text-color);
        white-space: pre;
      }

      .panel.loading .spinner {
        display: inline-block;
        position: relative;
        width: 20px;
        height: 20px;
        margin-right: var(--lumo-space-s);
      }

      .panel.loading .spinner svg {
        position: absolute;
        animation: spinner 1.2s linear infinite;
      }

      @keyframes spinner {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

      .panel.stats .card {
        padding: var(--lumo-space-m);
      }

      .panel.stats .title {
        font-weight: bold;
      }

      .panel.stats .list {
        display: flex;
        margin-top: var(--lumo-space-m);
        gap: var(--lumo-space-m);
      }

      .panel.stats .stat .value {
        font-size: var(--lumo-font-size-xl);
      }

      .panel.stats .stat .label {
        color: var(--lumo-secondary-text-color);
        font-size: var(--lumo-font-size-s);
      }

      .panel.issues .card {
        padding-top: var(--lumo-space-m);
        padding-bottom: var(--lumo-space-s);
      }

      .panel.issues vaadin-grid {
        --lumo-base-color: transparent;
        height: 300px;
      }

      .panel.issues vaadin-grid::part(header-cell) {
        display: none;
      }

      .panel.issues vaadin-grid::part(body-cell first-column-cell) {
        padding-left: var(--lumo-space-s);
      }
    `]),Ir(Si,"properties",{loading:{type:Boolean},loadingProgress:{type:String},dataStart:{type:Date},rangeStart:{type:Date},githubData:{type:Object},dashboard:{type:Object},settings:{type:Object}});customElements.define("vgd-dashboard",Si);async function sm(s,t){const e=["vaadin/web-components","vaadin/flow-components","vaadin/react-components"];let r=[];for(const o of e)r=r.concat(await Uf.loadRecentlyOpenedPulls(o,s,t));return r.sort((o,n)=>new Date(n.updatedAt)-new Date(o.updatedAt)),{startDate:bt(s,"yyyy-MM-dd"),pulls:r}}function om(s,t){const e=["DiegoCardoso","sissbruecker","tomivirkki","rolfsmeds","vursen","web-padawan","yuriy-fix","ugur-vaadin","vaadin-bot"],r=[],i=[];return s.pulls.forEach(o=>{new Date(o.updatedAt)>=t&&(r.push(o),e.includes(o.author)||i.push(o))}),{githubData:s,pulls:r,contributions:i}}zi(G` <vgd-dashboard></vgd-dashboard>`,document.getElementById("app"));

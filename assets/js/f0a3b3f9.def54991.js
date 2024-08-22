/*! For license information please see f0a3b3f9.def54991.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[231],{2192:(e,t,n)=>{var r=n(3696),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,i={},c=null,u=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,r)&&!l.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:u,props:i,_owner:s.current}}t.jsx=c,t.jsxs=c},2540:(e,t,n)=>{e.exports=n(2192)},7210:(e,t,n)=>{n.d(t,{A:()=>s});var r,o,i=n(3696);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(null,arguments)}const s=e=>{let{title:t,titleId:n,...s}=e;return i.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-chevron-down",width:24,height:24,viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round","aria-labelledby":n},s),t?i.createElement("title",{id:n},t):null,r||(r=i.createElement("path",{d:"M0 0h24v24H0z",stroke:"none"})),o||(o=i.createElement("path",{d:"m6 9 6 6 6-6"})))}},9016:(e,t,n)=>{n.d(t,{I:()=>i});var r=n(877),o=n(2540);const i=e=>(0,o.jsx)(r.C_.Provider,{...e})},1946:(e,t,n)=>{n.d(t,{O:()=>s});var r=n(877);const o=e=>{do{e=e.parentElement}while(e&&!e.hasAttribute(r.$f));return e},i=(e,t,n)=>e?t>0?t-1:n-1:(t+1)%n,a=(e,t)=>{const{activeElement:n}=document;if(!n||!n.hasAttribute(r.MP)||o(n)!==t.currentTarget)return;const a=t.currentTarget.querySelectorAll(`[${r.MP}]`),{length:s}=a;for(let r=0;r<s;r++)if(a[r]===n){let n=i(e,r,s);for(;o(a[r])!==o(a[n]);)n=i(e,n,s);r!==n&&(t.preventDefault(),a[n].focus());break}},s=()=>({accordionProps:{[r.$f]:"",onKeyDown:e=>"ArrowUp"===e.key?a(!0,e):"ArrowDown"===e.key&&a(!1,e)}})},5591:(e,t,n)=>{n.d(t,{D:()=>a,T:()=>i});var r=n(3696),o=n(877);const i=(e,t,n)=>{const{stateMap:r,mountOnEnter:o,initialEntered:i}=e,a=null!=n?n:i;return r.get(t)||{status:a?"entered":o?"unmounted":"exited",isMounted:!o,isEnter:a,isResolved:!0}},a=()=>(0,r.useContext)(o.C_)},3414:(e,t,n)=>{n.d(t,{r:()=>s});var r=n(877),o=n(3696);let i=0;const a=o.useId||(()=>{const[e,t]=(0,o.useState)();return(0,o.useEffect)((()=>t(++i)),[]),e&&`${r.Gl}-${e}`}),s=e=>{let{state:t,toggle:n,disabled:o}=e;const i=a(),s=i&&i+"-",l={id:i,"aria-controls":s,"aria-expanded":t.isEnter,onClick:n};o?l.disabled=!0:l[r.MP]="";return{buttonProps:l,panelProps:{id:s,"aria-labelledby":i,role:"region"}}}},8052:(e,t,n)=>{n.d(t,{q:()=>i});var r=n(3696),o=n(5591);const i=function(e){let{itemKey:t,initialEntered:n,disabled:i}=void 0===e?{}:e;const a=(0,r.useRef)(null),s=(0,o.D)(),l=null!=t?t:a.current,c=(0,o.T)(s,l,n),{setItem:u,deleteItem:d,toggle:m}=s;return(0,r.useEffect)((()=>{if(i)return;const e=null!=t?t:a.current;return u(e,{initialEntered:n}),()=>{d(e)}}),[u,d,t,n,i]),{itemRef:a,state:c,toggle:(0,r.useCallback)((e=>m(l,e)),[m,l])}}},7362:(e,t,n)=>{n.d(t,{p:()=>d});var r=n(3696);const o=["preEnter","entering","entered","preExit","exiting","exited","unmounted"],i=e=>e?6:5,a=new Map,s=new Map,l=(e,t,n,r,i,a)=>{clearTimeout(i);const s=(e=>({_s:e,status:o[e],isEnter:e<3,isMounted:6!==e,isResolved:2===e||e>4}))(t),l=new Map(r.current);l.set(e,s),n(l),r.current=l,a&&a({key:e,current:s})},c=({allowMultiple:e,enter:t=!0,exit:n=!0,preEnter:o,preExit:c,timeout:u,initialEntered:d,mountOnEnter:m,unmountOnExit:p,onStateChange:f}={})=>{const[g,h]=(0,r.useState)(a),E=(0,r.useRef)(g),v=(0,r.useRef)(s),[b,w]=(e=>"object"==typeof e?[e.enter,e.exit]:[e,e])(u),y=(0,r.useCallback)(((e,t)=>{const{initialEntered:n=d}=t||{},r=n?2:i(m);l(e,r,h,E),v.current.set(e,{})}),[d,m]),x=(0,r.useCallback)((e=>{const t=new Map(E.current);return!!t.delete(e)&&(h(t),E.current=t,v.current.delete(e),!0)}),[]),A=(0,r.useCallback)((e=>{const t=E.current.get(e);if(!t)return;const{timeoutId:n}=v.current.get(e),r=((e,t)=>{switch(e){case 1:case 0:return 2;case 4:case 3:return i(t)}})(t._s,p);r&&l(e,r,h,E,n,f)}),[f,p]),N=(0,r.useCallback)(((r,a)=>{const s=E.current.get(r);if(!s)return;const u=v.current.get(r),d=e=>{switch(l(r,e,h,E,u.timeoutId,f),e){case 1:b>=0&&(u.timeoutId=setTimeout((()=>A(r)),b));break;case 4:w>=0&&(u.timeoutId=setTimeout((()=>A(r)),w));break;case 0:case 3:u.timeoutId=((e,t)=>setTimeout((()=>{isNaN(document.body.offsetTop)||e(t+1)}),0))(d,e)}},m=s.isEnter;"boolean"!=typeof a&&(a=!m),a?m||(d(t?o?0:1:2),!e&&E.current.forEach(((e,t)=>t!==r&&N(t,!1)))):m&&d(n?c?3:4:i(p))}),[f,A,e,t,n,o,c,b,w,p]),P=(0,r.useCallback)((t=>{if(e||!1===t)for(const e of E.current.keys())N(e,t)}),[e,N]);return{stateMap:g,toggle:N,toggleAll:P,endTransition:A,setItem:y,deleteItem:x}},u=(e,t)=>!0===e||!(!e||!e[t]),d=function(e){let{transition:t,transitionTimeout:n,...r}=void 0===e?{}:e;const o=c({timeout:n,enter:u(t,"enter"),exit:u(t,"exit"),preEnter:u(t,"preEnter"),preExit:u(t,"preExit"),...r});return{mountOnEnter:!!r.mountOnEnter,initialEntered:!!r.initialEntered,...o}}},3670:(e,t,n)=>{n.d(t,{a:()=>i});var r=n(3696);const o="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?r.useLayoutEffect:r.useEffect,i=e=>{let{status:t,isResolved:n}=e;const[i,a]=(0,r.useState)(),s=(0,r.useRef)(null);o((()=>{("preEnter"===t||"preExit"===t)&&a(s.current.getBoundingClientRect().height)}),[t]);return[{height:"preEnter"===t||"exiting"===t?0:"entering"===t||"preExit"===t?i:void 0,overflow:n?void 0:"hidden"},s]}},877:(e,t,n)=>{n.d(t,{$f:()=>a,C_:()=>l,FP:()=>o,Gl:()=>i,MP:()=>s});var r=n(3696);const o="szh-accordion",i="szh-adn",a=`data-${i}`,s=`data-${i}-btn`,l=(0,r.createContext)({})},935:(e,t,n)=>{n.d(t,{nD:()=>k,As:()=>M,j_:()=>I,p3:()=>i.p,DU:()=>_});var r=n(8168),o=n(3696),i=n(7362),a=n(877);const s=(e,t,n)=>(r,o)=>{const i=t?`${e}__${t}`:e;let a=i;n&&Object.keys(n).forEach((e=>{const t=n[e];t&&(a+=` ${i}--${!0===t?e:`${e}-${t}`}`)}));let s="function"==typeof r?r(o):r;return"string"==typeof s&&(s=s.trim(),s&&(a+=` ${s}`)),a},l=(e,t)=>{if(!t)return e;const n={...e};return Object.keys(t).forEach((r=>{const o=e[r],i=t[r];n[r]="function"==typeof i&&o?function(){o(...arguments),i(...arguments)}:i})),n};var c=n(9016),u=n(1946),d=n(2540);const m=(0,o.forwardRef)(((e,t)=>{let{providerValue:n,className:r,...o}=e;const{accordionProps:i}=(0,u.O)();return(0,d.jsx)(c.I,{value:n,children:(0,d.jsx)("div",{...l(i,o),ref:t,className:s(a.FP)(r)})})}));m.displayName="ControlledAccordion";const p=(0,o.forwardRef)(((e,t)=>{let{allowMultiple:n,initialEntered:r,mountOnEnter:o,unmountOnExit:a,transition:s,transitionTimeout:l,onStateChange:c,...u}=e;const p=(0,i.p)({allowMultiple:n,initialEntered:r,mountOnEnter:o,unmountOnExit:a,transition:s,transitionTimeout:l,onStateChange:c});return(0,d.jsx)(m,{...u,ref:t,providerValue:p})}));p.displayName="Accordion";var f=n(3414),g=n(3670);function h(e,t){"function"==typeof e?e(t):e.current=t}function E(e,t){return(0,o.useMemo)((()=>e?t?n=>{h(e,n),h(t,n)}:e:t),[e,t])}var v=n(8052);const b=e=>{const t=(0,o.forwardRef)(((t,n)=>{let{itemKey:r,initialEntered:o,...i}=t;return(0,d.jsx)(e,{forwardedRef:n,...i,...(0,v.q)({itemKey:r,initialEntered:o,disabled:i.disabled})})}));return t.displayName="WithAccordionItem",t},w=(e,t)=>"function"==typeof e?e(t):e,y=(0,o.memo)((e=>{let{forwardedRef:t,itemRef:n,state:r,toggle:o,className:i,disabled:c,header:u,headingTag:m="h3",headingProps:p,buttonProps:h,contentProps:v,panelProps:b,children:y,...x}=e;const A={state:r,toggle:o,disabled:c},{buttonProps:N,panelProps:P}=(0,f.r)(A),[_,k]=(0,g.a)(r),I=E(b&&b.ref,k),{status:M,isMounted:C,isEnter:T}=r;return(0,d.jsxs)("div",{...x,ref:E(t,n),className:s(a.FP,"item",{status:M,expanded:T})(i,r),children:[(0,d.jsx)(m,{...p,style:{margin:0,...p&&p.style},className:s(a.FP,"item-heading")(p&&p.className,r),children:(0,d.jsx)("button",{...l(N,h),type:"button",className:s(a.FP,"item-btn")(h&&h.className,r),children:w(u,A)})}),C&&(0,d.jsx)("div",{...v,style:{display:"exited"===M?"none":void 0,..._,...v&&v.style},className:s(a.FP,"item-content")(v&&v.className,r),children:(0,d.jsx)("div",{...l(P,b),ref:I,className:s(a.FP,"item-panel")(b&&b.className,r),children:w(y,A)})})]})}));y.displayName="AccordionItem";const x=b(y);var A=n(7210),N=n(2623),P=n(5591);const _=()=>{const e=(0,P.D)();return{getItemState:function(t,n){let{initialEntered:r}=void 0===n?{}:n;return(0,P.T)(e,t,r)},toggle:e.toggle,toggleAll:e.toggleAll}},k=e=>o.createElement(p,(0,r.A)({},e,{className:N.A.accordion,transition:!0,transitionTimeout:250})),I=e=>o.createElement(m,(0,r.A)({},e,{className:N.A.accordion})),M=e=>o.createElement(x,(0,r.A)({},e,{header:t=>o.createElement(o.Fragment,null,"function"==typeof e.header?e.header(t):e.header,o.createElement(A.A,{className:N.A.chevron})),className:N.A.item,buttonProps:{className:e=>{let{isEnter:t}=e;return t?N.A.buttonExpanded:N.A.button}},contentProps:{className:N.A.content},panelProps:{className:N.A.panel}}))},2375:(e,t,n)=>{n.d(t,{R:()=>r});const r=e=>e.replace("import React from 'react';\n","").replace("from '../accordion'","from '@szhsin/react-accordion'")},4541:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>m,default:()=>v,frontMatter:()=>d,metadata:()=>p,toc:()=>g});var r=n(8168),o=n(3696),i=n(5680),a=n(2355);const s='import React from \'react\';\nimport { Accordion, AccordionItem } from \'../accordion\';\n\nexport default function Example() {\n  return (\n    <Accordion allowMultiple>\n      <AccordionItem header="What is Lorem Ipsum?">\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n        eiusmod tempor incididunt ut labore et dolore magna aliqua.\n      </AccordionItem>\n\n      <AccordionItem header="Where does it come from?">\n        Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla\n        vel erat quis sodales. Nam ex enim, eleifend venenatis lectus\n        vitae, accumsan auctor mi.\n      </AccordionItem>\n\n      <AccordionItem header="Why do we use it?">\n        Suspendisse massa risus, pretium id interdum in, dictum sit amet\n        ante. Fusce vulputate purus sed tempus feugiat.\n      </AccordionItem>\n    </Accordion>\n  );\n}\n';var l=n(2375),c=n(935);function u(){return o.createElement(c.nD,{allowMultiple:!0},o.createElement(c.As,{header:"What is Lorem Ipsum?"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),o.createElement(c.As,{header:"Where does it come from?"},"Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel erat quis sodales. Nam ex enim, eleifend venenatis lectus vitae, accumsan auctor mi."),o.createElement(c.As,{header:"Why do we use it?"},"Suspendisse massa risus, pretium id interdum in, dictum sit amet ante. Fusce vulputate purus sed tempus feugiat."))}const d={sidebar_position:2},m="Allowing multiple",p={unversionedId:"docs/allow-multiple",id:"docs/allow-multiple",title:"Allowing multiple",description:"To allow multiple accordion items to expand at once, set the allowMultiple prop of the",source:"@site/docs/docs/allow-multiple.mdx",sourceDirName:"docs",slug:"/docs/allow-multiple",permalink:"/react-accordion/docs/allow-multiple",draft:!1,editUrl:"https://github.com/szhsin/react-accordion/tree/master/website/docs/docs/allow-multiple.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Getting Started",permalink:"/react-accordion/docs/getting-started"},next:{title:"Expanding items initially",permalink:"/react-accordion/docs/initial-expanded"}},f={},g=[],h={toc:g},E="wrapper";function v(e){let{components:t,...n}=e;return(0,i.yg)(E,(0,r.A)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"allowing-multiple"},"Allowing multiple"),(0,i.yg)("p",null,"To allow multiple accordion items to expand at once, set the ",(0,i.yg)("inlineCode",{parentName:"p"},"allowMultiple")," prop of the\n",(0,i.yg)("inlineCode",{parentName:"p"},"Accordion")," component."),(0,i.yg)(u,{mdxType:"Multiple"}),(0,i.yg)(a.A,{language:"jsx",mdxType:"CodeBlock"},(0,l.R)(s)))}v.isMDXComponent=!0},2623:(e,t,n)=>{n.d(t,{A:()=>r});const r={accordion:"accordion_nIGp",item:"item_YcP7",button:"button_lQEz",buttonExpanded:"buttonExpanded_Fmda button_lQEz",chevron:"chevron_Ys3M",content:"content_v0f5",panel:"panel_FAXb"}}}]);
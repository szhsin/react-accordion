"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[124],{3944:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>x,frontMatter:()=>u,metadata:()=>h,toc:()=>f});var r=n(2540),o=n(8453),i=n(1432);const s="import React from 'react';\nimport { Accordion, AccordionItem } from '../accordion';\n\nconst items = [\n  {\n    header: 'What is Lorem Ipsum?',\n    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing...'\n  },\n  {\n    header: 'Where does it come from?',\n    content: 'Quisque eget luctus mi, vehicula mollis lorem...'\n  },\n  {\n    header: 'Why do we use it?',\n    content: 'Suspendisse massa risus, pretium id interdum in...'\n  }\n];\n\n/* eslint-disable no-console */\n\nexport default function Example() {\n  return (\n    <Accordion\n      // highlight-start\n      onStateChange={({ key, current }) => {\n        if (current.isResolved)\n          console.log(\n            `${key as string} is expanded: ${current.isEnter}`\n          );\n      }}\n      // highlight-end\n    >\n      {items.map(({ header, content }, i) => (\n        <AccordionItem\n          key={i}\n          header={header}\n          // Explicitly set `itemKey` prop for each item\n          // highlight-next-line\n          itemKey={`Item-${i + 1}`}\n        >\n          {content}\n        </AccordionItem>\n      ))}\n    </Accordion>\n  );\n}\n";var a=n(2375),c=(n(3696),n(935));const d=[{header:"What is Lorem Ipsum?",content:"Lorem ipsum dolor sit amet, consectetur adipiscing..."},{header:"Where does it come from?",content:"Quisque eget luctus mi, vehicula mollis lorem..."},{header:"Why do we use it?",content:"Suspendisse massa risus, pretium id interdum in..."}];function l(){return(0,r.jsx)(c.nD,{onStateChange:e=>{let{key:t,current:n}=e;n.isResolved&&console.log(`${t} is expanded: ${n.isEnter}`)},children:d.map(((e,t)=>{let{header:n,content:o}=e;return(0,r.jsx)(c.As,{header:n,itemKey:`Item-${t+1}`,children:o},t)}))})}const u={sidebar_position:9},m="State changing event",h={id:"docs/on-state-change",title:"State changing event",description:"The onStateChange event of Accordion can be used to listen to item state updates. The",source:"@site/docs/docs/on-state-change.mdx",sourceDirName:"docs",slug:"/docs/on-state-change",permalink:"/react-accordion/docs/on-state-change",draft:!1,unlisted:!1,editUrl:"https://github.com/szhsin/react-accordion/tree/master/website/docs/docs/on-state-change.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"docsSidebar",previous:{title:"Nested accordion",permalink:"/react-accordion/docs/nested"},next:{title:"Styling",permalink:"/react-accordion/docs/styling"}},p={},f=[];function g(e){const t={admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"state-changing-event",children:"State changing event"})}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"onStateChange"})," event of ",(0,r.jsx)(t.code,{children:"Accordion"})," can be used to listen to item state updates. The\nevent object has a ",(0,r.jsx)(t.code,{children:"key"})," prop identifying which item's state has changed."]}),"\n",(0,r.jsx)(l,{}),"\n",(0,r.jsx)(i.A,{language:"jsx",children:(0,a.R)(s)}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.p,{children:"Open the browser console to see the logs."})})]})}function x(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},7210:(e,t,n)=>{n.d(t,{A:()=>a});var r,o,i=n(3696);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(null,arguments)}const a=e=>{let{title:t,titleId:n,...a}=e;return i.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,className:"icon icon-tabler icon-tabler-chevron-down",viewBox:"0 0 24 24","aria-labelledby":n},a),t?i.createElement("title",{id:n},t):null,r||(r=i.createElement("path",{stroke:"none",d:"M0 0h24v24H0z"})),o||(o=i.createElement("path",{d:"m6 9 6 6 6-6"})))}},9016:(e,t,n)=>{n.d(t,{I:()=>i});var r=n(877),o=n(2540);const i=e=>(0,o.jsx)(r.C_.Provider,{...e})},1946:(e,t,n)=>{n.d(t,{O:()=>a});var r=n(877);const o=e=>{do{e=e.parentElement}while(e&&!e.hasAttribute(r.$f));return e},i=(e,t,n)=>e?t>0?t-1:n-1:(t+1)%n,s=(e,t)=>{const{activeElement:n}=document;if(!n||!n.hasAttribute(r.MP)||o(n)!==t.currentTarget)return;const s=t.currentTarget.querySelectorAll(`[${r.MP}]`),{length:a}=s;for(let r=0;r<a;r++)if(s[r]===n){let n=i(e,r,a);for(;o(s[r])!==o(s[n]);)n=i(e,n,a);r!==n&&(t.preventDefault(),s[n].focus());break}},a=()=>({accordionProps:{[r.$f]:"",onKeyDown:e=>"ArrowUp"===e.key?s(!0,e):"ArrowDown"===e.key&&s(!1,e)}})},5591:(e,t,n)=>{n.d(t,{D:()=>s,T:()=>i});var r=n(3696),o=n(877);const i=(e,t,n)=>{const{stateMap:r,mountOnEnter:o,initialEntered:i}=e,s=null!=n?n:i;return r.get(t)||{status:s?"entered":o?"unmounted":"exited",isMounted:!o,isEnter:s,isResolved:!0}},s=()=>(0,r.useContext)(o.C_)},3414:(e,t,n)=>{n.d(t,{r:()=>a});var r=n(877),o=n(3696);let i=0;const s=o.useId||(()=>{const[e,t]=(0,o.useState)();return(0,o.useEffect)((()=>t(++i)),[]),e&&`${r.Gl}-${e}`}),a=e=>{let{state:t,toggle:n,disabled:o}=e;const i=s(),a=i&&i+"-",c={id:i,"aria-controls":a,"aria-expanded":t.isEnter,onClick:n};o?c.disabled=!0:c[r.MP]="";return{buttonProps:c,panelProps:{id:a,"aria-labelledby":i,role:"region"}}}},8052:(e,t,n)=>{n.d(t,{q:()=>i});var r=n(3696),o=n(5591);const i=function(e){let{itemKey:t,initialEntered:n,disabled:i}=void 0===e?{}:e;const s=(0,r.useRef)(null),a=(0,o.D)(),c=null!=t?t:s.current,d=(0,o.T)(a,c,n),{setItem:l,deleteItem:u,toggle:m}=a;return(0,r.useEffect)((()=>{if(i)return;const e=null!=t?t:s.current;return l(e,{initialEntered:n}),()=>{u(e)}}),[l,u,t,n,i]),{itemRef:s,state:d,toggle:(0,r.useCallback)((e=>m(c,e)),[m,c])}}},7362:(e,t,n)=>{n.d(t,{p:()=>u});var r=n(3696);const o=["preEnter","entering","entered","preExit","exiting","exited","unmounted"],i=e=>e?6:5,s=new Map,a=new Map,c=(e,t,n,r,i,s)=>{clearTimeout(i);const a=(e=>({_s:e,status:o[e],isEnter:e<3,isMounted:6!==e,isResolved:2===e||e>4}))(t),c=new Map(r.current);c.set(e,a),n(c),r.current=c,s&&s({key:e,current:a})},d=({allowMultiple:e,enter:t=!0,exit:n=!0,preEnter:o,preExit:d,timeout:l,initialEntered:u,mountOnEnter:m,unmountOnExit:h,onStateChange:p}={})=>{const[f,g]=(0,r.useState)(s),x=(0,r.useRef)(f),b=(0,r.useRef)(a),[v,E]=(e=>"object"==typeof e?[e.enter,e.exit]:[e,e])(l),y=(0,r.useCallback)(((e,t)=>{const{initialEntered:n=u}=t||{},r=n?2:i(m);c(e,r,g,x),b.current.set(e,{})}),[u,m]),w=(0,r.useCallback)((e=>{const t=new Map(x.current);return!!t.delete(e)&&(g(t),x.current=t,b.current.delete(e),!0)}),[]),j=(0,r.useCallback)((e=>{const t=x.current.get(e);if(!t)return;const{timeoutId:n}=b.current.get(e),r=((e,t)=>{switch(e){case 1:case 0:return 2;case 4:case 3:return i(t)}})(t._s,h);r&&c(e,r,g,x,n,p)}),[p,h]),A=(0,r.useCallback)(((r,s)=>{const a=x.current.get(r);if(!a)return;const l=b.current.get(r),u=e=>{switch(c(r,e,g,x,l.timeoutId,p),e){case 1:v>=0&&(l.timeoutId=setTimeout((()=>j(r)),v));break;case 4:E>=0&&(l.timeoutId=setTimeout((()=>j(r)),E));break;case 0:case 3:l.timeoutId=((e,t)=>setTimeout((()=>{isNaN(document.body.offsetTop)||e(t+1)}),0))(u,e)}},m=a.isEnter;"boolean"!=typeof s&&(s=!m),s?m||(u(t?o?0:1:2),!e&&x.current.forEach(((e,t)=>t!==r&&A(t,!1)))):m&&u(n?d?3:4:i(h))}),[p,j,e,t,n,o,d,v,E,h]),k=(0,r.useCallback)((t=>{if(e||!1===t)for(const e of x.current.keys())A(e,t)}),[e,A]);return{stateMap:f,toggle:A,toggleAll:k,endTransition:j,setItem:y,deleteItem:w}},l=(e,t)=>!0===e||!(!e||!e[t]),u=function(e){let{transition:t,transitionTimeout:n,...r}=void 0===e?{}:e;const o=d({timeout:n,enter:l(t,"enter"),exit:l(t,"exit"),preEnter:l(t,"preEnter"),preExit:l(t,"preExit"),...r});return{mountOnEnter:!!r.mountOnEnter,initialEntered:!!r.initialEntered,...o}}},3670:(e,t,n)=>{n.d(t,{a:()=>i});var r=n(3696);const o="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?r.useLayoutEffect:r.useEffect,i=e=>{let{status:t,isResolved:n}=e;const[i,s]=(0,r.useState)(),a=(0,r.useRef)(null);o((()=>{("preEnter"===t||"preExit"===t)&&s(a.current.getBoundingClientRect().height)}),[t]);return[{height:"preEnter"===t||"exiting"===t?0:"entering"===t||"preExit"===t?i:void 0,overflow:n?void 0:"hidden"},a]}},877:(e,t,n)=>{n.d(t,{$f:()=>s,C_:()=>c,FP:()=>o,Gl:()=>i,MP:()=>a});var r=n(3696);const o="szh-accordion",i="szh-adn",s=`data-${i}`,a=`data-${i}-btn`,c=(0,r.createContext)({})},935:(e,t,n)=>{n.d(t,{nD:()=>N,As:()=>C,j_:()=>P,p3:()=>o.p,DU:()=>k});var r=n(3696),o=n(7362),i=n(877);const s=(e,t,n)=>(r,o)=>{const i=t?`${e}__${t}`:e;let s=i;n&&Object.keys(n).forEach((e=>{const t=n[e];t&&(s+=` ${i}--${!0===t?e:`${e}-${t}`}`)}));let a="function"==typeof r?r(o):r;return"string"==typeof a&&(a=a.trim(),a&&(s+=` ${a}`)),s},a=(e,t)=>{if(!t)return e;const n={...e};return Object.keys(t).forEach((r=>{const o=e[r],i=t[r];n[r]="function"==typeof i&&o?function(){o(...arguments),i(...arguments)}:i})),n};var c=n(9016),d=n(1946),l=n(2540);const u=(0,r.forwardRef)(((e,t)=>{let{providerValue:n,className:r,...o}=e;const{accordionProps:u}=(0,d.O)();return(0,l.jsx)(c.I,{value:n,children:(0,l.jsx)("div",{...a(u,o),ref:t,className:s(i.FP)(r)})})}));u.displayName="ControlledAccordion";const m=(0,r.forwardRef)(((e,t)=>{let{allowMultiple:n,initialEntered:r,mountOnEnter:i,unmountOnExit:s,transition:a,transitionTimeout:c,onStateChange:d,...m}=e;const h=(0,o.p)({allowMultiple:n,initialEntered:r,mountOnEnter:i,unmountOnExit:s,transition:a,transitionTimeout:c,onStateChange:d});return(0,l.jsx)(u,{...m,ref:t,providerValue:h})}));m.displayName="Accordion";var h=n(3414),p=n(3670);function f(e,t){"function"==typeof e?e(t):e.current=t}function g(e,t){return(0,r.useMemo)((()=>e?t?n=>{f(e,n),f(t,n)}:e:t),[e,t])}var x=n(8052);const b=e=>{const t=(0,r.forwardRef)(((t,n)=>{let{itemKey:r,initialEntered:o,...i}=t;return(0,l.jsx)(e,{forwardedRef:n,...i,...(0,x.q)({itemKey:r,initialEntered:o,disabled:i.disabled})})}));return t.displayName="WithAccordionItem",t},v=(e,t)=>"function"==typeof e?e(t):e,E=(0,r.memo)((e=>{let{forwardedRef:t,itemRef:n,state:r,toggle:o,className:c,disabled:d,header:u,headingTag:m="h3",headingProps:f,buttonProps:x,contentProps:b,panelProps:E,children:y,...w}=e;const j={state:r,toggle:o,disabled:d},{buttonProps:A,panelProps:k}=(0,h.r)(j),[N,P]=(0,p.a)(r),C=g(E&&E.ref,P),{status:I,isMounted:R,isEnter:M}=r;return(0,l.jsxs)("div",{...w,ref:g(t,n),className:s(i.FP,"item",{status:I,expanded:M})(c,r),children:[(0,l.jsx)(m,{...f,style:{margin:0,...f&&f.style},className:s(i.FP,"item-heading")(f&&f.className,r),children:(0,l.jsx)("button",{...a(A,x),type:"button",className:s(i.FP,"item-btn")(x&&x.className,r),children:v(u,j)})}),R&&(0,l.jsx)("div",{...b,style:{display:"exited"===I?"none":void 0,...N,...b&&b.style},className:s(i.FP,"item-content")(b&&b.className,r),children:(0,l.jsx)("div",{...a(k,E),ref:C,className:s(i.FP,"item-panel")(E&&E.className,r),children:v(y,j)})})]})}));E.displayName="AccordionItem";const y=b(E);var w=n(7210),j=n(2623),A=n(5591);const k=()=>{const e=(0,A.D)();return{getItemState:function(t,n){let{initialEntered:r}=void 0===n?{}:n;return(0,A.T)(e,t,r)},toggle:e.toggle,toggleAll:e.toggleAll}},N=e=>(0,l.jsx)(m,{...e,className:j.A.accordion,transition:!0,transitionTimeout:250}),P=e=>(0,l.jsx)(u,{...e,className:j.A.accordion}),C=e=>(0,l.jsx)(y,{...e,header:t=>(0,l.jsxs)(l.Fragment,{children:["function"==typeof e.header?e.header(t):e.header,(0,l.jsx)(w.A,{className:j.A.chevron})]}),className:j.A.item,buttonProps:{className:e=>{let{isEnter:t}=e;return t?j.A.buttonExpanded:j.A.button}},contentProps:{className:j.A.content},panelProps:{className:j.A.panel}})},2375:(e,t,n)=>{n.d(t,{R:()=>r});const r=e=>e.replace("import React from 'react';\n","").replace("from '../accordion'","from '@szhsin/react-accordion'")},2623:(e,t,n)=>{n.d(t,{A:()=>r});const r={accordion:"accordion_nIGp",item:"item_YcP7",button:"button_lQEz",buttonExpanded:"buttonExpanded_Fmda button_lQEz",chevron:"chevron_Ys3M",content:"content_v0f5",panel:"panel_FAXb"}}}]);
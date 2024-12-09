"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[436],{5911:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>g,frontMatter:()=>u,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"docs/nested","title":"Nested accordion","description":"AccordionItem can have a nested accordion. When navigating through items with keyboard","source":"@site/docs/docs/nested.mdx","sourceDirName":"docs","slug":"/docs/nested","permalink":"/react-accordion/docs/nested","draft":false,"unlisted":false,"editUrl":"https://github.com/szhsin/react-accordion/tree/master/website/docs/docs/nested.mdx","tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"sidebar_position":8},"sidebar":"docsSidebar","previous":{"title":"Disabling items","permalink":"/react-accordion/docs/disabling-item"},"next":{"title":"State changing event","permalink":"/react-accordion/docs/on-state-change"}}');var i=n(2540),o=n(8453),s=n(1432);const a='import { Accordion, AccordionItem } from \'../accordion\';\n\nexport default function Example() {\n  return (\n    <Accordion>\n      <AccordionItem header="Primary item 1">\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n        eiusmod tempor incididunt ut labore et dolore magna aliqua.\n      </AccordionItem>\n\n      <AccordionItem header="Primary item 2" initialEntered>\n        <Accordion>\n          <AccordionItem header="Secondary item 1" initialEntered>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed\n            do eiusmod tempor incididunt ut labore et dolore magna\n            aliqua.\n          </AccordionItem>\n\n          <AccordionItem header="Secondary item 2">\n            Suspendisse massa risus, pretium id interdum in, dictum sit\n            amet ante. Fusce vulputate purus sed tempus feugiat.\n          </AccordionItem>\n        </Accordion>\n      </AccordionItem>\n\n      <AccordionItem header="Primary item 3">\n        Suspendisse massa risus, pretium id interdum in, dictum sit amet\n        ante. Fusce vulputate purus sed tempus feugiat.\n      </AccordionItem>\n    </Accordion>\n  );\n}\n';var c=n(2375),d=n(935);function l(){return(0,i.jsxs)(d.nD,{children:[(0,i.jsx)(d.As,{header:"Primary item 1",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),(0,i.jsx)(d.As,{header:"Primary item 2",initialEntered:!0,children:(0,i.jsxs)(d.nD,{children:[(0,i.jsx)(d.As,{header:"Secondary item 1",initialEntered:!0,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),(0,i.jsx)(d.As,{header:"Secondary item 2",children:"Suspendisse massa risus, pretium id interdum in, dictum sit amet ante. Fusce vulputate purus sed tempus feugiat."})]})}),(0,i.jsx)(d.As,{header:"Primary item 3",children:"Suspendisse massa risus, pretium id interdum in, dictum sit amet ante. Fusce vulputate purus sed tempus feugiat."})]})}const u={sidebar_position:8},m="Nested accordion",p={},h=[];function f(e){const t={code:"code",h1:"h1",header:"header",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"nested-accordion",children:"Nested accordion"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"AccordionItem"})," can have a nested accordion. When navigating through items with keyboard\narrow keys, focus will stay within the same level. Use the ",(0,i.jsx)(t.code,{children:"tab"})," key to move to other\nlevels."]}),"\n",(0,i.jsx)(l,{}),"\n",(0,i.jsx)(s.A,{language:"jsx",children:(0,c.R)(a)})]})}function g(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(f,{...e})}):f(e)}},7210:(e,t,n)=>{n.d(t,{A:()=>a});var r,i,o=n(3696);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(null,arguments)}const a=e=>{let{title:t,titleId:n,...a}=e;return o.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,className:"icon icon-tabler icon-tabler-chevron-down",viewBox:"0 0 24 24","aria-labelledby":n},a),t?o.createElement("title",{id:n},t):null,r||(r=o.createElement("path",{stroke:"none",d:"M0 0h24v24H0z"})),i||(i=o.createElement("path",{d:"m6 9 6 6 6-6"})))}},9016:(e,t,n)=>{n.d(t,{I:()=>o});var r=n(877),i=n(2540);const o=e=>(0,i.jsx)(r.C_.Provider,{...e})},1946:(e,t,n)=>{n.d(t,{O:()=>a});var r=n(877);const i=e=>{do{e=e.parentElement}while(e&&!e.hasAttribute(r.$f));return e},o=(e,t,n)=>e?t>0?t-1:n-1:(t+1)%n,s=(e,t)=>{const{activeElement:n}=document;if(!n||!n.hasAttribute(r.MP)||i(n)!==t.currentTarget)return;const s=t.currentTarget.querySelectorAll(`[${r.MP}]`),{length:a}=s;for(let r=0;r<a;r++)if(s[r]===n){let n=o(e,r,a);for(;i(s[r])!==i(s[n]);)n=o(e,n,a);r!==n&&(t.preventDefault(),s[n].focus());break}},a=()=>({accordionProps:{[r.$f]:"",onKeyDown:e=>"ArrowUp"===e.key?s(!0,e):"ArrowDown"===e.key&&s(!1,e)}})},5591:(e,t,n)=>{n.d(t,{D:()=>s,T:()=>o});var r=n(3696),i=n(877);const o=(e,t,n)=>{const{stateMap:r,mountOnEnter:i,initialEntered:o}=e,s=null!=n?n:o;return r.get(t)||{status:s?"entered":i?"unmounted":"exited",isMounted:!i,isEnter:s,isResolved:!0}},s=()=>(0,r.useContext)(i.C_)},3414:(e,t,n)=>{n.d(t,{r:()=>a});var r=n(877),i=n(3696);let o=0;const s=i.useId||(()=>{const[e,t]=(0,i.useState)();return(0,i.useEffect)((()=>t(++o)),[]),e&&`${r.Gl}-${e}`}),a=e=>{let{state:t,toggle:n,disabled:i}=e;const o=s(),a=o&&o+"-",c={id:o,"aria-controls":a,"aria-expanded":t.isEnter,onClick:n};i?c.disabled=!0:c[r.MP]="";return{buttonProps:c,panelProps:{id:a,"aria-labelledby":o,role:"region"}}}},8052:(e,t,n)=>{n.d(t,{q:()=>o});var r=n(3696),i=n(5591);const o=function(e){let{itemKey:t,initialEntered:n,disabled:o}=void 0===e?{}:e;const s=(0,r.useRef)(null),a=(0,i.D)(),c=null!=t?t:s.current,d=(0,i.T)(a,c,n),{setItem:l,deleteItem:u,toggle:m}=a;return(0,r.useEffect)((()=>{if(o)return;const e=null!=t?t:s.current;return l(e,{initialEntered:n}),()=>{u(e)}}),[l,u,t,n,o]),{itemRef:s,state:d,toggle:(0,r.useCallback)((e=>m(c,e)),[m,c])}}},7362:(e,t,n)=>{n.d(t,{p:()=>d});var r=n(3696);const i=["preEnter","entering","entered","preExit","exiting","exited","unmounted"],o=e=>e?6:5,s=(e,t,n,r,o,s)=>{clearTimeout(o);const a=(e=>({_s:e,status:i[e],isEnter:e<3,isMounted:6!==e,isResolved:2===e||e>4}))(t),c=new Map(r.current);c.set(e,a),n(c),r.current=c,s&&s({key:e,current:a})},a=({allowMultiple:e,enter:t=!0,exit:n=!0,preEnter:i,preExit:a,timeout:c,initialEntered:d,mountOnEnter:l,unmountOnExit:u,onStateChange:m}={})=>{const[p,h]=(0,r.useState)(new Map),f=(0,r.useRef)(p),g=(0,r.useRef)(new Map),[b,x]=(e=>"object"==typeof e?[e.enter,e.exit]:[e,e])(c),v=(0,r.useCallback)(((e,t)=>{const{initialEntered:n=d}=t||{},r=n?2:o(l);s(e,r,h,f),g.current.set(e,{})}),[d,l]),E=(0,r.useCallback)((e=>{const t=new Map(f.current);return!!t.delete(e)&&(h(t),f.current=t,g.current.delete(e),!0)}),[]),y=(0,r.useCallback)((e=>{const t=f.current.get(e);if(!t)return;const{timeoutId:n}=g.current.get(e),r=((e,t)=>{switch(e){case 1:case 0:return 2;case 4:case 3:return o(t)}})(t._s,u);r&&s(e,r,h,f,n,m)}),[m,u]),A=(0,r.useCallback)(((r,c)=>{const d=f.current.get(r);if(!d)return;const l=g.current.get(r),p=e=>{switch(s(r,e,h,f,l.timeoutId,m),e){case 1:b>=0&&(l.timeoutId=setTimeout((()=>y(r)),b));break;case 4:x>=0&&(l.timeoutId=setTimeout((()=>y(r)),x));break;case 0:case 3:l.timeoutId=((e,t)=>setTimeout((()=>{isNaN(document.body.offsetTop)||e(t+1)}),0))(p,e)}},v=d.isEnter;"boolean"!=typeof c&&(c=!v),c?v||(p(t?i?0:1:2),!e&&f.current.forEach(((e,t)=>t!==r&&A(t,!1)))):v&&p(n?a?3:4:o(u))}),[m,y,e,t,n,i,a,b,x,u]),w=(0,r.useCallback)((t=>{if(e||!1===t)for(const e of f.current.keys())A(e,t)}),[e,A]);return{stateMap:p,toggle:A,toggleAll:w,endTransition:y,setItem:v,deleteItem:E}},c=(e,t)=>!0===e||!(!e||!e[t]),d=function(e){let{transition:t,transitionTimeout:n,...r}=void 0===e?{}:e;const i=a({timeout:n,enter:c(t,"enter"),exit:c(t,"exit"),preEnter:c(t,"preEnter"),preExit:c(t,"preExit"),...r});return{mountOnEnter:!!r.mountOnEnter,initialEntered:!!r.initialEntered,...i}}},3670:(e,t,n)=>{n.d(t,{a:()=>o});var r=n(3696);const i="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?r.useLayoutEffect:r.useEffect,o=e=>{let{status:t,isResolved:n}=e;const[o,s]=(0,r.useState)(),a=(0,r.useRef)(null);i((()=>{("preEnter"===t||"preExit"===t)&&s(a.current.getBoundingClientRect().height)}),[t]);return[{height:"preEnter"===t||"exiting"===t?0:"entering"===t||"preExit"===t?o:void 0,overflow:n?void 0:"hidden"},a]}},877:(e,t,n)=>{n.d(t,{$f:()=>s,C_:()=>c,FP:()=>i,Gl:()=>o,MP:()=>a});var r=n(3696);const i="szh-accordion",o="szh-adn",s=`data-${o}`,a=`data-${o}-btn`,c=(0,r.createContext)({})},935:(e,t,n)=>{n.d(t,{nD:()=>k,As:()=>I,j_:()=>N,p3:()=>i.p,DU:()=>P});var r=n(3696),i=n(7362),o=n(877);const s=(e,t,n)=>(r,i)=>{const o=t?`${e}__${t}`:e;let s=o;n&&Object.keys(n).forEach((e=>{const t=n[e];t&&(s+=` ${o}--${!0===t?e:`${e}-${t}`}`)}));let a="function"==typeof r?r(i):r;return"string"==typeof a&&(a=a.trim(),a&&(s+=` ${a}`)),s},a=(e,t)=>{if(!t)return e;const n={...e};return Object.keys(t).forEach((r=>{const i=e[r],o=t[r];n[r]="function"==typeof o&&i?function(){i(...arguments),o(...arguments)}:o})),n};var c=n(9016),d=n(1946),l=n(2540);const u=(0,r.forwardRef)(((e,t)=>{let{providerValue:n,className:r,...i}=e;const{accordionProps:u}=(0,d.O)();return(0,l.jsx)(c.I,{value:n,children:(0,l.jsx)("div",{...a(u,i),ref:t,className:s(o.FP)(r)})})}));u.displayName="ControlledAccordion";const m=(0,r.forwardRef)(((e,t)=>{let{allowMultiple:n,initialEntered:r,mountOnEnter:o,unmountOnExit:s,transition:a,transitionTimeout:c,onStateChange:d,...m}=e;const p=(0,i.p)({allowMultiple:n,initialEntered:r,mountOnEnter:o,unmountOnExit:s,transition:a,transitionTimeout:c,onStateChange:d});return(0,l.jsx)(u,{...m,ref:t,providerValue:p})}));m.displayName="Accordion";var p=n(3414),h=n(3670);function f(e,t){"function"==typeof e?e(t):e.current=t}function g(e,t){return(0,r.useMemo)((()=>e?t?n=>{f(e,n),f(t,n)}:e:t),[e,t])}var b=n(8052);const x=e=>{const t=(0,r.forwardRef)(((t,n)=>{let{itemKey:r,initialEntered:i,...o}=t;return(0,l.jsx)(e,{forwardedRef:n,...o,...(0,b.q)({itemKey:r,initialEntered:i,disabled:o.disabled})})}));return t.displayName="WithAccordionItem",t},v=(e,t)=>"function"==typeof e?e(t):e,E=(0,r.memo)((e=>{let{forwardedRef:t,itemRef:n,state:r,toggle:i,className:c,disabled:d,header:u,headingTag:m="h3",headingProps:f,buttonProps:b,contentProps:x,panelProps:E,children:y,...A}=e;const w={state:r,toggle:i,disabled:d},{buttonProps:j,panelProps:P}=(0,p.r)(w),[k,N]=(0,h.a)(r),I=g(E?.ref,N),{status:M,isMounted:C,isEnter:R}=r;return(0,l.jsxs)("div",{...A,ref:g(t,n),className:s(o.FP,"item",{status:M,expanded:R})(c,r),children:[(0,l.jsx)(m,{...f,style:{margin:0,...f?.style},className:s(o.FP,"item-heading")(f?.className,r),children:(0,l.jsx)("button",{...a(j,b),type:"button",className:s(o.FP,"item-btn")(b?.className,r),children:v(u,w)})}),C&&(0,l.jsx)("div",{...x,style:{display:"exited"===M?"none":void 0,...k,...x?.style},className:s(o.FP,"item-content")(x?.className,r),children:(0,l.jsx)("div",{...a(P,E),ref:I,className:s(o.FP,"item-panel")(E?.className,r),children:v(y,w)})})]})}));E.displayName="AccordionItem";const y=x(E);var A=n(7210),w=n(2623),j=n(5591);const P=()=>{const e=(0,j.D)();return{getItemState:function(t,n){let{initialEntered:r}=void 0===n?{}:n;return(0,j.T)(e,t,r)},toggle:e.toggle,toggleAll:e.toggleAll}},k=e=>(0,l.jsx)(m,{...e,className:w.A.accordion,transition:!0,transitionTimeout:250}),N=e=>(0,l.jsx)(u,{...e,className:w.A.accordion}),I=e=>(0,l.jsx)(y,{...e,header:t=>(0,l.jsxs)(l.Fragment,{children:["function"==typeof e.header?e.header(t):e.header,(0,l.jsx)(A.A,{className:w.A.chevron})]}),className:w.A.item,buttonProps:{className:e=>{let{isEnter:t}=e;return t?w.A.buttonExpanded:w.A.button}},contentProps:{className:w.A.content},panelProps:{className:w.A.panel}})},2375:(e,t,n)=>{n.d(t,{R:()=>r});const r=e=>e.replace("from '../accordion'","from '@szhsin/react-accordion'")},2623:(e,t,n)=>{n.d(t,{A:()=>r});const r={accordion:"accordion_nIGp",item:"item_YcP7",button:"button_lQEz",buttonExpanded:"buttonExpanded_Fmda button_lQEz",chevron:"chevron_Ys3M",content:"content_v0f5",panel:"panel_FAXb"}}}]);
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[473],{5645:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>x,frontMatter:()=>l,metadata:()=>m,toc:()=>h});var i=n(2540),r=n(8453),o=n(1432);const s='import React from \'react\';\nimport { Accordion, AccordionItem } from \'../accordion\';\n\nexport default function Example() {\n  return (\n    <Accordion>\n      <AccordionItem header="What is Lorem Ipsum?" initialEntered>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n        eiusmod tempor incididunt ut labore et dolore magna aliqua.\n      </AccordionItem>\n\n      <AccordionItem header="Where does it come from?">\n        Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla\n        vel erat quis sodales. Nam ex enim, eleifend venenatis lectus\n        vitae, accumsan auctor mi.\n      </AccordionItem>\n\n      <AccordionItem header="Why do we use it?" initialEntered>\n        Suspendisse massa risus, pretium id interdum in, dictum sit amet\n        ante. Fusce vulputate purus sed tempus feugiat.\n      </AccordionItem>\n    </Accordion>\n  );\n}\n';var a=n(2375),c=(n(3696),n(935));function d(){return(0,i.jsxs)(c.nD,{children:[(0,i.jsx)(c.As,{header:"What is Lorem Ipsum?",initialEntered:!0,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),(0,i.jsx)(c.As,{header:"Where does it come from?",children:"Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel erat quis sodales. Nam ex enim, eleifend venenatis lectus vitae, accumsan auctor mi."}),(0,i.jsx)(c.As,{header:"Why do we use it?",initialEntered:!0,children:"Suspendisse massa risus, pretium id interdum in, dictum sit amet ante. Fusce vulputate purus sed tempus feugiat."})]})}const l={sidebar_position:3},u="Expanding items initially",m={id:"docs/initial-expanded",title:"Expanding items initially",description:"You could use the initialEntered prop of AccordionItem to expand items when accordion",source:"@site/docs/docs/initial-expanded.mdx",sourceDirName:"docs",slug:"/docs/initial-expanded",permalink:"/react-accordion/docs/initial-expanded",draft:!1,unlisted:!1,editUrl:"https://github.com/szhsin/react-accordion/tree/master/website/docs/docs/initial-expanded.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Allowing multiple",permalink:"/react-accordion/docs/allow-multiple"},next:{title:"Customising header",permalink:"/react-accordion/docs/customising-header"}},p={},h=[];function f(e){const t={admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"expanding-items-initially",children:"Expanding items initially"})}),"\n",(0,i.jsxs)(t.p,{children:["You could use the ",(0,i.jsx)(t.code,{children:"initialEntered"})," prop of ",(0,i.jsx)(t.code,{children:"AccordionItem"})," to expand items when accordion\nfirst mounts. In the following example, the first and last item are expanded on mount."]}),"\n",(0,i.jsx)(d,{}),"\n",(0,i.jsx)(o.A,{language:"jsx",children:(0,a.R)(s)}),"\n",(0,i.jsxs)(t.admonition,{type:"info",children:[(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"Accordion"})," component also has an ",(0,i.jsx)(t.code,{children:"initialEntered"})," prop which can make every accordion\nitem expanded when initially mounted."]}),(0,i.jsxs)(t.p,{children:["When the ",(0,i.jsx)(t.code,{children:"initialEntered"})," prop is specified on an individual ",(0,i.jsx)(t.code,{children:"AccordionItem"})," at the same\ntime, it overrides the ",(0,i.jsx)(t.code,{children:"initialEntered"})," prop of ",(0,i.jsx)(t.code,{children:"Accordion"})," component."]})]})]})}function x(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(f,{...e})}):f(e)}},7210:(e,t,n)=>{n.d(t,{A:()=>a});var i,r,o=n(3696);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)({}).hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s.apply(null,arguments)}const a=e=>{let{title:t,titleId:n,...a}=e;return o.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,className:"icon icon-tabler icon-tabler-chevron-down",viewBox:"0 0 24 24","aria-labelledby":n},a),t?o.createElement("title",{id:n},t):null,i||(i=o.createElement("path",{stroke:"none",d:"M0 0h24v24H0z"})),r||(r=o.createElement("path",{d:"m6 9 6 6 6-6"})))}},9016:(e,t,n)=>{n.d(t,{I:()=>o});var i=n(877),r=n(2540);const o=e=>(0,r.jsx)(i.C_.Provider,{...e})},1946:(e,t,n)=>{n.d(t,{O:()=>a});var i=n(877);const r=e=>{do{e=e.parentElement}while(e&&!e.hasAttribute(i.$f));return e},o=(e,t,n)=>e?t>0?t-1:n-1:(t+1)%n,s=(e,t)=>{const{activeElement:n}=document;if(!n||!n.hasAttribute(i.MP)||r(n)!==t.currentTarget)return;const s=t.currentTarget.querySelectorAll(`[${i.MP}]`),{length:a}=s;for(let i=0;i<a;i++)if(s[i]===n){let n=o(e,i,a);for(;r(s[i])!==r(s[n]);)n=o(e,n,a);i!==n&&(t.preventDefault(),s[n].focus());break}},a=()=>({accordionProps:{[i.$f]:"",onKeyDown:e=>"ArrowUp"===e.key?s(!0,e):"ArrowDown"===e.key&&s(!1,e)}})},5591:(e,t,n)=>{n.d(t,{D:()=>s,T:()=>o});var i=n(3696),r=n(877);const o=(e,t,n)=>{const{stateMap:i,mountOnEnter:r,initialEntered:o}=e,s=null!=n?n:o;return i.get(t)||{status:s?"entered":r?"unmounted":"exited",isMounted:!r,isEnter:s,isResolved:!0}},s=()=>(0,i.useContext)(r.C_)},3414:(e,t,n)=>{n.d(t,{r:()=>a});var i=n(877),r=n(3696);let o=0;const s=r.useId||(()=>{const[e,t]=(0,r.useState)();return(0,r.useEffect)((()=>t(++o)),[]),e&&`${i.Gl}-${e}`}),a=e=>{let{state:t,toggle:n,disabled:r}=e;const o=s(),a=o&&o+"-",c={id:o,"aria-controls":a,"aria-expanded":t.isEnter,onClick:n};r?c.disabled=!0:c[i.MP]="";return{buttonProps:c,panelProps:{id:a,"aria-labelledby":o,role:"region"}}}},8052:(e,t,n)=>{n.d(t,{q:()=>o});var i=n(3696),r=n(5591);const o=function(e){let{itemKey:t,initialEntered:n,disabled:o}=void 0===e?{}:e;const s=(0,i.useRef)(null),a=(0,r.D)(),c=null!=t?t:s.current,d=(0,r.T)(a,c,n),{setItem:l,deleteItem:u,toggle:m}=a;return(0,i.useEffect)((()=>{if(o)return;const e=null!=t?t:s.current;return l(e,{initialEntered:n}),()=>{u(e)}}),[l,u,t,n,o]),{itemRef:s,state:d,toggle:(0,i.useCallback)((e=>m(c,e)),[m,c])}}},7362:(e,t,n)=>{n.d(t,{p:()=>u});var i=n(3696);const r=["preEnter","entering","entered","preExit","exiting","exited","unmounted"],o=e=>e?6:5,s=new Map,a=new Map,c=(e,t,n,i,o,s)=>{clearTimeout(o);const a=(e=>({_s:e,status:r[e],isEnter:e<3,isMounted:6!==e,isResolved:2===e||e>4}))(t),c=new Map(i.current);c.set(e,a),n(c),i.current=c,s&&s({key:e,current:a})},d=({allowMultiple:e,enter:t=!0,exit:n=!0,preEnter:r,preExit:d,timeout:l,initialEntered:u,mountOnEnter:m,unmountOnExit:p,onStateChange:h}={})=>{const[f,x]=(0,i.useState)(s),g=(0,i.useRef)(f),E=(0,i.useRef)(a),[v,b]=(e=>"object"==typeof e?[e.enter,e.exit]:[e,e])(l),w=(0,i.useCallback)(((e,t)=>{const{initialEntered:n=u}=t||{},i=n?2:o(m);c(e,i,x,g),E.current.set(e,{})}),[u,m]),j=(0,i.useCallback)((e=>{const t=new Map(g.current);return!!t.delete(e)&&(x(t),g.current=t,E.current.delete(e),!0)}),[]),y=(0,i.useCallback)((e=>{const t=g.current.get(e);if(!t)return;const{timeoutId:n}=E.current.get(e),i=((e,t)=>{switch(e){case 1:case 0:return 2;case 4:case 3:return o(t)}})(t._s,p);i&&c(e,i,x,g,n,h)}),[h,p]),A=(0,i.useCallback)(((i,s)=>{const a=g.current.get(i);if(!a)return;const l=E.current.get(i),u=e=>{switch(c(i,e,x,g,l.timeoutId,h),e){case 1:v>=0&&(l.timeoutId=setTimeout((()=>y(i)),v));break;case 4:b>=0&&(l.timeoutId=setTimeout((()=>y(i)),b));break;case 0:case 3:l.timeoutId=((e,t)=>setTimeout((()=>{isNaN(document.body.offsetTop)||e(t+1)}),0))(u,e)}},m=a.isEnter;"boolean"!=typeof s&&(s=!m),s?m||(u(t?r?0:1:2),!e&&g.current.forEach(((e,t)=>t!==i&&A(t,!1)))):m&&u(n?d?3:4:o(p))}),[h,y,e,t,n,r,d,v,b,p]),I=(0,i.useCallback)((t=>{if(e||!1===t)for(const e of g.current.keys())A(e,t)}),[e,A]);return{stateMap:f,toggle:A,toggleAll:I,endTransition:y,setItem:w,deleteItem:j}},l=(e,t)=>!0===e||!(!e||!e[t]),u=function(e){let{transition:t,transitionTimeout:n,...i}=void 0===e?{}:e;const r=d({timeout:n,enter:l(t,"enter"),exit:l(t,"exit"),preEnter:l(t,"preEnter"),preExit:l(t,"preExit"),...i});return{mountOnEnter:!!i.mountOnEnter,initialEntered:!!i.initialEntered,...r}}},3670:(e,t,n)=>{n.d(t,{a:()=>o});var i=n(3696);const r="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?i.useLayoutEffect:i.useEffect,o=e=>{let{status:t,isResolved:n}=e;const[o,s]=(0,i.useState)(),a=(0,i.useRef)(null);r((()=>{("preEnter"===t||"preExit"===t)&&s(a.current.getBoundingClientRect().height)}),[t]);return[{height:"preEnter"===t||"exiting"===t?0:"entering"===t||"preExit"===t?o:void 0,overflow:n?void 0:"hidden"},a]}},877:(e,t,n)=>{n.d(t,{$f:()=>s,C_:()=>c,FP:()=>r,Gl:()=>o,MP:()=>a});var i=n(3696);const r="szh-accordion",o="szh-adn",s=`data-${o}`,a=`data-${o}-btn`,c=(0,i.createContext)({})},935:(e,t,n)=>{n.d(t,{nD:()=>P,As:()=>N,j_:()=>k,p3:()=>r.p,DU:()=>I});var i=n(3696),r=n(7362),o=n(877);const s=(e,t,n)=>(i,r)=>{const o=t?`${e}__${t}`:e;let s=o;n&&Object.keys(n).forEach((e=>{const t=n[e];t&&(s+=` ${o}--${!0===t?e:`${e}-${t}`}`)}));let a="function"==typeof i?i(r):i;return"string"==typeof a&&(a=a.trim(),a&&(s+=` ${a}`)),s},a=(e,t)=>{if(!t)return e;const n={...e};return Object.keys(t).forEach((i=>{const r=e[i],o=t[i];n[i]="function"==typeof o&&r?function(){r(...arguments),o(...arguments)}:o})),n};var c=n(9016),d=n(1946),l=n(2540);const u=(0,i.forwardRef)(((e,t)=>{let{providerValue:n,className:i,...r}=e;const{accordionProps:u}=(0,d.O)();return(0,l.jsx)(c.I,{value:n,children:(0,l.jsx)("div",{...a(u,r),ref:t,className:s(o.FP)(i)})})}));u.displayName="ControlledAccordion";const m=(0,i.forwardRef)(((e,t)=>{let{allowMultiple:n,initialEntered:i,mountOnEnter:o,unmountOnExit:s,transition:a,transitionTimeout:c,onStateChange:d,...m}=e;const p=(0,r.p)({allowMultiple:n,initialEntered:i,mountOnEnter:o,unmountOnExit:s,transition:a,transitionTimeout:c,onStateChange:d});return(0,l.jsx)(u,{...m,ref:t,providerValue:p})}));m.displayName="Accordion";var p=n(3414),h=n(3670);function f(e,t){"function"==typeof e?e(t):e.current=t}function x(e,t){return(0,i.useMemo)((()=>e?t?n=>{f(e,n),f(t,n)}:e:t),[e,t])}var g=n(8052);const E=e=>{const t=(0,i.forwardRef)(((t,n)=>{let{itemKey:i,initialEntered:r,...o}=t;return(0,l.jsx)(e,{forwardedRef:n,...o,...(0,g.q)({itemKey:i,initialEntered:r,disabled:o.disabled})})}));return t.displayName="WithAccordionItem",t},v=(e,t)=>"function"==typeof e?e(t):e,b=(0,i.memo)((e=>{let{forwardedRef:t,itemRef:n,state:i,toggle:r,className:c,disabled:d,header:u,headingTag:m="h3",headingProps:f,buttonProps:g,contentProps:E,panelProps:b,children:w,...j}=e;const y={state:i,toggle:r,disabled:d},{buttonProps:A,panelProps:I}=(0,p.r)(y),[P,k]=(0,h.a)(i),N=x(b&&b.ref,k),{status:C,isMounted:M,isEnter:R}=i;return(0,l.jsxs)("div",{...j,ref:x(t,n),className:s(o.FP,"item",{status:C,expanded:R})(c,i),children:[(0,l.jsx)(m,{...f,style:{margin:0,...f&&f.style},className:s(o.FP,"item-heading")(f&&f.className,i),children:(0,l.jsx)("button",{...a(A,g),type:"button",className:s(o.FP,"item-btn")(g&&g.className,i),children:v(u,y)})}),M&&(0,l.jsx)("div",{...E,style:{display:"exited"===C?"none":void 0,...P,...E&&E.style},className:s(o.FP,"item-content")(E&&E.className,i),children:(0,l.jsx)("div",{...a(I,b),ref:N,className:s(o.FP,"item-panel")(b&&b.className,i),children:v(w,y)})})]})}));b.displayName="AccordionItem";const w=E(b);var j=n(7210),y=n(2623),A=n(5591);const I=()=>{const e=(0,A.D)();return{getItemState:function(t,n){let{initialEntered:i}=void 0===n?{}:n;return(0,A.T)(e,t,i)},toggle:e.toggle,toggleAll:e.toggleAll}},P=e=>(0,l.jsx)(m,{...e,className:y.A.accordion,transition:!0,transitionTimeout:250}),k=e=>(0,l.jsx)(u,{...e,className:y.A.accordion}),N=e=>(0,l.jsx)(w,{...e,header:t=>(0,l.jsxs)(l.Fragment,{children:["function"==typeof e.header?e.header(t):e.header,(0,l.jsx)(j.A,{className:y.A.chevron})]}),className:y.A.item,buttonProps:{className:e=>{let{isEnter:t}=e;return t?y.A.buttonExpanded:y.A.button}},contentProps:{className:y.A.content},panelProps:{className:y.A.panel}})},2375:(e,t,n)=>{n.d(t,{R:()=>i});const i=e=>e.replace("import React from 'react';\n","").replace("from '../accordion'","from '@szhsin/react-accordion'")},2623:(e,t,n)=>{n.d(t,{A:()=>i});const i={accordion:"accordion_nIGp",item:"item_YcP7",button:"button_lQEz",buttonExpanded:"buttonExpanded_Fmda button_lQEz",chevron:"chevron_Ys3M",content:"content_v0f5",panel:"panel_FAXb"}}}]);
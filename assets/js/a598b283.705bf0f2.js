"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[41],{4720:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>d,default:()=>b,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var o=t(2540),r=t(8453),s=t(1432);const i=".accordion {\n  margin-bottom: 1.5rem;\n}\n\n.item {\n  border: 1px solid var(--ifm-color-emphasis-300);\n  border-top-width: 0;\n}\n\n.item:first-of-type {\n  border-top-width: 1px;\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px;\n}\n\n.item:last-of-type {\n  border-bottom-left-radius: 6px;\n  border-bottom-right-radius: 6px;\n}\n\n.item:first-of-type .button {\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n\n.item:last-of-type .button:not(.buttonExpanded) {\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n\n.button {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  margin: 0;\n  padding: 1rem 1.25rem;\n  font-size: 1rem;\n  font-weight: 400;\n  text-align: left;\n  color: var(--ifm-font-color-base);\n  background-color: transparent;\n  border: none;\n  transition: background-color 0.25s ease-in-out;\n}\n\n.buttonExpanded {\n  composes: button;\n  box-shadow: inset 0 -1px 0 0 var(--ifm-color-emphasis-300);\n  color: var(--ifm-color-primary);\n  background-color: var(--accordion-background);\n}\n\n.button:hover {\n  box-shadow: 0 0 0 1px var(--ifm-color-primary);\n}\n\n.button:disabled {\n  box-shadow: none;\n  cursor: auto;\n  color: #808080;\n}\n\n.button:focus {\n  position: relative;\n  outline: none;\n}\n\n.button:focus-visible {\n  box-shadow: 0 0 0 3px var(--ifm-color-primary);\n}\n\n@supports not selector(:focus-visible) {\n  .button:focus {\n    box-shadow: 0 0 0 3px var(--ifm-color-primary);\n  }\n}\n\n.chevron {\n  flex-shrink: 0;\n  margin-left: auto;\n  transition: transform 0.25s cubic-bezier(0, 0, 0, 1);\n}\n\n.buttonExpanded .chevron {\n  transform: rotate(180deg);\n}\n\n.content {\n  transition: height 0.25s cubic-bezier(0, 0, 0, 1);\n}\n\n.panel {\n  padding: 1rem 1.25rem;\n}\n",a={sidebar_position:4},d="Styles",c={id:"docs/headless-ui/styles",title:"Styles",description:"Here are the styles for the two components we have created.",source:"@site/docs/docs/headless-ui/styles.mdx",sourceDirName:"docs/headless-ui",slug:"/docs/headless-ui/styles",permalink:"/react-accordion/docs/headless-ui/styles",draft:!1,unlisted:!1,editUrl:"https://github.com/szhsin/react-accordion/tree/master/website/docs/docs/headless-ui/styles.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Creating AccordionItem",permalink:"/react-accordion/docs/headless-ui/accordion-item"},next:{title:"Putting together",permalink:"/react-accordion/docs/headless-ui/example"}},l={},p=[];function u(n){const e={h1:"h1",header:"header",p:"p",...(0,r.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.header,{children:(0,o.jsx)(e.h1,{id:"styles",children:"Styles"})}),"\n",(0,o.jsx)(e.p,{children:"Here are the styles for the two components we have created."}),"\n",(0,o.jsx)(s.A,{language:"css",title:"styles.module.css",children:i})]})}function b(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(u,{...n})}):u(n)}}}]);
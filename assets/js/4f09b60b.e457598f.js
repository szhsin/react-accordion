"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[910],{2209:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>h,contentTitle:()=>c,default:()=>g,frontMatter:()=>d,metadata:()=>l,toc:()=>m});var i=t(2540),o=t(8453),s=t(1432);const r="import React from 'react';\nimport {\n  useAccordionItem,\n  useAccordionItemEffect\n} from '@szhsin/react-accordion';\nimport ChevronDown from '@site/static/img/chevron-down.svg';\nimport styles from '../accordion/styles.module.css';\n\nconst AccordionItem = ({\n  header,\n  children,\n  itemKey,\n  initialEntered,\n  disabled\n}: {\n  header: React.ReactNode;\n  children: React.ReactNode;\n  itemKey?: string | number;\n  initialEntered?: boolean;\n  disabled?: boolean;\n}) => {\n  const { itemRef, state, toggle } =\n    useAccordionItemEffect<HTMLDivElement>({\n      itemKey,\n      initialEntered,\n      disabled\n    });\n  const { buttonProps, panelProps } = useAccordionItem({\n    state,\n    toggle,\n    disabled\n  });\n  const { status, isMounted, isEnter } = state;\n\n  return (\n    <div className={styles.item} ref={itemRef}>\n      {/* Choose a heading level that is appropriate for the information \n      architecture of your page */}\n      {/* highlight-next-line */}\n      <h3 style={{ margin: 0 }}>\n        <button\n          className={isEnter ? styles.buttonExpanded : styles.button}\n          type=\"button\"\n          {...buttonProps}\n        >\n          {header}\n          <ChevronDown className={styles.chevron} />\n        </button>\n      </h3>\n      {isMounted && (\n        <div\n          className={styles.panel}\n          style={{\n            display: status === 'exited' ? 'none' : undefined\n          }}\n          {...panelProps}\n        >\n          {children}\n        </div>\n      )}\n    </div>\n  );\n};\n\nexport default AccordionItem;\n",a="import React from 'react';\nimport {\n  useAccordionItem,\n  useAccordionItemEffect,\n  // highlight-next-line\n  useHeightTransition\n} from '@szhsin/react-accordion';\nimport ChevronDown from '@site/static/img/chevron-down.svg';\nimport styles from '../accordion/styles.module.css';\n\nconst AccordionItem = ({\n  header,\n  children,\n  itemKey,\n  initialEntered,\n  disabled\n}: {\n  header: React.ReactNode;\n  children: React.ReactNode;\n  itemKey?: string | number;\n  initialEntered?: boolean;\n  disabled?: boolean;\n}) => {\n  const { itemRef, state, toggle } =\n    useAccordionItemEffect<HTMLDivElement>({\n      itemKey,\n      initialEntered,\n      disabled\n    });\n  const { buttonProps, panelProps } = useAccordionItem({\n    state,\n    toggle,\n    disabled\n  });\n\n  // highlight-start\n  const [transitionStyle, panelRef] =\n    useHeightTransition<HTMLDivElement>(state);\n  // highlight-end\n\n  const { status, isMounted, isEnter } = state;\n\n  return (\n    <div className={styles.item} ref={itemRef}>\n      <h3 style={{ margin: 0 }}>\n        <button\n          className={isEnter ? styles.buttonExpanded : styles.button}\n          type=\"button\"\n          {...buttonProps}\n        >\n          {header}\n          <ChevronDown className={styles.chevron} />\n        </button>\n      </h3>\n      {isMounted && (\n        // Add an extra `div` around the panel `div` for the\n        // height transition to work as intended\n        // highlight-next-line\n        <div\n          className={styles.content}\n          style={{\n            display: status === 'exited' ? 'none' : undefined,\n            // highlight-next-line\n            ...transitionStyle\n          }}\n        >\n          <div\n            className={styles.panel}\n            // highlight-next-line\n            ref={panelRef}\n            {...panelProps}\n          >\n            {children}\n          </div>\n          {/* Closing tag of the extra `div` */}\n          {/* highlight-next-line */}\n        </div>\n      )}\n    </div>\n  );\n};\n\nexport default AccordionItem;\n",d={sidebar_position:3},c="Creating AccordionItem",l={id:"docs/headless-ui/accordion-item",title:"Creating AccordionItem",description:"Second, create an AccordionItem component with the useAccordionItem and",source:"@site/docs/docs/headless-ui/accordion-item.mdx",sourceDirName:"docs/headless-ui",slug:"/docs/headless-ui/accordion-item",permalink:"/react-accordion/docs/headless-ui/accordion-item",draft:!1,unlisted:!1,editUrl:"https://github.com/szhsin/react-accordion/tree/master/website/docs/docs/headless-ui/accordion-item.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Creating Accordion",permalink:"/react-accordion/docs/headless-ui/accordion"},next:{title:"Styles",permalink:"/react-accordion/docs/headless-ui/styles"}},h={},m=[{value:"Without height transition",id:"without-height-transition",level:2},{value:"Height transition",id:"height-transition",level:2}];function u(n){const e={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",...(0,o.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"creating-accordionitem",children:"Creating AccordionItem"})}),"\n",(0,i.jsxs)(e.p,{children:["Second, create an ",(0,i.jsx)(e.code,{children:"AccordionItem"})," component with the ",(0,i.jsx)(e.code,{children:"useAccordionItem"})," and\n",(0,i.jsx)(e.code,{children:"useAccordionItemEffect"})," hook exported from the library."]}),"\n",(0,i.jsx)(e.h2,{id:"without-height-transition",children:"Without height transition"}),"\n",(0,i.jsx)(e.p,{children:"Use the following code if you don't need the height transition for expanding and\ncollapsing items."}),"\n",(0,i.jsx)(s.A,{language:"jsx",children:r}),"\n",(0,i.jsx)(e.h2,{id:"height-transition",children:"Height transition"}),"\n",(0,i.jsxs)(e.p,{children:["Use the ",(0,i.jsx)(e.code,{children:"useHeightTransition"})," hook and add a wrapping ",(0,i.jsx)(e.code,{children:"div"})," around the accordion item\nchildren if you want the height transition for expanding and collapsing items."]}),"\n",(0,i.jsx)(s.A,{language:"jsx",children:a})]})}function g(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}}}]);
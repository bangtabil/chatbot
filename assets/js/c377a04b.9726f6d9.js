"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[971],{9925:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var n=o(5893),i=o(1151);const r={title:"Home"},s="MongoDB RAG Framework",a={id:"index",title:"Home",description:"The MongoDB RAG Framework is under active development",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/chatbot/",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb/chatbot/tree/main/docs/docs/index.md",tags:[],version:"current",frontMatter:{title:"Home"},sidebar:"main",next:{title:"Quick Start",permalink:"/chatbot/quick-start"}},c={},l=[{value:"How It Works",id:"how-it-works",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Design Principles",id:"design-principles",level:2},{value:"Architecture",id:"architecture",level:2},{value:"How We Built It",id:"how-we-built-it",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"mongodb-rag-framework",children:"MongoDB RAG Framework"}),"\n",(0,n.jsxs)(t.admonition,{title:"\ud83d\udc77\u200d\u2642\ufe0f Work In Progress \ud83d\udc77\u200d\u2642\ufe0f",type:"warning",children:[(0,n.jsx)(t.p,{children:"The MongoDB RAG Framework is under active development\nand may undergo breaking changes."}),(0,n.jsx)(t.p,{children:"We aim to keep the documentation up to date with the latest version."})]}),"\n",(0,n.jsxs)(t.p,{children:["Build full stack retrieval augmented generation (RAG) applications using MongoDB\nand ",(0,n.jsx)(t.a,{href:"https://www.mongodb.com/docs/atlas/atlas-vector-search/vector-search-overview/",children:"Atlas Vector Search"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["This framework is used to build the MongoDB Docs Chatbot, a RAG chatbot that answers questions about the MongoDB documentation. You can try it out on ",(0,n.jsx)(t.a,{href:"https://www.mongodb.com/docs/",children:"mongodb.com/docs"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"how-it-works",children:"How It Works"}),"\n",(0,n.jsx)(t.p,{children:"The MongoDB RAG Framework has the following core components:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/chatbot/mongodb",children:"MongoDB Atlas"}),": Database for the application that stores content and conversation.\nIndexes content using Atlas Vector Search."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/chatbot/ingest/configure",children:"Ingest CLI"}),": Configurable CLI application that you can use to ingest content into a MongoDB collection for use with Atlas Vector Search."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/chatbot/server/configure",children:"Chat Server"}),": Express.js server routes that you can use to build a chatbot application."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/chatbot/ui",children:"Chat UI"}),": React.js UI components that you can use to build a chatbot application."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,n.jsxs)(t.p,{children:["To get started using the MongoDB RAG framework, refer to the ",(0,n.jsx)(t.a,{href:"/chatbot/quick-start",children:"Quick Start"})," guide."]}),"\n",(0,n.jsx)(t.h2,{id:"design-principles",children:"Design Principles"}),"\n",(0,n.jsx)(t.p,{children:"The MongoDB RAG Framework is designed around the following principles:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Composability: You can use components of the RAG framework independently of each other.\nFor example, we have some users who are using only our ingestion CLI to ingest content into MongoDB Atlas, but use other tools to build their chatbot and UI."}),"\n",(0,n.jsxs)(t.li,{children:["Pluggability: You can plug in your own implementations of components.\nFor example, you can plug in your own implementations of the ",(0,n.jsx)(t.code,{children:"DataSource"})," interface\nto ingest content from different data sources."]}),"\n",(0,n.jsx)(t.li,{children:"Inversion of Control: The RAG framework makes decisions about boilerplate aspects\nof RAG systems so that you can focus on building logic unique to your application."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"architecture",children:"Architecture"}),"\n",(0,n.jsx)(t.p,{children:"Here's a reference architecture for how the MongoDB RAG system works for the MongoDB Docs Chatbot."}),"\n",(0,n.jsx)(t.p,{children:"Data ingestion:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Data Ingestion Architecture",src:o(7036).Z+"",width:"1920",height:"1079"})}),"\n",(0,n.jsx)(t.p,{children:"Chat Server:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Chat Server Architecture",src:o(8608).Z+"",width:"1920",height:"1078"})}),"\n",(0,n.jsx)(t.h2,{id:"how-we-built-it",children:"How We Built It"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["To learn more about how we built the chatbot, check out the MongoDB Developer Center blog post ",(0,n.jsx)(t.a,{href:"https://www.mongodb.com/developer/products/atlas/taking-rag-to-production-documentation-ai-chatbot/",children:"Taking RAG to Production with the MongoDB Documentation AI Chatbot"}),"."]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},7036:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/ingest-diagram-64abc7737d0625a07cfce222c8e92c20.webp"},8608:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/server-diagram-37c0abca4bfa5b0b51557579a89f9278.webp"},1151:(e,t,o)=>{o.d(t,{Z:()=>a,a:()=>s});var n=o(7294);const i={},r=n.createContext(i);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);
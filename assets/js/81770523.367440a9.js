"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4352],{27534:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var s=r(85893),t=r(11151);const i={id:"sources.MakeGitDataSourceParams",title:"Interface: MakeGitDataSourceParams",sidebar_label:"sources.MakeGitDataSourceParams",custom_edit_url:null},a=void 0,c={id:"reference/ingest/interfaces/sources.MakeGitDataSourceParams",title:"Interface: MakeGitDataSourceParams",description:"sources.MakeGitDataSourceParams",source:"@site/docs/reference/ingest/interfaces/sources.MakeGitDataSourceParams.md",sourceDirName:"reference/ingest/interfaces",slug:"/reference/ingest/interfaces/sources.MakeGitDataSourceParams",permalink:"/chatbot/reference/ingest/interfaces/sources.MakeGitDataSourceParams",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"sources.MakeGitDataSourceParams",title:"Interface: MakeGitDataSourceParams",sidebar_label:"sources.MakeGitDataSourceParams",custom_edit_url:null},sidebar:"main",previous:{title:"sources.DevCenterEntryTag",permalink:"/chatbot/reference/ingest/interfaces/sources.DevCenterEntryTag"},next:{title:"sources.MakeLangChainDocumentLoaderDataSourceParams",permalink:"/chatbot/reference/ingest/interfaces/sources.MakeLangChainDocumentLoaderDataSourceParams"}},o={},d=[{value:"Properties",id:"properties",level:2},{value:"filter",id:"filter",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"handlePage",id:"handlepage",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"metadata",id:"metadata",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"name",id:"name",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"repoOptions",id:"repooptions",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"repoUri",id:"repouri",level:3},{value:"Defined in",id:"defined-in-5",level:4}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/chatbot/reference/ingest/modules/sources",children:"sources"}),".MakeGitDataSourceParams"]}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(n.h3,{id:"filter",children:"filter"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"filter"}),": ",(0,s.jsx)(n.a,{href:"/chatbot/reference/ingest/modules/sources#filterfunc",children:(0,s.jsx)(n.code,{children:"FilterFunc"})})]}),"\n",(0,s.jsx)(n.p,{children:"Filter function for selecting files in the repo to parse to pages."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Example"})})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'(path: string) => path.endsWith(".html")\n'})}),"\n",(0,s.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/mongodben/chatbot/blob/3d32af6/packages/mongodb-rag-ingest/src/sources/GitDataSource.ts#L48",children:"mongodb-rag-ingest/src/sources/GitDataSource.ts:48"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"handlepage",children:"handlePage"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"handlePage"}),": ",(0,s.jsx)(n.a,{href:"/chatbot/reference/ingest/modules/sources#handlepagefunc",children:(0,s.jsx)(n.code,{children:"HandlePageFunc"})})]}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/mongodben/chatbot/blob/3d32af6/packages/mongodb-rag-ingest/src/sources/GitDataSource.ts#L55",children:"mongodb-rag-ingest/src/sources/GitDataSource.ts:55"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"metadata",children:"metadata"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.code,{children:"Optional"})," ",(0,s.jsx)(n.strong,{children:"metadata"}),": ",(0,s.jsx)(n.code,{children:"PageMetadata"})]}),"\n",(0,s.jsx)(n.p,{children:"Metadata to be included in all pages."}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/mongodben/chatbot/blob/3d32af6/packages/mongodb-rag-ingest/src/sources/GitDataSource.ts#L53",children:"mongodb-rag-ingest/src/sources/GitDataSource.ts:53"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"name",children:"name"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"name"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsx)(n.p,{children:"Name of project"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/mongodben/chatbot/blob/3d32af6/packages/mongodb-rag-ingest/src/sources/GitDataSource.ts#L27",children:"mongodb-rag-ingest/src/sources/GitDataSource.ts:27"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"repooptions",children:"repoOptions"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.code,{children:"Optional"})," ",(0,s.jsx)(n.strong,{children:"repoOptions"}),": ",(0,s.jsx)(n.code,{children:"TaskOptions"})]}),"\n",(0,s.jsxs)(n.p,{children:["Options for ",(0,s.jsx)(n.code,{children:"simple-git"})," clone command."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Default"})})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'{ "--depth": 1 }\n'})}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/mongodben/chatbot/blob/3d32af6/packages/mongodb-rag-ingest/src/sources/GitDataSource.ts#L41",children:"mongodb-rag-ingest/src/sources/GitDataSource.ts:41"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"repouri",children:"repoUri"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"repoUri"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsx)(n.p,{children:"URI for git repo"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Example"})})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'"https://github.com/mongodb/mongo-java-driver.git"\n'})}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/mongodben/chatbot/blob/3d32af6/packages/mongodb-rag-ingest/src/sources/GitDataSource.ts#L34",children:"mongodb-rag-ingest/src/sources/GitDataSource.ts:34"})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>a});var s=r(67294);const t={},i=s.createContext(t);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);
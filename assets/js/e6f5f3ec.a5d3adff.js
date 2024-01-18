"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7804],{22474:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=t(85893),s=t(11151);const a={id:"index",title:"mongodb-rag-ingest",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},d="MongoDB Ingest CLI",i={id:"reference/ingest/index",title:"mongodb-rag-ingest",description:"The MongoDB Ingest CLI ingest content into a MongoDB collection that you can use for retrieval augmented generation (RAG) applications.",source:"@site/docs/reference/ingest/index.md",sourceDirName:"reference/ingest",slug:"/reference/ingest/",permalink:"/chatbot/reference/ingest/",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"index",title:"mongodb-rag-ingest",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},sidebar:"main",previous:{title:"EmbeddedContent",permalink:"/chatbot/reference/core/interfaces/EmbeddedContent"},next:{title:"Table of Contents",permalink:"/chatbot/reference/ingest/modules"}},r={},c=[{value:"Documentation",id:"documentation",level:2},{value:"System Overview",id:"system-overview",level:2},{value:"Stage 1: Pages",id:"stage-1-pages",level:3},{value:"Stage 2: Embed",id:"stage-2-embed",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Development",id:"development",level:2},{value:"Build &amp; Run",id:"build--run",level:3},{value:"Add Commands",id:"add-commands",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"mongodb-ingest-cli",children:"MongoDB Ingest CLI"}),"\n",(0,o.jsx)(n.p,{children:"The MongoDB Ingest CLI ingest content into a MongoDB collection that you can use for retrieval augmented generation (RAG) applications."}),"\n",(0,o.jsx)(n.p,{children:"You can use the Ingest CLI to ingest data into RAG applications built with the MongoDB Chatbot Framework."}),"\n",(0,o.jsx)(n.h2,{id:"documentation",children:"Documentation"}),"\n",(0,o.jsxs)(n.p,{children:["To learn more about the MongoDB Ingest CLI, refer to the ",(0,o.jsx)(n.a,{href:"https://mongodb.github.io/chatbot/ingest/configure",children:"documentation"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"system-overview",children:"System Overview"}),"\n",(0,o.jsx)(n.mermaid,{value:"flowchart\n    B[Pages command]\n    C[Embed command]\n    B --\x3e D(fetch pages from source)\n    D --\x3e E(store pages in Atlas)\n\n    C --\x3e F(fetch pages from Atlas)\n    F -- for pages marked\\n 'created' or 'updated' --\x3e G(make embeddings)\n    G --\x3e H(store embeddings in Atlas)\n    F -- for pages marked 'deleted' --\x3e I(delete embeddings\\nfor page)"}),"\n",(0,o.jsxs)(n.p,{children:["The ingest tool has two major commands: ",(0,o.jsx)(n.code,{children:"pages"})," and ",(0,o.jsx)(n.code,{children:"embed"}),". These commands\nrepresent the two stages of ingesting content."]}),"\n",(0,o.jsx)(n.h3,{id:"stage-1-pages",children:"Stage 1: Pages"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"pages"}),' command fetches pages from data sources and stores them in Atlas\nwith a last updated timestamp. A "page" is some text with a URL. A data source\nis an arbitrary collection of pages. You can create a new data source by\nimplementing ',(0,o.jsx)(n.code,{children:"DataSource"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["For each given data source, the ",(0,o.jsx)(n.code,{children:"pages"}),' command compares the pages with those\nalready stored in the database and only updates those that are new, have\nchanged, or have been deleted. The command does not actually delete documents\nfrom the database, but instead marks a page as "deleted", so that the next stage\nknows to delete the corresponding embeddings.']}),"\n",(0,o.jsx)(n.h3,{id:"stage-2-embed",children:"Stage 2: Embed"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"embed"})," command creates embeddings for pages that have been updated since a\ngiven date. For pages that have been deleted, the command deletes any\ncorresponding embeddings in the database. If a page is new or has been updated,\nthe command regenerates the corresponding embeddings for that page."]}),"\n",(0,o.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,o.jsxs)(n.p,{children:["To configure the ingest tool, provide an ",(0,o.jsx)(n.code,{children:"ingest.config.js"})," file. The default\nexport of this file must be a ",(0,o.jsx)(n.code,{children:"Config"})," object. See ",(0,o.jsx)(n.a,{href:"./src/Config.ts",children:"Config.ts"}),"\nfor details."]}),"\n",(0,o.jsx)(n.h2,{id:"development",children:"Development"}),"\n",(0,o.jsx)(n.h3,{id:"build--run",children:"Build & Run"}),"\n",(0,o.jsxs)(n.p,{children:["Set up the project monorepo. Refer to the ",(0,o.jsx)(n.a,{href:"https://github.com/mongodb/chatbot/blob/main/CONTRIBUTING.md",children:"Contributor Guide"}),"\nfor more info on monorepo setup."]}),"\n",(0,o.jsxs)(n.p,{children:["Make sure you set up the ",(0,o.jsx)(n.code,{children:".env"})," files in both the ",(0,o.jsx)(n.code,{children:"mongodb-rag-ingest"})," and ",(0,o.jsx)(n.code,{children:"mongodb-rag-core"})," projects."]}),"\n",(0,o.jsx)(n.p,{children:"To use the ingest CLI locally, run:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"# See all available commands\nnode .\n\n# Run specific command\nnode . <command> <options>\n"})}),"\n",(0,o.jsxs)(n.p,{children:["A few things to keep in mind when developing in the ",(0,o.jsx)(n.code,{children:"mongodb-rag-ingest"})," project:"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["You ",(0,o.jsx)(n.strong,{children:"must"})," recompile the ",(0,o.jsx)(n.code,{children:"mongodb-rag-ingest"})," project with ",(0,o.jsx)(n.code,{children:"npm run build"})," before running it\nfrom the CLI for changes to take effect. Therefore, when testing CLI commands locally,\nit can be convenient to run compilation and the command as a one-liner:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:" npm run build && node . <command> <options>\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["You must also recompile ",(0,o.jsx)(n.code,{children:"mongodb-rag-core"})," with ",(0,o.jsx)(n.code,{children:"npm run build"})," every time you make\nchanges to it for the changes to be accessible to ",(0,o.jsx)(n.code,{children:"mongodb-rag-ingest"})," or any other projects that\ndepend on it."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"cd ../mongodb-rag-core\nnpm run build\ncd ../ingest\n# do stuff\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"add-commands",children:"Add Commands"}),"\n",(0,o.jsxs)(n.p,{children:["Add commands to ",(0,o.jsx)(n.code,{children:"src/commands/"}),". The CLI automatically picks up any non-test .ts\nfile that default-exports a ",(0,o.jsx)(n.code,{children:"yargs.CommandModule"}),". See existing commands for\nexample."]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>d});var o=t(67294);const s={},a=o.createContext(s);function d(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);
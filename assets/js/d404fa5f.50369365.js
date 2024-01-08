"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4007],{51482:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>l});var o=n(85893),a=n(11151);const c={},s="MongoDB & Atlas Vector Search",r={id:"mongodb",title:"MongoDB & Atlas Vector Search",description:"The MongoDB Chatbot Framework uses MongoDB Atlas as its data layer.",source:"@site/docs/mongodb.md",sourceDirName:".",slug:"/mongodb",permalink:"/chatbot/mongodb",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb/chatbot/tree/main/docs/docs/mongodb.md",tags:[],version:"current",frontMatter:{},sidebar:"main",previous:{title:"Quick Start",permalink:"/chatbot/quick-start"},next:{title:"Configure the Ingest CLI",permalink:"/chatbot/ingest/configure"}},d={},l=[{value:"Set up",id:"set-up",level:2},{value:"1. Create a MongoDB Atlas Cluster",id:"1-create-a-mongodb-atlas-cluster",level:3},{value:"2. Create Database",id:"2-create-database",level:3},{value:"3. Create Atlas Vector Search Index (required for RAG)",id:"3-create-atlas-vector-search-index-required-for-rag",level:3},{value:"4. Create Other Database Indexes (optional)",id:"4-create-other-database-indexes-optional",level:3},{value:"Database Schema",id:"database-schema",level:2},{value:"<code>pages</code> Collection",id:"pages-collection",level:3},{value:"<code>embedded_content</code> Collection",id:"embedded_content-collection",level:3},{value:"<code>ingest_meta</code> Collection",id:"ingest_meta-collection",level:3},{value:"<code>conversations</code> Collection",id:"conversations-collection",level:3}];function i(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"mongodb--atlas-vector-search",children:"MongoDB & Atlas Vector Search"}),"\n",(0,o.jsx)(t.p,{children:"The MongoDB Chatbot Framework uses MongoDB Atlas as its data layer."}),"\n",(0,o.jsx)(t.p,{children:"This page explains how to set up MongoDB Atlas and Atlas Vector Search for use with the MongoDB Chatbot Framework, and what is stored in all the collections."}),"\n",(0,o.jsx)(t.h2,{id:"set-up",children:"Set up"}),"\n",(0,o.jsx)(t.h3,{id:"1-create-a-mongodb-atlas-cluster",children:"1. Create a MongoDB Atlas Cluster"}),"\n",(0,o.jsxs)(t.p,{children:["To create a MongoDB Atlas cluster, follow the instructions in the ",(0,o.jsx)(t.a,{href:"https://mongodb.com/docs/atlas/getting-started/",children:"MongoDB Atlas documentation"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"2-create-database",children:"2. Create Database"}),"\n",(0,o.jsx)(t.p,{children:"By convention, we keep all data in the same MongoDB database."}),"\n",(0,o.jsx)(t.p,{children:"However, you could theoretically use separate databases for collections, if you want to."}),"\n",(0,o.jsx)(t.p,{children:"You can give the database any name you want.\nYou pass the name as a variable throughout the RAG framework."}),"\n",(0,o.jsx)(t.h3,{id:"3-create-atlas-vector-search-index-required-for-rag",children:"3. Create Atlas Vector Search Index (required for RAG)"}),"\n",(0,o.jsx)(t.p,{children:"If you're using the Data Ingest CLI and Chatbot server\nto perform retrieval augmented generation (RAG),\nyou must create an Atlas Vector Search index."}),"\n",(0,o.jsxs)(t.p,{children:["In your database create a collection called ",(0,o.jsx)(t.code,{children:"embedded_content"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["Then, create the following Atlas Vector Search index on the ",(0,o.jsx)(t.code,{children:"embedded_content"})," collection:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'{\n  "fields": [\n    {\n      // Whatever the dimensionality of your embeddings is\n      "numDimensions": "<embedding length, e.g. 1536>",\n      "path": "embedding",\n      "similarity": "cosine",\n      "type": "vector"\n    },\n    // Any fields you want to filter on\n    // {\n    //   "path": "sourceName",\n    //   "type": "filter"\n    // }\n  ]\n}\n'})}),"\n",(0,o.jsxs)(t.p,{children:["To learn how to create an Atlas Vector Search Index, refer to\n",(0,o.jsx)(t.a,{href:"https://www.mongodb.com/docs/atlas/atlas-search/field-types/knn-vector/",children:"How to Index Vector Embeddings for Vector Search"}),"\nin the MongoDB Atlas documentation."]}),"\n",(0,o.jsx)(t.h3,{id:"4-create-other-database-indexes-optional",children:"4. Create Other Database Indexes (optional)"}),"\n",(0,o.jsx)(t.p,{children:"You don't need to create these indexes, to have a working application,\nbut they greatly improve data ingest performance."}),"\n",(0,o.jsxs)(t.p,{children:["On the ",(0,o.jsx)(t.code,{children:"pages"})," collection:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"{ sourceName: 1, url: 1 },\n"})}),"\n",(0,o.jsxs)(t.p,{children:["On the ",(0,o.jsx)(t.code,{children:"embedded_content"})," collection:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"// Note that the `embedding` field is indexed separately using Atlas Vector Search.\n{ sourceName: 1, url: 1 },\n"})}),"\n",(0,o.jsxs)(t.p,{children:["For more information on how to create MongoDB indexes, refer to ",(0,o.jsx)(t.a,{href:"https://www.mongodb.com/docs/manual/core/indexes/create-index/",children:"Create an Index"})," in the MongoDB Server documentation."]}),"\n",(0,o.jsx)(t.h2,{id:"database-schema",children:"Database Schema"}),"\n",(0,o.jsx)(t.p,{children:"It has the following collections:"}),"\n",(0,o.jsxs)(t.h3,{id:"pages-collection",children:[(0,o.jsx)(t.code,{children:"pages"})," Collection"]}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"pages"})," collection holds the plain text version of the content that is later chunked and embedded."]}),"\n",(0,o.jsxs)(t.p,{children:["Documents in the ",(0,o.jsx)(t.code,{children:"pages"})," collection follow the ",(0,o.jsx)(t.a,{href:"/chatbot/reference/core/modules#persistedpage",children:(0,o.jsx)(t.code,{children:"PersistedPage"})})," schema."]}),"\n",(0,o.jsxs)(t.h3,{id:"embedded_content-collection",children:[(0,o.jsx)(t.code,{children:"embedded_content"})," Collection"]}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"embedded_content"})," collection holds the content that is queried by Atlas Vector Search.\nIt is generated with the ingest CLI",(0,o.jsx)(t.code,{children:"embed"}),"command from the data in the",(0,o.jsx)(t.code,{children:"pages"})," collection."]}),"\n",(0,o.jsxs)(t.p,{children:["Documents in the ",(0,o.jsx)(t.code,{children:"embedded_content"})," collection follow the ",(0,o.jsx)(t.a,{href:"/chatbot/reference/core/interfaces/EmbeddedContent",children:(0,o.jsx)(t.code,{children:"EmbeddedContent"})})," schema."]}),"\n",(0,o.jsxs)(t.h3,{id:"ingest_meta-collection",children:[(0,o.jsx)(t.code,{children:"ingest_meta"})," Collection"]}),"\n",(0,o.jsxs)(t.p,{children:["Stores metadata related to the ingest CLI. Currently, this a singleton collection\nthat stores one document related to the ingest CLI's ",(0,o.jsx)(t.code,{children:"all"})," command."]}),"\n",(0,o.jsxs)(t.p,{children:["Documents in the ",(0,o.jsx)(t.code,{children:"ingest_meta"})," collection follow the ",(0,o.jsx)(t.a,{href:"/chatbot/reference/ingest/modules/#ingestmetaentry",children:(0,o.jsx)(t.code,{children:"IngestMetaEntry"})})," schema."]}),"\n",(0,o.jsxs)(t.h3,{id:"conversations-collection",children:[(0,o.jsx)(t.code,{children:"conversations"})," Collection"]}),"\n",(0,o.jsx)(t.p,{children:"Stores user conversations with the chatbot from the chat server."}),"\n",(0,o.jsxs)(t.p,{children:["Documents in the ",(0,o.jsx)(t.code,{children:"conversations"})," collection follow the ",(0,o.jsx)(t.a,{href:"/chatbot/reference/server/interfaces/Conversation",children:(0,o.jsx)(t.code,{children:"Conversation"})})," schema."]})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>s});var o=n(67294);const a={},c=o.createContext(a);function s(e){const t=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(c.Provider,{value:t},e.children)}}}]);
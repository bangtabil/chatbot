"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6242],{9530:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var t=n(85893),o=n(11151);const r={},a="Manage Conversations",i={id:"server/conversations",title:"Manage Conversations",description:"This guide explains how the MongoDB Chatbot Server manages conversations, and the different",source:"@site/docs/server/conversations.md",sourceDirName:"server",slug:"/server/conversations",permalink:"/chatbot/server/conversations",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb/chatbot/tree/main/docs/docs/server/conversations.md",tags:[],version:"current",frontMatter:{},sidebar:"main",previous:{title:"Configure the Chatbot Server",permalink:"/chatbot/server/configure"},next:{title:"Generate User Message",permalink:"/chatbot/server/user-message"}},d={},c=[{value:"Endpoints",id:"endpoints",level:2},{value:"Security",id:"security",level:2},{value:"Expose the Conversations Endpoints in Your App",id:"expose-the-conversations-endpoints-in-your-app",level:2},{value:"Add Message Flow",id:"add-message-flow",level:2}];function h(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",mermaid:"mermaid",ol:"ol",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"manage-conversations",children:"Manage Conversations"}),"\n",(0,t.jsx)(s.p,{children:"This guide explains how the MongoDB Chatbot Server manages conversations, and the different\npoints where you can customize its behavior."}),"\n",(0,t.jsx)(s.h2,{id:"endpoints",children:"Endpoints"}),"\n",(0,t.jsx)(s.p,{children:"The server has the following endpoints:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"POST /conversations/"})," creates a new conversation. You must create a\nconversation before you can send messages to the chatbot."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"POST /conversations/:conversationId/messages"})," sends a message to the chatbot,\nand gets a response back."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"GET /conversations/:conversationId"})," gets a conversation in its current state."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"POST /conversations/:conversationId/messages/:messageId/rating"})," rates an\nassistant message in the conversation."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"POST /conversations/:conversationId/messages/:messageId/comment"})," adds a user\ncomment to an assistant message in the conversation."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["For more information on these endpoints, refer to the ",(0,t.jsx)(s.a,{href:"openapi",children:"API Specification"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"security",children:"Security"}),"\n",(0,t.jsx)(s.p,{children:"If you do not add custom middleware that handles authentication/authorization,\na malicious actor who gets a conversation ID can modify the conversation.\nYou can also add custom middleware to block requests to endpoints if you do not need them in your app."}),"\n",(0,t.jsxs)(s.p,{children:["For more information about securing your server with custom middleware, refer to the ",(0,t.jsx)(s.a,{href:"/chatbot/server/custom-logic#request-validation",children:"custom middleware request validation"})," documentation."]}),"\n",(0,t.jsx)(s.h2,{id:"expose-the-conversations-endpoints-in-your-app",children:"Expose the Conversations Endpoints in Your App"}),"\n",(0,t.jsxs)(s.p,{children:["The MongoDB Chatbot Server exposes the conversation endpoints at the ",(0,t.jsx)(s.code,{children:"/conversations"})," path.\nThere are two ways that you can expose these endpoints in your app:"]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["Use the ",(0,t.jsx)(s.a,{href:"/chatbot/reference/server/modules#makeapp",children:(0,t.jsx)(s.code,{children:"makeApp()"})}),"\nfunction to create an Express.js app. This is the easiest way to get started\nand contains everything you need out of the box."]}),"\n",(0,t.jsxs)(s.li,{children:["Use the ",(0,t.jsx)(s.a,{href:"/chatbot/reference/server/modules#makeconversationsrouter",children:(0,t.jsx)(s.code,{children:"makeConversationsRouter()"})})," function to create an Express.js ",(0,t.jsx)(s.a,{href:"https://expressjs.com/en/guide/routing.html",children:(0,t.jsx)(s.code,{children:"Router"})})," that you can add to an Express app.\nThis is useful if you want to expose the conversation endpoints within a larger\nExpress.js app or customize your server beyond what's possible with ",(0,t.jsx)(s.code,{children:"makeApp()"}),"."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"add-message-flow",children:"Add Message Flow"}),"\n",(0,t.jsxs)(s.p,{children:["When you add a message to a conversation with the ",(0,t.jsx)(s.code,{children:"POST /conversations/:conversationId/messages"})," endpoint, the following happens on the server:"]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["(Optional) Custom Express.js middleware runs. To learn more,\nrefer to the ",(0,t.jsx)(s.a,{href:"./custom-logic#middleware",children:"Custom Middleware"})," guide."]}),"\n",(0,t.jsxs)(s.li,{children:["(Optional) Get custom data to add to the user message. To learn more,\nrefer to the ",(0,t.jsx)(s.a,{href:"./custom-logic#add-custom-data-to-messages",children:"Custom Data"})," guide."]}),"\n",(0,t.jsx)(s.li,{children:"Load conversation from the database."}),"\n",(0,t.jsxs)(s.li,{children:["Generate the user message. You can use this step to perform\nretrieval augmented generation (RAG), or other preprocessing of the user message.\nTo learn more about generating the user message,\nrefer to the ",(0,t.jsx)(s.a,{href:"/chatbot/server/user-message",children:"Generate User Message"})," guide.","\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["To perform retrieval augmented generation (RAG), refer to the ",(0,t.jsx)(s.a,{href:"/chatbot/server/rag/",children:"RAG"})," guide."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.li,{children:"The user prompt is used to generate a chatbot response."}),"\n",(0,t.jsx)(s.li,{children:"The generated response is returned to the user."}),"\n",(0,t.jsx)(s.li,{children:"The conversation is updated with the new user and assistant messages."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Here's a flow chart of this process:"}),"\n",(0,t.jsx)(s.mermaid,{value:"graph TD\n    SEND[Send User Message] --\x3e MID[Optional: Run Custom Middleware]\n    MID --\x3e CD[Optional: Add Custom Data]\n    CD --\x3e LOAD[Load Conversation from DB]\n    LOAD --\x3e GUM[Generate User Message]\n    GUM --\x3e|Reject Message| REJ[Return Static Response to User]\n    GUM --\x3e LLM[Generate Chatbot Response with LLM]\n    LLM --\x3e RES[Return Generated Response to User]\n    RES --\x3e UPDATE[Update Conversation in DB with New Messages]\n    REJ --\x3e UPDATE"})]})}function l(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>i,a:()=>a});var t=n(67294);const o={},r=t.createContext(o);function a(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);
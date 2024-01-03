"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7423],{90374:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var s=r(85893),t=r(11151);const o={id:"ConversationsRouterParams",title:"Interface: ConversationsRouterParams",sidebar_label:"ConversationsRouterParams",sidebar_position:0,custom_edit_url:null},a=void 0,i={id:"reference/server/interfaces/ConversationsRouterParams",title:"Interface: ConversationsRouterParams",description:"Configuration for the /conversations/* routes.",source:"@site/docs/reference/server/interfaces/ConversationsRouterParams.md",sourceDirName:"reference/server/interfaces",slug:"/reference/server/interfaces/ConversationsRouterParams",permalink:"/chatbot/reference/server/interfaces/ConversationsRouterParams",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ConversationsRouterParams",title:"Interface: ConversationsRouterParams",sidebar_label:"ConversationsRouterParams",sidebar_position:0,custom_edit_url:null},sidebar:"main",previous:{title:"ConversationsRouterLocals",permalink:"/chatbot/reference/server/interfaces/ConversationsRouterLocals"},next:{title:"ConversationsService",permalink:"/chatbot/reference/server/interfaces/ConversationsService"}},c={},d=[{value:"Properties",id:"properties",level:2},{value:"addMessageToConversationCustomData",id:"addmessagetoconversationcustomdata",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"conversations",id:"conversations",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"createConversationCustomData",id:"createconversationcustomdata",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"dataStreamer",id:"datastreamer",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"generateUserPrompt",id:"generateuserprompt",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"llm",id:"llm",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"maxInputLengthCharacters",id:"maxinputlengthcharacters",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"maxUserMessagesInConversation",id:"maxusermessagesinconversation",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"middleware",id:"middleware",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"rateLimitConfig",id:"ratelimitconfig",level:3},{value:"Defined in",id:"defined-in-9",level:4}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Configuration for the /conversations/* routes."}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(n.h3,{id:"addmessagetoconversationcustomdata",children:"addMessageToConversationCustomData"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.code,{children:"Optional"})," ",(0,s.jsx)(n.strong,{children:"addMessageToConversationCustomData"}),": ",(0,s.jsx)(n.a,{href:"/chatbot/reference/server/modules#addcustomdatafunc",children:(0,s.jsx)(n.code,{children:"AddCustomDataFunc"})})]}),"\n",(0,s.jsxs)(n.p,{children:["Function that takes the request + response and returns any custom data you want to include\nin the ",(0,s.jsx)(n.a,{href:"/chatbot/reference/server/modules#message",children:"Message"})," persisted to the database.\nFor example, you might want to store details about what LLM was used to generate the response.\nThe custom data is persisted to the database with the ",(0,s.jsx)(n.code,{children:"Message"})," in the\nMessage.customData field inside of the ",(0,s.jsx)(n.a,{href:"/chatbot/reference/server/interfaces/Conversation#messages",children:"Conversation.messages"})," array."]}),"\n",(0,s.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/mongodben/chatbot/blob/9af41d7/packages/mongodb-chatbot-server/src/routes/conversations/conversationsRouter.ts#L154",children:"packages/mongodb-chatbot-server/src/routes/conversations/conversationsRouter.ts:154"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"conversations",children:"conversations"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"conversations"}),": ",(0,s.jsx)(n.a,{href:"/chatbot/reference/server/interfaces/ConversationsService",children:(0,s.jsx)(n.code,{children:"ConversationsService"})})]}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/mongodben/chatbot/blob/9af41d7/packages/mongodb-chatbot-server/src/routes/conversations/conversationsRouter.ts#L97",children:"packages/mongodb-chatbot-server/src/routes/conversations/conversationsRouter.ts:97"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"createconversationcustomdata",children:"createConversationCustomData"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.code,{children:"Optional"})," ",(0,s.jsx)(n.strong,{children:"createConversationCustomData"}),": ",(0,s.jsx)(n.a,{href:"/chatbot/reference/server/modules#addcustomdatafunc",children:(0,s.jsx)(n.code,{children:"AddCustomDataFunc"})})]}),"\n",(0,s.jsxs)(n.p,{children:["Function that takes the request + response and returns any custom data you want to include\nin the ",(0,s.jsx)(n.a,{href:"/chatbot/reference/server/interfaces/Conversation",children:"Conversation"})," persisted to the database.\nFor example, you might want to store the user's email address with the conversation.\nThe custom data is persisted to the database with the Conversation in the\n",(0,s.jsx)(n.a,{href:"/chatbot/reference/server/interfaces/Conversation#customdata",children:"Conversation.customData"})," field."]}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/mongodben/chatbot/blob/9af41d7/packages/mongodb-chatbot-server/src/routes/conversations/conversationsRouter.ts#L145",children:"packages/mongodb-chatbot-server/src/routes/conversations/conversationsRouter.ts:145"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"datastreamer",children:"dataStreamer"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.code,{children:"Optional"})," ",(0,s.jsx)(n.strong,{children:"dataStreamer"}),": ",(0,s.jsx)(n.a,{href:"/chatbot/reference/server/interfaces/DataStreamer",children:(0,s.jsx)(n.code,{children:"DataStreamer"})})]}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/mongodben/chatbot/blob/9af41d7/packages/mongodb-chatbot-server/src/routes/conversations/conversationsRouter.ts#L96",children:"packages/mongodb-chatbot-server/src/routes/conversations/conversationsRouter.ts:96"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"generateuserprompt",children:"generateUserPrompt"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.code,{children:"Optional"})," ",(0,s.jsx)(n.strong,{children:"generateUserPrompt"}),": ",(0,s.jsx)(n.a,{href:"/chatbot/reference/server/modules#generateuserpromptfunc",children:(0,s.jsx)(n.code,{children:"GenerateUserPromptFunc"})})]}),"\n",(0,s.jsxs)(n.p,{children:["Function to generate the user prompt sent to the ",(0,s.jsx)(n.a,{href:"/chatbot/reference/server/interfaces/ChatLlm",children:"ChatLlm"}),".\nYou can perform any preprocessing of the user's message\nincluding retrieval augmented generation here."]}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/mongodben/chatbot/blob/9af41d7/packages/mongodb-chatbot-server/src/routes/conversations/conversationsRouter.ts#L103",children:"packages/mongodb-chatbot-server/src/routes/conversations/conversationsRouter.ts:103"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"llm",children:"llm"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"llm"}),": ",(0,s.jsx)(n.a,{href:"/chatbot/reference/server/interfaces/ChatLlm",children:(0,s.jsx)(n.code,{children:"ChatLlm"})})]}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/mongodben/chatbot/blob/9af41d7/packages/mongodb-chatbot-server/src/routes/conversations/conversationsRouter.ts#L95",children:"packages/mongodb-chatbot-server/src/routes/conversations/conversationsRouter.ts:95"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"maxinputlengthcharacters",children:"maxInputLengthCharacters"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.code,{children:"Optional"})," ",(0,s.jsx)(n.strong,{children:"maxInputLengthCharacters"}),": ",(0,s.jsx)(n.code,{children:"number"})]}),"\n",(0,s.jsx)(n.p,{children:"Maximum number of characters in user input.\nServer returns 400 error if user input is longer than this."}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/mongodben/chatbot/blob/9af41d7/packages/mongodb-chatbot-server/src/routes/conversations/conversationsRouter.ts#L109",children:"packages/mongodb-chatbot-server/src/routes/conversations/conversationsRouter.ts:109"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"maxusermessagesinconversation",children:"maxUserMessagesInConversation"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.code,{children:"Optional"})," ",(0,s.jsx)(n.strong,{children:"maxUserMessagesInConversation"}),": ",(0,s.jsx)(n.code,{children:"number"})]}),"\n",(0,s.jsx)(n.p,{children:"Maximum number of user-sent messages in a conversation.\nServer returns 400 error if user tries to add a message to a conversation\nthat has this many messages."}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-7",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/mongodben/chatbot/blob/9af41d7/packages/mongodb-chatbot-server/src/routes/conversations/conversationsRouter.ts#L116",children:"packages/mongodb-chatbot-server/src/routes/conversations/conversationsRouter.ts:116"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"middleware",children:"middleware"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.code,{children:"Optional"})," ",(0,s.jsx)(n.strong,{children:"middleware"}),": ",(0,s.jsx)(n.a,{href:"/chatbot/reference/server/modules#conversationsmiddleware",children:(0,s.jsx)(n.code,{children:"ConversationsMiddleware"})}),"[]"]}),"\n",(0,s.jsx)(n.p,{children:"Middleware to put in front of all the routes in the conversationsRouter.\nYou can use this to do things like authentication, data validation, etc."}),"\n",(0,s.jsx)(n.p,{children:"If you want the middleware to run only on certain routes,\nyou can add conditional logic inside the middleware. For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'const someMiddleware: ConversationsMiddleware = (req, res, next) => {\n  if (req.path === "/conversations") {\n    // Do something\n  }\n  next();\n}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-8",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/mongodben/chatbot/blob/9af41d7/packages/mongodb-chatbot-server/src/routes/conversations/conversationsRouter.ts#L136",children:"packages/mongodb-chatbot-server/src/routes/conversations/conversationsRouter.ts:136"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"ratelimitconfig",children:"rateLimitConfig"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.code,{children:"Optional"})," ",(0,s.jsx)(n.strong,{children:"rateLimitConfig"}),": ",(0,s.jsx)(n.a,{href:"/chatbot/reference/server/interfaces/ConversationsRateLimitConfig",children:(0,s.jsx)(n.code,{children:"ConversationsRateLimitConfig"})})]}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-9",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/mongodben/chatbot/blob/9af41d7/packages/mongodb-chatbot-server/src/routes/conversations/conversationsRouter.ts#L117",children:"packages/mongodb-chatbot-server/src/routes/conversations/conversationsRouter.ts:117"})})]})}function l(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>a});var s=r(67294);const t={},o=s.createContext(t);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);
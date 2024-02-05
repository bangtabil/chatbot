"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4561],{41837:e=>{e.exports=JSON.parse('{"url":"redocusaurus/plugin-redoc-0.yaml","themeId":"theme-redoc","isSpecFile":true,"spec":{"openapi":"3.1.0","info":{"title":"MongoDB RAG Server API","version":"1.0.0","license":{"name":"Apache 2.0","url":"https://github.com/mongodb/chatbot/blob/main/LICENSE"},"description":"The MongoDB RAG Server API is a RESTful API that allows you to\\ncreate and manage conversations.\\nThe API is designed to be used by the MongoDB RAG UI frontend,\\nbut can also be used by other clients.\\n\\n**NOTE:** The default configuration requires capturing user IP address\\nand a header `Origin: some_string`. You can override this.\\nRefer to the server configuration documentation for more information.\\n"},"servers":[{"url":"http://<Your Server Base URL>/api/v1"}],"security":[{"ApiKeyAuth":[]}],"paths":{"/conversations":{"post":{"operationId":"createConversation","summary":"Start new conversation","responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Conversation"}}}},"400":{"$ref":"#/components/responses/BadRequest"},"500":{"$ref":"#/components/responses/InternalServerError"}}}},"/conversations/{conversationId}/messages":{"post":{"operationId":"addMessage","summary":"Add message to the conversation","description":"Add a message to the conversation and get a response back from chatbot.","parameters":[{"$ref":"#/components/parameters/conversationId"},{"name":"stream","in":"query","required":false,"schema":{"type":"boolean","default":false},"description":"If `true`, the response will be streamed to the client. This is useful for long-running conversations.\\n"}],"requestBody":{"content":{"application/json":{"schema":{"type":"object","required":["message"],"properties":{"message":{"type":"string","format":"markdown","description":"Markdown-formatted message from the user.\\n"}}}}}},"responses":{"200":{"x-summary":"OK","description":"If you set the query parameter `?stream=false`, the server responds with `application/json`.\\n\\nIf you set the query parameter `?stream=true`, the server responds with `text/event-stream`. The server returns a [server-sent event](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#event_stream_format) stream.\\n(Note that the server does not use [named events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#named_events).)\\nThe below schema for `text/event-stream` corresponds to contents of the event\'s `data` field. For example:\\n\\n```txt\\ndata: {\\"type\\": \\"delta\\", \\"data\\": \\"Starting \\"}\\n\\ndata: {\\"type\\": \\"delta\\", \\"data\\": \\"to \\"}\\n\\ndata: {\\"type\\": \\"delta\\", \\"data\\": \\"stream \\"}\\n\\ndata: {\\"type\\": \\"references\\", \\"data\\": [{\\"url\\": \\"https://mongodb.com/docs/atlas/getting-started\\", \\"title\\": \\"Get Started with MongoDB Atlas\\"}]}\\n\\ndata: {\\"type\\": \\"finished\\", \\"data\\": \\"someMessageId\\"}\\n```\\n","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Message"}},"text/event-stream":{"schema":{"allOf":[{"$ref":"#/components/schemas/MessageResponseStreamEvent"}],"examples":[{"summary":"Example of a StreamEventDelta","value":{"type":"delta","data":"Updated event information or specific content changes."}}]}}}},"400":{"$ref":"#/components/responses/BadRequest"},"404":{"$ref":"#/components/responses/NotFound"},"500":{"$ref":"#/components/responses/InternalServerError"}}}},"/conversations/{conversationId}":{"get":{"operationId":"getConversation","summary":"Get a conversation","parameters":[{"$ref":"#/components/parameters/conversationId"}],"responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Conversation"}}}},"400":{"$ref":"#/components/responses/BadRequest"},"404":{"$ref":"#/components/responses/NotFound"},"500":{"$ref":"#/components/responses/InternalServerError"}}}},"/conversations/{conversationId}/messages/{messageId}/rating":{"post":{"operationId":"rateMessage","summary":"Rate message","parameters":[{"$ref":"#/components/parameters/conversationId"},{"$ref":"#/components/parameters/messageId"}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/MessageRating"}}}},"responses":{"204":{"description":"Rating Saved"},"400":{"$ref":"#/components/responses/BadRequest"},"404":{"$ref":"#/components/responses/NotFound"},"500":{"$ref":"#/components/responses/InternalServerError"}}}},"/conversations/{conversationId}/messages/{messageId}/comment":{"post":{"operationId":"commentMessage","summary":"Add comment to assistant message","description":"Add a comment to an assistant message that clarifies a thumbs up/down rating.\\n\\nYou can only rate an an assistant message that has a thumbs up/down rating. You can only rate a message once. The server returns a `400` error response if the message is not from the assistant, is not rated, or has already been rated.\\n","parameters":[{"$ref":"#/components/parameters/conversationId"},{"$ref":"#/components/parameters/messageId"}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/MessageComment"}}}},"responses":{"204":{"description":"Comment Saved"},"400":{"$ref":"#/components/responses/BadRequest"},"404":{"$ref":"#/components/responses/NotFound"},"500":{"$ref":"#/components/responses/InternalServerError"}}}}},"components":{"securitySchemes":{"ApiKeyAuth":{"type":"apiKey","in":"header","name":"X-API-KEY"}},"responses":{"BadRequest":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorResponse"}}}},"NotFound":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorResponse"}}}},"InternalServerError":{"description":"Internal Server Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorResponse"}}}}},"schemas":{"Conversation":{"type":"object","required":["_id","messages","createdAt"],"properties":{"_id":{"type":"string","description":"The unique identifier for a conversation."},"messages":{"type":"array","items":{"$ref":"#/components/schemas/Message"}},"createdAt":{"type":"integer","description":"Unix timestamp for when the conversation was created."}}},"Message":{"type":"object","required":["id","role","content","createdAt"],"properties":{"id":{"type":"string","description":"The unique identifier for a message."},"role":{"type":"string","enum":["user","assistant","system"]},"content":{"type":"string","format":"markdown","description":"Markdown-formatted response to user\'s chat message in the context\\nof the conversation.\\n"},"rating":{"type":"boolean","description":"Set to `true` if the user liked the response, `false` if the user didn\'t like the response.\\nNo value if user didn\'t rate the response.\\n\\nNote that only messages with `role: \\"assistant\\"` can be rated.\\n"},"userComment":{"type":"string","description":"Comment from the user clarifying why they liked or disliked\\nthe message. No value if user didn\'t comment on the response.\\n\\nNote that only messages with `role: \\"assistant\\"` can be commented on.\\n"},"createdAt":{"type":"integer","description":"Unix timestamp for when the message was sent.\\n"},"references":{"$ref":"#/components/schemas/References"}}},"References":{"type":"array","description":"List of references to external resources that are relevant\\nto the message. For example, if the message is a response to\\na user\'s question about how to connect, the list of\\nreferences could include links to the documentation, dev\\ncenter articles, or a video lesson on MongoDB University.\\n","items":{"type":"object","required":["title","url"],"properties":{"title":{"type":"string","description":"Title of the reference. This is what shows up in\\nrendered links. For example, \\"How to connect to\\nMongoDB Atlas\\".\\n"},"url":{"type":"string","format":"uri","description":"URL to the reference. For example, \\"https://mongodb.com/docs/atlas/getting-started\\".\\n"}}}},"MessageResponseStreamEvent":{"oneOf":[{"$ref":"#/components/schemas/StreamEventDelta"},{"$ref":"#/components/schemas/StreamEventReferences"},{"$ref":"#/components/schemas/StreamEventFinished"}],"description":"A server-sent event data payload for a streaming message."},"StreamEventDelta":{"description":"Assistant response text.","type":"object","properties":{"type":{"type":"string","enum":["delta"]},"data":{"description":"Piece of content","type":"string"}}},"StreamEventReferences":{"description":"References to include with the answer.","type":"object","properties":{"type":{"type":"string","enum":["references"]},"data":{"$ref":"#/components/schemas/References"}}},"StreamEventFinished":{"description":"Last message when streaming has finished.","type":"object","properties":{"type":{"type":"string","enum":["finished"]},"data":{"description":"Message ID.","type":"string"}}},"MessageComment":{"type":"object","properties":{"comment":{"type":"string","description":"Comment from the user clarifying why they liked or disliked\\nthe message.\\n"}}},"MessageRating":{"type":"object","properties":{"rating":{"type":"boolean","description":"Set to `true` if the user liked the message, `false` if the user didn\'t like the message.\\n"}}},"ErrorResponse":{"type":"object"}},"parameters":{"conversationId":{"name":"conversationId","required":true,"in":"path","schema":{"type":"string"},"description":"The unique identifier for a conversation."},"messageId":{"name":"messageId","required":true,"in":"path","schema":{"type":"string"},"description":"The unique identifier for a message."}}}}}')}}]);
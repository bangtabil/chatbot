import { WithScore, EmbeddedContent, EmbeddedContentStore } from "chat-core";

/**
  Modify the vector search results to add, elevate, or mutate search results
  after the search has been performed.
 */
export interface SearchBooster {
  shouldBoost: ({ text }: { text: string }) => Promise<boolean>;
  boost: ({
    existingResults,
    embedding,
    store,
  }: {
    embedding: number[];
    existingResults: WithScore<EmbeddedContent>[];
    store: EmbeddedContentStore;
  }) => Promise<WithScore<EmbeddedContent>[]>;
}

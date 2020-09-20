/**
 * https://docs.github.com/en/rest/reference/rate-limit
 */
export type RateLimit = {
  "resources": {
    "core": {
      "limit": number;
      "remaining": number;
      "reset": number;
    };
    "search": {
      "limit": number;
      "remaining": number;
      "reset": number;
    };
    "graphql": {
      "limit": number;
      "remaining": number;
      "reset": number;
    };
    "integration_manifest": {
      "limit": number;
      "remaining": number;
      "reset": number;
    }
  },
  "rate": {
    "limit": number;
    "remaining": number;
    "reset": number;
  };
};

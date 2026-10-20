import type { PublicClientOptions, PublicRequest, PublicResponse } from "../../ion-core/src/types.js";

export function createPublicClient(options: PublicClientOptions = {}) {
  return {
    endpoint: options.endpoint ?? "/api/public-endpoint",
    async submit(request: PublicRequest): Promise<PublicResponse> {
      return {
        requestId: request.id ?? "sample-request",
        status: "unavailable",
        message: "No remote service is configured."
      };
    }
  };
}
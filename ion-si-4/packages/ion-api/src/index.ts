import type { PublicRequest, PublicResponse } from "../../ion-core/src/types.js";

export const PUBLIC_ENDPOINT = "/api/public-endpoint" as const;

export function handlePublicRequest(input: PublicRequest): PublicResponse {
  return {
    requestId: input.id ?? "sample-request",
    status: "unavailable",
    message: "This public sample does not connect to a service."
  };
}
export interface PublicRequest {
  id?: string;
  input: string;
}

export interface PublicResponse {
  requestId: string;
  status: "accepted" | "unavailable";
  message: string;
}

export interface PublicClientOptions {
  endpoint?: "/api/public-endpoint";
}
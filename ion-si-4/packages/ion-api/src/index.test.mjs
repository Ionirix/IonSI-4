import test from "node:test";
import assert from "node:assert/strict";
import { handlePublicRequest, PUBLIC_ENDPOINT } from "./index.ts";

test("public API sample exposes a placeholder path and no-op handler", () => {
  assert.equal(PUBLIC_ENDPOINT, "/api/public-endpoint");
  assert.deepEqual(handlePublicRequest({ input: "sample" }), {
    requestId: "sample-request",
    status: "unavailable",
    message: "This public sample does not connect to a service."
  });
});
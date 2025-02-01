import {
  createStartAPIHandler,
  defaultAPIFileRouteHandler,
} from "@tanstack/start/api";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export default createStartAPIHandler(defaultAPIFileRouteHandler) as any;

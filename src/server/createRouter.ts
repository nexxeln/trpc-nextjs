import * as trpc from "@trpc/server";

import type { MyContextType } from "./context";

export function createRouter() {
  return trpc.router<MyContextType>();
}

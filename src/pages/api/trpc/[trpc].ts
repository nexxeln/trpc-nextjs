// pages/api/trpc/[trpc].ts
import { createNextApiHandler } from "@trpc/server/adapters/next";

import { appRouter } from "../../../server/routers/app";
import { createContext } from "../../../server/context";

export type AppRouter = typeof appRouter;

export default createNextApiHandler({
  router: appRouter,
  createContext,
  batching: {
    enabled: true,
  },
  onError({ error }) {
    if (error.code === "INTERNAL_SERVER_ERROR") {
      console.error("Something went wrong", error);
    }
  },
});

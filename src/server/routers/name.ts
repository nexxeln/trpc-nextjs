import { z } from "zod";

import { createRouter } from "../createRouter";

export const nameRouter = createRouter().query("getName", {
  input: z
    .object({
      name: z.string().nullish(),
    })
    .nullish(),
  resolve({ input }) {
    return { greeting: `Hello ${input?.name ?? "world"}!` };
  },
});

import { FreshContext, Handlers } from "$fresh/server.ts";
import axios from "npm:axios";

export type Videos = {};

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Videos[]>) => {
    const { userid } = ctx.params;

    const url = "https://videoapp-api.deno.dev/";
    try {
      const response = await axios.get<Videos[]>(url);
    } catch (error) {
      console.error(error);
    }
    return ctx.render();
  },
};

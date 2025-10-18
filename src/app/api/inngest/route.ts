import { inngestClient } from "@/inngest/client";
import { serve } from "inngest/next";
export const { GET, POST, PUT } = serve({
  client: inngestClient,
  functions: [],
});

import { createTRPCRouter, protectedProcedure } from "../init";
import prisma from "@/lib/db";
import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";
export const appRouter = createTRPCRouter({
  testAI: protectedProcedure.mutation(async ({}) => {
    const { text } = await generateText({
      model: openai("gpt-5"),
      prompt: "Write a vegetarian lasagna recipe for 4 people.",
    });
    return text;
  }),
  getWorkflows: protectedProcedure.query(({ ctx }) => {
    return prisma.workflow.findMany();
  }),
  createWorkflow: protectedProcedure.mutation(() => {
    return prisma.workflow.create({
      data: {
        name: "New Workflow",
      },
    });
  }),
});
// export type definition of API
export type AppRouter = typeof appRouter;

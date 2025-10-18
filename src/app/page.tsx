"use client";
import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Loader2Icon } from "lucide-react";
import { toast } from "sonner";

const Page = () => {
  const trpc = useTRPC();
  const { data } = useQuery(trpc.getWorkflows.queryOptions());
  const queryClient = useQueryClient();
  const create = useMutation(
    trpc.createWorkflow.mutationOptions({
      onSuccess: () => {
        queryClient.invalidateQueries(trpc.getWorkflows.queryOptions());
      },
      onError: (error) => {
        toast.error(error.message || "Something went wrong");
      },
    })
  );
  return (
    <div className="min-h-screen min-w-screen  flex item-center justify-center">
      <div className="flex flex-col gap-4 justify-center items-center p-4">
        <h1 className="text-4xl font-bold">Nodebase</h1>

        <div className="flex flex-col gap-2">
          {data?.map((workflow) => (
            <div key={workflow.id}>
              <h2 className="text-2xl font-bold">{workflow.name}</h2>
            </div>
          ))}
        </div>

        <Button size="lg" className="min-w-[200px]" disabled={create.isPending} onClick={() => create.mutate()}>
          {create.isPending ? (
            <Loader2Icon className="size-4 animate-spin" />
          ) : (
            "Create Workflow"
          )}
        </Button>
      </div>
    </div>
  );
};

export default Page;

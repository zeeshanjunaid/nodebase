"use client";
import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Loader2Icon } from "lucide-react";
import { toast } from "sonner";

const Page = () => {
  const trpc = useTRPC();

  const testAI = useMutation(
    trpc.testAI.mutationOptions({
      onSuccess: (data) => {
        toast.success(data);
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
          {testAI.error && (
            <p className="text-red-500">{testAI.error.message}</p>
          )}
          {testAI.data && <div className="text-lg text-gray-500 p-2 rounded-md max-w-3xl overflow-x-auto">{testAI.data}</div>}
        </div>

        <Button
          disabled={testAI.isPending}
          onClick={() => testAI.mutate()}
          size="lg"
          className="min-w-[200px]"
        >
          {testAI.isPending ? (
            <Loader2Icon className="size-4 animate-spin" />
          ) : (
            "Test AI"
          )}
        </Button>
      </div>
    </div>
  );
};

export default Page;

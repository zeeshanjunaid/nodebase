import { requireAuth } from "@/lib/auth-utils";

const Page = async () => {
  await requireAuth();
  return (
    <div className="min-h-screen min-w-screen  flex item-center justify-center">
      <h1 className="text-4xl font-bold">Nodebase</h1>
    </div>
  );
};

export default Page;

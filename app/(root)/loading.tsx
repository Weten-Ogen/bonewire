import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingPage() {
  return (
    <div className="w-full h-[85vh] flex justify-center items-center gap-6">
      <div className="flex flex-col gap-4">
        <Skeleton className="h-[48px] w-[275px]" />
        <Skeleton className="h-[98px] w-[350px]" />
        <Skeleton className="h-[50px] w-[150px]" />
        <Skeleton className="h-[40px] w-[300px]" />
      </div>
      <div>
        <Skeleton className="h-[420px] w-[420px]" />
      </div>
    </div>
  );
}

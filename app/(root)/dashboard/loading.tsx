import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingPage() {
  return (
    <div className="flex flex-col gap-2 md:gap-6 justify-start px-[2rem] md:px-[4rem] py-6">
      <Skeleton className="mt-2 w-[65%] md:w-[35%] h-[50px]" />
      <div>
        <Skeleton className="max-w-sm md:max-w-lg text-2xl font-bold  p-2 md:p-0" />
      </div>
      <div className="my-5">
        <Skeleton className="w-[85%] h-[50px] md:flex  p-2 md:py-2 md:px-0 " />
      </div>
      <div className="flex pl-6 gap-12 px-4 w-full">
        <Skeleton className="rounded-l w-[89px] h-[30px]" />
        <Skeleton className="rounded-l w-[89px] h-[30px]" />
        <Skeleton className="rounded-l w-[89px] h-[30px]" />
        <Skeleton className="rounded-l w-[89px] h-[30px]" />
        <Skeleton className="rounded-l w-[89px] h-[30px]" />
        <Skeleton className="rounded-l w-[89px] h-[30px]" />
      </div>
      <div>
        <div className="flex flex-wrap gap-6">
          <div className="flex flex-col gap-2">
            <Skeleton className="flex flex-col gap-1 items-center w-[260px] h-[350px] md:h-[500px] p-2">
              <Skeleton className="w-[85%] h-[55%] bg-slate-800" />
              <Skeleton className="w-[85%] h-[45px] bg-slate-800" />
              <Skeleton className="w-[85%] h-[45px] bg-slate-800" />
              <Skeleton className="w-[85%] h-[80px] bg-slate-800" />
              <Skeleton className="w-[85%] h-[50px] bg-slate-800" />
            </Skeleton>
          </div>
          <div className="flex flex-col gap-2">
            <Skeleton className="flex flex-col gap-1 items-center w-[260px] h-[350px] md:h-[500px] p-2">
              <Skeleton className="w-[85%] h-[55%] bg-slate-800" />
              <Skeleton className="w-[85%] h-[45px] bg-slate-800" />
              <Skeleton className="w-[85%] h-[45px] bg-slate-800" />
              <Skeleton className="w-[85%] h-[80px] bg-slate-800" />
              <Skeleton className="w-[85%] h-[50px] bg-slate-800" />
            </Skeleton>
          </div>
          <div className="flex flex-col gap-2">
            <Skeleton className="flex flex-col gap-1 items-center w-[260px] h-[350px] md:h-[500px] p-2">
              <Skeleton className="w-[85%] h-[55%] bg-slate-800" />
              <Skeleton className="w-[85%] h-[45px] bg-slate-800" />
              <Skeleton className="w-[85%] h-[45px] bg-slate-800" />
              <Skeleton className="w-[85%] h-[80px] bg-slate-800" />
              <Skeleton className="w-[85%] h-[50px] bg-slate-800" />
            </Skeleton>
          </div>
          <div className="flex flex-col gap-2">
            <Skeleton className="flex flex-col gap-1 items-center w-[260px] h-[350px] md:h-[500px] p-2">
              <Skeleton className="w-[85%] h-[55%] bg-slate-800" />
              <Skeleton className="w-[85%] h-[45px] bg-slate-800" />
              <Skeleton className="w-[85%] h-[45px] bg-slate-800" />
              <Skeleton className="w-[85%] h-[80px] bg-slate-800" />
              <Skeleton className="w-[85%] h-[50px] bg-slate-800" />
            </Skeleton>
          </div>
        </div>
      </div>
    </div>
  );
}

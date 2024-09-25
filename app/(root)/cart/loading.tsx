import { TypographyLarge } from "@/components/typography/large";
import { Skeleton } from "@/components/ui/skeleton";

export default  function LoadingPage() {
  return  <section className="flex flex-col gap-4 mt-5">
    <TypographyLarge content="Cart" className="text-xl text-center" />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-4">
      <div>
        <Skeleton className="h-[300px] w-[450px] flex flex-col gap-4">
          <Skeleton className="w-full bg-slate-800" />
          <div className="flex w-full px-4">
            <Skeleton className="w-[100px] h-[50px]  bg-slate-800" />
            <Skeleton className="w-[100px] h-[50px] bg-slate-800" />
          </div>
          <div className="flex w-full px-6">
            <Skeleton className="w-[75px] h-[30px]  bg-slate-800" />
            <Skeleton className="w-[75px] h-[30px] bg-slate-800" />
          </div>
        </Skeleton>
      </div>
    </div>
  </section>;
}

import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      // className={cn("animate-pulse rounded-md bg-primary/10", className)}
      className={cn("animate-pulse rounded-md bg-slate-500 shadow", className)}
      {...props}
    />
  );
}

export { Skeleton };

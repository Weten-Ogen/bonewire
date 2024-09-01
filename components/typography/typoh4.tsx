import { cn } from "@/lib/utils";

export function TypographyH4({className,content}:typo) {
    return (
      <h4 className={cn("scroll-m-20 text-xl font-semibold tracking-tight",className)}>
        {content}
      </h4>
    )
  }
  
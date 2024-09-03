import { cn } from "@/lib/utils";
import { typo } from "@/types/next";

export function TypographyH3({content,className}:typo) {
    return (
      <h3 className={cn("scroll-m-20 text-2xl font-semibold tracking-tight",className)}>
        {content}
      </h3>
    )
  }
  
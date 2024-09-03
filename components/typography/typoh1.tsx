import { cn } from "@/lib/utils";
import { typo } from "@/types/next";

export function TypographyH1({content,className}:typo) {
    return (
      <h1 
      className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",className)}>
        {content}
      </h1>
    )
  }
  
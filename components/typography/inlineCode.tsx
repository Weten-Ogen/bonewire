import { cn } from "@/lib/utils";
import { typo } from "@/types/next";

export function TypographyInlineCode({content,className}:typo) {
    return (
      <code className={cn("relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",className)}>
       {content}
      </code>
    )
  }
  
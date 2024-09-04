import { cn } from "@/lib/utils";
import { typo } from "@/types/next";

export function TypographyBlockquote({className,content}:typo) {
    return (
      <blockquote className={cn("  pl-6 italic",className)}>
       {content}
      </blockquote>
    )
  }
  
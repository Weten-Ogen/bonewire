import { cn } from "@/lib/utils";
import { typo } from "@/types/next";

export function TypographyBlockquote({className,content}:typo) {
    return (
      <blockquote className={cn(" border-l-2 pl-6 italic",className)}>
       {content}
      </blockquote>
    )
  }
  
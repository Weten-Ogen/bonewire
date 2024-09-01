import { cn } from "@/lib/utils";

export function TypographyBlockquote({className,content}:typo) {
    return (
      <blockquote className={cn("mt-6 border-l-2 pl-6 italic",className)}>
       {content}
      </blockquote>
    )
  }
  
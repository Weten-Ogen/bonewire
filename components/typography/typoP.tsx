import { cn } from "@/lib/utils";

export function TypographyP({content,className}:typo) {
    return (
      <p className={cn("leading-7 [&:not(:first-child)]:mt-6",className)}>
        {content}
      </p>
    )
  }
  
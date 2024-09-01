import { cn } from "@/lib/utils";

export function TypographySmall({content,className}:typo) {
    return (
      <small className={cn("text-sm font-medium leading-none",className)}>
        {content}
      </small>
    )
  }
  
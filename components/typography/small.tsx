import { cn } from "@/lib/utils";
import { typo } from "@/types/next";

export function TypographySmall({content,className}:typo
) {
    return (
      <small className={cn("text-sm font-medium leading-none",className)}>
        {content}
      </small>
    )
  }
  
import { cn } from "@/lib/utils";
import { typo } from "@/types/next";

export function TypographyP({content,className}:typo) {
    return (
      <p className={cn("leading-7 ",className)}>
        {content}
      </p>
    )
  }
  
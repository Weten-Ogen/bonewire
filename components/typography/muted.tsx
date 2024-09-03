import { cn } from "@/lib/utils";
import { typo } from "@/types/next";

export function TypographyMuted({content,className}:typo) {
    return (
      <p className={cn("text-sm text-muted-foreground",className)}>
        {content}
        </p>
    )
  }
  
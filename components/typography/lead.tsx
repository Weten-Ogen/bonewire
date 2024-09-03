import { cn } from "@/lib/utils";
import { typo } from "@/types/next";

export function TypographyLead({content,className}:typo) {
    return (
      <p className={cn("text-xl text-muted-foreground",className)}>
        {content}
      </p>
    )
  }
  